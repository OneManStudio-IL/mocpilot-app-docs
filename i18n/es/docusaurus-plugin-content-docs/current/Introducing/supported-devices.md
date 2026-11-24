---
id: SupportedDevices
title: Hubs, motores y sensores compatibles
description: "Hubs, motores y sensores que funcionan con MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Dispositivos compatibles {#supported-devices}

MOCPilot funciona con estos hubs, motores y sensores. Todos los hubs funcionan con los dos editores de programas, [Enlaces rápidos](/docs/Application/Links/LinksIntroducing) y [Bloques lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubs {#hubs}

<SupportedHubsTable />

Notas:

- Un perfil tiene 5 ranuras de hub: 2 son gratuitas y las otras 3 se desbloquean con la compra de una ranura de hub adicional o con [MocPilot Pro](/docs/Application/Account/Pro).
- Los hubs **Mould King** solo reciben órdenes (sin sensores ni respuesta). En un perfil solo se puede usar un tipo de Mould King: hasta 3 hubs Mould King 4.0 o 1 Mould King 6.0.
- El hub **Robot Inventor** (LEGO® Large Hub) y el hub **SPIKE Prime** (beta, firmware SPIKE Legacy) usan Bluetooth clásico y no están disponibles en iPhone ni iPad. En Windows y Mac también se conectan con un cable USB. Consulta [Hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).
- El hub **SPIKE Essential** (beta) se conecta por Bluetooth Low Energy, como el Technic Hub: 2 puertos, una luz, inclinación y aceleración. También necesita el firmware SPIKE Legacy; los hubs con el firmware SPIKE App 3 aún no son compatibles.
- Los hubs SPIKE Prime y SPIKE Essential aparecen marcados como **Beta** en la app: su compatibilidad es nueva y todavía no se ha comprobado en todos los hubs.
- La actualización y la recuperación del firmware están disponibles para Technic Hub, Technic Move Hub, BOOST Move Hub y City Hub. Consulta [Actualizar el firmware](/docs/Application/Hubs/FirmwareUpdating).
- Lo que puede hacer cada hub además de manejar motores y luces se describe en [Funciones específicas de los hubs](/docs/Application/Hubs/HubFunctions).

## Motores {#motors}

<SupportedMotorsTable />

Los motores con encoder (motores angulares, Technic L y XL) informan de su velocidad y posición, así que pueden usarse como servos, girar un número de grados e ir a posiciones. Los motores simples (motor de tren, motor lineal mediano simple) solo admiten velocidad.

## Sensores y luces {#sensors-and-lights}

<SupportedSensorsTable />

El **sensor de fuerza** funciona con los hubs Robot Inventor y SPIKE Prime: mide con qué fuerza se presiona (0–10 N) y si está presionado, presionado fuerte o liberado. Consulta [Bloques de Robot Inventor: sensor de fuerza](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor). No funciona con los hubs Powered Up (Technic Hub, City Hub, BOOST).

También se pueden usar los sensores integrados de los hubs (batería, inclinación, aceleración, temperatura) y los sensores de tu teléfono o tablet. Consulta [Sensores del teléfono](/docs/Application/Dashboard/PhoneSensors).
