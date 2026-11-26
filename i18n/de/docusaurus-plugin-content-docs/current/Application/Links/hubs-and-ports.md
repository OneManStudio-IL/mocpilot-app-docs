---
id: HubsAndPorts
title: Hub-Block und Ports
description: "Der Hub-Block der Schnellverknüpfungen, die Wahl der Ports, Port-Prüfungen und die Frage nach belegten Ports."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub-Block und Ports {#hub-block-and-ports}

Der Ausgang [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) beendet eine Zeile nach einer Aktion. Es gibt einen Hub-Block pro Hub unter **Meine Hubs**, fügen Sie Ihre Hubs also zuerst dort hinzu. Bis dahin steht auf der Registerkarte „Fügen Sie Hubs unter ‚Meine Hubs‘ oder Anzeigen auf dem Dashboard hinzu: Sie erscheinen hier“.

## Was der Hub-Block zeigt {#what-the-hub-block-shows}

- den Namen des Hubs und einen **Verbindungspunkt** (verbunden oder nicht);
- die **Ports** als Chips: A, B, C, D… bei LEGO®-Hubs und SBrick (A–F bei Robot Inventor und Mould King 6.0), 1–4 bei BuWizz 2.0, 1–4 sowie A und B bei BuWizz 3.0 Pro;
- einen Untertitel: „Ports A, B“, „Ports wählen“, „ganzer Hub“ (nach einer Aktion für den ganzen Hub) oder „Antrieb, Lenkung, Licht“ (Technic Move im Modus **Fahrzeugprofil**).

## Ports wählen {#choose-ports}

Tippen Sie auf einen Port-Chip, um ihn zu verwenden; tippen Sie erneut, um ihn freizugeben. Eine Zeile kann **mehrere Ports** gleichzeitig ansteuern, zum Beispiel zwei Antriebsmotoren an A und B.

Sollen sich zwei Motoren gegenläufig drehen? Erstellen Sie zwei Zeilen mit demselben Eingang und fügen Sie in einer davon **Umkehren** hinzu.

## Ein Port, eine Zeile {#one-port-one-row}

Ein Port gehört zu einer Zeile. Wählen Sie einen Port, den bereits eine andere Zeile verwendet, fragt MOCPilot:

> **Port wird bereits verwendet**: „Technic Hub“: Port A wird in Zeile 2 verwendet (Motor). In dieser Zeile verwenden? Die andere Zeile verliert diesen Port und steuert ihn nicht mehr.

**In dieser Zeile verwenden** verschiebt den Port; **Abbrechen** lässt ihn, wo er war. Ein Port, den zwei Zeilen verwenden (zum Beispiel in einer alten Datei), wird als Problem gemeldet: „Port A wird auch in Zeile 2 verwendet“.

<Screenshot name="port-in-use" alt="Dialog „Port wird bereits verwendet“" width={700} />

## Port-Prüfungen {#port-checks}

Ist der Hub verbunden, weiß MOCPilot, was an jedem Port angeschlossen ist, und prüft, ob die Aktion passt:

| Problem | Bedeutung |
|---|---|
| „Port A: Dieses Gerät kann nicht als Servo arbeiten (ein Motor mit Encoder ist nötig)“ | Servo und Um Grad drehen brauchen einen Motor mit Encoder |
| „Port A: Der Motor hat keine absolute Position (nur Winkelmotoren)“ | Zu Position fahren braucht einen Winkelmotor |
| „Port A hat einen Sensor, keinen Motor“ | das Gerät am Port ist ein Sensor |
| „Port A nimmt nur einfache Geschwindigkeitsbefehle an: keine Positionssteuerung“ | dieser Port kann keine Positionen steuern |
| „Port A hat keine LED: Verwenden Sie die Ports 1-4“ | Portfarbe funktioniert nur an den Ports 1–4 des BuWizz 3.0 Pro |
| „Sensorlichter: Wählen Sie einen Port, den mit dem Abstandssensor“ | Sensorlichter nimmt genau einen Port |
| „Port A: kein Farbsensor angeschlossen“ | Farbsensor-Lichter und die Eingänge Farbton, Farbsättigung und Farbhelligkeit brauchen einen Farbsensor am Port |

Aktionen, die ein Hub nicht ausführen kann, werden für ihn nicht angeboten. Wechseln Sie eine Zeile auf einen anderen Hub, nennt die Zeile die Aktion, die nicht passt, zum Beispiel „Bremse: nur Technic Move (… hat keinen Bremsbefehl)“.

## Technic Move Hub {#technic-move-hub}

Der Technic Move Hub (in den ferngesteuerten LEGO® Technic-Autos) kann auf zwei Arten gesteuert werden. Wählen Sie eine mit **Steuerung** im Fenster des Hub-Blocks: **Fahrzeugprofil** (Standard) oder **Ports**. Die Wahl gehört zum Hub, daher verwenden alle Hub-Blöcke dieses Hubs dieselbe.

- **Fahrzeugprofil**: Der Hub wird nach Funktion gesteuert, nicht nach Port. Sein Hub-Block zeigt **Antrieb, Lenkung, Licht** und hat keine Ports. Verwenden Sie **Motor** oder **Motor für Zeit** zum Fahren, **Servo** zum Lenken, **Licht** für die Beleuchtung sowie **Bremsen**, **Boost** und **Kraftimpuls** für die Sonderfunktionen. Antrieb, Lenkung, Licht, Bremse und Boost können jeweils nur von einer Zeile verwendet werden („Antrieb dieses Technic Move wird bereits in Zeile 2 gesteuert“).
- **Ports**: Der Hub arbeitet wie die anderen Hubs mit Ports. Seine Motoren sind die Ports `A`, `B` (die Antriebsmotoren) und `C` (der Lenkmotor): **Motor**, **Motor für Zeit**, **Servo** (mit der Kalibrierung **Auto** an `C`), **Um Grad drehen**, **Zu Position fahren**, **Beim Stopp** und **Hub-Beschleunigung** funktionieren an ihnen. Seine sechs Lichter sind die Ports `1`–`6` von **Licht**-Zeilen. Ein [Hub-Eingang](/docs/Application/Links/Blocks/InputBlocks#src-hub) liest Geschwindigkeit und Winkel der Motoren. **Bremsen**, **Boost** und **Kraftimpuls** funktionieren nur im Modus **Fahrzeugprofil**.

Eine Zeile, die nicht zum Modus des Hubs passt, ist ein Problem, das sagt, was umzustellen ist: „… wird über sein Fahrzeugprofil gesteuert: stelle den Hub dafür auf „Ports““ oder „… wird Port für Port gesteuert: stelle den Hub dafür auf „Fahrzeugprofil““. Profile, die vor dieser Wahl erstellt wurden, öffnen sich im Modus **Fahrzeugprofil**.

Um eine Fahrzeugkonfiguration in den Hub zu laden (Porsche, Lamborghini, Batmobile), verwenden Sie **Meine Hubs → Konfiguration auswählen**. Siehe [Konfigurationen des Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Mould-King-Hubs empfangen nur Befehle, daher haben sie keine Eingänge und geben keine Rückmeldung über die Verbindung. Um den Steuerkanal des Hubs zu wechseln, verwenden Sie die Aktion [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
