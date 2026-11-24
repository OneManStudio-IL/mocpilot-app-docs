---
id: Sounds
title: Sounds
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Sounds

Sound blocks play sounds on the phone, tablet or computer that runs MOCPilot: beeps, signals, horns, effects and your own recordings. The Robot Inventor hub also has its own speaker, see [Robot Inventor hub speaker](#robot-inventor-sounds).

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

## Robot Inventor hub speaker {#robot-inventor-sounds}

These blocks come from the Robot Inventor app and play sounds on the speaker of the [MINDSTORMS Robot Inventor or SPIKE Prime hub](/docs/Application/Hubs/RobotInventorHub), not on your device. They carry the hub icon. Notes are MIDI note numbers: 60 is middle C, each step is a semitone (0 to 132).

### `play beep … for … seconds` (Beginner) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Plays a beep of the given note (60 by default) for the given time (0.2 s by default) and waits until it ends.

### `start playing beep …` (Advanced) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Starts a beep of the given note and goes on at once. The beep sounds until **stop all sounds** or another hub sound.

### `play sound … until done` (Beginner) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Plays one of the robot sounds stored on the hub (Affirmative, Laser, Hello, Tadaa and 80 more) and waits until it ends. The sounds come with the hub software; if the hub is silent, see [If the hub doesn't start](/docs/Application/Hubs/RobotInventorHub#restore).

### `start sound …` (Beginner) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Starts a robot sound of the hub and goes on at once.

### `stop all sounds` (hub) (Beginner) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Stops the sound and the beep on the hub. The block with the same name without the hub icon stops the sounds of your device.

### `set hub volume to … %` (Advanced) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Sets the volume of the hub's beeps, sounds and notes, from 0 to 100 % (100 % until you change it).

### `change hub volume by …` (Advanced) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Makes the hub louder or quieter by the given amount (−10 by default); the volume stays between 0 and 100 %.

### `hub volume` (Advanced) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Returns the hub volume, from 0 to 100.

### `set … effect to …` (Advanced) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Sets a sound effect for the robot sounds that start after it.

- `pitch`: from −360 to 360; positive values make the sounds higher and faster, negative values lower and slower. 0 is normal.
- `pan left/right`: from −100 to 100. The hub has a single speaker, so you won't hear it; the value is kept for programs made in the Robot Inventor app.

### `change … effect by …` (Advanced) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Changes the pitch or pan effect by the given amount (10 by default), within the same limits.

### `clear sound effects` (Advanced) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Sets the pitch and the pan back to 0.

### Music {#robot-inventor-music}

The music blocks count time in **beats**: at the tempo of 60 beats per minute (the default) one beat lasts one second. While the program runs in MOCPilot, notes sound as hub beeps of the right pitch and length, and drums as short beeps; the instrument doesn't change the sound yet.

#### `play note … for … beats` (Advanced) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Plays a note (60 by default) for the given number of beats (0.25 by default) and waits.

#### `play drum … for … beats` (Advanced) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Plays one of 18 drums (snare drum, bass drum, hi-hat, cowbell and others) and waits for the given number of beats.

#### `rest for … beats` (Advanced) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Waits for the given number of beats without playing anything.

#### `set instrument to …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Chooses one of 21 instruments (piano, organ, guitar, flute, choir, synth and others) for the notes that follow.

#### `set tempo to …` (Advanced) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Sets the tempo in beats per minute, from 20 to 500 (60 by default).

#### `change tempo by …` (Advanced) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Makes the music faster or slower by the given number of beats per minute (20 by default).

#### `tempo` (Advanced) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Returns the current tempo in beats per minute.
