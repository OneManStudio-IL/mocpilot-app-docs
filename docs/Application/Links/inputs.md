---
id: Inputs
title: Inputs
description: "Quick Links inputs: dashboard controls, the simulated vehicle, the gamepad, hub buttons and hub sensors."
---

import Screenshot from '@site/src/components/Screenshot';

# Inputs

Every row starts with an input. The **Inputs** tab of the palette lists:

- one block per **dashboard control**; controls with several channels (joystick and D-pad axes, steering wheel, pedals, gear shifter, handbrake, turn signals) get one block per channel;
- the **Vehicle** blocks, when the dashboard has pedals, a gear shifter or a handbrake;
- the **Gamepad** block, when gamepad blocks are turned on;
- one **Hub** block per hub of the profile (except Mould King, which has no buttons or sensors).

If the tab is empty, it says "Add controllers on the dashboard or hubs in My Hubs: they appear here".

<Screenshot name="links-palette-inputs" alt="The Inputs tab of the Quick Links palette" width={900} />

Every setting and value of each input is listed in the [Input blocks](/docs/Application/Links/Blocks/InputBlocks) reference.

## Dashboard controls

A [Controller](/docs/Application/Links/Blocks/InputBlocks#src-controller) block takes a control from your dashboard by its name (**JOY1**, **SLDR1**, **BTN2**…) and, if the control has several, the **Channel** you want:

| Control | What the row gets |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **X axis** or **Y axis**, −1…1 |
| [Slider](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [train controller](/docs/Application/Links/Blocks/InputBlocks#controller-train), [rotary knob](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | its position |
| [Steering wheel](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Steering angle** −1…1 or **Horn** |
| [Pedals](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Accelerator pedal** or **Brake pedal**, 0…1 |
| [Gear shifter](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Gear** or **Direction (R − / forward +)** |
| [Handbrake](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Handbrake locked** (on/off) or **Handbrake force** |
| [Turn signals](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Turn signals (left − / right +)**, **Left turn signal**, **Right turn signal** or **Light** |
| [Transfer case](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase) | **Four-wheel drive**, **Low range**, **Front differential lock**, **Center differential lock** or **Rear differential lock** (on/off) |
| [D-pad](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Up / down** or **Left / right**: −1, 0 or +1 |
| [Button](/docs/Application/Links/Blocks/InputBlocks#controller-button) | on while pressed |
| [Switch](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | on / off |
| [Step switch](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | the current step |

When you add, rename or change a control on the dashboard, the palette and the rows follow automatically. If you set a joystick to **Only horizontal**, rows that use its Y axis report "… does not move along this axis".

## Drive like a real car

The steering wheel, pedals, gear shifter and handbrake give their raw positions: a pedal row runs the motor exactly as far as the pedal is pressed. For a model that behaves like a car (it speeds up with inertia, coasts, brakes and reverses in R), use the [Vehicle](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) input instead. It reads the pedals, the gear shifter and the handbrake together and gives the vehicle's **Speed**, **Engine speed (rpm)**, **Braking** or **On the handbrake**:

- *Vehicle (Speed)* → *Motor* → drive motors;
- *Steering wheel (Steering angle)* → *Servo* → steering;
- *Vehicle (Braking)* → *Light* → brake lights;
- *Turn signals (Left turn signal)* → *Light* → left indicator lamp.

## Gamepad

One [Gamepad](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) block covers the whole controller; choose a stick, trigger or button in **Input**. Turn on **Enable gamepad blocks** on the [Gamepad page](/docs/Application/Dashboard/Gamepad) first. The labels follow **Gamepad buttons layout** (Xbox or PlayStation).

## Hub buttons and sensors

A [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) input reads a hub's button or one of its sensors: battery, tilt, acceleration, motor speed and position, distance and colour sensors on the ports, and more. The list shows only what that hub can report. For tilt and acceleration, set **Hub orientation** to match how the hub sits in the model.

The value travels along the row scaled to −1…1. A text **Monitor** right after a sensor shows the real value with its unit, such as "7.85 V" or "−12°".

Typical uses:

- *Battery* → *Indicator* (Battery level);
- *Distance sensor* → *Threshold* (Below, 20 %) → *Motor for time*: back off when something gets close;
- *Button 1* (Powered Up remote) → *Motor*: drive with the physical remote.
