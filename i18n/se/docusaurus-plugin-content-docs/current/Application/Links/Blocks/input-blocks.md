---
id: InputBlocks
title: Ingångsblock
description: "Referens för alla ingångar i Snabbkopplingar: kontroller på instrumentpanelen och deras kanaler, fordonet, handkontrollen, hubbens knappar och sensorer."
---

import Screenshot from '@site/src/components/Screenshot';

# Ingångsblock {#input-blocks}

Varje rad börjar med en ingång. Fliken **Ingångar** i paletten visar de block som din profil kan använda just nu: ett block per kontroll på instrumentpanelen (ett per kanal för kontroller med flera kanaler), blocken **Fordon**, blocket **Handkontroll** och ett **Hubb**-block per hubb. Så använder du dem: [Ingångar](/docs/Application/Links/Inputs).

Varje ingång skickar en av två signaler längs raden:

- **värde**: ett tal från −1 till 1 (0…1 för kontroller som saknar negativ sida);
- **på/av**: 1 eller 0.

Bearbetningsblock och åtgärder tar bara emot de signaler de kan hantera; se [Bearbetningsblock](/docs/Application/Links/Blocks/ProcessingBlocks).

## Kontroll {#src-controller}

En kontroll från din instrumentpanel, som visas med sitt namn (**JOY1**, **SLDR1**, **BTN2** …).

- **Kontroll**: någon av kontrollerna på instrumentpanelen nedan. Monitorer är utgångar, inte ingångar.
- **Kanal**: vad kontrollen ger, för kontroller med flera kanaler. Paletten erbjuder ett block per kanal.

Ratten, pedalerna, växelspaken, handbromsen, blinkersen och tågreglaget beskrivs under [Specialkontroller](/docs/Application/Dashboard/SpecialControls).

Om kontrollen tas bort från instrumentpanelen rapporterar raden ”Välj en kontroll på instrumentpanelen”. Om dess kanal inte längre finns rapporterar den ”Välj vad … ger” (för en joystick: ”… rör sig inte längs den här axeln”).

### Joystick {#controller-joystick}

- **Kanal**: **X-axel** eller **Y-axel**. En joystick som är inställd på **Endast horisontellt (X)** eller **Endast vertikalt (Y)** erbjuder bara den axeln.
- Ger: värde −1…1, 0 i mitten.

### Skjutreglage, vertikalt skjutreglage {#controller-slider}

- Ingen kanal.
- Ger: värde 0…1, eller −1…1 när **Negativa värden** är påslaget.

### Tågreglage {#controller-train}

Tågreglaget (specialkontroll) fungerar som ett skjutreglage i Snabbkopplingar.

- Ingen kanal.
- Ger: värde −1…1: spakens läge som andel av alla körsteg, negativt när riktningsväljaren står på back, 0 i neutralläge.

### Vridratt {#controller-knob}

Vridratten i de betalda temana fungerar som ett skjutreglage i Snabbkopplingar.

- Ingen kanal.
- Ger: värde 0…1, eller −1…1 när rattens nolläge ligger i mitten.

### Ratt {#controller-wheel}

- **Kanal**: **Rattvinkel** (standard) eller **Signalhorn**.
- Rattvinkel ger: värde −1…1, 0 rakt fram.
- Signalhorn ger: värde 1 medan tutområdet hålls intryckt, annars 0.

### Pedaler {#controller-pedals}

- **Kanal**: **Gaspedal** (standard) eller **Bromspedal**.
- Ger: värde 0…1, hur långt pedalen är nedtryckt.
- Pedalerna ger pedalens råa läge. För en bil som accelererar, saktar in och backar av sig själv använder du ingången [Fordon](#src-vehicle).

### Växelspak {#controller-gear}

Den manuella och den automatiska växelspaken (specialkontroll).

- **Kanal**: **Växel** (standard) eller **Riktning (R − / framåt +)**.
- Växel, manuell växellåda: den ilagda växeln delad med antalet framåtväxlar: högsta växeln 1, friläge 0, back negativt. Med 4 växlar ger 2:an 0,5.
- Växel, automatlåda: samma som Riktning.
- Riktning ger: −1 i R, 0 i N (och P), +1 i alla framåtväxlar eller D.

### Handbroms {#controller-handbrake}

- **Kanal**: **Handbroms åtdragen** (standard) eller **Handbromskraft**.
- Handbroms åtdragen ger: på/av, på medan spaken är låst.
- Handbromskraft ger: värde 0…1, hur långt spaken är dragen.

### Blinkers {#controller-turnsignals}

Blinkersspaken (specialkontroll).

- **Kanal**: **Blinkers (vänster − / höger +)** (standard), **Vänster blinker**, **Höger blinker** eller **Ljus**.
- Blinkers ger: värde −1 (vänster), 0 (av) eller +1 (höger).
- Vänster blinker och Höger blinker ger: värde 1 medan blinkern är på (blinkar i takt med lampan när kontrollens blinkning är påslagen), annars 0.
- Ljus ger: värde 1 medan ljuset är på, annars 0.

### Riktad pad {#controller-dpad}

- **Kanal**: **Upp / ner** eller **Vänster / höger**.
- Ger: värde +1 (upp eller höger), −1 (ner eller vänster) eller 0.

### Knapp {#controller-button}

- Ingen kanal.
- Ger: på/av, på medan den hålls intryckt.

### Brytare {#controller-switch}

- Ingen kanal.
- Ger: på/av.

### Stegswitch {#controller-stepper}

- Ingen kanal.
- Ger: värde: aktuellt steg delat med **Antal steg**, så att sista steget är 1 (−1 för sista negativa steget).

## Fordon {#src-vehicle}

En simulerad bil som styrs av instrumentpanelens pedaler, växelspak och handbroms: den accelererar, bromsar, rullar och backar som ett riktigt fordon, och raden får dess hastighet eller motorvarvtal. Paletten visar Fordon-block när instrumentpanelen har pedaler, en växelspak eller en handbroms, ett block per utgång, redan kopplat till den första kontrollen av varje sort.

- **Pedaler**: pedalerna på instrumentpanelen som styr fordonet (krävs).
- **Växelspak**: **ingen** eller en växelspak på instrumentpanelen. Utan växelspak backar fordonet när du håller in bromspedalen vid stillastående.
- **Handbroms**: **ingen** eller en handbroms på instrumentpanelen.
- **Fordonstyp**: **Personbil** (standard), **Terrängfordon**, **Sportbil** eller **Lastbil**. Typerna skiljer sig i tröghet och backhastighet; lastbilen har dessutom luftbroms.
- **Utgång**:
  - **Hastighet** (standard): värde −1…1, negativt vid backning;
  - **Motorvarvtal (varv/min)**: värde 0…1;
  - **Bromsning**: på/av, på medan fordonet bromsar;
  - **På handbromsen**: på/av.

Problem: ”Välj fordonets pedaler”, ”… finns inte på instrumentpanelen”.

<Screenshot name="links-vehicle-settings" alt="Inställningar för ingångsblocket Fordon" width={900} />

## Handkontroll {#src-gamepad}

Handkontrollen som är ansluten till din enhet. Blocket finns i paletten bara medan **Aktivera gamepad-block** är påslaget (sidan **Handkontroll** i det övre fältet); annars rapporterar raden ”Aktivera handkontrollsblock på sidan Handkontroll (övre fältet)”.

- **Ingång** (standard **Vänster spak Y**). Etiketterna följer **Gamepad-knappuppsättning** (Xbox / PlayStation):
  - **Vänster spak Y**, **Vänster spak X**, **Höger spak Y**, **Höger spak X**: värde −1…1;
  - **RT** / **R2**, **LT** / **L2** (avtryckare): värde;
  - **A**, **B**, **X**, **Y** / **Kryss**, **Cirkel**, **Fyrkant**, **Triangel**: på/av;
  - **LB** / **L1**, **RB** / **R1** (axelknappar): på/av;
  - **Upp**, **Ner**, **Vänster**, **Höger** (styrkors): på/av.

## Hubb {#src-hub}

En hubbs egen knapp eller en sensor: på hubben eller på en av dess portar. Det finns en Hubb-ingång per hubb i profilen, utom för Mould King-hubbar, som bara tar emot kommandon.

- **Hubb**: en hubb i profilen.
- **Knapp eller sensor**: bara det som den här hubben kan rapportera (lista nedan).
- **Port**: för sensorer på en port (motorvärden, portsensorer).
- **Hubbens orientering**: för lutning och acceleration på hubbar där den kan ändras: **Behåll** (standard) eller hur hubben är monterad i modellen.

Ett sensorvärde går längs raden delat med sin fulla skala och begränsat till −1…1: ett batteri på 50 % ger 0,5. En text-**Monitor** direkt efter sensorn visar det verkliga värdet med enhet.

| Knapp eller sensor | Signal | Enhet, full skala | Hubbar |
|---|---|---|---|
| **Knapp 1, 2 …** | på/av | | hubbar med knapp; knapparna på LEGO® Powered Up-fjärrkontrollen |
| **Batteri** | värde | %, 100 | hubbar som rapporterar det |
| **Batterispänning** | värde | V, 12 | hubbar som rapporterar det |
| **Utspänning** | värde | V, 12 | BuWizz 2.0 |
| **Temperatur** | värde | °C, 100 | hubbar som rapporterar det |
| **Lutning framåt** | värde | °, 90 | hubbar med lutningssensor |
| **Lutning i sidled** | värde | °, 180 | hubbar med lutningssensor |
| **Girning (yaw)** | värde | °, 180 | hubbar med girningsaxel |
| **Acceleration X / Y / Z** | värde | m/s², 19,6 | hubbar med accelerometer |
| **Motorhastighet** | värde | %, 100 | port; alla hubbar med portar |
| **Motorvinkel** | värde | °, 360 (relativ) | port; motorer med pulsgivare; inte SBrick, BuWizz 2.0, WeDo 2.0 |
| **Motorposition** | värde | °, 180 (absolut) | port; vinkelmotorer |
| **Motoreffekt** | värde | %, 100 | port; Robot Inventor |
| **Motorström** | värde | A, 3 | port; BuWizz 2.0, BuWizz 3.0 Pro |
| **Avståndssensor** | värde | 250 | port; inte SBrick eller BuWizz |
| **Färgsensor** | värde | färgnummer, 10 | port; inte SBrick, BuWizz eller WeDo 2.0 |
| **Reflekterat ljus**, **Omgivande ljus** | värde | %, 100 | port; inte SBrick, BuWizz eller WeDo 2.0 |
| **Lutningssensor: framåt / i sidled** | värde | °, 45 | port; lutningssensor för WeDo 2.0 / BOOST; inte SBrick eller BuWizz |
| **Effektläge** | värde | 1–4, 4 | BuWizz 2.0 |
| **Ansluten** | på/av | | alla hubbar |

När hubben är ansluten kontrollerar MOCPilot också enheten på porten: ”Port A: ingen motor där”, ”Port A: motorn har ingen pulsgivare”, ”Port A: ingen avståndssensor där” och så vidare.
