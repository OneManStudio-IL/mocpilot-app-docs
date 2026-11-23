---
id: InputBlocks
title: Inngangsblokker
description: "Referanse for alle innganger i Hurtigkoblinger: kontroller på dashboardet og kanalene deres, kjøretøyet, spillkontrolleren, knapper og sensorer på huben."
---

import Screenshot from '@site/src/components/Screenshot';

# Inngangsblokker {#input-blocks}

Hver rad starter med en inngang. Fanen **Innganger** i paletten viser blokkene profilen din kan bruke akkurat nå: én blokk per kontroll på dashboardet (én per kanal for kontroller med flere kanaler), **Kjøretøy**-blokkene, **Spillkontroller**-blokken og én **Hub**-blokk per hub. Slik bruker du dem: [Innganger](/docs/Application/Links/Inputs).

Hver inngang sender ett av to signaler langs raden:

- **verdi**: et tall fra −1 til 1 (0…1 for kontroller som ikke har noen negativ side);
- **av/på**: 1 eller 0.

Behandlingsblokker og handlinger godtar bare signalene de kan arbeide med; se [Behandlingsblokker](/docs/Application/Links/Blocks/ProcessingBlocks).

## Kontroller {#src-controller}

En kontroll fra dashboardet, vist med navnet (**JOY1**, **SLDR1**, **BTN2**…).

- **Kontroller**: en hvilken som helst av kontrollene på dashboardet som er oppført nedenfor. Monitorer er utganger, ikke innganger.
- **Kanal**: hva kontrollen gir, for kontroller med flere kanaler. Paletten tilbyr én blokk per kanal.

Ratt, pedaler, girspak, handbrekk, blinklys, fordelingsgir og kjørekontroller er beskrevet under [Spesialkontroller](/docs/Application/Dashboard/SpecialControls).

Hvis kontrollen fjernes fra dashboardet, rapporterer raden «Velg en dashboardkontroller». Hvis kanalen ikke lenger finnes, rapporterer den «Velg hva … gir» (for en joystick: «… beveger seg ikke langs denne aksen»).

### Joystick {#controller-joystick}

- **Kanal**: **X-akse** eller **Y-akse**. En joystick som er stilt til **Bare horisontal (X)** eller **Bare vertikal (Y)**, tilbyr bare den aksen.
- Gir: verdi −1…1, 0 i midten.

### Skyveknapp, loddrett skyveknapp {#controller-slider}

- Ingen kanal.
- Gir: verdi 0…1, eller −1…1 når **Negative verdier** er slått på.

### Kjørekontroller {#controller-train}

Kjørekontrolleren (spesialkontroll) fungerer som en skyveknapp i Hurtigkoblinger.

- Ingen kanal.
- Gir: verdi −1…1: spakens posisjon som andel av alle hakk, negativ når retningsvelgeren står i revers, 0 i fri.

### Dreieknapp {#controller-knob}

Dreieknappen i de betalte temaene fungerer som en skyveknapp i Hurtigkoblinger.

- Ingen kanal.
- Gir: verdi 0…1, eller −1…1 når knappen har null i midten.

### Ratt {#controller-wheel}

- **Kanal**: **Rattvinkel** (standard) eller **Horn**.
- Rattvinkel gir: verdi −1…1, 0 rett frem.
- Horn gir: verdi 1 mens hornfeltet holdes inne, ellers 0.

### Pedaler {#controller-pedals}

- **Kanal**: **Gasspedal** (standard) eller **Bremsepedal**.
- Gir: verdi 0…1, hvor langt pedalen er trykket inn.
- Pedalene gir den rå pedalposisjonen. For en bil som øker farten, bremser og rygger av seg selv, bruker du inngangen [Kjøretøy](#src-vehicle).

### Girspak {#controller-gear}

Den manuelle og den automatiske girspaken (spesialkontroll).

- **Kanal**: **Gir** (standard) eller **Retning (R − / forover +)**.
- Gir, manuell girkasse: det innlagte giret delt på antall gir forover: høyeste gir 1, fri 0, revers negativ. Med 4 gir gir 2. gir 0,5.
- Gir, automatisk girkasse: det samme som Retning.
- Retning gir: −1 i R, 0 i N (og P), +1 i alle gir forover eller D.

### Handbrekk {#controller-handbrake}

- **Kanal**: **Handbrekk låst** (standard) eller **Handbrekkraft**.
- Handbrekk låst gir: av/på, på mens spaken er låst.
- Handbrekkraft gir: verdi 0…1, hvor langt spaken er trukket.

### Blinklys {#controller-turnsignals}

Blinklysspaken (spesialkontroll).

- **Kanal**: **Blinklys (venstre − / høyre +)** (standard), **Venstre blinklys**, **Høyre blinklys** eller **Lys**.
- Blinklys gir: verdi −1 (venstre), 0 (av) eller +1 (høyre).
- Venstre blinklys og Høyre blinklys gir: verdi 1 mens det blinklyset er på (blinker i takt med lampen når blinking er slått på for kontrollen), ellers 0.
- Lys gir: verdi 1 mens lyset er på, ellers 0.

### Fordelingsgir {#controller-transfercase}

[Fordelingsgiret](/docs/Application/Dashboard/SpecialControls#transfer-case) (spesialkontroll).

- **Kanal**: **Firehjulsdrift** (standard), **Lågt gir**, **Framdifferensialsperre**, **Midtdifferensialsperre** eller **Bakdifferensialsperre**.
- Firehjulsdrift gir: av/på, på i 4H og 4L.
- Lågt gir gir: av/på, på i 4L.
- Hver differensialsperre gir: av/på, på mens den sperren er koblet inn.
- Selve posisjonen (2H, 4H, N, 4L) går til simulatoren via innstillingen **Fordelingsgir** i inngangen [Kjøretøy](#src-vehicle).

### D-pad {#controller-dpad}

- **Kanal**: **Opp / ned** eller **Venstre / høyre**.
- Gir: verdi +1 (opp eller høyre), −1 (ned eller venstre) eller 0.

### Knapp {#controller-button}

- Ingen kanal.
- Gir: av/på, på mens den holdes inne.

### Bryter {#controller-switch}

- Ingen kanal.
- Gir: av/på.

### Trinnbryter {#controller-stepper}

- Ingen kanal.
- Gir: verdi: gjeldende trinn delt på **Antall trinn**, slik at det siste trinnet er 1 (−1 for det siste negative trinnet).

## Kjøretøy {#src-vehicle}

En simulert bil som styres av pedalene, girspaken, handbrekket og fordelingsgiret på dashboardet: den akselererer, bremser, ruller fritt og rygger som et ekte kjøretøy, og raden får hastigheten eller turtallet. Paletten viser Kjøretøy-blokker når dashboardet har pedaler, girspak eller handbrekk, én blokk per utgang, allerede koblet til den første kontrollen av hver type.

- **Pedaler**: pedalene på dashboardet som styrer kjøretøyet (påkrevd).
- **Girspak**: **ingen** eller en girspak på dashboardet. Uten girspak kjører kjøretøyet bakover når du holder bremsepedalen inne mens det står stille.
- **Handbrekk**: **ingen** eller et handbrekk på dashboardet.
- **Fordelingsgir**: **ingen** eller et fordelingsgir på dashboardet. I 2H og 4H kjører kjøretøyet som uten det, i N kjører det ikke (det triller), i 4L er hastigheten begrenset til 40 %.
- **Kjøretøytype**: **Bil** (standard), **Terrengkjøretøy**, **Sportsbil** eller **Lastebil**. Typene har ulik treghet og ryggehastighet; lastebilen har i tillegg luftbrems.
- **Utgang**:
  - **Hastighet** (standard): verdi −1…1, negativ ved rygging;
  - **Turtall (o/min)**: verdi 0…1;
  - **Bremser**: av/på, på mens kjøretøyet bremser;
  - **På handbrekket**: av/på.

Problemer: «Velg pedalene til kjøretøyet», «… er ikke på dashboardet».

<Screenshot name="links-vehicle-settings" alt="Innstillinger for en Kjøretøy-inngangsblokk" width={900} />

## Spillkontroller {#src-gamepad}

Spillkontrolleren som er koblet til enheten din. Blokken finnes i paletten bare mens **Aktiver gamepad-blokker** er slått på (siden **Spillkontroller** i topplinjen); ellers rapporterer raden «Slå på spillkontrollerblokker på Spillkontroller-siden (topplinjen)».

- **Inngang** (standard **Venstre stikke Y**). Etikettene følger **Gamepad-knappeoppsett** (Xbox / PlayStation):
  - **Venstre stikke Y**, **Venstre stikke X**, **Høyre stikke Y**, **Høyre stikke X**: verdi −1…1;
  - **RT** / **R2**, **LT** / **L2** (avtrekkere): verdi;
  - **A**, **B**, **X**, **Y** / **Kryss**, **Sirkel**, **Firkant**, **Trekant**: av/på;
  - **LB** / **L1**, **RB** / **R1** (skulderknapper): av/på;
  - **Opp**, **Ned**, **Venstre**, **Høyre** (D-pad): av/på.

## Hub {#src-hub}

Hubbens egen knapp eller en sensor: på huben eller på en av portene. Det finnes én Hub-inngang per hub i profilen, unntatt Mould King-hubber, som bare tar imot kommandoer.

- **Hub**: en hub i profilen.
- **Knapp eller sensor**: bare det denne huben kan rapportere (liste nedenfor).
- **Port**: for sensorer på en port (motorverdier, portsensorer).
- **Huborientering**: for helning og akselerasjon på hubber der den kan endres: **Behold** (standard) eller hvordan huben er montert i modellen.

En sensorverdi går videre langs raden delt på full skala og begrenset til −1…1: et batteri på 50 % gir 0,5. En tekst-**Monitor** rett etter sensoren viser den faktiske verdien med enhet.

| Knapp eller sensor | Signal | Enhet, full skala | Hubber |
|---|---|---|---|
| **Knapp 1, 2…** | av/på | | hubber med knapp; knappene på LEGO® Powered Up-fjernkontrollen |
| **Batteri** | verdi | %, 100 | hubber som rapporterer det |
| **Batterispenning** | verdi | V, 12 | hubber som rapporterer det |
| **Utgangsspenning** | verdi | V, 12 | BuWizz 2.0 |
| **Temperatur** | verdi | °C, 100 | hubber som rapporterer det |
| **Helling pitch** | verdi | °, 90 | hubber med helningssensor |
| **Helling roll** | verdi | °, 180 | hubber med helningssensor |
| **Helling gir** | verdi | °, 180 | hubber med yaw-akse |
| **Akselerasjon X / Y / Z** | verdi | m/s², 19,6 | hubber med akselerometer |
| **Motorhastighet** | verdi | %, 100 | port; alle hubber med porter |
| **Motorvinkel** | verdi | °, 360 (relativ) | port; motorer med enkoder; ikke SBrick, BuWizz 2.0, WeDo 2.0 |
| **Motorposisjon** | verdi | °, 180 (absolutt) | port; vinkelmotorer |
| **Motoreffekt** | verdi | %, 100 | port; Robot Inventor |
| **Motorstrøm** | verdi | A, 3 | port; BuWizz 2.0, BuWizz 3.0 Pro |
| **Avstandssensor** | verdi | 250 | port; ikke SBrick eller BuWizz |
| **Fargesensor** | verdi | fargenummer, 10 | port; ikke SBrick, BuWizz eller WeDo 2.0 |
| **Reflektert lys**, **Omgivelseslys** | verdi | %, 100 | port; ikke SBrick, BuWizz eller WeDo 2.0 |
| **Hellingssensor pitch / roll** | verdi | °, 45 | port; helningssensor for WeDo 2.0 / BOOST; ikke SBrick eller BuWizz |
| **Effektmodus** | verdi | 1–4, 4 | BuWizz 2.0 |
| **Tilkoblet** | av/på | | alle hubber |

Når huben er tilkoblet, sjekker MOCPilot også enheten på porten: «Port A: ingen motor der», «Port A: motoren har ingen enkoder», «Port A: ingen avstandssensor der» og så videre.
