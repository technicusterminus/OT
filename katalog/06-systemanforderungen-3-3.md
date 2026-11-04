# Modul 06 – Systemanforderungen (62443-3-3)

⏱ ca. 5 h · Trainer-Filter: **M06**

## Lernziele
- Wichtige System Requirements (SR) je FR kennen und praktisch deuten
- Requirement Enhancements (RE) als Mittel der SL-Abstufung verstehen
- SRs auf konkrete Netzwerk- und Systemmaßnahmen abbilden

## Kernwissen

3-3 legt fest, was ein **System** (Zone/Conduit mit allen Komponenten) technisch können muss, um ein bestimmtes SL-C zu erreichen. Struktur: FR → SR → RE. Die folgenden Kurzbeschreibungen sind eigene Zusammenfassungen; für den genauen Wortlaut die Norm nutzen.

### Auswahl wichtiger SRs (Kennung → Thema → Praxisbeispiel)
| SR | Thema | Praxis |
|---|---|---|
| **FR 1 – IAC** | | |
| SR 1.1 | Identifikation & Authentisierung menschlicher Benutzer | personalisierte Konten statt Gruppenlogin; RE: MFA |
| SR 1.2 | … von Software-Prozessen und Geräten | Zertifikate, 802.1X, OPC UA Application Certificates |
| SR 1.3 | Kontenverwaltung | zentrales Lifecycle-Management (Joiner/Mover/Leaver) |
| SR 1.5 | Verwaltung von Authentisierungsmitteln | Default-Passwörter ändern, Schlüsselverwaltung |
| SR 1.7 | Stärke passwortbasierter Authentisierung | Länge/Komplexität, Lebensdauer |
| SR 1.11 | Erfolglose Anmeldeversuche | Sperre/Verzögerung – Achtung essenzielle Funktionen! |
| SR 1.13 | Zugriff über nicht vertrauenswürdige Netze | Fernzugriff nur über überwachten, freigegebenen Weg |
| **FR 2 – UC** | | |
| SR 2.1 | Durchsetzung von Autorisierung | RBAC, Least Privilege |
| SR 2.4 | Mobile Code | Makros, Java, Skripte kontrollieren |
| SR 2.8 | Auditierbare Ereignisse | Logins, Konfig-Änderungen, Alarme protokollieren |
| SR 2.11 | Zeitstempel | NTP/PTP synchronisiert, RE: geschützte Zeitquelle |
| **FR 3 – SI** | | |
| SR 3.1 | Kommunikationsintegrität | MACs, signierte Protokolle |
| SR 3.2 | Schutz vor Schadcode | AV, Application Whitelisting |
| SR 3.3 | Verifikation der Security-Funktionalität | Tests im Wartungsfenster |
| SR 3.4 | Software- und Informationsintegrität | signierte Firmware, Hash-Prüfung |
| **FR 4 – DC** | | |
| SR 4.1 | Vertraulichkeit von Informationen | Verschlüsselung über Zonengrenzen |
| SR 4.2 | Persistenz von Informationen | sicheres Löschen bei Außerbetriebnahme |
| SR 4.3 | Einsatz von Kryptographie | anerkannte Verfahren, Schlüsselmanagement |
| **FR 5 – RDF** | | |
| SR 5.1 | Netzwerksegmentierung | IACS vom Nicht-IACS-Netz trennen; RE: physische Trennung, Isolation kritischer Netze |
| SR 5.2 | Schutz von Zonengrenzen | Firewalls; RE: Default-Deny, Island-Mode, Fail-Close |
| SR 5.3 | Allgemeine Person-zu-Person-Kommunikation | keine E-Mail/Social-Media aus dem IACS |
| SR 5.4 | Partitionierung von Anwendungen | Dienste trennen |
| **FR 6 – TRE** | | |
| SR 6.1 | Zugänglichkeit von Audit-Logs | zentrale Log-Sammlung (SIEM) lesend |
| SR 6.2 | Kontinuierliche Überwachung | OT-IDS, Anomalieerkennung |
| **FR 7 – RA** | | |
| SR 7.1 | DoS-Schutz | Rate-Limiting, Storm-Control, QoS |
| SR 7.2 | Ressourcenmanagement | Ressourcen gegen Überlastung begrenzen |
| SR 7.3 | Backup des Steuerungssystems | regelmäßig, getestet, offline |
| SR 7.4 | Wiederherstellung & Rekonstitution | Restore in bekannten sicheren Zustand |
| SR 7.6 | Netzwerk- und Sicherheitskonfiguration | dokumentierte, überprüfbare Konfig |
| SR 7.7 | Minimale Funktionalität | ungenutzte Dienste/Ports deaktivieren |
| SR 7.8 | Inventar der Komponenten | aktuelles Asset-Inventar |

## Merksätze
- 🧠 **SR x.y** → x ist die FR-Nummer.
- 🧠 Je höher das SL, desto mehr **REs** müssen erfüllt sein.
- 🧠 FR 5 ist das „Netzwerker-FR“, FR 7 das „Verfügbarkeits-FR“.

## Praxisbezug Netzwerk (Cisco-Beispiele, sinngemäß)
```
! SR 7.1 – Storm-Control auf Access-Ports
interface range Gi1/0/1-24
 storm-control broadcast level 5.00
 storm-control multicast level 10.00
! SR 7.7 – ungenutzte Ports
interface range Gi1/0/25-48
 shutdown
! SR 2.11 – Zeitsynchronisation mit Authentisierung
ntp authenticate
ntp server 10.10.3.10 key 1
! SR 1.1 / 2.8 – AAA + Logging
aaa new-model
logging host 10.10.3.20
```

## Selbstcheck
- [ ] Zu welchem FR gehört Backup?
- [ ] Welche SR adressiert Fernzugriff aus nicht vertrauenswürdigen Netzen?
- [ ] Wie verhält sich eine Zonengrenze mit „Fail-Close“ bei Ausfall?
