---
id: SupportedDevices
title: Understøttede hubs, motorer og sensorer
description: "Hubs, motorer og sensorer, der virker med MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Understøttede enheder {#supported-devices}

MOCPilot virker med disse hubs, motorer og sensorer. Alle hubs virker med begge programeditorer, [Hurtige forbindelser](/docs/Application/Links/LinksIntroducing) og [Logikblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubs {#hubs}

<SupportedHubsTable />

Bemærk:

- En profil har 5 hub-slots: 2 er gratis, og 3 mere følger med et køb af ekstra hub-slots eller [MocPilot Pro](/docs/Application/Account/Pro).
- **Mould King**-hubs modtager kun kommandoer (ingen sensorer, ingen tilbagemelding). Der kan kun bruges én Mould King-type i en profil: op til 3 Mould King 4.0-hubs eller 1 Mould King 6.0.
- **Robot Inventor**-hubben (LEGO® Large Hub) og **SPIKE Prime**-hubben (beta, firmwaren SPIKE Legacy) bruger klassisk Bluetooth og er ikke tilgængelige på iPhone og iPad. På Windows og Mac kan de også forbindes med et USB-kabel. Se [MINDSTORMS Robot Inventor-hub](/docs/Application/Hubs/RobotInventorHub).
- Firmwareopdatering og gendannelse er tilgængelig for Technic Hub, Technic Move Hub, BOOST Move Hub og City Hub. Se [Opdatering af firmware](/docs/Application/Hubs/FirmwareUpdating).
- Hvad hver hub kan ud over motorer og lys, er beskrevet i [Hubspecifikke funktioner](/docs/Application/Hubs/HubFunctions).

## Motorer {#motors}

<SupportedMotorsTable />

Motorer med encoder (vinkelmotorer, Technic L og XL) rapporterer hastighed og position, så de kan bruges som servoer, dreje et antal grader og køre til bestemte positioner. Simple motorer (togmotor, simpel mellemstor lineær motor) tager kun imod hastighed.

## Sensorer og lys {#sensors-and-lights}

<SupportedSensorsTable />

Hubbenes indbyggede sensorer (batteri, hældning, acceleration, temperatur) og sensorerne i din telefon eller tablet kan også bruges. Se [Telefonens sensorer](/docs/Application/Dashboard/PhoneSensors).
