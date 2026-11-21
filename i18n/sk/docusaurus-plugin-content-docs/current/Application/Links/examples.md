---
id: Examples
title: "Príklady: auto, tank, žeriav, vlak"
description: "Hotové recepty Rýchlych prepojení pre auto, tank, žeriav a vlak."
---

# Príklady {#examples}

Hotové recepty. Najprv umiestnite ovládače na panel a pridajte huby v Moje huby, potom zostavte riadky.

## Auto s riadením servom {#car-with-servo-steering}

Panel: **JOY1** (Iba vertikálne) vľavo, **JOY2** (Iba horizontálne) vpravo, **BTN1** a monitor **Úroveň batérie**.

| # | Vstup | Spracovanie | Operácia | Výstup |
|---|---|---|---|---|
| 1 | JOY1, os Y | Mŕtva zóna 10 %, Plynulo 0,5 s | Motor | Technic Hub, porty A + B |
| 2 | JOY2, os X | | Servo (Auto, ±90°) | Technic Hub, port D |
| 3 | BTN1 | Prepínač | Svetlo | Technic Hub, port C |
| 4 | Hub: Batéria | | | Indikátor: Úroveň batérie |

Ak sa jeden hnací motor točí opačne, rozdeľte riadok 1 na dva riadky a do jedného z nich pridajte **Invertovať**.

## Auto s volantom, pedálmi a prevodovkou {#car-with-a-wheel-pedals-and-a-gearbox}

Panel: **Volant**, **Pedále**, **Radiaca páka**, **Ručná brzda** a **Smerovky**. Vstup [Vozidlo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) premení pedále, prevodovku a ručnú brzdu na rýchlosť, ktorá narastá a klesá ako v skutočnom aute.

| # | Vstup | Spracovanie | Operácia | Výstup |
|---|---|---|---|---|
| 1 | Vozidlo: Rýchlosť | | Motor | Technic Hub, porty A + B |
| 2 | Volant: Uhol natočenia volantu | | Servo (Auto) | Technic Hub, port D |
| 3 | Vozidlo: Brzdenie | | Svetlo | Technic Hub, port C (brzdové svetlá) |
| 4 | Smerovky: Ľavá smerovka | | Svetlo | City Hub, port A |
| 5 | Smerovky: Pravá smerovka | | Svetlo | City Hub, port B |

## Tank (dva pásy) {#tank-two-tracks}

Panel: dva zvislé posuvníky **VSLDR1** a **VSLDR2** so zapnutými voľbami **Návrat na nulu** a **Záporné hodnoty**.

| # | Vstup | Spracovanie | Operácia | Výstup |
|---|---|---|---|---|
| 1 | VSLDR1 | Plynulo 0,25 s | Motor | Hub, port A |
| 2 | VSLDR2 | Invertovať, Plynulo 0,25 s | Motor | Hub, port B |

S herným ovládačom použite pre riadok 1 Ľavá páčka Y a pre riadok 2 Pravá páčka Y.

## Žeriav {#crane}

Panel: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Vstup | Spracovanie | Operácia | Výstup |
|---|---|---|---|---|
| 1 | DPAD1, Vľavo / vpravo | Obmedzenie 50 % | Motor | Hub, port A (otáčanie) |
| 2 | DPAD1, Hore / dole | | Motor | Hub, port B (navijak háku) |
| 3 | SLDR1 | Mŕtva zóna 10 % | Motor | Hub, port C (výložník) |
| 4 | SWCH1 | | Svetlo (blikanie 0,5 s) | Hub, port D (maják) |

## Vlak {#train}

Panel: **Krokový spínač** **STPR1** s voľbou **Záporné hodnoty** (stupne rýchlosti dopredu aj dozadu) a **BTN1** pre svetlá.

| # | Vstup | Spracovanie | Operácia | Výstup |
|---|---|---|---|---|
| 1 | STPR1 | Plynulo 2 s | Motor | City Hub, port A |
| 2 | BTN1 | Prepínač | Svetlo | City Hub, port B |
| 3 | Hub: Batéria | | | Indikátor: Monitor |

Blok Plynulo zariadi, že sa vlak rozbieha a zastavuje ako skutočný. Ak máte na paneli **ovládač vlaku**, použite ho v riadku 1 namiesto STPR1: dáva polohu páky, pri cúvaní zápornú.

## Auto s Technic Move {#technic-move-car}

| # | Vstup | Spracovanie | Operácia | Výstup |
|---|---|---|---|---|
| 1 | Vozidlo: Rýchlosť | | Motor | Technic Move (pohon) |
| 2 | Volant: Uhol natočenia volantu | | Servo | Technic Move (riadenie) |
| 3 | BTN1 | Prepínač | Svetlo | Technic Move (svetlá) |
| 4 | BTN2 | | Boost | Technic Move |

Ak na paneli nie je radiaca páka, auto cúva, keď v stoji držíte brzdový pedál.

## Vyskúšajte to v prehliadači {#try-it-in-the-browser}

Ukážka Rýchlych prepojení na [mocpilot.com](https://mocpilot.com) obsahuje vzorový profil s podobnými riadkami; pozrite si [Webový editor](/docs/Introducing/WebEditor).
