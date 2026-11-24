---
id: Sounds
title: Zvuky
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Zvuky {#sounds}

Zvukové bloky přehrávají zvuky na telefonu, tabletu nebo počítači, na kterém běží MOCPilot: pípnutí, signály, klaksony, efekty a vaše vlastní nahrávky. Hub Robot Inventor má navíc vlastní reproduktor, viz [Reproduktor hubu Robot Inventor](#robot-inventor-sounds).

## Jaké zvuky můžete přehrát {#which-sounds-you-can-play}

Seznam zvuků v blocích má dvě části:

- **Vestavěná knihovna**: krátká pípnutí, cvrlikání, couvací pípání, siréna, alarm, signály úspěchu a chyby, klaksony auta, nákladního auta a vlaku, zvonek na kolo, blinkr a několik efektů (cvaknutí, prasknutí, laser, mince, nabití, vybití).
- **Vlastní zvuky**: stiskněte **Přidat zvuk** v horní části kategorie a vyberte zvukový soubor. Aplikace ho převede a uloží do profilu, takže putuje s profilem na vaše další zařízení i do katalogu. Profil může obsahovat až 30 zvuků; delší soubor se zkrátí na 15 sekund. Ke správě slouží **Přejmenovat zvuk** a **Smazat zvuk**; bloky, které přehrávaly smazaný zvuk, ztichnou.

<Screenshot name="blocks-add-sound" alt="Dialog Přidat zvuk v Logických blocích" width={900} />

## Bloky {#blocks}

### `zvuk … přehrát / přehrát do konce / opakovat` (Začátečník) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Přehraje vybraný zvuk.

- `přehrát`: spustí zvuk a hned pokračuje dalším blokem. Zvuky určené ke smyčce (například siréna nebo couvací pípání) se stále opakují.
- `přehrát do konce`: přehraje zvuk jednou a počká, až skončí.
- `opakovat`: přehrává zvuk ve smyčce, dokud ho nezastavíte.
- Spuštění zvuku, který už hraje, ho začne přehrávat znovu od začátku.
- Místo výběru ze seznamu můžete do slotu vložit hodnotový blok **zvuk** (nebo proměnnou, která zvuk obsahuje).

### `pípnout … Hz po dobu … s` (Začátečník) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Přehraje tón zadané výšky a délky a počká, až skončí.

- Výška: od 50 do 8000 Hz (výchozí 440).
- Délka: od 0,02 do 10 sekund (výchozí 0,2).

### `zastavit zvuk …` (Začátečník) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Zastaví vybraný zvuk.

### `zastavit všechny zvuky` (Začátečník) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Zastaví všechny přehrávané zvuky.

### `nastavit hlasitost zvuku na … %` (Pokročilý) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Nastaví hlasitost všech zvuků programu, od 0 do 100 %. Když se program zastaví, hlasitost se vrátí na 100 %.

### `hlasitost zvuku` (Pokročilý) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Vrací aktuální hlasitost zvuku, od 0 do 100.

### `zvuk …` (Pokročilý) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Vrací vybraný zvuk jako hodnotu.

- Typické použití: uložit zvuk do proměnné nebo seznamu nebo ho předat některému z [Mých bloků](/docs/Application/BlockBuilder/Blocks/MyBlocks) a pak ho přehrát blokem **zvuk … přehrát**.

## Reproduktor hubu Robot Inventor {#robot-inventor-sounds}

Tyto bloky pocházejí z aplikace Robot Inventor a přehrávají zvuky z reproduktoru [hubu MINDSTORMS Robot Inventor nebo SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), ne z vašeho zařízení. Nesou ikonu hubu. Noty jsou čísla not MIDI: 60 je jednočárkované C, každý krok je půltón (0 až 132).

### `pípnout … po dobu … sekundy` (Začátečník) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Zahraje pípnutí zadané noty (výchozí 60) po zadanou dobu (výchozí 0,2 s) a čeká, dokud neskončí.

### `spustit pípání …` (Pokročilý) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Spustí pípání zadané noty a hned pokračuje dál. Pípání zní, dokud nepřijde **zastavit všechny zvuky** nebo jiný zvuk hubu.

### `přehrát zvuk … až do konce` (Začátečník) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Přehraje jeden ze zvuků robota uložených v hubu (Affirmative, Laser, Hello, Tadaa a dalších 80) a čeká, dokud neskončí. Zvuky jsou součástí softwaru hubu; pokud hub mlčí, viz [Když hub nenaběhne](/docs/Application/Hubs/RobotInventorHub#restore).

### `spustit zvuk …` (Začátečník) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Spustí zvuk robota v hubu a hned pokračuje dál.

### `zastavit všechny zvuky` (hub) (Začátečník) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Zastaví zvuk a pípání v hubu. Blok se stejným názvem bez ikony hubu zastavuje zvuky vašeho zařízení.

### `nastavit hlasitost hubu na … %` (Pokročilý) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Nastaví hlasitost pípnutí, zvuků a not hubu, od 0 do 100 % (100 %, dokud ji nezměníte).

### `změnit hlasitost hubu o …` (Pokročilý) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Zesílí nebo ztlumí hub o zadanou hodnotu (výchozí −10); hlasitost zůstává mezi 0 a 100 %.

### `hlasitost hubu` (Pokročilý) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Vrací hlasitost hubu, od 0 do 100.

### `nastavit … efekt na …` (Pokročilý) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Nastaví zvukový efekt pro zvuky robota, které se spustí po něm.

- `výška tónu`: od −360 do 360; kladné hodnoty dělají zvuky vyšší a rychlejší, záporné nižší a pomalejší. 0 je normál.
- `vyvážení vlevo/vpravo`: od −100 do 100. Hub má jediný reproduktor, takže to neuslyšíte; hodnota se zachovává kvůli programům vytvořeným v aplikaci Robot Inventor.

### `změnit … efekt o …` (Pokročilý) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Změní efekt výšky tónu nebo vyvážení o zadanou hodnotu (výchozí 10), ve stejných mezích.

### `vymazat zvukové efekty` (Pokročilý) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Vrátí výšku tónu a vyvážení na 0.

### Hudba {#robot-inventor-music}

Hudební bloky měří čas v **dobách**: při tempu 60 dob za minutu (výchozí) trvá jedna doba jednu sekundu. Když program běží v MOCPilotu, noty znějí jako pípnutí hubu správné výšky a délky a bubny jako krátká pípnutí; nástroj zatím zvuk nemění.

#### `zahrát notu … po dobu … dob` (Pokročilý) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Zahraje notu (výchozí 60) po zadaný počet dob (výchozí 0,25) a čeká.

#### `zahrát na buben … po dobu … dob` (Pokročilý) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Zahraje na jeden z 18 bubnů (malý buben, velký buben, hi-hat, kravský zvonec a další) a čeká zadaný počet dob.

#### `pauza na … dob` (Pokročilý) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Čeká zadaný počet dob a nic nehraje.

#### `nastavit nástroj na …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Vybere jeden z 21 nástrojů (klavír, varhany, kytara, flétna, sbor, syntezátor a další) pro následující noty.

#### `nastavit tempo na …` (Pokročilý) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Nastaví tempo v dobách za minutu, od 20 do 500 (výchozí 60).

#### `změnit tempo o …` (Pokročilý) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Zrychlí nebo zpomalí hudbu o zadaný počet dob za minutu (výchozí 20).

#### `tempo` (Pokročilý) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Vrací aktuální tempo v dobách za minutu.
