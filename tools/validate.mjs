// Prüft trainer/fragen.js auf Konsistenz: node tools/validate.mjs
import { readFileSync } from "node:fs";
import vm from "node:vm";

const src = readFileSync(new URL("../trainer/fragen.js", import.meta.url), "utf8");
const ctx = { window: {} };
vm.runInNewContext(src, ctx);
const { FRAGEN, MODULE } = ctx.window;

const fehler = [];
const ids = new Set();
for (const q of FRAGEN) {
  const p = `[${q.id ?? "?"}]`;
  if (!q.id || ids.has(q.id)) fehler.push(`${p} fehlende oder doppelte id`);
  ids.add(q.id);
  if (!MODULE[q.modul]) fehler.push(`${p} unbekanntes Modul ${q.modul}`);
  if (q.id && !q.id.startsWith(q.modul + "-")) fehler.push(`${p} id passt nicht zum Modul`);
  if (![1, 2, 3].includes(q.level)) fehler.push(`${p} level muss 1–3 sein`);
  for (const f of ["frage", "erklaerung", "ref"]) if (!q[f] || typeof q[f] !== "string") fehler.push(`${p} Feld ${f} fehlt`);
  if (!Array.isArray(q.optionen) || q.optionen.length < 2) fehler.push(`${p} mind. 2 Optionen nötig`);
  if (new Set(q.optionen).size !== q.optionen.length) fehler.push(`${p} doppelte Optionen`);
  if (!Array.isArray(q.korrekt) || !q.korrekt.length) fehler.push(`${p} korrekt leer`);
  else for (const k of q.korrekt) if (!Number.isInteger(k) || k < 0 || k >= q.optionen.length) fehler.push(`${p} korrekt-Index ${k} ungültig`);
  if (q.korrekt.length === q.optionen.length) fehler.push(`${p} alle Optionen richtig – mind. eine Falschantwort nötig`);
  if (q.korrekt.length > 1 && !/Mehrfachauswahl/.test(q.frage)) fehler.push(`${p} Mehrfachauswahl nicht gekennzeichnet`);
}

const proModul = {};
FRAGEN.forEach((q) => (proModul[q.modul] = (proModul[q.modul] || 0) + 1));
for (const m of Object.keys(MODULE)) if (!proModul[m]) fehler.push(`Modul ${m} hat keine Fragen`);

console.log(`${FRAGEN.length} Fragen:`, proModul);
if (fehler.length) { console.error(fehler.join("\n")); process.exit(1); }
console.log("OK – keine Fehler.");

// ---------- Syllabus-Abdeckung ----------
const sylSrc = readFileSync(new URL("../trainer/syllabus.js", import.meta.url), "utf8");
vm.runInNewContext(sylSrc, ctx);
const { STUFEN } = ctx.window;
const MIN_PRO_THEMA = 6;
const sfehler = [];
const zugeordnet = new Set();
for (const [key, st] of Object.entries(STUFEN)) {
  for (const v of st.voraussetzung) if (!STUFEN[v]) sfehler.push(`${key}: unbekannte Voraussetzung ${v}`);
  if (!st.themen) continue;
  const ids = new Set();
  for (const t of st.themen) {
    if (t.fragen.length < MIN_PRO_THEMA) sfehler.push(`${key}/${t.id} „${t.name}“: nur ${t.fragen.length} Fragen (min. ${MIN_PRO_THEMA})`);
    for (const id of t.fragen) {
      if (!ids.has(id) && !FRAGEN.some((q) => q.id === id)) sfehler.push(`${key}/${t.id}: Frage ${id} existiert nicht`);
      ids.add(id); zugeordnet.add(id);
    }
  }
  console.log(`Stufe ${st.kurz}: ${st.themen.length} Themen, ${ids.size} Fragen`);
}
const ohne = FRAGEN.filter((q) => !zugeordnet.has(q.id)).map((q) => q.id);
if (ohne.length) sfehler.push(`Fragen ohne Stufen-Thema: ${ohne.join(", ")}`);
if (sfehler.length) { console.error(sfehler.join("\n")); process.exit(1); }
console.log("Syllabus OK – jede Stufe und jedes Thema abgedeckt.");
