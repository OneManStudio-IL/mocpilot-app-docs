---
id: Indicators
title: Indicators and monitors
description: "Show battery, speed, tilt, sensor values and text on the dashboard."
---

# Indicators and monitors

Monitors show information on the dashboard while you drive: battery level, speed, tilt, the distance to an obstacle, the current gear or mode.

| Monitor | Shows | Theme |
|---|---|---|
| **Monitor** | text or a number | all themes |
| **Battery level** | a level gauge | paid themes |
| **Speedometer** | a speed gauge | paid themes |
| **Tilt monitor** | pitch and roll of a model | paid themes |

Monitors only display information; you can't drive with them. The program decides what they show.

## In Quick Links

Use the **Indicator** output. The row ends with the indicator instead of a hub:

- *Hub* (Battery) → *Indicator* (Battery level): the hub battery on a gauge.
- *Hub* (Motor speed, port A) → *Indicator* (Speedometer).
- *Hub* (Tilt pitch) → *Indicator* (Tilt monitor, Tilt X), and a second row for Tilt roll → Tilt Y.
- *Hub* (Battery voltage) → *Indicator* (Monitor): shows the value with its unit, such as "7.85 V".

The indicator shows the value as it is, so the row has no operation. See [Indicator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## In Logic Blocks

Use the dashboard controller blocks:

- *show … on … monitor* for the Monitor;
- *set … to … monitor* for the Battery level and the Speedometer;
- *set … to … pitch / roll monitor* for the Tilt monitor.

You can show anything you can calculate: a sensor value, a variable, text like "Gear 2". See [Dashboard controllers](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Tips

- Put the battery monitor in a corner where your fingers won't cover it.
- For longer messages, use a multi-line Monitor with **Marquee** or **Scroll** overflow.
- The program can change the colour of most controls, for example to turn a button red when the battery is low.
