---
id: Examples
title: Examples
description: "Logic Blocks example programs for driving, steering, lights, sounds, battery warnings and sensors."
---

# Examples

Short programs to start from. Block names follow the [block reference](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); values in brackets are the hub, the port or a reporter block placed in a slot. Indented lines go inside a C block.

## Drive with a joystick

Dashboard: joystick **JOY1**. Drive motor on port A.

```text
when program starts
forever
    start motor at (joystick JOY1 y-axis) % speed  (Hub 1, port A)
```

## Steer with a servo

Steering motor (an angular motor) on port B. Set its current position as the center, then follow the joystick: `× 0.9` turns the joystick's −100…100 into −90…90 degrees.

```text
when program starts
set relative position to 0  (Hub 1, port B)
forever
    go to relative position (joystick JOY1 x-axis × 0.9) at 100 % speed  (Hub 1, port B)
```

For a steering rack with end stops, calibrate it first (see [Motors](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `center` and `range` are variables. After calibration the rack stands in the middle, but its relative position there is the center value, not 0, so set it to 0 before steering:

```text
when program starts
calibrate rack (center) center (range) degrees  (Hub 1, port B)
set relative position to 0  (Hub 1, port B)
forever
    go to relative position ((range × joystick JOY1 x-axis) ÷ 100) at 100 % speed  (Hub 1, port B)
```

## Lights on a switch

```text
when switch SWCH1 is toggled on
    turn on at 100 % brightness  (Hub 1, port C)
when switch SWCH1 is toggled off
    turn off  (Hub 1, port C)
```

## Horn button

```text
when button BTN1 is pressed
    sound Car horn play until done
```

## Battery warning

Monitor **MNTR1**; the button turns red when the battery is low.

```text
when program starts
forever
    show (Hub 1 % battery) on MNTR1 monitor
    if (Hub 1 % battery) < 20 then
        set BTN1 color to red
    wait 5 seconds
```

## Stop before an obstacle

Technic Distance Sensor on port D, drive motor on port A.

```text
when program starts
forever
    if (distance cm  (Hub 1, port D)) < 10 then
        stop motor  (Hub 1, port A)
        set LED color to red  (Hub 1)
    else
        start motor at (slider SLDR1) % speed  (Hub 1, port A)
        set LED color to green  (Hub 1)
```

## Speed limit on a stepper

Stepper **STPR1** with 4 steps limits the top speed.

```text
when program starts
forever
    set (speed limit) to (stepper STPR1 × 25)
    start motor at (joystick JOY1 y-axis × speed limit / 100) % speed  (Hub 1, port A)
```

`speed limit` is a variable (**Variables → Make a variable**).

## Startup check

Lock the throttle until both hubs are connected.

```text
when program starts
set JOY1 interactivity disable
wait until (Hub 1 connected) and (Hub 2 connected)
show "Ready" on MNTR1 monitor
set JOY1 interactivity enable
```

## Gamepad

Set **Gamepad values range** to −100…100 on the [Gamepad page](/docs/Application/Dashboard/Gamepad) and turn on **Enable gamepad blocks**.

```text
when program starts
forever
    start motor at (stick left y-axis) % speed  (Hub 1, port A)
    go to relative position (stick right x-axis × 0.9) at 100 % speed  (Hub 1, port B)
```

## Car with pedals

For a car driven with pedals, a gearbox and a handbrake, see the [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## More

- Install official profiles from the [catalog](/docs/Application/Profiles/Catalog) and study their programs.
- Try the Logic Blocks demo on [mocpilot.com](https://mocpilot.com).
