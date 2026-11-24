---
id: HubsOverview
title: Hubbar
description: "Hubbar i MOCPilot-profiler: hubbar som stöds, hubbplatser och vad varje hubb kan göra."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubbar {#hubs}

En **hubb** är din modells Bluetooth-kloss: motorer, lampor och sensorer ansluts till dess portar, och MOCPilot kommunicerar med den via Bluetooth.

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

## Hubbar som stöds {#supported-hubs}

| Hubb | Anmärkningar |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 portar, lutnings- och accelerationssensorer |
| LEGO® Technic™ Move Hub | i LEGO Technics radiostyrda bilar; körning, styrning, lampor; [konfigurationer](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 portar, tåg och City-set |
| LEGO® Move Hub / BOOST (88006) | 2 inbyggda motorer + 2 portar |
| LEGO® Remote Control (88010) | dess knappar är indata |
| LEGO® WeDo 2.0 Smart Hub | 2 portar |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 portar, ljusmatris, högtalare, gyroskop; Bluetooth eller USB; inte på iPhone och iPad |
| LEGO® SPIKE™ Prime Hub (45601) | beta; samma hub som Robot Inventor med SPIKE Legacy-firmware; Bluetooth eller USB; inte på iPhone och iPad |
| LEGO® SPIKE™ Essential Hub (45609) | beta; 2 portar, lampa, lutning och acceleration; Bluetooth Low Energy |
| BuWizz 2.0 | 4 portar, effektlägen |
| BuWizz 3.0 Pro | 6 portar, portfärgade lysdioder |
| SBrick, SBrick Plus | 4 portar, hastighetsstyrning, ingen positionsstyrning |
| Mould King 4.0, 6.0 | 4 eller 6 portar, bara kommandon, styrkanaler |

Fullständig lista med motorer och sensorer: [Enheter som stöds](/docs/Introducing/SupportedDevices).

## Hubbplatser {#hub-slots}

Varje profil har **5 hubbplatser**:

- **2 platser är gratis**;
- **3 till** låses upp med **Lås upp plats** (ett köp av *Extra hubbplats*, ett per plats) eller alla på en gång med [MocPilot Pro](/docs/Application/Account/Pro).

Köpta platser hör till ditt konto och fungerar i alla dina profiler.

Begränsningar för Mould King: en Mould King-typ per profil, med upp till 3 Mould King 4.0 eller 1 Mould King 6.0 (de delar telefonens sändare för Bluetooth-annonsering).

## Hubbar i programmet {#hubs-in-the-program}

- I **Snabbkopplingar** visas varje hubb i profilen i paletten som en **Hubb**-utgång och som en **Hubb**-ingång för dess knappar och sensorer. Åtgärder som ingen hubb i profilen kan utföra erbjuds inte. Se [Hubbblocket och portar](/docs/Application/Links/HubsAndPorts).
- I **Logikblock** tar motor-, lamp- och sensorblocken hubbplats och port. Se [Motorer](/docs/Application/BlockBuilder/Blocks/Motors).

## Läs mer {#read-more}

- [Lägga till och ansluta en hubb](/docs/Application/Hubs/ConnectingHubs)
- [Hubbspecifika funktioner](/docs/Application/Hubs/HubFunctions)
- [Uppdatera firmware](/docs/Application/Hubs/FirmwareUpdating) och [återställa firmware](/docs/Application/Hubs/RecoveryHubFirmware)
