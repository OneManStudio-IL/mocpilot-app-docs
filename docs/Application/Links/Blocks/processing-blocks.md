---
id: ProcessingBlocks
title: Processing blocks
description: "Reference of every Quick Links processing block: Invert, Limit, Dead zone, Threshold, Smooth and Toggle."
---

# Processing blocks

Processing blocks sit between the input and the operation (or the indicator) and change the signal on its way. A row can have any number of them, in any order. A block that cannot take the incoming signal does not snap in; in a file it is reported as "… does not work with this controller". How to use them: [Processing](/docs/Application/Links/Processing).

## Invert {#mod-invert}

Flips the signal.

- No settings.
- Takes: value or on/off. Gives: the same kind.
- Value: changes the sign (0.7 becomes −0.7). On/off: on becomes off and off becomes on.

## Limit {#mod-limit}

Scales the value down, so full deflection gives no more than the maximum.

- **Maximum**: 20, 30, 40, 50, 60, 70, 80 or 90 % (default 50 %).
- Takes: value or on/off. Gives: value (a limited button gives 0 or the maximum).

## Dead zone {#mod-deadzone}

Treats small values around zero as zero; the rest is stretched back to the full range, so full deflection still gives 1.

- **Zone**: 5, 10, 15, 20 or 30 % (default 10 %).
- Takes: value. Gives: value.

## Threshold {#mod-threshold}

Turns a value into on/off.

- **On when the value is**: **Above** (default) or **Below**.
- **Level (of full scale)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 or 90 % (default 20 %).
- Takes: value. Gives: on/off.
- A small hysteresis (2 % of full scale) keeps the output from flickering when the value hovers at the level.

## Smooth {#mod-smooth}

Moves towards the incoming value gradually instead of jumping.

- **Acceleration (to full speed)**: **Instant**, 0.25, 0.5, 1, 2 or 3 s (default 0.5 s): the time from 0 to full away from zero.
- **Deceleration (to stop)**: the same choices (default 0.5 s): the time from full back to 0.
- Takes: value or on/off. Gives: value (a smoothed button ramps up and down).

## Toggle {#mod-toggle}

Turns a push button into a switch: each press changes the output between on and off. The output starts off.

- No settings.
- Takes: on/off. Gives: on/off.
