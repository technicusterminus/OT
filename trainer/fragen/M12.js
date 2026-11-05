// M12 – Design Vertiefung
F("M12-01", 2, "Was ist die korrekte Ableitungskette im Design?", [
  X("Produkt auswählen → SL-T festlegen → Risiko bewerten", "Das stellt die Kette auf den Kopf."),
  R("Risiko → SL-T → SR/RE → Produkte → Gaps → SL-A", "Vom Risiko bis zum Nachweis im Betrieb."),
  X("SL-A messen → SL-C ableiten → SL-T anpassen", "SL-T darf nicht an das Erreichte angepasst werden."),
  X("Firewall-Regeln schreiben → Zonen ableiten → Risiko bewerten", "Regeln folgen aus Zonen, nicht umgekehrt."),
], "Design beginnt beim Risiko und endet beim Nachweis.", "Modul 12, Ableitungskette");

F("M12-02", 2, "Eine Bestands-HMI kennt keine individuellen Benutzerkonten, die Zone fordert SL-T 3 für FR 1. Was ist die sinnvollste Lösung?", [
  X("Das Gap akzeptieren, da Bestandsanlagen Bestandsschutz haben", "Es gibt keinen Bestandsschutz für Risiken."),
  X("Das SL-T der Zone auf 1 absenken", "SL-T folgt dem Risiko."),
  R("Kompensieren, z. B. Host-Anmeldung und MFA am Jump-Host", "Dokumentiert und vom Asset Owner bestätigt."),
  X("Ein Gruppenpasswort mit 30 Zeichen verwenden", "Ein langes Gruppenpasswort macht Handlungen nicht zuordenbar."),
], "Kompensation auf Systemebene schließt das Gap nachvollziehbar.", "Modul 12, Gap-Analyse");

F("M12-03", 3, "Warum ist SL-C allein kein Nachweis für SL-A?", [
  X("Weil SL-C sich auf die Softwarekomponenten beschränkt", "SL-C gibt es für alle Komponententypen."),
  R("Erst die Konfiguration macht daraus eine Wirkung", "Eine SL-C-3-Firewall mit any-any erreicht kein SL-A 3."),
  X("Weil SL-A typischerweise eine Stufe unter SL-C liegt", "Es gibt keinen festen Abstand."),
  X("Weil SL-C vom Asset Owner festgelegt wird", "SL-C ist eine Herstellerangabe."),
], "SL-C ist ein Versprechen – SL-A ist die Realität.", "Modul 12");

F("M12-04", 2, "Welche Angaben gehören in eine vollständige Conduit-Spezifikation? (Mehrfachauswahl)", [
  R("Verbundene Zonen und SL-T", "Bezug zur Risikobeurteilung."),
  R("Zugelassene Flüsse mit Protokoll, Richtung und Initiator", "Grundlage der Regeln."),
  R("Authentisierung, Verschlüsselung und Logging", "Schutzmaßnahmen je FR."),
  X("Die Seriennummern der verbauten Switches", "Inventardaten, keine Conduit-Spezifikation."),
  X("Die Bestellnummern der Kabel", "Irrelevant für die Spezifikation."),
], "Außerdem: Grenzschutz, Verfügbarkeit, Verantwortlicher.", "Modul 12, Conduit-Spezifikation");

F("M12-05", 2, "Welches Fernzugriffs-Design entspricht am ehesten SR 1.13 und 2-4 SP.07?", [
  X("Dauerhafter Site-to-Site-VPN vom Hersteller in die Steuerungszone", "Umgeht DMZ und Kontrolle."),
  X("Fernwartungssoftware direkt auf der Engineering-Workstation", "Ein unkontrollierter Zugang auf ein kritisches System."),
  R("Jump-Host in der DMZ, MFA, Freischaltung, Aufzeichnung", "Kontrolliert, überwacht, zeitlich begrenzt."),
  X("LTE-Router des Herstellers im Schaltschrank", "Ein Zugang an allen Schutzmaßnahmen vorbei."),
], "Fernzugriff immer über eine kontrollierte Zwischenstufe.", "SR 1.13; 2-4 SP.07");

F("M12-06", 3, "Welche Designmaßnahme passt zur SIS-Zone?", [
  X("Schreibzugriff aus der Leitstelle für schnelleres Engineering", "Erhöht die Angriffsfläche auf die Sicherheitsfunktion."),
  R("Dediziertes Engineering, Leitstelle nur lesend", "Dazu Write-Protect an der Safety-CPU."),
  X("SIS-Daten für Reporting direkt ins Office-Netz", "Direkte IT-Anbindung widerspricht der Zonierung."),
  X("SIS und Basisautomatisierung im selben flachen Netz", "SIS gehören in eine eigene Zone."),
], "Integrität der Sicherheitsfunktion hat höchste Priorität.", "Modul 12, SIS");

F("M12-07", 2, "Was ist eine SR-Traceability-Matrix?", [
  X("Eine Liste aller IP-Adressen und Hostnamen", "Das ist ein Inventar."),
  R("Die Zuordnung jeder SR/RE zu Umsetzung und Nachweis", "Produkt, Konfiguration oder Kompensation – plus Beleg."),
  X("Ein Protokoll von Traceroute-Messungen", "Ein Netzwerkdiagnose-Werkzeug."),
  X("Ein Wartungsplan für die Netzwerkkomponenten", "Instandhaltung, keine Anforderungsverfolgung."),
], "Macht das Design prüfbar und auditierbar.", "Modul 12, Dokumentation");

F("M12-08", 3, "Warum werden an IT/OT-Grenzen oft zwei Firewall-Ebenen mit DMZ statt einer Firewall eingesetzt?", [
  X("Weil zwei Firewalls die Bandbreite verdoppeln", "Bandbreite ist nicht der Grund."),
  R("Defense in Depth ohne durchgehende Sessions", "Die DMZ entkoppelt beide Seiten."),
  X("Weil 62443 genau zwei Firewalls verbindlich vorschreibt", "Die Norm schreibt Schutzziele vor, keine Gerätezahl."),
  X("Damit IT und OT dieselbe Domäne nutzen können", "Getrennte Domänen sind gerade das Ziel."),
], "Zwei Ebenen, getrennte Regelwerke, idealerweise getrennte Administration.", "SR 5.1/5.2; Modul 12");

F("M12-09", 2, "Welche Aussage zu Active Directory zwischen IT und OT entspricht guter Segmentierung?", [
  X("OT-Systeme sind Mitglied der Office-Domäne", "Eine kompromittierte IT-Domäne öffnet dann die OT."),
  R("Eigene OT-Domäne ohne Vertrauen gegenüber der IT-Domäne", "Begrenzt die Ausbreitung."),
  X("Verzeichnisdienste sind in der OT nicht zulässig", "Sie sind zulässig und oft sinnvoll."),
  X("Lokale Gruppenkonten sind sicherer als jedes Verzeichnis", "Gruppenkonten verletzen Nachvollziehbarkeit."),
], "Getrennte Identitäten für IT und OT.", "Modul 12, IT/OT-Übergang");

F("M12-10", 3, "Ein Switch hat SL-C 2, die Zone fordert für FR 5 SL-T 3. Was ist der passende nächste Schritt?", [
  X("Den Switch in jedem Fall tauschen", "Ein Tausch ist eine Option, aber nicht die einzige."),
  R("Fehlende SR/REs ermitteln, dann entscheiden", "Gap auf Anforderungsebene analysieren."),
  X("Die Anforderung aus der CRS streichen", "Anforderungen streicht man nicht wegen eines Produkts."),
  X("SL-T nur für diesen Switch senken", "SL-T gilt für die Zone, nicht für ein Gerät."),
], "Erst analysieren, dann entscheiden: Produkt oder Kompensation.", "Modul 12, Gap-Analyse");

F("M12-11", 2, "Welche Wireless-Designregel ist am sinnvollsten?", [
  X("WLAN in dieselbe Zone wie die Steuerungen legen", "Funk ist leichter erreichbar und gehört gesondert zoniert."),
  R("Eigene Zone, 802.1X, Verfügbarkeit bewerten", "Erreichbarkeit und Störbarkeit beachten."),
  X("Eine versteckte SSID mit offenem Zugang", "Versteckte SSIDs bieten keinen Schutz."),
  X("WPA2-PSK mit dem Herstellerstandard-Passwort", "Gemeinsame Default-Schlüssel sind leicht kompromittiert."),
], "Wireless = eigene Zone + starke Authentisierung + Verfügbarkeitsbewertung.", "62443-3-2 ZCR 3; Modul 12");

F("M12-12", 2, "Wie ist mit Gaps umzugehen, die weder durch Produkt noch durch Kompensation geschlossen werden können?", [
  X("Aus der Dokumentation herauslassen", "Verschwiegene Risiken sind nicht beherrschbar."),
  R("Dokumentieren, Asset Owner entscheiden lassen", "Bewusste Akzeptanz oder Ablehnung."),
  X("Das SL-T ohne Dokumentation anpassen", "Intransparent und nicht nachvollziehbar."),
  X("Die Verantwortung vertraglich auf den Hersteller übertragen", "Das Betriebsrisiko bleibt beim Asset Owner."),
], "Restrisiken sind Entscheidungen des Asset Owners.", "Modul 12, Dokumentation");

F("M12-13", 1, "Was ist ein CFAT?", [
  R("Cybersecurity Factory Acceptance Test vor der Auslieferung", "Prüft beim Integrator/Hersteller, ob die Anforderungen erfüllt sind."),
  X("Central Firewall Access Table für alle Zonengrenzen", "Kein Normbegriff."),
  X("Certified Field Automation Technician", "Keine Zertifizierung, sondern ein Test."),
  X("Cyber Forensic Analysis Toolkit für Vorfälle", "Kein Forensik-Werkzeug."),
], "CFAT im Werk, CSAT vor Ort.", "Modul 12, CFAT/CSAT");

F("M12-14", 2, "Was prüft ein CSAT im Unterschied zum CFAT vor allem?", [
  X("Den Quellcode der Steuerungsprogramme", "Code-Reviews sind kein CSAT."),
  R("Die reale Integration am Standort", "Erst am Standort prüfbar."),
  X("Vor allem die Vollständigkeit der Dokumentation", "Dokumentation ist nur ein Teil."),
  X("Die Lieferzeiten der Ersatzteile", "Kein Security-Test."),
], "Site Acceptance = Integration in die reale Umgebung.", "Modul 12, CFAT/CSAT");

F("M12-15", 2, "Was gehört zwingend zu jedem Testfall in einem Cybersecurity-Testplan?", [
  X("Ein Foto der testenden Person", "Irrelevant für die Nachvollziehbarkeit."),
  R("Anforderungsbezug und Ergebnis", "Nur so ist der Test rückführbar."),
  X("Nur Datum und Unterschrift", "Ohne Inhalt nicht nachvollziehbar."),
  X("Der Preis des Tests", "Kosten sind nicht Teil des Testfalls."),
], "Traceability gilt auch für Tests.", "Modul 12");

F("M12-16", 3, "Warum wird eine neue Zonen-Firewall zunächst im Monitor- bzw. Log-only-Modus betrieben?", [
  X("Um Lizenzkosten in der Einführungsphase zu sparen", "Kosten sind nicht der Grund."),
  R("Um nötige, unbekannte Flüsse zu erkennen", "Sonst droht ein Produktionsausfall."),
  X("Weil ein blockierender Modus in OT unzulässig ist", "Enforce ist das Ziel, nur nicht sofort."),
  X("Damit Angreifer frühzeitig gewarnt werden", "Monitoring warnt den Betreiber, nicht den Angreifer."),
], "Auswerten, dann durchsetzen.", "Modul 12, Firewall-Planung");

F("M12-17", 2, "Welche Eigenschaften sollte ein OT-Firewall-Regelwerk haben? (Mehrfachauswahl)", [
  R("Default-Deny", "Alles, was nicht erlaubt ist, ist verboten."),
  R("Kommentar mit Begründung bzw. Ticket je Regel", "Macht Regeln überprüfbar."),
  X("Eine any-any-Regel am Ende für den Notfall", "Hebelt die Zonengrenze aus."),
  X("Möglichst wenige, dafür breite Regeln für ganze Subnetze", "Breite Regeln widersprechen Least Privilege."),
], "Außerdem: explizite Quelle, Ziel und Dienst je Regel.", "Modul 12; SR 5.2");

F("M12-18", 2, "Von wo sollte die Administration einer Zonen-Firewall erfolgen?", [
  X("Aus jedem Netz per HTTP, um flexibel zu bleiben", "Klartext und offen erreichbar."),
  R("Nur aus einer Management-Zone, mit MFA und Protokollierung", "Grenzschutzsysteme sind selbst schützenswert."),
  X("Aus dem Gäste-WLAN für externe Dienstleister", "Ein nicht vertrauenswürdiges Netz."),
  X("Direkt aus dem Internet über einen offenen Port", "Maximale Angriffsfläche."),
], "Management-Ebene trennen und absichern.", "Modul 12, Firewall-Planung");

F("M12-19", 3, "Nach welchem Kriterium wählt man im Design Gegenmaßnahmen primär aus?", [
  X("Nach dem günstigsten Angebot", "Kosten sind ein Kriterium, aber nicht das primäre."),
  R("Nach SL-Fähigkeit und Bedrohungen", "Maßnahmen müssen das SL-T erreichen und die Szenarien adressieren."),
  X("Nach dem bevorzugten Hersteller des Betreibers", "Herstellerbindung ersetzt keine Anforderungsprüfung."),
  X("Nach der Anzahl der Funktionen im Datenblatt", "Funktionsfülle sagt nichts über die Eignung."),
], "Bedarf aus dem Risiko, Fähigkeit aus SL-C.", "Modul 12");

F("M12-20", 2, "Eine Zone hat SL-T 3 für FR 5. Was ist im Design der erste Schritt?", [
  X("Eine Firewall mit möglichst hohem Durchsatz beschaffen", "Produktwahl kommt nach den Anforderungen."),
  R("Die SRs unter FR 5 samt der für SL 3 nötigen REs ermitteln", "Aus dem Ziel werden die konkreten Anforderungen."),
  X("Das SL-T auf 2 senken, um Kosten zu sparen", "SL-T folgt dem Risiko."),
  X("Die Zone mit einer Nachbarzone zusammenlegen", "Das verändert die Risikobasis."),
], "Ziel → Anforderungen → Lösung.", "Modul 12, Ableitungskette");

F("M12-21", 3, "Warum sollte jede Design-Maßnahme auf eine Anforderung (SR/RE) zurückführbar sein?", [
  X("Weil Auditoren sonst Bußgelder verhängen", "Audits verhängen keine Bußgelder."),
  R("Damit Wirksamkeit, Vollständigkeit und Lücken prüfbar sind", "Und überflüssige Maßnahmen auffallen."),
  X("Weil Hersteller das für ihre Gewährleistung verlangen", "Traceability dient dem Betreiber, nicht dem Hersteller."),
  X("Ist nicht notwendig, wenn die Maßnahme Best Practice ist", "Best Practice ersetzt keinen Anforderungsbezug."),
], "Traceability ist der Kern eines prüfbaren Designs.", "Modul 12, Traceability");

F("M12-22", 2, "Ein Hersteller bescheinigt SL-C 3 unter der Bedingung bestimmter Konfigurationen laut Härtungsleitfaden. Was folgt daraus?", [
  X("SL-C gilt unabhängig von der Konfiguration", "SL-C setzt korrekte Konfiguration voraus."),
  R("Der Leitfaden muss umgesetzt und im CFAT geprüft werden", "Sonst wird das SL-C nicht erreicht."),
  X("Der Leitfaden ist eine unverbindliche Empfehlung", "Er ist Bedingung für das SL-C."),
  X("Das Produkt erreicht dadurch automatisch SL 4", "Konfiguration erreicht SL-C, nicht mehr."),
], "4-1 SG liefert den Leitfaden, der Integrator setzt ihn um.", "Modul 09/12");

F("M12-23", 2, "Welche Umsetzung ist für eine Zonengrenze zwischen Leitstelle und Zelle am geeignetsten?", [
  X("Ein eigenes VLAN ohne Filterung", "Ein VLAN trennt logisch, setzt aber keine Regeln durch."),
  R("Firewall/ACL mit Default-Deny und Logging", "Die Grenze wird durchgesetzt und überwacht."),
  X("Ein unmanaged Switch zwischen beiden Bereichen", "Keine Filterung möglich."),
  X("Eine eigene WLAN-SSID für die Zelle", "Funk ändert nichts an der fehlenden Filterung."),
], "Grenze = Durchsetzung + Protokollierung.", "SR 5.1/5.2; Modul 12");

F("M12-24", 2, "Wie sollten Patches und AV-Signaturen in die OT gelangen?", [
  X("Jedes OT-System lädt direkt aus dem Internet", "Direkte Internetverbindungen widersprechen der Zonierung."),
  R("Über ein Update-Relay in der DMZ", "Kontrollierte Vermittlung."),
  X("Als E-Mail-Anhang an die Schichtleitung", "E-Mail ins IACS widerspricht SR 5.3."),
  X("Per Download auf der Engineering-Workstation", "Die EWS bekäme so Internetzugang – ein hochkritisches System würde exponiert."),
], "Die DMZ vermittelt Updates.", "Modul 10/12");

F("M12-25", 3, "Welche Aussage zu Diensten in der IT/OT-DMZ ist richtig?", [
  X("Die DMZ darf Sessions direkt von Level 4 bis Level 1 durchleiten", "Durchleiten hebelt die Trennung aus."),
  R("Sie vermitteln Daten, statt durchzuleiten", "Trennstelle statt Durchleitung."),
  X("In der DMZ stehen die Steuerungen", "Steuerungen gehören auf Level 1."),
  X("Die DMZ ersetzt alle Zonenfirewalls innerhalb der OT", "Sie ergänzt, ersetzt aber nicht."),
], "Die DMZ ist eine Trennstelle.", "Modul 01/12");

F("M12-26", 2, "Eine Firewall-Regel hatte über Monate keine Treffer. Wie geht man vor?", [
  X("Belassen, da sie niemandem schadet", "Verwaiste Regeln vergrößern die Angriffsfläche."),
  R("Mit dem Betrieb prüfen und über MoC entfernen", "Kontrolliert aufräumen."),
  X("Sofort ohne Rücksprache löschen", "Seltene, aber nötige Flüsse (z. B. Jahreswartung) könnten fehlen."),
  X("Erst beim nächsten Herstellerwechsel prüfen", "Viel zu spät."),
], "Regelwerke regelmäßig rezertifizieren.", "Modul 12/13");

F("M12-27", 2, "Welche Maßnahme schützt die Konfiguration eines Safety-Controllers zusätzlich zur Netzwerktrennung?", [
  X("Ein separates VLAN mit eigenem Namen", "Das ist weiterhin Netzwerktrennung."),
  R("Schlüsselschalter bzw. Write-Protect an der Safety-CPU", "Physische Schreibsperre auch bei Netzzugriff."),
  X("Ein komplexeres Passwort für das Engineering-Tool", "Hilft, ersetzt aber keine physische Sperre."),
  X("Eine regelmäßige Neustartroutine", "Neustarts schützen nicht vor Manipulation."),
], "Lehre aus TRITON: physische Schreibsperre.", "Modul 12, SIS");

F("M12-28", 2, "Warum wird in der Conduit-Spezifikation der Initiator einer Verbindung festgelegt?", [
  X("Weil Protokolle ohne Initiator nicht funktionieren", "Technisch gibt es immer einen Initiator – die Frage ist, wer es sein darf."),
  R("Weil daraus folgt, welche Seite Verbindungen aufbauen darf", "Eingehende Verbindungen in die schutzbedürftigere Zone werden vermieden."),
  X("Weil der Initiator die Kosten der Verbindung trägt", "Kein Kostenthema."),
  X("Weil der Initiator automatisch verschlüsselt", "Verschlüsselung ist eine eigene Anforderung."),
], "Richtung bestimmt Regeln und Angriffsfläche.", "Modul 12, Conduit-Spezifikation");

F("M12-29", 1, "Was gehört in die Liste offener Gaps der Design-Dokumentation?", [
  X("Nur bereits behobene Punkte", "Behobene Punkte sind keine offenen Gaps."),
  R("Offene Anforderungen mit Risiko und Entscheidung", "Transparenz über Restrisiken."),
  X("Nur Fehler der Hersteller", "Gaps können überall entstehen."),
  X("Nichts – Gaps werden mündlich geklärt", "Mündliche Klärung ist nicht nachvollziehbar."),
], "Offene Gaps gehören transparent dokumentiert.", "Modul 12, Dokumentation");

F("M12-30", 2, "Welches Dokument verbindet Zonen, Conduits, SL-T und Netzwerkumsetzung visuell?", [
  X("Das Organigramm des Betriebs", "Zeigt Personen, keine Netze."),
  R("Das Zonen-/Conduit-Diagramm", "Grundlage für Reviews, Tests und Audits."),
  X("Der Schichtplan der Leitwarte", "Kein technisches Dokument."),
  X("Das Verfahrensfließbild der Anlage", "Zeigt den Prozess, nicht das Netz."),
], "Ein Bild, auf das sich alle beziehen.", "Modul 12, Dokumentation");

F("M12-31", 2, "Welche Testfälle passen in einen CFAT? (Mehrfachauswahl)", [
  R("Default-Passwörter sind geändert", "Im Werk prüfbar."),
  R("Ein verbotener Fluss wird blockiert und geloggt", "Im Werk mit Testaufbau prüfbar."),
  X("Die Anbindung an das SIEM des Standorts funktioniert", "Erst vor Ort im CSAT prüfbar."),
  X("Die Fernwartung über den Provider des Standorts funktioniert", "Erst vor Ort prüfbar."),
], "Außerdem: ungenutzte Dienste deaktiviert, Restore funktioniert.", "Modul 12, CFAT/CSAT");

F("M12-32", 3, "Im CFAT schlägt der Restore-Test fehl. Wie wird verfahren?", [
  X("Abnahme trotzdem erteilen und im Betrieb nachbessern", "Ein bekannter Mangel geht dann in den Betrieb."),
  R("Als Abweichung dokumentieren, Behebung verlangen und erneut testen", "Erst nach erfolgreichem Nachtest ausliefern."),
  X("Den Testfall aus dem Plan streichen", "Damit wird der Mangel verschleiert."),
  X("Den Test auf den CSAT verschieben, ohne Abweichung zu notieren", "Ohne Dokumentation geht der Punkt verloren."),
], "Abweichung → Maßnahme → Nachtest.", "Modul 12, CFAT/CSAT");

F("M12-33", 2, "Wo sollte ein Schwachstellenscan im Rahmen der Abnahme bevorzugt durchgeführt werden?", [
  X("In der laufenden Produktion nach Inbetriebnahme", "Hier besteht Produktionsrisiko."),
  R("Am FAT-System vor der Auslieferung", "Kein Produktionsrisiko."),
  X("Erst im laufenden Betrieb nach der Abnahme", "Scans sind ein sinnvoller Abnahmebestandteil."),
  X("Nur beim Hersteller ohne Bezug zum konkreten System", "Der Scan soll das konkrete System prüfen."),
], "Prüfen, solange es nichts kostet.", "Modul 12, CFAT");

F("M12-34", 2, "Welche Härtungsmaßnahmen gehören typischerweise zu einer HMI auf Windows-Basis? (Mehrfachauswahl)", [
  R("Nicht benötigte Dienste deaktivieren", "Minimale Funktionalität (SR 7.7)."),
  R("Application Whitelisting", "Malware-Schutz (SR 3.2)."),
  X("Lokale Administratorrechte für alle Operatoren", "Widerspricht Least Privilege (SR 2.1)."),
  X("Automatische Windows-Updates direkt aus dem Internet", "Ungetestet und mit Internetzugang."),
], "Außerdem: USB-Ports kontrollieren.", "SR 7.7, 3.2, 2.1; Modul 12");

F("M12-35", 2, "Welche Einstellung an einem Industrie-Switch unterstützt Härtung und SR 7.7?", [
  X("Alle Ports aktiv lassen, um Erweiterungen zu erleichtern", "Offene Ports erlauben unkontrollierten Anschluss."),
  R("Ungenutzte Ports aus, Management nur per SSH", "Minimale Funktionalität, gesichertes Management."),
  X("Telnet als Rückfall für Notfälle aktiv lassen", "Klartext-Zugang bleibt eine Hintertür."),
  X("Die Default-Community „public“ beibehalten", "Bekannte Defaults sind eine klassische Schwachstelle."),
], "Härten heißt: abschalten, was nicht gebraucht wird.", "SR 7.7; Modul 06/12");
