// Paket 10: M04/M06-Anwendung, EN-50159-Ausbau
F("M04-17", 2, "Für eine Zone wird SL-T 2 für FR 6 festgelegt. Was heißt das praktisch?", [
  X("Es müssen keine Logs erzeugt werden", "SL 2 verlangt sehr wohl Erkennung."),
  R("Ereignisse müssen protokolliert und auswertbar sein, gegen einfache Angreifer", "FR 6 = Timely Response to Events."),
  X("Die Zone braucht ein SIS", "Kein Bezug zu FR 6."),
  X("Die Zone muss physisch isoliert sein", "Das wäre FR 5."),
], "SL je FR in konkrete Fähigkeiten übersetzen.", "Modul 04/06");

F("M04-18", 3, "Ein Gutachter bewertet eine Zone mit SL-A {2,2,3,1,3,2,2}, das SL-T ist {3,2,3,1,3,2,3}. Wo bestehen Lücken?", [
  X("Bei FR 3 und FR 5", "Dort ist SL-A = SL-T."),
  R("Bei FR 1 und FR 7", "Dort liegt SL-A unter SL-T."),
  X("Bei FR 4", "SL-A = SL-T = 1."),
  X("Es gibt keine Lücken", "Zwei FRs liegen unter dem Ziel."),
], "Vektoren je FR vergleichen.", "Modul 04");

F("M04-19", 2, "Welches FR ist betroffen, wenn ein Operator Sollwerte ändern kann, die nur der Schichtleiter ändern darf?", [
  X("FR 1 – Identification and Authentication Control", "Der Operator ist korrekt identifiziert."),
  R("FR 2 – Use Control", "Es geht um Berechtigungen."),
  X("FR 4 – Data Confidentiality", "Kein Vertraulichkeitsproblem."),
  X("FR 7 – Resource Availability", "Keine Verfügbarkeitsfrage."),
], "Wer bist du = FR 1, was darfst du = FR 2.", "Modul 04");

F("M06-16", 2, "Welche SR adressiert die Fähigkeit, nach einem Vorfall auf einen bekannten sicheren Zustand zurückzukehren?", [
  X("SR 2.8 – Auditierbare Ereignisse", "Logging, nicht Wiederherstellung."),
  X("SR 5.3 – Person-zu-Person-Kommunikation", "Betrifft E-Mail und Messenger, nicht die Wiederherstellung."),
  R("SR 7.4 – Wiederherstellung und Rekonstitution", "Restore in den bekannten sicheren Zustand."),
  X("SR 1.13 – Nicht vertrauenswürdige Netze", "Betrifft Fernzugriffe, nicht die Wiederherstellung."),
], "Backup (7.3) ist nutzlos ohne Wiederherstellung (7.4).", "SR 7.4");

F("M06-17", 3, "Ein Integrator schlägt vor, FR 4 durch durchgängige Verschlüsselung aller Feldbusse zu erfüllen, die Zone hat FR-4-SL-T 1. Wie ist das zu bewerten?", [
  X("Zwingend erforderlich", "SL-T 1 verlangt das nicht."),
  R("Überdimensioniert; Aufwand und Latenz gegen den geringen Bedarf abwägen", "Maßnahmen am SL-T ausrichten."),
  X("Verboten nach 3-3", "Es ist nicht verboten."),
  X("Erfüllt automatisch alle anderen FRs", "Verschlüsselung deckt andere FRs nicht ab."),
], "Mehr ist nicht immer besser – Verfügbarkeit und Latenz zählen.", "Modul 06/12");

F("M06-18", 2, "Welche SR verlangt, dass nur autorisierte Software ausgeführt bzw. Schadcode abgewehrt wird?", [
  R("SR 3.2 – Schutz vor Schadcode", "Virenschutz, Whitelisting."),
  X("SR 6.1 – Zugänglichkeit von Audit-Logs", "Betrifft das Auslesen von Logs, nicht Malware-Schutz."),
  X("SR 4.2 – Persistenz von Informationen", "Sicheres Löschen."),
  X("SR 7.6 – Netzwerkkonfiguration", "Konfiguration."),
], "Malware-Schutz ist FR 3.", "SR 3.2");

F("M15-15", 2, "Welche Abwehrmaßnahme erkennt eine Nachricht, die komplett ausgefallen ist?", [
  X("Ein Sicherheitscode", "Er prüft vorhandene Nachrichten."),
  R("Zeitüberwachung (Time-out) bzw. Sequenzlücke", "Fehlendes wird erkannt."),
  X("Eine Zielkennung", "Sie hilft bei Fehladressierung."),
  X("Ein höherer Funkpegel", "Kein Erkennungsmechanismus."),
], "Löschung → Time-out, Sequenznummer, Rückmeldung.", "Modul 15");

F("M15-16", 2, "Welche Bahn-Norm ist für die Sicherheitsnachweise elektronischer Systeme mit SIL maßgeblich und steht neben EN 50159?", [
  X("EN 50126 allein", "EN 50126 ist der RAMS-Prozess."),
  R("EN 50129", "Sicherheitsrelevante elektronische Systeme, Safety Case."),
  X("IEC 62443-4-2", "Security-Komponentenanforderungen."),
  X("ISO 9001", "Qualitätsmanagement."),
], "50126 Prozess, 50128/50716 Software, 50129 Systeme, 50159 Kommunikation.", "Modul 15");

F("M15-17", 3, "Ein Projekt setzt EN 50159 Kategorie 3 um, aber die Schlüssel liegen unverschlüsselt auf einem Wartungslaptop. Was ist die Folge?", [
  X("Keine – die Kategorie ist erfüllt", "Kompromittierte Schlüssel hebeln den Schutz aus."),
  R("Der kryptographische Schutz ist faktisch wirkungslos, Schlüsselmanagement nach 62443 nachbessern", "Safety-Krypto hängt an Security-Prozessen."),
  X("Nur die Verfügbarkeit ist betroffen", "Die Integrität ist betroffen."),
  X("Das Problem betrifft nur Kategorie 1", "Kategorie 1 nutzt meist keine Krypto."),
], "Schlüssel schützen ist Teil der Sicherheit.", "Modul 15");

F("M15-18", 3, "Ein neues Zugfunksystem soll ein vorhandenes Safety-Protokoll ohne Änderung weiterverwenden, das bisher in Kategorie 1 lief. Was ist zu tun?", [
  X("Nichts, das Protokoll ist bereits zugelassen", "Die Umgebung hat sich geändert."),
  R("Neu einstufen (vermutlich Kategorie 3) und fehlende Maßnahmen gegen Maskerade ergänzen", "Kategorie hängt am Übertragungssystem."),
  X("Nur die Funkleistung erhöhen", "Keine Schutzmaßnahme."),
  X("Auf Kategorie 2 herabstufen", "Ohne Begründung unzulässig."),
], "Neues Übertragungssystem → neue Bewertung.", "Modul 15");
