// Stufen des ISA/IEC-62443-Zertifikatsprogramms → Themen → Fragen-IDs.
// Themen sind aus den ÖFFENTLICHEN Kursbeschreibungen (isa.org) abgeleitet und
// eigenständig formuliert. Keine Prüfungsinhalte. Aktuelles Syllabus beim Anbieter prüfen.
const IDS = (prefix, von, bis) => Array.from({ length: bis - von + 1 }, (_, i) => `${prefix}-${String(von + i).padStart(2, "0")}`);

// Prüfungspool: Diese Fragen erscheinen NUR in Simulationen (nie in Lernen/Üben).
// So misst die Simulation Transfer auf unbekannte Fragen statt Wiedererkennen.
window.PRUEFUNGSPOOL = ["M01-07", "M01-15", "M01-16", "M01-17", "M01-18", "M02-13", "M02-14", "M02-15", "M03-11", "M03-12", "M03-16", "M04-14", "M04-15", "M04-16", "M04-18", "M05-11", "M05-12", "M06-14", "M06-15", "M07-10", "M07-11", "M07-17", "M08-08", "M09-08", "M09-12", "M09-13", "M10-12", "M10-18", "M11-28", "M11-36", "M11-37", "M11-38", "M11-39", "M11-40", "M11-41", "M11-42", "M11-43", "M11-44", "M11-45", "M11-46", "M11-47", "M11-48", "M11-49", "M11-50", "M11-51", "M11-52", "M11-53", "M11-54", "M11-55", "M11-59", "M11-63", "M12-21", "M12-34", "M12-36", "M12-37", "M12-38", "M12-39", "M12-40", "M12-41", "M12-42", "M12-43", "M12-44", "M12-45", "M12-46", "M12-47", "M12-48", "M12-49", "M12-50", "M12-51", "M12-52", "M12-53", "M12-54", "M12-55", "M12-62", "M12-64", "M12-66", "M13-34", "M13-35", "M13-36", "M13-37", "M13-38", "M13-39", "M13-40", "M13-41", "M13-42", "M13-43", "M13-44", "M13-45", "M13-46", "M13-47", "M13-48", "M13-49", "M13-50", "M13-51", "M13-52", "M13-53", "M13-54", "M13-58", "M13-60", "M13-62", "M13-64", "M15-13", "M15-14", "M15-18", "M15-20"];

window.STUFEN = {
  fundamentals: {
    name: "1 · Foundation – Cybersecurity Fundamentals Specialist",
    kurz: "Foundation",
    hinweis: "Stufe 1 und Pflicht-Einstieg (Kurs IC32). Breites Wissen über die gesamte Normenreihe.",
    voraussetzung: [],
    themen: [
      { id: "F1", name: "OT-Grundlagen & Control-System-Security", fragen: [...IDS("M01", 1, 10), "M01-21"] },
      { id: "F2", name: "Bedrohungslage, Vorfälle & Awareness", fragen: ["M01-04", ...IDS("M01", 11, 14), "M01-15", "M01-19", "M01-20"] },
      { id: "F3", name: "Aufbau der Normenreihe & Rollen", fragen: [...IDS("M02", 1, 9), "M02-14", "M02-15", "M02-16", "M02-17", "M02-18"] },
      { id: "F4", name: "Modelle & Grundkonzepte (Zonen, Conduits, Defense in Depth)", fragen: [...IDS("M03", 1, 10), "M01-17", "M03-11", "M03-12", "M03-13", "M03-14", "M03-15", "M03-16"] },
      { id: "F5", name: "Security Level & Foundational Requirements", fragen: [...IDS("M04", 1, 13), "M04-14", "M04-15", "M04-16", "M04-17", "M04-18", "M04-19", "M04-20"] },
      { id: "F6", name: "IACS-Lebenszyklus & Risikobeurteilung (Überblick)", fragen: ["M03-10", ...IDS("M05", 1, 10), "M05-11", "M05-12", "M05-13", "M05-14", "M05-15", "M05-16"] },
      { id: "F7", name: "Systemanforderungen (3-3)", fragen: [...IDS("M06", 1, 13), "M06-14", "M06-15", "M06-16", "M06-17", "M06-18", "M06-19"] },
      { id: "F8", name: "Security-Programm des Asset Owners & Patch-Management", fragen: [...IDS("M07", 1, 9), "M07-10", "M07-11", "M07-12", "M07-13", "M07-14", "M07-15", "M07-16", "M07-17"] },
      { id: "F9", name: "Anforderungen an Service Provider", fragen: [...IDS("M08", 1, 7), "M08-08", "M08-09", "M08-10", "M08-11", "M08-12", "M08-13", "M08-14", "M08-15"] },
      { id: "F10", name: "Sichere Entwicklung & Komponentenanforderungen", fragen: [...IDS("M09", 1, 11), "M09-12", "M09-13", "M09-14", "M09-15", "M09-16", "M09-17", "M09-18"] },
      { id: "F11", name: "Verifikation, Profile & Protection Scheme", fragen: [...IDS("M02", 10, 13), "M10-01", "M10-02", "M10-10", "M02-19", "M02-20"] },
      { id: "F12", name: "Regulatorik & Praxis", fragen: [...IDS("M10", 3, 9), "M10-11", "M01-16", "M10-12", "M01-18", "M10-13", "M10-14", "M10-15", "M10-16", "M10-17", "M10-18", "M10-19"] },
    ],
  },
  risk: {
    name: "2 · Cybersecurity Risk Assessment Specialist",
    kurz: "Risk Assessment",
    hinweis: "Stufe 2 (Kurs IC33). Voraussetzung: Foundation. Assess-Phase: Ist-Aufnahme, Zonen/Conduits, SL-T, CRS.",
    voraussetzung: ["fundamentals"],
    themen: [
      { id: "R1", name: "System under Consideration & Vorbereitung", fragen: ["M05-01", "M11-01", "M11-09", "M11-16", "M11-19", "M11-20", "M11-36", "M11-55", "M11-60", "M11-62"] },
      { id: "R2", name: "Asset- und Datenfluss-Inventar", fragen: ["M05-08", "M11-17", "M11-18", "M11-21", "M11-22", "M11-23", "M11-37", "M11-48", "M11-58"] },
      { id: "R3", name: "Assessment-Arten (high-level, passiv, aktiv, Pentest) & Brownfield", fragen: ["M01-04", "M11-13", "M11-14", "M11-15", "M11-24", "M11-25", "M11-47", "M11-59", "M11-65"] },
      { id: "R4", name: "High-Level-Risikobeurteilung & Konsequenzen", fragen: ["M05-02", "M05-09", "M11-02", "M11-07", "M11-11", "M11-26", "M11-38", "M11-39", "M11-49", "M11-66"] },
      { id: "R5", name: "Zonen & Conduits bilden", fragen: ["M03-01", "M03-02", "M03-08", "M05-03", "M05-10", "M11-12", "M11-44", "M05-16", "M11-63"] },
      { id: "R6", name: "Bedrohungsszenarien & Eintrittswahrscheinlichkeit", fragen: ["M03-07", "M04-04", "M04-13", "M11-10", "M11-27", "M11-28", "M11-50", "M11-54", "M11-56", "M11-57", "M11-61"] },
      { id: "R7", name: "Ziel-Security-Level (SL-T) ableiten", fragen: ["M04-08", "M04-11", "M05-06", "M11-03", "M11-04", "M11-05", "M11-40", "M11-67", "M11-68"] },
      { id: "R8", name: "Vorhandene Gegenmaßnahmen & Gaps", fragen: ["M03-06", "M04-07", "M07-04", "M11-15", "M11-29", "M11-30", "M11-41", "M11-43", "M11-52", "M11-69"] },
      { id: "R9", name: "CRS, Risikokriterien & Freigabe", fragen: ["M05-04", "M05-05", "M05-07", "M11-08", "M11-31", "M11-32", "M11-42", "M11-46", "M11-51", "M11-53", "M05-13", "M11-64"] },
      { id: "R10", name: "Re-Assessment bei Änderungen", fragen: ["M11-06", "M13-09", "M03-10", "M11-33", "M11-34", "M11-35", "M11-45", "M11-70"] },
    ],
  },
  design: {
    name: "3 · Cybersecurity Design Specialist",
    kurz: "Design",
    hinweis: "Stufe 3 (Kurs IC34). Voraussetzung: Foundation. Gegenmaßnahmen auswählen und umsetzen: Segmentierung, DMZ, Firewalls, Abnahmetests.",
    voraussetzung: ["fundamentals"],
    themen: [
      { id: "D1", name: "Vom SL-T zu Systemanforderungen", fragen: ["M04-09", "M06-11", "M12-01", "M12-19", "M12-20", "M12-21", "M12-56", "M12-57", "M04-17", "M06-17"] },
      { id: "D2", name: "Gap-Analyse SL-C vs. SL-T & Kompensation", fragen: ["M04-07", "M12-02", "M12-03", "M12-10", "M12-12", "M12-22", "M12-36", "M12-41", "M12-54", "M12-64"] },
      { id: "D3", name: "Segmentierung & Zonengrenzen", fragen: ["M05-10", "M06-01", "M06-06", "M06-07", "M12-08", "M12-23", "M12-37", "M12-50", "M12-61", "M12-63", "M12-68"] },
      { id: "D4", name: "DMZ-Architekturen & IT/OT-Übergang", fragen: ["M01-10", "M10-05", "M10-06", "M12-09", "M12-24", "M12-25", "M12-38", "M12-39", "M12-52", "M12-62"] },
      { id: "D5", name: "Firewall-Planung, -Konfiguration & Inbetriebnahme", fragen: ["M06-03", "M10-07", "M12-16", "M12-17", "M12-18", "M12-26", "M12-42"] },
      { id: "D6", name: "Fernzugriff, Wireless & SIS", fragen: ["M06-02", "M08-05", "M12-05", "M12-06", "M12-11", "M12-27", "M12-40", "M12-44", "M12-46", "M12-53", "M12-55", "M08-14"] },
      { id: "D7", name: "Conduit-Spezifikation & Design-Dokumentation", fragen: ["M06-09", "M12-04", "M12-07", "M12-28", "M12-29", "M12-30", "M12-45", "M12-60", "M12-65"] },
      { id: "D8", name: "Abnahmetests CFAT/CSAT", fragen: ["M12-13", "M12-14", "M12-15", "M12-31", "M12-32", "M12-33", "M12-43", "M12-47", "M12-49", "M12-66"] },
      { id: "D9", name: "Komponenten & SL-C (4-2)", fragen: ["M02-08", ...IDS("M09", 4, 8), "M12-51", "M09-14", "M09-15", "M09-17"] },
      { id: "D10", name: "Härtung & technische Systemanforderungen", fragen: ["M06-05", "M06-08", "M06-13", "M10-08", "M12-34", "M12-35", "M12-48", "M12-58", "M12-59", "M03-13", "M12-67"] },
    ],
  },
  maintenance: {
    name: "4 · Cybersecurity Maintenance Specialist",
    kurz: "Maintenance",
    hinweis: "Stufe 4 (Kurs IC37). Voraussetzung: Foundation. Betrieb: Erkennung, Monitoring, Incident Response, MoC, Backup, Audit.",
    voraussetzung: ["fundamentals"],
    themen: [
      { id: "W1", name: "Netz- und hostbasierte Angriffserkennung", fragen: ["M06-10", "M10-11", "M13-01", "M13-02", "M13-03", "M13-21", "M13-35", "M13-52"] },
      { id: "W2", name: "Security-Event-Monitoring & SIEM", fragen: ["M13-04", "M13-05", "M06-09", "M13-22", "M13-23", "M13-24", "M13-36", "M13-47", "M13-56", "M13-57"] },
      { id: "W3", name: "Incident-Response-Plan", fragen: ["M13-06", "M13-07", "M13-08", "M13-20", "M13-25", "M13-26", "M13-38", "M13-43", "M13-49", "M13-55", "M13-58", "M13-61", "M13-63", "M13-64"] },
      { id: "W4", name: "Management of Change", fragen: ["M11-06", "M13-09", "M13-10", "M13-27", "M13-28", "M13-29", "M13-42", "M13-46", "M13-50"] },
      { id: "W5", name: "Backup & Restore", fragen: ["M04-10", "M06-04", "M08-06", "M13-11", "M13-12", "M13-13", "M13-37", "M13-48", "M06-16", "M13-59", "M11-69"] },
      { id: "W6", name: "Patch- & Schwachstellenmanagement, Malware-Schutz", fragen: ["M07-04", "M07-05", "M07-07", "M07-09", "M13-14", "M13-15", "M13-39", "M13-53", "M08-12", "M07-16", "M09-18", "M13-64"] },
      { id: "W7", name: "Konten & Zugriffe im Betrieb", fragen: ["M06-13", "M08-05", "M13-16", "M13-30", "M13-31", "M13-32", "M13-40", "M13-45", "M13-54", "M13-60", "M13-62"] },
      { id: "W8", name: "Security-Audit & kontinuierliche Verbesserung", fragen: ["M07-02", "M07-03", "M13-17", "M13-18", "M13-19", "M13-33", "M13-41", "M13-44", "M13-51", "M13-65"] },
      { id: "W9", name: "Dienstleister im Betrieb (2-4)", fragen: ["M08-01", "M08-02", "M08-03", "M08-04", "M08-06", "M13-34", "M08-09", "M08-10", "M08-11", "M08-13", "M08-15"] },
    ],
  },
  expert: {
    name: "5 · ISA/IEC 62443 Cybersecurity Expert",
    kurz: "Expert",
    hinweis: "Keine eigene Prüfung: wird mit allen vier Specialist-Zertifikaten (1–4) verliehen. Hier: Gesamtsimulation über alle Stufen.",
    voraussetzung: ["fundamentals", "risk", "design", "maintenance"],
    themen: null, // = Vereinigung aller Stufen + alle Fragen
  },
  bahn: {
    name: "Ergänzung · Bahn: EN 50159 (kein ISA-Zertifikat)",
    kurz: "Bahn EN 50159",
    hinweis: "Kein Bestandteil des ISA-Programms. Sichere Kommunikation in Bahnsystemen, ergänzt 62443 zusammen mit CLC/TS 50701 und IEC 63452.",
    voraussetzung: ["fundamentals"],
    themen: [
      { id: "B1", name: "Einordnung, Black Channel & Kategorien", fragen: ["M15-01", "M15-02", "M15-03", "M15-04", "M15-09", "M15-11", "M15-13", "M15-16", "M15-18", "M15-19", "M15-20"] },
      { id: "B2", name: "Bedrohungen & Abwehrmaßnahmen", fragen: ["M15-05", "M15-06", "M15-07", "M15-08", "M15-10", "M15-12", "M15-14", "M15-15", "M15-17"] },
    ],
  },
};
