---
id: SupportedDevices
title: Podporované huby, motory a senzory
description: "Huby, motory a senzory, ktoré fungujú s MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Podporované zariadenia {#supported-devices}

MOCPilot funguje s týmito hubmi, motormi a senzormi. Každý hub funguje s oboma editormi programov, [Rýchlymi prepojeniami](/docs/Application/Links/LinksIntroducing) aj [Logickými blokmi](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Huby {#hubs}

<SupportedHubsTable />

Poznámky:

- Profil má 5 slotov pre huby: 2 sú zadarmo, ďalšie 3 získate nákupom dodatočného slotu pre hub alebo s [MocPilot Pro](/docs/Application/Account/Pro).
- Huby **Mould King** iba prijímajú príkazy (bez senzorov, bez spätnej väzby). V jednom profile môžete použiť iba jeden typ Mould King: až 3 huby Mould King 4.0 alebo 1 Mould King 6.0.
- Hub **Robot Inventor** (LEGO® Large Hub) a hub **SPIKE Prime** (beta, firmvér SPIKE Legacy) používajú klasický Bluetooth a na iPhone a iPade nie sú k dispozícii. Vo Windows a na Macu sa pripájajú aj káblom USB. Pozrite [Hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).
- Hub **SPIKE Essential** (beta) sa pripája cez Bluetooth Low Energy, rovnako ako Technic Hub: 2 porty, svetlo, náklon a zrýchlenie. Aj on potrebuje firmvér SPIKE Legacy; huby s firmvérom SPIKE App 3 zatiaľ nie sú podporované.
- Huby SPIKE Prime a SPIKE Essential sú v aplikácii označené ako **Beta**: ich podpora je nová a zatiaľ nebola overená na všetkých huboch.
- Aktualizácia a obnova firmvéru sú k dispozícii pre Technic Hub, Technic Move Hub, BOOST Move Hub a City Hub. Pozrite si [Aktualizácia firmvéru](/docs/Application/Hubs/FirmwareUpdating).
- Čo jednotlivé huby dokážu okrem motorov a svetiel, je popísané v časti [Funkcie jednotlivých hubov](/docs/Application/Hubs/HubFunctions).

## Motory {#motors}

<SupportedMotorsTable />

Motory s enkodérom (uhlové motory, Technic L a XL) hlásia rýchlosť a polohu, takže ich možno použiť ako servá, otáčať o stupne a nastavovať do polôh. Jednoduché motory (vlakový motor, jednoduchý stredný lineárny motor) prijímajú iba rýchlosť.

## Senzory a svetlá {#sensors-and-lights}

<SupportedSensorsTable />

**Senzor sily** funguje s hubmi Robot Inventor a SPIKE Prime: meria, ako silno je stlačený (0–10 N), a či je stlačený, silno stlačený alebo uvoľnený. Pozrite si [Bloky Robot Inventor: senzor sily](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor). S hubmi Powered Up (Technic Hub, City Hub, BOOST) nefunguje.

Použiť môžete aj vstavané senzory hubov (batéria, náklon, zrýchlenie, teplota) a senzory vášho telefónu alebo tabletu. Pozrite si [Senzory telefónu](/docs/Application/Dashboard/PhoneSensors).
