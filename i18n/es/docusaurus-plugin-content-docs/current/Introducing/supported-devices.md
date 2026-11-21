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
- El hub **Robot Inventor** (LEGO® Large Hub) usa Bluetooth clásico y no está disponible en iPhone ni iPad.
- La actualización y la recuperación del firmware están disponibles para Technic Hub, Technic Move Hub, BOOST Move Hub y City Hub. Consulta [Actualizar el firmware](/docs/Application/Hubs/FirmwareUpdating).
- Lo que puede hacer cada hub además de manejar motores y luces se describe en [Funciones específicas de los hubs](/docs/Application/Hubs/HubFunctions).

## Motores {#motors}

<SupportedMotorsTable />

Los motores con encoder (motores angulares, Technic L y XL) informan de su velocidad y posición, así que pueden usarse como servos, girar un número de grados e ir a posiciones. Los motores simples (motor de tren, motor lineal mediano simple) solo admiten velocidad.

## Sensores y luces {#sensors-and-lights}

<SupportedSensorsTable />

También se pueden usar los sensores integrados de los hubs (batería, inclinación, aceleración, temperatura) y los sensores de tu teléfono o tablet. Consulta [Sensores del teléfono](/docs/Application/Dashboard/PhoneSensors).
