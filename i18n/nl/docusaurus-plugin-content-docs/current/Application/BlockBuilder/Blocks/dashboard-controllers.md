---
id: DashboardControllers
title: Dashboardbedieningselementen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Dashboardbedieningselementen {#dashboard-controllers}

Deze blokken lezen de bedieningen op het dashboard uit, reageren als je ze gebruikt en wijzigen hoe ze eruitzien. Ze staan in de categorie **Dashboardbedieningselementen**, die verschijnt zodra het dashboard een bediening heeft. Elk type bediening voegt eigen blokken toe; in een blok kies je de bediening op naam, zoals *BTN1* of *GEAR1*.

Gebruikte bereiken: de meeste analoge waarden lopen van 0 tot 100, of van −100 tot 100 als nul in het midden ligt.

Op deze pagina:

- [Blokken voor alle bedieningen](#blocks-for-all-controls): kleur, interactiviteit en geluiden
- [Knoppen en schakelaars](#buttons-and-switches): knop, schakelaar, stappenschakelaar
- [Joysticks en richtingspads](#joysticks-and-d-pads)
- [Schuifregelaars en draaiknoppen](#sliders-and-knobs): schuifregelaar, draaiknop
- [Monitoren](#monitor-blocks)
- [Stuur en pedalen](#steering-wheel-and-pedals)
- [Andere speciale bedieningselementen](#other-special-controls): versnellingsbak, handrem, richtingaanwijzers, rijschakelaar

## Blokken voor alle bedieningen {#blocks-for-all-controls}

### `Kleur van de bediening instellen` (Gevorderd) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*stel [bediening] kleur naar [kleur]*: wijzigt de accentkleur van een bediening.

- Type: opdrachtblok
- Werkt met de bedieningen die een accentkleur hebben (niet met het stuur of de pedalen)
- Gebruikelijke toepassing: een toestand tonen, bijvoorbeeld een knop die rood wordt als de batterij bijna leeg is

### `Interactiviteit van de bediening instellen` (Gevorderd) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[inschakelen / uitschakelen] [bediening] interactiviteit*: een uitgeschakelde bediening reageert niet op aanraking.

- Type: opdrachtblok
- Gebruikelijke toepassing: een bediening tijdelijk blokkeren, bijvoorbeeld het gas tot een controle bij het starten klaar is

### `Geluid van een bediening` (Beginner) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*geluid [geluid] van [bediening]*: een van de geluiden van een bediening, voor de afspeelblokken van de categorie **Geluiden**.

- Type: waardeblok
- Verschijnt als het dashboard een bediening met geluiden heeft: het [stuur](/docs/Application/Dashboard/SpecialControls#steering-wheel) (claxons van auto, vrachtwagen en sportwagen) of de [pedalen](/docs/Application/Dashboard/SpecialControls#pedals) (remmen van auto, sportwagen en vrachtwagen, achteruitrijpiep)
- Het geluid speelt alleen als de instelling **Geluidseffecten** van de bediening en het app-geluid aan staan

## Knoppen en schakelaars {#buttons-and-switches}

### Knopblokken {#button-blocks}

#### `Knopgebeurtenis` (Beginner) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*wanneer de knop [bediening] [ingedrukt / vrijgegeven]*: voert het script uit als de knop wordt ingedrukt of losgelaten.

- Type: gebeurtenisblok

#### `Knopwaarde (booleaans)` (Beginner) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*knop [bediening] [ingedrukt / vrijgegeven]*: of de knop op dit moment is ingedrukt of losgelaten.

- Type: waardeblok, `true` / `false`

### Schakelaarblokken {#switch-blocks}

#### `Schakelaargebeurtenis` (Beginner) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*wanneer schakelaar [bediening] is omgeschakeld [ingeschakeld / uit]*: voert het script uit als de schakelaar aan- of uitgezet wordt.

- Type: gebeurtenisblok

#### `Schakelaarwaarde (booleaans)` (Beginner) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*schakelaar [bediening] [ingeschakeld / uit]*: of de schakelaar aan of uit staat.

- Type: waardeblok, `true` / `false`

### Stappenschakelaarblokken {#stepper-blocks}

Deze blokken werken met de stappenschakelaar en de verticale stappenschakelaar.

#### `Stappenschakelaargebeurtenis` (Beginner) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*wanneer de stappen schakelaar [bediening] [elke / resetten / min / plus] is [ingedrukt / vrijgegeven]*: voert het script uit als een knop van de stappenschakelaar wordt ingedrukt of losgelaten (**elke** betekent een willekeurige knop).

- Type: gebeurtenisblok

#### `Stappenschakelaarwaarde (getal)` (Beginner) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*stapschakelaar [bediening]*: het huidige stapnummer.

- Type: waardeblok

## Joysticks en richtingspads {#joysticks-and-d-pads}

### Joystickblokken {#joystick-blocks}

#### `Joystickgebeurtenis` (Beginner) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*wanneer de joystick [bediening] is [omhoog / omlaag / links / rechts / bewogen / vrijgegeven]*: voert het script uit als de stick in een richting wordt geduwd, überhaupt wordt bewogen of wordt losgelaten.

- Type: gebeurtenisblok

#### `Joystickwaarde (getal)` (Beginner) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [bediening] [X-as / Y-as]*: de positie van de stick op één as, van −100 tot 100; het midden is 0.

- Type: waardeblok

#### `Joystickwaarde (booleaans)` (Beginner) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*is joystick [bediening] [ingedrukt / vrijgegeven]*: of er een vinger op de joystick is.

- Type: waardeblok, `true` / `false`

### Richtingspadblokken {#d-pad-blocks}

#### `Richtingspadgebeurtenis` (Beginner) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*wanneer de D-pad [bediening] [omhoog / omlaag / links / rechts] knop [ingedrukt / vrijgegeven]*: voert het script uit als een knop van het richtingspad wordt ingedrukt of losgelaten.

- Type: gebeurtenisblok

#### `Richtingspadwaarde (booleaans)` (Beginner) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*richtingspad [bediening] [omhoog / omlaag / links / rechts] knop [ingedrukt / vrijgegeven]*: of een knop van het richtingspad op dit moment is ingedrukt of losgelaten.

- Type: waardeblok, `true` / `false`

## Schuifregelaars en draaiknoppen {#sliders-and-knobs}

### Schuifregelaarblokken {#slider-blocks}

Deze blokken werken met de schuifregelaar en de verticale schuifregelaar.

#### `Schuifregelaargebeurtenis` (Beginner) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*wanneer de schuifregelaar [bediening] is [laag / hoog / bewogen / vrijgegeven]*: voert het script uit als de schuif het onderste of bovenste uiteinde bereikt, beweegt of wordt losgelaten.

- Type: gebeurtenisblok

#### `Schuifregelaarwaarde (getal)` (Beginner) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*regelaar [bediening]*: de positie van de schuif, van 0 tot 100, of van −100 tot 100 met **Negatieve waarden**.

- Type: waardeblok

### Draaiknopblokken {#rotary-knob-blocks}

Blokken van de [draaiknop](/docs/Application/Dashboard/ControlTypes#rotary-knob) van de betaalde thema's.

#### `Draaiknopgebeurtenis` (Beginner) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*wanneer draaiknop [bediening] is [gedraaid / ingedrukt / losgelaten / naar minimum gedraaid / naar maximum gedraaid]*: voert het script uit als de knop wordt gedraaid, aangeraakt, losgelaten of een van zijn uiteinden bereikt.

- Type: gebeurtenisblok

#### `Draaiknopwaarde (getal)` (Beginner) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*waarde draaiknop [bediening]*: de positie van de knop, van 0 tot 100, of van −100 tot 100 met **Nul in het midden (-100..100)**.

- Type: waardeblok

#### `Draaiknopwaarde (booleaans)` (Beginner) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*is draaiknop [bediening] [ingedrukt / op minimum / op maximum] ?*: of er een vinger op de knop is, of de knop op een van zijn uiteinden staat.

- Type: waardeblok, `true` / `false`

## Monitoren {#monitor-blocks}

Blokken van de [monitoren](/docs/Application/Dashboard/Indicators).

### `Monitor tonen` (Beginner) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*tonen [waarde] op [bediening] monitor*: toont tekst of een waarde op een **Monitor**.

- Type: opdrachtblok
- Gebruikelijke toepassing: het batterijniveau tonen, een motorhoek, het apparaat dat op een hubpoort is aangesloten of de naam van een modus

### `Monitorwaarde instellen` (Beginner) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*stel [waarde] in op [bediening] monitor*: stelt de waarde in van een monitor **Batterijniveau** of **Snelheidsmeter**.

- Type: opdrachtblok

### `Waarde van de kantelmonitor instellen` (Beginner) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*stel [waarde] in op [bediening] [helling / rol] monitor*: stelt de helling of de rol in die op een **Kantelmonitor** wordt getoond.

- Type: opdrachtblok

## Stuur en pedalen {#steering-wheel-and-pedals}

### Stuurblokken {#steering-wheel-blocks}

Blokken van het [stuur](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Stuurgebeurtenis` (Beginner) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*wanneer het stuur [bediening] is [bewogen / ingedrukt / vrijgegeven]*: voert het script uit als het stuur draait, of als je het aanraakt of loslaat.

- Type: gebeurtenisblok

#### `Stuurwaarde (getal)` (Beginner) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*stuurwiel [bediening]*: de stuurhoek, van −100 (helemaal links) tot 100 (helemaal rechts).

- Type: waardeblok

#### `Stuurwaarde (booleaans)` (Beginner) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*stuurwiel [bediening] [ingedrukt / vrijgegeven]*: of er een vinger op het stuur is.

- Type: waardeblok, `true` / `false`

### Pedaalblokken {#pedals-blocks}

Blokken van de [pedalen](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Pedaalgebeurtenis` (Beginner) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*wanneer de pedalen [bediening] [elke / rem / versnelling] is [bewogen / ingedrukt / vrijgegeven]*: voert het script uit als een pedaal beweegt, wordt ingetrapt of wordt losgelaten.

- Type: gebeurtenisblok

#### `Pedaalwaarde (getal)` (Beginner) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedalen [bediening] [versnelling / rem]*: hoe ver het gaspedaal of de rem is ingetrapt, van 0 tot 100.

- Type: waardeblok

#### `Pedaalwaarde (booleaans)` (Beginner) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedaal [bediening] [versnelling / rem] [ingedrukt / vrijgegeven]*: of een pedaal is ingetrapt.

- Type: waardeblok, `true` / `false`

## Andere speciale bedieningselementen {#other-special-controls}

Blokken van de andere [speciale bedieningselementen](/docs/Application/Dashboard/SpecialControls).

### Versnellingsbakblokken {#gearbox-blocks}

Blokken van de [handgeschakelde en automatische versnellingsbak](/docs/Application/Dashboard/SpecialControls#gear-shifter). Versnellingswaarden: handgeschakeld −1 = R, 0 = N, 1…6 = vooruitversnellingen; automaat −2 = P, −1 = R, 0 = N, 1 = D.

#### `Versnellingsbakgebeurtenis` (Beginner) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*wanneer versnellingsbak [bediening] [schakelt / schakelt op / schakelt terug / schakelt naar neutraal / schakelt in zijn achteruit / schakelt naar parkeren]*: voert het script uit als de versnelling verandert. **Schakelt op** en **schakelt terug** betekenen een overgang naar een hogere of lagere waarde.

- Type: gebeurtenisblok

#### `Versnelling` (Beginner) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*versnelling [bediening]*: de ingeschakelde versnelling (zie de waarden hierboven).

- Type: waardeblok

#### `Toestand van de versnellingsbak (booleaans)` (Beginner) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*is versnellingsbak [bediening] [in neutraal / in zijn achteruit / in een vooruitversnelling / in parkeerstand] ?*

- Type: waardeblok, `true` / `false`
- **In een vooruitversnelling** is waar in elke vooruitversnelling van de handgeschakelde bak en in D van de automaat

#### `Aantal versnellingen` (Gevorderd) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*versnellingen van [bediening]*: de instelling **Aantal versnellingen** van de versnellingsbak.

- Type: waardeblok
- Gebruikelijke toepassing: het vak *versnellingen van* van het blok *rijden* van de Simulator

### Handremblokken {#handbrake-blocks}

Blokken van de [handrem](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Handremgebeurtenis` (Beginner) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*wanneer handrem [bediening] is [getrokken / vergrendeld / ontgrendeld / losgelaten]*: voert het script uit als de hendel wordt aangetrokken, vergrendeld, ontgrendeld of losgelaten.

- Type: gebeurtenisblok

#### `Handremkracht` (Beginner) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*handremkracht [bediening]*: hoe ver de hendel is aangetrokken, van 0 tot 100.

- Type: waardeblok

#### `Toestand van de handrem (booleaans)` (Beginner) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*is handrem [bediening] [vergrendeld / ontgrendeld / getrokken] ?* **Getrokken** is waar zolang de kracht boven 0 is.

- Type: waardeblok, `true` / `false`

### Richtingaanwijzerblokken {#turn-signals-blocks}

Blokken van de [richtingaanwijzers](/docs/Application/Dashboard/SpecialControls#turn-signals). Ze zien de vaste toestand van de richtingaanwijzers, zonder het knipperen.

#### `Richtingaanwijzergebeurtenis` (Beginner) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*wanneer richtingaanwijzers [bediening] [linker richtingaanwijzer / rechter richtingaanwijzer / licht] [gaat aan / gaat uit]*

- Type: gebeurtenisblok

#### `Toestand van de richtingaanwijzers (booleaans)` (Beginner) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*richtingaanwijzers [bediening] [linker richtingaanwijzer / rechter richtingaanwijzer / licht] is aan ?*

- Type: waardeblok, `true` / `false`

### Rijschakelaarblokken {#train-controller-blocks}

Blokken van de [rijschakelaar](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Rijschakelaargebeurtenis` (Beginner) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*wanneer rijschakelaar [bediening] [rijstand gewijzigd / rijstand verhoogd / rijstand verlaagd / rijschakelaar op nul / rijrichtingschakelaar verzet / hendel losgelaten]*: **Rijschakelaar op nul** betekent dat de hendel is teruggekeerd naar rijstand 0.

- Type: gebeurtenisblok

#### `Rijschakelaarwaarde (getal)` (Beginner) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*rijschakelaar [bediening] [trekkracht / rijstand / rijrichtingschakelaar]*:

- **trekkracht**: van −100 tot 100, de rijstand als percentage met het teken van de rijrichting;
- **rijstand**: 0 tot 8;
- **rijrichtingschakelaar**: 1 = vooruit, 0 = neutraal, −1 = achteruit.
- Type: waardeblok

#### `Toestand van de rijschakelaar (booleaans)` (Beginner) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*is rijschakelaar [bediening] [vooruit / achteruit / in neutraal / op rijstand 0] ?*

- Type: waardeblok, `true` / `false`
