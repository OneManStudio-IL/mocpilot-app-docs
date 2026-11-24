---
id: SupportedDevices
title: Supported hubs, motors and sensors
description: "Hubs, motors and sensors that work with MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Supported devices

MOCPilot works with these hubs, motors and sensors. Every hub works with both program editors, [Quick Links](/docs/Application/Links/LinksIntroducing) and [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubs

<SupportedHubsTable />

Notes:

- A profile has 5 hub slots: 2 are free, 3 more come with an additional hub slot purchase or [MocPilot Pro](/docs/Application/Account/Pro).
- **Mould King** hubs only receive commands (no sensors, no feedback). Only one Mould King type can be used in a profile: up to 3 Mould King 4.0 hubs or 1 Mould King 6.0.
- The **Robot Inventor** hub (LEGO® Large Hub) and the **SPIKE Prime** hub (beta, SPIKE Legacy firmware) use classic Bluetooth and are not available on iPhone and iPad. On Windows and Mac they also connect with a USB cable. See [MINDSTORMS Robot Inventor hub](/docs/Application/Hubs/RobotInventorHub).
- The **SPIKE Essential** hub (beta) connects over Bluetooth Low Energy, like the Technic Hub: 2 ports, a light, tilt and acceleration. It needs the SPIKE Legacy firmware too; hubs with the SPIKE App 3 firmware aren't supported yet.
- The SPIKE Prime and SPIKE Essential hubs are marked **Beta** in the app: their support is new and hasn't been checked on every hub yet.
- Firmware updates and recovery are available for Technic Hub, Technic Move Hub, BOOST Move Hub and City Hub. See [Firmware updating](/docs/Application/Hubs/FirmwareUpdating).
- What each hub can do beyond motors and lights is described in [Hub-specific functions](/docs/Application/Hubs/HubFunctions).

## Motors

<SupportedMotorsTable />

Motors with an encoder (angular motors, Technic L and XL) report speed and position, so they can be used as servos, turn by degrees and go to positions. Simple motors (train motor, simple medium linear motor) take speed only.

## Sensors and lights

<SupportedSensorsTable />

The **Force Sensor** works on the Robot Inventor and SPIKE Prime hubs: it measures how hard it's pressed (0–10 N) and whether it's pressed, hard-pressed or released. See [Robot Inventor blocks: force sensor](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor). It doesn't work on Powered Up hubs (Technic Hub, City Hub, BOOST).

The hubs' built-in sensors (battery, tilt, acceleration, temperature) and the sensors of your phone or tablet can be used too. See [Phone sensors](/docs/Application/Dashboard/PhoneSensors).
