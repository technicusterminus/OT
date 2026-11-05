# Modul 11 – Risk Assessment Vertiefung (62443-3-2 in der Praxis)

⏱ ca. 6 h · Trainer-Filter: **M11** · Pfad: Risk Assessment

## Lernziele
- Einen Risikobeurteilungs-Workshop vorbereiten und moderieren
- Konsequenzen und Eintrittswahrscheinlichkeiten nachvollziehbar bewerten
- Aus Bedrohungsszenarien ein SL-T (als Vektor) begründet ableiten
- Eine Cybersecurity Requirements Specification (CRS) strukturieren
- Typische Fehler in Risikobeurteilungen erkennen

## 1. Vorbereitung
| Input | Quelle | Warum |
|---|---|---|
| Asset-Inventar | passive Netzwerkanalyse, Engineering-Projekte, Begehung | Was gibt es überhaupt? |
| Netzplan & Kommunikationsmatrix | Switch-/FW-Konfigs, Flow-Daten, OT-IDS | Welche Flüsse existieren wirklich? |
| Prozessbeschreibung, HAZOP/LOPA | Verfahrenstechnik, Safety | Was kann physisch passieren? |
| Risikomatrix & Toleranzgrenze | Security-Programm des Asset Owners (2-1) | Wogegen wird bewertet? |
| Bedrohungsinformationen | CERTs, Branchen-ISACs, Lageberichte | Wer greift realistisch an? |

**Teilnehmer:** Asset Owner (Betrieb, Verfahrenstechnik, Safety, IT/OT-Security), Integrator, ggf. Hersteller. Ohne Betrieb und Safety ist eine Konsequenzbewertung nicht belastbar.

## 1b. Greenfield vs. Brownfield & Assessment-Arten
- **Greenfield** (Neuanlage): Risikobeurteilung vor dem Design – Security wird von Anfang an eingeplant.
- **Brownfield** (Bestand): Ist-Aufnahme zuerst – Inventar, reale Datenflüsse, vorhandene Gegenmaßnahmen, **Gaps in Richtlinien und Verfahren** (z. B. fehlender Fernwartungsprozess, keine Backup-Tests).

| Assessment-Art | Vorgehen | Risiko für den Betrieb | Einsatz |
|---|---|---|---|
| **High-Level** | Interviews, Dokumente, Begehung | keins | Einstieg, ZCR 2 |
| **Passiv** | Netzwerkmitschnitt (SPAN/TAP), Konfig-Review (FW, Switch), Log-Auswertung | sehr gering | Standard in Produktion |
| **Aktiv** | gezielte Abfragen/Scans, Credential-Checks | mittel – Geräte können ausfallen | Wartungsfenster, Testsystem, mit Freigabe |
| **Penetrationstest** | Ausnutzen von Schwachstellen | hoch | bevorzugt auf Test-/Referenzsystem oder bei Stillstand |

Ergebnis einer Ist-Aufnahme: Asset-Inventar, Datenflussdiagramm, Zonen-/Conduit-Zeichnung (Ist und Soll), Liste vorhandener Gegenmaßnahmen und Gaps, CRS.

## 2. Konsequenzen bewerten
Bewertet wird **der Worst Case ohne Gegenmaßnahmen** (in ZCR 2) über mehrere Kategorien – die höchste zählt:

| Stufe | Personen (HSE) | Umwelt | Produktion | Finanzen | Reputation/Regulatorik |
|---|---|---|---|---|---|
| 5 | Todesfall | großflächig, langfristig | > 1 Woche Stillstand | > 10 Mio € | Behörden-/Medienkrise |
| 4 | schwere Verletzung | meldepflichtig | 1–7 Tage | 1–10 Mio € | Meldepflicht (NIS2) |
| 3 | leichte Verletzung | lokal begrenzt | < 1 Tag | 100 k–1 Mio € | Kundenbeschwerden |
| 2 | Erste Hilfe | – | Qualitätsabweichung | < 100 k € | intern |
| 1 | keine | keine | keine | vernachlässigbar | keine |

(Beispielwerte – der Asset Owner legt die echten Schwellen fest.)

**Wichtig:** Existierende **nicht-cyber** Schutzschichten (mechanische Sicherheitsventile, Berstscheiben, hardwired Not-Aus) dürfen die Konsequenz *begrenzen*, denn sie sind per Cyberangriff nicht manipulierbar. Ein programmierbares SIS dagegen ist selbst Angriffsziel.

## 3. Eintrittswahrscheinlichkeit
Qualitativ über Faktoren:
- **Exposition**: Erreichbarkeit (Internet, Fernwartung, Office-Netz, nur lokal)
- **Angreiferprofil**: Fähigkeit, Ressourcen, Motivation (→ SL-Definition)
- **Schwachstellen**: bekannte CVEs, Default-Credentials, ungeschützte Protokolle
- **Historie**: bekannte Vorfälle in der Branche

## 4. Vom Szenario zum SL-T
Je Zone/Conduit:
1. Relevante Bedrohungsszenarien sammeln (z. B. „Ransomware aus Office-Netz“, „manipulierte Sollwerte über Fernwartung“).
2. Für jedes Szenario Konsequenz × Likelihood → unmitigiertes Risiko.
3. Fragen: **Gegen welchen Angreifer muss diese Zone bestehen, damit das Risiko tolerierbar wird?** → SL 1–4.
4. Je FR differenzieren: Braucht die Zone wirklich Vertraulichkeit (FR 4) auf SL 3? Oft nein – Integrität (FR 3) und Verfügbarkeit (FR 7) dagegen schon.

Beispiel „Talsperre Süd“:

| Zone | Leitszenario | Konsequenz | SL-T {IAC,UC,SI,DC,RDF,TRE,RA} |
|---|---|---|---|
| Z1 Leitstelle | Manipulation Sollwerte Chlordosierung | 5 (HSE) | {3,3,3,2,3,3,3} |
| Z2 SIS Chlor | Deaktivierung der Abschaltung | 5 (HSE) | {3,3,3,1,3,2,3} |
| Z3 Außenstationen | Pumpenstillstand über LTE | 4 (Versorgung) | {3,2,3,2,3,2,3} |
| Z4 DMZ | Sprungbrett aus Office | 4 | {3,3,3,2,3,3,2} |
| C1 Fernwartung | Missbrauch Herstellerzugang | 5 | {3,3,3,3,3,3,2} |

## 5. CRS-Gliederung (Vorlage)
1. Beschreibung des SuC und seiner Grenzen
2. Zonen- und Conduit-Zeichnung
3. Je Zone/Conduit: Name, Verantwortlicher, Assets, logische/physische Grenzen, Zugangspunkte, Datenflüsse, SL-T-Vektor, Begründung
4. Bedrohungsumgebung und Annahmen (z. B. „physischer Zugang zur Leitwarte ist kontrolliert“)
5. Risikokriterien und tolerierbares Risiko
6. Regulatorische Anforderungen (NIS2, B3S, Maschinenverordnung …)
7. Organisatorische Anforderungen und Randbedingungen
8. Freigabe durch den Asset Owner (Datum, Version)

## 6. Typische Fehler
- ❌ Zonen nach Gebäuden oder VLANs statt nach Security-Anforderungen bilden.
- ❌ Bestehende Firewalls bereits in der Erstbewertung (ZCR 2) als Gegenmaßnahme ansetzen.
- ❌ Ein SL-T für alles („Wir machen SL 3“) – ohne FR-Differenzierung und Begründung.
- ❌ Fernwartung, temporäre Geräte und Wireless „vergessen“.
- ❌ Kein Re-Assessment bei Änderungen (neue Verbindungen, neue Bedrohungslage).
- ❌ Ergebnis nicht vom Asset Owner freigegeben.

## Merksätze
- 🧠 Konsequenz = Worst Case ohne **cyber-angreifbare** Schutzmaßnahmen.
- 🧠 SL-T beantwortet: **Gegen wen** muss die Zone bestehen?
- 🧠 Die Risikobeurteilung ist **lebendig** – bei Änderungen wiederholen.

## Selbstcheck
- [ ] Warum darf ein mechanisches Sicherheitsventil die Konsequenz mindern, ein programmierbares SIS aber nicht ohne Weiteres?
  <details><summary>Lösung</summary>

  Das Ventil kann per Cyberangriff nicht manipuliert werden, seine Wirkung ist also auch im Angriffsfall gesichert. Ein programmierbares, vernetztes SIS kann selbst Angriffsziel sein (vgl. TRITON) – es darf nur angerechnet werden, wenn seine eigene Absicherung bewertet ist.

  </details>
- [ ] Warum hat die SIS-Zone im Beispiel FR 4 = 1?
  <details><summary>Lösung</summary>

  Das relevante Risiko ist Manipulation oder Ausfall der Sicherheitsfunktion, nicht das Mitlesen der Daten. Vertraulichkeit hat dort geringen Schutzbedarf, Integrität (FR 3) und Datenfluss (FR 5) dagegen hohen.

  </details>
- [ ] Welche Anlässe lösen eine erneute Risikobeurteilung aus?
  <details><summary>Lösung</summary>

  Neue externe Verbindungen (Cloud, Fernwartung) · größere Anlagenänderungen/-erweiterungen · geänderte Bedrohungslage (z. B. CERT-Warnungen) · weggefallene Annahmen der CRS · Sicherheitsvorfälle · regelmäßige Überprüfung.

  </details>
