---
id: HubsOverview
title: Huby
description: "Huby v profilech MOCPilot: podporované huby, sloty pro huby a co který hub umí."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Huby {#hubs}

**Hub** je bluetoothová kostka vašeho modelu: do jejích portů se zapojují motory, světla a senzory a MOCPilot s ní komunikuje přes Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Podporované huby {#supported-hubs}

| Hub | Poznámky |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 porty, senzory náklonu a zrychlení |
| LEGO® Technic™ Move Hub | v dálkově ovládaných autech LEGO Technic; pohon, řízení, světla; [konfigurace](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 porty, vláčky a sady City |
| LEGO® Move Hub / BOOST (88006) | 2 vestavěné motory + 2 porty |
| LEGO® Remote Control (88010) | jeho tlačítka slouží jako vstupy |
| LEGO® WeDo 2.0 Smart Hub | 2 porty |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 portů, světelná matice, reproduktor, gyroskop; Bluetooth nebo USB; ne na iPhonu a iPadu |
| BuWizz 2.0 | 4 porty, režimy výkonu |
| BuWizz 3.0 Pro | 6 portů, barevné LED portů |
| SBrick, SBrick Plus | 4 porty, řízení rychlosti, bez řízení polohy |
| Mould King 4.0, 6.0 | 4 nebo 6 portů, jen příkazy, řídicí kanály |

Úplný seznam s motory a senzory: [Podporovaná zařízení](/docs/Introducing/SupportedDevices).

## Sloty pro huby {#hub-slots}

Každý profil má **5 slotů pro huby**:

- **2 sloty jsou zdarma**;
- **další 3** odemknete tlačítkem **Odemknout slot** (nákup *Další slot pro hub*, jeden na slot) nebo všechny najednou s [MocPilot Pro](/docs/Application/Account/Pro).

Zakoupené sloty patří vašemu účtu a fungují ve všech vašich profilech.

Omezení Mould King: jeden typ Mould King na profil, nejvýše 3 Mould King 4.0 nebo 1 Mould King 6.0 (sdílejí vysílač Bluetooth advertisingu v telefonu).

## Huby v programu {#hubs-in-the-program}

- V editoru **Rychlá propojení** se každý hub profilu objeví v paletě jako výstup **Hub** a jako vstup **Hub** pro svá tlačítka a senzory. Operace, které žádný hub profilu neumí, se nenabízejí. Viz [Blok Hub a porty](/docs/Application/Links/HubsAndPorts).
- V editoru **Logické bloky** berou bloky motorů, světel a senzorů slot hubu a port. Viz [Motory](/docs/Application/BlockBuilder/Blocks/Motors).

## Další informace {#read-more}

- [Přidání a připojení hubu](/docs/Application/Hubs/ConnectingHubs)
- [Speciální funkce hubů](/docs/Application/Hubs/HubFunctions)
- [Aktualizace firmwaru](/docs/Application/Hubs/FirmwareUpdating) a [obnova firmwaru](/docs/Application/Hubs/RecoveryHubFirmware)
