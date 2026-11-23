---
id: InputBlocks
title: Eingangsblöcke
description: "Referenz aller Eingänge der Schnellverknüpfungen: Dashboard-Steuerelemente und ihre Kanäle, das Fahrzeug, das Gamepad, Hub-Tasten und Sensoren."
---

import Screenshot from '@site/src/components/Screenshot';

# Eingangsblöcke {#input-blocks}

Jede Zeile beginnt mit einem Eingang. Die Registerkarte **Eingänge** der Palette zeigt die Blöcke, die Ihr Profil gerade verwenden kann: einen Block pro Dashboard-Steuerelement (einen pro Kanal bei Steuerelementen mit mehreren Kanälen), die Blöcke **Fahrzeug**, den Block **Gamepad** und einen Block **Hub** pro Hub. Zur Verwendung: [Eingänge](/docs/Application/Links/Inputs).

Jeder Eingang sendet eines von zwei Signalen entlang der Zeile:

- **Wert**: eine Zahl von −1 bis 1 (0…1 bei Steuerelementen ohne negative Seite);
- **an/aus**: 1 oder 0.

Verarbeitungsblöcke und Aktionen nehmen nur die Signale an, mit denen sie arbeiten können; siehe [Verarbeitungsblöcke](/docs/Application/Links/Blocks/ProcessingBlocks).

## Controller {#src-controller}

Ein Steuerelement Ihres Dashboards, angezeigt mit seinem Namen (**JOY1**, **SLDR1**, **BTN2**…).

- **Controller**: jedes unten aufgeführte Dashboard-Steuerelement. Monitore sind Ausgänge, keine Eingänge.
- **Kanal**: was das Steuerelement liefert, bei Steuerelementen mit mehreren Kanälen. Die Palette bietet einen Block pro Kanal.

Lenkrad, Pedale, Schalthebel, Handbremse, Blinker, Verteilergetriebe und Fahrschalter sind unter [Spezielle Steuerelemente](/docs/Application/Dashboard/SpecialControls) beschrieben.

Wird das Steuerelement vom Dashboard entfernt, meldet die Zeile „Wählen Sie einen Dashboard-Controller“. Gibt es seinen Kanal nicht mehr, meldet sie „Wählen Sie, was … liefert“ (bei einem Joystick: „… bewegt sich nicht entlang dieser Achse“).

### Joystick {#controller-joystick}

- **Kanal**: **X-Achse** oder **Y-Achse**. Ein Joystick, der auf **Nur horizontal (X)** oder **Nur vertikal (Y)** eingestellt ist, bietet nur diese Achse.
- Liefert: Wert −1…1, 0 in der Mitte.

### Schieberegler, vertikaler Schieberegler {#controller-slider}

- Kein Kanal.
- Liefert: Wert 0…1 oder −1…1, wenn **Negative Werte** aktiviert ist.

### Fahrschalter {#controller-train}

Der Fahrschalter (spezielles Steuerelement) funktioniert in den Schnellverknüpfungen wie ein Schieberegler.

- Kein Kanal.
- Liefert: Wert −1…1: die Hebelstellung als Anteil aller Fahrstufen, negativ, wenn der Richtungswender auf rückwärts steht, 0 in Neutralstellung.

### Drehknopf {#controller-knob}

Der Drehknopf der kostenpflichtigen Themes funktioniert in den Schnellverknüpfungen wie ein Schieberegler.

- Kein Kanal.
- Liefert: Wert 0…1 oder −1…1, wenn der Knopf seinen Nullpunkt in der Mitte hat.

### Lenkrad {#controller-wheel}

- **Kanal**: **Lenkwinkel** (Standard) oder **Hupe**.
- Lenkwinkel liefert: Wert −1…1, 0 bei Geradeausfahrt.
- Hupe liefert: Wert 1, solange der Hupenbereich gedrückt ist, sonst 0.

### Pedale {#controller-pedals}

- **Kanal**: **Gaspedal** (Standard) oder **Bremspedal**.
- Liefert: Wert 0…1, wie weit das Pedal gedrückt ist.
- Die Pedale liefern die rohe Pedalstellung. Für ein Auto, das selbstständig beschleunigt, abbremst und rückwärts fährt, verwenden Sie den Eingang [Fahrzeug](#src-vehicle).

### Schalthebel {#controller-gear}

Der manuelle und der automatische Schalthebel (spezielles Steuerelement).

- **Kanal**: **Gang** (Standard) oder **Richtung (R − / vorwärts +)**.
- Gang, Schaltgetriebe: der eingelegte Gang geteilt durch die Zahl der Vorwärtsgänge: höchster Gang 1, Leerlauf 0, Rückwärtsgang negativ. Mit 4 Gängen liefert der 2. Gang 0,5.
- Gang, Automatikgetriebe: dasselbe wie Richtung.
- Richtung liefert: −1 in R, 0 in N (und P), +1 in jedem Vorwärtsgang oder in D.

### Handbremse {#controller-handbrake}

- **Kanal**: **Handbremse angezogen** (Standard) oder **Handbremskraft**.
- Handbremse angezogen liefert: an/aus, an, solange der Hebel eingerastet ist.
- Handbremskraft liefert: Wert 0…1, wie weit der Hebel gezogen ist.

### Blinker {#controller-turnsignals}

Der Blinkerhebel (spezielles Steuerelement).

- **Kanal**: **Blinker (links − / rechts +)** (Standard), **Linker Blinker**, **Rechter Blinker** oder **Licht**.
- Blinker liefert: Wert −1 (links), 0 (aus) oder +1 (rechts).
- Linker Blinker und Rechter Blinker liefern: Wert 1, solange dieser Blinker an ist (blinkend mit der Leuchte, wenn das Blinken des Steuerelements aktiviert ist), sonst 0.
- Licht liefert: Wert 1, solange das Licht an ist, sonst 0.

### Verteilergetriebe {#controller-transfercase}

Das [Verteilergetriebe](/docs/Application/Dashboard/SpecialControls#transfer-case) (spezielles Steuerelement).

- **Kanal**: **Allradantrieb** (Standard), **Geländeuntersetzung**, **Vordere Differenzialsperre**, **Mittlere Differenzialsperre** oder **Hintere Differenzialsperre**.
- Allradantrieb liefert: an/aus, an in 4H und 4L.
- Geländeuntersetzung liefert: an/aus, an in 4L.
- Jede Differenzialsperre liefert: an/aus, an, solange diese Sperre eingelegt ist.
- Die Stellung selbst (2H, 4H, N, 4L) gelangt über die Einstellung **Verteilergetriebe** des Eingangs [Fahrzeug](#src-vehicle) zum Simulator.

### Steuerkreuz {#controller-dpad}

- **Kanal**: **Hoch / runter** oder **Links / rechts**.
- Liefert: Wert +1 (hoch oder rechts), −1 (runter oder links) oder 0.

### Taste {#controller-button}

- Kein Kanal.
- Liefert: an/aus, an, solange sie gedrückt ist.

### Schalter {#controller-switch}

- Kein Kanal.
- Liefert: an/aus.

### Schritt-Schalter {#controller-stepper}

- Kein Kanal.
- Liefert: Wert: die aktuelle Stufe geteilt durch **Schrittanzahl**, sodass die letzte Stufe 1 ist (−1 für die letzte negative Stufe).

## Fahrzeug {#src-vehicle}

Ein simuliertes Auto, das über Pedale, Schalthebel, Handbremse und Verteilergetriebe des Dashboards gesteuert wird: Es beschleunigt, bremst, rollt aus und fährt rückwärts wie ein echtes Fahrzeug, und die Zeile erhält seine Geschwindigkeit oder Motordrehzahl. Die Palette zeigt Fahrzeug-Blöcke, wenn das Dashboard Pedale, einen Schalthebel oder eine Handbremse hat, einen Block pro Ausgang, bereits mit dem jeweils ersten Steuerelement jeder Art verknüpft.

- **Pedale**: die Dashboard-Pedale, die das Fahrzeug steuern (erforderlich).
- **Schalthebel**: **keine** oder ein Schalthebel auf dem Dashboard. Ohne Schalthebel fährt das Fahrzeug rückwärts, wenn Sie im Stand das Bremspedal gedrückt halten.
- **Handbremse**: **keine** oder eine Handbremse auf dem Dashboard.
- **Verteilergetriebe**: **keine** oder ein Verteilergetriebe auf dem Dashboard. In 2H und 4H fährt das Fahrzeug wie ohne Verteilergetriebe, in N fährt es nicht (es rollt aus), in 4L ist seine Geschwindigkeit auf 40 % begrenzt.
- **Fahrzeugtyp**: **Auto** (Standard), **Geländewagen**, **Sportwagen** oder **Lkw**. Die Typen unterscheiden sich in Trägheit und Rückwärtsgeschwindigkeit; der Lkw hat zusätzlich eine Druckluftbremse.
- **Ausgang**:
  - **Geschwindigkeit** (Standard): Wert −1…1, negativ bei Rückwärtsfahrt;
  - **Motordrehzahl (U/min)**: Wert 0…1;
  - **Bremsen**: an/aus, an, solange das Fahrzeug bremst;
  - **Handbremse angezogen**: an/aus.

Probleme: „Wählen Sie die Pedale des Fahrzeugs“, „… ist nicht auf dem Dashboard“.

<Screenshot name="links-vehicle-settings" alt="Einstellungen eines Fahrzeug-Eingangsblocks" width={900} />

## Gamepad {#src-gamepad}

Der mit Ihrem Gerät verbundene Gamecontroller. Der Block ist nur in der Palette, solange **Gamepad-Blöcke aktivieren** eingeschaltet ist (Seite **Gamepad** in der oberen Leiste); sonst meldet die Zeile „Aktivieren Sie Gamepad-Blöcke auf der Gamepad-Seite (obere Leiste)“.

- **Eingang** (Standard **Linker Stick Y**). Die Beschriftungen richten sich nach **Gamepad-Tastenlayout** (Xbox / PlayStation):
  - **Linker Stick Y**, **Linker Stick X**, **Rechter Stick Y**, **Rechter Stick X**: Wert −1…1;
  - **RT** / **R2**, **LT** / **L2** (Trigger): Wert;
  - **A**, **B**, **X**, **Y** / **Kreuz**, **Kreis**, **Quadrat**, **Dreieck**: an/aus;
  - **LB** / **L1**, **RB** / **R1** (Schultertasten): an/aus;
  - **Hoch**, **Runter**, **Links**, **Rechts** (Steuerkreuz): an/aus.

## Hub {#src-hub}

Die eigene Taste eines Hubs oder ein Sensor: am Hub selbst oder an einem seiner Ports. Es gibt einen Hub-Eingang pro Hub des Profils, außer für Mould-King-Hubs, die nur Befehle empfangen.

- **Hub**: ein Hub des Profils.
- **Taste oder Sensor**: nur das, was dieser Hub melden kann (Liste unten).
- **Port**: für Sensoren an einem Port (Motorwerte, Port-Sensoren).
- **Hub-Ausrichtung**: für Neigung und Beschleunigung bei Hubs, die sie ändern können: **Beibehalten** (Standard) oder die Einbaulage des Hubs im Modell.

Ein Sensorwert wird entlang der Zeile durch seinen Vollausschlag geteilt und auf −1…1 begrenzt weitergegeben: Ein Akku mit 50 % liefert 0,5. Ein Text-**Monitor** direkt hinter dem Sensor zeigt den echten Wert mit Einheit.

| Taste oder Sensor | Signal | Einheit, Vollausschlag | Hubs |
|---|---|---|---|
| **Taste 1, 2…** | an/aus | | Hubs mit einer Taste; die Tasten der LEGO® Powered Up-Fernbedienung |
| **Akku** | Wert | %, 100 | Hubs, die ihn melden |
| **Akkuspannung** | Wert | V, 12 | Hubs, die sie melden |
| **Ausgangsspannung** | Wert | V, 12 | BuWizz 2.0 |
| **Temperatur** | Wert | °C, 100 | Hubs, die sie melden |
| **Neigung Nicken** | Wert | °, 90 | Hubs mit Neigungssensor |
| **Neigung Rollen** | Wert | °, 180 | Hubs mit Neigungssensor |
| **Neigung Gieren** | Wert | °, 180 | Hubs mit Gierachse |
| **Beschleunigung X / Y / Z** | Wert | m/s², 19,6 | Hubs mit Beschleunigungssensor |
| **Motorgeschwindigkeit** | Wert | %, 100 | Port; alle Hubs mit Ports |
| **Motorwinkel** | Wert | °, 360 (relativ) | Port; Motoren mit Encoder; nicht SBrick, BuWizz 2.0, WeDo 2.0 |
| **Motorposition** | Wert | °, 180 (absolut) | Port; Winkelmotoren |
| **Motorleistung** | Wert | %, 100 | Port; Robot Inventor |
| **Motorstrom** | Wert | A, 3 | Port; BuWizz 2.0, BuWizz 3.0 Pro |
| **Abstandssensor** | Wert | 250 | Port; nicht SBrick oder BuWizz |
| **Farbsensor** | Wert | Farbnummer, 10 | Port; nicht SBrick, BuWizz oder WeDo 2.0 |
| **Reflektiertes Licht**, **Umgebungslicht** | Wert | %, 100 | Port; nicht SBrick, BuWizz oder WeDo 2.0 |
| **Neigungssensor Nicken / Rollen** | Wert | °, 45 | Port; Neigungssensor von WeDo 2.0 / BOOST; nicht SBrick oder BuWizz |
| **Leistungsmodus** | Wert | 1–4, 4 | BuWizz 2.0 |
| **Verbunden** | an/aus | | alle Hubs |

Ist der Hub verbunden, prüft MOCPilot auch das Gerät am Port: „Port A: kein Motor angeschlossen“, „Port A: Der Motor hat keinen Encoder“, „Port A: kein Abstandssensor angeschlossen“ und so weiter.
