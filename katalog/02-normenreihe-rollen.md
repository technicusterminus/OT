# Modul 02 – Aufbau der Normenreihe & Rollen

⏱ ca. 3 h · Trainer-Filter: **M02**

## Lernziele
- Die vier Gruppen der 62443 und ihre wichtigsten Teile benennen
- Jedem Teil die adressierte Rolle zuordnen
- Unterschied zwischen IS (International Standard), TS und TR kennen

## Kernwissen

### Die vier Gruppen
| Gruppe | Fokus | Wichtige Teile |
|---|---|---|
| **1 – General** | Begriffe, Konzepte, Modelle | **1-1** Terminologie, Konzepte, Modelle · 1-2 Glossar · 1-3 Konformitätsmetriken · 1-4 Lebenszyklus & Use Cases · 1-5 Profile |
| **2 – Policies & Procedures** | Organisation, Prozesse beim Betreiber und Dienstleister | **2-1** Security-Programm für Asset Owner · 2-2 Security Protection Rating · **2-3** Patch-Management (TR) · **2-4** Anforderungen an Service Provider · 2-5 Umsetzungsleitfaden für Asset Owner |
| **3 – System** | Anforderungen an das Gesamtsystem | 3-1 Sicherheitstechnologien (TR) · **3-2** Risikobeurteilung & Systemdesign · **3-3** Systemanforderungen & Security Level |
| **4 – Component** | Anforderungen an Produkte/Komponenten | **4-1** Sichere Produktentwicklung (SDL) · **4-2** Technische Anforderungen an Komponenten |

(Fett = besonders prüfungsrelevant.)

### Rollen
| Rolle | Aufgabe | Hauptsächlich relevante Teile |
|---|---|---|
| **Asset Owner** (Betreiber) | Verantwortlich für die Anlage, legt Risikotoleranz fest, betreibt das IACS | 2-1, 2-3, 3-2 (Anforderungen formulieren), 2-5 |
| **Service Provider – Integration** (Systemintegrator) | Plant und baut die Automatisierungslösung | 2-4, 3-2, 3-3 |
| **Service Provider – Maintenance** | Betreut/wartet die Anlage im Betrieb | 2-4 |
| **Product Supplier** (Hersteller) | Entwickelt Komponenten und Systeme | 4-1, 4-2, 3-3 (Systemfähigkeit) |

Zusammenhang „wer liefert was“:
```
Product Supplier ──(Komponenten nach 4-1/4-2, SL-C)──► Integrator
Integrator ──(Automation Solution nach 3-2/3-3, gemäß 2-4)──► Asset Owner
Asset Owner ──(Betrieb nach 2-1, Wartung via Maintenance-SP nach 2-4)──► IACS im Betrieb
```

### Profile (1-5) und Protection Scheme (2-2)
- **Profile (62443-1-5)**: Branchen- oder anwendungsspezifische Auswahl/Anpassung von 62443-Anforderungen (z. B. für eine bestimmte Branche oder Geräteklasse), damit nicht jedes Projekt die Reihe neu interpretiert.
- **Security Protection Scheme/Rating (62443-2-2)**: Bewertet den Schutz eines IACS **im Betrieb** – kombiniert technische Fähigkeiten (SL) und gelebte Prozesse (ML) zu einer Gesamtaussage.
- **Konformitätsmetriken (62443-1-3)**: Ansätze, um die Erfüllung von System-Anforderungen messbar zu machen.

### Dokumenttypen
- **IS** – International Standard, normative Anforderungen („shall“).
- **TS** – Technical Specification, noch nicht voll konsensreif.
- **TR** – Technical Report, informativ (z. B. 2-3, 3-1).

### Herkunft
ISA99-Komitee (USA) entwickelt als ISA-62443, IEC TC65 WG10 übernimmt als IEC 62443 – inhaltlich weitgehend identisch. In Europa als EN IEC 62443 übernommen.

## Merksätze
- 🧠 **1 = Verstehen, 2 = Organisieren, 3 = System bauen, 4 = Produkt bauen.**
- 🧠 4-1 ist **Prozess** (wie entwickelt der Hersteller?), 4-2 ist **Technik** (was kann die Komponente?).
- 🧠 3-2 = **wie** man Zonen und SL-T bestimmt, 3-3 = **welche** technischen Anforderungen pro SL gelten.

## Selbstcheck
- [ ] Ein Hersteller will seinen Entwicklungsprozess zertifizieren lassen. Welcher Teil?
- [ ] Ein Betreiber schreibt die Wartung aus. Auf welchen Teil verweist er?
- [ ] Ist 2-3 normativ?
