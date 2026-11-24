---
id: DashboardControllers
title: Näytön ohjaimet
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Näytön ohjaimet {#dashboard-controllers}

Nämä lohkot lukevat kojelaudan ohjaimia, reagoivat, kun käytät niitä, ja muuttavat niiden ulkoasua. Ne ovat **Näytön ohjaimet** -luokassa, joka näkyy heti, kun kojelaudalla on ohjain. Jokainen ohjaintyyppi lisää omat lohkonsa; lohkossa ohjain valitaan sen nimellä, esimerkiksi *BTN1* tai *GEAR1*.

Alla käytetyt alueet: useimmat analogiset arvot ovat välillä 0–100 tai −100–100, kun nolla on keskellä.

Tällä sivulla:

- [Lohkot kaikille ohjaimille](#blocks-for-all-controls): väri, interaktiivisuus ja äänet
- [Painikkeet ja kytkimet](#buttons-and-switches): painike, kytkin, askelkytkin
- [Ohjainsauvat ja D-padit](#joysticks-and-d-pads)
- [Liukusäätimet ja nupit](#sliders-and-knobs): liukusäädin, kiertonuppi
- [Näytöt](#monitor-blocks)
- [Ohjauspyörä ja polkimet](#steering-wheel-and-pedals)
- [Muut erikoisohjaimet](#other-special-controls): vaihteisto, käsijarru, suuntavilkut, jakovaihteisto, ajokytkin

## Lohkot kaikille ohjaimille {#blocks-for-all-controls}

### `Ohjaimen värin asetus` (Edistynyt) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*aseta [ohjain] väri asetetaan [väri]*: muuttaa ohjaimen korostusvärin.

- Tyyppi: komentolohko
- Toimii ohjaimilla, joilla on korostusväri (ei ohjauspyörällä eikä polkimilla)
- Tyypillinen käyttö: tilan näyttäminen, esimerkiksi painike, joka muuttuu punaiseksi, kun akku on vähissä

### `Ohjaimen interaktiivisuuden asetus` (Edistynyt) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[ota käyttöön / poista käytöstä] [ohjain] interaktiivisuus*: käytöstä poistettu ohjain ei reagoi kosketuksiin.

- Tyyppi: komentolohko
- Tyypillinen käyttö: ohjaimen lukitseminen joksikin aikaa, esimerkiksi kaasun lukitseminen, kunnes käynnistystarkistus on tehty

### `Ohjaimen ääni` (Aloittelija) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*ääni [ääni] ohjaimesta [ohjain]*: yksi ohjaimen äänistä **Äänet**-luokan äänensoittolohkoja varten.

- Tyyppi: arvolohko
- Näkyy, kun kojelaudalla on ohjain, jossa on ääniä: [ohjauspyörä](/docs/Application/Dashboard/SpecialControls#steering-wheel) (auton, kuorma-auton ja urheiluauton äänitorvet) tai [polkimet](/docs/Application/Dashboard/SpecialControls#pedals) (auton, urheiluauton ja kuorma-auton jarrut, peruutuspiippari)
- Ääni kuuluu vain, jos ohjaimen **Äänitehosteet**-asetus ja sovelluksen äänet ovat päällä

## Painikkeet ja kytkimet {#buttons-and-switches}

### Painikelohkot {#button-blocks}

#### `Painikkeen tapahtuma` (Aloittelija) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*kun nappia painetaan [ohjain] on [painettu / vapautettu]*: suorittaa skriptin, kun painiketta painetaan tai se vapautetaan.

- Tyyppi: tapahtumalohko

#### `Painikkeen arvo (totuusarvo)` (Aloittelija) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*nappi [ohjain] [painettu / vapautettu]*: onko painike juuri nyt painettuna vai vapautettuna.

- Tyyppi: arvolohko, `true` / `false`

### Kytkinlohkot {#switch-blocks}

#### `Kytkimen tapahtuma` (Aloittelija) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*kun kytkin [ohjain] on käännetty [käytössä / pois]*: suorittaa skriptin, kun kytkin käännetään päälle tai pois.

- Tyyppi: tapahtumalohko

#### `Kytkimen arvo (totuusarvo)` (Aloittelija) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*kytkin [ohjain] [käytössä / pois]*: onko kytkin päällä vai pois.

- Tyyppi: arvolohko, `true` / `false`

### Askelkytkinlohkot {#stepper-blocks}

Nämä lohkot toimivat askelkytkimen ja pystysuuntaisen askelkytkimen kanssa.

#### `Askelkytkimen tapahtuma` (Aloittelija) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*kun askelkytkin [ohjain] [mikä tahansa / nollaa / miinus / plus] on [painettu / vapautettu]*: suorittaa skriptin, kun askelkytkimen painiketta painetaan tai se vapautetaan (**mikä tahansa** tarkoittaa mitä tahansa niistä).

- Tyyppi: tapahtumalohko

#### `Askelkytkimen arvo (liukuluku)` (Aloittelija) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*askelkytkin [ohjain]*: nykyisen askeleen numero.

- Tyyppi: arvolohko

## Ohjainsauvat ja D-padit {#joysticks-and-d-pads}

### Ohjainsauvalohkot {#joystick-blocks}

#### `Ohjainsauvan tapahtuma` (Aloittelija) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*kun ohjain [ohjain] on [ylös / alas / vasen / oikea / liikkuu / vapautettu]*: suorittaa skriptin, kun sauvaa työnnetään johonkin suuntaan, liikutetaan ylipäätään tai se vapautetaan.

- Tyyppi: tapahtumalohko

#### `Ohjainsauvan arvo (liukuluku)` (Aloittelija) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*ohjainsauva [ohjain] [X-akseli / Y-akseli]*: sauvan asento yhdellä akselilla, −100…100; keskikohta on 0.

- Tyyppi: arvolohko

#### `Ohjainsauvan arvo (totuusarvo)` (Aloittelija) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*on joystick [ohjain] [painettu / vapautettu]*: onko sormi ohjainsauvalla.

- Tyyppi: arvolohko, `true` / `false`

### D-pad-lohkot {#d-pad-blocks}

#### `D-padin tapahtuma` (Aloittelija) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*kun suuntanäppäin [ohjain] [ylös / alas / vasen / oikea] nappi [painettu / vapautettu]*: suorittaa skriptin, kun D-padin painiketta painetaan tai se vapautetaan.

- Tyyppi: tapahtumalohko

#### `D-padin arvo (totuusarvo)` (Aloittelija) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*suuntapadi [ohjain] [ylös / alas / vasen / oikea] painike [painettu / vapautettu]*: onko D-padin painike juuri nyt painettuna vai vapautettuna.

- Tyyppi: arvolohko, `true` / `false`

## Liukusäätimet ja nupit {#sliders-and-knobs}

### Liukusäädinlohkot {#slider-blocks}

Nämä lohkot toimivat liukusäätimen ja pystysuuntaisen liukusäätimen kanssa.

#### `Liukusäätimen tapahtuma` (Aloittelija) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*kun liukusäädin [ohjain] on [matala / korkea / liikkuu / vapautettu]*: suorittaa skriptin, kun kahva saavuttaa ala- tai yläpään, liikkuu tai vapautetaan.

- Tyyppi: tapahtumalohko

#### `Liukusäätimen arvo (liukuluku)` (Aloittelija) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*liukusäädin [ohjain]*: kahvan asento välillä 0–100 tai −100–100, kun **Negatiiviset arvot** on käytössä.

- Tyyppi: arvolohko

### Kiertonuppilohkot {#rotary-knob-blocks}

Maksullisten teemojen [kiertonupin](/docs/Application/Dashboard/ControlTypes#rotary-knob) lohkot.

#### `Kiertonupin tapahtuma` (Aloittelija) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*kun kiertonuppi [ohjain] on [käännetty / painettu / päästetty / käännetty minimiin / käännetty maksimiin]*: suorittaa skriptin, kun nuppia käännetään, kosketetaan, se päästetään irti tai se saavuttaa jommankumman päänsä.

- Tyyppi: tapahtumalohko

#### `Kiertonupin arvo (liukuluku)` (Aloittelija) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*kiertonupin arvo [ohjain]*: nupin asento välillä 0–100 tai −100–100, kun **Nolla keskellä (-100..100)** on käytössä.

- Tyyppi: arvolohko

#### `Kiertonupin arvo (totuusarvo)` (Aloittelija) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*onko kiertonuppi [ohjain] [painettu / minimissä / maksimissa] ?*: onko sormi nupilla tai onko nuppi jommassakummassa päässään.

- Tyyppi: arvolohko, `true` / `false`

## Näytöt {#monitor-blocks}

[Näyttöjen](/docs/Application/Dashboard/Indicators) lohkot.

### `Näytä näytössä` (Aloittelija) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*näytä [arvo] päällä [ohjain] näyttö*: näyttää tekstiä tai arvon **Näytössä**.

- Tyyppi: komentolohko
- Tyypillinen käyttö: akun tason, moottorin kulman, hubin porttiin kytketyn laitteen tai tilan nimen näyttäminen

### `Näytön arvon asetus` (Aloittelija) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*aseta [arvo] [ohjain] näyttö*: asettaa **Akun taso**- tai **Nopeusmittari**-näytön arvon.

- Tyyppi: komentolohko

### `Kallistusnäytön arvon asetus` (Aloittelija) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*aseta [arvo] [ohjain] [nyökkäys / kallistus] näyttö*: asettaa **Kallistusnäytössä** näkyvän pituus- tai sivukallistuksen.

- Tyyppi: komentolohko

## Ohjauspyörä ja polkimet {#steering-wheel-and-pedals}

### Ohjauspyörälohkot {#steering-wheel-blocks}

[Ohjauspyörän](/docs/Application/Dashboard/SpecialControls#steering-wheel) lohkot.

#### `Ohjauspyörän tapahtuma` (Aloittelija) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*kun ohjauspyörä [ohjain] on [liikkuu / painettu / vapautettu]*: suorittaa skriptin, kun pyörä kääntyy tai kun kosketat sitä tai päästät siitä irti.

- Tyyppi: tapahtumalohko

#### `Ohjauspyörän arvo (liukuluku)` (Aloittelija) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*ohjauspyörä [ohjain]*: ohjauskulma välillä −100 (täysin vasemmalle) – 100 (täysin oikealle).

- Tyyppi: arvolohko

#### `Ohjauspyörän arvo (totuusarvo)` (Aloittelija) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*ohjauspyörä [ohjain] [painettu / vapautettu]*: onko sormi pyörällä.

- Tyyppi: arvolohko, `true` / `false`

### Poljinlohkot {#pedals-blocks}

[Polkimien](/docs/Application/Dashboard/SpecialControls#pedals) lohkot.

#### `Polkimien tapahtuma` (Aloittelija) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*kun polkimet [ohjain] [mikä tahansa / jarru / kiihtyvyys] on [liikkuu / painettu / vapautettu]*: suorittaa skriptin, kun poljin liikkuu, sitä painetaan tai se vapautetaan.

- Tyyppi: tapahtumalohko

#### `Polkimien arvo (liukuluku)` (Aloittelija) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*polkimet [ohjain] [kiihtyvyys / jarru]*: kuinka pitkälle kaasu- tai jarrupoljinta painetaan, 0–100.

- Tyyppi: arvolohko

#### `Polkimien arvo (totuusarvo)` (Aloittelija) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*poljin [ohjain] [kiihtyvyys / jarru] [painettu / vapautettu]*: onko poljin painettuna.

- Tyyppi: arvolohko, `true` / `false`

## Muut erikoisohjaimet {#other-special-controls}

Muiden [erikoisohjainten](/docs/Application/Dashboard/SpecialControls) lohkot.

### Vaihteistolohkot {#gearbox-blocks}

[Käsivalintaisen ja automaattisen vaihteiston](/docs/Application/Dashboard/SpecialControls#gear-shifter) lohkot. Vaihteiden arvot: käsivalintainen −1 = R, 0 = N, 1…6 = eteenpäin vievät vaihteet; automaatti −2 = P, −1 = R, 0 = N, 1 = D.

#### `Vaihteiston tapahtuma` (Aloittelija) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*kun vaihteisto [ohjain] [vaihtaa vaihdetta / vaihtaa ylös / vaihtaa alas / vaihtaa vapaalle / vaihtaa peruutusvaihteelle / vaihtaa pysäköintiin]*: suorittaa skriptin, kun vaihde vaihtuu. **Vaihtaa ylös** ja **vaihtaa alas** tarkoittavat siirtymistä suurempaan tai pienempään arvoon.

- Tyyppi: tapahtumalohko

#### `Vaihde` (Aloittelija) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*vaihde [ohjain]*: kytketty vaihde (katso arvot yllä).

- Tyyppi: arvolohko

#### `Vaihteiston tila (totuusarvo)` (Aloittelija) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*onko vaihteisto [ohjain] [vapaalla / peruutusvaihteella / eteenpäin vaihteella / pysäköinnillä] ?*

- Tyyppi: arvolohko, `true` / `false`
- **Eteenpäin vaihteella** on tosi millä tahansa käsivalintaisen vaihteiston eteenpäin vievällä vaihteella ja automaatin D-asennossa

#### `Vaihteiden määrä` (Edistynyt) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*vaihteet: [ohjain]*: vaihteiston **Vaihteiden määrä** -asetus.

- Tyyppi: arvolohko
- Tyypillinen käyttö: Simulaattorin *aja*-lohkon */*-paikka

### Käsijarrulohkot {#handbrake-blocks}

[Käsijarrun](/docs/Application/Dashboard/SpecialControls#handbrake) lohkot.

#### `Käsijarrun tapahtuma` (Aloittelija) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*kun käsijarru [ohjain] on [vedetty / lukittu / vapautettu / päästetty]*: suorittaa skriptin, kun vipua vedetään, se lukitaan, sen lukitus avataan tai se päästetään irti.

- Tyyppi: tapahtumalohko

#### `Käsijarrun voima` (Aloittelija) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*käsijarrun voima [ohjain]*: kuinka pitkälle vipua on vedetty, 0–100.

- Tyyppi: arvolohko

#### `Käsijarrun tila (totuusarvo)` (Aloittelija) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*onko käsijarru [ohjain] [lukittu / vapautettu / vedetty] ?* **Vedetty** on tosi, kun voima on yli 0.

- Tyyppi: arvolohko, `true` / `false`

### Suuntavilkkulohkot {#turn-signals-blocks}

[Suuntavilkkujen](/docs/Application/Dashboard/SpecialControls#turn-signals) lohkot. Ne näkevät vilkkujen pysyvän tilan ilman vilkkumista.

#### `Suuntavilkkujen tapahtuma` (Aloittelija) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*kun suuntavilkut [ohjain] [vasen vilkku / oikea vilkku / valot] [syttyy / sammuu]*

- Tyyppi: tapahtumalohko

#### `Suuntavilkkujen tila (totuusarvo)` (Aloittelija) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*suuntavilkut [ohjain] [vasen vilkku / oikea vilkku / valot] on päällä ?*

- Tyyppi: arvolohko, `true` / `false`

### Jakovaihteistolohkot {#transfer-case-blocks}

[Jakovaihteiston](/docs/Application/Dashboard/SpecialControls#transfer-case) lohkot. Tapahtuma- ja tilalohkojen toisessa luettelossa on samat vaihtoehdot:

- **2H**, **4H**, **N**, **4L**: valitsin on tässä asennossa;
- **neliveto**: valitsin on asennossa 4H tai 4L;
- **alennusvaihde**: valitsin on asennossa 4L;
- **etulukko**, **keskilukko**, **takalukko**: tasauspyörästön lukko on kytketty.

#### `Jakovaihteiston tapahtuma` (Aloittelija) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*kun jakovaihteisto [ohjain] [2H / 4H / N / 4L / neliveto / alennusvaihde / etulukko / keskilukko / takalukko] [kytkeytyy / kytkeytyy irti]*: **kytkeytyy** suoritetaan, kun valinnasta tulee tosi (valitsin saavuttaa asennon tai lukko kytketään päälle), **kytkeytyy irti**, kun se lakkaa olemasta tosi.

- Tyyppi: tapahtumalohko

#### `Jakovaihteiston tila (totuusarvo)` (Aloittelija) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*jakovaihteisto [ohjain] [2H / 4H / N / 4L / neliveto / alennusvaihde / etulukko / keskilukko / takalukko] on kytketty ?*

- Tyyppi: arvolohko, `true` / `false`

#### `Jakovaihteiston asento (liukuluku)` (Aloittelija) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*jakovaihteiston asento [ohjain]*: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Kytke se [aja](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive)-lohkon *jakovaihteisto*-paikkaan, niin simulaattori käyttää jakovaihteistoa.

- Tyyppi: arvolohko

### Ajokytkinlohkot {#train-controller-blocks}

[Ajokytkimen](/docs/Application/Dashboard/SpecialControls#train-controller) lohkot.

#### `Ajokytkimen tapahtuma` (Aloittelija) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*kun ajokytkin [ohjain] [ajoaskel muuttui / ajoaskel nousi / ajoaskel laski / ajokytkin nollassa / suunnanvaihtaja siirretty / vipu päästetty]*: **Ajokytkin nollassa** tarkoittaa, että vipu palasi ajoaskeleelle 0.

- Tyyppi: tapahtumalohko

#### `Ajokytkimen arvo (liukuluku)` (Aloittelija) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*ajokytkin [ohjain] [veto / ajoaskel / suunnanvaihtaja]*:

- **veto**: −100…100, ajoaskel prosentteina suunnan etumerkillä;
- **ajoaskel**: 0–8;
- **suunnanvaihtaja**: 1 = eteen, 0 = vapaa, −1 = taakse.
- Tyyppi: arvolohko

#### `Ajokytkimen tila (totuusarvo)` (Aloittelija) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*onko ajokytkin [ohjain] [eteenpäin / taaksepäin / vapaalla / ajoaskeleella 0] ?*

- Tyyppi: arvolohko, `true` / `false`
