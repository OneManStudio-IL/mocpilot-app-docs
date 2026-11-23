---
id: Simulator
title: Simulaattori
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulaattori {#simulator}

**Simulaattori** muuttaa kojelaudan polkimet, vaihteiston ja käsijarrun autoksi, joka käyttäytyy kuin oikea: se kiihtyy hitaudella, rullaa, jarruttaa, peruuttaa ja vaihtaa vaihteita. Ohjaimet antavat vain raaka-arvonsa; ohjelma rakentaa niistä auton ja lähettää sen nopeuden moottoreille.

Luokka näkyy, kun kojelaudalla on polkimet, vaihteisto tai käsijarru. Näitä ohjaimia lukevat lohkot on kuvattu sivulla [Näytön ohjaimet](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Ajoneuvot {#vehicles}

Paina luokan yläreunan **Luo ajoneuvo** -painiketta ja anna ajoneuvolle nimi (esimerkiksi ”Ajoneuvo 1”). Lohkot näkyvät, kun ohjelmassa on vähintään yksi ajoneuvo, ja jokaisessa lohkossa valitset, minkä ajoneuvon kanssa se toimii. Ajoneuvoja hallitaan painikkeilla **Nimeä ajoneuvo uudelleen** ja **Poista ajoneuvo**; ajoneuvoa ei voi poistaa, kun sen lohkoja on ohjelmassa, eikä viimeisiä polkimia, vaihteistoa tai käsijarrua voi poistaa kojelaudalta, kun Simulaattori-lohkoja käytetään.

<Screenshot name="blocks-simulator" alt="Simulaattori-luokka ja polkimien tapahtumaan liitetty aja-lohko" width={900} />

Tyypillinen auto: liitä **aja**-lohko polkimien tapahtumaan, kytke polkimet kohtiin `kaasu` ja `jarru` ja käynnistä sen sisällä ajomoottori ajoneuvon `nopeus`-arvolla:

```text
kun polkimet PDL1 mikä tahansa liikkuu
    Ajoneuvo 1  aja  kaasu (polkimet PDL1 kiihtyvyys)  jarru (polkimet PDL1 jarru)
        käynnistä moottori (nopeus: Ajoneuvo 1) % nopeus  (Hubi 1, portti A)
```

`toistaa aina` -silmukkaa ei tarvita: **aja** pysyy käynnissä itsestään, kunnes auto pysähtyy.

## Lohkot {#blocks}

### `… aja kaasu … jarru … vaihde … / … käsijarru … lukittu … jakovaihteisto …` (Aloittelija) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Simulaattorin sydän. C-lohko, joka ajaa ajoneuvoa: 0,1 sekunnin välein se lukee syötteensä, siirtää autoa yhden askeleen ja suorittaa sisällään olevat lohkot (laita moottorilohkot sinne). Se päättyy, kun auto seisoo paikallaan eikä mitään paineta; sisällä olevat lohkot suoritetaan vielä viimeisen kerran, jotta moottori saa lopullisen arvon.

- `kaasu` ja `jarru`: kuinka syvälle kumpaakin poljinta painetaan, 0–100.
- `vaihde`: valittu vaihde: `-1` peruutus, `0` vapaa, `1` ja ylöspäin eteenpäin. Jos tähän paikkaan on asetettu automaattivaihteiston ohjain, käytetään sen sijaan valitsimen asentoa (P, R, N, D), ja auto valitsee vaihteen D-asennossa itse.
- `/`: montako vaihdetta vaihteistossa on (oletuksena 6).
- `käsijarru`: kuinka lujaa käsijarrua vedetään, 0–100; `lukittu`: onko se lukittu.
- `jakovaihteisto` (valinnainen): [jakovaihteiston](/docs/Application/Dashboard/SpecialControls#transfer-case) asento, yleensä [jakovaihteiston asento](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_transfercase_value_float) -lohko: `0` 2H, `1` 4H, `2` N, `3` 4L. Asennoissa 2H ja 4H auto ajaa kuin ilman sitä; asennossa N se ei aja (se rullaa vapaasti, ja jarru vain hidastaa sitä peruuttamatta); asennossa 4L nopeus rajoitetaan 40 %:iin. Jätä paikka tyhjäksi, jos mallissa ei ole jakovaihteistoa.
- Syöte otetaan huomioon vain, kun siihen on asetettu lohko; tyhjään paikkaan kirjoitettu pelkkä luku ohitetaan (paitsi `/`).
- Vain yksi **aja**-lohko voi ajaa ajoneuvoa kerrallaan; toinen saman ajoneuvon lohko ohittaa sisäiset lohkonsa.

### `aseta … tyypiksi …` (Aloittelija) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Virittää ajoneuvon moottorin tietynlaiselle ajoneuvolle: kuinka kauan se rullaa (hitaus), sen suurin peruutusnopeus ja onko siinä paineilmajarru.

- Tyypit: `henkilöauto`, `maastoajoneuvo`, `urheiluauto`, `kuorma-auto` (kuorma-autossa on paineilmajarru)

### `aseta … … arvoon … %` (Edistynyt) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Muuttaa yhtä moottorin asetusta.

- `moottorin hitaus`: mitä suurempi se on, sitä pidempään auto rullaa ilman kaasua (0 tarkoittaa, ettei hitautta ole).
- `peruutusnopeus`: suurin nopeus peruuttaessa.

### `aseta … … arvoon …` (Edistynyt) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Kytkee yhden ajoneuvon asetuksen päälle tai pois.

- `peruutus jarrulla`: pelkillä polkimilla jarrun painaminen paikallaan seistessä ajaa taaksepäin.
- `vaihteet rajoittavat nopeutta`: jokaisella vaihteella on oma huippunopeutensa.
- `käsijarru pitää`: lukittu käsijarru pitää auton paikallaan.
- `paineilmajarru`: kuorma-auton paineilmajarru (antaa ”päästää ilmaa” -tapahtuman).
- `automaattivaihteisto`: `vaihde`-syötettä käsitellään automaattivaihteiston valitsimena.

### `nollaa …` (Edistynyt) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Pysäyttää ajoneuvon paikoilleen ja unohtaa sen tilan.

### `… : …` (Aloittelija) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Palauttaa yhden ajoneuvon arvoista.

- `nopeus`: −100…100 (peruuttaessa negatiivinen), valmiina moottorin nopeuspaikkaan.
- `moottorin kierrosluku`: 0…100, kierroslukumittaria tai moottorin ääntä varten.
- `vaihde`: nykyinen vaihde (`-1` peruutus, `0` vapaa, sitten `1`, `2`…).

### `onko … … ?` (Aloittelija) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Palauttaa arvon `true`, kun ajoneuvo on valitussa tilassa.

- Tilat: `liikkeessä`, `jarruttamassa`, `käsijarrussa`

### `kun … …` (Aloittelija) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Suorittaa skriptinsä, kun ajoneuvolle tapahtuu jotain.

- Tapahtumat: `käynnistyy`, `pysähtyy`, `alkaa jarruttaa`, `lopettaa jarrutuksen`, `jarruttaa voimakkaasti`, `päästää ilmaa`, `vaihtaa vaihdetta`
- Tyypillinen käyttö: äänen soittaminen, esimerkiksi paineilmajarrun suhahdus tapahtumassa `päästää ilmaa` tai kirskunta tapahtumassa `jarruttaa voimakkaasti` (katso [Äänet](/docs/Application/BlockBuilder/Blocks/Sounds)).
