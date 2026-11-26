---
id: InputBlocks
title: Inputblokke
description: "Oversigt over alle input i Hurtige forbindelser: dashboardets kontroller og deres kanaler, køretøjet, spilcontrolleren samt hubbens knapper og sensorer."
---

import Screenshot from '@site/src/components/Screenshot';

# Inputblokke {#input-blocks}

Hver række starter med et input. Fanen **Input** i paletten viser de blokke, din profil kan bruge lige nu: én blok for hver kontrol på dashboardet (én pr. kanal for kontroller med flere kanaler), blokkene **Køretøj**, blokken **Spilcontroller** og én **Hub**-blok for hver hub. Sådan bruger du dem: [Input](/docs/Application/Links/Inputs).

Hvert input sender et af to signaler videre i rækken:

- **værdi**: et tal fra −1 til 1 (0…1 for kontroller uden negativ side);
- **til/fra**: 1 eller 0.

Behandlingsblokke og handlinger accepterer kun de signaler, de kan arbejde med; se [Behandlingsblokke](/docs/Application/Links/Blocks/ProcessingBlocks).

## Controller {#src-controller}

En kontrol fra dit dashboard, vist med sit navn (**JOY1**, **SLDR1**, **BTN2**…).

- **Controller**: enhver af de kontroller på dashboardet, der er nævnt nedenfor. Monitorer er output, ikke input.
- **Kanal**: hvad kontrollen giver, for kontroller med flere kanaler. Paletten tilbyder én blok pr. kanal.

Rattet, pedalerne, gearstangen, håndbremsen, blinklysene, fordelergearkassen og køreregulatoren er beskrevet under [Særlige kontroller](/docs/Application/Dashboard/SpecialControls).

Fjernes kontrollen fra dashboardet, melder rækken »Vælg en dashboardcontroller«. Findes kanalen ikke længere, melder den »Vælg, hvad … giver« (for et joystick: »… bevæger sig ikke langs denne akse«).

### Joystick {#controller-joystick}

- **Kanal**: **X-akse** eller **Y-akse**. Et joystick, der er sat til **Kun vandret (X)** eller **Kun lodret (Y)**, tilbyder kun den akse.
- Giver: værdi −1…1, 0 i midten.

### Skyder, lodret skyder {#controller-slider}

- Ingen kanal.
- Giver: værdi 0…1 eller −1…1, når **Negative værdier** er slået til.

### Køreregulator {#controller-train}

Køreregulatoren (særlig kontrol) fungerer som en skyder i Hurtige forbindelser.

- Ingen kanal.
- Giver: værdi −1…1: håndtagets position som andel af alle trin, negativ når vendeskifteren står på bak, 0 i neutral.

### Drejeknap {#controller-knob}

Drejeknappen i de betalte temaer fungerer som en skyder i Hurtige forbindelser.

- Ingen kanal.
- Giver: værdi 0…1 eller −1…1, når knappen har sit nulpunkt i midten.

### Rat {#controller-wheel}

- **Kanal**: **Styrevinkel** (standard) eller **Horn**.
- Styrevinkel giver: værdi −1…1, 0 lige ud.
- Horn giver: værdi 1, mens hornfeltet holdes nede, ellers 0.

### Pedaler {#controller-pedals}

- **Kanal**: **Speederpedal** (standard) eller **Bremsepedal**.
- Giver: værdi 0…1 – hvor langt pedalen er trådt ned.
- Pedalerne giver pedalens rå position. Til en bil, der selv accelererer, sænker farten og bakker, bruger du inputtet [Køretøj](#src-vehicle).

### Gearstang {#controller-gear}

Den manuelle og den automatiske gearstang (særlig kontrol).

- **Kanal**: **Gear** (standard) eller **Retning (R − / frem +)**.
- Gear, manuel gearkasse: det valgte gear divideret med antallet af fremadgående gear: højeste gear 1, neutral 0, bakgear negativt. Med 4 gear giver 2. gear 0,5.
- Gear, automatgear: det samme som Retning.
- Retning giver: −1 i R, 0 i N (og P), +1 i alle fremadgående gear eller D.

### Håndbremse {#controller-handbrake}

- **Kanal**: **Håndbremse låst** (standard) eller **Håndbremsekraft**.
- Håndbremse låst giver: til/fra – til, mens håndtaget er låst.
- Håndbremsekraft giver: værdi 0…1 – hvor langt håndtaget er trukket.

### Blinklys {#controller-turnsignals}

Blinklysarmen (særlig kontrol).

- **Kanal**: **Blinklys (venstre − / højre +)** (standard), **Venstre blinklys**, **Højre blinklys** eller **Lys**.
- Blinklys giver: værdi −1 (venstre), 0 (fra) eller +1 (højre).
- Venstre blinklys og Højre blinklys giver: værdi 1, mens det pågældende blinklys er tændt (blinker i takt med lampen, når kontrollens blink er slået til), ellers 0.
- Lys giver: værdi 1, mens lyset er tændt, ellers 0.

### Fordelergearkasse {#controller-transfercase}

[Fordelergearkassen](/docs/Application/Dashboard/SpecialControls#transfer-case) (særlig kontrol).

- **Kanal**: **Firehjulstræk** (standard), **Lavgear**, **Fordifferentialespærre**, **Centerdifferentialespærre** eller **Bagdifferentialespærre**.
- Firehjulstræk giver: til/fra, til i 4H og 4L.
- Lavgear giver: til/fra, til i 4L.
- Hver differentialespærre giver: til/fra, til, mens den pågældende spærre er slået til.
- Selve positionen (2H, 4H, N, 4L) går til simulatoren via indstillingen **Fordelergearkasse** i inputtet [Køretøj](#src-vehicle).

### Retningspad {#controller-dpad}

- **Kanal**: **Op / ned** eller **Venstre / højre**.
- Giver: værdi +1 (op eller højre), −1 (ned eller venstre) eller 0.

### Knap {#controller-button}

- Ingen kanal.
- Giver: til/fra – til, mens den holdes nede.

### Kontakt {#controller-switch}

- Ingen kanal.
- Giver: til/fra.

### Trinkontakt {#controller-stepper}

- Ingen kanal.
- Giver: værdi: det aktuelle trin divideret med **Antal trin**, så det sidste trin er 1 (−1 for det sidste negative trin).

## Køretøj {#src-vehicle}

En simuleret bil, der styres af dashboardets pedaler, gearstang, håndbremse og fordelergearkasse: Den accelererer, bremser, ruller frit og bakker som et rigtigt køretøj, og rækken får dens hastighed eller motoromdrejninger. Paletten viser Køretøj-blokke, når dashboardet har pedaler, en gearstang eller en håndbremse – én blok pr. output, allerede koblet til den første kontrol af hver slags.

- **Pedaler**: de pedaler på dashboardet, der styrer køretøjet (påkrævet).
- **Gearstang**: **ingen** eller en gearstang på dashboardet. Uden gearstang bakker køretøjet, når du holder bremsepedalen nede i stilstand.
- **Håndbremse**: **ingen** eller en håndbremse på dashboardet.
- **Fordelergearkasse**: **ingen** eller en fordelergearkasse på dashboardet. I 2H og 4H kører køretøjet som uden fordelergearkasse, i N kører det ikke (det triller), i 4L er farten begrænset til 40 %.
- **Køretøjstype**: **Bil** (standard), **Terrængående køretøj**, **Sportsvogn** eller **Lastbil**. Typerne adskiller sig i inerti og hastighed ved bakning; lastbilen har desuden trykluftbremse.
- **Output**:
  - **Hastighed** (standard): værdi −1…1, negativ ved bakning;
  - **Motoromdrejninger (rpm)**: værdi 0…1;
  - **Bremser**: til/fra – til, mens køretøjet bremser;
  - **På håndbremsen**: til/fra.

Problemer: »Vælg køretøjets pedaler«, »… er ikke på dashboardet«.

<Screenshot name="links-vehicle-settings" alt="Indstillinger for en Køretøj-inputblok" width={900} />

## Spilcontroller {#src-gamepad}

Spilcontrolleren, der er forbundet til din enhed. Blokken findes kun i paletten, mens **Aktivér gamepad-blokke** er slået til (siden **Spilcontroller** i den øverste bjælke); ellers melder rækken »Slå spilcontrollerblokke til på siden Spilcontroller (øverste bjælke)«.

- **Input** (standard **Venstre stick Y**). Betegnelserne følger **Gamepad-knaplayout** (Xbox / PlayStation):
  - **Venstre stick Y**, **Venstre stick X**, **Højre stick Y**, **Højre stick X**: værdi −1…1;
  - **RT** / **R2**, **LT** / **L2** (aftrækkere): værdi;
  - **A**, **B**, **X**, **Y** / **Kryds**, **Cirkel**, **Firkant**, **Trekant**: til/fra;
  - **LB** / **L1**, **RB** / **R1** (skulderknapper): til/fra;
  - **Op**, **Ned**, **Venstre**, **Højre** (retningspad): til/fra.

## Hub {#src-hub}

Hubbens egen knap eller en sensor: på hubben eller på en af dens porte. Der er ét Hub-input for hver hub i profilen, undtagen Mould King-hubs, som kun modtager kommandoer.

- **Hub**: en hub i profilen.
- **Knap eller sensor**: kun det, denne hub kan rapportere (se listen nedenfor).
- **Port**: for sensorer på en port (motorværdier, portsensorer).
- **Hubbens orientering**: for hældning og acceleration på hubs, hvor den kan ændres: **Behold** (standard) eller hvordan hubben er monteret i modellen.

En sensorværdi sendes videre i rækken divideret med sin fulde skala og begrænset til −1…1: Et batteri på 50 % giver 0,5. En tekst-**Monitor** lige efter sensoren viser den rigtige værdi med enhed.

| Knap eller sensor | Signal | Enhed, fuld skala | Hubs |
|---|---|---|---|
| **Knap 1, 2…** | til/fra | | hubs med en knap; knapperne på LEGO® Powered Up-fjernbetjeningen |
| **Batteri** | værdi | %, 100 | hubs, der rapporterer det |
| **Batterispænding** | værdi | V, 12 | hubs, der rapporterer det |
| **Udgangsspænding** | værdi | V, 12 | BuWizz 2.0 |
| **Temperatur** | værdi | °C, 100 | hubs, der rapporterer det |
| **Hældning pitch** | værdi | °, 90 | hubs med hældningssensor |
| **Hældning roll** | værdi | °, 180 | hubs med hældningssensor |
| **Hældning gir** | værdi | °, 180 | hubs med giraksen |
| **Acceleration X / Y / Z** | værdi | m/s², 19,6 | hubs med accelerometer |
| **Rotationshastighed X / Y / Z** | værdi | °/s, 360 | hubs med gyroskop: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime |
| **Hubstrøm** | værdi | mA, 3000 | Technic Hub |
| **Motorhastighed** | værdi | %, 100 | port; alle hubs med porte |
| **Motorvinkel** | værdi | °, 360 (relativ) | port; motorer med encoder; ikke SBrick, BuWizz 2.0, WeDo 2.0 |
| **Motorposition** | værdi | °, 180 (absolut) | port; vinkelmotorer |
| **Motoreffekt** | værdi | %, 100 | port; Robot Inventor |
| **Motorstrøm** | værdi | A, 3 | port; BuWizz 2.0, BuWizz 3.0 Pro |
| **Afstandssensor** | værdi | 250 | port; ikke SBrick eller BuWizz |
| **Farvesensor** | værdi | farvenummer, 10 | port; ikke SBrick, BuWizz eller WeDo 2.0 |
| **Reflekteret lys**, **Omgivningslys** | værdi | %, 100 | port; ikke SBrick, BuWizz eller WeDo 2.0 |
| **Farvetone** | værdi | °, 360 | port; Technic-farvesensor eller BOOST-farve- og afstandssensor; ikke SBrick, BuWizz eller WeDo 2.0 |
| **Farvemætning**, **Farvelysstyrke** | værdi | %, 100 | port; som Farvetone |
| **Hældningssensor pitch / roll** | værdi | °, 45 | port; hældningssensor til WeDo 2.0 / BOOST; ikke SBrick eller BuWizz |
| **Effekttilstand** | værdi | 1–4, 4 | BuWizz 2.0 |
| **Forbundet** | til/fra | | alle hubs |

Når hubben er forbundet, kontrollerer MOCPilot også enheden på porten: »Port A: ingen motor her«, »Port A: motoren har ingen encoder«, »Port A: ingen afstandssensor her« og så videre.
