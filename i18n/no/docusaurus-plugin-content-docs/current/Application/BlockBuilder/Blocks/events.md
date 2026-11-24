---
id: Events
title: Hendelser
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hendelser {#events}

Kategorien **Hendelser** inneholder blokkene som starter skript når noe skjer, og blokkene som sender meldinger mellom skript. Bruk **Legg til melding** og **Slett melding** øverst i kategorien for å administrere meldinger.

## Grunnleggende hendelser {#core-events}

### `når programmet starter` (Nybegynner) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Kjører skriptet sitt én gang, når programmet starter.

- Typisk bruk: angi startverdier for variabler, sett motorene i starttilstand, vis en «klar»-melding.

### `når …` (Avansert) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Kjører skriptet sitt når betingelsen i feltet endres fra usann til sann. Mens skriptet kjører, venter blokken; den utløses igjen først når betingelsen har blitt usann og deretter sann på nytt.

- Typisk bruk: reager på en tilstand, for eksempel `når timeren > 5 og bryteren er på`.

### `når timeren > …` (Avansert) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Kjører skriptet sitt når programtimeren passerer verdien (i sekunder).

- Typisk bruk: forsinkede handlinger, tidsstyrte faser. Nullstill timeren med **tilbakestill timer** (Sensorer).

### `når jeg mottar …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Kjører skriptet sitt når den valgte meldingen sendes ut.

- Typisk bruk: samordne flere skript.

### `overføre …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Sender en melding til alle skript som starter med **når jeg mottar** for den meldingen, og fortsetter med en gang.

- Typisk bruk: få andre skript til å starte uten å vente på dem.

### `overføre … og vent` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Sender en melding og setter dette skriptet på pause til alle skriptene som mottok den, er ferdige.

- Typisk bruk: trinnvise sekvenser der rekkefølgen betyr noe.

## Hubhendelser {#hub-events}

Disse blokkene vises når en hub i profilen støtter dem. De finnes ikke for Mould King-hubber.

### `når … … knapp …` (Nybegynner) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Kjører når en knapp på huben trykkes inn eller slippes.

- Tilstander: `trykket`, `sleppt`, `endret`
- Hubber: LEGO Powered Up-hubber, WeDo 2.0 og Robot Inventor. Listen over knapper avhenger av huben.

### `når … tilkoblet / frakoblet` (Nybegynner) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Kjører når huben kobles til eller fra.

- Typisk bruk: stopp modellen trygt når tilkoblingen forsvinner, og gjenopprett tilstanden når den kommer tilbake.

### `når … % batteri endret` (Nybegynner) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Kjører når batterinivået som huben rapporterer, endres.

- Hubber: de som rapporterer batterinivå.
- Typisk bruk: en advarsel om lavt batteri, bytte til strømsparemodus.

### `når … akselerometerdata er endret` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Kjører når verdiene fra hubens akselerometer endres.

- Hubber: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `når … helling … vinkel endret` (Nybegynner) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Kjører når hubens helningsvinkel endres.

- Vinkelvalg: `hvilken som helst`, `stigning`, `rulling`, `yaw`
- Hubber: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `yaw` er bare tilgjengelig på Technic Hub og Robot Inventor.

### `når … orientering endret` (Nybegynner) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Kjører når hubens orientering endres, det vil si når en annen side av huben vender opp.

- Hubber: de samme som for helningshendelsen.

## Sensorhendelser {#sensor-events}

Disse hendelsene leser en sensor som er koblet til en port på huben. Hubber: City Hub, Technic Hub, BOOST Move Hub og MINDSTORMS Robot Inventor-huben (ikke SBrick, BuWizz, WeDo 2.0 eller Mould King).

### Technic-sensor: `når fargen er …` (Nybegynner) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Kjører når Technic-fargesensoren ser den valgte fargen.

### Technic-sensor: `når … nærmere enn / lengre enn / nøyaktig på …` (Nybegynner) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Kjører når avstanden som Technic-avstandssensoren måler, oppfyller betingelsen.

- Sammenligningsvalg: `nærmere enn`, `lengre enn`, `nøyaktig på`
- Enheter: `mm`, `cm`, `tommer`, `%`

### BOOST-sensor: `når … nærmere enn / lengre enn / nøyaktig på …` (Nybegynner) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Kjører når avstanden som BOOST-farge- og avstandssensoren måler, oppfyller betingelsen.

- Sammenligningsvalg: `nærmere enn`, `lengre enn`, `nøyaktig på`
- Enheter: `%`, `cm`, `tommer`

### BOOST-sensor: `når fargen er …` (Nybegynner) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Kjører når BOOST-farge- og avstandssensoren ser den valgte fargen.

## Robot Inventor-hendelser {#robot-inventor-events}

Disse hendelsene kommer fra Robot Inventor-appen og fungerer bare med [MINDSTORMS Robot Inventor- og SPIKE Prime-hubbene](/docs/Application/Hubs/RobotInventorHub). De har hubikonet. De tilsvarende verdiene finner du på siden [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `når huben er …` (Nybegynner) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Kjører én gang hver gang huben blir `banket`, `dobbeltbanket`, `ristet` (standard) eller når den `faller`.

### `når … vender opp` (Nybegynner) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Kjører når den valgte siden av huben snus opp: `forside` (lysmatrisen, standard), `overside`, `høyre side`, `bakside`, `underside` eller `venstre side`.

### `når huben er vippet …` (Avansert) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Kjører når huben vippes `opp`, `ned`, `til venstre`, `til høyre` eller i en hvilken som helst retning (`hvilken som helst`, standard), med omtrent 12° eller mer.

### `når … trykket / hardt trykket / utløst` (Nybegynner) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Kjører når kraftsensoren på den valgte porten trykkes inn, trykkes hardt (mer enn 5 newton) eller slippes. Valget `utløst` betyr her at sensoren er sluppet.

### `når huben mottar signal …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Kjører når denne huben mottar radiosignalet med dette navnet fra en annen hub. Les verdien med [mottatt signal … verdi](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
