---
id: Sounds
title: Suoni
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Suoni {#sounds}

I blocchi Suoni riproducono suoni sul telefono, tablet o computer su cui è in esecuzione MOCPilot: bip, segnali, clacson, effetti e registrazioni personali. L'hub Robot Inventor ha anche un proprio altoparlante, vedi [Altoparlante dell'hub Robot Inventor](#robot-inventor-sounds).

## Quali suoni puoi riprodurre {#which-sounds-you-can-play}

L'elenco dei suoni nei blocchi è diviso in due parti:

- **La libreria integrata**: brevi bip, cinguettii, un cicalino di retromarcia, una sirena, un allarme, segnali di successo e di errore, clacson di auto, camion e treno, un campanello da bicicletta, una freccia e alcuni effetti (clic, schiocco, laser, moneta, accensione, spegnimento).
- **I tuoi suoni**: premi **Aggiungi suono** in cima alla categoria e scegli un file audio. L'app lo converte e lo salva nel profilo, così viaggia con il profilo sugli altri tuoi dispositivi e nel catalogo. Un profilo può contenere fino a 30 suoni; un file più lungo viene tagliato a 15 secondi. Usa **Rinomina suono** ed **Elimina suono** per gestirli; i blocchi che riproducevano un suono eliminato restano muti.

<Screenshot name="blocks-add-sound" alt="La finestra Aggiungi suono in Blocchi logici" width={900} />

## Blocchi {#blocks}

### `suono … riproduci / riproduci fino alla fine / ripeti` (Principiante) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Riproduce il suono selezionato.

- `riproduci`: avvia il suono e passa subito al blocco successivo. I suoni pensati per ripetersi in loop (come la sirena o il cicalino di retromarcia) continuano a ripetersi.
- `riproduci fino alla fine`: riproduce il suono una volta e attende che finisca.
- `ripeti`: riproduce il suono in loop finché non lo fermi.
- Avviare un suono già in riproduzione lo fa ripartire da capo.
- Al posto di sceglierlo dall'elenco, puoi inserire nello spazio un blocco valore **suono** (o una variabile che ne contiene uno).

### `bip … Hz per … s` (Principiante) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Riproduce un tono dell'altezza e della durata indicate e attende che finisca.

- Altezza: da 50 a 8000 Hz (440 per impostazione predefinita).
- Durata: da 0,02 a 10 secondi (0,2 per impostazione predefinita).

### `ferma suono …` (Principiante) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Ferma il suono selezionato.

### `ferma tutti i suoni` (Principiante) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Ferma tutti i suoni in riproduzione.

### `imposta volume suono a … %` (Avanzato) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Imposta il volume di tutti i suoni del programma, da 0 a 100 %. Quando il programma si ferma, il volume torna al 100 %.

### `volume suono` (Avanzato) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Restituisce il volume attuale dei suoni, da 0 a 100.

### `suono …` (Avanzato) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Restituisce come valore il suono selezionato.

- Uso tipico: conservare un suono in una variabile o in una lista, oppure passarlo a uno de [I miei blocchi](/docs/Application/BlockBuilder/Blocks/MyBlocks), per poi riprodurlo con **suono … riproduci**.

## Altoparlante dell'hub Robot Inventor {#robot-inventor-sounds}

Questi blocchi provengono dall'app Robot Inventor e riproducono suoni sull'altoparlante dell'[hub MINDSTORMS Robot Inventor o SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), non sul tuo dispositivo. Hanno l'icona dell'hub. Le note sono numeri di nota MIDI: 60 è il do centrale e ogni passo è un semitono (da 0 a 132).

### `riproduci bip … per … secondi` (Principiante) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Riproduce un bip della nota indicata (60 come predefinito) per il tempo indicato (0,2 s come predefinito) e attende che finisca.

### `avvia bip …` (Avanzato) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Avvia un bip della nota indicata e prosegue subito. Il bip suona fino a **ferma tutti i suoni** o a un altro suono dell'hub.

### `riproduci suono … fino alla fine` (Principiante) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Riproduce uno dei suoni robot memorizzati nell'hub (Affirmative, Laser, Hello, Tadaa e altri 80) e attende che finisca. I suoni sono inclusi nel software dell'hub; se l'hub resta muto, vedi [Se l'hub non si avvia](/docs/Application/Hubs/RobotInventorHub#restore).

### `avvia suono …` (Principiante) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Avvia un suono robot dell'hub e prosegue subito.

### `ferma tutti i suoni` (hub) (Principiante) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Ferma il suono e il bip sull'hub. Il blocco con lo stesso nome senza l'icona dell'hub ferma i suoni del tuo dispositivo.

### `imposta volume hub a … %` (Avanzato) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Imposta il volume di bip, suoni e note dell'hub, da 0 a 100 % (100 % finché non lo cambi).

### `cambia volume hub di …` (Avanzato) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Alza o abbassa il volume dell'hub della quantità indicata (−10 come predefinito); il volume resta tra 0 e 100 %.

### `volume hub` (Avanzato) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Restituisce il volume dell'hub, da 0 a 100.

### `impostare … effetto a …` (Avanzato) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Imposta un effetto sonoro per i suoni robot che partono dopo.

- `tono`: da −360 a 360; i valori positivi rendono i suoni più acuti e veloci, quelli negativi più gravi e lenti. 0 è normale.
- `bilanciamento sinistra/destra`: da −100 a 100. L'hub ha un solo altoparlante, quindi non lo sentirai; il valore viene conservato per i programmi creati nell'app Robot Inventor.

### `cambiare … effetto di …` (Avanzato) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Cambia l'effetto di tono o di bilanciamento della quantità indicata (10 come predefinito), entro gli stessi limiti.

### `rimuovi effetti audio` (Avanzato) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Riporta il tono e il bilanciamento a 0.

### Musica {#robot-inventor-music}

I blocchi di musica contano il tempo in **battiti**: con il tempo di 60 battiti al minuto (predefinito) un battito dura un secondo. Mentre il programma è in esecuzione in MOCPilot, le note suonano come bip dell'hub dell'altezza e della durata giuste, e i tamburi come bip brevi; lo strumento per ora non cambia il suono.

#### `suona nota … per … battiti` (Avanzato) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Suona una nota (60 come predefinito) per il numero di battiti indicato (0,25 come predefinito) e attende.

#### `suona tamburo … per … battiti` (Avanzato) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Suona uno dei 18 tamburi (rullante, grancassa, hi-hat, campanaccio e altri) e attende il numero di battiti indicato.

#### `fai una pausa di … battiti` (Avanzato) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Attende il numero di battiti indicato senza suonare nulla.

#### `imposta strumento a …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Sceglie uno dei 21 strumenti (pianoforte, organo, chitarra, flauto, coro, synth e altri) per le note successive.

#### `imposta tempo a …` (Avanzato) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Imposta il tempo in battiti al minuto, da 20 a 500 (60 come predefinito).

#### `cambia tempo di …` (Avanzato) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Rende la musica più veloce o più lenta del numero di battiti al minuto indicato (20 come predefinito).

#### `tempo` (Avanzato) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Restituisce il tempo attuale in battiti al minuto.
