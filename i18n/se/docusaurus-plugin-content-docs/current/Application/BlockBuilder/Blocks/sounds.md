---
id: Sounds
title: Ljud
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Ljud {#sounds}

Ljudblock spelar upp ljud på den telefon, surfplatta eller dator som kör MOCPilot: pip, signaler, tutor, effekter och dina egna inspelningar. Robot Inventor-hubben har också en egen högtalare, se [Robot Inventor-hubbens högtalare](#robot-inventor-sounds).

## Vilka ljud du kan spela {#which-sounds-you-can-play}

Ljudlistan i blocken har två delar:

- **Det inbyggda biblioteket**: korta pip, kvitter, en backvarnare, en siren, ett larm, signaler för lyckat och misslyckat, bil-, lastbils- och tågtutor, en cykelklocka, en blinker och några effekter (klick, pop, laser, mynt, power up, power down).
- **Dina egna ljud**: tryck på **Lägg till ljud** högst upp i kategorin och välj en ljudfil. Appen konverterar den och sparar den i profilen, så att den följer med profilen till dina andra enheter och till katalogen. En profil kan innehålla upp till 30 ljud; en längre fil kortas till 15 sekunder. Använd **Byt namn på ljud** och **Ta bort ljud** för att hantera dem; block som spelade ett borttaget ljud blir tysta.

<Screenshot name="blocks-add-sound" alt="Dialogrutan Lägg till ljud i Logikblock" width={900} />

## Block {#blocks}

### `ljud … spela / spela till slut / upprepa` (Nybörjare) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Spelar upp det valda ljudet.

- `spela`: startar ljudet och går direkt vidare till nästa block. Ljud som är tänkta att loopa (som sirenen eller backvarnaren) fortsätter att upprepas.
- `spela till slut`: spelar ljudet en gång och väntar tills det är slut.
- `upprepa`: spelar ljudet i en loop tills du stoppar det.
- Om du startar ett ljud som redan spelas börjar det om.
- Du kan lägga ett **ljud**-rapportblock (eller en variabel som innehåller ett) i facket i stället för att välja i listan.

### `pip … Hz i … s` (Nybörjare) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Spelar en ton med angiven tonhöjd och längd och väntar tills den är slut.

- Tonhöjd: från 50 till 8000 Hz (440 som standard).
- Längd: från 0,02 till 10 sekunder (0,2 som standard).

### `stoppa ljudet …` (Nybörjare) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Stoppar det valda ljudet.

### `stoppa alla ljud` (Nybörjare) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Stoppar alla ljud som spelas.

### `ställ in ljudvolym till … %` (Avancerad) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Ställer in volymen för alla programmets ljud, från 0 till 100 %. När programmet stoppas går volymen tillbaka till 100 %.

### `ljudvolym` (Avancerad) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Returnerar aktuell ljudvolym, från 0 till 100.

### `ljud …` (Avancerad) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Returnerar det valda ljudet som ett värde.

- Typisk användning: spara ett ljud i en variabel eller en lista, eller skicka det till ett av [Mina block](/docs/Application/BlockBuilder/Blocks/MyBlocks), och spela det sedan med **ljud … spela**.

## Robot Inventor-hubbens högtalare {#robot-inventor-sounds}

De här blocken kommer från Robot Inventor-appen och spelar ljud i högtalaren på [MINDSTORMS Robot Inventor- eller SPIKE Prime-hubben](/docs/Application/Hubs/RobotInventorHub), inte på din enhet. De har hubbikonen. Toner anges som MIDI-tonnummer: 60 är ettstruket c, och varje steg är ett halvtonsteg (0 till 132).

### `spela pip … för … sekunder` (Nybörjare) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Spelar ett pip med angiven ton (60 som standard) under angiven tid (0,2 s som standard) och väntar tills det tar slut.

### `starta pip …` (Avancerad) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Startar ett pip med angiven ton och går direkt vidare. Pipet hörs tills **stoppa alla ljud** eller ett annat hubbljud.

### `spela ljud … tills klart` (Nybörjare) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Spelar ett av robotljuden som finns lagrade på hubben (Affirmative, Laser, Hello, Tadaa och 80 till) och väntar tills det tar slut. Ljuden följer med hubbprogramvaran; om hubben är tyst, se [Om hubben inte startar](/docs/Application/Hubs/RobotInventorHub#restore).

### `starta ljud …` (Nybörjare) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Startar ett av hubbens robotljud och går direkt vidare.

### `stoppa alla ljud` (hubb) (Nybörjare) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Stoppar ljudet och pipet på hubben. Blocket med samma namn men utan hubbikonen stoppar ljuden på din enhet.

### `ställ in hubbvolym till … %` (Avancerad) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Ställer in volymen för hubbens pip, ljud och toner, från 0 till 100 % (100 % tills du ändrar den).

### `ändra hubbvolym med …` (Avancerad) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Gör hubben högre eller tystare med angivet värde (−10 som standard); volymen stannar mellan 0 och 100 %.

### `hubbvolym` (Avancerad) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Returnerar hubbens volym, från 0 till 100.

### `ställ in … effekt till …` (Avancerad) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Ställer in en ljudeffekt för de robotljud som startar efter blocket.

- `tonhöjd`: från −360 till 360; positiva värden gör ljuden ljusare och snabbare, negativa mörkare och långsammare. 0 är normalt.
- `panorera vänster/höger`: från −100 till 100. Hubben har en enda högtalare, så du hör ingen skillnad; värdet sparas för program som har gjorts i Robot Inventor-appen.

### `ändra … effekt med …` (Avancerad) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Ändrar tonhöjds- eller panoreringseffekten med angivet värde (10 som standard), inom samma gränser.

### `ta bort ljudeffekter` (Avancerad) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Ställer tillbaka tonhöjden och panoreringen till 0.

### Musik {#robot-inventor-music}

Musikblocken räknar tid i **slag**: i tempot 60 slag per minut (standard) varar ett slag en sekund. Medan programmet körs i MOCPilot hörs toner som hubbpip med rätt tonhöjd och längd, och trummor som korta pip; instrumentet ändrar inte ljudet än.

#### `spela ton … för … slag` (Avancerad) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Spelar en ton (60 som standard) i angivet antal slag (0,25 som standard) och väntar.

#### `spela trumma … för … slag` (Avancerad) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Spelar en av 18 trummor (virveltrumma, bastrumma, hi-hat, koskälla med flera) och väntar i angivet antal slag.

#### `pausa i … slag` (Avancerad) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Väntar i angivet antal slag utan att spela något.

#### `ställ in instrument till …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Väljer ett av 21 instrument (piano, orgel, gitarr, flöjt, kör, synth med flera) för tonerna som följer.

#### `ställ in tempo till …` (Avancerad) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Ställer in tempot i slag per minut, från 20 till 500 (60 som standard).

#### `ändra tempo med …` (Avancerad) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Gör musiken snabbare eller långsammare med angivet antal slag per minut (20 som standard).

#### `tempo` (Avancerad) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Returnerar det aktuella tempot i slag per minut.
