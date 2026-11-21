---
id: FirstCarLinks
title: Din første radiostyrte bil med Hurtigkoblinger
description: "Steg for steg: bygg en fjernstyrt LEGO-bil med fremdrift, servostyring og lys i Hurtigkoblinger, helt uten kode."
---

import Screenshot from '@site/src/components/Screenshot';

# Din første radiostyrte bil med Hurtigkoblinger {#your-first-rc-car-with-quick-links}

I denne veiledningen bygger du en komplett fjernstyrt bil i [Hurtigkoblinger](/docs/Application/Links/LinksIntroducing): én joystick kjører og styrer, og en knapp slår lysene av og på. Det tar rundt 15 minutter, og du skriver ingen kode.

**Dette trenger du**

- en LEGO® Technic™ Hub (88012);
- en drivmotor på **port A**;
- en styremotor med posisjonssensor (enkoder) på **port B**, for eksempel en Technic L- eller XL-motor eller en hvilken som helst Technic-vinkelmotor. Styringen må ha endestopp: hjulene kan bare svinge et visst stykke til venstre og høyre;
- LEGO®-lys på **port C** (valgfritt);
- MOCPilot på en telefon, et nettbrett eller en datamaskin med Bluetooth.

:::note City Hub
En City Hub (88009) har bare to porter. Sett drivmotoren på **A** og styremotoren på **B**, og hopp over lysene, eller legg til en hub nummer to for dem. Alt annet fungerer likt.
:::

**Resultatet**: en profil med tre rader:

| # | Inngang | Behandling | Handling | Utgang |
|---|---|---|---|---|
| 1 | JOY1, Y-akse | Myk | Motor | Technic Hub, port A |
| 2 | JOY1, X-akse | | Servo (Auto) | Technic Hub, port B |
| 3 | BTN1 | Veksle | Lys | Technic Hub, port C |

## 1. Opprett profilen {#create-the-profile}

1. Gå til **Mine profiler** og start en ny profil: på en telefon trykker du **+** → **Ny profil**, på et nettbrett trykker du **Ny profil** øverst, på en datamaskin velger du **Fil → Ny profil**.
2. Velg flisen **Hurtigkoblinger**.
3. Skriv inn et **Namn**, for eksempel «Min første bil». Bilde og emneknagger er valgfritt foreløpig.
4. Trykk **Opprett**. Profilen åpnes i Hurtigkoblinger-editoren med én tom rad.

Programtypen kan ikke endres senere. Mer i [Opprett en profil](/docs/Application/Profiles/CreateProfile).

## 2. Legg til og koble til huben {#add-the-hub}

1. Trykk **Mine hubber** i editoren.
2. Trykk **Legg til en ny hub** i en ledig plass, velg Technic Hub i listen og trykk **Legg til**.
3. Slå på huben og trykk på knappen på den. MOCPilot finner den og kobler til; huben blir liggende i plassen.
4. Hvis dialogen **Fastvareoppdatering kreves** vises, trykker du **Oppdater** og holder huben påslått og i nærheten til oppdateringen er ferdig. Se [Oppdatere fastvaren](/docs/Application/Hubs/FirmwareUpdating).

Tips: åpne den tilkoblede huben for å se [hubmonitoren](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Den viser hvilken enhet som er koblet til hver port, slik at du kan sjekke motorene før du bygger radene.

Mer i [Legg til og koble til en hub](/docs/Application/Hubs/ConnectingHubs).

## 3. Sett kontrollene på dashboardet {#dashboard}

1. Åpne **Dashboard** og trykk **+** (**Legg til kontroller**).
2. I gruppen **Joysticks** velger du **Joystick** og trykker **Legg til på dashboard**. Den får namnet **JOY1**. La **Aksetype** stå på **Begge akser (X, Y)**: opp og ned kjører, venstre og høyre styrer.
3. Trykk **+** igjen. Under **Knappar og brytarar** velger du **Knapp** og trykker **Legg til på dashboard**. Den får namnet **BTN1**.
4. Dra joysticken til venstre side og knappen til høyre side, der tomlene dine er. Trykk på en kontroll for å endre størrelsen (**S**, **M** eller **L**) eller utseendet.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard med joysticken JOY1 til venstre og knappen BTN1 til høyre" width={900} />

Vil du heller kjøre og styre med hver sin tommel? Legg til to joysticker i stedet: **JOY1** med **Kun vertikal (Y)** og **JOY2** med **Kun horisontal (X)**, og bruk JOY2 i styreraden.

Mer i [Legg til og ordne kontroller](/docs/Application/Dashboard/ArrangingControls) og [Kontrolltyper](/docs/Application/Dashboard/ControlTypes).

### Alternativ: ratt og pedaler {#wheel-and-pedals}

Hvis du har [spesialkontrollene](/docs/Application/Dashboard/SpecialControls) **Ratt** og **Pedaler**, kan du bruke dem i stedet for joysticken. I steg 4 bygger du rad 1 fra inngangen [Kjøretøy](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) med **Utgang** satt til **Hastighet** (den akselererer og bremser som en ekte bil, så du trenger ikke Myk), og rad 2 fra inngangen **Ratt** med kanalen **Rattvinkel**.

## 4. Bygg radene {#rows}

Gå tilbake til programmet. Paletten nederst har tre faner: **Innganger**, **Behandling** og **Utganger**. Hver rad går fra venstre mot høyre: inngang → behandling → handling → hub. Slik fungerer editoren: [Introduksjon til Hurtigkoblinger](/docs/Application/Links/LinksIntroducing).

### Rad 1: fremdrift {#row-drive}

1. Under **Innganger** drar du **JOY1** med kanalen **Y-akse** til den tomme raden («Ny rad: inngang»). En ny tom rad dukker opp under den.
2. Under **Behandling** drar du **Myk** etter inngangen. Standardverdiene **Akselerasjon (til full fart)** og **Retardasjon (til stopp)** på 0,5 s er en god start.
3. Under **Utganger** drar du **Motor** etter Myk.
4. Dra utgangen **Technic Hub** etter Motor og trykk på portbrikken **A**.

### Rad 2: styring {#row-steering}

1. Dra **JOY1** med kanalen **X-akse** til neste tomme rad.
2. Dra **Servo** fra **Utganger**.
3. Trykk på Servo-blokken og sett **Kalibrering** til **Auto**.
4. Dra utgangen **Technic Hub** etter Servo og trykk **B**.

I **Auto**-modus dreier styremotoren til begge endestoppene hver gang programmet starter; midten blir senter, og vandringen blir styrevinkelen. For å prøve det med en gang trykker du **Kalibrer nå** i Servo-innstillingene mens huben er tilkoblet. Hvis kalibreringen mislykkes, sjekker du huben, motoren og at styringen virkelig har endestopp.

<Screenshot name="links-servo-settings" alt="Innstillingene for en Servo-blokk" width={900} />

Ingen endestopp? Bruk **Manuell**: sett hjulene rett med hånden, trykk **Sett som null** og velg **Vinkel**. Se [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Rad 3: lys {#row-lights}

1. Dra **BTN1** til neste tomme rad.
2. Dra **Veksle** fra **Behandling**. Den gjør trykknappen om til en bryter: trykk én gang for på, en gang til for av.
3. Dra **Lys** fra **Utganger**.
4. Dra utgangen **Technic Hub** etter Lys og trykk **C**.

<Screenshot name="tutorial-car-links-rows" alt="De tre ferdige radene for bilen: fremdrift, styring og lys" width={900} />

Når alle tre radene er klare, viser **Problemer**-knappen i topplinjen en grønn hake. Et rødt «!» forteller hvor mange problemer som gjenstår; trykk på det og deretter på et problem for å hoppe til raden. Se [Kjøre og rette problemer](/docs/Application/Links/Problems).

## 5. Kjør og test {#run}

1. Sett bilen på et stativ eller hold den slik at hjulene ikke berører bordet.
2. Trykk **Kjør**. Styremotoren kalibreres: den dreier til begge sider og kommer tilbake til midten.
3. Skyv joysticken opp og ned: bilen kjører forover og bakover og starter og stopper mykt. Beveg den til venstre og høyre: hjulene svinger.
4. Trykk **BTN1**: lysene slås på. Trykk igjen: de slås av.
5. Trykk **Stopp** for å gå tilbake til redigering.

Mens programmet kjører, viser hvert ledd mellom blokkene verdien som går gjennom det, så du kan følge et signal fra joysticken til huben.

<Screenshot name="links-live-values" alt="Et Hurtigkoblinger-program som kjører, med sanntidsverdier på leddene" width={900} />

Mer i [Kjøre en modell (Kjør)](/docs/Application/Profiles/PlayMode).

## 6. Finjuster {#tune}

Trykk **Stopp** først: rader kan ikke redigeres mens programmet kjører.

- **Kjører bilen bakover når du skyver opp?** Legg til **Inverter** i rad 1. Det samme fungerer for rad 2 hvis hjulene svinger feil vei.
- **Durer eller kryper motoren når joysticken er sluppet?** Legg til **Dødsone** i rad 1, før Myk. Standardverdien for **Sone** på 10 % er en god start.
- **For fort?** Legg til **Begrens** i rad 1, for eksempel med **Maksimum** 50 %.
- **For tregt?** Trykk på Myk og velg en kortere tid, eller **Umiddelbart**.

En god rekkefølge for en fremdriftsrad er *Dødsone → Begrens → Myk*. Alle innstillinger: [Behandlingsblokker](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Valgfritt: kjør med spillkontroller {#gamepad}

1. Par en spillkontroller av Xbox- eller PlayStation-typen med enheten din i systemets Bluetooth-innstillinger.
2. Åpne **Spillkontroller** i editoren og slå på **Aktiver gamepad-blokker**.
3. I hver rad drar du dashboardinngangen tilbake til paletten for å fjerne den, og drar inngangen **Spillkontroller** inn på plassen. Sett **Inngang**: **Venstre stikke Y** for rad 1, **Høyre stikke X** for rad 2 og **A** (**Kryss** på PlayStation) for rad 3.

Hver port kan bare høre til én rad, så en rad styrer en port enten fra dashboardet eller fra spillkontrolleren. Mer i [Spillkontroller](/docs/Application/Dashboard/Gamepad).

## Hvis noe ikke beveger seg {#if-something-does-not-move}

1. Er huben tilkoblet? Sjekk **Mine hubber** og tilkoblingsprikken på Hub-blokken.
2. Er motorene koblet til portene du valgte i radene?
3. Viser **Problemer**-knappen en grønn hake, og er hver rad slått på?
4. Kjører programmet?
5. Kjør programmet og følg med på sanntidsverdiene: hvis verdien endrer seg ved inngangen, men motoren ikke går, sjekker du huben og porten.

En melding som «Port B: denne enheten kan ikke fungere som servo (en motor med enkoder trengs)» betyr at motoren på den porten ikke har enkoder. Flere meldinger og løsninger: [Kjøre og rette problemer](/docs/Application/Links/Problems) og [Feilsøking](/docs/Help/Troubleshooting).

## 8. Lagre og del {#save-and-share}

Det finnes ingen Lagre-knapp: profilen tar vare på endringene dine. Når du er logget inn, [synkroniseres](/docs/Application/Account/Sync) den også til de andre enhetene dine.

- **Del som fil**: på **Mine profiler** trykker du **Del** på profilkortet (**Del…** på en datamaskin). Du får en `.dat`-fil du kan sende til en venn. Se [Administrer profiler](/docs/Application/Profiles/ManageProfiles).
- **Publiser i katalogen**: åpne **Rediger profil** og trykk **Send til katalogen**. Legg først til et bilde, en beskrivelse og en emneknagg. Se [Katalog og publisering](/docs/Application/Profiles/Catalog).

## Neste steg {#next-steps}

- Følg med på batteriet: legg til en **Batterinivå**- eller tekst-**Monitor** på dashboardet og en rad *Technic Hub (Batteri) → Indikator*. Se [Indikatorer og monitorer](/docs/Application/Dashboard/Indicators).
- Bygg den samme bilen i Logikkblokker: [Den samme bilen i Logikkblokker](/docs/Tutorials/FirstCarBlocks).
- Flere oppskrifter: en stridsvogn, en kran og et tog i [Eksempler](/docs/Application/Links/Examples).
- Gi dashboardet et nytt utseende med [temaer](/docs/Application/Themes/ThemesOverview).
