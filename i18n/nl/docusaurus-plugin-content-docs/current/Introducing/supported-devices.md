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
- De **Robot Inventor**-hub (LEGO® Large Hub) gebruikt klassieke Bluetooth en is niet beschikbaar op iPhone en iPad.
- Firmware-updates en -herstel zijn beschikbaar voor Technic Hub, Technic Move Hub, BOOST Move Hub en City Hub. Zie [Firmware bijwerken](/docs/Application/Hubs/FirmwareUpdating).
- Wat elke hub naast motoren en lampen nog kan, lees je in [Hubspecifieke functies](/docs/Application/Hubs/HubFunctions).

## Motoren {#motors}

<SupportedMotorsTable />

Motoren met een encoder (hoekmotoren, Technic L en XL) melden hun snelheid en positie. Je kunt ze dus als servo gebruiken, een aantal graden laten draaien en naar posities laten gaan. Eenvoudige motoren (treinmotor, eenvoudige middelgrote lineaire motor) accepteren alleen een snelheid.

## Sensoren en lampen {#sensors-and-lights}

<SupportedSensorsTable />

Ook de ingebouwde sensoren van de hubs (batterij, kanteling, versnelling, temperatuur) en de sensoren van je telefoon of tablet kun je gebruiken. Zie [Telefoonsensoren](/docs/Application/Dashboard/PhoneSensors).
