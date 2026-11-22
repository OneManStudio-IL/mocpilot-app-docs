---
id: FirstCarLinks
title: Din første fjernstyrede bil med Hurtige forbindelser
description: "Trin for trin: byg en fjernstyret LEGO-bil med fremdrift, servostyring og lys i Hurtige forbindelser, helt uden kode."
---

import Screenshot from '@site/src/components/Screenshot';

# Din første fjernstyrede bil med Hurtige forbindelser {#your-first-rc-car-with-quick-links}

I denne vejledning bygger du en komplet fjernstyret bil i [Hurtige forbindelser](/docs/Application/Links/LinksIntroducing): ét joystick kører og styrer, og en knap tænder og slukker lyset. Det tager ca. 15 minutter, og du skriver ingen kode.

**Det skal du bruge**

- en LEGO® Technic™ Hub (88012);
- en drivmotor på **port A**;
- en styremotor med positionssensor (encoder) på **port B**, for eksempel en Technic L- eller XL-motor eller en hvilken som helst Technic-vinkelmotor. Styringen skal have endestop: hjulene kan kun dreje et vist stykke til venstre og højre;
- LEGO®-lys på **port C** (valgfrit);
- MOCPilot på en telefon, tablet eller computer med Bluetooth.

:::note City Hub
En City Hub (88009) har kun to porte. Sæt drivmotoren på **A** og styremotoren på **B**, og spring lyset over, eller tilføj en ekstra hub til det. Alt andet fungerer på samme måde.
:::

**Resultatet**: en profil med tre rækker:

| # | Input | Behandling | Handling | Output |
|---|---|---|---|---|
| 1 | JOY1, Y-akse | Blød | Motor | Technic Hub, port A |
| 2 | JOY1, X-akse | | Servo (Auto) | Technic Hub, port B |
| 3 | BTN1 | Skift | Lys | Technic Hub, port C |

## 1. Opret profilen {#create-the-profile}

1. Gå til **Mine profiler**, og start en ny profil: på en telefon trykker du på **+** → **Ny profil**, på en tablet på **Ny profil** i overskriften, og på en computer vælger du **Fil → Ny profil**.
2. Vælg feltet **Hurtige forbindelser**.
3. Indtast et **Navn**, for eksempel "Min første bil". Billede og hashtags er valgfrie indtil videre.
4. Tryk på **Opret**. Profilen åbnes i editoren Hurtige forbindelser med én tom række.

Programtypen kan ikke ændres senere. Mere i [Opret en profil](/docs/Application/Profiles/CreateProfile).

## 2. Tilføj og forbind hubben {#add-the-hub}

1. Tryk på **Mine hubs** i editoren (**Hubs** i topbjælken på en computer).
2. Tryk på **Tilføj en ny hub** i et ledigt slot, vælg Technic Hub på listen, og tryk på **Tilføj**.
3. Tænd hubben, og tryk på dens knap. MOCPilot finder den og forbinder; hubben bliver i sit slot.
4. Hvis dialogen **Firmwareopdatering kræves** vises, så tryk på **Opdater**, og hold hubben tændt og tæt på, indtil opdateringen er færdig. Se [Opdatering af firmware](/docs/Application/Hubs/FirmwareUpdating).

Tip: åbn den forbundne hub for at se dens [hubmonitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Den viser, hvilken enhed der sidder i hver port, så du kan tjekke motorerne, før du bygger rækkerne.

Mere i [Tilføj og forbind en hub](/docs/Application/Hubs/ConnectingHubs).

## 3. Sæt kontrollerne på dashboardet {#dashboard}

1. Åbn **Dashboard**, og tryk på **+** (**Tilføj controller**; på en computer **+ Controller**).
2. I gruppen **Joysticks** vælger du **Joystick** og trykker på **Føj til dashboard**. Den hedder **JOY1**. Lad **Akseltype** stå på **Begge akser (X, Y)**: op og ned kører, venstre og højre styrer.
3. Tryk på **+** igen. Under **Knapper og kontakter** vælger du **Knap** og trykker på **Føj til dashboard**. Den hedder **BTN1**.
4. Træk joysticket til venstre side og knappen til højre side, hvor dine tommelfingre er. Tryk på en kontrol for at ændre dens størrelse (**S**, **M** eller **L**) eller dens udseende.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard med joysticket JOY1 til venstre og knappen BTN1 til højre" width={900} />

Vil du hellere køre og styre med hver sin tommelfinger? Tilføj i stedet to joysticks: **JOY1** med **Kun lodret (Y)** og **JOY2** med **Kun vandret (X)**, og brug JOY2 i styrerækken.

Mere i [Tilføj og arrangér kontroller](/docs/Application/Dashboard/ArrangingControls) og [Kontroltyper](/docs/Application/Dashboard/ControlTypes).

### Mulighed: rat og pedaler {#wheel-and-pedals}

Hvis du har [specialkontrollerne](/docs/Application/Dashboard/SpecialControls) **Rat** og **Pedaler**, kan du bruge dem i stedet for joysticket. I trin 4 bygger du række 1 af inputtet [Køretøj](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) med **Output** sat til **Hastighed** (det accelererer og bremser som en rigtig bil, så du ikke behøver Blød), og række 2 af inputtet **Rat** med kanalen **Styrevinkel**.

## 4. Byg rækkerne {#rows}

Gå tilbage til programmet. Paletten nederst har tre faner: **Input**, **Behandling** og **Output**. Hver række går fra venstre mod højre: input → behandling → handling → hub. Sådan fungerer editoren: [Introduktion til Hurtige forbindelser](/docs/Application/Links/LinksIntroducing).

### Række 1: kørsel {#row-drive}

1. Træk **JOY1** med kanalen **Y-akse** fra fanen **Input** ind i den tomme række ("Ny række: input"). En ny tom række vises under den.
2. Træk **Blød** fra fanen **Behandling** ind efter inputtet. Standardværdierne for **Acceleration (til fuld fart)** og **Deceleration (til stop)** på 0,5 s er en god start.
3. Træk **Motor** fra fanen **Output** ind efter Blød.
4. Træk outputtet **Technic Hub** ind efter Motor, og tryk på portchippen **A**.

### Række 2: styring {#row-steering}

1. Træk **JOY1** med kanalen **X-akse** ind i den næste tomme række.
2. Træk **Servo** ind fra **Output**.
3. Tryk på blokken Servo, og sæt **Kalibrering** til **Auto**.
4. Træk outputtet **Technic Hub** ind efter Servo, og tryk på **B**.

I tilstanden **Auto** drejer styremotoren til begge endestop, hver gang programmet starter; midten bliver centrum, og vandringen bliver styrevinklen. For at prøve det med det samme kan du trykke på **Kalibrer nu** i indstillingerne for Servo, mens hubben er forbundet. Hvis kalibreringen mislykkes, så tjek hubben, motoren, og at styringen virkelig har endestop.

<Screenshot name="links-servo-settings" alt="Indstillinger for en Servo-blok" width={900} />

Ingen endestop? Brug **Manuel**: drej hjulene lige med hånden, tryk på **Sæt som nul**, og vælg **Vinkel**. Se [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Række 3: lys {#row-lights}

1. Træk **BTN1** ind i den næste tomme række.
2. Træk **Skift** ind fra **Behandling**. Den gør trykknappen til en kontakt: tryk én gang for tændt, igen for slukket.
3. Træk **Lys** ind fra **Output**.
4. Træk outputtet **Technic Hub** ind efter Lys, og tryk på **C**.

<Screenshot name="tutorial-car-links-rows" alt="Bilens tre færdige rækker: kørsel, styring og lys" width={900} />

Når alle tre rækker er klar, viser knappen **Problemer** i topbjælken (lige før **Kør**) et grønt flueben. Et rødt "!" fortæller, hvor mange problemer der er tilbage; tryk på det og derefter på et problem for at springe til rækken. Se [Kørsel og løsning af problemer](/docs/Application/Links/Problems).

## 5. Kør og test {#run}

1. Sæt bilen på en stander, eller hold den, så hjulene ikke rører bordet.
2. Tryk på **Kør**. Styremotoren kalibrerer: den drejer til begge sider og vender tilbage til midten.
3. Skub joysticket op og ned: bilen kører frem og tilbage og starter og stopper blødt. Bevæg det til venstre og højre: hjulene styrer.
4. Tryk på **BTN1**: lyset tændes. Tryk igen: det slukkes.
5. Tryk på **Stop** for at vende tilbage til redigering.

Mens programmet kører, viser hver samling mellem blokkene den værdi, der passerer igennem, så du kan følge et signal fra joysticket til hubben.

<Screenshot name="links-live-values" alt="Et kørende program i Hurtige forbindelser med live-værdier på samlingerne" width={900} />

Mere i [Kør en model (Kør)](/docs/Application/Profiles/PlayMode).

## 6. Finjustér {#tune}

Tryk først på **Stop**: rækker kan ikke redigeres, mens programmet kører.

- **Kører bilen baglæns, når du skubber op?** Tilføj **Inverter** til række 1. Det samme virker for række 2, hvis hjulene styrer den forkerte vej.
- **Brummer eller kryber motoren, når joysticket er sluppet?** Tilføj **Dødzone** til række 1 før Blød. Standardværdien for **Zone** på 10 % er en god start.
- **For hurtig?** Tilføj **Begrænsning** til række 1, for eksempel med **Maksimum** 50 %.
- **For træg?** Tryk på Blød, og vælg en kortere tid eller **Øjeblikkelig**.

En god rækkefølge for en kørselsrække er *Dødzone → Begrænsning → Blød*. Alle indstillinger: [Behandlingsblokke](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Valgfrit: kør med en gamepad {#gamepad}

1. Par en gamepad i Xbox- eller PlayStation-stil med din enhed i systemets Bluetooth-indstillinger.
2. Åbn **Spilcontroller** i editoren, og slå **Aktivér gamepad-blokke** til.
3. I hver række trækker du dashboard-inputtet tilbage på paletten for at fjerne det og trækker inputtet **Spilcontroller** ind på dets plads. Sæt dets **Input**: **Venstre stick Y** for række 1, **Højre stick X** for række 2 og **A** (**Kryds** på PlayStation) for række 3.

Hver port kan kun høre til én række, så en række styrer en port enten fra dashboardet eller fra gamepad'en. Mere i [Gamepad](/docs/Application/Dashboard/Gamepad).

## Hvis noget ikke bevæger sig {#if-something-does-not-move}

1. Er hubben forbundet? Tjek **Mine hubs** og forbindelsesprikken på blokken Hub.
2. Sidder motorerne i de porte, du valgte i rækkerne?
3. Viser knappen **Problemer** et grønt flueben, og er alle rækker slået til?
4. Kører programmet?
5. Kør programmet, og hold øje med live-værdierne: hvis værdien ændrer sig ved inputtet, men motoren ikke drejer, så tjek hubben og porten.

En meddelelse som "Port B: denne enhed kan ikke fungere som servo (der kræves en motor med encoder)" betyder, at motoren på den port ikke har en encoder. Flere meddelelser og løsninger: [Kørsel og løsning af problemer](/docs/Application/Links/Problems) og [Fejlfinding](/docs/Help/Troubleshooting).

## 8. Gem og del {#save-and-share}

Der er ingen Gem-knap: profilen beholder dine ændringer. Når du er logget ind, [synkroniseres](/docs/Application/Account/Sync) den også til dine andre enheder.

- **Del som fil**: på **Mine profiler** trykker du på **Del** på profilkortet (**Del…** på en computer). Du får en `.dat`-fil, som du kan sende til en ven. Se [Administrer profiler](/docs/Application/Profiles/ManageProfiles).
- **Udgiv i kataloget**: åbn **Rediger profil**, og tryk på **Send til kataloget**. Tilføj først et billede, en beskrivelse og et hashtag. Se [Katalog og udgivelse](/docs/Application/Profiles/Catalog).

## Næste skridt {#next-steps}

- Hold øje med batteriet: tilføj et **Batteriniveau** eller en tekst-**Monitor** til dashboardet og en række *Technic Hub (Batteri) → Indikator*. Se [Indikatorer og monitorer](/docs/Application/Dashboard/Indicators).
- Byg den samme bil i Logikblokke: [Den samme bil i Logikblokke](/docs/Tutorials/FirstCarBlocks).
- Flere opskrifter: en kampvogn, en kran og et tog i [Eksempler](/docs/Application/Links/Examples).
- Giv dashboardet et nyt udseende med [temaer](/docs/Application/Themes/ThemesOverview).
