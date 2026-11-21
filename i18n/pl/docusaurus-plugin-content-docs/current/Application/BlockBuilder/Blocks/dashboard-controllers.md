---
id: DashboardControllers
title: Kontrolery panelu
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Kontrolery panelu

Te bloki odczytują kontrolery na panelu, reagują na ich użycie i zmieniają ich wygląd. Znajdują się w kategorii **Kontrolery ekranowe nawigacyjnego**, która pojawia się, gdy tylko na panelu jest jakiś kontroler. Każdy typ kontrolera dodaje własne bloki; w bloku wybierasz kontroler po nazwie, np. *BTN1* lub *GEAR1*.

Zakresy używane poniżej: większość wartości analogowych mieści się w zakresie od 0 do 100 albo od −100 do 100, gdy zero jest na środku.

Na tej stronie:

- [Bloki dla wszystkich kontrolerów](#blocks-for-all-controls): kolor, interaktywność i dźwięki
- [Przyciski i przełączniki](#buttons-and-switches): przycisk, przełącznik, przełącznik krokowy
- [Joysticki i pady kierunkowe](#joysticks-and-d-pads)
- [Suwaki i pokrętła](#sliders-and-knobs): suwak, pokrętło
- [Monitory](#monitor-blocks)
- [Kierownica i pedały](#steering-wheel-and-pedals)
- [Inne kontrolery specjalne](#other-special-controls): skrzynia biegów, hamulec ręczny, kierunkowskazy, nastawnik jazdy

## Bloki dla wszystkich kontrolerów {#blocks-for-all-controls}

### `Ustaw kolor kontrolera` (Zaawansowany) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*ustawić [kontroler] kolor do [kolor]*: zmienia kolor akcentu kontrolera.

- Typ: blok polecenia
- Działa z kontrolerami, które mają kolor akcentu (nie z kierownicą ani pedałami)
- Typowe zastosowanie: pokazanie stanu, na przykład przycisk, który robi się czerwony przy słabej baterii

### `Ustaw interaktywność kontrolera` (Zaawansowany) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[włączyć / wyłączyć] [kontroler] interaktywność*: wyłączony kontroler nie reaguje na dotyk.

- Typ: blok polecenia
- Typowe zastosowanie: czasowa blokada kontrolera, na przykład przepustnicy do zakończenia kontroli przy starcie

### `Dźwięk kontrolera` (Początkujący) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*dźwięk [dźwięk] z [kontroler]*: jeden z dźwięków kontrolera, do bloków odtwarzania dźwięku z kategorii **Dźwięki**.

- Typ: blok wartości
- Pojawia się, gdy na panelu jest kontroler z dźwiękami: [kierownica](/docs/Application/Dashboard/SpecialControls#steering-wheel) (klaksony samochodu, ciężarówki i samochodu sportowego) lub [pedały](/docs/Application/Dashboard/SpecialControls#pedals) (hamulce samochodu, samochodu sportowego i ciężarówki, sygnał cofania)
- Dźwięk gra tylko wtedy, gdy w kontrolerze włączone jest ustawienie **Efekty dźwiękowe**, a w aplikacji włączony jest dźwięk

## Przyciski i przełączniki {#buttons-and-switches}

### Bloki przycisku {#button-blocks}

#### `Zdarzenie przycisku` (Początkujący) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*gdy przycisk [kontroler] jest [naciśnięty / zwolniony]*: uruchamia skrypt, gdy przycisk zostanie naciśnięty lub zwolniony.

- Typ: blok zdarzenia

#### `Wartość przycisku (logiczna)` (Początkujący) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*przycisk [kontroler] [naciśnięty / zwolniony]*: czy przycisk jest w tej chwili naciśnięty czy zwolniony.

- Typ: blok wartości, `true` / `false`

### Bloki przełącznika {#switch-blocks}

#### `Zdarzenie przełącznika` (Początkujący) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*gdy przełącznik [kontroler] jest przełączony [włączone / wyłącz]*: uruchamia skrypt, gdy przełącznik zostanie włączony lub wyłączony.

- Typ: blok zdarzenia

#### `Wartość przełącznika (logiczna)` (Początkujący) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*przełącznik [kontroler] [włączone / wyłącz]*: czy przełącznik jest włączony czy wyłączony.

- Typ: blok wartości, `true` / `false`

### Bloki przełącznika krokowego {#stepper-blocks}

Te bloki działają z przełącznikiem krokowym i pionowym przełącznikiem krokowym.

#### `Zdarzenie przełącznika krokowego` (Początkujący) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*gdy przełącznik krokowy [kontroler] [jakikolwiek / resetuj / minus / plus] jest [naciśnięty / zwolniony]*: uruchamia skrypt, gdy przycisk przełącznika krokowego zostanie naciśnięty lub zwolniony (**jakikolwiek** oznacza dowolny z nich).

- Typ: blok zdarzenia

#### `Wartość przełącznika krokowego (liczba)` (Początkujący) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*przełącznik krokowy [kontroler]*: numer bieżącego kroku.

- Typ: blok wartości

## Joysticki i pady kierunkowe {#joysticks-and-d-pads}

### Bloki joysticka {#joystick-blocks}

#### `Zdarzenie joysticka` (Początkujący) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*gdy joystick [kontroler] jest [góra / dół / lewo / prawo / przesunięty / zwolniony]*: uruchamia skrypt, gdy drążek zostanie wychylony w danym kierunku, w ogóle przesunięty lub puszczony.

- Typ: blok zdarzenia

#### `Wartość joysticka (liczba)` (Początkujący) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [kontroler] [oś X / oś Y]*: położenie drążka w jednej osi, od −100 do 100; środek to 0.

- Typ: blok wartości

#### `Wartość joysticka (logiczna)` (Początkujący) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*jest joystickiem [kontroler] [naciśnięty / zwolniony]*: czy palec jest na joysticku.

- Typ: blok wartości, `true` / `false`

### Bloki pada kierunkowego {#d-pad-blocks}

#### `Zdarzenie pada kierunkowego` (Początkujący) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*gdy kierunkowy pad [kontroler] [góra / dół / lewo / prawo] przycisk [naciśnięty / zwolniony]*: uruchamia skrypt, gdy przycisk pada kierunkowego zostanie naciśnięty lub zwolniony.

- Typ: blok zdarzenia

#### `Wartość pada kierunkowego (logiczna)` (Początkujący) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*pad kierunkowy [kontroler] [góra / dół / lewo / prawo] przycisk [naciśnięty / zwolniony]*: czy przycisk pada kierunkowego jest w tej chwili naciśnięty czy zwolniony.

- Typ: blok wartości, `true` / `false`

## Suwaki i pokrętła {#sliders-and-knobs}

### Bloki suwaka {#slider-blocks}

Te bloki działają z suwakiem i pionowym suwakiem.

#### `Zdarzenie suwaka` (Początkujący) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*gdy suwak [kontroler] jest [niski / wysoki / przesunięty / zwolniony]*: uruchamia skrypt, gdy uchwyt dojdzie do dolnego lub górnego końca, przesunie się lub zostanie puszczony.

- Typ: blok zdarzenia

#### `Wartość suwaka (liczba)` (Początkujący) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*suwak [kontroler]*: położenie uchwytu, od 0 do 100 albo od −100 do 100 z opcją **Wartości ujemne**.

- Typ: blok wartości

### Bloki pokrętła {#rotary-knob-blocks}

Bloki [pokrętła](/docs/Application/Dashboard/ControlTypes#rotary-knob) z płatnych motywów.

#### `Zdarzenie pokrętła` (Początkujący) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*gdy pokrętło [kontroler] jest [obrócone / wciśnięte / puszczone / obrócone do minimum / obrócone do maksimum]*: uruchamia skrypt, gdy pokrętło zostanie obrócone, dotknięte, puszczone lub dojdzie do jednego z końców.

- Typ: blok zdarzenia

#### `Wartość pokrętła (liczba)` (Początkujący) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*wartość pokrętła [kontroler]*: położenie pokrętła, od 0 do 100 albo od −100 do 100 z opcją **Zero na środku (-100..100)**.

- Typ: blok wartości

#### `Wartość pokrętła (logiczna)` (Początkujący) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*pokrętło [kontroler] [wciśnięte / na minimum / na maksimum] ?*: czy palec jest na pokrętle albo czy pokrętło jest na jednym z końców.

- Typ: blok wartości, `true` / `false`

## Monitory {#monitor-blocks}

Bloki [monitorów](/docs/Application/Dashboard/Indicators).

### `Pokazanie na monitorze` (Początkujący) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*pokaż [wartość] na [kontroler] monitor*: pokazuje tekst lub wartość na kontrolerze **Monitor**.

- Typ: blok polecenia
- Typowe zastosowanie: pokazanie poziomu baterii, kąta silnika, urządzenia podłączonego do portu huba lub nazwy trybu

### `Ustawienie wartości monitora` (Początkujący) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*ustawić [wartość] do [kontroler] monitor*: ustawia wartość monitora **Poziom baterii** lub **Prędkościomierz**.

- Typ: blok polecenia

### `Ustawienie wartości monitora nachylenia` (Początkujący) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*ustawić [wartość] do [kontroler] [pochylenie / obrót] monitor*: ustawia pochylenie lub przechył pokazywany na **Monitorze nachylenia**.

- Typ: blok polecenia

## Kierownica i pedały {#steering-wheel-and-pedals}

### Bloki kierownicy {#steering-wheel-blocks}

Bloki [kierownicy](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Zdarzenie kierownicy` (Początkujący) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*gdy kierownica [kontroler] jest [przesunięty / naciśnięty / zwolniony]*: uruchamia skrypt, gdy kierownica się obróci albo gdy jej dotkniesz lub ją puścisz.

- Typ: blok zdarzenia

#### `Wartość kierownicy (liczba)` (Początkujący) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*koło kierownicy [kontroler]*: kąt skrętu, od −100 (do oporu w lewo) do 100 (do oporu w prawo).

- Typ: blok wartości

#### `Wartość kierownicy (logiczna)` (Początkujący) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*kierownica [kontroler] [naciśnięty / zwolniony]*: czy palec jest na kierownicy.

- Typ: blok wartości, `true` / `false`

### Bloki pedałów {#pedals-blocks}

Bloki [pedałów](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Zdarzenie pedałów` (Początkujący) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*gdy pedały [kontroler] [jakikolwiek / hamulec / przyspieszenie] jest [przesunięty / naciśnięty / zwolniony]*: uruchamia skrypt, gdy pedał się przesunie, zostanie naciśnięty lub zwolniony.

- Typ: blok zdarzenia

#### `Wartość pedałów (liczba)` (Początkujący) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedały [kontroler] [przyspieszenie / hamulec]*: jak mocno wciśnięty jest pedał gazu lub hamulca, od 0 do 100.

- Typ: blok wartości

#### `Wartość pedałów (logiczna)` (Początkujący) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedał [kontroler] [przyspieszenie / hamulec] [naciśnięty / zwolniony]*: czy pedał jest wciśnięty.

- Typ: blok wartości, `true` / `false`

## Inne kontrolery specjalne {#other-special-controls}

Bloki pozostałych [kontrolerów specjalnych](/docs/Application/Dashboard/SpecialControls).

### Bloki skrzyni biegów {#gearbox-blocks}

Bloki [manualnej i automatycznej skrzyni biegów](/docs/Application/Dashboard/SpecialControls#gear-shifter). Wartości biegów: manualna −1 = R, 0 = N, 1…6 = biegi do przodu; automatyczna −2 = P, −1 = R, 0 = N, 1 = D.

#### `Zdarzenie skrzyni biegów` (Początkujący) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*gdy skrzynia biegów [kontroler] [zmienia bieg / zmienia bieg w górę / zmienia bieg w dół / wrzuca luz / wrzuca wsteczny / włącza parkowanie]*: uruchamia skrypt, gdy zmieni się bieg. **zmienia bieg w górę** i **zmienia bieg w dół** oznaczają przejście na wyższą lub niższą wartość.

- Typ: blok zdarzenia

#### `Bieg` (Początkujący) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*bieg [kontroler]*: włączony bieg (zobacz wartości powyżej).

- Typ: blok wartości

#### `Stan skrzyni biegów (logiczny)` (Początkujący) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*skrzynia biegów [kontroler] [na luzie / na wstecznym / na biegu do przodu / na parkowaniu] ?*

- Typ: blok wartości, `true` / `false`
- **na biegu do przodu** daje prawdę na dowolnym biegu do przodu manualnej skrzyni i na D automatycznej

#### `Liczba biegów` (Zaawansowany) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*biegi z [kontroler]*: ustawienie **Liczba biegów** skrzyni biegów.

- Typ: blok wartości
- Typowe zastosowanie: gniazdo *z* bloku *jedź* Symulatora

### Bloki hamulca ręcznego {#handbrake-blocks}

Bloki [hamulca ręcznego](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Zdarzenie hamulca ręcznego` (Początkujący) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*gdy hamulec ręczny [kontroler] jest [ciągnięty / zablokowany / odblokowany / puszczony]*: uruchamia skrypt, gdy dźwignia zostanie pociągnięta, zablokowana, odblokowana lub puszczona.

- Typ: blok zdarzenia

#### `Siła hamulca ręcznego` (Początkujący) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*siła hamulca ręcznego [kontroler]*: jak mocno pociągnięta jest dźwignia, od 0 do 100.

- Typ: blok wartości

#### `Stan hamulca ręcznego (logiczny)` (Początkujący) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*hamulec ręczny [kontroler] [zablokowany / odblokowany / ciągnięty] ?* **ciągnięty** daje prawdę, dopóki siła jest większa od 0.

- Typ: blok wartości, `true` / `false`

### Bloki kierunkowskazów {#turn-signals-blocks}

Bloki [kierunkowskazów](/docs/Application/Dashboard/SpecialControls#turn-signals). Widzą stały stan kierunkowskazów, bez migania.

#### `Zdarzenie kierunkowskazów` (Początkujący) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*gdy kierunkowskazy [kontroler] [lewy kierunkowskaz / prawy kierunkowskaz / światła] [włącza się / wyłącza się]*

- Typ: blok zdarzenia

#### `Stan kierunkowskazów (logiczny)` (Początkujący) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*kierunkowskazy [kontroler] [lewy kierunkowskaz / prawy kierunkowskaz / światła] jest włączony ?*

- Typ: blok wartości, `true` / `false`

### Bloki nastawnika jazdy {#train-controller-blocks}

Bloki [nastawnika jazdy](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Zdarzenie nastawnika jazdy` (Początkujący) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*gdy nastawnik jazdy [kontroler] [zmieniona pozycja / pozycja zwiększona / pozycja zmniejszona / nastawnik na zero / nawrotnik przestawiony / dźwignia puszczona]*: **nastawnik na zero** oznacza, że dźwignia wróciła na pozycję 0.

- Typ: blok zdarzenia

#### `Wartość nastawnika jazdy (liczba)` (Początkujący) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*nastawnik jazdy [kontroler] [siła pociągowa / pozycja jazdy / nawrotnik]*:

- **siła pociągowa**: od −100 do 100, pozycja w procentach ze znakiem kierunku;
- **pozycja jazdy**: od 0 do 8;
- **nawrotnik**: 1 = do przodu, 0 = położenie neutralne, −1 = do tyłu.
- Typ: blok wartości

#### `Stan nastawnika jazdy (logiczny)` (Początkujący) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*nastawnik jazdy [kontroler] [do przodu / do tyłu / w położeniu neutralnym / na pozycji 0] ?*

- Typ: blok wartości, `true` / `false`
