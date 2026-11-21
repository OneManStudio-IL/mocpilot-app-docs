---
id: PhoneSensors
title: Telefoonsensoren
description: "Gebruik de kanteling en versnelling van je telefoon of tablet om een model te besturen."
---

# Telefoonsensoren {#phone-sensors}

Je telefoon of tablet heeft bewegingssensoren. MOCPilot kan die als invoer gebruiken: kantel de telefoon om te sturen, schud ermee om iets te activeren, of toon de batterij van de telefoon op het dashboard.

Telefoonsensoren zijn beschikbaar bij **Logicablokken** (categorie **Sensoren**). Snelle koppelingen gebruikt bedieningselementen op het dashboard, de gamepad en hubsensoren als invoer.

## Sensorblokken {#sensor-blocks}

| Blok | Geeft |
|---|---|
| `apparaat kanteling` (helling, rol) | de kanteling van het apparaat in graden |
| `apparaat versnelling` (x, y, z) | de versnelling van het apparaat, m/s² |
| `apparaat versnellingsmeter` (x, y, z) | ruwe waarden van de versnellingsmeter, m/s² |
| `apparaat % batterij` | het batterijniveau van het apparaat |

Details: [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors).

## Voorbeeld: sturen door de telefoon te kantelen {#example-steer-by-tilting-the-phone}

```text
wanneer het programma start
altijd herhalen
    ga naar positie  (Hub 1, poort B)  ←  apparaat kanteling (rol) × 2
```

Gebruik voor de besturing een motor met absolute positie (een hoekmotor).

Houd de telefoon liggend vast als een stuur. Begrens de waarde met de operatoren *tussen* of *min/max*, zodat de besturing niet tegen de eindaanslagen loopt.

## Tips {#tips}

- Vergrendel de schermrotatie van het apparaat, anders kan het systeem het scherm draaien terwijl je kantelt.
- Computers hebben geen bewegingssensoren; de blokken geven daar nul.
- Wil je de kanteling op het dashboard tonen, stuur de hoeken dan naar een **Kantelmonitor** (betaalde thema's). Zie [Indicatoren en monitors](/docs/Application/Dashboard/Indicators).
- Ook hubs hebben eigen kantelsensoren: zie de blokken voor hubsensoren en de invoer **Hub** bij Snelle koppelingen.
