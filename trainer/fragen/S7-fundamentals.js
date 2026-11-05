// Ausbau Fundamentals: M03, M05, M07, M10
F("M03-13", 2, "Was bedeutet „Least Functionality“ für ein IACS?", [
  X("Systeme mit möglichst wenigen Bedienern betreiben", "Gemeint ist die Funktionalität der Systeme."),
  R("Nur benötigte Dienste und Ports aktiv", "Kleinere Angriffsfläche (SR 7.7)."),
  X("Möglichst einfache Steuerungsprogramme schreiben", "Programmstil ist nicht gemeint."),
  X("Funktionen nur in Notfällen freischalten", "Das beschreibt eher Break-Glass."),
], "Was nicht läuft, kann nicht angegriffen werden.", "Modul 03; SR 7.7");

F("M03-14", 2, "Warum werden Subzonen gebildet?", [
  X("Um die Anzahl der Firewalls zu senken", "Subzonen erhöhen eher die Zahl der Grenzen."),
  R("Um Assets mit höherem Bedarf abzugrenzen", "Z. B. die EWS innerhalb der Leitstellen-Zone."),
  X("Weil jede Zone maximal zehn Assets haben darf", "Es gibt keine Größengrenze."),
  X("Um Conduits überflüssig zu machen", "Subzonen brauchen ebenfalls Conduits."),
], "Feinere Zonierung dort, wo der Schutzbedarf steigt.", "Modul 03");

F("M03-15", 1, "Was ist das Ziel von Defense in Depth in einer OT-Anlage?", [
  X("Eine einzige, besonders starke Firewall einzusetzen", "Das ist das Gegenteil von mehreren Schichten."),
  X("Möglichst viele Sicherheitsprodukte zu kaufen", "Menge ersetzt kein Schichtenkonzept."),
  R("Dass eine versagende Schicht nicht reicht", "Mehrere unabhängige Schichten fangen sich gegenseitig auf."),
  X("Angriffe nur in der Tiefe des Netzes zu erkennen", "Es geht um Schutz auf allen Ebenen."),
], "Organisation, Physik, Netz, Host, Applikation.", "62443-1-1");

F("M05-13", 2, "Wozu dient die Zonen- und Conduit-Zeichnung in der CRS?", [
  X("Als Verkabelungsplan für die Elektriker", "Sie ist logisch, kein Verkabelungsplan."),
  R("Als gemeinsame Grundlage für Design, Tests und Audits", "Jeder bezieht sich auf dieselben Zonen und Conduits."),
  X("Als Marketingunterlage für Kunden", "Sie ist ein internes Sicherheitsdokument."),
  X("Als Ersatz für das Asset-Inventar", "Das Inventar bleibt nötig."),
], "Ein Bild, auf das sich alle beziehen.", "62443-3-2, ZCR 3/6");

F("M05-14", 2, "Was gehört zur detaillierten Risikobeurteilung (ZCR 5) ausdrücklich dazu?", [
  X("Die Bestellung der Gegenmaßnahmen", "Bestellung ist Projektumsetzung."),
  R("Die Bewertung des Restrisikos nach Gegenmaßnahmen", "Vergleich mit dem tolerierbaren Risiko."),
  X("Die Zertifizierung der Anlage", "Nicht Teil von 3-2."),
  X("Die Schulung aller Mitarbeitenden", "Wichtig, aber nicht Teil von ZCR 5."),
], "ZCR 5 endet mit Restrisiko und Vergleich.", "62443-3-2, ZCR 5");

F("M05-15", 1, "Was ist das Hauptergebnis von 62443-3-2 für das spätere Design?", [
  X("Eine Liste zugelassener Hersteller", "Keine Herstellerauswahl."),
  R("Zonen, Conduits und ihre SL-T, dokumentiert in der CRS", "Grundlage für 3-3 und die Produktwahl."),
  X("Ein fertiges Firewall-Regelwerk", "Das entsteht im Design."),
  X("Ein Zertifikat über die Anlagensicherheit", "3-2 ist kein Zertifizierungsschritt."),
], "3-2 liefert das Was und Wie viel, das Design das Wie.", "62443-3-2");

F("M07-12", 2, "Wer sollte im Security-Programm des Asset Owners die Gesamtverantwortung für OT-Security tragen?", [
  X("Der Systemintegrator", "Er ist externer Dienstleister."),
  R("Eine benannte Rolle beim Betreiber", "Klare Verantwortung, Management-Commitment."),
  X("Jeder Mitarbeitende gleichermaßen", "Geteilte Verantwortung ohne Owner verläuft im Sande."),
  X("Der Hersteller der Steuerungen", "Er verantwortet sein Produkt, nicht die Anlage."),
], "Ohne Verantwortlichen kein Programm.", "62443-2-1");

F("M07-13", 2, "Warum braucht ein OT-Security-Programm die Unterstützung der Geschäftsleitung?", [
  X("Weil nur sie Passwörter vergeben darf", "Nicht ihre Aufgabe."),
  R("Weil dort über Budget und Risiko entschieden wird", "Security konkurriert mit Produktion und Kosten."),
  X("Weil die Norm Unterschriften auf jeder Firewall-Regel verlangt", "Das fordert sie nicht."),
  X("Weil die Geschäftsleitung die Technik betreibt", "Sie steuert, betreibt aber nicht."),
], "Risiko ist eine Managemententscheidung.", "62443-2-1; NIS2");

F("M07-14", 2, "Welche Aussage zu Security-Richtlinien für OT ist richtig?", [
  X("IT-Richtlinien können unverändert übernommen werden", "OT-Besonderheiten wie Verfügbarkeit fehlen dann."),
  R("Sie berücksichtigen OT-Besonderheiten wie Wartungsfenster und Herstellerfreigaben", "Sonst sind sie nicht umsetzbar."),
  X("Sie sind nur für Neuanlagen relevant", "Bestandsanlagen brauchen sie ebenso."),
  X("Sie ersetzen technische Maßnahmen", "Sie ergänzen sie."),
], "Richtlinien müssen in der Anlage lebbar sein.", "62443-2-1");

F("M10-13", 2, "Ein Betreiber fragt, ob ein ISASecure-zertifiziertes Produkt seine Anlage automatisch sicher macht. Was ist die richtige Antwort?", [
  X("Ja, das Zertifikat gilt für die gesamte Anlage", "Es gilt nur für das Produkt."),
  R("Nein, entscheidend ist die Integration", "SL-C ≠ SL-A."),
  X("Ja, wenn mindestens drei Produkte zertifiziert sind", "Die Anzahl ändert nichts."),
  X("Nein, ISASecure ist nicht anerkannt", "Es ist ein anerkanntes Schema."),
], "Zertifizierte Produkte sind gute Bausteine, keine sichere Anlage.", "Modul 10/12");

F("M10-14", 2, "Welche Meldepflicht bringt NIS2 für betroffene Einrichtungen typischerweise mit sich?", [
  X("Meldung jeder Firewall-Regeländerung an die Behörde", "Das wird nicht verlangt."),
  R("Erhebliche Vorfälle fristgerecht melden", "Frühwarnung und Folgemeldungen."),
  X("Jährliche Meldung aller Mitarbeiterpasswörter", "Absurd und unzulässig."),
  X("Keine – NIS2 betrifft nur Prävention", "NIS2 enthält ausdrücklich Meldepflichten."),
], "IR-Pläne müssen Meldewege und Fristen enthalten.", "Modul 10/13");

F("M10-15", 2, "Warum ist ein aktuelles Asset-Inventar für NIS2 und 62443 gleichermaßen grundlegend?", [
  X("Weil es die Versicherungsprämie senkt", "Mag sein, ist aber nicht der Kern."),
  R("Weil Unbekanntes nicht schützbar ist", "Grundlage jeder Maßnahme."),
  X("Weil Behörden es täglich anfordern", "Das tun sie nicht."),
  X("Weil sonst keine Garantie besteht", "Kein Gewährleistungsthema."),
], "Was man nicht kennt, kann man nicht schützen.", "SR 7.8; Modul 10");
