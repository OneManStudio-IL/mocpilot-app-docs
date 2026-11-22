---
id: Backpack
title: Backpack
description: "Keep pieces of your Logic Blocks programs in the Backpack and insert them into any profile, on any of your devices."
---

import Screenshot from '@site/src/components/Screenshot';

# Backpack

The **Backpack** is where you keep pieces of your block programs to reuse them in other profiles: a steering routine, a light show, a My Block you wrote once and want everywhere. Save a stack of blocks into the Backpack in one profile, then insert it into any other profile, on this device or on any device where you're signed in.

The Backpack is part of the [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) editor. Quick Links profiles don't have it.

<Screenshot name="backpack-panel" alt="The Backpack panel next to a block program" width={900} />

## What the Backpack keeps {#what-the-backpack-keeps}

Each item in the Backpack is a **copy** of the blocks you saved:

- **A stack**: the block you chose together with everything attached below it and inside it, just like **Duplicate** copies it.
- **A My Block**: if you save the `define …` block of a [My Block](/docs/Application/BlockBuilder/Blocks/MyBlocks), the Backpack keeps the whole definition. Such items are marked **My Block**.

The item also remembers the My Blocks your blocks use (even through other My Blocks) and the names of the variables, lists, messages, vehicles and sounds they refer to, so the blocks work when you insert them elsewhere.

Inserted blocks become an ordinary part of the profile's program. Nothing in the profile depends on the Backpack: deleting or renaming an item doesn't change the programs you inserted it into. Items can't be edited in the Backpack. To change one, insert it, edit the blocks in the program and save them to the Backpack again as a new item.

## Save blocks to the Backpack {#save-blocks}

1. In the program, right-click a block (computer) or touch and hold it (phone, tablet).
2. Choose **Add to Backpack**.
3. Enter a name in **Name of the blocks** and tap **Save**.

The block and everything attached to it go into the Backpack. To save a My Block definition, open the menu on its `define …` block.

<Screenshot name="backpack-add" alt="The block menu with Add to Backpack and the name window" width={900} />

## Open the Backpack {#open}

- **Computer and web editor**: the **Backpack** button in the editor's top bar, **View → Backpack** in the menu, or **Ctrl+Shift+B** (**⌘⇧B** on a Mac). If the window is narrow, the button is in the **More** menu. The Backpack opens as a panel on the right side of the editor, next to the [Monitor](/docs/Application/BlockBuilder/Editor#monitor) if it's open too.
- **Phone and tablet**: **More → Backpack** in the editor's top bar. The Backpack opens as a panel over the editor.

The button is highlighted while the Backpack is open. Press it again to close the Backpack.

Each item shows its picture, its name and the number of blocks in it (**Blocks: N**). The note at the bottom of the panel tells you where the Backpack is kept (see [below](#where-it-is-kept)).

## Insert blocks into a program {#insert}

- **Tap an item**: its blocks appear in the visible part of the program.
- **Drag an item onto the program**: the blocks land where you drop them. Drag sideways, towards the program; dragging up or down scrolls the list.
- **Item menu (⋯)**: **Insert**, **Rename…** or **Delete**.

On phones and tablets the Backpack closes after inserting, so you can see the blocks. One **Undo** removes everything that was inserted.

### What happens when you insert {#what-happens}

- **My Blocks**: a My Block that the profile already has with the same content is reused, so inserting the same blocks again doesn't create copies of it. If a different My Block in the profile uses the same name inside, the inserted one gets its own. Inserting a My Block item that's already in the profile does nothing and shows **Already here**: find the block in **My Blocks**.
- **Variables, lists, messages and vehicles**: if the profile has one with the same name, the blocks use it; otherwise it's created. Values of variables and contents of lists are not copied. If the name is taken by something else, you get a message such as *Variable "speed" could not be created: the name is taken*.
- **Sounds**: your own sounds are files of the profile and are not kept in the Backpack. If the profile doesn't have a sound with that name, you see *Sound "…" is not in this profile: choose a sound in the blocks*. Built-in sounds work everywhere.
- **Hub and dashboard blocks**: blocks for a hub, a dashboard control or a gamepad that this profile doesn't have can't be inserted. Before anything changes, the app shows **Some blocks can not be inserted** with the list of such blocks and how many will be left out, and asks whether to insert the others. Add the hub or the dashboard control first if you want to keep them. If none of the blocks fit the profile, nothing is inserted.

## Rename and delete {#rename-delete}

Open the item menu (⋯):

- **Rename…** changes the name of the item.
- **Delete** removes it after you confirm (**Delete from the backpack?**). Programs you inserted it into keep their blocks.

The Backpack never removes items by itself: delete what you no longer need.

## Where the Backpack is kept {#where-it-is-kept}

- **Without an account (guest)**: on this device only. The panel says *Kept on this device. Sign in to have the backpack on all your devices.*
- **Signed in**: in your account too, so you have the same Backpack on all your devices, including the [web editor](/docs/Introducing/WebEditor). The panel says *Kept in your account: the same backpack on all your devices.* Changes made on one device appear on the others.
- **First sign-in**: items you saved as a guest on this device move into your account.

You can use the Backpack offline. Changes are kept on the device and are sent to your account when the connection is back (the panel shows **Syncing…** meanwhile). An item that is still downloading from your account can't be inserted yet: the app says **Not ready yet**, so try again in a moment.

## Limits {#limits}

| | Limit |
|---|---|
| Items in the Backpack | 200 |
| Size of one item | about 512 KB (a very large program part may not fit: save a smaller part) |
| Item name | up to 100 characters |

If the Backpack in your account is full or an item is too large for it, the item stays on this device only and the app tells you so. Items saved by a newer version of the app can only be inserted after you update the app.

## Troubleshooting {#troubleshooting}

| Message | What to do |
|---|---|
| **The backpack is full (200 items). Delete something you do not need.** | Delete items you no longer use. |
| **Too many blocks to keep in the backpack. Save a smaller part.** | Save a smaller stack, or split the program into several items. |
| **Some blocks can not be inserted** | The profile lacks a hub, dashboard control or gamepad the blocks need. Add it and insert again, or insert the other blocks. |
| **Already here** | The My Block is already in this profile: find it in **My Blocks**. |
| **Not ready yet** | The item is still downloading from your account. Wait a moment and try again. |
| **These blocks were saved by a newer version of the app. Update the app to use them.** | Update MOCPilot on this device. |
