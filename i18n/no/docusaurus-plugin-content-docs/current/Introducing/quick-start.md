---
id: QuickStart
title: Hurtigstart
description: "Installer MOCPilot, logg inn, opprett din første profil og kjør en modell på noen få minutter."
---

import Screenshot from '@site/src/components/Screenshot';

# Hurtigstart {#quick-start}

Denne veiledningen tar deg fra installasjon av appen til du kjører din første modell. Du trenger en støttet hub med en motor; se [Støttede enheter](/docs/Introducing/SupportedDevices).

## 1. Installer appen {#1-install-the-app}

MOCPilot finnes i App Store (iPhone, iPad, Mac), Google Play (Android) og Microsoft Store (Windows). Du finner lenkene på [mocpilot.com](https://mocpilot.com).

## 2. Logg inn eller fortsett uten konto {#2-sign-in-or-continue-without-an-account}

Første gang du starter appen, blir du bedt om å logge inn. Bruk e-post eller brukernavn og passord, Google eller Apple-ID, eller opprett en ny konto.

<Screenshot name="sign-in" alt="Påloggingsskjermen i MOCPilot" width={900} />

Vi anbefaler en konto:

- profilene og innstillingene dine lagres på serveren og synkroniseres mellom enhetene dine;
- du kan få dataene tilbake hvis du bytter eller mister en enhet;
- kjøp og MocPilot Pro fungerer på alle enhetene dine.

**Fortsett uten konto** fungerer også, men da blir alt bare liggende på denne enheten og går tapt hvis du fjerner appen. Du kan logge inn senere under **Innstillinger → Konto**. Se [Konto](/docs/Application/Account/UserAccount).

## 3. Finn frem i appen {#3-find-your-way-around}

- På en **telefon** har bunnlinjen **Profiler**, **Innstillinger** og **Hjelp** (og **Varsler** når du er logget inn).
- På et **nettbrett** ligger de samme delene, **Profilkatalog** og kontoen din i sidelinjen.
- På en **datamaskin** bruker du topplinjen: menyer til venstre; Konto, Varsler og Innstillinger til høyre.

Se [Telefon, nettbrett og datamaskin](/docs/Introducing/Layouts).

## 4. Opprett en profil {#4-create-a-profile}

1. På siden **Mine profiler** trykker du **+** → **Ny profil** (telefon), eller velger **Ny profil** (nettbrett og datamaskin, eller **Fil → Ny profil**).
2. Velg **programtype**:
   - **Hurtigkoblinger** hvis du vil kjøre en modell uten kode. Best for et første forsøk.
   - **Logikkblokker** hvis du vil ha hendelser, løkker, betingelser og sensorer.
3. Skriv inn et **namn** og legg eventuelt til et bilde.
4. Trykk **Opprett**.

<Screenshot name="create-profile-tiles" alt="Siden Ny profil med flisene Logikkblokker og Hurtigkoblinger" width={900} />

Profilen åpnes i editoren. Mer i [Opprett en profil](/docs/Application/Profiles/CreateProfile).

:::tip Vil du ha en ferdig modell?
Åpne **Profilkatalog** (**Søk på nett** på profilsiden) og installer en offisiell profil for settet ditt. Se [Katalog og publisering](/docs/Application/Profiles/Catalog).
:::

## 5. Legg til huben {#5-add-your-hub}

1. Åpne **Mine hubber** i editoren.
2. Trykk **Legg til en ny hub** i en ledig plass, velg hubmodellen og trykk **Legg til**.
3. Slå på huben, trykk på knappen på den og vent til MOCPilot finner den.

<Screenshot name="my-hubs" alt="Siden Mine hubber med hubplasser" width={900} />

Hvis appen ber om en fastvareoppdatering, følger du [Oppdatere fastvaren](/docs/Application/Hubs/FirmwareUpdating). Mer i [Legg til og koble til en hub](/docs/Application/Hubs/ConnectingHubs).

## 6. Plasser kontroller på dashboardet {#6-place-controls-on-the-dashboard}

1. Åpne **Dashboard**.
2. Trykk **+** (**Legg til kontroller**), velg en **Joystick** og trykk **Legg til på dashboard**.
3. Dra den dit du vil ha den. Trykk på den for å endre størrelse, farge eller oppførsel.

<Screenshot name="controller-palette" alt="Paletten Legg til kontroller med joysticken valgt" width={900} />

Se [Legg til og ordne kontroller](/docs/Application/Dashboard/ArrangingControls).

## 7. Koble kontrollen til en motor {#7-connect-the-control-to-a-motor}

**Hurtigkoblinger:** dra joystick-inngangen (for eksempel *JOY1 Y-akse*) fra **Innganger** til den tomme raden, legg til handlingen **Motor** og utgangen **Hub** fra **Utganger**, og trykk så på porten motoren er koblet til. Raden er klar når den ikke har noen rød ramme. Se [Hurtigkoblinger](/docs/Application/Links/LinksIntroducing).

**Logikkblokker:** legg til en *når programmet starter*-blokk, en *gjenta alltid*-løkke og en *sett hastighet til*-blokk som tar verdien fra joysticken. Se [Logikkblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) og [eksemplene](/docs/Application/BlockBuilder/Examples).

## 8. Trykk Kjør {#8-press-run}

Trykk **Kjør** (▶). Beveg joysticken, så går motoren. Trykk **Stopp** for å gå tilbake til redigering.

Det var det. Videre:

- Lær alle [kontrolltypene](/docs/Application/Dashboard/ControlTypes).
- Gi dashboardet et nytt utseende med [temaer](/docs/Application/Themes/ThemesOverview).
- Koble til en [spillkontroller](/docs/Application/Dashboard/Gamepad).
- Hvis noe ikke fungerer, se [Feilsøking](/docs/Help/Troubleshooting).
