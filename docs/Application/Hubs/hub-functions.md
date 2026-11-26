---
id: HubFunctions
title: Hub-specific functions
description: "Special functions of Technic Move, BuWizz, SBrick, Mould King, Robot Inventor and other hubs in both editors."
---

# Hub-specific functions

Every hub with ports can run motors and lights. Some hubs can do more. In **Quick Links**, these functions appear in the palette only when such a hub is in the profile; in **Logic Blocks**, they are hub-specific blocks.

## Motors with encoders (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro)

| Function | Quick Links | Logic Blocks |
|---|---|---|
| Speed control | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | Set motor speed, Start motor at speed |
| Steering servo with calibration | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manual / Auto) | Go to relative position, Calibrate steering rack |
| Turn by an angle | [Run for degrees](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | Run for |
| Absolute position (angular motors) | [Go to position](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | Go to position |
| Behavior at stop: coast, brake, hold | Motor → **At stop** | Set motor behavior at stop |
| Hub acceleration presets | Motor → **Hub acceleration** | Set acceleration, Set deceleration |
| Speed, position, power, current as input | [Hub input](/docs/Application/Links/Blocks/InputBlocks#src-hub) | Speed, Position, Relative position, Power |

## Technic Move Hub

The hub of the LEGO® Technic remote-controlled cars (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Driving, steering and lights are controlled by function, not by port.
- **Steering** calibrates its own rack.
- **Brake**, **Boost** (power mode) and **Power pulse** (with the Batmobile™ Tumbler configuration only).
- **Hub configurations**: load a car profile into the hub with **My Hubs → Select config**. See [Technic Move Hub configurations](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Logic Blocks: the car profile blocks (*start motors*, *set steering rack to*, *set motors brake*, *power pulse*, *turn lights*, *set power mode*), or the ordinary port blocks: motors `A`, `B` (drive) and `C` (steering; *calibrate rack* on `C`, then *go to relative position*), lights `1`–`6` one by one, tilt, acceleration and orientation. Use one way per hub: both command the same motors and lights. See [Motors → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub).
- Quick Links: the hub's own rows (drive, steering, lights); a [Hub input](/docs/Application/Links/Blocks/InputBlocks#src-hub) can also read its tilt and acceleration.

## BuWizz 2.0

- **Power mode**: Slow, Normal, Fast, Ludicrous. Quick Links: the [Power mode](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) operation; Logic Blocks: *BuWizz 2 set power mode*.
- The current power mode, the **output voltage** and the motor current as inputs.
- Simple speed control on ports 1–4: no position control.

## BuWizz 3.0 Pro

- **Port colour** LEDs on ports 1–4: from a list or RGB ([Port colour](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *BuWizz 3 set LED color*).
- Motor current as an input, relative positions.

## SBrick and SBrick Plus

- Motors and lights with speed control.
- No position control: Servo, Run for degrees and Go to position are not available.

## Mould King 4.0 and 6.0

- Commands only: no sensors, no buttons, no connection feedback.
- **Control channel** A, B or C: the Quick Links [Channel](/docs/Application/Links/Blocks/OutputBlocks#op-channel) operation, the Logic Blocks *MouldKing set control channel* block, or **Select channel** in My Hubs.
- Up to 3 Mould King 4.0 or 1 Mould King 6.0 per profile, and only one Mould King type per profile.

## Robot Inventor (LEGO® Large Hub)

All about connecting, firmware and the blocks: [MINDSTORMS Robot Inventor hub](/docs/Application/Hubs/RobotInventorHub).

- **LED matrix**: a level bar, a number or an image in Quick Links; text and pixels in Logic Blocks.
- **Distance sensor lights** (the sensor's "eyes").
- **Stall detection** and motor power.
- All the blocks of the Robot Inventor app: [Movement](/docs/Application/BlockBuilder/Blocks/Movement), hub sounds and music, gestures, yaw, the Force Sensor, hub-to-hub radio.
- Classic Bluetooth (not available on iPhone and iPad) or a USB cable on Windows and Mac.

## LEGO® hubs with a colour LED

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor and the remote: you can set the hub LED colour from a list or as RGB (Quick Links [Hub LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led), Logic Blocks *Set LED color*).

## LEGO® Powered Up Remote Control

Its buttons are inputs, so you can drive a model with the physical remote through MOCPilot (Quick Links: **Hub** input → Button; Logic Blocks: hub button events).

## Built-in sensors

Battery level and voltage, board temperature, tilt (pitch, roll, yaw), acceleration and orientation are available on hubs that have them. Set **Hub orientation** (Quick Links) or *set tilt orientation* (Logic Blocks) to match how the hub is mounted.

In Logic Blocks, the Technic Hub, Technic Move Hub, Robot Inventor and SPIKE Prime hubs also report their rotation speed (gyroscope, *rotation speed (°/s)*), and the Technic Hub reports the current it draws (*current (mA)*). See [Sensors](/docs/Application/BlockBuilder/Blocks/Sensors#hub-state).
