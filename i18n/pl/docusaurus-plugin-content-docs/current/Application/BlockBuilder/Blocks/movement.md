---
id: Movement
title: Ruch
description: "Bloki ruchu sterują robotem z dwoma silnikami na hubie MINDSTORMS Robot Inventor lub SPIKE: jazda, skręcanie, sterowanie jak w czołgu, prędkość, przyspieszenie i zatrzymanie."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Ruch

Bloki ruchu sterują robotem z dwoma kołami, z których każde obraca własny silnik, jak jedną całością: „jedź do przodu 10 cm”, „obróć się zgodnie z ruchem wskazówek zegara o 1 obrót”, „skręcaj 30 w prawo”. To te same bloki ruchu co w aplikacji LEGO® MINDSTORMS® Robot Inventor. Kategoria pojawia się w palecie jako pierwsza, gdy profil ma [hub Robot Inventor lub SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Wszystkie jej bloki mają czarno-białą ikonę huba.

## Jak działa ruch {#how-movement-works}

- **Silniki ruchu.** Domyślnie lewe koło jest na porcie **A**, a prawe na porcie **B**. Inne porty wybierzesz blokiem [ustaw silniki ruchu na](#block_ri_move_set_pair). W robocie oba silniki są zwrócone do siebie, dlatego MOCPilot obraca prawy w przeciwną stronę: dodatnia prędkość zawsze prowadzi robota do przodu.
- **Prędkość ruchu.** Bloki bez własnej prędkości używają prędkości ruchu: **50 %**, dopóki nie zmieni jej blok [ustaw prędkość ruchu na](#block_ri_move_set_speed).
- **Skręt** to liczba od −100 do 100. **0** oznacza jazdę prosto. Wartości dodatnie skręcają w prawo, ujemne w lewo: wewnętrzne koło zwalnia tym bardziej, im bliżej ±100 jest skręt (przy 50 obraca się z połową prędkości). Przy **100** lub **−100** koła obracają się w przeciwne strony, a robot obraca się w miejscu.
- **Jednostki.** Odległość można podać w `cm`, `cale`, `obroty` lub `stopnie` silników, a wiele bloków przyjmuje też `sekundy`. Centymetry i cale korzystają z drogi na jeden obrót silnika: domyślnie **17,5 cm** (koło Robot Inventor), zmienia się ją blokiem [ustaw 1 obrót silnika na](#block_ri_move_set_distance). Ujemna odległość prowadzi robota w drugą stronę.
- **Czekanie.** Bloki z odległością (`jedź … o …`) czekają, aż robot przejedzie tę odległość. Bloki, które zaczynają się od **zacznij jechać**, od razu przechodzą dalej: robot jedzie, dopóki nie wykona się **zatrzymaj ruch** albo inny blok ruchu.

## Ustawienia ruchu {#movement-settings}

### `ustaw silniki ruchu na … …` (Początkujący) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Wybiera porty silnika lewego i prawego koła. Domyślnie: **A** i **B**. Oba porty muszą być różne.

### `ustaw prędkość ruchu na … %` (Początkujący) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Ustawia prędkość, od −100 do 100 %, dla bloków ruchu, które nie mają własnej prędkości. Domyślnie: 50 %. Nie uruchamia silników.

### `ustaw 1 obrót silnika na … cm / cale drogi` (Zaawansowany) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Mówi MOCPilot, jak daleko robot przejeżdża przy jednym obrocie silnika, żeby odległości w centymetrach i calach wychodziły dokładnie. Domyślnie: 17,5 cm. Zmierz swojego robota: niech **jedzie do przodu o 1 obrót**, i zmierz przejechaną drogę. Wartość 0 jest ignorowana.

### `ustaw przyspieszenie ruchu na …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Jak szybko silniki ruchu przyspieszają i zwalniają.

- Opcje: `domyślny`, `szybki` (0,1 s), `zrównoważony` (0,35 s), `gładki` (czyli płynny, 0,8 s), `wolny` (1,2 s), `bardzo wolny` (2 s): czas od postoju do pełnej prędkości.

### `ustaw silniki ruchu na … przy zatrzymaniu` (Zaawansowany) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Co robią silniki, gdy robot się zatrzymuje.

- `toczenie`: silniki obracają się swobodnie, a robot toczy się do zatrzymania.
- `hamulec` (domyślnie): silniki hamują.
- `utrzymaj pozycję`: silniki aktywnie utrzymują swoją pozycję, nawet jeśli popchniesz robota.

## Jazda {#moving}

### `jedź … o …` (Początkujący) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Porusza robota z prędkością ruchu i czeka, aż skończy.

- Kierunek: `do przodu`, `do tyłu`, `zgodnie z ruchem wskazówek zegara`, `przeciwnie do ruchu wskazówek zegara` (dwa ostatnie obracają robota w miejscu).
- Jednostki: `cm`, `cale`, `obroty`, `stopnie`, `sekundy`. Domyślnie: 10 cm.

### `jedź … o …` (ze skrętem) (Początkujący) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Porusza robota z podanym skrętem (od −100 do 100) i prędkością ruchu i czeka, aż skończy. Przy skręcie 30 robot jedzie po łuku w prawo.

- Jednostki: `cm`, `cale`, `obroty`, `stopnie`, `sekundy`.

### `jedź … o … w … % prędkość` (Zaawansowany) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
To samo, ale z własną prędkością zamiast prędkości ruchu.

- Jednostki: `cm`, `cale`, `obroty`, `stopnie`.

### `jedź … w … … % prędkość` (Zaawansowany) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Sterowanie jak w czołgu na określoną odległość: ustawia osobno prędkość lewego i prawego koła (od −100 do 100 % każde) i czeka, aż robot przejedzie tę odległość.

- Jednostki: `cm`, `cale`, `obroty`, `stopnie`, `sekundy`.

### `zacznij jechać …` (Początkujący) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Rusza z podanym skrętem i prędkością ruchu i od razu przechodzi do następnego bloku.

### `zacznij jechać … w … % prędkość` (Zaawansowany) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Rusza z podanym skrętem i prędkością.

- Typowe zastosowanie: wstaw suwak z panelu do pola skrętu, a pedał do pola prędkości.

### `zacznij jechać … w … % mocy` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Jak blok powyżej, ale ustawia **moc** silników zamiast regulowanej prędkości: silniki nie próbują utrzymać prędkości, gdy robot jedzie pod górę albo wiezie ładunek.

### `zacznij jechać z … … % prędkość` (Zaawansowany) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Sterowanie jak w czołgu: uruchamia lewe i prawe koło, każde z własną prędkością.

### `zacznij jechać z … … % mocy` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Sterowanie jak w czołgu z mocą silnika każdego koła zamiast regulowanej prędkości.

### `zatrzymaj ruch` (Początkujący) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Zatrzymuje oba silniki ruchu tak, jak określa **ustaw silniki ruchu na … przy zatrzymaniu** (domyślnie hamulcem).

### `czy ruch został przerwany?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true`, jeśli ostatni ruch się nie skończył: przerwał go inny blok ruchu albo **zatrzymaj ruch**.
