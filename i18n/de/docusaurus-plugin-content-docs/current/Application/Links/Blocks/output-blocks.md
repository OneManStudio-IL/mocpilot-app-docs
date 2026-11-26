---
id: OutputBlocks
title: Aktions- und Ausgangsblöcke
description: "Referenz aller Aktionen und Ausgänge der Schnellverknüpfungen: Motor, Servo, Licht, Aktionen für Technic Move, BuWizz und Mould King, Hub, Anzeige, Hub-LED, LED-Matrix, Servos kalibrieren."
---

import Screenshot from '@site/src/components/Screenshot';

# Aktions- und Ausgangsblöcke {#operation-and-output-blocks}

Die Registerkarte **Ausgänge** der Palette enthält die Aktionen und die Ausgänge. Zur Verwendung: [Aktionen und Ausgänge](/docs/Application/Links/Operations).

- Eine **Aktion** legt fest, was passieren soll. Auf sie muss ein Ausgang [Hub](#hub-out) folgen, der festlegt, wo.
- Ein **direkter Ausgang** ([Anzeige](#dash-indicator), [Hub-LED](#hub-led), [LED-Matrix](#hub-matrix), [Servos kalibrieren](#cmd-calibrate)) beendet die Zeile allein; die Zeile darf keine Aktion haben.

**Motor**, **Servo**, **Motor für Zeit** und **Licht** sind immer in der Palette. Die anderen Aktionen erscheinen nur, wenn ein Hub des Profils sie ausführen kann.

„An“ bedeutet im Folgenden ein An/Aus-Signal, das an ist, oder einen Wert von mindestens 0,5 (mit beliebigem Vorzeichen).

## Aktionen für Ports {#operations-for-ports}

### Motor {#op-motor}

Lässt den Motor mit dem Wert des Eingangs laufen: Je weiter Sie drücken, desto schneller; 0 stoppt ihn.

- Nimmt: Wert oder an/aus (an = volle Geschwindigkeit).
- **Beim Stopp**: **Hub-Standard** (Standard), **Ausrollen**, **Bremsen** oder **Position halten**.
- **Hub-Beschleunigung**: **Hub-Standard** (Standard), **Schnell**, **Ausgewogen**, **Sanft**, **Langsam** oder **Sehr langsam**: die eigene Rampe des Hubs. Für Ihre eigene Rampe verwenden Sie [Sanft](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Blockiererkennung**: **Hub-Standard** (Standard), **An** oder **Aus**.
- Hubs: jeder Hub mit Ports. **Beim Stopp** und **Hub-Beschleunigung** brauchen einen Hub mit Positionssteuerung (nicht SBrick, BuWizz 2.0, WeDo 2.0 oder Mould King); **Blockiererkennung** braucht Robot Inventor. Beim Technic Move Hub treibt Motor im Modus **Fahrzeugprofil** das Auto an und im Modus **Ports** die Motoren `A`–`C` ([Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)).

### Servo {#op-servo}

Lenkt mit einem Motor mit Encoder: Der Eingang −1…1 dreht den Motor auf *Mitte + Wert × Winkel*, und 0 bringt ihn zurück zur Mitte.

- Nimmt: Wert oder an/aus.
- **Kalibrierung**: **Manuell** (Standard) oder **Auto**.
- **Winkel**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 Umdrehung, ±2 Umdrehungen, ±3 Umdrehungen oder ±5 Umdrehungen (Standard ±90°). Nur Manuell.
- **Mitte**: −20°, −10°, −5°, 0°, +5°, +10° oder +20° (Standard 0°). Nur Manuell.
- **Drehgeschwindigkeit**: 25, 50, 75 oder 100 % (Standard 100 %).
- Manuell: Der Nullpunkt ist dort, wo der Motor beim Einschalten stand, oder die Position, die Sie mit **Als Nullpunkt setzen** festlegen (vorher mit **◀ 5°** / **5° ▶** nachjustieren).
- Auto: Bei jedem Start dreht der Motor zu beiden Endanschlägen; die Mitte wird zum Nullpunkt und der Stellweg zum Winkel. **Jetzt kalibrieren** führt das sofort aus. Die Lenkung muss Endanschläge haben.
- Hubs und Ports: ein Motor mit Encoder an einem Hub mit Positionssteuerung (nicht SBrick, BuWizz 2.0, WeDo 2.0 oder Mould King). Beim Technic Move Hub im Modus **Fahrzeugprofil** dreht Servo die Lenkzahnstange des Hubs, die der Hub selbst kalibriert; im Modus **Ports** verwenden Sie Port `C` mit der Kalibrierung **Auto**.

<Screenshot name="links-servo-settings" alt="Einstellungen eines Servo-Blocks" width={900} />

### Motor für Zeit {#op-timed}

Lässt den Motor jedes Mal, wenn der Eingang einschaltet, eine festgelegte Zeit laufen. Geschwindigkeit und Richtung ergeben sich aus dem Eingangswert in diesem Moment.

- Nimmt: Wert oder an/aus.
- **Zeit**: 0,5, 1, 2, 3, 5 oder 10 s (Standard 1 s).
- Hubs: jeder Hub mit Ports; beim Technic Move Hub im Modus **Fahrzeugprofil** treibt er das Auto an.

### Um Grad drehen {#op-degrees}

Dreht den Motor jedes Mal, wenn der Eingang einschaltet, um einen festgelegten Winkel. Ein negativer Eingang dreht ihn in die andere Richtung.

- Nimmt: Wert oder an/aus.
- **Grad**: 45°, 90°, 180°, 1 Umdrehung, 2 Umdrehungen, 3 Umdrehungen, 5 Umdrehungen oder 10 Umdrehungen (Standard 1 Umdrehung).
- **Geschwindigkeit**: 25, 50, 75 oder 100 % (Standard 50 %).
- Hubs und Ports: ein Motor mit Encoder an einem Hub mit Positionssteuerung.

### Zu Position fahren {#op-goto}

Dreht den Motor auf eine absolute Position, wenn der Eingang einschaltet, und auf eine andere, wenn er ausschaltet. Er nimmt den kürzesten Weg.

- Nimmt: Wert oder an/aus.
- **Position bei an**: 0°, 45°, 90°, 135°, 180°, 225°, 270° oder 315° (Standard 90°).
- **Position bei aus**: **Bleiben** oder eine der gleichen Positionen (Standard 0°).
- **Geschwindigkeit**: 25, 50, 75 oder 100 % (Standard 50 %).
- Hubs und Ports: ein Winkelmotor (absolute Position) an einem Hub mit Positionssteuerung.

### Licht {#op-light}

Steuert LEGO®-Lichter an einem Port.

- Nimmt: Wert oder an/aus. Bei einem Wert folgt die Helligkeit ihm (−1 und 1 sind beide volle Helligkeit).
- **Helligkeit**: 25, 50, 75 oder 100 % (Standard 100 %).
- **Blinken: an**: **Kein Blinken** (Standard), 0,25, 0,5, 1 oder 2 s: wie lange das Licht bei jedem Blinken an bleibt.
- **Blinken: aus**: **Wie „an“** (Standard), 0,25, 0,5, 1 oder 2 s: wie lange es aus bleibt.
- Hubs: jeder Hub mit Ports außer WeDo 2.0. Beim Technic Move Hub schaltet Licht im Modus **Fahrzeugprofil** die Beleuchtung des Autos und im Modus **Ports** die Lichter `1`–`6` einzeln.

### Portfarbe {#op-portcolor}

Stellt die Farbe der Port-LEDs eines BuWizz 3.0 Pro ein.

- Nimmt: Wert oder an/aus.
- **Farbe**: **Aus der Liste** (Standard) oder **RGB**.
- **Farbe bei an** (Standard Rot) und **Farbe bei aus** (Standard Aus): Aus, Rosa, Lila, Blau, Hellblau, Hellgrün, Grün, Gelb, Orange, Rot, Weiß.
- **Rot**, **Grün**, **Blau** (RGB): 0, 32, 64, 128, 192 oder 255 (Standard 255, 0, 0).
- Hubs und Ports: BuWizz 3.0 Pro, Ports 1–4. Die LEDs gehen aus, wenn das Programm stoppt.

### Sensorlichter {#op-sensorlights}

Lässt die vier Segmente um die „Augen“ des Technic-Abstandssensors leuchten, solange der Eingang an ist.

- Nimmt: Wert oder an/aus.
- **Lichter**: **Alle** (Standard), **Oben**, **Unten**, **Links**, **Rechts** oder **Diagonal**.
- **Helligkeit**: 25, 50, 75 oder 100 % (Standard 100 %).
- Hubs und Ports: Robot Inventor, SPIKE Prime und Technic Hub, ein Port mit dem Abstandssensor. Die Lichter gehen aus, wenn das Programm stoppt.

### Farbsensor-Lichter {#op-colorlights}

Lässt die drei Lichter um die Linse des Technic-Farbsensors (des SPIKE-Farbsensors) leuchten, solange der Eingang an ist.

- Nimmt: Wert oder an/aus.
- **Lichter**: **Alle** (Standard), 1, 2, 3, 1 + 2, 2 + 3 oder 1 + 3.
- **Helligkeit**: 25, 50, 75 oder 100 % (Standard 100 %).
- Hubs und Ports: Technic Hub, der Port mit dem Farbsensor.
- Solange seine Lichter an sind, misst der Sensor nichts. Schaltet der Eingang aus oder stoppt das Programm, gehen die Lichter aus und der Sensor misst wieder Farben. Eine Zeile, die den Farbsensor an einem Port liest, den eine andere Zeile beleuchtet, ist ein Problem („Zeile 2 beleuchtet den Farbsensor an Port A: ein leuchtender Sensor misst nichts“).

## Aktionen für den ganzen Hub {#operations-for-the-whole-hub}

Der Hub-Block nach diesen Aktionen hat keine Ports.

### Bremsen {#op-brake}

Bremst das Auto, solange der Eingang an ist.

- Nimmt: Wert oder an/aus. Keine Einstellungen.
- Hubs: Technic Move.

### Boost {#op-boost}

Schaltet den Hub in seinen Leistungsmodus Boost, solange der Eingang an ist, und zurück auf normal, wenn er ausschaltet.

- Nimmt: Wert oder an/aus. Keine Einstellungen.
- Hubs: Technic Move.

### Kraftimpuls {#op-pulse}

Sendet jedes Mal, wenn der Eingang einschaltet, einen Kraftimpuls: Die Motoren laufen etwa zwei Sekunden lang mit maximaler Leistung.

- Nimmt: Wert oder an/aus. Keine Einstellungen.
- Hubs: Technic Move mit der Konfiguration **Batmobile™ Tumbler**; siehe [Konfigurationen des Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Leistungsmodus {#op-powermode}

Stellt den Leistungsmodus eines BuWizz 2.0 ein, wenn der Eingang einschaltet, und, falls Sie einen wählen, wenn er ausschaltet.

- Nimmt: Wert oder an/aus.
- **Modus bei an**: **Langsam**, **Normal** (Standard), **Schnell** oder **Ludicrous**.
- **Modus bei aus**: **Beibehalten** (Standard) oder einer der Modi.
- Hubs: BuWizz 2.0.

### Kanal {#op-channel}

Wechselt den Steuerkanal eines Mould-King-Hubs, wenn der Eingang einschaltet, und, falls Sie einen wählen, wenn er ausschaltet.

- Nimmt: Wert oder an/aus.
- **Kanal bei an**: **A** (Standard), **B** oder **C**.
- **Kanal bei aus**: **Beibehalten** (Standard), **A**, **B** oder **C**.
- Hubs: Mould King 4.0 und 6.0.

## Ausgänge {#outputs}

### Hub {#hub-out}

Wo die Aktion stattfindet: ein Hub und seine Ports. Es gibt einen Hub-Block pro Hub des Profils.

- **Hub**: ein Hub des Profils.
- **Ports**: ein oder mehrere Ports dieses Hubs (A–D bei den meisten Hubs und bei SBrick, A–F bei Robot Inventor und Mould King 6.0, 1–4 bei BuWizz 2.0, 1–4 sowie A und B bei BuWizz 3.0 Pro). Ein Port kann nur zu einer Zeile gehören.
- Nimmt: eine Aktion. Technic Move Hubs im Modus **Fahrzeugprofil** und Aktionen für den ganzen Hub haben keine Ports. Im Modus **Ports** hat ein Technic Move Hub die Ports A–C sowie die Lichter 1–6 für **Licht**.
- Mehr: [Hub-Block und Ports](/docs/Application/Links/HubsAndPorts).

### Anzeige {#dash-indicator}

Zeigt den Wert unverändert auf einem Dashboard-Monitor an.

- Nimmt: Wert oder an/aus, ohne Aktion davor.
- **Dashboard-Anzeige**: ein **Textmonitor** (Monitor), ein **Wertmonitor** (Batteriestand, Geschwindigkeitsmesser) oder ein **Neigungsmonitor** auf dem Dashboard.
- **Achse**: **Neigung X** oder **Neigung Y**, nur für einen Neigungsmonitor (eine Zeile pro Achse).
- Ein Textmonitor direkt hinter einem Hub-Sensor zeigt den echten Wert mit Einheit.

### Hub-LED {#hub-led}

Die farbige Statusleuchte des Hubs: eine Farbe, solange der Eingang an ist, eine andere, solange er aus ist.

- Nimmt: Wert oder an/aus, ohne Aktion davor.
- **Hub**: ein Hub mit Farb-LED.
- **Farbe**: **Aus der Liste** (Standard) oder **RGB**.
- **Farbe bei an** (Standard Rot) und **Farbe bei aus** (Standard Aus): Aus, Rosa, Lila, Blau, Hellblau, Hellgrün, Grün, Gelb, Orange, Rot, Weiß.
- **Rot**, **Grün**, **Blau** (RGB): 0, 32, 64, 128, 192 oder 255 (Standard 255, 0, 0).
- Hubs: LEGO®-Hubs (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, die Powered Up-Fernbedienung); nicht BuWizz, SBrick oder Mould King.

### LED-Matrix {#hub-matrix}

Die Lichtmatrix des Hubs.

- Nimmt: Wert oder an/aus, ohne Aktion davor.
- **Hub**: ein Hub mit LED-Matrix.
- **Anzeigen**: **Pegelbalken** (Standard; die Reihen leuchten mit dem Wert von unten auf), **Zahl** (der Wert von −100 bis 100) oder **Bild bei an**.
- **Bild**: **Herz** (Standard), **Lächeln**, **Traurig**, **Häkchen**, **Kreuz**, **Pfeil hoch**, **Pfeil runter**, **Pfeil links**, **Pfeil rechts** oder **Alle an**.
- **Ausrichtung**: **Beibehalten** (Standard), **Aufrecht**, **Kopfüber**, **Links** oder **Rechts**.
- Hubs: Robot Inventor. Die Matrix wird gelöscht, wenn das Programm stoppt.

### Servos kalibrieren {#cmd-calibrate}

Jedes Mal, wenn der Eingang einschaltet, kalibriert sich jedes [Servo](#op-servo) im Modus **Auto** im Programm neu.

- Nimmt: Wert oder an/aus, ohne Aktion davor. Keine Einstellungen.
- Das Programm muss eine fertige Servo-Zeile im Modus Auto haben, sonst meldet die Zeile „Kein Servo im Kalibriermodus ‚Auto‘ in diesem Programm“.
