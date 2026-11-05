// Prüfungspool, Erweiterung 2 – nur in Simulationen
// Fundamentals
F("M01-18", 3, "Ein Werk verbindet eine neue Abfüllmaschine per Hersteller-LTE-Modem mit dessen Cloud. Was ist aus OT-Sicht das Hauptproblem?", [
  X("Die zusätzlichen Mobilfunkkosten", "Kosten sind kein Security-Kriterium."),
  R("Ein unkontrollierter Zugangspunkt am Perimeter vorbei", "Das Modem umgeht DMZ und Zonengrenzen."),
  X("Die geringere Bandbreite von LTE", "Performance ist nicht das Kernproblem."),
  X("Dass die Maschine dadurch IT-Systeme verwendet", "Die Technologie selbst ist nicht das Problem, der Weg ist es."),
], "Jeder Weg nach außen muss über definierte Conduits laufen.", "Modul 01/05");

F("M02-15", 3, "Eine Ausschreibung verlangt „Komponenten nach 62443-2-4“. Was ist daran fachlich falsch?", [
  X("Nichts, 2-4 gilt für alle Lieferungen", "2-4 richtet sich an Dienstleister."),
  R("2-4 betrifft Dienstleister; für Komponenten sind 4-1 und 4-2 maßgeblich", "Falscher Normteil für die Rolle."),
  X("2-4 ist ein Technical Report und nicht einforderbar", "2-4 ist ein International Standard."),
  X("Komponenten können nicht nach 62443 bewertet werden", "Doch, über 4-2 (und 4-1 für den Prozess)."),
], "Rolle → Normteil: Dienstleister 2-4, Produkt 4-1/4-2.", "Modul 02");

F("M03-12", 3, "Für eine HMI wird ein automatischer Bildschirm-Logout nach 2 Minuten gefordert. Was ist zu prüfen?", [
  R("Ob dadurch die Prozessbeobachtung im Betrieb leidet", "Bedienen/Beobachten ist eine essenzielle Funktion."),
  X("Ob 2 Minuten die kürzeste mögliche Zeit sind", "Kürzer verschärft das Problem."),
  X("Ob die HMI eine Lizenz für Logouts besitzt", "Lizenzen sind nicht die Kernfrage."),
  X("Nichts, kurze Timeouts sind immer sicherer", "Security darf essenzielle Funktionen nicht stören."),
], "Alternative: Sperre nur von Eingaben, Anzeige bleibt sichtbar.", "Modul 03");

F("M04-16", 3, "Eine Zone erhält SL-T {3,3,3,3,3,3,3}, ohne dass Vertraulichkeit relevant ist. Was ist die Folge?", [
  X("Keine – ein einheitlicher Vektor ist korrekt", "Er ist nicht begründet."),
  R("Unnötiger Aufwand für FR 4 ohne Risikobezug", "SL-T sollte je FR begründet sein."),
  X("Die Zone wird dadurch automatisch zertifizierbar", "SL-T hat mit Zertifizierung nichts zu tun."),
  X("Das SL-T wird vom Validator auf 2 korrigiert", "Es gibt keine automatische Korrektur."),
], "Differenzieren nach FR spart Aufwand und schärft den Fokus.", "Modul 04");

F("M05-12", 3, "In einer Risikobeurteilung fehlen die drahtlosen Handterminals der Lagerlogistik. Was ist der Fehler?", [
  X("Keiner, mobile Geräte gehören nicht ins IACS", "Wenn sie Prozesse steuern, gehören sie dazu."),
  R("Wireless-Geräte werden laut 3-2 gesondert betrachtet und dürfen nicht fehlen", "Eigene Zone, eigene Bewertung."),
  X("Handterminals gehören in die Office-Zone", "Ohne Analyse ist das eine unbegründete Zuordnung."),
  X("Sie werden nur im Design betrachtet", "Zonierung ist Teil von 3-2."),
], "Wireless, temporäre und externe Geräte gesondert betrachten.", "Modul 05");

F("M06-15", 3, "Ein Audit zeigt: Logs werden gesammelt, aber Zeitstempel weichen um Minuten ab. Welche SR ist betroffen?", [
  X("SR 5.2 – Schutz von Zonengrenzen", "Kein Bezug zur Zeit."),
  R("SR 2.11 – Zeitstempel", "Abweichende Zeit verhindert Korrelation."),
  X("SR 7.3 – Backup", "Kein Bezug zur Zeit."),
  X("SR 1.5 – Authentisierungsmittel", "Kein Bezug zur Zeit."),
], "Zeit synchronisieren und die Quelle schützen.", "SR 2.11");

F("M07-11", 3, "Ein Betreiber misst seit zwei Jahren Patch-Rückstand und Restore-Quote und passt Prozesse daraufhin an. Welcher Reifegrad passt?", [
  X("ML 2 – Managed", "Gemessen und verbessert wird erst ab ML 4."),
  X("ML 3 – Defined", "Gelebt, aber ohne systematische Verbesserung."),
  R("ML 4 – Improving", "Messen und kontinuierlich verbessern."),
  X("ML 1 – Initial", "Dafür ist der Prozess zu ausgereift."),
], "ML 4 = gemessen und verbessert.", "Modul 07");

F("M09-13", 3, "Ein Hersteller liefert Updates unsigniert per Download-Link aus. Welche Anforderungen sind betroffen?", [
  R("SUM in 4-1 und die Integritätsprüfung (CR 3.4) in 4-2", "Updates müssen authentisch und prüfbar sein."),
  X("Nur SG, weil die Anleitung fehlt", "Das Kernproblem ist die Integrität."),
  X("Keine, solange der Link HTTPS nutzt", "HTTPS schützt den Transport, nicht die Herkunft der Datei."),
  X("Nur 2-4 SP.11 beim Integrator", "Primär liegt das Problem beim Hersteller."),
], "Signierte Updates sind Grundlage für sicheres Patchen.", "62443-4-1/4-2");

// Risk Assessment
F("M11-48", 3, "Bei der Ist-Aufnahme stellt sich heraus, dass Office- und OT-Netz denselben Domänencontroller nutzen. Wie ist das einzuordnen?", [
  X("Unkritisch, solange Firewalls zwischen den Netzen stehen", "Die gemeinsame Identität umgeht die Trennung."),
  R("Als Gap: Eine kompromittierte IT-Domäne öffnet auch die OT", "Gemeinsame Identitäten verbinden die Zonen."),
  X("Als Vorteil, da die Administration einfacher wird", "Einfacher ja, aber zulasten der Trennung."),
  X("Als Thema ausschließlich für das IT-Team", "Es betrifft direkt die OT-Zonierung."),
], "Getrennte Identitäten sind Teil der Zonierung.", "Modul 11/12");

F("M11-49", 3, "Zwei Teams bewerten dieselbe Zone: eins mit Konsequenz 5, eins mit 3. Was ist der beste Weg zur Einigung?", [
  X("Den Mittelwert 4 verwenden", "Mittelwerte verwässern den Worst Case."),
  R("Szenarien und Annahmen offenlegen und gegen die Kriterien des Asset Owners prüfen", "Nachvollziehbarkeit statt Bauchgefühl."),
  X("Die niedrigere Bewertung übernehmen, um Kosten zu sparen", "Kosten bestimmen nicht das Risiko."),
  X("Den Integrator entscheiden lassen", "Die Entscheidung liegt beim Asset Owner."),
], "Unterschiede entstehen meist aus unterschiedlichen Annahmen.", "Modul 11");

F("M11-50", 3, "Eine Zone hat hohe Konsequenzen, ist aber physisch isoliert und nur vor Ort bedienbar. Wie beeinflusst das die Bewertung?", [
  X("Gar nicht, die Konsequenz allein bestimmt das Risiko", "Risiko = Konsequenz × Wahrscheinlichkeit."),
  R("Die Wahrscheinlichkeit sinkt; Zugänge wie USB und Wartung bleiben zu bewerten", "Geringe Exposition, aber nicht null."),
  X("Die Zone kann aus dem SuC entfernt werden", "Sie bleibt Teil des Systems."),
  X("Das SL-T wird automatisch 1", "SL-T folgt aus der Bewertung, nicht aus der Isolation."),
], "Isolation senkt die Likelihood, beseitigt aber nicht alle Wege.", "Modul 11");

F("M11-51", 2, "Welche Information in der CRS hilft dem Integrator am meisten bei der Produktauswahl?", [
  X("Die Namen der Workshop-Teilnehmer", "Für die Produktwahl irrelevant."),
  R("Die SL-T-Vektoren je Zone und Conduit", "Daraus folgen die nötigen SR/REs und SL-C."),
  X("Das Datum der Risikobewertung", "Hilfreich für Aktualität, nicht für die Auswahl."),
  X("Die Gliederung der CRS nach Kapiteln", "Die Struktur hilft beim Lesen, bestimmt aber keine Produktanforderungen."),
], "SL-T steuert die Auswahl der Komponenten.", "Modul 11/12");

F("M11-52", 3, "Eine Brownfield-Anlage nutzt Windows-XP-HMIs ohne Herstellersupport. Wie geht die Beurteilung damit um?", [
  X("Sofort ersetzen, sonst ist keine Bewertung möglich", "Bewertung ist möglich und nötig."),
  R("Als Schwachstelle bewerten und Kompensationen sowie Migration planen", "Risiko transparent machen, handlungsfähig bleiben."),
  X("Ignorieren, solange die HMIs laufen", "Bekannte, unpatchbare Lücken erhöhen die Likelihood."),
  X("Die HMIs aus der Zonierung ausnehmen", "Gerade sie brauchen Schutz."),
], "Legacy: isolieren, härten, überwachen, Migration planen.", "Modul 11");

F("M11-53", 3, "Nach der Freigabe der CRS stellt der Integrator fest, dass ein zugesagtes Produkt das SL-C nicht erreicht. Wer muss eingebunden werden?", [
  X("Niemand, der Integrator löst das intern", "Das Restrisiko ändert sich."),
  R("Der Asset Owner – Kompensation oder Risikoakzeptanz müssen neu entschieden werden", "Er trägt das Risiko."),
  X("Nur der Hersteller", "Er kann informieren, nicht entscheiden."),
  X("Die Zertifizierungsstelle", "Sie ist nicht Teil der Projektentscheidung."),
], "Änderungen am Restrisiko gehen zurück zum Asset Owner.", "Modul 11/12");

F("M11-54", 2, "Welche Quelle ist für die Bedrohungslage einer Kläranlage am aussagekräftigsten?", [
  X("Allgemeine Presseberichte über Cyberangriffe", "Zu unspezifisch."),
  R("Branchenspezifische Lageberichte und Warnungen von CERTs bzw. ISACs", "Bezug zu Branche und Technik."),
  X("Marketingmaterial von Security-Herstellern", "Interessengeleitet."),
  X("Die Zahl vergangener eigener Vorfälle", "Fehlende Vorfälle sind kein Beleg für Sicherheit."),
], "Bedrohungsinformationen branchenspezifisch beziehen.", "Modul 11");

F("M11-55", 3, "Ein SuC endet am Übergaberouter des Providers. Wohin gehört der LTE-Router der Außenstation?", [
  R("Ins SuC als Zugangspunkt, da er Teil der Anlage ist", "Er wird vom Betreiber eingesetzt und verbindet das IACS."),
  X("Außerhalb, da er im Providernetz kommuniziert", "Der Router selbst gehört zur Anlage."),
  X("In die Office-Zone", "Er hat mit Office nichts zu tun."),
  X("Er wird nicht betrachtet, da er keinen Prozess steuert", "Zugangspunkte sind sicherheitsrelevant."),
], "Eigene Netzwerkgeräte an der Grenze gehören ins SuC.", "Modul 11");

// Design
F("M12-48", 3, "Für eine Zone mit SL-T 3 für FR 3 wird Application Whitelisting auf den HMIs geplant. Was muss vor dem Rollout passieren?", [
  X("Nichts, Whitelisting ist immer kompatibel", "Es kann HMI-Software blockieren."),
  R("Test mit der HMI-Software und Freigabe des Herstellers", "Verträglichkeit mit essenziellen Funktionen sichern."),
  X("Direkt im Blockiermodus ausrollen", "Ohne Lernphase drohen Ausfälle."),
  X("Nur auf einer HMI testen und dann überall aktivieren", "Unterschiedliche Konfigurationen werden übersehen."),
], "Erst lernen und testen, dann durchsetzen.", "Modul 12");

F("M12-49", 3, "Zwischen Z1 und Z3 soll IEC 104 über IPsec laufen. Welcher Test gehört in den CSAT?", [
  X("Prüfen, ob die Firewall-Hardware leise genug ist", "Kein Security-Test."),
  R("Prüfen, dass ein Peer ohne gültiges Zertifikat abgelehnt und protokolliert wird", "Testet Authentisierung und Logging des Conduits."),
  X("Nur die Datenblätter der Router vergleichen", "Ein Dokumentencheck ersetzt keinen Funktionstest."),
  X("Die Verbindung eine Woche ungeprüft laufen lassen", "Kein gezielter Test."),
], "Tests prüfen Anforderungen, nicht nur Funktion.", "Modul 12");

F("M12-50", 3, "Das Engineering soll aus der Leitstelle auf SPSen in Außenstationen zugreifen. Welches Design ist angemessen?", [
  X("Engineering-Protokolle allgemein zwischen Z1 und Z3 erlauben", "Zu breit – jede kompromittierte Quelle in Z1 könnte Steuerungen umprogrammieren."),
  R("Nur von der EWS, nur zu Wartungszeiten freigeschaltet und protokolliert", "Begrenzt Quelle, Zeit und Nachvollziehbarkeit."),
  X("Engineering von jeder HMI aus ermöglichen", "Vergrößert die Angriffsfläche."),
  X("Engineering ausschließlich über die Fernwartung des Herstellers", "Abhängigkeit und zusätzlicher externer Zugang."),
], "Schreibzugriffe auf Steuerungen streng begrenzen.", "Modul 12");

F("M12-51", 2, "Welche Angabe gehört in den Härtungsnachweis eines Switches im CFAT?", [
  R("Abgleich der Konfiguration mit dem Härtungsleitfaden des Herstellers", "Belegt das SL-C in der realen Konfiguration."),
  X("Das Datenblatt mit dem SL-C des Switches", "Belegt die Fähigkeit, nicht die tatsächliche Konfiguration."),
  X("Die Firmware-Version laut Lieferschein", "Der Lieferschein zeigt nicht, was tatsächlich installiert und konfiguriert ist."),
  X("Eine Herstellererklärung ohne Konfigurationsbezug", "Allgemeine Erklärungen ersetzen keinen Soll/Ist-Vergleich."),
], "Nachweis = Soll/Ist-Vergleich der Härtung.", "Modul 12");

F("M12-52", 3, "Eine Daten-Diode soll Historian-Daten aus Z2 ausleiten. Welche Einschränkung ist zu beachten?", [
  X("Sie verschlüsselt die Daten nicht vollständig", "Verschlüsselung ist nicht ihre Aufgabe."),
  R("Protokolle mit Bestätigungen brauchen Proxys, da es keinen Rückkanal gibt", "TCP-Handshakes funktionieren nicht durch die Diode."),
  X("Sie funktioniert nur mit Glasfaser von einem Hersteller", "Keine allgemeine Einschränkung."),
  X("Sie erlaubt Fernwartung nur einmal täglich", "Sie erlaubt gar keinen Rückweg."),
], "Einweg-Technik erfordert angepasste Übertragung.", "Modul 10/12");

F("M12-53", 3, "Wie wird verhindert, dass ein kompromittierter Jump-Host direkt auf alle OT-Zonen zugreifen kann?", [
  X("Durch einen stärkeren Virenscanner auf dem Jump-Host", "Hilft, begrenzt aber nicht die Erreichbarkeit."),
  R("Durch Zielfreigaben pro Konto und Firewall-Regeln je Zielzone", "Begrenzt den Schaden bei Kompromittierung."),
  X("Durch ein längeres Administratorpasswort", "Schützt den Zugang, nicht die Reichweite."),
  X("Durch nächtliches Abschalten", "Tagsüber bliebe die Reichweite unbegrenzt."),
], "Auch Vermittlungssysteme folgen Least Privilege.", "Modul 12");

F("M12-54", 2, "Wann ist ein Design-Gap abgeschlossen?", [
  X("Wenn der Integrator ihn mündlich bestätigt", "Nicht nachweisbar."),
  R("Wenn Maßnahme umgesetzt, getestet und in der Traceability nachgewiesen ist", "Umsetzung plus Nachweis."),
  X("Wenn der Hersteller ein neues Datenblatt liefert", "Ein Datenblatt ist kein Test."),
  X("Wenn das Projekt abgerechnet ist", "Abrechnung ist kein Nachweis."),
], "Gap zu = umgesetzt + getestet + dokumentiert.", "Modul 12");

F("M12-55", 3, "Eine Zelle soll per 5G-Campusnetz angebunden werden. Wie ist sie zu behandeln?", [
  X("Wie kabelgebunden, da 5G verschlüsselt ist", "Funk bleibt erreichbar und störbar."),
  R("Als Funkanbindung: eigene Zone bzw. Conduit, Verfügbarkeit und Authentisierung bewerten", "Gleiche Prinzipien wie bei WLAN."),
  X("Als Office-Netz, da es vom Provider betrieben wird", "Die Zelle bleibt Teil des IACS."),
  X("Gar nicht gesondert, Campusnetze sind privat", "Privat heißt nicht vertrauenswürdig."),
], "Neue Funktechnik, gleiche Zonierungsregeln.", "Modul 12");

// Maintenance
F("M13-47", 3, "Das SIEM meldet viele fehlgeschlagene Anmeldungen am Jump-Host aus dem Internet. Was ist sinnvoll?", [
  X("Den Jump-Host abschalten", "Unterbricht die legitime Fernwartung."),
  R("Quelle analysieren, Sperr- bzw. Rate-Limits am Gateway prüfen, MFA-Wirksamkeit kontrollieren", "Angriff erkennen und begrenzen."),
  X("Ignorieren, da MFA aktiv ist", "Auch MFA kann umgangen oder ermüdet werden."),
  X("Allen Dienstleistern neue Passwörter per E-Mail senden", "Unsicherer Kanal, keine Analyse."),
], "Brute-Force am Perimeter ist ein Frühindikator.", "Modul 13");

F("M13-48", 3, "Ein Restore-Test dauert 14 Stunden, der Betrieb verträgt 4 Stunden Ausfall. Was folgt?", [
  X("Nichts, der Restore funktioniert ja", "Er erfüllt die Anforderung an die Wiederherstellungszeit nicht."),
  R("Backup-Konzept anpassen, z. B. Images, Ersatzhardware, Priorisierung", "RTO muss erreichbar sein."),
  X("Restore-Tests seltener durchführen", "Löst das Problem nicht."),
  X("Die Anforderung des Betriebs auf 14 Stunden ändern", "Die Anforderung folgt dem Prozess, nicht dem Backup."),
], "Restore-Zeit gegen die Verfügbarkeitsanforderung prüfen.", "Modul 13");

F("M13-49", 2, "Wann sollte ein Incident-Response-Plan für OT aktualisiert werden?", [
  X("Nur bei Personalwechsel in der IT", "Zu eng – Anlage, Organisation und Erfahrungen ändern sich ebenso."),
  R("Nach Übungen, Vorfällen und Änderungen an Anlage oder Organisation", "Lessons Learned einarbeiten."),
  X("Alle zehn Jahre", "Viel zu selten."),
  X("Nie, er gilt dauerhaft", "Anlagen und Bedrohungen ändern sich."),
], "Der IR-Plan lebt mit Anlage und Erfahrung.", "Modul 13");

F("M13-50", 3, "Ein Dienstleister ändert ohne Ticket eine Firewall-Regel und begründet das mit Zeitdruck. Wie reagiert der Betreiber?", [
  X("Akzeptieren, da die Anlage läuft", "Unautorisierte Änderung."),
  R("Änderung prüfen, nachträglich über MoC bewerten und Vertragsverstoß ansprechen", "Kontrolle wiederherstellen."),
  X("Die Regel ungeprüft entfernen", "Kann den Prozess stören."),
  X("Dem Dienstleister den Zugang dauerhaft entziehen, ohne Prüfung", "Unverhältnismäßig ohne Analyse."),
], "MoC gilt auch für Dienstleister.", "Modul 13");

F("M13-51", 2, "Was zeigt ein steigender Anteil getesteter Restores über mehrere Quartale?", [
  R("Dass die Wiederherstellungsfähigkeit nachweislich verbessert wird", "Ein Wirkungs-KPI."),
  X("Dass weniger Backups nötig sind", "Kein Zusammenhang."),
  X("Dass keine Angriffe stattfinden", "KPIs zu Restores sagen nichts über Angriffe."),
  X("Dass die Firewalls korrekt konfiguriert sind", "Restore-Quoten sagen nichts über Firewall-Regeln aus."),
], "Gute KPIs messen Fähigkeiten.", "Modul 13");

F("M13-52", 3, "Das NIDS sieht Modbus-Schreibbefehle von einer HMI, die laut Konzept nur liest. Was ist zu tun?", [
  X("Baseline anpassen, damit der Alarm verschwindet", "Legitimiert möglicherweise einen Angriff."),
  R("Ursache klären: Fehlkonfiguration, neue Funktion oder Kompromittierung – dann Regel bzw. Konfiguration korrigieren", "Abweichung vom Konzept ist ein Befund."),
  X("Die HMI sofort neu installieren", "Ohne Analyse gehen Beweise verloren."),
  X("Modbus komplett sperren", "Unterbricht den Prozess."),
], "Konzeptabweichungen sind Sicherheitsereignisse.", "Modul 13");

F("M13-53", 2, "Wie sollten Patch-Entscheidungen im Betrieb dokumentiert werden?", [
  X("Gar nicht, solange nichts schiefgeht", "Nicht nachvollziehbar."),
  R("Mit Bewertung, Entscheidung (patchen, kompensieren, akzeptieren) und Begründung", "Nachvollziehbar und auditierbar."),
  X("Nur die installierten Patches", "Nicht installierte Patches brauchen eine Begründung."),
  X("Nur per Chatnachricht", "Nicht revisionssicher."),
], "Auch „nicht patchen“ ist eine dokumentierte Entscheidung.", "Modul 13");

F("M13-54", 3, "Ein Audit stellt fest: Die Notfallkonten wurden seit Jahren nicht geprüft. Was ist die beste Empfehlung?", [
  X("Notfallkonten löschen", "Im Notfall fehlt dann der Zugang."),
  R("Regelmäßig prüfen und testen, Nutzung protokollieren und nachbereiten", "Funktionsfähig und kontrolliert halten."),
  X("Das Passwort an alle Schichtleiter verteilen", "Zerstört die Kontrolle."),
  X("Sie dauerhaft aktiv nutzen", "Dann sind es keine Notfallkonten mehr."),
], "Break-Glass muss funktionieren und kontrolliert sein.", "Modul 13");
