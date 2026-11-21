---
id: HowItWorks
title: Så fungerar MOCPilot
description: "Profiler, instrumentpanel, hubbar och program: de fyra delarna i varje MOCPilot-modell."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Så fungerar MOCPilot

Allt i MOCPilot byggs av fyra delar. När du känner till dem blir varje skärm begriplig.

<HowItWorks />

## 1. Profil: en modell {#1-profile-one-model}

En **profil** innehåller allt om en modell: dess hubbar, dess instrumentpanel och dess program. Skapa en profil per modell, till exempel ”Technic Buggy” eller ”Kranbil”.

När du skapar en profil väljer du dess **programtyp**: Logikblock eller Snabbkopplingar. Den kan inte ändras i efterhand. Se [Skapa en profil](/docs/Application/Profiles/CreateProfile).

## 2. Hubbar: modellens elektronik {#2-hubs-the-models-electronics}

**Hubbar** är Bluetooth-klossarna i modellen; motorer, lampor och sensorer ansluts till deras portar. En profil har **platser** för hubbar. Du lägger till modellens hubbar på platserna en gång, och sedan ansluter MOCPilot till dem varje gång du öppnar profilen. Se [Hubbar](/docs/Application/Hubs/HubsOverview).

## 3. Instrumentpanel: dina kontroller {#3-dashboard-your-controls}

**Instrumentpanelen** är skärmen du kör från. Du placerar kontroller på ett rutnät: joystickar, skjutreglage, knappar, brytare, stegomkopplare och monitorer, plus specialkontroller som ratt och pedaler. En kontroll gör ingenting på egen hand; den skickar sina värden till programmet. Se [Instrumentpanel](/docs/Application/Dashboard/DashboardOverview).

Du kan också använda en handkontroll, tillsammans med instrumentpanelen eller i stället för den. Se [Handkontroll](/docs/Application/Dashboard/Gamepad).

## 4. Program: det som kopplar ihop allt {#4-program-what-connects-them}

**Programmet** bestämmer vad som händer när du rör en kontroll: vilken motor som snurrar och hur snabbt, vilken lampa som blinkar, vad en monitor visar.

- I **Snabbkopplingar** är programmet en lista med rader: *ingång → bearbetning → åtgärd → hubb*. Se [Snabbkopplingar](/docs/Application/Links/LinksIntroducing).
- I **Logikblock** består programmet av block: händelser, loopar, villkor, variabler och sensorer. Se [Logikblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Kör {#5-run}

Tryck på **Kör** (▶). Programmet startar, kontrollerna på instrumentpanelen vaknar till liv och modellen reagerar. Tryck på **Stoppa** för att gå tillbaka till redigeringen. Se [Köra en modell](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Program i Snabbkopplingar: kontroller på instrumentpanelen kopplade till hubbens portar" width={900} />

## Ett typiskt arbetspass {#a-typical-session}

1. Öppna en profil eller [skapa en ny](/docs/Application/Profiles/CreateProfile).
2. Lägg till dina hubbar under **Mina hubbar** och slå på dem.
3. Placera kontroller på **Instrumentpanel**.
4. Koppla dem till motorer och lampor i **programmet**.
5. Tryck på **Kör**, kör, justera, upprepa.

## Var allt sparas {#what-is-stored-where}

- Profiler sparas på din enhet. När du är inloggad sparas de också i ditt konto och visas på alla dina enheter. Se [Synkronisering mellan enheter](/docs/Application/Account/Sync).
- Teman och andra köp hör till ditt konto. Se [MocPilot Pro och köp](/docs/Application/Account/Pro).
