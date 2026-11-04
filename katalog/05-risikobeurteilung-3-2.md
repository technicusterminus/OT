# Modul 05 – Risikobeurteilung, Zonen & Conduits (62443-3-2)

⏱ ca. 5 h · Trainer-Filter: **M05**

## Lernziele
- Den Ablauf der ZCR-Schritte (Zones, Conduits, Risk) wiedergeben
- Regeln zur Zonenbildung anwenden
- Erklären, wie aus der detaillierten Risikobeurteilung ein SL-T entsteht
- Wissen, was in die Cybersecurity Requirements Specification (CRS) gehört

## Kernwissen

### Ablauf (vereinfacht, eigene Darstellung)
```
ZCR 1  System under Consideration (SuC) festlegen
   ↓
ZCR 2  Erste (High-Level-)Risikobeurteilung – worst case, ohne Gegenmaßnahmen
   ↓
ZCR 3  Aufteilung in Zonen & Conduits
   ↓
ZCR 4  Übersteigt das Anfangsrisiko das tolerierbare Risiko?
   │ nein → direkt zu ZCR 6
   ↓ ja
ZCR 5  Detaillierte Risikobeurteilung je Zone/Conduit
   ↓
ZCR 6  Security-Anforderungen, Annahmen, Randbedingungen dokumentieren (CRS)
   ↓
ZCR 7  Freigabe durch den Asset Owner
```

### ZCR 3 – Regeln zur Zonenbildung (sinngemäß)
- IT-/Business-Assets von IACS-Assets trennen.
- **Safety-bezogene Assets (SIS)** in eigene Zone(n).
- **Temporär verbundene Geräte** (Laptops, USB, Wartungsgeräte) gesondert betrachten.
- **Drahtlose** Netze in eigene Zone(n).
- Über **externe/nicht vertrauenswürdige Netze** angebundene Geräte gesondert.
- Gruppierung nach Kritikalität, Funktion, Lage, Verantwortlichkeit.

### ZCR 5 – Detaillierte Risikobeurteilung
1. Bedrohungen identifizieren
2. Schwachstellen identifizieren
3. Auswirkungen (Consequences) bestimmen
4. Eintrittswahrscheinlichkeit (unmitigated likelihood)
5. Unmitigiertes Risiko bestimmen
6. **SL-T** festlegen
7. Mit tolerierbarem Risiko vergleichen
8. Gegenmaßnahmen auswählen/bewerten (z. B. aus 3-3)
9. Residuale Wahrscheinlichkeit & Risiko neu bewerten
10. Mit tolerierbarem Risiko vergleichen – ggf. iterieren
11. Ergebnisse dokumentieren

### CRS – Cybersecurity Requirements Specification
Enthält u. a.: Beschreibung des SuC, Zonen-/Conduit-Zeichnung, SL-T je Zone/Conduit, Zonen-Eigenschaften (Grenzen, Assets, Datenflüsse, Verantwortliche), Annahmen, Bedrohungsumgebung, Richtlinien des Asset Owners, tolerierbares Risiko, regulatorische Anforderungen.

### Risikomatrix (Beispiel)
| Auswirkung ↓ / Wahrscheinlichkeit → | gering | mittel | hoch |
|---|---|---|---|
| **katastrophal** (Personenschaden) | mittel | hoch | hoch |
| **schwer** (Produktionsausfall > 1 Tag) | gering | mittel | hoch |
| **gering** | gering | gering | mittel |

Der Asset Owner legt die Matrix und das tolerierbare Risiko fest – die Norm gibt sie nicht verbindlich vor.

## Merksätze
- 🧠 Erst **grob** (worst case), dann Zonen, dann **fein**.
- 🧠 SIS, Wireless, Remote/extern, temporäre Geräte → **eigene Zonen**.
- 🧠 Ergebnis von 3-2 = **CRS** + **SL-T** je Zone/Conduit, freigegeben vom **Asset Owner**.

## Praxisbezug Netzwerk
- Assetinventar + Kommunikationsmatrix (Quelle, Ziel, Protokoll, Port, Richtung, Zweck) sind die Grundlage für Zonen und Conduits – passive Netzwerkanalyse liefert sie.
- Jeder Conduit sollte genau definiert sein: zugelassene Flüsse, Richtung, Authentisierung, Verschlüsselung, Logging.

## Selbstcheck
- [ ] Was passiert, wenn in ZCR 4 das Anfangsrisiko tolerierbar ist?
- [ ] Wer gibt die Ergebnisse frei?
- [ ] Nenne vier Assettypen, die in eigene Zonen gehören.
