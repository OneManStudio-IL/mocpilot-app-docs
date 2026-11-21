---
id: WebEditor
title: Webeditor
description: "Rediger dine MOCPilot-profiler i browseren på mocpilot.com, og kør modellen via appen på en anden enhed."
---

import Screenshot from '@site/src/components/Screenshot';

# Webeditor på mocpilot.com {#web-editor-on-mocpilotcom}

Webeditoren er MOCPilot, der kører i din browser. Det er den samme app med de samme editorer, det samme dashboard og de samme temaer, så alt i denne dokumentation gælder også for den.

Browsere kan ikke tale med Bluetooth-hubs, så webeditoren er til **redigering**. For at teste en profil kører du den i browseren uden hubs; for at køre modellen lader du MOCPilot-appen på en telefon, tablet eller computer forbinde hubbene (se [Fjernstyring](/docs/Application/Profiles/RemoteControl)).

## Prøv uden konto {#try-it-without-an-account}

På forsiden af [mocpilot.com](https://mocpilot.com) har hver editor (Logikblokke og Hurtige forbindelser) en knap **Prøv demo**, der åbner en demoprofil. Demoen kræver hverken konto eller hubs. Du kan prøve alle temaer og specialkontroller i demoen; intet bliver gemt.

## Rediger dine egne profiler {#edit-your-own-profiles}

1. Log ind på [mocpilot.com](https://mocpilot.com) med din MOCPilot-konto.
2. Åbn dine profiler, og klik på **Rediger** ved en af dem.
3. Skift hubs, dashboard eller program, præcis som i appen.
4. Luk profilen (knappen Hjem). Editoren gemmer profilen og uploader den, og ændringen når frem til appen på dine enheder via [synkronisering](/docs/Application/Account/Sync).

Bemærk:

- Du kan kun redigere profiler på den konto, du er logget ind med. Ellers ser du "Denne profil er ikke på din konto" og knappen **Tilbage til webstedet**.
- Dine køb og MocPilot Pro virker i browseren præcis som i appen.
- I en browser på en computer er dashboardet et flydende panel, som du kan trække og ændre størrelse på.
- Temaer downloades igen ved hvert besøg (ca. 15 MB), så første åbning kan tage et øjeblik.
- Import og eksport af `.dat`-filer er ikke tilgængelig i browseren; brug appen.

## Kør en profil {#run-a-profile}

**Kør** i webeditoren kører profilen i browseren: alle blokke og rækker virker undtagen Bluetooth, hvilket er godt til at teste logikken, monitorerne og dashboardet. Når en hubenhed er parret (MocPilot Pro, se nedenfor), starter **Kør** i stedet profilen på hubenheden.

## Fjernstyring {#remote-control}

Med [MocPilot Pro](/docs/Application/Account/Pro) kan webeditoren være **fjernbetjeningen**: MOCPilot-appen på en telefon, tablet eller computer ved siden af modellen (**hubenheden**) forbinder hubbene og kører profilen, og browsersiden styrer den. Tryk på **Fjernstyring** i profilens topbjælke og derefter på **Vis koden**, og på hubenheden trykker du på **Forbind en fjernbetjening** på siden **Mine profiler** og scanner koden. Se [Fjernstyring](/docs/Application/Profiles/RemoteControl).
