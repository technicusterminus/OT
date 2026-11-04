# Modul 01 – OT-Grundlagen & IT vs. OT

⏱ ca. 3 h · Trainer-Filter: **M01**

## Lernziele
- Begriffe OT, IACS, ICS, SCADA, DCS, SPS/PLC, RTU, HMI, SIS erklären
- Die unterschiedlichen Schutzziel-Prioritäten von IT und OT begründen
- Das Purdue-Referenzmodell skizzieren und Netzwerkgeräte darin einordnen
- Typische OT-Protokolle und ihre Sicherheitsschwächen kennen

## Kernwissen

### Begriffe
| Begriff | Bedeutung |
|---|---|
| **IACS** | *Industrial Automation and Control System* – der Begriff der 62443: Personal, Hardware, Software und Richtlinien, die den sicheren, zuverlässigen Betrieb eines industriellen Prozesses beeinflussen. Umfasst also mehr als Technik. |
| **OT** | Operational Technology – umgangssprachlich für alles, was physische Prozesse überwacht/steuert. |
| **SPS / PLC** | Speicherprogrammierbare Steuerung, Echtzeit-Steuerung auf Level 1. |
| **RTU** | Remote Terminal Unit – Außenstation, oft über WAN/Funk angebunden. |
| **HMI** | Bedien- und Beobachtungsoberfläche. |
| **SCADA / DCS** | Überwachung/Steuerung verteilter Anlagen (SCADA) bzw. prozessnahe Leitsysteme (DCS). |
| **SIS** | Safety Instrumented System – bringt den Prozess bei Gefahr in sicheren Zustand (funktionale Sicherheit, IEC 61511/61508). |
| **EWS** | Engineering-Workstation – besonders schützenswert, weil sie Steuerungen programmiert. |

### IT vs. OT
| | IT | OT |
|---|---|---|
| Priorität | Vertraulichkeit → Integrität → Verfügbarkeit | **Verfügbarkeit/Safety → Integrität → Vertraulichkeit** |
| Lebensdauer | 3–5 Jahre | 15–30 Jahre |
| Patchen | regelmäßig, automatisiert | selten, nur nach Herstellerfreigabe und in Wartungsfenstern |
| Auswirkung eines Vorfalls | Daten, Geld | Menschen, Umwelt, Anlagen (HSE) |
| Echtzeit | meist unkritisch | harte Echtzeit, Latenz/Jitter kritisch |
| Scans | Standard | aktive Scans können Geräte stören |

### Purdue-Referenzmodell (ISA-95-basiert)
```
Level 5  Enterprise-Netz / Internet
Level 4  Business-Planung (ERP, Office)
------- IT/OT-DMZ (Level 3.5): Historian-Spiegel, Patch-Server, Jump-Host
Level 3  Site Operations (MES, Historian, Domain Controller OT)
Level 2  Area Supervisory Control (SCADA, HMI, EWS)
Level 1  Basic Control (SPS, RTU, Safety-Controller)
Level 0  Prozess (Sensoren, Aktoren)
```
Grundregel: **Keine direkte Kommunikation von Level 4 nach Level 2 oder tiefer** – alles terminiert in der DMZ.

### Protokolle (Auswahl)
| Protokoll | Port | Sicherheitsproblem | Abhilfe |
|---|---|---|---|
| Modbus/TCP | 502/tcp | keine Authentisierung, keine Verschlüsselung | Segmentierung, DPI-Firewall (Funktionscodes filtern), Modbus/TCP Security (TLS, Port 802) |
| DNP3 | 20000/tcp | ursprünglich ohne Auth | DNP3 Secure Authentication, TLS |
| IEC 60870-5-104 | 2404/tcp | Klartext | IEC 62351, VPN |
| EtherNet/IP (CIP) | 44818/tcp, 2222/udp | Klartext, ungeschützte Befehle | CIP Security |
| PROFINET | Layer 2 / UDP 34962-34964 | Echtzeit auf L2, nicht routbar | Zellen-Segmentierung, PROFINET Security Classes |
| OPC UA | 4840/tcp | sicher **nur** bei Security Mode Sign/SignAndEncrypt | Mode „None“ verbieten, Zertifikatsmanagement |
| S7comm | 102/tcp | ältere Varianten ohne Auth | S7comm-plus/aktuelle Firmware, Zugriffsschutz |

## Merksätze
- 🧠 In der OT ist **Verfügbarkeit** König – Security darf die Anlage nicht abschalten.
- 🧠 IACS = Menschen + Prozesse + Technik.
- 🧠 Die DMZ ist eine **Trennstelle**, keine Durchleitung.

## Praxisbezug Netzwerk
- Passive Netzwerk-Erkennung (SPAN/TAP + OT-IDS) statt aktiver Scans.
- Auf Industrie-Switches: Port-Security, ungenutzte Ports deaktivieren, Management-VLAN getrennt.
- Multicast/Broadcast-Last (z. B. EtherNet/IP Implicit Messaging) beachten: IGMP Snooping.

## Selbstcheck
- [ ] Warum ist ein aktiver Portscan in der OT riskant?
- [ ] Ordne Historian, Jump-Host, HMI, SPS, ERP ins Purdue-Modell ein.
- [ ] Welches Schutzziel hat in der OT typischerweise oberste Priorität – und warum?
