---
id: FirmwareUpdating
title: Aggiornamento del firmware
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Aggiornamento del firmware {#firmware-updating}

MOCPilot può aggiornare il firmware degli hub LEGO® Powered Up supportati quando è disponibile una versione compatibile più recente.

Alcuni hub vanno aggiornati prima di funzionare correttamente con MOCPilot: il firmware più recente corregge i difetti dell'hub e aggiunge le funzioni su cui si basa l'app.

## Hub supportati {#supported-hubs}

MOCPilot può aggiornare questi hub:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Prima di iniziare {#before-you-start}

Assicurati che l'hub e il tuo telefono, tablet o computer abbiano la batteria sufficientemente carica.

Tieni l'hub acceso per tutta la durata dell'aggiornamento e il dispositivo vicino all'hub, così la connessione Bluetooth resta stabile. Non chiudere MOCPilot, non disattivare il Bluetooth e non spegnere l'hub mentre il firmware viene caricato.

:::warning Importante
Un aggiornamento interrotto può lasciare l'hub con un firmware incompleto. In tal caso l'hub potrebbe richiedere il ripristino del firmware prima di poter essere usato di nuovo.
:::

## Avviare l'aggiornamento {#starting-the-update}

Quando colleghi un hub, MOCPilot ne controlla la versione del firmware. Se serve una versione più recente, l'app mostra la finestra **Aggiornamento firmware richiesto**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Finestra Aggiornamento firmware richiesto" />

Seleziona **Aggiorna** per avviare subito l'aggiornamento del firmware.

Per aggiornare più tardi, seleziona **Annulla**. Puoi avviare l'aggiornamento dal menu dell'hub in qualsiasi momento.

## Aggiornare più tardi dal menu dell'hub {#updating-later-from-the-hub-menu}

Per avviare l'aggiornamento manualmente:

1. Apri **I miei hub Bluetooth**.
2. Trova l'hub da aggiornare.
3. Apri il menu dell'hub.
4. Seleziona **Aggiorna firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Azione Aggiorna firmware nel menu contestuale dell'hub" />

## Durante l'aggiornamento del firmware {#during-the-firmware-update}

MOCPilot carica il firmware nell'hub e ne mostra l'avanzamento.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Schermata di avanzamento dell'aggiornamento del firmware" />

Attendi la fine del caricamento. L'hub potrebbe riavviarsi o disconnettersi per un attimo mentre viene applicato il nuovo firmware.

Poi MOCPilot cerca di nuovo l'hub. Tieni l'hub vicino e attendi che l'app si ricolleghi.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware caricato e ricerca dell'hub in corso" />

## Completare l'aggiornamento {#finishing-the-update}

Al termine dell'aggiornamento MOCPilot mostra una conferma.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Finestra di aggiornamento del firmware completato" />

Seleziona **OK**. L'hub si ricollega e la sua scheda mostra la nuova versione del firmware.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Scheda dell'hub con la versione del firmware aggiornata" />

Ora puoi continuare a usare l'hub con MOCPilot.

## Se l'aggiornamento non riesce {#if-the-update-fails}

Se l'aggiornamento non riesce, MOCPilot mostra un messaggio di errore.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Finestra di aggiornamento del firmware non riuscito" />

Per prima cosa spegni e riaccendi l'hub ed esegui di nuovo l'aggiornamento:

1. Spegni l'hub.
2. Riaccendi l'hub.
3. Tieni l'hub vicino al dispositivo.
4. Collegati all'hub in MOCPilot.
5. Avvia di nuovo l'aggiornamento del firmware.

Se l'hub continua a non rispondere normalmente, potrebbe richiedere il ripristino del firmware: vedi [Ripristino del firmware dell'hub](/docs/Application/Hubs/RecoveryHubFirmware/).
