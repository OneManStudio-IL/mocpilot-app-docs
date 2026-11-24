---
id: SupportedDevices
title: Tuetut hubit, moottorit ja anturit
description: "Hubit, moottorit ja anturit, jotka toimivat MOCPilotin kanssa."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Tuetut laitteet {#supported-devices}

MOCPilot toimii näiden hubien, moottorien ja anturien kanssa. Jokainen hubi toimii molemmissa ohjelmaeditoreissa, [Pikalinkeissä](/docs/Application/Links/LinksIntroducing) ja [Logiikkalohkoissa](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubit {#hubs}

<SupportedHubsTable />

Huomioita:

- Profiilissa on 5 hubipaikkaa: 2 on ilmaisia, ja 3 lisää saat ostamalla lisähubipaikan tai [MocPilot Pron](/docs/Application/Account/Pro).
- **Mould King** -hubit vain vastaanottavat komentoja (ei antureita eikä palautetta). Profiilissa voi käyttää vain yhtä Mould King -tyyppiä: enintään 3 Mould King 4.0 -hubia tai 1 Mould King 6.0 -hubin.
- **Robot Inventor** -hubi (LEGO® Large Hub) ja **SPIKE Prime** -hubi (beta, SPIKE Legacy -laiteohjelmisto) käyttävät perinteistä Bluetoothia, eivätkä ne ole käytettävissä iPhonessa ja iPadissa. Windowsissa ja Macissa ne voi yhdistää myös USB-kaapelilla. Katso [MINDSTORMS Robot Inventor -hubi](/docs/Application/Hubs/RobotInventorHub).
- Laiteohjelmiston päivitys ja palautus ovat käytettävissä Technic Hubille, Technic Move Hubille, BOOST Move Hubille ja City Hubille. Katso [Laiteohjelmiston päivittäminen](/docs/Application/Hubs/FirmwareUpdating).
- Mitä kukin hubi osaa moottorien ja valojen lisäksi, kerrotaan sivulla [Hubikohtaiset toiminnot](/docs/Application/Hubs/HubFunctions).

## Moottorit {#motors}

<SupportedMotorsTable />

Enkooderilla varustetut moottorit (kulmamoottorit, Technic L ja XL) ilmoittavat nopeutensa ja asentonsa, joten niitä voi käyttää servoina, kääntää asteittain ja ajaa tiettyihin asentoihin. Yksinkertaiset moottorit (junamoottori, yksinkertainen keskikokoinen lineaarimoottori) ottavat vastaan vain nopeuden.

## Anturit ja valot {#sensors-and-lights}

<SupportedSensorsTable />

Myös hubien sisäänrakennettuja antureita (akku, kallistus, kiihtyvyys, lämpötila) sekä puhelimesi tai tablettisi antureita voi käyttää. Katso [Puhelimen anturit](/docs/Application/Dashboard/PhoneSensors).
