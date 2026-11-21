---
id: ControlTypes
title: Kontroltyper
description: "Joystick, retningspad, skydere, drejeknap, knapper, kontakter, trinkontakter, skærme og specialkontroller."
---

# Kontroltyper {#control-types}

Alle [temaer](/docs/Application/Themes/ThemesOverview) tegner det samme sæt kontroltyper i deres egen stil. Det gratis tema **Grundlæggende** har ni af dem; alle betalte temaer tilføjer **Drejeknap** og tre grafiske skærme. Rat, pedaler, gearstænger og de andre [specialkontroller](/docs/Application/Dashboard/SpecialControls) er separate produkter.

| Kontrol | Navn på dashboardet | Giver programmet | Tilgængelig i |
|---|---|---|---|
| Joystick | JOY | X- og Y-akser | alle temaer |
| Retningspad | DPAD | knapperne op / ned / venstre / højre | alle temaer |
| Skyder | SLDR | en værdi | alle temaer |
| Ver. skyder | VSLDR | en værdi | alle temaer |
| Drejeknap | DIAL | en værdi | betalte temaer |
| Knap | BTN | trykket / sluppet | alle temaer |
| Kontakt | SWCH | til / fra | alle temaer |
| Trinkontakt | STPR | et trinnummer | alle temaer |
| Ver. trinkontakt | VSTPR | et trinnummer | alle temaer |
| Skærm | MNTR | viser tekst eller en værdi | alle temaer |
| Batteriniveau | MNTBT | viser et niveau | betalte temaer |
| Fartmåler | MNTSP | viser en hastighed | betalte temaer |
| Tilt skærm | MNTLT | viser pitch og rulning | betalte temaer |
| Rat, pedaler, gearkasser, håndbremse, blinklys, togkontrol | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | se [Specialkontroller](/docs/Application/Dashboard/SpecialControls) | specialprodukter |

Navnet på dashboardet får et nummer: det første joystick er **JOY1**, det andet **JOY2**.

## Joystick {#joystick}

Et styregreb, der fjedrer tilbage til midten. Det giver en **X**-værdi (venstre/højre) og en **Y**-værdi (op/ned); midten er nul.

- **Akseltype**: **Begge akser (X, Y)**, **Kun vandret (X)** eller **Kun lodret (Y)**. Et joystick med én akse er nemmere at bruge, når det kun kører eller kun styrer.
- Typisk brug: Y til kørsel og X til styring, eller ét joystick pr. bælte på en kampvogn.

## Retningspad {#directional-pad}

Fire knapper: op, ned, venstre og højre. Hver af dem er enten trykket eller sluppet. I Hurtige forbindelser giver en D-pad-akse −1, 0 eller +1 (**Op / ned** eller **Venstre / højre**), hvilket er praktisk til trinvise bevægelser som en kranskrog.

## Skyder og Ver. skyder {#slider-and-ver-slider}

Et håndtag, der bevæger sig langs en vandret eller lodret skinne.

- **Returnere til nul**: håndtaget fjedrer tilbage, når du slipper (som en speeder), i stedet for at blive, hvor du efterlader det (som hastighedsindstillingen på et tog).
- **Negative værdier**: nul er i midten, så skyderen giver negative og positive værdier (bak og frem).
- **Trinværdi**: skyderen bevæger sig i trin.

## Drejeknap {#rotary-knob}

En rund knap som en lydstyrkeknap, i gruppen **Skyder** i alle betalte temaer. Drej den med én finger rundt om midten: den drejer ca. 135° til hver side og bliver, hvor du efterlader den.

- **Hakstrin (0 = trinløst)** (0–24): med trin klikker knappen fra ét hak til det næste.
- **Nul i midten (-100..100)**: knappen giver −100 til 100 med nul i midten i stedet for 0 til 100.
- Blokke: *når drejeknap … drejet / trykket / sluppet / drejet til minimum / drejet til maksimum*, *drejeknappens værdi …*, *er drejeknap … trykket / på minimum / på maksimum?* Se [Skærmkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- I Hurtige forbindelser fungerer knappen som en [skyder](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Temaet Grundlæggende har ingen drejeknap. Da alle betalte temaer har en, skifter **Skift tema** en drejeknap til et andet temas udseende.

## Knap {#button}

Trykket, mens du holder den, sluppet, når du giver slip. Brug den til et horn eller en kort bevægelse, eller sammen med blokken **Skift** i Hurtige forbindelser til at tænde og slukke noget.

## Kontakt {#switch}

Forbliver til eller fra: tryk på den for at skifte. Brug den til lys, tilstande eller en spillås.

## Trinkontakt og Ver. trinkontakt {#step-switch-and-ver-step-switch}

En **−** / **+**-kontrol, der tæller trin, som gear eller hastighedstrinene på et tog.

- **Antal trin**: 1 til 100 (standard 10).
- **Negative værdier**: tillader trin under nul (baktrin).
- **Aktiver reset**: et tryk på værdien sætter den tilbage til nul.

## Skærm {#monitor}

Viser tekst eller et tal fra programmet: hastighed, batteri, navnet på en tilstand, en sensorværdi.

- **Tekstlayout** (én eller flere linjer), **Tekstoverløb** (Klip, Ombryd, Rulletekst, Rul), **Maksimalt antal linjer**, rulleindstillinger, **Tekstjustering** og **Tekstskalering**.

## Batteriniveau, Fartmåler, Tilt skærm {#battery-level-speedometer-tilt-monitor}

Grafiske indikatorer i de betalte temaer. Programmet sætter deres værdi: en hubs batteri, en motors hastighed, en hubs hældning. **Tilt skærm** har **Vend pitch** og **Vend rulning**. Se [Indikatorer og skærme](/docs/Application/Dashboard/Indicators).

## Specialkontroller {#special-controls}

Et rat, pedaler, en manuel eller automatisk gearkasse, en håndbremse, en blinklysarm og en togkontrol. Hver af dem er et separat produkt med mange udseender. Se [Specialkontroller](/docs/Application/Dashboard/SpecialControls).

## Interaktivitet {#interactivity}

Alle interaktive kontroller har **Interaktivitet** (slået til som standard). En ikke-interaktiv kontrol reagerer ikke på berøring. Programmet kan slå interaktiviteten til og fra, for eksempel for at blokere speederen, indtil et opstartstjek er færdigt.
