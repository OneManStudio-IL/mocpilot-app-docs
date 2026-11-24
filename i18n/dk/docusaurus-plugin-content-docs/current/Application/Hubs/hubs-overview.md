---
id: HubsOverview
title: Hubs
description: "Hubs i MOCPilot-profiler: understøttede hubs, hub-slots og hvad hver hub kan."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubs {#hubs}

En **hub** er din models Bluetooth-klods: Motorer, lys og sensorer sættes i dens porte, og MOCPilot kommunikerer med den via Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Understøttede hubs {#supported-hubs}

| Hub | Bemærkninger |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 porte, hældnings- og accelerationssensorer |
| LEGO® Technic™ Move Hub | i fjernstyrede LEGO Technic-biler; kørsel, styring, lys; [konfigurationer](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 porte, tog og City-sæt |
| LEGO® Move Hub / BOOST (88006) | 2 indbyggede motorer + 2 porte |
| LEGO® Remote Control (88010) | dens knapper er input |
| LEGO® WeDo 2.0 Smart Hub | 2 porte |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 porte, lysmatrix, højttaler, gyroskop; Bluetooth eller USB; ikke på iPhone og iPad |
| BuWizz 2.0 | 4 porte, effekttilstande |
| BuWizz 3.0 Pro | 6 porte, farve-LED'er på portene |
| SBrick, SBrick Plus | 4 porte, hastighedsstyring, ingen positionsstyring |
| Mould King 4.0, 6.0 | 4 eller 6 porte, kun kommandoer, styrekanaler |

Komplet liste med motorer og sensorer: [Understøttede enheder](/docs/Introducing/SupportedDevices).

## Hub-slots {#hub-slots}

Hver profil har **5 hub-slots**:

- **2 slots er gratis**;
- **3 mere** låses op med **Lås slot op** (et køb af *ekstra hub-slot*, ét pr. slot) eller alle på én gang med [MocPilot Pro](/docs/Application/Account/Pro).

Købte slots hører til din konto og virker i alle dine profiler.

Begrænsninger for Mould King: én Mould King-type pr. profil med op til 3 Mould King 4.0 eller 1 Mould King 6.0 (de deler telefonens Bluetooth-advertising-sender).

## Hubs i programmet {#hubs-in-the-program}

- I **Hurtige forbindelser** vises hver hub i profilen i paletten som et **Hub**-output og som et **Hub**-input til dens knapper og sensorer. Handlinger, som ingen hub i profilen kan udføre, tilbydes ikke. Se [Hub-blokken og porte](/docs/Application/Links/HubsAndPorts).
- I **Logikblokke** angiver motor-, lys- og sensorblokke hub-slot og port. Se [Motorer](/docs/Application/BlockBuilder/Blocks/Motors).

## Læs mere {#read-more}

- [Tilføj og forbind en hub](/docs/Application/Hubs/ConnectingHubs)
- [Hub-specifikke funktioner](/docs/Application/Hubs/HubFunctions)
- [Firmwareopdatering](/docs/Application/Hubs/FirmwareUpdating) og [gendannelse af firmware](/docs/Application/Hubs/RecoveryHubFirmware)
