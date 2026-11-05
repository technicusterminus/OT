// Szenario-Fragen Design (überwiegend Prüfungspool)
F("M12-36", 3, "Die CRS fordert für eine Zelle SL-T 3 bei FR 1. Die Steuerungen unterstützen nur lokale Passwörter. Welches Design erfüllt die Anforderung am ehesten?", [
  X("Lange lokale Passwörter auf allen Steuerungen", "Verbessert SR 1.7, löst aber Identifikation und MFA nicht."),
  R("Zugriff nur über einen Engineering-Host mit MFA", "Kompensation auf Zonenebene."),
  X("SL-T für FR 1 im Design auf 2 reduzieren", "Das Design darf das SL-T nicht verändern."),
  X("Steuerungen ins Office-Netz verlegen, wo MFA existiert", "Das verletzt die Segmentierung massiv."),
], "Fehlende Fähigkeit → kontrollierter Zugangspfad mit starker Authentisierung.", "Modul 12");

F("M12-37", 3, "Ein Integrator schlägt vor, alle Zellen über eine zentrale Firewall mit einem Regelwerk zu trennen. Welcher Einwand ist am stärksten?", [
  X("Zentrale Firewalls sind in 62443 nicht zulässig", "Sie sind zulässig."),
  R("Ein Fehler trifft alle Zellen zugleich", "Single Point of Failure und Komplexität."),
  X("Eine zentrale Firewall kann keine Industrieprotokolle filtern", "Viele können das."),
  X("Zellen brauchen keine Trennung voneinander", "Unterschiedliche Anforderungen rechtfertigen Trennung."),
], "Architekturentscheidungen gegen Verfügbarkeit und Betreibbarkeit abwägen.", "Modul 12");

F("M12-38", 3, "Ein MES in Level 3 soll Aufträge an SPSen in Level 1 schicken. Welches Design ist am sinnvollsten?", [
  X("Direkte Verbindung MES → SPS über alle Zonen hinweg", "Umgeht die Zonierung."),
  R("Übergabe über Level 2 mit definierten Flüssen", "Kommunikation über benachbarte Ebenen und kontrollierte Conduits."),
  X("Die SPSen in die Level-3-Zone verschieben", "Vermischt Schutzbedarfe."),
  X("Das MES in die Zellenzone verlegen", "Holt ein IT-nahes System in die Steuerungszone."),
], "Kommunikation über definierte Stufen statt quer durch alle Ebenen.", "Modul 01/12");

F("M12-39", 2, "Die Historian-Daten sollen der IT bereitgestellt werden. Welcher Fluss ist richtig?", [
  R("OT-Historian → DMZ-Historian, IT liest aus der DMZ", "Keine eingehende Verbindung in die OT."),
  X("IT-BI-Server fragt den OT-Historian direkt ab", "Eingehende Verbindung in die OT."),
  X("OT-Historian schreibt direkt in die IT-Datenbank", "Durchgehender Fluss ohne DMZ-Entkopplung."),
  X("Ein VPN vom IT-Netz in die OT-Zone", "Öffnet die OT für die IT."),
], "Daten in der DMZ umladen.", "Modul 10/12");

F("M12-40", 3, "Die Fernwartung soll für drei Hersteller eingerichtet werden. Welches Design ist am sinnvollsten?", [
  X("Je Hersteller ein eigener VPN-Router in der jeweiligen Zelle", "Drei unkontrollierte Zugänge."),
  R("Ein Jump-Host, getrennte Konten je Hersteller", "Ein kontrollierter Weg, fein granular."),
  X("Ein gemeinsamer VPN-Zugang für alle drei mit einem Konto", "Nicht zuordenbar, zu breit."),
  X("Fernwartungssoftware auf allen HMIs installieren", "Viele unkontrollierte Einfallstore."),
], "Ein Weg rein – viele fein getrennte Berechtigungen.", "Modul 12; 2-4 SP.07");

F("M12-41", 3, "Ein Switch-Hersteller erfüllt CR 7.1 (DoS-Schutz) nur ohne Requirement Enhancement. Die Zone fordert das RE. Was ist eine geeignete Kompensation?", [
  X("Den Switch doppelt einbauen", "Redundanz schützt nicht vor Überlast durch Angriffe."),
  R("Rate-Limiting an der Zonen-Firewall", "Überlast wird vor dem Switch begrenzt."),
  X("Die Zone in ein eigenes VLAN legen", "VLANs begrenzen keine Last."),
  X("Die Anforderung als erfüllt markieren, da die Basis-CR vorliegt", "Das RE ist gefordert und fehlt."),
], "Fehlende REs auf Zonenebene kompensieren und dokumentieren.", "Modul 12");

F("M12-42", 2, "Eine neue Zonen-Firewall soll in einer laufenden Anlage in Betrieb gehen. Welche Reihenfolge ist richtig?", [
  X("Sofort blockierend schalten und Störungen beobachten", "Unbekannte nötige Flüsse würden blockiert."),
  R("Erst Log-only auswerten, dann blockieren", "Kontrollierte Einführung."),
  X("Regelwerk vom Integrator übernehmen und sofort blockieren", "Auch fremde Regelwerke bilden die Realität selten vollständig ab."),
  X("Erst im nächsten Jahr aktivieren", "Unnötige Verzögerung."),
], "Beobachten, verstehen, durchsetzen.", "Modul 12");

F("M12-43", 3, "Im CFAT zeigt sich: Die HMI-Software läuft nur mit lokalen Administratorrechten. Wie reagiert man?", [
  X("Akzeptieren, da der Hersteller es so vorgibt", "Ein Gap ohne Behandlung."),
  R("Abweichung dokumentieren, Kompensation prüfen", "Gap sichtbar machen und behandeln."),
  X("Operatoren das Admin-Passwort mitteilen", "Verschärft das Problem."),
  X("Die HMI aus dem Testumfang streichen", "Der Mangel wird dadurch verdeckt."),
], "Abweichung → Kompensation → Entscheidung des Asset Owners.", "Modul 12");

F("M12-44", 3, "Ein Werk will die WLAN-Anbindung fahrerloser Transportsysteme (FTS) planen. Welche Designfrage ist besonders wichtig?", [
  X("Welche SSID-Namen verwendet werden", "Namen ändern nichts am Verhalten bei Funkausfall."),
  R("Was bei Funkausfall passiert", "Verfügbarkeit und Safety bei Funkstörungen."),
  X("Ob die FTS in dieselbe Zone wie das Office-WLAN können", "Das widerspricht der Zonierung."),
  X("Ob die Access Points PoE-fähig sind", "Eine Installationsfrage ohne Bezug zu Verfügbarkeit oder Safety."),
], "Funk ist störbar – essenzielle Funktionen dürfen nicht allein daran hängen.", "Modul 12");

F("M12-45", 2, "Wie wird nachgewiesen, dass das Design einer Zone ihre SL-T-Anforderungen erfüllt?", [
  X("Durch eine Herstellererklärung pro Gerät", "Belegt SL-C, nicht die Erfüllung im System."),
  R("Durch eine Traceability-Matrix und bestandene CFAT/CSAT-Testfälle", "Anforderung → Umsetzung → Testnachweis."),
  X("Durch die Unterschrift des Integrators", "Eine Unterschrift ist kein Nachweis."),
  X("Durch die Anzahl der eingesetzten Firewalls", "Menge sagt nichts über Erfüllung."),
], "Nachweis = rückverfolgbar und getestet.", "Modul 12");

F("M12-46", 3, "Eine SIS-Zone soll Statusdaten an die Leitstelle liefern. Welche Umsetzung ist am robustesten?", [
  X("Leitstelle liest und schreibt das SIS direkt über das Netz", "Schreibzugriff gefährdet die Sicherheitsfunktion."),
  R("Nur lesender Fluss aus dem SIS", "Integrität des SIS bleibt geschützt."),
  X("SIS-Daten über die Office-Domäne bereitstellen", "Verbindet SIS mit der IT."),
  X("Kein Datenaustausch, Status per Telefon", "Unpraktisch und unnötig."),
], "SIS: lesen ja, schreiben nein.", "Modul 12");

F("M12-47", 2, "Im CSAT funktioniert die Zeitsynchronisation der SPSen nicht, weil der NTP-Server in einer anderen Zone steht und kein Conduit definiert ist. Wie wird das gelöst?", [
  R("Conduit-Spezifikation ergänzen, Regel über MoC einführen, Test wiederholen", "Sauber über Spezifikation und Änderungsprozess."),
  X("Die Firewall-Regel any-any für NTP freigeben", "Zu breit – öffnet NTP für alle Quellen und Ziele."),
  X("Auf Zeitsynchronisation verzichten", "SR 2.11 wäre verletzt."),
  X("Einen zweiten NTP-Server im Internet nutzen", "Öffnet die Zone ins Internet und umgeht die Zonierung."),
], "Fehlende Flüsse werden spezifiziert, nicht improvisiert.", "Modul 12/13");
