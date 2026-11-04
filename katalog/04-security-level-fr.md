# Modul 04 – Security Level & Foundational Requirements

⏱ ca. 4 h · Trainer-Filter: **M04**

## Lernziele
- Die sieben Foundational Requirements (FR) mit Abkürzung aufzählen
- SL 0–4 über das Angreiferprofil definieren
- SL-T, SL-C und SL-A unterscheiden und ihr Zusammenspiel erklären
- Den SL-Vektor lesen

## Kernwissen

### Die 7 Foundational Requirements
| FR | Name (engl.) | Abk. | Worum geht's? |
|---|---|---|---|
| FR 1 | Identification and Authentication Control | **IAC** | Wer bist du? (Mensch, Software-Prozess, Gerät) |
| FR 2 | Use Control | **UC** | Was darfst du? (Autorisierung, Audit, Mobile Code, Sitzungen) |
| FR 3 | System Integrity | **SI** | Wurde etwas manipuliert? (Software-/Datenintegrität, Malware-Schutz) |
| FR 4 | Data Confidentiality | **DC** | Kann jemand mitlesen? (Verschlüsselung, Löschung) |
| FR 5 | Restricted Data Flow | **RDF** | Wohin darf Kommunikation? (Segmentierung, Zonengrenzen) |
| FR 6 | Timely Response to Events | **TRE** | Merkt man es und reagiert rechtzeitig? (Logs, Monitoring) |
| FR 7 | Resource Availability | **RA** | Bleibt das System verfügbar? (DoS-Schutz, Backup, Notstrom-/Fail-Safe-Verhalten) |

Eselsbrücke: **„Ich Unterschreibe Sicherheit, Daten Reisen Total Ausfallsicher“** → IAC, UC, SI, DC, RDF, TRE, RA.

### Security Level (SL) – über den Angreifer definiert
| SL | Schutz gegen … | Mittel | Ressourcen | Fähigkeiten | Motivation |
|---|---|---|---|---|---|
| **0** | keine besonderen Anforderungen | – | – | – | – |
| **1** | zufällige/versehentliche Verletzung | – | – | – | – |
| **2** | absichtliche Verletzung | einfach | gering | allgemein | gering |
| **3** | absichtliche Verletzung | anspruchsvoll | moderat | **IACS-spezifisch** | moderat |
| **4** | absichtliche Verletzung | anspruchsvoll | **umfangreich** | IACS-spezifisch | hoch |

Faustregel: SL1 = Fehlbedienung, SL2 = Hacker mit Standard-Tools, SL3 = gezielter Angreifer mit OT-Know-how (z. B. Hacktivisten-Gruppe, organisierte Kriminalität), SL4 = staatlich unterstützter Angreifer.

### Drei SL-Typen
| Typ | Bedeutung | Wer bestimmt? | Wo? |
|---|---|---|---|
| **SL-T** (Target) | angestrebtes Level einer Zone/eines Conduits | Asset Owner mit Integrator, aus Risikobeurteilung | 3-2 |
| **SL-C** (Capability) | was eine Komponente/ein System bei richtiger Konfiguration leisten **kann** | Hersteller | 3-3 (System), 4-2 (Komponente) |
| **SL-A** (Achieved) | tatsächlich erreichtes Level im Betrieb | gemessen/bewertet in der realen Anlage | Betrieb |

Ziel: **SL-A ≥ SL-T**. Ist SL-C einer Komponente kleiner als SL-T → kompensierende Gegenmaßnahmen nötig.

### SL-Vektor
SL wird **pro FR** angegeben: `SL-T(Zone) = {IAC, UC, SI, DC, RDF, TRE, RA}`, z. B. `{2, 2, 3, 1, 3, 2, 3}`. So kann eine Zone hohe Integrität, aber geringe Vertraulichkeit fordern – typisch für OT.

### SR, CR und RE
- **SR** (System Requirement, 3-3) und **CR** (Component Requirement, 4-2) sind den FRs zugeordnet, z. B. SR 1.1 = erste Anforderung unter FR 1.
- **RE** (Requirement Enhancement) verschärft eine Anforderung. Höhere SLs erfordern mehr REs.
- Beispiel: SR 1.1 (Identifikation/Authentisierung menschlicher Benutzer) → RE 1 eindeutige Identifikation (ab SL 2) → RE 2 MFA bei nicht vertrauenswürdigen Netzen (ab SL 3) → RE 3 MFA für alle Netze (SL 4).

## Merksätze
- 🧠 SL wird über den **Angreifer** definiert, nicht über den Schaden.
- 🧠 **T**arget = will ich, **C**apability = kann das Produkt, **A**chieved = hab ich.
- 🧠 SL ist ein **Vektor über 7 FRs**, keine einzelne Zahl.

## Selbstcheck
- [ ] Welches FR deckt Netzwerksegmentierung ab?
- [ ] Eine SPS hat SL-C 2 für FR 1, die Zone fordert SL-T 3. Was tun?
- [ ] Ab welchem SL setzt die Norm IACS-spezifisches Wissen beim Angreifer voraus?
