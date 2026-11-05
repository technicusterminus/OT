# Modul 08 – Anforderungen an Dienstleister (62443-2-4)

⏱ ca. 3 h · Trainer-Filter: **M08**

## Lernziele
- Integration- und Maintenance-Service-Provider unterscheiden
- Die Funktionsbereiche (SP-Bereiche) der 2-4 benennen
- Erklären, wie Asset Owner 2-4 in Ausschreibungen nutzen

## Kernwissen

### Zweck
2-4 definiert **Fähigkeiten (Capabilities)**, die Dienstleister bei Integration und Wartung eines IACS anbieten können sollen. Der Asset Owner wählt, welche er vertraglich fordert. Bewertet wird mit **Reifegraden (ML 1–4)**.

### Funktionsbereiche (SP.01–SP.12)
| Nr. | Bereich | Beispiel |
|---|---|---|
| SP.01 | Solution Staffing | Schulung/Überprüfung des Personals, Security-Ansprechpartner |
| SP.02 | Assurance | Security-Tests, Härtungsnachweise |
| SP.03 | Architecture | Segmentierung, Zonen/Conduits, Härtung |
| SP.04 | Wireless | Sichere Funkkonfiguration |
| SP.05 | SIS | Schutz von Safety-Systemen |
| SP.06 | Configuration Management | Dokumentierte Konfiguration, Änderungen |
| SP.07 | Remote Access | Sicherer Fernzugriff, Freigabeprozess |
| SP.08 | Event Management | Logging, Vorfallmeldungen |
| SP.09 | Account Management | Kontenverwaltung, Default-Konten |
| SP.10 | Malware Protection | AV/Whitelisting, Datenträgerkontrolle |
| SP.11 | Patch Management | Bewerten/Einspielen von Patches |
| SP.12 | Backup/Restore | Sicherung und Wiederherstellung |

### Integration vs. Maintenance
- **Integration**: Design, Bau, Test, Inbetriebnahme der Automation Solution.
- **Maintenance**: Betrieb, Wartung, Updates, Fernwartung nach der Inbetriebnahme.
- Viele Anforderungen gelten für beide.

### Zusammenspiel
Der Integrator baut nach 2-4 eine Lösung, die das in 3-2 festgelegte SL-T erreicht, aus Komponenten mit SL-C nach 4-2 und Systemfähigkeiten nach 3-3.

## Merksätze
- 🧠 2-4 = **Dienstleister**, gemessen in **ML**.
- 🧠 12 Bereiche – Fernzugriff ist **SP.07**, SIS **SP.05**.

## Praxisbezug Netzwerk
Für Fernwartung (SP.07) vertraglich fordern: Zugang nur über Jump-Host in der DMZ, MFA, zeitlich begrenzte Freischaltung durch den Betreiber, Sitzungsaufzeichnung, keine dauerhaften VPN-Tunnel direkt in Level 1/2, keine eigenen LTE-Router des Dienstleisters.

## Selbstcheck
- [ ] Wer entscheidet, welche 2-4-Anforderungen gelten?
  <details><summary>Lösung</summary>

  Der Asset Owner – durch Auswahl und Festlegung im Vertrag bzw. in der Ausschreibung.

  </details>
- [ ] Welcher Bereich deckt Benutzerkonten ab?
  <details><summary>Lösung</summary>

  SP.09 Account Management.

  </details>
