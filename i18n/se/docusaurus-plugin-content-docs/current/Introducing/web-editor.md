---
id: WebEditor
title: Webbredigerare
description: "Redigera dina MOCPilot-profiler i webbläsaren på mocpilot.com och kör modellen via appen på en annan enhet."
---

import Screenshot from '@site/src/components/Screenshot';

# Webbredigeraren på mocpilot.com

Webbredigeraren är MOCPilot som körs i din webbläsare. Det är samma app med samma redigerare, instrumentpanel och teman, så allt i den här dokumentationen gäller även den.

Webbläsare kan inte kommunicera med Bluetooth-hubbar, så webbredigeraren är till för **redigering**. För att testa en profil kör du den i webbläsaren utan hubbar; för att köra modellen låter du MOCPilot-appen på en telefon, surfplatta eller dator ansluta hubbarna (se [Fjärrstyrning](/docs/Application/Profiles/RemoteControl)).

## Prova utan konto {#try-it-without-an-account}

På startsidan för [mocpilot.com](https://mocpilot.com) har varje redigerare (Logikblock och Snabbkopplingar) en knapp **Prova demon** som öppnar en demoprofil. Demon kräver varken konto eller hubbar. Du kan prova alla teman och specialkontroller i demon; ingenting sparas.

## Redigera dina egna profiler {#edit-your-own-profiles}

1. Logga in på [mocpilot.com](https://mocpilot.com) med ditt MOCPilot-konto.
2. Öppna dina profiler och klicka på **Redigera** på en av dem.
3. Ändra hubbarna, instrumentpanelen eller programmet, precis som i appen.
4. Stäng profilen (knappen Hem). Redigeraren sparar profilen och laddar upp den, och ändringen når appen på dina enheter via [synkroniseringen](/docs/Application/Account/Sync).

Att tänka på:

- Du kan bara redigera profiler i det konto du är inloggad med. Annars visas ”Den här profilen finns inte i ditt konto” och knappen **Tillbaka till webbplatsen**.
- Dina köp och MocPilot Pro fungerar i webbläsaren precis som i appen.
- I en datorwebbläsare är instrumentpanelen en flytande panel som du kan dra och ändra storlek på.
- Teman laddas ned på nytt vid varje besök (cirka 15 MB), så första öppningen kan ta en stund.
- Import och export av `.dat`-filer finns inte i webbläsaren; använd appen.

## Köra en profil {#run-a-profile}

**Kör** i webbredigeraren kör profilen i webbläsaren: alla block och rader fungerar utom Bluetooth, vilket är bra för att testa logiken, monitorerna och instrumentpanelen. När en hubenhet är parkopplad (MocPilot Pro, se nedan) startar **Kör** i stället profilen på hubenheten.

## Fjärrstyrning {#remote-control}

Med [MocPilot Pro](/docs/Application/Account/Pro) kan webbredigeraren vara **fjärrkontrollen**: MOCPilot-appen på en telefon, surfplatta eller dator bredvid modellen (**hubenheten**) ansluter hubbarna och kör profilen, och webbsidan styr den. Tryck på **Fjärrstyrning** i profilens övre fält och sedan på **Visa koden**, och tryck på **Anslut en fjärrkontroll** på sidan **Mina profiler** på hubenheten och skanna koden. Se [Fjärrstyrning](/docs/Application/Profiles/RemoteControl).
