---
id: Sounds
title: Äänet
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Äänet {#sounds}

Äänilohkot soittavat ääniä puhelimessa, tabletissa tai tietokoneessa, jossa MOCPilot on käynnissä: piippauksia, merkkiääniä, äänitorvia, tehosteita ja omia äänitteitäsi.

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
