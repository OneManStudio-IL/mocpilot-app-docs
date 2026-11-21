---
id: HowItWorks
title: Slik fungerer MOCPilot
description: "Profiler, dashboard, hubber og program: de fire delene i hver MOCPilot-modell."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Slik fungerer MOCPilot {#how-mocpilot-works}

Alt i MOCPilot er bygd av fire deler. Når du kjenner dem, gir hver skjerm mening.

<HowItWorks />

## 1. Profil: én modell {#1-profile-one-model}

En **profil** inneholder alt om én modell: hubbene, dashboardet og programmet. Lag én profil per modell, for eksempel «Technic Buggy» eller «Kranbil».

Når du oppretter en profil, velger du **programtype**: Logikkblokker eller Hurtigkoblinger. Den kan ikke endres senere. Se [Opprett en profil](/docs/Application/Profiles/CreateProfile).

## 2. Hubber: modellens elektronikk {#2-hubs-the-models-electronics}

**Hubber** er Bluetooth-klossene i modellen din; motorer, lys og sensorer kobles til portene deres. En profil har **plasser** til hubber. Du legger modellens hubber inn i plassene én gang, og MOCPilot kobler til dem hver gang du åpner profilen. Se [Hubber](/docs/Application/Hubs/HubsOverview).

## 3. Dashboard: kontrollene dine {#3-dashboard-your-controls}

**Dashboardet** er skjermen du kjører fra. Du plasserer kontroller i et rutenett: joysticker, skyveknapper, knapper, brytere, trinnbrytere og monitorer, pluss spesialkontroller som ratt og pedaler. En kontroll gjør ingenting alene; den sender verdiene sine videre til programmet. Se [Dashboard](/docs/Application/Dashboard/DashboardOverview).

Du kan også bruke en spillkontroller, sammen med dashboardet eller i stedet for det. Se [Spillkontroller](/docs/Application/Dashboard/Gamepad).

## 4. Program: det som kobler dem sammen {#4-program-what-connects-them}

**Programmet** bestemmer hva som skjer når du beveger en kontroll: hvilken motor som går og hvor fort, hvilket lys som blinker, hva en monitor viser.

- I **Hurtigkoblinger** er programmet en liste med rader: *inngang → behandling → handling → hub*. Se [Hurtigkoblinger](/docs/Application/Links/LinksIntroducing).
- I **Logikkblokker** består programmet av blokker: hendelser, løkker, betingelser, variabler og sensorer. Se [Logikkblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Kjør {#5-run}

Trykk **Kjør** (▶). Programmet starter, kontrollene på dashboardet våkner til liv, og modellen reagerer. Trykk **Stopp** for å gå tilbake til redigering. Se [Kjøre en modell](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Hurtigkoblinger-program: dashboardkontroller koblet til hubporter" width={900} />

## En typisk økt {#a-typical-session}

1. Åpne en profil eller [opprett en](/docs/Application/Profiles/CreateProfile).
2. Legg til hubbene dine i **Mine hubber** og slå dem på.
3. Plasser kontroller på **Dashboard**.
4. Koble dem til motorer og lys i **programmet**.
5. Trykk **Kjør**, kjør, juster, gjenta.

## Hva som lagres hvor {#what-is-stored-where}

- Profiler lagres på enheten din. Når du er logget inn, lagres de også i kontoen din og vises på alle enhetene dine. Se [Synkronisering mellom enheter](/docs/Application/Account/Sync).
- Temaer og andre kjøp hører til kontoen din. Se [MocPilot Pro og kjøp](/docs/Application/Account/Pro).
