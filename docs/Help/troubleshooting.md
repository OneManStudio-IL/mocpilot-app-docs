---
id: Troubleshooting
title: Troubleshooting
description: "Solutions for common problems with hubs, motors, the dashboard, sync, purchases, updates, sound, the AI builder and remote control."
---

# Troubleshooting

## Hubs

**The hub is not found**
- Turn Bluetooth on and allow MOCPilot to use Bluetooth (on Android, also Nearby devices or Location) in the system settings. See [Bluetooth and permissions](/docs/Help/BluetoothPermissions).
- Switch the hub on and press its button right before scanning; tap **Start scan** again.
- Make sure the hub isn't connected to another phone or app (LEGO® apps, another remote). Close them.
- Replace or charge the batteries.
- Robot Inventor: not available on iPhone and iPad. Mould King 4.0: not available on Windows.

**The hub disconnects**
- Move the device closer: walls, metal and other 2.4 GHz devices reduce the range.
- Weak batteries cause disconnects under load: charge or replace them.
- Some hubs switch off after a while without commands; reconnect in **My Hubs**.
- More about range, adapters and permissions: [Bluetooth and permissions](/docs/Help/BluetoothPermissions).

**"Firmware update required"**
- MOCPilot needs a supported firmware for Technic, Technic Move, BOOST and City hubs. Follow [Firmware updating](/docs/Application/Hubs/FirmwareUpdating). If an update failed, see [Firmware recovery](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King does not react**
- Mould King hubs only receive commands. Use **Connect again**, check the channel (**Select channel**), and use only one Mould King type per profile.

## Motors and the program

**The motor does not move**
- Is the program running (**Run**)? Is the hub connected?
- Is the motor on the port the program uses? Check the [hub monitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Quick Links: open **Problems**; follow the live values along the row. See [Running and fixing problems](/docs/Application/Links/Problems).
- Logic Blocks: does the script start with an event block? Use **Monitor** to watch values.

**The motor turns the wrong way**
- Quick Links: add **Invert** to the row. Logic Blocks: multiply the value by −1.

**The motor creeps or hums when the joystick is released**
- Quick Links: add **Dead zone**. Logic Blocks: ignore small values with *is in between*.

**Servo steering is off-center or hits the end stop**
- Quick Links: Servo in **Auto** calibration, or **Manual** with **Set as zero** and **Centre**; reduce the **Angle**. Logic Blocks: *Calibrate steering rack*.
- Servo, Run for degrees and Go to position need motors with an encoder; simple motors and SBrick ports take speed only.

**Motors keep running after Stop**
- Logic Blocks: turn on **Stop hub ports when program stops** in Editor Settings.

## Dashboard

**I can't move or delete a control**
- It's locked: **Unlock** it in its menu. A control used by the program can't be deleted until you remove its rows or blocks.

**"There is no available space on the dashboard"**
- Move or shrink other controls, or choose a smaller size.

**A theme or control is locked**
- You don't own it: buy it or get [MocPilot Pro](/docs/Application/Account/Pro), or switch the control to the Basic theme with **Change theme**.

**The gamepad is not detected**
- Pair the gamepad in the system's Bluetooth settings (or plug it in by USB). The **Gamepad** page shows **Gamepad: (name)** when the app sees it, and "Gamepad is not connected" when it doesn't.
- Turn on **Enable gamepad blocks** on the **Gamepad** page, otherwise the gamepad inputs and blocks don't appear.
- Several gamepads connected? Choose one in **Select gamepad**.
- Check the buttons and sticks with **Test gamepad**.
- Windows: Xbox (XInput) controllers and Sony DualSense / DualSense Edge work; other controllers without XInput support may not.
- See [Gamepad](/docs/Application/Dashboard/Gamepad).

## Profiles and sync

**My profiles are not on my other device**
- Sign in with the same account on both devices and check the internet connection. If the app shows **Offline**, tap **Retry** or **Go online**.

**"Profile is not compatible"**
- The profile was made with a newer version of MOCPilot. Update the app.

**I lost my profiles after reinstalling**
- In guest mode, profiles exist on the device only and are lost with the app. With an account, sign in again and they come back.

## Account emails {#account-emails}

**The activation email or the password reset code doesn't arrive**
- Wait a few minutes and check the spam or junk folder. The emails come from no-reply@mocpilot.com.
- Check that you typed the email address correctly.
- Activation: open your account page and tap **Resend activation mail**. Until the account is verified, some features stay disabled.
- Password reset: "Email not found" means there's no account with this email; try the address you signed up with. Otherwise tap **Reset** next to "Forgot password?" again to get a new code. See [Account](/docs/Application/Account/UserAccount).

## Purchases

**A purchase is missing**
- Sign in with the account you made the purchase with, then go to **Account → Purchases → Restore**.
- "Subscription linked to another account": the Pro subscription of this store account belongs to another MOCPilot account.

**"MocPilot Pro needs an online check"**
- Pro has been used offline for a long time. Connect to the internet and the check runs by itself.

## App updates {#app-updates}

**"Update required"**
- The full-screen message "This version of MOCPilot is no longer supported…" means this version can't be used any more. Tap **Update** to open the store and install the new version. The screen also shows your **Installed version**.
- In the web editor, the button is **Reload page**: the newest editor loads.

**"MOCPilot (version) is available"**
- A newer version is out. Tap **Update** (in the web editor, **Reload page**), or close the banner with ×: it won't come back until the next version.

## Sound {#sound}

**There's no sound**
- Turn on **Sound** in [Settings](/docs/Application/Account/Settings): it silences all app, control and program sounds.
- Turn up the device's media volume. If headphones or a Bluetooth speaker are connected, the sound plays there.
- Logic Blocks: check that the program doesn't set the sound volume to 0 or stop all sounds. See [Sounds](/docs/Application/BlockBuilder/Blocks/Sounds).

## AI builder {#ai-builder}

**The AI builder is unavailable or shows an error**
- The AI builder needs [MocPilot Pro](/docs/Application/Account/Pro) and an internet connection: "The AI builder needs MocPilot Pro." or "Could not reach the AI service. Check your internet connection and try again."
- "The AI service is temporarily unavailable. Try again later." or "Too many AI requests right now. Try again in a minute.": wait and try again.
- There are daily and monthly limits: "You reached today's limit of AI requests. Try again tomorrow."
- Voice input: allow the microphone (and speech recognition on Apple devices) in the system settings; see [Bluetooth and permissions](/docs/Help/BluetoothPermissions).
- All messages and what to do: [AI builder](/docs/Application/Profiles/AiBuilder).

## Remote control {#remote-control}

**The hub device doesn't connect or the connection drops**
- "Remote control is part of MocPilot Pro": the remote's account needs [MocPilot Pro](/docs/Application/Account/Pro).
- "The code has expired…" or "Wrong or expired code…": the connection code is valid for 5 minutes. Show a new code on the remote and scan or type it again.
- "Allow MOCPilot to use the camera in the system settings to scan the code.": allow the camera in the system settings ([how](/docs/Help/BluetoothPermissions)), or tap **Enter code** and type the 6 digits.
- "This version of the app cannot connect to a remote" or "The other device could not open the profile": update MOCPilot on both devices.
- "Connection to the remote lost…": check that both devices are online. If the connection is lost for about 4 seconds, the hub device stops the profile and all motors.
- More: [Remote control](/docs/Application/Profiles/RemoteControl).

## Still stuck?

Use **Ask a question** or **Report a bug** in the app's **Help** (computer: the **Help** menu). The reply arrives by email and in **Notifications**.
