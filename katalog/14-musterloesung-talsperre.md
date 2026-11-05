# Musterlösung – Übungsfall „Talsperre Süd“

> Erst selbst bearbeiten (Aufgabe im [Lernplan](00-lernplan.md#übungsfall-durchgängig-für-module-36)), dann vergleichen. Es gibt nicht *die eine* richtige Lösung – entscheidend ist, dass jede Entscheidung **begründet** und auf Risiko bzw. Anforderungen **rückführbar** ist.

**Ausgangslage:** Leitstelle mit SCADA-Server und zwei HMIs, Historian, Engineering-Workstation (EWS), 6 Außenstationen (SPS + Fernwirk-Router über LTE), SIS für die Chlordosierung, Fernwartungszugang des Pumpenherstellers, Anbindung ans Office-Netz für Reporting.

## 1. Purdue-Einordnung

| Level | Assets |
|---|---|
| 4 | Office-Netz, Reporting-Clients |
| 3.5 (DMZ) | Historian-Spiegel, Jump-Host Fernwartung, Patch-/AV-Relay |
| 3 | Historian (OT), OT-Domänencontroller, NTP, Backup-Server |
| 2 | SCADA-Server, 2 HMIs, EWS |
| 1 | SPSen der 6 Außenstationen, Safety-Controller (SIS) |
| 0 | Pumpen, Chlordosierung, Sensoren |

## 2. Zonen und Conduits

| Zone | Inhalt | Begründung |
|---|---|---|
| **Z1 Leitstelle** | SCADA, HMIs, Historian, OT-DC, NTP, Backup | Gemeinsamer Schutzbedarf für Bedienen/Beobachten |
| **Z1a Engineering** | EWS | Programmiert Steuerungen → höherer Integritätsbedarf, eigene Subzone |
| **Z2 SIS Chlor** | Safety-Controller | Safety-Assets immer gesondert (3-2) |
| **Z3 Außenstationen** | 6 SPSen + Fernwirk-Router | Über nicht vertrauenswürdiges LTE angebunden → gesondert |
| **Z4 DMZ** | Historian-Spiegel, Jump-Host, Relay | Vermittlung IT ↔ OT |
| **Z5 Office** | Office-Netz | Business-IT, nicht Teil des IACS |

| Conduit | Verbindet | Zweck |
|---|---|---|
| C1 | Internet/Hersteller ↔ Z4 (Jump-Host) ↔ Z1/Z3 | Fernwartung Pumpenhersteller |
| C2 | Z1 ↔ Z3 | Fernwirken über LTE (IEC 60870-5-104) |
| C3 | Z1 ↔ Z4 | Historian-Replikation, Updates |
| C4 | Z4 ↔ Z5 | Reporting (IT liest aus DMZ) |
| C5 | Z1 ↔ Z2 | SIS-Status lesend an die Leitstelle |
| C6 | Z1a ↔ Z1/Z3 | Engineering-Zugriffe auf Steuerungen |

## 3. Erstbewertung und SL-T

Leitszenarien (Worst Case ohne Cyber-Gegenmaßnahmen):

| Zone/Conduit | Leitszenario | Konsequenz | Angreiferprofil | SL-T {IAC,UC,SI,DC,RDF,TRE,RA} |
|---|---|---|---|---|
| Z1 | Manipulation der Chlor-Sollwerte über kompromittierte HMI | 5 (HSE: Trinkwasser) | Gruppe mit OT-Wissen, erpresserisch | {3,3,3,2,3,3,3} |
| Z1a | Manipulierte SPS-Logik über die EWS | 5 | wie oben | {3,3,3,2,3,3,2} |
| Z2 | Deaktivierung der Chlor-Abschaltung | 5 | wie oben | {3,3,3,1,3,2,3} |
| Z3 | Abschalten von Pumpen über LTE | 4 (Versorgung) | wie oben | {3,2,3,2,3,2,3} |
| Z4 | Sprungbrett aus dem Office | 4 | Ransomware-Akteur | {3,3,3,2,3,3,2} |
| C1 | Missbrauch gestohlener Herstellerzugangsdaten | 5 | wie oben | {3,3,3,3,3,3,2} |
| C2 | Einspielen gefälschter 104-Befehle | 4–5 | wie oben | {3,2,3,2,3,2,3} |

Begründungen: SL 3, weil ein Angreifer mit IACS-Wissen und moderaten Mitteln für einen Wasserversorger plausibel ist; SL 4 nur, wenn die Bedrohungslage (z. B. staatliche Akteure gegen KRITIS) das konkret nahelegt. Vertraulichkeit ist überwiegend gering, außer bei C1 (Zugangsdaten des Herstellers).

## 4. Conduit-Spezifikationen (Auswahl)

### Conduit C1 Fernwartung
| Feld | Festlegung |
|---|---|
| Verbindet | Internet → Remote-Access-Gateway → Jump-Host (Z4) → Zielsysteme in Z1/Z3 |
| SL-T | {3,3,3,3,3,3,2} |
| Authentisierung | Personalisierte Konten je Techniker, MFA (SR 1.1 RE, SR 1.13) |
| Freigabe | Pro Einsatz durch die Leitstelle, zeitlich begrenzt; Konto sonst deaktiviert |
| Zugelassene Ziele | Nur die Pumpensteuerungen des Herstellers, nur benötigte Protokolle |
| Kontrolle | Session-Recording, Logs ans SIEM (SR 2.8, 6.2) |
| Verboten | Direkte Tunnel in Level 1/2, eigene LTE-Router des Herstellers, Datei-Transfer ohne Prüfung |
| Vertrag | Anforderungen aus 2-4 SP.07/SP.09 im Wartungsvertrag |

### Conduit C2 Leitstelle ↔ Außenstationen
| Feld | Festlegung |
|---|---|
| Umsetzung | Zentrale VPN-Firewall in Z1 ↔ Fernwirk-Router, privates APN |
| Authentisierung | IPsec IKEv2 mit Gerätezertifikaten (SR 1.2) |
| Integrität/Vertraulichkeit | IPsec AES-GCM (SR 3.1, 4.1) |
| Flüsse | SCADA → RTU: IEC 60870-5-104, TCP 2404; RTU → NTP Z1 |
| Initiator | Nur die Leitstelle baut Verbindungen auf |
| Grenzschutz | Default-Deny, DPI auf zulässige 104-Typ-IDs (SR 5.2) |
| Erkennung | Alarm bei neuem VPN-Peer, Logs ans SIEM |
| Verfügbarkeit | Zweiter Provider/Dual-SIM, Rate-Limiting (SR 7.1) |

### Conduit C5 SIS-Status
Nur lesender Fluss aus Z2 in die Leitstelle (Gateway oder Daten-Diode), kein Schreibweg. Engineering des SIS ausschließlich lokal mit Schlüsselschalter/Write-Protect.

## 5. Auszug CRS

1. **SuC:** Wasserwerk Talsperre Süd inkl. 6 Außenstationen; Zugangspunkte: LTE, Fernwartung, Office-Anbindung.
2. **Zonen/Conduits:** wie Abschnitt 2, mit Zeichnung.
3. **SL-T:** wie Abschnitt 3, je mit Begründung.
4. **Annahmen:** Leitwarte ist zugangskontrolliert; Außenstationen sind verschlossen und alarmgesichert; SIS-Engineering nur vor Ort.
5. **Bedrohungsumgebung:** erpresserische Gruppen mit OT-Wissen; Missbrauch von Dienstleisterzugängen; Ransomware aus der IT.
6. **Risikokriterien:** Risikomatrix des Betreibers; tolerierbar bis „mittel“, HSE-Szenarien bis „gering“.
7. **Regulatorik:** KRITIS/NIS2, B3S Wasser/Abwasser.
8. **Freigabe:** Werkleitung (Asset Owner), Datum, Version.

## 6. Anforderungen in der Ausschreibung

**An den Integrator (62443-2-4):** Personal geschult und überprüft (SP.01) · Architektur gemäß CRS (SP.03) · Härtung und Nachweise (SP.02) · Fernzugriff nur wie C1 (SP.07) · Konten personalisiert, Defaults geändert (SP.09) · Malware-Schutz mit Herstellerfreigabe (SP.10) · Backup/Restore getestet (SP.12) · **CFAT und CSAT** mit Testplan gegen die CRS · Traceability-Matrix SR → Umsetzung → Nachweis · Liste offener Gaps.

**An die SPS-Lieferanten (62443-4-1/4-2):** Entwicklung nach 4-1 (z. B. ISASecure SDLA) · Komponente mit nachgewiesenem SL-C nach 4-2 (EDR), mindestens passend zum SL-T von Z3 · signierte Firmware (CR 3.4) · Benutzerverwaltung bzw. Anbindung an zentrale Authentisierung (CR 1.1) · PSIRT-Prozess und Security-Updates über die Lebensdauer (DM, SUM) · Härtungsleitfaden (SG).

## 7. Typische Fehler beim Bearbeiten

- EWS in derselben Zone wie die HMIs, ohne den höheren Integritätsbedarf zu begründen.
- SIS-Zone mit Schreibzugriff aus der Leitstelle.
- LTE-Außenstationen in der Leitstellen-Zone.
- Ein SL-T „3 für alles“ ohne FR-Differenzierung.
- Office greift direkt auf den OT-Historian zu.
- Fernwartung als dauerhafter VPN-Tunnel des Herstellers.
