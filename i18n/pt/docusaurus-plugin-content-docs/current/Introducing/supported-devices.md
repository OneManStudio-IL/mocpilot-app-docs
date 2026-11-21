---
id: SupportedDevices
title: Hubs, motores e sensores compatíveis
description: "Hubs, motores e sensores que funcionam com o MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Dispositivos compatíveis {#supported-devices}

O MOCPilot funciona com estes hubs, motores e sensores. Todos os hubs funcionam com os dois editores de programa, [Ligações rápidas](/docs/Application/Links/LinksIntroducing) e [Blocos lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubs {#hubs}

<SupportedHubsTable />

Observações:

- Um perfil tem 5 slots de hub: 2 são gratuitos, e mais 3 vêm com a compra de slots adicionais de hub ou com o [MocPilot Pro](/docs/Application/Account/Pro).
- Os hubs **Mould King** apenas recebem comandos (sem sensores e sem retorno). Só um tipo de Mould King pode ser usado em um perfil: até 3 hubs Mould King 4.0 ou 1 Mould King 6.0.
- O hub **Robot Inventor** (LEGO® Large Hub) usa Bluetooth clássico e não está disponível no iPhone e no iPad.
- Atualização e recuperação de firmware estão disponíveis para Technic Hub, Technic Move Hub, BOOST Move Hub e City Hub. Veja [Atualização de firmware](/docs/Application/Hubs/FirmwareUpdating).
- O que cada hub faz além de motores e luzes está descrito em [Funções específicas dos hubs](/docs/Application/Hubs/HubFunctions).

## Motores {#motors}

<SupportedMotorsTable />

Motores com encoder (motores angulares, Technic L e XL) informam velocidade e posição, por isso podem ser usados como servos, girar por graus e ir para posições. Motores simples (motor de trem, motor linear médio simples) aceitam só velocidade.

## Sensores e luzes {#sensors-and-lights}

<SupportedSensorsTable />

Os sensores embutidos dos hubs (bateria, inclinação, aceleração, temperatura) e os sensores do seu celular ou tablet também podem ser usados. Veja [Sensores do celular](/docs/Application/Dashboard/PhoneSensors).
