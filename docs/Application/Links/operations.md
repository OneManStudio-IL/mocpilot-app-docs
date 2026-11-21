---
id: Operations
title: Operations and outputs
description: "Quick Links operations (Motor, Servo, Light and more) and outputs (Hub, Indicator, Hub LED, LED matrix, Calibrate servos)."
---

import Screenshot from '@site/src/components/Screenshot';

# Operations and outputs

The **Outputs** tab of the palette holds operations and outputs.

- An **operation** says *what* to do (turn a motor, steer, blink a light). A **Hub** output always follows it and says *where*: which hub and which ports.
- A **direct output** (Indicator, Hub LED, LED matrix, Calibrate servos) ends the row by itself, without an operation.

The common operations (Motor, Servo, Motor for time, Light) are always there. Hub-specific operations appear only when a hub of the profile supports them. Every setting with its values and default: [Operation and output blocks](/docs/Application/Links/Blocks/OutputBlocks).

## Motors and lights

| Operation | What it does | Typical use |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | runs the motor at the input's value; 0 stops it | driving, winches |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | turns a motor with an encoder to a position that follows the input | steering |
| [Motor for time](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | runs the motor for a set time on each press | doors, tippers |
| [Run for degrees](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | turns the motor by a set angle on each press | indexing, turntables |
| [Go to position](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | sends an angular motor to one position when on and another when off | flaps, gear selectors |
| [Light](/docs/Application/Links/Blocks/OutputBlocks#op-light) | lights LEGO® lights, steady or blinking | headlights, beacons, turn signals |
| [Port colour](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | colours the port LEDs of a BuWizz 3.0 Pro | status colours |
| [Sensor lights](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | lights the "eyes" of the Technic distance sensor (Robot Inventor) | robot faces |

### Steering with Servo

Servo needs a motor with an encoder and a steering mechanism that you either centre by hand or that has end stops.

- **Manual**: turn the axle to the middle and tap **Set as zero**; fine-tune with **◀ 5°** / **5° ▶**. Then choose the **Angle** and, if the wheels still pull to one side, the **Centre**.
- **Auto**: at every start the motor turns to both end stops, the middle becomes zero and the travel becomes the angle. **Calibrate now** runs it right away. Messages: "Calibrating: the motor turns to both end stops…", "Calibrated: the servo turns ±…°, the centre is zero", "Calibration failed: check the hub, the motor and that the axle has end stops".

On a **Technic Move Hub**, the hub steers and calibrates its own rack; only the calibration mode applies.

<Screenshot name="links-servo-settings" alt="Settings of a Servo block" width={900} />

## Operations for the whole hub

These control the hub as a whole, so the Hub block after them has no ports.

| Operation | Hub | What it does |
|---|---|---|
| [Brake](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | brakes while the input is on |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | boost power mode while on, normal when off |
| [Power pulse](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | one power pulse per press (Batmobile™ Tumbler configuration only) |
| [Power mode](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | switches the power mode: Slow, Normal, Fast, Ludicrous |
| [Channel](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | switches the control channel: A, B, C |

## Outputs {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): the hub and its ports. See [Hub block and ports](/docs/Application/Links/HubsAndPorts).
- [Indicator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): shows the value on a dashboard monitor (text monitor, Battery level, Speedometer, Tilt monitor). Right after a hub sensor, a text monitor shows the real value with its unit. The indicator shows the value as it is, so the row has no operation. See [Indicators and monitors](/docs/Application/Dashboard/Indicators).
- [Hub LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led): the colour light of a LEGO® hub, one colour while the input is on and another while it is off.
- [LED matrix](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): the light matrix of the Robot Inventor hub: a level bar, a number or an image.
- [Calibrate servos](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): recalibrates every Servo in **Auto** mode. Put it on a dashboard button: *BTN3* → *Calibrate servos*.

## When the program stops

Motors stop, the LED matrix is cleared, and port colours and sensor lights go off.
