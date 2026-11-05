// M02 – Normenreihe & Rollen
F("M02-01", 1, "Welche Gruppe der Normenreihe richtet sich vor allem an Hersteller von Komponenten?", [
  X("Gruppe 1 – General", "Gruppe 1 liefert Begriffe und Konzepte für alle Rollen."),
  X("Gruppe 2 – Policies & Procedures", "Gruppe 2 richtet sich an Betreiber und Dienstleister."),
  X("Gruppe 3 – System", "Gruppe 3 betrifft das Gesamtsystem, also Integratoren und Betreiber."),
  R("Gruppe 4 – Component", "4-1 (Entwicklungsprozess) und 4-2 (Komponententechnik) adressieren Hersteller."),
], "1 = Verstehen, 2 = Organisieren, 3 = System bauen, 4 = Produkt bauen.", "Modul 02");

F("M02-02", 1, "Welcher Teil beschreibt Anforderungen an einen sicheren Produktentwicklungsprozess?", [
  X("62443-2-1", "2-1 ist das Security-Programm des Asset Owners."),
  X("62443-3-3", "3-3 enthält technische Systemanforderungen."),
  R("62443-4-1", "4-1 = Secure Product Development Lifecycle."),
  X("62443-4-2", "4-2 enthält technische Anforderungen an Komponenten, nicht den Prozess."),
], "4-1 ist Prozess, 4-2 ist Technik.", "62443-4-1");

F("M02-03", 1, "Welcher Teil richtet sich an Systemintegratoren und Wartungsdienstleister?", [
  R("62443-2-4", "2-4 enthält Anforderungen an IACS-Service-Provider."),
  X("62443-1-1", "1-1 liefert Begriffe und Modelle."),
  X("62443-4-2", "4-2 richtet sich an Komponentenhersteller."),
  X("62443-3-1", "3-1 ist ein Technical Report über Sicherheitstechnologien."),
], "Integration und Maintenance werden in 2-4 gemeinsam behandelt.", "62443-2-4");

F("M02-04", 2, "Welcher Teil liefert das Verfahren zur Festlegung von Zonen, Conduits und Ziel-Security-Leveln?", [
  X("62443-3-3", "3-3 sagt, welche Anforderungen pro SL gelten – nicht, wie man das SL-T bestimmt."),
  R("62443-3-2", "3-2 = Security Risk Assessment for System Design."),
  X("62443-2-3", "2-3 behandelt Patch-Management."),
  X("62443-1-3", "1-3 behandelt Konformitätsmetriken."),
], "3-2 = wie (Zonen, SL-T), 3-3 = was (Anforderungen je SL).", "62443-3-2");

F("M02-05", 2, "Welche Dokumente der Reihe sind Technical Reports, also informativ? (Mehrfachauswahl)", [
  R("62443-2-3 (Patch-Management)", "2-3 ist ein TR mit Empfehlungen."),
  R("62443-3-1 (Sicherheitstechnologien)", "3-1 ist ein TR über Technologien."),
  X("62443-3-3 (Systemanforderungen)", "3-3 ist ein International Standard mit normativen Anforderungen."),
  X("62443-4-1 (Produktentwicklung)", "4-1 ist ein International Standard, nach dem zertifiziert wird."),
], "IS = normativ („shall“), TR = informativ.", "Modul 02, Dokumenttypen");

F("M02-06", 1, "Wer trägt die Gesamtverantwortung für das Risiko eines IACS im Betrieb?", [
  X("Der Produkthersteller", "Der Hersteller verantwortet sein Produkt, nicht das Risiko der Anlage."),
  X("Der Systemintegrator", "Der Integrator liefert die Lösung, betreibt sie aber nicht."),
  R("Der Asset Owner", "Er legt die Risikotoleranz fest und gibt Ergebnisse frei."),
  X("Die Zertifizierungsstelle", "Sie bewertet Konformität, trägt aber kein Betriebsrisiko."),
], "Der Asset Owner ist Eigentümer des Risikos.", "Modul 02, Rollen");

F("M02-07", 2, "Welches Gremium entwickelt die Reihe auf IEC-Seite gemeinsam mit dem ISA99-Komitee?", [
  R("IEC TC65 (WG10)", "ISA99 und IEC TC65/WG10 arbeiten eng zusammen."),
  X("ISO/IEC JTC 1 SC27", "SC27 verantwortet u. a. ISO/IEC 27001, nicht 62443."),
  X("ETSI TC CYBER", "ETSI arbeitet an europäischen Telekom-/Cyber-Normen."),
  X("IEEE 802.1", "802.1 normiert Bridging/VLAN, nicht 62443."),
], "ISA-62443 und IEC 62443 sind inhaltlich weitgehend identisch.", "Modul 02, Herkunft");

F("M02-08", 2, "Ein Hersteller von Managed Switches will nachweisen, welche Security-Funktionen sein Gerät bietet. Welcher Teil ist maßgeblich?", [
  X("62443-2-4", "2-4 betrifft Dienstleister, nicht Produkte."),
  X("62443-4-1", "4-1 bewertet den Entwicklungsprozess, nicht die Gerätefunktionen."),
  R("62443-4-2", "Technische Fähigkeiten (SL-C) einer Komponente – hier Network Device."),
  X("62443-3-3", "3-3 betrifft das Gesamtsystem, nicht die einzelne Komponente."),
], "Komponente technisch = 4-2, System technisch = 3-3.", "62443-4-2");

F("M02-09", 3, "Welche Zuordnung von Teil zu Hauptinhalt ist FALSCH?", [
  X("1-1 – Terminologie, Konzepte, Modelle", "Diese Zuordnung stimmt."),
  X("2-1 – Security-Programm des Asset Owners", "Diese Zuordnung stimmt."),
  R("3-3 – Risikobeurteilung für das Systemdesign", "Falsch zugeordnet: Risikobeurteilung ist 3-2; 3-3 enthält Systemanforderungen."),
  X("4-2 – Technische Anforderungen an Komponenten", "Diese Zuordnung stimmt."),
], "Häufige Verwechslung: 3-2 (Risiko) vs. 3-3 (Anforderungen).", "Modul 02");

F("M02-10", 2, "Welcher Teil behandelt die Bewertung des Schutzes eines IACS im Betrieb, die technische Stärke und Prozessreife kombiniert?", [
  X("62443-1-5", "1-5 beschreibt Profile."),
  R("62443-2-2", "2-2: Security Protection Rating/Scheme."),
  X("62443-2-5", "2-5 ist ein Umsetzungsleitfaden für Asset Owner."),
  X("62443-3-1", "3-1 beschreibt Sicherheitstechnologien."),
], "2-2 vereint SL- und ML-Aspekte zu einer Gesamtaussage.", "Modul 02");

F("M02-11", 2, "Wofür dienen Profile nach 62443-1-5?", [
  X("Für Benutzerprofile und Rollen im Verzeichnisdienst", "Gemeint sind keine Benutzerprofile."),
  R("Für branchen- oder anwendungsspezifische Auswahl von Anforderungen", "So muss nicht jede Branche die Reihe neu interpretieren."),
  X("Für vorkonfigurierte Firewall-Regelsätze je Hersteller", "Profile sind keine Produktkonfigurationen."),
  X("Für die Einstufung von Mitarbeitenden nach Qualifikation", "Das ist nicht Gegenstand von 1-5."),
], "Profile schneiden die Reihe auf eine Branche oder Geräteklasse zu.", "62443-1-5");

F("M02-12", 2, "Was bewertet das Security Protection Rating nach 62443-2-2?", [
  X("Den Entwicklungsprozess eines Herstellers", "Das ist 4-1."),
  R("Den Schutz einer Anlage im Betrieb", "Kombination aus technischer Fähigkeit und Prozessreife."),
  X("Die Qualifikation einzelner Personen im Projekt", "Personenzertifikate sind kein Teil von 2-2."),
  X("Die kryptographische Stärke der eingesetzten Verfahren", "Kryptographie ist nur ein kleiner Teilaspekt."),
], "2-2 schaut auf die Anlage im Betrieb.", "62443-2-2");

F("M02-13", 3, "Welcher Teil befasst sich mit Metriken zur Messung der Konformität von Systemen?", [
  R("62443-1-3", "1-3: System security conformance metrics."),
  X("62443-3-1", "3-1 beschreibt Technologien, keine Metriken."),
  X("62443-4-1", "4-1 ist der Entwicklungsprozess."),
  X("62443-2-4", "2-4 betrifft Dienstleister."),
], "Metriken machen Erfüllung messbar.", "62443-1-3");
