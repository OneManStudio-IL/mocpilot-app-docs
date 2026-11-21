---
id: RecoveryHubFirmware
title: Ripristino del firmware dell'hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ripristino del firmware dell'hub {#hub-firmware-recovery}

Il ripristino del firmware recupera un hub che non riesce più ad avviarsi normalmente dopo un aggiornamento del firmware interrotto o non riuscito.

MOCPilot carica nell'hub un firmware funzionante, così l'hub può tornare a funzionare ed essere aggiornato di nuovo. Usa il ripristino solo quando l'hub non risponde normalmente, quando MOCPilot indica che l'hub è in modalità di ripristino o dopo un aggiornamento non riuscito.

:::warning Importante
Tieni l'hub acceso e il dispositivo vicino all'hub per tutta la durata del ripristino. Se durante il caricamento disattivi il Bluetooth, chiudi MOCPilot, togli le batterie o spegni l'hub, il ripristino può non riuscire.
:::

## Quando serve il ripristino {#when-recovery-is-required}

Il ripristino potrebbe servire se:

- Un aggiornamento del firmware non è stato completato correttamente.
- L'hub non si collega più come un normale hub.
- In MOCPilot l'hub compare come **LEGO Bootloader**.
- MOCPilot rileva che l'hub è collegato in modalità di ripristino del firmware.

Prima di iniziare, assicurati che l'hub abbia la batteria sufficientemente carica, che il telefono, tablet o computer sia carico e che il Bluetooth sia attivo.

## Hub supportati {#supported-hubs}

Il ripristino funziona con gli stessi hub dell'aggiornamento del firmware:

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

## Mettere Technic Hub, Boost Hub o City Hub in modalità di ripristino {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Questi hub si collegano tramite il loro bootloader:

1. Spegni l'hub.
2. Tieni premuto il pulsante verde.
3. Continua a tenerlo premuto finché il LED dell'hub non inizia a lampeggiare in viola.
4. Non rilasciare il pulsante mentre il LED lampeggia in viola.
5. Tenendo ancora premuto il pulsante, apri **I miei hub Bluetooth** in MOCPilot e collegati all'hub.
6. Quando l'hub è collegato in modalità bootloader, puoi rilasciare il pulsante.

In modalità di ripristino l'hub potrebbe comparire come **LEGO Bootloader** invece che con il suo nome abituale.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hub LEGO Bootloader nell'elenco degli hub con l'azione di ripristino del firmware" />

## Mettere il Technic Move Hub in modalità di ripristino {#put-a-technic-move-hub-into-recovery-mode}

Il Technic Move Hub si ripristina in modo diverso: non si collega come **LEGO Bootloader**. La sequenza di pulsanti qui sotto carica invece il firmware di fabbrica **1.2.3**, che non è pensato per l'uso quotidiano.

Per ripristinarne il firmware:

1. Spegni l'hub.
2. Tieni premuto il pulsante verde.
3. Continua a tenere premuto il pulsante verde per circa un minuto.
4. Rilascia il pulsante.
5. Attendi che il LED dell'hub inizi a lampeggiare in bianco.
6. Apri **I miei hub Bluetooth** in MOCPilot e collegati all'hub.

Quando l'hub si collega, MOCPilot rileva il firmware di fabbrica e propone di aggiornarlo all'ultima versione. Avvia l'aggiornamento e attendi che termini.

## Avviare il ripristino dalla finestra di dialogo {#start-recovery-from-the-dialog}

Quando MOCPilot rileva un hub collegato in modalità di ripristino, mostra una finestra di ripristino.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Finestra di hub in modalità di ripristino rilevato" />

Seleziona **Ripristina** per iniziare a caricare il firmware nell'hub.

Se non sei pronto, seleziona **Annulla**. Puoi avviare il ripristino più tardi dal menu dell'hub.

## Avviare il ripristino dal menu dell'hub {#start-recovery-from-the-hub-menu}

Per avviare il ripristino manualmente:

1. Apri **I miei hub Bluetooth**.
2. Trova l'hub indicato come **LEGO Bootloader**.
3. Apri il menu dell'hub.
4. Seleziona **Ripristina firmware dell'hub**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Azione Ripristina firmware dell'hub nel menu contestuale dell'hub" />

## Durante il ripristino del firmware {#during-firmware-recovery}

MOCPilot carica il firmware nell'hub e ne mostra l'avanzamento.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Schermata di avanzamento del ripristino del firmware" />

Attendi il completamento. Non allontanare l'hub dal dispositivo, non chiudere l'app, non disattivare il Bluetooth e non togliere l'alimentazione all'hub.

L'hub potrebbe riavviarsi o ricollegarsi più volte. È normale: tieni MOCPilot aperto e attendi.

## Completare il ripristino {#finish-recovery}

Al termine del ripristino MOCPilot mostra una conferma.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Finestra di ripristino del firmware completato" />

Seleziona **OK**. L'hub dovrebbe riavviarsi e ricollegarsi come un normale hub, non più come **LEGO Bootloader**.

Poi controlla l'hub in **I miei hub Bluetooth**. Se MOCPilot chiede ancora un aggiornamento del firmware, esegui un normale [aggiornamento del firmware](/docs/Application/Hubs/FirmwareUpdating/).

## Se il ripristino non riesce {#if-recovery-fails}

Se il ripristino non riesce:

1. Tieni l'hub vicino al dispositivo.
2. Spegni e riaccendi l'hub.
3. Metti di nuovo l'hub in modalità di ripristino.
4. In MOCPilot collegati a **LEGO Bootloader**.
5. Avvia di nuovo **Ripristina firmware dell'hub**.

Se l'errore si ripresenta, ripeti l'intera procedura. Se diversi tentativi non vanno a buon fine, sostituisci o ricarica le batterie e riprova.
