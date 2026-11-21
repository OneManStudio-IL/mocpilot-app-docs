---
id: FirmwareUpdating
title: Firmware updating
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Firmware updating

MOCPilot can update the firmware of supported LEGO® Powered Up hubs when a newer compatible version is available.

Some hubs need an update before they work correctly with MOCPilot: newer firmware fixes hub bugs and adds the features the app relies on.

## Supported hubs

MOCPilot can update these hubs:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Before you start

Make sure the hub and your phone, tablet or computer have enough battery power.

Keep the hub switched on for the whole update and keep your device close to it so the Bluetooth connection stays stable. Don't close MOCPilot, turn off Bluetooth or switch off the hub while the firmware is uploading.

:::warning Important
An interrupted update can leave the hub with incomplete firmware. The hub may then need firmware recovery before you can use it again.
:::

## Starting the update

When you connect a hub, MOCPilot checks its firmware version. If a newer version is required, the app shows the **Firmware update required** dialog.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Firmware update required dialog" />

Select **Update** to start the firmware update immediately.

To update later, select **Cancel**. You can start the update from the hub menu at any time.

## Updating later from the hub menu

To start the update yourself:

1. Open **My Bluetooth Hubs**.
2. Find the hub that needs updating.
3. Open the hub menu.
4. Select **Update firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Update firmware action in the hub context menu" />

## During the firmware update

MOCPilot uploads the firmware to the hub and shows the progress.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Firmware update progress screen" />

Wait for the upload to finish. The hub may restart or disconnect for a moment while the new firmware is applied.

Then MOCPilot searches for the hub again. Keep the hub nearby and wait for the app to reconnect.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware uploaded and searching for hub" />

## Finishing the update

When the update is done, MOCPilot shows a confirmation.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Firmware update finished dialog" />

Select **OK**. The hub reconnects, and its card shows the new firmware version.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Hub card showing updated firmware version" />

You can now continue using the hub with MOCPilot.

## If the update fails

If the update fails, MOCPilot shows an error message.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Firmware update failed dialog" />

First, switch the hub off and on and run the update again:

1. Turn the hub off.
2. Turn the hub on again.
3. Keep the hub close to your device.
4. Connect to the hub in MOCPilot.
5. Start the firmware update again.

If the hub still does not respond normally, it may need firmware recovery: see [Hub firmware recovery](/docs/Application/Hubs/RecoveryHubFirmware/).
