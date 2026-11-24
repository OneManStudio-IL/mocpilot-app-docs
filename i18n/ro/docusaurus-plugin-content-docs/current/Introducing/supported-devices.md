---
id: SupportedDevices
title: Huburi, motoare și senzori acceptate
description: "Huburile, motoarele și senzorii care funcționează cu MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Dispozitive acceptate {#supported-devices}

MOCPilot funcționează cu aceste huburi, motoare și senzori. Fiecare hub funcționează cu ambele editoare de programe, [Legături rapide](/docs/Application/Links/LinksIntroducing) și [Blocuri logice](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Huburi {#hubs}

<SupportedHubsTable />

Note:

- Un profil are 5 sloturi de hub: 2 sunt gratuite, iar încă 3 vin odată cu achiziția unui slot de hub suplimentar sau cu [MocPilot Pro](/docs/Application/Account/Pro).
- Huburile **Mould King** doar primesc comenzi (fără senzori, fără răspuns). Într-un profil poate fi folosit un singur tip de Mould King: până la 3 huburi Mould King 4.0 sau 1 Mould King 6.0.
- Hubul **Robot Inventor** (LEGO® Large Hub) și hubul **SPIKE Prime** (beta, firmware SPIKE Legacy) folosesc Bluetooth clasic și nu sunt disponibile pe iPhone și iPad. Pe Windows și Mac se conectează și cu un cablu USB. Vezi [Hubul MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).
- Actualizarea și recuperarea firmware-ului sunt disponibile pentru Technic Hub, Technic Move Hub, BOOST Move Hub și City Hub. Vezi [Actualizarea firmware-ului](/docs/Application/Hubs/FirmwareUpdating).
- Ce poate face fiecare hub în afară de motoare și lumini este descris în [Funcții specifice huburilor](/docs/Application/Hubs/HubFunctions).

## Motoare {#motors}

<SupportedMotorsTable />

Motoarele cu encoder (motoarele unghiulare, Technic L și XL) raportează viteza și poziția, așa că pot fi folosite ca servo, se pot roti cu un anumit număr de grade și pot merge la poziții. Motoarele simple (motorul de tren, motorul liniar mediu simplu) primesc doar viteza.

## Senzori și lumini {#sensors-and-lights}

<SupportedSensorsTable />

Se pot folosi și senzorii încorporați ai huburilor (baterie, înclinare, accelerație, temperatură), precum și senzorii telefonului sau tabletei. Vezi [Senzorii telefonului](/docs/Application/Dashboard/PhoneSensors).
