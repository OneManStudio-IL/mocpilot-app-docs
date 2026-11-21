---
id: Examples
title: Exempel
description: "Exempelprogram i Logikblock för körning, styrning, lampor, ljud, batterivarningar och sensorer."
---

# Exempel {#examples}

Korta program att utgå från. Blocknamnen följer [blockreferensen](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); värden inom parentes är hubben, porten eller ett rapportblock som placerats i ett fack. Indragna rader hamnar inuti ett C-block.

## Kör med en joystick {#drive-with-a-joystick}

Instrumentpanel: joysticken **JOY1**. Drivmotor på port A.

```text
när programmet startar
upprepa alltid
    starta motor vid (joystick JOY1 Y-axel) % hastighet  (Hubb 1, port A)
```

## Styr med en servo {#steer-with-a-servo}

Styrmotor (en vinkelmotor) på port B. Ange dess aktuella position som mittläge och följ sedan joysticken: `× 0.9` gör om joystickens −100…100 till −90…90 grader.

```text
när programmet startar
ställ in relativ position 0  (Hubb 1, port B)
upprepa alltid
    gå till relativ position (joystick JOY1 X-axel × 0.9) vid 100 % hastighet  (Hubb 1, port B)
```

För en styrkuggstång med ändstopp kalibrerar du den först (se [Motorer](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `mitt` och `omfång` är variabler. Efter kalibreringen står kuggstången i mitten, men dess relativa position där är mittvärdet, inte 0, så ställ in den på 0 innan du styr:

```text
när programmet startar
kalibrera kuggstång (mitt) centrum (omfång) grader  (Hubb 1, port B)
ställ in relativ position 0  (Hubb 1, port B)
upprepa alltid
    gå till relativ position ((omfång × joystick JOY1 X-axel) ÷ 100) vid 100 % hastighet  (Hubb 1, port B)
```

## Lampor på en brytare {#lights-on-a-switch}

```text
när switch SWCH1 är växlad aktiverad
    slå på vid 100 % ljusstyrka  (Hubb 1, port C)
när switch SWCH1 är växlad av
    stänga av  (Hubb 1, port C)
```

## Tutknapp {#horn-button}

```text
när knappen BTN1 är tryckt
    ljud Biltuta spela till slut
```

## Batterivarning {#battery-warning}

Monitorn **MNTR1**; knappen blir röd när batteriet är lågt.

```text
när programmet startar
upprepa alltid
    visa (Hubb 1 % batteri) på MNTR1 skärm
    om (Hubb 1 % batteri) < 20 då
        ställ in BTN1 färg till röd
    vänta 5 sekunder
```

## Stanna före ett hinder {#stop-before-an-obstacle}

Technic-avståndssensor på port D, drivmotor på port A.

```text
när programmet startar
upprepa alltid
    om (avstånd cm  (Hubb 1, port D)) < 10 då
        stoppa motor  (Hubb 1, port A)
        ställ in LED-färg till röd  (Hubb 1)
    annars
        starta motor vid (skjutreglage SLDR1) % hastighet  (Hubb 1, port A)
        ställ in LED-färg till grön  (Hubb 1)
```

## Hastighetsgräns med en stegswitch {#speed-limit-on-a-stepper}

Stegswitchen **STPR1** med 4 steg begränsar toppfarten.

```text
när programmet startar
upprepa alltid
    ställ in (hastighetsgräns) till (stegomkopplare STPR1 × 25)
    starta motor vid (joystick JOY1 Y-axel × hastighetsgräns / 100) % hastighet  (Hubb 1, port A)
```

`hastighetsgräns` är en variabel (**Variabler → Skapa en variabel**).

## Startkontroll {#startup-check}

Spärra gasen tills båda hubbarna är anslutna.

```text
när programmet startar
ställ in JOY1 interaktivitet avaktivera
vänta tills (Hubb 1 ansluten) och (Hubb 2 ansluten)
visa "Klar" på MNTR1 skärm
ställ in JOY1 interaktivitet aktivera
```

## Handkontroll {#gamepad}

Ställ in **Gamepadens värdeintervall** på −100…100 på [sidan Handkontroll](/docs/Application/Dashboard/Gamepad) och slå på **Aktivera gamepad-block**.

```text
när programmet startar
upprepa alltid
    starta motor vid (stick vänster Y-axel) % hastighet  (Hubb 1, port A)
    gå till relativ position (stick höger X-axel × 0.9) vid 100 % hastighet  (Hubb 1, port B)
```

## Bil med pedaler {#car-with-pedals}

För en bil som körs med pedaler, växellåda och handbroms, se [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Mer {#more}

- Installera officiella profiler från [katalogen](/docs/Application/Profiles/Catalog) och studera deras program.
- Prova demon av Logikblock på [mocpilot.com](https://mocpilot.com).
