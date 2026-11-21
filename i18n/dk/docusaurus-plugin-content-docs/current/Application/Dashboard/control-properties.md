---
id: ControlProperties
title: Kontrollens egenskaber
description: "Skift en kontrols størrelse, farve, ikon, udseende, adfærd og tema i dens egenskaber."
---

import Screenshot from '@site/src/components/Screenshot';

# Kontrollens egenskaber {#control-properties}

I redigeringstilstand trykker (klikker) du på en kontrol for at åbne dens egenskaber.

- **Telefon og tablet**: et panel over dashboardet; tryk uden for det for at lukke det.
- **Computer**: et sidepanel; du kan arbejde videre på dashboardet, mens det er åbent.

<Screenshot name="controller-properties" alt="Panelet med kontrollens egenskaber og fanerne Stil og Indstillinger" width={900} />

Overskriften viser kontrollens navn (for eksempel **JOY1**), skraldespandsknappen, menuen til duplikering og **OK**.

## Fanen Stil {#style-tab}

- **Størrelse**: S, M eller L. Se [størrelser](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Accentfarve**: kontrollens hovedfarve.
- **Ikon**: et billede på kontrollen (knapper, kontakter, skærme), valgt blandt mere end 260 ikoner.
- **Udseende**: udseendet af en [specialkontrol](/docs/Application/Dashboard/SpecialControls), for eksempel stilen på et rat.
- Temaindstillinger, der afhænger af temaet: for eksempel **Farvet kulstof**, **Farvede rammer** og **Vis racelinjer** i Racing, **Antal indikatorsegmenter** i Byggeteknologi, **Vis værdier** i Aura.
- **Skift tema**: skift kontrollen til et andet tema, du ejer, som har samme kontroltype.

## Fanen Indstillinger {#settings-tab}

Fælles indstillinger:

- **Lås controlleren**: en låst kontrol kan ikke flyttes eller slettes.
- **Interaktivitet**: en ikke-interaktiv kontrol registrerer ikke tryk.

Indstillinger for hver type:

| Kontrol | Indstillinger |
|---|---|
| Joystick | **Akseltype**: Begge akser (X, Y), Kun vandret (X), Kun lodret (Y) |
| Skyder, Ver. skyder | **Returnere til nul**, **Negative værdier**, **Trinværdi** |
| Drejeknap | **Hakstrin (0 = trinløst)** (0–24), **Nul i midten (-100..100)** |
| Trinkontakt, Ver. trinkontakt | **Antal trin** (1–100), **Negative værdier**, **Aktiver reset** |
| Skærm | **Tekstlayout**, **Tekstoverløb**, **Maksimalt antal linjer**, **Rulleretning**, **Rullehastighed**, **Vis rullepanel**, **Interaktiv rulning**, **Tekstjustering**, **Tekstskalering** |
| Tilt skærm | **Vend pitch**, **Vend rulning** |
| Rat | **Ratvinkel** (20–120°), **Lydeffekter** |
| Pedaler | **Lydeffekter** |
| Manuel gearkasse | **Antal gear** (2–6) |
| Automatisk gearkasse | **Antal gear** (2–8) |
| Blinklys | **Blinklysudgange blinker**; på fanen Stil **Ikon: venstre**, **Ikon: lys**, **Ikon: højre** |

Talindstillinger har en knap **Nulstil**, der gendanner standardværdien.

## Skift egenskaber fra programmet {#change-properties-from-the-program}

I Logikblokke kan blokke ændre en kontrol, mens programmet kører: sætte dens farve, slå dens interaktivitet til eller fra, vise værdier på skærme. Se [Blokke til skærmkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
