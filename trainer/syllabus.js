// Stufen des ISA/IEC-62443-Zertifikatsprogramms → Themen → Fragen-IDs.
// Themen sind aus den ÖFFENTLICHEN Kursbeschreibungen (isa.org) abgeleitet und
// eigenständig formuliert. Keine Prüfungsinhalte. Aktuelles Syllabus beim Anbieter prüfen.
const R = (prefix, von, bis) => Array.from({ length: bis - von + 1 }, (_, i) => `${prefix}-${String(von + i).padStart(2, "0")}`);

window.STUFEN = {
  fundamentals: {
    name: "Fundamentals Specialist",
    kurz: "Fundamentals",
    hinweis: "Pflicht-Einstieg. Breites Wissen über die gesamte Reihe.",
    voraussetzung: [],
    themen: [
      { id: "F1", name: "OT-Grundlagen & Control-System-Security", fragen: R("M01", 1, 10) },
      { id: "F2", name: "Bedrohungslage, Vorfälle & Awareness", fragen: ["M01-04", ...R("M01", 11, 14)] },
      { id: "F3", name: "Aufbau der Normenreihe & Rollen", fragen: R("M02", 1, 9) },
      { id: "F4", name: "Modelle & Grundkonzepte (Zonen, Conduits, Defense in Depth)", fragen: R("M03", 1, 10) },
      { id: "F5", name: "Security Level & Foundational Requirements", fragen: R("M04", 1, 13) },
      { id: "F6", name: "IACS-Lebenszyklus & Risikobeurteilung (Überblick)", fragen: ["M03-10", ...R("M05", 1, 10)] },
      { id: "F7", name: "Systemanforderungen (3-3)", fragen: R("M06", 1, 13) },
      { id: "F8", name: "Security-Programm des Asset Owners & Patch-Management", fragen: R("M07", 1, 9) },
      { id: "F9", name: "Anforderungen an Service Provider", fragen: R("M08", 1, 7) },
      { id: "F10", name: "Sichere Entwicklung & Komponentenanforderungen", fragen: R("M09", 1, 11) },
      { id: "F11", name: "Verifikation, Profile & Protection Scheme", fragen: [...R("M02", 10, 13), "M10-01", "M10-02", "M10-10"] },
      { id: "F12", name: "Regulatorik & Praxis", fragen: [...R("M10", 3, 9), "M10-11"] },
    ],
  },
  risk: {
    name: "Risk Assessment Specialist",
    kurz: "Risk Assessment",
    hinweis: "Assess-Phase: Ist-Aufnahme, Zonen/Conduits, SL-T, CRS – Greenfield und Brownfield.",
    voraussetzung: ["fundamentals"],
    themen: [
      { id: "R1", name: "System under Consideration & Vorbereitung", fragen: ["M05-01", "M11-01", "M11-09", "M11-16"] },
      { id: "R2", name: "Asset- und Datenfluss-Inventar", fragen: ["M05-08", "M11-17", "M11-18"] },
      { id: "R3", name: "Assessment-Arten (high-level, passiv, aktiv, Pentest) & Brownfield", fragen: ["M01-04", "M11-13", "M11-14", "M11-15"] },
      { id: "R4", name: "High-Level-Risikobeurteilung & Konsequenzen", fragen: ["M05-02", "M05-09", "M11-02", "M11-07", "M11-11"] },
      { id: "R5", name: "Zonen & Conduits bilden", fragen: ["M03-01", "M03-02", "M03-08", "M05-03", "M05-10", "M11-12"] },
      { id: "R6", name: "Bedrohungsszenarien & Eintrittswahrscheinlichkeit", fragen: ["M03-07", "M04-04", "M04-13", "M11-10"] },
      { id: "R7", name: "Ziel-Security-Level (SL-T) ableiten", fragen: ["M04-08", "M04-11", "M05-06", "M11-03", "M11-04", "M11-05"] },
      { id: "R8", name: "Vorhandene Gegenmaßnahmen & Gaps", fragen: ["M03-06", "M04-07", "M07-04", "M11-15"] },
      { id: "R9", name: "CRS, Risikokriterien & Freigabe", fragen: ["M05-04", "M05-05", "M05-07", "M11-08"] },
      { id: "R10", name: "Re-Assessment bei Änderungen", fragen: ["M11-06", "M13-09", "M03-10"] },
    ],
  },
  design: {
    name: "Design Specialist",
    kurz: "Design",
    hinweis: "Gegenmaßnahmen auswählen und umsetzen: Segmentierung, DMZ, Firewalls, Abnahmetests.",
    voraussetzung: ["fundamentals"],
    themen: [
      { id: "D1", name: "Vom SL-T zu Systemanforderungen", fragen: ["M04-09", "M06-11", "M12-01", "M12-19"] },
      { id: "D2", name: "Gap-Analyse SL-C vs. SL-T & Kompensation", fragen: ["M04-07", "M12-02", "M12-03", "M12-10", "M12-12"] },
      { id: "D3", name: "Segmentierung & Zonengrenzen", fragen: ["M05-10", "M06-01", "M06-06", "M06-07", "M12-08"] },
      { id: "D4", name: "DMZ-Architekturen & IT/OT-Übergang", fragen: ["M01-10", "M10-05", "M10-06", "M12-09"] },
      { id: "D5", name: "Firewall-Planung, -Konfiguration & Inbetriebnahme", fragen: ["M06-03", "M10-07", "M12-16", "M12-17", "M12-18"] },
      { id: "D6", name: "Fernzugriff, Wireless & SIS", fragen: ["M06-02", "M08-05", "M12-05", "M12-06", "M12-11"] },
      { id: "D7", name: "Conduit-Spezifikation & Design-Dokumentation", fragen: ["M06-09", "M12-04", "M12-07"] },
      { id: "D8", name: "Abnahmetests CFAT/CSAT", fragen: ["M12-13", "M12-14", "M12-15"] },
      { id: "D9", name: "Komponenten & SL-C (4-2)", fragen: ["M02-08", ...R("M09", 4, 8)] },
      { id: "D10", name: "Härtung & technische Systemanforderungen", fragen: ["M06-05", "M06-08", "M06-13", "M10-08"] },
    ],
  },
  maintenance: {
    name: "Maintenance Specialist",
    kurz: "Maintenance",
    hinweis: "Betrieb: Erkennung, Monitoring, Incident Response, MoC, Backup, Audit.",
    voraussetzung: ["fundamentals"],
    themen: [
      { id: "W1", name: "Netz- und hostbasierte Angriffserkennung", fragen: ["M06-10", "M10-11", "M13-01", "M13-02", "M13-03"] },
      { id: "W2", name: "Security-Event-Monitoring & SIEM", fragen: ["M13-04", "M13-05", "M06-09"] },
      { id: "W3", name: "Incident-Response-Plan", fragen: ["M13-06", "M13-07", "M13-08", "M13-20"] },
      { id: "W4", name: "Management of Change", fragen: ["M11-06", "M13-09", "M13-10"] },
      { id: "W5", name: "Backup & Restore", fragen: ["M04-10", "M06-04", "M08-06", "M13-11", "M13-12", "M13-13"] },
      { id: "W6", name: "Patch- & Schwachstellenmanagement, Malware-Schutz", fragen: ["M07-04", "M07-05", "M07-07", "M07-09", "M13-14", "M13-15"] },
      { id: "W7", name: "Konten & Zugriffe im Betrieb", fragen: ["M06-13", "M08-05", "M13-16"] },
      { id: "W8", name: "Security-Audit & kontinuierliche Verbesserung", fragen: ["M07-02", "M07-03", "M13-17", "M13-18", "M13-19"] },
      { id: "W9", name: "Dienstleister im Betrieb (2-4)", fragen: ["M08-01", "M08-02", "M08-03", "M08-04", "M08-06"] },
    ],
  },
  expert: {
    name: "Expert",
    kurz: "Expert",
    hinweis: "Keine eigene Prüfung: wird mit allen vier Specialist-Zertifikaten erreicht. Hier: Gesamtsimulation über alle Stufen.",
    voraussetzung: ["fundamentals", "risk", "design", "maintenance"],
    themen: null, // = Vereinigung aller Stufen + alle Fragen
  },
};
