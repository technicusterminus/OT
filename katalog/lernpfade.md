# Lernpfade – Zertifikats-Roadmap

Empfohlene Reihenfolge für das Profil **Network Engineer → OT Security Engineer → Lead OT-Strategie**:

```
Fundamentals ──► Risk Assessment ──► Design ──► (Maintenance) ──► Expert
   Pflicht          Kernkompetenz       Sweet Spot     später          Ziel
```

> Im ISA/IEC-62443-Zertifikatsprogramm ist der *Fundamentals Specialist* Voraussetzung für die weiteren Stufen; Risk Assessment, Design und Maintenance sind danach frei kombinierbar, alle vier zusammen ergeben den *Expert*. Kursnummern, Prüfungsformat und Voraussetzungen ändern sich gelegentlich – vor der Anmeldung auf isa.org prüfen.

## So nutzt du den Trainer pro Stufe
1. Im Trainer oben **„Ich lerne für: …“** die Stufe wählen – ab dann zeigen alle Tabs nur noch Inhalte dieser Stufe. Die Stufe bleibt gespeichert und lässt sich jederzeit wechseln (auch unter „Alle Stufen“).
2. Die auf dem Start-Dashboard verlinkten Module der Stufe lesen.
3. **Meistermodus**, bis 100 % gemeistert. Zwischendurch gezielt **Üben** nach einzelnen Themen und den **Karteikasten** nutzen.
4. Zwei **Simulationen** mit ≥ 90 % → Badge „PRÜFUNGSREIF“.
5. Ein paar Tage später erneut eine Simulation – Wissen muss halten, nicht nur kurz sitzen.

## Pfad 1 – Fundamentals 🟢
**Ziel:** Begriffe, Struktur der Reihe, Rollen, SL/FR, Grundkonzepte sicher beherrschen.

| Module | Trainer-Preset |
|---|---|
| 01 – 10 (Breite vor Tiefe) | Stufe „Fundamentals Specialist“ |

Fertig, wenn: zwei Prüfungssimulationen hintereinander ≥ 80 %.

## Pfad 2 – Risk Assessment 🟡
**Ziel:** Eine 3-2-Risikobeurteilung selbst moderieren und eine CRS schreiben können.

| Module | Schwerpunkt |
|---|---|
| 03 Grundkonzepte | Risikobegriffe, essenzielle Funktionen |
| 04 SL & FRs | Angreiferprofile → SL-T |
| 05 Risikobeurteilung | ZCR-Ablauf, Zonenregeln |
| **11 Risk Assessment Vertiefung** | Methodik, Konsequenz-/Likelihood-Bewertung, SL-T-Ableitung, CRS, durchgerechnetes Beispiel |
| 07 Betreiber | Risikokriterien kommen aus dem Security-Programm des Asset Owners |

Praxisaufgabe: Übungsfall „Talsperre Süd“ (Lernplan) komplett bis zur CRS durcharbeiten.

## Pfad 3 – Design 🟡🟠
**Ziel:** Aus Zonen/Conduits und SL-T eine prüfbare Architektur mit abgeleiteten Systemanforderungen machen.

| Module | Schwerpunkt |
|---|---|
| 05 Risikobeurteilung | Input: Zonen, Conduits, SL-T |
| 06 Systemanforderungen | SR/RE je SL |
| 09 Produkt 4-1/4-2 | SL-C der Komponenten verstehen, Herstellerangaben lesen |
| 10 Praxis | Referenzarchitektur |
| **12 Design Vertiefung** | SL-T → SR-Ableitung, Gap-Analyse SL-C vs. SL-T, Conduit-Spezifikation, Fernzugriff, Wireless, SIS |

Praxisaufgabe: Für „Talsperre Süd“ eine Conduit-Spezifikation und eine Gap-Analyse für eine reale SPS deiner Wahl erstellen.

## Pfad 4 – Maintenance (später) 🟢🟡
Module **13 Betrieb & Wartung**, 07, 08, 06 (FR 6/7). **Hinweis für die Strategie-Rolle:** Das Security-Programm des Betreibers (2-1) und das Dienstleister-Management (2-4) sind für eine OT-*Strategie* zentral – auch wenn das Zertifikat später kommt, Modul 07/08 früh gründlich lesen.

## Vom Netzwerker zum OT Security Engineer – der Denkwechsel

| Netzwerk-Denken | 62443-Denken |
|---|---|
| „Zwischen die Netze kommt eine Firewall.“ | „Diese Assets bilden wegen gleicher Anforderungen eine Zone; die Kommunikation zu Zone X ist ein Conduit mit SL-T 3 – daraus folgen SR 5.2 inkl. REs, SR 1.13, SR 4.1 …“ |
| VLAN = Segment | Zone = Gruppierung nach Risiko; VLAN ist *eine* mögliche Umsetzung |
| Regel erlaubt Port 502 | Conduit-Spezifikation: Quelle, Ziel, Protokoll, Funktion, Richtung, Authentisierung, Logging – begründet aus der Risikobeurteilung |
| Hardening nach Best Practice | Hardening nachweisbar gegen SR/CR und SL-T, Abweichungen als kompensierende Maßnahme dokumentiert |
| „Funktioniert“ | „Erfüllt SL-T, Residualrisiko ≤ tolerierbar, vom Asset Owner freigegeben“ |
