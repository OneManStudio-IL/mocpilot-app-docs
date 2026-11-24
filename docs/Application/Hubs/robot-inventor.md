---
id: RobotInventorHub
title: MINDSTORMS Robot Inventor hub
description: "Connect the LEGO MINDSTORMS Robot Inventor (51515) or SPIKE Prime hub over Bluetooth or USB, use its blocks and bring the hub back if it stops working."
---

import Screenshot from '@site/src/components/Screenshot';

# MINDSTORMS Robot Inventor hub

The hub of the LEGO® MINDSTORMS® Robot Inventor set (51515) is the **LEGO® Technic™ Large Hub** (88016): six ports A–F, a 5×5 light matrix, a speaker, a gyro and an accelerometer. MOCPilot drives it with the same blocks as the Robot Inventor app, plus everything MOCPilot adds: the dashboard, the gamepad and the other hubs of the profile.

The **SPIKE™ Prime hub** (45601) is the same hardware with the LEGO® Education firmware. MOCPilot supports it with the **SPIKE Legacy** firmware (beta); see [Firmware](#firmware).

## What it can do {#features}

- **Logic Blocks**: all the blocks of the Robot Inventor app, see [Robot Inventor blocks](#blocks).
- **Quick Links**: motors, sensors, the [light matrix](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) and the [distance sensor lights](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Hub monitor**: battery, orientation, tilt and the devices on the ports, see [Hub monitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

A block program can run in two ways: **streaming**, where MOCPilot runs it and sends commands to the hub (keep the device connected), or **download**, where MOCPilot writes it into one of the hub's program slots and the hub runs it by itself. See [Run the program on the hub](#download).

## Connect the hub {#connect}

Add the hub as usual ([Add and connect a hub](/docs/Application/Hubs/ConnectingHubs)) and pick **Lego® Large Hub** (or **LEGO® SPIKE™ Prime Hub**). On a computer the connection page has a **Bluetooth / USB** selector at the top. MOCPilot remembers your choice for this hub model.

### Over Bluetooth {#bluetooth}

The hub uses classic Bluetooth, not Bluetooth Low Energy: it works on Android, Mac and Windows, but not on iPhone and iPad.

1. Switch the hub on.
2. Pair it in the device's Bluetooth settings as a regular Bluetooth device (on Windows: **Settings → Bluetooth & devices → Add device**). Press the hub's Bluetooth button so that it can be found.
3. In MOCPilot, tap **Scan**.

### With a USB cable {#usb}

On Windows and Mac you can connect the hub with its USB cable instead. You don't need to install a LEGO driver.

1. Connect the hub to the computer with a USB cable and switch the hub on.
2. Tap **Connect**.

If MOCPilot says **No hub on USB**, check the cable (some cables only charge) and that the hub is on.

<Screenshot name="robot-inventor-connect" alt="Connecting a Robot Inventor hub: the Bluetooth / USB selector" width={900} />

### Close the LEGO app first {#close-lego-app}

The hub accepts only one connection. If the MINDSTORMS or SPIKE app is open and holds the hub, MOCPilot says **The hub is busy: another app is using it (LEGO MINDSTORMS or SPIKE). Close that app and try again.** Close the LEGO app and connect again.

## Robot Inventor blocks {#blocks}

When the profile has a Robot Inventor or SPIKE Prime hub, the Logic Blocks palette gets the blocks of the Robot Inventor app. Blocks that only this hub can run carry a black-and-white **hub icon**.

| Category | Robot Inventor blocks |
|---|---|
| [Movement](/docs/Application/BlockBuilder/Blocks/Movement) (new category) | movement motors, speed, distance per rotation, move, steer, tank drive, acceleration, stop, "was movement interrupted?" |
| [Motors](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | start at power, "was the motor interrupted?", plus motor power and stall detection |
| [Light](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | image for a few seconds, animations with a frame editor, pixel brightness, plus the distance sensor lights |
| [Sounds](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | beeps, the hub's robot sounds, volume, sound effects, music: notes, drums, rests, instrument, tempo |
| [Sensors](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | force sensor, gestures, orientation, yaw / pitch / roll, reset yaw, angular velocity, acceleration, tilt, hub-to-hub radio |
| [Events](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | when the hub is shaken or tapped, is on a side, is tilted, when the force sensor is pressed, when a radio signal arrives |

The control, operator, variable, list and My Blocks blocks of the Robot Inventor app are the same as MOCPilot's own [core blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). The blocks that the general hub blocks already cover (motor speed and position, the color and distance sensors, the light matrix, the hub button, the timer) are in their usual categories.

## Run the program on the hub {#download}

Like the Robot Inventor app, MOCPilot can write a Logic Blocks program into one of the hub's 20 program slots (0–19). The hub then runs it without the app: you can disconnect the phone or computer, and start the program again later with the hub's own buttons.

### The slot button and card {#slot-card}

When a Robot Inventor or SPIKE Prime hub is connected to a Logic Blocks profile, a button appears in the bottom-right corner of the editor, next to the zoom. It shows the selected slot number on a small 5×5 matrix, or a streaming sign. Tap it to open the card:

- the hub with the selected slot; **‹** and **›** pick slot 0–19;
- **Download / Streaming**: how **Run** works for this hub;
- the **download** button (⤓): writes the program into the slot without starting it;
- a status line: the progress, *Slot 3: the program is on the hub*, or what went wrong.

When several Robot Inventor or SPIKE Prime hubs are connected, the card also has a hub button: tap it to choose which hub gets the program. MOCPilot remembers the mode and the slot on this device.

<Screenshot name="robot-inventor-slot-card" alt="The slot card: the hub, the slot arrows, the Download / Streaming switch and the download button" width={500} />

### Download {#download-mode}

In **Download** mode, **Run** turns the block program into a hub program, writes it into the selected slot and starts it on the hub. Writing takes a few seconds; then the program runs on the hub on its own.

- To start it again later without the app, pick the slot with the hub's left and right buttons and press the center button.
- The **center button** of the hub stops the program.
- To go back to running programs from MOCPilot, switch the card to **Streaming**.

### What can run on the hub {#download-blocks}

Most blocks can go to the hub:

- events: program start, messages, conditions, the timer, the hub buttons, sensors, gestures, orientation, tilt and radio signals;
- control, operators, variables, lists and My Blocks;
- all the Robot Inventor blocks, and the motor, light and sensor blocks of this hub.

Some blocks need the app and can't run on the hub alone: the dashboard and gamepad blocks, blocks of other hubs, the **center button** event (on the hub that button stops the program), battery and connection events, the temperature and the steering rack calibration. If the program has any of them, nothing is written: the card says **These blocks cannot run on the hub without the app** and lists them. Remove those blocks or use **Streaming**.

If writing fails, the status line says why, for example **Not enough space on the hub** or **The hub did not answer**. Try again, or restart the hub if it keeps failing.

## Firmware {#firmware}

MOCPilot works with the hub's own LEGO firmware and doesn't replace it:

- **Robot Inventor hub**: the firmware of the MINDSTORMS Robot Inventor app. The last version is firmware 1.5.6 with hub software 3.2.36.
- **SPIKE Prime hub**: the **SPIKE Legacy** firmware (the one of the SPIKE 2 app). The newer **SPIKE App 3** firmware isn't supported: MOCPilot says so when it finds such a hub. Install the SPIKE Legacy firmware with the LEGO® Education SPIKE™ Legacy app, then connect again.

When the hub is ready, it shows a program slot number on its light matrix.

## If the hub doesn't start {#restore}

If the hub doesn't start, stays dark, doesn't show a slot number or was switched to the SPIKE App 3 firmware, first restore it with the official app:

1. Open the MINDSTORMS Robot Inventor app (the SPIKE Legacy app for a SPIKE Prime hub) and connect the hub with the USB cable.
2. Start the hub update (**Update hub firmware**). It rewrites the firmware, the hub software and the robot sounds and takes about 6 minutes. Don't unplug the hub while it runs.
3. Close the LEGO app and connect the hub in MOCPilot.

### Recovery mode (DFU) {#dfu}

Only if the official app can't see the hub at all, you can write the firmware through the hub's recovery mode (DFU). This is for experienced users:

1. Switch the hub off and unplug it. Hold the **Bluetooth button** and plug in the USB cable; keep holding until the button light flashes red, green and blue. The computer now sees "LEGO Technic Large Hub in DFU Mode".
2. On Windows, install the WinUSB driver for that device once, for example with Zadig. Mac and Linux don't need a driver.
3. Write the firmware image of the Robot Inventor app (1.5.6) with `dfu-util` to address `0x08008000`. The hub restarts by itself when it's done. Don't unplug it while it writes.
4. Then run **Update hub firmware** in the Robot Inventor app (see above) to restore the hub software and the sounds.

DFU writes only the firmware. The recovery bootloader itself can't be overwritten, so you can always try again.
