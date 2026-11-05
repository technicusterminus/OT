// M13 – Betrieb & Wartung
F("M13-01", 1, "Warum werden IPS-Systeme in Level 1/2 meist nur im Alarm-Modus betrieben?", [
  X("Weil IPS-Systeme OT-Protokolle meist nicht verstehen", "Viele verstehen OT-Protokolle – das Problem ist das Blockieren."),
  R("Weil ein blockierender Fehlalarm direkt die Produktion stoppen kann", "False Positive = Produktionsausfall."),
  X("Weil Alarme in OT-Netzen gesetzlich vorgeschrieben sind", "Keine solche Vorschrift."),
  X("Weil der Alarm-Modus mehr Angriffe erkennt als der Blockiermodus", "Die Erkennung ist gleich, nur die Reaktion unterscheidet sich."),
], "In OT gilt: erkennen und melden vor automatisch blockieren.", "Modul 13");

F("M13-02", 2, "Was ist ein Vorteil eines passiven netzbasierten IDS gegenüber einem hostbasierten IDS in OT?", [
  X("Es kann verschlüsselte Inhalte im Klartext analysieren", "Ohne Schlüssel sieht ein NIDS keine Inhalte."),
  R("Es braucht keine Agenten auf Steuerungen", "Auf SPSen sind Agenten meist unmöglich."),
  X("Es prüft Dateien direkt auf der SPS", "Das kann ein NIDS nicht."),
  X("Es ersetzt die Datensicherung", "Erkennung ist kein Backup."),
], "NIDS für Sichtbarkeit, HIDS für Hosts – beides ergänzt sich.", "Modul 13");

F("M13-03", 2, "Was kann ein HIDS auf einer Engineering-Workstation erkennen, was ein NIDS nicht sieht? (Mehrfachauswahl)", [
  R("Lokale Dateiänderungen", "Nur auf dem Host sichtbar."),
  R("Eingesteckte USB-Datenträger", "Kein Netzwerkereignis."),
  X("Verkehr zwischen zwei anderen Zellen", "Den sieht nur ein Netzwerksensor."),
  X("Broadcast-Stürme im Nachbarsegment", "Netzwerkereignis außerhalb des Hosts."),
], "Außerdem: neu gestartete Prozesse.", "Modul 13");

F("M13-04", 2, "Welches Ereignis ist ein typischer OT-spezifischer SIEM-Use-Case?", [
  X("Ein Mitarbeiter meldet sich am Mailserver an", "Ein IT-Ereignis ohne OT-Bezug."),
  R("SPS-Download außerhalb des Wartungsfensters", "Änderungen an der Steuerungslogik sind hochrelevant."),
  X("Ein Browser-Update auf einem Office-Client", "Kein OT-Bezug."),
  X("Ein Kalendereintrag für die Schichtübergabe", "Kein Security-Ereignis."),
], "OT-Use-Cases drehen sich um Änderungen an Steuerung, Zugriffen, Flüssen.", "Modul 13, SIEM");

F("M13-05", 2, "Welche Voraussetzung ist für die Korrelation von Ereignissen über viele Systeme essenziell?", [
  X("Geräte desselben Herstellers", "Korrelation funktioniert herstellerübergreifend."),
  R("Synchronisierte Zeit auf allen Quellen", "SR 2.11 – ohne korrekte Zeitstempel keine Korrelation."),
  X("Identische IP-Adressbereiche", "Adressierung spielt keine Rolle."),
  X("Gleiche Passwörter auf allen Systemen", "Das wäre ein Sicherheitsproblem."),
], "Zeit ist die Achse jeder Analyse.", "Modul 13; SR 2.11");

F("M13-06", 1, "Welche Reihenfolge entspricht den üblichen Incident-Response-Phasen?", [
  X("Wiederherstellung → Erkennung → Vorbereitung", "Vorbereitung muss vorher passieren."),
  R("Vorbereitung, Erkennung, Eindämmung, Beseitigung, …", "Lessons Learned schließt den Kreis."),
  X("Eindämmung → Vorbereitung → Lessons Learned", "Eindämmung ohne Erkennung und Vorbereitung ist planlos."),
  X("Beseitigung → Erkennung → Eindämmung", "Beseitigen setzt Erkennen voraus."),
], "Vorbereitung ist die wichtigste Phase.", "Modul 13, Incident Response");

F("M13-07", 3, "Bei einem Vorfall soll die Verbindung zwischen Leitstelle und Zelle getrennt werden. Was ist OT-spezifisch vorher zu klären?", [
  X("Keine Abstimmung nötig – Eindämmung hat Vorrang", "In OT kann eine Trennung selbst gefährlich sein."),
  R("Mit dem Betrieb die Prozessfolgen bewerten", "Safety entscheidet mit; Island-Mode-Verhalten kennen."),
  X("Erst eine Pressemitteilung abstimmen", "Kommunikation folgt später."),
  X("Den Hersteller um formale Erlaubnis bitten", "Die Entscheidung liegt beim Betreiber."),
], "Eindämmung darf die Safety nicht gefährden.", "Modul 13, Incident Response");

F("M13-08", 2, "Wer sollte in einer OT-Incident-Response-Kontaktliste stehen? (Mehrfachauswahl)", [
  R("Betrieb bzw. Schichtleitung und Safety", "Für Entscheidungen zur Eindämmung."),
  R("Hersteller und Integrator", "Für technische Unterstützung."),
  R("Zuständige Behörden für Meldepflichten", "Z. B. nach NIS2."),
  X("Alle Kunden des Unternehmens", "Kundenkommunikation ist ein eigener Prozess."),
  X("Sämtliche Mitarbeitenden des Konzerns", "Zu breit für eine Einsatzliste."),
], "Die Liste muss aktuell und erreichbar sein – auch offline.", "Modul 13, Incident Response");

F("M13-09", 2, "Was ist im Management of Change aus Security-Sicht besonders zu prüfen?", [
  X("Ausschließlich die Kosten der Änderung", "Kosten sind nicht das Security-Kriterium."),
  R("Ob Zonen oder Conduits betroffen sind", "Neue Verbindungen ändern das Risiko."),
  X("Nur die elektrische Sicherheit", "Das ist ein anderes Prüffeld."),
  X("Keine Security-Prüfung – MoC ist ein Safety-Instrument", "MoC gilt auch für Security."),
], "Jede Änderung kann das Risikobild verändern.", "Modul 13, MoC");

F("M13-10", 2, "Wie ist mit Notfalländerungen im MoC umzugehen?", [
  X("Sie sind nur mit Genehmigung der Geschäftsführung zulässig", "Notfälle gibt es – das Verfahren muss sie abdecken."),
  R("Vereinfachtes Verfahren, aber nachträglich dokumentieren und bewerten", "Nachvollziehbarkeit bleibt erhalten."),
  X("Sie werden nicht dokumentiert, um schnell zu bleiben", "Dann veraltet die Dokumentation."),
  X("Nur der Hersteller darf Notfalländerungen durchführen", "Die Rolle hängt von der Organisation ab."),
], "Schnell handeln, später sauber nachziehen.", "Modul 13, MoC");

F("M13-11", 1, "Was besagt die 3-2-1-Backup-Regel?", [
  X("3 Server, 2 Rechenzentren, 1 Administrator", "Keine Backup-Regel."),
  R("3 Kopien, 2 verschiedene Medien, 1 Kopie offline bzw. extern", "Schützt u. a. gegen Ransomware."),
  X("3 Tage, 2 Wochen, 1 Monat Aufbewahrung", "Das ist ein Rotationsschema, nicht die 3-2-1-Regel."),
  X("3 Backups pro Tag, 2 pro Nacht, 1 am Wochenende", "Keine anerkannte Regel."),
], "Mindestens eine Kopie muss außer Reichweite eines Angreifers sein.", "Modul 13, Backup");

F("M13-12", 2, "Was gehört in das Backup einer Fertigungszelle? (Mehrfachauswahl)", [
  R("SPS-Programme und HMI-Projekte", "Kern der Steuerung."),
  R("Netzwerk- und Firewall-Konfigurationen", "Ohne sie keine schnelle Wiederherstellung."),
  R("Lizenzen, Zertifikate und Schlüssel", "Oft vergessen, aber nötig."),
  X("Temporäre Browser-Caches der Bediengeräte", "Für die Wiederherstellung irrelevant."),
  X("Private Dateien der Schichtmitarbeitenden", "Gehören nicht auf OT-Systeme."),
], "Alles, was das System funktionsfähig macht.", "Modul 13, Backup");

F("M13-13", 1, "Was ist neben der Sicherung selbst die wichtigste Anforderung an ein Backup-Konzept?", [
  X("Möglichst große Speichermedien", "Kapazität allein sichert keine Wiederherstellung."),
  R("Regelmäßig getestete Wiederherstellung", "Ein ungetestetes Backup ist kein Backup."),
  X("Ablage der Backups direkt auf der SPS", "Fällt die SPS aus, ist auch das Backup weg."),
  X("Verzicht auf Dokumentation zugunsten der Geschwindigkeit", "Ohne Doku ist ein Restore im Notfall kaum möglich."),
], "Restore-Tests mit dem Betrieb abstimmen (RTO).", "Modul 13, Backup; SR 7.4");

F("M13-14", 2, "Warum reicht der CVSS-Score allein zur Priorisierung von OT-Schwachstellen nicht aus?", [
  X("Weil es für OT-Produkte keine CVSS-Werte gibt", "Es gibt sie, sie sind nur nicht ausreichend."),
  R("Weil Kontext das Risiko stark verändert", "Kontext entscheidet."),
  X("Weil CVSS für IT-Systeme, nicht für SPSen definiert ist", "CVSS ist plattformunabhängig."),
  X("Er reicht aus, wenn der Score über 9 liegt", "Auch ein hoher Score braucht Kontext."),
], "Eine kritische Lücke in einer isolierten Zone kann geringeres Risiko haben als eine mittlere an der Fernwartung.", "Modul 13");

F("M13-15", 2, "Wie gelangen Virensignaturen sicher in eine OT-Zone ohne Internetzugang?", [
  X("Jeder Host bekommt einen eigenen Internetzugang nur für Updates", "Das öffnet die Zone."),
  R("Über einen Relay- bzw. Update-Server in der DMZ", "Kontrollierte Vermittlung."),
  X("Manuell per Download auf jedem einzelnen Host", "Jeder Host bräuchte Internetzugang oder Datenträger – unkontrolliert und fehleranfällig."),
  X("Per privatem USB-Stick der Schichtleitung", "Unkontrollierter Datenträger."),
], "Die DMZ ist die Drehscheibe für Updates.", "Modul 13; Modul 10");

F("M13-16", 2, "Was ist ein Break-Glass-Konto?", [
  X("Ein Konto mit Ablaufdatum für Praktikanten", "Das ist ein befristetes Konto."),
  R("Ein versiegeltes, protokolliertes Notfallkonto", "Notfallzugriff – kontrolliert."),
  X("Ein Gastkonto ohne Passwort für Dienstleister", "Das wäre eine Sicherheitslücke."),
  X("Ein deaktiviertes Konto ausgeschiedener Mitarbeitender", "Das ist ein gesperrtes Konto."),
], "Zugriff im Notfall möglich, aber nachvollziehbar.", "Modul 13, Konten");

F("M13-17", 3, "Welche Prüfungen gehören zu einem einfachen IACS-Security-Audit? (Mehrfachauswahl)", [
  R("Abgleich von Netzplan und Inventar mit realen Netzwerkdaten", "Stimmt die Doku?"),
  R("Review der Firewall-Regeln auf any-any und verwaiste Regeln", "Typische Befunde."),
  X("Bewertung der Ergonomie der Leitwarten-Stühle", "Arbeitsschutz, kein Security-Audit."),
  R("Stichprobe, ob MoC eingehalten wurde", "Prozesse prüfen, nicht nur Technik."),
], "Technik und Prozesse gegen CRS und Anforderungen prüfen.", "Modul 13, Audit");

F("M13-18", 2, "Wie sollten Audit-Feststellungen dokumentiert werden?", [
  X("Mündlich im Abschlussgespräch", "Nicht nachverfolgbar."),
  R("Mit Risiko, Maßnahme, Verantwortlichem und Termin", "So werden sie abgearbeitet."),
  X("Nur als Gesamtzahl der Befunde", "Eine Zahl sagt nicht, was zu tun ist."),
  X("Anonymisiert, ohne Zuordnung zu Systemen", "Ohne Bezug keine Behebung."),
], "Feststellung → Maßnahme → Verantwortung → Termin.", "Modul 13, Audit");

F("M13-19", 2, "Welche Kennzahl eignet sich zur Steuerung der OT-Security im Betrieb?", [
  X("Anzahl der installierten Bildschirme in der Leitwarte", "Kein Security-Bezug."),
  R("Anteil getesteter Restores bzw. Patch-Rückstand nach Kritikalität", "Messbar und steuerungsrelevant."),
  X("Stromverbrauch der Firewalls", "Kein Security-Indikator."),
  X("Anzahl der Seiten im Security-Handbuch", "Umfang sagt nichts über Wirksamkeit."),
], "KPIs fließen in die Verbesserung des Security-Programms ein.", "Modul 13, Verbesserung");

F("M13-20", 2, "Was sollte nach einer Wiederherstellung aus dem Backup nach einem Vorfall erfolgen? (Mehrfachauswahl)", [
  R("Integrität des wiederhergestellten Systems prüfen", "War das Backup selbst sauber?"),
  R("Passwörter und Schlüssel ggf. erneuern", "Der Angreifer könnte sie kennen."),
  X("Den Vorfall abschließen, ohne Ursache zu klären", "Dann kommt der Angreifer zurück."),
  X("Die Protokolle löschen, um Speicher freizugeben", "Logs werden für die Analyse gebraucht."),
], "Außerdem: auf bekannten sicheren Stand bringen (Patches, Härtung).", "Modul 13, Backup/IR");

F("M13-21", 2, "Wo sollten NIDS-Sensoren in einer zonierten OT-Architektur bevorzugt Verkehr abgreifen?", [
  X("Nur am Internetanschluss des Unternehmens", "Dort sieht man nichts vom Verkehr innerhalb der OT."),
  R("An Zonengrenzen und in kritischen Zonen über SPAN/TAP", "Sichtbarkeit innerhalb und zwischen Zonen."),
  X("Nur im Office-Netz", "Der OT-Verkehr bleibt dann unsichtbar."),
  X("Auf den Firewalls, deren Logs dafür genügen", "Firewalls sehen nur den Verkehr über die Grenze."),
], "Sensoren dorthin, wo kritischer Verkehr fließt.", "Modul 13");

F("M13-22", 2, "Welche Ereignisquellen sind für ein OT-SIEM besonders wertvoll? (Mehrfachauswahl)", [
  R("Firewall- und VPN-Logs", "Zeigen Zugriffe über Grenzen."),
  R("SPS-Ereignisse wie Programm-Download oder Moduswechsel", "Zeigen Änderungen an der Steuerung."),
  X("Druckerprotokolle der Verwaltung", "Kein Bezug zu Zugriffen oder Änderungen im IACS."),
  X("Wetterdaten des Standorts", "Kein Security-Bezug."),
], "Außerdem: Jump-Host- und Fernzugriffs-Logs.", "Modul 13, SIEM");

F("M13-23", 3, "Ein SIEM meldet täglich hunderte Alarme, die niemand bearbeitet. Was ist die beste Maßnahme?", [
  X("Das SIEM abschalten, da es keinen Nutzen bringt", "Dann fehlt die Erkennung ganz."),
  R("Use Cases priorisieren und Rauschen reduzieren", "Bearbeitbare Alarme erfüllen FR 6."),
  X("Weitere Alarmregeln hinzufügen, um nichts zu verpassen", "Mehr Rauschen verschärft das Problem."),
  X("Alle Alarme per E-Mail an die gesamte Belegschaft verteilen", "Verantwortung verteilt sich, niemand handelt."),
], "Weniger, aber relevante Alarme.", "Modul 13, SIEM");

F("M13-24", 2, "Warum ist eine Baseline des normalen OT-Verkehrs für die Erkennung hilfreich?", [
  X("Weil sie die Firewall ersetzt", "Eine Baseline erkennt, sie filtert nicht."),
  R("Weil Abweichungen dadurch auffallen", "Neue Geräte oder Flüsse werden sichtbar."),
  X("Weil sie den Verkehr verschlüsselt", "Keine Verschlüsselungsfunktion."),
  X("Weil Baselines Angriffe automatisch blockieren", "Eine Baseline dient der Erkennung, sie blockiert nichts."),
], "Anomalieerkennung nutzt die Vorhersagbarkeit von OT.", "Modul 13");

F("M13-25", 2, "Was sollte in Tabletop-Übungen vor einem Ernstfall geprobt werden?", [
  X("Ausschließlich die IT-Abläufe des SOC", "OT-Entscheidungen fehlen dann."),
  R("Eindämmung mit Betrieb und Safety", "Macht den IR-Plan praxistauglich."),
  X("Nur das Formulieren der Pressemitteilung", "Ein Teilaspekt, nicht der Kern."),
  X("Technische Abläufe, Entscheidungen ergeben sich im Ernstfall", "Üben schafft Routine für das Unvorhersehbare."),
], "Üben mit den Menschen, die im Ernstfall entscheiden.", "Modul 13, Incident Response");

F("M13-26", 3, "Eine HMI zeigt Anzeichen einer Kompromittierung, die Anlage läuft stabil. Welches Vorgehen ist angemessen?", [
  X("HMI sofort hart ausschalten, unabhängig von den Folgen", "Kann Bedienbarkeit kosten und Beweise vernichten."),
  R("Abstimmen, Beweise sichern, kontrolliert isolieren", "Prozesssicherheit und Forensik abwägen."),
  X("Abwarten, solange der Prozess stabil läuft", "Der Angreifer kann weiter agieren."),
  X("Den Hersteller ohne Freigabe per Fernzugriff arbeiten lassen", "Unkontrollierter Zugriff in einer Vorfallsituation."),
], "Erst Bedienung sichern, dann isolieren.", "Modul 13, Incident Response");

F("M13-27", 2, "Welche Änderungen müssen über Management of Change laufen? (Mehrfachauswahl)", [
  R("Neue Firewall-Regel", "Ändert einen Conduit."),
  R("Firmware-Update einer SPS", "Ändert eine Komponente."),
  R("Neues Dienstleisterkonto", "Ändert Zugriffe."),
  X("Austausch des Druckerpapiers", "Keine Änderung am IACS."),
], "Konfiguration, Software und Zugriffe sind MoC-pflichtig.", "Modul 13, MoC");

F("M13-28", 2, "Was gehört nach Abschluss einer Änderung zum MoC?", [
  X("Den Antrag schließen, die Änderung ist ja umgesetzt", "Ohne Nacharbeit veraltet die Doku."),
  R("Doku, Inventar und Backup aktualisieren", "Grundlage für Audit und Incident Response."),
  X("Eine Rundmail an alle Mitarbeitenden", "Information ersetzt keine Dokumentation."),
  X("Nur die Rechnung des Dienstleisters prüfen", "Kaufmännisch, nicht technisch."),
], "Änderung erst abgeschlossen, wenn die Doku stimmt.", "Modul 13, MoC");

F("M13-29", 3, "Warum ist ein Rückfallplan Teil des MoC-Antrags?", [
  X("Weil er gesetzlich in jedem Fall vorgeschrieben ist", "Er ist gute Praxis, nicht überall Gesetz."),
  R("Für eine schnelle Rückkehr zum sicheren Zustand", "Verfügbarkeit hat Vorrang."),
  X("Weil Rückfallpläne die Testphase überflüssig machen", "Tests bleiben nötig."),
  X("Damit der Dienstleister mehr Stunden abrechnen kann", "Kein sachlicher Grund."),
], "Jede Änderung braucht einen Weg zurück.", "Modul 13, MoC");

F("M13-30", 2, "Wann sollten Zugriffsrechte im OT-Betrieb überprüft werden?", [
  X("Nur bei der Ersteinrichtung", "Rechte veralten."),
  R("Regelmäßig und anlassbezogen", "Rezertifizierung verhindert verwaiste Rechte."),
  X("Nur nach einem Sicherheitsvorfall", "Zu spät – verwaiste Rechte wären längst ausnutzbar gewesen."),
  X("Alle zehn Jahre bei der Generalüberholung", "Viel zu selten."),
], "Verwaiste Konten sind ein häufiger Befund.", "Modul 13, Konten");

F("M13-31", 2, "Wie sollten Dienstleisterkonten verwaltet werden?", [
  X("Dauerhaft aktiv mit Administratorrechten", "Maximale Angriffsfläche."),
  R("Personalisiert, befristet, protokolliert", "Least Privilege und Nachvollziehbarkeit."),
  X("Ein gemeinsames Konto für alle Dienstleister", "Nicht zuordenbar."),
  X("Mit den Zugangsdaten des Betreibers", "Weitergabe von Zugangsdaten ist ein Verstoß."),
], "2-4 SP.09, SR 1.3.", "Modul 13; 2-4 SP.09");

F("M13-32", 3, "Warum sind Gruppenkonten an Operator-HMIs problematisch, und wie wird oft kompensiert?", [
  X("Sie sind unproblematisch, da nur geschultes Personal Zugang hat", "Handlungen bleiben trotzdem nicht zuordenbar."),
  R("Keine Zuordnung zu Personen; Host-Anmeldung kompensiert", "Nachvollziehbarkeit vs. Bedienbarkeit."),
  X("Die 62443 schreibt Gruppenkonten an HMIs ausdrücklich vor", "Das tut sie nicht."),
  X("Sie werden durch zusätzliche Gruppenkonten kompensiert", "Das verschärft das Problem."),
], "SR 1.1 und SR 2.8 – mit Rücksicht auf essenzielle Funktionen.", "Modul 12/13");

F("M13-33", 2, "Was ist ein typischer Auditbefund im Bereich Backup?", [
  X("Backups sind vorhanden und regelmäßig erfolgreich getestet", "Das ist der Sollzustand, kein Befund."),
  R("Backups sind vorhanden, ein Restore wurde aber nie getestet", "Häufig und riskant."),
  X("Eine Backup-Kopie liegt offline", "Das ist gute Praxis."),
  X("Backups sind versioniert", "Ebenfalls gute Praxis."),
], "Ungetestete Backups sind ein Klassiker.", "Modul 13, Audit");

F("M13-34", 2, "Wie stellt der Asset Owner sicher, dass ein Wartungsdienstleister die vereinbarten 2-4-Anforderungen einhält?", [
  X("Durch Vertrauen in die langjährige Zusammenarbeit", "Vertrauen ersetzt keine Prüfung."),
  R("Durch vertragliche Festlegung, Nachweise und regelmäßige Überprüfung", "Vereinbaren und kontrollieren."),
  X("Durch die Selbstauskunft des Dienstleisters", "Die Verantwortung für das Risiko bleibt beim Asset Owner."),
  X("Durch jährlichen Wechsel des Dienstleisters", "Wechsel ersetzt keine Anforderungen."),
], "Anforderungen müssen vereinbart und geprüft werden.", "62443-2-4; Modul 08/13");
