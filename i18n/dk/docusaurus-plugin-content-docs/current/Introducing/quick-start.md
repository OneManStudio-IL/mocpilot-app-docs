---
id: QuickStart
title: Hurtig start
description: "Installér MOCPilot, log ind, opret din første profil, og kør en model på få minutter."
---

import Screenshot from '@site/src/components/Screenshot';

# Hurtig start {#quick-start}

Denne guide fører dig fra installation af appen til kørsel med din første model. Du skal bruge en understøttet hub med en motor; se [Understøttede enheder](/docs/Introducing/SupportedDevices).

## 1. Installér appen {#1-install-the-app}

MOCPilot findes i App Store (iPhone, iPad, Mac), Google Play (Android) og Microsoft Store (Windows). Du finder linkene på [mocpilot.com](https://mocpilot.com).

## 2. Log ind, eller fortsæt uden konto {#2-sign-in-or-continue-without-an-account}

Første gang du starter appen, bliver du bedt om at logge ind. Brug din e-mail eller dit login og din adgangskode, Google eller Apple ID, eller opret en ny konto.

<Screenshot name="sign-in" alt="Login-skærmen i MOCPilot" width={900} />

Vi anbefaler en konto:

- dine profiler og indstillinger gemmes på serveren og synkroniseres mellem dine enheder;
- du kan få dine data tilbage, hvis du udskifter eller mister en enhed;
- køb og MocPilot Pro virker på alle dine enheder.

**Fortsæt uden konto** virker også, men så bliver alt kun på denne enhed og går tabt, hvis du fjerner appen. Du kan logge ind senere under **Indstillinger → Konto**. Se [Konto](/docs/Application/Account/UserAccount).

## 3. Find rundt i appen {#3-find-your-way-around}

- På en **telefon** har bundbjælken **Profiler**, **Indstillinger** og **Hjælp** (og **Notifikationer**, når du er logget ind).
- På en **tablet** findes de samme sektioner, **Profilkatalog** og din konto i sidebjælken.
- På en **computer** bruger du topbjælken: menuer til venstre; Konto, Notifikationer og Indstillinger til højre.

Se [Telefon, tablet og computer](/docs/Introducing/Layouts).

## 4. Opret en profil {#4-create-a-profile}

1. På siden **Mine profiler** trykker du på **+** → **Ny profil** (telefon) eller vælger **Ny profil** (tablet og computer, eller **Fil → Ny profil**).
2. Vælg **programtype**:
   - **Hurtige forbindelser**, hvis du vil køre en model uden kode. Bedst til første forsøg.
   - **Logikblokke**, hvis du vil have hændelser, løkker, betingelser og sensorer.
3. Indtast et **navn**, og tilføj eventuelt et billede.
4. Tryk på **Opret**.

<Screenshot name="create-profile-tiles" alt="Siden Ny profil med felterne Logikblokke og Hurtige forbindelser" width={900} />

Profilen åbnes i editoren. Mere i [Opret en profil](/docs/Application/Profiles/CreateProfile).

:::tip Vil du have en færdig model?
Åbn **Profilkatalog** (**Søg online** på profilsiden), og installér en officiel profil til dit sæt. Se [Katalog og udgivelse](/docs/Application/Profiles/Catalog).
:::

## 5. Tilføj din hub {#5-add-your-hub}

1. Åbn **Mine hubs** i editoren (**Hubs** i topbjælken på en computer).
2. Tryk på **Tilføj en ny hub** i et ledigt slot, vælg din hubmodel, og tryk på **Tilføj**.
3. Tænd hubben, tryk på dens knap, og vent, til MOCPilot finder den.

<Screenshot name="my-hubs" alt="Siden Mine hubs med hub-slots" width={900} />

Hvis appen beder om en firmwareopdatering, så følg [Opdatering af firmware](/docs/Application/Hubs/FirmwareUpdating). Mere i [Tilføj og forbind en hub](/docs/Application/Hubs/ConnectingHubs).

## 6. Placer kontroller på dashboardet {#6-place-controls-on-the-dashboard}

1. Åbn **Dashboard**.
2. Tryk på **+** (**Tilføj controller**; på en computer **+ Controller**), vælg en **Joystick**, og tryk på **Føj til dashboard**.
3. Træk den derhen, hvor du vil have den. Tryk på den for at ændre størrelse, farve eller adfærd.

<Screenshot name="controller-palette" alt="Paletten Tilføj controller med joysticket valgt" width={900} />

Se [Tilføj og arrangér kontroller](/docs/Application/Dashboard/ArrangingControls).

## 7. Forbind kontrollen med en motor {#7-connect-the-control-to-a-motor}

**Hurtige forbindelser:** træk joystickets input (for eksempel *JOY1 Y-akse*) fra **Input** ind i den tomme række, tilføj handlingen **Motor** og outputtet **Hub** fra **Output**, og tryk derefter på den port, din motor sidder i. Rækken er klar, når den ikke har en rød ramme. Se [Hurtige forbindelser](/docs/Application/Links/LinksIntroducing).

**Logikblokke:** tilføj en blok *når programmet starter*, en løkke *gentag altid* og en blok *sæt motorhastighed*, der bruger joystickets værdi. Se [Logikblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) og [eksemplerne](/docs/Application/BlockBuilder/Examples).

## 8. Tryk på Kør {#8-press-run}

Tryk på **Kør** (▶). Bevæg joysticket, og motoren drejer. Tryk på **Stop** for at vende tilbage til redigering.

Det var det. Næste skridt:

- Lær alle [kontroltyperne](/docs/Application/Dashboard/ControlTypes) at kende.
- Giv dashboardet et nyt udseende med [temaer](/docs/Application/Themes/ThemesOverview).
- Forbind en [gamepad](/docs/Application/Dashboard/Gamepad).
- Hvis noget ikke virker, så se [Fejlfinding](/docs/Help/Troubleshooting).
