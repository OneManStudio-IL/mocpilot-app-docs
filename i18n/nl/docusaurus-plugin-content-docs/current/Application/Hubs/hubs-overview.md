---
id: HubsOverview
title: Hubs
description: "Hubs in MOCPilot-profielen: ondersteunde hubs, hubslots en wat elke hub kan."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubs {#hubs}

Een **Hub** is de Bluetooth-steen van je model: motoren, lampen en sensoren sluit je aan op de poorten, en MOCPilot communiceert er via Bluetooth mee.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Ondersteunde hubs {#supported-hubs}

| Hub | Opmerkingen |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 poorten, kantel- en versnellingssensoren |
| LEGO® Technic™ Move Hub | in op afstand bestuurbare LEGO Technic-auto's; rijden, sturen, lichten; [configuraties](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 poorten, treinen en City-sets |
| LEGO® Move Hub / BOOST (88006) | 2 ingebouwde motoren + 2 poorten |
| LEGO® Remote Control (88010) | de knoppen zijn ingangen |
| LEGO® WeDo 2.0 Smart Hub | 2 poorten |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 poorten, lichtmatrix, luidspreker, gyroscoop; Bluetooth of USB; niet op iPhone en iPad |
| BuWizz 2.0 | 4 poorten, vermogensmodi |
| BuWizz 3.0 Pro | 6 poorten, poortkleur-leds |
| SBrick, SBrick Plus | 4 poorten, snelheidsregeling, geen positieregeling |
| Mould King 4.0, 6.0 | 4 of 6 poorten, alleen opdrachten, besturingskanalen |

Volledige lijst met motoren en sensoren: [Ondersteunde apparaten](/docs/Introducing/SupportedDevices).

## Hubslots {#hub-slots}

Elk profiel heeft **5 hubslots**:

- **2 slots zijn gratis**;
- **nog 3** ontgrendel je met **Slot ontgrendelen** (een aankoop *Extra hubslot*, één per slot) of allemaal tegelijk met [MocPilot Pro](/docs/Application/Account/Pro).

Gekochte slots horen bij je account en werken in al je profielen.

Beperkingen voor Mould King: één Mould King-type per profiel, met maximaal 3 Mould King 4.0 of 1 Mould King 6.0 (ze delen de Bluetooth-advertentiezender van de telefoon).

## Hubs in het programma {#hubs-in-the-program}

- In **Snelle koppelingen** verschijnt elke hub van het profiel in het palet als **Hub**-uitvoer, en als **Hub**-invoer voor de knoppen en sensoren. Bewerkingen die geen enkele hub van het profiel kan uitvoeren, worden niet aangeboden. Zie [Hub-blok en poorten](/docs/Application/Links/HubsAndPorts).
- In **Logicablokken** gebruiken motor-, licht- en sensorblokken het hubslot en de poort. Zie [Motoren](/docs/Application/BlockBuilder/Blocks/Motors).

## Meer lezen {#read-more}

- [Een hub toevoegen en verbinden](/docs/Application/Hubs/ConnectingHubs)
- [Hubspecifieke functies](/docs/Application/Hubs/HubFunctions)
- [Firmware bijwerken](/docs/Application/Hubs/FirmwareUpdating) en [firmwareherstel](/docs/Application/Hubs/RecoveryHubFirmware)
