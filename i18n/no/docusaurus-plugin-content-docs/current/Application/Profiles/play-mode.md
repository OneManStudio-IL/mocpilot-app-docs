---
id: PlayMode
title: Kjøre en modell (Kjør)
description: "Kjør en profil, styr modellen, stopp den, og hva som skjer når den stopper eller en forbindelse brytes."
---

import Screenshot from '@site/src/components/Screenshot';

# Kjøre en modell (Kjør) {#driving-a-model-run}

En profil har to moduser:

- **Rediger**: du endrer hubbene, dashboardet og programmet.
- **Kjør**: programmet kjører, og kontrollene på dashboardet styrer modellen.

## Start og stopp {#start-and-stop}

Trykk **Kjør** (▶) helt til høyre i topplinjen i editoren; på telefon og nettbrett har dashboardet den også. På en datamaskin er **Kjør** den oransje knappen i editoren (også **Program → Kjør**, ⌘R / Ctrl+R). Trykk **Stopp** (■) for å gå tilbake til redigering (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Dashboardet mens programmet kjører" width={900} />

Mens programmet kjører:

- er rutenettprikkene på dashboardet skjult, og det samme er redigeringsknappene (på en datamaskin er de utilgjengelige);
- reagerer kontrollene på berøring og på spillkontrolleren;
- viser monitorer og indikatorer sanntidsverdier;
- viser editoren i Hurtigkoblinger sanntidsverdier mellom blokkene i hver rad, og radene kan ikke redigeres;
- kan programmet i Logikkblokker fortsatt redigeres, så du kan finjustere det mens det kjører.

## På telefon eller nettbrett {#on-a-phone-or-tablet}

Når du åpner en profil, bytter en telefon til liggende format i fullskjerm, slik at dashboardet får hele skjermen. Slå på **Hold skjermen på** i Innstillinger slik at skjermen ikke blir mørk mens du kjører. Se [Innstillinger](/docs/Application/Account/Settings).

## Før du trykker Kjør {#before-you-press-run}

- Slå på hubbene og sjekk i **Mine hubber** at de er tilkoblet (tallet på **Mine hubber**-knappen, **Hubber** på en datamaskin, viser hvor mange som er det).
- I Hurtigkoblinger sjekker du **Problemer**-knappen: et rødt «!» betyr at noen rader ikke kan kjøres. Se [Kjøre og rette problemer](/docs/Application/Links/Problems).
- Første gang setter du modellen på et stativ eller holder den unna bordkanten.

## Når programmet stopper {#when-the-program-stops}

- **Hurtigkoblinger** stopper alle motorer som radene bruker, og tilbakestiller utgangene (LED-matrisen tømmes, portfarger og sensorlys slås av).
- **Logikkblokker** stopper hubportene hvis **Stopp hubporter når programmet stopper** er slått på i Editorinnstillinger.
- Hvis en hub kobles fra mens programmet kjører, stopper motorene dens. I Hurtigkoblinger kan en «Tilkoblet»-hubinngang vise dette på dashboardet.
- Ved fjernstyring stopper hubenheten profilen og alle motorer hvis forbindelsen mellom fjernkontrollen og hubenheten er borte i rundt 4 sekunder.

## Kjør fra en annen enhet {#drive-from-another-device}

Med [MocPilot Pro](/docs/Application/Account/Pro) kan du kjøre profilen på én enhet (hubenheten, som kobler til hubbene) og styre den fra en annen enhet eller fra webeditoren. Se [Fjernstyring](/docs/Application/Profiles/RemoteControl).
