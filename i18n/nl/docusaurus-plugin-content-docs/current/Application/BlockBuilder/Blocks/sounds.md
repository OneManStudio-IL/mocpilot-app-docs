---
id: Sounds
title: Geluiden
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Geluiden {#sounds}

Geluidsblokken spelen geluiden af op de telefoon, tablet of computer waarop MOCPilot draait: piepjes, signalen, claxons, effecten en je eigen opnames.

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
