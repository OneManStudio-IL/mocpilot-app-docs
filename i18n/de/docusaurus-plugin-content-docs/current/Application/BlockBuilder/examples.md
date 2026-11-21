---
id: Examples
title: Beispiele
description: "Beispielprogramme in den Logikblöcken zum Fahren, Lenken, für Licht, Töne, Akkuwarnungen und Sensoren."
---

# Beispiele {#examples}

Kurze Programme für den Einstieg. Die Blocknamen folgen der [Blockreferenz](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); Werte in Klammern sind der Hub, der Port oder ein Werteblock in einem Eingabefeld. Eingerückte Zeilen stehen innerhalb eines C-Blocks.

## Mit einem Joystick fahren {#drive-with-a-joystick}

Dashboard: Joystick **JOY1**. Antriebsmotor an Port A.

```text
wenn das Programm startet
immer wiederholen
    Motor starten bei (Joystick JOY1 Y-Achse) % Geschwindigkeit  (Hub 1, Port A)
```

## Mit einem Servo lenken {#steer-with-a-servo}

Lenkmotor (ein Winkelmotor) an Port B. Legen Sie seine aktuelle Position als Mitte fest und folgen Sie dann dem Joystick: `× 0.9` macht aus −100…100 des Joysticks −90…90 Grad.

```text
wenn das Programm startet
relative Position einstellen 0  (Hub 1, Port B)
immer wiederholen
    zur relativen Position gehen (Joystick JOY1 X-Achse × 0.9) bei 100 % Geschwindigkeit  (Hub 1, Port B)
```

Eine Lenkzahnstange mit Endanschlägen kalibrieren Sie zuerst (siehe [Motoren](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `center` und `range` sind Variablen. Nach der Kalibrierung steht die Zahnstange in der Mitte, ihre relative Position dort ist aber der Mittelwert, nicht 0; setzen Sie sie deshalb vor dem Lenken auf 0:

```text
wenn das Programm startet
Zahnstange kalibrieren (center) Mitte (range) Grad  (Hub 1, Port B)
relative Position einstellen 0  (Hub 1, Port B)
immer wiederholen
    zur relativen Position gehen ((range × Joystick JOY1 X-Achse) ÷ 100) bei 100 % Geschwindigkeit  (Hub 1, Port B)
```

## Licht an einem Schalter {#lights-on-a-switch}

```text
wenn Schalter SWCH1 ist umgeschaltet auf
    einschalten bei 100 % Helligkeit  (Hub 1, Port C)
wenn Schalter SWCH1 ist umgeschaltet aus
    ausschalten  (Hub 1, Port C)
```

## Hupen-Taste {#horn-button}

```text
wenn der Knopf BTN1 gedrückt
    Ton Autohupe spiele bis zum Ende
```

## Akkuwarnung {#battery-warning}

Monitor **MNTR1**; die Taste wird rot, wenn der Akku schwach ist.

```text
wenn das Programm startet
immer wiederholen
    zeigen (Hub 1 % Batterie) auf MNTR1 Monitor
    wenn (Hub 1 % Batterie) < 20 dann
        setze BTN1 Farbe zu rot
    warten 5 Sekunden
```

## Vor einem Hindernis anhalten {#stop-before-an-obstacle}

Technic-Abstandssensor an Port D, Antriebsmotor an Port A.

```text
wenn das Programm startet
immer wiederholen
    wenn (Entfernung cm  (Hub 1, Port D)) < 10 dann
        Motor stoppen  (Hub 1, Port A)
        LED-Farbe setzen auf rot  (Hub 1)
    sonst
        Motor starten bei (Schieberegler SLDR1) % Geschwindigkeit  (Hub 1, Port A)
        LED-Farbe setzen auf grün  (Hub 1)
```

## Geschwindigkeitsbegrenzung mit einem Schritt-Schalter {#speed-limit-on-a-stepper}

Der Schritt-Schalter **STPR1** mit 4 Stufen begrenzt die Höchstgeschwindigkeit.

```text
wenn das Programm startet
immer wiederholen
    setze (speed limit) auf (Stellschalter STPR1 × 25)
    Motor starten bei (Joystick JOY1 Y-Achse × speed limit / 100) % Geschwindigkeit  (Hub 1, Port A)
```

`speed limit` ist eine Variable (**Variablen → Eine Variable erstellen**).

## Startprüfung {#startup-check}

Den Gashebel sperren, bis beide Hubs verbunden sind.

```text
wenn das Programm startet
setze JOY1 Interaktivität deaktivieren
warten bis (Hub 1 verbunden) und (Hub 2 verbunden)
zeigen "Bereit" auf MNTR1 Monitor
setze JOY1 Interaktivität aktivieren
```

## Gamepad {#gamepad}

Stellen Sie auf der [Gamepad-Seite](/docs/Application/Dashboard/Gamepad) **Wertebereich des Gamepads** auf −100…100 und aktivieren Sie **Gamepad-Blöcke aktivieren**.

```text
wenn das Programm startet
immer wiederholen
    Motor starten bei (Stick links Y-Achse) % Geschwindigkeit  (Hub 1, Port A)
    zur relativen Position gehen (Stick rechts X-Achse × 0.9) bei 100 % Geschwindigkeit  (Hub 1, Port B)
```

## Auto mit Pedalen {#car-with-pedals}

Für ein Auto, das mit Pedalen, Getriebe und Handbremse gesteuert wird, siehe [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Mehr {#more}

- Installieren Sie offizielle Profile aus dem [Katalog](/docs/Application/Profiles/Catalog) und schauen Sie sich ihre Programme an.
- Probieren Sie die Demo der Logikblöcke auf [mocpilot.com](https://mocpilot.com) aus.
