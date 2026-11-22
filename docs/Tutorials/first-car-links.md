---
id: FirstCarLinks
title: Your first RC car with Quick Links
description: "Step by step: build a remote-controlled LEGO car with drive, servo steering and lights in Quick Links, with no code."
---

import Screenshot from '@site/src/components/Screenshot';

# Your first RC car with Quick Links

In this tutorial you build a complete remote-controlled car in [Quick Links](/docs/Application/Links/LinksIntroducing): one joystick drives and steers, and a button switches the lights on and off. It takes about 15 minutes, and you don't write any code.

**What you need**

- a LEGO® Technic™ Hub (88012);
- a drive motor on **port A**;
- a steering motor with a position sensor (encoder) on **port B**, for example a Technic L or XL motor or any Technic angular motor. The steering must have end stops: the wheels can turn only so far left and right;
- LEGO® lights on **port C** (optional);
- MOCPilot on a phone, tablet or computer with Bluetooth.

:::note City Hub
A City Hub (88009) has only two ports. Put the drive motor on **A** and the steering motor on **B**, and skip the lights, or add a second hub for them. Everything else works the same.
:::

**The result**: a profile with three rows:

| # | Input | Processing | Operation | Output |
|---|---|---|---|---|
| 1 | JOY1, Y axis | Smooth | Motor | Technic Hub, port A |
| 2 | JOY1, X axis | | Servo (Auto) | Technic Hub, port B |
| 3 | BTN1 | Toggle | Light | Technic Hub, port C |

## 1. Create the profile {#create-the-profile}

1. Go to **My profiles** and start a new profile: on a phone tap **+** → **New Profile**, on a tablet tap **New Profile** in the header, on a computer choose **File → New Profile**.
2. Choose the **Quick Links** tile.
3. Enter a **Name**, for example "My first car". A picture and hashtags are optional for now.
4. Tap **Create**. The profile opens in the Quick Links editor with one empty row.

The program type can't be changed later. More in [Create a profile](/docs/Application/Profiles/CreateProfile).

## 2. Add and connect the hub {#add-the-hub}

1. In the editor, tap **My Hubs** (**Hubs** in the top bar on a computer).
2. Tap **Add a new Hub** in a free slot, choose the Technic Hub in the list and tap **Add**.
3. Switch the hub on and press its button. MOCPilot finds it and connects; the hub stays in the slot.
4. If the **Firmware update required** dialog appears, tap **Update** and keep the hub on and close by until the update is done. See [Firmware updating](/docs/Application/Hubs/FirmwareUpdating).

Tip: open the connected hub to see its [hub monitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor). It shows which device is plugged into each port, so you can check the motors before you build the rows.

More in [Add and connect a hub](/docs/Application/Hubs/ConnectingHubs).

## 3. Put the controls on the dashboard {#dashboard}

1. Open **Dashboard** and tap **+** (**Add Controller**; on a computer, **+ Controller**).
2. In the **Joysticks** group, choose **Joystick** and tap **Add to dashboard**. It is named **JOY1**. Leave **Axes type** at **Both axes (X, Y)**: up and down will drive, left and right will steer.
3. Tap **+** again. In **Buttons and switches**, choose **Button** and tap **Add to dashboard**. It is named **BTN1**.
4. Drag the joystick to the left side and the button to the right side, where your thumbs will be. Tap a control to change its size (**S**, **M** or **L**) or its look.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard with the JOY1 joystick on the left and the BTN1 button on the right" width={900} />

Prefer to drive and steer with separate thumbs? Add two joysticks instead: **JOY1** with **Only vertical (Y)** and **JOY2** with **Only horizontal (X)**, and use JOY2 in the steering row.

More in [Add and arrange controls](/docs/Application/Dashboard/ArrangingControls) and [Control types](/docs/Application/Dashboard/ControlTypes).

### Option: steering wheel and pedals {#wheel-and-pedals}

If you have the **Steering wheel** and **Pedals** [special controls](/docs/Application/Dashboard/SpecialControls), you can use them instead of the joystick. In step 4, build row 1 from the [Vehicle](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) input with **Output** set to **Speed** (it speeds up and slows down like a real car, so you don't need Smooth), and row 2 from the **Wheel** input with the **Steering angle** channel.

## 4. Build the rows {#rows}

Go back to the program. The palette at the bottom has three tabs: **Inputs**, **Processing** and **Outputs**. Each row runs from left to right: input → processing → operation → hub. How the editor works: [Introducing Quick Links](/docs/Application/Links/LinksIntroducing).

### Row 1: drive {#row-drive}

1. On **Inputs**, drag **JOY1** with the **Y axis** channel into the empty row ("New row: input"). A new empty row appears below it.
2. On **Processing**, drag **Smooth** after the input. The default **Acceleration (to full speed)** and **Deceleration (to stop)** of 0.5 s are a good start.
3. On **Outputs**, drag **Motor** after Smooth.
4. Drag the **Technic Hub** output after Motor and tap the **A** port chip.

### Row 2: steering {#row-steering}

1. Drag **JOY1** with the **X axis** channel into the next empty row.
2. Drag **Servo** from **Outputs**.
3. Tap the Servo block and set **Calibration** to **Auto**.
4. Drag the **Technic Hub** output after Servo and tap **B**.

In **Auto** mode, every time the program starts, the steering motor turns to both end stops; the middle becomes the centre and the travel becomes the steering angle. To try it right away, tap **Calibrate now** in the Servo settings while the hub is connected. If calibration fails, check the hub, the motor and that the steering really has end stops.

<Screenshot name="links-servo-settings" alt="Settings of a Servo block" width={900} />

No end stops? Use **Manual**: turn the wheels straight by hand, tap **Set as zero** and choose the **Angle**. See [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Row 3: lights {#row-lights}

1. Drag **BTN1** into the next empty row.
2. Drag **Toggle** from **Processing**. It turns the push button into a switch: press once for on, again for off.
3. Drag **Light** from **Outputs**.
4. Drag the **Technic Hub** output after Light and tap **C**.

<Screenshot name="tutorial-car-links-rows" alt="The three finished rows of the car: drive, steering and lights" width={900} />

When all three rows are ready, the **Problems** button in the top bar (right before **Run**) shows a green check. A red "!" tells you how many problems are left; tap it and then a problem to jump to the row. See [Running and fixing problems](/docs/Application/Links/Problems).

## 5. Run and test {#run}

1. Put the car on a stand or hold it so the wheels are off the table.
2. Press **Run**. The steering motor calibrates: it turns to both sides and comes back to the middle.
3. Push the joystick up and down: the car drives forward and backward, starting and stopping smoothly. Move it left and right: the wheels steer.
4. Press **BTN1**: the lights go on. Press it again: they go off.
5. Press **Stop** to go back to editing.

While the program runs, every joint between blocks shows the value passing through it, so you can follow a signal from the joystick to the hub.

<Screenshot name="links-live-values" alt="A running Quick Links program with live values on the joints" width={900} />

More in [Driving a model (Run)](/docs/Application/Profiles/PlayMode).

## 6. Fine-tune {#tune}

Press **Stop** first: rows can't be edited while the program runs.

- **The car drives backward when you push up?** Add **Invert** to row 1. The same works for row 2 if the wheels steer the wrong way.
- **The motor hums or creeps with the joystick released?** Add **Dead zone** to row 1, before Smooth. The default **Zone** of 10 % is a good start.
- **Too fast?** Add **Limit** to row 1, for example with **Maximum** 50 %.
- **Too sluggish?** Tap Smooth and choose a shorter time, or **Instant**.

A good order for a drive row is *Dead zone → Limit → Smooth*. All settings: [Processing blocks](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Optional: drive with a gamepad {#gamepad}

1. Pair an Xbox or PlayStation style gamepad with your device in the system's Bluetooth settings.
2. In the editor, open **Gamepad** and turn on **Enable gamepad blocks**.
3. In each row, drag the dashboard input back onto the palette to remove it, and drag the **Gamepad** input into its place. Set its **Input**: **Left stick Y** for row 1, **Right stick X** for row 2 and **A** (**Cross** on PlayStation) for row 3.

Each port can belong to only one row, so a row drives a port either from the dashboard or from the gamepad. More in [Gamepad](/docs/Application/Dashboard/Gamepad).

## If something doesn't move {#if-something-does-not-move}

1. Is the hub connected? Check **My Hubs** and the connection dot on the Hub block.
2. Are the motors plugged into the ports you chose in the rows?
3. Does the **Problems** button show a green check, and is every row turned on?
4. Is the program running?
5. Run the program and watch the live values: if the value changes at the input but the motor doesn't turn, check the hub and the port.

A message such as "Port B: this device cannot work as a servo (a motor with an encoder is needed)" means the motor on that port has no encoder. More messages and fixes: [Running and fixing problems](/docs/Application/Links/Problems) and [Troubleshooting](/docs/Help/Troubleshooting).

## 8. Save and share {#save-and-share}

There is no Save button: the profile keeps your changes. When you're signed in, it also [syncs](/docs/Application/Account/Sync) to your other devices.

- **Share as a file**: on **My profiles**, tap **Share** on the profile card (**Share…** on a computer). You get a `.dat` file to send to a friend. See [Manage profiles](/docs/Application/Profiles/ManageProfiles).
- **Publish to the catalog**: open **Edit Profile** and tap **Send to the catalog**. Add a picture, a description and a hashtag first. See [Catalog and publishing](/docs/Application/Profiles/Catalog).

## Next steps {#next-steps}

- Keep an eye on the battery: add a **Battery level** or text **Monitor** to the dashboard and a row *Technic Hub (Battery) → Indicator*. See [Indicators and monitors](/docs/Application/Dashboard/Indicators).
- Build the same car in Logic Blocks: [The same car in Logic Blocks](/docs/Tutorials/FirstCarBlocks).
- More recipes: a tank, a crane and a train in [Examples](/docs/Application/Links/Examples).
- Give the dashboard a new look with [themes](/docs/Application/Themes/ThemesOverview).
