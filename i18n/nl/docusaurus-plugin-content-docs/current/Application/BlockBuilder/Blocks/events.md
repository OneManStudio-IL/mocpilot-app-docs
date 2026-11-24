---
id: Events
title: Gebeurtenissen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gebeurtenissen {#events}

De categorie **Gebeurtenissen** bevat de blokken die scripts starten als er iets gebeurt, plus de blokken die berichten tussen scripts versturen. Met **Bericht toevoegen** en **Bericht verwijderen** bovenaan de categorie beheer je berichten.

## Basisgebeurtenissen {#core-events}

### `wanneer het programma start` (Beginner) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Voert het script één keer uit, als het programma start.

- Gebruikelijke toepassing: beginwaarden van variabelen instellen, motoren in hun begintoestand zetten, een melding “klaar” tonen.

### `wanneer …` (Gevorderd) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Voert het script uit als de voorwaarde in het vak van onwaar naar waar gaat. Terwijl het script draait, wacht het blok; het reageert pas weer nadat de voorwaarde eerst onwaar en daarna opnieuw waar is geworden.

- Gebruikelijke toepassing: reageren op een toestand, bijvoorbeeld `wanneer timer > 5 en schakelaar is aan`.

### `wanneer de timer > …` (Gevorderd) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Voert het script uit als de programmatimer boven de waarde (in seconden) komt.

- Gebruikelijke toepassing: vertraagde acties, getimede fasen. Zet de timer terug met **reset timer** (Sensoren).

### `wanneer ik ontvang …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Voert het script uit als het gekozen bericht wordt doorgegeven.

- Gebruikelijke toepassing: meerdere scripts op elkaar afstemmen.

### `doorgeven …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Stuurt een bericht naar elk script dat begint met **wanneer ik ontvang** voor dat bericht, en gaat meteen verder.

- Gebruikelijke toepassing: andere scripts laten starten zonder erop te wachten.

### `doorgeven … en wachten` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Stuurt een bericht en pauzeert dit script tot alle scripts die het ontvingen klaar zijn.

- Gebruikelijke toepassing: stapsgewijze reeksen waarbij de volgorde telt.

## Hubgebeurtenissen {#hub-events}

Deze blokken verschijnen als een hub in het profiel ze ondersteunt. Voor Mould King-hubs bestaan ze niet.

### `wanneer … … knop …` (Beginner) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Wordt uitgevoerd als een knop op de hub wordt ingedrukt of losgelaten.

- Toestanden: `ingedrukt`, `losgelaten`, `gewijzigd`
- Hubs: LEGO Powered Up-hubs, WeDo 2.0 en Robot Inventor. Welke knoppen er zijn, hangt af van de hub.

### `wanneer … verbonden / verbinding verbroken` (Beginner) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Wordt uitgevoerd als de hub verbinding maakt of de verbinding verliest.

- Gebruikelijke toepassing: het model veilig stoppen als de verbinding wegvalt, en de toestand herstellen als die terugkomt.

### `wanneer … % batterij gewijzigd` (Beginner) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Wordt uitgevoerd als het batterijniveau dat de hub meldt verandert.

- Hubs: hubs die hun batterijniveau melden.
- Gebruikelijke toepassing: een waarschuwing bij een bijna lege batterij, overschakelen naar een energiebesparende modus.

### `wanneer … versnellingsmetergegevens zijn gewijzigd` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Wordt uitgevoerd als de waarden van de versnellingsmeter van de hub veranderen.

- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `wanneer … kanteling … hoek gewijzigd` (Beginner) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Wordt uitgevoerd als de kantelhoek van de hub verandert.

- Hoekopties: `elke`, `helling`, `rol`, `gieren`
- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `gieren` is alleen beschikbaar op de Technic Hub en Robot Inventor.

### `wanneer … oriëntatie gewijzigd` (Beginner) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Wordt uitgevoerd als de oriëntatie van de hub verandert, dus als er een andere kant van de hub naar boven wijst.

- Hubs: dezelfde als bij de kantelgebeurtenis.

## Sensorgebeurtenissen {#sensor-events}

Deze gebeurtenissen lezen een sensor uit die op een hubpoort is aangesloten. Hubs: City Hub, Technic Hub, BOOST Move Hub en de MINDSTORMS Robot Inventor-hub (niet SBrick, BuWizz, WeDo 2.0 of Mould King).

### Technic-sensor: `wanneer de kleur is …` (Beginner) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Wordt uitgevoerd als de Technic-kleursensor de gekozen kleur ziet.

### Technic-sensor: `wanneer … dichterbij dan / verder dan / precies op …` (Beginner) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Wordt uitgevoerd als de afstand die de Technic-afstandssensor meet aan de voorwaarde voldoet.

- Vergelijkingsopties: `dichterbij dan`, `verder dan`, `precies op`
- Eenheden: `mm`, `cm`, `duim`, `%`

### BOOST-sensor: `wanneer … dichterbij dan / verder dan / precies op …` (Beginner) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Wordt uitgevoerd als de afstand die de BOOST-kleur- en afstandssensor meet aan de voorwaarde voldoet.

- Vergelijkingsopties: `dichterbij dan`, `verder dan`, `precies op`
- Eenheden: `%`, `cm`, `duim`

### BOOST-sensor: `wanneer de kleur is …` (Beginner) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Wordt uitgevoerd als de BOOST-kleur- en afstandssensor de gekozen kleur ziet.

## Robot Inventor-gebeurtenissen {#robot-inventor-events}

Deze gebeurtenissen komen uit de Robot Inventor-app en werken alleen met de [hubs van MINDSTORMS Robot Inventor en SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ze dragen het hubpictogram. De bijbehorende waarden staan op de pagina [Sensoren](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `wanneer hub …` (Beginner) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Wordt elke keer één keer uitgevoerd als de hub `getikt`, `dubbel getikt` of `geschud` (standaard) wordt of `vallend` is.

### `wanneer … boven is` (Beginner) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Wordt uitgevoerd als de gekozen kant van de hub naar boven wijst: `voorkant` (de lichtmatrix, standaard), `bovenkant`, `rechterkant`, `achterkant`, `onderkant` of `linkerkant`.

### `wanneer hub gekanteld …` (Gevorderd) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Wordt uitgevoerd als de hub ongeveer 12° of meer `omhoog`, `omlaag`, `naar links`, `naar rechts` of in een willekeurige richting (`elke`, standaard) wordt gekanteld.

### `wanneer … ingedrukt / hard ingedrukt / losgelaten` (Beginner) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Wordt uitgevoerd als de krachtsensor op de gekozen poort wordt ingedrukt, hard wordt ingedrukt (met meer dan 5 newton) of wordt losgelaten.

### `wanneer hub signaal ontvangt …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Wordt uitgevoerd als deze hub van een andere hub het radiosignaal met deze naam ontvangt. Lees de waarde ervan met [ontvangen signaal … waarde](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
