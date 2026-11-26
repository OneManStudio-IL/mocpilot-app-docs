---
id: HubsAndPorts
title: Hubbblocket och portar
description: "Hubbblocket i Snabbkopplingar, val av portar, portkontroller och frågan om upptagen port."
---

import Screenshot from '@site/src/components/Screenshot';

# Hubbblocket och portar {#hub-block-and-ports}

Utgången [Hubb](/docs/Application/Links/Blocks/OutputBlocks#hub-out) avslutar en rad efter en åtgärd. Det finns ett Hubb-block per hubb under **Mina hubbar**, så lägg först till dina hubbar där. Tills du har gjort det står det på fliken ”Lägg till hubbar under Mina hubbar eller indikatorer på instrumentpanelen: de visas här”.

## Vad Hubb-blocket visar {#what-the-hub-block-shows}

- hubbens namn och en **anslutningsprick** (ansluten eller inte);
- **portarna** som knappar: A, B, C, D … på LEGO®-hubbar och SBrick (A–F på Robot Inventor och Mould King 6.0), 1–4 på BuWizz 2.0, 1–4 plus A och B på BuWizz 3.0 Pro;
- en undertext: ”portar A, B”, ”välj portar”, ”hela hubben” (efter en åtgärd för hela hubben) eller ”körning, styrning, lampor” (Technic Move i läget **Bilprofil**).

## Välj portar {#choose-ports}

Tryck på en portknapp för att använda porten; tryck igen för att frigöra den. En rad kan styra **flera portar** samtidigt, till exempel två drivmotorer på A och B.

Behöver två motorer snurra åt motsatta håll? Gör två rader från samma ingång och lägg till **Invertera** i den ena.

## En port, en rad {#one-port-one-row}

En port hör till en rad. Om du väljer en port som en annan rad redan använder frågar MOCPilot:

> **Porten används redan**: På ”Technic Hub” port A används på rad 2 (Motor). Använda den på den här raden? Den andra raden förlorar porten och slutar driva den.

**Använd på den här raden** flyttar porten; **Avbryt** låter den vara kvar där den var. En port som används av två rader (till exempel i en gammal fil) rapporteras som ett problem: ”Port A används också på rad 2”.

<Screenshot name="port-in-use" alt="Dialogrutan Porten används redan" width={700} />

## Portkontroller {#port-checks}

När hubben är ansluten vet MOCPilot vad som sitter i varje port och kontrollerar att åtgärden passar:

| Problem | Betydelse |
|---|---|
| ”Port A: den här enheten kan inte fungera som servo (en motor med pulsgivare behövs)” | Servo och Kör ett antal grader behöver en motor med pulsgivare |
| ”Port A: motorn har ingen absolut position (endast vinkelmotorer)” | Gå till position behöver en vinkelmotor |
| ”Port A har en sensor, inte en motor” | enheten på porten är en sensor |
| ”Port A tar bara enkla hastighetskommandon: ingen positionsstyrning” | den här porten kan inte styra positioner |
| ”Port A har ingen LED: använd portarna 1-4” | Portfärg fungerar bara på port 1–4 på BuWizz 3.0 Pro |
| ”Sensorlampor: välj en port, den med avståndssensorn” | Sensorlampor tar exakt en port |
| ”Port A: ingen färgsensor där” | Färgsensorns lampor och ingångarna färgton, färgmättnad och färgljusstyrka kräver en färgsensor på porten |

Åtgärder som en hubb inte kan utföra erbjuds inte för den. Om du byter en rad till en annan hubb talar raden om vilken åtgärd som inte passar, till exempel ”Broms: endast Technic Move (… har inget bromskommando)”.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (i LEGO® Technics radiostyrda bilar) kan styras på två sätt. Välj ett med **Styrning** i Hubb-blockets fönster: **Bilprofil** (standard) eller **Portar**. Valet hör till hubben, så alla Hubb-block för den hubben använder samma val.

- **Bilprofil**: hubben styrs per funktion, inte per port. Dess Hubb-block visar **körning, styrning, lampor** och tar inga portar. Använd **Motor** eller **Motor i tid** för att köra, **Servo** för att styra, **Ljus** för lamporna och **Broms**, **Boost** och **Effektpuls** för specialfunktionerna. Körning, styrning, lampor, broms och boost kan var och en bara användas av en rad (”Rad 2 styr redan den här Technic Move”).
- **Portar**: hubben fungerar som de andra hubbarna med portar. Dess motorer är portarna `A`, `B` (drivmotorerna) och `C` (styrmotorn): **Motor**, **Motor i tid**, **Servo** (med kalibreringen **Auto** på `C`), **Kör ett antal grader**, **Gå till position**, **Vid stopp** och **Hubbacceleration** fungerar på dem. Dess sex lampor är portarna `1`–`6` i **Ljus**-rader. En [Hubb-ingång](/docs/Application/Links/Blocks/InputBlocks#src-hub) läser motorernas hastighet och vinkel. **Broms**, **Boost** och **Effektpuls** fungerar bara i läget **Bilprofil**.

En rad som inte passar hubbens läge är ett problem som säger vad du ska växla: ”… styrs av sin bilprofil: växla hubben till ”Portar” för detta” eller ”… styrs port för port: växla hubben till ”Bilprofil” för detta”. Profiler som skapades innan det här valet fanns öppnas i läget **Bilprofil**.

För att läsa in en bilkonfiguration i hubben (Porsche, Lamborghini, Batmobile) använder du **Mina hubbar → Välj konfiguration**. Se [Konfigurationer för Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Mould King-hubbar tar bara emot kommandon, så de har inga ingångar och ger ingen återkoppling om anslutningen. För att byta hubbens styrkanal använder du åtgärden [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
