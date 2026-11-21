---
id: ArrangingControls
title: Add and arrange controls
description: "Add controls from the palette, move and resize them, duplicate, lock and delete them."
---

import Screenshot from '@site/src/components/Screenshot';

# Add and arrange controls

## Add a control

1. On the dashboard, tap **+** (**Add Controller**). On a computer, the palette opens in its own window.
2. Choose a control type in the list. The types are grouped: **Joysticks**, **Sliders**, **Buttons and switches**, **Monitors**, then **Vehicle & special** for the [special controls](/docs/Application/Dashboard/SpecialControls) and **My designs** for the designs you saved. To find a control quickly, type in **Search controls**.
3. The looks strip shows the selected type in every [theme](/docs/Application/Themes/ThemesOverview) (for a special control, all its looks). Tap a look to see it in the large preview; you can try it out right there.
4. Set the control up in **Configure**: the **Style** and **Settings** tabs and the size.
5. Tap **Add to dashboard**. On a computer, you can add several controls in a row.

<Screenshot name="controller-palette" alt="The Add Controller palette" width={900} />

The control goes to the first free area and gets a **NEW** badge. If there is no room, MOCPilot tells you so: make some space or choose a smaller size.

Controls of themes you don't own show **Purchase** and **All with MocPilot Pro** instead of **Add to dashboard**. See [Get, buy and update themes](/docs/Application/Themes/GettingThemes).

## Move

In edit mode, press and drag a control. When you release it, it snaps to the nearest grid cell. If it would overlap another control, it jumps back.

## Sizes {#sizes}

Every control has three sizes: **S**, **M** and **L**. Change it with **Size** in the control's properties. Sizes in grid cells (width × height):

| Control | S | M | L |
|---|---|---|---|
| Joystick, Directional Pad | 7×7 | 10×10 | 13×13 |
| Slider | 10×3 | 14×4 | 18×5 |
| Ver. slider | 3×10 | 4×14 | 5×18 |
| Rotary knob | 6×6 | 8×8 | 10×10 |
| Button, Switch | 3×3 | 4×4 | 5×5 |
| Step switch | 8×3 | 12×4 | 16×5 |
| Ver. step switch | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Battery level, Speedometer | 6×6 | 8×8 | 10×10 |
| Tilt monitor | 8×4 | 12×6 | 16×8 |
| Steering wheel | 8×8 | 12×12 | 16×16 |
| Pedals | 11×8 | 16×12 | 21×16 |
| Manual gearbox, Automatic gearbox | 8×8 | 10×10 | 12×12 |
| Handbrake | 4×7 | 6×10 | 8×13 |
| Turn signals | 8×5 | 10×6 | 14×8 |
| Train controller | 6×8 | 8×10 | 10×13 |

The whole field is 40 × 20 cells. If a larger size doesn't fit, move the neighbours first.

## Select and edit

Tap (click) a control to select it and open its **properties**. See [Control properties](/docs/Application/Dashboard/ControlProperties).

## Context menu

Long-press (touch screen) or right-click (computer) a control:

- **Lock** / **Unlock**
- **Properties**
- **Change theme**: switch the control to another theme you own that has the same control type
- **Duplicate**: a copy with the same properties
- **Duplicate (Type Only)**: a new control of the same type with default properties
- **Delete**

Long-press or right-click an empty part of the field:

- **Lock all** / **Unlock all**
- **Delete N controller(s)**: deletes all unlocked controls

On a computer, with the properties panel open: **Esc** closes it, **Delete** / **Backspace** deletes the control, **⌘D / Ctrl+D** duplicates it.

## Lock controls

A **locked** control can't be moved or deleted, so you won't knock it out of place while driving or editing. It shows a lock icon. Lock one control from its menu or with **Lock the controller** in its settings, or lock everything with **Lock all**.

## Control names

Each control has a short name shown on its frame in edit mode, such as **JOY1**, **SLDR2** or **BTN1**. The program refers to controls by these names: in Quick Links the input block says *JOY1*, and in Logic Blocks you choose *JOY1* in the block's menu.

## Delete

Use **Delete** in the menu or the trash button in the properties. Locked controls can't be deleted. A control the program uses can't be deleted until you remove its rows or blocks.
