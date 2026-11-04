# OT – IEC 62443 Lernkatalog & Prüfungstrainer

Self-paced Lernpfad und interaktiver Fragentrainer für **OT-/ICS-Security nach IEC 62443** – mit Blick aus der Netzwerk-Praxis (Segmentierung, Firewalls, Remote Access, Industrieprotokolle).

> ⚖️ Eigenständiges, inoffizielles Lernmaterial. Enthält **keinen Normtext** und **keine echten Prüfungsfragen**. Details: [RECHTLICHES.md](RECHTLICHES.md)

## Inhalt

| Bereich | Pfad | Beschreibung |
|---|---|---|
| Lernplan | [`katalog/00-lernplan.md`](katalog/00-lernplan.md) | 6-Wochen-Plan, Fortschritts-Checkliste, Prüfungstipps |
| Lernmodule | [`katalog/`](katalog/) | 10 Module mit Lernzielen, Kernwissen, Merksätzen, Praxisbezug und Selbstcheck |
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

- **Üben** – Fragen nach Modul/Schwierigkeit filtern, sofortiges Feedback mit Erklärung und Normverweis.
- **Prüfungssimulation** – zufällige Auswahl über alle Module, Countdown, Auswertung erst am Ende, Bestehensgrenze 70 % (anpassbar).
- **Karteikasten** – Leitner-System mit 5 Fächern: falsch beantwortete Fragen kommen häufiger dran.
- **Statistik** – Trefferquote pro Modul, Schwachstellen auf einen Blick.

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

## Fragen beitragen

Fragen liegen in [`trainer/fragen.js`](trainer/fragen.js). Nach Änderungen:

```bash
node tools/validate.mjs
```

Bitte nur **selbst formulierte** Fragen – siehe [RECHTLICHES.md](RECHTLICHES.md).
