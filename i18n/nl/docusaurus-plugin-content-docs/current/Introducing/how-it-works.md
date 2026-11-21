---
id: HowItWorks
title: Hoe MOCPilot werkt
description: "Profielen, dashboard, hubs en programma: de vier onderdelen van elk MOCPilot-model."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Hoe MOCPilot werkt {#how-mocpilot-works}

Alles in MOCPilot bestaat uit vier onderdelen. Als je die kent, wordt elk scherm vanzelf duidelijk.

<HowItWorks />

## 1. Profiel: één model {#1-profile-one-model}

Een **profiel** bevat alles over één model: de hubs, het dashboard en het programma. Maak één profiel per model, bijvoorbeeld “Technic Buggy” of “Kraanwagen”.

Bij het maken van een profiel kies je het **programmatype**: Logicablokken of Snelle koppelingen. Dat kun je later niet meer wijzigen. Zie [Een profiel maken](/docs/Application/Profiles/CreateProfile).

## 2. Hubs: de elektronica van het model {#2-hubs-the-models-electronics}

**Hubs** zijn de Bluetooth-stenen in je model; motoren, lampen en sensoren sluit je aan op hun poorten. Een profiel heeft **hubslots**. Je voegt de hubs van je model één keer toe aan de slots, en MOCPilot maakt verbinding met ze zodra je het profiel opent. Zie [Hubs](/docs/Application/Hubs/HubsOverview).

## 3. Dashboard: je bediening {#3-dashboard-your-controls}

Het **dashboard** is het scherm waarmee je bestuurt. Je plaatst bedieningselementen op een raster: joysticks, schuifregelaars, knoppen, schakelaars, stappenschakelaars en monitors, plus speciale bedieningselementen zoals een stuurwiel en pedalen. Een bedieningselement doet op zichzelf niets; het geeft zijn waarden door aan het programma. Zie [Dashboard](/docs/Application/Dashboard/DashboardOverview).

Je kunt ook een gamepad gebruiken, samen met het dashboard of in plaats ervan. Zie [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Programma: wat alles verbindt {#4-program-what-connects-them}

Het **programma** bepaalt wat er gebeurt als je een bedieningselement beweegt: welke motor draait en hoe snel, welke lamp knippert, wat een monitor toont.

- Bij **Snelle koppelingen** is het programma een lijst rijen: *invoer → verwerking → bewerking → hub*. Zie [Snelle koppelingen](/docs/Application/Links/LinksIntroducing).
- Bij **Logicablokken** bestaat het programma uit blokken: gebeurtenissen, lussen, voorwaarden, variabelen en sensoren. Zie [Logicablokken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Starten {#5-run}

Druk op **Start** (▶). Het programma start, de bedieningselementen op het dashboard komen tot leven en het model reageert. Druk op **Stop** om terug te gaan naar bewerken. Zie [Een model besturen](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Programma met Snelle koppelingen: bedieningselementen van het dashboard verbonden met hubpoorten" width={900} />

## Zo werk je meestal {#a-typical-session}

1. Open een profiel of [maak er een](/docs/Application/Profiles/CreateProfile).
2. Voeg je hubs toe in **Mijn hubs** en zet ze aan.
3. Plaats bedieningselementen op het **Dashboard**.
4. Verbind ze in het **programma** met motoren en lampen.
5. Druk op **Start**, rij, stel bij, herhaal.

## Wat wordt waar opgeslagen? {#what-is-stored-where}

- Profielen worden op je apparaat opgeslagen. Als je bent ingelogd, worden ze ook in je account bewaard en verschijnen ze op al je apparaten. Zie [Synchronisatie tussen apparaten](/docs/Application/Account/Sync).
- Thema's en andere aankopen horen bij je account. Zie [MocPilot Pro en aankopen](/docs/Application/Account/Pro).
