---
id: Light
title: Światło
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Światło

Bloki światła sterują lampką stanu huba, światłami podłączonymi do portów i matrycą świetlną obsługiwanych hubów. Kategoria pojawia się, gdy hub w profilu ma coś, co można zapalić.

## Światła huba i portów {#hub-and-port-lights}

### `ustaw kolor LED na …` (Początkujący) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Ustawia kolor lampki stanu huba.

- Huby: huby LEGO Powered Up (w tym Technic Move Hub), WeDo 2.0 i hub MINDSTORMS Robot Inventor.
- Typowe zastosowanie: pokazywanie stanu modelu (gotowy, działa, ostrzeżenie, błąd).

### `włączyć w … % jasność` (Początkujący) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Włącza światła podłączone do wybranego portu z podaną jasnością.

- Huby: wszystkie huby z portami z wyjątkiem WeDo 2.0.
- Technic Move Hub: porty `1`–`6` to sześć świateł huba, ponumerowanych na hubie. Każde światło można ustawić osobno, jasność 0–100 %.
- Typowe zastosowanie: reflektory, regulowane oświetlenie.

### `wyłączyć` (Początkujący) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Wyłącza światła podłączone do wybranego portu.

- Huby: te same co dla bloku **włączyć w … % jasność**.

### `włącz światła …` (Początkujący) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Włącza lub wyłącza światła Technic Move Hub za pomocą jego profilu samochodu.

- Opcje: `wyłącz`, `włączone`
- Huby: Technic Move Hub. Aby ustawiać każde światło osobno, użyj zamiast tego bloku **włączyć w … % jasność** z portami `1`–`6`; nie łącz obu sposobów na jednym hubie (zobacz [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

## Matryca świetlna {#light-matrix}

Te bloki działają z matrycą świetlną 5×5 wbudowaną w hub MINDSTORMS Robot Inventor.

### `włącz …` (Zaawansowany) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Wyświetla wybrany obraz na matrycy świetlnej i od razu przechodzi do następnego bloku. Obraz pozostaje, dopóki inny blok nie zmieni matrycy lub program się nie zatrzyma.

### `napisz …` (Początkujący) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Przewija tekst przez matrycę świetlną, litera po literze.

### `wyłącz piksele` (Początkujący) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Wyłącza wszystkie piksele matrycy świetlnej.

### `ustaw piksel … x … y … jasność …` (Zaawansowany) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Ustawia jasność jednego piksela; reszta matrycy pozostaje bez zmian. `x` to kolumna, a `y` to wiersz; piksel `1, 1` jest w lewym górnym rogu.

### `obróć orientację …` (Zaawansowany) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Obraca obraz na matrycy świetlnej o 90 stopni, zgodnie z ruchem wskazówek zegara lub przeciwnie. Nowa orientacja dotyczy bloków światła wykonywanych po nim.

### `ustaw orientację na …` (Zaawansowany) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Ustawia orientację obrazu na matrycy świetlnej. Domyślnie jest to `prosto`; nowa orientacja dotyczy bloków światła wykonywanych po nim.

- Opcje: `prosto`, `lewo`, `prawo`, `do góry nogami`

## Światła czujnika odległości {#distance-sensor-lights}

### `zaświeć …` (Początkujący) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Steruje światłami wokół „oczu” czujnika odległości na wybranym porcie. Każde światło możesz włączyć lub wyłączyć albo wstawić do pola listę, aby ustawić jasność każdego światła.

- Huby: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (blok ma ikonę huba).

### `podświetl czujnik koloru 1 … 2 … 3 … %` (Zaawansowany) {#block_hubs_all_light_port_color_sensor_light_up}

Ustawia jasność trzech świateł wokół soczewki czujnika koloru Technic (czujnika koloru SPIKE) na wybranym porcie, każdego od 0 do 100 %.

- Huby: Technic Hub.
- Gdy jego światła świecą, czujnik nie mierzy: jego wartości koloru i światła pozostają takie, jakie były. Zanim ponownie odczytasz czujnik, użyj na tym porcie bloku Czujnik Technic: **ustaw tryb na …** (`domyślny` lub `otoczenie`). Sprawdzanie programu w edytorze bloków ostrzega, gdy program podświetla czujnik i odczytuje go bez bloku **ustaw tryb na …**.
- Typowe zastosowanie: lampka sygnalizacyjna w modelu lub oczy robota.

## Matryca świetlna Robot Inventor {#robot-inventor-light}

Te bloki pochodzą z aplikacji Robot Inventor i działają tylko z [hubami MINDSTORMS Robot Inventor i SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Mają ikonę huba. Dotknij obrazu w bloku, aby go narysować; w blokach animacji pokazuje on pierwszą klatkę i liczbę klatek.

### `włącz … przez … sekundy` (Początkujący) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Wyświetla obraz na matrycy świetlnej przez podany czas (domyślnie 2 sekundy), a potem go wyłącza. Blok czeka, aż czas minie.

### `odtwórz animację … w … klatek na sekundę do końca` (Początkujący) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Odtwarza klatki animacji raz, z podaną szybkością (domyślnie 4 klatki na sekundę), i czeka do ostatniej klatki.

### `uruchom animację … w … klatek na sekundę …` (Początkujący) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Uruchamia animację i od razu przechodzi do następnego bloku.

- `raz`: odtwarza ją jeden raz.
- `powtórzyć` (domyślnie; chodzi o powtarzanie): odtwarza ją w kółko, dopóki inny blok światła nie zmieni matrycy.

### `ustaw jasność pikseli na … %` (Zaawansowany) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Ustawia jasność obrazów i animacji z powyższych bloków Robot Inventor, od 0 do 100 %. Dopóki ten blok się nie wykona, świecą z pełną jasnością. Każdy piksel zachowuje swoją jasność względem pozostałych.

### Rysowanie obrazów i animacji {#animation-editor}

Dotknij obrazu w bloku światła, aby otworzyć edytor:

- **Piksele**: dotykaj siatki 5×5 lub przeciągaj po niej, aby malować wybraną jasnością.
- **Jasność**: skala obok siatki wybiera jasność do malowania (10 poziomów, od wyłączonego do pełnej).
- **Wszystkie wyłączone / wszystkie włączone**: czyści obraz lub wypełnia go wybraną jasnością.
- **Klatki** (tylko w blokach animacji): pasek pod siatką pokazuje bieżącą klatkę, na przykład **2/3**. Przyciski przechodzą do **poprzedniej** i **następnej** klatki, **dodają** pustą klatkę po bieżącej, **powielają** bieżącą klatkę lub ją **usuwają** (animacja zachowuje co najmniej jedną klatkę).

<Screenshot name="robot-inventor-animation-editor" alt="Edytor animacji: siatka 5×5, skala jasności i pasek klatek" width={600} />

## Diody LED portów BuWizz 3 {#buwizz-3-port-leds}

Te bloki ustawiają kolor diody LED obok portu BuWizz 3.

### `ustaw kolor LED portu na …` (Początkujący) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Ustawia diodę portu na jeden z predefiniowanych kolorów.

### `ustaw kolor LED portu na … … …` (RGB) (Zaawansowany) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Ustawia kolor diody portu na podstawie wartości czerwonej, zielonej i niebieskiej.

- Typowe zastosowanie: dowolny kolor, płynne zmiany kolorów.

### `ustaw kolor LED portu ze stringu …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Ustawia kolor diody portu na podstawie tekstu.

- Typowe zastosowanie: pobranie koloru ze zmiennej lub listy.
