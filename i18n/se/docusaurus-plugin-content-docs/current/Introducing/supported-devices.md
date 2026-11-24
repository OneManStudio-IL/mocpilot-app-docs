---
id: SupportedDevices
title: Hubbar, motorer och sensorer som stöds
description: "Hubbar, motorer och sensorer som fungerar med MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Enheter som stöds

MOCPilot fungerar med följande hubbar, motorer och sensorer. Alla hubbar fungerar med båda programredigerarna, [Snabbkopplingar](/docs/Application/Links/LinksIntroducing) och [Logikblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubbar {#hubs}

<SupportedHubsTable />

Att tänka på:

- En profil har 5 hubbplatser: 2 är gratis, och 3 till får du genom att köpa extra hubbplatser eller med [MocPilot Pro](/docs/Application/Account/Pro).
- **Mould King**-hubbar tar bara emot kommandon (inga sensorer, ingen återkoppling). Bara en typ av Mould King kan användas i en profil: upp till 3 Mould King 4.0-hubbar eller 1 Mould King 6.0.
- **Robot Inventor**-hubben (LEGO® Large Hub) och **SPIKE Prime**-hubben (beta, SPIKE Legacy-firmware) använder klassisk Bluetooth och är inte tillgängliga på iPhone och iPad. På Windows och Mac kan de också anslutas med en USB-kabel. Se [MINDSTORMS Robot Inventor-hubben](/docs/Application/Hubs/RobotInventorHub).
- **SPIKE Essential**-hubben (beta) ansluts via Bluetooth Low Energy, precis som Technic Hub: 2 portar, en lampa, lutning och acceleration. Den behöver också SPIKE Legacy-firmware; hubbar med SPIKE App 3-firmware stöds inte ännu.
- SPIKE Prime- och SPIKE Essential-hubbarna är märkta med **Beta** i appen: stödet för dem är nytt och har ännu inte kontrollerats på alla hubbar.
- Firmwareuppdatering och återställning finns för Technic Hub, Technic Move Hub, BOOST Move Hub och City Hub. Se [Uppdatera firmware](/docs/Application/Hubs/FirmwareUpdating).
- Vad varje hubb kan göra utöver motorer och lampor beskrivs i [Hubbspecifika funktioner](/docs/Application/Hubs/HubFunctions).

## Motorer {#motors}

<SupportedMotorsTable />

Motorer med pulsgivare (vinkelmotorer, Technic L och XL) rapporterar hastighet och position, så de kan användas som servon, vrida ett visst antal grader och gå till positioner. Enkla motorer (tågmotor, enkel medium linjärmotor) tar bara emot hastighet.

## Sensorer och lampor {#sensors-and-lights}

<SupportedSensorsTable />

**Kraftsensorn** fungerar med Robot Inventor- och SPIKE Prime-hubbarna: den mäter hur hårt den trycks in (0–10 N) och om den är tryckt, hårt tryckt eller släppt. Se [Robot Inventor-block: kraftsensor](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor). Den fungerar inte med Powered Up-hubbar (Technic Hub, City Hub, BOOST).

Hubbarnas inbyggda sensorer (batteri, lutning, acceleration, temperatur) och sensorerna i din telefon eller surfplatta kan också användas. Se [Telefonens sensorer](/docs/Application/Dashboard/PhoneSensors).
