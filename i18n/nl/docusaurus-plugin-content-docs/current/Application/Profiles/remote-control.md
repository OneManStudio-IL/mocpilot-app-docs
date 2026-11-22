---
id: RemoteControl
title: Afstandsbediening
description: "Voer een profiel uit op de telefoon, tablet of computer bij het model en bestuur het vanaf een ander apparaat of vanuit de webeditor."
---

import Screenshot from '@site/src/components/Screenshot';

# Afstandsbediening {#remote-control}

Met de afstandsbediening bestuur je een model dat met een ander apparaat verbonden is. Het ene apparaat blijft bij het model en communiceert via Bluetooth met de hubs; het andere houd jij vast en daarvan gebruik je het dashboard. Zo bestuur je ook een model vanuit de [webeditor](/docs/Introducing/WebEditor), want browsers kunnen geen verbinding maken met hubs.

## De twee apparaten {#the-two-devices}

- Het **hub-apparaat** is de telefoon, tablet of computer bij het model. De MOCPilot-app daarop verbindt de hubs en voert het profiel uit. Er is geen account voor nodig.
- De **afstandsbediening** is het apparaat waarmee je bestuurt: de MOCPilot-app op een ander apparaat, of de webeditor op [mocpilot.com](https://mocpilot.com). Het profiel wordt op de afstandsbediening geopend, en de afstandsbediening stuurt het naar het hub-apparaat.

## Wat je nodig hebt {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) op het account waarmee op de **afstandsbediening** is ingelogd. Het hub-apparaat heeft geen account en geen Pro nodig.
- De MOCPilot-app op het hub-apparaat.
- Een internetverbinding op beide apparaten.

## Een hub-apparaat verbinden {#connect-a-hub-device}

1. Open op de afstandsbediening het profiel en druk in de bovenbalk van het profiel op **Afstandsbediening** (het pictogram van de afstandsbediening: een huisje met signaalbogen), naast **Start**. Druk in de webeditor in het paneel dat opent op **Code tonen**.

   De afstandsbediening toont een **verbindingscode**: een QR-code en 6 cijfers.
2. Open op het hub-apparaat MOCPilot en tik op de pagina **Mijn profielen** op **Afstandsbediening verbinden**. Op een Mac kun je ook **Bestand → Afstandsbediening verbinden…** kiezen.
3. Voer de code in:
   - **op een telefoon of tablet** richt je de camera op de QR-code, of tik je op **Code invoeren** en typ je de 6 cijfers;
   - **op een computer** typ je de 6 cijfers en druk je op **Verbinden**.
4. De apparaten maken verbinding. De afstandsbediening stuurt het profiel naar het hub-apparaat en start het daar, en het hub-apparaat toont de schermvullende pagina **Afstandsbediening**.

<Screenshot name="remote-control-code" alt="Het paneel Afstandsbediening in een geopend profiel met de QR-code en de 6-cijferige code" width={900} />

Over de verbindingscode:

- Hij werkt één keer en is 5 minuten geldig. Zolang de afstandsbediening hem blijft tonen, komt er een nieuwe code voor in de plaats als hij verloopt.
- Scan hem in de MOCPilot-app, niet met de camera-app van de telefoon.
- Sluit je het paneel op de afstandsbediening voordat het hub-apparaat verbinding maakt, dan wordt er niets ingesteld; druk opnieuw op **Afstandsbediening** voor een nieuwe code.

<Screenshot name="remote-connect-code-entry" alt="Het venster Afstandsbediening verbinden op een computer met het veld voor de 6 cijfers" width={900} />

## Als de apparaten verbonden zijn {#when-the-devices-are-connected}

**Op de afstandsbediening:**

- De knop **Afstandsbediening** wordt groen (op een telefoon of tablet een groene ring), en het paneel toont de naam van het hub-apparaat en een knop **Verbreken**.
- **Mijn hubs** toont de hubs van het hub-apparaat. Verbind de hubs daar zoals gewoonlijk: het hub-apparaat zoekt ernaar, dus druk op de knop van de hub als daarom wordt gevraagd.
- Het dashboard bestuurt het model.

**Op het hub-apparaat** toont de schermvullende pagina **Afstandsbediening**:

- de status, bijvoorbeeld **«Mijn auto» draait**;
- **Verbonden hubs: N** en, tijdens het zoeken, **Zoeken naar een hub: druk op de knop op de hub.**;
- een herinnering: **Houd deze app open. Dit is het hub-apparaat: het verbindt de hubs en voert het profiel uit; de afstandsbediening bestuurt het alleen.**;
- een knop **Stop**.

Het scherm van het hub-apparaat blijft aan zolang het verbonden is. Het profiel wordt niet op het hub-apparaat opgeslagen en verschijnt niet in de profiellijst daarvan.

<Screenshot name="remote-hub-device" alt="De schermvullende pagina Afstandsbediening op het hub-apparaat met de verbindingsstatus, het aantal verbonden hubs en de knop Stop" width={900} />

## Start en Stop {#run-and-stop}

- Druk op de afstandsbediening op **Stop** om het profiel op het hub-apparaat te stoppen. Het hub-apparaat stopt altijd alle motoren, ook als **Hubpoorten stoppen wanneer programma stopt** in het profiel uit staat.
- Druk op de afstandsbediening op **Start** om het weer op het hub-apparaat te starten.
- In de webeditor blijft het hub-apparaat gekoppeld voor elk profiel dat je in hetzelfde browsertabblad opent: **Start** start het profiel op het hub-apparaat. Is er geen hub-apparaat gekoppeld, dan voert **Start** het profiel in de browser uit, zonder hubs.

## Als de verbinding wegvalt {#if-the-connection-drops}

:::caution Veiligheid
Hoort het hub-apparaat 4 seconden niets van de afstandsbediening, dan stopt het het profiel en alle motoren.
:::

Daarna:

- toont het hub-apparaat **Verbinding met de afstandsbediening verbroken. Het profiel is gestopt. Wachten op de afstandsbediening…** en wacht het;
- toont de app op de afstandsbediening **De verbinding is verbroken. Opnieuw proberen…** met **Opnieuw proberen** en **Verbreken**;
- toont de webeditor **Het hub-apparaat is losgekoppeld**: “*apparaat* reageert niet meer. Het profiel erop is gestopt en de motoren zijn uitgeschakeld.” De webeditor blijft proberen opnieuw verbinding te maken; je kunt ook op **Opnieuw verbinden**, **Starten in de browser** of **Stop** drukken.

Zodra de apparaten weer verbonden zijn, controleer je de status op de afstandsbediening en druk je op **Start** als het profiel niet loopt.

## Verbinding verbreken {#disconnect}

- **Op de afstandsbediening**: druk op **Afstandsbediening** en kies **Verbreken**.
- **Op het hub-apparaat**: druk op **Stop** op de pagina **Afstandsbediening**.

In beide gevallen stoppen het profiel en de motoren, en sluit het hub-apparaat het profiel.

## Problemen oplossen {#troubleshooting}

| Melding | Waar | Wat je moet doen |
|---|---|---|
| **Afstandsbediening hoort bij MocPilot Pro** | afstandsbediening | Neem [MocPilot Pro](/docs/Application/Account/Pro) op het account van de afstandsbediening. In de browser kun je geen abonnement nemen: doe het in de app, dan werkt Pro ook in de webeditor |
| **Geen verbinding met de server** | beide | Controleer de internetverbinding en probeer het opnieuw |
| **Kan geen code van de server krijgen** | afstandsbediening | Druk op **Code tonen** om het opnieuw te proberen |
| **Verkeerde of verlopen code. Controleer de 6 cijfers op de afstandsbediening.** | hub-apparaat | Typ de 6 cijfers die de afstandsbediening op dit moment toont |
| **De code is verlopen. Toon een nieuwe code op de afstandsbediening en scan die opnieuw.** | hub-apparaat | Druk op de afstandsbediening op **Afstandsbediening** en scan de nieuwe code |
| **Dit is geen MOCPilot-code. Scan de code die de afstandsbediening toont.** | hub-apparaat | Scan de QR-code in het paneel **Afstandsbediening** van de afstandsbediening |
| **Te veel verkeerde codes. Probeer het over een paar minuten opnieuw.** | hub-apparaat | Wacht een paar minuten en voer dan de actuele code in |
| **Geef MOCPilot in de systeeminstellingen toegang tot de camera om de code te scannen.** | hub-apparaat | Sta toegang tot de camera toe in de systeeminstellingen, of tik op **Code invoeren** en typ de 6 cijfers |
| **De afstandsbediening reageert niet. Controleer of het profiel erop openstaat en of hij online is.** | hub-apparaat | Houd het profiel open op de afstandsbediening en controleer de internetverbinding ervan |
| **Deze versie van de app kan geen verbinding maken met een afstandsbediening** | beide | Werk MOCPilot bij |
| **Deze browser kan geen directe verbinding (WebRTC) openen** | webeditor | Gebruik een andere browser, bijvoorbeeld Chrome, Edge of Safari |
| **Het profiel is te groot** / **Het profiel is niet volledig aangekomen** | beide | Controleer de verbinding en druk opnieuw op **Start** |
| **Het andere apparaat kon het profiel niet opslaan** / **Het andere apparaat kon het profiel niet openen** | afstandsbediening | Druk opnieuw op **Start**; blijft het gebeuren, verbreek dan de verbinding en verbind het hub-apparaat opnieuw |
| **De verbinding met *apparaat* is verbroken** / **Verbinding met de afstandsbediening verbroken. Wachten…** | beide | Zie [Als de verbinding wegvalt](#if-the-connection-drops) |
