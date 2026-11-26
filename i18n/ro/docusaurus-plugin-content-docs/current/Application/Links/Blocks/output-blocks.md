---
id: OutputBlocks
title: Blocuri de operații și ieșiri
description: "Referința tuturor operațiilor și ieșirilor din Legături rapide: Motor, Servo, Lumină, operațiile Technic Move, BuWizz și Mould King, Hub, Indicator, LED hub, Matrice LED, Calibrează servo-urile."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocuri de operații și ieșiri {#operation-and-output-blocks}

Fila **Ieșiri** a paletei conține operațiile și ieșirile. Cum le folosești: [Operații și ieșiri](/docs/Application/Links/Operations).

- O **operație** spune ce trebuie făcut. Ea trebuie urmată de o ieșire [Hub](#hub-out), care spune unde.
- O **ieșire directă** ([Indicator](#dash-indicator), [LED hub](#hub-led), [Matrice LED](#hub-matrix), [Calibrează servo-urile](#cmd-calibrate)) încheie singură rândul; rândul nu trebuie să aibă operație.

**Motor**, **Servo**, **Motor pe durată** și **Lumină** sunt mereu în paletă. Celelalte operații apar doar când un hub al profilului le poate executa.

„Pornit” înseamnă mai jos un semnal pornit/oprit aflat în starea pornit sau o valoare de cel puțin 0,5 (cu orice semn).

## Operații pentru porturi {#operations-for-ports}

### Motor {#op-motor}

Acționează motorul la valoarea intrării: cu cât împingi mai mult, cu atât mai repede; 0 îl oprește.

- Primește: valoare sau pornit/oprit (pornit = viteză maximă).
- **La oprire**: **Implicit hub** (implicit), **Liber**, **Frână** sau **Menține poziția**.
- **Accelerația hubului**: **Implicit hub** (implicit), **Rapidă**, **Echilibrată**, **Lin**, **Lentă** sau **Foarte lentă**: rampa proprie a hubului. Pentru o rampă proprie, folosește [Lin](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Detectarea blocării**: **Implicit hub** (implicit), **Pornit** sau **Oprit**.
- Huburi: orice hub cu porturi. **La oprire** și **Accelerația hubului** au nevoie de un hub cu controlul poziției (nu SBrick, BuWizz 2.0, WeDo 2.0 sau Mould King); **Detectarea blocării** are nevoie de Robot Inventor. Pe un Technic Move Hub, Motor acționează tracțiunea mașinii în modul **Profil de mașină** și motoarele `A`–`C` în modul **Porturi** ([Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)).

### Servo {#op-servo}

Virează cu un motor care are encoder: intrarea −1…1 rotește motorul la *centru + valoare × unghi*, iar 0 îl readuce în centru.

- Primește: valoare sau pornit/oprit.
- **Calibrare**: **Manual** (implicit) sau **Auto**.
- **Unghi**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 tură, ±2 ture, ±3 ture sau ±5 ture (implicit ±90°). Doar în modul Manual.
- **Centru**: −20°, −10°, −5°, 0°, +5°, +10° sau +20° (implicit 0°). Doar în modul Manual.
- **Viteza de rotire**: 25, 50, 75 sau 100 % (implicit 100 %).
- Manual: zero-ul este poziția motorului la pornire sau poziția setată cu **Setează ca zero** (ajustează mai întâi cu **◀ 5°** / **5° ▶**).
- Auto: la fiecare pornire, motorul se rotește până la ambele opritoare; mijlocul devine zero, iar cursa devine unghiul. **Calibrează acum** face asta imediat. Direcția trebuie să aibă opritoare.
- Huburi și porturi: un motor cu encoder pe un hub cu controlul poziției (nu SBrick, BuWizz 2.0, WeDo 2.0 sau Mould King). Pe un Technic Move Hub în modul **Profil de mașină**, Servo rotește cremaliera de direcție a hubului, pe care hubul o calibrează singur; în modul **Porturi**, folosește portul `C` cu calibrarea **Auto**.

<Screenshot name="links-servo-settings" alt="Setările unui bloc Servo" width={900} />

### Motor pe durată {#op-timed}

Acționează motorul un timp stabilit de fiecare dată când intrarea trece în pornit. Viteza și sensul vin din valoarea intrării în acel moment.

- Primește: valoare sau pornit/oprit.
- **Durată**: 0,5, 1, 2, 3, 5 sau 10 s (implicit 1 s).
- Huburi: orice hub cu porturi; pe un Technic Move Hub în modul **Profil de mașină** acționează tracțiunea mașinii.

### Rotire cu grade {#op-degrees}

Rotește motorul cu un unghi stabilit de fiecare dată când intrarea trece în pornit. O intrare negativă îl rotește în sens invers.

- Primește: valoare sau pornit/oprit.
- **Grade**: 45°, 90°, 180°, 1 tură, 2 ture, 3 ture, 5 ture sau 10 ture (implicit 1 tură).
- **Viteză**: 25, 50, 75 sau 100 % (implicit 50 %).
- Huburi și porturi: un motor cu encoder pe un hub cu controlul poziției.

### Mergi la poziție {#op-goto}

Rotește motorul într-o poziție absolută când intrarea trece în pornit și în alta când trece în oprit. Alege drumul cel mai scurt.

- Primește: valoare sau pornit/oprit.
- **Poziție la pornit**: 0°, 45°, 90°, 135°, 180°, 225°, 270° sau 315° (implicit 90°).
- **Poziție la oprit**: **Rămâi** sau una dintre aceleași poziții (implicit 0°).
- **Viteză**: 25, 50, 75 sau 100 % (implicit 50 %).
- Huburi și porturi: un motor unghiular (poziție absolută) pe un hub cu controlul poziției.

### Lumină {#op-light}

Acționează luminile LEGO® de pe un port.

- Primește: valoare sau pornit/oprit. Cu o valoare, luminozitatea o urmează (−1 și 1 înseamnă amândouă luminozitate maximă).
- **Luminozitate**: 25, 50, 75 sau 100 % (implicit 100 %).
- **Clipire: pornit**: **Fără clipire** (implicit), 0,25, 0,5, 1 sau 2 s: cât timp rămâne aprinsă lumina la fiecare clipire.
- **Clipire: oprit**: **Ca la pornit** (implicit), 0,25, 0,5, 1 sau 2 s: cât timp rămâne stinsă.
- Huburi: orice hub cu porturi, cu excepția WeDo 2.0. Pe un Technic Move Hub, Lumină aprinde și stinge luminile mașinii în modul **Profil de mașină**, iar luminile `1`–`6` una câte una în modul **Porturi**.

### Culoare port {#op-portcolor}

Setează culoarea LED-urilor porturilor unui BuWizz 3.0 Pro.

- Primește: valoare sau pornit/oprit.
- **Culoare**: **Din listă** (implicit) sau **RGB**.
- **Culoare la pornit** (implicit Roșu) și **Culoare la oprit** (implicit Oprit): Oprit, Roz, Mov, Albastru, Albastru deschis, Verde deschis, Verde, Galben, Portocaliu, Roșu, Alb.
- **Roșu**, **Verde**, **Albastru** (RGB): 0, 32, 64, 128, 192 sau 255 (implicit 255, 0, 0).
- Huburi și porturi: BuWizz 3.0 Pro, porturile 1–4. LED-urile se sting când programul se oprește.

### Luminile senzorului {#op-sensorlights}

Aprinde cele patru segmente din jurul „ochilor” senzorului de distanță Technic cât timp intrarea este pornită.

- Primește: valoare sau pornit/oprit.
- **Lumini**: **Toate** (implicit), **Sus**, **Jos**, **Stânga**, **Dreapta** sau **Diagonală**.
- **Luminozitate**: 25, 50, 75 sau 100 % (implicit 100 %).
- Huburi și porturi: Robot Inventor, SPIKE Prime și Technic Hub, un singur port, cel cu senzorul de distanță. Luminile se sting când programul se oprește.

### Luminile senzorului de culoare {#op-colorlights}

Aprinde cele trei lumini din jurul lentilei senzorului de culoare Technic (senzorul de culoare SPIKE) cât timp intrarea este pornită.

- Primește: valoare sau pornit/oprit.
- **Lumini**: **Toate** (implicit), 1, 2, 3, 1 + 2, 2 + 3 sau 1 + 3.
- **Luminozitate**: 25, 50, 75 sau 100 % (implicit 100 %).
- Huburi și porturi: Technic Hub, portul cu senzorul de culoare.
- Cât timp luminile lui sunt aprinse, senzorul nu măsoară nimic. Când intrarea se oprește sau programul se oprește, luminile se sting și senzorul măsoară din nou culorile. Un rând care citește senzorul de culoare de pe un port pe care îl aprinde alt rând este o problemă („Rândul 2 aprinde senzorul de culoare pe portul A: un senzor aprins nu măsoară nimic”).

## Operații pentru tot hubul {#operations-for-the-whole-hub}

Blocul Hub de după aceste operații nu are porturi.

### Frână {#op-brake}

Frânează mașina cât timp intrarea este pornită.

- Primește: valoare sau pornit/oprit. Fără setări.
- Huburi: Technic Move.

### Boost {#op-boost}

Trece hubul în modul de putere boost cât timp intrarea este pornită și înapoi la normal când aceasta trece în oprit.

- Primește: valoare sau pornit/oprit. Fără setări.
- Huburi: Technic Move.

### Impuls de putere {#op-pulse}

Trimite un impuls de putere de fiecare dată când intrarea trece în pornit: motoarele merg la putere maximă aproximativ două secunde.

- Primește: valoare sau pornit/oprit. Fără setări.
- Huburi: Technic Move cu configurația **Batmobile™ Tumbler**; consultă [Configurațiile Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Mod de putere {#op-powermode}

Setează modul de putere al unui BuWizz 2.0 când intrarea trece în pornit și, dacă alegi unul, când trece în oprit.

- Primește: valoare sau pornit/oprit.
- **Mod la pornit**: **Lentă**, **Normal** (implicit), **Rapidă** sau **Ludicrous**.
- **Mod la oprit**: **Păstrează** (implicit) sau unul dintre moduri.
- Huburi: BuWizz 2.0.

### Canal {#op-channel}

Schimbă canalul de control al unui hub Mould King când intrarea trece în pornit și, dacă alegi unul, când trece în oprit.

- Primește: valoare sau pornit/oprit.
- **Canal la pornit**: **A** (implicit), **B** sau **C**.
- **Canal la oprit**: **Păstrează** (implicit), **A**, **B** sau **C**.
- Huburi: Mould King 4.0 și 6.0.

## Ieșiri {#outputs}

### Hub {#hub-out}

Locul unde se execută operația: un hub și porturile lui. Există câte un bloc Hub pentru fiecare hub al profilului.

- **Hub**: un hub al profilului.
- **Porturi**: unul sau mai multe porturi ale acelui hub (A–D pe majoritatea huburilor și pe SBrick, A–F pe Robot Inventor și Mould King 6.0, 1–4 pe BuWizz 2.0, 1–4 plus A și B pe BuWizz 3.0 Pro). Un port poate aparține unui singur rând.
- Primește: o operație. Huburile Technic Move în modul **Profil de mașină** și operațiile pentru tot hubul nu au porturi. În modul **Porturi**, un Technic Move Hub are porturile A–C și, pentru **Lumină**, luminile 1–6.
- Mai multe: [Blocul Hub și porturile](/docs/Application/Links/HubsAndPorts).

### Indicator {#dash-indicator}

Afișează valoarea pe un monitor din tabloul de bord, așa cum este.

- Primește: valoare sau pornit/oprit, fără operație înainte.
- **Indicator tablou de bord**: un **Monitor text** (Monitor), un **Monitor valoare** (nivelul bateriei, vitezometru) sau un **Monitor înclinare** din tabloul de bord.
- **Axă**: **Înclinare X** sau **Înclinare Y**, doar pentru un monitor de înclinare (câte un rând pentru fiecare axă).
- Un monitor text pus imediat după un senzor al hubului arată valoarea reală cu unitatea ei.

### LED hub {#hub-led}

Lumina colorată de stare a hubului: o culoare cât timp intrarea este pornită, alta cât timp este oprită.

- Primește: valoare sau pornit/oprit, fără operație înainte.
- **Hub**: un hub cu LED color.
- **Culoare**: **Din listă** (implicit) sau **RGB**.
- **Culoare la pornit** (implicit Roșu) și **Culoare la oprit** (implicit Oprit): Oprit, Roz, Mov, Albastru, Albastru deschis, Verde deschis, Verde, Galben, Portocaliu, Roșu, Alb.
- **Roșu**, **Verde**, **Albastru** (RGB): 0, 32, 64, 128, 192 sau 255 (implicit 255, 0, 0).
- Huburi: huburile LEGO® (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, telecomanda Powered Up); nu BuWizz, SBrick sau Mould King.

### Matrice LED {#hub-matrix}

Matricea de lumini a hubului.

- Primește: valoare sau pornit/oprit, fără operație înainte.
- **Hub**: un hub cu matrice LED.
- **Afișează**: **Bară de nivel** (implicit; rândurile se aprind de jos în sus odată cu valoarea), **Număr** (valoarea de la −100 la 100) sau **Imagine la pornit**.
- **Imagine**: **Inimă** (implicit), **Zâmbet**, **Trist**, **Bifă**, **Cruce**, **Săgeată sus**, **Săgeată jos**, **Săgeată stânga**, **Săgeată dreapta** sau **Toate aprinse**.
- **Orientare**: **Păstrează** (implicit), **Drept**, **Cu susul în jos**, **Stânga** sau **Dreapta**.
- Huburi: Robot Inventor. Matricea se golește când programul se oprește.

### Calibrează servo-urile {#cmd-calibrate}

De fiecare dată când intrarea trece în pornit, fiecare [Servo](#op-servo) din program aflat în modul **Auto** se calibrează din nou.

- Primește: valoare sau pornit/oprit, fără operație înainte. Fără setări.
- Programul trebuie să aibă un rând Servo pregătit în modul Auto, altfel rândul raportează „Niciun servo în modul de calibrare Auto în acest program”.
