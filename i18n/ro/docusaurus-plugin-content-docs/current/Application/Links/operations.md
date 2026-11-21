---
id: Operations
title: Operații și ieșiri
description: "Operațiile din Legături rapide (Motor, Servo, Lumină și altele) și ieșirile (Hub, Indicator, LED hub, Matrice LED, Calibrează servo-urile)."
---

import Screenshot from '@site/src/components/Screenshot';

# Operații și ieșiri {#operations-and-outputs}

Fila **Ieșiri** a paletei conține operațiile și ieșirile.

- O **operație** spune *ce* trebuie făcut (rotirea unui motor, virarea, clipirea unei lumini). Ea este urmată întotdeauna de o ieșire **Hub**, care spune *unde*: ce hub și ce porturi.
- O **ieșire directă** (Indicator, LED hub, Matrice LED, Calibrează servo-urile) încheie singură rândul, fără operație.

Operațiile obișnuite (Motor, Servo, Motor pe durată, Lumină) sunt mereu disponibile. Operațiile specifice huburilor apar doar când un hub al profilului le acceptă. Fiecare setare cu valorile ei și valoarea implicită: [Blocuri de operații și ieșiri](/docs/Application/Links/Blocks/OutputBlocks).

## Motoare și lumini {#motors-and-lights}

| Operație | Ce face | Utilizare tipică |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | acționează motorul la valoarea intrării; 0 îl oprește | tracțiune, trolii |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | rotește un motor cu encoder într-o poziție care urmează intrarea | direcție |
| [Motor pe durată](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | acționează motorul un timp stabilit la fiecare apăsare | uși, basculante |
| [Rotire cu grade](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | rotește motorul cu un unghi stabilit la fiecare apăsare | indexare, platforme rotative |
| [Mergi la poziție](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | trimite un motor unghiular într-o poziție când este pornit și în alta când este oprit | clapete, selectoare de trepte |
| [Lumină](/docs/Application/Links/Blocks/OutputBlocks#op-light) | aprinde luminile LEGO®, continuu sau intermitent | faruri, girofaruri, semnalizatoare |
| [Culoare port](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | colorează LED-urile porturilor unui BuWizz 3.0 Pro | culori de stare |
| [Luminile senzorului](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | aprinde „ochii” senzorului de distanță Technic (Robot Inventor) | fețe de roboți |

### Virarea cu Servo {#steering-with-servo}

Servo are nevoie de un motor cu encoder și de un mecanism de direcție pe care fie îl centrezi manual, fie are opritoare la capete.

- **Manual**: rotește axul la mijloc și atinge **Setează ca zero**; reglează fin cu **◀ 5°** / **5° ▶**. Apoi alege **Unghi** și, dacă roțile încă trag într-o parte, **Centru**.
- **Auto**: la fiecare pornire, motorul se rotește până la ambele opritoare, mijlocul devine zero, iar cursa devine unghiul. **Calibrează acum** face asta imediat. Mesaje: „Calibrare: motorul se rotește până la ambele opritoare…”, „Calibrat: servo-ul se rotește ±…°, centrul este zero”, „Calibrarea a eșuat: verifică hubul, motorul și dacă axul are opritoare”.

Pe un **Technic Move Hub**, hubul virează și își calibrează singur cremaliera; se aplică doar modul de calibrare.

<Screenshot name="links-servo-settings" alt="Setările unui bloc Servo" width={900} />

## Operații pentru tot hubul {#operations-for-the-whole-hub}

Acestea controlează hubul ca întreg, așa că blocul Hub de după ele nu are porturi.

| Operație | Hub | Ce face |
|---|---|---|
| [Frână](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | frânează cât timp intrarea este pornită |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | modul de putere boost cât timp este pornită, normal când este oprită |
| [Impuls de putere](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | un impuls de putere la fiecare apăsare (doar cu configurația Batmobile™ Tumbler) |
| [Mod de putere](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | schimbă modul de putere: Lentă, Normal, Rapidă, Ludicrous |
| [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | schimbă canalul de control: A, B, C |

## Ieșiri {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): hubul și porturile lui. Consultă [Blocul Hub și porturile](/docs/Application/Links/HubsAndPorts).
- [Indicator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): afișează valoarea pe un monitor din tabloul de bord (monitor text, nivelul bateriei, vitezometru, monitor de înclinare). Imediat după un senzor al hubului, un monitor text arată valoarea reală cu unitatea ei. Indicatorul afișează valoarea așa cum este, așa că rândul nu are operație. Consultă [Indicatori și monitoare](/docs/Application/Dashboard/Indicators).
- [LED hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led): lumina colorată a unui hub LEGO®, o culoare cât timp intrarea este pornită și alta cât timp este oprită.
- [Matrice LED](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): matricea de lumini a hubului Robot Inventor: o bară de nivel, un număr sau o imagine.
- [Calibrează servo-urile](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): recalibrează fiecare Servo în modul **Auto**. Pune-o pe un buton din tabloul de bord: *BTN3* → *Calibrează servo-urile*.

## Când programul se oprește {#when-the-program-stops}

Motoarele se opresc, matricea LED se golește, iar culorile porturilor și luminile senzorului se sting.
