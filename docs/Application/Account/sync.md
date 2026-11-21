---
id: Sync
title: Sync between devices
description: "Keep MOCPilot profiles and settings in sync across phones, tablets, computers and the web editor, and work offline."
---

import Screenshot from '@site/src/components/Screenshot';

# Sync between devices

When you're signed in, MOCPilot keeps your profiles and settings the same on every device: phone, tablet, computer and the [web editor](/docs/Introducing/WebEditor). There's nothing to turn on: sync is always on for an account.

## How it works

- Changes are saved on the device first and uploaded when you're online ("Syncing profiles…").
- Other devices download the new version when they're online.
- Purchases aren't synced as files; they belong to your account and are available wherever you sign in.
- Profiles added on the website (**Add to my account** in the catalog) or edited in the web editor arrive through sync.
- In guest mode nothing is synced: profiles stay on this device only.

## Conflicts

If the same profile was changed on two devices before they synced, the version from your account wins, and your version on this device is saved as a copy ("(copy)" is added to its name). MOCPilot tells you about it in a **Profile synchronization** message. The same happens if a profile you changed here was deleted on another device.

If you open a profile that's being edited on another device right now, you can choose **View only** (changes are not saved) or **Take over editing**.

## Working offline

Hubs, your profiles and downloaded themes work without internet.

- If MOCPilot can't reach the server at launch, it shows **No internet connection** with **Work offline** and **Retry**.
- While you're offline, an **Offline** label is shown at the top. Features that need the server (the catalog and publishing, the AI builder, remote control, notifications, purchases, support messages) tell you they need an internet connection.
- Changes you make offline are uploaded when the connection is back. When the app sees the server again, it shows **Connection is back** with **Go online**.

<Screenshot name="offline-prompt" alt="No internet connection message with the Work offline and Retry buttons" width={900} />

## Signing out

Signing out removes your profiles and settings from this device; they stay in your account and come back when you sign in again. If some changes haven't been uploaded yet, MOCPilot warns you first and lists the profiles: connect to the internet and let the sync finish, or choose **Sign out anyway** (a copy is kept in the app's Backup folder).

## Tips

- Before publishing a profile to the catalog, make sure it's synced: the catalog takes it from your account.
- To move profiles to a device without an account, use **Share** and **Import Profile…** with `.dat` files. See [Manage profiles](/docs/Application/Profiles/ManageProfiles).
