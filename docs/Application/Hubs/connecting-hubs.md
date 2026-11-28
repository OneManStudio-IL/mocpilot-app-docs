---
id: ConnectingHubs
title: Add and connect a hub
description: "Add a hub to a profile slot, connect it, rename it and watch its sensors in the hub monitor."
---

import Screenshot from '@site/src/components/Screenshot';

# Add and connect a hub

You add a hub to a profile once. After that, MOCPilot connects to it whenever you open the profile.

## Add a hub

1. Open the profile and tap **My Hubs** (on a computer, **Hubs** in the top bar or ⇧⌘H / Ctrl+Shift+H). The **My Bluetooth Hubs** page shows the slots.
2. Tap **Add a new Hub** in a free slot.
3. Pick your hub from the list. The filter at the top shows **All**, **LEGO**, **SBrick**, **BuWizz** or **Mould King**. Tap **Add**.
4. Follow the on-screen steps: **Press the button on the Hub** and **Wait for the search to find the Hub**. Tap **Start scan** to search again.

<Screenshot name="add-hub" alt="Choosing a hub to add" width={900} />

Once the hub is found, it connects and stays in the slot.

<Screenshot name="my-hubs" alt="My Bluetooth Hubs with connected hubs and free slots" width={900} />

## The slot menu

The **Connect** button on a slot connects the hub. The slot menu has:

- **Disconnect**;
- **Rename hub**: stores a new name in the hub itself (connected hubs that support it);
- **Update firmware**: when newer firmware is available; see [Firmware updating](/docs/Application/Hubs/FirmwareUpdating);
- **Recover hub firmware**: when the hub is connected in recovery mode; see [Firmware recovery](/docs/Application/Hubs/RecoveryHubFirmware);
- **Select config**: Technic Move configurations; see [Technic Move Hub configurations](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Select channel: A / B / C**: the Mould King control channel;
- **Delete Hub**: removes the hub from the profile.

The **My Hubs** button in the editor (**Hubs** on a computer) shows how many hubs are connected.

## Hub monitor {#hub-monitor}

Open a connected hub to see its **hub monitor**:

- the hub: model, name, firmware, battery, battery voltage, charging, board temperature, configuration, orientation, tilt (pitch, roll, yaw) and accelerometer;
- each port: the device plugged in and its speed, position, relative position, colour, reflected and ambient light, or distance.

Use it to check which motor is on which port and which way it turns before you build the program. The values keep updating while the MOCPilot window is in the background.

<Screenshot name="hub-monitor" alt="Hub monitor of a connected Technic Hub" width={900} />

## Connection tips

- Switch the hub on just before connecting: many hubs turn themselves off after a few minutes without a connection.
- Keep the phone close to the hub; walls and metal reduce the range.
- A hub can be connected to only one device at a time. Close other apps that use it (LEGO® apps, other remotes).
- **Bluetooth is Off**: turn Bluetooth on and allow MOCPilot to use it in the system settings.
- **The Hub not found**: press the hub button again, restart the scan or change the batteries.
- **Mould King** hubs don't really "connect": MOCPilot sends them commands over Bluetooth advertising. If the hub does not react, tap **Connect again** and check the channel.

More in [Troubleshooting](/docs/Help/Troubleshooting#hubs).
