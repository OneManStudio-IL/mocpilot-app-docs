---
id: OutputBlocks
title: Handlings- og utgangsblokker
description: "Referanse for alle handlinger og utganger i Hurtigkoblinger: Motor, Servo, Lys, handlinger for Technic Move, BuWizz og Mould King, Hub, Indikator, Hub-LED, LED-matrise, Kalibrer servoer."
---

import Screenshot from '@site/src/components/Screenshot';

# Handlings- og utgangsblokker {#operation-and-output-blocks}

Fanen **Utganger** i paletten inneholder handlingene og utgangene. Slik bruker du dem: [Handlinger og utganger](/docs/Application/Links/Operations).

- En **handling** sier hva som skal gjøres. En [Hub](#hub-out)-utgang må komme etter den og sier hvor.
- En **direkte utgang** ([Indikator](#dash-indicator), [Hub-LED](#hub-led), [LED-matrise](#hub-matrix), [Kalibrer servoer](#cmd-calibrate)) avslutter raden alene; raden kan ikke ha noen handling.

**Motor**, **Servo**, **Motor i en tid** og **Lys** finnes alltid i paletten. De andre handlingene vises bare når en hub i profilen kan utføre dem.

«På» nedenfor betyr et av/på-signal som er på, eller en verdi på minst 0,5 (med hvilket som helst fortegn).

## Handlinger for porter {#operations-for-ports}

### Motor {#op-motor}

Kjører motoren med inngangens verdi: jo lenger du skyver, desto fortere; 0 stopper den.

- Tar: verdi eller av/på (på = full fart).
- **Ved stopp**: **Hubens standard** (standard), **Frirulling**, **Brems** eller **Hold posisjon**.
- **Hubakselerasjon**: **Hubens standard** (standard), **Rask**, **Balansert**, **Myk**, **Sakte** eller **Svært sakte**: hubens egen rampe. For din egen rampe bruker du [Myk](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Stall-deteksjon**: **Hubens standard** (standard), **På** eller **Av**.
- Hubber: alle hubber med porter. **Ved stopp** og **Hubakselerasjon** krever en hub med posisjonsstyring (ikke SBrick, BuWizz 2.0, WeDo 2.0 eller Mould King); **Stall-deteksjon** krever Robot Inventor. På en Technic Move Hub kjører Motor bilen i modusen **Bilprofil** og motorene `A`–`C` i modusen **Porter** ([Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)).

### Servo {#op-servo}

Styrer med en motor som har enkoder: inngangen −1…1 dreier motoren til *midtpunkt + verdi × vinkel*, og 0 fører den tilbake til midten.

- Tar: verdi eller av/på.
- **Kalibrering**: **Manuell** (standard) eller **Auto**.
- **Vinkel**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 omdreining, ±2 omdreininger, ±3 omdreininger eller ±5 omdreininger (standard ±90°). Bare Manuell.
- **Midtpunkt**: −20°, −10°, −5°, 0°, +5°, +10° eller +20° (standard 0°). Bare Manuell.
- **Dreiehastighet**: 25, 50, 75 eller 100 % (standard 100 %).
- Manuell: null er der motoren stod da strømmen ble slått på, eller posisjonen du angir med **Sett som null** (juster først med **◀ 5°** / **5° ▶**).
- Auto: ved hver start dreier motoren til begge endestopp; midten blir null og vandringen blir vinkelen. **Kalibrer nå** kjører dette med en gang. Styringen må ha endestopp.
- Hubber og porter: en motor med enkoder på en hub med posisjonsstyring (ikke SBrick, BuWizz 2.0, WeDo 2.0 eller Mould King). På en Technic Move Hub i modusen **Bilprofil** dreier Servo hubens styretannstang, som huben kalibrerer selv; i modusen **Porter** bruker du port `C` med kalibreringen **Auto**.

<Screenshot name="links-servo-settings" alt="Innstillinger for en Servo-blokk" width={900} />

### Motor i en tid {#op-timed}

Kjører motoren i en bestemt tid hver gang inngangen slås på. Hastigheten og retningen kommer fra inngangsverdien i det øyeblikket.

- Tar: verdi eller av/på.
- **Tid**: 0,5, 1, 2, 3, 5 eller 10 s (standard 1 s).
- Hubber: alle hubber med porter; på en Technic Move Hub i modusen **Bilprofil** kjører den bilen.

### Kjør et antall grader {#op-degrees}

Dreier motoren en bestemt vinkel hver gang inngangen slås på. En negativ inngang dreier den andre veien.

- Tar: verdi eller av/på.
- **Grader**: 45°, 90°, 180°, 1 omdreining, 2 omdreininger, 3 omdreininger, 5 omdreininger eller 10 omdreininger (standard 1 omdreining).
- **Hastighet**: 25, 50, 75 eller 100 % (standard 50 %).
- Hubber og porter: en motor med enkoder på en hub med posisjonsstyring.

### Gå til posisjon {#op-goto}

Dreier motoren til en absolutt posisjon når inngangen slås på, og til en annen når den slås av. Den tar korteste vei.

- Tar: verdi eller av/på.
- **Posisjon når på**: 0°, 45°, 90°, 135°, 180°, 225°, 270° eller 315° (standard 90°).
- **Posisjon når av**: **Bli stående** eller en av de samme posisjonene (standard 0°).
- **Hastighet**: 25, 50, 75 eller 100 % (standard 50 %).
- Hubber og porter: en vinkelmotor (absolutt posisjon) på en hub med posisjonsstyring.

### Lys {#op-light}

Styrer LEGO®-lys på en port.

- Tar: verdi eller av/på. Med en verdi følger lysstyrken den (−1 og 1 er begge full lysstyrke).
- **Lysstyrke**: 25, 50, 75 eller 100 % (standard 100 %).
- **Blink: på**: **Ingen blink** (standard), 0,25, 0,5, 1 eller 2 s: hvor lenge lyset er på i hvert blink.
- **Blink: av**: **Som når på** (standard), 0,25, 0,5, 1 eller 2 s: hvor lenge det er av.
- Hubber: alle hubber med porter unntatt WeDo 2.0. På en Technic Move Hub slår Lys bilens lys av og på i modusen **Bilprofil**, og lysene `1`–`6` hver for seg i modusen **Porter**.

### Portfarge {#op-portcolor}

Angir fargen på port-LED-ene på en BuWizz 3.0 Pro.

- Tar: verdi eller av/på.
- **Farge**: **Fra listen** (standard) eller **RGB**.
- **Farge når på** (standard Rød) og **Farge når av** (standard Av): Av, Rosa, Lilla, Blå, Lyseblå, Lysegrønn, Grønn, Gul, Oransje, Rød, Hvit.
- **Rød**, **Grønn**, **Blå** (RGB): 0, 32, 64, 128, 192 eller 255 (standard 255, 0, 0).
- Hubber og porter: BuWizz 3.0 Pro, port 1–4. LED-ene slukkes når programmet stopper.

### Sensorlys {#op-sensorlights}

Tenner de fire segmentene rundt «øynene» på Technic-avstandssensoren mens inngangen er på.

- Tar: verdi eller av/på.
- **Lys**: **Alle** (standard), **Topp**, **Bunn**, **Venstre**, **Høyre** eller **Diagonal**.
- **Lysstyrke**: 25, 50, 75 eller 100 % (standard 100 %).
- Hubber og porter: Robot Inventor, SPIKE Prime og Technic Hub, én port med avstandssensoren. Lysene slukkes når programmet stopper.

### Fargesensorens lys {#op-colorlights}

Tenner de tre lysene rundt linsen på Technic-fargesensoren (SPIKE-fargesensoren) mens inngangen er på.

- Tar: verdi eller av/på.
- **Lys**: **Alle** (standard), 1, 2, 3, 1 + 2, 2 + 3 eller 1 + 3.
- **Lysstyrke**: 25, 50, 75 eller 100 % (standard 100 %).
- Hubber og porter: Technic Hub, porten med fargesensoren.
- Mens lysene er på, måler sensoren ingenting. Når inngangen slås av eller programmet stopper, slukkes lysene og sensoren måler farger igjen. En rad som leser fargesensoren på en port der en annen rad tenner lysene, er et problem («Rad 2 tenner fargesensoren på port A: en tent sensor måler ingenting»).

## Handlinger for hele huben {#operations-for-the-whole-hub}

Hub-blokken etter disse handlingene tar ingen porter.

### Brems {#op-brake}

Bremser bilen mens inngangen er på.

- Tar: verdi eller av/på. Ingen innstillinger.
- Hubber: Technic Move.

### Boost {#op-boost}

Setter huben i Boost-effektmodus mens inngangen er på, og tilbake til normal når den slås av.

- Tar: verdi eller av/på. Ingen innstillinger.
- Hubber: Technic Move.

### Kraftpuls {#op-pulse}

Sender én kraftpuls hver gang inngangen slås på: motorene går med maksimal effekt i omtrent to sekunder.

- Tar: verdi eller av/på. Ingen innstillinger.
- Hubber: Technic Move med konfigurasjonen **Batmobile™ Tumbler**; se [Konfigurasjoner for Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Effektmodus {#op-powermode}

Angir effektmodusen på en BuWizz 2.0 når inngangen slås på og, hvis du velger en, når den slås av.

- Tar: verdi eller av/på.
- **Modus når på**: **Sakte**, **Normal** (standard), **Rask** eller **Ludicrous**.
- **Modus når av**: **Behold** (standard) eller en av modusene.
- Hubber: BuWizz 2.0.

### Kanal {#op-channel}

Bytter styrekanal på en Mould King-hub når inngangen slås på og, hvis du velger en, når den slås av.

- Tar: verdi eller av/på.
- **Kanal når på**: **A** (standard), **B** eller **C**.
- **Kanal når av**: **Behold** (standard), **A**, **B** eller **C**.
- Hubber: Mould King 4.0 og 6.0.

## Utganger {#outputs}

### Hub {#hub-out}

Hvor handlingen skjer: en hub og portene. Det finnes én Hub-blokk per hub i profilen.

- **Hub**: en hub i profilen.
- **Porter**: én eller flere porter på den huben (A–D på de fleste hubber og på SBrick, A–F på Robot Inventor og Mould King 6.0, 1–4 på BuWizz 2.0, 1–4 pluss A og B på BuWizz 3.0 Pro). En port kan bare høre til én rad.
- Tar: en handling. Technic Move-hubber i modusen **Bilprofil** og handlinger for hele huben tar ingen porter. I modusen **Porter** har en Technic Move Hub portene A–C, og lysene 1–6 for **Lys**.
- Mer: [Hub-blokken og porter](/docs/Application/Links/HubsAndPorts).

### Indikator {#dash-indicator}

Viser verdien på en monitor på dashboardet, slik den er.

- Tar: verdi eller av/på, uten handling foran.
- **Dashboardindikator**: en **Tekstmonitor** (Monitor), en **Verdimonitor** (Batterinivå, Speedometer) eller en **Hellingsmonitor** på dashboardet.
- **Akse**: **Helling X** eller **Helling Y**, bare for en Hellingsmonitor (én rad per akse).
- En tekstmonitor rett etter en sensor på huben viser den faktiske verdien med enhet.

### Hub-LED {#hub-led}

Statuslyset i farger på huben: én farge mens inngangen er på, en annen mens den er av.

- Tar: verdi eller av/på, uten handling foran.
- **Hub**: en hub med farge-LED.
- **Farge**: **Fra listen** (standard) eller **RGB**.
- **Farge når på** (standard Rød) og **Farge når av** (standard Av): Av, Rosa, Lilla, Blå, Lyseblå, Lysegrønn, Grønn, Gul, Oransje, Rød, Hvit.
- **Rød**, **Grønn**, **Blå** (RGB): 0, 32, 64, 128, 192 eller 255 (standard 255, 0, 0).
- Hubber: LEGO®-hubber (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, Powered Up-fjernkontrollen); ikke BuWizz, SBrick eller Mould King.

### LED-matrise {#hub-matrix}

Lysmatrisen på huben.

- Tar: verdi eller av/på, uten handling foran.
- **Hub**: en hub med LED-matrise.
- **Vis**: **Nivåstolpe** (standard; radene lyser opp nedenfra etter verdien), **Tall** (verdien fra −100 til 100) eller **Bilde når på**.
- **Bilde**: **Hjerte** (standard), **Smil**, **Trist**, **Hake**, **Kryss**, **Pil opp**, **Pil ned**, **Pil venstre**, **Pil høyre** eller **Alle på**.
- **Orientering**: **Behold** (standard), **Oppreist**, **Opp ned**, **Venstre** eller **Høyre**.
- Hubber: Robot Inventor. Matrisen tømmes når programmet stopper.

### Kalibrer servoer {#cmd-calibrate}

Hver gang inngangen slås på, kalibreres alle [Servo](#op-servo)-blokker i **Auto**-modus i programmet på nytt.

- Tar: verdi eller av/på, uten handling foran. Ingen innstillinger.
- Programmet må ha en klar Servo-rad i Auto-modus, ellers rapporterer raden «Ingen servo med kalibrering Auto i dette programmet».
