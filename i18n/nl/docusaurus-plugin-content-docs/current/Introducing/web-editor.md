---
id: WebEditor
title: Webeditor
description: "Bewerk je MOCPilot-profielen in de browser op mocpilot.com en bestuur het model via de app op een ander apparaat."
---

import Screenshot from '@site/src/components/Screenshot';

# Webeditor op mocpilot.com {#web-editor-on-mocpilotcom}

De webeditor is MOCPilot in je browser. Het is dezelfde app met dezelfde editors, hetzelfde dashboard en dezelfde thema's, dus alles in deze documentatie geldt er ook voor.

Browsers kunnen niet met Bluetooth-hubs communiceren, dus de webeditor is bedoeld om te **bewerken**. Om een profiel te testen, voer je het zonder hubs uit in de browser; om het model te besturen, laat je de MOCPilot-app op een telefoon, tablet of computer de hubs verbinden (zie [Afstandsbediening](/docs/Application/Profiles/RemoteControl)).

## Uitproberen zonder account {#try-it-without-an-account}

Op de startpagina van [mocpilot.com](https://mocpilot.com) heeft elke editor (Logicablokken en Snelle koppelingen) een knop **Demo proberen** die een demoprofiel opent. Voor de demo heb je geen account en geen hubs nodig. Je kunt in de demo elk thema en elk speciaal bedieningselement uitproberen; er wordt niets opgeslagen.

## Je eigen profielen bewerken {#edit-your-own-profiles}

1. Log op [mocpilot.com](https://mocpilot.com) in met je MOCPilot-account.
2. Open je profielen en klik bij een ervan op **Bewerken**.
3. Wijzig de hubs, het dashboard of het programma, net als in de app.
4. Sluit het profiel (de Home-knop). De editor slaat het profiel op en uploadt het, en via [synchronisatie](/docs/Application/Account/Sync) komt de wijziging in de app op je apparaten terecht.

Opmerkingen:

- Je kunt alleen profielen bewerken van het account waarmee je bent ingelogd. Anders zie je “Dit profiel staat niet in je account” en een knop **Terug naar de website**.
- Je aankopen en MocPilot Pro werken in de browser net zo als in de app.
- In een desktopbrowser is het dashboard een zwevend paneel dat je kunt verslepen en van grootte kunt veranderen.
- Thema's worden bij elk bezoek opnieuw gedownload (ongeveer 15 MB), dus de eerste keer openen kan even duren.
- Importeren en exporteren van `.dat`-bestanden is niet beschikbaar in de browser; gebruik daarvoor de app.

## Een profiel uitvoeren {#run-a-profile}

**Start** in de webeditor voert het profiel uit in de browser: elk blok en elke rij werkt, behalve Bluetooth. Zo kun je goed de logica, monitors en het dashboard testen. Als er een hub-apparaat is gekoppeld (MocPilot Pro, zie hieronder), start **Start** het profiel in plaats daarvan op het hub-apparaat.

## Afstandsbediening {#remote-control}

Met [MocPilot Pro](/docs/Application/Account/Pro) kan de webeditor de **afstandsbediening** zijn: de MOCPilot-app op een telefoon, tablet of computer bij het model (het **hub-apparaat**) verbindt de hubs en voert het profiel uit, en de browserpagina bestuurt het. Druk in de bovenbalk van het profiel op **Afstandsbediening** en daarna op **Code tonen**, tik op het hub-apparaat op de pagina **Mijn profielen** op **Afstandsbediening verbinden** en scan de code. Zie [Afstandsbediening](/docs/Application/Profiles/RemoteControl).
