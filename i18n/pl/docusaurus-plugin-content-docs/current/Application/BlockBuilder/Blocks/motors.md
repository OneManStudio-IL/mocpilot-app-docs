---
id: Motors
title: Silniki
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Silniki

Bloki silników uruchamiają, zatrzymują i ustawiają w pozycji silniki podłączone do portów huba oraz dostrajają ich ruch. Kategoria pojawia się, gdy hub w profilu ma porty silników. W każdym bloku wybierasz hub i jeden lub więcej portów.

Niektóre bloki wymagają silnika z wbudowanym czujnikiem obrotu (enkoderem), takiego jak silniki kątowe Technic, oraz huba, który potrafi nim sterować. Takie bloki oznaczono jako „silniki z enkoderem”. Nie są dostępne dla hubów SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 i Mould King. Technic Move Hub ma własny zestaw bloków, opisany na końcu tej strony.

## Uruchamianie silników {#running-motors}

### `ustaw prędkość na …` (Zaawansowany) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Ustawia prędkość (od −100 do 100 %), z jaką na tych portach działają bloki **uruchom silnik** i **uruchom … przez**. Sam blok nie uruchamia silnika.

### `uruchom silnik …` (Początkujący) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Uruchamia silnik w wybranym kierunku z prędkością ustawioną blokiem **ustaw prędkość na**.

- Kierunek: zgodnie z ruchem wskazówek zegara lub przeciwnie

### `uruchom silnik na … % prędkość` (Początkujący) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Uruchamia silnik z podaną prędkością, od −100 do 100 %. Ujemna prędkość obraca go w drugą stronę.

- Typowe zastosowanie: jazda sterowana joystickiem lub suwakiem: wstaw wartość kontrolera do pola prędkości.

### `zatrzymaj silnik` (Początkujący) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Zatrzymuje silnik.

### `uruchom … przez …` (Zaawansowany) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Obraca silnik w wybranym kierunku przez podaną liczbę obrotów, stopni lub sekund.

- Kierunek: zgodnie z ruchem wskazówek zegara lub przeciwnie
- Jednostki: `obroty`, `stopnie`, `sekundy`
- Tylko silniki z enkoderem.

### `uruchom na … w … % prędkość` (Zaawansowany) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Obraca silnik przez podaną liczbę obrotów, stopni lub sekund z podaną prędkością.

- Jednostki: `obroty`, `stopnie`, `sekundy`
- Tylko silniki z enkoderem.

## Pozycja {#position}

### `iść … do pozycji …` (Zaawansowany) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Obraca silnik do pozycji absolutnej (własnego znacznika zera silnika).

- Droga: `najkrótsza droga`, `zgodnie z ruchem wskazówek zegara`, `przeciwnie do ruchu wskazówek zegara`
- Tylko silniki z enkoderem.

### `przejdź do względnej pozycji … w … % prędkość` (Początkujący) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Obraca silnik do pozycji podanej w stopniach, liczonej od punktu ustawionego blokiem **ustaw pozycję względną**.

- Typowe zastosowanie: skręcanie serwem, gdy wartość joysticka określa kąt.
- Tylko silniki z enkoderem; w BuWizz 3 użyj bloku poniżej.

### `przejdź do względnej pozycji …` (BuWizz 3) (Początkujący) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Wersja powyższego bloku dla BuWizz 3, bez pola prędkości.

- Huby: BuWizz 3 z silnikami z enkoderem.

### `ustaw pozycję względną …` (Początkujący) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Przyjmuje, że bieżąca pozycja silnika ma podaną wartość. Od niej liczone są pozycje względne.

- Tylko silniki z enkoderem.

### `skalibruj zębatkę … środek … stopnie …` (Początkujący) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Wyznacza środek i zakres ruchu zębatki układu kierowniczego.

- Silnik przesuwa zębatkę do obu końców, mierzy, jak daleko może się przesunąć, i zapisuje wynik w dwóch zmiennych wstawionych do pól: pozycję środka i zakres w stopniach. Zębatka zatrzymuje się na środku, ale jej pozycja względna jest tam równa wartości środka, a nie 0, więc zaraz po tym bloku dodaj **ustaw pozycję względną** 0; potem skręcaj za pomocą `zakres × joystick / 100`.
- Układ kierowniczy musi mieć twarde mechaniczne ograniczniki po obu stronach (koniec zębatki lub przekładni).
- Tylko silniki z enkoderem.

## Ustawienia silnika {#motor-settings}

### `ustaw silnik na … przy zatrzymaniu` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Określa, co robi silnik, gdy się zatrzymuje.

- `hamulec`: zatrzymuje się szybko.
- `utrzymaj pozycję`: aktywnie utrzymuje swoją pozycję (przydatne przy skręcaniu).
- `toczenie`: swobodnie wytraca prędkość.
- Tylko silniki z enkoderem.

### `włącz wykrywanie zablokowania …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Włącza lub wyłącza wykrywanie zablokowania. Gdy jest włączone, zablokowany silnik się poddaje, zamiast dalej napierać, więc blok czekający na silnik może się zakończyć.

- Huby: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blok ma ikonę huba).

### `ustaw przyspieszenie na …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Określa, jak szybko silnik przyspiesza.

- Opcje: `domyślny`, `szybki`, `zrównoważony`, `gładki`, `wolny`, `bardzo wolny`
- Tylko silniki z enkoderem.

### `ustaw spowolnienie na …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Określa, jak szybko silnik zwalnia.

- Opcje: `domyślny`, `szybki`, `zrównoważony`, `gładki`, `wolny`, `bardzo wolny`
- Tylko silniki z enkoderem.

## Wartości silnika {#motor-values}

### `pozycja` (Początkujący) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Zwraca pozycję absolutną silnika.

- Tylko silniki z enkoderem.

### `pozycja względna` (Początkujący) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Zwraca pozycję względną silnika w stopniach.

- Tylko silniki z enkoderem.

### `prędkość` (Początkujący) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Zwraca bieżącą prędkość silnika.

### `moc` (Zaawansowany) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Zwraca bieżącą moc silnika.

- Huby: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blok ma ikonę huba).

## Robot Inventor {#robot-inventor-motors}

Te bloki pochodzą z aplikacji Robot Inventor i działają tylko z [hubami MINDSTORMS Robot Inventor i SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Mają ikonę huba. Do sterowania robotem z dwoma kołami służą bloki [Ruch](/docs/Application/BlockBuilder/Blocks/Movement).

### `uruchom silnik na … % mocy` (Zaawansowany) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Uruchamia silniki na wybranych portach z podaną mocą, od −100 do 100 % (domyślnie 75 %). W odróżnieniu od **uruchom silnik na … % prędkość** silnik nie utrzymuje regulowanej prędkości: pod obciążeniem zwalnia, jak silnik bez enkodera.

### `czy silnik został przerwany?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true`, jeśli ostatnie polecenie silnika na tym porcie się nie skończyło, bo przerwał je inny blok silnika na tym samym porcie.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub napędza swoje wbudowane silniki tymi blokami zamiast powyższych bloków portów.

### `uruchom silniki przy … % prędkość` (Początkujący) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Uruchamia silniki napędu z podaną prędkością.

### `impuls mocy` (Początkujący) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Wysyła impuls mocy do silników napędu.

- Typowe zastosowanie: krótkie przyspieszenie przed kolejnymi blokami.

### `zatrzymaj silniki` (Początkujący) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Zatrzymuje silniki napędu.

### `ustaw hamulec silnika …` (Początkujący) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Włącza lub wyłącza hamulec silników napędu.

- Opcje: `wyłącz`, `włączone`

### `ustaw drążek kierowniczy na …` (Początkujący) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Ustawia układ kierowniczy w podanej pozycji.

### `kalibruj drążek kierowniczy` (Początkujący) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibruje układ kierowniczy własnym algorytmem huba, który automatycznie wyznacza zakres skrętu.

- Układ kierowniczy musi mieć twarde mechaniczne ograniczniki (na przykład końce zębatki).
