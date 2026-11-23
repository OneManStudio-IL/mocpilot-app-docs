---
id: DashboardControllers
title: Skærmkontrollere
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Skærmkontrollere {#dashboard-controllers}

Disse blokke læser kontrollerne på dashboardet, reagerer, når du bruger dem, og ændrer deres udseende. De findes i kategorien **Skærmkontrollere**, som vises, så snart dashboardet har en kontrol. Hver kontroltype tilføjer sine egne blokke; i en blok vælger du kontrollen ud fra dens navn, for eksempel *BTN1* eller *GEAR1*.

Områder, der bruges nedenfor: De fleste analoge værdier går fra 0 til 100 eller fra −100 til 100, når nul ligger i midten.

På denne side:

- [Blokke til alle kontroller](#blocks-for-all-controls): farve, interaktivitet og lyde
- [Knapper og kontakter](#buttons-and-switches): knap, kontakt, trinkontakt
- [Joysticks og retningspads](#joysticks-and-d-pads)
- [Skydere og drejeknapper](#sliders-and-knobs): skyder, drejeknap
- [Skærme](#monitor-blocks)
- [Rat og pedaler](#steering-wheel-and-pedals)
- [Andre særlige kontroller](#other-special-controls): gearkasse, håndbremse, blinklys, fordelergearkasse, køreregulator

## Blokke til alle kontroller {#blocks-for-all-controls}

### `Indstil kontrollens farve` (Avanceret) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*sæt [kontrol] farve til [farve]*: ændrer en kontrols accentfarve.

- Type: kommandoblok
- Virker med de kontroller, der har en accentfarve (ikke med rattet eller pedalerne)
- Typisk brug: vis en tilstand, for eksempel en knap, der bliver rød, når batteriet er ved at være fladt

### `Indstil kontrollens interaktivitet` (Avanceret) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[aktiver / deaktiver] [kontrol] interaktivitet*: En deaktiveret kontrol reagerer ikke på berøring.

- Type: kommandoblok
- Typisk brug: bloker en kontrol i et stykke tid, for eksempel speederen, indtil et opstartstjek er gennemført

### `En kontrols lyd` (Begynder) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*lyd [lyd] af [kontrol]*: en af en kontrols lyde, til *afspil*-blokkene i kategorien **Lyde**.

- Type: værdiblok
- Vises, når dashboardet har en kontrol med lyde: [rattet](/docs/Application/Dashboard/SpecialControls#steering-wheel) (horn til bil, lastbil og sportsvogn) eller [pedalerne](/docs/Application/Dashboard/SpecialControls#pedals) (bremser til bil, sportsvogn og lastbil, bakalarm)
- Lyden afspilles kun, hvis kontrollens indstilling **Lydeffekter** og appens lyd er slået til

## Knapper og kontakter {#buttons-and-switches}

### Knapblokke {#button-blocks}

#### `Knaphændelse` (Begynder) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*når knappen [kontrol] er [trykket / sluppet]*: kører scriptet, når knappen trykkes ned eller slippes.

- Type: hændelsesblok

#### `Knappens værdi (boolesk)` (Begynder) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*knap [kontrol] [trykket / sluppet]*: om knappen er trykket ned eller sluppet lige nu.

- Type: værdiblok, `true` / `false`

### Kontaktblokke {#switch-blocks}

#### `Kontakthændelse` (Begynder) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*når kontakt [kontrol] er omstillet [aktiveret / off]*: kører scriptet, når kontakten slås til eller fra.

- Type: hændelsesblok

#### `Kontaktens værdi (boolesk)` (Begynder) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*switch [kontrol] [aktiveret / off]*: om kontakten er slået til eller fra.

- Type: værdiblok, `true` / `false`

### Trinvælgerblokke {#stepper-blocks}

Disse blokke virker med trinkontakt og den lodrette trinkontakt.

#### `Trinvælgerhændelse` (Begynder) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*når trinvælger [kontrol] [enhver / nulstil / minus / plus] er [trykket / sluppet]*: kører scriptet, når en knap på trinvælgeren trykkes ned eller slippes (**enhver** betyder en hvilken som helst af dem).

- Type: hændelsesblok

#### `Trinvælgerens værdi (tal)` (Begynder) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*trinswitch [kontrol]*: det aktuelle trinnummer.

- Type: værdiblok

## Joysticks og retningspads {#joysticks-and-d-pads}

### Joystickblokke {#joystick-blocks}

#### `Joystickhændelse` (Begynder) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*når joystick [kontrol] er [op / ned / venstre / højre / flyttet / sluppet]*: kører scriptet, når sticken skubbes i en retning, flyttes overhovedet eller slippes.

- Type: hændelsesblok

#### `Joystickværdi (tal)` (Begynder) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [kontrol] [X-akse / Y-akse]*: stickens position på én akse fra −100 til 100; midten er 0.

- Type: værdiblok

#### `Joystickværdi (boolesk)` (Begynder) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*er joystick [kontrol] [trykket / sluppet]*: om en finger rører joysticket.

- Type: værdiblok, `true` / `false`

### Retningspadblokke {#d-pad-blocks}

#### `Retningspadhændelse` (Begynder) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*når styrepude [kontrol] [op / ned / venstre / højre] knap [trykket / sluppet]*: kører scriptet, når en knap på retningspaden trykkes ned eller slippes.

- Type: hændelsesblok

#### `Retningspadens værdi (boolesk)` (Begynder) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*retningspad [kontrol] [op / ned / venstre / højre] knap [trykket / sluppet]*: om en knap på retningspaden er trykket ned eller sluppet lige nu.

- Type: værdiblok, `true` / `false`

## Skydere og drejeknapper {#sliders-and-knobs}

### Skyderblokke {#slider-blocks}

Disse blokke virker med skyderen og den lodrette skyder.

#### `Skyderhændelse` (Begynder) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*når skyderen [kontrol] er [lav / høj / flyttet / sluppet]*: kører scriptet, når grebet når den nederste eller øverste ende, flyttes eller slippes.

- Type: hændelsesblok

#### `Skyderens værdi (tal)` (Begynder) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*skyderegler [kontrol]*: grebets position fra 0 til 100 eller fra −100 til 100 med **Negative værdier**.

- Type: værdiblok

### Drejeknapblokke {#rotary-knob-blocks}

Blokke til [drejeknappen](/docs/Application/Dashboard/ControlTypes#rotary-knob) i de betalte temaer.

#### `Drejeknaphændelse` (Begynder) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*når drejeknap [kontrol] er [drejet / trykket / sluppet / drejet til minimum / drejet til maksimum]*: kører scriptet, når knappen drejes, berøres, slippes eller når en af sine ender.

- Type: hændelsesblok

#### `Drejeknappens værdi (tal)` (Begynder) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*drejeknappens værdi [kontrol]*: knappens position fra 0 til 100 eller fra −100 til 100 med **Nul i midten (-100..100)**.

- Type: værdiblok

#### `Drejeknappens værdi (boolesk)` (Begynder) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*er drejeknap [kontrol] [trykket / på minimum / på maksimum] ?*: om en finger rører knappen, eller om knappen står ved en af sine ender.

- Type: værdiblok, `true` / `false`

## Skærme {#monitor-blocks}

Blokke til [skærmene](/docs/Application/Dashboard/Indicators).

### `Vis på skærm` (Begynder) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*vis [værdi] på [kontrol] skærm*: viser tekst eller en værdi på en **Skærm**.

- Type: kommandoblok
- Typisk brug: vis batteriniveauet, en motorvinkel, den enhed, der er tilsluttet en port på hubben, eller navnet på en tilstand

### `Sæt skærmens værdi` (Begynder) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*sæt [værdi] til [kontrol] skærm*: indstiller værdien på en **Batteriniveau**- eller **Fartmåler**-skærm.

- Type: kommandoblok

### `Sæt hældningsskærmens værdi` (Begynder) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*sæt [værdi] til [kontrol] [hældning / rulning] skærm*: indstiller den hældning eller rulning, der vises på en **Tilt skærm**.

- Type: kommandoblok

## Rat og pedaler {#steering-wheel-and-pedals}

### Ratblokke {#steering-wheel-blocks}

Blokke til [rattet](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Rathændelse` (Begynder) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*når rat [kontrol] er [flyttet / trykket / sluppet]*: kører scriptet, når rattet drejes, eller når du rører det eller slipper det.

- Type: hændelsesblok

#### `Rattets værdi (tal)` (Begynder) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*ratte [kontrol]*: styrevinklen fra −100 (fuldt til venstre) til 100 (fuldt til højre).

- Type: værdiblok

#### `Rattets værdi (boolesk)` (Begynder) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*rat [kontrol] [trykket / sluppet]*: om en finger rører rattet.

- Type: værdiblok, `true` / `false`

### Pedalblokke {#pedals-blocks}

Blokke til [pedalerne](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Pedalhændelse` (Begynder) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*når pedaler [kontrol] [enhver / bremse / acceleration] er [flyttet / trykket / sluppet]*: kører scriptet, når en pedal bevæger sig, trædes ned eller slippes.

- Type: hændelsesblok

#### `Pedalernes værdi (tal)` (Begynder) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedaler [kontrol] [acceleration / bremse]*: hvor langt speederen eller bremsen er trådt ned, fra 0 til 100.

- Type: værdiblok

#### `Pedalernes værdi (boolesk)` (Begynder) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedal [kontrol] [acceleration / bremse] [trykket / sluppet]*: om en pedal er trådt ned.

- Type: værdiblok, `true` / `false`

## Andre særlige kontroller {#other-special-controls}

Blokke til de andre [særlige kontroller](/docs/Application/Dashboard/SpecialControls).

### Gearkasseblokke {#gearbox-blocks}

Blokke til [den manuelle og den automatiske gearkasse](/docs/Application/Dashboard/SpecialControls#gear-shifter). Gearværdier: manuel −1 = R, 0 = N, 1…6 = fremadgående gear; automatisk −2 = P, −1 = R, 0 = N, 1 = D.

#### `Gearkassehændelse` (Begynder) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*når gearkasse [kontrol] [skifter gear / skifter op / skifter ned / skifter til frigear / sætter i bakgear / skifter til parkering]*: kører scriptet, når gearet skifter. **Skifter op** og **skifter ned** betyder et skift til en højere eller lavere værdi.

- Type: hændelsesblok

#### `Gear` (Begynder) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*gear [kontrol]*: det valgte gear (se værdierne ovenfor).

- Type: værdiblok

#### `Gearkassens tilstand (boolesk)` (Begynder) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*er gearkasse [kontrol] [i frigear / i bakgear / i et fremadgear / i parkering] ?*

- Type: værdiblok, `true` / `false`
- **I et fremadgear** er sand i alle fremadgående gear i den manuelle gearkasse og i D i automatgearet

#### `Antal gear` (Avanceret) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*gear af [kontrol]*: gearkassens indstilling **Antal gear**.

- Type: værdiblok
- Typisk brug: feltet *af* i Simulatorens *kør*-blok

### Håndbremseblokke {#handbrake-blocks}

Blokke til [håndbremsen](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Håndbremsehændelse` (Begynder) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*når håndbremse [kontrol] er [trukket / låst / udløst / sluppet]*: kører scriptet, når håndtaget trækkes, låses, udløses eller slippes.

- Type: hændelsesblok

#### `Håndbremsekraft` (Begynder) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*håndbremsekraft [kontrol]*: hvor langt håndtaget er trukket, fra 0 til 100.

- Type: værdiblok

#### `Håndbremsens tilstand (boolesk)` (Begynder) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*er håndbremse [kontrol] [låst / udløst / trukket] ?* **Trukket** er sand, så længe kraften er over 0.

- Type: værdiblok, `true` / `false`

### Blinklysblokke {#turn-signals-blocks}

Blokke til [blinklysene](/docs/Application/Dashboard/SpecialControls#turn-signals). De ser blinklysenes faste tilstand uden selve blinket.

#### `Blinklyshændelse` (Begynder) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*når blinklys [kontrol] [venstre blinklys / højre blinklys / lys] [tændes / slukkes]*

- Type: hændelsesblok

#### `Blinklysenes tilstand (boolesk)` (Begynder) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*blinklys [kontrol] [venstre blinklys / højre blinklys / lys] er tændt ?*

- Type: værdiblok, `true` / `false`

### Fordelergearkasseblokke {#transfer-case-blocks}

Blokke til [fordelergearkassen](/docs/Application/Dashboard/SpecialControls#transfer-case). Den anden liste i hændelses- og tilstandsblokken har de samme valg:

- **2H**, **4H**, **N**, **4L**: vælgeren står i denne position;
- **firehjulstræk**: vælgeren står i 4H eller 4L;
- **lavgear**: vælgeren står i 4L;
- **forreste spærre**, **centerspærre**, **bageste spærre**: differentialespærren er slået til.

#### `Fordelergearkassehændelse` (Begynder) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*når fordelergearkasse [kontrol] [2H / 4H / N / 4L / firehjulstræk / lavgear / forreste spærre / centerspærre / bageste spærre] [slås til / slås fra]*: **slås til** kører, når valget bliver sandt (vælgeren når positionen, eller spærren slås til), **slås fra**, når det ikke længere er sandt.

- Type: hændelsesblok

#### `Fordelergearkassens tilstand (boolesk)` (Begynder) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*fordelergearkasse [kontrol] [2H / 4H / N / 4L / firehjulstræk / lavgear / forreste spærre / centerspærre / bageste spærre] er slået til ?*

- Type: værdiblok, `true` / `false`

#### `Fordelergearkassens position (tal)` (Begynder) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*fordelergearkassens position [kontrol]*: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Sæt den i stikket *fordelergearkasse* på blokken [kør](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive), så simulatoren bruger fordelergearkassen.

- Type: værdiblok

### Køreregulatorblokke {#train-controller-blocks}

Blokke til [køreregulatoren](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Køreregulatorhændelse` (Begynder) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*når køreregulator [kontrol] [trin ændret / trin hævet / trin sænket / regulator lukket / retningsvælger flyttet / håndtag sluppet]*: **Regulator lukket** betyder, at håndtaget er kommet tilbage til trin 0.

- Type: hændelsesblok

#### `Køreregulatorens værdi (tal)` (Begynder) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*køreregulator [kontrol] [trækkraft / køretrin / retningsvælger]*:

- **trækkraft**: fra −100 til 100, trinnet i procent med retningens fortegn;
- **køretrin**: 0 til 8;
- **retningsvælger**: 1 = fremad, 0 = neutral, −1 = bak.
- Type: værdiblok

#### `Køreregulatorens tilstand (boolesk)` (Begynder) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*er køreregulator [kontrol] [i fremad / i bak / i neutral / på trin 0] ?*

- Type: værdiblok, `true` / `false`
