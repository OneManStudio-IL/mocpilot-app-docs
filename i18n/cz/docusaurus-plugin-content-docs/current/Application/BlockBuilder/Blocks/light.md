---
id: Light
title: Světlo
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Světlo {#light}

Bloky světel ovládají stavové světlo hubu, světla připojená k portům a světelnou matici podporovaných hubů. Kategorie se objeví, když má některý hub v profilu co rozsvítit.

## Světla hubu a portů {#hub-and-port-lights}

### `nastavit barvu LED na …` (Začátečník) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Nastaví barvu stavového světla hubu.

- Huby: huby LEGO Powered Up (včetně Technic Move Hubu), WeDo 2.0 a hub MINDSTORMS Robot Inventor.
- Typické použití: ukázat stav modelu (připraveno, běží, varování, chyba).

### `zapnout na … % jas` (Začátečník) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Rozsvítí světla připojená k vybranému portu na zadaný jas.

- Huby: všechny huby s porty kromě WeDo 2.0.
- Typické použití: světlomety, nastavitelné osvětlení.

### `vypnout` (Začátečník) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Zhasne světla připojená k vybranému portu.

- Huby: stejné jako u bloku **zapnout na … % jas**.

### `zapnout světla …` (Začátečník) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Rozsvítí nebo zhasne světla Technic Move Hubu.

- Volby: `vypnuto`, `povoleno`
- Huby: Technic Move Hub.

## Světelná matice {#light-matrix}

Tyto bloky pracují se světelnou maticí 5×5 vestavěnou v hubu MINDSTORMS Robot Inventor.

### `zapnout …` (Pokročilý) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Zobrazí na světelné matici vybraný obrázek a hned pokračuje dalším blokem. Obrázek zůstane, dokud matici nezmění jiný blok nebo se program nezastaví.

### `zapsat …` (Začátečník) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Nechá text projet světelnou maticí, jedno písmeno po druhém.

### `vypnout pixely` (Začátečník) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Zhasne všechny pixely světelné matice.

### `nastavit pixel … x … y … jas …` (Pokročilý) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Nastaví jas jednoho pixelu; zbytek matice zůstane, jak je. `x` je sloupec a `y` je řádek; pixel `1, 1` je v levém horním rohu.

### `otočit orientaci …` (Pokročilý) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Otočí obraz na světelné matici o 90 stupňů, ve směru nebo proti směru hodinových ručiček. Nová orientace platí pro bloky světel, které běží po něm.

### `nastavit orientaci na …` (Pokročilý) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Nastaví orientaci obrazu na světelné matici. Výchozí je `vzpřímeně`; nová orientace platí pro bloky světel, které běží po něm.

- Volby: `vzpřímeně`, `vlevo`, `vpravo`, `vzhůru nohama`

## Světla senzoru vzdálenosti {#distance-sensor-lights}

### `rozsvítit …` (Začátečník) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Ovládá světla kolem „očí“ senzoru vzdálenosti na vybraném portu. Každé světlo můžete rozsvítit nebo zhasnout, nebo do slotu vložit seznam a nastavit jas každého světla.

- Huby: MINDSTORMS Robot Inventor.

## LED portů BuWizz 3 {#buwizz-3-port-leds}

Tyto bloky nastavují barvu LED vedle portu BuWizz 3.

### `nastavit barvu LED portu na …` (Začátečník) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Nastaví LED portu na jednu z předdefinovaných barev.

### `nastavit barvu LED portu na … … …` (RGB) (Pokročilý) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Nastaví barvu LED portu z hodnot červené, zelené a modré.

- Typické použití: libovolná barva, plynulé změny barev.

### `nastavit barvu LED portu ze řetězce …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Nastaví barvu LED portu z textu.

- Typické použití: převzít barvu z proměnné nebo seznamu.
