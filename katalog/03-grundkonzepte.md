# Modul 03 – Grundkonzepte & Modelle (62443-1-1)

⏱ ca. 4 h · Trainer-Filter: **M03**

## Lernziele
- Defense in Depth, Least Privilege und Zonen/Conduits erklären
- Den Begriff „essenzielle Funktion“ und seine Bedeutung für Security-Maßnahmen kennen
- Referenzmodelle (Physisches, funktionales, Asset-, Zonen-/Conduit-Modell) unterscheiden
- Den Security-Lebenszyklus beschreiben

## Kernwissen

### Defense in Depth
Mehrere unabhängige Schutzschichten – organisatorisch, physisch, netzwerkseitig, host-/geräteseitig, applikationsseitig. Das Versagen einer Schicht darf nicht zum Gesamtversagen führen.

### Least Privilege & Need to Know
Benutzer, Prozesse, Geräte erhalten nur die minimal notwendigen Rechte. Gilt auch für Netzwerkflüsse („Least Route“, Whitelisting).

### Zonen und Conduits
- **Zone**: Gruppierung logischer oder physischer Assets mit **gemeinsamen Security-Anforderungen**. Hat eine klare Grenze, ein SL-T und einen Verantwortlichen.
- **Conduit**: Gruppierung von **Kommunikationskanälen**, die zwei oder mehr Zonen verbinden und gemeinsame Security-Anforderungen haben. Kommunikation **innerhalb** einer Zone braucht keinen Conduit – Conduits verbinden Zonen (auch mit externen Netzen).
- Zonen können verschachtelt (Subzonen) sein.
- Ein Conduit ist **logisch** – er kann physisch aus Firewall, VPN, Kabel, Funkstrecke bestehen.

### Essenzielle Funktionen
Funktionen, die zur Aufrechterhaltung von **Health, Safety, Environment (HSE)** und **Verfügbarkeit** nötig sind (z. B. SIS, Not-Aus, Bedienung/Beobachtung des Prozesses). Grundsatz: **Security-Maßnahmen dürfen essenzielle Funktionen nicht beeinträchtigen** (z. B. Konto-Sperre nach Fehlversuchen darf den Operator an der HMI im Notfall nicht aussperren).

### Kompensierende Gegenmaßnahmen
Wenn eine Komponente eine Anforderung nicht selbst erfüllt, kann eine andere Maßnahme (z. B. vorgelagerte Firewall, organisatorische Regel) sie ausgleichen. Muss dokumentiert und in der Risikobewertung berücksichtigt werden.

### Lebenszyklen
- **Produkt-Lebenszyklus** (Hersteller): Entwicklung → Wartung/Updates → End of Life (4-1).
- **Automation-Solution-Lebenszyklus** (Integrator/Betreiber): Spezifikation → Design → Integration → Inbetriebnahme → Betrieb & Wartung → Stilllegung.
- Security ist kein Projekt, sondern ein **kontinuierlicher Prozess** (Plan-Do-Check-Act).

### Begriffe rund um Risiko
- **Threat** (Bedrohung) × **Vulnerability** (Schwachstelle) → **Likelihood**; × **Consequence** → **Risiko**.
- **Unmitigated/Inherent Risk** – ohne Gegenmaßnahmen; **Residual Risk** – nach Gegenmaßnahmen; **Tolerable Risk** – vom Asset Owner akzeptiertes Risiko.

## Merksätze
- 🧠 Zone = **Assets** mit gleichen Anforderungen. Conduit = **Kommunikation** zwischen Zonen.
- 🧠 Security darf Safety nicht gefährden.
- 🧠 Was eine Komponente nicht kann, kann eine **kompensierende Maßnahme** übernehmen.

## Praxisbezug Netzwerk
| Konzept | Typische Umsetzung |
|---|---|
| Zonengrenze | VLAN + L3-Firewall/ACL, getrennte VRFs |
| Conduit | Firewall-Regelsatz zwischen zwei Zonen, IPsec-Tunnel, Daten-Diode |
| Least Privilege im Netz | Default-Deny, Regeln auf Quelle/Ziel/Port/Funktionscode |
| Defense in Depth | Perimeter-FW + Zellen-FW + Host-Härtung + Monitoring |

## Selbstcheck
- [ ] Ist ein VLAN automatisch eine Zone?
- [ ] Nenne ein Beispiel, wie eine Security-Funktion eine essenzielle Funktion stören könnte.
- [ ] Was unterscheidet Residual- und Tolerable-Risk?
