// Paket 12: Risk Assessment, Design, Maintenance
F("M11-58", 2, "Was ist der Zweck eines Datenflussdiagramms in der Ist-Aufnahme?", [
  X("Die Auslastung und Bandbreite aller Leitungen zu dokumentieren", "Kapazität ist nicht der Kern."),
  R("Sichtbar machen, wer mit wem spricht", "Grundlage für Conduits."),
  X("Die Kosten der Kommunikation zu ermitteln", "Kein Security-Inhalt."),
  X("Das Organigramm zu ersetzen", "Es zeigt Systeme, keine Personen."),
], "Datenflüsse sind die Basis jeder Conduit-Regel.", "Modul 11");

F("M11-59", 3, "Bei einer Brownfield-Aufnahme verweigert der Betrieb jede Netzwerkaufzeichnung. Was ist der beste Weg?", [
  X("Heimlich mitschneiden", "Vertrauensbruch und Risiko."),
  R("Passive Methode erklären, mit Freigabe und Testlauf starten", "Akzeptanz durch Transparenz."),
  X("Auf Netzdaten ganz verzichten", "Dann bleibt das Bild unvollständig."),
  X("Einen aktiven Scan als Ersatz durchführen", "Riskanter als ein Mitschnitt."),
], "OT-Assessments brauchen das Vertrauen des Betriebs.", "Modul 11");

F("M11-60", 2, "Welche Rolle übernimmt typischerweise die Moderation im 3-2-Workshop?", [
  R("OT-Security bzw. ein erfahrener Assessor", "Methodik sicherstellen, Teilnehmer einbinden."),
  X("Der Einkauf, weil er die Lieferanten am besten kennt", "Ohne Methodenkompetenz für die Risikobewertung."),
  X("Der Hersteller der Steuerungen", "Interessenkonflikt möglich."),
  X("Niemand, alle reden gleichzeitig", "Ohne Moderation kein belastbares Ergebnis."),
], "Gute Moderation macht Bewertungen vergleichbar.", "Modul 11");

F("M12-60", 3, "Eine Zone braucht Zeitsynchronisation, NTP aus dem Internet ist verboten. Welches Design passt?", [
  X("NTP-Port in der Perimeter-Firewall öffnen", "Direkter Internetzugang."),
  R("Eigene Zeitquelle (z. B. GNSS) in der OT, verteilt über definierte Conduits", "Unabhängig und kontrolliert."),
  X("Uhrzeit monatlich manuell stellen", "Zu ungenau für Logs."),
  X("Auf Zeitsynchronisation verzichten", "SR 2.11 wäre verletzt."),
], "Zeitquelle als kritische Infrastruktur behandeln.", "Modul 12");

F("M12-61", 2, "Was ist bei der Planung redundanter Zonen-Firewalls aus Sicht der 62443 wichtig?", [
  X("Unterschiedliche Firmwarestände, um Fehler zu streuen", "Verschiedene Stände führen zu abweichendem Verhalten beim Umschalten."),
  R("Gleiches Regelwerk und Verhalten bei Umschaltung", "Redundanz darf keine Lücke öffnen."),
  X("Dass eine Firewall immer offen ist", "Widerspricht dem Zweck."),
  X("Dass sie von verschiedenen Teams ohne Abstimmung gepflegt werden", "Führt zu Inkonsistenz."),
], "Hochverfügbarkeit und Sicherheit gemeinsam planen.", "Modul 12");

F("M12-62", 3, "Ein Design sieht vor, dass HMIs per RDP aus der DMZ erreichbar sind. Wie ist das zu bewerten?", [
  X("Unproblematisch, die DMZ ist vertrauenswürdig", "Die DMZ ist eine Übergangszone."),
  R("Kritisch: eingehende Admin-Protokolle in die OT nur über Jump-Host und mit Freigabe", "Kontrollierter Pfad."),
  X("Gut, da RDP verschlüsselt ist", "Verschlüsselung allein begrenzt nicht den Zugriff."),
  X("Nur nachts problematisch", "Die Uhrzeit ändert nichts."),
], "Admin-Zugänge in die OT eng begrenzen.", "Modul 12");

F("M13-55", 2, "Was gehört in eine gute Dokumentation eines Security-Vorfalls?", [
  X("Nur der Zeitpunkt, an dem der Vorfall behoben war", "Ohne Ablauf und Ursache lässt sich nichts lernen oder melden."),
  R("Zeitlinie, betroffene Systeme, Maßnahmen, Ursache", "Basis für Lessons Learned und Meldepflichten."),
  X("Eine Liste der beteiligten Personen ohne weitere Angaben", "Ohne Ablauf und Systeme ist der Vorfall nicht nachvollziehbar."),
  X("Nichts, um keine Spuren zu hinterlassen", "Nachvollziehbarkeit ist nötig."),
], "Saubere Dokumentation hilft bei Analyse und Meldung.", "Modul 13");

F("M13-56", 3, "Nach einem Vorfall stellt sich heraus: Die Logs der Zellen-Firewalls wurden nach 24 Stunden überschrieben. Was ist die Lehre?", [
  X("Logs sind ohnehin unwichtig", "Sie waren gerade jetzt nötig."),
  R("Aufbewahrungsdauer festlegen und Logs zentral sichern", "Forensik braucht Historie."),
  X("Firewalls abschalten", "Keine Lösung."),
  X("Nur Fehlermeldungen speichern", "Zu wenig für die Analyse."),
], "Log-Retention gehört ins Betriebskonzept (FR 6).", "Modul 13");

F("M13-57", 2, "Warum sollte ein OT-SOC Wartungsfenster kennen?", [
  R("Um geplante Änderungen von verdächtigen zu unterscheiden", "Kontext reduziert Fehlalarme."),
  X("Um in Wartungsfenstern Alarme abzuschalten", "Gerade dann kann ein Angreifer agieren."),
  X("Um die Schichtpläne zu erstellen", "Nicht seine Aufgabe."),
  X("Damit das SOC dort Personal für Schichtarbeit einplanen kann", "Personalplanung ist nicht der Sicherheitsgrund."),
], "Erkennung braucht Betriebswissen.", "Modul 13");

F("M13-58", 3, "Ein Ransomware-Angriff verschlüsselt den OT-Historian. Die Steuerung läuft. Was ist der beste nächste Schritt?", [
  X("Lösegeld sofort zahlen", "Keine Garantie, ermutigt Angreifer."),
  R("Historian isolieren, Ausbreitung prüfen, aus sauberem Backup wiederherstellen", "Eindämmen und kontrolliert wiederherstellen."),
  X("Die Steuerungen vorsorglich neu starten", "Kann den Prozess gefährden."),
  X("Den Historian ungeprüft wieder ans Netz nehmen", "Ausbreitungsrisiko."),
], "Eindämmen, Ursache prüfen, sauber wiederherstellen.", "Modul 13");

F("M13-59", 2, "Was ist eine sinnvolle Frequenz für Restore-Tests kritischer OT-Systeme?", [
  X("Nur einmal bei Inbetriebnahme", "Systeme ändern sich."),
  R("Regelmäßig und nach wesentlichen Änderungen", "Nur so bleibt der Restore verlässlich."),
  X("Nie, wenn die Backup-Software keine Fehler meldet", "Fehlerfreie Sicherung heißt nicht, dass der Restore gelingt."),
  X("Täglich auf dem Produktivsystem", "Unnötiges Produktionsrisiko."),
], "Testen auf Testsystem, regelmäßig und anlassbezogen.", "Modul 13");

F("M13-60", 3, "Ein Wartungslaptop eines Dienstleisters ist mit Malware infiziert und war an zwei Zellen angeschlossen. Was ist angemessen?", [
  X("Laptop zurückgeben und vergessen", "Mögliche Infektion der Zellen bleibt."),
  R("Betroffene Zellen prüfen, Dienstleister informieren, Regeln für Wartungsgeräte schärfen", "Eindämmung und Prävention."),
  X("Alle Zellen sofort abschalten", "Unverhältnismäßig ohne Befund."),
  X("Nur den Laptop neu installieren", "Die Zellen bleiben ungeprüft."),
], "Temporäre Geräte sind ein klassischer Einfallsweg.", "Modul 13");
