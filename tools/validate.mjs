// Prüft Fragenpool und Syllabus auf Konsistenz und didaktische Qualität: node tools/validate.mjs
import { readFileSync, readdirSync } from "node:fs";
import vm from "node:vm";

const base = new URL("../trainer/", import.meta.url);
const ctx = vm.createContext({ window: {} });
const lade = (rel) => vm.runInContext(readFileSync(new URL(rel, base), "utf8").replace(/\b([FRX])\(/g, "window.$1("), ctx);
lade("fragen.js");
const dateien = readdirSync(new URL("fragen/", base)).filter((f) => f.endsWith(".js")).sort();
dateien.forEach((f) => lade("fragen/" + f));
vm.runInContext(readFileSync(new URL("syllabus.js", base), "utf8"), ctx);
const { FRAGEN, MODULE, STUFEN, PRUEFUNGSPOOL } = ctx.window;

// index.html muss alle Fragendateien laden
const html = readFileSync(new URL("index.html", base), "utf8");
const fehler = [];
dateien.forEach((f) => { if (!html.includes(`fragen/${f}`)) fehler.push(`index.html lädt fragen/${f} nicht`); });

// ---------- Einzelfragen ----------
const ids = new Set();
for (const q of FRAGEN) {
  const p = `[${q.id ?? "?"}]`;
  if (!q.id || ids.has(q.id)) fehler.push(`${p} fehlende oder doppelte id`);
  ids.add(q.id);
  if (!MODULE[q.modul]) fehler.push(`${p} unbekanntes Modul ${q.modul}`);
  if (![1, 2, 3].includes(q.level)) fehler.push(`${p} level muss 1–3 sein`);
  for (const f of ["frage", "erklaerung", "ref"]) if (!q[f] || typeof q[f] !== "string") fehler.push(`${p} Feld ${f} fehlt`);
  if (q.optionen.length < 4) fehler.push(`${p} mind. 4 Optionen nötig`);
  if (new Set(q.optionen).size !== q.optionen.length) fehler.push(`${p} doppelte Optionen`);
  if (!q.korrekt.length) fehler.push(`${p} keine richtige Option`);
  if (q.korrekt.length === q.optionen.length) fehler.push(`${p} alle Optionen richtig – mind. eine Falschantwort nötig`);
  if (q.korrekt.length > 1 && !/Mehrfachauswahl/.test(q.frage)) fehler.push(`${p} Mehrfachauswahl nicht gekennzeichnet`);
  if (q.korrekt.length === 1 && /Mehrfachauswahl/.test(q.frage)) fehler.push(`${p} als Mehrfachauswahl markiert, aber nur eine richtige Option`);
  q.feedback.forEach((f, i) => { if (!f || f.length < 12) fehler.push(`${p} Option ${i + 1}: Feedback fehlt oder zu kurz`); });
}

// ---------- Didaktische Heuristiken (über den ganzen Pool) ----------
const warn = [];
const single = FRAGEN.filter((q) => q.korrekt.length === 1);
const laengste = single.filter((q) => { const L = q.optionen.map((o) => o.length); const m = Math.max(...L); return L[q.korrekt[0]] === m && L.filter((x) => x === m).length === 1; }).length;
const anteilLang = Math.round((100 * laengste) / single.length);
if (anteilLang > 40) fehler.push(`Längen-Hinweis: richtige Antwort ist in ${anteilLang} % der Single-Choice-Fragen die längste (max. 40 %)`);
const scherz = /Kantine|Kaffee|Lieblingsfarbe|Bürostuhl|Glaser|Kabelfarbe|Druckerstau|Meteorit|Bildschirmschoner|Gehaltsstufe|weiß oder grau/i;
FRAGEN.forEach((q) => q.optionen.forEach((o, i) => { if (!q.korrekt.includes(i) && scherz.test(o)) fehler.push(`[${q.id}] offensichtlicher Scherz-Distraktor: „${o}“`); }));
const abs = /\b(immer|nie|niemals|ausschließlich|verboten|gar nicht|grundsätzlich)\b/i;
let dA = 0, dN = 0, rA = 0, rN = 0;
FRAGEN.forEach((q) => q.optionen.forEach((o, i) => { if (q.korrekt.includes(i)) { rN++; if (abs.test(o)) rA++; } else { dN++; if (abs.test(o)) dA++; } }));
const absD = Math.round((100 * dA) / dN);
if (absD > 10) fehler.push(`Absolute Wörter in ${absD} % der Falschantworten (max. 10 %) – verraten die Lösung`);
const multi = FRAGEN.filter((q) => q.korrekt.length > 1);
const muster = {}; multi.forEach((q) => { const k = `${q.korrekt.length}/${q.optionen.length}`; muster[k] = (muster[k] || 0) + 1; });
const dominant = Math.max(...Object.values(muster));
if (multi.length && dominant / multi.length > 0.7) warn.push(`Mehrfachauswahl wenig variiert: ${JSON.stringify(muster)}`);

// ---------- Syllabus & Prüfungspool ----------
const MIN_LERN = 5, MIN_POOL = 1;
const pool = new Set(PRUEFUNGSPOOL);
PRUEFUNGSPOOL.forEach((id) => { if (!ids.has(id)) fehler.push(`Prüfungspool: Frage ${id} existiert nicht`); });
const zugeordnet = new Set();
const bericht = [];
for (const [key, st] of Object.entries(STUFEN)) {
  for (const v of st.voraussetzung) if (!STUFEN[v]) fehler.push(`${key}: unbekannte Voraussetzung ${v}`);
  if (!st.themen) continue;
  const alle = new Set();
  for (const t of st.themen) {
    const lern = t.fragen.filter((id) => !pool.has(id)), pr = t.fragen.filter((id) => pool.has(id));
    if (lern.length < MIN_LERN) fehler.push(`${key}/${t.id} „${t.name}“: nur ${lern.length} Lernfragen (min. ${MIN_LERN})`);
    if (pr.length < MIN_POOL) fehler.push(`${key}/${t.id} „${t.name}“: keine Frage im Prüfungspool`);
    for (const id of t.fragen) { if (!ids.has(id)) fehler.push(`${key}/${t.id}: Frage ${id} existiert nicht`); alle.add(id); zugeordnet.add(id); }
  }
  const qs = [...alle].map((id) => FRAGEN.find((q) => q.id === id)).filter(Boolean);
  const l3 = qs.filter((q) => q.level === 3).length;
  bericht.push(`${st.kurz.padEnd(16)} ${st.themen.length} Themen · ${qs.length} Fragen (${[...alle].filter((i) => pool.has(i)).length} Prüfungspool) · Level 3: ${Math.round((100 * l3) / qs.length)} %`);
}
const ohne = FRAGEN.filter((q) => !zugeordnet.has(q.id)).map((q) => q.id);
if (ohne.length) fehler.push(`Fragen ohne Stufen-Thema: ${ohne.join(", ")}`);

const proModul = {}; FRAGEN.forEach((q) => (proModul[q.modul] = (proModul[q.modul] || 0) + 1));
console.log(`${FRAGEN.length} Fragen in ${dateien.length} Dateien:`, JSON.stringify(proModul));
bericht.forEach((b) => console.log("  " + b));
console.log(`Didaktik: richtige = längste ${anteilLang} % · absolute Wörter Distraktoren ${absD} % / richtige ${Math.round((100 * rA) / rN)} % · Mehrfachauswahl ${JSON.stringify(muster)}`);
warn.forEach((w) => console.warn("WARNUNG: " + w));
if (fehler.length) { console.error(fehler.join("\n")); process.exit(1); }
console.log("OK – Pool, Syllabus, Prüfungspool und Didaktik-Regeln erfüllt.");
