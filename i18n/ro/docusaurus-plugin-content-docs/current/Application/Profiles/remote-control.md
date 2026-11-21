---
id: RemoteControl
title: Control de la distanță
description: "Rulează un profil pe telefonul, tableta sau computerul de lângă model și controlează-l de pe alt dispozitiv sau din editorul web."
---

import Screenshot from '@site/src/components/Screenshot';

# Control de la distanță {#remote-control}

Controlul de la distanță îți permite să conduci un model conectat la alt dispozitiv. Un dispozitiv rămâne lângă model și comunică prin Bluetooth cu huburile; pe celălalt îl ții în mână și folosești tabloul lui de bord. Tot așa conduci un model din [editorul web](/docs/Introducing/WebEditor), pentru că browserele nu se pot conecta la huburi.

## Cele două dispozitive {#the-two-devices}

- **Dispozitivul cu huburi** este telefonul, tableta sau computerul de lângă model. Aplicația MOCPilot de pe el conectează huburile și rulează profilul. Nu are nevoie de cont.
- **Telecomanda** este dispozitivul de pe care controlezi: aplicația MOCPilot de pe alt dispozitiv sau editorul web de pe [mocpilot.com](https://mocpilot.com). Profilul se deschide pe telecomandă, iar telecomanda îl trimite dispozitivului cu huburi.

## De ce ai nevoie {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) pe contul conectat pe **telecomandă**. Dispozitivul cu huburi nu are nevoie nici de cont, nici de Pro.
- Aplicația MOCPilot pe dispozitivul cu huburi.
- Conexiune la internet pe ambele dispozitive.

## Conectează un dispozitiv cu huburi {#connect-a-hub-device}

1. Pe telecomandă, deschide profilul și apasă **Control de la distanță** (pictograma de telecomandă: o casă cu arce de semnal) în bara de sus a profilului. În editorul web, apasă **Arată codul** în panoul care se deschide.

   Telecomanda afișează un **cod de conectare**: un cod QR și 6 cifre.
2. Pe dispozitivul cu huburi, deschide MOCPilot și atinge **Conectează o telecomandă** pe pagina **Profilurile mele**. Pe Mac poți alege și **Fișier → Conectează o telecomandă…**.
3. Introdu codul:
   - **pe telefon sau tabletă**, îndreaptă camera spre codul QR sau atinge **Introdu codul** și tastează cele 6 cifre;
   - **pe computer**, tastează cele 6 cifre și apasă **Conectează**.
4. Dispozitivele se conectează. Telecomanda trimite profilul dispozitivului cu huburi și îl pornește acolo, iar dispozitivul cu huburi afișează pagina **Control de la distanță** pe tot ecranul.

<Screenshot name="remote-control-code" alt="Panoul Control de la distanță într-un profil deschis, cu codul QR și codul din 6 cifre" width={900} />

Despre codul de conectare:

- Funcționează o singură dată și este valabil 5 minute. Cât timp telecomanda îl afișează în continuare, la expirare este înlocuit de un cod nou.
- Scanează-l în aplicația MOCPilot, nu cu aplicația Cameră a telefonului.
- Dacă închizi panoul de pe telecomandă înainte să se conecteze dispozitivul cu huburi, nu se configurează nimic; apasă din nou **Control de la distanță** pentru un cod nou.

<Screenshot name="remote-connect-code-entry" alt="Fereastra Conectează o telecomandă pe computer, cu câmpul pentru cele 6 cifre" width={900} />

## Când dispozitivele sunt conectate {#when-the-devices-are-connected}

**Pe telecomandă:**

- Butonul **Control de la distanță** devine verde (pe telefon sau tabletă, un inel verde), iar panoul lui afișează numele dispozitivului cu huburi și un buton **Deconectează**.
- **Huburile mele** afișează huburile dispozitivului cu huburi. Conectează huburile de acolo, ca de obicei: dispozitivul cu huburi le caută, așa că apasă butonul de pe hub când ți se cere.
- Tabloul de bord controlează modelul.

**Pe dispozitivul cu huburi**, pagina **Control de la distanță** pe tot ecranul afișează:

- starea, de exemplu **În execuție: «Mașina mea»**;
- **Huburi conectate: N** și, cât timp caută, **Se caută un hub: apasă butonul de pe hub.**;
- o reamintire: **Păstrează aplicația deschisă. Acesta este dispozitivul cu huburi: conectează huburile și rulează profilul, iar telecomanda doar îl controlează.**;
- un buton **Oprește**.

Ecranul dispozitivului cu huburi rămâne aprins cât timp este conectat. Profilul nu se salvează pe dispozitivul cu huburi și nu apare în lista lui de profiluri.

<Screenshot name="remote-hub-device" alt="Pagina Control de la distanță pe tot ecranul, pe dispozitivul cu huburi, cu starea conexiunii, numărul de huburi conectate și butonul Oprește" width={900} />

## Rulează și Oprește {#run-and-stop}

- Apasă **Oprește** pe telecomandă ca să oprești profilul pe dispozitivul cu huburi. Dispozitivul cu huburi oprește întotdeauna toate motoarele, chiar dacă **Oprește porturile hubului când programul se oprește** este dezactivată în profil.
- Apasă **Rulează** pe telecomandă ca să-l pornești din nou pe dispozitivul cu huburi.
- În editorul web, dispozitivul cu huburi rămâne asociat pentru fiecare profil pe care îl deschizi în aceeași filă a browserului: **Rulează** pornește profilul pe dispozitivul cu huburi. Când nu este asociat niciun dispozitiv cu huburi, **Rulează** rulează profilul în browser, fără huburi.

## Dacă legătura se întrerupe {#if-the-connection-drops}

:::caution Siguranță
Dacă dispozitivul cu huburi nu primește nimic de la telecomandă timp de 4 secunde, oprește profilul și toate motoarele.
:::

Apoi:

- dispozitivul cu huburi afișează **Conexiunea cu telecomanda s-a pierdut. Profilul a fost oprit. Se așteaptă telecomanda…** și așteaptă;
- aplicația de pe telecomandă afișează **Conexiunea s-a pierdut. Se reîncearcă…** cu **Încearcă din nou** și **Deconectează**;
- editorul web afișează **Dispozitivul cu huburi s-a deconectat**: „*dispozitiv* nu mai răspunde. Profilul de pe el a fost oprit, iar motoarele au fost oprite.” Încearcă în continuare să se reconecteze; poți apăsa și **Reconectează**, **Rulează în browser** sau **Oprește**.

Când dispozitivele se reconectează, verifică starea pe telecomandă și apasă **Rulează** dacă profilul nu rulează.

## Deconectare {#disconnect}

- **Pe telecomandă**: apasă **Control de la distanță** și alege **Deconectează**.
- **Pe dispozitivul cu huburi**: apasă **Oprește** pe pagina **Control de la distanță**.

În ambele cazuri, profilul și motoarele se opresc, iar dispozitivul cu huburi închide profilul.

## Depanare {#troubleshooting}

| Mesaj | Unde | Ce trebuie făcut |
|---|---|---|
| **Controlul de la distanță face parte din MocPilot Pro** | telecomandă | Abonează-te la [MocPilot Pro](/docs/Application/Account/Pro) pe contul telecomenzii. Nu te poți abona din browser: fă-o în aplicație, iar Pro funcționează și în editorul web |
| **Nu există conexiune la server** | oricare | Verifică conexiunea la internet și încearcă din nou |
| **Nu s-a putut obține un cod de la server** | telecomandă | Apasă **Arată codul** ca să încerci din nou |
| **Cod greșit sau expirat. Verificați cele 6 cifre afișate pe telecomandă.** | dispozitivul cu huburi | Tastează cele 6 cifre afișate acum de telecomandă |
| **Codul a expirat. Afișați un cod nou pe telecomandă și scanați-l din nou.** | dispozitivul cu huburi | Apasă **Control de la distanță** pe telecomandă și scanează noul cod |
| **Acesta nu este un cod MOCPilot. Scanează codul afișat de telecomandă.** | dispozitivul cu huburi | Scanează codul QR din panoul **Control de la distanță** al telecomenzii |
| **Prea multe coduri greșite. Încercați din nou peste câteva minute.** | dispozitivul cu huburi | Așteaptă câteva minute, apoi introdu codul actual |
| **Permite MOCPilot să folosească camera în setările sistemului pentru a scana codul.** | dispozitivul cu huburi | Permite accesul la cameră în setările sistemului sau atinge **Introdu codul** și tastează cele 6 cifre |
| **Telecomanda nu răspunde. Verifică dacă profilul este deschis pe ea și dacă este online.** | dispozitivul cu huburi | Ține profilul deschis pe telecomandă și verifică-i conexiunea la internet |
| **Această versiune a aplicației nu se poate conecta la o telecomandă** | oricare | Actualizează MOCPilot |
| **Acest browser nu poate deschide o conexiune directă (WebRTC)** | editorul web | Folosește alt browser, de exemplu Chrome, Edge sau Safari |
| **Profilul este prea mare** / **Profilul nu a ajuns complet** | oricare | Verifică conexiunea și apasă din nou **Rulează** |
| **Celălalt dispozitiv nu a putut salva profilul** / **Celălalt dispozitiv nu a putut deschide profilul** | telecomandă | Apasă din nou **Rulează**; dacă se tot întâmplă, deconectează și conectează din nou dispozitivul cu huburi |
| **Conexiunea cu *dispozitiv* s-a pierdut** / **Conexiunea cu telecomanda s-a pierdut. Se așteaptă…** | oricare | Vezi [Dacă legătura se întrerupe](#if-the-connection-drops) |
