---
id: Sounds
title: Sounds
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sounds

Sound blocks play sounds on the phone, tablet or computer that runs MOCPilot: beeps, signals, horns, effects and your own recordings.

## Which sounds you can play

The sound list in the blocks has two parts:

- **The built-in library**: short beeps, chirps, a reverse beeper, a siren, an alarm, success and error signals, car, truck and train horns, a bicycle bell, a turn signal and a few effects (click, pop, laser, coin, power up, power down).
- **Your own sounds**: press **Add sound** at the top of the category and pick an audio file. The app converts it and stores it in the profile, so it travels with the profile to your other devices and to the catalog. A profile can hold up to 30 sounds; a longer file is cut to 15 seconds. Use **Rename sound** and **Delete sound** to manage them; blocks that played a deleted sound go silent.

<Screenshot name="blocks-add-sound" alt="The Add sound dialog in Logic Blocks" width={900} />

## Blocks

### `sound … play / play until done / repeat` (Beginner) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Plays the selected sound.

- `play`: starts the sound and goes on to the next block right away. Sounds that are meant to loop (such as the siren or the reverse beeper) keep repeating.
- `play until done`: plays the sound once and waits until it ends.
- `repeat`: plays the sound in a loop until you stop it.
- Starting a sound that is already playing restarts it.
- You can put a **sound** reporter (or a variable that holds one) into the slot instead of choosing from the list.

### `beep … Hz for … s` (Beginner) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Plays a tone of the given pitch and length and waits until it ends.

- Pitch: from 50 to 8000 Hz (440 by default).
- Length: from 0.02 to 10 seconds (0.2 by default).

### `stop sound …` (Beginner) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Stops the selected sound.

### `stop all sounds` (Beginner) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Stops every sound that is playing.

### `set sound volume to … %` (Advanced) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Sets the volume of all the program's sounds, from 0 to 100 %. When the program stops, the volume goes back to 100 %.

### `sound volume` (Advanced) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Returns the current sound volume, from 0 to 100.

### `sound …` (Advanced) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Returns the selected sound as a value.

- Typical use: keep a sound in a variable or a list, or pass it to one of [My Blocks](/docs/Application/BlockBuilder/Blocks/MyBlocks), and then play it with **sound … play**.
