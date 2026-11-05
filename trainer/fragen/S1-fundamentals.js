// Szenario-Fragen Fundamentals (überwiegend Prüfungspool)
F("M01-16", 3, "Ein Wasserversorger plant, die Leitstelle per VPN für Bereitschaftsingenieure von zu Hause erreichbar zu machen. Welche Überlegung steht aus OT-Sicht an erster Stelle?", [
  X("Die Bandbreite der Heimanschlüsse", "Performance ist zweitrangig gegenüber dem neuen Zugangspunkt."),
  R("Ein neuer Zugangspunkt aus einem nicht vertrauenswürdigen Netz entsteht", "Das verändert Zonen, Conduits und Risiko – SR 1.13 greift."),
  X("Die Lizenzkosten der VPN-Software", "Kosten sind kein Security-Kriterium."),
  X("Ob die Mitarbeitenden private oder dienstliche Geräte nutzen möchten", "Wichtig, aber eine Folgefrage zum neuen Zugangspunkt."),
], "Jede neue externe Verbindung beginnt mit der Frage: Was ändert sich am Risiko?", "Modul 01/05; SR 1.13");

F("M01-17", 3, "In einer Abfüllanlage fällt die HMI-Bedienung aus, weil ein Office-Virenscanner ein HMI-Projekt in Quarantäne verschoben hat. Welches OT-Prinzip wurde missachtet?", [
  X("Vertraulichkeit hat Vorrang vor Verfügbarkeit", "Gerade umgekehrt – und Vertraulichkeit war hier nicht betroffen."),
  R("Schutzmaßnahmen dürfen essenzielle Funktionen nicht beeinträchtigen", "Malware-Schutz in OT braucht Herstellerfreigabe und Tests."),
  X("Defense in Depth erfordert mehrere Virenscanner", "Mehr Scanner verschärfen das Problem eher."),
  X("Patches müssen sofort eingespielt werden", "Es ging nicht um Patches."),
], "Security-Maßnahmen in OT werden auf Verträglichkeit mit dem Prozess geprüft.", "Modul 01/03");

F("M02-14", 3, "Ein Betreiber schreibt eine neue Abfüllanlage aus. Welche Kombination von Normteilen sollte er in der Ausschreibung sinnvollerweise referenzieren?", [
  X("Nur 62443-2-1, da er Betreiber ist", "2-1 regelt sein eigenes Programm, nicht die Leistung von Integrator und Hersteller."),
  R("3-3 für das System, 2-4 für den Integrator, 4-1/4-2 für die Komponenten", "Jede Rolle wird über ihren Teil adressiert."),
  X("Nur 62443-4-2, da es um neue Hardware geht", "Integration und Systemfähigkeiten fehlen dann."),
  X("62443-1-1, weil dort alle Anforderungen stehen", "1-1 liefert Begriffe, keine einforderbaren Anforderungen."),
], "System → 3-3, Dienstleister → 2-4, Produkt → 4-1/4-2; das SL-T kommt aus 3-2.", "Modul 02");

F("M03-11", 3, "Ein Werk hat eine Zone „Produktion“ mit 400 Geräten von der Fräse bis zum SIS. Welche Schwäche hat diese Zonierung am ehesten?", [
  R("Unterschiedliche Schutzbedarfe werden gleich behandelt", "SIS und Standardmaschinen haben verschiedene Anforderungen."),
  X("Zonen dürfen höchstens 100 Geräte enthalten", "Es gibt keine Größengrenze."),
  X("Eine Zone darf nur Geräte eines Herstellers enthalten", "Herstellerzugehörigkeit ist kein Kriterium."),
  X("Die Zone hat zu viele Conduits nach außen", "Das wäre eher eine Folge – das Grundproblem ist die Gruppierung."),
], "Gemeinsame Anforderungen, nicht gemeinsame Halle, bilden eine Zone.", "Modul 03/05");

F("M04-14", 3, "Für eine Zone mit Rezepturdaten eines Pharmaherstellers wird Industriespionage durch einen gut ausgestatteten Konkurrenten befürchtet. Welche FR-Ausprägung ist hier besonders hoch anzusetzen?", [
  X("FR 7 – Resource Availability", "Spionage zielt auf Daten, nicht primär auf Ausfall."),
  R("FR 4 – Data Confidentiality", "Rezepturen sind geistiges Eigentum – hier zählt Vertraulichkeit."),
  X("FR 6 – Timely Response to Events", "Erkennung ist wichtig, aber nicht der Kern des Szenarios."),
  X("FR 2 – Use Control", "Relevant, aber das Schutzziel ist vor allem Vertraulichkeit."),
], "Der SL-Vektor macht solche Unterschiede sichtbar – OT ist nicht immer „Verfügbarkeit zuerst“.", "Modul 04");

F("M04-15", 3, "Ein Integrator sagt: „Unser System ist SL 3.“ Welche Rückfrage ist am wichtigsten?", [
  X("Welcher Hersteller die Firewalls liefert", "Herstellernamen sagen nichts über das SL."),
  R("Für welche FRs gilt das – und ist SL-C oder ein erreichtes SL-A gemeint?", "SL ist ein Vektor, und C ≠ A."),
  X("Ob SL 3 höher als SIL 3 ist", "SL und SIL sind verschiedene Skalen."),
  X("Wie viele Mitarbeitende zertifiziert sind", "Personenzertifikate sagen nichts über das System-SL."),
], "Ohne FR-Bezug und Typ (T/C/A) ist eine SL-Angabe nicht aussagekräftig.", "Modul 04");

F("M05-11", 3, "In der Risikobeurteilung einer Kläranlage wird die gesamte Anlage samt Office in ein SuC gepackt, Bewertung nach Bauchgefühl. Welche zwei Schritte fehlen am deutlichsten?", [
  X("Pentest und Code-Review", "Das sind Prüfmethoden, keine fehlenden Kernschritte."),
  R("Sinnvolle Abgrenzung des SuC und definierte Risikokriterien", "Ohne Grenzen und Maßstab bleibt die Bewertung beliebig."),
  X("Herstellerzertifikate und Lieferantenaudit", "Relevant für Beschaffung, nicht für die Methodik."),
  X("Notfallplan und Pressekonzept", "Gehören zu Incident Response."),
], "SuC (ZCR 1) und Risikokriterien des Asset Owners sind das Fundament.", "Modul 05");

F("M06-14", 3, "Ein Auditor findet an allen HMIs das Konto „operator“ mit identischem Passwort. Welche Anforderung ist am direktesten verletzt?", [
  R("SR 1.1 – eindeutige Identifikation menschlicher Benutzer", "Handlungen sind keiner Person zuordenbar."),
  X("SR 7.3 – Backup des Steuerungssystems", "Backup ist nicht betroffen."),
  X("SR 5.1 – Netzwerksegmentierung", "Segmentierung ist nicht betroffen."),
  X("SR 3.4 – Software- und Informationsintegrität", "Integrität von Software ist nicht betroffen."),
], "Kompensation z. B. über personalisierte Host-Anmeldung – ohne die Bedienbarkeit zu gefährden.", "SR 1.1");

F("M07-10", 3, "Ein Betreiber hat ein gutes Security-Konzept auf Papier, doch Interviews zeigen: Niemand kennt es, Freigaben laufen per Zuruf. Welcher Reifegrad trifft am ehesten zu?", [
  X("ML 4 – Improving", "Es wird weder gemessen noch verbessert."),
  X("ML 3 – Defined", "ML 3 verlangt nachweislich gelebte Praxis."),
  R("ML 1 – Initial", "Faktisch ad hoc und personenabhängig – das Papier wird nicht gelebt."),
  X("Kein Reifegrad, da ein Konzept existiert", "Ein Konzept allein bestimmt den Reifegrad nicht."),
], "Reife zeigt sich im gelebten Prozess, nicht im Dokument.", "Modul 07");

F("M08-08", 3, "Ein Wartungsdienstleister will für schnellere Einsätze einen dauerhaften Fernzugang mit gemeinsamem Konto für alle Techniker. Welche Gegenforderung ist am besten begründet?", [
  X("Zugang ablehnen, Wartung nur noch vor Ort", "Möglich, aber unnötig restriktiv und teuer."),
  R("Personalisierte Konten, Freischaltung bei Bedarf", "Erfüllt SP.07/SP.09 und hält den Zugang kontrollierbar."),
  X("Akzeptieren, wenn das gemeinsame Passwort monatlich wechselt", "Bleibt nicht zuordenbar und dauerhaft offen."),
  X("Akzeptieren, wenn der Dienstleister nach 2-4 zertifiziert ist", "Ein Zertifikat ersetzt keine konkrete Zugangskontrolle."),
], "Fernzugang: personalisiert, befristet, kontrolliert, protokolliert.", "62443-2-4 SP.07/SP.09");

F("M09-12", 3, "Ein Hersteller veröffentlicht zu einer gemeldeten Schwachstelle weder Advisory noch Patch-Zeitplan. Welche 4-1-Practices sind betroffen?", [
  R("DM und SUM", "Umgang mit Schwachstellen und Bereitstellung von Updates."),
  X("SD und SI", "Design und Implementierung betreffen die Entstehung, nicht die Reaktion."),
  X("SM und SR", "Management und Anforderungen sind nicht primär betroffen."),
  X("SVV und SG", "Tests und Leitfäden sind nicht die Kernfrage."),
], "Schwachstellen managen (DM) und Updates liefern (SUM) – auch der CRA verlangt das.", "62443-4-1");

F("M10-12", 3, "Ein Mittelständler mit Fertigung fällt neu unter NIS2 und fragt, wie er „Stand der Technik“ in der OT nachweisen soll. Was ist der sinnvollste Einstieg?", [
  X("Sofort alle Steuerungen durch neue Geräte ersetzen", "Teuer und ohne Risikobezug."),
  X("Eine ISO-27001-Zertifizierung nur für die Office-IT", "Lässt die OT außen vor."),
  R("Risikobeurteilung nach 3-2 plus Programm nach 2-1", "Risikobasiert, normgestützt, nachweisbar."),
  X("Einen OT-Pentest beauftragen und die Befunde abarbeiten", "Ein Pentest ist ein Baustein, kein Programm."),
], "Erst Risiko und Organisation, dann gezielte Maßnahmen.", "Modul 10");
