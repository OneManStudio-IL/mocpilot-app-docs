---
id: RobotInventorHub
title: Hubul MINDSTORMS Robot Inventor
description: "Conectează hubul LEGO MINDSTORMS Robot Inventor (51515) sau SPIKE Prime prin Bluetooth sau USB, folosește-i blocurile și repune hubul în funcțiune dacă nu mai merge."
---

import Screenshot from '@site/src/components/Screenshot';

# Hubul MINDSTORMS Robot Inventor

Hubul setului LEGO® MINDSTORMS® Robot Inventor (51515) este **LEGO® Technic™ Large Hub** (88016): șase porturi A–F, o matrice de lumini 5×5, un difuzor, un giroscop și un accelerometru. MOCPilot îl controlează cu aceleași blocuri ca aplicația Robot Inventor, plus tot ce adaugă MOCPilot: tabloul de bord, gamepadul și celelalte huburi din profil.

**Hubul SPIKE™ Prime** (45601) este același hardware, cu firmware-ul LEGO® Education. MOCPilot îl acceptă cu firmware-ul **SPIKE Legacy** (beta); vezi [Firmware](#firmware).

## Ce poate face {#features}

- **Blocuri logice**: toate blocurile aplicației Robot Inventor, vezi [Blocurile Robot Inventor](#blocks).
- **Legături rapide**: motoare, senzori, [matricea de lumini](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) și [luminile senzorului de distanță](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Monitorul hubului**: bateria, orientarea, înclinarea și dispozitivele de pe porturi, vezi [Monitorul hubului](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Un program din blocuri poate rula în două feluri: prin **streaming**, când MOCPilot îl rulează și trimite comenzi hubului (ține dispozitivul conectat), sau prin **descărcare**, când MOCPilot îl scrie într-unul dintre sloturile de program ale hubului și hubul îl rulează singur. Vezi [Rularea programului pe hub](#download).

## Conectarea hubului {#connect}

Adaugă hubul ca de obicei ([Adăugarea și conectarea unui hub](/docs/Application/Hubs/ConnectingHubs)) și alege **Lego® Large Hub** (sau **LEGO® SPIKE™ Prime Hub**). Pe un computer, pagina de conectare are sus un selector **Bluetooth / USB**. MOCPilot ține minte alegerea ta pentru acest model de hub.

### Prin Bluetooth {#bluetooth}

Hubul folosește Bluetooth clasic, nu Bluetooth Low Energy: funcționează pe Android, Mac și Windows, dar nu pe iPhone și iPad.

1. Pornește hubul.
2. Asociază-l în setările Bluetooth ale dispozitivului ca pe un dispozitiv Bluetooth obișnuit (pe Windows: **Setări → Bluetooth și dispozitive → Adăugare dispozitiv**). Apasă butonul Bluetooth al hubului ca să poată fi găsit.
3. În MOCPilot, atinge **Scanează**.

### Cu un cablu USB {#usb}

Pe Windows și Mac poți conecta hubul și cu cablul său USB. Nu trebuie să instalezi niciun driver LEGO.

1. Conectează hubul la computer cu un cablu USB și pornește hubul.
2. Atinge **Conectează**.

Dacă MOCPilot spune **Niciun hub pe USB**, verifică cablul (unele cabluri doar încarcă) și dacă hubul este pornit.

<Screenshot name="robot-inventor-connect" alt="Conectarea unui hub Robot Inventor: selectorul Bluetooth / USB" width={900} />

### Închide mai întâi aplicația LEGO {#close-lego-app}

Hubul acceptă o singură conexiune. Dacă aplicația MINDSTORMS sau SPIKE este deschisă și ține hubul, MOCPilot spune **Hubul este ocupat: o altă aplicație îl folosește (LEGO MINDSTORMS sau SPIKE). Închide aplicația și încearcă din nou.** Închide aplicația LEGO și conectează-te din nou.

## Blocurile Robot Inventor {#blocks}

Când profilul are un hub Robot Inventor sau SPIKE Prime, paleta Blocuri logice primește blocurile aplicației Robot Inventor. Blocurile pe care doar acest hub le poate rula poartă o **pictogramă a hubului** alb-negru.

| Categorie | Blocuri Robot Inventor |
|---|---|
| [Mișcare](/docs/Application/BlockBuilder/Blocks/Movement) (categorie nouă) | motoarele de mișcare, viteză, distanța pe rotație, deplasare, virare, condus tip tanc, accelerație, oprire, „a fost întreruptă mișcarea?” |
| [Motoare](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | pornire cu putere, „a fost întrerupt motorul?”, plus puterea motorului și detectarea blocării |
| [Lumină](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | imagine pentru câteva secunde, animații cu editor de cadre, luminozitatea pixelilor, plus luminile senzorului de distanță |
| [Sunete](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | bipuri, sunetele de robot ale hubului, volum, efecte sonore, muzică: note, tobe, pauze, instrument, tempo |
| [Senzori](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | senzorul de forță, gesturi, orientare, unghiurile de girație / înclinare / rotire, resetarea girației, viteză unghiulară, accelerație, înclinare, radio între huburi |
| [Evenimente](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | când hubul este scuturat sau atins, stă pe o parte, este înclinat, când senzorul de forță este apăsat, când sosește un semnal radio |

Blocurile de control, operatorii, variabilele, listele și Blocurile mele din aplicația Robot Inventor sunt aceleași cu [blocurile de bază](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) ale MOCPilot. Blocurile acoperite deja de blocurile generale pentru huburi (viteza și poziția motorului, senzorii de culoare și de distanță, matricea de lumini, butonul hubului, cronometrul) se află în categoriile lor obișnuite.

## Rularea programului pe hub {#download}

Ca aplicația Robot Inventor, MOCPilot poate scrie un program din Blocuri logice într-unul dintre cele 20 de sloturi de program ale hubului (0–19). Hubul îl rulează apoi fără aplicație: poți deconecta telefonul sau computerul și poți porni programul din nou mai târziu cu butoanele hubului.

### Butonul și cardul slotului {#slot-card}

Când un hub Robot Inventor sau SPIKE Prime este conectat la un profil Blocuri logice, în colțul din dreapta jos al editorului, lângă zoom, apare un buton. El arată numărul slotului selectat pe o mică matrice 5×5 sau un semn de streaming. Atinge-l ca să deschizi cardul:

- hubul cu slotul selectat; **‹** și **›** aleg slotul 0–19;
- **Descărcare / Streaming**: cum funcționează **Rulează** pentru acest hub;
- butonul de **descărcare** (⤓): scrie programul în slot fără să-l pornească;
- o linie de stare: progresul, *Slotul 3: programul este pe hub* sau ce nu a mers.

Când sunt conectate mai multe huburi Robot Inventor sau SPIKE Prime, cardul are și un buton pentru hub: atinge-l ca să alegi ce hub primește programul. MOCPilot ține minte modul și slotul pe acest dispozitiv.

<Screenshot name="robot-inventor-slot-card" alt="Cardul slotului: hubul, săgețile slotului, comutatorul Descărcare / Streaming și butonul de descărcare" width={500} />

### Descărcare {#download-mode}

În modul **Descărcare**, **Rulează** transformă programul din blocuri într-un program pentru hub, îl scrie în slotul selectat și îl pornește pe hub. Scrierea durează câteva secunde; apoi programul rulează singur pe hub.

- Ca să-l pornești din nou mai târziu fără aplicație, alege slotul cu butoanele stâng și drept ale hubului și apasă butonul central.
- **Butonul central** al hubului oprește programul.
- Ca să revii la rularea programelor din MOCPilot, comută cardul pe **Streaming**.

### Ce poate rula pe hub {#download-blocks}

Majoritatea blocurilor pot ajunge pe hub:

- evenimente: pornirea programului, mesaje, condiții, cronometrul, butoanele hubului, senzori, gesturi, orientare, înclinare și semnale radio;
- control, operatori, variabile, liste și Blocurile mele;
- toate blocurile Robot Inventor, precum și blocurile pentru motoare, lumină și senzori ale acestui hub.

Unele blocuri au nevoie de aplicație și nu pot rula doar pe hub: blocurile tabloului de bord și ale gamepadului, blocurile altor huburi, evenimentul **butonului central** (pe hub, acest buton oprește programul), evenimentele de baterie și de conexiune, temperatura și calibrarea cremalierei. Dacă programul conține vreunul dintre ele, nu se scrie nimic: cardul spune **Aceste blocuri nu pot rula pe hub fără aplicație** și le enumeră. Elimină aceste blocuri sau folosește **Streaming**.

Dacă scrierea eșuează, linia de stare spune de ce, de exemplu **Spațiu insuficient pe hub** sau **Hubul nu a răspuns**. Încearcă din nou sau repornește hubul dacă eroarea se repetă.

## Firmware {#firmware}

MOCPilot funcționează cu firmware-ul LEGO propriu al hubului și nu îl înlocuiește:

- **Hubul Robot Inventor**: firmware-ul aplicației MINDSTORMS Robot Inventor. Ultima versiune este firmware-ul 1.5.6 cu software-ul de hub 3.2.36.
- **Hubul SPIKE Prime**: firmware-ul **SPIKE Legacy** (cel al aplicației SPIKE 2). Firmware-ul mai nou **SPIKE App 3** nu este acceptat: MOCPilot spune asta când găsește un astfel de hub. Instalează firmware-ul SPIKE Legacy cu aplicația LEGO® Education SPIKE™ Legacy, apoi conectează-te din nou.

Când hubul este gata, afișează pe matricea de lumini numărul unui slot de program.

## Dacă hubul nu pornește {#restore}

Dacă hubul nu pornește, rămâne stins, nu afișează numărul unui slot sau a fost trecut pe firmware-ul SPIKE App 3, repune-l mai întâi în funcțiune cu aplicația oficială:

1. Deschide aplicația MINDSTORMS Robot Inventor (aplicația SPIKE Legacy pentru un hub SPIKE Prime) și conectează hubul cu cablul USB.
2. Pornește actualizarea hubului (**Update hub firmware**). Ea rescrie firmware-ul, software-ul hubului și sunetele de robot și durează în jur de 6 minute. Nu deconecta hubul cât timp rulează.
3. Închide aplicația LEGO și conectează hubul în MOCPilot.

### Modul de recuperare (DFU) {#dfu}

Doar dacă aplicația oficială nu vede deloc hubul, poți scrie firmware-ul prin modul de recuperare al hubului (DFU). Acest lucru este pentru utilizatori experimentați:

1. Oprește hubul și deconectează-l. Ține apăsat **butonul Bluetooth** și conectează cablul USB; ține-l apăsat până când lumina butonului clipește roșu, verde și albastru. Acum computerul vede „LEGO Technic Large Hub in DFU Mode”.
2. Pe Windows, instalează o singură dată driverul WinUSB pentru acest dispozitiv, de exemplu cu Zadig. Mac și Linux nu au nevoie de driver.
3. Scrie imaginea de firmware a aplicației Robot Inventor (1.5.6) cu `dfu-util` la adresa `0x08008000`. Hubul repornește singur când termină. Nu-l deconecta în timpul scrierii.
4. Apoi rulează **Update hub firmware** în aplicația Robot Inventor (vezi mai sus) ca să refaci software-ul hubului și sunetele.

DFU scrie doar firmware-ul. Bootloaderul de recuperare în sine nu poate fi suprascris, așa că poți încerca oricând din nou.
