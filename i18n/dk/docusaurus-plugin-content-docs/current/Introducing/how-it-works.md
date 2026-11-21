---
id: HowItWorks
title: Sådan virker MOCPilot
description: "Profiler, dashboard, hubs og program: de fire dele i enhver MOCPilot-model."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Sådan virker MOCPilot {#how-mocpilot-works}

Alt i MOCPilot er bygget af fire dele. Når du kender dem, giver alle skærmbilleder mening.

<HowItWorks />

## 1. Profil: én model {#1-profile-one-model}

En **profil** indeholder alt om én model: dens hubs, dens dashboard og dens program. Lav én profil pr. model, for eksempel "Technic Buggy" eller "Kranvogn".

Når du opretter en profil, vælger du dens **programtype**: Logikblokke eller Hurtige forbindelser. Du kan ikke ændre den senere. Se [Opret en profil](/docs/Application/Profiles/CreateProfile).

## 2. Hubs: modellens elektronik {#2-hubs-the-models-electronics}

**Hubs** er Bluetooth-klodserne i din model; motorer, lys og sensorer sættes i deres porte. En profil har **slots** til hubs. Du tilføjer modellens hubs til slots én gang, og MOCPilot forbinder til dem, hver gang du åbner profilen. Se [Hubs](/docs/Application/Hubs/HubsOverview).

## 3. Dashboard: din betjening {#3-dashboard-your-controls}

**Dashboardet** er den skærm, du kører fra. Du placerer kontroller på et gitter: joysticks, skydere, knapper, kontakter, trinkontakter og monitorer samt specialkontroller som rat og pedaler. En kontrol gør ingenting alene; den sender sine værdier videre til programmet. Se [Dashboard](/docs/Application/Dashboard/DashboardOverview).

Du kan også bruge en gamepad sammen med dashboardet eller i stedet for det. Se [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Program: det, der forbinder dem {#4-program-what-connects-them}

**Programmet** bestemmer, hvad der sker, når du bevæger en kontrol: hvilken motor der drejer og hvor hurtigt, hvilket lys der blinker, og hvad en monitor viser.

- I **Hurtige forbindelser** er programmet en liste af rækker: *input → behandling → handling → hub*. Se [Hurtige forbindelser](/docs/Application/Links/LinksIntroducing).
- I **Logikblokke** består programmet af blokke: hændelser, løkker, betingelser, variabler og sensorer. Se [Logikblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Kør {#5-run}

Tryk på **Kør** (▶). Programmet starter, dashboardets kontroller bliver aktive, og modellen reagerer. Tryk på **Stop** for at vende tilbage til redigering. Se [Kør en model](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Program i Hurtige forbindelser: dashboardkontroller forbundet med hubporte" width={900} />

## En typisk session {#a-typical-session}

1. Åbn en profil, eller [opret en](/docs/Application/Profiles/CreateProfile).
2. Tilføj dine hubs under **Mine hubs**, og tænd dem.
3. Placer kontroller på **Dashboard**.
4. Forbind dem med motorer og lys i **programmet**.
5. Tryk på **Kør**, kør, justér, gentag.

## Hvad gemmes hvor {#what-is-stored-where}

- Profiler gemmes på din enhed. Når du er logget ind, gemmes de også på din konto og vises på alle dine enheder. Se [Synkronisering mellem enheder](/docs/Application/Account/Sync).
- Temaer og andre køb hører til din konto. Se [MocPilot Pro og køb](/docs/Application/Account/Pro).
