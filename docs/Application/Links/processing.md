---
id: Processing
title: Processing
description: "Quick Links processing blocks: Invert, Limit, Dead zone, Threshold, Smooth and Toggle."
---

# Processing

Processing blocks sit between the input and the operation and change the value on its way. A row can have none, one or several, in any order. Settings and allowed values: [Processing blocks](/docs/Application/Links/Blocks/ProcessingBlocks).

| Block | What it does |
|---|---|
| [Invert](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | flips the direction, or swaps on and off |
| [Limit](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | caps the value |
| [Dead zone](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignores small movements around zero |
| [Threshold](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | turns a value into on/off |
| [Smooth](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | speeds up and slows down gradually |
| [Toggle](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | press once for on, again for off |

## Invert

Motor turning the wrong way? Add **Invert** instead of rebuilding the model. For two motors that must turn in opposite directions (left and right tracks, two sides of a gearbox), make two rows from the same input and put Invert in one of them.

## Limit

Makes the model slower and easier to control: with **Maximum** 50 %, full stick gives half speed. Good for kids, indoor driving and delicate mechanisms.

## Dead zone

A joystick rarely rests exactly at zero, so a motor may hum or creep. **Dead zone** treats small values as zero. 10 % is a good start.

## Threshold

Turns a value into on/off: "on when the value is **Above** 20 %". With a sensor, *Distance sensor* → *Threshold* (Below, 20 %) is on when something is close. Threshold has a little hysteresis, so it does not flicker at the edge.

## Smooth

Starts and stops gradually, like a real vehicle. Acceleration and deceleration are set separately: a heavy truck may take 2 s to speed up and 0.5 s to stop. On a light, Smooth fades it in and out.

## Toggle

Turns a button into a switch: press once for on, press again for off. *Button* → *Toggle* → *Light*.

## Tips

- Order matters: *Dead zone → Limit → Smooth* is a good chain for driving.
- A block that does not fit the signal won't snap in: Toggle needs an on/off input; Dead zone and Threshold need a value.
- Watch the live values while the program runs to see what each block does.
