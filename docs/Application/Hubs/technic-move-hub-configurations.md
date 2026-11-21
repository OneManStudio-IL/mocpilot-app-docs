---
id: TechnicMoveHubConfigurations
title: Technic Move Hub configurations
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Technic Move Hub configurations

## Overview

Unlike other LEGO® Powered Up hubs, the Technic Move Hub behaves differently depending on the configuration loaded into it.

MOCPilot can change this configuration so the hub matches the official LEGO set you want to control.

## Supported configurations

MOCPilot knows these configurations:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Technic Move Hub configuration options in the Set hub configuration block" />

## Change configuration from My Bluetooth Hubs

To change the configuration on the **My Bluetooth Hubs** page:

1. Open **My Bluetooth Hubs**.
2. Find the Technic Move Hub.
3. Open the hub menu.
4. Select **Select config**.
5. Choose the configuration.
6. Confirm in the dialog.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Technic Move Hub context menu with Select config action" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Technic Move Hub configuration submenu" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Technic Move Hub reconfiguration confirmation dialog" />

:::warning Important
Changing the configuration writes a program into the hub, much like a firmware update.

Keep the hub switched on for the whole process, and keep your phone, tablet or computer on and close to the hub so the Bluetooth connection stays stable. Don't close MOCPilot, turn off Bluetooth or switch off the hub while the configuration is changing.

An interrupted change can damage the hub firmware. The hub may then need [firmware recovery](/docs/Application/Hubs/RecoveryHubFirmware/) before you can use it again.
:::

While the configuration changes, the hub ignores normal commands and its LED steps through colours. When the new configuration is in place, the hub restarts.

## Configuration blocks

Logic Blocks can read and change the configuration while a program runs.

### Set hub configuration

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Set hub configuration block" />

The **Set hub configuration** block loads one of the supported configurations into the selected hub.

- Hub selector: chooses the hub to reconfigure.
- Configuration selector: chooses the target configuration.
- Available configurations for Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto**, and **Batmobile™ Tumbler**.

See the [Set hub configuration block documentation](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Hub configuration

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Hub configuration reporter block" />

The **Hub configuration** block reports the current configuration of the selected hub.

- Hub selector: chooses the hub to read.
- Output format: **text** returns the configuration name.
- Output format: **index** returns the configuration index, which is useful for comparisons in conditions.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Hub configuration block output format options" />

See the [Hub configuration block documentation](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Power pulse

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Technic Move Hub power pulse block" />

The **Power pulse** block sends a power pulse to the selected Technic Move Hub. It works only with the **Batmobile™ Tumbler** configuration.

The hub then runs the motors at maximum power and speed for a short time, about 1–2 seconds. In Quick Links, the same function is the [Power pulse](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) operation.

See the [Power pulse block documentation](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Change configuration during program runtime

A program can also change the configuration while it runs. A typical approach:

1. Read the current hub configuration.
2. Compare it with the configuration required by the profile.
3. If the configuration is different, set the required configuration.
4. Read the configuration again after reconfiguration.
5. Continue only when the hub reports the expected configuration.
6. Disconnect or stop the program if the required configuration was not applied.

The ready-made profile for this hub shows how to do it.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Block example showing runtime Technic Move Hub configuration change" />
