---
id: Control
title: Controllo
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controllo {#control}

I blocchi di controllo decidono come viene eseguito uno script: attese, cicli, diramazioni e arresti. Quando il profilo ha degli hub, questa categoria contiene anche i blocchi che collegano gli hub e ne cambiano le impostazioni.

## Blocchi di attesa {#wait-blocks}

### `aspettare … secondi` (Principiante) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Mette in pausa lo script per il numero di secondi indicato.

### `aspettare fino a …` (Avanzato) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Mette in pausa lo script finché la condizione non diventa vera.

## Cicli {#loops}

### `ripetere …` (Avanzato) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Esegue i blocchi al suo interno il numero di volte indicato (10 per impostazione predefinita).

### `ripetere finché …` (Avanzato) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Esegue i blocchi al suo interno più e più volte, finché la condizione non diventa vera.

### `ripetere sempre` (Avanzato) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Esegue i blocchi al suo interno di continuo, finché lo script o il programma non si ferma. Sotto di esso non si può agganciare nulla.

## Diramazioni {#branches}

### `se … allora` (Principiante) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Esegue i blocchi al suo interno solo quando la condizione è vera.

### `se … allora … altro` (Avanzato) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Esegue il primo ramo quando la condizione è vera, altrimenti il secondo.

### `fai questo … e questo` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Esegue il primo gruppo di blocchi, poi il secondo, e solo allora prosegue con i blocchi sottostanti.

## Arresto {#stopping}

### `fermare …` (Principiante) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Ferma gli script; che cosa ferma esattamente dipende dall'opzione.

- `tutti`: ferma tutti gli script.
- `questa pila`: ferma solo questo script.
- `e uscire dal programma`: ferma il programma.

### `fermare altre pile` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Ferma tutti gli altri script in esecuzione; questo continua.

## Blocchi degli hub {#hub-blocks}

### `connettere / disconnettere …` (Principiante) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Collega o scollega dal programma l'hub selezionato.

- Opzioni: `connettere`, `disconnettere`
- Hub: tutti.

### `… connesso` (Principiante) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Restituisce `true` quando l'hub selezionato è collegato.

- Tipo: blocco booleano
- Hub: tutti.

### `impostare … configurazione su …` (Avanzato) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Porta l'hub in una delle sue configurazioni.

- Hub: Technic Move Hub (al momento l'unico hub con configurazioni).
- Uso tipico: passare l'hub a un'altra configurazione prima che vengano eseguiti i blocchi successivi.

### `ottenere … configurazione come …` (Avanzato) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Restituisce la configurazione attuale dell'hub.

- Tipo: blocco valore
- Uscita: `testo` o `indice`
- Hub: Technic Move Hub.
- Restituisce `NaN` quando l'hub non è collegato o non ha una configurazione.

### `impostare … modalità di alimentazione su …` (Principiante) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Imposta la modalità di potenza di un BuWizz 2.

- Modalità: `lento`, `normale`, `veloce`, `Ludicrous`
- Hub: BuWizz 2.

### `ottenere … modalità di potenza come …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Restituisce la modalità di potenza attuale di un BuWizz 2.

- Uscita: `testo` o `indice`
- Hub: BuWizz 2.

### `impostare … canale di controllo a …` (Avanzato) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Imposta il canale di controllo di un hub Mould King.

- Canali: `A`, `B`, `C`
- Hub: Mould King 4.0 e 6.0.

### `ottenere … canale di controllo come …` (Avanzato) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Restituisce il canale di controllo attuale di un hub Mould King.

- Uscita: `testo` o `indice`
- Hub: Mould King 4.0 e 6.0.
