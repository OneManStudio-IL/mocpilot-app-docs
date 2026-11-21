---
id: PhoneSensors
title: Telefonens sensorer
description: "Använd lutningen och accelerationen i din telefon eller surfplatta för att styra en modell."
---

# Telefonens sensorer

Din telefon eller surfplatta har rörelsesensorer. MOCPilot kan använda dem som ingång: luta telefonen för att styra, skaka den för att utlösa något eller visa telefonens batteri på instrumentpanelen.

Telefonens sensorer finns i **Logikblock** (kategorin **Sensorer**). Snabbkopplingar använder kontroller på instrumentpanelen, handkontrollen och hubbens sensorer som ingångar.

## Sensorblock {#sensor-blocks}

| Block | Ger |
|---|---|
| `Enhetens lutning` (pitch, roll) | enhetens lutning i grader |
| `Enhetens acceleration` (x, y, z) | enhetens acceleration, m/s² |
| `Enhetens accelerometer` (x, y, z) | råa accelerometervärden, m/s² |
| `Enhetens % batteri` | enhetens batterinivå |

Detaljer: [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors).

## Exempel: styra genom att luta telefonen {#example-steer-by-tilting-the-phone}

```text
När programmet startar
Upprepa alltid
    Gå till position  (Hubb 1, port B)  ←  Enhetens lutning (rullning) × 2
```

Använd en motor med absolut position (en vinkelmotor) för styrningen.

Håll telefonen i liggande läge som en ratt. Begränsa värdet med operatorerna *är mellan* eller *min/max* så att styrningen inte slår i ändlägena.

## Tips {#tips}

- Lås enhetens skärmrotation, annars kan systemet rotera skärmen medan du lutar.
- Datorer har inga rörelsesensorer; där ger blocken noll.
- För att visa lutningen på instrumentpanelen skickar du vinklarna till en **Lutningsmonitor** (betalda teman). Se [Indikatorer och monitorer](/docs/Application/Dashboard/Indicators).
- Hubbar har också egna lutningssensorer: se hubbens sensorblock och ingången **Hubb** i Snabbkopplingar.
