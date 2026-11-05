# Modul 10 – Zertifizierung, Regulatorik & Netzwerk-Praxis

⏱ ca. 4 h · Trainer-Filter: **M10**

## Lernziele
- Zertifizierungsschemata für Produkte, Prozesse und Personen unterscheiden
- Den Bezug von 62443 zu NIS2, KRITIS und dem Cyber Resilience Act herstellen
- Eine OT-Referenzarchitektur mit DMZ, Fernwartung und Monitoring entwerfen

## Kernwissen

### Zertifizierungen
| Was | Schema (Beispiele) | Normbezug |
|---|---|---|
| **Entwicklungsprozess** eines Herstellers | ISASecure **SDLA**, IECEE CB-Scheme | 4-1 |
| **Komponente** | ISASecure **CSA** | 4-1 + 4-2 |
| **System** | ISASecure **SSA** | 3-3 (+ 4-1) |
| **Dienstleister** | IECEE, verschiedene Prüfstellen | 2-4 |
| **Betreiber-Programm** | z. B. IECEE, Prüfstellen | 2-1 |
| **Personen** | ISA/IEC 62443 Zertifikatsprogramm: Fundamentals, Risk Assessment, Design, Maintenance Specialist → Expert | gesamte Reihe |

### Regulatorik (EU/DE, Stand Ende 2026 – aktuelle Lage prüfen)
- **NIS2-Richtlinie** / NIS2-Umsetzungsgesetz: Risikomanagementmaßnahmen und Meldepflichten für wesentliche/wichtige Einrichtungen. 62443 ist ein anerkannter Weg, „Stand der Technik“ in der OT nachzuweisen.
- **KRITIS / BSI**: B3S-Branchenstandards verweisen oft auf 62443.
- **Cyber Resilience Act (CRA)**: Cybersecurity-Anforderungen an Produkte mit digitalen Elementen; Hersteller müssen u. a. Schwachstellen managen und Updates liefern – inhaltlich eng verwandt mit 4-1/4-2.
- **Maschinenverordnung (EU) 2023/1230**: enthält Anforderungen zum Schutz gegen Korrumpierung (Cybersecurity von Maschinen).

### Referenzarchitektur (Netzwerk)
```
[Internet] ── FW ── [Office/IT, L4] ── FW ── [IT/OT-DMZ, L3.5] ── FW ── [Site Ops, L3]
                                          │ Jump-Host (MFA, Session-Recording)
                                          │ Historian-Replica, Patch/AV-Relay
                                                                         │
                                                         Zellen-FW/ACL je Zone
                                                                         │
                                         [Zone Leitstelle L2] [Zone Zelle A L1] [Zone SIS]
                                                     OT-IDS über SPAN/TAP, Logs → SIEM
```
Regeln:
- Kein durchgehender Fluss IT → L2/L1; Daten werden in der DMZ „umgeladen“: Die OT repliziert (z. B. Historian) **in** die DMZ, die IT holt **aus** der DMZ ab. Verbindungen werden von der vertrauenswürdigeren Seite aus aufgebaut – keine eingehenden Verbindungen aus der IT in die OT.
- **Daten-Dioden** für unidirektionale Flüsse aus hochkritischen Zonen.
- SIS-Zone: möglichst keine Routen von außen, Engineering nur lokal/kontrolliert.
- Fernwartung: Betreiber schaltet Zugang frei, zeitlich begrenzt, MFA, Protokollierung.
- Firewall-Regeln mit **DPI für Industrieprotokolle** (z. B. Modbus nur lesende Funktionscodes aus der Leitstelle zulassen).
- Netzwerk-Management (SNMPv3, SSH, kein Telnet/HTTP), Konfig-Backups, Golden Configs.

## Merksätze
- 🧠 Prozess → SDLA, Komponente → CSA, System → SSA.
- 🧠 62443 ist kein Gesetz, aber Gesetze (NIS2, CRA) fordern „Stand der Technik“ – 62443 liefert ihn für OT.

## Selbstcheck
- [ ] Welches ISASecure-Programm prüft einen Managed Switch?
  <details><summary>Lösung</summary>

  CSA – Component Security Assurance (4-1 + 4-2).

  </details>
- [ ] Warum sollte die IT Daten aus der DMZ abholen, statt direkt auf den OT-Historian zuzugreifen?
  <details><summary>Lösung</summary>

  Damit keine eingehenden Verbindungen aus der IT in die OT nötig sind. Die DMZ entkoppelt beide Seiten: Wird die IT kompromittiert, führt kein direkter Weg in die OT. Die OT repliziert in die DMZ, die IT liest nur dort.

  </details>
- [ ] Wozu dient eine Daten-Diode?
  <details><summary>Lösung</summary>

  Zur physisch erzwungenen Einweg-Übertragung, z. B. Monitoring- oder Historian-Daten aus einer hochkritischen Zone nach außen – ein Rückkanal ist hardwareseitig ausgeschlossen.

  </details>
