---
id: Examples
title: "Examples: car, tank, crane, train"
description: "Ready-made Quick Links recipes for a car, a tank, a crane and a train."
---

# Examples

Ready-made recipes. Put the controls on the dashboard and add the hubs in My Hubs first, then build the rows.

## Car with servo steering

Dashboard: **JOY1** (Only vertical) on the left, **JOY2** (Only horizontal) on the right, **BTN1** and a **Battery level** monitor.

| # | Input | Processing | Operation | Output |
|---|---|---|---|---|
| 1 | JOY1, Y axis | Dead zone 10 %, Smooth 0.5 s | Motor | Technic Hub, ports A + B |
| 2 | JOY2, X axis | | Servo (Auto, ±90°) | Technic Hub, port D |
| 3 | BTN1 | Toggle | Light | Technic Hub, port C |
| 4 | Hub: Battery | | | Indicator: Battery level |

If one drive motor turns the wrong way, split row 1 into two rows and add **Invert** to one of them.

## Car with a wheel, pedals and a gearbox

Dashboard: a **Steering wheel**, **Pedals**, a **Gear shifter**, a **Handbrake** and **Turn signals**. The [Vehicle](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) input turns the pedals, gearbox and handbrake into a speed that builds up and fades like a real car's.

| # | Input | Processing | Operation | Output |
|---|---|---|---|---|
| 1 | Vehicle: Speed | | Motor | Technic Hub, ports A + B |
| 2 | Wheel: Steering angle | | Servo (Auto) | Technic Hub, port D |
| 3 | Vehicle: Braking | | Light | Technic Hub, port C (brake lights) |
| 4 | Turn signals: Left turn signal | | Light | City Hub, port A |
| 5 | Turn signals: Right turn signal | | Light | City Hub, port B |

## Tank (two tracks)

Dashboard: two vertical sliders **VSLDR1** and **VSLDR2** with **Return to zero** and **Negative values** on.

| # | Input | Processing | Operation | Output |
|---|---|---|---|---|
| 1 | VSLDR1 | Smooth 0.25 s | Motor | Hub, port A |
| 2 | VSLDR2 | Invert, Smooth 0.25 s | Motor | Hub, port B |

With a gamepad, use Left stick Y for row 1 and Right stick Y for row 2.

## Crane

Dashboard: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Input | Processing | Operation | Output |
|---|---|---|---|---|
| 1 | DPAD1, Left / right | Limit 50 % | Motor | Hub, port A (slewing) |
| 2 | DPAD1, Up / down | | Motor | Hub, port B (hook winch) |
| 3 | SLDR1 | Dead zone 10 % | Motor | Hub, port C (boom) |
| 4 | SWCH1 | | Light (blink 0.5 s) | Hub, port D (beacon) |

## Train

Dashboard: a **Step switch** **STPR1** with **Negative values** (forward and reverse speed levels) and **BTN1** for the lights.

| # | Input | Processing | Operation | Output |
|---|---|---|---|---|
| 1 | STPR1 | Smooth 2 s | Motor | City Hub, port A |
| 2 | BTN1 | Toggle | Light | City Hub, port B |
| 3 | Hub: Battery | | | Indicator: Monitor |

The Smooth block makes the train pull away and stop like a real one. With a **train controller** on the dashboard, use it in row 1 instead of STPR1: it gives the lever position, negative in reverse.

## Technic Move car

| # | Input | Processing | Operation | Output |
|---|---|---|---|---|
| 1 | Vehicle: Speed | | Motor | Technic Move (drive) |
| 2 | Wheel: Steering angle | | Servo | Technic Move (steering) |
| 3 | BTN1 | Toggle | Light | Technic Move (lights) |
| 4 | BTN2 | | Boost | Technic Move |

Without a gear shifter on the dashboard, the car reverses when you hold the brake pedal at a standstill.

## Try it in the browser

The Quick Links demo on [mocpilot.com](https://mocpilot.com) has a sample profile with rows like these; see [Web editor](/docs/Introducing/WebEditor).
