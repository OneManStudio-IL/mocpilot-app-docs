---
id: HubsOverview
title: Hub
description: "Gli hub nei profili MOCPilot: hub supportati, slot hub e cosa può fare ciascun hub."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hub {#hubs}

L'**hub** è il mattoncino Bluetooth del tuo modello: motori, luci e sensori si collegano alle sue porte e MOCPilot comunica con lui via Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Hub supportati {#supported-hubs}

| Hub | Note |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 porte, sensori di inclinazione e accelerazione |
| LEGO® Technic™ Move Hub | nelle auto radiocomandate LEGO Technic; trazione, sterzo, luci; [configurazioni](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 porte, treni e set City |
| LEGO® Move Hub / BOOST (88006) | 2 motori integrati + 2 porte |
| LEGO® Remote Control (88010) | i suoi pulsanti sono ingressi |
| LEGO® WeDo 2.0 Smart Hub | 2 porte |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 porte, matrice di luci, altoparlante, giroscopio; Bluetooth o USB; non disponibile su iPhone e iPad |
| BuWizz 2.0 | 4 porte, modalità di potenza |
| BuWizz 3.0 Pro | 6 porte, LED colorati sulle porte |
| SBrick, SBrick Plus | 4 porte, controllo della velocità, nessun controllo della posizione |
| Mould King 4.0, 6.0 | 4 o 6 porte, solo comandi, canali di controllo |

Elenco completo con motori e sensori: [Dispositivi supportati](/docs/Introducing/SupportedDevices).

## Slot hub {#hub-slots}

Ogni profilo ha **5 slot hub**:

- **2 slot sono gratuiti**;
- **altri 3** si sbloccano con **Sbloccare lo slot** (acquisto *Slot hub aggiuntivo*, uno per slot) oppure tutti insieme con [MocPilot Pro](/docs/Application/Account/Pro).

Gli slot acquistati appartengono al tuo account e funzionano in tutti i tuoi profili.

Limiti per Mould King: un solo tipo di Mould King per profilo, con al massimo 3 Mould King 4.0 oppure 1 Mould King 6.0 (condividono il trasmettitore Bluetooth advertising del telefono).

## Gli hub nel programma {#hubs-in-the-program}

- In **Collegamenti rapidi** ogni hub del profilo compare nella palette come uscita **Hub** e come ingresso **Hub** per i suoi pulsanti e sensori. Le operazioni che nessun hub del profilo sa eseguire non vengono proposte. Vedi [Blocco Hub e porte](/docs/Application/Links/HubsAndPorts).
- In **Blocchi logici** i blocchi per motori, luci e sensori ricevono lo slot dell'hub e la porta. Vedi [Motori](/docs/Application/BlockBuilder/Blocks/Motors).

## Per saperne di più {#read-more}

- [Aggiungere e collegare un hub](/docs/Application/Hubs/ConnectingHubs)
- [Funzioni specifiche degli hub](/docs/Application/Hubs/HubFunctions)
- [Aggiornamento del firmware](/docs/Application/Hubs/FirmwareUpdating) e [ripristino del firmware](/docs/Application/Hubs/RecoveryHubFirmware)
