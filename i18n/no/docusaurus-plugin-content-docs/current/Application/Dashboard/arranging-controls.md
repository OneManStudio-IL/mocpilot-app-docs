---
id: ArrangingControls
title: Legg til og ordne kontroller
description: "Legg til kontroller fra paletten, flytt og endre størrelse på dem, dupliser, lås og slett dem."
---

import Screenshot from '@site/src/components/Screenshot';

# Legg til og ordne kontroller {#add-and-arrange-controls}

## Legg til en kontroll {#add-a-control}

1. Trykk **+** (**Legg til kontroller**) på dashboardet. På en datamaskin åpnes paletten i eget vindu.
2. Velg en kontrolltype i listen. Typene er gruppert: **Joysticks**, **Skyveknapper**, **Knappar og brytarar**, **Skjermar**, deretter **Kjøretøy og spesial** for [spesialkontrollene](/docs/Application/Dashboard/SpecialControls) og **Mine design** for designene du har lagret. For å finne en kontroll raskt skriver du i **Søk i kontroller**.
3. Utseendestripen viser den valgte typen i alle [temaer](/docs/Application/Themes/ThemesOverview) (for en spesialkontroll alle utseendene). Trykk på et utseende for å se det i den store forhåndsvisningen; du kan prøve det med en gang.
4. Sett opp kontrollen under **Konfigurer**: fanene **Stil** og **Innstillinger** og størrelsen.
5. Trykk **Legg til på dashboard**. På en datamaskin kan du legge til flere kontroller etter hverandre.

<Screenshot name="controller-palette" alt="Paletten Legg til kontroller" width={900} />

Kontrollen havner i det første ledige området og får et **NY**-merke. Hvis det ikke er plass, sier MOCPilot fra: lag litt plass eller velg en mindre størrelse.

Kontroller fra temaer du ikke eier, viser **Kjøp** og **Alt med MocPilot Pro** i stedet for **Legg til på dashboard**. Se [Skaff, kjøp og oppdater temaer](/docs/Application/Themes/GettingThemes).

## Flytt {#move}

I redigeringsmodus trykker og drar du en kontroll. Når du slipper den, legger den seg i nærmeste rute i rutenettet. Hvis den ville overlappe en annen kontroll, hopper den tilbake.

## Størrelser {#sizes}

Alle kontroller har tre størrelser: **S**, **M** og **L**. Du endrer den med **Størrelse** i kontrollens egenskaper. Størrelser i ruter (bredde × høyde):

| Kontroll | S | M | L |
|---|---|---|---|
| Joystick, Retningspad | 7×7 | 10×10 | 13×13 |
| Skyveknapp | 10×3 | 14×4 | 18×5 |
| Ver. skyvebryter | 3×10 | 4×14 | 5×18 |
| Dreieknapp | 6×6 | 8×8 | 10×10 |
| Knapp, Bryter | 3×3 | 4×4 | 5×5 |
| Steppbryter | 8×3 | 12×4 | 16×5 |
| Ver. steppbryter | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Batterinivå, Fartsmåler | 6×6 | 8×8 | 10×10 |
| Hellingsmonitor | 8×4 | 12×6 | 16×8 |
| Ratt | 8×8 | 12×12 | 16×16 |
| Pedaler | 11×8 | 16×12 | 21×16 |
| Manuell girkasse, Automatisk girkasse | 8×8 | 10×10 | 12×12 |
| Handbrekk | 4×7 | 6×10 | 8×13 |
| Blinklys | 8×5 | 10×6 | 14×8 |
| Togkontroll | 6×8 | 8×10 | 10×13 |

Hele feltet er 40 × 20 ruter. Hvis en større størrelse ikke får plass, flytter du naboene først.

## Velg og rediger {#select-and-edit}

Trykk (klikk) på en kontroll for å velge den og åpne **egenskapene**. Se [Kontrollegenskaper](/docs/Application/Dashboard/ControlProperties).

## Hurtigmeny {#context-menu}

Hold fingeren på (berøringsskjerm) eller høyreklikk (datamaskin) en kontroll:

- **Lås** / **Lås opp**
- **Egenskaper**
- **Endre tema**: bytt kontrollen til et annet tema du eier som har samme kontrolltype
- **Dupliser**: en kopi med de samme egenskapene
- **Dupliser (bare type)**: en ny kontroll av samme type med standardegenskaper
- **Slett**

Hold fingeren på eller høyreklikk en tom del av feltet:

- **Lås alt** / **Lås opp alt**
- **Slett N kontrollere**: sletter alle ulåste kontroller

På en datamaskin med egenskapspanelet åpent: **Esc** lukker det, **Delete** / **Backspace** sletter kontrollen, **⌘D / Ctrl+D** dupliserer den.

## Lås kontroller {#lock-controls}

En **låst** kontroll kan ikke flyttes eller slettes, så du slår den ikke ut av stilling mens du kjører eller redigerer. Den viser et låsikon. Lås én kontroll fra menyen dens eller med **Lås kontrolleren** i innstillingene, eller lås alt med **Lås alt**.

## Kontrollnavn {#control-names}

Hver kontroll har et kort navn som vises på rammen i redigeringsmodus, for eksempel **JOY1**, **SLDR2** eller **BTN1**. Programmet refererer til kontrollene med disse navnene: i Hurtigkoblinger står det *JOY1* på inngangsblokken, og i Logikkblokker velger du *JOY1* i blokkens meny.

## Slett {#delete}

Bruk **Slett** i menyen eller søppelbøtteknappen i egenskapene. Låste kontroller kan ikke slettes. En kontroll som programmet bruker, kan ikke slettes før du fjerner radene eller blokkene som bruker den.
