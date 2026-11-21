---
id: Examples
title: "Příklady: auto, tank, jeřáb, vlak"
description: "Hotové recepty Rychlých propojení pro auto, tank, jeřáb a vlak."
---

# Příklady {#examples}

Hotové recepty. Nejprve dejte ovládací prvky na panel a přidejte huby v Mých hubech, pak sestavte řádky.

## Auto se servořízením {#car-with-servo-steering}

Panel: **JOY1** (Pouze svisle) vlevo, **JOY2** (Pouze vodorovně) vpravo, **BTN1** a monitor **Úroveň baterie**.

| # | Vstup | Zpracování | Operace | Výstup |
|---|---|---|---|---|
| 1 | JOY1, Osa Y | Mrtvá zóna 10 %, Plynule 0,5 s | Motor | Technic Hub, porty A + B |
| 2 | JOY2, Osa X | | Servo (Auto, ±90°) | Technic Hub, port D |
| 3 | BTN1 | Přepínač | Světlo | Technic Hub, port C |
| 4 | Hub: Baterie | | | Indikátor: Úroveň baterie |

Pokud se jeden hnací motor točí opačně, rozdělte řádek 1 na dva řádky a do jednoho z nich přidejte **Obrátit**.

## Auto s volantem, pedály a převodovkou {#car-with-a-wheel-pedals-and-a-gearbox}

Panel: **Volant**, **Pedály**, **Řadicí páka**, **Ruční brzda** a **Blinkry**. Vstup [Vozidlo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) promění pedály, převodovku a ruční brzdu v rychlost, která narůstá a odeznívá jako u skutečného auta.

| # | Vstup | Zpracování | Operace | Výstup |
|---|---|---|---|---|
| 1 | Vozidlo: Rychlost | | Motor | Technic Hub, porty A + B |
| 2 | Volant: Úhel řízení | | Servo (Auto) | Technic Hub, port D |
| 3 | Vozidlo: Brzdění | | Světlo | Technic Hub, port C (brzdová světla) |
| 4 | Blinkry: Levý blinkr | | Světlo | City Hub, port A |
| 5 | Blinkry: Pravý blinkr | | Světlo | City Hub, port B |

## Tank (dva pásy) {#tank-two-tracks}

Panel: dva svislé posuvníky **VSLDR1** a **VSLDR2** se zapnutým **Návrat na nulu** a **Záporné hodnoty**.

| # | Vstup | Zpracování | Operace | Výstup |
|---|---|---|---|---|
| 1 | VSLDR1 | Plynule 0,25 s | Motor | Hub, port A |
| 2 | VSLDR2 | Obrátit, Plynule 0,25 s | Motor | Hub, port B |

S gamepadem použijte pro řádek 1 Levá páčka Y a pro řádek 2 Pravá páčka Y.

## Jeřáb {#crane}

Panel: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Vstup | Zpracování | Operace | Výstup |
|---|---|---|---|---|
| 1 | DPAD1, Vlevo / vpravo | Omezení 50 % | Motor | Hub, port A (otáčení) |
| 2 | DPAD1, Nahoru / dolů | | Motor | Hub, port B (naviják háku) |
| 3 | SLDR1 | Mrtvá zóna 10 % | Motor | Hub, port C (výložník) |
| 4 | SWCH1 | | Světlo (blikání 0,5 s) | Hub, port D (maják) |

## Vlak {#train}

Panel: **Krokový spínač** **STPR1** se **Záporné hodnoty** (stupně rychlosti vpřed a vzad) a **BTN1** pro světla.

| # | Vstup | Zpracování | Operace | Výstup |
|---|---|---|---|---|
| 1 | STPR1 | Plynule 2 s | Motor | City Hub, port A |
| 2 | BTN1 | Přepínač | Světlo | City Hub, port B |
| 3 | Hub: Baterie | | | Indikátor: Monitor |

Blok Plynule zajistí, že se vlak rozjíždí a zastavuje jako skutečný. Pokud máte na panelu **jízdní kontrolér**, použijte ho v řádku 1 místo STPR1: dává polohu páky, při couvání zápornou.

## Auto s Technic Move {#technic-move-car}

| # | Vstup | Zpracování | Operace | Výstup |
|---|---|---|---|---|
| 1 | Vozidlo: Rychlost | | Motor | Technic Move (pohon) |
| 2 | Volant: Úhel řízení | | Servo | Technic Move (řízení) |
| 3 | BTN1 | Přepínač | Světlo | Technic Move (světla) |
| 4 | BTN2 | | Boost | Technic Move |

Bez řadicí páky na panelu auto couvá, když ve stoji držíte brzdový pedál.

## Vyzkoušejte to v prohlížeči {#try-it-in-the-browser}

Demo Rychlých propojení na [mocpilot.com](https://mocpilot.com) obsahuje ukázkový profil s podobnými řádky; viz [Webový editor](/docs/Introducing/WebEditor).
