---
id: Events
title: Tapahtumat
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Tapahtumat {#events}

**Tapahtumat**-luokassa ovat lohkot, jotka käynnistävät skriptejä, kun jotain tapahtuu, sekä lohkot, jotka lähettävät viestejä skriptien välillä. Viestejä hallitaan luokan yläreunan painikkeilla **Lisää viesti** ja **Poista viesti**.

## Perustapahtumat {#core-events}

### `kun ohjelma käynnistyy` (Aloittelija) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Suorittaa skriptinsä kerran, kun ohjelma käynnistyy.

- Tyypillinen käyttö: muuttujien alkuarvojen asettaminen, moottorien asettaminen alkutilaan, ”valmis”-viestin näyttäminen.

### `kun …` (Edistynyt) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Suorittaa skriptinsä, kun paikassa oleva ehto muuttuu epätodesta todeksi. Skriptin käydessä lohko odottaa; se laukeaa uudelleen vasta, kun ehto on muuttunut epätodeksi ja sitten taas todeksi.

- Tyypillinen käyttö: reagointi tilaan, esimerkiksi `kun ajastin > 5 ja kytkin on päällä`.

### `kun ajastin > …` (Edistynyt) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Suorittaa skriptinsä, kun ohjelman ajastin ylittää arvon (sekunteina).

- Tyypillinen käyttö: viivästetyt toiminnot, ajastetut vaiheet. Nollaa ajastin lohkolla **nollaa ajastin** (Anturit).

### `kun vastaanotan …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Suorittaa skriptinsä, kun valittu viesti lähetetään.

- Tyypillinen käyttö: useiden skriptien koordinointi.

### `siirtää …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Lähettää viestin jokaiselle skriptille, joka alkaa kyseisen viestin **kun vastaanotan** -lohkolla, ja jatkaa heti.

- Tyypillinen käyttö: muiden skriptien käynnistäminen odottamatta niitä.

### `siirtää … ja odota` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Lähettää viestin ja keskeyttää tämän skriptin, kunnes kaikki viestin vastaanottaneet skriptit ovat päättyneet.

- Tyypillinen käyttö: vaiheittaiset sarjat, joissa järjestyksellä on väliä.

## Hubin tapahtumat {#hub-events}

Nämä lohkot näkyvät, kun jokin profiilin hubi tukee niitä. Mould King -hubeille niitä ei ole.

### `kun … … painike …` (Aloittelija) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Suoritetaan, kun hubin painiketta painetaan tai se vapautetaan.

- Tilavaihtoehdot: `painettu`, `vapautettu`, `muutettu`
- Hubit: LEGO Powered Up -hubit, WeDo 2.0 ja Robot Inventor. Painikkeiden luettelo riippuu hubista.

### `kun … on yhdistetty / yhteys katkaistu` (Aloittelija) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Suoritetaan, kun hubi yhdistyy tai sen yhteys katkeaa.

- Tyypillinen käyttö: mallin pysäyttäminen turvallisesti yhteyden katketessa ja sen tilan palauttaminen, kun yhteys palaa.

### `kun … % akku muuttui` (Aloittelija) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Suoritetaan, kun hubin ilmoittama akun taso muuttuu.

- Hubit: ne, jotka ilmoittavat akkunsa tason.
- Tyypillinen käyttö: varoitus vähäisestä akusta, siirtyminen virransäästötilaan.

### `kun … kiihtyvyysanturin tiedot muuttuivat` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Suoritetaan, kun hubin kiihtyvyysanturin arvot muuttuvat.

- Hubit: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `kun … kallistus … kulma muuttui` (Aloittelija) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Suoritetaan, kun hubin kallistuskulma muuttuu.

- Kulmavaihtoehdot: `mikä tahansa`, `kallistus` (pituussuunta, pitch), `kallistus` (sivusuunta, roll), `kallistus` (kierto, yaw)
- Hubit: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. Kierto (yaw) on käytettävissä vain Technic Hubissa ja Robot Inventorissa.

### `kun … suunta muuttui` (Aloittelija) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Suoritetaan, kun hubin suunta muuttuu eli kun hubin eri sivu osoittaa ylöspäin.

- Hubit: samat kuin kallistustapahtumassa.

## Anturitapahtumat {#sensor-events}

Nämä tapahtumat lukevat hubin porttiin kytkettyä anturia. Hubit: City Hub, Technic Hub, BOOST Move Hub ja MINDSTORMS Robot Inventor -hubi (ei SBrick, BuWizz, WeDo 2.0 eikä Mould King).

### Technic-anturi: `kun väri on …` (Aloittelija) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Suoritetaan, kun Technic-värianturi näkee valitun värin.

### Technic-anturi: `kun … lähempänä kuin / kauempana kuin / täsmälleen kohdalla …` (Aloittelija) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Suoritetaan, kun Technic-etäisyysanturin mittaama etäisyys täyttää ehdon.

- Vertailuvaihtoehdot: `lähempänä kuin`, `kauempana kuin`, `täsmälleen kohdalla`
- Yksiköt: `mm`, `cm`, `tuuma`, `%`

### BOOST-anturi: `kun … lähempänä kuin / kauempana kuin / täsmälleen kohdalla …` (Aloittelija) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Suoritetaan, kun BOOST-väri- ja etäisyysanturin mittaama etäisyys täyttää ehdon.

- Vertailuvaihtoehdot: `lähempänä kuin`, `kauempana kuin`, `täsmälleen kohdalla`
- Yksiköt: `%`, `cm`, `tuuma`

### BOOST-anturi: `kun väri on …` (Aloittelija) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Suoritetaan, kun BOOST-väri- ja etäisyysanturi näkee valitun värin.

## Robot Inventor -tapahtumat {#robot-inventor-events}

Nämä tapahtumat tulevat Robot Inventor -sovelluksesta ja toimivat vain [MINDSTORMS Robot Inventor- ja SPIKE Prime -hubien](/docs/Application/Hubs/RobotInventorHub) kanssa. Niissä on hubikuvake. Vastaavat arvot ovat sivulla [Anturit](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `kun hubi on …` (Aloittelija) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Suoritetaan kerran aina, kun hubi on `napautettu`, `kaksoisnapautettu`, `ravisteltu` (oletus) tai kun se `putoaa`.

### `kun … on ylöspäin` (Aloittelija) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Suoritetaan, kun hubin valittu puoli kääntyy ylöspäin: `etupuoli` (valomatriisi, oletus), `yläpuoli`, `oikea puoli`, `takapuoli`, `alapuoli` tai `vasen puoli`.

### `kun hubi on kallistettu …` (Edistynyt) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Suoritetaan, kun hubia kallistetaan `ylös`, `alas`, `vasemmalle`, `oikealle` tai mihin suuntaan tahansa (`mikä tahansa`, oletus) noin 12° tai enemmän.

### `kun … painettu / painettu lujaa / vapautettu` (Aloittelija) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Suoritetaan, kun valitun portin voima-anturia painetaan, painetaan lujaa (yli 5 newtonia) tai se vapautetaan.

### `kun hubi vastaanottaa signaalin …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Suoritetaan, kun tämä hubi vastaanottaa toiselta hubilta tämännimisen radiosignaalin. Sen arvon voi lukea lohkolla [vastaanotettu signaali … arvo](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
