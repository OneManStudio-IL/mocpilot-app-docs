---
id: OutputBlocks
title: Operation and output blocks
description: "Reference of every Quick Links operation and output: Motor, Servo, Light, Technic Move, BuWizz and Mould King operations, Hub, Indicator, Hub LED, LED matrix, Calibrate servos."
---

import Screenshot from '@site/src/components/Screenshot';

# Operation and output blocks

The **Outputs** tab of the palette holds the operations and the outputs. How to use them: [Operations and outputs](/docs/Application/Links/Operations).

- An **operation** says what to do. A [Hub](#hub-out) output must follow it and says where.
- A **direct output** ([Indicator](#dash-indicator), [Hub LED](#hub-led), [LED matrix](#hub-matrix), [Calibrate servos](#cmd-calibrate)) ends the row by itself; the row must not have an operation.

**Motor**, **Servo**, **Motor for time** and **Light** are always in the palette. The other operations appear only when a hub of the profile can do them.

"On" below means an on/off signal that is on, or a value of at least 0.5 (either sign).

## Operations for ports

### Motor {#op-motor}

Runs the motor at the input's value: the further you push, the faster; 0 stops it.

- Takes: value or on/off (on = full speed).
- **At stop**: **Hub default** (default), **Coast**, **Brake** or **Hold position**.
- **Hub acceleration**: **Hub default** (default), **Fast**, **Balanced**, **Smooth**, **Slow** or **Very slow**: the hub's own ramp. For your own ramp, use [Smooth](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Stall detection**: **Hub default** (default), **On** or **Off**.
- Hubs: any hub with ports. **At stop** and **Hub acceleration** need a hub with position control (not SBrick, BuWizz 2.0, WeDo 2.0 or Mould King); **Stall detection** needs Robot Inventor. On a Technic Move Hub, Motor drives the car.

### Servo {#op-servo}

Steers with a motor that has an encoder: the input −1…1 turns the motor to *centre + value × angle*, and 0 brings it back to the centre.

- Takes: value or on/off.
- **Calibration**: **Manual** (default) or **Auto**.
- **Angle**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 turn, ±2 turns, ±3 turns or ±5 turns (default ±90°). Manual only.
- **Centre**: −20°, −10°, −5°, 0°, +5°, +10° or +20° (default 0°). Manual only.
- **Turn speed**: 25, 50, 75 or 100 % (default 100 %).
- Manual: the zero is where the motor was at power-on, or the position you set with **Set as zero** (nudge with **◀ 5°** / **5° ▶** first).
- Auto: at every start the motor turns to both end stops; the middle becomes the zero and the travel becomes the angle. **Calibrate now** runs it at once. The steering must have end stops.
- Hubs and ports: a motor with an encoder on a hub with position control (not SBrick, BuWizz 2.0, WeDo 2.0 or Mould King). On a Technic Move Hub, Servo turns the hub's steering rack, which the hub calibrates itself.

<Screenshot name="links-servo-settings" alt="Settings of a Servo block" width={900} />

### Motor for time {#op-timed}

Runs the motor for a set time each time the input turns on. The speed and direction come from the input value at that moment.

- Takes: value or on/off.
- **Time**: 0.5, 1, 2, 3, 5 or 10 s (default 1 s).
- Hubs: any hub with ports; on a Technic Move Hub it drives the car.

### Run for degrees {#op-degrees}

Turns the motor by a set angle each time the input turns on. A negative input turns it the other way.

- Takes: value or on/off.
- **Degrees**: 45°, 90°, 180°, 1 turn, 2 turns, 3 turns, 5 turns or 10 turns (default 1 turn).
- **Speed**: 25, 50, 75 or 100 % (default 50 %).
- Hubs and ports: a motor with an encoder on a hub with position control.

### Go to position {#op-goto}

Turns the motor to an absolute position when the input turns on, and to another one when it turns off. It takes the shortest way.

- Takes: value or on/off.
- **Position when on**: 0°, 45°, 90°, 135°, 180°, 225°, 270° or 315° (default 90°).
- **Position when off**: **Stay** or one of the same positions (default 0°).
- **Speed**: 25, 50, 75 or 100 % (default 50 %).
- Hubs and ports: an angular motor (absolute position) on a hub with position control.

### Light {#op-light}

Drives LEGO® lights on a port.

- Takes: value or on/off. With a value, the brightness follows it (−1 and 1 are both full brightness).
- **Brightness**: 25, 50, 75 or 100 % (default 100 %).
- **Blink: on**: **No blink** (default), 0.25, 0.5, 1 or 2 s: how long the light stays on in each blink.
- **Blink: off**: **Same as on** (default), 0.25, 0.5, 1 or 2 s: how long it stays off.
- Hubs: any hub with ports except WeDo 2.0. On a Technic Move Hub, Light switches the car's lights.

### Port colour {#op-portcolor}

Sets the colour of the port LEDs of a BuWizz 3.0 Pro.

- Takes: value or on/off.
- **Colour**: **From the list** (default) or **RGB**.
- **Colour when on** (default Red) and **Colour when off** (default Off): Off, Pink, Purple, Blue, Light blue, Light green, Green, Yellow, Orange, Red, White.
- **Red**, **Green**, **Blue** (RGB): 0, 32, 64, 128, 192 or 255 (default 255, 0, 0).
- Hubs and ports: BuWizz 3.0 Pro, ports 1–4. The LEDs go off when the program stops.

### Sensor lights {#op-sensorlights}

Lights the four segments around the "eyes" of the Technic distance sensor while the input is on.

- Takes: value or on/off.
- **Lights**: **All** (default), **Top**, **Bottom**, **Left**, **Right** or **Diagonal**.
- **Brightness**: 25, 50, 75 or 100 % (default 100 %).
- Hubs and ports: Robot Inventor, one port with the distance sensor. The lights go off when the program stops.

## Operations for the whole hub

The Hub block after these operations takes no ports.

### Brake {#op-brake}

Brakes the car while the input is on.

- Takes: value or on/off. No settings.
- Hubs: Technic Move.

### Boost {#op-boost}

Switches the hub to its boost power mode while the input is on, and back to normal when it turns off.

- Takes: value or on/off. No settings.
- Hubs: Technic Move.

### Power pulse {#op-pulse}

Sends one power pulse each time the input turns on: the motors run at maximum power for about two seconds.

- Takes: value or on/off. No settings.
- Hubs: Technic Move with the **Batmobile™ Tumbler** configuration; see [Technic Move Hub configurations](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Power mode {#op-powermode}

Sets the power mode of a BuWizz 2.0 when the input turns on and, if you choose one, when it turns off.

- Takes: value or on/off.
- **Mode when on**: **Slow**, **Normal** (default), **Fast** or **Ludicrous**.
- **Mode when off**: **Keep** (default) or one of the modes.
- Hubs: BuWizz 2.0.

### Channel {#op-channel}

Switches the control channel of a Mould King hub when the input turns on and, if you choose one, when it turns off.

- Takes: value or on/off.
- **Channel when on**: **A** (default), **B** or **C**.
- **Channel when off**: **Keep** (default), **A**, **B** or **C**.
- Hubs: Mould King 4.0 and 6.0.

## Outputs

### Hub {#hub-out}

Where the operation happens: a hub and its ports. There is one Hub block per hub of the profile.

- **Hub**: a hub of the profile.
- **Ports**: one or more ports of that hub (A–D on most hubs and on SBrick, A–F on Robot Inventor and Mould King 6.0, 1–4 on BuWizz 2.0, 1–4 plus A and B on BuWizz 3.0 Pro). A port can belong to one row only.
- Takes: an operation. Technic Move Hubs and whole-hub operations take no ports.
- More: [Hub block and ports](/docs/Application/Links/HubsAndPorts).

### Indicator {#dash-indicator}

Shows the value on a dashboard monitor, as it is.

- Takes: value or on/off, with no operation before it.
- **Dashboard indicator**: a **Text monitor** (Monitor), a **Value monitor** (Battery level, Speedometer) or a **Tilt monitor** on the dashboard.
- **Axis**: **Tilt X** or **Tilt Y**, for a Tilt monitor only (one row per axis).
- A text monitor right after a hub sensor shows the real value with its unit.

### Hub LED {#hub-led}

The colour status light of the hub: one colour while the input is on, another while it is off.

- Takes: value or on/off, with no operation before it.
- **Hub**: a hub with a colour LED.
- **Colour**: **From the list** (default) or **RGB**.
- **Colour when on** (default Red) and **Colour when off** (default Off): Off, Pink, Purple, Blue, Light blue, Light green, Green, Yellow, Orange, Red, White.
- **Red**, **Green**, **Blue** (RGB): 0, 32, 64, 128, 192 or 255 (default 255, 0, 0).
- Hubs: LEGO® hubs (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, the Powered Up remote); not BuWizz, SBrick or Mould King.

### LED matrix {#hub-matrix}

The light matrix of the hub.

- Takes: value or on/off, with no operation before it.
- **Hub**: a hub with an LED matrix.
- **Show**: **Level bar** (default; rows light up from the bottom with the value), **Number** (the value from −100 to 100) or **Image when on**.
- **Image**: **Heart** (default), **Smile**, **Sad**, **Check**, **Cross**, **Arrow up**, **Arrow down**, **Arrow left**, **Arrow right** or **All on**.
- **Orientation**: **Keep** (default), **Upright**, **Upside down**, **Left** or **Right**.
- Hubs: Robot Inventor. The matrix is cleared when the program stops.

### Calibrate servos {#cmd-calibrate}

Each time the input turns on, every [Servo](#op-servo) in **Auto** mode in the program calibrates again.

- Takes: value or on/off, with no operation before it. No settings.
- The program must have a ready Servo row in Auto mode, otherwise the row reports "No servo in Auto calibration mode in this program".
