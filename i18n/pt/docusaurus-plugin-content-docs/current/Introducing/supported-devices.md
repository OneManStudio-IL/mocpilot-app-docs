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
- O hub **Robot Inventor** (LEGO® Large Hub) e o hub **SPIKE Prime** (beta, firmware SPIKE Legacy) usam Bluetooth clássico e não estão disponíveis no iPhone e no iPad. No Windows e no Mac, eles também se conectam com um cabo USB. Veja [hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).
- O hub **SPIKE Essential** (beta) se conecta por Bluetooth Low Energy, como o Technic Hub: 2 portas, uma luz, inclinação e aceleração. Ele também precisa do firmware SPIKE Legacy; hubs com o firmware SPIKE App 3 ainda não são compatíveis.
- Os hubs SPIKE Prime e SPIKE Essential aparecem marcados como **Beta** no app: o suporte a eles é novo e ainda não foi verificado em todos os hubs.
- Atualização e recuperação de firmware estão disponíveis para Technic Hub, Technic Move Hub, BOOST Move Hub e City Hub. Veja [Atualização de firmware](/docs/Application/Hubs/FirmwareUpdating).
- O que cada hub faz além de motores e luzes está descrito em [Funções específicas dos hubs](/docs/Application/Hubs/HubFunctions).

## Motores {#motors}

<SupportedMotorsTable />

Motores com encoder (motores angulares, Technic L e XL) informam velocidade e posição, por isso podem ser usados como servos, girar por graus e ir para posições. Motores simples (motor de trem, motor linear médio simples) aceitam só velocidade.

## Sensores e luzes {#sensors-and-lights}

<SupportedSensorsTable />

O **sensor de força** funciona nos hubs Robot Inventor e SPIKE Prime: ele mede com que força é pressionado (0–10 N) e se está pressionado, pressionado com força ou solto. Veja [Blocos Robot Inventor: sensor de força](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor). Ele não funciona nos hubs Powered Up (Technic Hub, City Hub, BOOST).

Os sensores embutidos dos hubs (bateria, inclinação, aceleração, temperatura) e os sensores do seu celular ou tablet também podem ser usados. Veja [Sensores do celular](/docs/Application/Dashboard/PhoneSensors).
