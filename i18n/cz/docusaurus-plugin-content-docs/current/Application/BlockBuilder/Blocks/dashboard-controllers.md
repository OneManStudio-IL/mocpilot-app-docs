---
id: DashboardControllers
title: Ovladače na obrazovce
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ovladače na obrazovce {#dashboard-controllers}

Tyto bloky čtou ovládací prvky na panelu, reagují, když je používáte, a mění jejich vzhled. Najdete je v kategorii **Ovladače na obrazovce**, která se objeví, jakmile má panel nějaký ovládací prvek. Každý typ prvku přidává vlastní bloky; v bloku vybíráte prvek podle jeho názvu, například *BTN1* nebo *GEAR1*.

Rozsahy použité níže: většina analogových hodnot jde od 0 do 100, nebo od −100 do 100, když je nula uprostřed.

Na této stránce:

- [Bloky pro všechny ovládací prvky](#blocks-for-all-controls): barva, interaktivita a zvuky
- [Tlačítka a spínače](#buttons-and-switches): tlačítko, spínač, krokový spínač
- [Joysticky a D-pady](#joysticks-and-d-pads)
- [Posuvníky a otočné ovladače](#sliders-and-knobs): posuvník, otočný ovladač
- [Monitory](#monitor-blocks)
- [Volant a pedály](#steering-wheel-and-pedals)
- [Další speciální ovládací prvky](#other-special-controls): převodovka, ruční brzda, blinkry, jízdní kontrolér

## Bloky pro všechny ovládací prvky {#blocks-for-all-controls}

### `Nastavit barvu ovladače` (Pokročilý) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*nastavit [prvek] barva na [barva]*: změní barvu zvýraznění ovládacího prvku.

- Typ: příkazový blok
- Funguje s ovládacími prvky, které mají barvu zvýraznění (ne s volantem ani pedály)
- Typické použití: ukázat stav, například tlačítko, které zčervená, když je baterie slabá

### `Nastavit interaktivitu ovladače` (Pokročilý) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[povolit / zakázat] [prvek] interaktivita*: zakázaný ovládací prvek nereaguje na dotyky.

- Typ: příkazový blok
- Typické použití: na chvíli zablokovat ovládací prvek, například plyn, dokud neproběhne kontrola při spuštění

### `Zvuk ovládacího prvku` (Začátečník) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*zvuk [zvuk] z [prvek]*: jeden ze zvuků ovládacího prvku pro bloky přehrávání zvuku z kategorie **Zvuky**.

- Typ: hodnotový blok
- Objeví se, když má panel ovládací prvek se zvuky: [volant](/docs/Application/Dashboard/SpecialControls#steering-wheel) (klaksony osobního, nákladního a sportovního auta) nebo [pedály](/docs/Application/Dashboard/SpecialControls#pedals) (brzdy osobního, sportovního a nákladního auta, couvací pípání)
- Zvuk se přehraje, jen pokud je zapnuté nastavení prvku **Zvukové efekty** i zvuk aplikace

## Tlačítka a spínače {#buttons-and-switches}

### Bloky tlačítka {#button-blocks}

#### `Událost tlačítka` (Začátečník) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*když tlačítko [prvek] je [stisknuto / uvolněno]*: spustí skript, když je tlačítko stisknuto nebo uvolněno.

- Typ: blok události

#### `Hodnota tlačítka (boolean)` (Začátečník) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*tlačítko [prvek] [stisknuto / uvolněno]*: zda je tlačítko právě stisknuté, nebo uvolněné.

- Typ: hodnotový blok, `true` / `false`

### Bloky spínače {#switch-blocks}

#### `Událost spínače` (Začátečník) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*když přepínač [prvek] je přepnut [povoleno / vypnuto]*: spustí skript, když se spínač zapne nebo vypne.

- Typ: blok události

#### `Hodnota spínače (boolean)` (Začátečník) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*spínač [prvek] [povoleno / vypnuto]*: zda je spínač zapnutý, nebo vypnutý.

- Typ: hodnotový blok, `true` / `false`

### Bloky krokového spínače {#stepper-blocks}

Tyto bloky fungují s krokovým spínačem i se svislým krokovým spínačem.

#### `Událost krokového spínače` (Začátečník) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*když krokový spínač [prvek] [jakýkoli / resetovat / minus / plus] je [stisknuto / uvolněno]*: spustí skript, když je tlačítko krokového spínače stisknuto nebo uvolněno (**jakýkoli** znamená kterékoli z nich).

- Typ: blok události

#### `Hodnota krokového spínače (float)` (Začátečník) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*krokový spínač [prvek]*: číslo aktuálního kroku.

- Typ: hodnotový blok

## Joysticky a D-pady {#joysticks-and-d-pads}

### Bloky joysticku {#joystick-blocks}

#### `Událost joysticku` (Začátečník) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*když joystick [prvek] je [nahoru / dolů / vlevo / vpravo / pohnut / uvolněno]*: spustí skript, když je páčka vychýlena určitým směrem, jakkoli pohnuta nebo uvolněna.

- Typ: blok události

#### `Hodnota joysticku (float)` (Začátečník) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [prvek] [osa X / osa Y]*: poloha páčky v jedné ose, od −100 do 100; střed je 0.

- Typ: hodnotový blok

#### `Hodnota joysticku (boolean)` (Začátečník) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*je joystick [prvek] [stisknuto / uvolněno]*: zda je na joysticku prst.

- Typ: hodnotový blok, `true` / `false`

### Bloky D-padu {#d-pad-blocks}

#### `Událost D-padu` (Začátečník) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*když směrový ovladač [prvek] [nahoru / dolů / vlevo / vpravo] tlačítko [stisknuto / uvolněno]*: spustí skript, když je tlačítko D-padu stisknuto nebo uvolněno.

- Typ: blok události

#### `Hodnota D-padu (boolean)` (Začátečník) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*směrová podložka [prvek] [nahoru / dolů / vlevo / vpravo] tlačítko [stisknuto / uvolněno]*: zda je tlačítko D-padu právě stisknuté, nebo uvolněné.

- Typ: hodnotový blok, `true` / `false`

## Posuvníky a otočné ovladače {#sliders-and-knobs}

### Bloky posuvníku {#slider-blocks}

Tyto bloky fungují s posuvníkem i se svislým posuvníkem.

#### `Událost posuvníku` (Začátečník) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*když jezdec [prvek] je [nízký / vysoký / pohnut / uvolněno]*: spustí skript, když jezdec dosáhne dolního nebo horního konce, pohne se nebo je uvolněn.

- Typ: blok události

#### `Hodnota posuvníku (float)` (Začátečník) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*posuvník [prvek]*: poloha jezdce, od 0 do 100, nebo od −100 do 100 se zapnutým **Záporné hodnoty**.

- Typ: hodnotový blok

### Bloky otočného ovladače {#rotary-knob-blocks}

Bloky [otočného ovladače](/docs/Application/Dashboard/ControlTypes#rotary-knob) z placených motivů.

#### `Událost otočného ovladače` (Začátečník) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*když otočný ovladač [prvek] je [otočen / stisknut / puštěn / otočen na minimum / otočen na maximum]*: spustí skript, když se ovladačem otočí, dotknete se ho, pustíte ho nebo dosáhne jednoho ze svých konců.

- Typ: blok události

#### `Hodnota otočného ovladače (float)` (Začátečník) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*hodnota otočného ovladače [prvek]*: poloha ovladače, od 0 do 100, nebo od −100 do 100 s nastavením **Nula uprostřed (-100..100)**.

- Typ: hodnotový blok

#### `Hodnota otočného ovladače (boolean)` (Začátečník) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*otočný ovladač [prvek] [stisknut / na minimu / na maximu] ?*: zda je na ovladači prst, nebo je ovladač na jednom ze svých konců.

- Typ: hodnotový blok, `true` / `false`

## Monitory {#monitor-blocks}

Bloky [monitorů](/docs/Application/Dashboard/Indicators).

### `Zobrazit na monitoru` (Začátečník) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*zobrazit [hodnota] na [prvek] monitor*: zobrazí text nebo hodnotu na prvku **Monitor**.

- Typ: příkazový blok
- Typické použití: zobrazit úroveň baterie, úhel motoru, zařízení připojené k portu hubu nebo název režimu

### `Nastavit hodnotu monitoru` (Začátečník) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*nastavit [hodnota] k [prvek] monitor*: nastaví hodnotu monitoru **Úroveň baterie** nebo **Rychloměr**.

- Typ: příkazový blok

### `Nastavit hodnotu monitoru náklonu` (Začátečník) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*nastavit [hodnota] k [prvek] [náklon / rotace] monitor*: nastaví klopení nebo klonění zobrazené na prvku **Monitor náklonu**.

- Typ: příkazový blok

## Volant a pedály {#steering-wheel-and-pedals}

### Bloky volantu {#steering-wheel-blocks}

Bloky [volantu](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Událost volantu` (Začátečník) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*když volant [prvek] je [pohnut / stisknuto / uvolněno]*: spustí skript, když se volant otočí, nebo když se ho dotknete či ho pustíte.

- Typ: blok události

#### `Hodnota volantu (float)` (Začátečník) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*volant [prvek]*: úhel řízení, od −100 (plně vlevo) do 100 (plně vpravo).

- Typ: hodnotový blok

#### `Hodnota volantu (boolean)` (Začátečník) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*volant [prvek] [stisknuto / uvolněno]*: zda je na volantu prst.

- Typ: hodnotový blok, `true` / `false`

### Bloky pedálů {#pedals-blocks}

Bloky [pedálů](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Událost pedálů` (Začátečník) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*když pedály [prvek] [jakýkoli / brzda / zrychlení] je [pohnut / stisknuto / uvolněno]*: spustí skript, když se pedál pohne, je sešlápnut nebo uvolněn.

- Typ: blok události

#### `Hodnota pedálů (float)` (Začátečník) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedály [prvek] [zrychlení / brzda]*: jak hluboko je sešlápnutý plyn nebo brzda, od 0 do 100.

- Typ: hodnotový blok

#### `Hodnota pedálů (boolean)` (Začátečník) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedál [prvek] [zrychlení / brzda] [stisknuto / uvolněno]*: zda je pedál sešlápnutý.

- Typ: hodnotový blok, `true` / `false`

## Další speciální ovládací prvky {#other-special-controls}

Bloky dalších [speciálních ovládacích prvků](/docs/Application/Dashboard/SpecialControls).

### Bloky převodovky {#gearbox-blocks}

Bloky [manuální a automatické převodovky](/docs/Application/Dashboard/SpecialControls#gear-shifter). Hodnoty převodů: manuální −1 = R, 0 = N, 1…6 = stupně vpřed; automatická −2 = P, −1 = R, 0 = N, 1 = D.

#### `Událost převodovky` (Začátečník) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*když převodovka [prvek] [přeřadí / přeřadí nahoru / přeřadí dolů / zařadí neutrál / zařadí zpátečku / zařadí parkování]*: spustí skript, když se změní převod. **Přeřadí nahoru** a **přeřadí dolů** znamenají přechod na vyšší nebo nižší hodnotu.

- Typ: blok události

#### `Převod` (Začátečník) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*rychlostní stupeň [prvek]*: zařazený stupeň (viz hodnoty výše).

- Typ: hodnotový blok

#### `Stav převodovky (boolean)` (Začátečník) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*převodovka [prvek] [v neutrálu / na zpátečce / na rychlosti vpřed / na parkování] ?*

- Typ: hodnotový blok, `true` / `false`
- **Na rychlosti vpřed** platí v libovolném stupni vpřed manuální převodovky a v D automatické

#### `Počet rychlostních stupňů` (Pokročilý) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*převody z [prvek]*: nastavení převodovky **Počet rychlostních stupňů**.

- Typ: hodnotový blok
- Typické použití: zásuvka *z* bloku *jízda* ze Simulátoru

### Bloky ruční brzdy {#handbrake-blocks}

Bloky [ruční brzdy](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Událost ruční brzdy` (Začátečník) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*když ruční brzda [prvek] je [tažena / zajištěna / uvolněna / puštěna]*: spustí skript, když je páka zatažena, zajištěna, uvolněna nebo puštěna.

- Typ: blok události

#### `Síla ruční brzdy` (Začátečník) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*síla ruční brzdy [prvek]*: jak daleko je páka zatažená, od 0 do 100.

- Typ: hodnotový blok

#### `Stav ruční brzdy (boolean)` (Začátečník) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*ruční brzda [prvek] [zajištěna / uvolněna / tažena] ?* **Tažena** platí, dokud je síla větší než 0.

- Typ: hodnotový blok, `true` / `false`

### Bloky blinkrů {#turn-signals-blocks}

Bloky [blinkrů](/docs/Application/Dashboard/SpecialControls#turn-signals). Vidí ustálený stav signálů, bez blikání.

#### `Událost blinkrů` (Začátečník) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*když blinkry [prvek] [levý blinkr / pravý blinkr / světla] [se zapne / se vypne]*

- Typ: blok události

#### `Stav blinkrů (boolean)` (Začátečník) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*blinkry [prvek] [levý blinkr / pravý blinkr / světla] je zapnutý ?*

- Typ: hodnotový blok, `true` / `false`

### Bloky jízdního kontroléru {#train-controller-blocks}

Bloky [jízdního kontroléru](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Událost jízdního kontroléru` (Začátečník) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*když jízdní kontrolér [prvek] [změnil stupeň / stupeň zvýšen / stupeň snížen / jízda vypnuta / směrová páka přestavena / páka puštěna]*: **Jízda vypnuta** znamená, že se páka vrátila na stupeň 0.

- Typ: blok události

#### `Hodnota jízdního kontroléru (float)` (Začátečník) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*jízdní kontrolér [prvek] [tah / jízdní stupeň / směrová páka]*:

- **tah**: od −100 do 100, stupeň v procentech se znaménkem směru;
- **jízdní stupeň**: 0 až 8;
- **směrová páka**: 1 = vpřed, 0 = neutrál, −1 = vzad.
- Typ: hodnotový blok

#### `Stav jízdního kontroléru (boolean)` (Začátečník) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*jízdní kontrolér [prvek] [vpřed / vzad / v neutrálu / na stupni 0] ?*

- Typ: hodnotový blok, `true` / `false`
