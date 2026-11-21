---
id: QuickStart
title: Rychlý start
description: "Nainstalujte MOCPilot, přihlaste se, vytvořte první profil a za pár minut řiďte model."
---

import Screenshot from '@site/src/components/Screenshot';

# Rychlý start {#quick-start}

Tento návod vás provede od instalace aplikace až k řízení prvního modelu. Potřebujete podporovaný hub s motorem; viz [Podporovaná zařízení](/docs/Introducing/SupportedDevices).

## 1. Nainstalujte aplikaci {#1-install-the-app}

MOCPilot je k dispozici v App Storu (iPhone, iPad, Mac), na Google Play (Android) a v Microsoft Storu (Windows). Odkazy najdete na [mocpilot.com](https://mocpilot.com).

## 2. Přihlaste se, nebo pokračujte bez účtu {#2-sign-in-or-continue-without-an-account}

Při prvním spuštění vás aplikace požádá o přihlášení. Použijte e-mail nebo přihlašovací jméno a heslo, Google nebo Apple ID, případně si vytvořte nový účet.

<Screenshot name="sign-in" alt="Přihlašovací obrazovka MOCPilotu" width={900} />

Účet doporučujeme:

- vaše profily a nastavení se ukládají na server a synchronizují mezi vašimi zařízeními;
- když zařízení vyměníte nebo ztratíte, můžete svá data získat zpět;
- nákupy a MocPilot Pro fungují na všech vašich zařízeních.

Funguje i **Pokračovat bez účtu**, ale pak všechno zůstane jen v tomto zařízení a po odinstalování aplikace o to přijdete. Přihlásit se můžete později v **Nastavení → Účet**. Viz [Účet](/docs/Application/Account/UserAccount).

## 3. Zorientujte se {#3-find-your-way-around}

- Na **telefonu** obsahuje spodní lišta **Profily**, **Nastavení** a **Nápověda** (a po přihlášení **Oznámení**).
- Na **tabletu** jsou stejné sekce, **Katalog profilů** a váš účet v bočním panelu.
- Na **počítači** použijte horní lištu: nabídky vlevo; Účet, Oznámení a Nastavení vpravo.

Viz [Telefon, tablet a počítač](/docs/Introducing/Layouts).

## 4. Vytvořte profil {#4-create-a-profile}

1. Na stránce **Moje profily** klepněte na **+** → **Nový profil** (telefon), nebo zvolte **Nový profil** (tablet a počítač, případně **Soubor → Nový profil**).
2. Zvolte **typ programu**:
   - **Rychlá propojení**, pokud chcete řídit model bez kódu. Nejlepší pro první pokus.
   - **Logické bloky**, pokud chcete události, cykly, podmínky a senzory.
3. Zadejte **název** a případně přidejte obrázek.
4. Klepněte na **Vytvořit**.

<Screenshot name="create-profile-tiles" alt="Stránka Nový profil s dlaždicemi Logické bloky a Rychlá propojení" width={900} />

Profil se otevře v editoru. Více v článku [Vytvoření profilu](/docs/Application/Profiles/CreateProfile).

:::tip Chcete hotový model?
Otevřete **Katalog profilů** (**Hledat online** na stránce profilů) a nainstalujte oficiální profil pro svou stavebnici. Viz [Katalog a publikování](/docs/Application/Profiles/Catalog).
:::

## 5. Přidejte hub {#5-add-your-hub}

1. V editoru otevřete **Moje huby**.
2. Ve volném slotu klepněte na **Přidat nový hub**, zvolte model hubu a klepněte na **Přidat**.
3. Zapněte hub, stiskněte jeho tlačítko a počkejte, až ho MOCPilot najde.

<Screenshot name="my-hubs" alt="Stránka Moje huby se sloty pro huby" width={900} />

Pokud aplikace požádá o aktualizaci firmwaru, postupujte podle článku [Aktualizace firmwaru](/docs/Application/Hubs/FirmwareUpdating). Více v článku [Přidání a připojení hubu](/docs/Application/Hubs/ConnectingHubs).

## 6. Rozmístěte ovládací prvky na panel {#6-place-controls-on-the-dashboard}

1. Otevřete **Panel**.
2. Klepněte na **+** (**Přidat ovladač**), zvolte **Joystick** a klepněte na **Přidat na panel**.
3. Přetáhněte ho, kam potřebujete. Klepnutím na něj změníte jeho velikost, barvu nebo chování.

<Screenshot name="controller-palette" alt="Paleta Přidat ovladač s vybraným joystickem" width={900} />

Viz [Přidání a uspořádání ovládacích prvků](/docs/Application/Dashboard/ArrangingControls).

## 7. Propojte ovládací prvek s motorem {#7-connect-the-control-to-a-motor}

**Rychlá propojení:** přetáhněte vstup joysticku (například *JOY1 Osa Y*) ze sekce **Vstupy** do prázdného řádku, přidejte operaci **Motor** a výstup **Hub** ze sekce **Výstupy** a pak klepněte na port, do kterého je zapojený motor. Řádek je připravený, když nemá červený rámeček. Viz [Rychlá propojení](/docs/Application/Links/LinksIntroducing).

**Logické bloky:** přidejte blok *když program začne*, cyklus *opakovat vždy* a blok *nastavit rychlost na*, který přebírá hodnotu joysticku. Viz [Logické bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) a [příklady](/docs/Application/BlockBuilder/Examples).

## 8. Stiskněte Spustit {#8-press-run}

Stiskněte **Spustit** (▶). Pohněte joystickem a motor se roztočí. Stisknutím **Zastavit** se vrátíte k úpravám.

A je to. Co dál:

- Seznamte se se všemi [typy ovládacích prvků](/docs/Application/Dashboard/ControlTypes).
- Dejte panelu nový vzhled pomocí [motivů](/docs/Application/Themes/ThemesOverview).
- Připojte [herní ovladač](/docs/Application/Dashboard/Gamepad).
- Pokud něco nefunguje, podívejte se do článku [Řešení problémů](/docs/Help/Troubleshooting).
