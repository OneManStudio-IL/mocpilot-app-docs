---
id: HubsAndPorts
title: Hub block and ports
description: "The Quick Links Hub block, choosing ports, port checks and the port-in-use question."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub block and ports

The [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) output ends a row after an operation. There is one Hub block per hub in **My Hubs**, so add your hubs there first. Until you do, the tab says "Add hubs in My Hubs or indicators on the dashboard: they appear here".

## What the Hub block shows

- the hub's name and a **connection dot** (connected or not);
- the **ports** as chips: A, B, C, D… on LEGO® hubs and SBrick (A–F on Robot Inventor and Mould King 6.0), 1–4 on BuWizz 2.0, 1–4 plus A and B on BuWizz 3.0 Pro;
- a subtitle: "ports A, B", "choose ports", "whole hub" (after a whole-hub operation) or "drive, steering, lights" (Technic Move).

## Choose ports

Tap a port chip to use it; tap it again to free it. One row can drive **several ports** at once, for example two drive motors on A and B.

Need two motors to turn in opposite directions? Make two rows from the same input and add **Invert** to one of them.

## One port, one row

A port belongs to one row. If you pick a port that another row already uses, MOCPilot asks:

> **Port is already used**: On "Technic Hub" port A is used in row 2 (Motor). Use it in this row? The other row loses this port and stops driving it.

**Use in this row** moves the port; **Cancel** leaves it where it was. A port used by two rows (for example, in an old file) is reported as a problem: "Port A is also used in row 2".

<Screenshot name="port-in-use" alt="Port is already used dialog" width={700} />

## Port checks

When the hub is connected, MOCPilot knows what is plugged into each port and checks that the operation fits:

| Problem | Meaning |
|---|---|
| "Port A: this device cannot work as a servo (a motor with an encoder is needed)" | Servo and Run for degrees need a motor with an encoder |
| "Port A: the motor has no absolute position (angular motors only)" | Go to position needs an angular motor |
| "Port A has a sensor, not a motor" | the device on the port is a sensor |
| "Port A takes simple speed commands only: no position control" | this port cannot control positions |
| "Port A has no LED: use ports 1-4" | Port colour works on BuWizz 3.0 Pro ports 1–4 only |
| "Sensor lights: choose one port, the one with the distance sensor" | Sensor lights takes exactly one port |

Operations a hub cannot do are not offered for it. If you switch a row to another hub, the row says which operation does not fit, for example "Brake: Technic Move only (… has no brake command)".

## Technic Move Hub

The Technic Move Hub (in LEGO® Technic remote-controlled cars) is driven by function, not by port: its Hub block shows **drive, steering, lights** and takes no ports. Use **Motor** or **Motor for time** to drive, **Servo** to steer, **Light** for the lights, and **Brake**, **Boost** and **Power pulse** for the special functions.

Driving, steering, lights, brake and boost can each be used by one row only ("Row 2 already drives this Technic Move").

To load a car configuration into the hub (Porsche, Lamborghini, Batmobile), use **My Hubs → Select config**. See [Technic Move Hub configurations](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King

Mould King hubs only receive commands, so they have no inputs and give no connection feedback. To switch the hub's control channel, use the [Channel](/docs/Application/Links/Blocks/OutputBlocks#op-channel) operation.
