// M08 – Dienstleister (2-4)
F("M08-01", 1, "Welche beiden Arten von Service Providern unterscheidet 2-4?", [
  X("Hersteller und Händler", "Hersteller fallen unter 4-1/4-2, Händler gar nicht."),
  R("Integration und Maintenance", "Integratoren bauen, Maintenance-Dienstleister betreuen im Betrieb."),
  X("Cloud- und On-Premise-Anbieter", "Das ist keine 2-4-Einteilung."),
  X("Interne IT und externe Berater", "2-4 unterscheidet nach Tätigkeit, nicht nach Zugehörigkeit."),
], "Viele Anforderungen gelten für beide Arten.", "62443-2-4");

F("M08-02", 1, "Welcher 2-4-Bereich behandelt den Fernzugriff?", [
  X("SP.03", "SP.03 ist Architecture."),
  X("SP.05", "SP.05 ist SIS."),
  R("SP.07", "SP.07 Remote Access."),
  X("SP.11", "SP.11 ist Patch Management."),
], "SP.07 ist in Ausschreibungen besonders wichtig.", "62443-2-4");

F("M08-03", 2, "Womit wird die Erfüllung der 2-4-Anforderungen durch einen Dienstleister bewertet?", [
  X("Security Level (SL)", "SL bewertet technische Fähigkeiten von Systemen/Komponenten."),
  R("Maturity Level (ML)", "Es geht um Prozesse und Fähigkeiten des Dienstleisters."),
  X("Safety Integrity Level (SIL)", "SIL gehört zur funktionalen Sicherheit."),
  X("CVSS-Score", "CVSS bewertet Schwachstellen."),
], "Dienstleister → Reifegrad.", "62443-2-4");

F("M08-04", 2, "Wer entscheidet, welche Anforderungen aus 2-4 in einem konkreten Projekt gelten?", [
  X("Der Dienstleister nach eigenem Ermessen", "Er bietet Fähigkeiten an, entscheidet aber nicht über den Bedarf."),
  R("Der Asset Owner", "2-4 ist ein Katalog, aus dem der Asset Owner wählt."),
  X("Die IEC über ein Pflichtprofil", "Es gibt keine Pflichtauswahl."),
  X("Der Hersteller der Hauptkomponenten", "Der Hersteller ist nicht Vertragspartner für Dienstleistungen."),
], "Anforderungen werden vertraglich vereinbart.", "62443-2-4");

F("M08-05", 2, "Welche Forderungen sind für eine sichere Fernwartung durch einen Dienstleister sinnvoll? (Mehrfachauswahl)", [
  R("Zugang über einen Jump-Host in der DMZ mit MFA", "Kontrollierter, starker Zugangspunkt."),
  R("Zeitlich begrenzte Freischaltung durch den Betreiber", "Kein dauerhaft offener Zugang."),
  X("Dauerhafter VPN-Tunnel direkt auf die Steuerung", "Umgeht Zonengrenzen und Kontrolle."),
  X("Eigener LTE-Router des Dienstleisters im Schaltschrank", "Schafft einen unkontrollierten Zugang an allen Schutzmaßnahmen vorbei."),
], "Außerdem: Sitzungsaufzeichnung und Protokollierung.", "62443-2-4 SP.07; SR 1.13");

F("M08-06", 1, "Welcher 2-4-Bereich betrifft Sicherung und Wiederherstellung?", [
  X("SP.06", "SP.06 ist Configuration Management."),
  X("SP.09", "SP.09 ist Account Management."),
  X("SP.10", "SP.10 ist Malware Protection."),
  R("SP.12", "SP.12 Backup/Restore."),
], "SP.12 ist der letzte der zwölf Bereiche.", "62443-2-4");

F("M08-07", 2, "Welcher 2-4-Bereich umfasst Schulung und Überprüfung des eingesetzten Personals?", [
  R("SP.01 Solution Staffing", "Qualifiziertes, sicherheitsbewusstes Personal."),
  X("SP.02 Assurance", "Assurance betrifft Nachweise und Tests der Lösung."),
  X("SP.08 Event Management", "Das betrifft Logging und Vorfallmeldungen."),
  X("SP.04 Wireless", "Das betrifft Funknetze."),
], "Security beginnt beim Personal des Dienstleisters.", "62443-2-4");
