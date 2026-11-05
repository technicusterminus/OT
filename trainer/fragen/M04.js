// M04 – Security Level & Foundational Requirements
F("M04-01", 1, "Wie viele Foundational Requirements definiert die 62443?", [
  X("5", "Es sind mehr – auch Vertraulichkeit, Datenfluss und Verfügbarkeit sind eigene FRs."),
  R("7", "FR 1 IAC, FR 2 UC, FR 3 SI, FR 4 DC, FR 5 RDF, FR 6 TRE, FR 7 RA."),
  X("8", "Das ist die Zahl der Practices in 4-1, nicht der FRs."),
  X("12", "Das ist die Zahl der Funktionsbereiche in 2-4."),
], "Eselsbrücke: Ich Unterschreibe Sicherheit, Daten Reisen Total Ausfallsicher.", "62443-1-1, 3-3");

F("M04-02", 1, "Welches FR behandelt die Netzwerksegmentierung?", [
  X("FR 2 – Use Control", "Use Control regelt, was ein authentisierter Nutzer darf."),
  X("FR 4 – Data Confidentiality", "FR 4 schützt vor Mitlesen, nicht den Datenfluss."),
  R("FR 5 – Restricted Data Flow", "Segmentierung (SR 5.1) und Zonengrenzen (SR 5.2)."),
  X("FR 7 – Resource Availability", "FR 7 betrifft DoS-Schutz und Backup."),
], "FR 5 ist das „Netzwerker-FR“.", "FR 5");

F("M04-03", 1, "Wofür steht die Abkürzung TRE?", [
  X("Trusted Remote Environment", "Klingt plausibel, ist aber kein 62443-Begriff."),
  R("Timely Response to Events", "FR 6: Logs, Monitoring, Reaktion."),
  X("Threat and Risk Evaluation", "Risikobewertung ist Teil von 3-2, kein FR."),
  X("Technical Requirement Enhancement", "Enhancements heißen RE und sind kein FR."),
], "FR 6 sorgt dafür, dass Vorfälle bemerkt werden.", "FR 6");

F("M04-04", 2, "Gegen welchen Angreifer schützt SL 2?", [
  X("Gegen zufällige oder versehentliche Fehlbedienung", "Das ist SL 1."),
  R("Absichtliche Angriffe mit einfachen Mitteln", "Geringe Ressourcen, geringe Motivation, keine OT-Spezialkenntnisse."),
  X("Gegen Angreifer mit IACS-Wissen und moderaten Ressourcen", "Das ist SL 3."),
  X("Gegen staatlich unterstützte Gruppen mit hoher Motivation", "Das ist SL 4."),
], "SL 1 zufällig · SL 2 einfach · SL 3 IACS-spezifisch, moderat · SL 4 IACS-spezifisch, umfangreich.", "Modul 04");

F("M04-05", 2, "Ab welchem Security Level wird beim Angreifer IACS-spezifisches Wissen angenommen?", [
  X("SL 1", "SL 1 betrifft keine absichtlichen Angriffe."),
  X("SL 2", "SL 2 setzt nur allgemeine IT-Fähigkeiten voraus."),
  R("SL 3", "SL 3 und SL 4 setzen OT-/IACS-Know-how voraus."),
  X("SL 4", "SL 4 ist zusätzlich durch umfangreiche Ressourcen und hohe Motivation gekennzeichnet."),
], "SL 3 und 4 unterscheiden sich in Ressourcen und Motivation, nicht im Wissen.", "Modul 04");

F("M04-06", 1, "Was beschreibt SL-C?", [
  X("Das angestrebte Level einer Zone", "Das ist SL-T (Target)."),
  R("Die Fähigkeit eines Produkts bei korrekter Konfiguration", "C = Capability."),
  X("Das tatsächlich erreichte Level im Betrieb", "Das ist SL-A (Achieved)."),
  X("Das zertifizierte Level eines Dienstleisters", "Dienstleister werden mit Reifegraden (ML) bewertet."),
], "Target = will ich, Capability = kann das Produkt, Achieved = habe ich.", "Modul 04");

F("M04-07", 2, "Eine Zone hat SL-T 3 für FR 1, die eingesetzte HMI bietet nur SL-C 2. Wie geht man vor?", [
  X("SL-T auf 2 absenken, damit es zum Produkt passt", "SL-T ergibt sich aus dem Risiko, nicht aus dem Produkt."),
  R("Kompensierende Maßnahmen einsetzen und ihre Wirkung bewerten", "Z. B. MFA am vorgelagerten Jump-Host, sodass SL-A ≥ SL-T erreicht wird."),
  X("Nichts tun, da der Unterschied nur eine Stufe beträgt", "Jede Lücke ist ein Risiko und muss behandelt werden."),
  X("Die HMI in eine Zone ohne SL-T verschieben", "Damit wird das Problem nur versteckt."),
], "Gap → kompensieren oder anderes Produkt → dokumentieren → freigeben.", "62443-3-2 / 3-3");

F("M04-08", 2, "Warum wird ein Security Level als Vektor angegeben?", [
  R("Weil jede der 7 FRs einen eigenen Wert haben kann", "Z. B. {3,3,3,1,3,2,3}: Integrität hoch, Vertraulichkeit gering."),
  X("Weil er Richtung und Stärke eines Angriffs beschreibt", "Das ist eine physikalische Analogie, keine 62443-Definition."),
  X("Weil er die Levels mehrerer Zonen zusammenfasst", "Jede Zone hat ihren eigenen Vektor."),
  X("Weil er Zielwert und erreichten Wert kombiniert", "SL-T und SL-A sind getrennte Vektoren."),
], "Differenzierung je FR ist typisch für OT.", "Modul 04, SL-Vektor");

F("M04-09", 2, "Was ist ein Requirement Enhancement (RE)?", [
  X("Eine optionale Empfehlung ohne Bezug zum SL", "REs sind gerade das Mittel der SL-Abstufung."),
  R("Eine Verschärfung einer Basisanforderung für höhere SLs", "Z. B. MFA als Verschärfung von SR 1.1."),
  X("Ein Hersteller-Patch, der eine Anforderung nachrüstet", "RE ist ein Normbegriff, kein Patch."),
  X("Eine Prozessanforderung aus 62443-4-1", "4-1 hat Practices, keine REs im Sinne von 3-3/4-2."),
], "Je höher das SL, desto mehr REs.", "62443-3-3 / 4-2");

F("M04-10", 1, "Welches FR deckt Backup und Schutz vor Denial-of-Service ab?", [
  X("FR 3 – System Integrity", "FR 3 betrifft Manipulationsschutz."),
  X("FR 6 – Timely Response to Events", "FR 6 betrifft Erkennung und Reaktion."),
  R("FR 7 – Resource Availability", "SR 7.1 DoS, SR 7.3 Backup, SR 7.4 Wiederherstellung."),
  X("FR 2 – Use Control", "FR 2 betrifft Autorisierung."),
], "FR 7 ist das „Verfügbarkeits-FR“.", "FR 7");

F("M04-11", 3, "Welche Aussage zum Verhältnis von SL-T, SL-C und SL-A ist korrekt?", [
  X("SL-A entspricht dem SL-C der schwächsten Komponente", "Kompensierende Maßnahmen und Konfiguration beeinflussen SL-A."),
  R("Ziel ist SL-A ≥ SL-T, ggf. mit Kompensation", "Das ist die Kette von der Risikobeurteilung bis in den Betrieb."),
  X("SL-T wird vom Hersteller anhand seines Produkts vorgegeben", "SL-T kommt aus der Risikobeurteilung des Asset Owners."),
  X("SL-C wird erst im laufenden Betrieb gemessen", "Im Betrieb wird SL-A bewertet; SL-C ist eine Produkteigenschaft."),
], "T aus 3-2, C aus 3-3/4-2, A in der realen Anlage.", "Modul 04");

F("M04-12", 1, "Wofür steht FR 1 IAC?", [
  X("Industrial Access Control", "Klingt passend, ist aber nicht die Definition."),
  R("Identification and Authentication Control", "Wer bist du – Mensch, Prozess, Gerät?"),
  X("Integrity and Availability Check", "Integrität ist FR 3, Verfügbarkeit FR 7."),
  X("Internal Audit and Compliance", "Audits sind kein FR."),
], "FR 1 = Identität, FR 2 = Rechte.", "FR 1");

F("M04-13", 2, "Welches Angreiferprofil ordnet man typischerweise SL 4 zu?", [
  X("Ein Mitarbeiter, der versehentlich eine Rezeptur löscht", "Das ist eine zufällige Verletzung (SL 1)."),
  X("Ein Gelegenheitstäter mit öffentlich verfügbaren Tools", "Das entspricht SL 2."),
  X("Eine kriminelle Gruppe mit OT-Wissen und moderatem Budget", "Das entspricht SL 3."),
  R("Ein staatlich gestützter Akteur mit umfangreichen Ressourcen", "SL 4: anspruchsvolle Mittel, umfangreiche Ressourcen, hohe Motivation."),
], "Die Unterscheidung SL 3/4 liegt vor allem bei Ressourcen und Motivation.", "Modul 04");
