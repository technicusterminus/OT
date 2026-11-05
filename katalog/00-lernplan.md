# Lernplan – IEC 62443 self-paced

**Zielgruppe:** Netzwerk-/IT-Engineers, die in OT-Security einsteigen oder sich auf eine 62443-Zertifikatsprüfung vorbereiten (z. B. ISA/IEC 62443 Cybersecurity Fundamentals Specialist).
**Aufwand:** ca. 6 Wochen à 4–6 Stunden.
**Danach:** Vertiefung nach [Lernpfaden](lernpfade.md) – Risk Assessment (Modul 11) und Design (Modul 12).

> Prüfungsformat (Fragenanzahl, Dauer, Bestehensgrenze) ändert sich gelegentlich – vor der Anmeldung immer beim Prüfungsanbieter (z. B. isa.org) nachsehen.

## Wochenplan

| Woche | Module | Trainer-Aufgabe | ✓ |
|---|---|---|---|
| 1 | [01 OT-Grundlagen](01-ot-grundlagen.md), [02 Normenreihe & Rollen](02-normenreihe-rollen.md) | Üben: M01+M02, Ziel ≥ 80 % | [ ] |
| 2 | [03 Grundkonzepte](03-grundkonzepte.md), [04 Security Level & FRs](04-security-level-fr.md) | Üben: M03+M04; Karteikasten täglich 10 min | [ ] |
| 3 | [05 Risikobeurteilung 3-2](05-risikobeurteilung-3-2.md) | Übungsfall unten durcharbeiten; Üben M05 | [ ] |
| 4 | [06 Systemanforderungen 3-3](06-systemanforderungen-3-3.md), [07 Betreiber 2-1/2-3](07-betreiber-2-1-2-3.md) | Üben: M06+M07 | [ ] |
| 5 | [08 Dienstleister 2-4](08-dienstleister-2-4.md), [09 Produkt 4-1/4-2](09-produkt-4-1-4-2.md) | Üben: M08+M09 | [ ] |
| 6 | [10 Zertifizierung & Praxis](10-zertifizierung-praxis.md) | 2× Prüfungssimulation, Schwachstellen nacharbeiten | [ ] |

## Lernmethode

1. **Modul lesen** (Lernziele zuerst!) – 45–60 min.
2. **Merksätze** laut erklären können (Feynman-Methode).
3. **Selbstcheck** am Modulende ohne Nachschlagen beantworten.
4. **Trainer – Üben** nur für dieses Modul, bis ≥ 80 %.
5. **Täglich lernen** im Trainer: fällige Fragen kommen mit wachsendem Abstand wieder (1, 3, 7, 14, 30 Tage).
6. Sobald alle Module ≥ 80 %: **Prüfungssimulation**. Ziel: zweimal hintereinander ≥ 80 %.

## Übungsfall (durchgängig für Module 3–6)

> **Wasserwerk „Talsperre Süd“**: Leitstelle mit SCADA-Server und zwei HMIs, Historian, Engineering-Workstation, 6 Außenstationen (SPS + Fernwirk-Router über LTE), ein Sicherheits-Abschaltsystem (SIS) für die Chlordosierung, Fernwartungszugang für den Pumpenhersteller, Anbindung ans Office-Netz für Reporting.

Aufgaben:
- [ ] Zeichne ein Purdue-Modell der Anlage.
- [ ] Bilde Zonen und Conduits (Tipp: SIS, Fernwartung und LTE-Außenstationen gesondert betrachten).
- [ ] Lege für jede Zone ein SL-T fest und begründe es mit dem Angreiferprofil.
- [ ] Wähle für den Conduit Leitstelle↔Außenstationen konkrete Maßnahmen (Bezug zu FR 1, 4, 5).
- [ ] Welche Anforderungen stellst du in der Ausschreibung an den Integrator (2-4) und an die SPS (4-2)?

➡️ Danach vergleichen: [Musterlösung](14-musterloesung-talsperre.md)

## Prüfungstipps

- Prüfungen fragen gern **Begriffe und Zuordnungen** ab: Welcher Normteil? Welche Rolle? Welches FR? SL-T vs. SL-C vs. SL-A?
- Achte auf **Signalwörter**: „Asset Owner“ → 2-1/3-2; „Integrator/Maintenance“ → 2-4; „Produkthersteller-Prozess“ → 4-1; „Komponente technisch“ → 4-2; „System technisch“ → 3-3.
- Bei Antworten mit „immer“, „nie“, „ausschließlich“ skeptisch sein – 62443 ist risikobasiert.
- Verfügbarkeit & Sicherheit (Safety) haben in OT Vorrang: Maßnahmen dürfen **essenzielle Funktionen nicht beeinträchtigen**.
