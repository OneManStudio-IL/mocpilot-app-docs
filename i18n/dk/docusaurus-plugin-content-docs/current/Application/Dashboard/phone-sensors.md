---
id: PhoneSensors
title: Telefonens sensorer
description: "Brug hældningen og accelerationen af din telefon eller tablet til at styre en model."
---

# Telefonens sensorer {#phone-sensors}

Din telefon eller tablet har bevægelsessensorer. MOCPilot kan bruge dem som input: hæld telefonen for at styre, ryst den for at udløse noget, eller vis telefonens batteri på dashboardet.

Telefonens sensorer er tilgængelige i **Logikblokke** (kategorien **Sensorer**). Hurtige forbindelser bruger dashboardkontroller, gamepad'en og hubsensorer som input.

## Sensorblokke {#sensor-blocks}

| Blok | Giver |
|---|---|
| `enhed hældning` (pitch, rulning) | enhedens hældning i grader |
| `enhed acceleration` (x, y, z) | enhedens acceleration, m/s² |
| `enhed accelerometer` (x, y, z) | rå accelerometerværdier, m/s² |
| `enhed % batteri` | enhedens batteriniveau |

Detaljer: [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors).

## Eksempel: styr ved at hælde telefonen {#example-steer-by-tilting-the-phone}

```text
når programmet starter
gentag altid
    Gå til position  (Hub 1, port B)  ←  enhed hældning (rulning) × 2
```

Brug en motor med absolut position (en vinkelmotor) til styringen.

Hold telefonen i liggende format som et rat. Begræns værdien med operatorerne *mellem* eller *min/max*, så styringen ikke rammer sine endestop.

## Tips {#tips}

- Lås enhedens skærmrotation, ellers kan systemet rotere skærmen, mens du hælder.
- Computere har ingen bevægelsessensorer; blokkene giver nul der.
- For at vise hældningen på dashboardet sender du vinklerne til en **Tilt skærm** (betalte temaer). Se [Indikatorer og skærme](/docs/Application/Dashboard/Indicators).
- Hubs har også deres egne hældningssensorer: se blokkene til hubsensorer og inputtet **Hub** i Hurtige forbindelser.
