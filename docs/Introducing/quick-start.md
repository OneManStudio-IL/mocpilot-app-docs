---
id: QuickStart
title: Quick start
description: "Install MOCPilot, sign in, create your first profile and drive a model in a few minutes."
---

import Screenshot from '@site/src/components/Screenshot';

# Quick start

This guide takes you from installing the app to driving your first model. You need a supported hub with a motor; see [Supported devices](/docs/Introducing/SupportedDevices).

## 1. Install the app

MOCPilot is available on the App Store (iPhone, iPad, Mac), Google Play (Android) and the Microsoft Store (Windows). You'll find the links on [mocpilot.com](https://mocpilot.com).

## 2. Sign in or continue without an account

On first launch, the app asks you to sign in. Use your email or login and password, Google or Apple ID, or create a new account.

<Screenshot name="sign-in" alt="The MOCPilot sign-in screen" width={900} />

We recommend an account:

- your profiles and settings are stored on the server and synced across your devices;
- you can get your data back if you replace or lose a device;
- purchases and MocPilot Pro work on all your devices.

**Continue without an account** works too, but then everything stays on this device only and is lost if you remove the app. You can sign in later in **Settings → Account**. See [Account](/docs/Application/Account/UserAccount).

## 3. Find your way around

- On a **phone**, the bottom bar has **Profiles**, **Settings** and **Help** (and **Notifications** once you're signed in).
- On a **tablet**, the same sections, the **Profile Catalog** and your account are in the side bar.
- On a **computer**, use the top bar: menus on the left; Account, Notifications and Settings on the right.

See [Phone, tablet and desktop](/docs/Introducing/Layouts).

## 4. Create a profile

1. On the **My profiles** page, tap **+** → **New Profile** (phone), or choose **New Profile** (tablet and computer, or **File → New Profile**).
2. Choose the **program type**:
   - **Quick Links** if you want to drive a model with no code. Best for a first try.
   - **Logic Blocks** if you want events, loops, conditions and sensors.
3. Enter a **name** and, if you like, add a picture.
4. Tap **Create**.

<Screenshot name="create-profile-tiles" alt="New Profile page with the Logic Blocks and Quick Links tiles" width={900} />

The profile opens in the editor. More in [Create a profile](/docs/Application/Profiles/CreateProfile).

:::tip Want a ready-made model?
Open the **Profile Catalog** (**Search Online** on the profiles page) and install an official profile for your set. See [Catalog and publishing](/docs/Application/Profiles/Catalog).
:::

## 5. Add your hub

1. In the editor, open **My Hubs** (**Hubs** in the top bar on a computer).
2. Tap **Add a new Hub** in a free slot, choose your hub model, then tap **Add**.
3. Switch the hub on, press its button and wait until MOCPilot finds it.

<Screenshot name="my-hubs" alt="My Hubs page with hub slots" width={900} />

If the app asks for a firmware update, follow [Firmware updating](/docs/Application/Hubs/FirmwareUpdating). More in [Add and connect a hub](/docs/Application/Hubs/ConnectingHubs).

## 6. Place controls on the dashboard

1. Open **Dashboard**.
2. Tap **+** (**Add Controller**; on a computer, **+ Controller**), choose a **Joystick** and tap **Add to dashboard**.
3. Drag it where you want it. Tap it to change its size, color or behavior.

<Screenshot name="controller-palette" alt="Add Controller palette with the joystick selected" width={900} />

See [Add and arrange controls](/docs/Application/Dashboard/ArrangingControls).

## 7. Connect the control to a motor

**Quick Links:** drag the joystick input (for example *JOY1 Y axis*) from **Inputs** into the empty row, add the **Motor** operation and the **Hub** output from **Outputs**, then tap the port your motor is plugged into. The row is ready when it has no red frame. See [Quick Links](/docs/Application/Links/LinksIntroducing).

**Logic Blocks:** add a *when program started* block, a *forever* loop and a *set motor speed* block that takes the joystick value. See [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) and the [examples](/docs/Application/BlockBuilder/Examples).

## 8. Press Run

Press **Run** (▶). Move the joystick, and the motor turns. Press **Stop** to go back to editing.

That's it. Next:

- Learn all the [control types](/docs/Application/Dashboard/ControlTypes).
- Give the dashboard a new look with [themes](/docs/Application/Themes/ThemesOverview).
- Connect a [gamepad](/docs/Application/Dashboard/Gamepad).
- If something doesn't work, see [Troubleshooting](/docs/Help/Troubleshooting).
