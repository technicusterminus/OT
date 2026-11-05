// Szenario-Fragen Risk Assessment (überwiegend Prüfungspool)
F("M11-36", 3, "Für eine Biogasanlage soll das SuC festgelegt werden. Die Anlage hat eine Gasfackel mit eigener Steuerung, eine Cloud-Anbindung des Motorherstellers und ein Büro-WLAN. Was gehört sicher zu den Zugangspunkten des SuC?", [
  X("Das Büro-WLAN, weil es im selben Gebäude ist", "Räumliche Nähe allein macht es nicht zum Zugangspunkt – nur wenn es mit dem IACS verbunden ist."),
  R("Die Hersteller-Cloud-Anbindung", "Eine externe Verbindung in das IACS ist ein klarer Zugangspunkt."),
  X("Die Gasfackel, weil sie eine eigene Steuerung hat", "Sie ist ein Asset im SuC, nicht automatisch ein Zugangspunkt."),
  X("Keiner, solange keine Fernwartung aktiv ist", "Die Cloud-Anbindung besteht dauerhaft."),
], "Zugangspunkte sind alle Wege von außen ins SuC.", "62443-3-2, ZCR 1");

F("M11-37", 3, "Eine Ist-Aufnahme in einer Molkerei ergibt: 40 % der Geräte im Mitschnitt fehlen im Inventar. Wie ist das für die Risikobeurteilung zu werten?", [
  X("Unkritisch, da die Geräte offenbar funktionieren", "Unbekannte Geräte sind ungeplante Angriffsfläche."),
  R("Als Befund: Inventar klären und bewerten", "Ohne Inventar keine belastbare Zonierung."),
  X("Die fehlenden Geräte sperren, bis sie dokumentiert sind", "Kann den Prozess stören – erst klären."),
  X("Nur die dokumentierten 60 % bewerten", "Damit wäre die Beurteilung unvollständig."),
], "Inventarlücken sind ein typisches Brownfield-Ergebnis – und ein Risiko.", "Modul 11");

F("M11-38", 3, "Ein Team bewertet in ZCR 2 eine Dosierzone und notiert: „Risiko gering, die Firewall schützt ja.“ Was ist methodisch falsch?", [
  X("Die Firewall hätte als Hauptkriterium höher gewichtet werden müssen", "Gerade umgekehrt."),
  R("ZCR 2 rechnet keine Cyber-Maßnahmen an", "ZCR 2 betrachtet den Worst Case."),
  X("ZCR 2 darf nur von Externen durchgeführt werden", "Es gibt keine solche Regel."),
  X("Risiken werden in 3-2 grundsätzlich nicht qualitativ bewertet", "Qualitative Bewertung ist üblich."),
], "Erst Schutzbedarf ehrlich ermitteln, dann Maßnahmen anrechnen.", "62443-3-2, ZCR 2");

F("M11-39", 3, "In einem Kraftwerk fällt bei einem Cyberangriff die Turbinenregelung aus. Ein mechanischer Überdrehzahlschutz schaltet die Turbine sicher ab. Welche Konsequenzstufe ist für HSE realistisch anzusetzen?", [
  X("Höchste Stufe, weil Turbinen gefährlich sind", "Der mechanische Schutz begrenzt die Folge glaubwürdig."),
  R("Niedrigere HSE-Stufe, Produktion bleibt hoch", "Nicht-cyber Schutz mindert HSE; der Ausfall bleibt teuer."),
  X("Keine Konsequenz, weil der Schutz greift", "Stillstand und Kosten bleiben."),
  X("Die Stufe, die der Turbinenhersteller angibt", "Die Bewertung ist Sache des Asset Owners."),
], "Konsequenzen je Kategorie getrennt bewerten – die höchste zählt.", "Modul 11");

F("M11-40", 3, "Für eine Zone mit RTUs an Pumpstationen werden zwei Szenarien bewertet: A) Gelegenheitstäter findet offenes Webinterface, B) kriminelle Gruppe mit OT-Wissen will erpressen. B ist plausibel. Welches SL-T ist für die betroffenen FRs angemessen?", [
  X("SL 1, da bisher nichts passiert ist", "Fehlende Vorfälle sind kein Schutzbedarf-Argument."),
  X("SL 2, weil Szenario A häufiger ist", "Das plausible Szenario mit höchstem Risiko bestimmt das Ziel."),
  R("SL 3", "Das entspricht dem Profil von SL 3."),
  X("SL 4, weil kritische Infrastruktur betroffen ist", "SL 4 setzt umfangreiche Ressourcen voraus – nicht automatisch bei KRITIS."),
], "SL-T folgt dem plausiblen Angreiferprofil.", "Modul 04/11");

F("M11-41", 2, "Eine bestehende Anlage hat eine Firewall mit sauberem Regelwerk, aber niemand prüft die Logs. Wie ist das in der detaillierten Beurteilung zu berücksichtigen?", [
  R("Die Firewall wirkt für FR 5, für FR 6 besteht ein Gap", "Gegenmaßnahmen je FR getrennt bewerten."),
  X("Als voll wirksam für alle FRs", "Logging ohne Auswertung erfüllt FR 6 nicht."),
  X("Als unwirksam, weil die Logs ungelesen sind", "Die Filterfunktion wirkt trotzdem."),
  X("Als nicht relevant, da Logs kein FR betreffen", "Logs betreffen FR 2 und FR 6."),
], "Vorhandene Maßnahmen differenziert bewerten.", "Modul 11");

F("M11-42", 3, "Die CRS einer Zelle enthält die Annahme „Nur Werkspersonal hat physischen Zugang“. Künftig sollen Fremdfirmen ohne Begleitung arbeiten. Was folgt daraus?", [
  X("Nichts, physischer Zugang ist kein Cyberthema", "Physischer Zugang ermöglicht direkte Angriffe."),
  R("Neu bewerten, die Annahme ist entfallen", "Annahmen tragen die Bewertung."),
  X("Die Annahme einfach aus der CRS streichen", "Streichen ohne Neubewertung lässt das Risiko unbewertet."),
  X("Die Fremdfirmen eine Vertraulichkeitserklärung unterschreiben lassen", "Das ersetzt keine technische Neubewertung."),
], "Geänderte Annahme → Re-Assessment.", "62443-3-2, ZCR 6");

F("M11-43", 2, "Welcher Befund aus einer Ist-Aufnahme ist ein Gap in Richtlinien und Verfahren?", [
  X("Die SPS-Firmware ist zwei Versionen alt", "Ein technisches Gap."),
  X("Der Zellenswitch hat keine Port-Security", "Ein technisches Gap."),
  R("Kein Prozess zum Entzug von Dienstleisterzugängen", "Ein Verfahrensgap."),
  X("Das HMI-Betriebssystem ist nicht mehr im Support", "Ein technisches Gap."),
], "Organisatorische Lücken gehören genauso in die CRS.", "Modul 11");

F("M11-44", 3, "Zwei Zonen tauschen Daten aus: Zone A (SL-T 3) und Zone B (SL-T 2). Welches SL-T sollte der verbindende Conduit mindestens haben?", [
  X("SL 2, da die schwächere Zone maßgeblich ist", "Ein schwacher Conduit gefährdet die stärkere Zone."),
  R("Mindestens SL 3, passend zu Zone A", "Der Conduit darf die höher eingestufte Zone nicht schwächen."),
  X("SL 1, weil Conduits keine Assets enthalten", "Conduits haben eigene SL-T."),
  X("SL 4, weil Conduits immer höher eingestuft werden", "Es gibt keinen automatischen Aufschlag."),
], "Conduits schützen die Zone mit dem höheren Bedarf.", "62443-3-2");

F("M11-45", 3, "Eine Risikobeurteilung wurde vor vier Jahren freigegeben. Seitdem kamen eine Cloud-Anbindung und neue Fernwartungswege hinzu. Was ist zu tun?", [
  X("Nichts, die Freigabe gilt bis zum nächsten Audit", "Die Grundlage hat sich verändert."),
  X("Nur die neuen Verbindungen in den Netzplan eintragen", "Dokumentation ohne Bewertung reicht nicht."),
  R("Gezieltes Re-Assessment und neue Freigabe", "Neue Zugangspunkte → neue Bewertung."),
  X("Die Risikobeurteilung komplett verwerfen und neu beginnen", "Meist reicht eine gezielte Aktualisierung."),
], "Die CRS lebt mit der Anlage.", "Modul 11");

F("M11-46", 2, "Der Asset Owner weigert sich, das Restrisiko einer Zone freizugeben. Was ist der richtige nächste Schritt?", [
  R("Weitere Maßnahmen prüfen, bis das Restrisiko tolerierbar ist", "Iteration bis Residual ≤ Tolerable."),
  X("Der Integrator gibt stattdessen frei", "Freigabe ist Sache des Risikoträgers."),
  X("Die Risikomatrix anpassen, bis es passt", "Kriterien zu ändern, um ein Ergebnis zu erzwingen, ist unzulässig."),
  X("Die Zone ohne Freigabe in Betrieb nehmen", "Damit wird das Verfahren umgangen."),
], "Freigabe ist eine echte Entscheidung – keine Formalität.", "62443-3-2, ZCR 5/7");

F("M11-47", 3, "Ein aktiver Scan in einer Zelle ist im Wartungsfenster freigegeben. Kurz vor Beginn meldet die Schicht, dass die Anlage doch weiterläuft. Was ist angemessen?", [
  X("Scan wie geplant durchführen, die Freigabe liegt vor", "Die Voraussetzung der Freigabe ist entfallen."),
  R("Scan verschieben und neu abstimmen", "Freigabe galt für das Wartungsfenster, nicht für den laufenden Betrieb."),
  X("Scan mit halbierter Geschwindigkeit durchführen", "Auch langsame Scans können empfindliche Geräte stören."),
  X("Nur die Hälfte der Geräte scannen", "Das Risiko bleibt für die gescannten Geräte."),
], "Aktive Methoden nur unter den freigegebenen Bedingungen.", "Modul 11");
