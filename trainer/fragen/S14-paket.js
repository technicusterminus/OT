// Paket 14: Risk Assessment & Design vertieft
F("M11-62", 2, "Was ist ein typisches Ergebnis, wenn bei der Risikobeurteilung der Betrieb nicht beteiligt war?", [
  X("Die Bewertung wird besonders genau, weil sie neutral ist", "Ohne Prozesswissen fehlen die Folgen."),
  R("Konsequenzen werden falsch eingeschätzt", "Prozessfolgen kennt nur der Betrieb."),
  X("Das SL-T wird automatisch höher angesetzt", "Es gibt keinen solchen Automatismus."),
  X("Die Beurteilung ist schneller und dennoch belastbar", "Schnell ja, belastbar nein."),
], "Betrieb und Safety gehören an den Tisch.", "Modul 11");

F("M11-63", 3, "Eine Zone enthält Systeme mehrerer Abteilungen mit unterschiedlichen Verantwortlichen. Was ist für die Zonierung wichtig?", [
  X("Nichts, Verantwortung ist kein Security-Thema", "Jede Zone braucht einen Verantwortlichen."),
  R("Eine klare Verantwortung je Zone festlegen, ggf. Zonen danach schneiden", "Sonst fühlt sich niemand zuständig."),
  X("Die Zone allen Abteilungen gleichzeitig zuordnen", "Geteilte Verantwortung verläuft oft im Sande."),
  X("Die Zone dem Hersteller zuordnen", "Der Hersteller betreibt die Anlage nicht."),
], "Verantwortlichkeit ist ein Zonierungskriterium.", "Modul 05/11");

F("M11-64", 2, "Wann ist die detaillierte Risikobeurteilung (ZCR 5) abgeschlossen?", [
  X("Wenn alle Maßnahmen bestellt sind", "Bestellung ist Umsetzung."),
  R("Wenn das Restrisiko tolerierbar und dokumentiert ist", "Residual ≤ Tolerable."),
  X("Wenn der Hersteller zugestimmt hat", "Der Asset Owner entscheidet."),
  X("Nach genau drei Workshop-Terminen mit allen Beteiligten", "Es gibt keine feste Anzahl."),
], "Iterieren, bis das Restrisiko passt.", "62443-3-2");

F("M12-65", 2, "Welches Dokument nutzt der Betreiber, um im Betrieb zu prüfen, ob Firewall-Regeln noch dem Design entsprechen?", [
  X("Das Angebot des Integrators", "Ein kaufmännisches Dokument."),
  R("Die Conduit-Spezifikationen", "Soll-Zustand der erlaubten Flüsse."),
  X("Den Lieferschein und das Datenblatt der Firewall", "Sagen nichts über die erlaubten Flüsse."),
  X("Das Handbuch des Betriebssystems", "Nicht anlagenspezifisch."),
], "Conduit-Spezifikationen sind der Soll-Zustand.", "Modul 12/13");

F("M12-66", 3, "Ein Integrator will für die Inbetriebnahme temporär alle Flüsse zwischen zwei Zonen erlauben. Was ist angemessen?", [
  X("Akzeptieren, die Regel kann ja bleiben", "Temporär wird sonst dauerhaft."),
  R("Befristet erlauben, protokollieren und vor Übergabe nachweislich zurückbauen", "Kontrollierte Ausnahme."),
  X("Ablehnen, Inbetriebnahme ohne Kommunikation", "Nicht praktikabel."),
  X("Die Zonen dauerhaft zusammenlegen", "Zerstört die Zonierung."),
], "Ausnahmen befristen und im CSAT prüfen.", "Modul 12");

F("M12-67", 2, "Welche Maßnahme passt zu SR 2.4 (Mobile Code) an einer HMI?", [
  R("Ausführung von Skripten und Makros einschränken", "Mobile Code kontrollieren."),
  X("Die HMI auf ein mobiles Tablet für Rundgänge umstellen", "Mobile Geräte sind nicht gemeint – Mobile Code sind ausführbare Inhalte."),
  X("Mehr Arbeitsspeicher einbauen, damit Skripte schneller laufen", "Leistung ist kein Schutz vor Mobile Code."),
  X("WLAN an der HMI aktivieren", "Erhöht eher das Risiko."),
], "Mobile Code = Skripte, Makros, Applets.", "SR 2.4");

F("M12-68", 3, "Ein Design nutzt dieselbe Firewall für die IT/OT-Grenze und für die Zellengrenzen. Was ist zu beachten?", [
  X("Nichts, ein Gerät ist einfacher", "Ausfall und Fehlkonfiguration betreffen alles."),
  R("Getrennte Regelwerke bzw. Kontexte und Auswirkungen eines Ausfalls bewerten", "Einfachheit gegen Abhängigkeit abwägen."),
  X("Die Firewall ohne Logging betreiben, um Last zu sparen", "Widerspricht FR 6."),
  X("Alle Zonen in ein VLAN legen", "Zerstört die Trennung."),
], "Zentralisierung erhöht Abhängigkeiten.", "Modul 12");

F("M13-63", 2, "Warum ist ein aktuelles Netzdiagramm für die Incident Response wichtig?", [
  X("Für die Einarbeitung neuer Mitarbeitender in der Leitwarte", "Nützlich, aber nicht der IR-Grund."),
  R("Um betroffene Bereiche und Isolationspunkte schnell zu finden", "Zeit ist im Vorfall kritisch."),
  X("Damit Angreifer es nicht finden", "Kein IR-Grund."),
  X("Weil Versicherungen es verlangen", "Nicht der fachliche Grund."),
], "Im Vorfall zählt jede Minute.", "Modul 13");

F("M13-64", 3, "Ein Patch wurde eingespielt, danach meldet die HMI sporadische Kommunikationsabbrüche. Was ist richtig?", [
  X("Abwarten, das legt sich", "Verfügbarkeit ist gefährdet."),
  R("Über den Rückfallplan zurückrollen und mit dem Hersteller analysieren", "Verfügbarkeit hat Vorrang."),
  X("Noch einen weiteren Patch einspielen", "Ohne Analyse verschlimmert sich die Lage."),
  X("Die HMI dauerhaft vom Netz nehmen", "Bedienung fällt aus."),
], "Rückfallplan ist Teil jedes Patches.", "Modul 13");

F("M13-65", 2, "Was ist der Zweck einer Rezertifizierung von Firewall-Regeln?", [
  X("Regeln jährlich neu durchzunummerieren", "Formalität ohne Nutzen."),
  R("Prüfen, ob jede Regel noch gebraucht und begründet ist", "Verwaiste Regeln entfernen."),
  X("Die Firewall-Lizenz zu verlängern", "Kaufmännisch."),
  X("Für jede Regel eine identische Backup-Regel anzulegen", "Doppelte Regeln vergrößern nur die Angriffsfläche."),
], "Regelwerke regelmäßig ausmisten.", "Modul 12/13");
