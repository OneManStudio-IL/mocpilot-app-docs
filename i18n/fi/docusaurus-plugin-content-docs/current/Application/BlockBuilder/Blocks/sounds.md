---
id: Sounds
title: Äänet
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Äänet {#sounds}

Äänilohkot soittavat ääniä puhelimessa, tabletissa tai tietokoneessa, jossa MOCPilot on käynnissä: piippauksia, merkkiääniä, äänitorvia, tehosteita ja omia äänitteitäsi. Robot Inventor -hubissa on myös oma kaiutin, katso [Robot Inventor -hubin kaiutin](#robot-inventor-sounds).

## Mitä ääniä voit soittaa {#which-sounds-you-can-play}

Lohkojen ääniluettelossa on kaksi osaa:

- **Sisäänrakennettu kirjasto**: lyhyitä piippauksia, sirkutuksia, peruutuspiippari, sireeni, hälytys, onnistumis- ja virheäänet, auton, kuorma-auton ja junan äänitorvet, polkupyörän soittokello, suuntavilkku ja muutama tehoste (napsahdus, poksahdus, laser, kolikko, virta päälle, virta pois).
- **Omat äänesi**: paina luokan yläreunan **Lisää ääni** -painiketta ja valitse äänitiedosto. Sovellus muuntaa sen ja tallentaa sen profiiliin, joten se kulkee profiilin mukana muille laitteillesi ja katalogiin. Profiilissa voi olla enintään 30 ääntä; pidempi tiedosto lyhennetään 15 sekuntiin. Ääniä hallitaan painikkeilla **Nimeä ääni uudelleen** ja **Poista ääni**; lohkot, jotka soittivat poistettua ääntä, vaikenevat.

<Screenshot name="blocks-add-sound" alt="Lisää ääni -ikkuna Logiikkalohkoissa" width={900} />

## Lohkot {#blocks}

### `ääni … soita / soita loppuun / toista` (Aloittelija) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Soittaa valitun äänen.

- `soita`: käynnistää äänen ja siirtyy heti seuraavaan lohkoon. Toistuviksi tarkoitetut äänet (kuten sireeni tai peruutuspiippari) toistuvat jatkuvasti.
- `soita loppuun`: soittaa äänen kerran ja odottaa, kunnes se loppuu.
- `toista`: soittaa ääntä silmukassa, kunnes pysäytät sen.
- Jo soivan äänen käynnistäminen aloittaa sen alusta.
- Voit asettaa paikkaan **ääni**-raportointilohkon (tai ääntä sisältävän muuttujan) luettelosta valitsemisen sijaan.

### `piippaa … Hz, kesto … s` (Aloittelija) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Soittaa annetun korkuisen ja pituisen äänen ja odottaa, kunnes se loppuu.

- Korkeus: 50–8000 Hz (oletuksena 440).
- Pituus: 0,02–10 sekuntia (oletuksena 0,2).

### `pysäytä ääni …` (Aloittelija) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Pysäyttää valitun äänen.

### `pysäytä kaikki äänet` (Aloittelija) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Pysäyttää kaikki soivat äänet.

### `aseta äänenvoimakkuus arvoon … %` (Edistynyt) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Asettaa kaikkien ohjelman äänten voimakkuuden välille 0–100 %. Kun ohjelma pysähtyy, voimakkuus palaa 100 %:iin.

### `äänenvoimakkuus` (Edistynyt) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Palauttaa nykyisen äänenvoimakkuuden välillä 0–100.

### `ääni …` (Edistynyt) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Palauttaa valitun äänen arvona.

- Tyypillinen käyttö: äänen säilyttäminen muuttujassa tai listassa tai sen välittäminen jollekin [Minun lohkoista](/docs/Application/BlockBuilder/Blocks/MyBlocks), minkä jälkeen se soitetaan lohkolla **ääni … soita**.

## Robot Inventor -hubin kaiutin {#robot-inventor-sounds}

Nämä lohkot tulevat Robot Inventor -sovelluksesta ja soittavat ääniä [MINDSTORMS Robot Inventor- tai SPIKE Prime -hubin](/docs/Application/Hubs/RobotInventorHub) kaiuttimesta, eivät laitteestasi. Niissä on hubikuvake. Nuotit annetaan MIDI-nuottinumeroina: 60 on keski-C, ja jokainen askel on puolisävel (0–132).

### `piippaa … ajaksi … sekunnit` (Aloittelija) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Soittaa annetun nuotin (oletuksena 60) piippauksen annetun ajan (oletuksena 0,2 s) ja odottaa, kunnes se loppuu.

### `aloita piippaus …` (Edistynyt) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Aloittaa annetun nuotin piippauksen ja jatkaa heti. Piippaus kuuluu, kunnes tulee **pysäytä kaikki äänet** tai jokin muu hubin ääni.

### `soita ääni … loppuun asti` (Aloittelija) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Soittaa yhden hubiin tallennetuista robottiäänistä (Affirmative, Laser, Hello, Tadaa ja 80 muuta) ja odottaa, kunnes se loppuu. Äänet tulevat hubiohjelmiston mukana; jos hubi on hiljaa, katso [Jos hubi ei käynnisty](/docs/Application/Hubs/RobotInventorHub#restore).

### `käynnistä ääni …` (Aloittelija) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Käynnistää hubin robottiäänen ja jatkaa heti.

### `pysäytä kaikki äänet` (hubi) (Aloittelija) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Pysäyttää hubin äänen ja piippauksen. Samanniminen lohko ilman hubikuvaketta pysäyttää laitteesi äänet.

### `aseta hubin äänenvoimakkuus … %` (Edistynyt) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Asettaa hubin piippausten, äänten ja nuottien äänenvoimakkuuden väliltä 0–100 % (100 %, kunnes muutat sitä).

### `muuta hubin äänenvoimakkuutta …` (Edistynyt) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Muuttaa hubin ääntä kovemmaksi tai hiljaisemmaksi annetun määrän (oletuksena −10); äänenvoimakkuus pysyy välillä 0–100 %.

### `hubin äänenvoimakkuus` (Edistynyt) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Palauttaa hubin äänenvoimakkuuden väliltä 0–100.

### `asettaa … tehoste arvoon …` (Edistynyt) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Asettaa äänitehosteen robottiäänille, jotka alkavat sen jälkeen.

- `sävelkorkeus`: −360–360; positiiviset arvot tekevät äänistä korkeampia ja nopeampia, negatiiviset matalampia ja hitaampia. 0 on normaali.
- `panorointi vasen/oikea`: −100–100. Hubissa on vain yksi kaiutin, joten et kuule eroa; arvo säilytetään Robot Inventor -sovelluksessa tehtyjä ohjelmia varten.

### `muuttaa … tehostetta …` (Edistynyt) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Muuttaa sävelkorkeus- tai panorointitehostetta annetun määrän (oletuksena 10) samoissa rajoissa.

### `poista äänitehosteet` (Edistynyt) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Palauttaa sävelkorkeuden ja panoroinnin arvoon 0.

### Musiikki {#robot-inventor-music}

Musiikkilohkot laskevat aikaa **iskuina**: tempolla 60 iskua minuutissa (oletus) yksi isku kestää sekunnin. Kun ohjelma toimii MOCPilotissa, nuotit kuuluvat oikean korkuisina ja pituisina hubin piippauksina ja rummut lyhyinä piippauksina; soitin ei vielä muuta ääntä.

#### `soita nuotti … ajaksi … iskua` (Edistynyt) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Soittaa nuotin (oletuksena 60) annetun määrän iskuja (oletuksena 0,25) ja odottaa.

#### `soita rumpua … ajaksi … iskua` (Edistynyt) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Soittaa yhtä 18 rummusta (virveli, bassorumpu, hi-hat, lehmänkello ja muita) ja odottaa annetun määrän iskuja.

#### `tauko … iskua` (Edistynyt) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Odottaa annetun määrän iskuja soittamatta mitään.

#### `aseta soitin …` (Guru) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Valitsee yhden 21 soittimesta (piano, urut, kitara, huilu, kuoro, syntikka ja muita) seuraaville nuoteille.

#### `aseta tempo …` (Edistynyt) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Asettaa tempon iskuina minuutissa väliltä 20–500 (oletuksena 60).

#### `muuta tempoa …` (Edistynyt) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Nopeuttaa tai hidastaa musiikkia annetun määrän iskuja minuutissa (oletuksena 20).

#### `tempo` (Edistynyt) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Palauttaa nykyisen tempon iskuina minuutissa.
