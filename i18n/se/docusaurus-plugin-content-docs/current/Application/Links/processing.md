---
id: Processing
title: Bearbetning
description: "Bearbetningsblock i Snabbkopplingar: Invertera, Begränsa, Dödzon, Tröskel, Mjuk och Växla."
---

# Bearbetning {#processing}

Bearbetningsblock sitter mellan ingången och åtgärden och ändrar värdet på vägen. En rad kan ha inget, ett eller flera, i valfri ordning. Inställningar och tillåtna värden: [Bearbetningsblock](/docs/Application/Links/Blocks/ProcessingBlocks).

| Block | Vad det gör |
|---|---|
| [Invertera](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | vänder riktningen eller byter på och av |
| [Begränsa](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | sätter ett tak för värdet |
| [Dödzon](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignorerar små rörelser runt noll |
| [Tröskel](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | gör om ett värde till på/av |
| [Mjuk](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | accelererar och bromsar gradvis |
| [Växla](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | tryck en gång för på, en gång till för av |

## Invertera {#invert}

Snurrar motorn åt fel håll? Lägg till **Invertera** i stället för att bygga om modellen. För två motorer som ska snurra åt motsatta håll (vänster och höger band, två sidor av en växellåda) gör du två rader från samma ingång och lägger Invertera i den ena.

## Begränsa {#limit}

Gör modellen långsammare och lättare att styra: med **Maximum** 50 % ger fullt spakutslag halv hastighet. Bra för barn, körning inomhus och känsliga mekanismer.

## Dödzon {#dead-zone}

En joystick vilar sällan exakt på noll, så en motor kan brumma eller krypa. **Dödzon** behandlar små värden som noll. 10 % är en bra början.

## Tröskel {#threshold}

Gör om ett värde till på/av: ”på när värdet är **Över** 20 %”. Med en sensor är *Avståndssensor* → *Tröskel* (Under, 20 %) på när något är nära. Tröskel har en liten hysteres, så den fladdrar inte vid gränsen.

## Mjuk {#smooth}

Startar och stannar gradvis, som ett riktigt fordon. Acceleration och inbromsning ställs in var för sig: en tung lastbil kan behöva 2 s för att komma upp i fart och 0,5 s för att stanna. På en lampa tonar Mjuk ljuset upp och ner.

## Växla {#toggle}

Gör om en knapp till en brytare: tryck en gång för på, tryck igen för av. *Knapp* → *Växla* → *Ljus*.

## Tips {#tips}

- Ordningen spelar roll: *Dödzon → Begränsa → Mjuk* är en bra kedja för körning.
- Ett block som inte passar signalen fäster inte: Växla behöver en på/av-ingång; Dödzon och Tröskel behöver ett värde.
- Följ de aktuella värdena medan programmet körs för att se vad varje block gör.
