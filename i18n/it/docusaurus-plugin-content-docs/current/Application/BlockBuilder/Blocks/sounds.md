---
id: Sounds
title: Suoni
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Suoni {#sounds}

I blocchi Suoni riproducono suoni sul telefono, tablet o computer su cui è in esecuzione MOCPilot: bip, segnali, clacson, effetti e registrazioni personali.

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
