---
id: SupportedDevices
title: Obsługiwane huby, silniki i czujniki
description: "Huby, silniki i czujniki, które współpracują z MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Obsługiwane urządzenia {#supported-devices}

MOCPilot współpracuje z poniższymi hubami, silnikami i czujnikami. Każdy hub działa z obydwoma edytorami programów: [Szybkimi połączeniami](/docs/Application/Links/LinksIntroducing) i [Blokami logicznymi](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Huby {#hubs}

<SupportedHubsTable />

Uwagi:

- Profil ma 5 slotów na huby: 2 są bezpłatne, 3 kolejne otrzymujesz, kupując dodatkowy slot na hub lub [MocPilot Pro](/docs/Application/Account/Pro).
- Huby **Mould King** tylko odbierają polecenia (bez czujników i bez informacji zwrotnej). W jednym profilu można używać tylko jednego typu Mould King: do 3 hubów Mould King 4.0 albo 1 Mould King 6.0.
- Hub **Robot Inventor** (LEGO® Large Hub) i hub **SPIKE Prime** (beta, firmware SPIKE Legacy) korzystają z klasycznego Bluetooth i nie są dostępne na iPhonie i iPadzie. W Windows i na Macu łączą się też kablem USB. Zobacz [Hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).
- Aktualizacja i odzyskiwanie firmware są dostępne dla Technic Hub, Technic Move Hub, BOOST Move Hub i City Hub. Zobacz [Aktualizacja firmware](/docs/Application/Hubs/FirmwareUpdating).
- Co poza silnikami i światłami potrafi każdy hub, opisuje artykuł [Funkcje poszczególnych hubów](/docs/Application/Hubs/HubFunctions).

## Silniki {#motors}

<SupportedMotorsTable />

Silniki z enkoderem (silniki kątowe, Technic L i XL) podają prędkość i pozycję, więc mogą działać jako serwa, obracać się o zadaną liczbę stopni i ustawiać się w pozycjach. Proste silniki (silnik pociągu, prosty średni silnik liniowy) przyjmują tylko prędkość.

## Czujniki i światła {#sensors-and-lights}

<SupportedSensorsTable />

Można też korzystać z wbudowanych czujników hubów (bateria, nachylenie, przyspieszenie, temperatura) oraz czujników telefonu lub tabletu. Zobacz [Czujniki telefonu](/docs/Application/Dashboard/PhoneSensors).
