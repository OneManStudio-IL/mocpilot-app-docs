---
id: Light
title: Light
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

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
- Technic Move Hub: the ports `1`–`6` are the hub's six lights, numbered on the hub. Each light can be set on its own, brightness 0–100 %.
- Typical use: headlights, adjustable lighting.

### `turn off` (Beginner) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Turns off the lights connected to the selected port.

- Hubs: the same as for **turn on at … % brightness**.

### `turn lights …` (Beginner) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Turns the lights of a Technic Move Hub on or off through its car profile.

- Options: `off`, `on`
- Hubs: Technic Move Hub. To set each light separately, use **turn on at … % brightness** with ports `1`–`6` instead; don't mix the two on one hub (see [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

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

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (the block has the hub icon).

### `light up colour sensor 1 … 2 … 3 … %` (Advanced) {#block_hubs_all_light_port_color_sensor_light_up}

Sets the brightness of the three lights around the lens of the Technic Color Sensor (the SPIKE color sensor) on the selected port, from 0 to 100 % each.

- Hubs: Technic Hub.
- While its lights are on, the sensor doesn't measure: its color and light values stay as they were. Before you read the sensor again, use Technic sensor: **set mode to …** (`default` or `ambient`) on that port. The program check in the block editor warns when a program lights the sensor and reads it without **set mode**.
- Typical use: a signal light on the model, or the eyes of a robot.

## Robot Inventor light matrix {#robot-inventor-light}

These blocks come from the Robot Inventor app and work only with the [MINDSTORMS Robot Inventor and SPIKE Prime hubs](/docs/Application/Hubs/RobotInventorHub). They carry the hub icon. Tap the picture in a block to draw it; in the animation blocks it shows the first frame and the number of frames.

### `turn on … for … seconds` (Beginner) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Shows the image on the light matrix for the given time (2 seconds by default), then turns it off. The block waits until the time is up.

### `play animation … at … frames per second until done` (Beginner) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Plays the frames of the animation once, at the given speed (4 frames per second by default), and waits until the last frame.

### `start animation … at … frames per second …` (Beginner) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Starts the animation and goes on to the next block at once.

- `once`: plays it one time.
- `repeat` (default): plays it over and over until another light block changes the matrix.

### `set pixel brightness to … %` (Advanced) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Sets how bright the images and animations of the Robot Inventor blocks above are, from 0 to 100 %. Until this block runs, they are at full brightness. Each pixel keeps its own brightness relative to the others.

### Drawing images and animations {#animation-editor}

Tap the picture in a light block to open the editor:

- **Pixels**: tap or drag over the 5×5 grid to paint with the selected brightness.
- **Brightness**: the scale next to the grid picks the brightness to paint with (10 levels, from off to full).
- **All off / all on**: clear the image or fill it with the selected brightness.
- **Frames** (animation blocks only): the bar under the grid shows the current frame, for example **2/3**. The buttons go to the **previous** and **next** frame, **add** an empty frame after the current one, **duplicate** the current frame or **delete** it (an animation keeps at least one frame).

<Screenshot name="robot-inventor-animation-editor" alt="The animation editor: the 5×5 grid, the brightness scale and the frame bar" width={600} />

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
