---
id: Editor
title: Working in the editor
description: "Palette, dragging blocks, zoom, context menus, undo, Monitor, Editor Settings and the AI builder in Logic Blocks."
---

import Screenshot from '@site/src/components/Screenshot';

# Working in the editor

<Screenshot name="blocks-editor" alt="Logic Blocks editor" width={900} />

## Palette and program area

- Show or hide the palette with **View → Block Palette** (⌘P / Ctrl+P).
- Pick a category, drag a block into the program area and drop it under another block to attach it. A preview shows where it will snap.
- Drag a whole stack by its top block; drag a block from the middle to take it and everything below it.
- To delete blocks, drag them back onto the palette.
- Variables, lists, messages and My Blocks are created with the buttons in their categories (**Make a variable**, **Make a list**, **Add message**, **Make a Block**) or from **Edit → New Variable… / New List… / New Message… / New Block…**. Sounds and vehicles have their own buttons too: **Add sound** in [Sounds](/docs/Application/BlockBuilder/Blocks/Sounds) and **Create vehicle** in [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoom and scroll

- Pinch (on a touch screen) or use **View → Zoom In / Zoom Out / Actual Size** (⌘+ / ⌘− / ⌘0).
- Drag an empty spot to move around.
- The context menu of an empty spot has **Zoom +**, **Zoom -**, **Reset zoom** and **Delete N blocks**.

## Block menu {#block-menu}

Long-press (on a touch screen) or right-click a block:

- **Edit**: change its values;
- **Duplicate**;
- **Delete block** / **Delete N blocks**;
- **About block**: opens the block's description in this documentation;
- **Export block as SVG** / **Export all blocks as SVG**: save a picture for a tutorial or a forum post.

<Screenshot name="blocks-block-menu" alt="Context menu of a block in Logic Blocks" width={900} />

A block that is linked to a dashboard control can be deleted only after you release it from that control.

## Undo and redo

Use **Edit → Undo / Redo** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) or the floating buttons.

- One drag is one step; quick edits of the same value merge into one step.
- Undo works even while the program runs.
- Creating or deleting variables, lists, messages or My Blocks is a step too; undoing it stops a running program.
- Values stored in variables and lists are not undone.
- The dashboard has its own undo history.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M) shows the current values of variables and lists while the program runs. On a computer you can open it in a separate window. It's a great help when you're looking for a bug.

<Screenshot name="blocks-monitor" alt="Monitor showing variables and a list while the program runs" width={900} />

## Editor Settings {#editor-settings}

- **Launch block by clicking**: clicking a block runs it, so you can test it on its own; if the program is stopped, this starts it too.
- **Open the program in the middle**: when you open a profile, the program is shown at 100% in the middle of the canvas (or from its top-left corner when it's larger), wherever you left it while editing. This applies to all profiles on this device.
- **Stop hub ports when program stops**: stops all motors and turns off all lights when you press **Stop**. Leave it on unless the motors need to keep their state.
- **Select blocks level**: Beginner, Advanced or Guru.

<Screenshot name="blocks-editor-settings" alt="Editor Settings panel in Logic Blocks" width={900} />

## Block levels {#block-levels}

| Level | Shows |
|---|---|
| **Beginner** | the simplest blocks; an uncluttered palette for children and first steps |
| **Advanced** | the common logic and device blocks |
| **Guru** | the complete set of blocks |

The level is saved in the profile. Blocks already in the program keep working when you lower the level.

## AI builder {#ai-builder}

With [MocPilot Pro](/docs/Application/Account/Pro), the **AI builder** (the sparkles button, ⇧⌘I / Ctrl+Shift+I) sets up the hubs, the dashboard and the program from a description that you type or say, and then changes the profile as you ask. It works in Logic Blocks and Quick Links profiles. See [AI builder](/docs/Application/Profiles/AiBuilder).

### How to get a good result {#ai-builder-tips}

Name the hub, say what is connected to each port and what it should do, and how you want to control it. See [Write a good request](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Desktop menus {#desktop-menus}

| Menu | Items |
|---|---|
| File | Close Profile (⌘W) |
| Edit | Undo, Redo, New Variable…, New List…, New Message…, New Block… |
| View | Block Palette, Zoom In, Zoom Out, Actual Size |
| Program | Run (⌘R), Stop (⌘.) |
