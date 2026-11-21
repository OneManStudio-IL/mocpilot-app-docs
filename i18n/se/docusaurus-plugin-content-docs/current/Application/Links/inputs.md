---
id: Inputs
title: Ingångar
description: "Ingångar i Snabbkopplingar: kontroller på instrumentpanelen, det simulerade fordonet, handkontrollen, hubbens knappar och sensorer."
---

import Screenshot from '@site/src/components/Screenshot';

# Ingångar {#inputs}

Varje rad börjar med en ingång. Fliken **Ingångar** i paletten innehåller:

- ett block per **kontroll på instrumentpanelen**; kontroller med flera kanaler (joystickens och styrkorsets axlar, ratt, pedaler, växelspak, handbroms, blinkers) får ett block per kanal;
- blocken **Fordon**, när instrumentpanelen har pedaler, en växelspak eller en handbroms;
- blocket **Handkontroll**, när handkontrollsblocken är aktiverade;
- ett **Hubb**-block per hubb i profilen (utom Mould King, som saknar knappar och sensorer).

Om fliken är tom står det ”Lägg till kontroller på instrumentpanelen eller hubbar under Mina hubbar: de visas här”.

<Screenshot name="links-palette-inputs" alt="Fliken Ingångar i paletten för Snabbkopplingar" width={900} />

Alla inställningar och värden för varje ingång finns i referensen [Ingångsblock](/docs/Application/Links/Blocks/InputBlocks).

## Kontroller på instrumentpanelen {#dashboard-controls}

Blocket [Kontroll](/docs/Application/Links/Blocks/InputBlocks#src-controller) hämtar en kontroll från instrumentpanelen via dess namn (**JOY1**, **SLDR1**, **BTN2** …) och, om kontrollen har flera, den **Kanal** du vill ha:

| Kontroll | Vad raden får |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **X-axel** eller **Y-axel**, −1…1 |
| [Skjutreglage](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [tågreglage](/docs/Application/Links/Blocks/InputBlocks#controller-train), [vridratt](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | dess läge |
| [Ratt](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Rattvinkel** −1…1 eller **Signalhorn** |
| [Pedaler](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Gaspedal** eller **Bromspedal**, 0…1 |
| [Växelspak](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Växel** eller **Riktning (R − / framåt +)** |
| [Handbroms](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Handbroms åtdragen** (på/av) eller **Handbromskraft** |
| [Blinkers](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Blinkers (vänster − / höger +)**, **Vänster blinker**, **Höger blinker** eller **Ljus** |
| [Riktad pad](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Upp / ner** eller **Vänster / höger**: −1, 0 eller +1 |
| [Knapp](/docs/Application/Links/Blocks/InputBlocks#controller-button) | på medan den hålls intryckt |
| [Brytare](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | på / av |
| [Stegswitch](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | aktuellt steg |

När du lägger till, byter namn på eller ändrar en kontroll på instrumentpanelen följer paletten och raderna med automatiskt. Om du ställer in en joystick på **Endast horisontellt (X)** rapporterar rader som använder dess Y-axel ”… rör sig inte längs den här axeln”.

## Kör som en riktig bil {#drive-like-a-real-car}

Ratten, pedalerna, växelspaken och handbromsen ger sina råa lägen: en pedalrad kör motorn exakt så mycket som pedalen är nedtryckt. För en modell som beter sig som en bil (den accelererar med tröghet, rullar, bromsar och backar i R) använder du i stället ingången [Fordon](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Den läser pedalerna, växelspaken och handbromsen tillsammans och ger fordonets **Hastighet**, **Motorvarvtal (varv/min)**, **Bromsning** eller **På handbromsen**:

- *Fordon (Hastighet)* → *Motor* → drivmotorer;
- *Ratt (Rattvinkel)* → *Servo* → styrning;
- *Fordon (Bromsning)* → *Ljus* → bromsljus;
- *Blinkers (Vänster blinker)* → *Ljus* → vänster blinkerslampa.

## Handkontroll {#gamepad}

Ett enda [Handkontroll](/docs/Application/Links/Blocks/InputBlocks#src-gamepad)-block täcker hela handkontrollen; välj en spak, avtryckare eller knapp under **Ingång**. Aktivera först **Aktivera gamepad-block** på [sidan Handkontroll](/docs/Application/Dashboard/Gamepad). Etiketterna följer **Gamepad-knappuppsättning** (Xbox eller PlayStation).

## Hubbens knappar och sensorer {#hub-buttons-and-sensors}

Ingången [Hubb](/docs/Application/Links/Blocks/InputBlocks#src-hub) läser en hubbs knapp eller en av dess sensorer: batteri, lutning, acceleration, motorns hastighet och position, avstånds- och färgsensorer på portarna med mera. Listan visar bara det som just den hubben kan rapportera. För lutning och acceleration ställer du in **Hubbens orientering** så att den stämmer med hur hubben sitter i modellen.

Värdet går längs raden skalat till −1…1. En text-**Monitor** direkt efter en sensor visar det verkliga värdet med enhet, till exempel ”7,85 V” eller ”−12°”.

Typiska användningar:

- *Batteri* → *Indikator* (Batterinivå);
- *Avståndssensor* → *Tröskel* (Under, 20 %) → *Motor i tid*: backa när något kommer nära;
- *Knapp 1* (Powered Up-fjärrkontrollen) → *Motor*: kör med den fysiska fjärrkontrollen.
