# Modul 09 – Sichere Produktentwicklung & Komponentenanforderungen (62443-4-1, 4-2)

⏱ ca. 4 h · Trainer-Filter: **M09**

## Lernziele
- Die acht Practices des Secure Development Lifecycle (4-1) nennen
- Die vier Komponententypen in 4-2 unterscheiden
- CR, SAR, EDR, HDR, NDR einordnen

## Kernwissen

### 62443-4-1 – Secure Product Development Lifecycle
Prozessanforderungen an **Hersteller**, bewertet in **Reifegraden**.

| Practice | Kürzel | Inhalt (Kurz) |
|---|---|---|
| 1 | **SM** – Security Management | Organisation, Rollen, Schulung, Schutz der Entwicklungsumgebung, Lieferkette |
| 2 | **SR** – Specification of Security Requirements | Produkt-Sicherheitskontext, Bedrohungsmodell, Anforderungen |
| 3 | **SD** – Secure by Design | Defense in Depth im Design, Angriffsfläche minimieren |
| 4 | **SI** – Secure Implementation | Coding Guidelines, statische Analyse, Reviews |
| 5 | **SVV** – Security Verification & Validation Testing | Funktionstests, Fuzzing, Penetrationstests, Schwachstellenscans |
| 6 | **DM** – Management of Security-related Issues | Schwachstellenmeldungen annehmen, bewerten, beheben, kommunizieren (PSIRT) |
| 7 | **SUM** – Security Update Management | Updates qualifizieren, signieren, bereitstellen, dokumentieren |
| 8 | **SG** – Security Guidelines | Härtungsanleitung, sichere Integration/Betrieb/Entsorgung für den Kunden |

> Achtung Verwechslungsgefahr: In 4-1 heißt **SR** „Security Requirements“-Practice und **SI** „Secure Implementation“ – nicht zu verwechseln mit SR (System Requirement, 3-3) und FR 3 SI (System Integrity).

### 62443-4-2 – Technische Anforderungen an Komponenten
- Struktur wie 3-3, aber auf Komponentenebene: **CR** x.y (Component Requirement).
- **CCSC** – Common Component Security Constraints: allgemeine Rahmenbedingungen, z. B. Unterstützung essenzieller Funktionen, kompensierende Maßnahmen, Least Privilege, Entwicklung nach 4-1.
- Komponentenspezifische Anforderungen für vier Typen:

| Typ | Kürzel | Beispiele |
|---|---|---|
| Software Application | **SAR** | SCADA-Software, HMI-Anwendung, Historian |
| Embedded Device | **EDR** | SPS, Feldgerät, Safety-Controller |
| Host Device | **HDR** | Windows-/Linux-Server, Workstation, Industrie-PC |
| Network Device | **NDR** | Switch, Router, Firewall, WLAN-AP |

Beispiele für spezifische Anforderungen: EDR – Schutz bei Firmware-Update, Physical-Tamper; NDR – Zonengrenzschutz, Schutz vor DoS; HDR – Malware-Schutz; SAR – Mobile Code.

### Zusammenhang
Hersteller entwickelt nach **4-1** (Prozess, ML) → Produkt erfüllt **4-2** (Technik, SL-C) → Integrator kombiniert Komponenten zu einem System, das **3-3** erfüllt.

## Merksätze
- 🧠 4-1: **„SM SR SD SI SVV DM SUM SG“** – vom Management über Entwurf und Test bis zu Updates und Kundenanleitung.
- 🧠 4-2: **S**oftware, **E**mbedded, **H**ost, **N**etwork – „SEHN“.

## Selbstcheck
- [ ] Welche 4-1-Practice behandelt den Umgang mit gemeldeten Schwachstellen?
- [ ] Welcher 4-2-Typ ist ein Managed Switch?
- [ ] Bezieht sich 4-2 auf SL oder ML?
