---
id: WebEditor
title: Web editor
description: "Edit your MOCPilot profiles in the browser on mocpilot.com and drive the model through the app on another device."
---

import Screenshot from '@site/src/components/Screenshot';

# Web editor on mocpilot.com

The web editor is MOCPilot running in your browser. It's the same app with the same editors, dashboard and themes, so everything in this documentation applies to it.

Browsers can't talk to Bluetooth hubs, so the web editor is for **editing**. To test a profile, run it in the browser without hubs; to drive the model, let the MOCPilot app on a phone, tablet or computer connect the hubs (see [Remote control](/docs/Application/Profiles/RemoteControl)).

## Try it without an account

On the [mocpilot.com](https://mocpilot.com) home page, each editor (Logic Blocks and Quick Links) has a **Try demo** button that opens a demo profile. The demo needs no account and no hubs. You can try every theme and special control in the demo; nothing is saved.

## Edit your own profiles

1. Sign in on [mocpilot.com](https://mocpilot.com) with your MOCPilot account.
2. Open your profiles and click **Edit** on one of them.
3. Change the hubs, the dashboard or the program, just as in the app.
4. Close the profile (the Home button). The editor saves the profile and uploads it, and the change reaches the app on your devices through [sync](/docs/Application/Account/Sync).

Notes:

- You can only edit profiles of the account you're signed in with. Otherwise you'll see "This profile is not in your account" and a **Back to the website** button.
- Your purchases and MocPilot Pro work in the browser just as in the app.
- In a desktop browser, the dashboard is a floating panel you can drag and resize.
- Themes are downloaded again on every visit (about 15 MB), so the first opening can take a moment.
- Importing and exporting `.dat` files isn't available in the browser; use the app.

## Run a profile {#run-a-profile}

**Run** in the web editor runs the profile in the browser: every block and row works except Bluetooth, which is good for testing the logic, monitors and the dashboard. When a hub device is paired (MocPilot Pro, see below), **Run** starts the profile on the hub device instead.

## Remote control {#remote-control}

With [MocPilot Pro](/docs/Application/Account/Pro), the web editor can be the **remote**: the MOCPilot app on a phone, tablet or computer next to the model (the **hub device**) connects the hubs and runs the profile, and the browser page controls it. Press **Remote control** in the profile's top bar and then **Show the code**, and on the hub device tap **Connect a Remote** on the **My profiles** page and scan the code. See [Remote control](/docs/Application/Profiles/RemoteControl).
