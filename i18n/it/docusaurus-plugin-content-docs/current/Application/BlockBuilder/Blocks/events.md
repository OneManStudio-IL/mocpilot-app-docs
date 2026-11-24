---
id: Events
title: Eventi
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Eventi {#events}

La categoria **Eventi** contiene i blocchi che avviano gli script quando succede qualcosa, oltre ai blocchi che inviano messaggi tra gli script. Usa **Aggiungi messaggio** ed **Eliminare messaggio** in cima alla categoria per gestire i messaggi.

## Eventi principali {#core-events}

### `quando il programma inizia` (Principiante) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Esegue il suo script una volta, all'avvio del programma.

- Uso tipico: impostare i valori iniziali delle variabili, portare i motori nello stato iniziale, mostrare un messaggio «pronto».

### `quando …` (Avanzato) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Esegue il suo script quando la condizione nello spazio passa da falsa a vera. Mentre lo script è in esecuzione, il blocco attende; scatta di nuovo solo dopo che la condizione è tornata falsa e poi di nuovo vera.

- Uso tipico: reagire a uno stato, ad esempio `quando il timer > 5 e l'interruttore è acceso`.

### `quando il timer > …` (Avanzato) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Esegue il suo script quando il timer del programma supera il valore (in secondi).

- Uso tipico: azioni ritardate, fasi a tempo. Azzera il timer con **ripristina timer** (Sensori).

### `quando ricevo …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Esegue il suo script quando viene trasmesso il messaggio selezionato.

- Uso tipico: coordinare più script.

### `trasmettere …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Invia un messaggio a tutti gli script che iniziano con **quando ricevo** per quel messaggio e prosegue subito.

- Uso tipico: dire ad altri script di partire senza aspettarli.

### `trasmettere … e aspettare` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Invia un messaggio e mette in pausa questo script finché tutti gli script che l'hanno ricevuto non hanno finito.

- Uso tipico: sequenze passo per passo in cui l'ordine conta.

## Eventi degli hub {#hub-events}

Questi blocchi compaiono quando un hub del profilo li supporta. Non esistono per gli hub Mould King.

### `quando … … pulsante …` (Principiante) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Viene eseguito quando un pulsante dell'hub viene premuto o rilasciato.

- Opzioni di stato: `premuto`, `rilasciato`, `cambiato`
- Hub: hub LEGO Powered Up, WeDo 2.0 e Robot Inventor. L'elenco dei pulsanti dipende dall'hub.

### `quando … è connesso / disconnesso` (Principiante) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Viene eseguito quando l'hub si collega o si scollega.

- Uso tipico: fermare il modello in sicurezza quando la connessione si interrompe e ripristinarne lo stato quando torna.

### `quando … % batteria modificata` (Principiante) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Viene eseguito quando cambia il livello della batteria riportato dall'hub.

- Hub: quelli che riportano il livello della batteria.
- Uso tipico: un avviso di batteria scarica, il passaggio a una modalità di risparmio energetico.

### `quando … i dati dell’accelerometro sono cambiati` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Viene eseguito quando cambiano i valori dell'accelerometro dell'hub.

- Hub: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `quando … inclinazione … angolo cambiato` (Principiante) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Viene eseguito quando cambia l'angolo di inclinazione dell'hub.

- Opzioni dell'angolo: `qualsiasi`, `beccheggio`, `rollio`, `imbardata`
- Hub: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `imbardata` è disponibile solo su Technic Hub e Robot Inventor.

### `quando … orientamento cambiato` (Principiante) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Viene eseguito quando cambia l'orientamento dell'hub, cioè quando un altro lato dell'hub è rivolto verso l'alto.

- Hub: gli stessi dell'evento di inclinazione.

## Eventi dei sensori {#sensor-events}

Questi eventi leggono un sensore collegato a una porta dell'hub. Hub: City Hub, Technic Hub, BOOST Move Hub e l'hub MINDSTORMS Robot Inventor (non SBrick, BuWizz, WeDo 2.0 o Mould King).

### Sensore Technic: `quando il colore è …` (Principiante) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Viene eseguito quando il Technic Color Sensor vede il colore selezionato.

### Sensore Technic: `quando … più vicino di / più lontano di / esattamente a …` (Principiante) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Viene eseguito quando la distanza misurata dal Technic Distance Sensor soddisfa la condizione.

- Opzioni di confronto: `più vicino di`, `più lontano di`, `esattamente a`
- Unità: `mm`, `cm`, `pollici`, `%`

### Sensore BOOST: `quando … più vicino di / più lontano di / esattamente a …` (Principiante) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Viene eseguito quando la distanza misurata dal BOOST Color & Distance Sensor soddisfa la condizione.

- Opzioni di confronto: `più vicino di`, `più lontano di`, `esattamente a`
- Unità: `%`, `cm`, `pollici`

### Sensore BOOST: `quando il colore è …` (Principiante) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Viene eseguito quando il BOOST Color & Distance Sensor vede il colore selezionato.

## Eventi Robot Inventor {#robot-inventor-events}

Questi eventi provengono dall'app Robot Inventor e funzionano solo con gli [hub MINDSTORMS Robot Inventor e SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Hanno l'icona dell'hub. I valori corrispondenti si trovano nella pagina [Sensori](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `quando l’hub è …` (Principiante) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Viene eseguito una volta ogni volta che l'hub viene `toccato`, `toccato due volte`, `scosso` (predefinito) o è `in caduta`.

### `quando … è in alto` (Principiante) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Viene eseguito quando il lato scelto dell'hub si gira verso l'alto: `fronte` (la matrice di luci, predefinito), `sopra`, `lato destro`, `retro`, `sotto` o `lato sinistro`.

### `quando l’hub è inclinato …` (Avanzato) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Viene eseguito quando l'hub viene inclinato `in su`, `in giù`, `a sinistra`, `a destra` o in `qualsiasi` direzione (predefinito), di circa 12° o più.

### `quando … premuto / premuto forte / rilasciato` (Principiante) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Viene eseguito quando il Force Sensor sulla porta selezionata viene premuto, premuto forte (più di 5 newton) o rilasciato.

### `quando l’hub riceve il segnale …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Viene eseguito quando questo hub riceve da un altro hub il segnale radio con questo nome. Leggi il suo valore con [segnale ricevuto … valore](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
