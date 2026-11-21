---
id: Gamepad
title: Spillkontroller
description: "Kjør modellen din med en spillkontroller av Xbox- eller PlayStation-typen."
---

import Screenshot from '@site/src/components/Screenshot';

# Spillkontroller {#gamepad}

En fysisk spillkontroller er ofte bedre enn en berøringsskjerm: ekte stikker, avtrekkere og knapper. MOCPilot fungerer med Bluetooth- og USB-spillkontrollere som systemet på enheten støtter (kontrollere av Xbox- og PlayStation-typen på iPhone, iPad, Android, Mac og Windows).

Spillkontrolleren fungerer sammen med dashboardet; du kan bruke begge samtidig.

## Koble til en spillkontroller {#connect-a-gamepad}

1. Par spillkontrolleren med telefonen, nettbrettet eller datamaskinen i systemets Bluetooth-innstillinger (eller koble den til med USB).
2. Åpne en profil og trykk **Spillkontroller** i editoren.
3. Toppen av siden viser **Spillkontroller: (navn)**. «Spillkontroller er ikke tilkoblet» betyr at systemet ikke ser den ennå.

<Screenshot name="gamepad" alt="Siden Spillkontroller" width={900} />

## Siden Spillkontroller {#gamepad-page}

- **Aktiver gamepad-blokker**: slår på gamepad-inngangene for denne profilen. Uten dette melder Hurtigkoblinger-rader med inngangen Spillkontroller «Slå på spillkontrollerblokker på Spillkontroller-siden (topplinjen)», og Logikkblokker viser ikke kategorien Spillkontroller.
- **Gamepad-knappeoppsett**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) eller **Sony PS** (Kryss, Sirkel, Firkant, Trekant, L1, R1, L2, R2). Editorene merker knappene etter dette valget.
- **Verdiområde for gamepad** (Logikkblokker): stikkene gir **-1..1** eller **-100..100**.
- **Velg gamepad**: når mer enn én spillkontroller er tilkoblet.
- **Test gamepad** → **Test**: en tester i sanntid som viser knapper, avtrekkere, stikker og retningsknappene, slik at du kan sjekke alt før du bruker den.

Innstillingene lagres i profilen.

## Bruk spillkontrolleren i Hurtigkoblinger {#use-the-gamepad-in-quick-links}

Dra inngangen **Spillkontroller** inn i en rad og velg **Inngang**:

- stikker: Venstre stikke Y, Venstre stikke X, Høyre stikke Y, Høyre stikke X;
- avtrekkere: RT / LT (R2 / L2);
- frontknapper: A, B, X, Y (Kryss, Sirkel, Firkant, Trekant);
- skulderknapper: LB / RB (L1 / R1);
- retningsknapper: Opp, Ned, Venstre, Høyre.

Eksempel: *Spillkontroller* (Venstre stikke Y) → *Myk* → *Motor* → *Hub* (port A). Se [Innganger](/docs/Application/Links/Inputs#gamepad).

## Bruk spillkontrolleren i Logikkblokker {#use-the-gamepad-in-logic-blocks}

Kategorien **Spillkontroller** har hendelsesblokker (*når gamepad-knapp er …*, *når gamepad-retningsknapp er …*, *når gamepad-stikke er …*) og verdiblokker (knapp, retningsknapper, stikke, trykk på avtrekker). Se [Gamepad-blokker](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profiler for publisering {#profiles-for-publishing}

En profil kan publiseres i katalogen med bare en spillkontroller og ingen dashboardkontroller: kravet er «en dashboardkontroll eller spillkontrolleren».
