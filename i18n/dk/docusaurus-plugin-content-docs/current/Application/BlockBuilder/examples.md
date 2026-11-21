---
id: Examples
title: Eksempler
description: "Eksempelprogrammer i Logikblokke til kørsel, styring, lys, lyde, batteriadvarsler og sensorer."
---

# Eksempler {#examples}

Korte programmer at starte ud fra. Bloknavnene følger [blokoversigten](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); værdier i parentes er hubben, porten eller en rapporteringsblok, der er sat ind i et felt. Indrykkede linjer ligger inde i en C-blok.

## Kør med et joystick {#drive-with-a-joystick}

Dashboard: joystick **JOY1**. Drivmotor på port A.

```text
når programmet starter
gentag altid
    start motor ved (joystick JOY1 Y-akse) % hastighed  (Hub 1, port A)
```

## Styr med en servo {#steer-with-a-servo}

Styremotor (en vinkelmotor) på port B. Indstil dens aktuelle position som midten, og følg derefter joysticket: `× 0.9` gør joystickets −100…100 til −90…90 grader.

```text
når programmet starter
indstil relativ position 0  (Hub 1, port B)
gentag altid
    gå til relativ position (joystick JOY1 X-akse × 0.9) ved 100 % hastighed  (Hub 1, port B)
```

Har styretøjet en tandstang med endestop, så kalibrer den først (se [Motorer](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `center` og `område` er variabler. Efter kalibreringen står tandstangen i midten, men dens relative position dér er centerværdien, ikke 0, så sæt den til 0, før du styrer:

```text
når programmet starter
kalibrer tandstang (center) center (område) grader  (Hub 1, port B)
indstil relativ position 0  (Hub 1, port B)
gentag altid
    gå til relativ position ((område × joystick JOY1 X-akse) ÷ 100) ved 100 % hastighed  (Hub 1, port B)
```

## Lys på en kontakt {#lights-on-a-switch}

```text
når kontakt SWCH1 er omstillet aktiveret
    tænde på 100 % lysstyrke  (Hub 1, port C)
når kontakt SWCH1 er omstillet off
    sluk  (Hub 1, port C)
```

## Hornknap {#horn-button}

```text
når knappen BTN1 er trykket
    lyd Bilhorn afspil til slut
```

## Batteriadvarsel {#battery-warning}

Monitor **MNTR1**; knappen bliver rød, når batteriet er ved at være fladt.

```text
når programmet starter
gentag altid
    vis (Hub 1 % batteri) på MNTR1 skærm
    hvis (Hub 1 % batteri) < 20 så
        sæt BTN1 farve til rød
    vent 5 sekunder
```

## Stop foran en forhindring {#stop-before-an-obstacle}

Technic-afstandssensor på port D, drivmotor på port A.

```text
når programmet starter
gentag altid
    hvis (afstand cm  (Hub 1, port D)) < 10 så
        stop motor  (Hub 1, port A)
        sæt LED-farve til rød  (Hub 1)
    ellers
        start motor ved (skyderegler SLDR1) % hastighed  (Hub 1, port A)
        sæt LED-farve til grøn  (Hub 1)
```

## Fartgrænse på en trinvælger {#speed-limit-on-a-stepper}

Trinvælgeren **STPR1** med 4 trin begrænser tophastigheden.

```text
når programmet starter
gentag altid
    sæt (fartgrænse) til (trinswitch STPR1 × 25)
    start motor ved (joystick JOY1 Y-akse × fartgrænse / 100) % hastighed  (Hub 1, port A)
```

`fartgrænse` er en variabel (**Variable → Opret en variabel**).

## Opstartstjek {#startup-check}

Lås speederen, indtil begge hubs er forbundet.

```text
når programmet starter
sæt JOY1 interaktivitet deaktiver
vent indtil (Hub 1 tilsluttet) og (Hub 2 tilsluttet)
vis "Klar" på MNTR1 skærm
sæt JOY1 interaktivitet aktiver
```

## Spilcontroller {#gamepad}

Sæt **Gamepad-værdiområde** til −100…100 på [siden Spilcontroller](/docs/Application/Dashboard/Gamepad), og slå **Aktivér gamepad-blokke** til.

```text
når programmet starter
gentag altid
    start motor ved (stick venstre Y-akse) % hastighed  (Hub 1, port A)
    gå til relativ position (stick højre X-akse × 0.9) ved 100 % hastighed  (Hub 1, port B)
```

## Bil med pedaler {#car-with-pedals}

Til en bil, der styres med pedaler, gearkasse og håndbremse, se [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Mere {#more}

- Installer officielle profiler fra [kataloget](/docs/Application/Profiles/Catalog), og studér deres programmer.
- Prøv demoen af Logikblokke på [mocpilot.com](https://mocpilot.com).
