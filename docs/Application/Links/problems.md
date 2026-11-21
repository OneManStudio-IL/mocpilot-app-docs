---
id: Problems
title: Running and fixing problems
description: "Problems panel, red frames, live values and common Quick Links messages."
---

import Screenshot from '@site/src/components/Screenshot';

# Running and fixing problems

## Is everything ready?

The **Problems** button in the editor's top bar shows:

- a **green check**: "All rows are ready";
- a **red "!"**: "Problems: N".

Tap it to open the problems panel (a side panel on a phone, a menu on a tablet or computer). It lists "Row N — reason"; tap an item to jump to that row. The block that causes the problem has a **red frame**. When everything is fine, the panel says "Every row that is turned on can run."

<Screenshot name="links-problems" alt="Problems panel with a row that is not ready" width={900} />

Rows with problems don't run; the other rows do.

## Common messages

| Message | What to do |
|---|---|
| Drag an input and an output (a hub or a dashboard indicator) into the row | the row is empty |
| Add an input at the start of the row | drag a control, the vehicle, the gamepad or a hub input first |
| Add an output: a hub or a dashboard indicator | finish the row with an output |
| Add an operation before the hub: motor, servo, light | a Hub output needs an operation before it |
| Choose at least one port on the hub | tap a port chip on the Hub block |
| Choose a dashboard controller | tap the input block and pick a control |
| … does not move along this axis | the joystick has one axis only: pick the other axis or change the joystick |
| Choose what … gives | the control no longer has this channel: pick one |
| Choose the pedals of the vehicle | the Vehicle input needs pedals on the dashboard |
| … is not on the dashboard | the gear shifter or handbrake chosen for the Vehicle was removed |
| "…" does not work with this controller | this processing block does not fit the signal |
| Port A: this device cannot work as a servo (a motor with an encoder is needed) | use a motor with an encoder or another operation |
| Port A has a sensor, not a motor | check what is plugged into the port |
| Port A is also used in row 2 | each port can belong to one row only |
| Turn on gamepad blocks on the Gamepad page (top bar) | open **Gamepad** and turn on **Enable gamepad blocks** |
| The indicator shows the value as it is: remove the operation | an Indicator row has no operation |
| Calibration needs no operation: remove it | a Calibrate servos row has no operation |
| Choose a hub with a colour LED (LEGO hubs) | Hub LED works on LEGO® hubs only |
| Port colours are available on BuWizz 3 only | Port colour needs a BuWizz 3.0 Pro |
| No servo in Auto calibration mode in this program | Calibrate servos needs a Servo in Auto mode |
| This block needs a newer version of the app | the profile was made in a newer version: update MOCPilot |
| The row is turned off | turn it on in the row menu |

## Live values

While the program runs, each joint between blocks shows the value passing through it. Move a control and follow the value along the row:

- nothing changes at the input: the control or gamepad is not sending anything; check the channel or axis;
- the value changes but the motor does not move: check the hub's connection dot and the port;
- the value is small after **Limit** or **Dead zone**: adjust their settings.

<Screenshot name="links-live-values" alt="A running Quick Links program with live values on the joints" width={900} />

## The model does not move

1. Is the hub connected? Check **My Hubs** and the connection dot on the Hub block.
2. Is the right port chosen? Are the motors plugged in where you think?
3. Is the row turned on, with no red frame?
4. Is the program running (**Run**)?
5. Is the battery charged? Add a *Battery → Indicator* row to keep an eye on it.

More in [Troubleshooting](/docs/Help/Troubleshooting).
