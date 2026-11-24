---
id: SystemRequirements
title: System requirements
description: "Supported operating systems, Bluetooth, memory and browsers for MOCPilot."
---

# System requirements

MOCPilot runs on phones, tablets and computers. To drive a model, the device also needs Bluetooth and a [supported hub](/docs/Introducing/SupportedDevices).

## Operating systems

| Platform | Minimum version | Where to get it |
|---|---|---|
| iPhone and iPad | iOS / iPadOS 17 | App Store |
| Android phones and tablets | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Windows PC (64-bit, x64) | Windows 10 version 1809 or Windows 11 | Microsoft Store |

You'll find the store links on [mocpilot.com](https://mocpilot.com). The app picks the phone, tablet or desktop layout by itself; see [Phone, tablet and desktop](/docs/Introducing/Layouts).

## Bluetooth

- Hubs connect over **Bluetooth Low Energy** (Bluetooth 4.0 or newer). Almost every phone and tablet has it; on a computer, use the built-in adapter or a USB Bluetooth dongle.
- The **Robot Inventor** hub uses classic Bluetooth. It works on Android, Mac and Windows, but not on iPhone and iPad. On Windows and Mac it can also connect with a USB cable.
- **Mould King** hubs receive commands as Bluetooth broadcasts (advertising). On Windows, Mould King 6.0 needs an adapter and driver that can broadcast, and Mould King 4.0 doesn't work at all; use a phone or tablet for it.
- The app asks for Bluetooth permission (on Android, also Nearby devices or Location). See [Bluetooth and permissions](/docs/Help/BluetoothPermissions).

## Memory

On devices with less than 4 GB of memory, MOCPilot draws Logic Blocks in a simpler way, so large programs stay smooth. This happens automatically; the blocks work the same.

## Web editor

The [web editor](/docs/Introducing/WebEditor) on mocpilot.com runs in the browser:

- use an up-to-date desktop browser; the editor needs WebAssembly;
- the first opening downloads about 20 MB for the editor and about 15 MB of themes, so a fast connection helps;
- browsers can't connect to Bluetooth hubs: to drive a model from the browser, use [remote control](/docs/Application/Profiles/RemoteControl), which needs a browser that supports WebRTC;
- if you see "The editor could not start in this browser.", update the browser or try another one.

## Internet

Hubs, your profiles and downloaded themes work offline. Sign-in, sync, the catalog, the AI builder, remote control and purchases need an internet connection. See [Working offline](/docs/Application/Account/Sync#working-offline).
