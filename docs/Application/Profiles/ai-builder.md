---
id: AiBuilder
title: AI builder
description: "Describe your model in words or by voice, and the AI builder sets up the hubs, the dashboard and the program of a Logic Blocks or Quick Links profile."
---

import Screenshot from '@site/src/components/Screenshot';

# AI builder

Describe your model in your own words, typed or spoken, and the **AI builder** sets up the profile for you: the hubs and ports, the dashboard controls and the program. It works in both editors: in a [Logic Blocks](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) profile it builds blocks, in a [Quick Links](/docs/Application/Links/LinksIntroducing) profile it builds rows. Then you keep talking to it to change the profile, or you edit it yourself.

The AI builder is part of [MocPilot Pro](/docs/Application/Account/Pro) and works in the app and in the [web editor](/docs/Introducing/WebEditor). It needs an internet connection.

<Screenshot name="blocks-ai-builder" alt="AI builder panel next to the program" width={900} />

## Open the AI builder

1. Open a profile for editing.
2. Press the **AI builder** button (the sparkles icon) in the top bar. On a computer you can also press ⇧⌘I / Ctrl+Shift+I.
3. Type your request in **What should the AI build or change?** and press **Send** (or Enter; Shift+Enter starts a new line).

Without MocPilot Pro, the button shows what the AI builder does, with **Get MocPilot Pro** and **Not now**.

Where the panel opens:

- **Phone**: a full-screen page over the editor.
- **Tablet**: a floating card; drag it by its header to the left or right side.
- **Computer**: a card on the right. In the app (not in the browser) you can press **Open in a separate window** in its header and place the window next to the editor.

While the AI works, the panel shows what it's doing (**Thinking about your model…**, **Checking the profile…** and so on). The changes appear in the editor as soon as it's done, together with a short summary of what changed. When the panel is empty, it suggests a few example requests: tap one to put it in the text field, then send it as is or change it first.

The conversation is kept for each profile, so you can close the panel and come back to it later.

## Write a good request {#ai-builder-tips}

:::tip Say which hub you use, what is connected to each port and what it should do
A one-line request like "a car with lights" isn't enough: the AI has to guess the hub, the ports and what each motor does, and the result will probably need fixing. Include:

- **The hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **What is on each port**: a drive motor, a steering motor (servo), lights, a sensor.
- **What each one should do**: drive, steer with calibration, switch on and off, a speed limit.
- **How you want to control it**: joysticks, sliders, buttons, a gamepad.
:::

Say it the way you would explain it to a friend. You can write in your own language.

If something still isn't right, tell the AI what to change instead of starting over.

## Example requests

**A car**: "A car with a Technic Hub: the drive motor is on port A, the steering motor on port C works as a servo, the lights are on port D. Steering joystick on the left, throttle on the right, a button that switches the lights."

**A crane**: "A crane with a Technic Hub: the rotation motor is on port A, the boom motor on port B, the hook winch on port C. A slider for rotation, up/down buttons for the boom, a joystick for the hook, the boom speed limited to 50%."

**A train**: "A City train with a City Hub: the train motor is on port A, the lights on port B. A step switch for the speed, a speedometer and a button for the lights."

## Change an existing profile

Open the AI builder in a profile you already have, even one you built by hand, and say what to change. The AI sees the current hubs, dashboard and program and edits them:

- "Make the steering slower."
- "Add a stop button."
- "Copy the controls to my gamepad."
- "Limit the boom speed to 50%."

You can also ask about the profile, for example "Which port are the lights on?". The AI answers in the panel and leaves the profile as it is.

## What happens to your profile

- The AI changes the open profile directly: hubs, dashboard and program are updated at once. If the program is running, it stops.
- The AI works with the program type of the profile: in a Logic Blocks profile it writes blocks, in a Quick Links profile it writes rows. It never turns one into the other. If a request needs something Quick Links rows can't do, the AI tells you that it needs a Logic Blocks profile.
- Parts of the profile that the AI doesn't need to change stay as they are.
- **Undo the last AI change** (the undo button in the panel's header) puts the profile back as it was before the last AI change. Press it again to go further back, up to 10 changes. The undo history is cleared when you open another profile.
- You can keep editing the profile yourself at any time.

## Voice input

Press **Dictate** (the microphone button) and say your request; the text appears in the field, and you can correct it before sending. Press the button again to stop. If several languages are available, the small language button next to the microphone switches the dictation language; the app remembers your choice.

| Where | How |
|---|---|
| iPhone, iPad, Mac | **Dictate**; the first time, allow microphone access and speech recognition |
| Android | **Dictate**; the first time, allow microphone access |
| Windows | press **Win+H** to dictate with Windows voice typing (the microphone button reminds you) |
| Web editor | **Dictate** in Chrome, Edge and Safari; allow microphone access for the site. Firefox has no dictation |

Voice input messages:

| Message | What to do |
|---|---|
| **Allow microphone access for MOCPilot in the system settings** | Turn on microphone access for MOCPilot in the system settings |
| **Allow speech recognition for MOCPilot in the system settings** | On an Apple device, turn on speech recognition for MOCPilot in the system settings |
| **Allow microphone access for this site in the browser** | Allow the microphone in the browser's site settings |
| **Nothing was heard** | Press **Dictate** and speak again |
| **Voice input needs a connection** | Connect to the internet, or type the request |
| **Speech recognition is not available for this language right now** | Switch the dictation language or type the request |
| **No microphone found** / **Voice input is not available on this device** | Type the request |

## Limits

- About 30 requests a day and a monthly limit. The panel's header shows how much you've used: **Today 5/30 · Month 12%**.
- During the free trial, the number of AI requests is limited; they continue when the subscription starts.
- One request at a time: wait for the answer before you send the next one.
- The AI builder only builds and edits profiles. It doesn't answer questions on other topics.

## Error messages

| Message | What to do |
|---|---|
| **AI builder is not available** / **Could not reach the AI service. Check your internet connection and try again.** | Check your internet connection and open the panel again |
| **No connection to the AI service. Check your internet connection and try again.** | Check the connection and send the request again |
| **The connection to the AI service was lost…** | When you're online again, the answer appears in the panel, or send the request again |
| **The AI did not answer in time. Please send the request again.** / **The request was lost, please send it again** | Send the request again |
| **The AI could not build a working profile for this request. Try to say it in other words.** | Rephrase the request: name the hub, the ports and what each one does |
| **The profile is too big to build in one go. Ask for fewer things at once.** | Split the request into smaller steps |
| **The AI declined this request.** | Rephrase the request so it's about the profile |
| **You reached today's limit of AI requests. Try again tomorrow.** | Wait until tomorrow, or edit the profile yourself |
| **You reached this month's AI limit.** | The limit resets next month |
| **You used all AI requests of the free trial. They continue when the subscription starts.** | Wait for the subscription to start |
| **The AI builder only builds and edits profiles. Too many requests on other topics: try again in an hour.** | Wait an hour and ask only about the profile |
| **Too many AI requests right now. Try again in a minute.** | Try again in a minute |
| **The previous request is still running.** | Wait for the answer |
| **The AI service is temporarily unavailable. Try again later.** / **You have MocPilot Pro. The AI builder is not available right now, please try again later.** | Try again later |
| **The answer was for another profile** | You opened another profile while the AI was working, so the change wasn't applied. Open the first profile again and repeat the request |
| **Open a profile for editing first** | Open the profile in the editor, then send the request |
| **The profile could not be updated in the editor** / **The change could not be undone** | Try again; if it keeps happening, close and reopen the profile |
