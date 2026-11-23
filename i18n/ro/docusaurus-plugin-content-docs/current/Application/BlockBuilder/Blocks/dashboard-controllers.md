---
id: DashboardControllers
title: Controlere pe ecran
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controlere pe ecran {#dashboard-controllers}

Aceste blocuri citesc comenzile din tabloul de bord, reacționează când le folosești și le schimbă aspectul. Ele se află în categoria **Controlere pe ecran**, care apare de îndată ce tabloul de bord are o comandă. Fiecare tip de comandă își adaugă propriile blocuri; într-un bloc alegi comanda după numele ei, de exemplu *BTN1* sau *GEAR1*.

Intervale folosite mai jos: majoritatea valorilor analogice merg de la 0 la 100 sau de la −100 la 100 când zero este la mijloc.

Pe această pagină:

- [Blocuri pentru toate comenzile](#blocks-for-all-controls): culoare, interactivitate și sunete
- [Butoane și comutatoare](#buttons-and-switches): buton, comutator, comutator cu trepte
- [Joystickuri și D-pad-uri](#joysticks-and-d-pads)
- [Slidere și butoane rotative](#sliders-and-knobs): slider, buton rotativ
- [Monitoare](#monitor-blocks)
- [Volan și pedale](#steering-wheel-and-pedals)
- [Alte comenzi speciale](#other-special-controls): cutie de viteze, frână de mână, semnalizatoare, cutie de transfer, controler de tren

## Blocuri pentru toate comenzile {#blocks-for-all-controls}

### `Setarea culorii comenzii` (Avansat) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*seta [comandă] culoare la [culoare]*: schimbă culoarea de accent a unei comenzi.

- Tip: bloc de comandă
- Funcționează cu comenzile care au o culoare de accent (nu cu volanul sau pedalele)
- Utilizare tipică: afișarea unei stări, de exemplu un buton care devine roșu când bateria este descărcată

### `Setarea interactivității comenzii` (Avansat) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[activa / dezactiva] [comandă] interactivitate*: o comandă dezactivată nu reacționează la atingeri.

- Tip: bloc de comandă
- Utilizare tipică: blocarea unei comenzi pentru o vreme, de exemplu a accelerației până la încheierea verificării de pornire

### `Sunetul unei comenzi` (Începător) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*sunet [sunet] din [comandă]*: unul dintre sunetele unei comenzi, pentru blocurile de redare a sunetului din categoria **Sunete**.

- Tip: bloc de valoare
- Apare când tabloul de bord are o comandă cu sunete: [volanul](/docs/Application/Dashboard/SpecialControls#steering-wheel) (claxoane de mașină, camion și mașină sport) sau [pedalele](/docs/Application/Dashboard/SpecialControls#pedals) (frâne de mașină, mașină sport și camion, avertizor de mers înapoi)
- Sunetul se redă doar dacă setarea **Efecte sonore** a comenzii și sunetul aplicației sunt activate

## Butoane și comutatoare {#buttons-and-switches}

### Blocuri pentru buton {#button-blocks}

#### `Eveniment buton` (Începător) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*când butonul [comandă] este [apăsat / eliberat]*: rulează scriptul când butonul este apăsat sau eliberat.

- Tip: bloc de eveniment

#### `Valoarea butonului (boolean)` (Începător) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*buton [comandă] [apăsat / eliberat]*: dacă butonul este apăsat sau eliberat în acest moment.

- Tip: bloc de valoare, `true` / `false`

### Blocuri pentru comutator {#switch-blocks}

#### `Eveniment comutator` (Începător) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*când comutator [comandă] este comutat [activat / oprit]*: rulează scriptul când comutatorul este pornit sau oprit.

- Tip: bloc de eveniment

#### `Valoarea comutatorului (boolean)` (Începător) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*comutator [comandă] [activat / oprit]*: dacă comutatorul este pornit sau oprit.

- Tip: bloc de valoare, `true` / `false`

### Blocuri pentru comutatorul cu trepte {#stepper-blocks}

Aceste blocuri funcționează cu comutatorul cu trepte și cu comutatorul cu trepte vertical.

#### `Eveniment comutator cu trepte` (Începător) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*când comutatorul de pas [comandă] [orice / resetare / minus / plus] este [apăsat / eliberat]*: rulează scriptul când un buton al comutatorului cu trepte este apăsat sau eliberat (**orice** înseamnă oricare dintre ele).

- Tip: bloc de eveniment

#### `Valoarea comutatorului cu trepte (număr)` (Începător) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*comutator pas cu pas [comandă]*: numărul treptei curente.

- Tip: bloc de valoare

## Joystickuri și D-pad-uri {#joysticks-and-d-pads}

### Blocuri pentru joystick {#joystick-blocks}

#### `Eveniment joystick` (Începător) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*când joystick-ul [comandă] este [sus / jos / stânga / dreapta / mutat / eliberat]*: rulează scriptul când stickul este împins într-o direcție, mișcat în orice fel sau eliberat.

- Tip: bloc de eveniment

#### `Valoarea joystickului (număr)` (Începător) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [comandă] [axa X / axa Y]*: poziția stickului pe o axă, de la −100 la 100; centrul este 0.

- Tip: bloc de valoare

#### `Valoarea joystickului (boolean)` (Începător) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*este joystick [comandă] [apăsat / eliberat]*: dacă un deget este pe joystick.

- Tip: bloc de valoare, `true` / `false`

### Blocuri pentru D-pad {#d-pad-blocks}

#### `Eveniment D-pad` (Începător) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*când padul direcțional [comandă] [sus / jos / stânga / dreapta] buton [apăsat / eliberat]*: rulează scriptul când un buton al D-pad-ului este apăsat sau eliberat.

- Tip: bloc de eveniment

#### `Valoarea D-pad-ului (boolean)` (Începător) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*pad direcțional [comandă] [sus / jos / stânga / dreapta] buton [apăsat / eliberat]*: dacă un buton al D-pad-ului este apăsat sau eliberat în acest moment.

- Tip: bloc de valoare, `true` / `false`

## Slidere și butoane rotative {#sliders-and-knobs}

### Blocuri pentru slider {#slider-blocks}

Aceste blocuri funcționează cu sliderul și cu sliderul vertical.

#### `Eveniment slider` (Începător) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*când glisorul [comandă] este [scăzut / înalt / mutat / eliberat]*: rulează scriptul când mânerul ajunge la capătul de jos sau de sus, se mișcă sau este eliberat.

- Tip: bloc de eveniment

#### `Valoarea sliderului (număr)` (Începător) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*slider [comandă]*: poziția mânerului, de la 0 la 100 sau de la −100 la 100 cu **Valori negative**.

- Tip: bloc de valoare

### Blocuri pentru butonul rotativ {#rotary-knob-blocks}

Blocurile [butonului rotativ](/docs/Application/Dashboard/ControlTypes#rotary-knob) din temele plătite.

#### `Eveniment buton rotativ` (Începător) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*când butonul rotativ [comandă] este [rotit / apăsat / eliberat / rotit la minim / rotit la maxim]*: rulează scriptul când butonul este rotit, atins, eliberat sau ajunge la unul dintre capete.

- Tip: bloc de eveniment

#### `Valoarea butonului rotativ (număr)` (Începător) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*valoarea butonului rotativ [comandă]*: poziția butonului, de la 0 la 100 sau de la −100 la 100 cu **Zero în centru (-100..100)**.

- Tip: bloc de valoare

#### `Valoarea butonului rotativ (boolean)` (Începător) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*este butonul rotativ [comandă] [apăsat / la minim / la maxim] ?*: dacă un deget este pe buton sau dacă butonul este la unul dintre capete.

- Tip: bloc de valoare, `true` / `false`

## Monitoare {#monitor-blocks}

Blocurile [monitoarelor](/docs/Application/Dashboard/Indicators).

### `Afișare pe monitor` (Începător) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*afișează [valoare] pe [comandă] monitor*: afișează un text sau o valoare pe un **Monitor**.

- Tip: bloc de comandă
- Utilizare tipică: afișarea nivelului bateriei, a unghiului unui motor, a dispozitivului conectat la un port al hubului sau a numelui unui mod

### `Setarea valorii monitorului` (Începător) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*seta [valoare] la [comandă] monitor*: setează valoarea unui monitor **Nivelul bateriei** sau **Vitezometru**.

- Tip: bloc de comandă

### `Setarea valorii monitorului de înclinare` (Începător) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*seta [valoare] la [comandă] [înclinare / rotire] monitor*: setează tangajul sau ruliul afișat pe un **Monitor înclinare**.

- Tip: bloc de comandă

## Volan și pedale {#steering-wheel-and-pedals}

### Blocuri pentru volan {#steering-wheel-blocks}

Blocurile [volanului](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Eveniment volan` (Începător) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*când volanul [comandă] este [mutat / apăsat / eliberat]*: rulează scriptul când volanul se rotește sau când îl atingi ori îl eliberezi.

- Tip: bloc de eveniment

#### `Valoarea volanului (număr)` (Începător) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*volan [comandă]*: unghiul de virare, de la −100 (complet stânga) la 100 (complet dreapta).

- Tip: bloc de valoare

#### `Valoarea volanului (boolean)` (Începător) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*volan [comandă] [apăsat / eliberat]*: dacă un deget este pe volan.

- Tip: bloc de valoare, `true` / `false`

### Blocuri pentru pedale {#pedals-blocks}

Blocurile [pedalelor](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Eveniment pedale` (Începător) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*când pedalele [comandă] [orice / frână / accelerație] este [mutat / apăsat / eliberat]*: rulează scriptul când o pedală se mișcă, este apăsată sau este eliberată.

- Tip: bloc de eveniment

#### `Valoarea pedalelor (număr)` (Începător) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedale [comandă] [accelerație / frână]*: cât de mult este apăsată accelerația sau frâna, de la 0 la 100.

- Tip: bloc de valoare

#### `Valoarea pedalelor (boolean)` (Începător) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedală [comandă] [accelerație / frână] [apăsat / eliberat]*: dacă o pedală este apăsată.

- Tip: bloc de valoare, `true` / `false`

## Alte comenzi speciale {#other-special-controls}

Blocurile celorlalte [comenzi speciale](/docs/Application/Dashboard/SpecialControls).

### Blocuri pentru cutia de viteze {#gearbox-blocks}

Blocurile [cutiilor de viteze manuale și automate](/docs/Application/Dashboard/SpecialControls#gear-shifter). Valorile treptelor: manuală −1 = R, 0 = N, 1…6 = trepte de mers înainte; automată −2 = P, −1 = R, 0 = N, 1 = D.

#### `Eveniment cutie de viteze` (Începător) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*când cutia de viteze [comandă] [schimbă treapta / urcă o treaptă / coboară o treaptă / trece la neutru / trece în marșarier / trece în parcare]*: rulează scriptul când se schimbă treapta. **Urcă o treaptă** și **coboară o treaptă** înseamnă trecerea la o valoare mai mare sau mai mică.

- Tip: bloc de eveniment

#### `Treaptă` (Începător) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*treapta [comandă]*: treapta cuplată (vezi valorile de mai sus).

- Tip: bloc de valoare

#### `Starea cutiei de viteze (boolean)` (Începător) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*este cutia de viteze [comandă] [în neutru / în marșarier / într-o treaptă înainte / în parcare] ?*

- Tip: bloc de valoare, `true` / `false`
- **Într-o treaptă înainte** este adevărat în orice treaptă de mers înainte a cutiei manuale și în D la cutia automată

#### `Număr de trepte` (Avansat) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*trepte din [comandă]*: setarea **Număr de trepte** a cutiei de viteze.

- Tip: bloc de valoare
- Utilizare tipică: câmpul *din* al blocului *conduce* din Simulator

### Blocuri pentru frâna de mână {#handbrake-blocks}

Blocurile [frânei de mână](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Eveniment frână de mână` (Începător) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*când frâna de mână [comandă] este [trasă / blocată / deblocată / eliberată]*: rulează scriptul când maneta este trasă, blocată, deblocată sau eliberată.

- Tip: bloc de eveniment

#### `Forța frânei de mână` (Începător) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*forța frânei de mână [comandă]*: cât de mult este trasă maneta, de la 0 la 100.

- Tip: bloc de valoare

#### `Starea frânei de mână (boolean)` (Începător) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*este frâna de mână [comandă] [blocată / deblocată / trasă] ?* **Trasă** este adevărat cât timp forța este peste 0.

- Tip: bloc de valoare, `true` / `false`

### Blocuri pentru semnalizatoare {#turn-signals-blocks}

Blocurile [semnalizatoarelor](/docs/Application/Dashboard/SpecialControls#turn-signals). Ele văd starea stabilă a semnalizatoarelor, fără clipire.

#### `Eveniment semnalizatoare` (Începător) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*când semnalizatoarele [comandă] [semnalizarea stânga / semnalizarea dreapta / luminile] [se aprinde / se stinge]*

- Tip: bloc de eveniment

#### `Starea semnalizatoarelor (boolean)` (Începător) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*semnalizatoarele [comandă] [semnalizarea stânga / semnalizarea dreapta / luminile] este aprins ?*

- Tip: bloc de valoare, `true` / `false`

### Blocuri pentru cutia de transfer {#transfer-case-blocks}

Blocurile [cutiei de transfer](/docs/Application/Dashboard/SpecialControls#transfer-case). A doua listă din blocurile de eveniment și de stare are aceleași opțiuni:

- **2H**, **4H**, **N**, **4L**: selectorul este în această poziție;
- **tracțiune integrală**: selectorul este în 4H sau 4L;
- **treaptă redusă**: selectorul este în 4L;
- **blocare față**, **blocare centrală**, **blocare spate**: blocarea diferențialului este cuplată.

#### `Eveniment cutie de transfer` (Începător) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*când cutia de transfer [comandă] [2H / 4H / N / 4L / tracțiune integrală / treaptă redusă / blocare față / blocare centrală / blocare spate] [se cuplează / se decuplează]*: **se cuplează** rulează când opțiunea devine adevărată (selectorul ajunge în poziție sau blocarea este pornită), **se decuplează** când nu mai este adevărată.

- Tip: bloc de eveniment

#### `Starea cutiei de transfer (boolean)` (Începător) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*cutia de transfer [comandă] [2H / 4H / N / 4L / tracțiune integrală / treaptă redusă / blocare față / blocare centrală / blocare spate] este cuplat ?*

- Tip: bloc de valoare, `true` / `false`

#### `Poziția cutiei de transfer (număr)` (Începător) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*poziția cutiei de transfer [comandă]*: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Conectează-l în slotul *cutia de transfer* al blocului [conduce](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive) ca simulatorul să folosească cutia de transfer.

- Tip: bloc de valoare

### Blocuri pentru controlerul de tren {#train-controller-blocks}

Blocurile [controlerului de tren](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Eveniment controler de tren` (Începător) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*când controlerul de tren [comandă] [treapta schimbată / treapta crescută / treapta scăzută / tracțiunea oprită / inversorul mutat / maneta eliberată]*: **Tracțiunea oprită** înseamnă că maneta a revenit la treapta 0.

- Tip: bloc de eveniment

#### `Valoarea controlerului de tren (număr)` (Începător) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*controlerul de tren [comandă] [tracțiune / treapta de putere / inversor]*:

- **tracțiune**: de la −100 la 100, treapta ca procent, cu semnul sensului de mers;
- **treapta de putere**: de la 0 la 8;
- **inversor**: 1 = înainte, 0 = neutru, −1 = înapoi.
- Tip: bloc de valoare

#### `Starea controlerului de tren (boolean)` (Începător) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*este controlerul de tren [comandă] [înainte / înapoi / în neutru / la treapta 0] ?*

- Tip: bloc de valoare, `true` / `false`
