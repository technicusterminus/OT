// Fragenpool – alle Fragen sind eigene Formulierungen (siehe RECHTLICHES.md).
// Die Fragen liegen pro Modul in trainer/fragen/Mxx.js.
//
// Format:  F(id, level, frage, [R(text, feedback), X(text, feedback), ...], erklaerung, ref, {pruefung})
//   R(...) = richtige Option, X(...) = falsche Option; feedback erklärt, WARUM die Option richtig/falsch ist.
//   level: 1 = Wissen, 2 = Verstehen/Anwenden, 3 = Analysieren/Bewerten (Szenario)
//   Mehrfachauswahl: mehrere R(...) und „(Mehrfachauswahl)“ im Fragetext.
window.MODULE = {
  M01: "OT-Grundlagen & IT vs. OT",
  M02: "Normenreihe & Rollen",
  M03: "Grundkonzepte (1-1)",
  M04: "Security Level & FRs",
  M05: "Risikobeurteilung (3-2)",
  M06: "Systemanforderungen (3-3)",
  M07: "Betreiber (2-1, 2-3)",
  M08: "Dienstleister (2-4)",
  M09: "Produkt (4-1, 4-2)",
  M10: "Zertifizierung & Praxis",
  M11: "Risk Assessment Vertiefung",
  M12: "Design Vertiefung",
  M13: "Betrieb & Wartung",
  M15: "Ergänzung Bahn: EN 50159",
};

window.FRAGEN = [];
window.R = (text, feedback) => ({ text, richtig: true, feedback });
window.X = (text, feedback) => ({ text, richtig: false, feedback });
window.F = (id, level, frage, opts, erklaerung, ref) => {
  window.FRAGEN.push({
    id, modul: id.slice(0, 3), level, frage,
    optionen: opts.map((o) => o.text),
    feedback: opts.map((o) => o.feedback),
    korrekt: opts.map((o, i) => (o.richtig ? i : -1)).filter((i) => i >= 0),
    erklaerung, ref,
  });
};
