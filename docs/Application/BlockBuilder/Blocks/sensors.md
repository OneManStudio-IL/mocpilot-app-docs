---
id: Sensors
title: Sensors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensors

Sensor blocks read the state of your phone or tablet, the program timer, the hubs and the sensors connected to them. Use their values in conditions, events and calculations.

On this page:

- [Hub state](#hub-state): battery, voltage, temperature, current and power mode
- [Hub buttons, tilt and orientation](#hub-tilt-and-orientation)
- [Sensors on ports](#sensors-on-ports): any device, Technic Color Sensor, Technic Distance Sensor, BOOST Color & Distance Sensor, WeDo 2.0 sensors
- [Robot Inventor hub](#robot-inventor-sensors): Force Sensor, gestures, orientation, yaw, pitch and roll, tilt, hub-to-hub radio
- [This device](#this-device): the phone, tablet or computer that runs MOCPilot
- [Timer](#timer)

## Hub state {#hub-state}

These blocks don't exist for Mould King hubs, which don't report any data.

### `… % battery` (Beginner) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Returns the hub's battery level, in percent.

### `… battery voltage (V)` (Advanced) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Returns the hub's battery voltage, in volts.

- Hubs: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Returns `NaN` when the hub isn't connected.

### `… temperature (C°)` (Advanced) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Returns the temperature of the hub's electronics, in degrees Celsius.

- Hubs: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `get … output voltage (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Returns the voltage the hub currently supplies to its ports, in volts.

- Hubs: BuWizz 2.

### `… current (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Returns the current drawn on the selected port, in amperes.

- Hubs: BuWizz 2, BuWizz 3.

### `set power mode …` (Technic Move Hub) (Beginner) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Sets the power mode of a Technic Move Hub.

- Modes: `normal`, `boost`
- Hubs: Technic Move Hub.

## Hub buttons, tilt and orientation {#hub-tilt-and-orientation}

The button block lists the hubs it works with. The tilt and orientation blocks work on BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub and Robot Inventor.

### `is … … button …` (Beginner) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Returns `true` when the selected hub button is in the selected state.

- States: `pressed`, `released`
- Hubs: LEGO Powered Up hubs, WeDo 2.0 and Robot Inventor. The list of buttons depends on the hub (usually `center`).

### `… … angle` (Beginner) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Returns the hub's tilt angle.

- Angles: `pitch`, `roll`, `yaw`
- `yaw` is available only on the Technic Hub and Robot Inventor.

### `… … accelerometer (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Returns the raw accelerometer reading of the hub along one axis.

- Axes: `x`, `y`, `z`

### `… … acceleration (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Returns the hub's acceleration along one axis.

- Axes: `x`, `y`, `z`

### `get … orientation as …` (Beginner) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Returns which side of the hub faces up.

- Output: `text` or `index`
- Values: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `… orientation is …` (Beginner) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Returns `true` when the selected side of the hub faces up.

- Options: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

### `set … tilt orientation to …` (Advanced) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Tells the hub how it is mounted in the model, so that tilt and orientation are measured from that position.

- Options: `Front`, `Top`, `Right`, `Back`, `Bottom`, `Left`

## Sensors on ports {#sensors-on-ports}

The Technic and BOOST sensor blocks below work on the City Hub, Technic Hub, BOOST Move Hub and the MINDSTORMS Robot Inventor hub (not SBrick, BuWizz, WeDo 2.0 or Mould King).

### Any device on a port {#any-port-device}

#### `… device type` (Beginner) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Returns the type of the device connected to the selected port.

- Hubs: all hubs with ports except SBrick, SBrick Plus and BuWizz 2.
- Typical use: check what is connected before running device-specific blocks.

### Technic Color Sensor {#technic-color-sensor}

#### Technic sensor: `set mode to …` (Advanced) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Switches the Technic Color Sensor to the selected mode.

- Modes: `default`, `ambient`
- Changing the mode can affect your program in unexpected ways: in `ambient` mode the sensor can't read colors or reflected light.

#### Technic sensor: `color …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Returns the color seen by the Technic Color Sensor.

- Output: `value` (a number) or `string` (the color name)

#### Technic sensor: `is color …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Returns `true` when the Technic Color Sensor sees the selected color.

#### Technic sensor: `reflected light (%)` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Returns how much light the surface reflects back to the Technic Color Sensor, in percent.

#### Technic sensor: `reflection …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Returns `true` when the reflected light compares with the value as selected.

- Comparison: `<`, `=`, `>`

#### Technic sensor: `ambient light (%)` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Returns the brightness of the surrounding light, in percent.

#### Technic sensor: `ambient light …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Returns `true` when the ambient light compares with the value as selected.

- Comparison: `<`, `=`, `>`

#### Technic sensor: `raw …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Returns the raw value of one color channel of the Technic Color Sensor.

- Channels: `red`, `green`, `blue`

### Technic Distance Sensor {#technic-distance-sensor}

#### Technic sensor: `distance …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Returns the distance measured by the Technic Distance Sensor.

- Units: `mm`, `cm`, `inch`, `%`

#### Technic sensor: `is closer than / farther than / exactly at …` (Beginner) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Returns `true` when the distance measured by the Technic Distance Sensor meets the condition.

- Comparison: `closer than`, `farther than`, `exactly at`
- Units: `mm`, `cm`, `inch`, `%`

### BOOST Color & Distance Sensor {#boost-color-and-distance-sensor}

#### BOOST sensor: `color …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Returns the color seen by the BOOST Color & Distance Sensor.

- Output: `value` (a number) or `string` (the color name)

#### BOOST sensor: `is color …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Returns `true` when the BOOST sensor sees the selected color.

#### BOOST sensor: `distance …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Returns the distance measured by the BOOST Color & Distance Sensor.

- Units: `%`, `cm`, `inch`

#### BOOST sensor: `is closer than / farther than / exactly at …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Returns `true` when the distance measured by the BOOST sensor meets the condition.

- Comparison: `closer than`, `farther than`, `exactly at`
- Units: `%`, `cm`, `inch`

#### BOOST sensor: `reflected light (%)` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Returns how much light the surface reflects back to the BOOST sensor, in percent.

#### BOOST sensor: `reflection …` (Beginner) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Returns `true` when the reflected light compares with the value as selected.

- Comparison: `<`, `=`, `>`

### WeDo 2.0 sensors {#wedo-2-sensors}

The WeDo 2.0 Motion Sensor and Tilt Sensor, on the WeDo 2.0 hub.

#### WeDo 2.0 sensor: `distance …` (Beginner) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Returns the distance measured by the WeDo 2.0 Motion Sensor.

- Units: `%`, `cm`, `inch`
- Hubs: WeDo 2.0.

#### WeDo 2.0 sensor: `is closer than / farther than / exactly at …` (Beginner) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Returns `true` when the distance measured by the WeDo 2.0 Motion Sensor meets the condition.

- Comparison: `closer than`, `farther than`, `exactly at`
- Units: `%`, `cm`, `inch`
- Hubs: WeDo 2.0.

#### WeDo 2.0 sensor: `angle …` / `direction as …` (Beginner) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Returns data from the WeDo 2.0 Tilt Sensor: a tilt angle, or the direction it is tilted in.

- Angles: `pitch`, `roll`
- Direction output: `text` or `number`; directions: `neutral`, `forward`, `backward`, `left`, `right`, `unknown`
- Hubs: WeDo 2.0.

## Robot Inventor hub {#robot-inventor-sensors}

These blocks come from the Robot Inventor app and work only with the [MINDSTORMS Robot Inventor and SPIKE Prime hubs](/docs/Application/Hubs/RobotInventorHub). They carry the hub icon. Their events (when the hub is shaken, tilted and so on) are on the [Events](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) page.

### Force Sensor {#robot-inventor-force-sensor}

#### `is … pressed / hard-pressed / released ?` (Beginner) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Checks the Force Sensor on the selected port. `hard-pressed` means pressed with more than 5 newtons.

#### `… pressure in % / newton` (Beginner) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Returns how hard the Force Sensor is pressed: in percent (0–100) or in newtons (0–10).

### Hub motion {#robot-inventor-motion}

#### `is hub … ?` (Advanced) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true` if the hub has just been moved in this way: `tapped`, `double-tapped`, `shaken` (default) or `falling`. A gesture counts once: after a block has read it, it's gone.

#### `gesture` (Guru) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Returns the last gesture as text: `tapped`, `doubletapped`, `shake` or `freefall`, or an empty value if there was none.

#### `is … up?` (Beginner) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true` if this side of the hub faces up: `front` (the light matrix), `top`, `right side`, `back`, `bottom` or `left side`.

#### `orientation` (Guru) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Returns the side that faces up as text: `front`, `up`, `rightside`, `back`, `down` or `leftside`.

#### `… angle` (Beginner) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Returns the hub's angle in degrees around one axis: `yaw` (turning left and right, like a compass), `pitch` (nose up and down) or `roll` (tilting to the sides).

- Typical use: drive a robot in a straight line or turn it by exactly 90°: reset the yaw, then steer until the yaw reaches the angle.

#### `set yaw angle to 0` (Beginner) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Makes the current direction of the hub the new zero of the yaw angle. The block waits 0.1 s so that the next reading is already counted from it.

#### `angular velocity …` (Guru) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Returns how fast the hub turns around the `x`, `y` or `z` axis (the gyro), in degrees per second.

#### `acceleration …` (Guru) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Returns the hub's acceleration along the `x`, `y` or `z` axis, as the hub reports it.

#### `is hub tilted … ?` (Advanced) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true` if the hub is tilted in this direction: `up`, `down`, `left`, `right` or `any` (default). The hub counts as tilted from about 12° away from level; when it's tilted both ways, the bigger tilt wins.

### Hub-to-hub radio {#robot-inventor-radio}

Robot Inventor hubs can send short signals to each other over the air, without MOCPilot in between. A signal has a name and a value.

#### `hub transmit signal … with …` (Guru) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Sends the signal with the given name (`signal` by default) and value (`1`) from this hub to the hubs nearby.

#### `received … value` (Guru) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Returns the last value this hub received for the signal with this name, or 0 if none came yet. To react the moment a signal arrives, use [when hub receives signal](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

## This device {#this-device}

These blocks read the phone, tablet or computer that runs MOCPilot.

### `device % battery` (Beginner) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Returns the device's battery level, in percent.

### `device … angle` (Advanced) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Returns the device's tilt angle.

- Angles: `pitch`, `roll`, `yaw`
- Typical use: steer the model by tilting the phone.

### `device … accelerometer (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Returns the raw accelerometer reading of the device along one axis, in m/s².

- Axes: `x`, `y`, `z`

### `device … acceleration (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Returns the device's acceleration along one axis, in m/s².

- Axes: `x`, `y`, `z`

## Timer {#timer}

### `timer` (Advanced) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Returns the time since the program started or since the last **reset timer**, in seconds.

### `reset timer` (Advanced) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Sets the timer back to zero.
