---
id: HubsOverview
title: Hubs
description: "Los hubs en los perfiles de MOCPilot: hubs compatibles, ranuras de hub y lo que puede hacer cada hub."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubs {#hubs}

Un **Hub** es el ladrillo Bluetooth de tu modelo: los motores, las luces y los sensores se conectan a sus puertos, y MOCPilot se comunica con él por Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Hubs compatibles {#supported-hubs}

| Hub | Notas |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 puertos, sensores de inclinación y aceleración |
| LEGO® Technic™ Move Hub | en los coches teledirigidos LEGO Technic; tracción, dirección, luces; [configuraciones](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 puertos, trenes y sets City |
| LEGO® Move Hub / BOOST (88006) | 2 motores integrados + 2 puertos |
| LEGO® Remote Control (88010) | sus botones son entradas |
| LEGO® WeDo 2.0 Smart Hub | 2 puertos |
| LEGO® Large Hub / Robot Inventor (88016) | 6 puertos, matriz de luces; no disponible en iPhone ni iPad |
| BuWizz 2.0 | 4 puertos, modos de potencia |
| BuWizz 3.0 Pro | 6 puertos, LED de color en los puertos |
| SBrick, SBrick Plus | 4 puertos, control de velocidad, sin control de posición |
| Mould King 4.0, 6.0 | 4 o 6 puertos, solo comandos, canales de control |

Lista completa con motores y sensores: [Dispositivos compatibles](/docs/Introducing/SupportedDevices).

## Ranuras de hub {#hub-slots}

Cada perfil tiene **5 ranuras de hub**:

- **2 ranuras son gratuitas**;
- las **3 restantes** se desbloquean con **Desbloquear ranura** (una compra de *ranura de hub adicional* por ranura) o todas a la vez con [MocPilot Pro](/docs/Application/Account/Pro).

Las ranuras compradas pertenecen a tu cuenta y funcionan en todos tus perfiles.

Límites de Mould King: un solo tipo de Mould King por perfil, con hasta 3 Mould King 4.0 o 1 Mould King 6.0 (comparten el transmisor de anuncios Bluetooth del teléfono).

## Los hubs en el programa {#hubs-in-the-program}

- En **Enlaces rápidos**, cada hub del perfil aparece en la paleta como salida **Hub** y como entrada **Hub** para sus botones y sensores. Las operaciones que ningún hub del perfil puede realizar no se ofrecen. Consulta [El bloque Hub y los puertos](/docs/Application/Links/HubsAndPorts).
- En **Bloques lógicos**, los bloques de motores, luces y sensores usan la ranura del hub y el puerto. Consulta [Motores](/docs/Application/BlockBuilder/Blocks/Motors).

## Más información {#read-more}

- [Añadir y conectar un hub](/docs/Application/Hubs/ConnectingHubs)
- [Funciones específicas de cada hub](/docs/Application/Hubs/HubFunctions)
- [Actualización del firmware](/docs/Application/Hubs/FirmwareUpdating) y [recuperación del firmware](/docs/Application/Hubs/RecoveryHubFirmware)
