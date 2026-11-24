---
id: Motors
title: Moottorit
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moottorit {#motors}

Moottorilohkot käynnistävät, pysäyttävät ja asemoivat hubin portteihin kytkettyjä moottoreita ja säätävät niiden liikettä. Luokka näkyy, kun jossakin profiilin hubissa on moottoriportteja. Jokaisessa lohkossa valitaan hubi ja yksi tai useampi portti.

Jotkin lohkot tarvitsevat moottorin, jossa on sisäänrakennettu kiertoanturi (kulma-anturi), kuten Technic-kulmamoottorit, sekä hubin, joka osaa ohjata sitä. Nämä lohkot on merkitty ”kulma-anturilliset moottorit”. Ne eivät ole käytettävissä SBrick-, SBrick Plus-, BuWizz 2-, WeDo 2.0- eikä Mould King -hubeissa. Technic Move Hubilla on omat lohkonsa tämän sivun lopussa.

## Moottorien käyttäminen {#running-motors}

### `aseta nopeus …` (Edistynyt) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Asettaa nopeuden (−100…100 %), jota **käynnistä moottori** ja **aja … ajaksi** käyttävät näissä porteissa. Tämä lohko ei itse käynnistä moottoria.

### `käynnistä moottori …` (Aloittelija) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Käynnistää moottorin valittuun suuntaan **aseta nopeus** -lohkolla asetetulla nopeudella.

- Suunta: myötäpäivään tai vastapäivään

### `käynnistä moottori … % nopeus` (Aloittelija) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Käynnistää moottorin annetulla nopeudella −100…100 %. Negatiivinen nopeus pyörittää sitä toiseen suuntaan.

- Tyypillinen käyttö: ajaminen ohjainsauvalla tai liukusäätimellä: aseta ohjaimen arvo nopeuden paikkaan.

### `pysäytä moottori` (Aloittelija) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Pysäyttää moottorin.

### `aja … ajaksi …` (Edistynyt) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Pyörittää moottoria valittuun suuntaan tietyn määrän kierroksia, asteita tai sekunteja.

- Suunta: myötäpäivään tai vastapäivään
- Yksiköt: `kierrokset`, `astetta`, `sekunnit`
- Vain kulma-anturilliset moottorit.

### `aja ajan … … % nopeus` (Edistynyt) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Pyörittää moottoria tietyn määrän kierroksia, asteita tai sekunteja annetulla nopeudella.

- Yksiköt: `kierrokset`, `astetta`, `sekunnit`
- Vain kulma-anturilliset moottorit.

## Asento {#position}

### `mene … asemaan …` (Edistynyt) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Kääntää moottorin absoluuttiseen asentoon (moottorin oman nollamerkin suhteen).

- Reitti: `lyhin reitti`, `myötäpäivään`, `vastapäivään`
- Vain kulma-anturilliset moottorit.

### `mene suhteelliseen asentoon … … % nopeus` (Aloittelija) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Kääntää moottorin asentoon, joka lasketaan asteina **aseta suhteellinen sijainti** -lohkolla asetetusta kohdasta.

- Tyypillinen käyttö: servo-ohjaus, jossa ohjainsauvan arvo antaa kulman.
- Vain kulma-anturilliset moottorit; BuWizz 3:lla käytä alla olevaa lohkoa.

### `mene suhteelliseen asentoon …` (BuWizz 3) (Aloittelija) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Yllä olevan lohkon BuWizz 3 -versio ilman nopeussyötettä.

- Hubit: BuWizz 3 kulma-anturillisilla moottoreilla.

### `aseta suhteellinen sijainti …` (Aloittelija) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Määrittää moottorin nykyisen asennon annetuksi arvoksi. Suhteelliset asennot lasketaan siitä.

- Vain kulma-anturilliset moottorit.

### `kalibroi hammasratas … keskusta … astetta …` (Aloittelija) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Etsii ohjaustangon keskikohdan ja liikeradan.

- Moottori kääntää tangon molempiin päihin, mittaa, kuinka pitkälle se pääsee, ja tallentaa tuloksen kahteen paikkoihin asettamaasi muuttujaan: keskiasentoon ja liikealueeseen asteina. Tanko pysähtyy keskelle, mutta sen suhteellinen asento siinä on keskikohdan arvo eikä 0, joten lisää heti tämän lohkon perään **aseta suhteellinen sijainti** 0; ohjaa sitten kaavalla `alue × ohjainsauva / 100`.
- Ohjauksessa täytyy olla kiinteät mekaaniset rajoittimet molemmissa päissä (tangon tai välityksen pää).
- Vain kulma-anturilliset moottorit.

## Moottorin asetukset {#motor-settings}

### `aseta moottori … pysähdyksissä` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Valitsee, mitä moottori tekee pysähtyessään.

- `jarru`: pysähtyy nopeasti.
- `pidä asento`: pitää aktiivisesti asentonsa (hyödyllinen ohjauksessa).
- `vapaa rullaus`: pyörii vapaasti pysähdyksiin.
- Vain kulma-anturilliset moottorit.

### `ota käyttöön jumiutumisen tunnistus …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Kytkee jumiutumisen tunnistuksen päälle tai pois. Kun se on päällä, jumiin juuttunut moottori luovuttaa eikä jatka työntämistä, joten moottoria odottava lohko voi päättyä.

- Hubit: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (lohkossa on hubikuvake).

### `aseta kiihtyvyys …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Valitsee, kuinka nopeasti moottori kiihtyy.

- Vaihtoehdot: `oletus`, `nopea`, `tasapainoinen`, `pehmeä`, `hidas`, `erittäin hidas`
- Vain kulma-anturilliset moottorit.

### `aseta hidastuvuus …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Valitsee, kuinka nopeasti moottori hidastuu.

- Vaihtoehdot: `oletus`, `nopea`, `tasapainoinen`, `pehmeä`, `hidas`, `erittäin hidas`
- Vain kulma-anturilliset moottorit.

## Moottorin arvot {#motor-values}

### `sijainti` (Aloittelija) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Palauttaa moottorin absoluuttisen asennon.

- Vain kulma-anturilliset moottorit.

### `suhteellinen sijainti` (Aloittelija) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Palauttaa moottorin suhteellisen asennon asteina.

- Vain kulma-anturilliset moottorit.

### `nopeus` (Aloittelija) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Palauttaa moottorin nykyisen nopeuden.

### `teho` (Edistynyt) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Palauttaa moottorin nykyisen tehon.

- Hubit: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (lohkossa on hubikuvake).

## Robot Inventor {#robot-inventor-motors}

Nämä lohkot tulevat Robot Inventor -sovelluksesta ja toimivat vain [MINDSTORMS Robot Inventor- ja SPIKE Prime -hubien](/docs/Application/Hubs/RobotInventorHub) kanssa. Niissä on hubikuvake. Kaksipyöräisen robotin ajamiseen katso [Liike](/docs/Application/BlockBuilder/Blocks/Movement)-lohkot.

### `käynnistä moottori … % teho` (Edistynyt) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Käynnistää valittujen porttien moottorit annetulla teholla väliltä −100–100 % (oletus 75 %). Toisin kuin **käynnistä moottori … % nopeus**, moottori ei pidä säädettyä nopeutta: kuormitettuna se hidastuu kuin moottori ilman kulma-anturia.

### `keskeytyikö moottori?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true`, jos tämän portin moottorin viimeisin komento ei päättynyt, koska toinen saman portin moottorilohko keskeytti sen.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub käyttää sisäänrakennettuja moottoreitaan näillä lohkoilla yllä olevien porttilohkojen sijaan.

### `käynnistä moottorit … % nopeus` (Aloittelija) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Käynnistää ajomoottorit annetulla nopeudella.

### `tehopulssi` (Aloittelija) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Lähettää ajomoottoreille tehopulssin.

- Tyypillinen käyttö: lyhyt lisäpotku ennen seuraavia lohkoja.

### `pysäytä moottorit` (Aloittelija) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Pysäyttää ajomoottorit.

### `aseta moottorien jarru …` (Aloittelija) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Kytkee ajomoottorien jarrun päälle tai pois.

- Vaihtoehdot: `pois`, `käytössä`

### `aseta ohjausrata …` (Aloittelija) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Kääntää ohjauksen annettuun asentoon.

### `kalibroi ohjausrata` (Aloittelija) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibroi ohjauksen hubin omalla algoritmilla, joka löytää ohjausalueen automaattisesti.

- Ohjauksessa täytyy olla kiinteät mekaaniset rajoittimet (esimerkiksi ohjaustangon päät).
