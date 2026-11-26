---
id: InputBlocks
title: Blocuri de intrare
description: "Referința tuturor intrărilor din Legături rapide: comenzile din tabloul de bord și canalele lor, vehiculul, gamepadul, butoanele și senzorii hubului."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocuri de intrare {#input-blocks}

Fiecare rând începe cu o intrare. Fila **Intrări** a paletei arată blocurile pe care profilul tău le poate folosi chiar acum: câte un bloc pentru fiecare comandă din tabloul de bord (câte unul pentru fiecare canal la comenzile cu mai multe canale), blocurile **Vehicul**, blocul **Gamepad** și câte un bloc **Hub** pentru fiecare hub. Cum le folosești: [Intrări](/docs/Application/Links/Inputs).

Fiecare intrare trimite de-a lungul rândului unul dintre două semnale:

- **valoare**: un număr de la −1 la 1 (0…1 pentru comenzile care nu au parte negativă);
- **pornit/oprit**: 1 sau 0.

Blocurile de procesare și operațiile acceptă doar semnalele cu care pot lucra; consultă [Blocuri de procesare](/docs/Application/Links/Blocks/ProcessingBlocks).

## Controler {#src-controller}

O comandă din tabloul de bord, afișată după numele ei (**JOY1**, **SLDR1**, **BTN2**…).

- **Controler**: orice comandă din tabloul de bord din lista de mai jos. Monitoarele sunt ieșiri, nu intrări.
- **Canal**: ce oferă comanda, pentru comenzile cu mai multe canale. Paleta oferă câte un bloc pentru fiecare canal.

Volanul, pedalele, schimbătorul de viteze, frâna de mână, semnalizatoarele, cutia de transfer și controlerul de tren sunt descrise la [Comenzi speciale](/docs/Application/Dashboard/SpecialControls).

Dacă comanda este eliminată din tabloul de bord, rândul raportează „Alege un controler al tabloului de bord”. Dacă respectivul canal nu mai există, raportează „Alege ce oferă …” (pentru un joystick: „… nu se mișcă pe această axă”).

### Joystick {#controller-joystick}

- **Canal**: **Axa X** sau **Axa Y**. Un joystick setat la **Doar orizontal (X)** sau **Doar vertical (Y)** oferă doar acea axă.
- Oferă: valoare −1…1, 0 în centru.

### Slider, slider vertical {#controller-slider}

- Fără canal.
- Oferă: valoare 0…1 sau −1…1 când **Valori negative** este activat.

### Controler de tren {#controller-train}

Controlerul de tren (comandă specială) funcționează ca un slider în Legături rapide.

- Fără canal.
- Oferă: valoare −1…1: poziția manetei ca parte din toate treptele, negativă când inversorul este pe mers înapoi, 0 la neutru.

### Buton rotativ {#controller-knob}

Butonul rotativ din temele plătite funcționează ca un slider în Legături rapide.

- Fără canal.
- Oferă: valoare 0…1 sau −1…1 când butonul are zero-ul în centru.

### Volan {#controller-wheel}

- **Canal**: **Unghi de virare** (implicit) sau **Claxon**.
- Unghi de virare oferă: valoare −1…1, 0 drept înainte.
- Claxon oferă: valoarea 1 cât timp zona claxonului este apăsată, altfel 0.

### Pedale {#controller-pedals}

- **Canal**: **Pedala de accelerație** (implicit) sau **Pedala de frână**.
- Oferă: valoare 0…1, cât de mult este apăsată pedala.
- Pedalele dau poziția brută a pedalei. Pentru o mașină care accelerează, încetinește și merge înapoi singură, folosește intrarea [Vehicul](#src-vehicle).

### Schimbător de viteze {#controller-gear}

Schimbătoarele de viteze manual și automat (comandă specială).

- **Canal**: **Treaptă de viteză** (implicit) sau **Sens (R − / înainte +)**.
- Treaptă de viteză, cutie manuală: treapta cuplată împărțită la numărul de trepte de mers înainte: treapta cea mai mare 1, neutru 0, marșarier negativ. Cu 4 trepte, treapta a 2-a dă 0,5.
- Treaptă de viteză, cutie automată: la fel ca Sens.
- Sens oferă: −1 în R, 0 în N (și P), +1 în orice treaptă de mers înainte sau în D.

### Frână de mână {#controller-handbrake}

- **Canal**: **Frâna de mână trasă** (implicit) sau **Forța frânei de mână**.
- Frâna de mână trasă oferă: pornit/oprit, pornit cât timp maneta este blocată.
- Forța frânei de mână oferă: valoare 0…1, cât de mult este trasă maneta.

### Semnalizare {#controller-turnsignals}

Maneta de semnalizare (comandă specială).

- **Canal**: **Semnalizare (stânga − / dreapta +)** (implicit), **Semnalizare stânga**, **Semnalizare dreapta** sau **Lumină**.
- Semnalizare oferă: valoare −1 (stânga), 0 (oprit) sau +1 (dreapta).
- Semnalizare stânga și Semnalizare dreapta oferă: valoarea 1 cât timp semnalizarea respectivă este pornită (clipind odată cu lampa când clipirea comenzii este activată), altfel 0.
- Lumină oferă: valoarea 1 cât timp lumina este aprinsă, altfel 0.

### Cutie de transfer {#controller-transfercase}

[Cutia de transfer](/docs/Application/Dashboard/SpecialControls#transfer-case) (comandă specială).

- **Canal**: **Tracțiune integrală** (implicit), **Treaptă redusă**, **Blocarea diferențialului față**, **Blocarea diferențialului central** sau **Blocarea diferențialului spate**.
- Tracțiune integrală oferă: pornit/oprit, pornit în 4H și 4L.
- Treaptă redusă oferă: pornit/oprit, pornit în 4L.
- Fiecare blocare a diferențialului oferă: pornit/oprit, pornit cât timp blocarea respectivă este cuplată.
- Poziția propriu-zisă (2H, 4H, N, 4L) ajunge la simulator prin setarea **Cutie de transfer** a intrării [Vehicul](#src-vehicle).

### D-pad {#controller-dpad}

- **Canal**: **Sus / jos** sau **Stânga / dreapta**.
- Oferă: valoare +1 (sus sau dreapta), −1 (jos sau stânga) sau 0.

### Buton {#controller-button}

- Fără canal.
- Oferă: pornit/oprit, pornit cât timp este apăsat.

### Comutator {#controller-switch}

- Fără canal.
- Oferă: pornit/oprit.

### Comutator cu trepte {#controller-stepper}

- Fără canal.
- Oferă: valoare: treapta curentă împărțită la **Număr de trepte**, astfel încât ultima treaptă este 1 (−1 pentru ultima treaptă negativă).

## Vehicul {#src-vehicle}

O mașină simulată, condusă de pedalele, schimbătorul de viteze, frâna de mână și cutia de transfer din tabloul de bord: accelerează, frânează, rulează liber și merge înapoi ca un vehicul adevărat, iar rândul primește viteza sau turația motorului. Paleta arată blocurile Vehicul când tabloul de bord are pedale, schimbător de viteze sau frână de mână, câte un bloc pentru fiecare ieșire, deja legat de prima comandă de fiecare tip.

- **Pedale**: pedalele din tabloul de bord care conduc vehiculul (obligatoriu).
- **Schimbător de viteze**: **niciunul** sau un schimbător de viteze din tabloul de bord. Fără el, dacă ții apăsată pedala de frână pe loc, vehiculul merge înapoi.
- **Frână de mână**: **niciunul** sau o frână de mână din tabloul de bord.
- **Cutie de transfer**: **niciunul** sau o cutie de transfer din tabloul de bord. În 2H și 4H vehiculul merge ca fără ea, în N nu conduce (rulează liber), în 4L viteza lui este limitată la 40 %.
- **Tip de vehicul**: **Autoturism** (implicit), **Vehicul off-road**, **Mașină sport** sau **Camion**. Tipurile diferă prin inerție și viteza de mers înapoi; camionul are și frână pneumatică.
- **Ieșire**:
  - **Viteză** (implicit): valoare −1…1, negativă la mersul înapoi;
  - **Turația motorului (rpm)**: valoare 0…1;
  - **Frânare**: pornit/oprit, pornit cât timp vehiculul frânează;
  - **Pe frâna de mână**: pornit/oprit.

Probleme: „Alege pedalele vehiculului”, „… nu este pe tabloul de bord”.

<Screenshot name="links-vehicle-settings" alt="Setările unui bloc de intrare Vehicul" width={900} />

## Gamepad {#src-gamepad}

Controlerul de joc conectat la dispozitivul tău. Blocul apare în paletă doar cât timp **Activează blocurile gamepad-ului** este activat (pagina **Gamepad** din bara de sus); altfel, rândul raportează „Activează blocurile de gamepad pe pagina Gamepad (bara de sus)”.

- **Intrare** (implicit **Stick stânga Y**). Etichetele urmează **Dispunerea butoanelor gamepad-ului** (Xbox / PlayStation):
  - **Stick stânga Y**, **Stick stânga X**, **Stick dreapta Y**, **Stick dreapta X**: valoare −1…1;
  - **RT** / **R2**, **LT** / **L2** (trăgaci): valoare;
  - **A**, **B**, **X**, **Y** / **Cruce**, **Cerc**, **Pătrat**, **Triunghi**: pornit/oprit;
  - **LB** / **L1**, **RB** / **R1** (butoane laterale): pornit/oprit;
  - **Sus**, **Jos**, **Stânga**, **Dreapta** (D-pad): pornit/oprit.

## Hub {#src-hub}

Butonul propriu al unui hub sau un senzor: pe hub sau pe unul dintre porturile lui. Există câte o intrare Hub pentru fiecare hub al profilului, cu excepția huburilor Mould King, care doar primesc comenzi.

- **Hub**: un hub al profilului.
- **Buton sau senzor**: doar ce poate raporta acest hub (lista de mai jos).
- **Port**: pentru senzorii de pe un port (valorile motorului, senzorii de pe port).
- **Orientarea hubului**: pentru înclinare și accelerație, pe huburile care o pot schimba: **Păstrează** (implicit) sau modul în care este montat hubul în model.

Valoarea unui senzor circulă de-a lungul rândului împărțită la scala completă și limitată la −1…1: o baterie la 50 % dă 0,5. Un **Monitor** text pus imediat după senzor arată valoarea reală cu unitatea ei.

| Buton sau senzor | Semnal | Unitate, scală completă | Huburi |
|---|---|---|---|
| **Buton 1, 2…** | pornit/oprit | | huburile cu buton; butoanele telecomenzii LEGO® Powered Up |
| **Baterie** | valoare | %, 100 | huburile care o raportează |
| **Tensiunea bateriei** | valoare | V, 12 | huburile care o raportează |
| **Tensiune de ieșire** | valoare | V, 12 | BuWizz 2.0 |
| **Temperatură** | valoare | °C, 100 | huburile care o raportează |
| **Înclinare: tangaj** | valoare | °, 90 | huburile cu senzor de înclinare |
| **Înclinare: ruliu** | valoare | °, 180 | huburile cu senzor de înclinare |
| **Înclinare: girație** | valoare | °, 180 | huburile cu axă de girație |
| **Accelerație X / Y / Z** | valoare | m/s², 19,6 | huburile cu accelerometru |
| **Viteza de rotație X / Y / Z** | valoare | °/s, 360 | huburile cu giroscop: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime |
| **Curentul hubului** | valoare | mA, 3000 | Technic Hub |
| **Viteza motorului** | valoare | %, 100 | port; toate huburile cu porturi |
| **Unghiul motorului** | valoare | °, 360 (relativ) | port; motoare cu encoder; nu SBrick, BuWizz 2.0, WeDo 2.0 |
| **Poziția motorului** | valoare | °, 180 (absolut) | port; motoare unghiulare |
| **Puterea motorului** | valoare | %, 100 | port; Robot Inventor |
| **Curentul motorului** | valoare | A, 3 | port; BuWizz 2.0, BuWizz 3.0 Pro |
| **Senzor de distanță** | valoare | 250 | port; nu SBrick sau BuWizz |
| **Senzor de culoare** | valoare | numărul culorii, 10 | port; nu SBrick, BuWizz sau WeDo 2.0 |
| **Lumină reflectată**, **Lumină ambientală** | valoare | %, 100 | port; nu SBrick, BuWizz sau WeDo 2.0 |
| **Nuanța culorii** | valoare | °, 360 | port; senzorul de culoare Technic sau senzorul de culoare și distanță BOOST; nu SBrick, BuWizz sau WeDo 2.0 |
| **Saturația culorii**, **Luminozitatea culorii** | valoare | %, 100 | port; ca Nuanța culorii |
| **Senzor de înclinare: tangaj / ruliu** | valoare | °, 45 | port; senzorul de înclinare WeDo 2.0 / BOOST; nu SBrick sau BuWizz |
| **Mod de putere** | valoare | 1–4, 4 | BuWizz 2.0 |
| **Conectat** | pornit/oprit | | toate huburile |

Când hubul este conectat, MOCPilot verifică și dispozitivul de pe port: „Portul A: niciun motor acolo”, „Portul A: motorul nu are encoder”, „Portul A: niciun senzor de distanță acolo” și așa mai departe.
