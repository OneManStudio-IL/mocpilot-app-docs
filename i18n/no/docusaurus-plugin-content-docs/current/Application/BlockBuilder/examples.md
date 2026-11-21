---
id: Examples
title: Eksempler
description: "Eksempelprogrammer i Logikkblokker for kjøring, styring, lys, lyder, batterivarsler og sensorer."
---

# Eksempler {#examples}

Korte programmer å starte med. Blokknavnene følger [blokkreferansen](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); verdiene i parentes er huben, porten eller en rapporteringsblokk som er satt inn i et felt. Innrykkede linjer står inni en C-blokk.

## Kjør med en joystick {#drive-with-a-joystick}

Dashboard: joystick **JOY1**. Drivmotor på port A.

```text
når programmet starter
gjenta alltid
    start motor på (joystick JOY1 Y-akse) % hastighet  (Hub 1, port A)
```

## Styr med en servo {#steer-with-a-servo}

Styremotor (en vinkelmotor) på port B. Angi den nåværende posisjonen som midtpunkt, og følg deretter joysticken: `× 0.9` gjør joystickens −100…100 om til −90…90 grader.

```text
når programmet starter
sett relativ posisjon 0  (Hub 1, port B)
gjenta alltid
    gå til relativ posisjon (joystick JOY1 X-akse × 0.9) på 100 % hastighet  (Hub 1, port B)
```

For en styretannstang med endestopp kalibrerer du den først (se [Motorer](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `senter` og `område` er variabler. Etter kalibreringen står tannstangen i midten, men den relative posisjonen der er midtverdien, ikke 0, så sett den til 0 før du styrer:

```text
når programmet starter
kalibrer tannstang (senter) senter (område) grader  (Hub 1, port B)
sett relativ posisjon 0  (Hub 1, port B)
gjenta alltid
    gå til relativ posisjon ((område × joystick JOY1 X-akse) ÷ 100) på 100 % hastighet  (Hub 1, port B)
```

## Lys på en bryter {#lights-on-a-switch}

```text
når bryter SWCH1 er byttet på
    skru på ved 100 % lysstyrke  (Hub 1, port C)
når bryter SWCH1 er byttet av
    skru av  (Hub 1, port C)
```

## Hornknapp {#horn-button}

```text
når knappen BTN1 er trykket
    lyd Bilhorn spill til ferdig
```

## Batterivarsel {#battery-warning}

Monitor **MNTR1**; knappen blir rød når batteriet er lavt.

```text
når programmet starter
gjenta alltid
    vis (Hub 1 % batteri) på MNTR1 skjerm
    hvis (Hub 1 % batteri) < 20 så
        sett BTN1 farge til rød
    vent 5 sekunder
```

## Stopp foran en hindring {#stop-before-an-obstacle}

Technic-avstandssensor på port D, drivmotor på port A.

```text
når programmet starter
gjenta alltid
    hvis (avstand cm  (Hub 1, port D)) < 10 så
        stopp motor  (Hub 1, port A)
        sett LED-farge til rød  (Hub 1)
    ellers
        start motor på (skydder SLDR1) % hastighet  (Hub 1, port A)
        sett LED-farge til grønn  (Hub 1)
```

## Fartsgrense med trinnbryter {#speed-limit-on-a-stepper}

Trinnbryteren **STPR1** med 4 trinn begrenser toppfarten.

```text
når programmet starter
gjenta alltid
    sett (fartsgrense) til (trinnbryter STPR1 × 25)
    start motor på (joystick JOY1 Y-akse × fartsgrense / 100) % hastighet  (Hub 1, port A)
```

`fartsgrense` er en variabel (**Variabler → Lag en variabel**).

## Oppstartskontroll {#startup-check}

Lås gassen til begge hubbene er tilkoblet.

```text
når programmet starter
deaktivere JOY1 interaktivitet
vent til (Hub 1 tilkoblet) og (Hub 2 tilkoblet)
vis "Klar" på MNTR1 skjerm
aktivere JOY1 interaktivitet
```

## Spillkontroller {#gamepad}

Still **Verdiområde for gamepad** til −100…100 på [siden Spillkontroller](/docs/Application/Dashboard/Gamepad) og slå på **Aktiver gamepad-blokker**.

```text
når programmet starter
gjenta alltid
    start motor på (joystick venstre Y-akse) % hastighet  (Hub 1, port A)
    gå til relativ posisjon (joystick høyre X-akse × 0.9) på 100 % hastighet  (Hub 1, port B)
```

## Bil med pedaler {#car-with-pedals}

For en bil som kjøres med pedaler, girkasse og handbrekk, se [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Mer {#more}

- Installer offisielle profiler fra [katalogen](/docs/Application/Profiles/Catalog) og studer programmene deres.
- Prøv demoen av Logikkblokker på [mocpilot.com](https://mocpilot.com).
