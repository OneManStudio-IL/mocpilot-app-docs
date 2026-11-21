---
id: Examples
title: Voorbeelden
description: "Voorbeeldprogramma's in Logicablokken voor rijden, sturen, lichten, geluiden, batterijwaarschuwingen en sensoren."
---

# Voorbeelden {#examples}

Korte programma's om mee te beginnen. De bloknamen volgen het [blokkenoverzicht](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); waarden tussen haakjes zijn de hub, de poort of een waardeblok in een invoervak. Ingesprongen regels staan binnen een C-blok.

## Rijden met een joystick {#drive-with-a-joystick}

Dashboard: joystick **JOY1**. Aandrijfmotor op poort A.

```text
wanneer het programma start
altijd herhalen
    start motor op (joystick JOY1 Y-as) % snelheid  (Hub 1, poort A)
```

## Sturen met een servo {#steer-with-a-servo}

Stuurmotor (een hoekmotor) op poort B. Stel de huidige positie in als midden en volg daarna de joystick: `× 0.9` zet de −100…100 van de joystick om in −90…90 graden.

```text
wanneer het programma start
stel relatieve positie in 0  (Hub 1, poort B)
altijd herhalen
    ga naar relatieve positie (joystick JOY1 X-as × 0.9) bij 100 % snelheid  (Hub 1, poort B)
```

Kalibreer een stuurheugel met eindaanslagen eerst (zie [Motoren](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `midden` en `bereik` zijn variabelen. Na het kalibreren staat de heugel in het midden, maar is de relatieve positie daar de middenwaarde en niet 0; zet hem dus op 0 voordat je gaat sturen:

```text
wanneer het programma start
rek kalibreren (midden) midden (bereik) graden  (Hub 1, poort B)
stel relatieve positie in 0  (Hub 1, poort B)
altijd herhalen
    ga naar relatieve positie ((bereik × joystick JOY1 X-as) ÷ 100) bij 100 % snelheid  (Hub 1, poort B)
```

## Lichten op een schakelaar {#lights-on-a-switch}

```text
wanneer schakelaar SWCH1 is omgeschakeld ingeschakeld
    inschakelen bij 100 % helderheid  (Hub 1, poort C)
wanneer schakelaar SWCH1 is omgeschakeld uit
    uitzetten  (Hub 1, poort C)
```

## Claxonknop {#horn-button}

```text
wanneer de knop BTN1 ingedrukt
    geluid Autoclaxon speel tot einde
```

## Batterijwaarschuwing {#battery-warning}

Monitor **MNTR1**; de knop wordt rood als de batterij bijna leeg is.

```text
wanneer het programma start
altijd herhalen
    tonen (Hub 1 % batterij) op MNTR1 monitor
    als (Hub 1 % batterij) < 20 dan
        stel BTN1 kleur naar rood
    wachten 5 seconden
```

## Stoppen voor een obstakel {#stop-before-an-obstacle}

Technic-afstandssensor op poort D, aandrijfmotor op poort A.

```text
wanneer het programma start
altijd herhalen
    als (afstand cm  (Hub 1, poort D)) < 10 dan
        stop motor  (Hub 1, poort A)
        stel LED-kleur in op rood  (Hub 1)
    anders
        start motor op (regelaar SLDR1) % snelheid  (Hub 1, poort A)
        stel LED-kleur in op groen  (Hub 1)
```

## Snelheidslimiet met een stappenschakelaar {#speed-limit-on-a-stepper}

Stappenschakelaar **STPR1** met 4 stappen begrenst de topsnelheid.

```text
wanneer het programma start
altijd herhalen
    stel (snelheidslimiet) in op (stapschakelaar STPR1 × 25)
    start motor op (joystick JOY1 Y-as × snelheidslimiet / 100) % snelheid  (Hub 1, poort A)
```

`snelheidslimiet` is een variabele (**Variabelen → Maak een variabele**).

## Controle bij het starten {#startup-check}

Blokkeer het gas tot beide hubs verbonden zijn.

```text
wanneer het programma start
stel JOY1 interactiviteit uitschakelen
wacht tot (Hub 1 verbonden) en (Hub 2 verbonden)
tonen "Klaar" op MNTR1 monitor
stel JOY1 interactiviteit inschakelen
```

## Gamepad {#gamepad}

Stel **Bereik van gamepadwaarden** in op −100…100 op de [Gamepad-pagina](/docs/Application/Dashboard/Gamepad) en schakel **Gamepad-blokken inschakelen** in.

```text
wanneer het programma start
altijd herhalen
    start motor op (stick links Y-as) % snelheid  (Hub 1, poort A)
    ga naar relatieve positie (stick rechts X-as × 0.9) bij 100 % snelheid  (Hub 1, poort B)
```

## Auto met pedalen {#car-with-pedals}

Voor een auto die je bestuurt met pedalen, een versnellingsbak en een handrem: zie de [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Meer {#more}

- Installeer officiële profielen uit de [catalogus](/docs/Application/Profiles/Catalog) en bestudeer hun programma's.
- Probeer de demo van Logicablokken op [mocpilot.com](https://mocpilot.com).
