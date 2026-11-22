---
id: Gamepad
title: Handkontroll
description: "Kör din modell med en handkontroll i Xbox- eller PlayStation-stil."
---

import Screenshot from '@site/src/components/Screenshot';

# Handkontroll

En fysisk handkontroll är ofta trevligare än en pekskärm: riktiga spakar, avtryckare och knappar. MOCPilot fungerar med Bluetooth- och USB-handkontroller som enhetens system stöder (handkontroller i Xbox- och PlayStation-stil på iPhone, iPad, Android, Mac och Windows).

Handkontrollen fungerar tillsammans med instrumentpanelen; du kan använda båda samtidigt.

## Ansluta en handkontroll {#connect-a-gamepad}

1. Parkoppla handkontrollen med din telefon, surfplatta eller dator i systemets Bluetooth-inställningar (eller anslut den med USB).
2. Öppna en profil och gå till **Handkontroll**: i redigerarens övre fält på en dator, under **Mer** på en telefon eller surfplatta (där står det **Handkontroll (ansluten)** när systemet ser en handkontroll).
3. Sidhuvudet visar **Handkontroll: (namn)**. ”Gamepad is not connected” betyder att systemet ännu inte ser den.

<Screenshot name="gamepad" alt="Sidan Handkontroll" width={900} />

## Sidan Handkontroll {#gamepad-page}

- **Aktivera gamepad-block**: slår på handkontrollens ingångar för den här profilen. Utan det rapporterar rader i Snabbkopplingar med ingången Handkontroll ”Aktivera handkontrollsblock på sidan Handkontroll (övre fältet)”, och Logikblock visar inte kategorin Handkontroll.
- **Gamepad-knappuppsättning**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) eller **Sony PS** (Kryss, Cirkel, Fyrkant, Triangel, L1, R1, L2, R2). Redigerarna märker knapparna enligt detta val.
- **Gamepadens värdeintervall** (Logikblock): spakarna ger **-1..1** eller **-100..100**.
- **Välj gamepad**: när fler än en handkontroll är ansluten.
- **Testa gamepad** → **Test**: en direkttestare som visar knappar, avtryckare, spakar och D-pad, så att du kan kontrollera allt innan du använder den.

Inställningarna sparas i profilen.

## Använda handkontrollen i Snabbkopplingar {#use-the-gamepad-in-quick-links}

Dra ingången **Handkontroll** till en rad och välj dess **Ingång**:

- spakar: Vänster spak Y, Vänster spak X, Höger spak Y, Höger spak X;
- avtryckare: RT / LT (R2 / L2);
- frontknappar: A, B, X, Y (Kryss, Cirkel, Fyrkant, Triangel);
- axelknappar: LB / RB (L1 / R1);
- D-pad: Upp, Ner, Vänster, Höger.

Exempel: *Handkontroll* (Vänster spak Y) → *Mjuk* → *Motor* → *Hubb* (port A). Se [Ingångar](/docs/Application/Links/Inputs#gamepad).

## Använda handkontrollen i Logikblock {#use-the-gamepad-in-logic-blocks}

Kategorin **Handkontroll** har händelseblock (*när handkontrollens knapp är …*, *när handkontrollens D-pad är …*, *när handkontrollens spak är …*) och värdeblock (knapp, D-pad, spak, tryck på avtryckare). Se [Block för handkontroll](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profiler för publicering {#profiles-for-publishing}

En profil kan publiceras i katalogen med bara en handkontroll och inga kontroller på instrumentpanelen: kravet är ”en kontroll på instrumentpanelen eller handkontrollen”.
