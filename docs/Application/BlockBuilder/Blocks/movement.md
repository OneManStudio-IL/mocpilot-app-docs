---
id: Movement
title: Movement
description: "Movement blocks drive a two-motor robot on the MINDSTORMS Robot Inventor or SPIKE hub: move, steer, tank drive, speed, acceleration and stopping."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Movement

Movement blocks drive a robot with two wheels, each turned by its own motor, as a single unit: "move forward 10 cm", "turn clockwise for 1 rotation", "steer 30 to the right". They are the same movement blocks as in the LEGO® MINDSTORMS® Robot Inventor app. The category appears first in the palette when the profile has a [Robot Inventor or SPIKE Prime hub](/docs/Application/Hubs/RobotInventorHub). All of its blocks carry the black-and-white hub icon.

## How movement works {#how-movement-works}

- **Movement motors.** By default the left wheel is on port **A** and the right wheel on port **B**. Use [set movement motors to](#block_ri_move_set_pair) to choose other ports. The two motors face each other on a robot, so MOCPilot turns the right one the other way: a positive speed always drives the robot forward.
- **Movement speed.** Blocks without their own speed use the movement speed: **50 %** until [set movement speed to](#block_ri_move_set_speed) changes it.
- **Steering** is a number from −100 to 100. **0** drives straight. Positive values turn right, negative values turn left: the inner wheel slows down, the more the closer the steering gets to ±100 (at 50 it turns at half speed). At **100** or **−100** the wheels turn in opposite directions and the robot spins on the spot.
- **Units.** Distances can be in `cm`, `inches`, `rotations` or `degrees` of the motors, and many blocks also take `seconds`. Centimetres and inches use the distance per motor rotation: **17.5 cm** by default (the Robot Inventor wheel), changed with [set 1 motor rotation to](#block_ri_move_set_distance). A negative distance drives the other way.
- **Waiting.** Blocks with a distance (`move … for …`) wait until the robot has gone that far. Blocks that start with **start moving** return at once: the robot keeps driving until **stop moving** or another movement block.

## Movement settings {#movement-settings}

### `set movement motors to … …` (Beginner) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Chooses the ports of the left and the right wheel motor. Defaults: **A** and **B**. The two ports must be different.

### `set movement speed to … %` (Beginner) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Sets the speed, from −100 to 100 %, of the movement blocks that have no speed of their own. Default: 50 %. It doesn't start the motors.

### `set 1 motor rotation to … cm / inches moved` (Advanced) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Tells MOCPilot how far the robot moves in one motor rotation, so that distances in centimetres and inches come out right. Default: 17.5 cm. Measure your robot: let it **move forward for 1 rotation** and measure the distance. A value of 0 is ignored.

### `set movement acceleration to …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
How quickly the movement motors speed up and slow down.

- Options: `default`, `fast` (0.1 s), `balanced` (0.35 s), `smooth` (0.8 s), `slow` (1.2 s), `very slow` (2 s): the time from standstill to full speed.

### `set movement motors to … at stop` (Advanced) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
What the motors do when the robot stops.

- `coast`: the motors run freely and the robot rolls to a stop.
- `brake` (default): the motors brake.
- `hold position`: the motors actively hold their position, even if you push the robot.

## Moving {#moving}

### `move … for …` (Beginner) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Moves the robot at the movement speed and waits until it's done.

- Direction: `forward`, `backward`, `clockwise`, `counterclockwise` (the last two spin the robot on the spot).
- Units: `cm`, `inches`, `rotations`, `degrees`, `seconds`. Default: 10 cm.

### `move … for …` (with steering) (Beginner) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Moves the robot with the given steering (−100 to 100) at the movement speed and waits until it's done. With steering 30 the robot drives a curve to the right.

- Units: `cm`, `inches`, `rotations`, `degrees`, `seconds`.

### `move … for … at … % speed` (Advanced) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
The same with its own speed instead of the movement speed.

- Units: `cm`, `inches`, `rotations`, `degrees`.

### `move for … at … … % speed` (Advanced) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Tank drive for a distance: sets the left and the right wheel speed separately (−100 to 100 % each) and waits until the robot has gone that far.

- Units: `cm`, `inches`, `rotations`, `degrees`, `seconds`.

### `start moving …` (Beginner) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Starts moving with the given steering at the movement speed and goes on to the next block at once.

### `start moving … at … % speed` (Advanced) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Starts moving with the given steering and speed.

- Typical use: put a dashboard slider into the steering slot and a pedal into the speed slot.

### `start moving … at … % power` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Like the block above, but sets the motor **power** instead of a regulated speed: the motors don't try to keep the speed when the robot climbs or carries a load.

### `start moving at … … % speed` (Advanced) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Tank drive: starts the left and the right wheel at their own speeds.

### `start moving at … … % power` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Tank drive with the motor power of each wheel instead of a regulated speed.

### `stop moving` (Beginner) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Stops both movement motors the way **set movement motors to … at stop** says (brake by default).

### `was movement interrupted?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true` if the last movement didn't finish: another movement block or **stop moving** cut it short.
