---
id: Sounds
title: Ljud
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Ljud {#sounds}

Ljudblock spelar upp ljud på den telefon, surfplatta eller dator som kör MOCPilot: pip, signaler, tutor, effekter och dina egna inspelningar.

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
