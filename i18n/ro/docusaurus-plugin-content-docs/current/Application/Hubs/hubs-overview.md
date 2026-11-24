---
id: HubsOverview
title: Huburi
description: "Huburile în profilurile MOCPilot: huburi acceptate, sloturi de hub și ce poate face fiecare hub."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Huburi {#hubs}

Un **Hub** este cărămida Bluetooth a modelului: motoarele, luminile și senzorii se conectează la porturile lui, iar MOCPilot comunică cu el prin Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/spike_hub_p.webp')} alt="SPIKE Prime Hub" style={{maxWidth: 110}} /><div>SPIKE Prime</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/essential_hub_p.webp')} alt="SPIKE Essential Hub" style={{maxWidth: 110}} /><div>SPIKE Essential</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Huburi acceptate {#supported-hubs}

| Hub | Observații |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 porturi, senzori de înclinare și de accelerație |
| LEGO® Technic™ Move Hub | în mașinile LEGO Technic cu telecomandă; tracțiune, direcție, lumini; [configurații](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 porturi, trenuri și seturi City |
| LEGO® Move Hub / BOOST (88006) | 2 motoare încorporate + 2 porturi |
| LEGO® Remote Control (88010) | butoanele sale sunt intrări |
| LEGO® WeDo 2.0 Smart Hub | 2 porturi |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 porturi, matrice de lumini, difuzor, giroscop; Bluetooth sau USB; nu este disponibil pe iPhone și iPad |
| LEGO® SPIKE™ Prime Hub (45601) | beta; același hub ca Robot Inventor, cu firmware-ul SPIKE Legacy; Bluetooth sau USB; nu este disponibil pe iPhone și iPad |
| LEGO® SPIKE™ Essential Hub (45609) | beta; 2 porturi, lumină, înclinare și accelerație; Bluetooth Low Energy |
| BuWizz 2.0 | 4 porturi, moduri de putere |
| BuWizz 3.0 Pro | 6 porturi, LED-uri de culoare pe porturi |
| SBrick, SBrick Plus | 4 porturi, controlul vitezei, fără controlul poziției |
| Mould King 4.0, 6.0 | 4 sau 6 porturi, doar comenzi, canale de control |

Lista completă cu motoare și senzori: [Dispozitive acceptate](/docs/Introducing/SupportedDevices).

## Sloturi de hub {#hub-slots}

Fiecare profil are **5 sloturi de hub**:

- **2 sloturi sunt gratuite**;
- **încă 3** se deblochează cu **Deblocați slotul** (o achiziție *Slot de hub suplimentar*, câte una pentru fiecare slot) sau toate odată cu [MocPilot Pro](/docs/Application/Account/Pro).

Sloturile cumpărate aparțin contului tău și funcționează în toate profilurile.

Limite pentru Mould King: un singur tip de Mould King per profil, cu cel mult 3 Mould King 4.0 sau 1 Mould King 6.0 (folosesc în comun emițătorul Bluetooth de advertising al telefonului).

## Huburile în program {#hubs-in-the-program}

- În **Legături rapide**, fiecare hub al profilului apare în paletă ca ieșire **Hub** și ca intrare **Hub** pentru butoanele și senzorii săi. Operațiile pe care niciun hub al profilului nu le poate executa nu sunt oferite. Consultă [Blocul Hub și porturile](/docs/Application/Links/HubsAndPorts).
- În **Blocuri logice**, blocurile pentru motoare, lumini și senzori primesc slotul de hub și portul. Consultă [Motoare](/docs/Application/BlockBuilder/Blocks/Motors).

## Mai multe informații {#read-more}

- [Adăugarea și conectarea unui hub](/docs/Application/Hubs/ConnectingHubs)
- [Funcții specifice huburilor](/docs/Application/Hubs/HubFunctions)
- [Actualizarea firmware-ului](/docs/Application/Hubs/FirmwareUpdating) și [recuperarea firmware-ului](/docs/Application/Hubs/RecoveryHubFirmware)
