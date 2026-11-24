---
id: Events
title: Události
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Události {#events}

Kategorie **Události** obsahuje bloky, které spouštějí skripty, když se něco stane, a bloky, které posílají zprávy mezi skripty. Zprávy spravujete tlačítky **Přidat zprávu** a **Smazat zprávu** v horní části kategorie.

## Základní události {#core-events}

### `když program začne` (Začátečník) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Spustí svůj skript jednou, při startu programu.

- Typické použití: nastavit počáteční hodnoty proměnných, uvést motory do výchozího stavu, zobrazit zprávu „připraveno“.

### `když …` (Pokročilý) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Spustí svůj skript, když se podmínka ve slotu změní z nepravdy na pravdu. Zatímco skript běží, blok čeká; znovu se spustí, až když se podmínka stane nepravdivou a pak opět pravdivou.

- Typické použití: reakce na stav, například `když časovač > 5 a spínač je zapnutý`.

### `když časovač > …` (Pokročilý) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Spustí svůj skript, když časovač programu přesáhne zadanou hodnotu (v sekundách).

- Typické použití: odložené akce, časované fáze. Časovač vynulujete blokem **resetovat časovač** (Senzory).

### `když obdržím …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Spustí svůj skript, když je vybraná zpráva odeslána.

- Typické použití: koordinace několika skriptů.

### `předat …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Pošle zprávu každému skriptu, který pro tuto zprávu začíná blokem **když obdržím**, a hned pokračuje.

- Typické použití: dát ostatním skriptům pokyn ke spuštění, aniž byste na ně čekali.

### `předat … a čekat` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Pošle zprávu a pozastaví tento skript, dokud všechny skripty, které ji obdržely, neskončí.

- Typické použití: sekvence krok za krokem, kde záleží na pořadí.

## Události hubů {#hub-events}

Tyto bloky se objeví, když je některý hub v profilu podporuje. Pro huby Mould King neexistují.

### `když … … tlačítko …` (Začátečník) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Spustí se, když je tlačítko na hubu stisknuto nebo uvolněno.

- Volby stavu: `stisknuto`, `uvolněno`, `změněno`
- Huby: huby LEGO Powered Up, WeDo 2.0 a Robot Inventor. Seznam tlačítek závisí na hubu.

### `když … je připojeno / odpojeno` (Začátečník) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Spustí se, když se hub připojí nebo odpojí.

- Typické použití: bezpečně zastavit model, když se spojení ztratí, a obnovit jeho stav, když se vrátí.

### `když … % baterie byla změněna` (Začátečník) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Spustí se, když se změní úroveň baterie hlášená hubem.

- Huby: ty, které hlásí úroveň baterie.
- Typické použití: varování před vybitou baterií, přepnutí do úsporného režimu.

### `když … data akcelerometru byla změněna` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Spustí se, když se změní hodnoty akcelerometru hubu.

- Huby: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `když … náklon … úhel byl změněn` (Začátečník) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Spustí se, když se změní úhel náklonu hubu.

- Volby úhlu: `jakýkoli`, `náklon`, `rotace`, `kormidlování` (libovolný, klopení, klonění, stáčení)
- Huby: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `kormidlování` (stáčení) je k dispozici jen u Technic Hubu a Robot Inventoru.

### `když … orientace byla změněna` (Začátečník) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Spustí se, když se změní orientace hubu, tedy když je nahoru otočená jiná strana hubu.

- Huby: stejné jako u události náklonu.

## Události senzorů {#sensor-events}

Tyto události čtou senzor připojený k portu hubu. Huby: City Hub, Technic Hub, BOOST Move Hub a hub MINDSTORMS Robot Inventor (ne SBrick, BuWizz, WeDo 2.0 ani Mould King).

### Senzor Technic: `když je barva …` (Začátečník) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Spustí se, když senzor barev Technic uvidí vybranou barvu.

### Senzor Technic: `když … blíže než / dál než / přesně na …` (Začátečník) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Spustí se, když vzdálenost změřená senzorem vzdálenosti Technic splní podmínku.

- Volby porovnání: `blíže než`, `dál než`, `přesně na`
- Jednotky: `mm`, `cm`, `palce`, `%`

### Senzor BOOST: `když … blíže než / dál než / přesně na …` (Začátečník) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Spustí se, když vzdálenost změřená senzorem barev a vzdálenosti BOOST splní podmínku.

- Volby porovnání: `blíže než`, `dál než`, `přesně na`
- Jednotky: `%`, `cm`, `palce`

### Senzor BOOST: `když je barva …` (Začátečník) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Spustí se, když senzor barev a vzdálenosti BOOST uvidí vybranou barvu.

## Události Robot Inventor {#robot-inventor-events}

Tyto události pocházejí z aplikace Robot Inventor a fungují jen s [huby MINDSTORMS Robot Inventor a SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Nesou ikonu hubu. Odpovídající hodnoty najdete na stránce [Senzory](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `když je hub …` (Začátečník) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Spustí se jednou pokaždé, když je hub `poklepán`, `dvakrát poklepán`, `zatřesen` (výchozí) nebo když `padá`.

### `když … je nahoře` (Začátečník) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Spustí se, když se vybraná strana hubu otočí nahoru: `přední strana` (světelná matice, výchozí), `horní strana`, `pravá strana`, `zadní strana`, `spodní strana` nebo `levá strana`.

### `když je hub nakloněn …` (Pokročilý) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Spustí se, když se hub nakloní `nahoru`, `dolů`, `doleva`, `doprava` nebo libovolným směrem (`jakýkoli`, výchozí), a to zhruba o 12° nebo víc.

### `když … stisknuto / silně stisknut / uvolněno` (Začátečník) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Spustí se, když je senzor síly na vybraném portu stisknut, silně stisknut (víc než 5 newtonů) nebo uvolněn.

### `když hub přijme signál …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Spustí se, když tento hub přijme od jiného hubu rádiový signál s tímto názvem. Jeho hodnotu přečte blok [přijatý signál … hodnota](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
