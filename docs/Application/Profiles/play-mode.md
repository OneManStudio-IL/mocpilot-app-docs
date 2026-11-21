---
id: PlayMode
title: Driving a model (Run)
description: "Run a profile, drive the model, stop it, and what happens when it stops or a connection drops."
---

import Screenshot from '@site/src/components/Screenshot';

# Driving a model (Run)

A profile has two modes:

- **Edit**: you change the hubs, the dashboard and the program.
- **Run**: the program runs and the dashboard controls drive the model.

## Start and stop

Press **Run** (▶) in the editor or on the dashboard (computer: **Program → Run**, ⌘R / Ctrl+R). Press **Stop** (■) to go back to editing (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Dashboard while the program runs" width={900} />

While the program runs:

- the dashboard grid dots and the add and settings buttons are hidden;
- controls respond to touch and to the gamepad;
- monitors and indicators show live values;
- in Quick Links, the editor shows live values between the blocks of every row, and the rows can't be edited;
- in Logic Blocks, the program stays editable, so you can fine-tune it live.

## On a phone or tablet

Opening a profile switches a phone to landscape, full screen, so the dashboard gets the whole screen. Turn on **Keep screen on** in Settings so the screen doesn't go dark while you drive. See [Settings](/docs/Application/Account/Settings).

## Before you press Run

- Switch the hubs on and check in **My Hubs** that they're connected (the badge on the button shows how many are).
- In Quick Links, check the **Problems** button: a red "!" means some rows can't run. See [Running and fixing problems](/docs/Application/Links/Problems).
- For the first try, put the model on a stand or keep it away from the edge of the table.

## When the program stops

- **Quick Links** stops all motors used by the rows and resets the outputs (LED matrix cleared, port colors and sensor lights off).
- **Logic Blocks** stops the hub ports if **Stop hub ports when program stops** is on in Editor Settings.
- If a hub disconnects while the program runs, its motors stop. In Quick Links, a "Connected" hub input can show this on the dashboard.
- With remote control, if the connection between the remote and the hub device is lost for about 4 seconds, the hub device stops the profile and all motors.

## Drive from another device

With [MocPilot Pro](/docs/Application/Account/Pro), you can run the profile on one device (the hub device, which connects the hubs) and control it from another device or from the web editor. See [Remote control](/docs/Application/Profiles/RemoteControl).
