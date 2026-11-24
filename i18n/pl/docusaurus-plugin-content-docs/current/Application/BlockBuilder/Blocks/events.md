---
id: Events
title: Wydarzenia
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Wydarzenia

Kategoria **Wydarzenia** zawiera bloki, które uruchamiają skrypty, gdy coś się wydarzy, oraz bloki wysyłające wiadomości między skryptami. Wiadomościami zarządzasz za pomocą przycisków **Dodaj wiadomość** i **Usuń wiadomość** na górze kategorii.

## Podstawowe zdarzenia {#core-events}

### `gdy program się uruchamia` (Początkujący) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Uruchamia swój skrypt raz, przy starcie programu.

- Typowe zastosowanie: ustawienie początkowych wartości zmiennych, przywrócenie silników do stanu początkowego, wyświetlenie komunikatu „gotowe”.

### `gdy …` (Zaawansowany) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Uruchamia swój skrypt, gdy warunek w polu zmieni się z fałszu na prawdę. Podczas działania skryptu blok czeka; uruchamia się ponownie dopiero wtedy, gdy warunek stanie się fałszywy, a potem znów prawdziwy.

- Typowe zastosowanie: reakcja na stan, na przykład `gdy timer > 5 i przełącznik jest włączony`.

### `gdy timer > …` (Zaawansowany) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Uruchamia swój skrypt, gdy stoper programu przekroczy podaną wartość (w sekundach).

- Typowe zastosowanie: opóźnione działania, fazy czasowe. Stoper wyzerujesz blokiem **zresetuj timer** (Czujniki).

### `kiedy otrzymam …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Uruchamia swój skrypt, gdy wybrana wiadomość zostanie przekazana.

- Typowe zastosowanie: koordynacja kilku skryptów.

### `przekazać …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Wysyła wiadomość do każdego skryptu, który zaczyna się od bloku **kiedy otrzymam** z tą wiadomością, i od razu przechodzi dalej.

- Typowe zastosowanie: polecenie innym skryptom, aby ruszyły, bez czekania na nie.

### `przekazać … i czekać` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Wysyła wiadomość i wstrzymuje ten skrypt, dopóki wszystkie skrypty, które ją otrzymały, nie zakończą działania.

- Typowe zastosowanie: sekwencje krok po kroku, w których liczy się kolejność.

## Zdarzenia hubów {#hub-events}

Te bloki pojawiają się, gdy obsługuje je hub w profilu. Nie istnieją dla hubów Mould King.

### `gdy … … przycisk …` (Początkujący) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Uruchamia się, gdy przycisk na hubie zostanie naciśnięty lub zwolniony.

- Opcje stanu: `naciśnięty`, `zwolniony`, `zmieniony`
- Huby: huby LEGO Powered Up, WeDo 2.0 i Robot Inventor. Lista przycisków zależy od huba.

### `gdy … jest połączony / rozłączony` (Początkujący) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Uruchamia się, gdy hub się połączy lub rozłączy.

- Typowe zastosowanie: bezpieczne zatrzymanie modelu po utracie połączenia i przywrócenie jego stanu, gdy połączenie wróci.

### `gdy … % bateria zmieniona` (Początkujący) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Uruchamia się, gdy zmieni się poziom baterii zgłaszany przez hub.

- Huby: te, które zgłaszają poziom baterii.
- Typowe zastosowanie: ostrzeżenie o słabej baterii, przejście w tryb oszczędzania energii.

### `gdy … dane akcelerometru zostały zmienione` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Uruchamia się, gdy zmienią się wartości akcelerometru huba.

- Huby: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `gdy … nachylenie … kąt został zmieniony` (Początkujący) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Uruchamia się, gdy zmieni się kąt nachylenia huba.

- Opcje kąta: `jakikolwiek`, `pochylenie`, `obrót`, `ryskanie`
- Huby: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `ryskanie` jest dostępne tylko w Technic Hub i Robot Inventor.

### `gdy … orientacja została zmieniona` (Początkujący) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Uruchamia się, gdy zmieni się orientacja huba, czyli gdy do góry zwróci się inna strona huba.

- Huby: te same co dla zdarzenia nachylenia.

## Zdarzenia czujników {#sensor-events}

Te zdarzenia odczytują czujnik podłączony do portu huba. Huby: City Hub, Technic Hub, BOOST Move Hub i hub MINDSTORMS Robot Inventor (nie SBrick, BuWizz, WeDo 2.0 ani Mould King).

### Czujnik Technic: `gdy kolor jest …` (Początkujący) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Uruchamia się, gdy czujnik koloru Technic zobaczy wybrany kolor.

### Czujnik Technic: `gdy … bliżej niż / dalej niż / dokładnie na …` (Początkujący) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Uruchamia się, gdy odległość zmierzona przez czujnik odległości Technic spełni warunek.

- Opcje porównania: `bliżej niż`, `dalej niż`, `dokładnie na`
- Jednostki: `mm`, `cm`, `cal`, `%`

### Czujnik BOOST: `gdy … bliżej niż / dalej niż / dokładnie na …` (Początkujący) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Uruchamia się, gdy odległość zmierzona przez czujnik koloru i odległości BOOST spełni warunek.

- Opcje porównania: `bliżej niż`, `dalej niż`, `dokładnie na`
- Jednostki: `%`, `cm`, `cal`

### Czujnik BOOST: `gdy kolor jest …` (Początkujący) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Uruchamia się, gdy czujnik koloru i odległości BOOST zobaczy wybrany kolor.

## Wydarzenia Robot Inventor {#robot-inventor-events}

Te wydarzenia pochodzą z aplikacji Robot Inventor i działają tylko z [hubami MINDSTORMS Robot Inventor i SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Mają ikonę huba. Odpowiadające im wartości są na stronie [Czujniki](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `kiedy hub jest …` (Początkujący) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Uruchamia się raz za każdym razem, gdy hub zostanie `stuknięty`, `stuknięty dwukrotnie`, `potrząśnięty` (domyślnie) albo gdy spada (opcja `spada`; w aplikacji blok czyta się wtedy „kiedy hub jest spada”).

### `gdy … jest u góry` (Początkujący) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Uruchamia się, gdy wybrana strona huba obróci się do góry: `przód` (matryca świetlna, domyślnie), `góra`, `prawy bok`, `tył`, `spód` lub `lewy bok`.

### `kiedy hub jest przechylony …` (Zaawansowany) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Uruchamia się, gdy hub zostanie przechylony `w górę`, `w dół`, `w lewo`, `w prawo` lub w dowolnym kierunku (`jakikolwiek`, domyślnie), o około 12° lub więcej.

### `gdy … naciśnięty / mocno naciśnięty / zwolniony` (Początkujący) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Uruchamia się, gdy czujnik siły na wybranym porcie zostanie naciśnięty, mocno naciśnięty (siłą ponad 5 niutonów) lub zwolniony.

### `kiedy hub odbierze sygnał …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Uruchamia się, gdy ten hub odbierze od innego huba sygnał radiowy o tej nazwie. Jego wartość odczytasz blokiem [odebrany sygnał … wartość](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
