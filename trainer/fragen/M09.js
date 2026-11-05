// M09 – Produkt (4-1, 4-2)
F("M09-01", 1, "Wie viele Practices definiert 62443-4-1?", [
  X("4", "Zu wenig – allein Design, Implementierung, Test und Updates sind schon vier."),
  X("7", "Das ist die Zahl der FRs."),
  R("8", "SM, SR, SD, SI, SVV, DM, SUM, SG."),
  X("12", "Das ist die Zahl der Bereiche in 2-4."),
], "Vom Management über Entwurf und Test bis zu Updates und Kundenanleitung.", "62443-4-1");

F("M09-02", 2, "Welche 4-1-Practice behandelt den Umgang mit gemeldeten Schwachstellen (PSIRT)?", [
  X("SVV", "SVV testet vor der Auslieferung."),
  R("DM", "Management of security-related issues."),
  X("SUM", "SUM stellt Updates bereit – nach der Behandlung in DM."),
  X("SG", "SG liefert Anleitungen für Kunden."),
], "DM = melden, bewerten, beheben, kommunizieren.", "62443-4-1, DM");

F("M09-03", 2, "Welche 4-1-Practice umfasst Fuzzing und Penetrationstests?", [
  X("SD", "SD betrifft das sichere Design."),
  X("SI", "SI betrifft sichere Implementierung, z. B. Code-Reviews."),
  R("SVV", "Security Verification and Validation Testing."),
  X("SM", "SM ist Security Management."),
], "Testen = SVV.", "62443-4-1, SVV");

F("M09-04", 1, "Welche vier Komponententypen unterscheidet 62443-4-2?", [
  X("Sensor, Aktor, Steuerung, Leitstand", "Das ist eine funktionale, keine 4-2-Einteilung."),
  R("SAR, EDR, HDR und NDR", "SAR, EDR, HDR, NDR."),
  X("Client, Server, Cloud und Edge", "Das ist eine IT-Architektursicht."),
  X("Level 0, Level 1, Level 2 und Level 3", "Das sind Purdue-Ebenen."),
], "Eselsbrücke SEHN: Software, Embedded, Host, Network.", "62443-4-2");

F("M09-05", 1, "Welchem 4-2-Komponententyp ordnet man eine Industrie-Firewall zu?", [
  X("SAR", "SAR sind Softwareanwendungen."),
  X("EDR", "EDR sind eingebettete Geräte wie SPSen."),
  X("HDR", "HDR sind Server und Workstations."),
  R("NDR", "Switches, Router, Firewalls, WLAN-APs."),
], "Netzwerkgeräte = NDR.", "62443-4-2, NDR");

F("M09-06", 2, "Welchem 4-2-Komponententyp ordnet man eine SPS zu?", [
  X("SAR", "Die SPS-Firmware ist keine eigenständige Anwendung im Sinne von SAR."),
  R("EDR", "Embedded Device: dedizierte Geräte mit eingebetteter Software."),
  X("HDR", "HDR sind Universalrechner mit Betriebssystem."),
  X("NDR", "Eine SPS ist kein Netzwerkgerät, auch wenn sie Ports hat."),
], "SPS, Feldgerät, Safety-Controller = EDR.", "62443-4-2, EDR");

F("M09-07", 2, "Was bedeutet CCSC in 62443-4-2?", [
  R("Common Component Security Constraints", "Allgemeine Rahmenbedingungen für alle Komponenten."),
  X("Certified Component Security Class", "Es gibt keine solche Klasse."),
  X("Central Control System Configuration", "Das ist kein 4-2-Begriff."),
  X("Critical Cyber Security Controls", "Das erinnert an andere Kataloge, nicht an 4-2."),
], "Z. B. Unterstützung essenzieller Funktionen, kompensierende Maßnahmen, Entwicklung nach 4-1.", "62443-4-2");

F("M09-08", 3, "Welche Aussage zur Bewertung von 4-1 und 4-2 ist korrekt?", [
  X("4-1 wird mit SL bewertet, 4-2 mit ML", "Genau vertauscht."),
  R("4-1 wird mit ML bewertet, 4-2 mit SL-C", "Prozess → Reifegrad, Technik → Security Level."),
  X("Beide werden mit einem Safety Integrity Level bewertet", "SIL gehört zur funktionalen Sicherheit."),
  X("Beide richten sich in erster Linie an Asset Owner", "Beide richten sich an Hersteller."),
], "Prozess = ML, Produkt = SL-C.", "Modul 09");

F("M09-09", 2, "Welche 4-1-Practice stellt sicher, dass Kunden eine Härtungs- und Betriebsanleitung erhalten?", [
  R("SG – Security Guidelines", "Dokumentation zu Integration, Konfiguration, Betrieb, Entsorgung."),
  X("SD – Secure by Design", "SD betrifft das Design, nicht die Kundendoku."),
  X("SR – Security Requirements", "SR spezifiziert Anforderungen."),
  X("SUM – Security Update Management", "SUM betrifft Updates."),
], "Ohne SG kann der Kunde das SL-C nicht erreichen.", "62443-4-1, SG");

F("M09-10", 3, "Ein Hersteller erstellt ein Threat Model für ein neues Produkt. Zu welcher 4-1-Practice gehört das primär?", [
  R("SR bzw. SD (Anforderungen und Design)", "Bedrohungsmodelle fließen in Anforderungen und Design ein."),
  X("SUM (Update-Management)", "Updates kommen erst nach der Auslieferung."),
  X("DM (Umgang mit Schwachstellen)", "DM reagiert auf gemeldete Probleme."),
  X("SG (Kundenleitfäden)", "SG dokumentiert für den Kunden."),
], "Threat Modeling gehört an den Anfang der Entwicklung.", "62443-4-1, SR/SD");

F("M09-11", 2, "Wie heißen die Anforderungen in 62443-4-2 (analog zu SR in 3-3)?", [
  R("CR – Component Requirements", "CR x.y, gegliedert nach den 7 FRs."),
  X("PR – Product Requirements", "Plausibel, aber nicht der Normbegriff."),
  X("DR – Device Requirements", "Device Requirements gibt es typspezifisch (EDR, HDR, NDR) – die Basis heißt CR."),
  X("TR – Technical Requirements", "TR steht für Technical Report."),
], "CR plus typspezifische SAR/EDR/HDR/NDR.", "62443-4-2");
