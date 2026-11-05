// M10 – Zertifizierung & Praxis
F("M10-01", 1, "Welches ISASecure-Programm zertifiziert den Entwicklungsprozess eines Herstellers?", [
  X("CSA", "CSA zertifiziert Komponenten."),
  X("SSA", "SSA zertifiziert Systeme."),
  R("SDLA", "Security Development Lifecycle Assurance (4-1)."),
  X("ICSA", "Das ist kein ISASecure-Programm."),
], "Prozess → SDLA, Komponente → CSA, System → SSA.", "Modul 10");

F("M10-02", 1, "Welches ISASecure-Programm passt zur Zertifizierung einer einzelnen SPS?", [
  R("CSA", "Component Security Assurance (4-1 + 4-2)."),
  X("SSA", "SSA betrifft ganze Systeme."),
  X("SDLA", "SDLA betrifft nur den Entwicklungsprozess."),
  X("Keines – SPSen sind nicht zertifizierbar", "Embedded Devices sind ausdrücklich zertifizierbar."),
], "Einzelnes Produkt = Komponente = CSA.", "Modul 10");

F("M10-03", 2, "Wie stehen IEC 62443 und NIS2 zueinander?", [
  X("62443 ist ein EU-Gesetz mit eigenen Bußgeldern", "62443 ist eine Norm, kein Gesetz."),
  R("NIS2 fordert Stand der Technik, 62443 liefert ihn", "Normen konkretisieren gesetzliche Pflichten."),
  X("NIS2 schreibt 62443 für OT-Betreiber verbindlich vor", "NIS2 nennt keine konkrete Norm verpflichtend."),
  X("Beide Regelwerke stehen in keinem Zusammenhang", "62443 wird häufig zum Nachweis genutzt."),
], "Normen sind freiwillig, werden aber über Gesetze, Verträge und Branchenstandards relevant.", "Modul 10");

F("M10-04", 2, "Welche EU-Verordnung stellt Cybersecurity-Anforderungen an Produkte mit digitalen Elementen und steht inhaltlich 4-1/4-2 nahe?", [
  X("Datenschutz-Grundverordnung", "Die DSGVO schützt personenbezogene Daten."),
  R("Cyber Resilience Act (CRA)", "Secure by Design, Schwachstellenmanagement, Security-Updates."),
  X("eIDAS-Verordnung", "eIDAS regelt elektronische Identifizierung und Vertrauensdienste."),
  X("Data Act", "Der Data Act regelt Datenzugang und -nutzung."),
], "Der CRA trifft vor allem Hersteller – wie 4-1/4-2.", "Modul 10");

F("M10-05", 2, "Wie sollten Prozessdaten vom OT-Historian zur Office-IT gelangen?", [
  X("Office-Clients greifen direkt per SQL auf den OT-Historian zu", "Eingehende Verbindungen aus der IT in die OT sollen vermieden werden."),
  R("Die OT repliziert in die DMZ, die IT liest nur aus der DMZ", "Die DMZ entkoppelt; Verbindungen gehen von der vertrauenswürdigeren Seite aus."),
  X("Täglicher Export per USB-Stick durch die Schichtleitung", "Wechseldatenträger sind ein Infektionsweg und fehleranfällig."),
  X("Über einen Port-Forward der Perimeter-Firewall auf den Historian", "Das öffnet die OT direkt."),
], "Pull aus der DMZ, Push von der OT in die DMZ.", "Modul 10");

F("M10-06", 2, "Wofür eignet sich eine Daten-Diode?", [
  X("Für bidirektionale Fernwartung mit hoher Bandbreite", "Eine Diode lässt keinen Rückkanal zu."),
  R("Für erzwungene Einweg-Übertragung", "Z. B. Monitoringdaten nach außen ohne Rückweg."),
  X("Für die Verschlüsselung von Feldbusverbindungen", "Eine Diode verschlüsselt nicht."),
  X("Für die Lastverteilung zwischen redundanten Firewalls", "Das ist keine Diodenfunktion."),
], "Unidirektional per Hardware – kein Rückkanal möglich.", "Modul 10");

F("M10-07", 3, "Eine DPI-fähige Firewall zwischen Leitstelle und Zelle soll Modbus/TCP absichern. Welche Regel ist im Sinne von Least Privilege am besten?", [
  X("Port 502 von allen Quellen zu allen Zielen erlauben", "Any-any hebelt die Zonengrenze aus."),
  R("Nur SCADA → definierte SPSen, nur nötige Funktionscodes", "Quelle, Ziel, Protokoll und Funktion sind eingeschränkt."),
  X("Modbus vollständig erlauben, aber jeden Zugriff protokollieren", "Logging ersetzt keine Einschränkung."),
  X("Alle Ports zwischen den Zonen öffnen, nur Modbus sperren", "Das kehrt das Prinzip Default-Deny um."),
], "Default-Deny plus Funktionscode-Filter plus Logging (FR 5, FR 6).", "SR 5.2; Modul 10");

F("M10-08", 2, "Welche Management-Protokolle sollten auf OT-Netzwerkgeräten bevorzugt werden? (Mehrfachauswahl)", [
  R("SSH", "Verschlüsselter, authentisierter Zugang."),
  R("SNMPv3 mit authPriv", "Authentisierung und Verschlüsselung für SNMP."),
  X("Telnet", "Klartext – Zugangsdaten sind im Netz mitlesbar."),
  X("SNMPv2c mit geänderter Community", "Auch eine geänderte Community wird im Klartext übertragen."),
  X("HTTP ohne TLS", "Klartext – Passwörter und Konfiguration sind mitlesbar."),
], "Klartext-Management ist ein klassischer Auditbefund.", "SR 4.1, SR 1.5; Modul 10");

F("M10-09", 1, "Welche Aussage zur 62443 ist korrekt?", [
  X("Sie ist ein Gesetz mit Bußgeldern bei Verstößen", "Sie ist eine Norm."),
  R("Sie ist eine Norm, auf die Gesetze verweisen können", "Verbindlich wird sie über Verträge und „Stand der Technik“."),
  X("Sie ist vor allem im US-Markt verbindlich, weil sie von ISA stammt", "IEC 62443 ist international und als EN übernommen."),
  X("Sie gilt nur für Kraftwerke und Netzbetreiber", "Sie gilt branchenübergreifend für IACS."),
], "International, branchenübergreifend, freiwillig – aber oft gefordert.", "Modul 10");

F("M10-10", 2, "Welche Personenzertifikate gehören zum ISA/IEC-62443-Zertifikatsprogramm? (Mehrfachauswahl)", [
  R("Cybersecurity Fundamentals Specialist", "Pflicht-Einstieg."),
  R("Cybersecurity Risk Assessment Specialist", "Assess-Phase."),
  X("Certified Industrial Firewall Architect", "Kein ISA-62443-Zertifikat."),
  X("Certified Safety Integrity Engineer", "Das ist kein Teil des 62443-Programms."),
], "Dazu Design und Maintenance Specialist; alle vier → Expert.", "Modul 10");

F("M10-11", 3, "Ein OT-IDS soll in einem bestehenden Produktionsnetz eingeführt werden. Welche Anbindung ist am risikoärmsten?", [
  X("Inline als Bridge ohne Bypass", "Ein Ausfall des IDS unterbricht dann die Kommunikation."),
  R("Passiv über SPAN-Port oder Netzwerk-TAP", "Keine Beeinflussung des Prozesses."),
  X("Ergänzend stündliche aktive Scans aller Subnetze", "Aktive Scans gefährden empfindliche Geräte."),
  X("Agenten auf allen SPSen installieren", "Auf SPSen lassen sich meist keine Agenten installieren."),
], "Passiv erfassen, Prozess nicht berühren (SR 6.2).", "SR 6.2; Modul 01/10");
