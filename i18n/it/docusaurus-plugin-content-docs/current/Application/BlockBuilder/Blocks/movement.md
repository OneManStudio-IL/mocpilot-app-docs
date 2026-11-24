---
id: Movement
title: Movimento
description: "I blocchi Movimento guidano un robot a due motori con l'hub MINDSTORMS Robot Inventor o SPIKE: spostamento, sterzo, guida a carro armato, velocità, accelerazione e arresto."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Movimento

I blocchi Movimento guidano come un'unica unità un robot con due ruote, ciascuna mossa dal proprio motore: «avanti di 10 cm», «gira in senso orario di 1 rotazione», «sterza di 30 a destra». Sono gli stessi blocchi di movimento dell'app LEGO® MINDSTORMS® Robot Inventor. La categoria compare per prima nella palette quando il profilo ha un [hub Robot Inventor o SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Tutti i suoi blocchi hanno l'icona bianca e nera dell'hub.

## Come funziona il movimento {#how-movement-works}

- **Motori di movimento.** Come predefinito la ruota sinistra è sulla porta **A** e quella destra sulla porta **B**. Usa [imposta motori di movimento a](#block_ri_move_set_pair) per scegliere altre porte. Su un robot i due motori sono montati uno di fronte all'altro, quindi MOCPilot fa girare il destro nel verso opposto: una velocità positiva fa sempre avanzare il robot.
- **Velocità di movimento.** I blocchi senza una velocità propria usano la velocità di movimento: **50 %** finché [imposta velocità di movimento a](#block_ri_move_set_speed) non la cambia.
- **Lo sterzo** è un numero da −100 a 100. **0** va dritto. I valori positivi girano a destra, quelli negativi a sinistra: la ruota interna rallenta tanto più quanto lo sterzo si avvicina a ±100 (a 50 gira a metà velocità). A **100** o **−100** le ruote girano in versi opposti e il robot ruota sul posto.
- **Unità.** Le distanze possono essere in `cm`, `pollici`, `rotazioni` o `gradi` dei motori, e molti blocchi accettano anche i `secondi`. Centimetri e pollici usano la distanza per rotazione del motore: **17,5 cm** come predefinito (la ruota del Robot Inventor), modificabile con [imposta 1 rotazione del motore a](#block_ri_move_set_distance). Una distanza negativa muove il robot nel verso opposto.
- **Attesa.** I blocchi con una distanza (`muovi … per …`) attendono che il robot abbia percorso quella distanza. I blocchi che iniziano con **inizia a muoverti** proseguono subito: il robot continua a muoversi fino a **smetti di muoverti** o a un altro blocco di movimento.

## Impostazioni del movimento {#movement-settings}

### `imposta motori di movimento a … …` (Principiante) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Sceglie le porte del motore della ruota sinistra e di quella destra. Predefinite: **A** e **B**. Le due porte devono essere diverse.

### `imposta velocità di movimento a … %` (Principiante) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Imposta la velocità, da −100 a 100 %, dei blocchi di movimento che non hanno una velocità propria. Predefinita: 50 %. Non avvia i motori.

### `imposta 1 rotazione del motore a … cm / pollici percorsi` (Avanzato) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Dice a MOCPilot quanta strada fa il robot in una rotazione del motore, così che le distanze in centimetri e pollici risultino corrette. Predefinito: 17,5 cm. Misura il tuo robot: fallo **avanzare di 1 rotazione** e misura la distanza. Il valore 0 viene ignorato.

### `imposta accelerazione di movimento a …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Quanto rapidamente i motori di movimento accelerano e rallentano.

- Opzioni: `predefinito`, `veloce` (0,1 s), `bilanciato` (0,35 s), `morbido` (0,8 s), `lento` (1,2 s), `molto lento` (2 s): il tempo da fermo alla massima velocità.

### `imposta motori di movimento a … alla fermata` (Avanzato) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Cosa fanno i motori quando il robot si ferma («alla fermata» nell'app significa «all'arresto»).

- `inerzia`: i motori girano liberi e il robot rotola fino a fermarsi.
- `freno` (predefinito): i motori frenano.
- `mantieni posizione`: i motori mantengono attivamente la loro posizione, anche se spingi il robot.

## Muoversi {#moving}

### `muovi … per …` (Principiante) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Muove il robot alla velocità di movimento e attende che abbia finito.

- Direzione: `in avanti`, `all’indietro`, `in senso orario`, `in senso antiorario` (le ultime due fanno ruotare il robot sul posto).
- Unità: `cm`, `pollici`, `rotazioni`, `gradi`, `secondi`. Predefinito: 10 cm.

### `muovi … per …` (con sterzo) (Principiante) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Muove il robot con lo sterzo indicato (da −100 a 100) alla velocità di movimento e attende che abbia finito. Con sterzo 30 il robot percorre una curva verso destra.

- Unità: `cm`, `pollici`, `rotazioni`, `gradi`, `secondi`.

### `muovi … per … a … % velocità` (Avanzato) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
Lo stesso, con una velocità propria invece della velocità di movimento.

- Unità: `cm`, `pollici`, `rotazioni`, `gradi`.

### `muovi per … a … … % velocità` (Avanzato) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Guida a carro armato per una distanza: imposta separatamente la velocità della ruota sinistra e di quella destra (da −100 a 100 % ciascuna) e attende che il robot abbia percorso quella distanza.

- Unità: `cm`, `pollici`, `rotazioni`, `gradi`, `secondi`.

### `inizia a muoverti …` (Principiante) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Inizia a muoversi con lo sterzo indicato alla velocità di movimento e passa subito al blocco successivo.

### `inizia a muoverti … a … % velocità` (Avanzato) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Inizia a muoversi con lo sterzo e la velocità indicati.

- Uso tipico: inserisci un cursore della dashboard nello spazio dello sterzo e un pedale in quello della velocità.

### `inizia a muoverti … a … % potenza` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Come il blocco precedente, ma imposta la **potenza** dei motori invece di una velocità regolata: i motori non cercano di mantenere la velocità quando il robot sale o trasporta un carico.

### `inizia a muoverti a … … % velocità` (Avanzato) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Guida a carro armato: avvia la ruota sinistra e quella destra, ciascuna alla propria velocità.

### `inizia a muoverti a … … % potenza` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Guida a carro armato con la potenza del motore di ciascuna ruota invece di una velocità regolata.

### `smetti di muoverti` (Principiante) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Ferma entrambi i motori di movimento nel modo indicato da **imposta motori di movimento a … alla fermata** (frenando, come predefinito).

### `il movimento è stato interrotto?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true` se l'ultimo movimento non è terminato: un altro blocco di movimento o **smetti di muoverti** l'ha interrotto.
