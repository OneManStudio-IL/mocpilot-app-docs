---
id: Sounds
title: Zvuky
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Zvuky {#sounds}

Bloky zvukov prehrávajú zvuky v telefóne, tablete alebo počítači, na ktorom beží MOCPilot: pípnutia, signály, klaksóny, efekty a vaše vlastné nahrávky. Hub Robot Inventor má aj vlastný reproduktor, pozrite [Reproduktor hubu Robot Inventor](#robot-inventor-sounds).

## Aké zvuky môžete prehrať {#which-sounds-you-can-play}

Zoznam zvukov v blokoch má dve časti:

- **Vstavaná knižnica**: krátke pípnutia, čvirikanie, cúvací pípač, siréna, alarm, signály úspechu a chyby, klaksóny auta, nákladiaku a vlaku, zvonček na bicykel, smerovka a niekoľko efektov (kliknutie, puknutie, laser, minca, zapnutie, vypnutie).
- **Vaše vlastné zvuky**: stlačte **Pridať zvuk** hore v kategórii a vyberte zvukový súbor. Aplikácia ho prevedie a uloží do profilu, takže putuje s profilom na vaše ďalšie zariadenia aj do katalógu. Profil môže obsahovať až 30 zvukov; dlhší súbor sa skráti na 15 sekúnd. Na ich správu slúžia **Premenovať zvuk** a **Odstrániť zvuk**; bloky, ktoré prehrávali odstránený zvuk, stíchnu.

<Screenshot name="blocks-add-sound" alt="Dialóg Pridať zvuk v Logických blokoch" width={900} />

## Bloky {#blocks}

### `zvuk … prehrať / prehrať do konca / opakovať` (Začiatočník) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Prehrá vybraný zvuk.

- `prehrať`: spustí zvuk a hneď prejde na ďalší blok. Zvuky určené na opakovanie (napríklad siréna alebo cúvací pípač) sa opakujú ďalej.
- `prehrať do konca`: prehrá zvuk raz a počká, kým skončí.
- `opakovať`: prehráva zvuk dokola, kým ho nezastavíte.
- Spustenie zvuku, ktorý už hrá, ho spustí odznova.
- Namiesto výberu zo zoznamu môžete do políčka vložiť hlásiaci blok **zvuk** (alebo premennú, ktorá ho obsahuje).

### `pípnuť … Hz na … s` (Začiatočník) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Prehrá tón zadanej výšky a dĺžky a počká, kým skončí.

- Výška: od 50 do 8000 Hz (predvolene 440).
- Dĺžka: od 0,02 do 10 sekúnd (predvolene 0,2).

### `zastaviť zvuk …` (Začiatočník) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Zastaví vybraný zvuk.

### `zastaviť všetky zvuky` (Začiatočník) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Zastaví všetky hrajúce zvuky.

### `nastaviť hlasitosť zvuku na … %` (Pokročilý) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Nastaví hlasitosť všetkých zvukov programu od 0 do 100 %. Po zastavení programu sa hlasitosť vráti na 100 %.

### `hlasitosť zvuku` (Pokročilý) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Vráti aktuálnu hlasitosť zvuku od 0 do 100.

### `zvuk …` (Pokročilý) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Vráti vybraný zvuk ako hodnotu.

- Typické použitie: uložiť zvuk do premennej alebo zoznamu, prípadne ho odovzdať niektorému z [Mojich blokov](/docs/Application/BlockBuilder/Blocks/MyBlocks), a potom ho prehrať blokom **zvuk … prehrať**.

## Reproduktor hubu Robot Inventor {#robot-inventor-sounds}

Tieto bloky pochádzajú z aplikácie Robot Inventor a prehrávajú zvuky z reproduktora [hubu MINDSTORMS Robot Inventor alebo SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), nie z vášho zariadenia. Nesú ikonu hubu. Noty sú čísla nôt MIDI: 60 je jednočiarkové C, každý krok je poltón (0 až 132).

### `pípnuť … na … sekundy` (Začiatočník) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Zahrá pípnutie zadanej noty (predvolene 60) na zadaný čas (predvolene 0,2 s) a čaká, kým neskončí.

### `spustiť pípanie …` (Pokročilý) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Spustí pípanie zadanej noty a hneď pokračuje ďalej. Pípanie znie, kým nepríde **zastaviť všetky zvuky** alebo iný zvuk hubu.

### `prehrať zvuk … až do konca` (Začiatočník) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Prehrá jeden zo zvukov robota uložených v hube (Affirmative, Laser, Hello, Tadaa a ďalších 80) a čaká, kým neskončí. Zvuky sú súčasťou softvéru hubu; ak hub mlčí, pozrite [Keď sa hub nespustí](/docs/Application/Hubs/RobotInventorHub#restore).

### `spustiť zvuk …` (Začiatočník) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Spustí zvuk robota v hube a hneď pokračuje ďalej.

### `zastaviť všetky zvuky` (hub) (Začiatočník) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Zastaví zvuk a pípanie v hube. Blok s rovnakým názvom bez ikony hubu zastavuje zvuky vášho zariadenia.

### `nastaviť hlasitosť hubu na … %` (Pokročilý) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Nastaví hlasitosť pípnutí, zvukov a nôt hubu, od 0 do 100 % (100 %, kým ju nezmeníte).

### `zmeniť hlasitosť hubu o …` (Pokročilý) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Zosilní alebo stíši hub o zadanú hodnotu (predvolene −10); hlasitosť zostáva medzi 0 a 100 %.

### `hlasitosť hubu` (Pokročilý) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Vráti hlasitosť hubu, od 0 do 100.

### `nastaviť … efekt na …` (Pokročilý) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Nastaví zvukový efekt pre zvuky robota, ktoré sa spustia po ňom.

- `výška tónu`: od −360 do 360; kladné hodnoty robia zvuky vyššie a rýchlejšie, záporné nižšie a pomalšie. 0 je normál.
- `vyváženie vľavo/vpravo`: od −100 do 100. Hub má jediný reproduktor, takže to nebudete počuť; hodnota sa zachováva kvôli programom vytvoreným v aplikácii Robot Inventor.

### `zmeniť … efekt o …` (Pokročilý) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Zmení efekt výšky tónu alebo vyváženia o zadanú hodnotu (predvolene 10), v rovnakých medziach.

### `vymazať zvukové efekty` (Pokročilý) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Vráti výšku tónu a vyváženie na 0.

### Hudba {#robot-inventor-music}

Hudobné bloky merajú čas v **dobách**: pri tempe 60 dôb za minútu (predvolené) trvá jedna doba jednu sekundu. Keď program beží v MOCPilote, noty znejú ako pípnutia hubu správnej výšky a dĺžky a bubny ako krátke pípnutia; nástroj zatiaľ zvuk nemení.

#### `zahrať notu … na … dôb` (Pokročilý) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Zahrá notu (predvolene 60) na zadaný počet dôb (predvolene 0,25) a čaká.

#### `zahrať na bubon … na … dôb` (Pokročilý) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Zahrá na jeden z 18 bubnov (malý bubon, veľký bubon, hi-hat, kravský zvonec a ďalšie) a čaká zadaný počet dôb.

#### `pauza na … dôb` (Pokročilý) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Čaká zadaný počet dôb a nič nehrá.

#### `nastaviť nástroj na …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Vyberie jeden z 21 nástrojov (klavír, organ, gitara, flauta, zbor, syntetizátor a ďalšie) pre nasledujúce noty.

#### `nastaviť tempo na …` (Pokročilý) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Nastaví tempo v dobách za minútu, od 20 do 500 (predvolene 60).

#### `zmeniť tempo o …` (Pokročilý) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Zrýchli alebo spomalí hudbu o zadaný počet dôb za minútu (predvolene 20).

#### `tempo` (Pokročilý) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Vráti aktuálne tempo v dobách za minútu.
