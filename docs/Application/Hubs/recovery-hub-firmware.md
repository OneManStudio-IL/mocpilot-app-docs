---
id: RecoveryHubFirmware
title: Hub firmware recovery
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hub firmware recovery

Firmware recovery brings back a hub that cannot start normally after an interrupted or failed firmware update.

MOCPilot uploads working firmware to the hub so it can run and be updated again. Use recovery only when the hub does not respond normally, when MOCPilot shows that the hub is in recovery mode, or after a failed update.

:::warning Important
Keep the hub switched on and your device close to it for the whole recovery. Turning off Bluetooth, closing MOCPilot, removing the batteries or switching off the hub during the upload can make the recovery fail.
:::

## When recovery is required

You may need recovery if:

- A firmware update did not finish successfully.
- The hub no longer connects as a normal hub.
- The hub appears as **LEGO Bootloader** in MOCPilot.
- MOCPilot detects that the hub is connected in firmware recovery mode.

Before you start, make sure the hub has enough battery power, your phone, tablet or computer is charged, and Bluetooth is on.

## Supported hubs

Recovery works for the same hubs as firmware updating:

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

## Put a Technic Hub, Boost Hub or City Hub into recovery mode

These hubs connect through their bootloader:

1. Turn the hub off.
2. Press and hold the green button.
3. Keep holding the button until the hub LED starts blinking purple.
4. Do not release the button while the LED is blinking purple.
5. While still holding the button, open **My Bluetooth Hubs** in MOCPilot and connect to the hub.
6. After the hub is connected in bootloader mode, you can release the button.

When the hub is in recovery mode, it may appear as **LEGO Bootloader** instead of its normal hub name.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="LEGO Bootloader hub in the hub list with recover firmware action" />

## Put a Technic Move Hub into recovery mode

The Technic Move Hub recovers differently: it does not connect as **LEGO Bootloader**. Instead, the button sequence below loads the factory firmware **1.2.3**, which is not meant for everyday use.

To restore its firmware:

1. Turn the hub off.
2. Press and hold the green button.
3. Keep holding the green button for about one minute.
4. Release the button.
5. Wait until the hub LED starts blinking white.
6. Open **My Bluetooth Hubs** in MOCPilot and connect to the hub.

When the hub connects, MOCPilot detects the factory firmware and offers to update it to the latest version. Start the update and wait for it to finish.

## Start recovery from the dialog

When MOCPilot detects a hub connected in recovery mode, it shows a recovery dialog.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Hub recovery mode detected dialog" />

Select **Recover** to start uploading firmware to the hub.

If you are not ready, select **Cancel**. You can start recovery later from the hub menu.

## Start recovery from the hub menu

To start recovery yourself:

1. Open **My Bluetooth Hubs**.
2. Find the hub shown as **LEGO Bootloader**.
3. Open the hub menu.
4. Select **Recover hub firmware**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Recover hub firmware action in the hub context menu" />

## During firmware recovery

MOCPilot uploads the firmware to the hub and shows the progress.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Firmware recovery progress screen" />

Wait until it is complete. Don't move the hub away from your device, close the app, turn off Bluetooth or cut the hub's power.

The hub may restart or reconnect several times. This is normal: keep MOCPilot open and wait.

## Finish recovery

When the recovery is done, MOCPilot shows a confirmation.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Firmware recovery finished dialog" />

Select **OK**. The hub should restart and reconnect as a normal hub instead of **LEGO Bootloader**.

Then check the hub in **My Bluetooth Hubs**. If MOCPilot still asks for a firmware update, run a normal [firmware update](/docs/Application/Hubs/FirmwareUpdating/).

## If recovery fails

If recovery fails:

1. Keep the hub close to your device.
2. Switch the hub off and on.
3. Put the hub into recovery mode again.
4. Connect to **LEGO Bootloader** in MOCPilot.
5. Start **Recover hub firmware** again.

If the error appears again, repeat the whole procedure. If several attempts fail, replace or recharge the batteries and try again.
