---
id: Motors
title: Motors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motors

Motor blocks start, stop and position motors connected to hub ports, and tune how they move. The category appears when a hub in the profile has motor ports. In every block you pick the hub and one or more ports.

Some blocks need a motor with a built-in rotation sensor (encoder), such as the Technic angular motors, and a hub that can control it. These blocks are marked "encoder motors". They aren't available for SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 and Mould King hubs. The Technic Move Hub has its own set of blocks at the end of this page.

## Running motors

### `set speed to …` (Advanced) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Sets the speed (from −100 to 100 %) that **start motor** and **run … for** use on these ports. This block doesn't start the motor by itself.

### `start motor …` (Beginner) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Starts the motor in the selected direction at the speed set by **set speed to**.

- Direction: clockwise or counterclockwise

### `start motor at … % speed` (Beginner) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Starts the motor at the given speed, from −100 to 100 %. A negative speed turns it the other way.

- Typical use: drive from a joystick or a slider: put the control's value into the speed slot.

### `stop motor` (Beginner) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stops the motor.

### `run … for …` (Advanced) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Runs the motor in the selected direction for a number of rotations, degrees or seconds.

- Direction: clockwise or counterclockwise
- Units: `rotations`, `degrees`, `seconds`
- Encoder motors only.

### `run for … at … % speed` (Advanced) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Runs the motor for a number of rotations, degrees or seconds at the given speed.

- Units: `rotations`, `degrees`, `seconds`
- Encoder motors only.

## Position

### `go … to position …` (Advanced) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Turns the motor to an absolute position (the motor's own zero mark).

- Path: `shortest path`, `clockwise`, `counterclockwise`
- Encoder motors only.

### `go to relative position … at … % speed` (Beginner) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Turns the motor to a position, in degrees, counted from the point set by **set relative position to**.

- Typical use: steering with a servo, where the joystick value gives the angle.
- Encoder motors only; on BuWizz 3 use the block below.

### `go to relative position …` (BuWizz 3) (Beginner) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
The BuWizz 3 version of the block above, without the speed input.

- Hubs: BuWizz 3, with encoder motors.

### `set relative position to …` (Beginner) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Declares the motor's current position to be the given value. Relative positions are counted from it.

- Encoder motors only.

### `calibrate rack … center … degrees …` (Beginner) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Finds the center and the travel of a steering rack.

- The motor turns the rack to both ends, measures how far it can go and puts the result into the two variables you place in the slots: the center position and the range in degrees. The rack stops in the middle, but its relative position there equals the center value, not 0, so add **set relative position to** 0 right after this block; then steer with `range × joystick / 100`.
- The steering must have hard mechanical stops at both ends (the end of the rack or the gearing).
- Encoder motors only.

## Motor settings

### `set motor to … at stop` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Chooses what the motor does when it stops.

- `brake`: stops quickly.
- `hold position`: actively holds its position (useful for steering).
- `coast`: spins down freely.
- Encoder motors only.

### `turn stall detection …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Turns stall detection on or off. With it on, a motor that gets blocked gives up instead of pushing on, so a block that waits for the motor can finish.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (the block has the hub icon).

### `set acceleration to …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Chooses how quickly the motor speeds up.

- Options: `default`, `fast`, `balanced`, `smooth`, `slow`, `very slow`
- Encoder motors only.

### `set deceleration to …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Chooses how quickly the motor slows down.

- Options: `default`, `fast`, `balanced`, `smooth`, `slow`, `very slow`
- Encoder motors only.

## Motor values

### `position` (Beginner) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Returns the motor's absolute position.

- Encoder motors only.

### `relative position` (Beginner) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Returns the motor's relative position, in degrees.

- Encoder motors only.

### `speed` (Beginner) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Returns the motor's current speed.

### `power` (Advanced) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Returns the motor's current power.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (the block has the hub icon).

## Robot Inventor {#robot-inventor-motors}

These blocks come from the Robot Inventor app and work only with the [MINDSTORMS Robot Inventor and SPIKE Prime hubs](/docs/Application/Hubs/RobotInventorHub). They carry the hub icon. To drive a two-wheeled robot, see the [Movement](/docs/Application/BlockBuilder/Blocks/Movement) blocks.

### `start motor at … % power` (Advanced) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Starts the motors on the selected ports at the given power, from −100 to 100 % (default 75 %). Unlike **start motor at … % speed**, the motor doesn't keep a regulated speed: under load it slows down, like a motor without an encoder.

### `was the motor interrupted?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true` if the last command of the motor on this port didn't finish because another motor block on the same port cut it short.

## Technic Move Hub

The Technic Move Hub drives its built-in motors with these blocks instead of the port blocks above.

### `start motors at … % speed` (Beginner) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Starts the drive motors at the given speed.

### `power pulse` (Beginner) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Sends a power pulse to the drive motors.

- Typical use: a short boost before the next blocks.

### `stop motors` (Beginner) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stops the drive motors.

### `set motors brake …` (Beginner) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Turns the drive motors' brake on or off.

- Options: `off`, `on`

### `set steering rack to …` (Beginner) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Turns the steering to the given position.

### `calibrate steering rack` (Beginner) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibrates the steering with the hub's own algorithm, which finds the steering range automatically.

- The steering must have hard mechanical stops (for example, the ends of the steering rack).
