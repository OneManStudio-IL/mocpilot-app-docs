---
id: Simulator
title: Symulator
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Symulator

**Symulator** zamienia pedały, skrzynię biegów i hamulec ręczny z panelu w samochód, który zachowuje się jak prawdziwy: przyspiesza z bezwładnością, toczy się, hamuje, cofa i zmienia biegi. Kontrolery podają tylko swoje surowe wartości; program buduje z nich samochód i wysyła jego prędkość do silników.

Kategoria jest widoczna, dopóki na panelu są pedały, skrzynia biegów lub hamulec ręczny. Bloki odczytujące te kontrolery opisano w sekcji [Kontrolery panelu](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Pojazdy {#vehicles}

Naciśnij **Utwórz pojazd** na górze kategorii i nadaj mu nazwę (na przykład „Pojazd 1”). Bloki pojawiają się, gdy program ma co najmniej jeden pojazd, a w każdym bloku wybierasz, z którym pojazdem pracuje. Do zarządzania pojazdami służą **Zmień nazwę pojazdu** i **Usuń pojazd**; nie można usunąć pojazdu, dopóki jego bloki są w programie, a ostatnich pedałów, skrzyni biegów ani hamulca ręcznego nie można usunąć z panelu, dopóki używane są bloki Symulatora.

<Screenshot name="blocks-simulator" alt="Kategoria Symulator z blokiem jazdy podpiętym pod zdarzenie pedałów" width={900} />

Typowy samochód: podepnij blok **jedź** pod zdarzenie pedałów, połącz pedały z polami `gaz` i `hamulec`, a w jego wnętrzu uruchamiaj silnik napędu z `prędkością` pojazdu:

```text
gdy pedały PDL1 jakikolwiek jest przesunięty
    Pojazd 1  jedź  gaz (pedały PDL1 przyspieszenie)  hamulec (pedały PDL1 hamulec)
        uruchom silnik na (prędkość z Pojazd 1) % prędkość  (Hub 1, port A)
```

Pętla `powtarzać zawsze` nie jest potrzebna: blok **jedź** działa sam, dopóki samochód się nie zatrzyma.

## Bloki {#blocks}

### `… jedź gaz … hamulec … bieg … z … hamulec ręczny … zaciągnięty …` (Początkujący) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Serce symulatora. Blok C, który prowadzi pojazd: co 0,1 s odczytuje swoje wejścia, przesuwa samochód o jeden krok i wykonuje bloki w swoim wnętrzu (umieść tam bloki silników). Kończy działanie, gdy samochód stoi i nic nie jest wciśnięte; bloki we wnętrzu wykonują się jeszcze ostatni raz, aby silnik dostał końcową wartość.

- `gaz` i `hamulec`: jak mocno wciśnięty jest każdy pedał, od 0 do 100.
- `bieg`: wybrany bieg: `-1` wsteczny, `0` luz, `1` i wyżej do przodu. Gdy w tym polu jest kontroler automatycznej skrzyni biegów, używane jest położenie jej wybieraka (P, R, N, D), a na D samochód sam wybiera bieg.
- `z`: ile biegów ma skrzynia (domyślnie 6).
- `hamulec ręczny`: jak mocno zaciągnięty jest hamulec ręczny, od 0 do 100; `zaciągnięty`: czy jest zablokowany.
- Wejście jest brane pod uwagę tylko wtedy, gdy umieszczono w nim blok; zwykła liczba w pustym polu jest ignorowana (z wyjątkiem `z`).
- Pojazdem może naraz kierować tylko jeden blok **jedź**; drugi blok dla tego samego pojazdu pomija swoje bloki wewnętrzne.

### `ustaw … typ na …` (Początkujący) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Dostraja silnik pojazdu do rodzaju pojazdu: jak długo toczy się siłą rozpędu (bezwładność), jaka jest jego maksymalna prędkość cofania i czy ma hamulec pneumatyczny.

- Typy: `samochód`, `pojazd terenowy`, `samochód sportowy`, `ciężarówka` (ciężarówka ma hamulec pneumatyczny)

### `ustaw … … na … %` (Zaawansowany) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Zmienia jedno ustawienie silnika.

- `bezwładność silnika`: im wyższa, tym dłużej samochód toczy się bez gazu (0 oznacza brak bezwładności).
- `prędkość cofania`: maksymalna prędkość na biegu wstecznym.

### `ustaw … … na …` (Zaawansowany) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Włącza lub wyłącza jedną opcję pojazdu.

- `cofanie hamulcem`: przy samych pedałach przytrzymanie hamulca na postoju powoduje jazdę do tyłu.
- `biegi ograniczają prędkość`: każdy bieg ma własną prędkość maksymalną.
- `hamulec ręczny trzyma`: zaciągnięty hamulec ręczny utrzymuje samochód w miejscu.
- `hamulec pneumatyczny`: hamulec pneumatyczny ciężarówki (daje zdarzenie „spuszcza powietrze”).
- `automatyczna skrzynia`: traktuje wejście `bieg` jak wybierak automatycznej skrzyni biegów.

### `resetuj …` (Zaawansowany) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Zatrzymuje pojazd w miejscu i zapomina jego stan.

### `… z …` (Początkujący) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Zwraca jedną z wartości pojazdu.

- `prędkość`: od −100 do 100 (ujemna przy cofaniu), gotowa do pola prędkości silnika.
- `obroty silnika`: od 0 do 100, do obrotomierza lub dźwięku silnika.
- `bieg`: bieżący bieg (`-1` wsteczny, `0` luz, potem `1`, `2`…).

### `czy … … ?` (Początkujący) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Zwraca `true`, gdy pojazd jest w wybranym stanie.

- Stany: `jedzie`, `hamuje`, `stoi na ręcznym`

### `gdy … …` (Początkujący) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Uruchamia swój skrypt, gdy coś stanie się z pojazdem.

- Zdarzenia: `rusza`, `zatrzymuje się`, `zaczyna hamować`, `przestaje hamować`, `mocno hamuje`, `spuszcza powietrze`, `zmienia bieg`
- Typowe zastosowanie: odtworzenie dźwięku, na przykład syku hamulca pneumatycznego przy `spuszcza powietrze` lub pisku opon przy `mocno hamuje` (zobacz [Dźwięki](/docs/Application/BlockBuilder/Blocks/Sounds)).
