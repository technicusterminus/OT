// Szenario-Fragen Maintenance (überwiegend Prüfungspool)
F("M13-35", 3, "Das OT-IDS meldet nachts eine neue MAC-Adresse in der Zelle Abfüllung. Was ist der sinnvollste erste Schritt?", [
  X("Den Switchport sofort sperren", "Kann ein legitimes Gerät treffen und den Prozess stören."),
  R("Mit der Schicht klären, was angeschlossen wurde", "Erst verifizieren, dann handeln."),
  X("Alarm ignorieren, nachts finden keine Änderungen statt", "Gerade dann ist ein neues Gerät auffällig."),
  X("Die ganze Zelle vom Netz trennen", "Unverhältnismäßig ohne Klärung."),
], "Alarm → Kontext → Entscheidung.", "Modul 13");

F("M13-36", 3, "Ein SPS-Programm wurde außerhalb eines Wartungsfensters geändert, ein MoC-Ticket fehlt. Was ist angemessen?", [
  X("Nichts tun, solange die Anlage läuft", "Unautorisierte Änderung an der Steuerungslogik."),
  R("Als Vorfall prüfen und mit dem Backup vergleichen", "Integrität der Steuerung steht in Frage."),
  X("Das alte Programm sofort zurückspielen", "Ohne Prüfung kann das den Prozess stören."),
  X("Nur das MoC-Ticket nachträglich anlegen", "Dokumentiert, klärt aber nicht."),
], "Unerwartete Logikänderungen sind ein Top-Indikator.", "Modul 13");

F("M13-37", 3, "Ein Restore-Test zeigt: Das HMI-Backup ist vollständig, die Lizenz aber an die alte Hardware gebunden. Welche Lehre folgt?", [
  X("Backups sind überflüssig, wenn Lizenzen hardwaregebunden sind", "Das Backup bleibt nötig."),
  R("Lizenzen gehören ins Restore-Konzept", "Nur so gelingt ein Restore auf Ersatzhardware."),
  X("Restore-Tests sollten seltener stattfinden", "Gerade der Test hat das Problem aufgedeckt."),
  X("Nur Hardware desselben Typs einlagern, Konzept bleibt", "Hilft, löst aber Lizenzfragen nicht allgemein."),
], "Ein Restore-Test findet, was eine Sicherung allein nicht zeigt.", "Modul 13");

F("M13-38", 3, "Ransomware verschlüsselt die Office-IT. Die OT läuft noch, die DMZ ist erreichbar. Was hat Priorität?", [
  X("Die OT vorsorglich vollständig abschalten", "Kann unnötig und gefährlich sein."),
  R("IT/OT-Übergänge an definierten Punkten trennen", "Ausbreitung verhindern, Prozess sicher weiterführen."),
  X("Die DMZ für eine schnellere Wiederherstellung öffnen", "Öffnet einen Ausbreitungsweg."),
  X("Abwarten, bis die IT Entwarnung gibt", "Die Ausbreitung kann bis dahin erfolgen."),
], "Isolationspunkte und Island-Mode vorab planen.", "Modul 13");

F("M13-39", 2, "Ein Herstelleradvisory meldet eine kritische Lücke in der Webschnittstelle einer SPS. Die Schnittstelle ist im Werk deaktiviert. Wie ist zu priorisieren?", [
  X("Höchste Priorität, da der CVSS-Score kritisch ist", "Der Kontext senkt das Risiko deutlich."),
  R("Geringere Priorität, Deaktivierung prüfen", "Kontext vor Score."),
  X("Ignorieren, da die Schnittstelle aus ist", "Deaktivierung muss belegt und der Patch geplant werden."),
  X("Alle SPSen sofort tauschen", "Unverhältnismäßig."),
], "Erreichbarkeit und Konfiguration bestimmen das reale Risiko.", "Modul 13");

F("M13-40", 2, "Ein Techniker verlässt den Dienstleister. Was muss im Betrieb passieren?", [
  X("Nichts, sein Konto läuft automatisch aus", "Ohne Prozess bleibt es aktiv."),
  R("Zugänge zeitnah sperren und prüfen", "Leaver-Prozess auch für Dienstleister."),
  X("Das Passwort des gemeinsamen Dienstleisterkontos lassen", "Gemeinsame Konten sind selbst das Problem."),
  X("Seinen Nachfolger dessen Konto weiterverwenden lassen", "Nicht zuordenbar."),
], "Leaver-Prozesse gelten auch für Externe.", "Modul 13; 2-4 SP.09");

F("M13-41", 3, "Im Audit zeigt der Firewall-Review 30 Regeln ohne Kommentar, davon fünf any-any. Welche Empfehlung ist am besten?", [
  X("Alle 30 Regeln sofort löschen", "Kann nötige Flüsse unterbrechen."),
  R("Rezertifizieren, any-any zuerst ersetzen", "Risikobasiert und kontrolliert."),
  X("Nur Kommentare nachtragen", "Any-any bleibt bestehen."),
  X("Eine zweite Firewall davorschalten", "Löst das Regelproblem nicht."),
], "Befund → Maßnahme mit Priorität → kontrollierte Umsetzung.", "Modul 13");

F("M13-42", 2, "Nach einer Erweiterung zeigt der NIDS-Mitschnitt einen neuen Fluss Leitstelle → Zelle auf einem unbekannten Port. Was ist der richtige Weg?", [
  X("Den Fluss blockieren, da er nicht dokumentiert ist", "Kann die Erweiterung lahmlegen."),
  R("Zweck klären, dann über MoC regeln", "Dokumentation und Realität angleichen."),
  X("Die Baseline auf den neuen Zustand setzen und weitermachen", "Ohne Klärung wird ein möglicher Angriff legitimiert."),
  X("Das NIDS für diese Zelle deaktivieren", "Damit geht die Sichtbarkeit verloren."),
], "Neue Flüsse werden erklärt, nicht hingenommen.", "Modul 13");

F("M13-43", 3, "Die Tabletop-Übung zeigt: Niemand weiß, wer über eine Netztrennung entscheiden darf. Welche Maßnahme ist vorrangig?", [
  X("Mehr Monitoring-Werkzeuge beschaffen", "Werkzeuge lösen keine Entscheidungslücke."),
  R("Entscheidungsbefugnisse im IR-Plan festlegen", "Klare Rollen für den Ernstfall."),
  X("Die Übung wiederholen, bis es zufällig klappt", "Ohne Regelung bleibt die Lücke."),
  X("Die Entscheidung grundsätzlich der IT überlassen", "Ohne Betrieb und Safety fehlt die Prozesssicht."),
], "IR-Pläne brauchen benannte Entscheider.", "Modul 13");

F("M13-44", 2, "Welche Kennzahl zeigt am besten, ob das Patch-Management im Betrieb funktioniert?", [
  X("Anzahl der vom Hersteller veröffentlichten Patches", "Das misst den Hersteller, nicht den Betrieb."),
  R("Offene kritische Lücken je Zone über die Zeit", "Zeigt Abarbeitung und Rückstand."),
  X("Anzahl der Neustarts pro Monat", "Kein direkter Indikator."),
  X("Durchschnittliche Größe der Patch-Dateien", "Dateigröße sagt nichts über Abarbeitung oder Risiko."),
], "KPIs messen Wirkung, nicht Aktivität.", "Modul 13");

F("M13-45", 3, "Ein Wartungsdienstleister benötigt dringend Zugriff, der Jump-Host ist ausgefallen. Was ist angemessen?", [
  X("Direkten VPN-Zugang zur Zelle freischalten", "Umgeht alle Kontrollen."),
  R("Definiertes, protokolliertes Notfallverfahren", "Handlungsfähig bleiben, Kontrolle behalten."),
  X("Dem Dienstleister das Admin-Passwort am Telefon nennen", "Unkontrollierte Weitergabe."),
  X("Wartung ablehnen, bis der Jump-Host läuft", "Kann bei dringendem Bedarf die Verfügbarkeit gefährden."),
], "Notfallwege vorab definieren.", "Modul 13");

F("M13-46", 2, "Nach einem Firmware-Update einer SPS stimmt das Konfig-Backup nicht mehr mit dem Ist-Stand überein. Was fehlt im Prozess?", [
  R("Die Aktualisierung des Backups als fester Schritt nach jeder Änderung", "MoC-Nacharbeit."),
  X("Ein zweites Firmware-Update", "Das löst die Backup-Lücke nicht."),
  X("Ein Verzicht auf Backups bei SPSen", "Verschärft das Problem."),
  X("Eine längere Testphase vor dem Update", "Hilft der Stabilität, nicht dem Backup."),
], "Nach der Änderung ist vor dem Backup.", "Modul 13");
