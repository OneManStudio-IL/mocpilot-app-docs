---
id: ControlTypes
title: Control types
description: "Joystick, directional pad, sliders, rotary knob, buttons, switches, step switches, monitors and special controls."
---

# Control types

Every [theme](/docs/Application/Themes/ThemesOverview) draws the same set of control types in its own style. The free **Basic** theme has nine of them; every paid theme adds the **Rotary knob** and three graphic monitors. Steering wheels, pedals, gear shifters and the other [special controls](/docs/Application/Dashboard/SpecialControls) are separate products.

| Control | Name on the dashboard | Gives the program | Available in |
|---|---|---|---|
| Joystick | JOY | X and Y axes | all themes |
| Directional Pad | DPAD | up / down / left / right buttons | all themes |
| Slider | SLDR | a value | all themes |
| Ver. slider | VSLDR | a value | all themes |
| Rotary knob | DIAL | a value | paid themes |
| Button | BTN | pressed / released | all themes |
| Switch | SWCH | on / off | all themes |
| Step switch | STPR | a step number | all themes |
| Ver. step switch | VSTPR | a step number | all themes |
| Monitor | MNTR | shows text or a value | all themes |
| Battery level | MNTBT | shows a level | paid themes |
| Speedometer | MNTSP | shows a speed | paid themes |
| Tilt monitor | MNTLT | shows pitch and roll | paid themes |
| Steering wheel, pedals, gearboxes, handbrake, turn signals, train controller | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | see [Special controls](/docs/Application/Dashboard/SpecialControls) | special products |

The name on the dashboard gets a number: the first joystick is **JOY1**, the second **JOY2**.

## Joystick

A stick that springs back to the centre. It gives an **X** (left/right) and a **Y** (up/down) value; the centre is zero.

- **Axes type**: **Both axes (X, Y)**, **Only horizontal (X)** or **Only vertical (Y)**. A one-axis joystick is easier to use when it only drives or only steers.
- Typical use: Y for driving and X for steering, or one joystick per track of a tank.

## Directional Pad

Four buttons: up, down, left and right. Each one is either pressed or released. In Quick Links a D-pad axis gives −1, 0 or +1 (**Up / down** or **Left / right**), which is handy for step-by-step movements such as a crane hook.

## Slider and Ver. slider

A handle that moves along a horizontal or vertical track.

- **Return to zero**: the handle springs back when you let go (like a throttle) instead of staying where you leave it (like the speed setting of a train).
- **Negative values**: zero is in the middle, so the slider gives negative and positive values (reverse and forward).
- **Step value**: the slider moves in steps.

## Rotary knob {#rotary-knob}

A round knob, like a volume control, in the **Sliders** group of every paid theme. Turn it with one finger around its centre: it turns about 135° each way and stays where you leave it.

- **Detent steps (0 = smooth)** (0–24): with steps, the knob clicks from one detent to the next.
- **Centre zero (-100..100)**: the knob gives −100 to 100 with zero in the middle, instead of 0 to 100.
- Blocks: *when rotary … is turned / pressed / released / turned to minimum / turned to maximum*, *rotary value …*, *is rotary … pressed / at minimum / at maximum?* See [Dashboard controllers](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- In Quick Links the knob works like a [slider](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

The Basic theme has no rotary knob. Since every paid theme has one, **Change theme** switches a knob to the look of another theme.

## Button

Pressed while you hold it, released when you let go. Use it for a horn or a short movement, or with the **Toggle** block in Quick Links to switch something on and off.

## Switch

Stays on or off: tap it to change. Use it for lights, modes or a winch lock.

## Step switch and Ver. step switch

A **−** / **+** control that counts steps, like gears or the speed levels of a train.

- **Steps count**: 1 to 100 (default 10).
- **Negative values**: allows steps below zero (reverse levels).
- **Enable reset**: tapping the value returns it to zero.

## Monitor

Shows text or a number from the program: speed, battery, the name of a mode, a sensor value.

- **Text layout** (single or multiple lines), **Text overflow** (Clip, Wrap, Marquee, Scroll), **Maximum lines**, scrolling options, **Text alignment** and **Text scale**.

## Battery level, Speedometer, Tilt monitor

Graphic indicators in the paid themes. The program sets their value: a hub's battery, a motor's speed, the tilt of a hub. **Tilt monitor** has **Invert pitching** and **Invert rolling**. See [Indicators and monitors](/docs/Application/Dashboard/Indicators).

## Special controls

A steering wheel, pedals, a manual or automatic gearbox, a handbrake, a turn signal stalk and a train controller. Each is a separate product with many looks. See [Special controls](/docs/Application/Dashboard/SpecialControls).

## Interactivity

Every interactive control has **Interactivity** (on by default). A non-interactive control doesn't react to touches. The program can switch interactivity on and off, for example to block the throttle until a startup check is done.
