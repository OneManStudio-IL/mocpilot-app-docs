---
id: RemoteControl
title: Dálkové ovládání
description: "Spusťte profil na telefonu, tabletu nebo počítači u modelu a ovládejte ho z jiného zařízení nebo z webového editoru."
---

import Screenshot from '@site/src/components/Screenshot';

# Dálkové ovládání {#remote-control}

Dálkové ovládání vám umožní řídit model, který je připojený k jinému zařízení. Jedno zařízení zůstává u modelu a komunikuje s huby přes Bluetooth; druhé držíte v ruce a používáte jeho panel. Stejně tak řídíte model z [webového editoru](/docs/Introducing/WebEditor), protože prohlížeče se k hubům připojit nemohou.

## Dvě zařízení {#the-two-devices}

- **Zařízení s huby** je telefon, tablet nebo počítač u modelu. Jeho aplikace MOCPilot připojuje huby a spouští profil. Nepotřebuje účet.
- **Dálkový ovladač** je to, z čeho ovládáte: aplikace MOCPilot na jiném zařízení, nebo webový editor na [mocpilot.com](https://mocpilot.com). Profil je otevřený na dálkovém ovladači a ten ho posílá do zařízení s huby.

## Co potřebujete {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) na účtu přihlášeném na **dálkovém ovladači**. Zařízení s huby nepotřebuje účet ani Pro.
- Aplikaci MOCPilot na zařízení s huby.
- Připojení k internetu na obou zařízeních.

## Připojení zařízení s huby {#connect-a-hub-device}

1. Na dálkovém ovladači otevřete profil a na horní liště profilu stiskněte **Dálkové ovládání** (ikona dálkového ovládání: domeček s oblouky signálu). Ve webovém editoru stiskněte v panelu, který se otevře, **Zobrazit kód**.

   Dálkový ovladač zobrazí **kód pro připojení**: QR kód a 6 číslic.
2. Na zařízení s huby otevřete MOCPilot a na stránce **Moje profily** klepněte na **Připojit dálkový ovladač**. Na Macu můžete také zvolit **Soubor → Připojit dálkový ovladač…**.
3. Zadejte kód:
   - **na telefonu nebo tabletu** namiřte fotoaparát na QR kód, nebo klepněte na **Zadat kód** a napište 6 číslic;
   - **na počítači** napište 6 číslic a stiskněte **Připojit**.
4. Zařízení se propojí. Dálkový ovladač pošle profil do zařízení s huby a tam ho spustí a zařízení s huby zobrazí stránku **Dálkové ovládání** na celou obrazovku.

<Screenshot name="remote-control-code" alt="Panel Dálkové ovládání v otevřeném profilu s QR kódem a šestimístným kódem" width={900} />

O kódu pro připojení:

- Funguje jednou a platí 5 minut. Dokud ho dálkový ovladač zobrazuje, po vypršení ho nahradí nový kód.
- Naskenujte ho v aplikaci MOCPilot, ne aplikací fotoaparátu v telefonu.
- Pokud panel na dálkovém ovladači zavřete dřív, než se zařízení s huby připojí, nic se nenastaví; pro nový kód stiskněte znovu **Dálkové ovládání**.

<Screenshot name="remote-connect-code-entry" alt="Okno Připojit dálkový ovladač na počítači s polem pro 6 číslic" width={900} />

## Když jsou zařízení propojená {#when-the-devices-are-connected}

**Na dálkovém ovladači:**

- Tlačítko **Dálkové ovládání** zezelená (na telefonu nebo tabletu zelený kroužek) a jeho panel ukazuje název zařízení s huby a tlačítko **Odpojit**.
- **Moje huby** ukazuje huby zařízení s huby. Připojte je odtud jako obvykle: hledá je zařízení s huby, takže po vyzvání stiskněte tlačítko na hubu.
- Panel ovládá model.

**Na zařízení s huby** ukazuje stránka **Dálkové ovládání** na celou obrazovku:

- stav, například **Běží «My car»**;
- **Připojené huby: N** a během hledání **Hledání hubu: stiskněte tlačítko na hubu.**;
- připomínku: **Nechte aplikaci otevřenou. Toto je zařízení s huby: připojuje huby a spouští profil, dálkový ovladač jej jen ovládá.**;
- tlačítko **Zastavit**.

Obrazovka zařízení s huby zůstává zapnutá, dokud je připojené. Profil se na zařízení s huby neukládá a neobjeví se v jeho seznamu profilů.

<Screenshot name="remote-hub-device" alt="Stránka Dálkové ovládání na celou obrazovku na zařízení s huby se stavem připojení, počtem připojených hubů a tlačítkem Zastavit" width={900} />

## Spuštění a zastavení {#run-and-stop}

- Stisknutím **Zastavit** na dálkovém ovladači zastavíte profil na zařízení s huby. Zařízení s huby vždy zastaví všechny motory, i když je v profilu vypnuté **Zastavit porty hubu při zastavení programu**.
- Stisknutím **Spustit** na dálkovém ovladači ho na zařízení s huby znovu spustíte.
- Ve webovém editoru zůstává zařízení s huby spárované pro každý profil, který otevřete ve stejné kartě prohlížeče: **Spustit** spustí profil na zařízení s huby. Když není spárované žádné zařízení s huby, **Spustit** spustí profil v prohlížeči, bez hubů.

## Když spojení vypadne {#if-the-connection-drops}

:::caution Bezpečnost
Pokud zařízení s huby 4 sekundy nic neuslyší od dálkového ovladače, zastaví profil i všechny motory.
:::

Potom:

- zařízení s huby zobrazí **Spojení s dálkovým ovladačem bylo ztraceno. Profil byl zastaven. Čekání na dálkový ovladač…** a čeká;
- aplikace na dálkovém ovladači zobrazí **Spojení bylo ztraceno. Zkouším znovu…** s tlačítky **Zkusit znovu** a **Odpojit**;
- webový editor zobrazí **Zařízení s huby se odpojilo**: „*zařízení* neodpovídá. Profil na něm byl zastaven a motory vypnuty.“ Stále se pokouší znovu připojit; můžete také stisknout **Znovu připojit**, **Spustit v prohlížeči** nebo **Zastavit**.

Až se zařízení znovu propojí, zkontrolujte stav na dálkovém ovladači a pokud profil neběží, stiskněte **Spustit**.

## Odpojení {#disconnect}

- **Na dálkovém ovladači**: stiskněte **Dálkové ovládání** a zvolte **Odpojit**.
- **Na zařízení s huby**: stiskněte **Zastavit** na stránce **Dálkové ovládání**.

V obou případech se profil i motory zastaví a zařízení s huby profil zavře.

## Řešení problémů {#troubleshooting}

| Zpráva | Kde | Co dělat |
|---|---|---|
| **Dálkové ovládání je součástí MocPilot Pro** | dálkový ovladač | Předplaťte si [MocPilot Pro](/docs/Application/Account/Pro) na účtu dálkového ovladače. V prohlížeči si předplatné pořídit nelze: udělejte to v aplikaci a Pro bude fungovat i ve webovém editoru |
| **Není spojení se serverem** | obě | Zkontrolujte připojení k internetu a zkuste to znovu |
| **Nepodařilo se získat kód ze serveru** | dálkový ovladač | Stisknutím **Zobrazit kód** to zkuste znovu |
| **Chybný nebo prošlý kód. Zkontrolujte 6 číslic zobrazených na ovladači.** | zařízení s huby | Napište 6 číslic, které dálkový ovladač zobrazuje právě teď |
| **Platnost kódu vypršela. Zobrazte na ovladači nový kód a naskenujte ho znovu.** | zařízení s huby | Stiskněte na dálkovém ovladači **Dálkové ovládání** a naskenujte nový kód |
| **Toto není kód MOCPilot. Naskenujte kód zobrazený dálkovým ovladačem.** | zařízení s huby | Naskenujte QR kód v panelu **Dálkové ovládání** na dálkovém ovladači |
| **Příliš mnoho chybných kódů. Zkuste to znovu za pár minut.** | zařízení s huby | Počkejte pár minut a pak zadejte aktuální kód |
| **Povolte MOCPilot v systémovém nastavení používat fotoaparát, aby mohl kód naskenovat.** | zařízení s huby | Povolte v systémovém nastavení přístup k fotoaparátu, nebo klepněte na **Zadat kód** a napište 6 číslic |
| **Dálkový ovladač neodpovídá. Zkontrolujte, zda je na něm otevřený profil a zda je online.** | zařízení s huby | Nechte profil na dálkovém ovladači otevřený a zkontrolujte jeho připojení k internetu |
| **Tato verze aplikace se nemůže připojit k dálkovému ovladači** | obě | Aktualizujte MOCPilot |
| **Tento prohlížeč nemůže otevřít přímé spojení (WebRTC)** | webový editor | Použijte jiný prohlížeč, například Chrome, Edge nebo Safari |
| **Profil je příliš velký** / **Profil nedorazil celý** | obě | Zkontrolujte připojení a stiskněte znovu **Spustit** |
| **Druhé zařízení nemohlo profil uložit** / **Druhé zařízení nemohlo profil otevřít** | dálkový ovladač | Stiskněte znovu **Spustit**; pokud se to opakuje, odpojte zařízení s huby a připojte ho znovu |
| **Spojení s *zařízení* bylo ztraceno** / **Spojení s ovladačem ztraceno. Čekám na něj…** | obě | Viz [Když spojení vypadne](#if-the-connection-drops) |
