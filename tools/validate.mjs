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
  if (q.korrekt.length > 1 && !/Mehrfachauswahl/.test(q.frage)) fehler.push(`${p} Mehrfachauswahl nicht gekennzeichnet`);
}

const proModul = {};
FRAGEN.forEach((q) => (proModul[q.modul] = (proModul[q.modul] || 0) + 1));
for (const m of Object.keys(MODULE)) if (!proModul[m]) fehler.push(`Modul ${m} hat keine Fragen`);

console.log(`${FRAGEN.length} Fragen:`, proModul);
if (fehler.length) { console.error(fehler.join("\n")); process.exit(1); }
console.log("OK – keine Fehler.");
