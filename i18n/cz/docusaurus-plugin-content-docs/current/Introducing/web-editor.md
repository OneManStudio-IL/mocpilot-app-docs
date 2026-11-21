---
id: WebEditor
title: Webový editor
description: "Upravujte profily MOCPilotu v prohlížeči na mocpilot.com a řiďte model přes aplikaci na jiném zařízení."
---

import Screenshot from '@site/src/components/Screenshot';

# Webový editor na mocpilot.com {#web-editor-on-mocpilotcom}

Webový editor je MOCPilot spuštěný ve vašem prohlížeči. Je to stejná aplikace se stejnými editory, panelem a motivy, takže pro něj platí všechno v této dokumentaci.

Prohlížeče neumějí komunikovat s bluetoothovými huby, proto webový editor slouží k **úpravám**. Profil můžete otestovat spuštěním v prohlížeči bez hubů; k řízení modelu nechte huby připojit aplikaci MOCPilot na telefonu, tabletu nebo počítači (viz [Dálkové ovládání](/docs/Application/Profiles/RemoteControl)).

## Vyzkoušejte bez účtu {#try-it-without-an-account}

Na domovské stránce [mocpilot.com](https://mocpilot.com) má každý editor (Logické bloky a Rychlá propojení) tlačítko **Vyzkoušet demo**, které otevře ukázkový profil. Demo nevyžaduje účet ani huby. V demu si můžete vyzkoušet všechny motivy a speciální ovládací prvky; nic se neukládá.

## Úpravy vlastních profilů {#edit-your-own-profiles}

1. Přihlaste se na [mocpilot.com](https://mocpilot.com) svým účtem MOCPilot.
2. Otevřete své profily a u jednoho z nich klikněte na **Upravit**.
3. Změňte huby, panel nebo program, stejně jako v aplikaci.
4. Zavřete profil (tlačítko Domů). Editor profil uloží a nahraje a změna se dostane do aplikace na vašich zařízeních díky [synchronizaci](/docs/Application/Account/Sync).

Poznámky:

- Upravovat můžete jen profily účtu, kterým jste přihlášeni. Jinak uvidíte zprávu „Tento profil není ve vašem účtu“ a tlačítko **Zpět na web**.
- Vaše nákupy a MocPilot Pro fungují v prohlížeči stejně jako v aplikaci.
- V prohlížeči na počítači je panel plovoucí okno, které můžete přetahovat a měnit jeho velikost.
- Motivy se stahují znovu při každé návštěvě (asi 15 MB), takže první otevření může chvíli trvat.
- Import a export souborů `.dat` v prohlížeči není k dispozici; použijte aplikaci.

## Spuštění profilu {#run-a-profile}

**Spustit** ve webovém editoru spustí profil v prohlížeči: funguje každý blok i řádek kromě Bluetooth, což se hodí k testování logiky, monitorů a panelu. Když je spárované zařízení s huby (MocPilot Pro, viz níže), **Spustit** místo toho spustí profil na zařízení s huby.

## Dálkové ovládání {#remote-control}

S [MocPilot Pro](/docs/Application/Account/Pro) může webový editor sloužit jako **dálkový ovladač**: aplikace MOCPilot na telefonu, tabletu nebo počítači u modelu (**zařízení s huby**) připojuje huby a spouští profil a stránka v prohlížeči ho ovládá. Stiskněte **Dálkové ovládání** na horní liště profilu a pak **Zobrazit kód**; na zařízení s huby klepněte na stránce **Moje profily** na **Připojit dálkový ovladač** a naskenujte kód. Viz [Dálkové ovládání](/docs/Application/Profiles/RemoteControl).
