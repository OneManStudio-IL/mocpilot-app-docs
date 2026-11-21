---
id: InputBlocks
title: Input blocks
description: "Reference of every Quick Links input: dashboard controls and their channels, the vehicle, the gamepad, hub buttons and sensors."
---

import Screenshot from '@site/src/components/Screenshot';

# Input blocks

Every row starts with an input. The **Inputs** tab of the palette shows the blocks that your profile can use right now: one block per dashboard control (one per channel for controls with several channels), the **Vehicle** blocks, the **Gamepad** block and one **Hub** block per hub. How to use them: [Inputs](/docs/Application/Links/Inputs).

Each input sends one of two signals along the row:

- **value**: a number from −1 to 1 (0…1 for controls that have no negative side);
- **on/off**: 1 or 0.

Processing blocks and operations accept only the signals they can work with; see [Processing blocks](/docs/Application/Links/Blocks/ProcessingBlocks).

## Controller {#src-controller}

A control from your dashboard, shown by its name (**JOY1**, **SLDR1**, **BTN2**…).

- **Controller**: any dashboard control listed below. Monitors are outputs, not inputs.
- **Channel**: what the control gives, for controls with several channels. The palette offers one block per channel.

The steering wheel, pedals, gear shifter, handbrake, turn signals and train controller are described on [Special controls](/docs/Application/Dashboard/SpecialControls).

If the control is removed from the dashboard, the row reports "Choose a dashboard controller". If its channel no longer exists, it reports "Choose what … gives" (for a joystick: "… does not move along this axis").

### Joystick {#controller-joystick}

- **Channel**: **X axis** or **Y axis**. A joystick set to **Only horizontal (X)** or **Only vertical (Y)** offers only that axis.
- Gives: value −1…1, 0 in the centre.

### Slider, vertical slider {#controller-slider}

- No channel.
- Gives: value 0…1, or −1…1 when **Negative values** is on.

### Train controller {#controller-train}

The train controller (special control) works as a slider in Quick Links.

- No channel.
- Gives: value −1…1: the lever position as a share of all notches, negative when the reverser is in reverse, 0 in neutral.

### Rotary knob {#controller-knob}

The rotary knob of the paid themes works as a slider in Quick Links.

- No channel.
- Gives: value 0…1, or −1…1 when the knob has its zero in the centre.

### Steering wheel {#controller-wheel}

- **Channel**: **Steering angle** (default) or **Horn**.
- Steering angle gives: value −1…1, 0 straight ahead.
- Horn gives: value 1 while the horn area is pressed, otherwise 0.

### Pedals {#controller-pedals}

- **Channel**: **Accelerator pedal** (default) or **Brake pedal**.
- Gives: value 0…1, how far the pedal is pressed.
- The pedals give the raw pedal position. For a car that speeds up, slows down and reverses on its own, use the [Vehicle](#src-vehicle) input.

### Gear shifter {#controller-gear}

The manual and the automatic gear shifters (special control).

- **Channel**: **Gear** (default) or **Direction (R − / forward +)**.
- Gear, manual gearbox: the engaged gear divided by the number of forward gears: top gear 1, neutral 0, reverse negative. With 4 gears, 2nd gear gives 0.5.
- Gear, automatic gearbox: the same as Direction.
- Direction gives: −1 in R, 0 in N (and P), +1 in any forward gear or D.

### Handbrake {#controller-handbrake}

- **Channel**: **Handbrake locked** (default) or **Handbrake force**.
- Handbrake locked gives: on/off, on while the lever is locked.
- Handbrake force gives: value 0…1, how far the lever is pulled.

### Turn signals {#controller-turnsignals}

The turn-signal stalk (special control).

- **Channel**: **Turn signals (left − / right +)** (default), **Left turn signal**, **Right turn signal** or **Light**.
- Turn signals gives: value −1 (left), 0 (off) or +1 (right).
- Left turn signal and Right turn signal give: value 1 while that signal is on (blinking with the lamp when the control's blinking is on), otherwise 0.
- Light gives: value 1 while the light is on, otherwise 0.

### D-pad {#controller-dpad}

- **Channel**: **Up / down** or **Left / right**.
- Gives: value +1 (up or right), −1 (down or left) or 0.

### Button {#controller-button}

- No channel.
- Gives: on/off, on while pressed.

### Switch {#controller-switch}

- No channel.
- Gives: on/off.

### Step switch {#controller-stepper}

- No channel.
- Gives: value: the current step divided by **Steps count**, so the last step is 1 (−1 for the last negative step).

## Vehicle {#src-vehicle}

A simulated car driven by the dashboard's pedals, gear shifter and handbrake: it accelerates, brakes, coasts and reverses like a real vehicle, and the row gets its speed or engine speed. The palette shows Vehicle blocks when the dashboard has pedals, a gear shifter or a handbrake, one block per output, already linked to the first control of each kind.

- **Pedals**: the dashboard pedals that drive the vehicle (required).
- **Gear shifter**: **none** or a gear shifter on the dashboard. Without one, holding the brake pedal at a standstill drives the vehicle backwards.
- **Handbrake**: **none** or a handbrake on the dashboard.
- **Vehicle type**: **Car** (default), **Off-road vehicle**, **Sports car** or **Truck**. The types differ in inertia and reverse speed; the truck also has an air brake.
- **Output**:
  - **Speed** (default): value −1…1, negative when reversing;
  - **Engine speed (rpm)**: value 0…1;
  - **Braking**: on/off, on while the vehicle brakes;
  - **On the handbrake**: on/off.

Problems: "Choose the pedals of the vehicle", "… is not on the dashboard".

<Screenshot name="links-vehicle-settings" alt="Settings of a Vehicle input block" width={900} />

## Gamepad {#src-gamepad}

The game controller connected to your device. The block is in the palette only while **Enable gamepad blocks** is on (**Gamepad** page in the top bar); otherwise the row reports "Turn on gamepad blocks on the Gamepad page (top bar)".

- **Input** (default **Left stick Y**). Labels follow the **Gamepad buttons layout** (Xbox / PlayStation):
  - **Left stick Y**, **Left stick X**, **Right stick Y**, **Right stick X**: value −1…1;
  - **RT** / **R2**, **LT** / **L2** (triggers): value;
  - **A**, **B**, **X**, **Y** / **Cross**, **Circle**, **Square**, **Triangle**: on/off;
  - **LB** / **L1**, **RB** / **R1** (bumpers): on/off;
  - **Up**, **Down**, **Left**, **Right** (D-pad): on/off.

## Hub {#src-hub}

A hub's own button or a sensor: on the hub or on one of its ports. There is one Hub input per hub of the profile, except Mould King hubs, which only receive commands.

- **Hub**: a hub of the profile.
- **Button or sensor**: only what this hub can report (list below).
- **Port**: for sensors on a port (motor values, port sensors).
- **Hub orientation**: for tilt and acceleration on hubs that can change it: **Keep** (default) or how the hub is mounted in the model.

A sensor value travels along the row divided by its full scale and limited to −1…1: a battery at 50 % gives 0.5. A text **Monitor** right after the sensor shows the real value with its unit.

| Button or sensor | Signal | Unit, full scale | Hubs |
|---|---|---|---|
| **Button 1, 2…** | on/off | | hubs with a button; the buttons of the LEGO® Powered Up remote |
| **Battery** | value | %, 100 | hubs that report it |
| **Battery voltage** | value | V, 12 | hubs that report it |
| **Output voltage** | value | V, 12 | BuWizz 2.0 |
| **Temperature** | value | °C, 100 | hubs that report it |
| **Tilt pitch** | value | °, 90 | hubs with a tilt sensor |
| **Tilt roll** | value | °, 180 | hubs with a tilt sensor |
| **Tilt yaw** | value | °, 180 | hubs with a yaw axis |
| **Acceleration X / Y / Z** | value | m/s², 19.6 | hubs with an accelerometer |
| **Motor speed** | value | %, 100 | port; all hubs with ports |
| **Motor angle** | value | °, 360 (relative) | port; motors with an encoder; not SBrick, BuWizz 2.0, WeDo 2.0 |
| **Motor position** | value | °, 180 (absolute) | port; angular motors |
| **Motor power** | value | %, 100 | port; Robot Inventor |
| **Motor current** | value | A, 3 | port; BuWizz 2.0, BuWizz 3.0 Pro |
| **Distance sensor** | value | 250 | port; not SBrick or BuWizz |
| **Color sensor** | value | colour number, 10 | port; not SBrick, BuWizz or WeDo 2.0 |
| **Reflected light**, **Ambient light** | value | %, 100 | port; not SBrick, BuWizz or WeDo 2.0 |
| **Tilt sensor pitch / roll** | value | °, 45 | port; WeDo 2.0 / BOOST tilt sensor; not SBrick or BuWizz |
| **Power mode** | value | 1–4, 4 | BuWizz 2.0 |
| **Connected** | on/off | | all hubs |

When the hub is connected, MOCPilot also checks the device on the port: "Port A: no motor there", "Port A: the motor has no encoder", "Port A: no distance sensor there" and so on.
