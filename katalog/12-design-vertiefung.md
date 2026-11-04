# Modul 12 – Design Vertiefung (vom SL-T zur Architektur)

⏱ ca. 6 h · Trainer-Filter: **M12** · Pfad: Design

## Lernziele
- Aus SL-T-Vektoren die zu erfüllenden SRs/REs (3-3) ableiten
- Eine Gap-Analyse SL-C (Herstellerangaben) vs. SL-T durchführen
- Conduits vollständig spezifizieren
- Designmuster für Fernzugriff, Wireless, SIS und IT/OT-Übergang anwenden
- Design-Entscheidungen nachvollziehbar dokumentieren

## 1. Ableitungskette
```
Risikobeurteilung (3-2) ──► SL-T je Zone/Conduit (Vektor über 7 FRs)
          │
          ▼
3-3: Für jedes FR die SRs + REs, die für das SL-T nötig sind
          │
          ▼
Komponentenauswahl: SL-C (4-2) der Produkte prüfen
          │
          ├── SL-C ≥ SL-T  → Anforderung durch Produkt erfüllt (richtig konfigurieren!)
          └── SL-C < SL-T  → kompensierende Maßnahme auf System-/Zonenebene
          │
          ▼
Verifikation: SL-A im Betrieb ≥ SL-T?
```

## 2. Gap-Analyse – Beispiel
Zone Z1 Leitstelle, SL-T FR 1 = 3. Bestands-HMI (SL-C FR 1 = 1, nur lokale Gruppenkonten).

| Anforderung (sinngemäß) | Produkt kann | Gap | Kompensierende Maßnahme |
|---|---|---|---|
| SR 1.1 eindeutige Benutzer-ID | nein | ✗ | Anmeldung am Windows-Host mit AD-Konto, HMI-Applikation im Kiosk-Modus an persönliche Session gebunden |
| SR 1.1 RE: MFA aus nicht vertrauenswürdigen Netzen | nein | ✗ | Zugriff von außen nur über Jump-Host mit MFA (C1) |
| SR 1.7 Passwortstärke | teilweise | ~ | Policy am Host/AD |
| SR 1.11 Fehlversuche | nein | ✗ | bewusst keine Sperre an Operator-HMI (essenzielle Funktion), stattdessen Alarm an SIEM |

Jede Kompensation wird **dokumentiert und in der Risikobewertung bestätigt**.

## 3. Conduit-Spezifikation (Vorlage)
| Feld | Beispiel C2 Leitstelle ↔ Außenstationen |
|---|---|
| Verbundene Zonen | Z1 Leitstelle ↔ Z3 Außenstationen |
| SL-T | {3,2,3,2,3,2,3} |
| Physische Umsetzung | Zentrale VPN-Firewall in Z1 ↔ Fernwirk-Router je Station, privates APN |
| Zugelassene Flüsse | SCADA → RTU: IEC 60870-5-104, TCP 2404, nur SCADA-Server-IPs; RTU → NTP (Z1) |
| Richtung/Initiator | Verbindungsaufbau nur von der Leitstelle aus |
| Authentisierung | IPsec IKEv2 mit Gerätezertifikaten (SR 1.2) |
| Integrität/Vertraulichkeit | IPsec AES-GCM (SR 3.1, 4.1) |
| Grenzschutz | Default-Deny, DPI auf 104 – nur erlaubte Typ-IDs (SR 5.2) |
| Logging | FW- und VPN-Logs an SIEM, Alarm bei neuem Peer (SR 2.8, 6.2) |
| Verfügbarkeit | Dual-SIM / zweiter Provider, Rate-Limit (SR 7.1) |
| Verantwortlich | OT-Netzwerkteam |

## 4. Designmuster
**IT/OT-Übergang**
- Zwei Firewall-Ebenen (IT↔DMZ, DMZ↔OT), idealerweise unterschiedliche Hersteller oder getrennte Regelsätze/Admins.
- Keine durchgehenden Sessions: Proxy/Replikation in der DMZ.
- Getrennte AD-Domänen für IT und OT, kein Trust von OT zu IT.

**Fernzugriff (SR 1.13, 2-4 SP.07)**
- Zugang: Internet → Remote-Access-Gateway → Jump-Host (DMZ) → Zielsystem.
- MFA, Freischaltung durch den Betreiber („Anruf-Freigabe“ / Ticket), zeitlich begrenzt, Session-Recording.
- Hersteller-Tools nur auf dem Jump-Host, nicht auf dem Laptop des Dienstleisters.

**Wireless**
- Eigene Zone; WPA3-Enterprise/802.1X; Funk nie als einziger Pfad für essenzielle Funktionen ohne Bewertung.

**SIS**
- Eigene Zone; Engineering-Zugriff nur über dedizierte, physisch kontrollierte Station; Schlüsselschalter/Write-Protect an der Safety-CPU; Leitstelle nur lesend.

**Monitoring**
- OT-IDS passiv an SPAN/TAP pro Zone, Logs zentral, Zeit synchron (SR 2.11, 6.2).

## 4b. Firewall-Planung & Inbetriebnahme
1. Kommunikationsmatrix aus der Risikobeurteilung übernehmen (nur benötigte Flüsse).
2. Regelwerk pro Conduit: **Default-Deny**, explizite Quelle/Ziel/Dienst, Richtung, Kommentar mit Begründung/Ticket.
3. Industrieprotokolle mit DPI einschränken (Funktionscodes, Schreibzugriffe nur von EWS).
4. Management der Firewall nur aus Management-Zone, MFA, Konfig-Backup.
5. Logging aktivieren (abgelehnte Pakete, Admin-Zugriffe), Zeitsync.
6. Fail-Verhalten festlegen (fail-close vs. Bypass – Verfügbarkeit abwägen).
7. Inbetriebnahme stufenweise: zuerst **Monitor/Log-only**, Treffer auswerten, dann **Enforce** – sonst blockiert man unbekannte, aber nötige Flüsse.

## 4c. Abnahmetests: CFAT & CSAT
- **CFAT** (Cybersecurity Factory Acceptance Test): beim Integrator/Hersteller vor Auslieferung – prüft, ob das System die CRS/SR-Anforderungen erfüllt (Härtung, Konten, Firewall-Regeln, Logging, Backup/Restore, Patchstand).
- **CSAT** (Cybersecurity Site Acceptance Test): nach Installation vor Ort – prüft die reale Integration (Anbindung an Zonen/Conduits, Fernwartungsweg, SIEM-Anbindung, Zeitsync).
- Testplan: Testfall → zugehörige SR/Anforderung → Vorgehen → erwartetes Ergebnis → Ergebnis/Nachweis → Abweichung/Maßnahme.
- Beispiel-Testfälle: Default-Passwörter geändert? Ungenutzte Dienste/Ports aus? Verbotener Fluss wird blockiert und geloggt? Restore aus Backup funktioniert? Schwachstellenscan ohne kritische Befunde (auf FAT-System!)?

## 5. Design-Dokumentation
- Architekturdiagramm mit Zonen/Conduits und SL-T
- Conduit-Spezifikationen
- SR-Traceability-Matrix: SR/RE → Umsetzung (Produkt/Konfig/Kompensation) → Nachweis
- Härtungsvorgaben je Komponententyp (aus Herstellerdoku, 4-1 SG)
- Liste offener Gaps mit Risikoakzeptanz durch den Asset Owner

## Merksätze
- 🧠 Design = **Traceability**: Jede Maßnahme lässt sich auf ein SR und ein SL-T zurückführen.
- 🧠 SL-C ist ein **Versprechen** des Herstellers – erst die Konfiguration macht daraus SL-A.
- 🧠 Gaps nicht verschweigen: **kompensieren, dokumentieren, freigeben lassen**.

## Selbstcheck
- [ ] Erstelle die Conduit-Spezifikation für C1 Fernwartung.
- [ ] Warum keine Kontosperre an der Operator-HMI – und was stattdessen?
- [ ] Was gehört in eine SR-Traceability-Matrix?
