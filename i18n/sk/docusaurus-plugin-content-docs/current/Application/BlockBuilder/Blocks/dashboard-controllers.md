---
id: DashboardControllers
title: Ovládače na obrazovke
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ovládače na obrazovke {#dashboard-controllers}

Tieto bloky čítajú ovládače na paneli, reagujú, keď ich použijete, a menia ich vzhľad. Sú v kategórii **Ovládače na obrazovke**, ktorá sa zobrazí, hneď ako je na paneli nejaký ovládač. Každý typ ovládača pridáva vlastné bloky; v bloku vyberáte ovládač podľa jeho názvu, napríklad *BTN1* alebo *GEAR1*.

Rozsahy použité nižšie: väčšina analógových hodnôt ide od 0 do 100 alebo od −100 do 100, keď je nula v strede.

Na tejto stránke:

- [Bloky pre všetky ovládače](#blocks-for-all-controls): farba, interaktivita a zvuky
- [Tlačidlá a spínače](#buttons-and-switches): tlačidlo, spínač, krokový spínač
- [Joysticky a D-pady](#joysticks-and-d-pads)
- [Posuvníky a gombíky](#sliders-and-knobs): posuvník, otočný gombík
- [Monitory](#monitor-blocks)
- [Volant a pedále](#steering-wheel-and-pedals)
- [Ďalšie špeciálne ovládače](#other-special-controls): prevodovka, ručná brzda, smerovky, rozdeľovacia prevodovka, ovládač vlaku

## Bloky pre všetky ovládače {#blocks-for-all-controls}

### `Nastaviť farbu ovládača` (Pokročilý) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*nastaviť [ovládač] farba na [farba]*: zmení zvýrazňujúcu farbu ovládača.

- Typ: príkazový blok
- Funguje s ovládačmi, ktoré majú zvýrazňujúcu farbu (nie s volantom ani pedálmi)
- Typické použitie: zobraziť stav, napríklad tlačidlo, ktoré pri slabej batérii sčervenie

### `Nastaviť interaktivitu ovládača` (Pokročilý) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[povoliť / zakázať] [ovládač] interaktivita*: zakázaný ovládač nereaguje na dotyky.

- Typ: príkazový blok
- Typické použitie: dočasne zablokovať ovládač, napríklad plyn, kým sa nedokončí kontrola pri štarte

### `Zvuk ovládača` (Začiatočník) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*zvuk [zvuk] z [ovládač]*: jeden zo zvukov ovládača pre bloky *prehrať zvuk* z kategórie **Zvuky**.

- Typ: hodnotový blok
- Zobrazí sa, keď je na paneli ovládač so zvukmi: [volant](/docs/Application/Dashboard/SpecialControls#steering-wheel) (klaksóny auta, nákladného a športového auta) alebo [pedále](/docs/Application/Dashboard/SpecialControls#pedals) (brzdy auta, športového a nákladného auta, cúvací pípač)
- Zvuk sa prehrá, iba ak je zapnuté nastavenie ovládača **Zvukové efekty** aj zvuk aplikácie

## Tlačidlá a spínače {#buttons-and-switches}

### Bloky tlačidla {#button-blocks}

#### `Udalosť tlačidla` (Začiatočník) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*keď tlačidlo [ovládač] je [stlačený / pustená]*: spustí skript, keď sa tlačidlo stlačí alebo pustí.

- Typ: blok udalosti

#### `Hodnota tlačidla (boolean)` (Začiatočník) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*tlačidlo [ovládač] [stlačený / pustená]*: či je tlačidlo práve stlačené alebo pustené.

- Typ: hodnotový blok, `true` / `false`

### Bloky spínača {#switch-blocks}

#### `Udalosť spínača` (Začiatočník) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*keď prepínač [ovládač] je prehodený [povolené / vypnuté]*: spustí skript, keď sa spínač zapne alebo vypne.

- Typ: blok udalosti

#### `Hodnota spínača (boolean)` (Začiatočník) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*spínač [ovládač] [povolené / vypnuté]*: či je spínač zapnutý alebo vypnutý.

- Typ: hodnotový blok, `true` / `false`

### Bloky krokového spínača {#stepper-blocks}

Tieto bloky fungujú s krokovým spínačom aj zvislým krokovým spínačom.

#### `Udalosť krokového spínača` (Začiatočník) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*keď krokový spínač [ovládač] [akýkoľvek / resetovať / mínus / plus] je [stlačený / pustená]*: spustí skript, keď sa tlačidlo krokového spínača stlačí alebo pustí (**akýkoľvek** znamená ktorékoľvek z nich).

- Typ: blok udalosti

#### `Hodnota krokového spínača (float)` (Začiatočník) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*krokový spínač [ovládač]*: číslo aktuálneho kroku.

- Typ: hodnotový blok

## Joysticky a D-pady {#joysticks-and-d-pads}

### Bloky joysticku {#joystick-blocks}

#### `Udalosť joysticku` (Začiatočník) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*keď je joystick [ovládač] je [hore / dole / vľavo / vpravo / pohnutý / pustená]*: spustí skript, keď páčku vychýlite niektorým smerom, akokoľvek ňou pohnete alebo ju pustíte.

- Typ: blok udalosti

#### `Hodnota joysticku (float)` (Začiatočník) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [ovládač] [os X / os Y]*: poloha páčky v jednej osi od −100 do 100; stred je 0.

- Typ: hodnotový blok

#### `Hodnota joysticku (boolean)` (Začiatočník) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*je joystick [ovládač] [stlačený / pustená]*: či je na joysticku prst.

- Typ: hodnotový blok, `true` / `false`

### Bloky D-padu {#d-pad-blocks}

#### `Udalosť D-padu` (Začiatočník) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*keď smerový ovládač [ovládač] [hore / dole / vľavo / vpravo] tlačidlo [stlačený / pustená]*: spustí skript, keď sa tlačidlo D-padu stlačí alebo pustí.

- Typ: blok udalosti

#### `Hodnota D-padu (boolean)` (Začiatočník) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*smerová podložka [ovládač] [hore / dole / vľavo / vpravo] tlačidlo [stlačený / pustená]*: či je tlačidlo D-padu práve stlačené alebo pustené.

- Typ: hodnotový blok, `true` / `false`

## Posuvníky a gombíky {#sliders-and-knobs}

### Bloky posuvníka {#slider-blocks}

Tieto bloky fungujú s posuvníkom aj zvislým posuvníkom.

#### `Udalosť posuvníka` (Začiatočník) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*keď jazdec [ovládač] je [nízky / vysoký / pohnutý / pustená]*: spustí skript, keď bežec dosiahne dolný alebo horný koniec, pohne sa alebo ho pustíte.

- Typ: blok udalosti

#### `Hodnota posuvníka (float)` (Začiatočník) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*posuvník [ovládač]*: poloha bežca od 0 do 100 alebo od −100 do 100 s voľbou **Záporné hodnoty**.

- Typ: hodnotový blok

### Bloky otočného gombíka {#rotary-knob-blocks}

Bloky [otočného gombíka](/docs/Application/Dashboard/ControlTypes#rotary-knob) z platených tém.

#### `Udalosť otočného gombíka` (Začiatočník) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*keď otočný ovládač [ovládač] je [otočený / stlačený / pustená / otočený na minimum / otočený na maximum]*: spustí skript, keď gombíkom otočíte, dotknete sa ho, pustíte ho alebo keď dosiahne jeden zo svojich koncov.

- Typ: blok udalosti

#### `Hodnota otočného gombíka (float)` (Začiatočník) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*hodnota otočného ovládača [ovládač]*: poloha gombíka od 0 do 100 alebo od −100 do 100 s voľbou **Nula v strede (-100..100)**.

- Typ: hodnotový blok

#### `Hodnota otočného gombíka (boolean)` (Začiatočník) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*otočný ovládač [ovládač] [stlačený / na minime / na maxime] ?*: či je na gombíku prst alebo či je gombík na jednom zo svojich koncov.

- Typ: hodnotový blok, `true` / `false`

## Monitory {#monitor-blocks}

Bloky [monitorov](/docs/Application/Dashboard/Indicators).

### `Zobrazenie na monitore` (Začiatočník) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*zobraziť [hodnota] na monitore [ovládač]*: zobrazí text alebo hodnotu na ovládači **Monitor**.

- Typ: príkazový blok
- Typické použitie: zobraziť úroveň batérie, uhol motora, zariadenie pripojené k portu hubu alebo názov režimu

### `Nastavenie hodnoty monitora` (Začiatočník) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*nastaviť [hodnota] na monitore [ovládač]*: nastaví hodnotu monitora **Úroveň batérie** alebo **Rýchlomer**.

- Typ: príkazový blok

### `Nastavenie hodnoty monitora náklonu` (Začiatočník) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*nastaviť [hodnota] na monitore [ovládač] [klonenie / náklon]*: nastaví klonenie alebo náklon zobrazený na **Monitor náklonu**.

- Typ: príkazový blok

## Volant a pedále {#steering-wheel-and-pedals}

### Bloky volantu {#steering-wheel-blocks}

Bloky [volantu](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Udalosť volantu` (Začiatočník) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*keď volant [ovládač] je [pohnutý / stlačený / pustená]*: spustí skript, keď sa volant otočí alebo keď sa ho dotknete či ho pustíte.

- Typ: blok udalosti

#### `Hodnota volantu (float)` (Začiatočník) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*volant [ovládač]*: uhol natočenia volantu od −100 (úplne vľavo) do 100 (úplne vpravo).

- Typ: hodnotový blok

#### `Hodnota volantu (boolean)` (Začiatočník) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*volant [ovládač] [stlačený / pustená]*: či je na volante prst.

- Typ: hodnotový blok, `true` / `false`

### Bloky pedálov {#pedals-blocks}

Bloky [pedálov](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Udalosť pedálov` (Začiatočník) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*keď pedále [ovládač] [akýkoľvek / brzda / zrýchlenie] je [pohnutý / stlačený / pustená]*: spustí skript, keď sa pedál pohne, stlačí alebo pustí.

- Typ: blok udalosti

#### `Hodnota pedálov (float)` (Začiatočník) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedále [ovládač] [zrýchlenie / brzda]*: ako hlboko je stlačený plyn alebo brzda, od 0 do 100.

- Typ: hodnotový blok

#### `Hodnota pedálov (boolean)` (Začiatočník) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedál [ovládač] [zrýchlenie / brzda] [stlačený / pustená]*: či je pedál stlačený.

- Typ: hodnotový blok, `true` / `false`

## Ďalšie špeciálne ovládače {#other-special-controls}

Bloky ďalších [špeciálnych ovládačov](/docs/Application/Dashboard/SpecialControls).

### Bloky prevodovky {#gearbox-blocks}

Bloky [manuálnej a automatickej prevodovky](/docs/Application/Dashboard/SpecialControls#gear-shifter). Hodnoty stupňov: manuálna −1 = R, 0 = N, 1…6 = stupne dopredu; automatická −2 = P, −1 = R, 0 = N, 1 = D.

#### `Udalosť prevodovky` (Začiatočník) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*keď prevodovka [ovládač] [preradí / preradí hore / preradí dole / zaradí neutrál / zaradí spiatočku / zaradí parkovanie]*: spustí skript, keď sa zmení prevodový stupeň. **Preradí hore** a **preradí dole** znamenajú posun na vyššiu alebo nižšiu hodnotu.

- Typ: blok udalosti

#### `Prevodový stupeň` (Začiatočník) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*rýchlostný stupeň [ovládač]*: zaradený stupeň (pozrite si hodnoty vyššie).

- Typ: hodnotový blok

#### `Stav prevodovky (boolean)` (Začiatočník) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*prevodovka [ovládač] [v neutráli / na spiatočke / na rýchlosti vpred / na parkovaní] ?*

- Typ: hodnotový blok, `true` / `false`
- **Na rýchlosti vpred** platí v ktoromkoľvek stupni dopredu manuálnej prevodovky a v D automatickej

#### `Počet prevodových stupňov` (Pokročilý) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*prevodové stupne [ovládač]*: nastavenie prevodovky **Počet prevodových stupňov**.

- Typ: hodnotový blok
- Typické použitie: políčko *z* bloku *jazdiť* zo Simulátora

### Bloky ručnej brzdy {#handbrake-blocks}

Bloky [ručnej brzdy](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Udalosť ručnej brzdy` (Začiatočník) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*keď ručná brzda [ovládač] je [ťahaná / zaistená / uvoľnená / pustená]*: spustí skript, keď páku potiahnete, zaistíte, uvoľníte alebo pustíte.

- Typ: blok udalosti

#### `Sila ručnej brzdy` (Začiatočník) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*sila ručnej brzdy [ovládač]*: ako veľmi je páka potiahnutá, od 0 do 100.

- Typ: hodnotový blok

#### `Stav ručnej brzdy (boolean)` (Začiatočník) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*ručná brzda [ovládač] [zaistená / uvoľnená / ťahaná] ?* **Ťahaná** platí, kým je sila väčšia ako 0.

- Typ: hodnotový blok, `true` / `false`

### Bloky smeroviek {#turn-signals-blocks}

Bloky [smeroviek](/docs/Application/Dashboard/SpecialControls#turn-signals). Vidia ustálený stav smeroviek, bez blikania.

#### `Udalosť smeroviek` (Začiatočník) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*keď smerovky [ovládač] [ľavá smerovka / pravá smerovka / svetlá] [sa zapne / sa vypne]*

- Typ: blok udalosti

#### `Stav smeroviek (boolean)` (Začiatočník) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*smerovky [ovládač] [ľavá smerovka / pravá smerovka / svetlá] je zapnutý ?*

- Typ: hodnotový blok, `true` / `false`

### Bloky rozdeľovacej prevodovky {#transfer-case-blocks}

Bloky [rozdeľovacej prevodovky](/docs/Application/Dashboard/SpecialControls#transfer-case). Druhý zoznam v blokoch udalosti a stavu ponúka rovnaké voľby:

- **2H**, **4H**, **N**, **4L**: volič je v tejto polohe;
- **pohon všetkých kolies**: volič je v 4H alebo 4L;
- **redukcia**: volič je v 4L;
- **predná uzávierka**, **stredová uzávierka**, **zadná uzávierka**: uzávierka diferenciálu je zapnutá.

#### `Udalosť rozdeľovacej prevodovky` (Začiatočník) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*keď rozdeľovacia prevodovka [ovládač] [2H / 4H / N / 4L / pohon všetkých kolies / redukcia / predná uzávierka / stredová uzávierka / zadná uzávierka] [sa zapne / sa vypne]*: **sa zapne** sa spustí, keď voľba začne platiť (volič dosiahne polohu alebo sa uzávierka zapne), **sa vypne**, keď prestane platiť.

- Typ: blok udalosti

#### `Stav rozdeľovacej prevodovky (boolean)` (Začiatočník) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*rozdeľovacia prevodovka [ovládač] [2H / 4H / N / 4L / pohon všetkých kolies / redukcia / predná uzávierka / stredová uzávierka / zadná uzávierka] je zapnuté ?*

- Typ: hodnotový blok, `true` / `false`

#### `Poloha rozdeľovacej prevodovky (float)` (Začiatočník) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*poloha rozdeľovacej prevodovky [ovládač]*: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Zapojte ho do otvoru *rozdeľovacia prevodovka* bloku [jazdiť](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive), aby simulátor rozdeľovaciu prevodovku používal.

- Typ: hodnotový blok

### Bloky ovládača vlaku {#train-controller-blocks}

Bloky [ovládača vlaku](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Udalosť ovládača vlaku` (Začiatočník) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*keď jazdný ovládač [ovládač] [zmenil stupeň / stupeň zvýšený / stupeň znížený / jazda vypnutá / smerová páka prestavená / páka pustená]*: **Jazda vypnutá** znamená, že sa páka vrátila na stupeň 0.

- Typ: blok udalosti

#### `Hodnota ovládača vlaku (float)` (Začiatočník) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*jazdný ovládač [ovládač] [ťah / jazdný stupeň / smerová páka]*:

- **ťah**: od −100 do 100, stupeň v percentách so znamienkom smeru;
- **jazdný stupeň**: 0 až 8;
- **smerová páka**: 1 = vpred, 0 = neutrál, −1 = vzad.
- Typ: hodnotový blok

#### `Stav ovládača vlaku (boolean)` (Začiatočník) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*jazdný ovládač [ovládač] [vpred / na spiatočke / v neutráli / na stupni 0] ?*

- Typ: hodnotový blok, `true` / `false`
