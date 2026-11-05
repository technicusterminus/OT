# OT – IEC 62443 Lernkatalog & Prüfungstrainer

Self-paced Lernpfad und interaktiver Fragentrainer für **OT-/ICS-Security nach IEC 62443** – mit Blick aus der Netzwerk-Praxis (Segmentierung, Firewalls, Remote Access, Industrieprotokolle).

> ⚖️ Eigenständiges, inoffizielles Lernmaterial. Enthält **keinen Normtext** und **keine echten Prüfungsfragen**. Details: [RECHTLICHES.md](RECHTLICHES.md)

## Inhalt

| Bereich | Pfad | Beschreibung |
|---|---|---|
| Lernplan | [`katalog/00-lernplan.md`](katalog/00-lernplan.md) | 6-Wochen-Plan, Fortschritts-Checkliste, Prüfungstipps |
| Lernpfade | [`katalog/lernpfade.md`](katalog/lernpfade.md) | Zertifikats-Roadmap Fundamentals → Risk Assessment → Design, Denkwechsel Netzwerk → OT Security |
| Lernmodule | [`katalog/`](katalog/) | 13 Module mit Lernzielen, Kernwissen, Merksätzen, Praxisbezug und Selbstcheck |
| Trainer | [`trainer/index.html`](trainer/index.html) | Browser-App: Übungsmodus, Prüfungssimulation mit Timer, Karteikasten (Spaced Repetition), Statistik |
| Validierung | [`tools/validate.mjs`](tools/validate.mjs) | Prüft den Fragenpool auf Konsistenz |

## Trainer starten

Keine Installation, kein Build, kein Server nötig:

```bash
# einfach im Browser öffnen
xdg-open trainer/index.html      # Linux
open trainer/index.html          # macOS
start trainer\index.html         # Windows
```

Oder über GitHub Pages (Settings → Pages → Branch `main`, Ordner `/`) unter `…/trainer/`.

Fortschritt wird lokal im Browser (localStorage) gespeichert und lässt sich als JSON exportieren/importieren.

### Modi

Oben **„Ich lerne für: …“** wählen: 1 Foundation (Fundamentals Specialist), 2 Risk Assessment, 3 Design, 4 Maintenance, 5 Expert, plus Ergänzung Bahn EN 50159 – alle Tabs zeigen dann nur Inhalte dieser Stufe.

- **Start (Stufen-Dashboard)** – Fortschritt je Thema, Lernkartei, verlinktes Lernmaterial.
  - **Täglich lernen**: fällige Wiederholungen plus begrenzt neue Fragen. Falsche Antworten kommen in derselben Runde wieder. **Gemeistert** ist eine Frage erst, wenn sie an **zwei verschiedenen Tagen** richtig beantwortet wurde.
  - **Simulation**: enthält den **Prüfungspool** – Fragen, die nur in Simulationen vorkommen und Transfer auf unbekannte Fälle messen.
  - **PRÜFUNGSREIF** = alle Lernfragen gemeistert + letzte zwei Simulationen an verschiedenen Tagen mit ≥ 90 % gesamt und ≥ 80 % im Prüfungspool.
- **Üben** – freies Üben nach Thema und Schwierigkeit.
- **Prüfung** – Simulation mit einstellbarer Länge, Zeit und Bestehensgrenze.
- **Statistik** – Fortschritt je Thema, Schwachstellen, Simulationen.

Nach jeder Antwort gibt es **Feedback zu jeder gewählten und jeder übersehenen Option** – warum sie richtig oder falsch ist.

## Module

| # | Modul | Normbezug |
|---|---|---|
| 01 | OT-Grundlagen & IT vs. OT | – |
| 02 | Aufbau der Normenreihe & Rollen | 62443 gesamt |
| 03 | Grundkonzepte & Modelle | 1-1 |
| 04 | Security Level & Foundational Requirements | 1-1, 3-3, 4-2 |
| 05 | Risikobeurteilung, Zonen & Conduits | 3-2 |
| 06 | Systemanforderungen | 3-3 |
| 07 | Security-Programm des Betreibers & Patch-Management | 2-1, 2-3 |
| 08 | Anforderungen an Dienstleister | 2-4 |
| 09 | Sichere Produktentwicklung & Komponentenanforderungen | 4-1, 4-2 |
| 10 | Zertifizierung, Regulatorik & Netzwerk-Praxis | ISASecure, NIS2, CRA |
| 11 | Risk Assessment Vertiefung | 3-2 Praxis |
| 12 | Design Vertiefung | 3-3 / 4-2 Praxis, CFAT/CSAT, Firewall-Planung |
| 13 | Betrieb & Wartung | IDS, SIEM, Incident Response, MoC, Backup, Audit |
| 15 | [Ergänzung Bahn: EN 50159](katalog/15-en50159.md) | sichere Kommunikation, Kategorien, Bedrohungen, Abwehr |
| 14 | [Musterlösung Übungsfall](katalog/14-musterloesung-talsperre.md) | Zonen, SL-T, CRS, Conduit-Spezifikationen |

## Fragen beitragen

Fragen liegen pro Modul in [`trainer/fragen/`](trainer/fragen/) (Format in [`trainer/fragen.js`](trainer/fragen.js): jede Option mit eigenem Feedback). Nach Änderungen:

```bash
node tools/validate.mjs
```

Die Zuordnung Stufe → Thema → Fragen liegt in [`trainer/syllabus.js`](trainer/syllabus.js). Der Validator prüft, dass jedes Thema mindestens 6 Fragen hat, jede Frage mindestens eine Falschantwort enthält und jede Frage einer Stufe zugeordnet ist.

> **Ehrlicher Hinweis:** 100 % im Trainer bedeuten, dass du alle öffentlich bekannten Themen jeder Stufe beherrschst. Eine Garantie für die echte Prüfung ist das nicht – deren Fragen sind vertraulich, und Syllabus/Format können sich ändern.

Bitte nur **selbst formulierte** Fragen – siehe [RECHTLICHES.md](RECHTLICHES.md).
