---
id: Layouts
title: Phone, tablet and desktop
description: "Where everything is in the MOCPilot phone, tablet and desktop layouts, plus the desktop menus and keyboard shortcuts."
---

import Screenshot from '@site/src/components/Screenshot';

# Phone, tablet and desktop

MOCPilot has three layouts, and the app picks one automatically:

- **Phone**: iPhone and Android phones.
- **Tablet**: iPad and Android tablets (7 inches and larger).
- **Desktop**: Mac and Windows computers. The [web editor](/docs/Introducing/WebEditor) in a browser uses the desktop editor too.

Profiles, editors and the dashboard are the same everywhere; only the navigation differs.

## Phone

<Screenshot name="profiles-phone" alt="My profiles page on a phone with the bottom bar" width={360} />

- The **bottom bar** has **Profiles**, **Settings** and **Help**, plus **Notifications** when you're signed in.
- **Account** is at the top of **Settings**.
- The **My profiles** header has **Sort and filter**, **Connect a Remote** (the remote control icon), **+** (New Profile, Import Profile…, Search Online) and the search field.
- The main screens are in portrait. When you open a profile, the app switches to **landscape, full screen**, so the editor and the dashboard get the whole screen. Closing the profile brings portrait back.
- In the editor, **Home** is on the left of the top bar. On the right are **Undo** and **Redo**, **Dashboard**, **My Hubs** (with the number of connected hubs), **Problems** (Quick Links), **Remote control**, **More** (⋯) and **Run / Stop**. **More** has the **AI builder**, the [**Backpack**](/docs/Application/BlockBuilder/Backpack) and **Monitor** (Logic Blocks), **Gamepad** and **Editor Settings**. On a narrow screen, Dashboard and My Hubs move into **More** too, so the buttons keep a finger-friendly size.

<Screenshot name="editor-phone" alt="Profile editor on a phone with its top bar" width={900} />

## Tablet

<Screenshot name="profiles-tablet" alt="My profiles page on a tablet with the side bar" width={900} />

- The **side bar** on the left has **Profiles**, **Profile Catalog**, **Notifications**, **Settings** and **Help**. Below them are the **MocPilot Pro** card and your account (**Sign In** in guest mode). You can collapse the side bar to icons.
- The **My profiles** header has **New Profile** (its menu also has Import Profile…, Connect a Remote and Search Online), **Sort and filter**, **Filter by hashtags**, **Connect a Remote** and the search field.
- Tap a profile card to select it: the bar at the bottom shows **Share**, **Edit**, **Add to Favorites** and **Launch**. Double-tap a card to launch it. Long-press a card for its menu, which also has **Delete Profile**.
- On wide screens, Settings and Help open next to the list.
- A profile opens in landscape, and the editor has the same top bar as on a phone.

## Desktop (Mac and Windows)

<Screenshot name="profiles-desktop" alt="My profiles on a computer" width={900} />

- On the right of the top bar: **Account** (**Sign In** in guest mode), **Notifications** (when you're signed in), **Connect a Remote** (the remote control icon) and **Settings** (the gear).
- Settings, Help, Account, New Profile, Edit Profile, the Profile Catalog and other pages open as **windows** over the profile list.
- Click a profile card to see what you can do with it (**Share…**, **Edit…**, **Add to Favorites**, **Launch**); double-click launches it. Right-click a card for its menu, which also has **Delete Profile**.
- In the editor, the **Dashboard** opens in its **own window**, so you can see the program and the dashboard side by side.

### The editor's top bar {#editor-top-bar}

- **Left**: **Home** (closes the profile), the **File**, **Edit**, **View** and **Program** menus, then **Undo** and **Redo**.
- **Middle**: the profile name and the buttons of the profile's other sections: **Dashboard**, **Hubs** (with the number of connected hubs) and **Gamepad**. The page you're on has no button of its own.
- **Right**: the side panels **AI builder**, [**Backpack**](/docs/Application/BlockBuilder/Backpack) and **Monitor** (the last two in Logic Blocks only), **More** (⋯), then the rows' status in Quick Links (**All rows are ready** or **Problems: N**), **Remote control** and the orange **Run** button (**Stop** while the program runs).

**More** always has **Editor Settings…**. When the window gets narrow, the bar folds step by step instead of squeezing the buttons: the profile name hides first, then **Monitor**, **Backpack** and the **AI builder** move into **More**, then **Run** keeps only its icon (and the Quick Links status only its icon and count), and finally **Gamepad**, **Dashboard** and **Hubs** move into **More** as well. If a side panel that's in **More** is open, the **More** button is tinted.

The Dashboard's top bar looks the same: **Home**, **File**, **Edit** and **View**, **Undo** and **Redo** on the left; the profile name and **Blocks** (or **Links**) to go back to the program in the middle; **Select**, **Dashboard Settings** and **+ Controller** on the right. See [Dashboard editor](/docs/Application/Dashboard/DashboardOverview#toolbar).

### Menus {#menus}

On Windows the menus are on the left of the app's top bar. On a Mac they're in the system menu bar at the top of the screen.

| Menu | Windows | Mac |
|---|---|---|
| **MOCPilot** (app menu) | — | About MOCPilot, Settings…, Quit |
| **File** | New Profile, Import Profile…, Search Online, Quit | New Profile, Import Profile…, Search Online, Connect a Remote… |
| **View** | Enter Full Screen | Enter / Exit Full Screen |
| **Window** | Minimize, Maximize / Restore | Minimize |
| **Help** | MOCPilot Help, Ask a question, Report a bug, About MOCPilot | MOCPilot Help, Ask a question, Report a bug |

When a profile is open, the editor has its own **File**, **Edit**, **View** and **Program** menus (see [Desktop menus](/docs/Application/BlockBuilder/Editor#desktop-menus)), and the Dashboard window has **File**, **Edit** and **View** (see [Dashboard](/docs/Application/Dashboard/DashboardOverview)).

### Keyboard shortcuts {#keyboard-shortcuts}

On a Mac, ⌘ (Command) does what Ctrl does on Windows; ⇧ is Shift, ⌃ is Control.

**Everywhere**

| Action | Windows | Mac |
|---|---|---|
| Settings | Ctrl+2 | ⌘, |
| Enter / exit full screen | F11 or Alt+Enter | ⌃⌘F |
| Minimize the window | — | ⌘M |
| Quit | Alt+F4 | ⌘Q |

**My profiles** (no profile open)

| Action | Windows | Mac |
|---|---|---|
| New profile | Ctrl+N | ⌘N |
| Import profile | Ctrl+O | ⌘O |
| Search profiles | Ctrl+F | — |
| Profiles / Settings / Help / Account | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Profile editor**

| Action | Windows | Mac |
|---|---|---|
| Close profile | Ctrl+W | ⌘W |
| Run / Stop | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Undo / Redo | Ctrl+Z / Ctrl+Shift+Z or Ctrl+Y | ⌘Z / ⇧⌘Z |
| Show the dashboard | Ctrl+2 | ⌘2 |
| My Hubs | Ctrl+Shift+H | ⇧⌘H |
| AI builder | Ctrl+Shift+I | ⇧⌘I |
| Show / hide the block palette (Logic Blocks) | Ctrl+P | ⌘P |
| Search the block palette (Logic Blocks) | Ctrl+F | ⌘F |
| Monitor (Logic Blocks) | Ctrl+Shift+M | ⇧⌘M |
| [Backpack](/docs/Application/BlockBuilder/Backpack) (Logic Blocks) | Ctrl+Shift+B | ⇧⌘B |
| Zoom in / out / actual size (Logic Blocks) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Dashboard**

| Action | Windows | Mac |
|---|---|---|
| Undo / Redo | Ctrl+Z / Ctrl+Shift+Z or Ctrl+Y | ⌘Z / ⇧⌘Z |
| Back to the program (when the dashboard is in the main window) | Ctrl+1 | ⌘1 |
| Close the Dashboard window | — | ⌘W |
| Leave **Select** mode, or close the properties panel | Esc | Esc |
| Delete the control (properties panel open) | Delete or Backspace | Delete or Backspace |
| Duplicate the control (properties panel open) | Ctrl+D | ⌘D |

On a tablet with a keyboard, Ctrl+B (⌘B on an iPad) shows or hides the side bar.

## The profile editor on every layout

The editor has no tabs. The **program** (Quick Links rows or Logic Blocks) fills the screen, and the buttons of the top bar open everything else. Some of them are in **More** (⋯): on a phone or tablet the AI builder, Backpack, Monitor, Gamepad and Editor Settings; on a computer Editor Settings and whatever doesn't fit in a narrow window.

| Button | Opens |
|---|---|
| **My Hubs** (**Hubs** on a computer) | the profile's [hub slots](/docs/Application/Hubs/ConnectingHubs) |
| **Dashboard** | the [dashboard](/docs/Application/Dashboard/DashboardOverview) |
| **Gamepad** | [gamepad settings](/docs/Application/Dashboard/Gamepad) |
| **Monitor** | variable and list values (Logic Blocks only) |
| **Backpack** | block stacks you saved to reuse in any profile (Logic Blocks only); see [Backpack](/docs/Application/BlockBuilder/Backpack) |
| **Editor Settings** | [editor options](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **AI builder** | the [AI builder](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Problems** | rows that can't run (Quick Links only) |
| **Remote control** | run the profile on another device and control it from here (MocPilot Pro); see [Remote control](/docs/Application/Profiles/RemoteControl) |
| **Run / Stop** | starts and stops the program (on a computer, the orange **Run** button at the right end) |
