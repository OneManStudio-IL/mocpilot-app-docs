---
id: SupportedDevices
title: Ondersteunde hubs, motoren en sensoren
description: "Hubs, motoren en sensoren die met MOCPilot werken."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Ondersteunde apparaten {#supported-devices}

MOCPilot werkt met deze hubs, motoren en sensoren. Elke hub werkt met beide programma-editors, [Snelle koppelingen](/docs/Application/Links/LinksIntroducing) en [Logicablokken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubs {#hubs}

<SupportedHubsTable />

Opmerkingen:

- Een profiel heeft 5 hubslots: 2 zijn gratis, de andere 3 krijg je met een extra hubslot-aankoop of met [MocPilot Pro](/docs/Application/Account/Pro).
- **Mould King**-hubs ontvangen alleen opdrachten (geen sensoren, geen terugkoppeling). In een profiel kun je maar één type Mould King gebruiken: maximaal 3 Mould King 4.0-hubs of 1 Mould King 6.0.
- De **Robot Inventor**-hub (LEGO® Large Hub) en de **SPIKE Prime**-hub (bèta, firmware SPIKE Legacy) gebruiken klassieke Bluetooth en zijn niet beschikbaar op iPhone en iPad. Op Windows en Mac kunnen ze ook met een USB-kabel worden verbonden. Zie [MINDSTORMS Robot Inventor-hub](/docs/Application/Hubs/RobotInventorHub).
- De **SPIKE Essential**-hub (bèta) maakt verbinding via Bluetooth Low Energy, net als de Technic Hub: 2 poorten, een lampje, kanteling en versnelling. Ook deze hub heeft de firmware SPIKE Legacy nodig; hubs met de firmware SPIKE App 3 worden nog niet ondersteund.
- De SPIKE Prime- en SPIKE Essential-hubs zijn in de app gemarkeerd met **Beta**: de ondersteuning is nieuw en is nog niet op elke hub gecontroleerd.
- Firmware-updates en -herstel zijn beschikbaar voor Technic Hub, Technic Move Hub, BOOST Move Hub en City Hub. Zie [Firmware bijwerken](/docs/Application/Hubs/FirmwareUpdating).
- Wat elke hub naast motoren en lampen nog kan, lees je in [Hubspecifieke functies](/docs/Application/Hubs/HubFunctions).

## Motoren {#motors}

<SupportedMotorsTable />

Motoren met een encoder (hoekmotoren, Technic L en XL) melden hun snelheid en positie. Je kunt ze dus als servo gebruiken, een aantal graden laten draaien en naar posities laten gaan. Eenvoudige motoren (treinmotor, eenvoudige middelgrote lineaire motor) accepteren alleen een snelheid.

## Sensoren en lampen {#sensors-and-lights}

<SupportedSensorsTable />

De **krachtsensor** werkt op de Robot Inventor- en SPIKE Prime-hubs: hij meet hoe hard hij wordt ingedrukt (0–10 N) en of hij ingedrukt, hard ingedrukt of losgelaten is. Zie [Robot Inventor-blokken: krachtsensor](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor). Hij werkt niet op Powered Up-hubs (Technic Hub, City Hub, BOOST).

Ook de ingebouwde sensoren van de hubs (batterij, kanteling, versnelling, temperatuur) en de sensoren van je telefoon of tablet kun je gebruiken. Zie [Telefoonsensoren](/docs/Application/Dashboard/PhoneSensors).
