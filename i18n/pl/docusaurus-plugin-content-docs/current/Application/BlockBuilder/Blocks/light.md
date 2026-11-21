---
id: Light
title: Światło
---

import useBaseUrl from '@docusaurus/useBaseUrl';

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
- Typowe zastosowanie: reflektory, regulowane oświetlenie.

### `wyłączyć` (Początkujący) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Wyłącza światła podłączone do wybranego portu.

- Huby: te same co dla bloku **włączyć w … % jasność**.

### `włącz światła …` (Początkujący) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Włącza lub wyłącza światła Technic Move Hub.

- Opcje: `wyłącz`, `włączone`
- Huby: Technic Move Hub.

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

- Huby: MINDSTORMS Robot Inventor.

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
