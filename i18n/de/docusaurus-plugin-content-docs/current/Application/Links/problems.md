---
id: Problems
title: Ausführen und Probleme beheben
description: "Problembereich, rote Rahmen, Live-Werte und häufige Meldungen der Schnellverknüpfungen."
---

import Screenshot from '@site/src/components/Screenshot';

# Ausführen und Probleme beheben {#running-and-fixing-problems}

## Ist alles bereit? {#is-everything-ready}

Die Schaltfläche **Probleme** in der oberen Leiste des Editors (auf einem Computer direkt vor **Start**) zeigt:

- ein **grünes Häkchen**: „Alle Zeilen sind bereit“;
- ein **rotes „!“**: „Probleme: N“.

Auf einem Computer steht der Text auf der Schaltfläche; in einem schmalen Fenster bleiben nur das Symbol und die Anzahl der Probleme. Auf Smartphone und Tablet zeigt die Schaltfläche das Symbol, die Anzahl steht in einem roten Abzeichen.

Tippen Sie darauf, um den Problembereich zu öffnen (auf dem Telefon ein Seitenbereich, auf Tablet oder Computer ein Menü). Er listet „Zeile N — Grund“ auf; tippen Sie auf einen Eintrag, um zu dieser Zeile zu springen. Der Block, der das Problem verursacht, hat einen **roten Rahmen**. Ist alles in Ordnung, steht im Bereich „Jede eingeschaltete Zeile kann laufen.“

<Screenshot name="links-problems" alt="Problembereich mit einer Zeile, die nicht bereit ist" width={900} />

Zeilen mit Problemen laufen nicht; die übrigen Zeilen schon.

## Häufige Meldungen {#common-messages}

| Meldung | Was zu tun ist |
|---|---|
| Ziehen Sie einen Eingang und einen Ausgang (einen Hub oder eine Dashboard-Anzeige) in die Zeile | die Zeile ist leer |
| Fügen Sie am Anfang der Zeile einen Eingang hinzu | ziehen Sie zuerst ein Steuerelement, das Fahrzeug, das Gamepad oder einen Hub-Eingang hinein |
| Fügen Sie einen Ausgang hinzu: einen Hub oder eine Dashboard-Anzeige | schließen Sie die Zeile mit einem Ausgang ab |
| Fügen Sie vor dem Hub eine Aktion hinzu: Motor, Servo, Licht | vor einem Hub-Ausgang muss eine Aktion stehen |
| Wählen Sie mindestens einen Port am Hub | tippen Sie auf einen Port-Chip im Hub-Block |
| Wählen Sie einen Dashboard-Controller | tippen Sie auf den Eingangsblock und wählen Sie ein Steuerelement |
| … bewegt sich nicht entlang dieser Achse | der Joystick hat nur eine Achse: Wählen Sie die andere Achse oder ändern Sie den Joystick |
| Wählen Sie, was … liefert | das Steuerelement hat diesen Kanal nicht mehr: Wählen Sie einen aus |
| Wählen Sie die Pedale des Fahrzeugs | der Eingang Fahrzeug braucht Pedale auf dem Dashboard |
| … ist nicht auf dem Dashboard | der für das Fahrzeug gewählte Schalthebel oder die Handbremse wurde entfernt |
| „…“ funktioniert nicht mit diesem Controller | dieser Verarbeitungsblock passt nicht zum Signal |
| Port A: Dieses Gerät kann nicht als Servo arbeiten (ein Motor mit Encoder ist nötig) | verwenden Sie einen Motor mit Encoder oder eine andere Aktion |
| Port A hat einen Sensor, keinen Motor | prüfen Sie, was am Port angeschlossen ist |
| Port A wird auch in Zeile 2 verwendet | jeder Port kann nur zu einer Zeile gehören |
| Aktivieren Sie Gamepad-Blöcke auf der Gamepad-Seite (obere Leiste) | öffnen Sie **Gamepad** und aktivieren Sie **Gamepad-Blöcke aktivieren** |
| Die Anzeige zeigt den Wert unverändert: Entfernen Sie die Aktion | eine Anzeige-Zeile hat keine Aktion |
| Die Kalibrierung braucht keine Aktion: Entfernen Sie sie | eine Zeile mit Servos kalibrieren hat keine Aktion |
| Wählen Sie einen Hub mit Farb-LED (LEGO-Hubs) | Hub-LED funktioniert nur mit LEGO®-Hubs |
| Portfarben gibt es nur beim BuWizz 3 | Portfarbe braucht einen BuWizz 3.0 Pro |
| Kein Servo im Kalibriermodus „Auto“ in diesem Programm | Servos kalibrieren braucht ein Servo im Modus Auto |
| Dieser Block erfordert eine neuere App-Version | das Profil wurde mit einer neueren Version erstellt: Aktualisieren Sie MOCPilot |
| Die Zeile ist ausgeschaltet | schalten Sie sie im Zeilenmenü ein |

## Live-Werte {#live-values}

Während das Programm läuft, zeigt jede Verbindungsstelle zwischen Blöcken den Wert, der durch sie fließt. Bewegen Sie ein Steuerelement und verfolgen Sie den Wert entlang der Zeile:

- am Eingang ändert sich nichts: Das Steuerelement oder Gamepad sendet nichts; prüfen Sie Kanal oder Achse;
- der Wert ändert sich, aber der Motor bewegt sich nicht: Prüfen Sie den Verbindungspunkt des Hubs und den Port;
- der Wert ist nach **Begrenzung** oder **Totzone** klein: Passen Sie deren Einstellungen an.

<Screenshot name="links-live-values" alt="Ein laufendes Programm der Schnellverknüpfungen mit Live-Werten an den Verbindungsstellen" width={900} />

## Das Modell bewegt sich nicht {#the-model-does-not-move}

1. Ist der Hub verbunden? Prüfen Sie **Meine Hubs** und den Verbindungspunkt am Hub-Block.
2. Ist der richtige Port gewählt? Sind die Motoren dort angeschlossen, wo Sie denken?
3. Ist die Zeile eingeschaltet und ohne roten Rahmen?
4. Läuft das Programm (**Start**)?
5. Ist der Akku geladen? Fügen Sie eine Zeile *Akku → Anzeige* hinzu, um ihn im Blick zu behalten.

Mehr dazu unter [Fehlerbehebung](/docs/Help/Troubleshooting).
