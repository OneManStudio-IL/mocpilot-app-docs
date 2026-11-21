---
id: Events
title: Händelser
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Händelser {#events}

Kategorin **Händelser** innehåller blocken som startar skript när något händer, samt blocken som skickar meddelanden mellan skript. Använd **Lägg till meddelande** och **Ta bort meddelande** högst upp i kategorin för att hantera meddelanden.

## Grundläggande händelser {#core-events}

### `när programmet startar` (Nybörjare) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Kör sitt skript en gång, när programmet startar.

- Typisk användning: ge variabler startvärden, sätta motorerna i startläge, visa ett ”klar”-meddelande.

### `när …` (Avancerad) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Kör sitt skript när villkoret i facket ändras från falskt till sant. Medan skriptet körs väntar blocket; det utlöses igen först när villkoret har blivit falskt och sedan sant ännu en gång.

- Typisk användning: reagera på ett tillstånd, till exempel `när timeren > 5 och brytaren är på`.

### `när timeren > …` (Avancerad) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Kör sitt skript när programmets timer överstiger värdet (i sekunder).

- Typisk användning: fördröjda åtgärder, tidsstyrda faser. Nollställ timern med **återställ timer** (Sensorer).

### `när jag tar emot …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Kör sitt skript när det valda meddelandet skickas ut.

- Typisk användning: samordna flera skript.

### `överföra …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Skickar ett meddelande till alla skript som börjar med **när jag tar emot** för det meddelandet och fortsätter direkt.

- Typisk användning: be andra skript att starta utan att vänta på dem.

### `överföra … och vänta` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Skickar ett meddelande och pausar det här skriptet tills alla skript som tog emot det är klara.

- Typisk användning: stegvisa sekvenser där ordningen spelar roll.

## Hubbhändelser {#hub-events}

De här blocken visas när en hubb i profilen stöder dem. De finns inte för Mould King-hubbar.

### `när … … knapp …` (Nybörjare) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Körs när en knapp på hubben trycks in eller släpps.

- Tillstånd: `tryckt`, `släppt`, `ändrad`
- Hubbar: LEGO Powered Up-hubbar, WeDo 2.0 och Robot Inventor. Listan med knappar beror på hubben.

### `när … är ansluten / frånkopplad` (Nybörjare) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Körs när hubben ansluts eller kopplas från.

- Typisk användning: stoppa modellen säkert när anslutningen bryts och återställa dess tillstånd när den kommer tillbaka.

### `när … % batteri ändrat` (Nybörjare) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Körs när batterinivån som hubben rapporterar ändras.

- Hubbar: de som rapporterar sin batterinivå.
- Typisk användning: en varning om lågt batteri, byte till ett energisparläge.

### `när … accelerometerdata har ändrats` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Körs när hubbens accelerometervärden ändras.

- Hubbar: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `när … lutning … vinkel har ändrats` (Nybörjare) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Körs när hubbens lutningsvinkel ändras.

- Vinkelalternativ: `vilken som helst`, `lutning`, `rullning`, `yaw`
- Hubbar: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `yaw` finns bara på Technic Hub och Robot Inventor.

### `när … orientering har ändrats` (Nybörjare) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Körs när hubbens orientering ändras, det vill säga när en annan sida av hubben vänds uppåt.

- Hubbar: samma som för lutningshändelsen.

## Sensorhändelser {#sensor-events}

De här händelserna läser en sensor som är ansluten till en hubbport. Hubbar: City Hub, Technic Hub, BOOST Move Hub och MINDSTORMS Robot Inventor-hubben (inte SBrick, BuWizz, WeDo 2.0 eller Mould King).

### Technic-sensor: `när färgen är …` (Nybörjare) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Körs när Technic-färgsensorn ser den valda färgen.

### Technic-sensor: `när … närmare än / längre än / precis på …` (Nybörjare) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Körs när avståndet som Technic-avståndssensorn mäter uppfyller villkoret.

- Jämförelser: `närmare än`, `längre än`, `precis på`
- Enheter: `mm`, `cm`, `tum`, `%`

### BOOST-sensor: `när … närmare än / längre än / precis på …` (Nybörjare) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Körs när avståndet som BOOST färg- och avståndssensor mäter uppfyller villkoret.

- Jämförelser: `närmare än`, `längre än`, `precis på`
- Enheter: `%`, `cm`, `tum`

### BOOST-sensor: `när färgen är …` (Nybörjare) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Körs när BOOST färg- och avståndssensor ser den valda färgen.
