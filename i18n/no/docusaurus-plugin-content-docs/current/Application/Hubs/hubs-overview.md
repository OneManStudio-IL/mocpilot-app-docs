---
id: HubsOverview
title: Hubber
description: "Hubber i MOCPilot-profiler: støttede hubber, hubplasser og hva hver hub kan gjøre."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubber {#hubs}

En **hub** er Bluetooth-klossen i modellen din: motorer, lys og sensorer kobles til portene, og MOCPilot kommuniserer med den via Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Støttede hubber {#supported-hubs}

| Hub | Merknader |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 porter, helnings- og akselerasjonssensorer |
| LEGO® Technic™ Move Hub | i LEGO Technic-fjernstyrte biler; kjøring, styring, lys; [konfigurasjoner](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 porter, tog og City-sett |
| LEGO® Move Hub / BOOST (88006) | 2 innebygde motorer + 2 porter |
| LEGO® Remote Control (88010) | knappene er innganger |
| LEGO® WeDo 2.0 Smart Hub | 2 porter |
| LEGO® Large Hub / Robot Inventor (88016) | 6 porter, lysmatrise; ikke på iPhone og iPad |
| BuWizz 2.0 | 4 porter, effektmoduser |
| BuWizz 3.0 Pro | 6 porter, LED-er med portfarge |
| SBrick, SBrick Plus | 4 porter, hastighetsstyring, ingen posisjonsstyring |
| Mould King 4.0, 6.0 | 4 eller 6 porter, bare kommandoer, styrekanaler |

Full liste med motorer og sensorer: [Støttede enheter](/docs/Introducing/SupportedDevices).

## Hubplasser {#hub-slots}

Hver profil har **5 hubplasser**:

- **2 plasser er gratis**;
- **3 til** låses opp med **Lås opp plass** (et kjøp av *ekstra hubplass*, ett per plass) eller alle på én gang med [MocPilot Pro](/docs/Application/Account/Pro).

Kjøpte plasser hører til kontoen din og fungerer i alle profilene dine.

Begrensninger for Mould King: én Mould King-type per profil, med opptil 3 Mould King 4.0 eller 1 Mould King 6.0 (de deler telefonens sender for Bluetooth-annonsering).

## Hubber i programmet {#hubs-in-the-program}

- I **Hurtigkoblinger** vises hver hub i profilen i paletten som en **Hub**-utgang, og som en **Hub**-inngang for knappene og sensorene sine. Operasjoner som ingen hub i profilen kan utføre, tilbys ikke. Se [Hub-blokken og porter](/docs/Application/Links/HubsAndPorts).
- I **Logikkblokker** tar motor-, lys- og sensorblokker imot hubplass og port. Se [Motorer](/docs/Application/BlockBuilder/Blocks/Motors).

## Les mer {#read-more}

- [Legg til og koble til en hub](/docs/Application/Hubs/ConnectingHubs)
- [Hubspesifikke funksjoner](/docs/Application/Hubs/HubFunctions)
- [Fastvareoppdatering](/docs/Application/Hubs/FirmwareUpdating) og [gjenoppretting av fastvare](/docs/Application/Hubs/RecoveryHubFirmware)
