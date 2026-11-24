---
id: Light
title: Luz
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

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

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (el bloque lleva el icono del hub).

## Matriz de luces de Robot Inventor {#robot-inventor-light}

Estos bloques vienen de la app Robot Inventor y solo funcionan con los [hubs MINDSTORMS Robot Inventor y SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Llevan el icono del hub. Toca la imagen de un bloque para dibujarla; en los bloques de animación muestra el primer fotograma y el número de fotogramas.

### `encender … durante … segundos` (Principiante) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Muestra la imagen en la matriz de luces durante el tiempo indicado (2 segundos de forma predeterminada) y luego la apaga. El bloque espera hasta que pasa el tiempo.

### `reproducir animación … en … fotogramas por segundo hasta que termine` (Principiante) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Reproduce una vez los fotogramas de la animación a la velocidad indicada (4 fotogramas por segundo de forma predeterminada) y espera hasta el último fotograma.

### `iniciar animación … en … fotogramas por segundo …` (Principiante) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Inicia la animación y pasa enseguida al siguiente bloque.

- `una vez`: la reproduce una sola vez.
- `repetir` (predeterminado): la reproduce una y otra vez hasta que otro bloque de luz cambia la matriz.

### `establecer brillo de píxeles a … %` (Avanzado) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Ajusta el brillo de las imágenes y animaciones de los bloques de Robot Inventor anteriores, de 0 a 100 %. Hasta que se ejecuta este bloque, se muestran con el brillo máximo. Cada píxel conserva su brillo relativo respecto a los demás.

### Dibujar imágenes y animaciones {#animation-editor}

Toca la imagen de un bloque de luz para abrir el editor:

- **Píxeles**: toca la cuadrícula de 5×5 o arrastra el dedo sobre ella para pintar con el brillo seleccionado.
- **Brillo**: la escala junto a la cuadrícula elige el brillo con el que se pinta (10 niveles, de apagado a máximo).
- **Todo apagado / todo encendido**: borra la imagen o la rellena con el brillo seleccionado.
- **Fotogramas** (solo en los bloques de animación): la barra bajo la cuadrícula muestra el fotograma actual, por ejemplo **2/3**. Los botones van al fotograma **anterior** y al **siguiente**, **añaden** un fotograma vacío después del actual, **duplican** el fotograma actual o lo **eliminan** (una animación conserva al menos un fotograma).

<Screenshot name="robot-inventor-animation-editor" alt="El editor de animaciones: la cuadrícula de 5×5, la escala de brillo y la barra de fotogramas" width={600} />

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
