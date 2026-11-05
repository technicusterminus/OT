// M03 – Grundkonzepte (1-1)
F("M03-01", 1, "Was ist eine Zone im Sinne der 62443?", [
  X("Ein VLAN mit eigener IP-Adressierung", "Ein VLAN kann eine Zone umsetzen, ist aber nicht automatisch eine."),
  R("Assets mit gemeinsamen Security-Anforderungen", "Zonen werden nach Anforderungen gebildet, nicht nach Technik."),
  X("Ein physischer Bereich mit Zutrittskontrolle", "Physische Lage kann ein Kriterium sein, definiert die Zone aber nicht."),
  X("Ein Firewall-Regelsatz zwischen zwei Netzen", "Das beschreibt eher die Umsetzung eines Conduits."),
], "Zone = Assets mit gleichen Security-Anforderungen, mit Grenze, SL-T und Verantwortlichem.", "62443-1-1 / 3-2");

F("M03-02", 1, "Was ist ein Conduit?", [
  X("Ein Kabelkanal in der Anlage", "Der Begriff ist logisch gemeint, nicht als Verlegeweg."),
  R("Eine Gruppe von Kommunikationskanälen zwischen Zonen", "Conduits fassen Verbindungen mit gemeinsamen Security-Anforderungen zusammen."),
  X("Ein anderes Wort für eine Subzone", "Subzonen gruppieren Assets, Conduits gruppieren Kommunikation."),
  X("Ein redundanter Netzwerkpfad für Verfügbarkeit", "Redundanz kann Teil eines Conduits sein, definiert ihn aber nicht."),
], "Physisch besteht ein Conduit z. B. aus Firewall plus VPN-Strecke.", "62443-1-1 / 3-2");

F("M03-03", 2, "Was versteht man unter einer essenziellen Funktion?", [
  X("Jede Funktion, die Netzwerkzugriff benötigt", "Netzwerkzugriff ist kein Kriterium."),
  R("Eine Funktion, die HSE und Verfügbarkeit sichert", "Beispiele: SIS, Not-Aus, Bedienen und Beobachten."),
  X("Eine Funktion, die die Benutzerverwaltung bereitstellt", "Benutzerverwaltung ist eine Security-Funktion, keine essenzielle Funktion."),
  X("Eine Funktion, die der Hersteller als Pflichtmodul liefert", "Lizenz- oder Modulfragen spielen keine Rolle."),
], "Security-Maßnahmen dürfen essenzielle Funktionen nicht beeinträchtigen.", "62443-1-1, 3-3, 4-2");

F("M03-04", 2, "An der Operator-HMI soll nach drei Fehlversuchen das Konto gesperrt werden. Was ist aus 62443-Sicht das Hauptproblem?", [
  X("Kontosperren sind in der Normenreihe nicht vorgesehen", "Sie sind vorgesehen (SR 1.11) – aber mit Rücksicht auf essenzielle Funktionen."),
  R("Der Operator könnte im Notfall ausgesperrt werden", "Bedienen/Beobachten ist eine essenzielle Funktion und darf nicht blockiert werden."),
  X("Die Sperre verletzt die Vertraulichkeit der Prozessdaten", "Vertraulichkeit ist hier nicht betroffen."),
  X("Drei Versuche sind zu viele, es sollte ein Versuch sein", "Weniger Versuche verschärfen das Problem."),
], "Alternativen: Verzögerung statt Sperre, Alarm ans SIEM, physischer Zugangsschutz.", "Modul 03, SR 1.11");

F("M03-05", 1, "Welches Prinzip beschreibt mehrere unabhängige Schutzschichten?", [
  X("Least Privilege", "Least Privilege beschränkt Rechte, nicht Schichten."),
  R("Defense in Depth", "Versagt eine Schicht, greifen weitere."),
  X("Separation of Duties", "Das trennt Aufgaben zwischen Personen."),
  X("Security by Obscurity", "Geheimhaltung ist kein Schichtenkonzept und kein anerkanntes Prinzip."),
], "Organisatorisch, physisch, Netzwerk, Host, Applikation.", "62443-1-1");

F("M03-06", 2, "Eine SPS erfüllt eine Anforderung nicht selbst; eine vorgeschaltete Firewall übernimmt den Schutz. Wie nennt man das?", [
  X("Risikoakzeptanz", "Akzeptanz hieße, das Risiko ohne Maßnahme zu tragen."),
  R("Kompensierende Gegenmaßnahme", "Eine andere Maßnahme gleicht die fehlende Fähigkeit aus."),
  X("Requirement Enhancement", "Ein RE verschärft eine Anforderung, gleicht nichts aus."),
  X("Risikotransfer", "Transfer verlagert Risiko z. B. auf eine Versicherung."),
], "Kompensationen müssen dokumentiert und in der Risikobewertung berücksichtigt werden.", "62443-3-3 / 4-2");

F("M03-07", 2, "Was ist der Unterschied zwischen Residual Risk und Tolerable Risk?", [
  X("Residual ist das Risiko ohne Maßnahmen, Tolerable das nach Maßnahmen", "Das Risiko ohne Maßnahmen heißt unmitigated/inherent risk."),
  R("Residual: nach Maßnahmen; Tolerable: akzeptierte Grenze", "Ziel: Residual ≤ Tolerable."),
  X("Tolerable wird vom Hersteller, Residual vom Integrator bestimmt", "Die Toleranzgrenze legt der Asset Owner fest."),
  X("Beide Begriffe bezeichnen dasselbe", "Es sind zwei verschiedene Größen, die verglichen werden."),
], "Restrisiko wird gegen die vom Asset Owner festgelegte Toleranz verglichen.", "Modul 03, Risiko");

F("M03-08", 3, "Welche Aussagen zu Zonen und Conduits sind richtig? (Mehrfachauswahl)", [
  R("Zonen können Subzonen enthalten", "Verschachtelung ist zulässig."),
  X("Kommunikation innerhalb einer Zone braucht einen Conduit", "Conduits verbinden Zonen; innerhalb einer Zone ist keiner nötig."),
  R("Ein Conduit kann aus Firewall und VPN-Strecke bestehen", "Ein Conduit ist logisch, seine Umsetzung physisch."),
  X("Jedes VLAN ist automatisch eine eigene Zone", "VLANs sind Technik; Zonen ergeben sich aus Anforderungen."),
], "Zonen gruppieren Assets, Conduits gruppieren Kommunikation zwischen Zonen.", "Modul 03");

F("M03-09", 1, "Welches Prinzip besagt, dass Benutzer nur die minimal nötigen Rechte erhalten?", [
  X("Defense in Depth", "Das beschreibt Schutzschichten."),
  R("Least Privilege", "Gilt für Menschen, Prozesse und Netzflüsse."),
  X("Fail-Safe", "Fail-Safe beschreibt sicheres Verhalten bei Ausfall."),
  X("Redundanz", "Redundanz erhöht Verfügbarkeit, beschränkt aber keine Rechte."),
], "Least Privilege gilt auch im Netz: Default-Deny, nur nötige Flüsse.", "62443-1-1");

F("M03-10", 2, "Warum wird Security in der 62443 als Lebenszyklus betrachtet?", [
  X("Weil Zertifikate nach einem Jahr ihre Gültigkeit verlieren", "Zertifikatslaufzeiten sind nicht der Grund."),
  R("Weil sich Bedrohungen, Systeme und Schwachstellen laufend ändern", "Security muss über Design, Betrieb und Stilllegung gepflegt werden."),
  X("Weil die Hardware regelmäßig getauscht werden muss", "OT-Hardware läuft im Gegenteil sehr lange."),
  X("Weil Hersteller Updates über viele Jahre liefern müssen", "Das betrifft nur den Produktlebenszyklus – Security muss auch in Betrieb und Anlage gepflegt werden."),
], "Security ist ein kontinuierlicher Prozess (Plan-Do-Check-Act).", "62443-1-1 / 1-4");
