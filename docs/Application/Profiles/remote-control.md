---
id: RemoteControl
title: Remote control
description: "Run a profile on the phone, tablet or computer next to the model and control it from another device or from the web editor."
---

import Screenshot from '@site/src/components/Screenshot';

# Remote control

Remote control lets you drive a model that is connected to another device. One device stays next to the model and talks to the hubs over Bluetooth; you hold the other one and use its dashboard. It's also how you drive a model from the [web editor](/docs/Introducing/WebEditor), because browsers can't connect to hubs.

## The two devices

- The **hub device** is the phone, tablet or computer next to the model. Its MOCPilot app connects the hubs and runs the profile. It doesn't need an account.
- The **remote** is what you control from: the MOCPilot app on another device, or the web editor on [mocpilot.com](https://mocpilot.com). The profile is opened on the remote, and the remote sends it to the hub device.

## What you need

- [MocPilot Pro](/docs/Application/Account/Pro) on the account signed in on the **remote**. The hub device needs no account and no Pro.
- The MOCPilot app on the hub device.
- An internet connection on both devices.

## Connect a hub device {#connect-a-hub-device}

1. On the remote, open the profile and press **Remote control** (the remote control icon: a house with signal arcs) in the profile's top bar, next to **Run**. In the web editor, press **Show the code** in the panel that opens.

   The remote shows a **connection code**: a QR code and 6 digits.
2. On the hub device, open MOCPilot and tap **Connect a Remote** on the **My profiles** page. On a Mac, you can also choose **File → Connect a Remote…**.
3. Enter the code:
   - **on a phone or tablet**, point the camera at the QR code, or tap **Enter code** and type the 6 digits;
   - **on a computer**, type the 6 digits and press **Connect**.
4. The devices connect. The remote sends the profile to the hub device and starts it there, and the hub device shows the full-screen **Remote control** page.

<Screenshot name="remote-control-code" alt="Remote control panel in an open profile showing the QR code and the 6-digit code" width={900} />

About the connection code:

- It works once and is valid for 5 minutes. While the remote keeps showing it, a new code replaces it when it expires.
- Scan it in the MOCPilot app, not with the phone's camera app.
- If you close the panel on the remote before the hub device connects, nothing is set up; press **Remote control** again for a new code.

<Screenshot name="remote-connect-code-entry" alt="Connect a Remote window on a computer with the field for the 6 digits" width={900} />

## When the devices are connected

**On the remote:**

- The **Remote control** button turns green (on a phone or tablet, a green ring), and its panel shows the name of the hub device and a **Disconnect** button.
- **My Hubs** shows the hubs of the hub device. Connect the hubs from there as usual: the hub device searches for them, so press the button on the hub when asked.
- The dashboard controls the model.

**On the hub device**, the full-screen **Remote control** page shows:

- the state, for example **Running «My car»**;
- **Hubs connected: N** and, while it searches, **Looking for a hub: press the button on the hub.**;
- a reminder: **Keep this app open. This is the hub device: it connects the hubs and runs the profile; the remote only controls it.**;
- a **Stop** button.

The screen of the hub device stays on while it's connected. The profile isn't saved on the hub device and doesn't appear in its profile list.

<Screenshot name="remote-hub-device" alt="Full-screen Remote control page on the hub device with the connection state, the number of connected hubs and the Stop button" width={900} />

## Run and Stop

- Press **Stop** on the remote to stop the profile on the hub device. The hub device always stops all motors, even if **Stop hub ports when program stops** is off in the profile.
- Press **Run** on the remote to start it on the hub device again.
- In the web editor, the hub device stays paired for every profile you open in the same browser tab: **Run** starts the profile on the hub device. When no hub device is paired, **Run** runs the profile in the browser, without hubs.

## If the connection drops {#if-the-connection-drops}

:::caution Safety
If the hub device hears nothing from the remote for 4 seconds, it stops the profile and all motors.
:::

Then:

- the hub device shows **Connection to the remote lost. The profile was stopped. Waiting for the remote…** and waits;
- the app on the remote shows **The connection was lost. Trying again…** with **Try again** and **Disconnect**;
- the web editor shows **The hub device disconnected**: "*device* stopped responding. The profile on it was stopped and its motors switched off." It keeps trying to reconnect; you can also press **Reconnect**, **Run in the browser** or **Stop**.

When the devices are connected again, check the state on the remote and press **Run** if the profile isn't running.

## Disconnect

- **On the remote**: press **Remote control** and choose **Disconnect**.
- **On the hub device**: press **Stop** on the **Remote control** page.

Either way, the profile and the motors stop, and the hub device closes the profile.

## Troubleshooting

| Message | Where | What to do |
|---|---|---|
| **Remote control is part of MocPilot Pro** | remote | Subscribe to [MocPilot Pro](/docs/Application/Account/Pro) on the remote's account. You can't subscribe in the browser: do it in the app, and Pro works in the web editor too |
| **No connection to the server** | either | Check the internet connection and try again |
| **Could not get a code from the server** | remote | Press **Show the code** to try again |
| **Wrong or expired code. Check the 6 digits shown on the remote.** | hub device | Type the 6 digits the remote shows right now |
| **The code has expired. Show a new code on the remote and scan it again.** | hub device | Press **Remote control** on the remote and scan the new code |
| **This is not a MOCPilot code. Scan the code shown by the remote.** | hub device | Scan the QR code in the remote's **Remote control** panel |
| **Too many wrong codes. Try again in a few minutes.** | hub device | Wait a few minutes, then enter the current code |
| **Allow MOCPilot to use the camera in the system settings to scan the code.** | hub device | Allow camera access in the system settings, or tap **Enter code** and type the 6 digits |
| **The remote does not answer. Check that the profile is open on it and that it is online.** | hub device | Keep the profile open on the remote and check its internet connection |
| **This version of the app cannot connect to a remote** | either | Update MOCPilot |
| **This browser cannot open a direct connection (WebRTC)** | web editor | Use another browser, for example Chrome, Edge or Safari |
| **The profile is too large** / **The profile did not arrive completely** | either | Check the connection and press **Run** again |
| **The other device could not save the profile** / **The other device could not open the profile** | remote | Press **Run** again; if it keeps happening, disconnect and connect the hub device again |
| **The connection to *device* was lost** / **Connection to the remote lost. Waiting for it…** | either | See [If the connection drops](#if-the-connection-drops) |
