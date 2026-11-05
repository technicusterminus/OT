# Modul 13 – Betrieb & Wartung (Operations & Maintenance)

⏱ ca. 6 h · Trainer-Filter: **M13** · Pfad: Maintenance

## Lernziele
- Netzwerk- und hostbasierte Angriffserkennung in OT planen
- Security-Events zentral erfassen und bewerten (SIEM, Use Cases)
- Einen OT-Incident-Response-Plan aufbauen
- Management of Change (MoC) für IACS anwenden
- Backup- und Restore-Verfahren entwickeln und testen
- Ein einfaches IACS-Security-Audit durchführen
- Schwachstellen- und Asset-Management im Betrieb organisieren

## 1. Angriffserkennung (FR 6)
| Art | Umsetzung in OT | Vorteile | Grenzen |
|---|---|---|---|
| **NIDS** (netzbasiert) | passiv an SPAN/TAP, OT-Protokoll-DPI, Baseline/Anomalie + Signaturen | keine Beeinflussung des Prozesses, sieht alle Flüsse eines Segments | verschlüsselter Verkehr, SPAN-Überlast, blinde Flecken ohne Sensor |
| **HIDS** (hostbasiert) | auf Windows/Linux-Hosts (HMI, EWS, Server), File-Integrity, Application Whitelisting-Logs | sieht lokale Änderungen, USB, Prozesse | nicht auf SPS/Embedded; Herstellerfreigabe nötig |
| **IPS** (inline, blockierend) | nur nach sorgfältiger Prüfung, eher an IT/OT-Grenze | stoppt Angriffe | **False Positive = Produktionsausfall** – in Level 1/2 meist nur Alarm-Modus |

Merksatz: In der OT **erkennen und melden** vor **automatisch blockieren**.

## 2. Event-Monitoring & SIEM
- Quellen: Firewalls, Switches (Port up/down, MAC-Wechsel), VPN/Jump-Host, AD, HIDS/NIDS, SPS-Ereignisse (Mode-Wechsel RUN→PROGRAM, Download), Historian.
- Zeitsynchronisation (SR 2.11) ist Voraussetzung für Korrelation.
- Typische OT-Use-Cases:
  - Programm-Download/Firmware-Update auf SPS außerhalb Wartungsfenster
  - Neues Gerät/neue MAC im Zellennetz
  - Fernwartungssitzung ohne Ticket
  - Engineering-Protokoll aus unerwarteter Quelle
  - Mehrfache Fehlanmeldungen an HMI/EWS
- Alarm-Priorisierung nach Kritikalität der Zone, klare Zuständigkeit (SOC ↔ Betrieb).

## 3. Incident Response für OT
Phasen (angelehnt an gängige IR-Modelle): **Vorbereitung → Erkennung & Analyse → Eindämmung → Beseitigung → Wiederherstellung → Lessons Learned**.

OT-Besonderheiten:
- **Safety first**: Entscheidung über Eindämmungsmaßnahmen (z. B. Netztrennung) gemeinsam mit Betrieb/Schichtleitung – die Anlage muss sicher bleiben.
- Vorab definierte **Isolationspunkte** (welche Firewall/welcher Uplink darf getrennt werden, was passiert dann im Prozess? „Island Mode“).
- Kontaktliste: Betrieb, Safety, OT-Security, IT-SOC, Hersteller, Integrator, Behörden (Meldepflichten NIS2/KRITIS), Versicherung.
- Forensik behutsam: Speicherabbilder von HMIs ja, Abschalten laufender Steuerungen nur nach Abwägung.
- **Übungen** (Tabletop) regelmäßig, mit dem Betrieb.

## 4. Management of Change (MoC)
Jede Änderung an Hardware, Software, Konfiguration, Netz oder Zugriffsrechten:
1. Antrag mit Beschreibung und Begründung
2. **Auswirkungsanalyse** – Safety, Prozess, **Security** (ändert sich eine Zone/ein Conduit? muss die Risikobeurteilung aktualisiert werden?)
3. Freigabe durch definierte Rollen
4. Test (Testsystem/FAT), Rückfallplan
5. Umsetzung im Wartungsfenster
6. Verifikation, Dokumentation aktualisieren (Netzplan, Konfig-Backup, Inventar)

Notfalländerungen: vereinfachtes Verfahren, aber nachträgliche Dokumentation und Bewertung.

## 5. Backup & Restore (SR 7.3, 7.4; 2-4 SP.12)
- Was: SPS-Programme, HMI-Projekte, Server-Images, Netzwerkkonfigurationen, Firewall-Regelwerke, Lizenzen, Zertifikate/Schlüssel, Dokumentation.
- Wie: **3-2-1-Regel** (3 Kopien, 2 Medien, 1 offline/extern), Integrität (Hash), Schutz vor Ransomware (offline/immutable), Versionierung.
- **Restore testen** – ein ungetestetes Backup ist kein Backup. Wiederherstellungszeiten (RTO) mit dem Betrieb abstimmen.
- Nach Restore: Integrität prüfen, auf bekannten sicheren Stand bringen, Passwörter/Schlüssel ggf. erneuern.

## 6. Schwachstellen- & Patch-Management im Betrieb
- Aktuelles **Asset-Inventar** (SR 7.8) mit Firmware-/Softwareständen.
- Quellen: Hersteller-Advisories, CERTs/ICS-Advisories, SBOMs.
- Bewertung im OT-Kontext (Erreichbarkeit, Zone, Kritikalität) – CVSS allein reicht nicht.
- Patch nach 2-3: bewerten → testen → einspielen → verifizieren; sonst kompensieren.
- Malware-Schutz: AV-Signaturen über Relay in der DMZ, Application Whitelisting, Wechseldatenträger-Schleuse („Kiosk“).

## 7. Konten & Zugriffe im Betrieb
- Regelmäßige Rezertifizierung (Wer hat noch Zugriff?), Leaver-Prozess, Dienstleisterkonten zeitlich begrenzt.
- Notfallkonten („Break Glass“) versiegelt, Nutzung protokolliert und nachbereitet.

## 8. Einfaches IACS-Security-Audit
Prüfe gegen CRS, Richtlinien und 3-3/2-4-Anforderungen:
- Stimmen Netzplan/Inventar mit der Realität überein (Abgleich mit NIDS-Daten)?
- Firewall-Regeln: keine any-any, keine verwaisten Regeln, Kommentare/Tickets vorhanden?
- Default-Passwörter, Gruppenkonten, Fernwartungszugänge?
- Backups vorhanden **und** getestet?
- Logs kommen an, Alarme werden bearbeitet?
- MoC wurde eingehalten (Stichprobe von Änderungen)?
- Ergebnis: Feststellungen mit Risiko, Maßnahmen, Verantwortlichen, Termin.

## 9. Kontinuierliche Verbesserung
KPIs (Beispiele): Anteil Assets im Inventar, Patch-Rückstand nach Kritikalität, Zeit bis zur Alarmbearbeitung, Anteil getesteter Restores, Anzahl Fernzugriffe ohne Ticket. Ergebnisse fließen ins Security-Programm (2-1) zurück.

## Merksätze
- 🧠 Erkennen vor Blockieren – ein falsch-positiver IPS-Block ist ein Produktionsausfall.
- 🧠 Jede Änderung → MoC → prüfen, ob die Risikobeurteilung betroffen ist.
- 🧠 Backup ohne Restore-Test ist Hoffnung.
- 🧠 Incident Response in OT: **Safety entscheidet mit**.

## Selbstcheck
- [ ] Nenne drei OT-spezifische SIEM-Use-Cases.
  <details><summary>Lösung</summary>

  Programm-Download oder Moduswechsel einer SPS außerhalb des Wartungsfensters · neues Gerät/neue MAC im Zellennetz · Fernwartungssitzung ohne Ticket · Engineering-Protokoll aus unerwarteter Quelle · Konfigurationsänderung an Zonen-Firewalls.

  </details>
- [ ] Warum braucht ein OT-IR-Plan vorab definierte Isolationspunkte?
  <details><summary>Lösung</summary>

  Weil eine spontane Netztrennung im Ernstfall den Prozess gefährden kann. Vorab muss geklärt sein, welche Verbindung getrennt werden darf, wer das entscheidet und wie sich die Anlage dann verhält (Island Mode) – sonst wird zu spät oder falsch gehandelt.

  </details>
- [ ] Was gehört alles ins Backup einer Fertigungszelle?
  <details><summary>Lösung</summary>

  SPS-Programme und -Parameter · HMI-Projekte · Server-/Workstation-Images · Netzwerk- und Firewall-Konfigurationen · Lizenzen · Zertifikate und Schlüssel · Dokumentation (Netzplan, Inventar). Mindestens eine Kopie offline; Restore regelmäßig testen.

  </details>
- [ ] Wie prüfst du im Audit, ob der Netzplan stimmt?
  <details><summary>Lösung</summary>

  Abgleich mit realen Netzwerkdaten: passiver Mitschnitt bzw. OT-IDS-Daten, Switch-Tabellen (MAC/ARP), Firewall-Logs und -Regeln. Abweichungen (unbekannte Geräte, undokumentierte Flüsse) sind Befunde.

  </details>
