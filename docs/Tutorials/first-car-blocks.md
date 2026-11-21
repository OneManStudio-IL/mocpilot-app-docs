---
id: FirstCarBlocks
title: The same car in Logic Blocks
description: "Step by step: program a remote-controlled LEGO car with drive, servo steering, lights and turn signals in Logic Blocks."
---

import Screenshot from '@site/src/components/Screenshot';

# The same car in Logic Blocks

This tutorial builds the car from [Your first RC car with Quick Links](/docs/Tutorials/FirstCarLinks) again, this time in [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). You get the same result, a joystick that drives and steers and a button for the lights, and you learn the basics of block programming on the way: events, loops, variables and the Monitor. At the end you can add turn signals with a ticking sound.

**What you need**: the same model as in the Quick Links tutorial:

- a LEGO® Technic™ Hub (88012);
- a drive motor on **port A**;
- a steering motor with an encoder on **port B** (a Technic L or XL motor or any Technic angular motor);
- LEGO® lights on **port C** (optional).

With a City Hub, use ports **A** and **B** and leave out the lights.

**The result**:

```text
when program starts
set (lights) to 0
set relative position to 0  (Hub 1, port B)
forever
    set (throttle) to (joystick JOY1 y-axis)
    start motor at (throttle) % speed  (Hub 1, port A)
    go to relative position (joystick JOY1 x-axis × 0.9) at 100 % speed  (Hub 1, port B)

when button BTN1 is pressed
    if (lights) = 0 then
        turn on at 100 % brightness  (Hub 1, port C)
        set (lights) to 1
    else
        turn off  (Hub 1, port C)
        set (lights) to 0
```

How to read the listings: each line is one block, as the app shows it. Values in brackets are the hub and port you choose in the block, or a block or variable that you drop into a slot. Indented lines go inside the C block above them.

## 1. Create the profile {#create-the-profile}

1. On **My profiles**, start a new profile (**+** → **New Profile** on a phone, **New Profile** on a tablet, **File → New Profile** on a computer).
2. Choose the **Logic Blocks** tile.
3. Enter a **Name** and set **Block level** to **Advanced**. The **forever** loop and **if … then … else** used here are Advanced blocks; the **Beginner** palette doesn't show them.
4. Tap **Create**.

You can change the level later in **Editor Settings** → **Select blocks level**. See [Create a profile](/docs/Application/Profiles/CreateProfile) and [Block levels](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Add the hub and the controls {#hub-and-dashboard}

Do it exactly as in the Quick Links tutorial:

1. [Add and connect the hub](/docs/Tutorials/FirstCarLinks#add-the-hub) in **My Hubs**.
2. [Put the controls on the dashboard](/docs/Tutorials/FirstCarLinks#dashboard): a **Joystick** (**JOY1**) on the left and a **Button** (**BTN1**) on the right.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard with the JOY1 joystick on the left and the BTN1 button on the right" width={900} />

Once the hub is in the profile, the palette shows the **Motors** and **Light** categories; the controls appear in **Dashboard controllers**.

## 3. Events or a loop? {#events-or-loop}

A script starts with an **event** block and runs the blocks below it from top to bottom. Several scripts run at the same time.

- An event block such as [when button … is pressed](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) runs its script once each time the event happens. Events suit things that happen at a moment: a button press, a switch, a turn signal.
- A joystick changes all the time. The simplest way to follow it is a script that starts with [when program starts](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) and keeps reading the stick in a [forever](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) loop.

This car uses both: a loop for driving and steering, and an event for the lights.

## 4. Drive {#drive}

1. From **Events**, drag [when program starts](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) into the program area.
2. From **Control**, attach [forever](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) below it.
3. From **Motors**, drop [start motor at … % speed](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) inside **forever**. Choose the hub and port **A**.
4. From **Dashboard controllers**, drag the [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) value block into the speed slot. Choose **JOY1** and **y-axis**.

```text
when program starts
forever
    start motor at (joystick JOY1 y-axis) % speed  (Hub 1, port A)
```

Put the car on a stand, press **Run** and push the joystick: the joystick gives −100 to 100, which is exactly the motor speed in percent. Press **Stop** when you're done.

**Drives backward when you push up?** Use [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) from **Operators**: `(joystick JOY1 y-axis × -1)`. **Too fast?** Multiply by 0.5 instead.

## 5. Steer {#steer}

The steering motor follows the joystick's X axis with [go to relative position … at … % speed](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Relative positions are counted from the point you set with [set relative position to …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Attach **set relative position to** right below **when program starts**, above **forever**. Leave the value at 0 and choose port **B**.
2. Inside **forever**, below the motor block, add **go to relative position … at … % speed** with port **B**.
3. Into its position slot, drop **… × …**, with the joystick's **x-axis** on the left and `0.9` on the right. This turns −100…100 into −90…90 degrees.
4. Set the speed to 100.

```text
when program starts
set relative position to 0  (Hub 1, port B)
forever
    start motor at (joystick JOY1 y-axis) % speed  (Hub 1, port A)
    go to relative position (joystick JOY1 x-axis × 0.9) at 100 % speed  (Hub 1, port B)
```

Before each **Run**, turn the wheels straight by hand: that position becomes the centre. If the wheels turn too far, use a smaller number than 0.9; if they steer the wrong way, use −0.9.

### Option: calibrate the steering automatically {#calibrate-rack}

If the steering has end stops, [calibrate rack … center … degrees …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) finds the centre and the travel for you. Make two variables first (**Variables** → **Make a variable**), for example `center` and `range`, and drop them into the block's slots. The block turns the rack to both ends, stops in the middle and writes the results into the variables; the script continues when calibration is done.

```text
when program starts
calibrate rack (center) center (range) degrees  (Hub 1, port B)
set relative position to 0  (Hub 1, port B)
forever
    start motor at (joystick JOY1 y-axis) % speed  (Hub 1, port A)
    go to relative position ((range × joystick JOY1 x-axis) ÷ 100) at 100 % speed  (Hub 1, port B)
```

**set relative position to 0** right after calibration makes the middle the zero, so full stick turns the wheels by the measured travel.

## 6. Lights on a button {#lights}

Quick Links has a ready Toggle block. In Logic Blocks, a [variable](/docs/Application/BlockBuilder/Blocks/Variables) remembers whether the lights are on.

1. In **Variables**, tap **Make a variable** and name it `lights`.
2. Add [set … to …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) to the start of the main script: `set (lights) to 0`.
3. From **Dashboard controllers**, drag [when button … is pressed](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) to an empty spot and choose **BTN1**.
4. Below it, add [if … then … else](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) with the condition [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(lights) = 0`.
5. In the first branch, add [turn on at … % brightness](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (port **C**) and `set (lights) to 1`. In the second branch, add [turn off](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (port **C**) and `set (lights) to 0`.

```text
when button BTN1 is pressed
    if (lights) = 0 then
        turn on at 100 % brightness  (Hub 1, port C)
        set (lights) to 1
    else
        turn off  (Hub 1, port C)
        set (lights) to 0
```

With a **Switch** instead of the button it is even simpler: *when switch … is toggled on / off*; see the [examples](/docs/Application/BlockBuilder/Examples).

## 7. Run and watch the Monitor {#monitor}

When something doesn't work as expected, look at the values. The [Monitor](/docs/Application/BlockBuilder/Editor#monitor) in the top bar shows every variable while the program runs.

1. Make a variable `throttle`.
2. In the loop, store the joystick value in it and use the variable for the motor speed:

```text
forever
    set (throttle) to (joystick JOY1 y-axis)
    start motor at (throttle) % speed  (Hub 1, port A)
    go to relative position (joystick JOY1 x-axis × 0.9) at 100 % speed  (Hub 1, port B)
```

3. Press **Run** and open **Monitor**. Move the joystick and press BTN1: `throttle` follows the stick, and `lights` switches between 0 and 1.

<Screenshot name="blocks-monitor" alt="Monitor showing variables and a list while the program runs" width={900} />

- `throttle` changes but the motor doesn't turn: check the hub connection in **My Hubs** and the port in the block.
- `throttle` stays at 0: check that the block reads **JOY1** and the right axis.

In Logic Blocks the program stays editable while it runs, so you can change a number and see the effect at once. Here is the whole program:

<Screenshot name="tutorial-car-blocks-program" alt="The finished car program: the main script with the forever loop and the BTN1 lights script" width={900} />

More help: [Troubleshooting](/docs/Help/Troubleshooting).

## 8. Optional: turn signals with sound {#turn-signals}

Add the **Turn signals** [special control](/docs/Application/Dashboard/SpecialControls#turn-signals) (**STALK1**) to the dashboard and plug a light into **port D**. Drag the stalk up for the left signal and down for the right one.

```text
when turn signals STALK1 left signal turns on
    sound Turn signal play
    repeat until not (turn signals STALK1 left signal is on ?)
        turn on at 100 % brightness  (Hub 1, port D)
        wait 0.5 seconds
        turn off  (Hub 1, port D)
        wait 0.5 seconds
    stop sound Turn signal
```

The blocks: [when turn signals …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) and [turn signals … is on ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) in **Dashboard controllers**; [sound … play](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) and [stop sound …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) in **Sounds**; [repeat until …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) and [wait … seconds](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) in **Control**; [not …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) in **Operators**.

The **Turn signal** sound repeats by itself until you stop it. The sound plays on your phone, tablet or computer.

Duplicate the script (long-press or right-click → **Duplicate**) and choose **right signal** in both blocks. Both signals then blink the same light on port D; for separate left and right lamps you need two free ports, for example on a second hub.

## Quick Links or Logic Blocks: which to choose? {#which-to-choose}

| | Quick Links | Logic Blocks |
|---|---|---|
| This car | 3 rows | 2 scripts, 2 variables |
| Smooth start, dead zone, limit | ready blocks | multiply and calculate yourself |
| Servo steering | Servo block with Auto calibration | relative position blocks or calibrate rack |
| Lights on a button | Toggle block | a variable and *if … then … else* |
| Sounds, sequences, conditions | no | yes |
| Live values | on every joint of a row | the Monitor and dashboard monitors |
| Editing while running | no | yes |

Choose **Quick Links** when every control simply moves something: cars, trucks, trains, cranes. Choose **Logic Blocks** when you need logic: sounds, blinking patterns, sequences, reactions to sensors, games. The program type can't be changed, but you can make a second profile for the same model. More in [Create a profile](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Next steps {#next-steps}

- Show the battery on a dashboard **Monitor** and warn when it runs low: [Examples](/docs/Application/BlockBuilder/Examples#battery-warning).
- Drive with a gamepad: [Gamepad blocks](/docs/Application/BlockBuilder/Blocks/Gamepad) and the [gamepad example](/docs/Application/BlockBuilder/Examples#gamepad).
- Make the car feel real with pedals, a gearbox and inertia: [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).
- Learn the editor: [Working in the editor](/docs/Application/BlockBuilder/Editor).
