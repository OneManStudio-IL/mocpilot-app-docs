---
id: SupportedDevices
title: Støttede hubber, motorer og sensorer
description: "Hubber, motorer og sensorer som fungerer med MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Støttede enheter {#supported-devices}

MOCPilot fungerer med disse hubbene, motorene og sensorene. Alle hubber fungerer med begge programeditorene, [Hurtigkoblinger](/docs/Application/Links/LinksIntroducing) og [Logikkblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubber {#hubs}

<SupportedHubsTable />

Merknader:

- En profil har 5 hubplasser: 2 er gratis, 3 til følger med et kjøp av ekstra hubplasser eller [MocPilot Pro](/docs/Application/Account/Pro).
- **Mould King**-hubber tar bare imot kommandoer (ingen sensorer, ingen tilbakemelding). Bare én Mould King-type kan brukes i en profil: opptil 3 Mould King 4.0-hubber eller 1 Mould King 6.0.
- **Robot Inventor**-huben (LEGO® Large Hub) og **SPIKE Prime**-huben (beta, SPIKE Legacy-fastvare) bruker klassisk Bluetooth og er ikke tilgjengelige på iPhone og iPad. På Windows og Mac kan de også kobles til med en USB-kabel. Se [MINDSTORMS Robot Inventor-huben](/docs/Application/Hubs/RobotInventorHub).
- Fastvareoppdatering og gjenoppretting er tilgjengelig for Technic Hub, Technic Move Hub, BOOST Move Hub og City Hub. Se [Oppdatere fastvaren](/docs/Application/Hubs/FirmwareUpdating).
- Hva hver hub kan gjøre utover motorer og lys, er beskrevet i [Hubspesifikke funksjoner](/docs/Application/Hubs/HubFunctions).

## Motorer {#motors}

<SupportedMotorsTable />

Motorer med enkoder (vinkelmotorer, Technic L og XL) rapporterer hastighet og posisjon, så de kan brukes som servoer, dreie et visst antall grader og gå til posisjoner. Enkle motorer (togmotor, enkel middels lineærmotor) tar bare imot hastighet.

## Sensorer og lys {#sensors-and-lights}

<SupportedSensorsTable />

Hubbenes innebygde sensorer (batteri, helling, akselerasjon, temperatur) og sensorene i telefonen eller nettbrettet ditt kan også brukes. Se [Telefonsensorer](/docs/Application/Dashboard/PhoneSensors).
