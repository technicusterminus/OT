// Paket 15: dünnste Themen F11, R3, R4, R7, R8, R10
F("M02-19", 2, "Wozu dient ein Security-Profil nach 62443-1-5 in einem Bahn- oder Energieprojekt?", [
  X("Es ersetzt die Risikobeurteilung vollständig", "Profile ergänzen, ersetzen aber keine Bewertung."),
  R("Es legt branchentypische Anforderungen einheitlich fest", "Weniger Interpretationsspielraum zwischen Projekten."),
  X("Es ist eine Benutzerrolle im Leitsystem", "Gemeint sind keine Benutzerprofile."),
  X("Es beschreibt den Kaufprozess für Komponenten", "Kein Beschaffungsdokument."),
], "Profile machen 62443 branchenspezifisch handhabbar.", "62443-1-5");

F("M02-20", 2, "Was bewertet ein Security Protection Rating (2-2) zusätzlich zur Technik?", [
  X("Die Anzahl der Firewalls im Werk", "Menge ist keine Bewertung."),
  R("Die Reife der gelebten Prozesse", "Technik und Prozess gemeinsam."),
  X("Die Höhe des Security-Budgets", "Budget ist nur ein Input."),
  X("Die Zahl der zertifizierten Mitarbeitenden", "Personenzertifikate sind nicht der Maßstab."),
], "SL- und ML-Aspekte werden kombiniert.", "62443-2-2");

F("M11-65", 2, "Welche Methode eignet sich, um in einer Brownfield-Anlage Konfigurationen von Firewalls zu prüfen, ohne den Betrieb zu stören?", [
  X("Lasttest gegen die Firewall", "Ein Eingriff mit Ausfallrisiko."),
  R("Offline-Review der exportierten Konfiguration", "Passiv und gründlich."),
  X("Portscan durch die Firewall hindurch", "Aktiver Eingriff."),
  X("Neustart zur Prüfung der Startkonfiguration", "Unterbricht den Verkehr."),
], "Konfig-Reviews sind passive Assessment-Methoden.", "Modul 11");

F("M11-66", 2, "Warum werden in der Konsequenzbewertung mehrere Schadenskategorien betrachtet?", [
  X("Damit der Durchschnitt gebildet werden kann", "Die höchste Kategorie zählt."),
  R("Weil ein Szenario in HSE, Umwelt oder Finanzen unterschiedlich schwer wirkt", "Nichts übersehen."),
  X("Weil die Norm genau fünf Kategorien vorschreibt", "Die Kategorien legt der Asset Owner fest."),
  X("Um die Bewertung zu verlängern", "Kein Selbstzweck."),
], "Die schwerste Auswirkung bestimmt die Konsequenz.", "Modul 11");

F("M11-67", 3, "Zwei Szenarien für eine Zone ergeben SL 2 und SL 3 für FR 3. Welches SL-T wird gesetzt?", [
  X("SL 2, das häufigere Szenario", "Das höhere Risiko ist maßgeblich."),
  R("SL 3", "Die Zone muss dem stärksten plausiblen Angreifer standhalten."),
  X("Der Mittelwert, also SL 2,5", "SL sind ganzzahlige Stufen."),
  X("Je Szenario eine eigene Zone", "Unnötige Zersplitterung."),
], "Das anspruchsvollste plausible Szenario bestimmt das Ziel.", "Modul 04/11");

F("M11-68", 2, "Welche Frage hilft bei der Festlegung des SL-T für FR 4 am meisten?", [
  X("Wie viele Geräte sind verschlüsselungsfähig?", "Produktfähigkeit ist kein Bedarf."),
  R("Schadet das Mitlesen der Daten wirklich?", "Bedarf aus dem Risiko ableiten."),
  X("Ist das Netzwerk schnell genug?", "Performance ist kein Schutzbedarf."),
  X("Welche Verschlüsselung nutzt die IT?", "IT-Praxis ist kein OT-Maßstab."),
], "Vertraulichkeit nur dort hoch ansetzen, wo sie schützt.", "Modul 04/11");

F("M11-69", 2, "Wie wird eine vorhandene, aber nie getestete Backup-Lösung in der Beurteilung bewertet?", [
  X("Als voll wirksam", "Ohne Test ist die Wirkung unbelegt."),
  R("Als eingeschränkt wirksam, Gap: Restore-Test fehlt", "Wirkung muss nachgewiesen sein."),
  X("Als unwirksam und sofort zu entfernen", "Sie hat einen gewissen Wert."),
  X("Gar nicht, Backups sind kein Security-Thema", "Backup ist FR 7."),
], "Gegenmaßnahmen nach belegter Wirkung bewerten.", "Modul 11/13");

F("M11-70", 2, "Ein Betreiber tauscht alle HMIs gegen ein neues Produkt. Ist ein Re-Assessment nötig?", [
  X("Nein, HMIs sind gleichwertig", "Neue Produkte haben andere Eigenschaften."),
  R("Ja, zumindest für die betroffenen Zonen", "Neue Komponenten ändern SL-C und Schwachstellen."),
  X("Nur, wenn der Hersteller wechselt", "Auch Versionen können sich unterscheiden."),
  X("Nur nach einem Vorfall mit den neuen HMIs", "Zu spät – die neuen Risiken wären dann schon eingetreten."),
], "Wesentliche Änderungen lösen eine Neubewertung aus.", "Modul 11");
