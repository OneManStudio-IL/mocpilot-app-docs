---
id: WebEditor
title: Webeditor
description: "Rediger MOCPilot-profilene dine i nettleseren på mocpilot.com og kjør modellen via appen på en annen enhet."
---

import Screenshot from '@site/src/components/Screenshot';

# Webeditor på mocpilot.com {#web-editor-on-mocpilotcom}

Webeditoren er MOCPilot som kjører i nettleseren. Det er den samme appen med de samme editorene, dashboardet og temaene, så alt i denne dokumentasjonen gjelder også for den.

Nettlesere kan ikke kommunisere med Bluetooth-hubber, så webeditoren er til **redigering**. For å teste en profil kjører du den i nettleseren uten hubber; for å kjøre modellen lar du MOCPilot-appen på en telefon, et nettbrett eller en datamaskin koble til hubbene (se [Fjernstyring](/docs/Application/Profiles/RemoteControl)).

## Prøv uten konto {#try-it-without-an-account}

På forsiden av [mocpilot.com](https://mocpilot.com) har hver editor (Logikkblokker og Hurtigkoblinger) en **Prøv demo**-knapp som åpner en demoprofil. Demoen krever verken konto eller hubber. Du kan prøve alle temaer og spesialkontroller i demoen; ingenting blir lagret.

## Rediger dine egne profiler {#edit-your-own-profiles}

1. Logg inn på [mocpilot.com](https://mocpilot.com) med MOCPilot-kontoen din.
2. Åpne profilene dine og klikk **Rediger** på en av dem.
3. Endre hubbene, dashboardet eller programmet, akkurat som i appen.
4. Lukk profilen (Hjem-knappen). Editoren lagrer profilen og laster den opp, og endringen når appen på enhetene dine gjennom [synkronisering](/docs/Application/Account/Sync).

Merknader:

- Du kan bare redigere profiler i kontoen du er logget inn med. Ellers ser du «Denne profilen er ikke i kontoen din» og en **Tilbake til nettstedet**-knapp.
- Kjøpene dine og MocPilot Pro fungerer i nettleseren akkurat som i appen.
- I en nettleser på datamaskin er dashboardet et flytende panel du kan dra og endre størrelse på.
- Temaer lastes ned på nytt ved hvert besøk (rundt 15 MB), så første åpning kan ta litt tid.
- Import og eksport av `.dat`-filer er ikke tilgjengelig i nettleseren; bruk appen.

## Kjør en profil {#run-a-profile}

**Kjør** i webeditoren kjører profilen i nettleseren: alle blokker og rader fungerer unntatt Bluetooth, noe som er fint for å teste logikken, monitorene og dashboardet. Når en hubenhet er paret (MocPilot Pro, se nedenfor), starter **Kjør** profilen på hubenheten i stedet.

## Fjernstyring {#remote-control}

Med [MocPilot Pro](/docs/Application/Account/Pro) kan webeditoren være **fjernkontrollen**: MOCPilot-appen på en telefon, et nettbrett eller en datamaskin ved siden av modellen (**hubenheten**) kobler til hubbene og kjører profilen, og nettsiden styrer den. Trykk **Fjernstyring** i profilens topplinje og deretter **Vis koden**, og trykk **Koble til en fjernkontroll** på siden **Mine profiler** på hubenheten og skann koden. Se [Fjernstyring](/docs/Application/Profiles/RemoteControl).
