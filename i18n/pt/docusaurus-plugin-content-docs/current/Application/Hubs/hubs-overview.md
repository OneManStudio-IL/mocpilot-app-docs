---
id: HubsOverview
title: Hubs
description: "Hubs nos perfis do MOCPilot: hubs suportados, slots de hub e o que cada hub sabe fazer."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubs {#hubs}

O **hub** é o bloco Bluetooth do seu modelo: motores, luzes e sensores são conectados às portas dele, e o MOCPilot se comunica com ele por Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Hubs suportados {#supported-hubs}

| Hub | Observações |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 portas, sensores de inclinação e aceleração |
| LEGO® Technic™ Move Hub | nos carros de controle remoto LEGO Technic; tração, direção, luzes; [configurações](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 portas, trens e sets City |
| LEGO® Move Hub / BOOST (88006) | 2 motores integrados + 2 portas |
| LEGO® Remote Control (88010) | os botões dele são entradas |
| LEGO® WeDo 2.0 Smart Hub | 2 portas |
| LEGO® Large Hub / Robot Inventor (88016) | 6 portas, matriz de luzes; não disponível no iPhone e no iPad |
| BuWizz 2.0 | 4 portas, modos de potência |
| BuWizz 3.0 Pro | 6 portas, LEDs de cor nas portas |
| SBrick, SBrick Plus | 4 portas, controle de velocidade, sem controle de posição |
| Mould King 4.0, 6.0 | 4 ou 6 portas, apenas comandos, canais de controle |

Lista completa com motores e sensores: [Dispositivos suportados](/docs/Introducing/SupportedDevices).

## Slots de hub {#hub-slots}

Cada perfil tem **5 slots de hub**:

- **2 slots são gratuitos**;
- **mais 3** são desbloqueados com **Desbloquear slot** (uma compra de *Slot de hub adicional*, uma por slot) ou todos de uma vez com o [MocPilot Pro](/docs/Application/Account/Pro).

Os slots comprados pertencem à sua conta e funcionam em todos os seus perfis.

Limites do Mould King: um tipo de Mould King por perfil, com até 3 Mould King 4.0 ou 1 Mould King 6.0 (eles compartilham o transmissor de anúncios Bluetooth do celular).

## Hubs no programa {#hubs-in-the-program}

- Em **Ligações rápidas**, cada hub do perfil aparece na paleta como uma saída **Hub** e como uma entrada **Hub** para os botões e sensores dele. Operações que nenhum hub do perfil sabe fazer não são oferecidas. Veja [Bloco Hub e portas](/docs/Application/Links/HubsAndPorts).
- Em **Blocos lógicos**, os blocos de motor, luz e sensor recebem o slot do hub e a porta. Veja [Motores](/docs/Application/BlockBuilder/Blocks/Motors).

## Saiba mais {#read-more}

- [Adicionar e conectar um hub](/docs/Application/Hubs/ConnectingHubs)
- [Funções específicas dos hubs](/docs/Application/Hubs/HubFunctions)
- [Atualização de firmware](/docs/Application/Hubs/FirmwareUpdating) e [recuperação do firmware](/docs/Application/Hubs/RecoveryHubFirmware)
