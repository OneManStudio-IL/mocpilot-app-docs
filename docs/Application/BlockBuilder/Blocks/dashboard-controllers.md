---
id: DashboardControllers
title: Dashboard controllers
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Dashboard controllers

These blocks read the controls on the dashboard, react when you use them and change how they look. They are in the **Dashboard controllers** category, which appears as soon as the dashboard has a control. Each control type adds its own blocks; in a block you choose the control by its name, such as *BTN1* or *GEAR1*.

Ranges used below: most analog values go from 0 to 100, or from −100 to 100 when zero is in the middle.

On this page:

- [Blocks for all controls](#blocks-for-all-controls): color, interactivity and sounds
- [Buttons and switches](#buttons-and-switches): button, switch, step switch
- [Joysticks and D-pads](#joysticks-and-d-pads)
- [Sliders and knobs](#sliders-and-knobs): slider, rotary knob
- [Monitors](#monitor-blocks)
- [Steering wheel and pedals](#steering-wheel-and-pedals)
- [Other special controls](#other-special-controls): gearbox, handbrake, turn signals, transfer case, train controller

## Blocks for all controls {#blocks-for-all-controls}

### `Set controller color` (Advanced) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*set [control] color to [colour]*: changes the accent colour of a control.

- Type: command block
- Works with the controls that have an accent colour (not with the steering wheel or the pedals)
- Typical use: show a state, for example a button that turns red when the battery is low

### `Set controller interactivity` (Advanced) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[enable / disable] [control] interactivity*: a disabled control doesn't react to touches.

- Type: command block
- Typical use: block a control for a while, for example the throttle until a startup check is done

### `Sound of a control` (Beginner) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*sound [sound] of [control]*: one of the sounds of a control, for the *play sound* blocks of the **Sounds** category.

- Type: value block
- Appears when the dashboard has a control with sounds: the [steering wheel](/docs/Application/Dashboard/SpecialControls#steering-wheel) (car, truck and sports car horns) or the [pedals](/docs/Application/Dashboard/SpecialControls#pedals) (car, sports car and truck brakes, reverse beeper)
- The sound plays only if the control's **Sound effects** setting and the app sound are on

## Buttons and switches {#buttons-and-switches}

### Button blocks {#button-blocks}

#### `Button event` (Beginner) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*when button [control] is [pressed / released]*: runs the script when the button is pressed or released.

- Type: event block

#### `Button value (boolean)` (Beginner) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*is button [control] [pressed / released]*: whether the button is pressed or released right now.

- Type: value block, `true` / `false`

### Switch blocks {#switch-blocks}

#### `Switch event` (Beginner) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*when switch [control] is toggled [on / off]*: runs the script when the switch is turned on or off.

- Type: event block

#### `Switch value (boolean)` (Beginner) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*is switch [control] [on / off]*: whether the switch is on or off.

- Type: value block, `true` / `false`

### Stepper blocks {#stepper-blocks}

These blocks work with the step switch and the vertical step switch.

#### `Stepper event` (Beginner) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*when stepper [control] [any / reset / minus / plus] is [pressed / released]*: runs the script when a button of the step switch is pressed or released (**any** means any of them).

- Type: event block

#### `Stepper value (float)` (Beginner) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*stepper [control]*: the current step number.

- Type: value block

## Joysticks and D-pads {#joysticks-and-d-pads}

### Joystick blocks {#joystick-blocks}

#### `Joystick event` (Beginner) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*when joystick [control] is [up / down / left / right / moved / released]*: runs the script when the stick is pushed in a direction, moved at all or released.

- Type: event block

#### `Joystick value (float)` (Beginner) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [control] [x-axis / y-axis]*: the position of the stick on one axis, from −100 to 100; the centre is 0.

- Type: value block

#### `Joystick value (boolean)` (Beginner) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*is joystick [control] [pressed / released]*: whether a finger is on the joystick.

- Type: value block, `true` / `false`

### D-pad blocks {#d-pad-blocks}

#### `D-pad event` (Beginner) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*when D-pad [control] [up / down / left / right] button is [pressed / released]*: runs the script when a D-pad button is pressed or released.

- Type: event block

#### `D-pad value (boolean)` (Beginner) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*is D-pad [control] [up / down / left / right] button [pressed / released]*: whether a D-pad button is pressed or released right now.

- Type: value block, `true` / `false`

## Sliders and knobs {#sliders-and-knobs}

### Slider blocks {#slider-blocks}

These blocks work with the slider and the vertical slider.

#### `Slider event` (Beginner) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*when slider [control] is [low / high / moved / released]*: runs the script when the handle reaches the low or the high end, moves, or is released.

- Type: event block

#### `Slider value (float)` (Beginner) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*slider [control]*: the position of the handle, from 0 to 100, or from −100 to 100 with **Negative values**.

- Type: value block

### Rotary knob blocks {#rotary-knob-blocks}

Blocks of the [rotary knob](/docs/Application/Dashboard/ControlTypes#rotary-knob) of the paid themes.

#### `Rotary knob event` (Beginner) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*when rotary [control] is [turned / pressed / released / turned to minimum / turned to maximum]*: runs the script when the knob is turned, touched, let go, or reaches one of its ends.

- Type: event block

#### `Rotary knob value (float)` (Beginner) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*rotary value [control]*: the position of the knob, from 0 to 100, or from −100 to 100 with **Centre zero (-100..100)**.

- Type: value block

#### `Rotary knob value (boolean)` (Beginner) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*is rotary [control] [pressed / at minimum / at maximum] ?*: whether a finger is on the knob, or the knob is at one of its ends.

- Type: value block, `true` / `false`

## Monitors {#monitor-blocks}

Blocks of the [monitors](/docs/Application/Dashboard/Indicators).

### `Monitor show` (Beginner) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*show [value] on [control] monitor*: shows text or a value on a **Monitor**.

- Type: command block
- Typical use: show the battery level, a motor angle, the device connected to a hub port or the name of a mode

### `Monitor set value` (Beginner) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*set [value] to [control] monitor*: sets the value of a **Battery level** or **Speedometer** monitor.

- Type: command block

### `Monitor tilt set value` (Beginner) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*set [value] to [control] [pitch / roll] monitor*: sets the pitch or the roll shown on a **Tilt monitor**.

- Type: command block

## Steering wheel and pedals {#steering-wheel-and-pedals}

### Steering wheel blocks {#steering-wheel-blocks}

Blocks of the [steering wheel](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Steering wheel event` (Beginner) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*when steering wheel [control] is [moved / pressed / released]*: runs the script when the wheel turns, or when you touch it or let it go.

- Type: event block

#### `Steering wheel value (float)` (Beginner) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*steering wheel [control]*: the steering angle, from −100 (full left) to 100 (full right).

- Type: value block

#### `Steering wheel value (boolean)` (Beginner) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*is steering wheel [control] [pressed / released]*: whether a finger is on the wheel.

- Type: value block, `true` / `false`

### Pedals blocks {#pedals-blocks}

Blocks of the [pedals](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Pedals event` (Beginner) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*when pedals [control] [any / brake / acceleration] is [moved / pressed / released]*: runs the script when a pedal moves, is pressed or is released.

- Type: event block

#### `Pedals value (float)` (Beginner) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedals [control] [acceleration / brake]*: how far the accelerator or the brake is pressed, from 0 to 100.

- Type: value block

#### `Pedals value (boolean)` (Beginner) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*is pedal [control] [acceleration / brake] [pressed / released]*: whether a pedal is pressed.

- Type: value block, `true` / `false`

## Other special controls {#other-special-controls}

Blocks of the other [special controls](/docs/Application/Dashboard/SpecialControls).

### Gearbox blocks {#gearbox-blocks}

Blocks of the [manual and automatic gearboxes](/docs/Application/Dashboard/SpecialControls#gear-shifter). Gear values: manual −1 = R, 0 = N, 1…6 = forward gears; automatic −2 = P, −1 = R, 0 = N, 1 = D.

#### `Gearbox event` (Beginner) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*when gearbox [control] [shifts gear / shifts up / shifts down / shifts into neutral / shifts into reverse / shifts into park]*: runs the script when the gear changes. **Shifts up** and **shifts down** mean a move to a higher or lower value.

- Type: event block

#### `Gear` (Beginner) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*gear [control]*: the engaged gear (see the values above).

- Type: value block

#### `Gearbox state (boolean)` (Beginner) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*is gearbox [control] [in neutral / in reverse / in a forward gear / in park] ?*

- Type: value block, `true` / `false`
- **In a forward gear** is true in any forward gear of the manual gearbox and in D of the automatic

#### `Number of gears` (Advanced) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*gears of [control]*: the gearbox's **Number of gears** setting.

- Type: value block
- Typical use: the *of* socket of the Simulator's *drive* block

### Handbrake blocks {#handbrake-blocks}

Blocks of the [handbrake](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Handbrake event` (Beginner) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*when handbrake [control] is [pulled / locked / unlocked / released]*: runs the script when the lever is pulled, locked, unlocked or let go.

- Type: event block

#### `Handbrake force` (Beginner) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*handbrake force [control]*: how far the lever is pulled, from 0 to 100.

- Type: value block

#### `Handbrake state (boolean)` (Beginner) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*is handbrake [control] [locked / unlocked / pulled] ?* **Pulled** is true while the force is above 0.

- Type: value block, `true` / `false`

### Turn signals blocks {#turn-signals-blocks}

Blocks of the [turn signals](/docs/Application/Dashboard/SpecialControls#turn-signals). They see the steady state of the signals, without the blinking.

#### `Turn signals event` (Beginner) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*when turn signals [control] [left signal / right signal / light] [turns on / turns off]*

- Type: event block

#### `Turn signals state (boolean)` (Beginner) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*turn signals [control] [left signal / right signal / light] is on ?*

- Type: value block, `true` / `false`

### Transfer case blocks {#transfer-case-blocks}

Blocks of the [transfer case](/docs/Application/Dashboard/SpecialControls#transfer-case). The second list in the event and state blocks has the same choices:

- **2H**, **4H**, **N**, **4L**: the selector is in this position;
- **four-wheel drive**: the selector is in 4H or 4L;
- **low range**: the selector is in 4L;
- **front lock**, **center lock**, **rear lock**: the differential lock is engaged.

#### `Transfer case event` (Beginner) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*when transfer case [control] [2H / 4H / N / 4L / four-wheel drive / low range / front lock / center lock / rear lock] [engages / disengages]*: **engages** runs when the choice becomes true (the selector reaches the position, or the lock is switched on), **disengages** when it stops being true.

- Type: event block

#### `Transfer case state (boolean)` (Beginner) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*transfer case [control] [2H / 4H / N / 4L / four-wheel drive / low range / front lock / center lock / rear lock] is engaged ?*

- Type: value block, `true` / `false`

#### `Transfer case position (float)` (Beginner) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*transfer case position [control]*: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Plug it into the *transfer case* socket of the [drive](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive) block to let the simulator use the transfer case.

- Type: value block

### Train controller blocks {#train-controller-blocks}

Blocks of the [train controller](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Train controller event` (Beginner) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*when train controller [control] [notch changed / notch raised / notch lowered / throttle closed / reverser moved / lever released]*: **Throttle closed** means the lever came back to notch 0.

- Type: event block

#### `Train controller value (float)` (Beginner) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*train controller [control] [traction / power notch / reverser]*:

- **traction**: from −100 to 100, the notch as a percentage with the sign of the direction;
- **power notch**: 0 to 8;
- **reverser**: 1 = forward, 0 = neutral, −1 = reverse.
- Type: value block

#### `Train controller state (boolean)` (Beginner) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*is train controller [control] [in forward / in reverse / in neutral / at notch 0] ?*

- Type: value block, `true` / `false`
