// Lernfragen-Ausbau für die dünnsten Themen (F2, R6, D1, D9, D10, W9)
// F2
F("M01-19", 2, "Was beschreibt der Begriff „Living off the Land“ bei OT-Angriffen am besten?", [
  X("Angriffe ausschließlich über physische Sabotage", "Gemeint sind digitale Angriffe."),
  R("Missbrauch vorhandener, legitimer Werkzeuge", "Schwer zu erkennen, da die Tools erlaubt sind."),
  X("Angriffe, die nur nachts stattfinden", "Die Tageszeit ist nicht gemeint."),
  X("Malware, die sich über Funk verbreitet", "Das ist kein Bestandteil des Begriffs."),
], "Legitime Tools zu missbrauchen erschwert die Erkennung – Baselines und Zugriffskontrolle helfen.", "Modul 01/13");

F("M01-20", 2, "Welche Awareness-Maßnahme ist für Instandhalter in der OT am wirksamsten?", [
  X("Eine jährliche E-Mail mit allgemeinen IT-Tipps", "Zu allgemein und ohne OT-Bezug."),
  R("Praxisnahe Schulung zu USB und Fernwartung", "Trifft die realen Einfallstore ihres Alltags."),
  X("Ein Verbot, über Security zu sprechen", "Verhindert gerade die Meldung von Auffälligkeiten."),
  X("Ein Poster mit Passwortregeln im Office-Flur", "Erreicht die Zielgruppe kaum."),
], "Awareness wirkt, wenn sie zum Arbeitsalltag passt.", "Modul 01; 2-1");

// R6
F("M11-56", 2, "Welche Kombination erhöht die Eintrittswahrscheinlichkeit eines Szenarios am meisten?", [
  X("Hohe Konsequenz und geringe Erreichbarkeit", "Die Konsequenz beeinflusst nicht die Wahrscheinlichkeit."),
  R("Hohe Erreichbarkeit und bekannte Lücken", "Exposition plus Schwachstelle."),
  X("Redundante Hardware und USV", "Sie mindern Folgen von Ausfällen."),
  X("Viele Mitarbeitende in der Leitwarte", "Kein direkter Faktor für die Wahrscheinlichkeit."),
], "Likelihood = Erreichbarkeit × Schwachstellen × Angreiferinteresse.", "Modul 11");

F("M11-57", 3, "Für ein Szenario fehlen Daten zur Eintrittswahrscheinlichkeit. Wie wird sie bewertet?", [
  X("Gar nicht – das Szenario wird gestrichen", "Damit fehlt ein mögliches Risiko."),
  R("Qualitativ über begründete Faktoren", "Übliches Vorgehen in OT."),
  X("Mit der höchsten Stufe, damit es sicher ist", "Pauschal überschätzt verzerrt die Prioritäten."),
  X("Durch Würfeln im Workshop", "Nicht nachvollziehbar."),
], "Qualitative Bewertung ist legitim, wenn sie begründet ist.", "Modul 11");

// D1
F("M12-56", 2, "Eine Zone fordert SL-T 2 für FR 2. Was folgt daraus für das Design?", [
  X("Es gelten alle REs bis SL 4", "Nur die für SL 2 nötigen."),
  R("FR-2-SRs samt REs für SL 2 umsetzen", "Ziel bestimmt den Anforderungsumfang."),
  X("FR 2 kann entfallen, weil SL 2 niedrig ist", "SL 2 ist eine echte Anforderung."),
  X("Nur organisatorische Maßnahmen sind erlaubt", "Technische Maßnahmen sind gerade gefordert."),
], "SL-T → SR + passende REs aus 3-3.", "Modul 12");

F("M12-57", 3, "Zwei SRs aus derselben Zone widersprechen sich scheinbar: Kontosperre (SR 1.11) und ständige Bedienbarkeit. Wie löst das Design das?", [
  X("Eine Anforderung streichen", "Anforderungen streicht man nicht."),
  R("Verzögerung statt Sperre, plus Alarm", "Beide Ziele bleiben gewahrt."),
  X("Die Sperre nur nachts aktivieren", "Notfälle gibt es auch tagsüber."),
  X("Die HMI ohne Anmeldung betreiben", "Verletzt FR 1."),
], "Essenzielle Funktionen haben Vorrang, Security wird angepasst umgesetzt.", "Modul 03/12");

// D9
F("M09-14", 2, "Ein Hersteller gibt für eine Komponente „SL-C 3“ an. Welche Frage ist im Design als erstes zu stellen?", [
  X("Ob das Gerät 19-Zoll-montierbar ist", "Mechanik ist nicht die Frage."),
  R("Für welche FRs, mit welchem Nachweis?", "SL-C ist ein Vektor und braucht Nachweise."),
  X("Ob das Gerät auch SIL 3 hat", "SIL ist eine andere Skala."),
  X("Wie viele Kunden das Produkt nutzen", "Verbreitung ist kein Nachweis."),
], "SL-C immer je FR und mit Nachweis prüfen.", "62443-4-2");

F("M09-15", 3, "Ein Historian läuft als Anwendung auf einem Windows-Server. Welche 4-2-Kategorien sind betroffen?", [
  R("SAR für die Anwendung und HDR für den Host", "Software und Host werden getrennt betrachtet."),
  X("Nur EDR", "Es ist kein Embedded Device."),
  X("Nur NDR", "Es ist kein Netzwerkgerät."),
  X("Keine, da Standard-IT", "Auch IT-Plattformen im IACS fallen unter 4-2."),
], "Anwendung (SAR) und Plattform (HDR) ergänzen sich.", "62443-4-2");

// D10
F("M12-58", 2, "Welche Maßnahme härtet eine Engineering-Workstation am wirksamsten?", [
  X("Einen größeren Monitor installieren", "Kein Security-Effekt."),
  R("Kein Internet, Whitelisting, minimale Software", "Reduziert die Angriffsfläche des kritischsten Hosts."),
  X("Die EWS ins Office-Netz verlegen", "Erhöht die Exposition."),
  X("Allen Operatoren Zugriff geben", "Widerspricht Least Privilege."),
], "Die EWS ist besonders schützenswert.", "Modul 12");

F("M12-59", 2, "Warum sollten Default-Passwörter bereits im CFAT geändert sein?", [
  X("Weil sie sonst die Lizenz ungültig machen", "Kein Lizenzthema."),
  R("Weil bekannte Defaults leicht ausnutzbar sind", "SR 1.5 – Authentisierungsmittel verwalten."),
  X("Weil der Betreiber sie sonst nicht kennt", "Der Grund ist die Angriffsfläche."),
  X("Weil Default-Passwörter zu lang sind", "Ihre Länge ist nicht das Problem."),
], "Defaults sind öffentlich bekannt.", "SR 1.5; Modul 12");

// W9
F("M08-09", 2, "Welche Nachweise sollte ein Asset Owner von einem Wartungsdienstleister regelmäßig anfordern?", [
  X("Nur Rechnungen über die Einsätze", "Rechnungen belegen keine Security."),
  R("Schulungs-, Zugangs- und Tätigkeitsnachweise", "Belegen die vereinbarten 2-4-Fähigkeiten."),
  X("Ausschließlich das Firmenlogo für die Dokumentation", "Kein Nachweis."),
  X("Die privaten Kontaktdaten aller Techniker", "Datenschutzrechtlich problematisch und ohne Nutzen."),
], "Vereinbaren, nachweisen lassen, prüfen.", "62443-2-4");

F("M08-10", 3, "Ein Dienstleister setzt Subunternehmer für die Wartung ein. Was sollte der Asset Owner verlangen?", [
  X("Nichts, der Hauptdienstleister haftet", "Haftung ersetzt keine Sicherheitsanforderungen."),
  R("Weitergabe der 2-4-Anforderungen an sie", "Die Kette darf das Niveau nicht senken."),
  X("Ein gemeinsames Konto für alle Subunternehmer", "Nicht zuordenbar."),
  X("Ein Verbot jeglicher Subunternehmer ohne Begründung", "Unverhältnismäßig, wenn Anforderungen weitergegeben werden."),
], "Lieferkette absichern.", "62443-2-4");
