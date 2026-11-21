---
id: ArrangingControls
title: Adaugă și aranjează comenzi
description: "Adaugă comenzi din paletă, mută-le și redimensionează-le, duplică-le, blochează-le și șterge-le."
---

import Screenshot from '@site/src/components/Screenshot';

# Adaugă și aranjează comenzi {#add-and-arrange-controls}

## Adaugă o comandă {#add-a-control}

1. Pe tabloul de bord, atinge **+** (**Adaugă controler**). Pe computer, paleta se deschide în fereastră proprie.
2. Alege un tip de comandă din listă. Tipurile sunt grupate: **Joysticks**, **Glisoare**, **Butoane și comutatoare**, **Monitoare**, apoi **Vehicul și speciale** pentru [comenzile speciale](/docs/Application/Dashboard/SpecialControls) și **Designurile mele** pentru designurile pe care le-ai salvat. Ca să găsești rapid o comandă, scrie în **Caută comenzi**.
3. Banda de aspecte arată tipul selectat în fiecare [temă](/docs/Application/Themes/ThemesOverview) (pentru o comandă specială, toate aspectele ei). Atinge un aspect ca să-l vezi în previzualizarea mare; îl poți încerca chiar acolo.
4. Configurează comanda în **Configurează**: filele **Stil** și **Setări** și dimensiunea.
5. Atinge **Adaugă la tabloul de bord**. Pe computer poți adăuga mai multe comenzi la rând.

<Screenshot name="controller-palette" alt="Paleta Adaugă controler" width={900} />

Comanda ajunge în prima zonă liberă și primește insigna **NOU**. Dacă nu este loc, MOCPilot îți spune: fă puțin loc sau alege o dimensiune mai mică.

Comenzile din temele pe care nu le deții afișează **Cumpără** și **Totul cu MocPilot Pro** în loc de **Adaugă la tabloul de bord**. Vezi [Obține, cumpără și actualizează teme](/docs/Application/Themes/GettingThemes).

## Mutare {#move}

În modul de editare, apasă și trage o comandă. Când o eliberezi, se aliniază la cea mai apropiată celulă a grilei. Dacă s-ar suprapune peste altă comandă, revine la locul ei.

## Dimensiuni {#sizes}

Fiecare comandă are trei dimensiuni: **S**, **M** și **L**. Schimb-o cu **Dimensiune** în proprietățile comenzii. Dimensiunile în celule ale grilei (lățime × înălțime):

| Comandă | S | M | L |
|---|---|---|---|
| Joystick, Pad direcțional | 7×7 | 10×10 | 13×13 |
| Glisor | 10×3 | 14×4 | 18×5 |
| Glisor ver. | 3×10 | 4×14 | 5×18 |
| Buton rotativ | 6×6 | 8×8 | 10×10 |
| Buton, Comutator | 3×3 | 4×4 | 5×5 |
| Comutator pas cu pas | 8×3 | 12×4 | 16×5 |
| Comutator pas cu pas ver. | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Nivelul bateriei, Vitezometru | 6×6 | 8×8 | 10×10 |
| Monitor înclinat | 8×4 | 12×6 | 16×8 |
| Volan | 8×8 | 12×12 | 16×16 |
| Pedale | 11×8 | 16×12 | 21×16 |
| Cutie de viteze manuală, Cutie de viteze automată | 8×8 | 10×10 | 12×12 |
| Frână de mână | 4×7 | 6×10 | 8×13 |
| Semnalizare | 8×5 | 10×6 | 14×8 |
| Controler de tren | 6×8 | 8×10 | 10×13 |

Întregul câmp are 40 × 20 de celule. Dacă o dimensiune mai mare nu încape, mută mai întâi comenzile vecine.

## Selectare și editare {#select-and-edit}

Atinge (dă clic pe) o comandă ca s-o selectezi și să-i deschizi **proprietățile**. Vezi [Proprietățile comenzilor](/docs/Application/Dashboard/ControlProperties).

## Meniul contextual {#context-menu}

Ține apăsat (ecran tactil) sau dă clic dreapta (computer) pe o comandă:

- **Blochează** / **Deblochează**
- **Proprietăți**
- **Schimbă tema**: trece comanda la altă temă pe care o deții și care are același tip de comandă
- **Duplică**: o copie cu aceleași proprietăți
- **Duplică (doar tipul)**: o comandă nouă de același tip, cu proprietăți implicite
- **Șterge**

Ține apăsat sau dă clic dreapta pe o parte goală a câmpului:

- **Blochează tot** / **Deblochează tot**
- **Șterge N controlere**: șterge toate comenzile deblocate

Pe computer, cu panoul de proprietăți deschis: **Esc** îl închide, **Delete** / **Backspace** șterge comanda, **⌘D / Ctrl+D** o duplică.

## Blocarea comenzilor {#lock-controls}

O comandă **blocată** nu poate fi mutată sau ștearsă, așa că nu o vei deplasa din greșeală în timp ce conduci sau editezi. Ea afișează o pictogramă de lacăt. Blochează o comandă din meniul ei sau cu **Blocați controlerul** din setările ei ori blochează tot cu **Blochează tot**.

## Numele comenzilor {#control-names}

Fiecare comandă are un nume scurt, afișat pe chenarul ei în modul de editare, de exemplu **JOY1**, **SLDR2** sau **BTN1**. Programul se referă la comenzi prin aceste nume: în Legături rapide, blocul de intrare afișează *JOY1*, iar în Blocuri logice alegi *JOY1* din meniul blocului.

## Ștergere {#delete}

Folosește **Șterge** din meniu sau butonul coș de gunoi din proprietăți. Comenzile blocate nu pot fi șterse. O comandă folosită de program nu poate fi ștearsă până nu îi elimini rândurile sau blocurile.
