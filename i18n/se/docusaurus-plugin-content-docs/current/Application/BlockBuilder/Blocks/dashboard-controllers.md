---
id: DashboardControllers
title: Skärmkontroller
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Skärmkontroller {#dashboard-controllers}

De här blocken läser kontrollerna på instrumentpanelen, reagerar när du använder dem och ändrar hur de ser ut. De finns i kategorin **Skärmkontroller**, som visas så snart instrumentpanelen har en kontroll. Varje kontrolltyp lägger till sina egna block; i ett block väljer du kontrollen med dess namn, till exempel *BTN1* eller *GEAR1*.

Intervall som används nedan: de flesta analoga värden går från 0 till 100, eller från −100 till 100 när noll ligger i mitten.

På den här sidan:

- [Block för alla kontroller](#blocks-for-all-controls): färg, interaktivitet och ljud
- [Knappar och brytare](#buttons-and-switches): knapp, brytare, stegswitch
- [Joystickar och styrkors](#joysticks-and-d-pads)
- [Skjutreglage och vridrattar](#sliders-and-knobs): skjutreglage, vridratt
- [Monitorer](#monitor-blocks)
- [Ratt och pedaler](#steering-wheel-and-pedals)
- [Övriga specialkontroller](#other-special-controls): växellåda, handbroms, blinkers, tågreglage

## Block för alla kontroller {#blocks-for-all-controls}

### `Ställ in kontrollens färg` (Avancerad) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*ställ in [kontroll] färg till [färg]*: ändrar en kontrolls accentfärg.

- Typ: kommandoblock
- Fungerar med kontroller som har en accentfärg (inte med ratten eller pedalerna)
- Typisk användning: visa ett tillstånd, till exempel en knapp som blir röd när batteriet är lågt

### `Ställ in kontrollens interaktivitet` (Avancerad) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[aktivera / avaktivera] [kontroll] interaktivitet*: en avaktiverad kontroll reagerar inte på beröring.

- Typ: kommandoblock
- Typisk användning: spärra en kontroll en stund, till exempel gasen tills en startkontroll är klar

### `Ljud från en kontroll` (Nybörjare) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*ljud [ljud] av [kontroll]*: ett av en kontrolls ljud, för spela-blocken i kategorin **Ljud**.

- Typ: värdeblock
- Visas när instrumentpanelen har en kontroll med ljud: [ratten](/docs/Application/Dashboard/SpecialControls#steering-wheel) (tutor för bil, lastbil och sportbil) eller [pedalerna](/docs/Application/Dashboard/SpecialControls#pedals) (bromsar för bil, sportbil och lastbil, backvarnare)
- Ljudet spelas bara om kontrollens inställning **Ljud effekter** och appens ljud är påslagna

## Knappar och brytare {#buttons-and-switches}

### Knappblock {#button-blocks}

#### `Knapphändelse` (Nybörjare) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*när knappen [kontroll] är [tryckt / släppt]*: kör skriptet när knappen trycks in eller släpps.

- Typ: händelseblock

#### `Knappens värde (boolean)` (Nybörjare) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*knapp [kontroll] [tryckt / släppt]*: om knappen är intryckt eller släppt just nu.

- Typ: värdeblock, `true` / `false`

### Brytarblock {#switch-blocks}

#### `Brytarhändelse` (Nybörjare) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*när switch [kontroll] är växlad [aktiverad / av]*: kör skriptet när brytaren slås på eller av.

- Typ: händelseblock

#### `Brytarens värde (boolean)` (Nybörjare) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*switch [kontroll] [aktiverad / av]*: om brytaren är på eller av.

- Typ: värdeblock, `true` / `false`

### Stegswitchblock {#stepper-blocks}

De här blocken fungerar med stegswitchen och den vertikala stegswitchen.

#### `Stegswitchhändelse` (Nybörjare) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*när stegomkopplaren [kontroll] [vilken som helst / återställ / minus / plus] är [tryckt / släppt]*: kör skriptet när en knapp på stegswitchen trycks in eller släpps (**vilken som helst** betyder vilken som helst av dem).

- Typ: händelseblock

#### `Stegswitchens värde (decimaltal)` (Nybörjare) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*stegomkopplare [kontroll]*: numret på aktuellt steg.

- Typ: värdeblock

## Joystickar och styrkors {#joysticks-and-d-pads}

### Joystickblock {#joystick-blocks}

#### `Joystickhändelse` (Nybörjare) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*när joysticken [kontroll] är [upp / ner / vänster / höger / flyttad / släppt]*: kör skriptet när spaken förs åt ett håll, rörs överhuvudtaget eller släpps.

- Typ: händelseblock

#### `Joystickens värde (decimaltal)` (Nybörjare) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [kontroll] [X-axel / Y-axel]*: spakens läge längs en axel, från −100 till 100; mitten är 0.

- Typ: värdeblock

#### `Joystickens värde (boolean)` (Nybörjare) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*är joystick [kontroll] [tryckt / släppt]*: om ett finger ligger på joysticken.

- Typ: värdeblock, `true` / `false`

### Styrkorsblock {#d-pad-blocks}

#### `Styrkorshändelse` (Nybörjare) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*när riktad pad [kontroll] [upp / ner / vänster / höger] knapp [tryckt / släppt]*: kör skriptet när en knapp på styrkorset trycks in eller släpps.

- Typ: händelseblock

#### `Styrkorsets värde (boolean)` (Nybörjare) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*riktad pad [kontroll] [upp / ner / vänster / höger] knapp [tryckt / släppt]*: om en knapp på styrkorset är intryckt eller släppt just nu.

- Typ: värdeblock, `true` / `false`

## Skjutreglage och vridrattar {#sliders-and-knobs}

### Block för skjutreglage {#slider-blocks}

De här blocken fungerar med skjutreglaget och det vertikala skjutreglaget.

#### `Händelse för skjutreglage` (Nybörjare) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*när reglaget [kontroll] är [låg / hög / flyttad / släppt]*: kör skriptet när reglaget når den nedre eller övre änden, rör sig eller släpps.

- Typ: händelseblock

#### `Skjutreglagets värde (decimaltal)` (Nybörjare) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*skjutreglage [kontroll]*: reglagets läge, från 0 till 100, eller från −100 till 100 med **Negativa värden**.

- Typ: värdeblock

### Block för vridratt {#rotary-knob-blocks}

Block för [vridratten](/docs/Application/Dashboard/ControlTypes#rotary-knob) i de betalda temana.

#### `Vridrattshändelse` (Nybörjare) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*när vridratt [kontroll] är [vriden / intryckt / släppt / vriden till minimum / vriden till maximum]*: kör skriptet när ratten vrids, vidrörs, släpps eller når en av sina ändar.

- Typ: händelseblock

#### `Vridrattens värde (decimaltal)` (Nybörjare) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*vridrattens värde [kontroll]*: rattens läge, från 0 till 100, eller från −100 till 100 med **Noll i mitten (-100..100)**.

- Typ: värdeblock

#### `Vridrattens värde (boolean)` (Nybörjare) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*är vridratt [kontroll] [intryckt / på minimum / på maximum] ?*: om ett finger ligger på ratten, eller om ratten står vid en av sina ändar.

- Typ: värdeblock, `true` / `false`

## Monitorer {#monitor-blocks}

Block för [monitorerna](/docs/Application/Dashboard/Indicators).

### `Visa på monitor` (Nybörjare) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*visa [värde] på [kontroll] skärm*: visar text eller ett värde på en **Monitor**.

- Typ: kommandoblock
- Typisk användning: visa batterinivån, en motorvinkel, enheten som är ansluten till en hubbport eller namnet på ett läge

### `Ställ in monitorns värde` (Nybörjare) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*ställ in [värde] till [kontroll] skärm*: ställer in värdet på en monitor av typen **Batterinivå** eller **Hastighetsmätare**.

- Typ: kommandoblock

### `Ställ in lutningsmonitorns värde` (Nybörjare) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*ställ in [värde] till [kontroll] [lutning / rullning] skärm*: ställer in lutningen framåt eller i sidled som visas på en **Lutningsmonitor**.

- Typ: kommandoblock

## Ratt och pedaler {#steering-wheel-and-pedals}

### Rattblock {#steering-wheel-blocks}

Block för [ratten](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Ratthändelse` (Nybörjare) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*när ratten [kontroll] är [flyttad / tryckt / släppt]*: kör skriptet när ratten vrids, eller när du rör vid den eller släpper den.

- Typ: händelseblock

#### `Rattens värde (decimaltal)` (Nybörjare) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*ratte [kontroll]*: rattvinkeln, från −100 (fullt vänster) till 100 (fullt höger).

- Typ: värdeblock

#### `Rattens värde (boolean)` (Nybörjare) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*ratt [kontroll] [tryckt / släppt]*: om ett finger ligger på ratten.

- Typ: värdeblock, `true` / `false`

### Pedalblock {#pedals-blocks}

Block för [pedalerna](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Pedalhändelse` (Nybörjare) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*när pedalerna [kontroll] [vilken som helst / broms / acceleration] är [flyttad / tryckt / släppt]*: kör skriptet när en pedal rör sig, trycks ned eller släpps.

- Typ: händelseblock

#### `Pedalernas värde (decimaltal)` (Nybörjare) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedaler [kontroll] [acceleration / broms]*: hur långt gasen eller bromsen är nedtryckt, från 0 till 100.

- Typ: värdeblock

#### `Pedalernas värde (boolean)` (Nybörjare) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedal [kontroll] [acceleration / broms] [tryckt / släppt]*: om en pedal är nedtryckt.

- Typ: värdeblock, `true` / `false`

## Övriga specialkontroller {#other-special-controls}

Block för de övriga [specialkontrollerna](/docs/Application/Dashboard/SpecialControls).

### Växellådsblock {#gearbox-blocks}

Block för [den manuella och den automatiska växellådan](/docs/Application/Dashboard/SpecialControls#gear-shifter). Växelvärden: manuell −1 = R, 0 = N, 1…6 = framåtväxlar; automatisk −2 = P, −1 = R, 0 = N, 1 = D.

#### `Växellådshändelse` (Nybörjare) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*när växellåda [kontroll] [växlar / växlar upp / växlar ner / lägger i friläge / lägger i backen / lägger i parkering]*: kör skriptet när växeln ändras. **Växlar upp** och **växlar ner** betyder en förflyttning till ett högre eller lägre värde.

- Typ: händelseblock

#### `Växel` (Nybörjare) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*växel [kontroll]*: den ilagda växeln (se värdena ovan).

- Typ: värdeblock

#### `Växellådans tillstånd (boolean)` (Nybörjare) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*är växellåda [kontroll] [i friläge / i back / i en framåtväxel / i parkering] ?*

- Typ: värdeblock, `true` / `false`
- **I en framåtväxel** är sant i alla framåtväxlar i den manuella växellådan och i D i den automatiska

#### `Antal växlar` (Avancerad) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*växlar för [kontroll]*: växellådans inställning **Antal växlar**.

- Typ: värdeblock
- Typisk användning: facket *av* i Simulatorns *kör*-block

### Handbromsblock {#handbrake-blocks}

Block för [handbromsen](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Handbromshändelse` (Nybörjare) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*när handbroms [kontroll] är [dragen / låst / lossad / släppt]*: kör skriptet när spaken dras, låses, lossas eller släpps.

- Typ: händelseblock

#### `Handbromskraft` (Nybörjare) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*handbromskraft [kontroll]*: hur långt spaken är dragen, från 0 till 100.

- Typ: värdeblock

#### `Handbromsens tillstånd (boolean)` (Nybörjare) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*är handbroms [kontroll] [låst / lossad / dragen] ?* **Dragen** är sant så länge kraften är större än 0.

- Typ: värdeblock, `true` / `false`

### Blinkersblock {#turn-signals-blocks}

Block för [blinkersen](/docs/Application/Dashboard/SpecialControls#turn-signals). De ser blinkersens stadiga tillstånd, utan själva blinkningen.

#### `Blinkershändelse` (Nybörjare) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*när blinkers [kontroll] [vänster blinker / höger blinker / ljus] [tänds / släcks]*

- Typ: händelseblock

#### `Blinkersens tillstånd (boolean)` (Nybörjare) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*blinkers [kontroll] [vänster blinker / höger blinker / ljus] är på ?*

- Typ: värdeblock, `true` / `false`

### Block för tågreglage {#train-controller-blocks}

Block för [tågreglaget](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Tågreglagehändelse` (Nybörjare) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*när körkontroll [kontroll] [steg ändrat / steg höjt / steg sänkt / körkontroll på noll / riktningsväljare flyttad / spak släppt]*: **Körkontroll på noll** betyder att spaken har kommit tillbaka till steg 0.

- Typ: händelseblock

#### `Tågreglagets värde (decimaltal)` (Nybörjare) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*körkontroll [kontroll] [dragkraft / körsteg / riktningsväljare]*:

- **dragkraft**: från −100 till 100, körsteget i procent med riktningens tecken;
- **körsteg**: 0 till 8;
- **riktningsväljare**: 1 = framåt, 0 = neutral, −1 = back.
- Typ: värdeblock

#### `Tågreglagets tillstånd (boolean)` (Nybörjare) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*är körkontroll [kontroll] [framåt / bakåt / i neutralläge / på steg 0] ?*

- Typ: värdeblock, `true` / `false`
