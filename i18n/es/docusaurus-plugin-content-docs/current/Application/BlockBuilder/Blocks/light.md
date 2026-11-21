---
id: Light
title: Luz
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Luz {#light}

Los bloques de luz controlan la luz de estado del hub, las luces conectadas a los puertos y la matriz de luces de los hubs compatibles. La categoría aparece cuando algún hub del perfil tiene algo que encender.

## Luces del hub y de los puertos {#hub-and-port-lights}

### `establecer color LED en …` (Principiante) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Ajusta el color de la luz de estado del hub.

- Hubs: hubs LEGO Powered Up (incluido el Technic Move Hub), WeDo 2.0 y el hub MINDSTORMS Robot Inventor.
- Uso típico: mostrar el estado del modelo (listo, en marcha, aviso, error).

### `encender en … % brillo` (Principiante) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Enciende las luces conectadas al puerto seleccionado con el brillo indicado.

- Hubs: todos los hubs con puertos, excepto WeDo 2.0.
- Uso típico: faros, iluminación regulable.

### `apagar` (Principiante) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Apaga las luces conectadas al puerto seleccionado.

- Hubs: los mismos que para **encender en … % brillo**.

### `encender luces …` (Principiante) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Enciende o apaga las luces de un Technic Move Hub.

- Opciones: `apagado`, `activado`
- Hubs: Technic Move Hub.

## Matriz de luces {#light-matrix}

Estos bloques funcionan con la matriz de luces de 5×5 integrada en el hub MINDSTORMS Robot Inventor.

### `encender …` (Avanzado) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Muestra la imagen seleccionada en la matriz de luces y pasa de inmediato al bloque siguiente. La imagen permanece hasta que otro bloque cambia la matriz o el programa se detiene.

### `escribir …` (Principiante) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Desplaza el texto por la matriz de luces, letra a letra.

### `apagar píxeles` (Principiante) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Apaga todos los píxeles de la matriz de luces.

### `establecer píxel … x … y … brillo …` (Avanzado) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Ajusta el brillo de un píxel; el resto de la matriz se queda como está. `x` es la columna e `y` es la fila; el píxel `1, 1` está en la esquina superior izquierda.

### `girar orientación …` (Avanzado) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Gira la imagen de la matriz de luces 90 grados, en sentido horario o antihorario. La nueva orientación se aplica a los bloques de luz que se ejecutan después.

### `establecer orientación en …` (Avanzado) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Ajusta la orientación de la imagen en la matriz de luces. Por defecto es `derecho`; la nueva orientación se aplica a los bloques de luz que se ejecutan después.

- Opciones: `derecho`, `izquierda`, `derecha`, `boca abajo`

## Luces del sensor de distancia {#distance-sensor-lights}

### `encender …` (Principiante) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Controla las luces alrededor de los «ojos» del sensor de distancia en el puerto seleccionado. Puedes encender o apagar cada luz, o poner una lista en el campo para ajustar el brillo de cada una.

- Hubs: MINDSTORMS Robot Inventor.

## LED de los puertos del BuWizz 3 {#buwizz-3-port-leds}

Estos bloques ajustan el color del LED situado junto a un puerto del BuWizz 3.

### `establecer color de LED del puerto a …` (Principiante) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Pone el LED del puerto en uno de los colores predefinidos.

### `establecer color de LED del puerto a … … …` (RGB) (Avanzado) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Ajusta el color del LED del puerto a partir de valores de rojo, verde y azul.

- Uso típico: cualquier color que quieras, cambios de color suaves.

### `establecer color de LED del puerto desde cadena …` (Gurú) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Ajusta el color del LED del puerto a partir de un texto.

- Uso típico: tomar el color de una variable o de una lista.
