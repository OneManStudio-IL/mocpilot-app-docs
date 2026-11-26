---
id: OutputBlocks
title: Handlings- og outputblokke
description: "Oversigt over alle handlinger og output i Hurtige forbindelser: Motor, Servo, Lys, handlinger til Technic Move, BuWizz og Mould King, Hub, Indikator, Hub-LED, LED-matrix, Kalibrer servoer."
---

import Screenshot from '@site/src/components/Screenshot';

# Handlings- og outputblokke {#operation-and-output-blocks}

Fanen **Output** i paletten indeholder handlingerne og outputtene. Sådan bruger du dem: [Handlinger og output](/docs/Application/Links/Operations).

- En **handling** angiver, hvad der skal ske. Et [Hub](#hub-out)-output skal følge efter og angiver, hvor.
- Et **direkte output** ([Indikator](#dash-indicator), [Hub-LED](#hub-led), [LED-matrix](#hub-matrix), [Kalibrer servoer](#cmd-calibrate)) afslutter rækken alene; rækken må ikke have en handling.

**Motor**, **Servo**, **Motor i tid** og **Lys** findes altid i paletten. De øvrige handlinger vises kun, når en hub i profilen kan udføre dem.

»Til« betyder nedenfor et til/fra-signal, der er til, eller en værdi på mindst 0,5 (uanset fortegn).

## Handlinger for porte {#operations-for-ports}

### Motor {#op-motor}

Kører motoren med inputtets værdi: Jo længere du skubber, desto hurtigere; 0 stopper den.

- Modtager: værdi eller til/fra (til = fuld fart).
- **Ved stop**: **Hubbens standard** (standard), **Frihjul**, **Bremse** eller **Hold position**.
- **Hubacceleration**: **Hubbens standard** (standard), **Hurtig**, **Balanceret**, **Blød**, **Langsom** eller **Meget langsom**: hubbens egen rampe. Til din egen rampe bruger du [Blød](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Blokeringsregistrering**: **Hubbens standard** (standard), **Til** eller **Fra**.
- Hubs: alle hubs med porte. **Ved stop** og **Hubacceleration** kræver en hub med positionsstyring (ikke SBrick, BuWizz 2.0, WeDo 2.0 eller Mould King); **Blokeringsregistrering** kræver Robot Inventor. På en Technic Move Hub driver Motor bilen i tilstanden **Bilprofil** og motorerne `A`–`C` i tilstanden **Porte** ([Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)).

### Servo {#op-servo}

Styrer med en motor, der har encoder: Inputtet −1…1 drejer motoren til *midte + værdi × vinkel*, og 0 bringer den tilbage til midten.

- Modtager: værdi eller til/fra.
- **Kalibrering**: **Manuel** (standard) eller **Auto**.
- **Vinkel**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 omgang, ±2 omgange, ±3 omgange eller ±5 omgange (standard ±90°). Kun Manuel.
- **Midte**: −20°, −10°, −5°, 0°, +5°, +10° eller +20° (standard 0°). Kun Manuel.
- **Drejehastighed**: 25, 50, 75 eller 100 % (standard 100 %).
- Manuel: Nulpunktet er der, hvor motoren stod ved opstart, eller den position, du indstiller med **Sæt som nul** (juster først med **◀ 5°** / **5° ▶**).
- Auto: Ved hver start drejer motoren til begge endestop; midten bliver nulpunktet, og vandringen bliver vinklen. **Kalibrer nu** kører kalibreringen med det samme. Styringen skal have endestop.
- Hubs og porte: en motor med encoder på en hub med positionsstyring (ikke SBrick, BuWizz 2.0, WeDo 2.0 eller Mould King). På en Technic Move Hub i tilstanden **Bilprofil** drejer Servo hubbens tandstang, som hubben selv kalibrerer; i tilstanden **Porte** bruger du port `C` med kalibreringen **Auto**.

<Screenshot name="links-servo-settings" alt="Indstillinger for en Servo-blok" width={900} />

### Motor i tid {#op-timed}

Kører motoren i en fast tid, hver gang inputtet slås til. Hastighed og retning kommer fra inputtets værdi i det øjeblik.

- Modtager: værdi eller til/fra.
- **Tid**: 0,5, 1, 2, 3, 5 eller 10 s (standard 1 s).
- Hubs: alle hubs med porte; på en Technic Move Hub i tilstanden **Bilprofil** driver den bilen.

### Kør et antal grader {#op-degrees}

Drejer motoren en fast vinkel, hver gang inputtet slås til. Et negativt input drejer den den anden vej.

- Modtager: værdi eller til/fra.
- **Grader**: 45°, 90°, 180°, 1 omgang, 2 omgange, 3 omgange, 5 omgange eller 10 omgange (standard 1 omgang).
- **Hastighed**: 25, 50, 75 eller 100 % (standard 50 %).
- Hubs og porte: en motor med encoder på en hub med positionsstyring.

### Gå til position {#op-goto}

Drejer motoren til en absolut position, når inputtet slås til, og til en anden, når det slås fra. Den tager den korteste vej.

- Modtager: værdi eller til/fra.
- **Position ved til**: 0°, 45°, 90°, 135°, 180°, 225°, 270° eller 315° (standard 90°).
- **Position ved fra**: **Bliv** eller en af de samme positioner (standard 0°).
- **Hastighed**: 25, 50, 75 eller 100 % (standard 50 %).
- Hubs og porte: en vinkelmotor (absolut position) på en hub med positionsstyring.

### Lys {#op-light}

Styrer LEGO®-lys på en port.

- Modtager: værdi eller til/fra. Med en værdi følger lysstyrken den (−1 og 1 er begge fuld lysstyrke).
- **Lysstyrke**: 25, 50, 75 eller 100 % (standard 100 %).
- **Blink: til**: **Intet blink** (standard), 0,25, 0,5, 1 eller 2 s: hvor længe lyset er tændt i hvert blink.
- **Blink: fra**: **Som ved til** (standard), 0,25, 0,5, 1 eller 2 s: hvor længe det er slukket.
- Hubs: alle hubs med porte undtagen WeDo 2.0. På en Technic Move Hub tænder og slukker Lys bilens lys i tilstanden **Bilprofil** og lysene `1`–`6` hver for sig i tilstanden **Porte**.

### Portfarve {#op-portcolor}

Indstiller farven på port-LED'erne på en BuWizz 3.0 Pro.

- Modtager: værdi eller til/fra.
- **Farve**: **Fra listen** (standard) eller **RGB**.
- **Farve ved til** (standard Rød) og **Farve ved fra** (standard Fra): Fra, Lyserød, Lilla, Blå, Lyseblå, Lysegrøn, Grøn, Gul, Orange, Rød, Hvid.
- **Rød**, **Grøn**, **Blå** (RGB): 0, 32, 64, 128, 192 eller 255 (standard 255, 0, 0).
- Hubs og porte: BuWizz 3.0 Pro, port 1–4. LED'erne slukkes, når programmet stopper.

### Sensorlys {#op-sensorlights}

Tænder de fire segmenter omkring »øjnene« på Technic-afstandssensoren, mens inputtet er til.

- Modtager: værdi eller til/fra.
- **Lys**: **Alle** (standard), **Top**, **Bund**, **Venstre**, **Højre** eller **Diagonal**.
- **Lysstyrke**: 25, 50, 75 eller 100 % (standard 100 %).
- Hubs og porte: Robot Inventor, SPIKE Prime og Technic Hub, én port med afstandssensoren. Lyset slukkes, når programmet stopper.

### Farvesensorens lys {#op-colorlights}

Tænder de tre lys omkring linsen på Technic-farvesensoren (SPIKE-farvesensoren), mens inputtet er til.

- Modtager: værdi eller til/fra.
- **Lys**: **Alle** (standard), 1, 2, 3, 1 + 2, 2 + 3 eller 1 + 3.
- **Lysstyrke**: 25, 50, 75 eller 100 % (standard 100 %).
- Hubs og porte: Technic Hub, porten med farvesensoren.
- Mens dens lys er tændt, måler sensoren intet. Når inputtet slås fra, eller programmet stopper, slukkes lyset, og sensoren måler farver igen. En række, der læser farvesensoren på en port, hvor en anden række tænder lyset, er et problem (»Række 2 tænder farvesensoren på port A: en tændt sensor måler intet«).

## Handlinger for hele hubben {#operations-for-the-whole-hub}

Hub-blokken efter disse handlinger har ingen porte.

### Bremse {#op-brake}

Bremser bilen, mens inputtet er til.

- Modtager: værdi eller til/fra. Ingen indstillinger.
- Hubs: Technic Move.

### Boost {#op-boost}

Skifter hubben til effekttilstanden boost, mens inputtet er til, og tilbage til normal, når det slås fra.

- Modtager: værdi eller til/fra. Ingen indstillinger.
- Hubs: Technic Move.

### Kraftimpuls {#op-pulse}

Sender én kraftimpuls, hver gang inputtet slås til: Motorerne kører med maksimal effekt i cirka to sekunder.

- Modtager: værdi eller til/fra. Ingen indstillinger.
- Hubs: Technic Move med konfigurationen **Batmobile™ Tumbler**; se [Technic Move Hub-konfigurationer](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Effekttilstand {#op-powermode}

Indstiller effekttilstanden på en BuWizz 2.0, når inputtet slås til, og – hvis du vælger en – når det slås fra.

- Modtager: værdi eller til/fra.
- **Tilstand ved til**: **Langsom**, **Normal** (standard), **Hurtig** eller **Ludicrous**.
- **Tilstand ved fra**: **Behold** (standard) eller en af tilstandene.
- Hubs: BuWizz 2.0.

### Kanal {#op-channel}

Skifter styrekanalen på en Mould King-hub, når inputtet slås til, og – hvis du vælger en – når det slås fra.

- Modtager: værdi eller til/fra.
- **Kanal ved til**: **A** (standard), **B** eller **C**.
- **Kanal ved fra**: **Behold** (standard), **A**, **B** eller **C**.
- Hubs: Mould King 4.0 og 6.0.

## Output {#outputs}

### Hub {#hub-out}

Hvor handlingen sker: en hub og dens porte. Der er én Hub-blok for hver hub i profilen.

- **Hub**: en hub i profilen.
- **Porte**: en eller flere porte på hubben (A–D på de fleste hubs og på SBrick, A–F på Robot Inventor og Mould King 6.0, 1–4 på BuWizz 2.0, 1–4 samt A og B på BuWizz 3.0 Pro). En port kan kun høre til én række.
- Modtager: en handling. Technic Move-hubs i tilstanden **Bilprofil** og handlinger for hele hubben har ingen porte. I tilstanden **Porte** har en Technic Move Hub portene A–C og lysene 1–6 til **Lys**.
- Mere: [Hub-blokken og porte](/docs/Application/Links/HubsAndPorts).

### Indikator {#dash-indicator}

Viser værdien på en monitor på dashboardet, som den er.

- Modtager: værdi eller til/fra uden en handling foran.
- **Dashboardindikator**: en **Tekstmonitor** (Monitor), en **Værdimonitor** (Batteriniveau, Fartmåler) eller en **Hældningsmonitor** på dashboardet.
- **Akse**: **Hældning X** eller **Hældning Y**, kun for en Hældningsmonitor (én række pr. akse).
- En tekstmonitor lige efter en hubsensor viser den rigtige værdi med enhed.

### Hub-LED {#hub-led}

Hubbens farvede statuslys: én farve, mens inputtet er til, og en anden, mens det er fra.

- Modtager: værdi eller til/fra uden en handling foran.
- **Hub**: en hub med farve-LED.
- **Farve**: **Fra listen** (standard) eller **RGB**.
- **Farve ved til** (standard Rød) og **Farve ved fra** (standard Fra): Fra, Lyserød, Lilla, Blå, Lyseblå, Lysegrøn, Grøn, Gul, Orange, Rød, Hvid.
- **Rød**, **Grøn**, **Blå** (RGB): 0, 32, 64, 128, 192 eller 255 (standard 255, 0, 0).
- Hubs: LEGO®-hubs (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, Powered Up-fjernbetjeningen); ikke BuWizz, SBrick eller Mould King.

### LED-matrix {#hub-matrix}

Hubbens lysmatrix.

- Modtager: værdi eller til/fra uden en handling foran.
- **Hub**: en hub med LED-matrix.
- **Vis**: **Niveaubjælke** (standard; rækkerne lyser op nedefra med værdien), **Tal** (værdien fra −100 til 100) eller **Billede ved til**.
- **Billede**: **Hjerte** (standard), **Smil**, **Trist**, **Flueben**, **Kryds**, **Pil op**, **Pil ned**, **Pil venstre**, **Pil højre** eller **Alle tændt**.
- **Orientering**: **Behold** (standard), **Opret**, **På hovedet**, **Venstre** eller **Højre**.
- Hubs: Robot Inventor. Matrixen ryddes, når programmet stopper.

### Kalibrer servoer {#cmd-calibrate}

Hver gang inputtet slås til, kalibreres alle [Servo](#op-servo)-blokke i tilstanden **Auto** i programmet igen.

- Modtager: værdi eller til/fra uden en handling foran. Ingen indstillinger.
- Programmet skal have en klar Servo-række i tilstanden Auto; ellers melder rækken »Ingen servo i kalibreringstilstanden Auto i dette program«.
