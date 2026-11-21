---
id: Sensors
title: Senzory
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Senzory {#sensors}

Bloky senzorov čítajú stav vášho telefónu alebo tabletu, časovač programu, huby a senzory k nim pripojené. Ich hodnoty používajte v podmienkach, udalostiach a výpočtoch.

Na tejto stránke:

- [Stav hubu](#hub-state): batéria, napätie, teplota, prúd a režim výkonu
- [Tlačidlá, náklon a orientácia hubu](#hub-tilt-and-orientation)
- [Senzory na portoch](#sensors-on-ports): ľubovoľné zariadenie, farebný senzor Technic, senzor vzdialenosti Technic, senzor farby a vzdialenosti BOOST, senzory WeDo 2.0
- [Toto zariadenie](#this-device): telefón, tablet alebo počítač, na ktorom beží MOCPilot
- [Časovač](#timer)

## Stav hubu {#hub-state}

Tieto bloky neexistujú pre huby Mould King, ktoré nehlásia žiadne údaje.

### `… % batérie` (Začiatočník) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Vráti úroveň batérie hubu v percentách.

### `… napätie batérie (V)` (Pokročilý) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Vráti napätie batérie hubu vo voltoch.

- Huby: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Vráti `NaN`, keď hub nie je pripojený.

### `… teplota (C°)` (Pokročilý) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Vráti teplotu elektroniky hubu v stupňoch Celzia.

- Huby: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `získať … výstupné napätie (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Vráti napätie, ktoré hub práve dodáva do svojich portov, vo voltoch.

- Huby: BuWizz 2.

### `… prúd (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Vráti prúd odoberaný na vybranom porte v ampéroch.

- Huby: BuWizz 2, BuWizz 3.

### `nastaviť režim napájania …` (Technic Move Hub) (Začiatočník) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Nastaví režim výkonu Technic Move Hubu.

- Režimy: `normálny`, `boost`
- Huby: Technic Move Hub.

## Tlačidlá, náklon a orientácia hubu {#hub-tilt-and-orientation}

Blok tlačidla uvádza huby, s ktorými funguje. Bloky náklonu a orientácie fungujú na BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub a Robot Inventor.

### `je … … tlačidlo …` (Začiatočník) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Vráti `true`, keď je vybrané tlačidlo hubu vo vybranom stave.

- Stavy: `stlačené`, `uvoľnené`
- Huby: huby LEGO Powered Up, WeDo 2.0 a Robot Inventor. Zoznam tlačidiel závisí od hubu (zvyčajne `stred`).

### `… … uhol` (Začiatočník) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Vráti uhol náklonu hubu.

- Uhly: `klonenie`, `náklon`, `vybočenie`
- `vybočenie` je k dispozícii iba na Technic Hube a Robot Inventor.

### `… … akcelerometer (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Vráti surový údaj akcelerometra hubu v jednej osi.

- Osi: `x`, `y`, `z`

### `… … zrýchlenie (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Vráti zrýchlenie hubu v jednej osi.

- Osi: `x`, `y`, `z`

### `získať … orientácia …` (Začiatočník) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Vráti, ktorá strana hubu je otočená nahor.

- Výstup: `text` alebo `index`
- Hodnoty: `Vpredu`, `Hore`, `Vpravo`, `Zadná strana`, `Dole`, `Vľavo`

### `… orientácia …` (Začiatočník) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Vráti `true`, keď je vybraná strana hubu otočená nahor.

- Možnosti: `Vpredu`, `Hore`, `Vpravo`, `Zadná strana`, `Dole`, `Vľavo`

### `nastaviť … orientácia náklonu na …` (Pokročilý) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Povie hubu, ako je v modeli namontovaný, aby sa náklon a orientácia merali od tejto polohy.

- Možnosti: `Vpredu`, `Hore`, `Vpravo`, `Zadná strana`, `Dole`, `Vľavo`

## Senzory na portoch {#sensors-on-ports}

Nižšie uvedené bloky senzorov Technic a BOOST fungujú na City Hube, Technic Hube, BOOST Move Hube a hube MINDSTORMS Robot Inventor (nie SBrick, BuWizz, WeDo 2.0 ani Mould King).

### Ľubovoľné zariadenie na porte {#any-port-device}

#### `… typ zariadenia` (Začiatočník) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Vráti typ zariadenia pripojeného k vybranému portu.

- Huby: všetky huby s portami okrem SBrick, SBrick Plus a BuWizz 2.
- Typické použitie: overiť, čo je pripojené, pred spustením blokov pre konkrétne zariadenie.

### Farebný senzor Technic {#technic-color-sensor}

#### Senzor Technic: `nastaviť režim na …` (Pokročilý) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Prepne farebný senzor Technic do vybraného režimu.

- Režimy: `predvolený`, `okolie`
- Zmena režimu môže váš program ovplyvniť nečakaným spôsobom: v režime `okolie` senzor nedokáže čítať farby ani odrazené svetlo.

#### Senzor Technic: `farba …` (Začiatočník) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Vráti farbu, ktorú vidí farebný senzor Technic.

- Výstup: `hodnota` (číslo) alebo `reťazec` (názov farby)

#### Senzor Technic: `je farba …` (Začiatočník) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Vráti `true`, keď farebný senzor Technic vidí vybranú farbu.

#### Senzor Technic: `odrazené svetlo (%)` (Začiatočník) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Vráti, koľko svetla povrch odráža späť do farebného senzora Technic, v percentách.

#### Senzor Technic: `odrazené svetlo …` (Začiatočník) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Vráti `true`, keď odrazené svetlo zodpovedá zvolenému porovnaniu s hodnotou.

- Porovnanie: `<`, `=`, `>`

#### Senzor Technic: `okolité svetlo (%)` (Začiatočník) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Vráti jas okolitého svetla v percentách.

#### Senzor Technic: `okolité svetlo …` (Začiatočník) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Vráti `true`, keď okolité svetlo zodpovedá zvolenému porovnaniu s hodnotou.

- Porovnanie: `<`, `=`, `>`

#### Senzor Technic: `surová hodnota …` (Začiatočník) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Vráti surovú hodnotu jedného farebného kanála farebného senzora Technic.

- Kanály: `červená`, `zelená`, `modrá`

### Senzor vzdialenosti Technic {#technic-distance-sensor}

#### Senzor Technic: `vzdialenosť …` (Začiatočník) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Vráti vzdialenosť nameranú senzorom vzdialenosti Technic.

- Jednotky: `mm`, `cm`, `palce`, `%`

#### Senzor Technic: `je bližšie ako / ďalej ako / presne na …` (Začiatočník) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Vráti `true`, keď vzdialenosť nameraná senzorom vzdialenosti Technic splní podmienku.

- Porovnanie: `bližšie ako`, `ďalej ako`, `presne na`
- Jednotky: `mm`, `cm`, `palce`, `%`

### Senzor farby a vzdialenosti BOOST {#boost-color-and-distance-sensor}

#### Senzor BOOST: `farba …` (Začiatočník) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Vráti farbu, ktorú vidí senzor farby a vzdialenosti BOOST.

- Výstup: `hodnota` (číslo) alebo `reťazec` (názov farby)

#### Senzor BOOST: `je farba …` (Začiatočník) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Vráti `true`, keď senzor BOOST vidí vybranú farbu.

#### Senzor BOOST: `vzdialenosť …` (Začiatočník) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Vráti vzdialenosť nameranú senzorom farby a vzdialenosti BOOST.

- Jednotky: `%`, `cm`, `palce`

#### Senzor BOOST: `je bližšie ako / ďalej ako / presne na …` (Začiatočník) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Vráti `true`, keď vzdialenosť nameraná senzorom BOOST splní podmienku.

- Porovnanie: `bližšie ako`, `ďalej ako`, `presne na`
- Jednotky: `%`, `cm`, `palce`

#### Senzor BOOST: `odrazené svetlo (%)` (Začiatočník) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Vráti, koľko svetla povrch odráža späť do senzora BOOST, v percentách.

#### Senzor BOOST: `odrazené svetlo …` (Začiatočník) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Vráti `true`, keď odrazené svetlo zodpovedá zvolenému porovnaniu s hodnotou.

- Porovnanie: `<`, `=`, `>`

### Senzory WeDo 2.0 {#wedo-2-sensors}

Senzor pohybu a senzor náklonu WeDo 2.0 na hube WeDo 2.0.

#### Senzor WeDo 2.0: `vzdialenosť …` (Začiatočník) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Vráti vzdialenosť nameranú senzorom pohybu WeDo 2.0.

- Jednotky: `%`, `cm`, `palce`
- Huby: WeDo 2.0.

#### Senzor WeDo 2.0: `je bližšie ako / ďalej ako / presne na …` (Začiatočník) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Vráti `true`, keď vzdialenosť nameraná senzorom pohybu WeDo 2.0 splní podmienku.

- Porovnanie: `bližšie ako`, `ďalej ako`, `presne na`
- Jednotky: `%`, `cm`, `palce`
- Huby: WeDo 2.0.

#### Senzor WeDo 2.0: `uhol …` / `smer ako …` (Začiatočník) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Vráti údaje zo senzora náklonu WeDo 2.0: uhol náklonu alebo smer, ktorým je naklonený.

- Uhly: `klonenie`, `náklon`
- Výstup smeru: `text` alebo `číslo`; smery: `neutrálny`, `dopredu`, `dozadu`, `vľavo`, `vpravo`, `neznámy`
- Huby: WeDo 2.0.

## Toto zariadenie {#this-device}

Tieto bloky čítajú telefón, tablet alebo počítač, na ktorom beží MOCPilot.

### `zariadenie % batérie` (Začiatočník) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Vráti úroveň batérie zariadenia v percentách.

### `zariadenie … uhol` (Pokročilý) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Vráti uhol náklonu zariadenia.

- Uhly: `klonenie`, `náklon`, `vybočenie`
- Typické použitie: riadiť model nakláňaním telefónu.

### `zariadenie … akcelerometer (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Vráti surový údaj akcelerometra zariadenia v jednej osi, v m/s².

- Osi: `x`, `y`, `z`

### `zariadenie … zrýchlenie (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Vráti zrýchlenie zariadenia v jednej osi, v m/s².

- Osi: `x`, `y`, `z`

## Časovač {#timer}

### `časovač` (Pokročilý) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Vráti čas od spustenia programu alebo od posledného bloku **resetovať časovač** v sekundách.

### `resetovať časovač` (Pokročilý) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Vynuluje časovač.
