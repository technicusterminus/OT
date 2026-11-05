// M07 – Betreiber (2-1, 2-3)
F("M07-01", 1, "Wofür steht CSMS?", [
  R("Cyber Security Management System", "Das organisatorische Security-Rahmenwerk des Asset Owners."),
  X("Control System Monitoring Service", "Monitoring ist nur ein Teil eines CSMS."),
  X("Critical Safety Management Standard", "Safety-Management ist eine andere Disziplin."),
  X("Central Security Mode Switch", "Das ist kein 62443-Begriff."),
], "Vergleichbar mit einem ISMS, aber auf IACS zugeschnitten.", "62443-2-1");

F("M07-02", 2, "Was bewertet ein Maturity Level (ML)?", [
  X("Die technische Stärke einer Komponente", "Das bewertet ein Security Level (SL)."),
  R("Die Reife und Verankerung eines Prozesses", "Initial, Managed, Defined, Improving."),
  X("Das Alter und den Zustand einer Anlage", "Anlagenalter ist kein Reifegrad."),
  X("Die Anzahl umgesetzter Sicherheitsmaßnahmen", "Menge sagt nichts über die Prozessreife."),
], "ML = Prozess, SL = Technik.", "Modul 07");

F("M07-03", 2, "Welcher Reifegrad beschreibt einen dokumentierten, wiederholbaren Prozess mit geschultem Personal, der aber noch nicht nachweislich organisationsweit gelebt wird?", [
  X("ML 1 – Initial", "ML 1 ist ad hoc und undokumentiert."),
  R("ML 2 – Managed", "Dokumentiert und wiederholbar, Nachweis der gelebten Praxis fehlt noch."),
  X("ML 3 – Defined", "ML 3 verlangt den Nachweis, dass der Prozess gelebt wird."),
  X("ML 4 – Improving", "ML 4 misst und verbessert kontinuierlich."),
], "Der Schritt von ML 2 zu ML 3 ist der Nachweis der gelebten Praxis.", "Modul 07");

F("M07-04", 2, "Ein kritischer Patch ist vom Hersteller noch nicht freigegeben. Was ist das angemessene Vorgehen?", [
  X("Installieren, weil die Kritikalität Vorrang vor der Freigabe hat", "Ungetestet kann der Patch die Anlage stoppen und die Gewährleistung gefährden."),
  X("Abwarten und keine weiteren Schritte unternehmen", "Das Risiko bleibt unbehandelt."),
  R("Risiko bewerten und bis zur Freigabe kompensieren", "Z. B. Segmentierung, Whitelisting, verstärktes Monitoring."),
  X("Das betroffene System bis zur Freigabe abschalten", "Das ist meist unverhältnismäßig und gefährdet die Verfügbarkeit."),
], "Bewerten → kompensieren → nach Freigabe testen und einspielen.", "62443-2-3");

F("M07-05", 1, "Welcher Teil behandelt Patch-Management in IACS-Umgebungen?", [
  R("62443-2-3", "Technical Report für Betreiber und Hersteller."),
  X("62443-2-4", "2-4 betrifft Dienstleister (u. a. SP.11 Patch), nicht den Patch-Prozess selbst."),
  X("62443-3-1", "3-1 beschreibt Technologien."),
  X("62443-4-1", "4-1 regelt die Bereitstellung von Updates durch Hersteller (SUM), nicht das Patchen beim Betreiber."),
], "2-3 ist der Patch-Leitfaden.", "62443-2-3");

F("M07-06", 2, "In welche drei Hauptkategorien gliederte die Erstausgabe von 62443-2-1 (2010) das CSMS?", [
  X("Planen, Bauen, Betreiben", "Das ist ein Lebenszyklus, keine CSMS-Gliederung."),
  R("Analyse, Behandlung, Überwachung", "So war die Ausgabe 2010 aufgebaut."),
  X("Identifizieren, Schützen, Erkennen", "Das sind Funktionen des NIST CSF."),
  X("Technik, Organisation, Personal", "Das ist eine allgemeine Einteilung, nicht die von 2-1."),
], "Die Ausgabe 2024 ist dagegen in Security Program Elements gegliedert.", "62443-2-1:2010");

F("M07-07", 3, "Welche Reihenfolge entspricht einem sinnvollen OT-Patchprozess beim Betreiber?", [
  X("Einspielen, Testen, Bewerten", "Bewertung und Test müssen vor dem Einspielen kommen."),
  R("Bewerten, testen, einspielen, prüfen", "So werden Risiko und Prozessstörung beherrscht."),
  X("Test, Inventar, Einspielen, Bewertung", "Ohne Inventar weiß man nicht, was betroffen ist."),
  X("Automatisch per WSUS direkt aus dem Internet", "Direkter Internetbezug und Automatik passen nicht zur OT."),
], "Bewerten und Testen vor dem Einspielen ist in OT unverzichtbar.", "62443-2-3");

F("M07-08", 2, "Welche Aussage zum Verhältnis von 62443-2-1 und ISO/IEC 27001 ist am zutreffendsten?", [
  X("Sie schließen sich gegenseitig aus", "Viele Organisationen kombinieren beide."),
  R("2-1 ergänzt ein ISMS für die OT", "OT-Anforderungen werden in ein bestehendes ISMS integriert."),
  X("ISO/IEC 27001 ersetzt 2-1 vollständig in der OT", "27001 deckt OT-Spezifika wie HSE nicht ab."),
  X("2-1 ist eine Übersetzung von ISO/IEC 27001", "2-1 ist eigenständig."),
], "ISMS + OT-Ergänzung ist in der Praxis üblich.", "Modul 07");

F("M07-09", 2, "Welche Informationen sollte ein Hersteller laut 2-3 zu einem Patch bereitstellen? (Mehrfachauswahl)", [
  R("Betroffene Produkte und Versionen", "Damit der Betreiber Betroffenheit erkennt."),
  R("Kompatibilitäts- und Testinformationen", "Damit der Aufwand für Tests abschätzbar ist."),
  X("Den vollständigen Quellcode der Änderung", "Quellcode ist nicht nötig und meist nicht verfügbar."),
  X("Eine Garantie, dass keine Tests nötig sind", "Tests beim Betreiber bleiben notwendig."),
], "Außerdem: Dringlichkeit und adressierte Schwachstellen.", "62443-2-3");
