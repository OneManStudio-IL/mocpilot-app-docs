---
id: Sounds
title: Lyde
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Lyde {#sounds}

Lydblokke afspiller lyde på den telefon, tablet eller computer, der kører MOCPilot: bip, signaler, horn, effekter og dine egne optagelser. Robot Inventor-hubben har også sin egen højttaler, se [Robot Inventor-hubbens højttaler](#robot-inventor-sounds).

## Hvilke lyde du kan afspille {#which-sounds-you-can-play}

Lydlisten i blokkene har to dele:

- **Det indbyggede bibliotek**: korte bip, kvidren, en bakalarm, en sirene, en alarm, signaler for succes og fejl, horn til bil, lastbil og tog, en cykelklokke, et blinklys og nogle få effekter (klik, plop, laser, mønt, opstart, nedlukning).
- **Dine egne lyde**: Tryk på **Tilføj lyd** øverst i kategorien, og vælg en lydfil. Appen konverterer den og gemmer den i profilen, så den følger med profilen til dine andre enheder og til kataloget. En profil kan rumme op til 30 lyde; en længere fil afkortes til 15 sekunder. Brug **Omdøb lyd** og **Slet lyd** til at administrere dem; blokke, der afspillede en slettet lyd, bliver tavse.

<Screenshot name="blocks-add-sound" alt="Dialogen Tilføj lyd i Logikblokke" width={900} />

## Blokke {#blocks}

### `lyd … afspil / afspil til slut / gentag` (Begynder) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Afspiller den valgte lyd.

- `afspil`: starter lyden og går straks videre til næste blok. Lyde, der er beregnet til at køre i løkke (som sirenen eller bakalarmen), bliver ved med at gentage sig.
- `afspil til slut`: afspiller lyden én gang og venter, til den er slut.
- `gentag`: afspiller lyden i løkke, indtil du stopper den.
- Starter du en lyd, der allerede spiller, starter den forfra.
- Du kan sætte en **lyd**-rapporteringsblok (eller en variabel, der indeholder en) ind i feltet i stedet for at vælge fra listen.

### `bip … Hz i … s` (Begynder) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Afspiller en tone med den angivne tonehøjde og længde og venter, til den er slut.

- Tonehøjde: fra 50 til 8000 Hz (440 som standard).
- Længde: fra 0,02 til 10 sekunder (0,2 som standard).

### `stop lyd …` (Begynder) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Stopper den valgte lyd.

### `stop alle lyde` (Begynder) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Stopper alle lyde, der spiller.

### `sæt lydstyrke til … %` (Avanceret) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Indstiller lydstyrken for alle programmets lyde fra 0 til 100 %. Når programmet stopper, går lydstyrken tilbage til 100 %.

### `lydstyrke` (Avanceret) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Returnerer den aktuelle lydstyrke fra 0 til 100.

### `lyd …` (Avanceret) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Returnerer den valgte lyd som en værdi.

- Typisk brug: gem en lyd i en variabel eller en liste, eller send den til en af [Mine blokke](/docs/Application/BlockBuilder/Blocks/MyBlocks), og afspil den derefter med **lyd … afspil**.

## Robot Inventor-hubbens højttaler {#robot-inventor-sounds}

Disse blokke kommer fra Robot Inventor-appen og afspiller lyde i højttaleren på [hubben fra MINDSTORMS Robot Inventor eller SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), ikke på din enhed. De har hub-ikonet. Noder er MIDI-nodenumre: 60 er det midterste C, hvert trin er en halvtone (0 til 132).

### `afspil bip … i … sekunder` (Begynder) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Afspiller et bip med den angivne node (som standard 60) i den angivne tid (som standard 0,2 s) og venter, til det er slut.

### `start bip …` (Avanceret) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Starter et bip med den angivne node og fortsætter straks. Bippet lyder indtil **stop alle lyde** eller en anden hublyd.

### `afspil lyd … indtil færdig` (Begynder) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Afspiller en af de robotlyde, der er gemt på hubben (Affirmative, Laser, Hello, Tadaa og 80 flere), og venter, til den er slut. Lydene følger med hubsoftwaren; hvis hubben er tavs, se [Hvis hubben ikke starter](/docs/Application/Hubs/RobotInventorHub#restore).

### `start lyd …` (Begynder) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Starter en af hubbens robotlyde og fortsætter straks.

### `stop alle lyde` (hub) (Begynder) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Stopper lyden og bippet på hubben. Blokken med samme navn uden hub-ikonet stopper lydene på din enhed.

### `indstil hub-lydstyrke til … %` (Avanceret) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Indstiller lydstyrken for hubbens bip, lyde og noder fra 0 til 100 % (100 %, indtil du ændrer den).

### `ændr hub-lydstyrke med …` (Avanceret) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Gør hubben højere eller lavere med den angivne mængde (som standard −10); lydstyrken bliver mellem 0 og 100 %.

### `hub-lydstyrke` (Avanceret) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Returnerer hub-lydstyrken fra 0 til 100.

### `sæt … effekt til …` (Avanceret) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Indstiller en lydeffekt for de robotlyde, der starter efter den.

- `tonehøjde`: fra −360 til 360; positive værdier gør lydene lysere og hurtigere, negative dybere og langsommere. 0 er normal.
- `panorering venstre/højre`: fra −100 til 100. Hubben har kun én højttaler, så du hører det ikke; værdien gemmes af hensyn til programmer lavet i Robot Inventor-appen.

### `ændre … effekt med …` (Avanceret) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Ændrer tonehøjde- eller panoreringseffekten med den angivne mængde (som standard 10) inden for de samme grænser.

### `ryd lydeffekter` (Avanceret) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Sætter tonehøjden og panoreringen tilbage til 0.

### Musik {#robot-inventor-music}

Musikblokkene måler tid i **slag**: Ved et tempo på 60 slag i minuttet (standard) varer ét slag ét sekund. Mens programmet kører i MOCPilot, lyder noder som hubbip med den rigtige tonehøjde og længde, og trommer som korte bip; instrumentet ændrer endnu ikke lyden.

#### `spil node … i … slag` (Avanceret) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Spiller en node (som standard 60) i det angivne antal slag (som standard 0,25) og venter.

#### `spil tromme … i … slag` (Avanceret) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Spiller en af 18 trommer (lilletromme, stortromme, hi-hat, koklokke og andre) og venter det angivne antal slag.

#### `hold pause i … slag` (Avanceret) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Venter det angivne antal slag uden at spille noget.

#### `indstil instrument til …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Vælger et af 21 instrumenter (klaver, orgel, guitar, fløjte, kor, synth og andre) til de noder, der følger.

#### `indstil tempo til …` (Avanceret) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Indstiller tempoet i slag i minuttet fra 20 til 500 (som standard 60).

#### `ændr tempo med …` (Avanceret) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Gør musikken hurtigere eller langsommere med det angivne antal slag i minuttet (som standard 20).

#### `tempo` (Avanceret) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Returnerer det aktuelle tempo i slag i minuttet.
