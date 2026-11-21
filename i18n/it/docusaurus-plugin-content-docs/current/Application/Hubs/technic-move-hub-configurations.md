---
id: TechnicMoveHubConfigurations
title: Configurazioni del Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Configurazioni del Technic Move Hub {#technic-move-hub-configurations}

## Panoramica {#overview}

A differenza degli altri hub LEGO® Powered Up, il Technic Move Hub si comporta in modo diverso a seconda della configurazione caricata al suo interno.

MOCPilot può cambiare questa configurazione, così l'hub corrisponde al set LEGO ufficiale che vuoi comandare.

## Configurazioni supportate {#supported-configurations}

MOCPilot conosce queste configurazioni:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Opzioni di configurazione del Technic Move Hub nel blocco di impostazione della configurazione" />

## Cambiare configurazione da I miei hub Bluetooth {#change-configuration-from-my-bluetooth-hubs}

Per cambiare la configurazione nella pagina **I miei hub Bluetooth**:

1. Apri **I miei hub Bluetooth**.
2. Trova il Technic Move Hub.
3. Apri il menu dell'hub.
4. Seleziona **Seleziona configurazione**.
5. Scegli la configurazione.
6. Conferma nella finestra di dialogo.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Menu contestuale del Technic Move Hub con l'azione Seleziona configurazione" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Sottomenu delle configurazioni del Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Finestra di conferma della riconfigurazione del Technic Move Hub" />

:::warning Importante
Cambiare la configurazione scrive un programma nell'hub, in modo simile a un aggiornamento del firmware.

Tieni l'hub acceso per tutta la procedura e il telefono, tablet o computer acceso e vicino all'hub, così la connessione Bluetooth resta stabile. Non chiudere MOCPilot, non disattivare il Bluetooth e non spegnere l'hub mentre la configurazione cambia.

Un cambio interrotto può danneggiare il firmware dell'hub. In tal caso l'hub potrebbe richiedere il [ripristino del firmware](/docs/Application/Hubs/RecoveryHubFirmware/) prima di poter essere usato di nuovo.
:::

Mentre la configurazione cambia, l'hub ignora i normali comandi e il suo LED passa da un colore all'altro. Quando la nuova configurazione è pronta, l'hub si riavvia.

## Blocchi di configurazione {#configuration-blocks}

I Blocchi logici possono leggere e cambiare la configurazione mentre un programma è in esecuzione.

### Impostare la configurazione dell'hub {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Blocco di impostazione della configurazione dell'hub" />

Il blocco **impostare … configurazione su …** carica nell'hub selezionato una delle configurazioni supportate.

- Selettore dell'hub: sceglie l'hub da riconfigurare.
- Selettore della configurazione: sceglie la configurazione di destinazione.
- Configurazioni disponibili per il Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** e **Batmobile™ Tumbler**.

Vedi la [documentazione del blocco di impostazione della configurazione](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Configurazione dell'hub {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Blocco valore della configurazione dell'hub" />

Il blocco **ottenere … configurazione come …** restituisce la configurazione attuale dell'hub selezionato.

- Selettore dell'hub: sceglie l'hub da leggere.
- Formato di uscita: **testo** restituisce il nome della configurazione.
- Formato di uscita: **indice** restituisce l'indice della configurazione, utile per i confronti nelle condizioni.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Opzioni del formato di uscita del blocco della configurazione dell'hub" />

Vedi la [documentazione del blocco della configurazione dell'hub](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Impulso di potenza {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Blocco impulso di potenza del Technic Move Hub" />

Il blocco **Impulso di potenza** invia un impulso di potenza al Technic Move Hub selezionato. Funziona solo con la configurazione **Batmobile™ Tumbler**.

L'hub fa quindi girare i motori alla massima potenza e velocità per un breve tempo, circa 1–2 secondi. In Collegamenti rapidi la stessa funzione è l'operazione [Impulso di potenza](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Vedi la [documentazione del blocco impulso di potenza](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Cambiare configurazione durante l'esecuzione del programma {#change-configuration-during-program-runtime}

Un programma può anche cambiare la configurazione mentre è in esecuzione. Un approccio tipico:

1. Leggi la configurazione attuale dell'hub.
2. Confrontala con la configurazione richiesta dal profilo.
3. Se la configurazione è diversa, imposta quella richiesta.
4. Dopo la riconfigurazione, leggi di nuovo la configurazione.
5. Prosegui solo quando l'hub riporta la configurazione prevista.
6. Disconnetti l'hub o ferma il programma se la configurazione richiesta non è stata applicata.

Il profilo pronto all'uso per questo hub mostra come farlo.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Esempio di blocchi che cambiano la configurazione del Technic Move Hub durante l'esecuzione" />
