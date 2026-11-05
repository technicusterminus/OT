// M01 – OT-Grundlagen & IT vs. OT
F("M01-01", 1, "Welche Reihenfolge der Schutzziele ist für typische OT-Umgebungen am zutreffendsten?", [
  X("Vertraulichkeit vor Integrität vor Verfügbarkeit", "Das ist die klassische Office-IT-Priorität – in der OT kann ein Ausfall Menschen gefährden."),
  R("Verfügbarkeit vor Integrität vor Vertraulichkeit", "Der Prozess muss laufen und sicher bleiben; Mitlesen ist meist das kleinere Problem."),
  X("Integrität vor Vertraulichkeit vor Verfügbarkeit", "Integrität ist wichtig, aber Vertraulichkeit steht in der OT selten vor Verfügbarkeit."),
  X("Vertraulichkeit vor Verfügbarkeit vor Integrität", "Vertraulichkeit an erster Stelle passt eher zu Datenschutz-Szenarien als zu Prozesssteuerung."),
], "In der OT stehen Verfügbarkeit und die Sicherheit von Mensch und Umwelt im Vordergrund.", "Modul 01");

F("M01-02", 1, "Was umfasst der Begriff IACS im Sinne der IEC 62443?", [
  X("Steuerungen, Feldgeräte und ihre Software", "Zu eng: Die Definition schließt auch Menschen und Richtlinien ein."),
  X("Das Netzwerk zwischen Leitwarte und Feld", "Das Netzwerk ist nur ein Teil des IACS."),
  R("Personal, Hardware, Software und Richtlinien", "Genau – IACS ist bewusst breit gefasst, Security ist nicht nur Technik."),
  X("Alle IT- und OT-Systeme eines Unternehmens", "Zu weit: Office-IT ohne Einfluss auf den Prozess gehört nicht dazu."),
], "IACS umfasst alles, was den sicheren und zuverlässigen Betrieb des industriellen Prozesses beeinflusst.", "62443-1-1, Begriffe");

F("M01-03", 1, "Auf welchem Level des Purdue-Modells befinden sich typischerweise SPSen?", [
  X("Level 0", "Level 0 sind Sensoren und Aktoren im Prozess."),
  R("Level 1", "Level 1 = Basic Control: SPS, RTU, Safety-Controller."),
  X("Level 2", "Level 2 ist Area Supervisory Control mit HMI, SCADA und EWS."),
  X("Level 3", "Level 3 sind Site Operations wie MES und Historian."),
], "Level 0 Prozess, Level 1 Steuerung, Level 2 Bedienen/Beobachten, Level 3 Standortbetrieb.", "Modul 01, Purdue-Modell");

F("M01-04", 2, "Warum sind aktive Netzwerkscans in OT-Netzen problematisch?", [
  X("Weil sie in KRITIS-Anlagen gesetzlich untersagt sind", "Es gibt kein generelles Verbot – aktive Scans sind mit Freigabe im Wartungsfenster möglich."),
  R("Weil ältere Feldgeräte auf unerwartete Pakete instabil reagieren können", "Schwache IP-Stacks können abstürzen oder in Fehlzustände gehen – mit Folgen für den Prozess."),
  X("Weil Industrieprotokolle von Scannern nicht erkannt werden", "Viele Scanner kennen OT-Protokolle; das Problem ist die Wirkung auf die Geräte."),
  X("Weil sie die Vertraulichkeit der Prozessdaten verletzen", "Scans lesen meist keine Prozessdaten; das Risiko liegt bei der Verfügbarkeit."),
], "Passive Erkennung (SPAN/TAP) ist in laufenden OT-Netzen der bevorzugte Weg.", "Modul 01, Praxisbezug");

F("M01-05", 2, "Welche Aussage zu klassischem Modbus/TCP ist richtig?", [
  X("Es verschlüsselt die Kommunikation standardmäßig mit TLS", "Das gilt nur für die Erweiterung Modbus/TCP Security, nicht für klassisches Modbus/TCP."),
  X("Es authentisiert die Teilnehmer über X.509-Zertifikate", "Auch das bietet erst Modbus/TCP Security."),
  R("Es bietet weder Authentisierung noch Verschlüsselung", "Jeder, der Port 502 erreicht, kann lesen und schreiben."),
  X("Es ist nur auf Layer 2 und damit nicht routbar", "Modbus/TCP läuft über TCP/IP und ist routbar – das beschreibt eher PROFINET RT."),
], "Abhilfe: Segmentierung, DPI-Firewalls mit Funktionscode-Filter oder Modbus/TCP Security.", "Modul 01, Protokolle");

F("M01-06", 1, "Welcher TCP-Port wird von OPC UA im Binärprotokoll üblicherweise genutzt?", [
  X("502", "502 ist Modbus/TCP."),
  R("4840", "4840 ist der registrierte Port für OPC UA."),
  X("20000", "20000 ist DNP3."),
  X("44818", "44818 ist EtherNet/IP (CIP)."),
], "Ports helfen beim Lesen von Firewall-Regeln und Mitschnitten.", "Modul 01, Protokolle");

F("M01-07", 3, "Ein OPC-UA-Server bietet die Security-Modi None, Sign und SignAndEncrypt an. Was ist die sicherste sinnvolle Konfiguration für den Produktivbetrieb?", [
  X("Alle drei Modi anbieten, damit jeder Client verbinden kann", "Solange None angeboten wird, kann ein Angreifer ungeschützt verbinden (Downgrade)."),
  R("None deaktivieren, Sign/SignAndEncrypt mit geprüften Zertifikaten", "So ist jede Verbindung authentisiert und integritätsgeschützt."),
  X("Nur None aktivieren und die Sicherheit der Firewall überlassen", "Damit fällt jeder Schutz auf Protokollebene weg – Defense in Depth wird verletzt."),
  X("Sign aktivieren, Zertifikate aber automatisch allen Clients vertrauen", "Ohne Zertifikatsprüfung ist die Authentisierung wertlos."),
], "OPC UA ist nur so sicher wie seine Konfiguration: Modus None aus, Zertifikatsmanagement an.", "Modul 01, Protokolle");

F("M01-08", 1, "Wofür ist ein Safety Instrumented System (SIS) primär zuständig?", [
  X("Für die Protokollierung sicherheitsrelevanter Ereignisse", "Das ist Aufgabe von Logging/SIEM (FR 6), nicht des SIS."),
  R("Für das Überführen des Prozesses in einen sicheren Zustand", "Das SIS gehört zur funktionalen Sicherheit (IEC 61511/61508)."),
  X("Für die Regelung des Prozesses im Normalbetrieb", "Das macht das Basisautomatisierungssystem (BPCS), nicht das SIS."),
  X("Für die Authentisierung der Operatoren an der HMI", "Authentisierung ist FR 1 und keine Aufgabe des SIS."),
], "SIS schützen Mensch, Umwelt und Anlage – und sind deshalb selbst ein hochkritisches Angriffsziel.", "Modul 01, Begriffe");

F("M01-09", 2, "Welche Merkmale sind für OT-Systeme im Vergleich zur Office-IT typisch? (Mehrfachauswahl)", [
  R("Lebensdauer von 15 bis 30 Jahren", "Anlagen laufen oft Jahrzehnte mit derselben Steuerungstechnik."),
  R("Patches nur nach Herstellerfreigabe", "Gewährleistung und Zulassung hängen oft an freigegebenen Ständen."),
  X("Automatische Updates direkt nach Release", "Ungetestete Updates können die Produktion stoppen – in OT unüblich."),
  X("Hardwaretausch alle zwei bis drei Jahre", "Das ist typisch für Office-Clients, nicht für Steuerungen."),
], "Lange Lebenszyklen und kontrolliertes Patchen prägen die OT-Security.", "Modul 01, IT vs. OT");

F("M01-10", 2, "Welches Asset gehört typischerweise in die IT/OT-DMZ (Level 3.5)?", [
  X("Der Safety-Controller der Anlage", "Safety-Controller gehören in eine eigene, hochgeschützte Zone auf Level 1."),
  R("Ein Jump-Host für Fernzugriffe", "In die DMZ gehören vermittelnde Systeme wie Jump-Host, Historian-Spiegel, Patch-Relay."),
  X("Die Engineering-Workstation", "Die EWS programmiert Steuerungen und gehört in eine geschützte OT-Zone."),
  X("Das ERP-System des Unternehmens", "ERP ist Business-IT auf Level 4."),
], "Die DMZ entkoppelt IT und OT – sie vermittelt, statt durchzuleiten.", "Modul 01, Purdue-Modell");

F("M01-11", 2, "Welche Lehre zieht man aus Stuxnet am ehesten?", [
  X("Isolierte Netze ohne Internetanschluss sind ausreichend geschützt", "Genau das widerlegte Stuxnet – die Infektion kam u. a. per Wechseldatenträger."),
  R("Auch isolierte Anlagen brauchen Schutz und Überwachung der Steuerungslogik", "Stuxnet veränderte SPS-Logik unbemerkt; Integritätsüberwachung ist zentral."),
  X("Angriffe zielen vor allem auf Windows-Systeme, kaum auf Steuerungen", "Ziel war gerade die SPS-Logik; Windows war nur der Weg dorthin."),
  X("Anlagen ohne Internetzugang sind für Angreifer kaum interessant", "Hochwertige Ziele werden gerade dann angegriffen, wenn sie isoliert sind."),
], "Air-Gap ist kein Schutzkonzept – Wechseldatenträger, Dienstleister und Lieferkette sind Einfallstore.", "Modul 01, Vorfälle");

F("M01-12", 2, "Welches Ziel hatte die Schadsoftware TRITON/TRISIS?", [
  X("Die Historian-Server einer Raffinerie", "TRITON zielte nicht auf Datenhaltung, sondern auf die Sicherheitsfunktion."),
  R("Ein Safety Instrumented System", "Angegriffen wurden Safety-Controller – SIS sind daher besonders zu schützen."),
  X("Die Abrechnungssysteme eines Energieversorgers", "Das beschreibt eher IT-Angriffe wie Ransomware."),
  X("Die Mobilfunk-Router von Außenstationen", "Das war nicht das Angriffsziel von TRITON."),
], "Lehre: SIS in eigene Zonen, Schreibschutz (Schlüsselschalter) und Überwachung.", "Modul 01, Vorfälle");

F("M01-13", 2, "Warum führte NotPetya 2017 auch in vielen Produktionsbetrieben zu Ausfällen?", [
  X("Weil es gezielt SPS-Programme verschiedener Hersteller löschte", "NotPetya war ein Wiper für Windows, kein SPS-Angriff."),
  R("Fehlende IT/OT-Trennung ließ die Malware bis in die Produktion", "Kollateralschaden durch flache Netze und gemeinsame Domänen."),
  X("Weil Produktionsnetze für Updates offen mit dem Internet verbunden sein müssen", "Das müssen sie nicht – gerade das soll die DMZ verhindern."),
  X("Weil die Hersteller die Produktion aus Vorsicht fernabgeschaltet hatten", "Die Ausfälle entstanden durch die Malware selbst."),
], "Segmentierung und getrennte Domänen begrenzen Kollateralschäden.", "Modul 01, Vorfälle");

F("M01-14", 1, "Warum gilt Security-Awareness als eigenständige Gegenmaßnahme?", [
  X("Weil sie technische Maßnahmen wie Firewalls überflüssig macht", "Awareness ergänzt Technik, ersetzt sie aber nicht."),
  R("Weil viele Angriffe beim Menschen beginnen und geschultes Personal sie stoppt", "Phishing, USB-Sticks, unsichere Fernwartung – Menschen sind eine Schutzschicht."),
  X("Weil die 62443 sie für IT-Personal vorschreibt", "Gerade OT-Personal und Dienstleister brauchen Schulung."),
  X("Weil sie die Haftung im Schadensfall vollständig auf Mitarbeitende überträgt", "Awareness ist eine Schutzmaßnahme, kein Haftungsinstrument."),
], "Menschen sind Teil des IACS – Schulung gehört zum Defense-in-Depth-Konzept.", "Modul 01; 62443-2-1");

F("M01-15", 2, "Ein Dienstleister bringt für ein Firmware-Update einen eigenen USB-Stick mit. Welche Maßnahme passt am besten?", [
  X("Stick direkt an der EWS nutzen, der Dienstleister ist vertrauenswürdig", "Vertrauen ersetzt keine Prüfung – infizierte Sticks sind ein klassischer Weg."),
  R("Über eine Prüfstation schleusen, nur geprüfte Dateien nutzen", "Eine Schleuse kontrolliert den Infektionsweg, ohne das Update zu verhindern."),
  X("Update ablehnen, bis der Hersteller einen Fernzugang bereitstellt", "Fernzugang ist nicht automatisch sicherer und verzögert nötige Updates."),
  X("Stick erst an einem Office-PC prüfen und Datei dann per E-Mail weiterleiten", "E-Mail ins IACS widerspricht SR 5.3 und öffnet einen neuen Weg."),
], "Wechseldatenträger kontrolliert einschleusen – Prüfstation, Hash-Vergleich, Freigabe.", "Modul 01/13");
