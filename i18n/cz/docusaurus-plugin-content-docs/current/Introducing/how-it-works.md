---
id: HowItWorks
title: Jak MOCPilot funguje
description: "Profily, panel, huby a program: čtyři části každého modelu v MOCPilotu."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Jak MOCPilot funguje {#how-mocpilot-works}

Všechno v MOCPilotu se skládá ze čtyř částí. Jakmile je znáte, dává smysl každá obrazovka.

<HowItWorks />

## 1. Profil: jeden model {#1-profile-one-model}

**Profil** obsahuje všechno o jednom modelu: jeho huby, panel a program. Pro každý model si vytvořte jeden profil, například „Technic Buggy“ nebo „Jeřábový vůz“.

Při vytváření profilu zvolíte jeho **typ programu**: Logické bloky, nebo Rychlá propojení. Později ho už změnit nelze. Viz [Vytvoření profilu](/docs/Application/Profiles/CreateProfile).

## 2. Huby: elektronika modelu {#2-hubs-the-models-electronics}

**Huby** jsou bluetoothové kostky ve vašem modelu; do jejich portů se zapojují motory, světla a senzory. Profil má **sloty** pro huby. Huby modelu do slotů přidáte jen jednou a MOCPilot se k nim připojí pokaždé, když profil otevřete. Viz [Huby](/docs/Application/Hubs/HubsOverview).

## 3. Panel: vaše ovládání {#3-dashboard-your-controls}

**Panel** je obrazovka, ze které řídíte. Ovládací prvky rozmístíte na mřížku: joysticky, posuvníky, tlačítka, přepínače, krokové spínače a monitory a k tomu speciální ovládací prvky, jako je volant nebo pedály. Ovládací prvek sám o sobě nic nedělá; předává své hodnoty programu. Viz [Panel](/docs/Application/Dashboard/DashboardOverview).

Můžete také použít herní ovladač, společně s panelem nebo místo něj. Viz [Herní ovladač](/docs/Application/Dashboard/Gamepad).

## 4. Program: co je propojuje {#4-program-what-connects-them}

**Program** určuje, co se stane, když pohnete ovládacím prvkem: který motor se roztočí a jak rychle, které světlo zabliká, co ukáže monitor.

- V **Rychlých propojeních** je program seznam řádků: *vstup → zpracování → operace → hub*. Viz [Rychlá propojení](/docs/Application/Links/LinksIntroducing).
- V **Logických blocích** se program skládá z bloků: událostí, cyklů, podmínek, proměnných a senzorů. Viz [Logické bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Spuštění {#5-run}

Stiskněte **Spustit** (▶). Program se spustí, ovládací prvky na panelu ožijí a model reaguje. Stisknutím **Zastavit** se vrátíte k úpravám. Viz [Řízení modelu](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Program v Rychlých propojeních: ovládací prvky panelu propojené s porty hubu" width={900} />

## Jak obvykle postupovat {#a-typical-session}

1. Otevřete profil, nebo [vytvořte nový](/docs/Application/Profiles/CreateProfile).
2. Přidejte své huby v části **Moje huby** a zapněte je.
3. Rozmístěte ovládací prvky na **Panel**.
4. V **programu** je propojte s motory a světly.
5. Stiskněte **Spustit**, jezděte, dolaďujte a opakujte.

## Co je uložené kde {#what-is-stored-where}

- Profily se ukládají ve vašem zařízení. Když jste přihlášeni, ukládají se také do vašeho účtu a objeví se na všech vašich zařízeních. Viz [Synchronizace mezi zařízeními](/docs/Application/Account/Sync).
- Motivy a další nákupy patří k vašemu účtu. Viz [MocPilot Pro a nákupy](/docs/Application/Account/Pro).
