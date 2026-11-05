// M06 – Systemanforderungen (3-3)
F("M06-01", 1, "Zu welchem FR gehört eine Anforderung mit der Kennung SR 5.2?", [
  X("FR 2", "Die erste Ziffer der SR-Kennung ist das FR – hier also nicht 2."),
  R("FR 5", "SR 5.2 = Schutz von Zonengrenzen (Restricted Data Flow)."),
  X("FR 3", "FR 3 wären SR 3.x."),
  X("FR 7", "FR 7 wären SR 7.x."),
], "SR x.y → x ist die FR-Nummer.", "62443-3-3");

F("M06-02", 2, "Welche SR adressiert den Zugriff über nicht vertrauenswürdige Netze, z. B. Fernwartung?", [
  R("SR 1.13", "Access via untrusted networks: überwachen, kontrollieren, ggf. explizit freigeben."),
  X("SR 3.4", "SR 3.4 betrifft Software- und Informationsintegrität."),
  X("SR 6.2", "SR 6.2 betrifft kontinuierliche Überwachung."),
  X("SR 5.3", "SR 5.3 betrifft allgemeine Person-zu-Person-Kommunikation."),
], "Fernzugriff ist eine IAC-Frage (FR 1).", "62443-3-3, SR 1.13");

F("M06-03", 2, "Unter welche SR fällt das Abschalten ungenutzter Switchports und Dienste?", [
  X("SR 5.4 – Partitionierung von Anwendungen", "Partitionierung trennt Dienste, schaltet aber nichts ab."),
  R("SR 7.7 – Minimale Funktionalität", "Nur benötigte Ports, Protokolle und Dienste aktiv lassen."),
  X("SR 2.4 – Mobile Code", "Mobile Code betrifft Skripte und Makros."),
  X("SR 4.2 – Persistenz von Informationen", "Das betrifft sicheres Löschen."),
], "Least Functionality verkleinert die Angriffsfläche.", "62443-3-3, SR 7.7");

F("M06-04", 1, "Unter welches FR fällt das Backup des Steuerungssystems?", [
  X("FR 3 – System Integrity", "Integrität ist verwandt, Backup ist aber Verfügbarkeit."),
  X("FR 4 – Data Confidentiality", "Backups müssen geschützt werden, sind aber kein FR-4-Thema."),
  X("FR 6 – Timely Response to Events", "FR 6 betrifft Erkennung."),
  R("FR 7 – Resource Availability", "SR 7.3 Control system backup."),
], "Backup und Restore sichern die Verfügbarkeit.", "62443-3-3, SR 7.3");

F("M06-05", 2, "Welche Maßnahme passt am besten zu SR 3.4 (Software- und Informationsintegrität)?", [
  X("Storm-Control auf Access-Ports", "Das ist DoS-Schutz (SR 7.1)."),
  R("Signierte Firmware mit Prüfung", "SR 3.4 zielt auf das Erkennen unautorisierter Änderungen."),
  X("Verschlüsselung der Backups", "Das betrifft Vertraulichkeit."),
  X("Trennung der Netze durch VLANs", "Das ist Segmentierung (SR 5.1)."),
], "Integrität heißt: Änderungen erkennen und verhindern.", "62443-3-3, SR 3.4");

F("M06-06", 2, "Welche SR verlangt grundsätzlich die Trennung von IACS-Netzen und Nicht-IACS-Netzen?", [
  R("SR 5.1 – Netzwerksegmentierung", "Mit REs bis zur physischen Trennung und Isolation kritischer Netze."),
  X("SR 4.1 – Vertraulichkeit von Informationen", "Verschlüsselung ersetzt keine Trennung."),
  X("SR 1.2 – Authentisierung von Geräten", "Authentisierung ist FR 1."),
  X("SR 6.1 – Zugänglichkeit von Audit-Logs", "Das betrifft Logs."),
], "SR 5.1 trennt, SR 5.2 schützt die Grenze.", "62443-3-3, SR 5.1");

F("M06-07", 3, "Was bedeutet „Fail-Close“ an einer Zonengrenze?", [
  X("Bei Ausfall wird der Verkehr ungefiltert durchgelassen", "Das wäre Fail-Open bzw. Bypass."),
  R("Bei Ausfall wird der Verkehr über die Grenze blockiert", "Ein Ausfall des Grenzschutzes führt nicht zu ungeschützter Kommunikation."),
  X("Die Firewall sperrt außerhalb der Betriebszeiten", "Zeitfenster sind eine andere Funktion."),
  X("Verbindungen werden nach einem Timeout geschlossen", "Session-Timeouts sind etwas anderes."),
], "Fail-Close muss gegen Verfügbarkeitsanforderungen abgewogen werden.", "62443-3-3, SR 5.2 RE");

F("M06-08", 2, "Welche Netzwerkmaßnahme unterstützt SR 7.1 (Schutz vor Denial of Service)?", [
  R("Storm-Control und Rate-Limiting", "Begrenzt Broadcast-/Multicast-Stürme und Überlast."),
  X("Komplexe Passwortrichtlinien", "Passwörter betreffen FR 1."),
  X("Syslog-Weiterleitung an das SIEM", "Logging erkennt, verhindert aber keine Überlast."),
  X("Signierung von Firmware-Images", "Das ist Integrität."),
], "DoS-Schutz hält essenzielle Funktionen verfügbar.", "62443-3-3, SR 7.1");

F("M06-09", 2, "Warum ist synchronisierte, geschützte Zeit (SR 2.11) sicherheitsrelevant?", [
  X("Weil sonst die Uhrzeit auf den HMIs falsch angezeigt wird", "Anzeige ist nebensächlich."),
  R("Logs wären sonst nicht korrelierbar", "Ereignisse über Systeme hinweg brauchen eine gemeinsame Zeit."),
  X("Weil Modbus ohne Zeitsynchronisation nicht funktioniert", "Modbus braucht keine Zeitsynchronisation."),
  X("Weil sonst die Zertifikatsprüfung abgeschaltet werden muss", "Ohne korrekte Zeit ist die Gültigkeitsprüfung unzuverlässig – aber das ist nicht der Kern."),
], "Ohne korrekte Zeitstempel ist Forensik kaum möglich.", "62443-3-3, SR 2.11");

F("M06-10", 2, "Welche SR adressiert die kontinuierliche Überwachung, etwa durch ein OT-IDS?", [
  R("SR 6.2", "Continuous monitoring unter FR 6."),
  X("SR 2.1", "SR 2.1 ist die Durchsetzung von Autorisierung."),
  X("SR 4.3", "SR 4.3 ist der Einsatz von Kryptographie."),
  X("SR 1.5", "SR 1.5 ist die Verwaltung von Authentisierungsmitteln."),
], "FR 6 = bemerken und reagieren.", "62443-3-3, SR 6.2");

F("M06-11", 3, "Welche Aussagen zu 62443-3-3 sind korrekt? (Mehrfachauswahl)", [
  R("Sie definiert Systemanforderungen gegliedert nach den 7 FRs", "Struktur FR → SR → RE."),
  R("Erfüllte REs bestimmen, welches SL-C ein System erreicht", "REs stufen die SLs ab."),
  X("Sie legt fest, welches SL-T eine Zone haben muss", "Das SL-T kommt aus der Risikobeurteilung (3-2)."),
  X("Sie beschreibt den Entwicklungsprozess des Herstellers", "Das ist 4-1."),
], "3-3 = Katalog der Systemanforderungen je SL.", "62443-3-3");

F("M06-12", 2, "Was fordert SR 5.3 (allgemeine Person-zu-Person-Kommunikation) sinngemäß?", [
  R("E-Mail und Messenger aus dem IACS einschränken", "Allgemeine Kommunikationsdienste sind typische Einfallstore."),
  X("Sprechfunk für alle Operatoren bereitzustellen", "Funk ist hier nicht gemeint."),
  X("Videokonferenzen für Schichtübergaben vorzuschreiben", "Das ist keine Security-Anforderung."),
  X("Die Telefonanlage Ende-zu-Ende zu verschlüsseln", "Telefonie ist nicht Gegenstand von SR 5.3."),
], "Keine allgemeinen Kommunikationsdienste aus dem Steuerungsnetz.", "62443-3-3, SR 5.3");

F("M06-13", 1, "Welche SR passt zum Ändern von Default-Passwörtern und zur Verwaltung von Schlüsseln?", [
  R("SR 1.5 – Verwaltung von Authentisierungsmitteln", "Initialisieren, Defaults ändern, schützen, erneuern."),
  X("SR 7.6 – Netzwerk- und Sicherheitskonfiguration", "Das betrifft die dokumentierte Konfiguration."),
  X("SR 3.2 – Schutz vor Schadcode", "Das betrifft Malware-Schutz."),
  X("SR 1.3 – Kontenverwaltung", "Konten sind verwandt, Authentisierungsmittel sind aber SR 1.5."),
], "Konto (SR 1.3) ≠ Authentisierungsmittel (SR 1.5).", "62443-3-3, SR 1.5");
