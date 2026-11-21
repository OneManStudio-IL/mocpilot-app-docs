---
id: Gamepad
title: Gamepad
description: "Kør din model med en gamepad i Xbox- eller PlayStation-stil."
---

import Screenshot from '@site/src/components/Screenshot';

# Gamepad {#gamepad}

En fysisk gamepad er ofte rarere end en touchskærm: rigtige sticks, triggere og knapper. MOCPilot virker med Bluetooth- og USB-gamepads, som enhedens system understøtter (controllere i Xbox- og PlayStation-stil på iPhone, iPad, Android, Mac og Windows).

Gamepad'en virker sammen med dashboardet; du kan bruge begge på samme tid.

## Forbind en gamepad {#connect-a-gamepad}

1. Par gamepad'en med din telefon, tablet eller computer i systemets Bluetooth-indstillinger (eller tilslut den med USB).
2. Åbn en profil, og tryk på **Spilcontroller** i editoren.
3. Sidens overskrift viser **Gamepad: (navn)**. "Gamepad er ikke forbundet" betyder, at systemet ikke kan se den endnu.

<Screenshot name="gamepad" alt="Siden Spilcontroller" width={900} />

## Siden Spilcontroller {#gamepad-page}

- **Aktivér gamepad-blokke**: slår gamepad-input til for denne profil. Uden det melder rækker i Hurtige forbindelser med inputtet Spilcontroller "Slå spilcontrollerblokke til på siden Spilcontroller (øverste bjælke)", og Logikblokke viser ikke kategorien Spilcontroller.
- **Gamepad-knaplayout**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) eller **Sony PS** (Kryds, Cirkel, Firkant, Trekant, L1, R1, L2, R2). Editorerne navngiver knapperne efter dette valg.
- **Gamepad-værdiområde** (Logikblokke): sticks giver **-1..1** eller **-100..100**.
- **Vælg gamepad**: når mere end én gamepad er forbundet.
- **Test gamepad** → **Test**: en live-tester, der viser knapper, triggere, sticks og retningspad, så du kan tjekke det hele, før du bruger den.

Indstillingerne gemmes i profilen.

## Brug gamepad'en i Hurtige forbindelser {#use-the-gamepad-in-quick-links}

Træk inputtet **Spilcontroller** ind i en række, og vælg dets **Input**:

- sticks: Venstre stick Y, Venstre stick X, Højre stick Y, Højre stick X;
- triggere: RT / LT (R2 / L2);
- frontknapper: A, B, X, Y (Kryds, Cirkel, Firkant, Trekant);
- skulderknapper: LB / RB (L1 / R1);
- retningspad: Op, Ned, Venstre, Højre.

Eksempel: *Spilcontroller* (Venstre stick Y) → *Blød* → *Motor* → *Hub* (port A). Se [Input](/docs/Application/Links/Inputs#gamepad).

## Brug gamepad'en i Logikblokke {#use-the-gamepad-in-logic-blocks}

Kategorien **Spilcontroller** har hændelsesblokke (*når gamepad-knap er …*, *når gamepad-retningspad er …*, *når gamepad-thumbstick er …*) og værdiblokke (knap, retningspad, thumbstick, triggertryk). Se [Gamepad-blokke](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profiler til udgivelse {#profiles-for-publishing}

En profil kan udgives i kataloget med kun en gamepad og ingen dashboardkontroller: kravet er "en dashboardcontroller eller gamepad'en".
