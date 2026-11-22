---
id: SpecialControls
title: Specialkontroller
description: "Ratt, pedaler, växelspak, handbroms, blinkers och tågreglage: hur du använder dem, deras inställningar, utseenden, värden och block."
---

import Screenshot from '@site/src/components/Screenshot';

# Specialkontroller

Specialkontroller ser ut och fungerar som de riktiga: en ratt, pedaler, en växelspak, en handbroms, en blinkersspak och ett körreglage för lok. Var och en är en separat produkt: köp de du behöver eller få alla med [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="En instrumentpanel med ratt, pedaler, växelspak, handbroms, blinkers och tågreglage" width={900} />

| Kontroll | Produkt | Namn på instrumentpanelen | Ger programmet |
|---|---|---|---|
| [Ratt](#steering-wheel) | Ratt | STWHEEL | rattvinkel, signalhorn |
| [Pedaler](#pedals) | Pedaler | PDLS | gaspedal och broms |
| [Manuell växellåda](#gear-shifter) | Växelspak | GEAR | växel: R, N, 1…6 |
| [Automatisk växellåda](#gear-shifter) | Växelspak | GEARA | väljare: P, R, N, D |
| [Handbroms](#handbrake) | Handbroms | HBRK | kraft, låst |
| [Blinkers](#turn-signals) | Blinkers | STALK | vänster blinker, höger blinker, ljus |
| [Tågreglage](#train-controller) | Tågreglage | TRTHR | körsteg, riktning, dragkraft |

**Vridratt** är ingen separat produkt: den följer med varje betalt tema. Se [Kontrolltyper](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Lägga till en specialkontroll {#add-a-special-control}

1. Öppna instrumentpanelen och tryck på **+** (**Lägg till kontroll**; på en dator **+ Kontroll**).
2. Rulla till **Fordon och special** i listan med kontrolltyper och välj en kontroll.
3. Raden med utseenden visar alla dess utseenden. Välj ett och ställ sedan in kontrollen under **Konfigurera**.
4. Tryck på **Lägg till på instrumentpanelen**. För en kontroll du ännu inte äger trycker du på **Köp** eller **Allt med MocPilot Pro**.

<Screenshot name="special-control-looks" alt="Paletten Lägg till kontroll med ratten markerad och dess utseenden i raden med utseenden" width={900} />

## Utseenden {#looks}

Varje specialkontroll finns i många **utseenden**. De flesta matchar ett betalt tema (Racing, Aura, Klassisk, Hologram och så vidare), så att ratten, växelspaken och handbromsen kan passa ihop med resten av instrumentpanelen. Du kan byta utseende när som helst: markera kontrollen och välj ett annat under **Utseende** på fliken **Stil**. Utseendet ändrar bara bilden: värdena, blocken och programmet förblir desamma.

Vissa utseenden ställer också in en passande accentfärg när du väljer dem.

## Inställningar för alla specialkontroller {#settings-of-all-special-controls}

- **Utseende** (fliken Stil): se ovan.
- **Accentfärg** (fliken Stil): växelspak, handbroms, blinkers och tågreglage.
- **Lås kontrollern** och **Interaktivitet** (fliken Inställningar), som på alla kontroller. Se [Kontrollens egenskaper](/docs/Application/Dashboard/ControlProperties).

## Ratt {#steering-wheel}

Sätt ett finger på ratten och vrid den runt mitten. När du släpper fjädrar den tillbaka till mitten. Tryck på rattens mitt för att tuta: då vrids inte ratten.

**Inställningar**

- **Styrvinkelsvinkel** (20–120°, standard 60°): hur långt du vrider ratten för fullt utslag. Den ändrar inte värdena som programmet får.
- **Ljud effekter**: tutljudet och ljuden som programmet spelar från ratten. Appens ljud måste vara påslaget.

**Värden**: rattvinkeln från −100 (fullt vänster) via 0 till 100 (fullt höger); signalhornet är 100 medan du håller in det, annars 0.

**Utseenden**: Off-road-fordon, Tung lastbil, Superbil, Retro trä, Racingratt, Rally mocka, Off-road nytto, Koncept glöd, Långtradare, Familjesedan, Stadsbil, Sandbuggy, Klassisk 4x4, Byggmaskiner, Hi-Fi ljud, Aura, Klossar, Kretskärna, Djupa rymden, Tung transport, Neo Orbit, Terrängförarhytt, Racing, Rock Crawler, Taktisk, Klassisk, Solnedgång, Miami, Högteknologi, Hologram.

**Ljud** för programmet: Biltuta, Lastbilstuta, Sportbilstuta.

**Snabbkopplingar**: ingången [Ratt](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) med kanalerna **Rattvinkel** och **Signalhorn**.

## Pedaler {#pedals}

Bromspedalen sitter till vänster och gaspedalen till höger. Tryck på en pedal med ett finger: ju högre upp på pedalen fingret är, desto hårdare trycks den ned. Nära nederkanten trycks den lätt; nära överkanten helt. Släpp, så går pedalen upp igen. Du kan trycka på båda pedalerna samtidigt.

**Inställningar**: **Ljud effekter**: låter programmet spela pedalernas ljud. Appens ljud måste vara påslaget.

**Värden**: gaspedalen och bromsen, var och en från 0 till 100.

**Utseenden**: Off-road-fordon, Tung lastbil, Superbil, Retro krom, Kolfiber & röd, Racing borrade, Off-road grepp, Koncept glöd, Långtradare, Familjesedan, Stadsbil, Sandbuggy, Klassisk 4x4, Byggmaskiner, Hi-Fi ljud, Aura, Klossar, Kretskärna, Djupa rymden, Tung transport, Neo Orbit, Terrängförarhytt, Racing, Rock Crawler, Taktisk, Klassisk, Solnedgång, Miami, Högteknologi, Hologram.

**Ljud** för programmet: Bilbroms, Sportbilsbroms, Lastbilens luftbroms, Backvarnare.

**Snabbkopplingar**: ingången [Pedaler](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) med kanalerna **Gaspedal** och **Bromspedal**.

:::tip Pedaler ensamma gör ingen bil
Pedalerna ger bara hur hårt var och en trycks ned. Om en rad skickar gaspedalen direkt till en motor går motorn exakt så mycket som pedalen är nedtryckt. För en modell som accelererar gradvis, rullar fritt, bromsar och backar använder du [fordonssimulatorn](#vehicle-simulator).
:::

## Växelspak {#gear-shifter}

Produkten **Växelspak** har två kontroller: **Manuell växellåda** och **Automatisk växellåda**.

### Manuell växellåda {#manual-gearbox}

En H-växling med back och upp till sex framåtväxlar. Dra knoppen längs mittraden och uppåt eller nedåt in i en växel. När du släpper hoppar knoppen in i närmaste växel eller tillbaka till friläge.

- **Antal växlar** (2–6, standard 6, fliken Inställningar): växlingsmönstret ändras därefter. Back ligger alltid i kolumnen längst till vänster, friläget i mitten.
- **Värden**: −1 = back (R), 0 = friläge (N), 1…6 = framåtväxlar.

### Automatisk växellåda {#automatic-gearbox}

En väljare med fyra lägen: **P** (parkering), **R** (back), **N** (friläge) och **D** (körning). Hur du använder den beror på utseendet:

| Väljare | Så använder du den | Utseenden |
|---|---|---|
| Spak | skjut handtaget längs spåret; det stannar vid närmaste läge | Högteknologi |
| Vridväljare | vrid väljaren med ett finger; den klickar in i P, R, N eller D | Klassisk, Djupa rymden, Taktisk, Byggmaskiner, Hi-Fi ljud, Aura, Kretskärna, Rock Crawler, Terrängförarhytt, Neo Orbit, Terrängbil, Arbetshäst, Koncept, Sedan, Stadsbil, Klassisk 4x4 |
| Knappar | tryck på P, R, N eller D | Racing, Tung transport, Klossar, Tung lastbil, Retro, Rally, Superbil, Formel, Fjärrtrafik, Buggy, Solnedgång, Miami, Hologram |

- **Antal växlar** (2–8, standard 6, fliken Inställningar): hur många växlar [fordonssimulatorn](#vehicle-simulator) växlar igenom i D. När simulatorn väljer en växel visar väljaren den, till exempel **D3**.
- **Värden**: −2 = P, −1 = R, 0 = N, 1 = D. Alla tre väljarna ger samma värden, så programmet fungerar med alla utseenden.

Båda växellådorna har samma utseenden: Klassisk, Racing, Djupa rymden, Taktisk, Tung transport, Byggmaskiner, Hi-Fi ljud, Aura, Kretskärna, Rock Crawler, Terrängförarhytt, Klossar, Neo Orbit, Tung lastbil, Retro, Rally, Terrängbil, Superbil, Formel, Arbetshäst, Koncept, Fjärrtrafik, Sedan, Stadsbil, Buggy, Solnedgång, Klassisk 4x4, Miami, Högteknologi, Hologram.

**Snabbkopplingar**: ingången [Växelspak](/docs/Application/Links/Blocks/InputBlocks#controller-gear) med kanalerna **Växel** (manuell: växeln i förhållande till antalet växlar, back negativ; automatisk: riktningen) och **Riktning (R − / framåt +)**: −1 i back, 0 i friläge och parkering, +1 i alla framåtväxlar.

## Handbroms {#handbrake}

En handbromsspak. Ta tag i spakens grepp och dra den nedåt. Bromskraften följer hur långt du drar. Släpp, så fjädrar spaken tillbaka.

För att **låsa** den drar du spaken hela vägen och drar sedan fingret längs spaken mot dess fäste: greppet glider ned och spaken förblir låst. För att **lossa** en låst spak trycker du på kontrollen eller drar tillbaka spaken.

**Värden**: kraften från 0 till 100 och om spaken är låst.

**Utseenden**: Klassisk, Rally, Tung lastbil, Retro, Djupa rymden, Taktisk, Aura, Tung transport, Byggmaskiner, Hi-Fi ljud, Neo Orbit, Terrängförarhytt, Racing, Klossar, Kretskärna, Rock Crawler, Terrängbil, Superbil, Formel, Arbetshäst, Koncept, Fjärrtrafik, Sedan, Stadsbil, Buggy, Solnedgång, Klassisk 4x4, Miami, Högteknologi, Hologram.

**Snabbkopplingar**: ingången [Handbroms](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) med kanalerna **Handbroms åtdragen** (på/av, som en brytare) och **Handbromskraft**.

## Blinkers {#turn-signals}

En blinkersspak med ljusomkopplare.

- Dra spaken **uppåt** för vänster blinker och **nedåt** för höger blinker. Den stannar där du lämnar den; dra tillbaka den till mitten för att slå av blinkern.
- **Tryck** på spaken eller strålkastarknappen för att slå på eller av ljuset. Det flyttar inte spaken.

**Inställningar**

- **Ikon: left**, **Ikon: light**, **Ikon: right** (fliken Stil): ikonerna för indikatorlamporna.
- **Blinkerutgångarna blinkar** (fliken Inställningar, påslagen som standard): blinkerutgångarna blinkar i takt med lampan på spaken, så att en lampa som är ansluten till dem blinkar av sig själv. När inställningen är avslagen lyser utgångarna med fast sken medan blinkern är på. Blocken ser alltid det fasta läget.

**Värden**: vänster blinker, höger blinker och ljus, var och en på eller av.

**Utseenden**: Klassisk, Racing, Djupa rymden, Taktisk, Tung transport, Byggmaskiner, Hi-Fi ljud, Aura, Kretskärna, Rock Crawler, Terrängförarhytt, Klossar, Neo Orbit, Tung lastbil, Retro, Rally, Terrängbil, Superbil, Formel, Arbetshäst, Koncept, Fjärrtrafik, Sedan, Stadsbil, Buggy, Solnedgång, Klassisk 4x4, Miami, Högteknologi, Hologram.

**Snabbkopplingar**: ingången [Blinkers](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) med kanalerna **Blinkers (vänster − / höger +)** (två lampor med motsatt polaritet på en port), **Vänster blinker**, **Höger blinker** och **Ljus**.

## Tågreglage {#train-controller}

Ett körreglage för lok med körspak och riktningsväljare.

- **Körreglage**: dra spaken uppåt eller nedåt. Den har 8 körsteg (0–8) och stannar på det steg där du lämnar den.
- **Riktningsväljare**: dra dess knopp uppåt för **framåt** eller nedåt för **back**; mitten är **neutral**. Knoppen hoppar från läge till läge och stannar aldrig mittemellan. Precis som i en riktig förarhytt rör den sig bara när körspaken står på 0.

**Värden**: körsteget (0–8), riktningsväljaren (1 = framåt, 0 = neutral, −1 = back) och **dragkraften**: körsteg ÷ 8 × 100 med riktningens tecken, från −100 till 100. Dragkraften kan driva en tågmotor direkt.

**Utseenden**: Original, Byggmaskiner, Hi-Fi ljud, Aura, Klossar, Buggy, Kretskärna, Stadsbil, Klassisk, Koncept, Djupa rymden, Terrängbil, Tung transport, Klassisk 4x4, Tung lastbil, Miami, Neo Orbit, Superbil, Arbetshäst, Terrängförarhytt, Racing, Rally, Rock Crawler, Sedan, Solnedgång, Taktisk, Fjärrtrafik, Retro, Formel, Högteknologi, Hologram.

**Snabbkopplingar**: ingången [Skjutreglage](/docs/Application/Links/Blocks/InputBlocks#controller-train); den ger dragkraften.

## Block {#blocks}

Varje specialkontroll lägger till egna block i kategorin **Skärmkontroller** i Logikblock:

| Kontroll | Händelser | Värden |
|---|---|---|
| Ratt | *när ratt … rörs / trycks / släpps* | *ratt …*, *är ratt … intryckt / släppt?* |
| Pedaler | *när pedaler … valfri / broms / gas rörs / trycks / släpps* | *pedaler … gas / broms*, *är pedal … intryckt / släppt?* |
| Växellådor | *när växellåda … byter växel / växlar upp / växlar ned / växlar till friläge / back / parkering* | *växel …*, *är växellåda … i friläge / i back / i en framåtväxel / i parkering?*, *växlar för …* |
| Handbroms | *när handbroms … dras / låses / låses upp / släpps* | *handbromskraft …*, *är handbroms … låst / olåst / åtdragen?* |
| Blinkers | *när blinkers … vänster blinker / höger blinker / ljus slås på / av* | *blinkers … vänster blinker / höger blinker / ljus är på?* |
| Tågreglage | *när körkontroll … körsteg ändrat / höjt / sänkt, körkontroll på noll, riktningsväljare flyttad, spak släppt* | *körkontroll … dragkraft / körsteg / riktningsväljare*, *är körkontroll … i framåt / i back / i neutral / på körsteg 0?* |

Ratten och pedalerna har också blocket *ljud … från …*: det väljer ett av deras ljud för blocken i **Ljud**. Detaljer: [Instrumentpanelens kontroller](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Fordonssimulator {#vehicle-simulator}

Specialkontroller ger bara rå inmatning. **Fordonssimulatorn** gör om pedalerna, växelspaken och handbromsen till en modell som kör som en bil: den accelererar med tröghet, rullar fritt, bromsar, backar, växlar i D och står still på handbromsen.

- **Snabbkopplingar**: använd ingången [Fordon](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Välj **Pedaler**, **Växelspak** och **Handbroms** från din instrumentpanel, **Fordonstyp** (Personbil, Terrängfordon, Sportbil, Lastbil) och **Utgång**: **Hastighet**, **Motorvarvtal (varv/min)**, **Bromsning** eller **På handbromsen**.
- **Logikblock**: när instrumentpanelen har pedaler, en växelspak eller en handbroms visas kategorin **Simulator**. Skapa ett fordon där (**Skapa fordon**) och lägg blocket *kör* under en händelse. Koppla värden till dess fält: *gas*, *broms*, *växel*, *för* (antal växlar; blocket *växlar för …* passar här), *handbroms* och *låst*. Andra Simulator-block ställer in fordonstyp, motorns tröghet och backhastigheten, läser av hastigheten, motorvarvtalet och växeln, och reagerar när fordonet startar, stannar, bromsar eller växlar.

Så kör simulatorn:

- **Gaspedal** accelererar modellen med tröghet; släpp den så rullar modellen fritt. **Broms** saktar ned den.
- **Utan växellåda**: om du håller in bromsen när modellen har stannat backar den.
- **Manuell växellåda**: R backar, N kör inte. Varje växel kan också begränsa toppfarten.
- **Automatisk växellåda**: R backar, N kör inte, P håller modellen still som en låst handbroms. I D växlar simulatorn upp och ned av sig själv och visar växeln på väljaren.
- **Handbroms**: dess kraft läggs till bromsningen; en låst handbroms kan hålla modellen still.
- **Fordonstyp**: en lastbil är tyngre (mer tröghet) och har luftbroms; en sportbil reagerar snabbt och backar fortare.

De sista pedalerna, växelspaken eller handbromsen kan inte tas bort medan programmet använder Simulator-block.
