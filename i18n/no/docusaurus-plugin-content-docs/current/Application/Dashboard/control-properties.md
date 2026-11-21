---
id: ControlProperties
title: Kontrollegenskaper
description: "Endre størrelse, farge, ikon, utseende, oppførsel og tema for en kontroll i egenskapene."
---

import Screenshot from '@site/src/components/Screenshot';

# Kontrollegenskaper {#control-properties}

I redigeringsmodus trykker (klikker) du på en kontroll for å åpne egenskapene.

- **Telefon og nettbrett**: et panel over dashboardet; trykk utenfor for å lukke det.
- **Datamaskin**: et sidepanel; du kan fortsette å jobbe på dashboardet mens det er åpent.

<Screenshot name="controller-properties" alt="Panelet med kontrollegenskaper og fanene Stil og Innstillinger" width={900} />

Toppfeltet viser navnet på kontrollen (for eksempel **JOY1**), søppelbøtteknappen, dupliseringsmenyen og **OK**.

## Fanen Stil {#style-tab}

- **Størrelse**: S, M eller L. Se [størrelser](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Aksentfarge**: hovedfargen på kontrollen.
- **Ikon**: et bilde på kontrollen (knapper, brytere, monitorer), valgt blant mer enn 260 ikoner.
- **Utsjånad**: utseendet til en [spesialkontroll](/docs/Application/Dashboard/SpecialControls), for eksempel stilen på et ratt.
- Temaalternativer, avhengig av temaet: for eksempel **Farget karbon**, **Fargede rammer** og **Vis race linjer** i Racing, **Antall indikatorsegmenter** i Byggmaskiner, **Vis verdier** i Aura.
- **Endre tema**: bytt kontrollen til et annet tema du eier som har samme kontrolltype.

## Fanen Innstillinger {#settings-tab}

Felles innstillinger:

- **Lås kontrolleren**: en låst kontroll kan ikke flyttes eller slettes.
- **Interaktivitet**: en ikke-interaktiv kontroll registrerer ikke trykk.

Innstillinger for hver type:

| Kontroll | Innstillinger |
|---|---|
| Joystick | **Aksetype**: Begge akser (X, Y), Kun horisontal (X), Kun vertikal (Y) |
| Skyveknapp, Ver. skyvebryter | **Returner til null**, **Negative verdier**, **Trinnverdi** |
| Dreieknapp | **Hakksteg (0 = trinnlaust)** (0–24), **Null i midten (-100..100)** |
| Steppbryter, Ver. steppbryter | **Antall trinn** (1–100), **Negative verdier**, **Aktiver reset** |
| Monitor | **Tekstoppsett**, **Tekstoverflyt**, **Maksimalt tal linjer**, **Rulleretning**, **Rullefart**, **Vis rullefelt**, **Interaktiv rulling**, **Tekstjustering**, **Tekstskalering** |
| Hellingsmonitor | **Invertere pitching**, **Invertere rulling** |
| Ratt | **Rattvinkel** (20–120°), **Lydeffekter** |
| Pedaler | **Lydeffekter** |
| Manuell girkasse | **Antall gir** (2–6) |
| Automatisk girkasse | **Antall gir** (2–8) |
| Blinklys | **Blinklysutgangane blinkar**; på fanen Stil **Ikon: left**, **Ikon: light**, **Ikon: right** |

Tallinnstillinger har en **Tilbakestill**-knapp som gjenoppretter standardverdien.

## Endre egenskaper fra programmet {#change-properties-from-the-program}

I Logikkblokker kan blokker endre en kontroll mens programmet kjører: sette fargen, slå interaktiviteten av eller på, vise verdier på monitorer. Se [Blokker for dashboardkontroller](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
