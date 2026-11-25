---
id: Events
title: Udalosti
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Udalosti {#events}

Kategória **Udalosti** obsahuje bloky, ktoré spúšťajú skripty, keď sa niečo stane, a bloky, ktoré posielajú správy medzi skriptmi. Na správu správ slúžia tlačidlá **Pridať správu** a **Odstrániť správu** hore v kategórii.

## Základné udalosti {#core-events}

### `keď program začne` (Začiatočník) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Spustí svoj skript raz, pri štarte programu.

- Typické použitie: nastaviť počiatočné hodnoty premenných, uviesť motory do východiskového stavu, zobraziť správu „pripravené“.

### `keď …` (Pokročilý) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Spustí svoj skript, keď sa podmienka v políčku zmení z nepravdy na pravdu. Kým skript beží, blok čaká; znova sa spustí, až keď sa podmienka stane nepravdivou a potom opäť pravdivou.

- Typické použitie: reakcia na stav, napríklad `keď časovač > 5 a spínač je zapnutý`.

### `keď časovač > …` (Pokročilý) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Spustí svoj skript, keď časovač programu prekročí hodnotu (v sekundách).

- Typické použitie: oneskorené akcie, časované fázy. Časovač vynulujete blokom **resetovať časovač** (Senzory).

### `keď prijmem …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Spustí svoj skript, keď sa odošle vybraná správa.

- Typické použitie: koordinácia viacerých skriptov.

### `odovzdať …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Pošle správu každému skriptu, ktorý začína blokom **keď prijmem** pre túto správu, a hneď pokračuje.

- Typické použitie: povedať iným skriptom, aby začali, bez čakania na ne.

### `odovzdať … a čakať` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Pošle správu a pozastaví tento skript, kým sa nedokončia všetky skripty, ktoré ju prijali.

- Typické použitie: postupnosti krok za krokom, v ktorých záleží na poradí.

## Udalosti hubov {#hub-events}

Tieto bloky sa zobrazia, keď ich podporuje niektorý hub v profile. Pre huby Mould King neexistujú.

### `keď … … tlačidlo …` (Začiatočník) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Spustí sa, keď sa tlačidlo na hube stlačí alebo pustí.

- Možnosti stavu: `stlačené`, `uvoľnené`, `zmenené`
- Huby: huby LEGO Powered Up, WeDo 2.0 a Robot Inventor. Zoznam tlačidiel závisí od hubu.

### `keď … je pripojené / odpojené` (Začiatočník) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Spustí sa, keď sa hub pripojí alebo odpojí.

- Typické použitie: bezpečne zastaviť model pri strate spojenia a obnoviť jeho stav, keď sa spojenie vráti.

### `keď … % batéria zmenená` (Začiatočník) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Spustí sa, keď sa zmení úroveň batérie hlásená hubom.

- Huby: tie, ktoré hlásia úroveň batérie.
- Typické použitie: upozornenie na slabú batériu, prepnutie do úsporného režimu.

### `keď … údaje akcelerometra boli zmenené` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Spustí sa, keď sa zmenia hodnoty akcelerometra hubu.

- Huby: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor.

### `keď … náklon … uhol bol zmenený` (Začiatočník) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Spustí sa, keď sa zmení uhol náklonu hubu.

- Možnosti uhla: `akýkoľvek`, `klonenie`, `náklon`, `vybočenie`
- Huby: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor. `vybočenie` je k dispozícii iba na Technic Hube a Robot Inventor.

### `keď … orientácia bola zmenená` (Začiatočník) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Spustí sa, keď sa zmení orientácia hubu, teda keď je hore iná strana hubu.

- Huby: rovnaké ako pri udalosti náklonu.

## Udalosti senzorov {#sensor-events}

Tieto udalosti čítajú senzor pripojený k portu hubu. Huby: City Hub, Technic Hub, BOOST Move Hub a hub MINDSTORMS Robot Inventor (nie SBrick, BuWizz, WeDo 2.0 ani Mould King).

### Senzor Technic: `keď je farba …` (Začiatočník) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Spustí sa, keď farebný senzor Technic uvidí vybranú farbu.

### Senzor Technic: `keď … bližšie ako / ďalej ako / presne na …` (Začiatočník) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Spustí sa, keď vzdialenosť nameraná senzorom vzdialenosti Technic splní podmienku.

- Možnosti porovnania: `bližšie ako`, `ďalej ako`, `presne na`
- Jednotky: `mm`, `cm`, `palce`, `%`

### Senzor BOOST: `keď … bližšie ako / ďalej ako / presne na …` (Začiatočník) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Spustí sa, keď vzdialenosť nameraná senzorom farby a vzdialenosti BOOST splní podmienku.

- Možnosti porovnania: `bližšie ako`, `ďalej ako`, `presne na`
- Jednotky: `%`, `cm`, `palce`

### Senzor BOOST: `keď je farba …` (Začiatočník) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Spustí sa, keď senzor farby a vzdialenosti BOOST uvidí vybranú farbu.

## Udalosti Robot Inventor {#robot-inventor-events}

Tieto udalosti pochádzajú z aplikácie Robot Inventor a fungujú iba s [hubmi MINDSTORMS Robot Inventor a SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Nesú ikonu hubu. Zodpovedajúce hodnoty nájdete na stránke [Senzory](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `keď je hub …` (Začiatočník) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Spustí sa raz zakaždým, keď je hub `poklepaný`, `dvakrát poklepaný`, `zatrasený` (predvolené) alebo keď `padá`.

### `keď … je hore` (Začiatočník) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Spustí sa, keď sa vybraná strana hubu otočí nahor: `predná strana` (svetelná matica, predvolené), `horná strana`, `pravá strana`, `zadná strana`, `spodná strana` alebo `ľavá strana`.

### `keď je hub naklonený …` (Pokročilý) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Spustí sa, keď sa hub nakloní nahor (v aplikácii `hore`), nadol (`dole`), `doľava`, `doprava` alebo ľubovoľným smerom (`akýkoľvek`, predvolené), a to približne o 12° alebo viac.

### `keď … stlačené / silno stlačený / uvoľnené` (Začiatočník) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Spustí sa, keď je senzor sily na vybranom porte stlačený, silno stlačený (viac ako 5 newtonov) alebo uvoľnený.

### `keď hub prijme signál …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Spustí sa, keď tento hub prijme od iného hubu rádiový signál s týmto názvom. Jeho hodnotu prečíta blok [prijatý signál … hodnota](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
