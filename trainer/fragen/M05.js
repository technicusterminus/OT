// M05 – Risikobeurteilung (3-2)
F("M05-01", 1, "Was ist der erste Schritt im Risikobeurteilungsablauf der 62443-3-2?", [
  X("Zonen und Conduits bilden", "Das ist ZCR 3 – vorher muss klar sein, was betrachtet wird."),
  R("Das System under Consideration (SuC) festlegen", "ZCR 1: Grenzen und Zugangspunkte abstecken."),
  X("Die detaillierte Risikobeurteilung durchführen", "Das ist ZCR 5."),
  X("Die Bedrohungen identifizieren", "Das ist Teil von ZCR 5."),
], "Ohne abgegrenztes SuC bleibt unklar, was bewertet wird.", "62443-3-2, ZCR 1");

F("M05-02", 2, "Die erste Risikobeurteilung zeigt ein tolerierbares Risiko. Was folgt daraus?", [
  X("Die Beurteilung endet, eine Dokumentation ist nicht nötig", "Dokumentiert wird trotzdem (ZCR 6)."),
  R("Detaillierte Beurteilung entfällt, Doku bleibt Pflicht", "ZCR 4 entscheidet, ob ZCR 5 nötig ist."),
  X("Für die Zonen wird pauschal SL 1 festgelegt", "Ein SL-T wird begründet festgelegt, nicht automatisch."),
  X("Die Zonen werden zu einer einzigen Zone zusammengelegt", "Die Zonierung bleibt bestehen."),
], "Niedriges Anfangsrisiko verkürzt den Ablauf, ersetzt aber nicht die Dokumentation.", "62443-3-2, ZCR 4");

F("M05-03", 2, "Welche Assets sollen laut 3-2 grundsätzlich gesondert zoniert werden? (Mehrfachauswahl)", [
  R("Safety-bezogene Assets (SIS)", "SIS gehören in eigene Zonen."),
  R("Drahtlose Geräte und Netze", "Wireless ist leichter erreichbar und wird gesondert betrachtet."),
  X("Alle Assets mit gleicher Firmware-Version", "Firmware-Stand ist kein Zonierungskriterium."),
  R("Temporär verbundene Geräte", "Wartungslaptops und USB-Geräte werden gesondert betrachtet."),
  X("Alle Geräte desselben Herstellers", "Die Herstellerzugehörigkeit ist kein Kriterium."),
], "Außerdem gesondert: Geräte, die über externe/nicht vertrauenswürdige Netze angebunden sind.", "62443-3-2, ZCR 3");

F("M05-04", 1, "Wer gibt die Ergebnisse der Risikobeurteilung frei?", [
  X("Der Integrator", "Er erstellt oft die Unterlagen, trägt aber nicht das Risiko."),
  X("Der Hersteller", "Er ist nicht für die Anlage verantwortlich."),
  R("Der Asset Owner", "ZCR 7: Freigabe durch den Risikoträger."),
  X("Die Zertifizierungsstelle", "Eine Zertifizierung ist kein Teil von 3-2."),
], "Wer das Risiko trägt, gibt frei.", "62443-3-2, ZCR 7");

F("M05-05", 2, "Wofür steht CRS im Kontext von 3-2?", [
  R("Cybersecurity Requirements Specification", "Dokumentiert SuC, Zonen/Conduits, SL-T, Annahmen, Bedrohungen, Toleranz."),
  X("Control Room Security Standard", "Klingt plausibel, ist aber kein 3-2-Begriff."),
  X("Common Risk Scoring System", "Gemeint ist kein Scoring-System."),
  X("Component Requirement Set", "Komponentenanforderungen heißen CR und stehen in 4-2."),
], "Die CRS ist das zentrale Ergebnisdokument von 3-2.", "62443-3-2, ZCR 6");

F("M05-06", 3, "In welchem Schritt der detaillierten Risikobeurteilung wird das SL-T festgelegt?", [
  X("Vor der Identifikation der Bedrohungen", "Ohne Bedrohungen gibt es keine Grundlage für das SL-T."),
  R("Nach dem unmitigierten Risiko, vor den Maßnahmen", "Erst Risiko verstehen, dann Ziel festlegen, dann Maßnahmen wählen."),
  X("Nach der Freigabe durch den Asset Owner", "Die Freigabe bestätigt das festgelegte SL-T."),
  X("Erst nach der Inbetriebnahme anhand von Messungen", "Das wäre eine SL-A-Bewertung."),
], "Bedrohung → Schwachstelle → Auswirkung → Wahrscheinlichkeit → unmitigiertes Risiko → SL-T → Gegenmaßnahmen → Restrisiko.", "62443-3-2, ZCR 5");

F("M05-07", 2, "Wer legt die Risikomatrix und das tolerierbare Risiko fest?", [
  X("Die Norm gibt eine verbindliche Matrix vor", "3-2 enthält nur Beispiele."),
  R("Der Asset Owner", "Risikokriterien sind Unternehmensvorgaben."),
  X("Der Produkthersteller", "Er kennt das Risiko der konkreten Anlage nicht."),
  X("Die zuständige Aufsichtsbehörde", "Behörden setzen Rahmen, aber keine konkrete Risikomatrix."),
], "Risikokriterien kommen aus dem Security-Programm des Asset Owners.", "Modul 05");

F("M05-08", 2, "Welche Informationen braucht ein Netzwerk-Engineer vorrangig, um Zonen und Conduits sauber festzulegen? (Mehrfachauswahl)", [
  R("Asset-Inventar", "Ohne Inventar keine Gruppierung."),
  R("Kommunikationsmatrix mit Zweck und Richtung", "Grundlage für Conduit-Regeln."),
  X("Die Anschaffungskosten der Geräte", "Kosten beeinflussen Maßnahmen, nicht die Zonenbildung."),
  X("Die Seriennummern aller Netzwerkkabel", "Physische Details sind für die Zonierung irrelevant."),
], "Inventar und Datenflüsse sind das Fundament – Kritikalität kommt aus der Konsequenzbewertung.", "Modul 05, Praxis");

F("M05-09", 3, "Wie wird die erste Risikobeurteilung (ZCR 2) typischerweise durchgeführt?", [
  X("Mit einem Penetrationstest aller Komponenten", "Zu aufwendig und riskant für eine erste Einschätzung."),
  R("Als Worst-Case-Betrachtung ohne bestehende Gegenmaßnahmen", "So wird der Schutzbedarf nicht unterschätzt."),
  X("Auf Basis der vom Hersteller angegebenen SL-C-Werte", "SL-C ist ein Design-Input, keine Risikogrundlage."),
  X("Als statistische Auswertung vergangener Vorfälle", "Historie ist ein Faktor, aber nicht die Methode."),
], "Grob und pessimistisch zuerst – fein und mit Maßnahmen später.", "62443-3-2, ZCR 2");

F("M05-10", 2, "Ein Fernwirk-Router verbindet eine Außenstation über das öffentliche LTE-Netz. Wie ist das nach 3-2 zu behandeln?", [
  X("Er gehört in dieselbe Zone wie die Leitstelle", "Externe Anbindung erfordert eine gesonderte Betrachtung."),
  R("Gesondert zonieren, Verbindung als gesicherter Conduit", "Z. B. IPsec mit Gerätezertifikaten, Default-Deny."),
  X("Er fällt nicht unter 62443, weil er im Providernetz hängt", "Er ist Teil des IACS und ein Zugangspunkt."),
  X("Eine SIM-PIN ist als Schutzmaßnahme ausreichend", "Die PIN schützt die SIM, nicht die Kommunikation."),
], "Nicht vertrauenswürdige Netze → eigene Zone, abgesicherter Conduit (SR 1.13).", "62443-3-2, ZCR 3");
