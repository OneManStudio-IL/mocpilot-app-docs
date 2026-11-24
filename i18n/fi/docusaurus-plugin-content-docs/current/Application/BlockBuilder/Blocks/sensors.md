---
id: Sensors
title: Anturit
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Anturit {#sensors}

Anturilohkot lukevat puhelimesi tai tablettisi tilaa, ohjelman ajastinta, hubeja ja niihin kytkettyjä antureita. Käytä niiden arvoja ehdoissa, tapahtumissa ja laskutoimituksissa.

Tällä sivulla:

- [Hubin tila](#hub-state): akku, jännite, lämpötila, virta ja tehotila
- [Hubin painikkeet, kallistus ja suunta](#hub-tilt-and-orientation)
- [Porttien anturit](#sensors-on-ports): mikä tahansa laite, Technic-värianturi, Technic-etäisyysanturi, BOOST-väri- ja etäisyysanturi, WeDo 2.0 -anturit
- [Robot Inventor -hubi](#robot-inventor-sensors): voima-anturi, eleet, suunta, kääntö-, nyökkäys- ja kallistuskulma, kallistus, hubien välinen radio
- [Tämä laite](#this-device): puhelin, tabletti tai tietokone, jossa MOCPilot on käynnissä
- [Ajastin](#timer)

## Hubin tila {#hub-state}

Näitä lohkoja ei ole Mould King -hubeille, jotka eivät ilmoita mitään tietoja.

### `… % akku` (Aloittelija) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Palauttaa hubin akun varaustason prosentteina.

### `… akun jännite (V)` (Edistynyt) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Palauttaa hubin akun jännitteen voltteina.

- Hubit: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Palauttaa `NaN`, kun hubia ei ole yhdistetty.

### `… lämpötila (C°)` (Edistynyt) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Palauttaa hubin elektroniikan lämpötilan celsiusasteina.

- Hubit: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `hanki … ulostulojännite (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Palauttaa jännitteen, jonka hubi syöttää parhaillaan portteihinsa, voltteina.

- Hubit: BuWizz 2.

### `… virta (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Palauttaa valitun portin ottaman virran ampeereina.

- Hubit: BuWizz 2, BuWizz 3.

### `aseta virta-asetus …` (Technic Move Hub) (Aloittelija) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Asettaa Technic Move Hubin tehotilan.

- Tilat: `normaali`, `boost`
- Hubit: Technic Move Hub.

## Hubin painikkeet, kallistus ja suunta {#hub-tilt-and-orientation}

Painikelohkon kuvauksessa luetellaan hubit, joiden kanssa se toimii. Kallistus- ja suuntalohkot toimivat BuWizz 2:ssa, BuWizz 3:ssa, BOOST Move Hubissa, Technic Hubissa ja Robot Inventorissa.

### `on … … painike …` (Aloittelija) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Palauttaa arvon `true`, kun valittu hubin painike on valitussa tilassa.

- Tilat: `painettu`, `vapautettu`
- Hubit: LEGO Powered Up -hubit, WeDo 2.0 ja Robot Inventor. Painikkeiden luettelo riippuu hubista (yleensä `keskusta`).

### `… … kulma` (Aloittelija) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Palauttaa hubin kallistuskulman.

- Kulmat: `kallistus` (pituussuunta, pitch), `kallistus` (sivusuunta, roll), `kallistus` (kierto, yaw)
- Kierto (yaw) on käytettävissä vain Technic Hubissa ja Robot Inventorissa.

### `… … kiihtyvyysanturi (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Palauttaa hubin kiihtyvyysanturin raakalukeman yhden akselin suunnassa.

- Akselit: `x`, `y`, `z`

### `… … kiihtyvyys (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Palauttaa hubin kiihtyvyyden yhden akselin suunnassa.

- Akselit: `x`, `y`, `z`

### `hanki … suunta muodossa …` (Aloittelija) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Palauttaa, mikä hubin sivu osoittaa ylöspäin.

- Tulos: `teksti` tai `indeksi`
- Arvot: `Etuosa`, `Yläosa`, `Oikea`, `Takaosa`, `Pohja`, `Vasen`

### `… suuntaus …` (Aloittelija) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Palauttaa arvon `true`, kun hubin valittu sivu osoittaa ylöspäin.

- Vaihtoehdot: `Etuosa`, `Yläosa`, `Oikea`, `Takaosa`, `Pohja`, `Vasen`

### `aseta … kallistuksen suuntaan …` (Edistynyt) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Kertoo hubille, miten se on asennettu malliin, jotta kallistus ja suunta mitataan siitä asennosta.

- Vaihtoehdot: `Etuosa`, `Yläosa`, `Oikea`, `Takaosa`, `Pohja`, `Vasen`

## Porttien anturit {#sensors-on-ports}

Alla olevat Technic- ja BOOST-anturilohkot toimivat City Hubissa, Technic Hubissa, BOOST Move Hubissa ja MINDSTORMS Robot Inventor -hubissa (ei SBrick, BuWizz, WeDo 2.0 eikä Mould King).

### Mikä tahansa portin laite {#any-port-device}

#### `… laitetyyppi` (Aloittelija) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Palauttaa valittuun porttiin kytketyn laitteen tyypin.

- Hubit: kaikki hubit, joissa on portteja, paitsi SBrick, SBrick Plus ja BuWizz 2.
- Tyypillinen käyttö: tarkista, mitä on kytketty, ennen kuin suoritat laitekohtaisia lohkoja.

### Technic-värianturi {#technic-color-sensor}

#### Technic-anturi: `aseta tila …` (Edistynyt) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Vaihtaa Technic-värianturin valittuun tilaan.

- Tilat: `oletus`, `ympäristö`
- Tilan vaihtaminen voi vaikuttaa ohjelmaasi odottamattomasti: `ympäristö`-tilassa anturi ei pysty lukemaan värejä eikä heijastunutta valoa.

#### Technic-anturi: `väri …` (Aloittelija) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Palauttaa Technic-värianturin näkemän värin.

- Tulos: `arvo` (luku) tai `merkkijono` (värin nimi)

#### Technic-anturi: `on väri …` (Aloittelija) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Palauttaa arvon `true`, kun Technic-värianturi näkee valitun värin.

#### Technic-anturi: `heijastunut valo (%)` (Aloittelija) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Palauttaa prosentteina, kuinka paljon valoa pinta heijastaa takaisin Technic-värianturiin.

#### Technic-anturi: `heijastunut valo …` (Aloittelija) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Palauttaa arvon `true`, kun heijastunut valo on valitussa suhteessa arvoon.

- Vertailu: `<`, `=`, `>`

#### Technic-anturi: `ympäristön valo (%)` (Aloittelija) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Palauttaa ympäröivän valon kirkkauden prosentteina.

#### Technic-anturi: `ympäristön valo …` (Aloittelija) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Palauttaa arvon `true`, kun ympäristön valo on valitussa suhteessa arvoon.

- Vertailu: `<`, `=`, `>`

#### Technic-anturi: `raaka arvo …` (Aloittelija) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Palauttaa Technic-värianturin yhden värikanavan raaka-arvon.

- Kanavat: `punainen`, `vihreä`, `sininen`

### Technic-etäisyysanturi {#technic-distance-sensor}

#### Technic-anturi: `etäisyys …` (Aloittelija) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Palauttaa Technic-etäisyysanturin mittaaman etäisyyden.

- Yksiköt: `mm`, `cm`, `tuuma`, `%`

#### Technic-anturi: `on lähempänä kuin / kauempana kuin / täsmälleen kohdalla …` (Aloittelija) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Palauttaa arvon `true`, kun Technic-etäisyysanturin mittaama etäisyys täyttää ehdon.

- Vertailu: `lähempänä kuin`, `kauempana kuin`, `täsmälleen kohdalla`
- Yksiköt: `mm`, `cm`, `tuuma`, `%`

### BOOST-väri- ja etäisyysanturi {#boost-color-and-distance-sensor}

#### BOOST-anturi: `väri …` (Aloittelija) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Palauttaa BOOST-väri- ja etäisyysanturin näkemän värin.

- Tulos: `arvo` (luku) tai `merkkijono` (värin nimi)

#### BOOST-anturi: `on väri …` (Aloittelija) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Palauttaa arvon `true`, kun BOOST-anturi näkee valitun värin.

#### BOOST-anturi: `etäisyys …` (Aloittelija) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Palauttaa BOOST-väri- ja etäisyysanturin mittaaman etäisyyden.

- Yksiköt: `%`, `cm`, `tuuma`

#### BOOST-anturi: `on lähempänä kuin / kauempana kuin / täsmälleen kohdalla …` (Aloittelija) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Palauttaa arvon `true`, kun BOOST-anturin mittaama etäisyys täyttää ehdon.

- Vertailu: `lähempänä kuin`, `kauempana kuin`, `täsmälleen kohdalla`
- Yksiköt: `%`, `cm`, `tuuma`

#### BOOST-anturi: `heijastunut valo (%)` (Aloittelija) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Palauttaa prosentteina, kuinka paljon valoa pinta heijastaa takaisin BOOST-anturiin.

#### BOOST-anturi: `heijastunut valo …` (Aloittelija) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Palauttaa arvon `true`, kun heijastunut valo on valitussa suhteessa arvoon.

- Vertailu: `<`, `=`, `>`

### WeDo 2.0 -anturit {#wedo-2-sensors}

WeDo 2.0 -liikeanturi ja -kallistusanturi WeDo 2.0 -hubissa.

#### WeDo 2.0 -anturi: `etäisyys …` (Aloittelija) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Palauttaa WeDo 2.0 -liikeanturin mittaaman etäisyyden.

- Yksiköt: `%`, `cm`, `tuuma`
- Hubit: WeDo 2.0.

#### WeDo 2.0 -anturi: `on lähempänä kuin / kauempana kuin / täsmälleen kohdalla …` (Aloittelija) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Palauttaa arvon `true`, kun WeDo 2.0 -liikeanturin mittaama etäisyys täyttää ehdon.

- Vertailu: `lähempänä kuin`, `kauempana kuin`, `täsmälleen kohdalla`
- Yksiköt: `%`, `cm`, `tuuma`
- Hubit: WeDo 2.0.

#### WeDo 2.0 -anturi: `kulma …` / `suunta nimellä …` (Aloittelija) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Palauttaa WeDo 2.0 -kallistusanturin tietoja: kallistuskulman tai suunnan, johon anturi on kallistettu.

- Kulmat: `kallistus` (pituussuunta, pitch), `kallistus` (sivusuunta, roll)
- Suunnan tulos: `teksti` tai `luku`; suunnat: `neutraali`, `eteenpäin`, `taaksepäin`, `vasen`, `oikea`, `tuntematon`
- Hubit: WeDo 2.0.

## Robot Inventor -hubi {#robot-inventor-sensors}

Nämä lohkot tulevat Robot Inventor -sovelluksesta ja toimivat vain [MINDSTORMS Robot Inventor- ja SPIKE Prime -hubien](/docs/Application/Hubs/RobotInventorHub) kanssa. Niissä on hubikuvake. Niiden tapahtumat (kun hubia ravistetaan, kallistetaan ja niin edelleen) ovat sivulla [Tapahtumat](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Voima-anturi {#robot-inventor-force-sensor}

#### `on … painettu / painettu lujaa / vapautettu ?` (Aloittelija) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Tarkistaa valitun portin voima-anturin. `painettu lujaa` tarkoittaa painamista yli 5 newtonin voimalla.

#### `… paine yksikössä % / newton` (Aloittelija) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Palauttaa, kuinka lujaa voima-anturia painetaan: prosentteina (0–100) tai newtoneina (0–10).

### Hubin liike {#robot-inventor-motion}

#### `onko hubi … ?` (Edistynyt) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true`, jos hubia on juuri liikutettu näin: `napautettu`, `kaksoisnapautettu`, `ravisteltu` (oletus) tai `putoaa`. Ele lasketaan kerran: kun lohko on lukenut sen, se katoaa.

#### `ele` (Guru) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Palauttaa viimeisimmän eleen tekstinä: `tapped`, `doubletapped`, `shake` tai `freefall`, tai tyhjän arvon, jos elettä ei ole ollut.

#### `on … ylöspäin?` (Aloittelija) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true`, jos tämä hubin puoli on ylöspäin: `etupuoli` (valomatriisi), `yläpuoli`, `oikea puoli`, `takapuoli`, `alapuoli` tai `vasen puoli`.

#### `suunta` (Guru) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Palauttaa ylöspäin olevan puolen tekstinä: `front`, `up`, `rightside`, `back`, `down` tai `leftside`.

#### `… kulma` (Aloittelija) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Palauttaa hubin kulman asteina yhden akselin ympäri. Sovelluksessa valikon kaikki kolme vaihtoehtoa näkyvät nimellä `kallistus`; ne ovat tässä järjestyksessä kääntökulma (yaw: kääntyminen vasemmalle ja oikealle kuin kompassissa), nyökkäyskulma (pitch: keula ylös ja alas) ja kallistuskulma (roll: kallistuminen sivuille).

- Tyypillinen käyttö: robotin ajaminen suoraan tai kääntäminen tarkalleen 90°: nollaa kääntökulma ja ohjaa sitten, kunnes kääntökulma saavuttaa halutun kulman.

#### `nollaa kääntökulma` (Aloittelija) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Tekee hubin nykyisestä suunnasta kääntökulman uuden nollakohdan. Lohko odottaa 0,1 s, jotta seuraava lukema lasketaan jo siitä.

#### `kulmanopeus …` (Guru) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Palauttaa, kuinka nopeasti hubi kääntyy akselin `x`, `y` tai `z` ympäri (gyroskooppi), asteina sekunnissa.

#### `kiihtyvyys …` (Guru) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Palauttaa hubin kiihtyvyyden akselin `x`, `y` tai `z` suunnassa sellaisena kuin hubi sen ilmoittaa.

#### `onko hubi kallistettu … ?` (Edistynyt) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true`, jos hubi on kallistettu tähän suuntaan: `ylös`, `alas`, `vasemmalle`, `oikealle` tai `mikä tahansa` (oletus). Hubi lasketaan kallistetuksi noin 12°:n kallistuksesta alkaen; jos se on kallistettu kumpaankin suuntaan, suurempi kallistus ratkaisee.

### Hubien välinen radio {#robot-inventor-radio}

Robot Inventor -hubit voivat lähettää toisilleen lyhyitä signaaleja langattomasti ilman MOCPilotia välissä. Signaalilla on nimi ja arvo.

#### `lähetä hubin signaali … kanssa …` (Guru) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Lähettää tältä hubilta lähellä oleville hubeille signaalin annetulla nimellä (oletuksena `signal`) ja arvolla (`1`).

#### `vastaanotettu signaali … arvo` (Guru) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Palauttaa viimeisimmän arvon, jonka tämä hubi on vastaanottanut tämännimiselle signaalille, tai 0, jos mitään ei ole vielä tullut. Jos haluat reagoida heti signaalin saapuessa, käytä lohkoa [kun hubi vastaanottaa signaalin](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

## Tämä laite {#this-device}

Nämä lohkot lukevat puhelinta, tablettia tai tietokonetta, jossa MOCPilot on käynnissä.

### `laite % akku` (Aloittelija) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Palauttaa laitteen akun varaustason prosentteina.

### `laite … kulma` (Edistynyt) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Palauttaa laitteen kallistuskulman.

- Kulmat: `kallistus` (pituussuunta, pitch), `kallistus` (sivusuunta, roll), `kallistus` (kierto, yaw)
- Tyypillinen käyttö: mallin ohjaaminen puhelinta kallistamalla.

### `laite … kiihtyvyysanturi (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Palauttaa laitteen kiihtyvyysanturin raakalukeman yhden akselin suunnassa, yksikkönä m/s².

- Akselit: `x`, `y`, `z`

### `laite … kiihtyvyys (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Palauttaa laitteen kiihtyvyyden yhden akselin suunnassa, yksikkönä m/s².

- Akselit: `x`, `y`, `z`

## Ajastin {#timer}

### `ajastin` (Edistynyt) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Palauttaa sekunteina ajan, joka on kulunut ohjelman käynnistymisestä tai viimeisimmästä **nollaa ajastin** -lohkosta.

### `nollaa ajastin` (Edistynyt) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Palauttaa ajastimen nollaan.
