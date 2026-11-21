---
id: Sounds
title: Lyder
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Lyder {#sounds}

Lydblokker spiller av lyder på telefonen, nettbrettet eller datamaskinen som kjører MOCPilot: pip, signaler, horn, effekter og dine egne opptak.

## Hvilke lyder du kan spille av {#which-sounds-you-can-play}

Lydlisten i blokkene har to deler:

- **Det innebygde biblioteket**: korte pip, kvitter, ryggepip, sirene, alarm, signaler for suksess og feil, bil-, lastebil- og toghorn, sykkelbjelle, blinklys og noen effekter (klikk, plopp, laser, mynt, power up, power down).
- **Dine egne lyder**: Trykk på **Legg til lyd** øverst i kategorien og velg en lydfil. Appen konverterer den og lagrer den i profilen, slik at den følger med profilen til de andre enhetene dine og til katalogen. En profil kan inneholde opptil 30 lyder; en lengre fil kuttes til 15 sekunder. Bruk **Gi nytt navn til lyd** og **Slett lyd** for å administrere dem; blokker som spilte av en slettet lyd, blir stille.

<Screenshot name="blocks-add-sound" alt="Dialogboksen Legg til lyd i Logikkblokker" width={900} />

## Blokker {#blocks}

### `lyd … spill / spill til ferdig / gjenta` (Nybegynner) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Spiller av den valgte lyden.

- `spill`: starter lyden og går straks videre til neste blokk. Lyder som er laget for å gå i løkke (som sirenen eller ryggepipet), fortsetter å gjenta seg.
- `spill til ferdig`: spiller av lyden én gang og venter til den er ferdig.
- `gjenta`: spiller av lyden i løkke til du stopper den.
- Hvis du starter en lyd som allerede spilles, begynner den på nytt.
- Du kan sette en **lyd**-verdiblokk (eller en variabel som inneholder en) inn i feltet i stedet for å velge fra listen.

### `pip … Hz i … s` (Nybegynner) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Spiller av en tone med angitt tonehøyde og lengde og venter til den er ferdig.

- Tonehøyde: fra 50 til 8000 Hz (440 som standard).
- Lengde: fra 0,02 til 10 sekunder (0,2 som standard).

### `stopp lyd …` (Nybegynner) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Stopper den valgte lyden.

### `stopp alle lyder` (Nybegynner) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Stopper alle lyder som spilles.

### `sett lydvolum til … %` (Avansert) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Setter volumet for alle lydene i programmet, fra 0 til 100 %. Når programmet stopper, går volumet tilbake til 100 %.

### `lydvolum` (Avansert) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Returnerer det nåværende lydvolumet, fra 0 til 100.

### `lyd …` (Avansert) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Returnerer den valgte lyden som en verdi.

- Typisk bruk: lagre en lyd i en variabel eller en liste, eller sende den til en av [Mine blokker](/docs/Application/BlockBuilder/Blocks/MyBlocks), og deretter spille den av med **lyd … spill**.
