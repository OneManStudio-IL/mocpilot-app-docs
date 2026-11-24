---
id: Sounds
title: Lyder
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Lyder {#sounds}

Lydblokker spiller av lyder på telefonen, nettbrettet eller datamaskinen som kjører MOCPilot: pip, signaler, horn, effekter og dine egne opptak. Robot Inventor-huben har også sin egen høyttaler, se [Høyttaleren på Robot Inventor-huben](#robot-inventor-sounds).

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

## Høyttaleren på Robot Inventor-huben {#robot-inventor-sounds}

Disse blokkene kommer fra Robot Inventor-appen og spiller lyder i høyttaleren på [MINDSTORMS Robot Inventor- eller SPIKE Prime-huben](/docs/Application/Hubs/RobotInventorHub), ikke på enheten din. De har hubikonet. Noter angis som MIDI-notenumre: 60 er enstrøken c, og hvert trinn er en halvtone (0 til 132).

### `spill pip … for … sekunder` (Nybegynner) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Spiller et pip med angitt note (60 som standard) i angitt tid (0,2 s som standard) og venter til det er ferdig.

### `start pip …` (Avansert) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Starter et pip med angitt note og går videre med en gang. Pipet høres til **stopp alle lyder** eller en annen hublyd.

### `spill lyd … til ferdig` (Nybegynner) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Spiller en av robotlydene som er lagret på huben (Affirmative, Laser, Hello, Tadaa og 80 til) og venter til den er ferdig. Lydene følger med hubprogramvaren; hvis huben er stille, se [Hvis huben ikke starter](/docs/Application/Hubs/RobotInventorHub#restore).

### `start lyd …` (Nybegynner) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Starter en av hubens robotlyder og går videre med en gang.

### `stopp alle lyder` (hub) (Nybegynner) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Stopper lyden og pipet på huben. Blokken med samme navn uten hubikonet stopper lydene på enheten din.

### `sett hub-volum til … %` (Avansert) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Angir volumet for hubens pip, lyder og noter, fra 0 til 100 % (100 % til du endrer det).

### `endre hub-volum med …` (Avansert) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Gjør huben høyere eller lavere med angitt mengde (−10 som standard); volumet holder seg mellom 0 og 100 %.

### `hub-volum` (Avansert) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Returnerer hubvolumet, fra 0 til 100.

### `sett … effekt til …` (Avansert) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Angir en lydeffekt for robotlydene som starter etter blokken.

- `tonehøyde`: fra −360 til 360; positive verdier gjør lydene lysere og raskere, negative dypere og langsommere. 0 er normalt.
- `panorering venstre/høyre`: fra −100 til 100. Huben har bare én høyttaler, så du hører det ikke; verdien beholdes for programmer som er laget i Robot Inventor-appen.

### `veranderen … effekt med …` (Avansert) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Endrer tonehøyde- eller panoreringseffekten med angitt mengde (10 som standard), innenfor de samme grensene. Ordet `veranderen` i blokken (nederlandsk for «endre») står slik i appen; blokken betyr «endre … effekt med …».

### `fjern lydeffekter` (Avansert) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Setter tonehøyden og panoreringen tilbake til 0.

### Musikk {#robot-inventor-music}

Musikkblokkene regner tid i **slag**: med tempoet 60 slag per minutt (standard) varer ett slag ett sekund. Mens programmet kjører i MOCPilot, høres noter som hubpip med riktig tonehøyde og lengde, og trommer som korte pip; instrumentet endrer ikke lyden ennå.

#### `spill note … for … slag` (Avansert) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Spiller en note (60 som standard) i angitt antall slag (0,25 som standard) og venter.

#### `spill tromme … for … slag` (Avansert) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Spiller en av 18 trommer (skarptromme, basstromme, hi-hat, kubjelle og andre) og venter i angitt antall slag.

#### `pause i … slag` (Avansert) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Venter i angitt antall slag uten å spille noe.

#### `sett instrument til …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Velger ett av 21 instrumenter (piano, orgel, gitar, fløyte, kor, synth og andre) for notene som følger.

#### `sett tempo til …` (Avansert) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Angir tempoet i slag per minutt, fra 20 til 500 (60 som standard).

#### `endre tempo med …` (Avansert) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Gjør musikken raskere eller langsommere med angitt antall slag per minutt (20 som standard).

#### `tempo` (Avansert) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Returnerer gjeldende tempo i slag per minutt.
