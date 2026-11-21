---
id: LinksIntroducing
title: Introducing Quick Links
description: "Quick Links connects dashboard controls to hub motors and lights row by row, with no code."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Quick Links

**Quick Links** is MOCPilot's no-code program editor. You connect dashboard controls, the gamepad or hub sensors to motors, lights and indicators, **one row at a time**. If you have used the classic Controlz app, you will feel at home.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Quick Links rows" style={{width: '100%', maxWidth: 720}} />

## A row reads like a sentence

Each row runs from left to right:

**Input → Processing (optional) → Operation → Output**

> *Joystick 1, Y axis* → *Smooth* → *Motor* → *Technic Hub, port A*
>
> "When I move the joystick up and down, the motor on port A turns, starting and stopping smoothly."

| Part | What it is | Examples |
|---|---|---|
| **Input** | where the value comes from | a dashboard control, the simulated vehicle, the gamepad, a hub button or sensor |
| **Processing** | changes the value on the way (none, one or several blocks) | Invert, Limit, Dead zone, Threshold, Smooth, Toggle |
| **Operation** | what the hub should do | Motor, Servo, Motor for time, Light, Run for degrees, Go to position… |
| **Output** | where it happens | a **Hub** with its ports, or a direct output: Indicator, Hub LED, LED matrix, Calibrate servos |

Direct outputs (Indicator, Hub LED, LED matrix, Calibrate servos) need no operation: *Hub battery → Indicator*.

## The editor

<Screenshot name="links-editor" alt="Quick Links editor with rows and the palette" width={900} />

- **Rows** fill the screen and scroll vertically. New rows start in the last, empty row ("New row: input").
- The **palette** at the bottom has three tabs: **Inputs**, **Processing** and **Outputs**. It is built from your profile: every dashboard control and every hub in My Hubs appears automatically, the gamepad appears when gamepad blocks are on, and an operation appears only if a hub of the profile can do it.
- The **Problems** button in the top bar shows a green check when every row is ready, or a red "!" with the number of problems.

## Build a row

1. Drag an input from **Inputs** into the empty row. A new row is created.
2. If you need to, drag processing blocks from **Processing** after the input.
3. Drag an operation (for example, **Motor**) from **Outputs**.
4. Drag the **Hub** output after the operation and tap the ports to use.
5. Tap any block to change its settings: you pick from chips, no typing.

Blocks fit together like puzzle pieces. The shape of each joint shows the kind of signal, so blocks that cannot work together don't snap:

- a **value** from −1 to 1 (joystick axes, sliders, pedals, sensors);
- **on/off** (buttons, switches, thresholds);
- the **operation → hub** joint, so a hub can only follow an operation.

To remove a block, drag it back onto the palette ("Drop here to remove"), or tap it and choose **Remove block**.

## Rows

Tap the row number to open the row menu:

- **Turn off** / **Turn on**: a turned-off row stays in the program but does not run. Handy for experiments.
- **Remove row**.

You can add as many rows as you like.

## Run

Press **Run**. While the program runs, every joint shows the **live value** passing through it, so you can see exactly where a signal stops. You can't edit while the program is running; press **Stop** to edit again. See [Running and fixing problems](/docs/Application/Links/Problems).

## Undo

**Undo** and **Redo** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z, or the floating buttons) go back up to 100 steps. They are not available while the program runs.

## Read more

- [Inputs](/docs/Application/Links/Inputs): controls, the vehicle, the gamepad, hub buttons and sensors
- [Processing](/docs/Application/Links/Processing): Invert, Limit, Dead zone, Threshold, Smooth, Toggle
- [Operations and outputs](/docs/Application/Links/Operations)
- [Hub block and ports](/docs/Application/Links/HubsAndPorts)
- [Running and fixing problems](/docs/Application/Links/Problems)
- [Examples: car, tank, crane, train](/docs/Application/Links/Examples)
- Blocks reference: [inputs](/docs/Application/Links/Blocks/InputBlocks), [processing](/docs/Application/Links/Blocks/ProcessingBlocks), [operations and outputs](/docs/Application/Links/Blocks/OutputBlocks)

## Quick Links or Logic Blocks?

Quick Links is ideal when each control simply moves something. When you need logic (sequences, conditions, variables, or a multi-step reaction to a sensor), use [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). You choose the program type when you create the profile; see the [comparison](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
