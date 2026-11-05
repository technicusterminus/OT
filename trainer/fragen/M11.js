// M11 – Risk Assessment Vertiefung
F("M11-01", 2, "Wer muss in einem 3-2-Workshop für eine belastbare Konsequenzbewertung dabei sein? (Mehrfachauswahl)", [
  R("Betrieb bzw. Verfahrenstechnik", "Nur der Betrieb kennt die physischen Folgen im Prozess."),
  R("Safety-Verantwortliche", "Sie kennen Gefährdungen und vorhandene Schutzschichten."),
  X("Der Integrator allein, weil er die Unterlagen erstellt", "Der Integrator unterstützt, ersetzt aber nicht das Wissen des Betreibers."),
  R("OT-Security", "Sie bringt Bedrohungen und Schwachstellen ein."),
  X("Der Einkauf, um Kosten früh zu begrenzen", "Kosten sind für die Konsequenzbewertung kein Input."),
], "Ohne Betrieb und Safety bleibt die Konsequenzbewertung Spekulation.", "Modul 11, Vorbereitung");

F("M11-02", 3, "Welche bestehende Schutzschicht darf in der Konsequenzbewertung typischerweise mindernd berücksichtigt werden?", [
  R("Ein mechanisches Sicherheitsventil", "Es ist per Cyberangriff nicht manipulierbar."),
  X("Eine Perimeter-Firewall am IT/OT-Übergang", "Cyber-Gegenmaßnahmen werden erst in der detaillierten Bewertung angesetzt."),
  X("Ein netzwerkfähiges, programmierbares SIS", "Ein programmierbares SIS kann selbst Angriffsziel sein (vgl. TRITON)."),
  X("Ein Virenscanner auf den Bediengeräten", "Das ist eine Cyber-Gegenmaßnahme, kein unabhängiger Schutz."),
], "Nur nicht-cyber Schutzschichten begrenzen die Worst-Case-Konsequenz.", "Modul 11, Konsequenzen");

F("M11-03", 2, "Welche Frage führt am direktesten zum SL-T einer Zone?", [
  X("Wie viele Assets enthält die Zone?", "Die Anzahl sagt nichts über den Schutzbedarf."),
  R("Gegen welchen Angreifer muss die Zone bestehen?", "SL sind über Angreiferprofile definiert."),
  X("Welches SL-C haben die bereits eingesetzten Produkte?", "SL-C ist ein Design-Input, kein Maßstab für das Ziel."),
  X("Welches Budget steht für Maßnahmen zur Verfügung?", "Budget beeinflusst Maßnahmen, nicht den Schutzbedarf."),
], "SL-T beantwortet: gegen wen?", "Modul 11, SL-T");

F("M11-04", 3, "Ein Team legt SL-T anhand des SL-C der installierten Komponenten fest. Was ist daran falsch?", [
  X("Nichts – so vermeidet man unerreichbare Ziele", "3-2 leitet SL-T aus dem Risiko ab."),
  R("SL-T folgt aus dem Risiko, nicht aus dem Produkt", "Der Abgleich mit SL-C gehört als Gap-Analyse ins Design."),
  X("SL-T sollte bei Bestandsanlagen höchstens 2 sein", "Es gibt keine solche Obergrenze."),
  X("SL-C wird erst im Betrieb bestimmt und ist daher unbekannt", "SL-C ist eine Produkteigenschaft und vorab bekannt."),
], "Risiko → SL-T; Produkt → SL-C; Differenz → Gap.", "62443-3-2; Modul 11/12");

F("M11-05", 2, "Warum erhält eine SIS-Zone häufig einen niedrigen SL-T für FR 4 (Data Confidentiality)?", [
  X("Weil Safety-Daten aus regulatorischen Gründen öffentlich sein müssen", "Es gibt keine solche Pflicht."),
  R("Weil Manipulation und Ausfall das Hauptrisiko sind, nicht das Mitlesen", "Der Vektor erlaubt hohe Integrität bei geringer Vertraulichkeit."),
  X("Weil die 62443 Verschlüsselung in SIS-Zonen untersagt", "Verschlüsselung ist nicht verboten."),
  X("Weil SIS in der Regel nicht vernetzt sind", "Viele SIS sind vernetzt – deshalb sind sie Angriffsziel."),
], "SL-Vektoren differenzieren nach FR.", "Modul 11, Beispiel");

F("M11-06", 2, "Welche Ereignisse sollten eine erneute Risikobeurteilung auslösen? (Mehrfachauswahl)", [
  R("Eine neue externe Verbindung, etwa zur Cloud", "Neue Zugangspunkte ändern das Risiko."),
  R("Eine wesentliche Änderung der Bedrohungslage", "Neue Angriffe auf eingesetzte Technik erhöhen die Likelihood."),
  X("Ein Personalwechsel im Office-Vertrieb", "Ohne Bezug zum IACS kein Anlass."),
  R("Eine größere Anlagenerweiterung", "Neue Assets und Flüsse müssen zoniert werden."),
  X("Das planmäßige Ende eines Geschäftsjahres", "Ein Kalenderdatum allein ist kein inhaltlicher Anlass."),
], "Die Beurteilung lebt mit der Anlage.", "Modul 11, Typische Fehler");

F("M11-07", 3, "Warum werden bestehende Firewalls in der ersten Risikobeurteilung (ZCR 2) nicht risikomindernd angesetzt?", [
  X("Weil Firewalls in OT-Netzen nicht wirksam sind", "Firewalls sind wirksam – nur nicht in der Erstbewertung."),
  R("Weil ZCR 2 den Worst Case ohne Gegenmaßnahmen ermittelt", "So wird der Schutzbedarf nicht systematisch unterschätzt."),
  X("Weil Firewalls kein eigenes SL-C haben", "Netzwerkgeräte haben ein SL-C nach 4-2."),
  X("Weil ihre Regeln erst im Design festgelegt werden", "Bestehende Regeln existieren bereits – das ist nicht der Grund."),
], "Maßnahmen werden erst in ZCR 5 bewertet.", "62443-3-2, ZCR 2/5");

F("M11-08", 2, "Welche Inhalte gehören in eine CRS? (Mehrfachauswahl)", [
  R("Zonen- und Conduit-Zeichnung", "Zentrales Element der CRS."),
  R("SL-T je Zone und Conduit mit Begründung", "Nachvollziehbare Zielwerte."),
  X("Fertige Firewall-Regelsätze mit IP-Adressen", "Das ist Implementierung, nicht Spezifikation."),
  R("Annahmen und Bedrohungsumgebung", "Grundlage der Bewertung."),
  X("Der Quellcode der Steuerungsprogramme", "Gehört nicht in eine Anforderungsspezifikation."),
], "Die CRS beschreibt Anforderungen und Rahmen, nicht die Umsetzung.", "62443-3-2, ZCR 6");

F("M11-09", 2, "Woher kommen Risikomatrix und tolerierbares Risiko, gegen die bewertet wird?", [
  R("Aus dem Risikomanagement des Asset Owners", "Unternehmensvorgaben, verankert im Security-Programm (2-1)."),
  X("Aus einer verbindlichen Tabelle in 62443-4-2", "4-2 enthält Komponentenanforderungen."),
  X("Aus dem Angebot des Integrators", "Der Integrator übernimmt die Vorgaben des Betreibers."),
  X("Aus dem Datenblatt der eingesetzten Firewall", "Produkte definieren keine Risikotoleranz."),
], "Risikokriterien sind Unternehmensentscheidungen.", "Modul 07/11");

F("M11-10", 3, "Welcher Faktor erhöht die Eintrittswahrscheinlichkeit eines Szenarios am deutlichsten?", [
  X("Das System ist nur lokal am Schaltschrank bedienbar", "Geringe Exposition senkt die Wahrscheinlichkeit."),
  R("Offene Fernwartung mit Default-Passwörtern", "Hohe Exposition plus bekannte Schwachstelle."),
  X("Das System ist redundant ausgelegt", "Redundanz mindert eher die Folgen eines Ausfalls."),
  X("Das System hat eine unterbrechungsfreie Stromversorgung", "Die USV betrifft Stromausfälle, nicht Angriffe."),
], "Exposition und Schwachstellen treiben die Likelihood.", "Modul 11, Likelihood");

F("M11-11", 1, "Welche Bewertung ist in der Konsequenzbewertung maßgeblich, wenn mehrere Kategorien betrachtet werden?", [
  X("Der Durchschnitt über alle Kategorien", "Ein Durchschnitt verwässert schwere Folgen."),
  R("Die höchste Einstufung über alle Kategorien", "Das schwerste Schadensausmaß bestimmt die Konsequenz."),
  X("Nur die finanzielle Kategorie", "HSE kann schwerer wiegen als Geld."),
  X("Die Kategorie mit den meisten Einträgen", "Häufigkeit ist kein Maßstab."),
], "Worst Case über HSE, Umwelt, Produktion, Finanzen, Reputation.", "Modul 11, Konsequenzen");

F("M11-12", 2, "Was ist ein typischer methodischer Fehler bei der Zonenbildung?", [
  X("Zonen nach gemeinsamen Security-Anforderungen zu bilden", "Das ist genau richtig."),
  R("Zonen ungeprüft 1:1 aus VLANs oder Gebäuden zu übernehmen", "Technik und Lage können passen, ersetzen aber keine Analyse."),
  X("Das SIS in eine eigene Zone zu legen", "Das ist eine Regel aus 3-2."),
  X("Die Fernwartung gesondert zu betrachten", "Auch das ist ausdrücklich vorgesehen."),
], "Erst Anforderungen, dann Technik.", "Modul 11, Typische Fehler");

F("M11-13", 2, "Welche Assessment-Art ist in einer laufenden Produktion am risikoärmsten?", [
  X("Penetrationstest der Steuerungen", "Ausnutzungsversuche können Geräte stören."),
  X("Aktiver Netzwerkscan mit Standardprofil", "Aktive Pakete können empfindliche Geräte stören."),
  R("Passive Analyse", "Kein Eingriff in den Prozess."),
  X("Lasttest der Feldbusverbindungen", "Lasttests sind ein Eingriff mit Ausfallrisiko."),
], "Passiv zuerst, aktiv nur mit Freigabe.", "Modul 11, Assessment-Arten");

F("M11-14", 3, "Wo sollte ein Penetrationstest an einem IACS bevorzugt stattfinden?", [
  X("In der laufenden Produktion unter Volllast", "Das maximiert das Risiko für den Prozess."),
  R("Auf einem Referenzsystem oder bei geplantem Stillstand mit Freigabe", "So bleiben Folgen beherrschbar."),
  X("Unangekündigt am Wochenende, um realistische Bedingungen zu haben", "Ohne Freigabe und Abstimmung unverantwortlich."),
  X("Bei laufender Produktion, damit die Ergebnisse realistisch sind", "Realismus rechtfertigt kein Produktionsrisiko – Ausnutzungsversuche können Geräte stören."),
], "Realismus ja, Produktionsrisiko nein.", "Modul 11, Assessment-Arten");

F("M11-15", 2, "Was ist bei einer Brownfield-Risikobeurteilung zusätzlich zur Technik besonders zu erheben?", [
  X("Vor allem die Firmware-Stände aller Geräte", "Wichtig, aber nur Technik."),
  R("Lücken in Richtlinien und Verfahren", "Z. B. kein Fernwartungsprozess, keine Restore-Tests."),
  X("Die Anzahl der Mitarbeitenden je Schicht", "Personalstärke ist kein Security-Gap an sich."),
  X("Die Lieferzeiten für Ersatzteile", "Das ist Instandhaltungslogistik."),
], "Organisatorische Lücken erzeugen genauso Risiko.", "Modul 11, Brownfield");

F("M11-16", 1, "Wann sollte bei einer Neuanlage (Greenfield) die Risikobeurteilung stattfinden?", [
  X("Nach der Inbetriebnahme", "Dann sind Designentscheidungen schon gefallen."),
  R("Vor bzw. zu Beginn des Designs", "So bestimmen Zonen und SL-T das Design."),
  X("Erst beim ersten Sicherheitsvorfall", "Das ist reaktiv und teuer."),
  X("Sobald das erste Audit ansteht", "Die Beurteilung ist Grundlage, keine Auditformalität."),
], "Security by Design beginnt mit der Risikobeurteilung.", "Modul 11, Greenfield");

F("M11-17", 2, "Welche Ergebnisse liefert eine Ist-Aufnahme typischerweise? (Mehrfachauswahl)", [
  R("Asset-Inventar", "Was gibt es?"),
  R("Datenflussdiagramm", "Wer spricht mit wem?"),
  X("Fertig programmierte SPS-Logik", "Die Ist-Aufnahme erstellt keine Steuerungsprogramme."),
  X("Eine Zertifizierungsurkunde nach 62443-3-3", "Eine Ist-Aufnahme ist keine Zertifizierung."),
], "Außerdem: vorhandene Gegenmaßnahmen und Gaps.", "Modul 11");

F("M11-18", 2, "Warum verifiziert man den Netzplan in der Risikobeurteilung mit realen Netzwerkdaten?", [
  X("Weil Netzpläne laut Norm nicht verwendet werden dürfen", "Netzpläne sind wichtig – sie müssen nur stimmen."),
  R("Weil Dokumentation oft von der Realität abweicht", "Passive Analyse deckt z. B. Schatten-Router auf."),
  X("Weil reale Daten die Konsequenzbewertung ersetzen", "Netzdaten zeigen Flüsse, keine Folgen."),
  X("Weil sonst das SL-C der Switches unbekannt bleibt", "SL-C steht im Herstellernachweis, nicht im Mitschnitt."),
], "Vertraue der Messung, nicht nur dem Plan.", "Modul 11");

F("M11-19", 2, "Was muss bei der Festlegung des SuC dokumentiert werden? (Mehrfachauswahl)", [
  R("Die Grenzen des Systems", "Was gehört dazu, was nicht?"),
  R("Die Zugangspunkte, z. B. Fernwartung und IT-Schnittstellen", "Hier kommen Angreifer herein."),
  X("Die Gehaltsstruktur des Betriebspersonals", "Irrelevant für die Abgrenzung."),
  X("Die geplanten Firewall-Hersteller", "Produktwahl kommt erst im Design."),
], "Außerdem: die enthaltenen Assets.", "62443-3-2, ZCR 1");

F("M11-20", 3, "Ein SuC wird zu groß gewählt (gesamtes Werk inklusive Office). Welches Problem entsteht am ehesten?", [
  X("Keins – ein größerer Rahmen macht die Bewertung gründlicher", "Größer ist nicht automatisch gründlicher."),
  R("Unterschiedliche Schutzbedarfe verschwimmen und der Aufwand explodiert", "Ein sinnvoll abgegrenztes SuC bleibt handhabbar."),
  X("Die Norm begrenzt das SuC auf zehn Assets", "Es gibt keine solche Grenze."),
  X("Das SL-T wird dadurch automatisch 4", "Das SL-T folgt aus dem Risiko, nicht aus der Größe."),
], "Mehrere SuCs können getrennt bewertet werden.", "62443-3-2, ZCR 1");

F("M11-21", 1, "Welche Methode liefert in einer laufenden Anlage das zuverlässigste Asset-Inventar ohne Prozessrisiko?", [
  X("Ein aktiver Ping-Sweep über alle Netze", "Aktive Methoden bergen Risiko und finden nicht alles."),
  R("Passive Analyse plus Projektdaten und Begehung", "Mehrere Quellen abgleichen, passiv messen."),
  X("Die Bestellliste aus dem Einkaufssystem", "Bestellungen zeigen nicht, was tatsächlich verbaut ist."),
  X("Die Angaben des ursprünglichen Integrators", "Oft Jahre alt und unvollständig."),
], "Dokumente allein veralten – Messung und Begehung ergänzen.", "Modul 11, Vorbereitung");

F("M11-22", 2, "Welche Angaben gehören in eine Kommunikationsmatrix? (Mehrfachauswahl)", [
  R("Quelle und Ziel", "Grundlage jeder Regel."),
  R("Protokoll, Port und Richtung bzw. Initiator", "Bestimmt die Regel und die Angriffsfläche."),
  R("Zweck bzw. Funktion des Flusses", "Erst der Zweck begründet die Regel."),
  X("Anschaffungspreis der beteiligten Geräte", "Kosten sind für Datenflüsse irrelevant."),
  X("Name der Person, die das Kabel verlegt hat", "Irrelevant für die Kommunikation."),
], "Ohne Zweck keine begründete Freigabe.", "Modul 05/11");

F("M11-23", 2, "Die passive Analyse zeigt eine SPS, die mit einer unbekannten öffentlichen IP kommuniziert. Was ist der nächste sinnvolle Schritt?", [
  X("Ignorieren, solange die SPS fehlerfrei läuft", "Ein unbekannter Außenkontakt ist ein potenzieller Zugangspunkt."),
  R("Ursache klären und bewerten", "Z. B. vergessener Fernwartungsrouter oder Hersteller-Cloud."),
  X("Die SPS sofort vom Netz trennen", "Ohne Abstimmung kann das den Prozess stören."),
  X("Nur die IP-Adresse in der Firewall sperren", "Ohne Ursachenklärung bleibt der Weg womöglich offen oder Funktionen fallen aus."),
], "Erst verstehen, dann gezielt handeln.", "Modul 11");

F("M11-24", 2, "Welches Vorgehen ist für eine High-Level-Ist-Aufnahme typisch?", [
  X("Exploits gegen bekannte Schwachstellen ausführen", "Das ist ein Penetrationstest."),
  R("Interviews, Dokumentensichtung und Begehung", "Risikofreier Einstieg."),
  X("Lasttests auf den Feldgeräten", "Ein Eingriff mit Ausfallrisiko."),
  X("Reverse Engineering der Firmware", "Viel zu tief für eine High-Level-Aufnahme."),
], "High-Level = reden, lesen, anschauen.", "Modul 11, Assessment-Arten");

F("M11-25", 3, "Ein aktiver Schwachstellenscan in einer Zelle ist geplant. Welche Voraussetzungen sind sinnvoll? (Mehrfachauswahl)", [
  R("Freigabe durch Betrieb und Asset Owner", "Aktive Methoden brauchen eine bewusste Entscheidung."),
  R("Durchführung im Wartungsfenster oder am Testsystem", "Mögliche Störungen bleiben beherrschbar."),
  X("Maximale Scan-Geschwindigkeit, um das Zeitfenster kurz zu halten", "Hohe Paketraten erhöhen das Störungsrisiko."),
  X("Scan während des Anfahrens der Anlage", "Gerade in Übergangszuständen sind Störungen besonders kritisch."),
], "Außerdem: schonende, abgestimmte Scan-Profile.", "Modul 11, Assessment-Arten");

F("M11-26", 2, "Die High-Level-Beurteilung zeigt: Ein Ausfall der Chlordosierung kann Menschen gefährden. Was folgt daraus?", [
  X("Nichts, da es sich um ein Safety- und kein Security-Thema handelt", "Cyberangriffe können Safety-Folgen auslösen."),
  R("Das Anfangsrisiko ist hoch; die Zonen werden detailliert beurteilt", "Hohe Konsequenzen führen fast immer in ZCR 5."),
  X("Die Chlordosierung wird aus dem SuC ausgeklammert", "Damit würde das kritischste Asset ignoriert."),
  X("Das SL-T wird auf 0 gesetzt, weil das SIS zuständig ist", "Das SIS kann selbst angegriffen werden."),
], "HSE-Konsequenzen treiben den Schutzbedarf.", "62443-3-2, ZCR 2/4");

F("M11-27", 2, "Welches Bedrohungsszenario ist für eine Zone mit Herstellerfernwartung besonders relevant?", [
  X("Ein Hochwasser am Standort", "Naturgefahren gehören in die Notfallplanung, nicht in dieses Szenario."),
  R("Missbrauch gestohlener Dienstleister-Zugangsdaten", "Ein häufiger Angriffsweg in OT."),
  X("Ein Stromausfall im Verwaltungsgebäude", "Kein Bezug zur Fernwartung."),
  X("Ein Defekt im Leitwarten-Drucker", "Kein Security-Szenario."),
], "Lieferanten-Zugänge sind ein Top-Einfallstor.", "Modul 11, Szenarien");

F("M11-28", 3, "Wie sollten Bedrohungsszenarien formuliert sein, damit sie für die SL-T-Ableitung taugen?", [
  X("Möglichst allgemein, etwa „Hacker greift an“", "Zu unscharf für Likelihood und Konsequenz."),
  R("Konkret mit Akteur, Zugangsweg, Ziel und Auswirkung", "Z. B. Ransomware aus dem Office-Netz verschlüsselt HMIs."),
  X("Als Liste der CVE-Nummern betroffener Produkte", "CVEs sind Schwachstellen, keine Szenarien."),
  X("Als Produktnamen der eingesetzten Komponenten", "Produkte sind keine Bedrohungen."),
], "Konkrete Szenarien lassen sich bewerten und FRs zuordnen.", "Modul 11, SL-T");

F("M11-29", 2, "Bei einer Brownfield-Beurteilung wird eine Firewall gefunden, deren Regelwerk any-any enthält. Wie ist sie als vorhandene Gegenmaßnahme zu bewerten?", [
  X("Voll wirksam, weil eine Firewall vorhanden ist", "Vorhandensein ist nicht Wirksamkeit."),
  R("Kaum wirksam – maßgeblich ist die tatsächliche Konfiguration", "Any-any filtert faktisch nichts."),
  X("Wirksamer als ein Default-Deny-Regelwerk", "Das Gegenteil ist der Fall."),
  X("Nicht bewertbar, da Firewalls kein FR betreffen", "Firewalls betreffen FR 5."),
], "Gegenmaßnahmen nach realer Wirkung bewerten.", "Modul 11, Gaps");

F("M11-30", 2, "Welches Beispiel ist ein Gap in Richtlinien und Verfahren – nicht in der Technik?", [
  X("Eine veraltete Firmware-Version", "Das ist ein technisches Gap."),
  R("Kein Freigabeprozess für Fernwartung", "Ein organisatorisches Gap."),
  X("Fehlende VLAN-Trennung zwischen Zellen", "Das ist ein technisches Gap."),
  X("Zu wenige Ports an den Zellenswitches", "Das ist eine Kapazitätsfrage."),
], "Prozesse fehlen oft, obwohl die Technik da ist.", "Modul 11, Brownfield");

F("M11-31", 2, "Warum gehören Annahmen (z. B. „Leitwarte ist zugangskontrolliert“) in die CRS?", [
  X("Weil sie formal vorgeschrieben, inhaltlich aber bedeutungslos sind", "Annahmen tragen die Bewertung."),
  R("Weil das SL-T auf ihnen beruht; fällt eine weg, wird neu bewertet", "Annahmen machen die Bewertung prüfbar."),
  X("Weil der Hersteller sie für seine Gewährleistung benötigt", "Die CRS ist ein Betreiberdokument."),
  X("Annahmen gehören nicht in die CRS, sondern ins Pflichtenheft", "3-2 sieht Annahmen ausdrücklich vor."),
], "Annahmen sind Teil des Risikobilds.", "62443-3-2, ZCR 6");

F("M11-32", 1, "Was dokumentiert die Freigabe der CRS durch den Asset Owner?", [
  X("Dass der Integrator seine Leistung vollständig erbracht hat", "Das ist eine Abnahme, keine CRS-Freigabe."),
  R("Dass er Anforderungen, SL-T und Restrisiko bewusst akzeptiert", "Er trägt das Risiko und bestätigt die Designgrundlage."),
  X("Dass ein Zertifikat nach 3-3 erteilt wurde", "Zertifizierung ist ein anderer Vorgang."),
  X("Dass keinerlei Risiken mehr bestehen", "Restrisiko bleibt immer."),
], "Freigabe = bewusste Risikoentscheidung.", "62443-3-2, ZCR 7");

F("M11-33", 2, "Ein Werk will Produktionsdaten künftig direkt an eine Cloud-Plattform senden. Was ist aus 3-2-Sicht erforderlich?", [
  X("Keine Neubewertung, wenn der Cloud-Anbieter zertifiziert ist", "Die Zertifizierung des Anbieters ändert nichts an neuen Zugangspunkten."),
  R("MoC und Risikobeurteilung aktualisieren", "Neue externe Verbindung = neue Bedrohungen."),
  X("Nur den Router neu konfigurieren", "Technik ohne Bewertung ignoriert das Risiko."),
  X("Das SL-T aller Zonen auf 1 senken, um die Anbindung zu erleichtern", "SL-T folgt dem Risiko, nicht der Bequemlichkeit."),
], "Neue Konnektivität → Re-Assessment.", "Modul 11/13");

F("M11-34", 2, "Ein Branchen-CERT warnt vor aktiven Angriffen auf ein in der Anlage eingesetztes Fernwirkprotokoll. Was folgt daraus?", [
  X("Abwarten, bis ein eigener Vorfall eintritt", "Abwarten ist reaktiv."),
  R("Betroffene Zonen neu bewerten", "Die Bedrohungslage hat sich geändert."),
  X("Nur die Mitarbeitenden per Rundmail informieren", "Information allein senkt das Risiko kaum."),
  X("Das Protokoll in der Dokumentation umbenennen", "Kosmetik ohne Wirkung."),
], "Geänderte Bedrohungslage ist ein Re-Assessment-Anlass.", "Modul 11");

F("M11-35", 1, "Wie sollte die Risikobeurteilung über den Lebenszyklus behandelt werden?", [
  X("Einmalig bei der Inbetriebnahme", "Anlagen und Bedrohungen ändern sich."),
  R("Als lebendes Dokument", "Security ist ein kontinuierlicher Prozess."),
  X("Im Rahmen der jährlichen externen Audits", "Audits prüfen, sie ersetzen keine Pflege."),
  X("Nur nach Sicherheitsvorfällen", "Zu spät und zu selten."),
], "Regelmäßig plus bei Änderungen.", "Modul 11");
