---
id: Events
title: Begivenheder
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Begivenheder {#events}

Kategorien **Begivenheder** indeholder de blokke, der starter scripts, når noget sker, samt de blokke, der sender beskeder mellem scripts. Brug **Tilføj besked** og **Slet besked** øverst i kategorien til at administrere beskeder.

## Grundlæggende hændelser {#core-events}

### `når programmet starter` (Begynder) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Kører sit script én gang, når programmet starter.

- Typisk brug: sæt startværdier for variabler, sæt motorerne i deres starttilstand, vis en »klar«-besked.

### `når …` (Avanceret) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Kører sit script, når betingelsen i feltet skifter fra falsk til sand. Mens scriptet kører, venter blokken; den udløses først igen, når betingelsen er blevet falsk og derefter sand igen.

- Typisk brug: reager på en tilstand, for eksempel `når timeren > 5 og kontakten er tændt`.

### `når timeren > …` (Avanceret) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Kører sit script, når programmets timer overstiger værdien (i sekunder).

- Typisk brug: forsinkede handlinger, tidsstyrede faser. Nulstil timeren med **nulstil timer** (Sensorer).

### `når jeg modtager …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Kører sit script, når den valgte besked bliver sendt.

- Typisk brug: koordiner flere scripts.

### `overføre …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Sender en besked til alle scripts, der starter med **når jeg modtager** for den besked, og fortsætter med det samme.

- Typisk brug: få andre scripts til at starte uden at vente på dem.

### `overføre … og vent` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Sender en besked og sætter dette script på pause, indtil alle de scripts, der modtog den, er færdige.

- Typisk brug: trinvise sekvenser, hvor rækkefølgen betyder noget.

## Hubhændelser {#hub-events}

Disse blokke vises, når en hub i profilen understøtter dem. De findes ikke til Mould King-hubs.

### `når … … knap …` (Begynder) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Kører, når en knap på hubben trykkes ned eller slippes.

- Tilstande: `trykket`, `sluppet`, `ændret`
- Hubs: LEGO Powered Up-hubs, WeDo 2.0 og Robot Inventor. Listen over knapper afhænger af hubben.

### `når … er tilsluttet / afbrudt` (Begynder) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Kører, når hubben forbindes eller mister forbindelsen.

- Typisk brug: stop modellen sikkert, når forbindelsen mistes, og genskab dens tilstand, når forbindelsen kommer tilbage.

### `når … % batteri ændret` (Begynder) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Kører, når det batteriniveau, hubben rapporterer, ændrer sig.

- Hubs: dem, der rapporterer deres batteriniveau.
- Typisk brug: en advarsel om lavt batteri, skift til en strømbesparende tilstand.

### `når … accelerometerdata er ændret` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Kører, når hubbens accelerometerværdier ændrer sig.

- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `når … hældning … vinkel ændret` (Begynder) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Kører, når hubbens hældningsvinkel ændrer sig.

- Vinkler: `enhver`, `hældning`, `rulning`, `gyring`
- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `gyring` findes kun på Technic Hub og Robot Inventor.

### `når … orientering ændret` (Begynder) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Kører, når hubbens orientering ændrer sig, det vil sige, når en anden side af hubben vender opad.

- Hubs: de samme som for hældningshændelsen.

## Sensorhændelser {#sensor-events}

Disse hændelser læser en sensor, der er tilsluttet en port på hubben. Hubs: City Hub, Technic Hub, BOOST Move Hub og MINDSTORMS Robot Inventor-hubben (ikke SBrick, BuWizz, WeDo 2.0 eller Mould King).

### Technic-sensor: `når farven er …` (Begynder) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Kører, når Technic-farvesensoren ser den valgte farve.

### Technic-sensor: `når … nærmere end / længere end / præcis ved …` (Begynder) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Kører, når den afstand, Technic-afstandssensoren måler, opfylder betingelsen.

- Sammenligninger: `nærmere end`, `længere end`, `præcis ved`
- Enheder: `mm`, `cm`, `tommer`, `%`

### BOOST-sensor: `når … nærmere end / længere end / præcis ved …` (Begynder) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Kører, når den afstand, BOOST-farve- og afstandssensoren måler, opfylder betingelsen.

- Sammenligninger: `nærmere end`, `længere end`, `præcis ved`
- Enheder: `%`, `cm`, `tommer`

### BOOST-sensor: `når farven er …` (Begynder) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Kører, når BOOST-farve- og afstandssensoren ser den valgte farve.

## Robot Inventor-begivenheder {#robot-inventor-events}

Disse begivenheder kommer fra Robot Inventor-appen og virker kun med [hubbene fra MINDSTORMS Robot Inventor og SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). De har hub-ikonet. De tilhørende værdier findes på siden [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `når hub er …` (Begynder) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Kører én gang, hver gang hubben bliver `banket`, `dobbeltbanket` eller `rystet` (standard), eller når den er `i frit fald`.

### `når … vender opad` (Begynder) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Kører, når den valgte side af hubben kommer til at vende opad: `forside` (lysmatrixen, standard), `overside`, `højre side`, `bagside`, `underside` eller `venstre side`.

### `når hub er vippet …` (Avanceret) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Kører, når hubben vippes `op`, `ned`, `til venstre`, `til højre` eller i en vilkårlig retning (`enhver`, standard), med omkring 12° eller mere.

### `når … trykket / trykket hårdt / sluppet` (Begynder) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Kører, når kraftsensoren på den valgte port bliver trykket, trykket hårdt (med mere end 5 newton) eller sluppet.

### `når hub modtager signal …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Kører, når denne hub modtager radiosignalet med dette navn fra en anden hub. Læs dets værdi med [modtaget signal … værdi](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
