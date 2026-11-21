---
id: Light
title: Light
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Light

Light blocks control the hub's status light, lights connected to ports and the light matrix of supported hubs. The category appears when a hub in the profile has something to light.

## Hub and port lights

### `set LED color to …` (Beginner) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Sets the color of the hub's status light.

- Hubs: LEGO Powered Up hubs (including Technic Move Hub), WeDo 2.0 and the MINDSTORMS Robot Inventor hub.
- Typical use: show the model's state (ready, running, warning, error).

### `turn on at … % brightness` (Beginner) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Turns on the lights connected to the selected port at the given brightness.

- Hubs: all hubs with ports, except WeDo 2.0.
- Typical use: headlights, adjustable lighting.

### `turn off` (Beginner) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Turns off the lights connected to the selected port.

- Hubs: the same as for **turn on at … % brightness**.

### `turn lights …` (Beginner) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Turns the lights of a Technic Move Hub on or off.

- Options: `off`, `on`
- Hubs: Technic Move Hub.

## Light matrix

These blocks work with the 5×5 light matrix built into the MINDSTORMS Robot Inventor hub.

### `turn on …` (Advanced) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Shows the selected image on the light matrix and moves on to the next block right away. The image stays until another block changes the matrix or the program stops.

### `write …` (Beginner) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Scrolls the text across the light matrix, one letter at a time.

### `turn off pixels` (Beginner) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Turns off all the pixels of the light matrix.

### `set pixel … x … y … brightness …` (Advanced) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Sets the brightness of one pixel; the rest of the matrix stays as it is. `x` is the column and `y` is the row; pixel `1, 1` is in the top-left corner.

### `rotate orientation …` (Advanced) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Rotates the picture on the light matrix by 90 degrees, clockwise or counterclockwise. The new orientation applies to the Light blocks that run after it.

### `set orientation to …` (Advanced) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Sets the orientation of the picture on the light matrix. It's `upright` by default; the new orientation applies to the Light blocks that run after it.

- Options: `upright`, `left`, `right`, `upside down`

## Distance Sensor lights

### `light up …` (Beginner) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Controls the lights around the "eyes" of the Distance Sensor on the selected port. You can turn each light on or off, or put a list in the slot to set the brightness of each light.

- Hubs: MINDSTORMS Robot Inventor.

## BuWizz 3 port LEDs

These blocks set the color of the LED next to a BuWizz 3 port.

### `set port LED color to …` (Beginner) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Sets the port LED to one of the predefined colors.

### `set port LED color to … … …` (RGB) (Advanced) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Sets the port LED color from red, green and blue values.

- Typical use: any color you like, smooth color changes.

### `set port LED color from string …` (Guru) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Sets the port LED color from text.

- Typical use: take the color from a variable or a list.
