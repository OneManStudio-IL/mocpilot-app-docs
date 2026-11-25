---
id: Events
title: Events
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Events

The **Events** category holds the blocks that start scripts when something happens, plus the blocks that send messages between scripts. Use **Add message** and **Delete message** at the top of the category to manage messages.

## Core events

### `when program starts` (Beginner) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Runs its script once, when the program starts.

- Typical use: set starting values of variables, put motors in their starting state, show a "ready" message.

### `when …` (Advanced) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Runs its script when the condition in the slot changes from false to true. While the script runs, the block waits; it fires again only after the condition has become false and then true once more.

- Typical use: react to a state, for example `when timer > 5 and switch is on`.

### `when timer > …` (Advanced) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Runs its script when the program timer goes above the value (in seconds).

- Typical use: delayed actions, timed phases. Reset the timer with **reset timer** (Sensors).

### `when I receive …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Runs its script when the selected message is broadcast.

- Typical use: coordinate several scripts.

### `broadcast …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Sends a message to every script that starts with **when I receive** for that message, and continues right away.

- Typical use: tell other scripts to start without waiting for them.

### `broadcast … and wait` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Sends a message and pauses this script until all the scripts that received it have finished.

- Typical use: step-by-step sequences where order matters.

## Hub events

These blocks appear when a hub in the profile supports them. They don't exist for Mould King hubs.

### `when … … button …` (Beginner) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

Runs when a button on the hub is pressed or released.

- State options: `pressed`, `released`, `changed`
- Hubs: LEGO Powered Up hubs, WeDo 2.0 and Robot Inventor. The list of buttons depends on the hub.

### `when … is connected / disconnected` (Beginner) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

Runs when the hub connects or disconnects.

- Typical use: stop the model safely when the connection is lost, and restore its state when it comes back.

### `when … % battery changed` (Beginner) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

Runs when the battery level reported by the hub changes.

- Hubs: those that report their battery level.
- Typical use: a low-battery warning, switching to a power-saving mode.

### `when … accelerometer data changed` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

Runs when the hub's accelerometer values change.

- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor.

### `when … tilt … angle changed` (Beginner) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

Runs when the hub's tilt angle changes.

- Angle options: `any`, `pitch`, `roll`, `yaw`
- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor. `yaw` is available only on the Technic Hub and Robot Inventor.

### `when … orientation changed` (Beginner) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

Runs when the hub's orientation changes, that is, when a different side of the hub faces up.

- Hubs: the same as for the tilt event.

## Sensor events

These events read a sensor connected to a hub port. Hubs: City Hub, Technic Hub, BOOST Move Hub and the MINDSTORMS Robot Inventor hub (not SBrick, BuWizz, WeDo 2.0 or Mould King).

### Technic sensor: `when color is …` (Beginner) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

Runs when the Technic Color Sensor sees the selected color.

### Technic sensor: `when … closer than / farther than / exactly at …` (Beginner) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

Runs when the distance measured by the Technic Distance Sensor meets the condition.

- Comparison options: `closer than`, `farther than`, `exactly at`
- Units: `mm`, `cm`, `inch`, `%`

### BOOST sensor: `when … closer than / farther than / exactly at …` (Beginner) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

Runs when the distance measured by the BOOST Color & Distance Sensor meets the condition.

- Comparison options: `closer than`, `farther than`, `exactly at`
- Units: `%`, `cm`, `inch`

### BOOST sensor: `when color is …` (Beginner) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

Runs when the BOOST Color & Distance Sensor sees the selected color.

## Robot Inventor events {#robot-inventor-events}

These events come from the Robot Inventor app and work only with the [MINDSTORMS Robot Inventor and SPIKE Prime hubs](/docs/Application/Hubs/RobotInventorHub). They carry the hub icon. The matching values are on the [Sensors](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) page.

### `when hub is …` (Beginner) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

Runs once each time the hub is `tapped`, `double-tapped`, `shaken` (default) or `falling`.

### `when … is up` (Beginner) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

Runs when the selected side of the hub turns to face up: `front` (the light matrix, default), `top`, `right side`, `back`, `bottom` or `left side`.

### `when hub is tilted …` (Advanced) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

Runs when the hub gets tilted `up`, `down`, `left`, `right` or in `any` direction (default), by about 12° or more.

### `when … pressed / hard-pressed / released` (Beginner) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

Runs when the Force Sensor on the selected port is pressed, pressed hard (more than 5 newtons) or released.

### `when hub receives signal …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

Runs when this hub receives the radio signal with this name from another hub. Read its value with [received … value](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
