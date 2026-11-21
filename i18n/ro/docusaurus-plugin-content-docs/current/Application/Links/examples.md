---
id: Examples
title: "Exemple: mașină, tanc, macara, tren"
description: "Rețete Legături rapide gata făcute pentru o mașină, un tanc, o macara și un tren."
---

# Exemple {#examples}

Rețete gata făcute. Mai întâi pune comenzile în tabloul de bord și adaugă huburile în Huburile mele, apoi construiește rândurile.

## Mașină cu direcție servo {#car-with-servo-steering}

Tabloul de bord: **JOY1** (doar vertical) în stânga, **JOY2** (doar orizontal) în dreapta, **BTN1** și un monitor **Nivelul bateriei**.

| # | Intrare | Procesare | Operație | Ieșire |
|---|---|---|---|---|
| 1 | JOY1, axa Y | Zonă moartă 10 %, Lin 0,5 s | Motor | Technic Hub, porturile A + B |
| 2 | JOY2, axa X | | Servo (Auto, ±90°) | Technic Hub, portul D |
| 3 | BTN1 | Comutare | Lumină | Technic Hub, portul C |
| 4 | Hub: Baterie | | | Indicator: nivelul bateriei |

Dacă un motor de tracțiune se rotește în sensul greșit, împarte rândul 1 în două rânduri și adaugă **Inversează** la unul dintre ele.

## Mașină cu volan, pedale și cutie de viteze {#car-with-a-wheel-pedals-and-a-gearbox}

Tabloul de bord: un **Volan**, **Pedale**, un **Schimbător de viteze**, o **Frână de mână** și **Semnalizare**. Intrarea [Vehicul](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) transformă pedalele, cutia de viteze și frâna de mână într-o viteză care crește și scade ca la o mașină adevărată.

| # | Intrare | Procesare | Operație | Ieșire |
|---|---|---|---|---|
| 1 | Vehicul: Viteză | | Motor | Technic Hub, porturile A + B |
| 2 | Volan: Unghi de virare | | Servo (Auto) | Technic Hub, portul D |
| 3 | Vehicul: Frânare | | Lumină | Technic Hub, portul C (stopuri) |
| 4 | Semnalizare: Semnalizare stânga | | Lumină | City Hub, portul A |
| 5 | Semnalizare: Semnalizare dreapta | | Lumină | City Hub, portul B |

## Tanc (două șenile) {#tank-two-tracks}

Tabloul de bord: două glisoare verticale **VSLDR1** și **VSLDR2** cu **Revenire la zero** și **Valori negative** activate.

| # | Intrare | Procesare | Operație | Ieșire |
|---|---|---|---|---|
| 1 | VSLDR1 | Lin 0,25 s | Motor | Hub, portul A |
| 2 | VSLDR2 | Inversează, Lin 0,25 s | Motor | Hub, portul B |

Cu un gamepad, folosește Stick stânga Y pentru rândul 1 și Stick dreapta Y pentru rândul 2.

## Macara {#crane}

Tabloul de bord: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Intrare | Procesare | Operație | Ieșire |
|---|---|---|---|---|
| 1 | DPAD1, Stânga / dreapta | Limită 50 % | Motor | Hub, portul A (rotire) |
| 2 | DPAD1, Sus / jos | | Motor | Hub, portul B (troliul cârligului) |
| 3 | SLDR1 | Zonă moartă 10 % | Motor | Hub, portul C (braț) |
| 4 | SWCH1 | | Lumină (clipire 0,5 s) | Hub, portul D (girofar) |

## Tren {#train}

Tabloul de bord: un **Comutator cu trepte** **STPR1** cu **Valori negative** (trepte de viteză înainte și înapoi) și **BTN1** pentru lumini.

| # | Intrare | Procesare | Operație | Ieșire |
|---|---|---|---|---|
| 1 | STPR1 | Lin 2 s | Motor | City Hub, portul A |
| 2 | BTN1 | Comutare | Lumină | City Hub, portul B |
| 3 | Hub: Baterie | | | Indicator: Monitor |

Blocul Lin face ca trenul să plece și să oprească precum unul adevărat. Cu un **controler de tren** în tabloul de bord, folosește-l în rândul 1 în loc de STPR1: dă poziția manetei, negativă la mersul înapoi.

## Mașină Technic Move {#technic-move-car}

| # | Intrare | Procesare | Operație | Ieșire |
|---|---|---|---|---|
| 1 | Vehicul: Viteză | | Motor | Technic Move (tracțiune) |
| 2 | Volan: Unghi de virare | | Servo | Technic Move (direcție) |
| 3 | BTN1 | Comutare | Lumină | Technic Move (lumini) |
| 4 | BTN2 | | Boost | Technic Move |

Fără schimbător de viteze în tabloul de bord, mașina merge înapoi când ții pedala de frână apăsată pe loc.

## Încearcă în browser {#try-it-in-the-browser}

Demonstrația Legături rapide de pe [mocpilot.com](https://mocpilot.com) are un profil exemplu cu rânduri ca acestea; consultă [Editorul web](/docs/Introducing/WebEditor).
