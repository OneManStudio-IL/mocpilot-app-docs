---
id: SupportedDevices
title: Hub, motori e sensori supportati
description: "Hub, motori e sensori che funzionano con MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Dispositivi supportati {#supported-devices}

MOCPilot funziona con questi hub, motori e sensori. Ogni hub funziona con entrambi gli editor di programmi, [Collegamenti rapidi](/docs/Application/Links/LinksIntroducing) e [Blocchi logici](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hub {#hubs}

<SupportedHubsTable />

Note:

- Un profilo ha 5 slot per gli hub: 2 sono gratuiti, altri 3 si ottengono acquistando slot aggiuntivi o con [MocPilot Pro](/docs/Application/Account/Pro).
- Gli hub **Mould King** ricevono solo comandi (niente sensori, nessun riscontro). In un profilo si può usare un solo tipo di Mould King: fino a 3 hub Mould King 4.0 oppure 1 Mould King 6.0.
- L'hub **Robot Inventor** (LEGO® Large Hub) usa il Bluetooth classico e non è disponibile su iPhone e iPad.
- L'aggiornamento e il ripristino del firmware sono disponibili per Technic Hub, Technic Move Hub, BOOST Move Hub e City Hub. Vedi [Aggiornamento del firmware](/docs/Application/Hubs/FirmwareUpdating).
- Cosa sa fare ogni hub oltre a motori e luci è descritto in [Funzioni specifiche degli hub](/docs/Application/Hubs/HubFunctions).

## Motori {#motors}

<SupportedMotorsTable />

I motori con encoder (motori angolari, Technic L e XL) riportano velocità e posizione, quindi possono essere usati come servo, ruotare di un certo numero di gradi e raggiungere posizioni. I motori semplici (motore del treno, motore lineare medio semplice) accettano solo la velocità.

## Sensori e luci {#sensors-and-lights}

<SupportedSensorsTable />

Si possono usare anche i sensori integrati negli hub (batteria, inclinazione, accelerazione, temperatura) e i sensori del tuo smartphone o tablet. Vedi [Sensori dello smartphone](/docs/Application/Dashboard/PhoneSensors).
