---
id: HowItWorks
title: Ako funguje MOCPilot
description: "Profily, panel, huby a program: štyri časti každého modelu v MOCPilot."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Ako funguje MOCPilot {#how-mocpilot-works}

Všetko v MOCPilot sa skladá zo štyroch častí. Keď ich poznáte, každá obrazovka dáva zmysel.

<HowItWorks />

## 1. Profil: jeden model {#1-profile-one-model}

**Profil** obsahuje všetko o jednom modeli: jeho huby, panel a program. Pre každý model si vytvorte jeden profil, napríklad „Technic Buggy“ alebo „Autožeriav“.

Pri vytváraní profilu si zvolíte jeho **typ programu**: Logické bloky alebo Rýchle prepojenia. Neskôr ho už zmeniť nemôžete. Pozrite si [Vytvorenie profilu](/docs/Application/Profiles/CreateProfile).

## 2. Huby: elektronika modelu {#2-hubs-the-models-electronics}

**Huby** sú Bluetooth kocky vo vašom modeli; do ich portov sa zapájajú motory, svetlá a senzory. Profil má **sloty** pre huby. Huby modelu do slotov pridáte raz a MOCPilot sa k nim pripojí vždy, keď profil otvoríte. Pozrite si [Huby](/docs/Application/Hubs/HubsOverview).

## 3. Panel: vaše ovládanie {#3-dashboard-your-controls}

**Panel** je obrazovka, z ktorej model riadite. Na mriežku umiestňujete ovládacie prvky: joysticky, posuvníky, tlačidlá, prepínače, stupňové prepínače a monitory, k tomu špeciálne prvky ako volant a pedále. Ovládací prvok sám osebe nič nerobí; svoje hodnoty odovzdáva programu. Pozrite si [Panel](/docs/Application/Dashboard/DashboardOverview).

Môžete použiť aj herný ovládač, spolu s panelom alebo namiesto neho. Pozrite si [Herný ovládač](/docs/Application/Dashboard/Gamepad).

## 4. Program: čo ich spája {#4-program-what-connects-them}

**Program** rozhoduje, čo sa stane, keď pohnete ovládacím prvkom: ktorý motor sa roztočí a ako rýchlo, ktoré svetlo zabliká, čo ukáže monitor.

- V **Rýchlych prepojeniach** je program zoznam riadkov: *vstup → spracovanie → operácia → hub*. Pozrite si [Rýchle prepojenia](/docs/Application/Links/LinksIntroducing).
- V **Logických blokoch** sa program skladá z blokov: udalostí, cyklov, podmienok, premenných a senzorov. Pozrite si [Logické bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Spustenie {#5-run}

Stlačte **Spustiť** (▶). Program sa spustí, ovládacie prvky na paneli ožijú a model reaguje. Stlačením **Zastaviť** sa vrátite k úpravám. Pozrite si [Riadenie modelu](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Program v Rýchlych prepojeniach: ovládacie prvky panela prepojené s portmi hubu" width={900} />

## Typický postup {#a-typical-session}

1. Otvorte profil alebo [vytvorte nový](/docs/Application/Profiles/CreateProfile).
2. Pridajte huby v **Moje huby** a zapnite ich.
3. Umiestnite ovládacie prvky na **Panel**.
4. V **programe** ich prepojte s motormi a svetlami.
5. Stlačte **Spustiť**, jazdite, upravujte, opakujte.

## Čo je uložené kde {#what-is-stored-where}

- Profily sa ukladajú vo vašom zariadení. Keď ste prihlásení, ukladajú sa aj vo vašom účte a zobrazia sa na všetkých vašich zariadeniach. Pozrite si [Synchronizácia medzi zariadeniami](/docs/Application/Account/Sync).
- Témy a ostatné nákupy patria k vášmu účtu. Pozrite si [MocPilot Pro a nákupy](/docs/Application/Account/Pro).
