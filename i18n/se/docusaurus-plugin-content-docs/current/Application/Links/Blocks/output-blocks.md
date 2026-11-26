---
id: OutputBlocks
title: Åtgärds- och utgångsblock
description: "Referens för alla åtgärder och utgångar i Snabbkopplingar: Motor, Servo, Ljus, åtgärder för Technic Move, BuWizz och Mould King, Hubb, Indikator, Hubbens LED, LED-matris, Kalibrera servon."
---

import Screenshot from '@site/src/components/Screenshot';

# Åtgärds- och utgångsblock {#operation-and-output-blocks}

Fliken **Utgångar** i paletten innehåller åtgärderna och utgångarna. Så använder du dem: [Åtgärder och utgångar](/docs/Application/Links/Operations).

- En **åtgärd** talar om vad som ska göras. En [Hubb](#hub-out)-utgång måste komma efter den och talar om var.
- En **direktutgång** ([Indikator](#dash-indicator), [Hubbens LED](#hub-led), [LED-matris](#hub-matrix), [Kalibrera servon](#cmd-calibrate)) avslutar raden på egen hand; raden får inte ha någon åtgärd.

**Motor**, **Servo**, **Motor i tid** och **Ljus** finns alltid i paletten. De andra åtgärderna visas bara när någon hubb i profilen kan utföra dem.

”På” nedan betyder en på/av-signal som är på, eller ett värde på minst 0,5 (oavsett tecken).

## Åtgärder för portar {#operations-for-ports}

### Motor {#op-motor}

Kör motorn med ingångens värde: ju längre du för spaken, desto snabbare; 0 stoppar den.

- Tar emot: värde eller på/av (på = full hastighet).
- **Vid stopp**: **Hubbens standard** (standard), **Rulla fritt**, **Broms** eller **Håll position**.
- **Hubbacceleration**: **Hubbens standard** (standard), **Snabb**, **Balanserad**, **Mjuk**, **Långsam** eller **Mycket långsam**: hubbens egen ramp. För en egen ramp använder du [Mjuk](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Stoppdetektering**: **Hubbens standard** (standard), **På** eller **Av**.
- Hubbar: alla hubbar med portar. **Vid stopp** och **Hubbacceleration** kräver en hubb med positionsstyrning (inte SBrick, BuWizz 2.0, WeDo 2.0 eller Mould King); **Stoppdetektering** kräver Robot Inventor. På en Technic Move Hub kör Motor bilen i läget **Bilprofil** och motorerna `A`–`C` i läget **Portar** ([Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)).

### Servo {#op-servo}

Styr med en motor som har pulsgivare: ingången −1…1 vrider motorn till *mitt + värde × vinkel*, och 0 för tillbaka den till mitten.

- Tar emot: värde eller på/av.
- **Kalibrering**: **Manuell** (standard) eller **Auto**.
- **Vinkel**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 varv, ±2 varv, ±3 varv eller ±5 varv (standard ±90°). Endast Manuell.
- **Mitt**: −20°, −10°, −5°, 0°, +5°, +10° eller +20° (standard 0°). Endast Manuell.
- **Vridhastighet**: 25, 50, 75 eller 100 % (standard 100 %).
- Manuell: nolläget är där motorn stod när strömmen slogs på, eller den position du ställer in med **Ställ in som noll** (justera först med **◀ 5°** / **5° ▶**).
- Auto: vid varje start vrider motorn till båda ändstoppen; mitten blir noll och slaglängden blir vinkeln. **Kalibrera nu** kör det direkt. Styrningen måste ha ändstopp.
- Hubbar och portar: en motor med pulsgivare på en hubb med positionsstyrning (inte SBrick, BuWizz 2.0, WeDo 2.0 eller Mould King). På en Technic Move Hub i läget **Bilprofil** vrider Servo hubbens kuggstång, som hubben kalibrerar själv; i läget **Portar** använder du port `C` med kalibreringen **Auto**.

<Screenshot name="links-servo-settings" alt="Inställningar för ett Servo-block" width={900} />

### Motor i tid {#op-timed}

Kör motorn en bestämd tid varje gång ingången slås på. Hastighet och riktning kommer från ingångens värde i det ögonblicket.

- Tar emot: värde eller på/av.
- **Tid**: 0,5, 1, 2, 3, 5 eller 10 s (standard 1 s).
- Hubbar: alla hubbar med portar; på en Technic Move Hub i läget **Bilprofil** kör den bilen.

### Kör ett antal grader {#op-degrees}

Vrider motorn en bestämd vinkel varje gång ingången slås på. En negativ ingång vrider den åt andra hållet.

- Tar emot: värde eller på/av.
- **Grader**: 45°, 90°, 180°, 1 varv, 2 varv, 3 varv, 5 varv eller 10 varv (standard 1 varv).
- **Hastighet**: 25, 50, 75 eller 100 % (standard 50 %).
- Hubbar och portar: en motor med pulsgivare på en hubb med positionsstyrning.

### Gå till position {#op-goto}

Vrider motorn till en absolut position när ingången slås på, och till en annan när den slås av. Den tar kortaste vägen.

- Tar emot: värde eller på/av.
- **Position när på**: 0°, 45°, 90°, 135°, 180°, 225°, 270° eller 315° (standard 90°).
- **Position när av**: **Stanna kvar** eller en av samma positioner (standard 0°).
- **Hastighet**: 25, 50, 75 eller 100 % (standard 50 %).
- Hubbar och portar: en vinkelmotor (absolut position) på en hubb med positionsstyrning.

### Ljus {#op-light}

Styr LEGO®-lampor på en port.

- Tar emot: värde eller på/av. Med ett värde följer ljusstyrkan det (−1 och 1 ger båda full ljusstyrka).
- **Ljusstyrka**: 25, 50, 75 eller 100 % (standard 100 %).
- **Blink: på**: **Ingen blink** (standard), 0,25, 0,5, 1 eller 2 s: hur länge lampan lyser i varje blink.
- **Blink: av**: **Samma som på** (standard), 0,25, 0,5, 1 eller 2 s: hur länge den är släckt.
- Hubbar: alla hubbar med portar utom WeDo 2.0. På en Technic Move Hub tänder och släcker Ljus bilens lampor i läget **Bilprofil**, och lamporna `1`–`6` en och en i läget **Portar**.

### Portfärg {#op-portcolor}

Ställer in färgen på portlysdioderna på en BuWizz 3.0 Pro.

- Tar emot: värde eller på/av.
- **Färg**: **Från listan** (standard) eller **RGB**.
- **Färg när på** (standard Röd) och **Färg när av** (standard Av): Av, Rosa, Lila, Blå, Ljusblå, Ljusgrön, Grön, Gul, Orange, Röd, Vit.
- **Röd**, **Grön**, **Blå** (RGB): 0, 32, 64, 128, 192 eller 255 (standard 255, 0, 0).
- Hubbar och portar: BuWizz 3.0 Pro, port 1–4. Lysdioderna släcks när programmet stoppas.

### Sensorlampor {#op-sensorlights}

Tänder de fyra segmenten runt ”ögonen” på Technic-avståndssensorn medan ingången är på.

- Tar emot: värde eller på/av.
- **Lampor**: **Alla** (standard), **Övre**, **Nedre**, **Vänster**, **Höger** eller **Diagonalt**.
- **Ljusstyrka**: 25, 50, 75 eller 100 % (standard 100 %).
- Hubbar och portar: Robot Inventor, SPIKE Prime och Technic Hub, en port med avståndssensorn. Lamporna släcks när programmet stoppas.

### Färgsensorns lampor {#op-colorlights}

Tänder de tre lamporna runt linsen på Technic-färgsensorn (SPIKE-färgsensorn) medan ingången är på.

- Tar emot: värde eller på/av.
- **Lampor**: **Alla** (standard), 1, 2, 3, 1 + 2, 2 + 3 eller 1 + 3.
- **Ljusstyrka**: 25, 50, 75 eller 100 % (standard 100 %).
- Hubbar och portar: Technic Hub, porten med färgsensorn.
- Medan dess lampor är tända mäter sensorn ingenting. När ingången slås av eller programmet stoppas släcks lamporna och sensorn mäter färger igen. En rad som läser färgsensorn på en port där en annan rad tänder lamporna är ett problem (”Rad 2 tänder färgsensorn på port A: en tänd sensor mäter ingenting”).

## Åtgärder för hela hubben {#operations-for-the-whole-hub}

Hubb-blocket efter de här åtgärderna tar inga portar.

### Broms {#op-brake}

Bromsar bilen medan ingången är på.

- Tar emot: värde eller på/av. Inga inställningar.
- Hubbar: Technic Move.

### Boost {#op-boost}

Växlar hubben till effektläget boost medan ingången är på, och tillbaka till normalt när den slås av.

- Tar emot: värde eller på/av. Inga inställningar.
- Hubbar: Technic Move.

### Effektpuls {#op-pulse}

Skickar en effektpuls varje gång ingången slås på: motorerna går med maximal effekt i ungefär två sekunder.

- Tar emot: värde eller på/av. Inga inställningar.
- Hubbar: Technic Move med konfigurationen **Batmobile™ Tumbler**; se [Konfigurationer för Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Effektläge {#op-powermode}

Ställer in effektläget på en BuWizz 2.0 när ingången slås på och, om du väljer ett, när den slås av.

- Tar emot: värde eller på/av.
- **Läge när på**: **Långsam**, **Normal** (standard), **Snabb** eller **Ludicrous**.
- **Läge när av**: **Behåll** (standard) eller ett av lägena.
- Hubbar: BuWizz 2.0.

### Kanal {#op-channel}

Byter styrkanal på en Mould King-hubb när ingången slås på och, om du väljer en, när den slås av.

- Tar emot: värde eller på/av.
- **Kanal när på**: **A** (standard), **B** eller **C**.
- **Kanal när av**: **Behåll** (standard), **A**, **B** eller **C**.
- Hubbar: Mould King 4.0 och 6.0.

## Utgångar {#outputs}

### Hubb {#hub-out}

Var åtgärden utförs: en hubb och dess portar. Det finns ett Hubb-block per hubb i profilen.

- **Hubb**: en hubb i profilen.
- **Portar**: en eller flera portar på hubben (A–D på de flesta hubbar och på SBrick, A–F på Robot Inventor och Mould King 6.0, 1–4 på BuWizz 2.0, 1–4 plus A och B på BuWizz 3.0 Pro). En port kan bara höra till en rad.
- Tar emot: en åtgärd. Technic Move-hubbar i läget **Bilprofil** och åtgärder för hela hubben tar inga portar. I läget **Portar** har en Technic Move Hub portarna A–C, och lamporna 1–6 för **Ljus**.
- Mer: [Hubbblocket och portar](/docs/Application/Links/HubsAndPorts).

### Indikator {#dash-indicator}

Visar värdet på en monitor på instrumentpanelen, precis som det är.

- Tar emot: värde eller på/av, utan någon åtgärd före.
- **Indikator på instrumentpanelen**: en **Textmonitor** (Monitor), en **Värdemonitor** (Batterinivå, Hastighetsmätare) eller en **Lutningsmonitor** på instrumentpanelen.
- **Axel**: **Lutning X** eller **Lutning Y**, endast för en lutningsmonitor (en rad per axel).
- En textmonitor direkt efter en hubbsensor visar det verkliga värdet med enhet.

### Hubbens LED {#hub-led}

Hubbens färgade statuslampa: en färg medan ingången är på, en annan medan den är av.

- Tar emot: värde eller på/av, utan någon åtgärd före.
- **Hubb**: en hubb med färglysdiod.
- **Färg**: **Från listan** (standard) eller **RGB**.
- **Färg när på** (standard Röd) och **Färg när av** (standard Av): Av, Rosa, Lila, Blå, Ljusblå, Ljusgrön, Grön, Gul, Orange, Röd, Vit.
- **Röd**, **Grön**, **Blå** (RGB): 0, 32, 64, 128, 192 eller 255 (standard 255, 0, 0).
- Hubbar: LEGO®-hubbar (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, Powered Up-fjärrkontrollen); inte BuWizz, SBrick eller Mould King.

### LED-matris {#hub-matrix}

Hubbens ljusmatris.

- Tar emot: värde eller på/av, utan någon åtgärd före.
- **Hubb**: en hubb med LED-matris.
- **Visa**: **Nivåstapel** (standard; raderna tänds nerifrån i takt med värdet), **Tal** (värdet från −100 till 100) eller **Bild när på**.
- **Bild**: **Hjärta** (standard), **Leende**, **Ledsen**, **Bock**, **Kryss**, **Pil upp**, **Pil ner**, **Pil vänster**, **Pil höger** eller **Alla tända**.
- **Orientering**: **Behåll** (standard), **Upprätt**, **Upp och ner**, **Vänster** eller **Höger**.
- Hubbar: Robot Inventor. Matrisen töms när programmet stoppas.

### Kalibrera servon {#cmd-calibrate}

Varje gång ingången slås på kalibreras alla [Servon](#op-servo) i läget **Auto** i programmet på nytt.

- Tar emot: värde eller på/av, utan någon åtgärd före. Inga inställningar.
- Programmet måste ha en klar Servo-rad i läget Auto, annars rapporterar raden ”Inget servo i automatiskt kalibreringsläge i det här programmet”.
