---
id: ProcessingBlocks
title: Bearbetningsblock
description: "Referens för alla bearbetningsblock i Snabbkopplingar: Invertera, Begränsa, Dödzon, Tröskel, Mjuk och Växla."
---

# Bearbetningsblock {#processing-blocks}

Bearbetningsblock sitter mellan ingången och åtgärden (eller indikatorn) och ändrar signalen på vägen. En rad kan ha hur många som helst, i valfri ordning. Ett block som inte kan ta emot den inkommande signalen fäster inte; i en fil rapporteras det som ”… fungerar inte med den här kontrollen”. Så använder du dem: [Bearbetning](/docs/Application/Links/Processing).

## Invertera {#mod-invert}

Vänder på signalen.

- Inga inställningar.
- Tar emot: värde eller på/av. Ger: samma sort.
- Värde: byter tecken (0,7 blir −0,7). På/av: på blir av och av blir på.

## Begränsa {#mod-limit}

Skalar ner värdet, så att fullt utslag inte ger mer än maxvärdet.

- **Maximum**: 20, 30, 40, 50, 60, 70, 80 eller 90 % (standard 50 %).
- Tar emot: värde eller på/av. Ger: värde (en begränsad knapp ger 0 eller maxvärdet).

## Dödzon {#mod-deadzone}

Behandlar små värden runt noll som noll; resten sträcks ut till hela intervallet igen, så att fullt utslag fortfarande ger 1.

- **Zon**: 5, 10, 15, 20 eller 30 % (standard 10 %).
- Tar emot: värde. Ger: värde.

## Tröskel {#mod-threshold}

Gör om ett värde till på/av.

- **På när värdet är**: **Över** (standard) eller **Under**.
- **Nivå (av full skala)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 eller 90 % (standard 20 %).
- Tar emot: värde. Ger: på/av.
- En liten hysteres (2 % av full skala) hindrar utgången från att fladdra när värdet ligger och väger vid nivån.

## Mjuk {#mod-smooth}

Närmar sig det inkommande värdet gradvis i stället för att hoppa.

- **Acceleration (till full fart)**: **Direkt**, 0,25, 0,5, 1, 2 eller 3 s (standard 0,5 s): tiden från 0 till fullt utslag bort från noll.
- **Inbromsning (till stopp)**: samma val (standard 0,5 s): tiden från fullt utslag tillbaka till 0.
- Tar emot: värde eller på/av. Ger: värde (en utjämnad knapp rampar upp och ner).

## Växla {#mod-toggle}

Gör om en tryckknapp till en brytare: varje tryck växlar utgången mellan på och av. Utgången börjar som av.

- Inga inställningar.
- Tar emot: på/av. Ger: på/av.
