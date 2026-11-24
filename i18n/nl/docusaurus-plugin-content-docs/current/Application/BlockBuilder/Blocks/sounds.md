---
id: Sounds
title: Geluiden
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Geluiden {#sounds}

Geluidsblokken spelen geluiden af op de telefoon, tablet of computer waarop MOCPilot draait: piepjes, signalen, claxons, effecten en je eigen opnames. De Robot Inventor-hub heeft ook een eigen luidspreker, zie [Luidspreker van de Robot Inventor-hub](#robot-inventor-sounds).

## Welke geluiden je kunt afspelen {#which-sounds-you-can-play}

De geluidenlijst in de blokken bestaat uit twee delen:

- **De ingebouwde bibliotheek**: korte piepjes, tjilpjes, een achteruitrijpiep, een sirene, een alarm, signalen voor succes en fout, claxons van een auto, vrachtwagen en trein, een fietsbel, een richtingaanwijzer en een paar effecten (klik, plop, laser, munt, opstarten, afsluiten).
- **Je eigen geluiden**: druk op **Geluid toevoegen** bovenaan de categorie en kies een audiobestand. De app converteert het en slaat het op in het profiel, zodat het met het profiel meegaat naar je andere apparaten en naar de catalogus. Een profiel kan maximaal 30 geluiden bevatten; een langer bestand wordt ingekort tot 15 seconden. Met **Geluid hernoemen** en **Geluid verwijderen** beheer je ze; blokken die een verwijderd geluid afspeelden, worden stil.

<Screenshot name="blocks-add-sound" alt="Het venster Geluid toevoegen in Logicablokken" width={900} />

## Blokken {#blocks}

### `geluid … speel / speel tot einde / herhaal` (Beginner) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Speelt het gekozen geluid af.

- `speel`: start het geluid en gaat meteen door naar het volgende blok. Geluiden die bedoeld zijn om te herhalen (zoals de sirene of de achteruitrijpiep), blijven zich herhalen.
- `speel tot einde`: speelt het geluid één keer af en wacht tot het afgelopen is.
- `herhaal`: speelt het geluid in een lus af tot je het stopt.
- Als je een geluid start dat al speelt, begint het opnieuw.
- Je kunt een waardeblok **geluid** (of een variabele die er een bevat) in het vak zetten in plaats van uit de lijst te kiezen.

### `piep … Hz gedurende … s` (Beginner) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Speelt een toon met de opgegeven toonhoogte en lengte af en wacht tot hij afgelopen is.

- Toonhoogte: van 50 tot 8000 Hz (standaard 440).
- Lengte: van 0,02 tot 10 seconden (standaard 0,2).

### `stop geluid …` (Beginner) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Stopt het gekozen geluid.

### `stop alle geluiden` (Beginner) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Stopt alle geluiden die spelen.

### `stel geluidsvolume in op … %` (Gevorderd) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Stelt het volume van alle geluiden van het programma in, van 0 tot 100 %. Als het programma stopt, gaat het volume terug naar 100 %.

### `geluidsvolume` (Gevorderd) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Geeft het huidige geluidsvolume terug, van 0 tot 100.

### `geluid …` (Gevorderd) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Geeft het gekozen geluid terug als waarde.

- Gebruikelijke toepassing: een geluid in een variabele of een lijst bewaren, of het doorgeven aan een van [Mijn blokken](/docs/Application/BlockBuilder/Blocks/MyBlocks), en het daarna afspelen met **geluid … speel**.

## Luidspreker van de Robot Inventor-hub {#robot-inventor-sounds}

Deze blokken komen uit de Robot Inventor-app en spelen geluiden af op de luidspreker van de [hub van MINDSTORMS Robot Inventor of SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), niet op je apparaat. Ze dragen het hubpictogram. Noten zijn MIDI-nootnummers: 60 is de centrale C, elke stap is een halve toon (0 tot 132).

### `speel pieptoon … voor … seconden` (Beginner) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Speelt een pieptoon van de opgegeven noot (standaard 60) gedurende de opgegeven tijd (standaard 0,2 s) en wacht tot hij afgelopen is.

### `start pieptoon …` (Gevorderd) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Start een pieptoon van de opgegeven noot en gaat meteen door. De pieptoon klinkt tot **stop alle geluiden** of een ander hubgeluid.

### `speel geluid … tot het klaar is` (Beginner) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Speelt een van de robotgeluiden die op de hub zijn opgeslagen (Affirmative, Laser, Hello, Tadaa en nog 80 andere) en wacht tot het afgelopen is. De geluiden horen bij de hubsoftware; als de hub stil blijft, zie [Als de hub niet opstart](/docs/Application/Hubs/RobotInventorHub#restore).

### `start geluid …` (Beginner) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Start een robotgeluid van de hub en gaat meteen door.

### `stop alle geluiden` (hub) (Beginner) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Stopt het geluid en de pieptoon op de hub. Het blok met dezelfde naam zonder hubpictogram stopt de geluiden van je apparaat.

### `stel hubvolume in op … %` (Gevorderd) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Stelt het volume van de pieptonen, geluiden en noten van de hub in, van 0 tot 100 % (100 % totdat je het verandert).

### `verander hubvolume met …` (Gevorderd) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Maakt de hub harder of zachter met de opgegeven hoeveelheid (standaard −10); het volume blijft tussen 0 en 100 %.

### `hubvolume` (Gevorderd) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Geeft het hubvolume terug, van 0 tot 100.

### `instellen … effect op …` (Gevorderd) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Stelt een geluidseffect in voor de robotgeluiden die daarna starten.

- `toonhoogte`: van −360 tot 360; positieve waarden maken de geluiden hoger en sneller, negatieve lager en langzamer. 0 is normaal.
- `balans links/rechts`: van −100 tot 100. De hub heeft maar één luidspreker, dus je hoort het niet; de waarde blijft bewaard voor programma's die in de Robot Inventor-app zijn gemaakt.

### `veranderen … effect met …` (Gevorderd) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Verandert het toonhoogte- of balanseffect met de opgegeven hoeveelheid (standaard 10), binnen dezelfde grenzen.

### `zet geluidseffecten uit` (Gevorderd) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Zet de toonhoogte en de balans terug op 0.

### Muziek {#robot-inventor-music}

De muziekblokken tellen de tijd in **tellen**: bij het tempo van 60 tellen per minuut (standaard) duurt één tel één seconde. Terwijl het programma in MOCPilot draait, klinken noten als pieptonen van de hub met de juiste hoogte en lengte, en trommels als korte pieptonen; het instrument verandert het geluid nog niet.

#### `speel noot … voor … tellen` (Gevorderd) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Speelt een noot (standaard 60) gedurende het opgegeven aantal tellen (standaard 0,25) en wacht.

#### `speel trommel … voor … tellen` (Gevorderd) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Speelt een van 18 trommels (snaredrum, basdrum, hi-hat, koebel en andere) en wacht het opgegeven aantal tellen.

#### `rust … tellen` (Gevorderd) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Wacht het opgegeven aantal tellen zonder iets te spelen.

#### `stel instrument in op …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Kiest een van 21 instrumenten (piano, orgel, gitaar, fluit, koor, synth en andere) voor de noten die volgen.

#### `stel tempo in op …` (Gevorderd) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Stelt het tempo in tellen per minuut in, van 20 tot 500 (standaard 60).

#### `verander tempo met …` (Gevorderd) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Maakt de muziek sneller of langzamer met het opgegeven aantal tellen per minuut (standaard 20).

#### `tempo` (Gevorderd) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Geeft het huidige tempo in tellen per minuut terug.
