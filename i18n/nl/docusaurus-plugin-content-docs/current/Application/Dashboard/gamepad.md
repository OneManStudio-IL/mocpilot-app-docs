---
id: Gamepad
title: Gamepad
description: "Bestuur je model met een gamepad in Xbox- of PlayStation-stijl."
---

import Screenshot from '@site/src/components/Screenshot';

# Gamepad {#gamepad}

Een echte gamepad is vaak prettiger dan een touchscreen: echte sticks, triggers en knoppen. MOCPilot werkt met Bluetooth- en USB-gamepads die het systeem van het apparaat ondersteunt (controllers in Xbox- en PlayStation-stijl op iPhone, iPad, Android, Mac en Windows).

De gamepad werkt samen met het dashboard; je kunt beide tegelijk gebruiken.

## Een gamepad verbinden {#connect-a-gamepad}

1. Koppel de gamepad met je telefoon, tablet of computer via de Bluetooth-instellingen van het systeem (of sluit hem aan via USB).
2. Open een profiel en tik in de editor op **Gamepad**.
3. De kop van de pagina toont **Gamepad: (naam)**. “Gamepad is niet verbonden” betekent dat het systeem hem nog niet ziet.

<Screenshot name="gamepad" alt="De pagina Gamepad" width={900} />

## De pagina Gamepad {#gamepad-page}

- **Gamepad-blokken inschakelen**: zet de gamepadinvoer voor dit profiel aan. Zonder deze optie melden rijen van Snelle koppelingen met de invoer Gamepad “Schakel gamepad-blokken in op de Gamepad-pagina (bovenste balk)”, en toont Logicablokken de categorie Gamepad niet.
- **Gamepad-knoppenindeling**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) of **Sony PS** (Kruis, Cirkel, Vierkant, Driehoek, L1, R1, L2, R2). De editors benoemen de knoppen volgens deze keuze.
- **Bereik van gamepadwaarden** (Logicablokken): sticks geven **-1..1** of **-100..100**.
- **Gamepad selecteren**: als er meer dan één gamepad verbonden is.
- **Gamepad testen** → **Test**: een live tester die knoppen, triggers, sticks en het D-pad toont, zodat je alles kunt controleren voordat je het gebruikt.

De instellingen worden in het profiel opgeslagen.

## De gamepad gebruiken bij Snelle koppelingen {#use-the-gamepad-in-quick-links}

Sleep de invoer **Gamepad** naar een rij en kies de **Invoer**:

- sticks: Linker stick Y, Linker stick X, Rechter stick Y, Rechter stick X;
- triggers: RT / LT (R2 / L2);
- actieknoppen: A, B, X, Y (Kruis, Cirkel, Vierkant, Driehoek);
- bumpers: LB / RB (L1 / R1);
- D-pad: Omhoog, Omlaag, Links, Rechts.

Voorbeeld: *Gamepad* (Linker stick Y) → *Geleidelijk* → *Motor* → *Hub* (poort A). Zie [Invoer](/docs/Application/Links/Inputs#gamepad).

## De gamepad gebruiken bij Logicablokken {#use-the-gamepad-in-logic-blocks}

De categorie **Gamepad** heeft gebeurtenisblokken (*wanneer gamepadknop …*, *wanneer D-Pad …*, *wanneer gamepadstick …*) en waardeblokken (knop, D-pad, stick, druk op de trigger). Zie [Gamepad-blokken](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profielen om te publiceren {#profiles-for-publishing}

Een profiel kan ook in de catalogus worden gepubliceerd met alleen een gamepad en zonder bedieningselementen op het dashboard: de vereiste is “een bedieningselement op het dashboard of de gamepad”.
