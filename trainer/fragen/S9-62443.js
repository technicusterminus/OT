// Ausbau 62443: M02 (Normenreihe/Rollen) und M08 (Dienstleister)
F("M02-16", 2, "Ein Systemintegrator liefert eine Automatisierungslösung. Welche zwei Teile sind für ihn primär relevant?", [
  X("4-1 und 4-2", "Die betreffen Produkthersteller."),
  R("2-4 und 3-3", "Dienstleisterfähigkeiten und Systemanforderungen."),
  X("2-1 und 2-3", "Die betreffen vor allem den Betreiber."),
  X("1-1 und 1-5", "Grundlagen und Profile, aber keine Pflichten der Rolle."),
], "Integrator: Prozess nach 2-4, Ergebnis nach 3-3.", "Modul 02");

F("M02-17", 2, "Welcher Teil richtet sich als Umsetzungsleitfaden an Asset Owner?", [
  X("62443-4-2", "Komponentenanforderungen."),
  X("62443-3-1", "Technologieübersicht."),
  R("62443-2-5", "Implementierungsleitfaden für Betreiber."),
  X("62443-1-3", "Konformitätsmetriken."),
], "2-5 ergänzt 2-1 um praktische Hinweise.", "Modul 02");

F("M02-18", 1, "Wie heißen die vier Gruppen der Normenreihe?", [
  R("General, Policies, System, Component", "Gruppen 1 bis 4 der Reihe."),
  X("Plan, Do, Check, Act", "Das ist der PDCA-Zyklus."),
  X("Identify, Protect, Detect, Respond", "Das sind NIST-CSF-Funktionen."),
  X("Field, Control, Supervisory, Enterprise", "Das sind Ebenen ähnlich dem Purdue-Modell."),
], "1 Verstehen, 2 Organisieren, 3 System, 4 Produkt.", "Modul 02");

F("M08-11", 2, "Was fordert 2-4 im Bereich SP.06 Configuration Management sinngemäß?", [
  X("Eine schöne Formatierung der Dokumentation", "Kein Security-Inhalt."),
  R("Kontrollierte, dokumentierte Konfiguration", "Basis für Restore und Audit."),
  X("Möglichst häufige Konfigurationsänderungen", "Häufigkeit ist kein Ziel."),
  X("Verzicht auf Backups von Konfigurationen", "Das Gegenteil ist richtig."),
], "Konfigurationen kennen, sichern, kontrolliert ändern.", "62443-2-4");

F("M08-12", 2, "Welcher 2-4-Bereich ist betroffen, wenn ein Integrator Virenschutz und Wechseldatenträger-Regeln liefern soll?", [
  X("SP.04 Wireless", "Funk ist nicht betroffen."),
  R("SP.10 Malware Protection", "Schutz vor Schadsoftware."),
  X("SP.12 Backup/Restore", "Sicherung ist ein anderer Bereich."),
  X("SP.01 Solution Staffing", "Personalfragen."),
], "SP.10 = Malware-Schutz.", "62443-2-4");

F("M08-13", 3, "Ein Integrator bietet ML 1 für SP.07 Remote Access an. Was bedeutet das für den Asset Owner?", [
  X("Fernwartung ist damit optimal geregelt", "ML 1 bedeutet ad hoc."),
  R("Ad-hoc-Prozess – nachverhandeln", "Für kritische Zugänge zu wenig."),
  X("Der Integrator darf keine Fernwartung anbieten", "ML 1 verbietet nichts."),
  X("Die Anlage erreicht automatisch SL 1", "ML und SL sind verschiedene Skalen."),
], "Reifegrade machen Dienstleisterqualität vergleichbar.", "62443-2-4");

F("M08-14", 2, "Warum sollte die Wartung des SIS (SP.05) gesondert vereinbart werden?", [
  X("Weil SIS keine Wartung brauchen", "Auch SIS müssen gewartet werden."),
  R("Weil SIS-Arbeiten besondere Freigaben brauchen", "Safety-Funktion schützen."),
  X("Weil SIS immer vom Office-IT-Team gewartet werden", "Falsche Zuständigkeit."),
  X("Weil das SIS sonst keine Lizenz hat", "Kein Lizenzthema."),
], "SIS-Arbeiten nur mit spezieller Qualifikation und Freigabe.", "62443-2-4");

F("M08-15", 3, "Ein Wartungsdienstleister soll Security-Ereignisse melden (SP.08). Was ist vertraglich festzulegen?", [
  X("Nur dass er „bei Bedarf“ informiert", "Zu unbestimmt."),
  R("Was, wann und an wen gemeldet wird", "Klare, prüfbare Meldepflichten."),
  X("Dass Vorfälle nur einmal jährlich gesammelt gemeldet werden", "Viel zu spät."),
  X("Dass Meldungen ausschließlich mündlich erfolgen", "Nicht nachvollziehbar."),
], "Meldewege gehören in den Vertrag und in den IR-Plan.", "62443-2-4 SP.08");
