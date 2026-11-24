---
id: Movement
title: Liike
description: "Liikelohkot ajavat kaksimoottorista robottia MINDSTORMS Robot Inventor- tai SPIKE-hubilla: liikkuminen, ohjaus, tankkiohjaus, nopeus, kiihtyvyys ja pysäyttäminen."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Liike

Liikelohkot ajavat robottia, jossa on kaksi pyörää ja kummallakin oma moottorinsa, yhtenä kokonaisuutena: ”aja eteenpäin 10 cm”, ”käänny myötäpäivään 1 kierros”, ”ohjaa 30 oikealle”. Ne ovat samat liikelohkot kuin LEGO® MINDSTORMS® Robot Inventor -sovelluksessa. Luokka näkyy paletissa ensimmäisenä, kun profiilissa on [Robot Inventor- tai SPIKE Prime -hubi](/docs/Application/Hubs/RobotInventorHub). Kaikissa sen lohkoissa on mustavalkoinen hubikuvake.

## Miten liike toimii {#how-movement-works}

- **Liikemoottorit.** Oletuksena vasen pyörä on portissa **A** ja oikea portissa **B**. Valitse muut portit lohkolla [aseta liikemoottorit](#block_ri_move_set_pair). Robotissa moottorit ovat vastakkain, joten MOCPilot pyörittää oikeaa toiseen suuntaan: positiivinen nopeus ajaa robottia aina eteenpäin.
- **Liikenopeus.** Lohkot, joilla ei ole omaa nopeutta, käyttävät liikenopeutta: **50 %**, kunnes [aseta liikenopeus](#block_ri_move_set_speed) muuttaa sen.
- **Ohjaus** on luku väliltä −100–100. **0** ajaa suoraan. Positiiviset arvot kääntävät oikealle, negatiiviset vasemmalle: sisempi pyörä hidastaa sitä enemmän, mitä lähempänä ±100 ohjaus on (arvolla 50 se pyörii puolella nopeudella). Arvolla **100** tai **−100** pyörät pyörivät vastakkaisiin suuntiin ja robotti pyörii paikallaan.
- **Yksiköt.** Matkat voi antaa yksikössä `cm`, `tuumaa`, `kierrokset` tai moottorien `astetta`, ja monet lohkot hyväksyvät myös yksikön `sekunnit`. Senttimetrit ja tuumat lasketaan matkasta moottorin kierrosta kohden: oletuksena **17,5 cm** (Robot Inventorin pyörä), ja sen voi muuttaa lohkolla [aseta 1 moottorin kierros](#block_ri_move_set_distance). Negatiivinen matka ajaa toiseen suuntaan.
- **Odottaminen.** Lohkot, joissa on matka (`liiku … matkan …`), odottavat, kunnes robotti on kulkenut sen. Lohkot, jotka alkavat sanoilla **aloita liikkuminen**, jatkavat heti: robotti ajaa, kunnes tulee **lopeta liikkuminen** tai jokin muu liikelohko.

Joissakin näiden lohkojen teksteissä on sovelluksen käännöksen erikoisuuksia: `ssa` tarkoittaa ”nopeudella” tai ”teholla”, ja `matkan` koskee myös aikaa, kun yksikkö on `sekunnit`.

## Liikkeen asetukset {#movement-settings}

### `aseta liikemoottorit … …` (Aloittelija) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Valitsee vasemman ja oikean pyörän moottorien portit. Oletus: **A** ja **B**. Porttien on oltava eri portit.

### `aseta liikenopeus … %` (Aloittelija) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Asettaa nopeuden väliltä −100–100 % niille liikelohkoille, joilla ei ole omaa nopeutta. Oletus: 50 %. Lohko ei käynnistä moottoreita.

### `aseta 1 moottorin kierros … cm / tuumaa kuljettu` (Edistynyt) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Kertoo MOCPilotille, kuinka pitkälle robotti kulkee yhdellä moottorin kierroksella, jotta senttimetreinä ja tuumina annetut matkat menevät oikein. Oletus: 17,5 cm. Mittaa oma robottisi: anna sen **liikkua eteenpäin 1 kierros** ja mittaa matka. Arvo 0 ohitetaan.

### `aseta liikkeen kiihtyvyys …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Kuinka nopeasti liikemoottorit kiihdyttävät ja hidastavat.

- Vaihtoehdot: `oletus`, `nopea` (0,1 s), `tasapainoinen` (0,35 s), `pehmeä` (0,8 s), `hidas` (1,2 s), `erittäin hidas` (2 s): aika paikallaan olosta täyteen nopeuteen.

### `aseta liikemoottorit … pysähdyksissä` (Edistynyt) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Mitä moottorit tekevät, kun robotti pysähtyy.

- `vapaa rullaus`: moottorit pyörivät vapaasti ja robotti rullaa pysähdyksiin.
- `jarru` (oletus): moottorit jarruttavat.
- `pidä asento`: moottorit pitävät aktiivisesti asentonsa, vaikka robottia työnnettäisiin.

## Liikkuminen {#moving}

### `liiku … matkan …` (Aloittelija) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Liikuttaa robottia liikenopeudella ja odottaa, kunnes liike on valmis.

- Suunta: `eteenpäin`, `taaksepäin`, `myötäpäivään`, `vastapäivään` (kaksi viimeistä pyörittävät robottia paikallaan).
- Yksiköt: `cm`, `tuumaa`, `kierrokset`, `astetta`, `sekunnit`. Oletus: 10 cm.

### `liiku … matkan …` (ohjauksella) (Aloittelija) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Liikuttaa robottia annetulla ohjauksella (−100–100) liikenopeudella ja odottaa, kunnes liike on valmis. Ohjauksella 30 robotti ajaa kaarta oikealle.

- Yksiköt: `cm`, `tuumaa`, `kierrokset`, `astetta`, `sekunnit`.

### `liiku … matkan … ssa … % nopeus` (Edistynyt) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
Sama, mutta omalla nopeudella liikenopeuden sijaan.

- Yksiköt: `cm`, `tuumaa`, `kierrokset`, `astetta`.

### `liiku … ssa … … % nopeus` (Edistynyt) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Tankkiohjaus tietyn matkan: asettaa vasemman ja oikean pyörän nopeuden erikseen (kumpikin −100–100 %) ja odottaa, kunnes robotti on kulkenut matkan.

- Yksiköt: `cm`, `tuumaa`, `kierrokset`, `astetta`, `sekunnit`.

### `aloita liikkuminen …` (Aloittelija) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Aloittaa liikkumisen annetulla ohjauksella liikenopeudella ja siirtyy heti seuraavaan lohkoon.

### `aloita liikkuminen … ssa … % nopeus` (Edistynyt) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Aloittaa liikkumisen annetulla ohjauksella ja nopeudella.

- Tyypillinen käyttö: aseta kojelaudan liukusäädin ohjauksen paikkaan ja poljin nopeuden paikkaan.

### `aloita liikkuminen … ssa … % teho` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Kuten yllä oleva lohko, mutta asettaa moottorien **tehon** säädetyn nopeuden sijaan: moottorit eivät yritä pitää nopeutta, kun robotti nousee ylämäkeen tai kantaa kuormaa.

### `aloita liikkuminen … … % nopeus` (Edistynyt) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Tankkiohjaus: käynnistää vasemman ja oikean pyörän kumpikin omalla nopeudellaan.

### `aloita liikkuminen … … % teho` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Tankkiohjaus kummankin pyörän moottoriteholla säädetyn nopeuden sijaan.

### `lopeta liikkuminen` (Aloittelija) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Pysäyttää molemmat liikemoottorit lohkon **aseta liikemoottorit … pysähdyksissä** määräämällä tavalla (oletuksena jarru).

### `keskeytyikö liike?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true`, jos viimeisin liike ei päättynyt loppuun: jokin muu liikelohko tai **lopeta liikkuminen** keskeytti sen.
