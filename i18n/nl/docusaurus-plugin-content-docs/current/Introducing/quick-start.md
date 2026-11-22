---
id: QuickStart
title: Snelstart
description: "Installeer MOCPilot, log in, maak je eerste profiel en bestuur binnen een paar minuten een model."
---

import Screenshot from '@site/src/components/Screenshot';

# Snelstart {#quick-start}

Deze handleiding neemt je mee van het installeren van de app tot het besturen van je eerste model. Je hebt een ondersteunde hub met een motor nodig; zie [Ondersteunde apparaten](/docs/Introducing/SupportedDevices).

## 1. Installeer de app {#1-install-the-app}

MOCPilot is verkrijgbaar in de App Store (iPhone, iPad, Mac), Google Play (Android) en de Microsoft Store (Windows). De links vind je op [mocpilot.com](https://mocpilot.com).

## 2. Log in of ga verder zonder account {#2-sign-in-or-continue-without-an-account}

Bij de eerste start vraagt de app je om in te loggen. Gebruik je e-mailadres of login en wachtwoord, Google of Apple ID, of maak een nieuw account aan.

<Screenshot name="sign-in" alt="Het inlogscherm van MOCPilot" width={900} />

We raden een account aan:

- je profielen en instellingen worden op de server opgeslagen en tussen je apparaten gesynchroniseerd;
- je krijgt je gegevens terug als je een apparaat vervangt of kwijtraakt;
- aankopen en MocPilot Pro werken op al je apparaten.

**Doorgaan zonder account** kan ook, maar dan blijft alles alleen op dit apparaat staan en gaat het verloren als je de app verwijdert. Je kunt later inloggen via **Instellingen → Account**. Zie [Account](/docs/Application/Account/UserAccount).

## 3. Wegwijs in de app {#3-find-your-way-around}

- Op een **telefoon** bevat de balk onderaan **Profielen**, **Instellingen** en **Help** (en **Meldingen** zodra je bent ingelogd).
- Op een **tablet** staan dezelfde onderdelen, de **Profielcatalogus** en je account in de zijbalk.
- Op een **computer** gebruik je de bovenbalk: menu's links; Account, Meldingen en Instellingen rechts.

Zie [Telefoon, tablet en desktop](/docs/Introducing/Layouts).

## 4. Maak een profiel {#4-create-a-profile}

1. Tik op de pagina **Mijn profielen** op **+** → **Nieuw profiel** (telefoon), of kies **Nieuw profiel** (tablet en computer, of **Bestand → Nieuw profiel**).
2. Kies het **programmatype**:
   - **Snelle koppelingen** als je een model zonder code wilt besturen. Het beste voor een eerste poging.
   - **Logicablokken** als je gebeurtenissen, lussen, voorwaarden en sensoren wilt gebruiken.
3. Vul een **naam** in en voeg desgewenst een afbeelding toe.
4. Tik op **Maken**.

<Screenshot name="create-profile-tiles" alt="De pagina Nieuw profiel met de tegels Logicablokken en Snelle koppelingen" width={900} />

Het profiel opent in de editor. Meer in [Een profiel maken](/docs/Application/Profiles/CreateProfile).

:::tip Liever een kant-en-klaar model?
Open de **Profielcatalogus** (**Online zoeken** op de profielenpagina) en installeer een officieel profiel voor je set. Zie [Catalogus en publiceren](/docs/Application/Profiles/Catalog).
:::

## 5. Voeg je hub toe {#5-add-your-hub}

1. Open in de editor **Mijn hubs** (**Hubs** in de bovenbalk op een computer).
2. Tik in een vrij slot op **Nieuwe hub toevoegen**, kies je hubmodel en tik op **Toevoegen**.
3. Zet de hub aan, druk op de knop ervan en wacht tot MOCPilot hem vindt.

<Screenshot name="my-hubs" alt="De pagina Mijn hubs met hubslots" width={900} />

Vraagt de app om een firmware-update, volg dan [Firmware bijwerken](/docs/Application/Hubs/FirmwareUpdating). Meer in [Een hub toevoegen en verbinden](/docs/Application/Hubs/ConnectingHubs).

## 6. Plaats bedieningselementen op het dashboard {#6-place-controls-on-the-dashboard}

1. Open **Dashboard**.
2. Tik op **+** (**Controller toevoegen**; op een computer **+ Controller**), kies een **Joystick** en tik op **Toevoegen aan dashboard**.
3. Sleep hem naar de gewenste plek. Tik erop om de grootte, kleur of werking te wijzigen.

<Screenshot name="controller-palette" alt="Het palet Controller toevoegen met de joystick geselecteerd" width={900} />

Zie [Bedieningselementen toevoegen en schikken](/docs/Application/Dashboard/ArrangingControls).

## 7. Verbind het bedieningselement met een motor {#7-connect-the-control-to-a-motor}

**Snelle koppelingen:** sleep de invoer van de joystick (bijvoorbeeld *JOY1 Y-as*) uit **Invoer** naar de lege rij, voeg de bewerking **Motor** en de uitvoer **Hub** uit **Uitvoer** toe en tik op de poort waarop je motor is aangesloten. De rij is klaar als hij geen rood kader meer heeft. Zie [Snelle koppelingen](/docs/Application/Links/LinksIntroducing).

**Logicablokken:** voeg een blok *wanneer het programma start* toe, een lus *altijd herhalen* en een blok *stel motorsnelheid in* dat de waarde van de joystick gebruikt. Zie [Logicablokken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) en de [voorbeelden](/docs/Application/BlockBuilder/Examples).

## 8. Druk op Start {#8-press-run}

Druk op **Start** (▶). Beweeg de joystick, en de motor draait. Druk op **Stop** om terug te gaan naar bewerken.

Dat was het. En nu:

- Leer alle [soorten bedieningselementen](/docs/Application/Dashboard/ControlTypes) kennen.
- Geef het dashboard een nieuwe look met [thema's](/docs/Application/Themes/ThemesOverview).
- Sluit een [gamepad](/docs/Application/Dashboard/Gamepad) aan.
- Werkt er iets niet, kijk dan bij [Problemen oplossen](/docs/Help/Troubleshooting).
