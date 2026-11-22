---
id: SpecialControls
title: Special controls
description: "Steering wheel, pedals, gear shifter, handbrake, turn signals and train controller: how to use them, their settings, looks, values and blocks."
---

import Screenshot from '@site/src/components/Screenshot';

# Special controls

Special controls look and work like the real thing: a steering wheel, pedals, a gear shifter, a handbrake, a turn signal stalk and a locomotive controller. Each one is a separate product: buy the ones you need or get them all with [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="A dashboard with a steering wheel, pedals, a gear shifter, a handbrake, turn signals and a train controller" width={900} />

| Control | Product | Name on the dashboard | Gives the program |
|---|---|---|---|
| [Steering wheel](#steering-wheel) | Steering wheel | STWHEEL | steering angle, horn |
| [Pedals](#pedals) | Pedals | PDLS | accelerator and brake |
| [Manual gearbox](#gear-shifter) | Gear shifter | GEAR | gear: R, N, 1…6 |
| [Automatic gearbox](#gear-shifter) | Gear shifter | GEARA | selector: P, R, N, D |
| [Handbrake](#handbrake) | Handbrake | HBRK | force, locked |
| [Turn signals](#turn-signals) | Turn signals | STALK | left signal, right signal, light |
| [Train controller](#train-controller) | Train controller | TRTHR | power notch, direction, traction |

The **Rotary knob** is not a separate product: it comes with every paid theme. See [Control types](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Add a special control

1. Open the dashboard and tap **+** (**Add Controller**; on a computer, **+ Controller**).
2. In the list of control types, scroll to **Vehicle & special** and select a control.
3. The looks strip shows all its looks. Pick one, then set up the control in **Configure**.
4. Tap **Add to dashboard**. For a control you don't own yet, tap **Purchase** or **All with MocPilot Pro**.

<Screenshot name="special-control-looks" alt="The Add Controller palette with the steering wheel selected and its looks in the looks strip" width={900} />

## Looks

Every special control comes in many **looks**. Most of them match a paid theme (Racing, Aura, Classic, Hologram and so on), so the wheel, the gear shifter and the handbrake can match the rest of your dashboard. You can change the look at any time: select the control and choose another one in **Look** on the **Style** tab. The look changes only the picture: the values, the blocks and the program stay the same.

Some looks also set the accent colour to suit them when you choose them.

## Settings of all special controls

- **Look** (Style tab): see above.
- **Accent color** (Style tab): gear shifter, handbrake, turn signals and train controller.
- **Lock the controller** and **Interactivity** (Settings tab), as on every control. See [Control properties](/docs/Application/Dashboard/ControlProperties).

## Steering wheel {#steering-wheel}

Put a finger on the wheel and turn it around its centre. When you let go, it springs back to the centre. Press the centre of the wheel to sound the horn: that does not turn the wheel.

**Settings**

- **Steering wheel angle** (20–120°, default 60°): how far you turn the wheel to reach full lock. It does not change the values the program gets.
- **Sound effects**: the horn sound and the sounds the program plays from the wheel. The app sound must be on.

**Values**: the steering angle from −100 (full left) through 0 to 100 (full right); the horn is 100 while you hold it, otherwise 0.

**Looks**: Off-road vehicle, Heavy truck, Supercar, Vintage wood, Race yoke, Rally suede, Off-road utility, Concept glow, Big rig, Family sedan, City car, Dune buggy, Classic 4x4, Building machinery, Hi-Fi Audio, Aura, Brick Builder, Circuit Core, Deep Space, Heavy Haul, Neo Orbit, Off-Road Cab, Racing, Rock Crawler, Tactical, Classic, Sunset, Miami, Hi-Tech, Hologram.

**Sounds** for the program: Car horn, Truck horn, Sports car horn.

**Quick Links**: the [Wheel](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) input with the channels **Steering angle** and **Horn**.

## Pedals {#pedals}

The brake pedal is on the left, the accelerator on the right. Press a pedal with a finger: the higher your finger is on the pedal, the harder it is pressed. Near the bottom it is pressed lightly; near the top, fully. Let go and the pedal comes back up. You can press both pedals at once.

**Settings**: **Sound effects**: lets the program play the pedal sounds. The app sound must be on.

**Values**: the accelerator and the brake, each from 0 to 100.

**Looks**: Off-road vehicle, Heavy truck, Supercar, Vintage chrome, Carbon & red, Race drilled, Off-road grip, Concept glow, Big rig, Family sedan, City car, Dune buggy, Classic 4x4, Building machinery, Hi-Fi Audio, Aura, Brick Builder, Circuit Core, Deep Space, Heavy Haul, Neo Orbit, Off-Road Cab, Racing, Rock Crawler, Tactical, Classic, Sunset, Miami, Hi-Tech, Hologram.

**Sounds** for the program: Car brake, Sports car brake, Truck air brake, Reverse beeper.

**Quick Links**: the [Pedals](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) input with the channels **Accelerator pedal** and **Brake pedal**.

:::tip Pedals alone don't make a car
The pedals give only how hard each one is pressed. If a row sends the accelerator straight to a motor, the motor runs exactly as far as the pedal is pressed. To get a model that speeds up gradually, coasts, brakes and reverses, use the [vehicle simulator](#vehicle-simulator).
:::

## Gear shifter {#gear-shifter}

The **Gear shifter** product has two controls: a **Manual gearbox** and an **Automatic gearbox**.

### Manual gearbox

An H-pattern gate with reverse and up to six forward gears. Drag the knob along the middle row and up or down into a gear. When you let go, the knob snaps into the nearest gear or back to neutral.

- **Number of gears** (2–6, default 6, Settings tab): the gate changes with it. Reverse is always in the leftmost column, neutral in the middle.
- **Values**: −1 = reverse (R), 0 = neutral (N), 1…6 = forward gears.

### Automatic gearbox

A selector with four positions: **P** (park), **R** (reverse), **N** (neutral) and **D** (drive). How you operate it depends on the look:

| Selector | How to use it | Looks |
|---|---|---|
| Lever | slide the handle along the slot; it stops at the nearest position | Hi-Tech |
| Rotary dial | turn the dial with a finger; it clicks into P, R, N or D | Classic, Deep Space, Tactical, Building machinery, Hi-Fi Audio, Aura, Circuit Core, Rock Crawler, Off-Road Cab, Neo Orbit, Off-roader, Workhorse, Concept, Sedan, City Car, Classic 4x4 |
| Buttons | tap P, R, N or D | Racing, Heavy Haul, Brick Builder, Heavy truck, Retro, Rally, Supercar, Formula, Long Haul, Buggy, Sunset, Miami, Hologram |

- **Number of gears** (2–8, default 6, Settings tab): how many gears the [vehicle simulator](#vehicle-simulator) shifts through in D. When the simulator picks a gear, the selector shows it, for example **D3**.
- **Values**: −2 = P, −1 = R, 0 = N, 1 = D. All three selectors give the same values, so the program works with any look.

Both gearboxes have the same looks: Classic, Racing, Deep Space, Tactical, Heavy Haul, Building machinery, Hi-Fi Audio, Aura, Circuit Core, Rock Crawler, Off-Road Cab, Brick Builder, Neo Orbit, Heavy truck, Retro, Rally, Off-roader, Supercar, Formula, Workhorse, Concept, Long Haul, Sedan, City Car, Buggy, Sunset, Classic 4x4, Miami, Hi-Tech, Hologram.

**Quick Links**: the [Gear shifter](/docs/Application/Links/Blocks/InputBlocks#controller-gear) input with the channels **Gear** (manual: the gear relative to the number of gears, reverse negative; automatic: the direction) and **Direction (R − / forward +)**: −1 in reverse, 0 in neutral and park, +1 in any forward gear.

## Handbrake {#handbrake}

A handbrake lever. Take the lever by its grip and pull it down. The brake force follows how far you pull. Let go and the lever springs back.

To **lock** it, pull the lever all the way, then slide your finger along the lever towards its base: the grip slides down and the lever stays locked. To **release** a locked lever, tap the control or drag the lever back.

**Values**: the force from 0 to 100, and whether the lever is locked.

**Looks**: Classic, Rally, Heavy truck, Retro, Deep Space, Tactical, Aura, Heavy Haul, Building machinery, Hi-Fi Audio, Neo Orbit, Off-Road Cab, Racing, Brick Builder, Circuit Core, Rock Crawler, Off-roader, Supercar, Formula, Workhorse, Concept, Long Haul, Sedan, City Car, Buggy, Sunset, Classic 4x4, Miami, Hi-Tech, Hologram.

**Quick Links**: the [Handbrake](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) input with the channels **Handbrake locked** (on/off, like a switch) and **Handbrake force**.

## Turn signals {#turn-signals}

A turn signal stalk with a light switch.

- Drag the stalk **up** for the left signal and **down** for the right signal. It stays where you leave it; drag it back to the middle to switch the signal off.
- **Tap** the stalk or the headlight button to switch the light on or off. This doesn't move the stalk.

**Settings**

- **Icon: left**, **Icon: light**, **Icon: right** (Style tab): the icons of the indicator lamps.
- **Turn signal outputs blink** (Settings tab, on by default): the signal outputs blink together with the lamp on the stalk, so a light connected to them flashes by itself. When it is off, the outputs stay on steadily while the signal is on. The blocks always see the steady state.

**Values**: left signal, right signal and light, each on or off.

**Looks**: Classic, Racing, Deep Space, Tactical, Heavy Haul, Building machinery, Hi-Fi Audio, Aura, Circuit Core, Rock Crawler, Off-Road Cab, Brick Builder, Neo Orbit, Heavy truck, Retro, Rally, Off-roader, Supercar, Formula, Workhorse, Concept, Long Haul, Sedan, City Car, Buggy, Sunset, Classic 4x4, Miami, Hi-Tech, Hologram.

**Quick Links**: the [Turn signals](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) input with the channels **Turn signals (left − / right +)** (two lights of opposite polarity on one port), **Left turn signal**, **Right turn signal** and **Light**.

## Train controller {#train-controller}

A locomotive master controller with a throttle lever and a reverser.

- **Throttle**: drag the lever up or down. It has 8 power notches (0–8) and stays on the notch where you leave it.
- **Reverser**: drag its knob up for **forward** or down for **reverse**; the middle is **neutral**. The knob jumps from position to position and never stops in between. As in a real cab, it only moves when the throttle is at 0.

**Values**: the power notch (0–8), the reverser (1 = forward, 0 = neutral, −1 = reverse) and the **traction**: notch ÷ 8 × 100 with the sign of the direction, from −100 to 100. The traction can drive a train motor directly.

**Looks**: Original, Building machinery, Hi-Fi Audio, Aura, Brick Builder, Buggy, Circuit Core, City Car, Classic, Concept, Deep Space, Off-roader, Heavy Haul, Classic 4x4, Heavy Truck, Miami, Neo Orbit, Supercar, Workhorse, Off-Road Cab, Racing, Rally, Rock Crawler, Sedan, Sunset, Tactical, Long Haul, Retro, Formula, Hi-Tech, Hologram.

**Quick Links**: the [Slider](/docs/Application/Links/Blocks/InputBlocks#controller-train) input; it gives the traction.

## Blocks

Each special control adds its own blocks to the **Dashboard controllers** category in Logic Blocks:

| Control | Events | Values |
|---|---|---|
| Steering wheel | *when steering wheel … is moved / pressed / released* | *steering wheel …*, *is steering wheel … pressed / released?* |
| Pedals | *when pedals … any / brake / acceleration is moved / pressed / released* | *pedals … acceleration / brake*, *is pedal … pressed / released?* |
| Gearboxes | *when gearbox … shifts gear / shifts up / shifts down / shifts into neutral / reverse / park* | *gear …*, *is gearbox … in neutral / in reverse / in a forward gear / in park?*, *gears of …* |
| Handbrake | *when handbrake … is pulled / locked / unlocked / released* | *handbrake force …*, *is handbrake … locked / unlocked / pulled?* |
| Turn signals | *when turn signals … left signal / right signal / light turns on / off* | *turn signals … left signal / right signal / light is on?* |
| Train controller | *when train controller … notch changed / raised / lowered, throttle closed, reverser moved, lever released* | *train controller … traction / power notch / reverser*, *is train controller … in forward / in reverse / in neutral / at notch 0?* |

The steering wheel and the pedals also have the *sound … of …* block: it picks one of their sounds for the **Sounds** blocks. Details: [Dashboard controllers](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Vehicle simulator {#vehicle-simulator}

Special controls give only raw input. The **vehicle simulator** turns the pedals, the gear shifter and the handbrake into a model that drives like a car: it speeds up with inertia, coasts, brakes, reverses, shifts gears in D and holds on the handbrake.

- **Quick Links**: use the [Vehicle](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) input. Choose the **Pedals**, the **Gear shifter** and the **Handbrake** from your dashboard, the **Vehicle type** (Car, Off-road vehicle, Sports car, Truck) and the **Output**: **Speed**, **Engine speed (rpm)**, **Braking** or **On the handbrake**.
- **Logic Blocks**: when the dashboard has pedals, a gear shifter or a handbrake, the **Simulator** category appears. Create a vehicle there (**Create vehicle**) and put the *drive* block under an event. Plug values into its sockets: *gas*, *brake*, *gear*, *of* (number of gears; the *gears of …* block fits here), *handbrake* and *locked*. Other Simulator blocks set the vehicle type, the engine inertia and the reverse speed, read the speed, the engine speed and the gear, and react when the vehicle starts, stops, brakes or shifts.

How the simulator drives:

- **Accelerator** speeds the model up with inertia; release it and the model coasts. **Brake** slows it down.
- **Without a gearbox**, holding the brake when the model has stopped makes it reverse.
- **Manual gearbox**: R reverses, N doesn't drive. Optionally, each gear limits the top speed.
- **Automatic gearbox**: R reverses, N doesn't drive, P holds the model like a locked handbrake. In D the simulator shifts up and down by itself and shows the gear on the selector.
- **Handbrake**: its force adds to the braking; a locked handbrake can hold the model.
- **Vehicle type**: a truck is heavier (more inertia) and has an air brake; a sports car reacts quickly and reverses faster.

The last pedals, gear shifter or handbrake can't be deleted while the program uses Simulator blocks.
