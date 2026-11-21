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
