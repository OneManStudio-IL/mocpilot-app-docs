---
id: HowItWorks
title: How MOCPilot works
description: "Profiles, dashboard, hubs and program: the four parts of every MOCPilot model."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# How MOCPilot works

Everything in MOCPilot is built from four parts. Once you know them, every screen makes sense.

<HowItWorks />

## 1. Profile: one model

A **profile** holds everything about one model: its hubs, its dashboard and its program. Make one profile per model, for example "Technic Buggy" or "Crane Truck".

When you create a profile, you choose its **program type**: Logic Blocks or Quick Links. You can't change it later. See [Create a profile](/docs/Application/Profiles/CreateProfile).

## 2. Hubs: the model's electronics

**Hubs** are the Bluetooth bricks in your model; motors, lights and sensors plug into their ports. A profile has hub **slots**. You add your model's hubs to the slots once, and MOCPilot connects to them whenever you open the profile. See [Hubs](/docs/Application/Hubs/HubsOverview).

## 3. Dashboard: your controls

The **dashboard** is the screen you drive from. You place controls on a grid: joysticks, sliders, buttons, switches, step switches and monitors, plus special controls such as a steering wheel and pedals. A control does nothing on its own; it passes its values to the program. See [Dashboard](/docs/Application/Dashboard/DashboardOverview).

You can also use a gamepad, together with the dashboard or instead of it. See [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Program: what connects them

The **program** decides what happens when you move a control: which motor turns and how fast, which light blinks, what a monitor shows.

- In **Quick Links**, the program is a list of rows: *input → processing → operation → hub*. See [Quick Links](/docs/Application/Links/LinksIntroducing).
- In **Logic Blocks**, the program is made of blocks: events, loops, conditions, variables and sensors. See [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Run

Press **Run** (▶). The program starts, the dashboard controls come alive and the model responds. Press **Stop** to go back to editing. See [Driving a model](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Quick Links program: dashboard controls connected to hub ports" width={900} />

## A typical session

1. Open a profile or [create one](/docs/Application/Profiles/CreateProfile).
2. Add your hubs in **My Hubs** and switch them on.
3. Place controls on the **Dashboard**.
4. Connect them to motors and lights in the **program**.
5. Press **Run**, drive, adjust, repeat.

## What is stored where

- Profiles are saved on your device. When you're signed in, they're also stored in your account and appear on all your devices. See [Sync between devices](/docs/Application/Account/Sync).
- Themes and other purchases belong to your account. See [MocPilot Pro and purchases](/docs/Application/Account/Pro).
