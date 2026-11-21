---
id: PlayMode
title: Kør en model (Kør)
description: "Kør en profil, styr modellen, stop den, og se, hvad der sker, når den stopper, eller en forbindelse falder ud."
---

import Screenshot from '@site/src/components/Screenshot';

# Kør en model (Kør) {#driving-a-model-run}

En profil har to tilstande:

- **Rediger**: du ændrer hubs, dashboard og program.
- **Kør**: programmet kører, og dashboardets kontroller styrer modellen.

## Start og stop {#start-and-stop}

Tryk på **Kør** (▶) i editoren eller på dashboardet (computer: **Program → Kør**, ⌘R / Ctrl+R). Tryk på **Stop** (■) for at vende tilbage til redigering (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Dashboardet, mens programmet kører" width={900} />

Mens programmet kører:

- er gitterprikkerne på dashboardet og knapperne til tilføjelse og indstillinger skjult;
- reagerer kontrollerne på berøring og på gamepad'en;
- viser monitorer og indikatorer live-værdier;
- viser editoren i Hurtige forbindelser live-værdier mellem blokkene i hver række, og rækkerne kan ikke redigeres;
- kan programmet i Logikblokke stadig redigeres, så du kan finjustere det live.

## På en telefon eller tablet {#on-a-phone-or-tablet}

Når du åbner en profil, skifter en telefon til liggende format og fuld skærm, så dashboardet får hele skærmen. Slå **Hold skærmen tændt** til i Indstillinger, så skærmen ikke bliver mørk, mens du kører. Se [Indstillinger](/docs/Application/Account/Settings).

## Før du trykker på Kør {#before-you-press-run}

- Tænd hubbene, og tjek under **Mine hubs**, at de er forbundet (mærket på knappen viser, hvor mange der er).
- I Hurtige forbindelser skal du tjekke knappen **Problemer**: et rødt "!" betyder, at nogle rækker ikke kan køre. Se [Kørsel og løsning af problemer](/docs/Application/Links/Problems).
- Første gang skal du sætte modellen på en stander eller holde den væk fra bordkanten.

## Når programmet stopper {#when-the-program-stops}

- **Hurtige forbindelser** stopper alle motorer, som rækkerne bruger, og nulstiller outputtene (LED-matrixen ryddes, portfarver og sensorlys slukkes).
- **Logikblokke** stopper hubbens porte, hvis **Stop hub-porte, når programmet stopper** er slået til i Editorindstillinger.
- Hvis en hub afbryder, mens programmet kører, stopper dens motorer. I Hurtige forbindelser kan et hubinput "Forbundet" vise det på dashboardet.
- Ved fjernstyring stopper hubenheden profilen og alle motorer, hvis forbindelsen mellem fjernbetjeningen og hubenheden er væk i ca. 4 sekunder.

## Kør fra en anden enhed {#drive-from-another-device}

Med [MocPilot Pro](/docs/Application/Account/Pro) kan du køre profilen på én enhed (hubenheden, som forbinder hubbene) og styre den fra en anden enhed eller fra webeditoren. Se [Fjernstyring](/docs/Application/Profiles/RemoteControl).
