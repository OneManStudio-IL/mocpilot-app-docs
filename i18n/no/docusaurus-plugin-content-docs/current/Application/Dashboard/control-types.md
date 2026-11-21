---
id: ControlTypes
title: Kontrolltyper
description: "Joystick, retningspad, skyveknapper, dreieknapp, knapper, brytere, steppbrytere, monitorer og spesialkontroller."
---

# Kontrolltyper {#control-types}

Hvert [tema](/docs/Application/Themes/ThemesOverview) tegner det samme settet med kontrolltyper i sin egen stil. Det gratis temaet **Grunnleggende** har ni av dem; hvert betalt tema legger til **Dreieknapp** og tre grafiske monitorer. Ratt, pedaler, girspaker og de andre [spesialkontrollene](/docs/Application/Dashboard/SpecialControls) er egne produkter.

| Kontroll | Navn på dashboardet | Gir programmet | Tilgjengelig i |
|---|---|---|---|
| Joystick | JOY | X- og Y-akse | alle temaer |
| Retningspad | DPAD | knapper for opp / ned / venstre / høyre | alle temaer |
| Skyveknapp | SLDR | en verdi | alle temaer |
| Ver. skyvebryter | VSLDR | en verdi | alle temaer |
| Dreieknapp | DIAL | en verdi | betalte temaer |
| Knapp | BTN | trykt / sluppet | alle temaer |
| Bryter | SWCH | på / av | alle temaer |
| Steppbryter | STPR | et trinnummer | alle temaer |
| Ver. steppbryter | VSTPR | et trinnummer | alle temaer |
| Monitor | MNTR | viser tekst eller en verdi | alle temaer |
| Batterinivå | MNTBT | viser et nivå | betalte temaer |
| Fartsmåler | MNTSP | viser en hastighet | betalte temaer |
| Hellingsmonitor | MNTLT | viser stamp og rull | betalte temaer |
| Ratt, pedaler, girkasser, håndbrekk, blinklys, togkontroll | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | se [Spesialkontroller](/docs/Application/Dashboard/SpecialControls) | spesialprodukter |

Navnet på dashboardet får et nummer: den første joysticken er **JOY1**, den andre **JOY2**.

## Joystick {#joystick}

En stikke som fjærer tilbake til midten. Den gir en **X**-verdi (venstre/høyre) og en **Y**-verdi (opp/ned); midten er null.

- **Aksetype**: **Begge akser (X, Y)**, **Kun horisontal (X)** eller **Kun vertikal (Y)**. En joystick med én akse er enklere å bruke når den bare skal kjøre eller bare styre.
- Typisk bruk: Y til kjøring og X til styring, eller én joystick per belte på en stridsvogn.

## Retningspad {#directional-pad}

Fire knapper: opp, ned, venstre og høyre. Hver av dem er enten trykt eller sluppet. I Hurtigkoblinger gir en akse på retningspaden −1, 0 eller +1 (**Opp / ned** eller **Venstre / høyre**), noe som er praktisk for bevegelser trinn for trinn, som en krankrok.

## Skyveknapp og Ver. skyvebryter {#slider-and-ver-slider}

Et håndtak som beveger seg langs et vannrett eller loddrett spor.

- **Returner til null**: håndtaket fjærer tilbake når du slipper (som en gasspedal) i stedet for å bli stående der du forlater det (som fartsinnstillingen på et tog).
- **Negative verdier**: null er i midten, så skyveknappen gir negative og positive verdier (bakover og forover).
- **Trinnverdi**: skyveknappen beveger seg i trinn.

## Dreieknapp {#rotary-knob}

En rund knapp, som en volumkontroll, i gruppen **Skyveknapper** i alle betalte temaer. Drei den med én finger rundt midten: den dreier rundt 135° hver vei og blir stående der du slipper den.

- **Hakksteg (0 = trinnlaust)** (0–24): med trinn klikker knappen fra ett hakk til det neste.
- **Null i midten (-100..100)**: knappen gir −100 til 100 med null i midten, i stedet for 0 til 100.
- Blokker: *når dreieknapp … dreidd / trykt / sleppt / dreidd til minimum / dreidd til maksimum*, *verdi for dreieknapp …*, *er dreieknapp … trykt / på minimum / på maksimum?* Se [Skjermkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- I Hurtigkoblinger fungerer knappen som en [skyveknapp](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Temaet Grunnleggende har ingen dreieknapp. Siden alle betalte temaer har en, bytter **Endre tema** en dreieknapp til utseendet fra et annet tema.

## Knapp {#button}

Trykt mens du holder den, sluppet når du slipper. Bruk den til en tuter eller en kort bevegelse, eller sammen med blokken **Veksle** i Hurtigkoblinger for å slå noe av og på.

## Bryter {#switch}

Blir stående på eller av: trykk på den for å endre. Bruk den til lys, moduser eller en vinsjlås.

## Steppbryter og Ver. steppbryter {#step-switch-and-ver-step-switch}

En **−** / **+**-kontroll som teller trinn, som gir eller fartsnivåene på et tog.

- **Antall trinn**: 1 til 100 (standard 10).
- **Negative verdier**: tillater trinn under null (nivåer for revers).
- **Aktiver reset**: når du trykker på verdien, går den tilbake til null.

## Monitor {#monitor}

Viser tekst eller et tall fra programmet: hastighet, batteri, navnet på en modus, en sensorverdi.

- **Tekstoppsett** (én eller flere linjer), **Tekstoverflyt** (Klipp, Bryt linje, Rulletekst, Rull), **Maksimalt tal linjer**, alternativer for rulling, **Tekstjustering** og **Tekstskalering**.

## Batterinivå, Fartsmåler, Hellingsmonitor {#battery-level-speedometer-tilt-monitor}

Grafiske indikatorer i de betalte temaene. Programmet setter verdien deres: batteriet på en hub, hastigheten på en motor, hellingen på en hub. **Hellingsmonitor** har **Invertere pitching** og **Invertere rulling**. Se [Indikatorer og monitorer](/docs/Application/Dashboard/Indicators).

## Spesialkontroller {#special-controls}

Et ratt, pedaler, en manuell eller automatisk girkasse, et håndbrekk, en blinklysspak og en togkontroll. Hver av dem er et eget produkt med mange utseender. Se [Spesialkontroller](/docs/Application/Dashboard/SpecialControls).

## Interaktivitet {#interactivity}

Alle interaktive kontroller har **Interaktivitet** (på som standard). En ikke-interaktiv kontroll reagerer ikke på berøring. Programmet kan slå interaktiviteten av og på, for eksempel for å sperre gassen til en oppstartskontroll er ferdig.
