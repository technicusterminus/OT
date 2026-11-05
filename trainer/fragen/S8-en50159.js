// Ergänzung Bahn: EN 50159 (Modul 15)
F("M15-01", 1, "Was regelt die EN 50159 im Kern?", [
  X("Die Cybersecurity eines gesamten Bahnsystems über den Lebenszyklus", "Das adressieren TS 50701 bzw. IEC 63452."),
  R("Sicherheitsrelevante Kommunikation über Übertragungssysteme", "Ende-zu-Ende-Schutz von Nachrichten zwischen sicherheitsrelevanten Systemen."),
  X("Die Softwareentwicklung für Stellwerke", "Das ist EN 50128 bzw. EN 50716."),
  X("Den RAMS-Prozess für Bahnprojekte", "Das ist EN 50126."),
], "EN 50159 = sichere Nachrichtenübertragung.", "Modul 15");

F("M15-02", 2, "Was bedeutet das „Black Channel“-Prinzip?", [
  X("Die Übertragung erfolgt ausschließlich über Glasfaser", "Das Medium ist nicht gemeint."),
  R("Sicherheit wird Ende-zu-Ende in den Endgeräten erreicht, das Netz gilt als unsicher", "Das Netz muss nicht sicher sein."),
  X("Alle Nachrichten werden verschlüsselt und verborgen", "Verschlüsselung ist nicht der Kern des Begriffs."),
  X("Das Netz wird von einem zertifizierten Provider betrieben", "Das Netz wird gerade nicht als vertrauenswürdig angenommen."),
], "Sicherheitsfunktionen sitzen an den Enden.", "Modul 15");

F("M15-03", 1, "Wodurch unterscheidet sich Kategorie 3 von Kategorie 2?", [
  X("Durch höhere Bandbreite", "Bandbreite ist kein Kriterium."),
  R("Unbefugter Zugriff auf das Übertragungssystem muss berücksichtigt werden", "Deshalb sind Schutzmaßnahmen gegen Maskerade nötig."),
  X("Durch die Verwendung von Funk statt Kabel", "Funk führt oft zu Kategorie 3, definiert sie aber nicht."),
  X("Durch eine feste, bekannte Teilnehmerzahl", "Das kennzeichnet Kategorie 1."),
], "Kategorie 3 = Fremdzugriff möglich.", "Modul 15");

F("M15-04", 1, "Welches Merkmal kennzeichnet ein Übertragungssystem der Kategorie 1?", [
  R("Geschlossen, mit bekannten Teilnehmern und kontrollierten Eigenschaften", "Geringste Anforderungen."),
  X("Offen, aber ohne Fremdzugriff", "Das ist Kategorie 2."),
  X("Offen, mit möglichem Fremdzugriff", "Das ist Kategorie 3."),
  X("Ein öffentliches Mobilfunknetz", "Das wäre typischerweise Kategorie 3."),
], "Kategorie 1 = geschlossen.", "Modul 15");

F("M15-05", 2, "Welche der folgenden gehören zu den Bedrohungen nach EN 50159? (Mehrfachauswahl)", [
  R("Wiederholung", "Eine alte Nachricht wird erneut empfangen."),
  R("Maskerade", "Ein Unbefugter gibt sich als legitimer Sender aus."),
  X("Überhitzung", "Eine Hardware-Gefährdung, keine Nachrichtenbedrohung."),
  X("Stromausfall", "Betrifft die Verfügbarkeit, ist aber keine der sieben Bedrohungen."),
], "Wiederholung, Löschung, Einfügung, Reihenfolge, Verfälschung, Verzögerung, Maskerade.", "Modul 15");

F("M15-06", 2, "Welche Maßnahme schützt am besten gegen Wiederholung und vertauschte Reihenfolge?", [
  X("Ein Sicherheitscode (CRC)", "Er erkennt Verfälschung, keine Wiederholung."),
  R("Eine laufende Sequenznummer", "Doppelte oder vertauschte Nummern fallen auf."),
  X("Eine Quellkennung", "Sie zeigt den Absender, nicht die Reihenfolge."),
  X("Eine höhere Übertragungsrate", "Hat keinen Einfluss."),
], "Sequenznummern sichern Reihenfolge und Vollständigkeit.", "Modul 15");

F("M15-07", 2, "Eine korrekte Nachricht kommt 10 Sekunden zu spät an. Welche Maßnahme erkennt das?", [
  X("Ein Sicherheitscode", "Der Inhalt ist ja korrekt."),
  X("Eine Zielkennung", "Das Ziel stimmt."),
  R("Zeitstempel bzw. Zeitüberwachung", "Erkennt veraltete Nachrichten."),
  X("Eine Sequenznummer allein", "Sie zeigt nicht, wie alt die Nachricht ist."),
], "Verzögerung → Zeitstempel/Time-out.", "Modul 15");

F("M15-08", 3, "Warum reicht ein CRC als Sicherheitscode in Kategorie 3 nicht aus?", [
  X("Weil CRCs zu langsam berechnet werden", "Rechenzeit ist nicht das Problem."),
  R("Weil ein Angreifer die Nachricht ändern und den CRC neu berechnen kann", "Nur kryptographische Verfahren mit geheimem Schlüssel helfen."),
  X("Weil CRCs in der Bahn verboten sind", "CRCs sind üblich, nur nicht ausreichend gegen Angriffe."),
  X("Weil CRCs nur bei Funk funktionieren", "CRCs sind medienunabhängig."),
], "CRC schützt vor Zufall, nicht vor Angreifern.", "Modul 15");

F("M15-09", 3, "Ein Stellwerk soll künftig über ein gemeinsam genutztes IP-Netz mit Funkstrecken kommunizieren. Was folgt daraus nach EN 50159?", [
  X("Kategorie 1, da es ein Bahnnetz ist", "Gemeinsame Nutzung und Funk sprechen dagegen."),
  X("Kategorie 2, da nur Bahnpersonal Zugriff hat", "Fremdzugriff ist bei Funk und geteilten Netzen nicht auszuschließen."),
  R("Kategorie 3 mit kryptographischem Schutz gegen Maskerade", "Fremdzugriff muss berücksichtigt werden."),
  X("Keine Einstufung, da IP-Netze nicht unter die Norm fallen", "Die Norm ist technologieneutral."),
], "Offene, teils fremde Netze → Kategorie 3.", "Modul 15");

F("M15-10", 3, "Kategorie 3 wird mit Message Authentication Codes umgesetzt. Welches 62443-Thema wird dadurch besonders wichtig?", [
  X("Eine höhere SIL-Einstufung der Funkgeräte", "SIL betrifft Fehlerbeherrschung, nicht den Schutz der Schlüssel."),
  R("Ein sicheres Schlüsselmanagement über den Lebenszyklus", "Die Krypto ist nur so stark wie der Schutz der Schlüssel."),
  X("Die Abschaffung jeglicher Segmentierung", "Segmentierung bleibt nötig."),
  X("Der Verzicht auf Monitoring", "Monitoring bleibt nötig."),
], "Safety-Krypto braucht Security-Prozesse (SR 1.5, SR 4.3).", "Modul 15; 62443-3-3");

F("M15-11", 2, "Wie verhalten sich EN 50159 und IEC 62443 zueinander?", [
  X("EN 50159 ersetzt die 62443 im Bahnbereich", "Sie hat einen anderen Fokus."),
  R("Sie ergänzen sich: 50159 sichert Nachrichten, 62443 das System und seinen Betrieb", "Safety und Security greifen ineinander."),
  X("Beide regeln exakt dasselbe", "Fokus und Werkzeuge unterscheiden sich."),
  X("Die 62443 verbietet EN-50159-Mechanismen", "Sie widersprechen sich nicht."),
], "Ende-zu-Ende-Safety plus Systemsecurity.", "Modul 15");

F("M15-12", 2, "Welche Maßnahme hilft gegen eingefügte Nachrichten eines falsch adressierten Senders im Netz?", [
  R("Quell- und Zielkennung in jeder Nachricht", "Fehladressierte Nachrichten werden verworfen."),
  X("Ein höherer Time-out", "Verlängert nur die Wartezeit."),
  X("Eine größere Nachrichtenlänge", "Ohne Wirkung auf die Adressierung."),
  X("Ein zusätzlicher Bildschirm in der Leitstelle", "Keine Übertragungsmaßnahme."),
], "Kennungen erkennen falsche Absender und Empfänger – bei Angreifern zusätzlich Krypto.", "Modul 15");

// Prüfungspool
F("M15-13", 3, "Ein Hersteller sichert ein Funkprotokoll für die Zugsteuerung mit CRC und Sequenznummer, Krypto fehlt. Wie ist das zu bewerten?", [
  X("Ausreichend, da alle sieben Bedrohungen abgedeckt sind", "Maskerade ist nicht abgedeckt."),
  R("Unzureichend für Kategorie 3, da Maskerade und gezielte Verfälschung nicht abgewehrt werden", "Funk = Fremdzugriff möglich."),
  X("Ausreichend, wenn das Funknetz verschlüsselt ist", "Netzverschlüsselung ersetzt keinen Ende-zu-Ende-Schutz im Black Channel."),
  X("Unzureichend, weil Sequenznummern nicht zulässig sind", "Sie sind zulässig und sinnvoll."),
], "Kategorie 3 verlangt kryptographische Verfahren.", "Modul 15");

F("M15-14", 3, "Eine Rückmeldung (Feedback) wird zusätzlich zur Sequenznummer eingesetzt. Wogegen hilft sie vor allem?", [
  X("Gegen Verfälschung des Inhalts", "Dafür ist der Sicherheitscode da."),
  R("Gegen unbemerkte Löschung, weil der Sender die Bestätigung vermisst", "Der Sender erkennt fehlende Ankünfte."),
  X("Gegen Maskerade ohne weitere Maßnahmen", "Ohne Krypto kann auch eine Rückmeldung gefälscht werden."),
  X("Gegen zu hohe Netzlast", "Sie erhöht die Last eher."),
], "Feedback macht Verluste beim Sender sichtbar.", "Modul 15");
