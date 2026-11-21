---
id: Control
title: Control
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Control

Control blocks decide how a script runs: waiting, loops, branches and stopping. When the profile has hubs, this category also holds blocks that connect hubs and change their settings.

## Wait blocks

### `wait … seconds` (Beginner) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Pauses the script for the given number of seconds.

### `wait until …` (Advanced) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Pauses the script until the condition becomes true.

## Loops

### `repeat …` (Advanced) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Runs the blocks inside it the given number of times (10 by default).

### `repeat until …` (Advanced) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Runs the blocks inside it again and again until the condition becomes true.

### `forever` (Advanced) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Runs the blocks inside it over and over until the script or the program stops. Nothing can be attached below it.

## Branches

### `if … then` (Beginner) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Runs the blocks inside it only when the condition is true.

### `if … then … else` (Advanced) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Runs the first branch when the condition is true, and the second branch otherwise.

### `do this … and this` (Guru) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Runs the first group of blocks, then the second one, and only then continues with the blocks below it.

## Stopping

### `stop …` (Beginner) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Stops scripts; what exactly it stops depends on the option.

- `all`: stops all scripts.
- `this stack`: stops only this script.
- `and exit program`: stops the program.

### `stop other stacks` (Guru) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Stops every other running script; this one keeps going.

## Hub blocks

### `connect / disconnect …` (Beginner) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Connects or disconnects the selected hub from the program.

- Options: `connect`, `disconnect`
- Hubs: all.

### `… connected` (Beginner) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Returns `true` when the selected hub is connected.

- Type: Boolean block
- Hubs: all.

### `set … configuration to …` (Advanced) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Switches the hub to one of its configurations.

- Hubs: Technic Move Hub (the only hub with configurations today).
- Typical use: switch the hub to another configuration before the next blocks run.

### `get … configuration as …` (Advanced) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Returns the hub's current configuration.

- Type: reporter block
- Output: `text` or `index`
- Hubs: Technic Move Hub.
- Returns `NaN` when the hub isn't connected or has no configuration.

### `set … power mode to …` (Beginner) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Sets the power mode of a BuWizz 2.

- Modes: `Slow`, `Normal`, `Fast`, `Ludicrous`
- Hubs: BuWizz 2.

### `get … power mode as …` (Guru) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Returns the current power mode of a BuWizz 2.

- Output: `text` or `index`
- Hubs: BuWizz 2.

### `set … control channel to …` (Advanced) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Sets the control channel of a Mould King hub.

- Channels: `A`, `B`, `C`
- Hubs: Mould King 4.0 and 6.0.

### `get … control channel as …` (Advanced) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Returns the current control channel of a Mould King hub.

- Output: `text` or `index`
- Hubs: Mould King 4.0 and 6.0.
