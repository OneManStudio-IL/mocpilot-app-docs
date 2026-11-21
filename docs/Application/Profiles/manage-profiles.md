---
id: ManageProfiles
title: Manage profiles
description: "Edit, share, import, export and delete MOCPilot profiles."
---

import Screenshot from '@site/src/components/Screenshot';

# Manage profiles

## Edit profile details

Tap **Edit** (phone, tablet) or click **Edit…** (computer) on a profile. In **Edit Profile** you can change:

- the **picture** and the **name**;
- the **description** (what the profile does, which model it's for, how to drive it);
- the **block level** (Logic Blocks);
- **hashtags**;
- **Favorite** (phone, tablet): a favorite profile moves to the top of your list. On a computer, **Favorite** is in the bottom bar of the profiles page.

<Screenshot name="edit-profile" alt="Edit Profile window with the picture, name, description and hashtags" width={900} />

This is also where you delete the profile and, once you're signed in, send it to the catalog.

The program type can't be changed. To move a model to the other editor, create a new profile.

## Share (export) a profile

**Share…** packs the profile into a single `.dat` file (named like `Technic Buggy_<id>.dat`) and opens the system share sheet. Send it in a message or by email, or save it to your files.

The file contains the hubs, the dashboard and the program. It doesn't contain purchases: themes and special controls the recipient doesn't own are replaced or locked when they edit the profile (see [below](#paid-themes-in-shared-profiles)).

## Import a profile

1. On **My profiles**, choose **Import Profile…** (phone: **+** → **Import Profile…**; tablet: the **New Profile** menu; computer: **File → Import Profile…**, ⌘O / Ctrl+O).
2. Pick a `.dat` file.

If you already have this profile:

- a different version: choose **Replace**, **Save as copy** (adds "(copy)" to the name) or **Cancel**;
- exactly the same file: it isn't loaded again.

A file that isn't a profile is rejected.

:::tip Duplicate a profile
There's no separate "duplicate" command. To get a copy, share the profile to a file and import it with **Save as copy**.
:::

## Delete a profile

Open **Edit Profile**:

- phone and tablet: **Slide to delete the profile**;
- computer: **Delete Profile**, then confirm. **Delete Profile** is also in the profile card's menu.

The profile is deleted from this device and from your account, so it disappears from your other devices too. This can't be undone; share the profile to a file first if you might need it again.

## Profiles from the catalog

A profile installed from the [Profile Catalog](/docs/Application/Profiles/Catalog) is your own copy:

- as long as you don't change it, it runs exactly as published, and **Update** installs a new version when the author releases one (**Update from the catalog** in **Edit Profile** does the same);
- the first change shows a warning: after it, the profile no longer gets catalog updates.

## Paid themes in shared profiles

Profiles can use paid [themes](/docs/Application/Themes/ThemesOverview) and special controls (steering wheel, pedals, gearbox and others). When you edit a profile that uses products you don't own:

- controls of themes you don't own switch to the free **Basic** theme;
- special controls with no free equivalent are locked until you buy them;
- products you own stay as they are.

An unchanged catalog profile runs with all its products, even the ones you don't own.

## Sync

When you're signed in, every change is uploaded and appears on your other devices. See [Sync between devices](/docs/Application/Account/Sync).

If you open a profile that's already being edited on another device, MOCPilot asks you to choose: **View only** (changes are not saved) or **Take over editing**.
