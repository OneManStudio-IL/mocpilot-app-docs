---
id: SupportedDevices
title: Podporované huby, motory a senzory
description: "Huby, motory a senzory, které fungují s MOCPilotem."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Podporovaná zařízení {#supported-devices}

MOCPilot funguje s těmito huby, motory a senzory. Každý hub funguje s oběma editory programů, [Rychlými propojeními](/docs/Application/Links/LinksIntroducing) i [Logickými bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Huby {#hubs}

<SupportedHubsTable />

Poznámky:

- Profil má 5 slotů pro huby: 2 jsou zdarma, další 3 získáte nákupem dodatečného slotu pro hub nebo s [MocPilot Pro](/docs/Application/Account/Pro).
- Huby **Mould King** pouze přijímají příkazy (žádné senzory, žádná zpětná vazba). V jednom profilu lze použít jen jeden typ Mould King: až 3 huby Mould King 4.0, nebo 1 Mould King 6.0.
- Hub **Robot Inventor** (LEGO® Large Hub) používá klasické Bluetooth a na iPhonu a iPadu není k dispozici.
- Aktualizace a obnovení firmwaru jsou k dispozici pro Technic Hub, Technic Move Hub, BOOST Move Hub a City Hub. Viz [Aktualizace firmwaru](/docs/Application/Hubs/FirmwareUpdating).
- Co jednotlivé huby umí kromě motorů a světel, popisuje článek [Funkce jednotlivých hubů](/docs/Application/Hubs/HubFunctions).

## Motory {#motors}

<SupportedMotorsTable />

Motory s enkodérem (úhlové motory, Technic L a XL) hlásí rychlost a polohu, takže je lze používat jako serva, otáčet je o stupně a posílat do určených poloh. Jednoduché motory (vlakový motor, jednoduchý střední lineární motor) přijímají jen rychlost.

## Senzory a světla {#sensors-and-lights}

<SupportedSensorsTable />

Používat lze také vestavěné senzory hubů (baterie, náklon, zrychlení, teplota) a senzory vašeho telefonu nebo tabletu. Viz [Senzory telefonu](/docs/Application/Dashboard/PhoneSensors).
