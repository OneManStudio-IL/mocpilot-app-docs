---
id: DashboardOverview
title: Dashboard editor
description: "The MOCPilot dashboard: the field, the grid, the top bar, the background and undo."
---

import Screenshot from '@site/src/components/Screenshot';

# Dashboard editor

The **dashboard** is the screen you drive your model from: joysticks, sliders, buttons, monitors and other controls. Each profile has one dashboard.

Open it with the **Dashboard** button in the editor's top bar (⌘2 / Ctrl+2 on a computer). On a phone with a narrow screen, it's in **More**.

- **Phone and tablet**: the dashboard opens full screen over the editor.
- **Computer**: the dashboard opens in its own **Dashboard** window, so you can keep it next to the program.
- **Web editor**: a floating panel you can drag and resize.

<Screenshot name="dashboard-edit" alt="Dashboard in edit mode with the dot grid" width={900} />

## The field and the grid

- The field always has a **2:1** shape and fits the screen, so a dashboard looks the same on a phone, a tablet and a computer.
- In edit mode, a **dot grid** of 40 × 20 cells is shown. Controls snap to the grid.
- Controls can't overlap. If a control doesn't fit, it goes back to where it was.

## Top bar {#toolbar}

**Phone and tablet**

| Button | What it does |
|---|---|
| ← | back to the program editor |
| Undo / Redo | undo and redo dashboard changes |
| **Select** | select several controls and lock, unlock, delete or edit them together; **Done** ends it |
| ⚙ (Dashboard Settings) | background and grid options (below) |
| **+** (Add Controller, with an orange ring) | opens the controller palette; see [Add and arrange controls](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Run** / **Stop**: start and stop the program |

While the program runs, the editing buttons are hidden.

**Computer and web editor**

The top bar looks like the editor's:

- **Left**: **Home** (closes the profile), the **File**, **Edit** and **View** menus, then **Undo** and **Redo**.
- **Middle**: the profile name and **Blocks** (or **Links** in a Quick Links profile, ⌘1 / Ctrl+1) to go back to the program. The dashboard itself has no button here: it's the page you're on.
- **Right**: **Select**, **Dashboard Settings** (⚙) and the orange **+ Controller** button (Add Controller). In a narrow window the profile name and the **Blocks** button hide, and **+ Controller** keeps only its **+**.

There is no **Run** on the dashboard's bar on a computer: run and stop the program from the editor (⌘R / Ctrl+R, ⌘. / Ctrl+.). While it runs, **Select**, **Dashboard Settings** and **+ Controller** are unavailable.

Menus: **File** (Close Profile, Open in Separate Window), **Edit** (Undo, Redo) and **View** (Blocks ⌘1, Dashboard ⌘2). In the separate Dashboard window, the bar shows the window title instead of **Home**, **File** has **Close Window**, and there is no **View** menu or **Blocks** button.

## Undo and redo

The dashboard has its own history, separate from the program. You can undo every move, resize, property change, addition and deletion.

## Dashboard Settings {#dashboard-settings}

**Background image**: tap **Change** and choose:

- **Choose built-in**: a ready-made background that comes with a theme. The gallery shows the backgrounds of the themes whose controls are on this dashboard. A built-in background always fills the screen around the field, so the options below don't apply to it.
- **Upload your own**: any picture from your device. It is stored in the profile.

**Remove** clears the background.

<Screenshot name="dashboard-backgrounds" alt="Dashboard Settings with the gallery of built-in backgrounds" width={900} />

For your own picture you can also set:

- **Image fill mode**: Stretch, Preserve aspect fit, Preserve aspect crop, Tile, Tile vertically, Tile horizontally or Pad.
- **Image parent**: **Workarea** (only the field) or **Whole screen**.
- **Image opacity**, **Enable image blur** and **Blur value**: make the background calmer so the controls stand out.

**Hide dots**: hides the grid dots while the profile runs. In edit mode the dots stay visible so you can still line up the controls.

## Controls and the program

A control gives values; the program decides what they do. A control the program uses can't be deleted until the program stops using it. In Quick Links, remove the rows that use it; in Logic Blocks, remove its blocks.

## Read more

- [Add and arrange controls](/docs/Application/Dashboard/ArrangingControls): adding, moving, sizes, locking
- [Control types](/docs/Application/Dashboard/ControlTypes)
- [Special controls](/docs/Application/Dashboard/SpecialControls): steering wheel, pedals, gear shifter, handbrake, turn signals, train controller
- [Control properties](/docs/Application/Dashboard/ControlProperties)
- [Indicators and monitors](/docs/Application/Dashboard/Indicators)
