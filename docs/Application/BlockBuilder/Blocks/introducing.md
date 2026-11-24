---
id: BlocksIntroducing
title: Introducing Logic Blocks
description: "Logic Blocks is the visual block programming editor of MOCPilot: events, loops, conditions, variables, sensors and sounds."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logic Blocks

**Logic Blocks** is the block programming editor in MOCPilot. You build programs by snapping blocks together, much like in Scratch: events, loops, conditions, variables, lists, your own blocks, sounds, and blocks for motors, lights, sensors, dashboard controls and the gamepad.

Choose Logic Blocks when your model needs logic: robots, automatic sequences, reactions to sensors, startup checks, games. If you only need to connect controls to motors, [Quick Links](/docs/Application/Links/LinksIntroducing) is faster.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Logic Blocks program" style={{width: '100%', maxWidth: 720}} />

:::warning Not Scratch
Logic Blocks has its own set of blocks and its own behavior. You can't import MOCPilot programs into Scratch, or Scratch projects into MOCPilot.
:::

## The editor at a glance

<Screenshot name="blocks-editor" alt="Logic Blocks editor with the palette and a program" width={900} />

- The **palette** lists the block categories: **Events**, **Control**, **Sensors**, **Sounds**, **Operators**, **Variables**, **Lists** and **My Blocks**. Other categories appear when your profile needs them: **Motors** and **Light** (when a hub supports them), **Movement** (with a [Robot Inventor hub](/docs/Application/Hubs/RobotInventorHub)), **Simulator** (when the dashboard has pedals, a gearbox or a handbrake), **Dashboard controllers** and **Gamepad**.
- The **program area** is where you drag blocks and build scripts.
- The top bar has **Undo** and **Redo**, **Dashboard**, **My Hubs**, **Gamepad**, the side panels **AI builder**, [**Backpack**](/docs/Application/BlockBuilder/Backpack) and **Monitor**, **More** (with **Editor Settings**) and **Run/Stop**. On a phone or tablet, the side panels and Gamepad are in **More**.

See [Working in the editor](/docs/Application/BlockBuilder/Editor) for details.

## How a program runs

- A script starts with an **event** block (a hat block): *when program starts*, *when button … is pressed*, *when I receive …*, and so on.
- The blocks attached below it run from top to bottom.
- Several scripts run **at the same time**. Use messages (*broadcast*) to coordinate them.
- **Loops** (*forever*, *repeat*, *repeat until*) keep a script going; **conditions** (*if*, *if … else*, *wait until*) make decisions.
- **Reporter** blocks (rounded) return values and fit into the inputs of other blocks; **Boolean** blocks (pointed) return true or false for conditions.
- **Variables** and **lists** keep values between blocks and scripts.

## Block shapes

### Hat blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Start a script when something happens. You can only attach blocks below them.

---

### Stack blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

The main command blocks: each one does something.

---

### C blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-shaped blocks that hold other blocks inside them: loops and conditions.

---

### Reporter blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Return a value, such as a number or text.

---

### Boolean blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Return only `true` or `false`. You usually use them in conditions.

---

### Cap blocks

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

End a script: nothing can be attached below them.

---

### Block stack

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

A stack is a group of connected blocks that runs as one script, from top to bottom.
A stack usually starts with an event block, followed by the blocks that run in order.

---


## Hubs, ports and controls

- Motor and light blocks take a **hub** and a **port**. The Motors and Light categories appear only when a hub in the profile supports them, and some blocks exist only for particular hubs (for example, BuWizz power modes or Technic Move Hub functions). Each block's description says which hubs it works with.
- Dashboard blocks refer to controls by name (**JOY1**, **BTN2**). You can't delete a control from the dashboard while blocks use it; remove those blocks first.
- Gamepad blocks appear when **Enable gamepad blocks** is on in the [Gamepad page](/docs/Application/Dashboard/Gamepad).

## Block levels

Each profile has a **block level**: **Beginner** shows the simplest blocks, **Advanced** adds common logic and device blocks, and **Guru** shows the complete set. Choose it when you create the profile or later in Editor Settings. This reference shows each block's level next to its name.

## Recommended workflow

1. Start with one event block and a short script; press **Run** and check that it works.
2. Check motor directions and value ranges early (a Monitor helps).
3. Split the program into small scripts that talk to each other with messages; move repeated logic into [My Blocks](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Add safety: limits, stops, a startup check, and a plan for when a hub disconnects.

## Common pitfalls

- A script without an event block never starts.
- The wrong hub or port is selected, so nothing visible happens.
- Mixing text, numbers and Boolean values gives unexpected results.
- Very frequent events with no filtering (for example, a sensor event on every tiny change) can overload the program; use thresholds or short waits.

## Block reference {#block-reference}

- [Events](/docs/Application/BlockBuilder/Blocks/Events) · [Control](/docs/Application/BlockBuilder/Blocks/Control) · [Operators](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variables](/docs/Application/BlockBuilder/Blocks/Variables) · [Lists](/docs/Application/BlockBuilder/Blocks/Lists) · [My Blocks](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Movement](/docs/Application/BlockBuilder/Blocks/Movement) · [Motors](/docs/Application/BlockBuilder/Blocks/Motors) · [Light](/docs/Application/BlockBuilder/Blocks/Light) · [Sensors](/docs/Application/BlockBuilder/Blocks/Sensors) · [Sounds](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator) · [Dashboard controllers](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad)

In the app, long-press (or right-click) a block and choose **About block** to open its description here.

Ready-made programs: [Examples](/docs/Application/BlockBuilder/Examples).
