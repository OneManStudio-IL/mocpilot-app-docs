---
id: PhoneSensors
title: Telefonsensorer
description: "Bruk hellingen og akselerasjonen til telefonen eller nettbrettet ditt for å styre en modell."
---

# Telefonsensorer {#phone-sensors}

Telefonen eller nettbrettet ditt har bevegelsessensorer. MOCPilot kan bruke dem som inngang: vipp telefonen for å styre, rist den for å utløse noe, eller vis telefonens batteri på dashboardet.

Telefonsensorer er tilgjengelige i **Logikkblokker** (kategorien **Sensorer**). Hurtigkoblinger bruker dashboardkontroller, spillkontrolleren og hubsensorer som innganger.

## Sensorblokker {#sensor-blocks}

| Blokk | Gir |
|---|---|
| `enhet helling` (stigning, rulling) | hellingen til enheten i grader |
| `enhet akselerasjon` (x, y, z) | akselerasjonen til enheten, m/s² |
| `enhet akselerometer` (x, y, z) | rå akselerometerverdier, m/s² |
| `enhet % batteri` | batterinivået på enheten |

Detaljer: [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors).

## Eksempel: styr ved å vippe telefonen {#example-steer-by-tilting-the-phone}

```text
når programmet starter
gjenta alltid
    gå til posisjon  (Hub 1, port B)  ←  enhet helling (rulling) × 2
```

Bruk en motor med absolutt posisjon (en vinkelmotor) på styringen.

Hold telefonen i liggende format som et ratt. Begrens verdien med operatorene *mellom* eller *min/max* slik at styringen ikke treffer endestoppene.

## Tips {#tips}

- Lås skjermrotasjonen på enheten, ellers kan systemet rotere skjermen mens du vipper.
- Datamaskiner har ingen bevegelsessensorer; blokkene gir null der.
- For å vise hellingen på dashboardet sender du vinklene til en **Hellingsmonitor** (betalte temaer). Se [Indikatorer og monitorer](/docs/Application/Dashboard/Indicators).
- Hubber har også egne hellingssensorer: se blokkene for hubsensorer og Hurtigkoblinger-inngangen **Hub**.
