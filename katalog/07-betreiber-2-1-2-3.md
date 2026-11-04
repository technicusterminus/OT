# Modul 07 – Security-Programm des Betreibers & Patch-Management (62443-2-1, 2-3)

⏱ ca. 4 h · Trainer-Filter: **M07**

## Lernziele
- Zweck eines Security-Programms (CSMS) für Asset Owner erläutern
- Den Unterschied zwischen der Erstausgabe (2010) und der Neuausgabe (2024) von 2-1 einordnen
- Reifegrade (Maturity Level) erklären
- Patch-Management-Grundsätze nach 2-3 kennen

## Kernwissen

### CSMS / Security-Programm
Ein **Cyber Security Management System** ist das organisatorische Rahmenwerk des Betreibers: Richtlinien, Verantwortlichkeiten, Risikomanagement, Schulung, Überwachung und kontinuierliche Verbesserung – vergleichbar mit einem ISMS nach ISO/IEC 27001, aber auf IACS zugeschnitten.

**Ausgabe 2010** gliederte das CSMS in drei Hauptkategorien:
1. Risikoanalyse (Business Rationale, Risikoidentifikation/-bewertung)
2. Behandlung des Risikos mit dem CSMS (Richtlinien, Organisation, Awareness, Maßnahmen)
3. Überwachung & Verbesserung

**Ausgabe 2024** (Titel sinngemäß: *Security program requirements for IACS asset owners*) ist stärker anforderungsorientiert und in **Security Program Elements (SPE)** gegliedert, u. a. organisatorische Maßnahmen, Konfigurationsmanagement, Netzwerk-/Kommunikationssicherheit, Komponentensicherheit, Datenschutz, Benutzerzugriff, Ereignis-/Vorfallmanagement, Systemintegrität & Verfügbarkeit. Sie verwendet **Reifegrade** analog zu 2-4/4-1.

> Prüfungshinweis: Klären, auf welche Ausgabe sich deine Prüfung bezieht!

### Reifegrade (Maturity Level, angelehnt an CMMI)
| ML | Name | Kurz |
|---|---|---|
| 1 | Initial | ad hoc, undokumentiert, personenabhängig |
| 2 | Managed | dokumentiert, Personal geschult, wiederholbar |
| 3 | Defined (Practiced) | organisationsweit etabliert, nachweislich gelebt |
| 4 | Improving | gemessen und kontinuierlich verbessert |

Wichtig: **SL** bewertet die **Technik** (Wie stark?), **ML** bewertet den **Prozess** (Wie gut gelebt?). 2-2 kombiniert beides zum *Security Protection Rating*.

### Bezug zu ISO/IEC 27001
62443-2-1 kann mit einem ISMS kombiniert werden. Unterschiede: OT-spezifische Risiken (HSE), Lebensdauer, Verfügbarkeit, Rolle von Integratoren und Herstellern.

### Patch-Management (62443-2-3, Technical Report)
- Rollen: Hersteller liefert Patch-Informationen (u. a. Kompatibilität, Abhängigkeiten, Dringlichkeit), Betreiber bewertet und spielt ein.
- Ablauf beim Betreiber: Inventar → Informationsbeschaffung → **Bewertung (Risiko, Kompatibilität)** → **Test** (Testumgebung) → Einspielen im Wartungsfenster → Verifikation → Dokumentation.
- Nicht jeder Patch muss sofort installiert werden – wenn nicht möglich, **kompensierende Maßnahmen** (Segmentierung, Whitelisting, Monitoring).
- Herstellerfreigabe ist in der OT oft Voraussetzung (Gewährleistung/Zulassung).

## Merksätze
- 🧠 2-1 = **Organisation** des Betreibers; 3-3 = **Technik** des Systems.
- 🧠 ML = Prozessreife, SL = technische Stärke.
- 🧠 Patchen in OT: **bewerten → testen → einspielen → verifizieren**.

## Selbstcheck
- [ ] Ist 2-3 ein IS oder ein TR?
- [ ] Ein Patch ist nicht freigegeben, die Lücke ist kritisch. Was tun?
- [ ] Was beschreibt ML 3?
