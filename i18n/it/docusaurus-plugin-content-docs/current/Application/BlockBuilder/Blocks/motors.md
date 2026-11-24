---
id: Motors
title: Motori
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motori {#motors}

I blocchi Motori avviano, fermano e posizionano i motori collegati alle porte degli hub e regolano il modo in cui si muovono. La categoria compare quando un hub del profilo ha porte per motori. In ogni blocco scegli l'hub e una o più porte.

Alcuni blocchi richiedono un motore con sensore di rotazione integrato (encoder), come i motori angolari Technic, e un hub in grado di controllarlo. Questi blocchi sono indicati come «motori con encoder». Non sono disponibili per gli hub SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 e Mould King. Il Technic Move Hub ha un proprio insieme di blocchi, in fondo a questa pagina.

## Far girare i motori {#running-motors}

### `imposta velocità a …` (Avanzato) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Imposta la velocità (da −100 a 100 %) usata da **avvia motore** ed **eseguire … per** su queste porte. Questo blocco da solo non avvia il motore.

### `avvia motore …` (Principiante) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Avvia il motore nel verso selezionato alla velocità impostata con **imposta velocità a**.

- Verso: in senso orario o antiorario

### `avvia motore a … % velocità` (Principiante) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Avvia il motore alla velocità indicata, da −100 a 100 %. Una velocità negativa lo fa girare nel verso opposto.

- Uso tipico: guidare con un joystick o un cursore: inserisci il valore del controllo nello spazio della velocità.

### `fermare motore` (Principiante) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Ferma il motore.

### `eseguire … per …` (Avanzato) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Fa girare il motore nel verso selezionato per un certo numero di rotazioni, gradi o secondi.

- Verso: in senso orario o antiorario
- Unità: `rotazioni`, `gradi`, `secondi`
- Solo motori con encoder.

### `eseguire per … a … % velocità` (Avanzato) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Fa girare il motore per un certo numero di rotazioni, gradi o secondi alla velocità indicata.

- Unità: `rotazioni`, `gradi`, `secondi`
- Solo motori con encoder.

## Posizione {#position}

### `vai … alla posizione …` (Avanzato) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Porta il motore in una posizione assoluta (riferita al segno di zero del motore stesso).

- Percorso: `percorso più breve`, `in senso orario`, `in senso antiorario`
- Solo motori con encoder.

### `vai alla posizione relativa … a … % velocità` (Principiante) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Porta il motore in una posizione, in gradi, contata a partire dal punto impostato con **imposta posizione relativa**.

- Uso tipico: sterzo con un servo, in cui il valore del joystick fornisce l'angolo.
- Solo motori con encoder; su BuWizz 3 usa il blocco qui sotto.

### `vai alla posizione relativa …` (BuWizz 3) (Principiante) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
La versione per BuWizz 3 del blocco precedente, senza lo spazio per la velocità.

- Hub: BuWizz 3, con motori dotati di encoder.

### `imposta posizione relativa …` (Principiante) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Dichiara che la posizione attuale del motore corrisponde al valore indicato. Le posizioni relative vengono contate a partire da essa.

- Solo motori con encoder.

### `calibrare cremagliera … centro … gradi …` (Principiante) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Trova il centro e la corsa di una cremagliera dello sterzo.

- Il motore porta la cremagliera fino a entrambe le estremità, misura quanto può spostarsi e mette il risultato nelle due variabili che inserisci negli spazi: la posizione del centro e l'escursione in gradi. La cremagliera si ferma al centro, ma lì la sua posizione relativa vale quanto il centro, non 0, quindi aggiungi **imposta posizione relativa** 0 subito dopo questo blocco; poi sterza con `escursione × joystick / 100`.
- Lo sterzo deve avere finecorsa meccanici rigidi a entrambe le estremità (la fine della cremagliera o degli ingranaggi).
- Solo motori con encoder.

## Impostazioni del motore {#motor-settings}

### `imposta motore a … all'arresto` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Sceglie che cosa fa il motore quando si ferma.

- `freno`: si ferma rapidamente.
- `mantieni posizione`: mantiene attivamente la sua posizione (utile per lo sterzo).
- `inerzia`: rallenta liberamente fino a fermarsi.
- Solo motori con encoder.

### `attivare il rilevamento del blocco …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Attiva o disattiva il rilevamento del blocco del motore. Quando è attivo, un motore che si blocca rinuncia invece di continuare a spingere, così un blocco che attende il motore può terminare.

- Hub: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (il blocco ha l'icona dell'hub).

### `imposta accelerazione a …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Sceglie quanto rapidamente accelera il motore.

- Opzioni: `predefinito`, `veloce`, `bilanciato`, `morbido`, `lento`, `molto lento`
- Solo motori con encoder.

### `imposta decelerazione a …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Sceglie quanto rapidamente rallenta il motore.

- Opzioni: `predefinito`, `veloce`, `bilanciato`, `morbido`, `lento`, `molto lento`
- Solo motori con encoder.

## Valori del motore {#motor-values}

### `posizione` (Principiante) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Restituisce la posizione assoluta del motore.

- Solo motori con encoder.

### `posizione relativa` (Principiante) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Restituisce la posizione relativa del motore, in gradi.

- Solo motori con encoder.

### `velocità` (Principiante) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Restituisce la velocità attuale del motore.

### `potenza` (Avanzato) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Restituisce la potenza attuale del motore.

- Hub: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (il blocco ha l'icona dell'hub).

## Robot Inventor {#robot-inventor-motors}

Questi blocchi provengono dall'app Robot Inventor e funzionano solo con gli [hub MINDSTORMS Robot Inventor e SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Hanno l'icona dell'hub. Per guidare un robot a due ruote, vedi i blocchi [Movimento](/docs/Application/BlockBuilder/Blocks/Movement).

### `avvia motore a … % potenza` (Avanzato) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Avvia i motori sulle porte selezionate alla potenza indicata, da −100 a 100 % (75 % come predefinito). A differenza di **avvia motore a … % velocità**, il motore non mantiene una velocità regolata: sotto carico rallenta, come un motore senza encoder.

### `il motore è stato interrotto?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true` se l'ultimo comando del motore su questa porta non è terminato perché un altro blocco motore sulla stessa porta l'ha interrotto.

## Technic Move Hub {#technic-move-hub}

Il Technic Move Hub comanda i suoi motori integrati con questi blocchi al posto dei blocchi per le porte descritti sopra.

### `avvia i motori a … % velocità` (Principiante) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Avvia i motori di trazione alla velocità indicata.

### `impulso di potenza` (Principiante) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Invia un impulso di potenza ai motori di trazione.

- Uso tipico: una breve spinta prima dei blocchi successivi.

### `fermare i motori` (Principiante) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Ferma i motori di trazione.

### `imposta il freno dei motori …` (Principiante) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Attiva o disattiva il freno dei motori di trazione.

- Opzioni: `spento`, `abilitato`

### `imposta la cremagliera dello sterzo su …` (Principiante) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Porta lo sterzo nella posizione indicata.

### `calibrare la cremagliera dello sterzo` (Principiante) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibra lo sterzo con l'algoritmo proprio dell'hub, che trova automaticamente l'escursione dello sterzo.

- Lo sterzo deve avere finecorsa meccanici rigidi (ad esempio le estremità della cremagliera dello sterzo).
