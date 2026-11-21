---
id: DashboardControllers
title: Skjermkontrollere
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Skjermkontrollere {#dashboard-controllers}

Disse blokkene leser kontrollerne på dashboardet, reagerer når du bruker dem, og endrer hvordan de ser ut. De ligger i kategorien **Skjermkontrollere**, som vises så snart dashboardet har en kontroller. Hver kontrollertype legger til sine egne blokker; i en blokk velger du kontrolleren etter navnet, for eksempel *BTN1* eller *GEAR1*.

Områder som brukes nedenfor: De fleste analoge verdier går fra 0 til 100, eller fra −100 til 100 når null er i midten.

På denne siden:

- [Blokker for alle kontrollere](#blocks-for-all-controls): farge, interaktivitet og lyder
- [Knapper og brytere](#buttons-and-switches): knapp, bryter, trinnbryter
- [Joysticker og D-pader](#joysticks-and-d-pads)
- [Skyveknapper og dreieknapper](#sliders-and-knobs): skyveknapp, dreieknapp
- [Monitorer](#monitor-blocks)
- [Ratt og pedaler](#steering-wheel-and-pedals)
- [Andre spesialkontrollere](#other-special-controls): girkasse, handbrekk, blinklys, kjørekontroller

## Blokker for alle kontrollere {#blocks-for-all-controls}

### `Angi kontrollerfarge` (Avansert) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*sett [kontroller] farge til [farge]*: endrer aksentfargen til en kontroller.

- Type: kommandoblokk
- Fungerer med kontrollerne som har en aksentfarge (ikke med rattet eller pedalene)
- Typisk bruk: vise en tilstand, for eksempel en knapp som blir rød når batteriet er lavt

### `Angi kontrollerens interaktivitet` (Avansert) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[aktivere / deaktivere] [kontroller] interaktivitet*: En deaktivert kontroller reagerer ikke på berøring.

- Type: kommandoblokk
- Typisk bruk: sperre en kontroller en stund, for eksempel gassen til en oppstartssjekk er fullført

### `Lyd fra en kontroller` (Nybegynner) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*lyd [lyd] av [kontroller]*: én av lydene til en kontroller, for *spill av lyd*-blokkene i kategorien **Lyder**.

- Type: verdiblokk
- Vises når dashboardet har en kontroller med lyder: [rattet](/docs/Application/Dashboard/SpecialControls#steering-wheel) (horn for bil, lastebil og sportsbil) eller [pedalene](/docs/Application/Dashboard/SpecialControls#pedals) (bremser for bil, sportsbil og lastebil, ryggepip)
- Lyden spilles bare av hvis kontrollerens innstilling **Lydeffekter** og applyden er slått på

## Knapper og brytere {#buttons-and-switches}

### Knappeblokker {#button-blocks}

#### `Knappehendelse` (Nybegynner) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*når knappen [kontroller] er [trykket / sleppt]*: kjører skriptet når knappen trykkes eller slippes.

- Type: hendelsesblokk

#### `Knappeverdi (boolsk)` (Nybegynner) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*knapp [kontroller] [trykket / sleppt]*: om knappen er trykket eller sluppet akkurat nå.

- Type: verdiblokk, `true` / `false`

### Bryterblokker {#switch-blocks}

#### `Bryterhendelse` (Nybegynner) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*når bryter [kontroller] er byttet [på / av]*: kjører skriptet når bryteren slås på eller av.

- Type: hendelsesblokk

#### `Bryterverdi (boolsk)` (Nybegynner) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*bryter [kontroller] [på / av]*: om bryteren er på eller av.

- Type: verdiblokk, `true` / `false`

### Trinnbryterblokker {#stepper-blocks}

Disse blokkene fungerer med trinnbryteren og den vertikale trinnbryteren.

#### `Trinnbryterhendelse` (Nybegynner) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*når trinnbryteren [kontroller] [hvilken som helst / tilbakestill / minus / pluss] er [trykket / sleppt]*: kjører skriptet når en knapp på trinnbryteren trykkes eller slippes (**hvilken som helst** betyr hvilken som helst av dem).

- Type: hendelsesblokk

#### `Trinnbryterverdi (desimaltall)` (Nybegynner) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*trinnbryter [kontroller]*: nummeret på det nåværende trinnet.

- Type: verdiblokk

## Joysticker og D-pader {#joysticks-and-d-pads}

### Joystickblokker {#joystick-blocks}

#### `Joystickhendelse` (Nybegynner) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*når joysticken [kontroller] er [opp / ned / venstre / høyre / flyttet / sleppt]*: kjører skriptet når spaken skyves i en retning, beveges i det hele tatt eller slippes.

- Type: hendelsesblokk

#### `Joystickverdi (desimaltall)` (Nybegynner) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [kontroller] [X-akse / Y-akse]*: spakens posisjon langs én akse, fra −100 til 100; midten er 0.

- Type: verdiblokk

#### `Joystickverdi (boolsk)` (Nybegynner) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*er joystick [kontroller] [trykket / sleppt]*: om en finger ligger på joysticken.

- Type: verdiblokk, `true` / `false`

### D-pad-blokker {#d-pad-blocks}

#### `D-pad-hendelse` (Nybegynner) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*når styrepad [kontroller] [opp / ned / venstre / høyre] knapp [trykket / sleppt]*: kjører skriptet når en D-pad-knapp trykkes eller slippes.

- Type: hendelsesblokk

#### `D-pad-verdi (boolsk)` (Nybegynner) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*retningspad [kontroller] [opp / ned / venstre / høyre] knapp [trykket / sleppt]*: om en D-pad-knapp er trykket eller sluppet akkurat nå.

- Type: verdiblokk, `true` / `false`

## Skyveknapper og dreieknapper {#sliders-and-knobs}

### Skyveknappblokker {#slider-blocks}

Disse blokkene fungerer med skyveknappen og den vertikale skyveknappen.

#### `Skyveknapphendelse` (Nybegynner) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*når skyveknappen [kontroller] er [lav / høy / flyttet / sleppt]*: kjører skriptet når håndtaket når den nedre eller øvre enden, beveges eller slippes.

- Type: hendelsesblokk

#### `Skyveknappverdi (desimaltall)` (Nybegynner) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*skydder [kontroller]*: håndtakets posisjon, fra 0 til 100, eller fra −100 til 100 med **Negative verdier**.

- Type: verdiblokk

### Dreieknappblokker {#rotary-knob-blocks}

Blokker for [dreieknappen](/docs/Application/Dashboard/ControlTypes#rotary-knob) i de betalte temaene.

#### `Dreieknapphendelse` (Nybegynner) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*når dreieknapp [kontroller] er [dreidd / trykket / sleppt / dreidd til minimum / dreidd til maksimum]*: kjører skriptet når knappen dreies, berøres, slippes eller når en av endene sine.

- Type: hendelsesblokk

#### `Dreieknappverdi (desimaltall)` (Nybegynner) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*verdi for dreieknapp [kontroller]*: knappens posisjon, fra 0 til 100, eller fra −100 til 100 med **Null i midten (-100..100)**.

- Type: verdiblokk

#### `Dreieknappverdi (boolsk)` (Nybegynner) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*er dreieknapp [kontroller] [trykket / på minimum / på maksimum] ?*: om en finger ligger på knappen, eller om knappen står i en av endene sine.

- Type: verdiblokk, `true` / `false`

## Monitorer {#monitor-blocks}

Blokker for [monitorene](/docs/Application/Dashboard/Indicators).

### `Vis på monitor` (Nybegynner) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*vis [verdi] på [kontroller] skjerm*: viser tekst eller en verdi på en **Monitor**.

- Type: kommandoblokk
- Typisk bruk: vise batterinivået, en motorvinkel, enheten som er koblet til en hubport, eller navnet på en modus

### `Angi monitorverdi` (Nybegynner) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*sett [verdi] til [kontroller] skjerm*: setter verdien til en monitor av typen **Batterinivå** eller **Speedometer**.

- Type: kommandoblokk

### `Angi verdi for hellingsmonitor` (Nybegynner) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*sett [verdi] til [kontroller] [stigning / rulling] skjerm*: setter stigningen eller rullingen som vises på en **Hellingsmonitor**.

- Type: kommandoblokk

## Ratt og pedaler {#steering-wheel-and-pedals}

### Rattblokker {#steering-wheel-blocks}

Blokker for [rattet](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Rattehendelse` (Nybegynner) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*når rattet [kontroller] er [flyttet / trykket / sleppt]*: kjører skriptet når rattet dreies, eller når du berører eller slipper det.

- Type: hendelsesblokk

#### `Rattverdi (desimaltall)` (Nybegynner) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*ratt [kontroller]*: rattvinkelen, fra −100 (helt til venstre) til 100 (helt til høyre).

- Type: verdiblokk

#### `Rattverdi (boolsk)` (Nybegynner) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*ratt [kontroller] [trykket / sleppt]*: om en finger ligger på rattet.

- Type: verdiblokk, `true` / `false`

### Pedalblokker {#pedals-blocks}

Blokker for [pedalene](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Pedalhendelse` (Nybegynner) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*når pedalene [kontroller] [hvilken som helst / brems / akselerasjon] er [flyttet / trykket / sleppt]*: kjører skriptet når en pedal beveges, trykkes eller slippes.

- Type: hendelsesblokk

#### `Pedalverdi (desimaltall)` (Nybegynner) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedaler [kontroller] [akselerasjon / brems]*: hvor langt gasspedalen eller bremsen er trykket inn, fra 0 til 100.

- Type: verdiblokk

#### `Pedalverdi (boolsk)` (Nybegynner) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedal [kontroller] [akselerasjon / brems] [trykket / sleppt]*: om en pedal er trykket inn.

- Type: verdiblokk, `true` / `false`

## Andre spesialkontrollere {#other-special-controls}

Blokker for de andre [spesialkontrollerne](/docs/Application/Dashboard/SpecialControls).

### Girkasseblokker {#gearbox-blocks}

Blokker for [den manuelle girkassen og automatgirkassen](/docs/Application/Dashboard/SpecialControls#gear-shifter). Girverdier: manuell −1 = R, 0 = N, 1…6 = forovergir; automat −2 = P, −1 = R, 0 = N, 1 = D.

#### `Girkassehendelse` (Nybegynner) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*når girkasse [kontroller] [skifter gir / girer opp / girer ned / setter i fri / setter i revers / setter i parkering]*: kjører skriptet når giret endres. **Girer opp** og **girer ned** betyr et skifte til en høyere eller lavere verdi.

- Type: hendelsesblokk

#### `Gir` (Nybegynner) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*gir [kontroller]*: det innlagte giret (se verdiene ovenfor).

- Type: verdiblokk

#### `Girkassetilstand (boolsk)` (Nybegynner) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*er girkasse [kontroller] [i fri / i revers / i et forovergir / i parkering] ?*

- Type: verdiblokk, `true` / `false`
- **I et forovergir** er sann i alle forovergirene på den manuelle girkassen og i D på automatgirkassen

#### `Antall gir` (Avansert) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*gir for [kontroller]*: girkassens innstilling **Antall gir**.

- Type: verdiblokk
- Typisk bruk: feltet *av* i Simulator-blokken *kjør*

### Handbrekkblokker {#handbrake-blocks}

Blokker for [handbrekket](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Handbrekkhendelse` (Nybegynner) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*når handbrekk [kontroller] er [trekt / låst / løyst / sleppt]*: kjører skriptet når spaken trekkes, låses, låses opp eller slippes.

- Type: hendelsesblokk

#### `Handbrekkraft` (Nybegynner) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*handbrekkraft [kontroller]*: hvor langt spaken er trukket, fra 0 til 100.

- Type: verdiblokk

#### `Handbrekktilstand (boolsk)` (Nybegynner) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*er handbrekk [kontroller] [låst / løyst / trekt] ?* **Trekt** er sann så lenge kraften er over 0.

- Type: verdiblokk, `true` / `false`

### Blinklysblokker {#turn-signals-blocks}

Blokker for [blinklysene](/docs/Application/Dashboard/SpecialControls#turn-signals). De ser den faste tilstanden til blinklysene, uten selve blinkingen.

#### `Blinklyshendelse` (Nybegynner) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*når blinklys [kontroller] [venstre blinklys / høyre blinklys / lys] [slås på / slås av]*

- Type: hendelsesblokk

#### `Blinklystilstand (boolsk)` (Nybegynner) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*blinklys [kontroller] [venstre blinklys / høyre blinklys / lys] er på ?*

- Type: verdiblokk, `true` / `false`

### Kjørekontrollerblokker {#train-controller-blocks}

Blokker for [kjørekontrolleren](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Kjørekontrollerhendelse` (Nybegynner) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*når kjørekontroller [kontroller] [trinn endret / trinn økt / trinn senket / kontroller på null / retningsvelger flyttet / spak sluppet]*: **Kontroller på null** betyr at spaken har gått tilbake til trinn 0.

- Type: hendelsesblokk

#### `Kjørekontrollerverdi (desimaltall)` (Nybegynner) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*kjørekontroller [kontroller] [trekkraft / kjøretrinn / retningsvelger]*:

- **trekkraft**: fra −100 til 100, trinnet i prosent med fortegnet til kjøreretningen;
- **kjøretrinn**: 0 til 8;
- **retningsvelger**: 1 = forover, 0 = nøytral, −1 = revers.
- Type: verdiblokk

#### `Kjørekontrollertilstand (boolsk)` (Nybegynner) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*er kjørekontroller [kontroller] [i forover / i revers / i nøytral / på trinn 0] ?*

- Type: verdiblokk, `true` / `false`
