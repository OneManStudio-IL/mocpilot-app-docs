---
id: BluetoothPermissions
title: Bluetooth and permissions
description: "Which permissions MOCPilot asks for on each platform, why, and how to fix a denied permission or a Bluetooth problem."
---

# Bluetooth and permissions

MOCPilot talks to hubs over Bluetooth, so the system asks you to allow it. A few other permissions are asked only when you use a feature that needs them.

## What MOCPilot asks for and why

| Permission | When it's asked | Why |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | the first time you search for a hub | to find and connect hubs |
| **Nearby devices** (Android 12 and newer) | the first time you search for a hub | to find and connect hubs |
| **Location**, precise (Android 10 and 11) | the first time you search for a hub | Android requires it for Bluetooth scanning on these versions. MOCPilot doesn't collect, store or share your location |
| **Location** (Android, Mould King hubs) | when you connect a Mould King hub | the app sends commands to Mould King hubs as Bluetooth broadcasts, and asks for Location for that on every Android version |
| **Camera** (phone, tablet) | when you scan a QR code in **Connect a Remote** | to read the [connection code](/docs/Application/Profiles/RemoteControl). You can type the 6 digits instead |
| **Microphone** (iPhone, iPad, Mac, Android) | the first time you dictate a request to the [AI builder](/docs/Application/Profiles/AiBuilder) | voice input |
| **Speech recognition** (iPhone, iPad, Mac) | together with the microphone | to turn your voice into text |

On Windows, MOCPilot doesn't ask for a Bluetooth permission; Bluetooth just needs to be on. For voice input on Windows, MOCPilot suggests Windows voice typing (Win+H).

## If you denied a permission

If you denied a permission, the system usually doesn't ask again. MOCPilot then shows a message, for example **Scan failed** with "The app requires permission to scan nearby devices…", "Allow MOCPilot to use the camera in the system settings to scan the code." or "Allow microphone access for MOCPilot in the system settings". Turn the permission on in the system settings and go back to the app:

**iPhone and iPad**
1. Open **Settings** and scroll down to **MOCPilot**.
2. Turn on **Bluetooth** (and **Camera**, **Microphone** or **Speech Recognition** if you need them).

**Android** (names vary a little by manufacturer)
1. Open **Settings → Apps → MOCPilot → Permissions**.
2. Allow **Nearby devices**. On Android 10 and 11, or for Mould King hubs, also allow **Location** and turn on **Use precise location**.
3. Allow **Camera** or **Microphone** if you need them.

**Mac**
1. Open **System Settings → Privacy & Security**.
2. Choose **Bluetooth** (or **Microphone**, **Speech Recognition**) and turn on **MOCPilot**.

**Windows**
1. Open **Settings → Bluetooth & devices** and turn **Bluetooth** on.

## "Bluetooth is Off"

MOCPilot shows **Bluetooth is Off** when the device's Bluetooth is turned off. Turn it on in the control center, the quick settings or the system settings, then confirm the message: the app searches again.

## Bluetooth adapters on Windows

- You need a Bluetooth 4.0 (LE) adapter or newer: built into the computer or a USB dongle.
- **Mould King 6.0** needs an adapter and driver that can send Bluetooth broadcasts (advertising). Not every adapter can.
- **Mould King 4.0** doesn't work on Windows: the app says "Mould King 4-port hubs require Bluetooth service-data advertising, which Windows does not support." Use a phone or tablet for these hubs.

## Classic Bluetooth hubs

The **Robot Inventor** hub uses classic Bluetooth, not Bluetooth Low Energy. It works on Android, Mac and Windows, but not on iPhone and iPad. On Windows, if MOCPilot doesn't find it, pair the hub first in **Settings → Bluetooth & devices → Add device**, then search again in the app. On Windows and Mac you can also connect it with a USB cable; see [MINDSTORMS Robot Inventor hub](/docs/Application/Hubs/RobotInventorHub#connect).

All other supported hubs use Bluetooth Low Energy and are added only in MOCPilot, not in the system's Bluetooth settings.

## A stable connection

- **One app at a time.** A hub accepts only one connection. Close LEGO® apps and other remote apps, and disconnect the hub from other phones.
- **Range.** Keep the device within a few meters of the model. Walls, metal, your body and other 2.4 GHz devices (Wi-Fi routers, other Bluetooth devices) shorten the range.
- **Batteries.** Weak batteries cause disconnects when the motors work hard.
- **Keep the app open.** Drive with MOCPilot on screen, and turn on **Keep screen on** in [Settings](/docs/Application/Account/Settings) so the screen doesn't turn off while a profile is open.

More fixes for hubs that aren't found or keep disconnecting: [Troubleshooting](/docs/Help/Troubleshooting#hubs).
