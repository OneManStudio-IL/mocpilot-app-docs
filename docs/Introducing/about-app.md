---
id: AboutApp
title: About MOCPilot
description: "MOCPilot turns a phone, tablet or computer into a remote control for LEGO® and compatible Bluetooth models."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: build it, drive it, control everything

**MOCPilot** turns your phone, tablet or computer into a remote control for LEGO® and compatible Bluetooth models: cars, trucks, trains, cranes, robots and your own MOCs.

You design the controls yourself: a **dashboard** of joysticks, sliders, buttons, steering wheels and indicators. A **program** then connects the dashboard to the motors and lights on your **hubs**. MOCPilot has two program editors:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Quick Links editor: rows from input to hub" style={{width: '100%'}} />
    <h3>Quick Links</h3>
    <p>No code. Each row connects one control to a motor or light: <em>input → processing → operation → hub</em>. A car is ready to drive in minutes. <a href="/docs/Application/Links/LinksIntroducing">Learn more</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Logic Blocks editor: block program" style={{width: '100%'}} />
    <h3>Logic Blocks</h3>
    <p>Visual blocks with events, loops, conditions, variables and sensor data. For robots, automation and anything that needs logic. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Learn more</a>.</p>
  </div>
</div>

## What you can do

- **Drive any model** from a dashboard you design: joysticks, sliders, buttons, switches, step switches, monitors, and special controls such as a steering wheel, pedals, a gearbox, a handbrake, turn signals and a train controller.
- **Use real hubs**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick and Mould King. See [Supported devices](/docs/Introducing/SupportedDevices).
- **Use a gamepad** (Xbox or PlayStation style) instead of the touch screen.
- **Read sensors**: hub battery and tilt, motor speed and position, color and distance sensors, and the tilt of your phone.
- **Make the dashboard yours** with [themes](/docs/Application/Themes/ThemesOverview).
- **Have your profiles everywhere**: with an account, profiles sync between your devices, and you can edit them in the browser on [mocpilot.com](/docs/Introducing/WebEditor).
- **Drive from another device**: with MocPilot Pro, one device connects the hubs and another one, or the web editor, is the remote.
- **Share**: install profiles from the [Profile Catalog](/docs/Application/Profiles/Catalog) and publish your own.

<Screenshot name="dashboard-run" alt="A MOCPilot dashboard while driving a model" width={900} />

## Where MOCPilot runs

| Device | Layout |
|---|---|
| iPhone and Android phones | Phone layout: bottom bar; an open profile fills the screen in landscape |
| iPad and Android tablets | Tablet layout: side bar, more room for the editor |
| Mac and Windows computers | Desktop layout: menus, keyboard shortcuts, the dashboard in its own window |
| Browser on mocpilot.com | [Web editor](/docs/Introducing/WebEditor): edit profiles; the hubs are connected by the app on another device |

See [Phone, tablet and desktop](/docs/Introducing/Layouts) for details.

Hubs, your profiles and downloaded themes also work without internet. See [Working offline](/docs/Application/Account/Sync#working-offline).

## Where to start

1. Read [How MOCPilot works](/docs/Introducing/HowItWorks): five minutes that make everything else easier.
2. Follow the [Quick start](/docs/Introducing/QuickStart) to drive your first model.
3. Not sure which editor to pick? Compare them in [Create a profile](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, the LEGO logo, Powered Up and Technic are trademarks of the LEGO Group, which does not sponsor, authorize or endorse MOCPilot.
:::
