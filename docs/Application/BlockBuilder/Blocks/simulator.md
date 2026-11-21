---
id: Simulator
title: Simulator
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulator

The **Simulator** turns the dashboard's pedals, gearbox and handbrake into a car that behaves like a real one: it speeds up with inertia, coasts, brakes, reverses and shifts gears. The controls only give their raw values; the program builds the car from them and sends its speed to the motors.

The category appears while the dashboard has pedals, a gearbox or a handbrake. See [Dashboard controllers](/docs/Application/BlockBuilder/Blocks/DashboardControllers) for the blocks that read those controls.

## Vehicles

Press **Create vehicle** at the top of the category and give it a name (for example, "Vehicle 1"). The blocks appear once the program has at least one vehicle, and in each block you choose which vehicle it works with. **Rename vehicle** and **Delete vehicle** manage them; you can't delete a vehicle while its blocks are in the program, and the last pedals, gearbox or handbrake can't be removed from the dashboard while Simulator blocks are used.

<Screenshot name="blocks-simulator" alt="Simulator category with a drive block hung on the pedals event" width={900} />

A typical car: hang **drive** on the pedals event, connect the pedals to `gas` and `brake`, and inside it start the drive motor at the vehicle's `speed`:

```text
When pedals PDL1 any is moved
    Vehicle 1  drive  gas (pedals PDL1 acceleration)  brake (pedals PDL1 brake)
        Start motor at (speed of Vehicle 1) % speed  (Hub 1, port A)
```

No `forever` loop is needed: **drive** keeps running by itself until the car stops.

## Blocks

### `… drive gas … brake … gear … of … handbrake … locked …` (Beginner) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

The heart of the simulator. A C block that drives the vehicle: every 0.1 s it reads its inputs, moves the car one step and runs the blocks inside it (put the motor blocks there). It ends when the car stands still and nothing is pressed; the blocks inside run one last time so the motor gets the final value.

- `gas` and `brake`: how deep each pedal is pressed, 0 to 100.
- `gear`: the selected gear: `-1` reverse, `0` neutral, `1` and up forward. With an automatic gearbox control in this slot, its selector position is used instead (P, R, N, D) and the car picks the gear in D by itself.
- `of`: how many gears the gearbox has (6 by default).
- `handbrake`: how hard the handbrake is pulled, 0 to 100; `locked`: whether it is locked.
- An input counts only when a block is placed in it; a plain number in an empty slot is ignored (except `of`).
- Only one **drive** block can drive a vehicle at a time; a second one for the same vehicle skips its inner blocks.

### `set … type to …` (Beginner) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Tunes the vehicle's engine for a kind of vehicle: how long it keeps rolling (inertia), its top reverse speed and whether it has an air brake.

- Types: `car`, `off-road vehicle`, `sports car`, `truck` (the truck has an air brake)

### `set … … to … %` (Advanced) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Changes one engine setting.

- `engine inertia`: the higher it is, the longer the car rolls without gas (0 means no inertia).
- `reverse speed`: the top speed in reverse.

### `set … … to …` (Advanced) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Turns one vehicle option on or off.

- `reverse with the brake`: with pedals only, holding the brake at a standstill drives backwards.
- `gears limit the speed`: each gear has its own top speed.
- `handbrake holds`: a locked handbrake holds the car in place.
- `air brake`: the truck air brake (gives the "releases air" event).
- `automatic gearbox`: treat the `gear` input as an automatic selector.

### `reset …` (Advanced) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Stops the vehicle where it is and forgets its state.

### `… of …` (Beginner) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Returns one of the vehicle's values.

- `speed`: from −100 to 100 (negative when reversing), ready for a motor speed slot.
- `engine speed`: from 0 to 100, for a rev counter or engine sound.
- `gear`: the current gear (`-1` reverse, `0` neutral, then `1`, `2`…).

### `is … … ?` (Beginner) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Returns `true` when the vehicle is in the selected state.

- States: `moving`, `braking`, `on the handbrake`

### `when … …` (Beginner) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Runs its script when something happens to the vehicle.

- Events: `started`, `stopped`, `starts braking`, `stops braking`, `brakes hard`, `releases air`, `shifts gear`
- Typical use: play a sound, for example an air brake hiss on `releases air` or a squeal on `brakes hard` (see [Sounds](/docs/Application/BlockBuilder/Blocks/Sounds)).
