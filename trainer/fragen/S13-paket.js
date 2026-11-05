// Paket 13: gemischt, Schwerpunkt Anwendung
F("M01-21", 2, "Welche Eigenschaft von OT-Netzen macht Anomalieerkennung besonders wirksam?", [
  X("Ein hoher Anteil an Web- und E-Mail-Verkehr", "Eher typisch für Office-IT."),
  R("Sehr regelmäßige, vorhersagbare Kommunikation", "Abweichungen fallen auf."),
  X("Häufig wechselnde Benutzer an jedem Gerät", "Eher untypisch für OT."),
  X("Viele mobile Endgeräte", "Nicht typisch für Steuerungsnetze."),
], "Vorhersagbarkeit ist ein Vorteil für die Erkennung.", "Modul 01/13");

F("M03-16", 3, "Ein Betreiber will eine essenzielle Funktion bewusst von einer Security-Maßnahme ausnehmen. Was muss passieren?", [
  X("Nichts, essenzielle Funktionen sind immer ausgenommen", "Ausnahmen müssen begründet werden."),
  R("Ausnahme begründen, kompensieren und dokumentieren", "Risiko bleibt bewusst gesteuert."),
  X("Die Funktion als nicht essenziell umdeklarieren", "Verschleiert das Risiko."),
  X("Die Maßnahme anlagenweit abschalten", "Unverhältnismäßig."),
], "Ausnahmen sind Risikoentscheidungen.", "Modul 03");

F("M04-20", 2, "Welches FR betrifft die Löschung sensibler Daten bei der Außerbetriebnahme einer HMI?", [
  X("FR 7, weil die HMI danach nicht mehr verfügbar ist", "Verfügbarkeit ist nicht der Punkt."),
  R("FR 4", "SR 4.2 – Persistenz von Informationen."),
  X("FR 5", "Datenfluss ist nicht betroffen."),
  X("FR 6", "Erkennung ist nicht betroffen."),
], "Sicheres Löschen gehört zur Vertraulichkeit.", "Modul 04/06");

F("M05-16", 3, "Ein Werk hat drei identische Fertigungslinien. Wie geht man bei der Zonierung effizient vor?", [
  X("Alle drei Linien in eine Zone legen", "Ein Vorfall betrifft dann alle drei."),
  R("Eine Musterzone bewerten und pro Linie eine eigene Zone instanziieren", "Wiederverwendung bei getrennten Auswirkungen."),
  X("Nur eine Linie bewerten, die anderen ignorieren", "Unvollständig."),
  X("Jede Maschine als eigene Zone", "Unnötig feingranular."),
], "Wiederverwendbare Zonenmuster sparen Aufwand.", "Modul 05/11");

F("M06-19", 2, "Welche SR verlangt ein aktuelles Komponenteninventar?", [
  X("SR 2.1 – Durchsetzung von Autorisierung", "Betrifft Rechte, nicht das Inventar."),
  X("SR 4.3", "Kryptographie."),
  R("SR 7.8", "Inventar der Steuerungssystemkomponenten."),
  X("SR 1.2", "Geräteauthentisierung."),
], "Inventar ist auch eine Systemanforderung.", "SR 7.8");

F("M11-61", 3, "Ein Team bewertet Szenarien nur mit externen Angreifern. Was fehlt am deutlichsten?", [
  X("Szenarien mit Naturkatastrophen", "Gehören eher in die Notfallplanung."),
  R("Innentäter und fahrlässiges Handeln", "Auch Mitarbeitende und Dienstleister sind Bedrohungsquellen."),
  X("Szenarien mit Hardwaredefekten", "Gehören zur Zuverlässigkeit."),
  X("Nichts, extern reicht", "Ein großer Teil der Vorfälle hat interne Ursachen."),
], "Bedrohungsquellen vollständig betrachten.", "Modul 11");

F("M12-63", 2, "Warum sollte die Management-Schnittstelle von Switches in einem eigenen VLAN bzw. Netz liegen?", [
  X("Weil die Switches sonst langsamer werden", "Kein Performancethema."),
  R("Damit Produktionsgeräte die Verwaltung nicht erreichen", "Trennung von Daten- und Managementebene."),
  X("Weil so weniger Kabel und Ports im Schaltschrank nötig sind", "Verkabelung ist kein Sicherheitsgrund."),
  X("Weil sonst keine Logs entstehen", "Logs entstehen trotzdem."),
], "Management-Plane trennen.", "Modul 12");

F("M12-64", 3, "Eine SPS unterstützt keine Authentisierung für Programmänderungen. Welche Kombination kompensiert am besten?", [
  X("Ein Aufkleber „Nicht ändern“", "Keine technische Wirkung."),
  R("Zugriff nur von der EWS, Schlüsselschalter, Monitoring von Downloads", "Mehrere Schichten."),
  X("Ein längeres Passwort an der HMI", "Betrifft die SPS nicht."),
  X("Die SPS regelmäßig neu starten, um Änderungen zu verwerfen", "Ohne Schutzwirkung und riskant für den Prozess."),
], "Fehlende Fähigkeit durch Defense in Depth ausgleichen.", "Modul 12");

F("M13-61", 2, "Was sollte nach einer Tabletop-Übung immer passieren?", [
  X("Nichts, die Übung war das Ziel", "Erkenntnisse gingen verloren."),
  R("Erkenntnisse in den IR-Plan einarbeiten", "Lessons Learned umsetzen."),
  X("Die Teilnehmer bewerten und bestrafen", "Zerstört die Lernkultur."),
  X("Die Übung mit denselben Annahmen sofort wiederholen", "Ohne Anpassung wenig Nutzen."),
], "Üben, lernen, verbessern.", "Modul 13");

F("M13-62", 3, "Im Audit zeigt sich: Fünf Dienstleisterkonten haben Adminrechte auf allen HMIs, genutzt wird eines. Was wird empfohlen?", [
  X("Alle Konten belassen, falls sie gebraucht werden", "Unnötige Angriffsfläche."),
  R("Ungenutzte sperren, Rechte auf Bedarf reduzieren, Rezertifizierung einführen", "Least Privilege."),
  X("Allen Operatoren ebenfalls Adminrechte geben", "Verschärft das Problem."),
  X("Nur die Passwörter aller fünf Konten neu vergeben", "Rechteumfang bleibt zu groß."),
], "Konten und Rechte regelmäßig prüfen.", "Modul 13");

F("M15-19", 2, "Was beschreibt eine „sicherheitsrelevante Übertragungsfunktion“ im Sinne der EN 50159?", [
  X("Den Funkmast und die Antennen entlang der Strecke", "Hardware des Übertragungssystems."),
  R("Die Schutzmechanismen in den Endgeräten", "Sequenz, Zeit, Code, ggf. Krypto."),
  X("Die Bandbreitenplanung des Providers", "Nicht sicherheitsrelevant im Sinne der Norm."),
  X("Die Schulung der Fahrdienstleiter", "Organisatorisch, keine Übertragungsfunktion."),
], "Die Sicherheit liegt an den Enden.", "Modul 15");

F("M15-20", 3, "Ein Gateway übersetzt zwischen zwei Safety-Protokollen und entfernt dabei die Sicherheitscodes. Was ist das Problem?", [
  X("Keins, solange das Gateway zuverlässig ist", "Die Ende-zu-Ende-Sicherung wird unterbrochen."),
  R("Die Ende-zu-Ende-Sicherung ist unterbrochen, das Gateway wird selbst sicherheitsrelevant", "Es braucht dann entsprechenden Nachweis."),
  X("Nur die Latenz steigt", "Das ist nicht das Hauptproblem."),
  X("Das Gateway muss nur verschlüsselt sein", "Verschlüsselung ersetzt keine Safety-Nachweise."),
], "Black Channel nur, wenn die Sicherung durchgängig bleibt.", "Modul 15");
