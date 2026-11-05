// Paket 11: M07 (Betreiber), M09 (Produkt), M10 (Praxis)
F("M07-15", 3, "Ein Betreiber führt ein ISMS nach ISO/IEC 27001 und will die OT einbeziehen. Was ist der sinnvollste Weg?", [
  X("Die OT einfach in den bestehenden IT-Geltungsbereich übernehmen", "OT-Besonderheiten würden fehlen."),
  R("OT-Anforderungen aus 2-1 ins ISMS integrieren", "Ein Managementsystem, OT-gerecht ergänzt."),
  X("Ein zweites, völlig getrenntes Managementsystem aufbauen", "Doppelarbeit ohne Not."),
  X("Die OT vom ISMS ausnehmen", "Dann fehlt die Steuerung der OT-Risiken."),
], "ISMS + OT-Ergänzung ist in der Praxis üblich.", "Modul 07");

F("M07-16", 2, "Was sollte ein Asset Owner vor dem Einspielen eines OT-Patches auf jeden Fall haben?", [
  R("Ein aktuelles, geprüftes Backup des betroffenen Systems", "Rückweg bei Problemen."),
  X("Eine neue Hardware auf Vorrat", "Hilfreich, aber nicht das Wichtigste."),
  X("Eine Pressemitteilung", "Nicht relevant."),
  X("Die Zustimmung aller Mitarbeitenden", "Freigabe erfolgt über MoC, nicht durch alle."),
], "Kein Patch ohne Rückfallebene.", "62443-2-3");

F("M07-17", 3, "Ein Betreiber kann nach einer Übernahme nicht sagen, welche Steuerungen welche Firmware haben. Welches Element des Security-Programms fehlt zuerst?", [
  X("Ein Pentest", "Ohne Inventar ist ein Pentest blind."),
  R("Asset- und Konfigurationsmanagement", "Grundlage für Patch- und Schwachstellenmanagement."),
  X("Ein neues SIEM", "Ohne Inventar fehlt die Zuordnung."),
  X("Eine Cyberversicherung", "Ersetzt keine Grundlagen."),
], "Kennen vor Schützen.", "62443-2-1");

F("M09-16", 2, "Was beschreibt der „Produkt-Sicherheitskontext“ in 4-1 (Practice SR)?", [
  X("Die Zielbranchen aus dem Marketing", "Marketing beschreibt keine Sicherheitsannahmen."),
  R("Die angenommene Einsatzumgebung", "Grundlage für Anforderungen und Kundenhinweise."),
  X("Die Liste der unterstützten Feldbusse", "Funktionsumfang, keine Annahme über die Einsatzumgebung."),
  X("Die Garantiebedingungen des Herstellers", "Vertragliches, keine Sicherheitsannahme."),
], "Sicherheit gilt immer für einen definierten Kontext.", "62443-4-1");

F("M09-17", 3, "Ein Integrator setzt ein Produkt außerhalb des vom Hersteller beschriebenen Sicherheitskontexts ein. Was folgt daraus?", [
  X("Das SL-C gilt unverändert", "Es gilt nur im vorgesehenen Kontext."),
  R("Die SL-C-Annahmen gelten nicht mehr", "Kontextabweichung = Risiko."),
  X("Der Hersteller haftet automatisch", "Keine automatische Haftung."),
  X("Das Produkt muss neu zertifiziert werden", "Nicht zwingend, aber das Risiko ist neu zu bewerten."),
], "SL-C ist an Annahmen gebunden.", "62443-4-1/4-2");

F("M09-18", 2, "Was ist eine SBOM, und warum hilft sie dem Betreiber?", [
  X("Ein Security-Budget-Plan", "Gemeint ist etwas anderes."),
  R("Eine Software-Stückliste für Schwachstellenabgleich", "Software Bill of Materials."),
  X("Eine Firewall-Regelvorlage", "Nicht gemeint."),
  X("Ein Zertifikat nach 4-2", "Keine Zertifizierung."),
], "SBOMs beschleunigen das Schwachstellenmanagement (auch CRA-relevant).", "Modul 09/13");

F("M10-16", 3, "Ein Hersteller fragt, wie er sich auf den CRA vorbereiten kann. Welche 62443-Teile helfen am meisten?", [
  X("2-1 und 2-4", "Die betreffen Betreiber und Dienstleister."),
  R("4-1 und 4-2", "Sichere Entwicklung, Schwachstellen- und Update-Management, Produktanforderungen."),
  X("3-2 allein", "Risikobeurteilung für Anlagen, nicht für Produkte."),
  X("1-5 allein", "Profile ergänzen, ersetzen aber nicht."),
], "CRA ist Herstellerpflicht – 4-1/4-2 liefern das Fundament.", "Modul 10");

F("M10-17", 2, "Welche Rolle spielt eine IT/OT-DMZ für NIS2-Nachweise?", [
  X("Keine, NIS2 betrifft nur IT", "OT-Betreiber sind betroffen."),
  R("Ein Nachweis für Segmentierung", "Segmentierung ist eine Kernmaßnahme."),
  X("Sie ersetzt alle organisatorischen Maßnahmen", "Organisation bleibt nötig."),
  X("Sie ist nach NIS2 verboten", "Im Gegenteil."),
], "Technik und Organisation gemeinsam nachweisen.", "Modul 10");

F("M10-18", 3, "Ein Betreiber will Fernwartung künftig über eine Cloud-Plattform des Herstellers abwickeln. Was ist zuerst zu tun?", [
  X("Sofort freischalten, Cloud ist moderner", "Ohne Bewertung entsteht ein neuer Zugangspunkt."),
  R("Den neuen Conduit bewerten", "Neue Verbindung = neues Risiko."),
  X("Die Firewall komplett öffnen", "Unverhältnismäßig."),
  X("Auf Fernwartung ganz verzichten", "Oft nicht praktikabel."),
], "Neue Zugangswege immer über 3-2 bewerten.", "Modul 10/11");

F("M10-19", 2, "Was ist der Vorteil einer Zertifizierung des Entwicklungsprozesses (SDLA) gegenüber einzelnen Produktzertifikaten?", [
  X("Sie macht Produkttests überflüssig", "Produkte müssen weiter geprüft werden."),
  R("Sie belegt einen sicheren Entwicklungsprozess", "Vertrauen in künftige Versionen."),
  X("Sie gilt automatisch für die Anlage des Kunden", "Gilt nur für den Prozess des Herstellers."),
  X("Sie ersetzt das Patch-Management beim Betreiber", "Betreiberpflichten bleiben."),
], "Prozesszertifikat = Vertrauen in den Hersteller, nicht in die Anlage.", "Modul 10");
