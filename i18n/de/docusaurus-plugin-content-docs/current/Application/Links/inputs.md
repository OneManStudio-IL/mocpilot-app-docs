---
id: Inputs
title: Eingänge
description: "Eingänge der Schnellverknüpfungen: Dashboard-Steuerelemente, das simulierte Fahrzeug, das Gamepad, Hub-Tasten und Hub-Sensoren."
---

import Screenshot from '@site/src/components/Screenshot';

# Eingänge {#inputs}

Jede Zeile beginnt mit einem Eingang. Die Registerkarte **Eingänge** der Palette enthält:

- einen Block pro **Dashboard-Steuerelement**; Steuerelemente mit mehreren Kanälen (Achsen von Joystick und Steuerkreuz, Lenkrad, Pedale, Schalthebel, Handbremse, Blinker) erhalten einen Block pro Kanal;
- die Blöcke **Fahrzeug**, wenn das Dashboard Pedale, einen Schalthebel oder eine Handbremse hat;
- den Block **Gamepad**, wenn Gamepad-Blöcke aktiviert sind;
- einen Block **Hub** pro Hub des Profils (außer Mould King, der keine Tasten oder Sensoren hat).

Ist die Registerkarte leer, steht dort „Fügen Sie Controller auf dem Dashboard oder Hubs unter ‚Meine Hubs‘ hinzu: Sie erscheinen hier“.

<Screenshot name="links-palette-inputs" alt="Die Registerkarte „Eingänge“ der Palette der Schnellverknüpfungen" width={900} />

Alle Einstellungen und Werte jedes Eingangs finden Sie in der Referenz [Eingangsblöcke](/docs/Application/Links/Blocks/InputBlocks).

## Dashboard-Steuerelemente {#dashboard-controls}

Ein Block [Controller](/docs/Application/Links/Blocks/InputBlocks#src-controller) übernimmt ein Steuerelement Ihres Dashboards über seinen Namen (**JOY1**, **SLDR1**, **BTN2**…) und, falls das Steuerelement mehrere hat, den gewünschten **Kanal**:

| Steuerelement | Was die Zeile erhält |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **X-Achse** oder **Y-Achse**, −1…1 |
| [Schieberegler](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [Fahrschalter](/docs/Application/Links/Blocks/InputBlocks#controller-train), [Drehknopf](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | seine Stellung |
| [Lenkrad](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Lenkwinkel** −1…1 oder **Hupe** |
| [Pedale](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Gaspedal** oder **Bremspedal**, 0…1 |
| [Schalthebel](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Gang** oder **Richtung (R − / vorwärts +)** |
| [Handbremse](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Handbremse angezogen** (an/aus) oder **Handbremskraft** |
| [Blinker](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Blinker (links − / rechts +)**, **Linker Blinker**, **Rechter Blinker** oder **Licht** |
| [Steuerkreuz](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Hoch / runter** oder **Links / rechts**: −1, 0 oder +1 |
| [Taste](/docs/Application/Links/Blocks/InputBlocks#controller-button) | an, solange sie gedrückt ist |
| [Schalter](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | an / aus |
| [Schritt-Schalter](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | die aktuelle Stufe |

Wenn Sie auf dem Dashboard ein Steuerelement hinzufügen, umbenennen oder ändern, ziehen die Palette und die Zeilen automatisch nach. Stellen Sie einen Joystick auf **Nur horizontal**, melden Zeilen, die seine Y-Achse verwenden, „… bewegt sich nicht entlang dieser Achse“.

## Fahren wie ein echtes Auto {#drive-like-a-real-car}

Lenkrad, Pedale, Schalthebel und Handbremse liefern ihre rohen Stellungen: Eine Pedal-Zeile lässt den Motor genau so weit laufen, wie das Pedal gedrückt ist. Für ein Modell, das sich wie ein Auto verhält (es beschleunigt mit Trägheit, rollt aus, bremst und fährt in R rückwärts), verwenden Sie stattdessen den Eingang [Fahrzeug](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Er liest Pedale, Schalthebel und Handbremse zusammen und liefert **Geschwindigkeit**, **Motordrehzahl (U/min)**, **Bremsen** oder **Handbremse angezogen** des Fahrzeugs:

- *Fahrzeug (Geschwindigkeit)* → *Motor* → Antriebsmotoren;
- *Lenkrad (Lenkwinkel)* → *Servo* → Lenkung;
- *Fahrzeug (Bremsen)* → *Licht* → Bremslichter;
- *Blinker (Linker Blinker)* → *Licht* → linke Blinkleuchte.

## Gamepad {#gamepad}

Ein einziger Block [Gamepad](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) deckt den ganzen Controller ab; wählen Sie unter **Eingang** einen Stick, einen Trigger oder eine Taste. Aktivieren Sie zuerst **Gamepad-Blöcke aktivieren** auf der [Gamepad-Seite](/docs/Application/Dashboard/Gamepad). Die Beschriftungen richten sich nach **Gamepad-Tastenlayout** (Xbox oder PlayStation).

## Hub-Tasten und Sensoren {#hub-buttons-and-sensors}

Ein Eingang [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) liest die Taste eines Hubs oder einen seiner Sensoren: Akku, Neigung, Beschleunigung, Motorgeschwindigkeit und -position, Abstands- und Farbsensoren an den Ports und mehr. Die Liste zeigt nur, was dieser Hub melden kann. Für Neigung und Beschleunigung stellen Sie **Hub-Ausrichtung** passend zur Lage des Hubs im Modell ein.

Der Wert wird entlang der Zeile auf −1…1 skaliert weitergegeben. Ein Text-**Monitor** direkt hinter einem Sensor zeigt den echten Wert mit Einheit an, etwa „7.85 V“ oder „−12°“.

Typische Anwendungen:

- *Akku* → *Anzeige* (Batteriestand);
- *Abstandssensor* → *Schwelle* (Unter, 20 %) → *Motor für Zeit*: zurückweichen, wenn etwas zu nahe kommt;
- *Taste 1* (Powered Up-Fernbedienung) → *Motor*: mit der echten Fernbedienung fahren.
