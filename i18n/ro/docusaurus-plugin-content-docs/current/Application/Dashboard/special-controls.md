---
id: SpecialControls
title: Comenzi speciale
description: "Volan, pedale, schimbător de viteze, frână de mână, semnalizare și controler de tren: cum le folosești, setările, aspectele, valorile și blocurile lor."
---

import Screenshot from '@site/src/components/Screenshot';

# Comenzi speciale {#special-controls}

Comenzile speciale arată și funcționează ca cele reale: un volan, pedale, un schimbător de viteze, o frână de mână, o manetă de semnalizare și un controler de locomotivă. Fiecare este un produs separat: cumpără-le pe cele de care ai nevoie sau obține-le pe toate cu [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Un tablou de bord cu volan, pedale, schimbător de viteze, frână de mână, semnalizare și controler de tren" width={900} />

| Comandă | Produs | Numele pe tabloul de bord | Ce primește programul |
|---|---|---|---|
| [Volan](#steering-wheel) | Volan | STWHEEL | unghiul de virare, claxonul |
| [Pedale](#pedals) | Pedale | PDLS | accelerația și frâna |
| [Cutie de viteze manuală](#gear-shifter) | Schimbător de viteze | GEAR | treapta: R, N, 1…6 |
| [Cutie de viteze automată](#gear-shifter) | Schimbător de viteze | GEARA | selectorul: P, R, N, D |
| [Frână de mână](#handbrake) | Frână de mână | HBRK | forța, blocată |
| [Semnalizare](#turn-signals) | Semnalizare | STALK | semnalizarea stânga, semnalizarea dreapta, luminile |
| [Controler de tren](#train-controller) | Controler de tren | TRTHR | treapta de putere, sensul, tracțiunea |

**Butonul rotativ** nu este un produs separat: vine cu fiecare temă plătită. Vezi [Tipuri de comenzi](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Adaugă o comandă specială {#add-a-special-control}

1. Deschide tabloul de bord și atinge **+** (**Adaugă controler**).
2. În lista tipurilor de comenzi, derulează până la **Vehicul și speciale** și selectează o comandă.
3. Banda de aspecte afișează toate aspectele ei. Alege unul, apoi configurează comanda în **Configurează**.
4. Atinge **Adaugă la tabloul de bord**. Pentru o comandă pe care nu o deții încă, atinge **Cumpără** sau **Totul cu MocPilot Pro**.

<Screenshot name="special-control-looks" alt="Paleta Adaugă controler cu volanul selectat și aspectele lui în banda de aspecte" width={900} />

## Aspecte {#looks}

Fiecare comandă specială vine în multe **aspecte**. Majoritatea se potrivesc cu o temă plătită (Curse, Aură, Clasic, Hologramă și așa mai departe), așa că volanul, schimbătorul de viteze și frâna de mână se pot asorta cu restul tabloului de bord. Poți schimba oricând aspectul: selectează comanda și alege altul în **Aspect**, în fila **Stil**. Aspectul schimbă doar imaginea: valorile, blocurile și programul rămân aceleași.

Unele aspecte setează și culoarea de accent potrivită atunci când le alegi.

## Setările tuturor comenzilor speciale {#settings-of-all-special-controls}

- **Aspect** (fila Stil): vezi mai sus.
- **Culoare de accent** (fila Stil): schimbătorul de viteze, frâna de mână, semnalizarea și controlerul de tren.
- **Blocați controlerul** și **Interactivitate** (fila Setări), ca la orice comandă. Vezi [Proprietățile comenzilor](/docs/Application/Dashboard/ControlProperties).

## Volan {#steering-wheel}

Pune un deget pe volan și rotește-l în jurul centrului. Când îi dai drumul, revine singur în centru. Apasă centrul volanului ca să claxonezi: asta nu rotește volanul.

**Setări**

- **Unghiul volanului** (20–120°, implicit 60°): cât de mult rotești volanul ca să ajungi la virajul maxim. Nu schimbă valorile pe care le primește programul.
- **Efecte sonore**: sunetul claxonului și sunetele pe care programul le redă de la volan. Sunetul aplicației trebuie să fie activat.

**Valori**: unghiul de virare de la −100 (complet stânga), prin 0, până la 100 (complet dreapta); claxonul este 100 cât timp îl ții apăsat, altfel 0.

**Aspecte**: Vehicul off-road, Camion greu, Supercar, Lemn retro, Volan de curse, Raliu piele întoarsă, Off-road utilitar, Concept luminos, Autotractor, Sedan de familie, Mașină de oraș, Buggy de dune, 4x4 clasic, Mașini de construcție, Audio Hi-Fi, Aură, Cărămizi, Nucleu de circuit, Spațiu profund, Transport greu, Neo Orbită, Cabină off-road, Curse, Rock Crawler, Tactic, Clasic, Apus, Miami, High-tech, Hologramă.

**Sunete** pentru program: Claxon de mașină, Claxon de camion, Claxon de mașină sport.

**Legături rapide**: intrarea [Volan](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) cu canalele **Unghi de virare** și **Claxon**.

## Pedale {#pedals}

Pedala de frână este în stânga, accelerația în dreapta. Apasă o pedală cu degetul: cu cât degetul este mai sus pe pedală, cu atât e apăsată mai tare. Aproape de partea de jos este apăsată ușor; aproape de partea de sus, complet. Când îi dai drumul, pedala revine sus. Poți apăsa ambele pedale deodată.

**Setări**: **Efecte sonore**: permite programului să redea sunetele pedalelor. Sunetul aplicației trebuie să fie activat.

**Valori**: accelerația și frâna, fiecare de la 0 la 100.

**Aspecte**: Vehicul off-road, Camion greu, Supercar, Crom retro, Carbon și roșu, Curse perforat, Aderență off-road, Concept luminos, Autotractor, Sedan de familie, Mașină de oraș, Buggy de dune, 4x4 clasic, Mașini de construcție, Audio Hi-Fi, Aură, Cărămizi, Nucleu de circuit, Spațiu profund, Transport greu, Neo Orbită, Cabină off-road, Curse, Rock Crawler, Tactic, Clasic, Apus, Miami, High-tech, Hologramă.

**Sunete** pentru program: Frână de mașină, Frână de mașină sport, Frână pneumatică de camion, Avertizor de mers înapoi.

**Legături rapide**: intrarea [Pedale](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) cu canalele **Pedala de accelerație** și **Pedala de frână**.

:::tip Pedalele singure nu fac o mașină
Pedalele dau doar cât de tare este apăsată fiecare. Dacă un rând trimite accelerația direct către un motor, motorul merge exact cât de mult este apăsată pedala. Ca să obții un model care accelerează treptat, rulează liber, frânează și merge înapoi, folosește [simulatorul de vehicul](#vehicle-simulator).
:::

## Schimbător de viteze {#gear-shifter}

Produsul **Schimbător de viteze** are două comenzi: o **Cutie de viteze manuală** și o **Cutie de viteze automată**.

### Cutie de viteze manuală {#manual-gearbox}

O grilă în H cu marșarier și până la șase trepte înainte. Trage maneta de-a lungul rândului din mijloc, apoi în sus sau în jos într-o treaptă. Când îi dai drumul, maneta intră în cea mai apropiată treaptă sau revine la neutru.

- **Numărul de trepte** (2–6, implicit 6, fila Setări): grila se schimbă odată cu el. Marșarierul este întotdeauna în coloana din stânga, neutrul la mijloc.
- **Valori**: −1 = marșarier (R), 0 = neutru (N), 1…6 = trepte înainte.

### Cutie de viteze automată {#automatic-gearbox}

Un selector cu patru poziții: **P** (parcare), **R** (marșarier), **N** (neutru) și **D** (mers înainte). Modul de folosire depinde de aspect:

| Selector | Cum îl folosești | Aspecte |
|---|---|---|
| Manetă | glisează mânerul de-a lungul fantei; se oprește în cea mai apropiată poziție | High-tech |
| Disc rotativ | rotește discul cu degetul; se fixează cu un clic în P, R, N sau D | Clasic, Spațiu profund, Tactic, Mașini de construcție, Audio Hi-Fi, Aură, Nucleu de circuit, Rock Crawler, Cabină off-road, Neo Orbită, Off-road, Cal de povară, Concept, Sedan, Mașină de oraș, 4x4 clasic |
| Butoane | atinge P, R, N sau D | Curse, Transport greu, Cărămizi, Camion greu, Retro, Raliu, Supercar, Formula, Cursă lungă, Buggy, Apus, Miami, Hologramă |

- **Numărul de trepte** (2–8, implicit 6, fila Setări): prin câte trepte schimbă [simulatorul de vehicul](#vehicle-simulator) în D. Când simulatorul alege o treaptă, selectorul o afișează, de exemplu **D3**.
- **Valori**: −2 = P, −1 = R, 0 = N, 1 = D. Toate cele trei selectoare dau aceleași valori, așa că programul funcționează cu orice aspect.

Ambele cutii de viteze au aceleași aspecte: Clasic, Curse, Spațiu profund, Tactic, Transport greu, Mașini de construcție, Audio Hi-Fi, Aură, Nucleu de circuit, Rock Crawler, Cabină off-road, Cărămizi, Neo Orbită, Camion greu, Retro, Raliu, Off-road, Supercar, Formula, Cal de povară, Concept, Cursă lungă, Sedan, Mașină de oraș, Buggy, Apus, 4x4 clasic, Miami, High-tech, Hologramă.

**Legături rapide**: intrarea [Schimbător de viteze](/docs/Application/Links/Blocks/InputBlocks#controller-gear) cu canalele **Treaptă de viteză** (manuală: treapta raportată la numărul de trepte, marșarierul negativ; automată: sensul) și **Sens (R − / înainte +)**: −1 în marșarier, 0 în neutru și parcare, +1 în orice treaptă înainte.

## Frână de mână {#handbrake}

O manetă de frână de mână. Prinde maneta de mâner și trage-o în jos. Forța de frânare urmează cât de mult tragi. Când îi dai drumul, maneta revine singură.

Ca s-o **blochezi**, trage maneta până la capăt, apoi glisează degetul de-a lungul manetei spre baza ei: mânerul alunecă în jos, iar maneta rămâne blocată. Ca să **eliberezi** o manetă blocată, atinge comanda sau trage maneta înapoi.

**Valori**: forța de la 0 la 100 și dacă maneta este blocată.

**Aspecte**: Clasic, Raliu, Camion greu, Retro, Spațiu profund, Tactic, Aură, Transport greu, Mașini de construcție, Audio Hi-Fi, Neo Orbită, Cabină off-road, Curse, Cărămizi, Nucleu de circuit, Rock Crawler, Off-road, Supercar, Formula, Cal de povară, Concept, Cursă lungă, Sedan, Mașină de oraș, Buggy, Apus, 4x4 clasic, Miami, High-tech, Hologramă.

**Legături rapide**: intrarea [Frână de mână](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) cu canalele **Frâna de mână trasă** (pornit/oprit, ca un comutator) și **Forța frânei de mână**.

## Semnalizare {#turn-signals}

O manetă de semnalizare cu întrerupător de lumini.

- Trage maneta **în sus** pentru semnalizarea stânga și **în jos** pentru semnalizarea dreapta. Rămâne unde o lași; trage-o înapoi la mijloc ca să oprești semnalizarea.
- **Atinge** maneta sau butonul farurilor ca să aprinzi sau să stingi luminile. Asta nu mișcă maneta.

**Setări**

- **Iconiță: left**, **Iconiță: light**, **Iconiță: right** (fila Stil): pictogramele lămpilor de semnalizare.
- **Ieșirile semnalizării clipesc** (fila Setări, activată implicit): ieșirile semnalizării clipesc odată cu lampa de pe manetă, așa că o lumină conectată la ele clipește singură. Când opțiunea este dezactivată, ieșirile rămân aprinse continuu cât timp semnalizarea este activă. Blocurile văd întotdeauna starea continuă.

**Valori**: semnalizarea stânga, semnalizarea dreapta și luminile, fiecare pornită sau oprită.

**Aspecte**: Clasic, Curse, Spațiu profund, Tactic, Transport greu, Mașini de construcție, Audio Hi-Fi, Aură, Nucleu de circuit, Rock Crawler, Cabină off-road, Cărămizi, Neo Orbită, Camion greu, Retro, Raliu, Off-road, Supercar, Formula, Cal de povară, Concept, Cursă lungă, Sedan, Mașină de oraș, Buggy, Apus, 4x4 clasic, Miami, High-tech, Hologramă.

**Legături rapide**: intrarea [Semnalizare](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) cu canalele **Semnalizare (stânga − / dreapta +)** (două lumini cu polaritate opusă pe un singur port), **Semnalizare stânga**, **Semnalizare dreapta** și **Lumină**.

## Controler de tren {#train-controller}

Un controler de locomotivă cu manetă de tracțiune și inversor.

- **Manetă de tracțiune**: trage maneta în sus sau în jos. Are 8 trepte de putere (0–8) și rămâne pe treapta unde o lași.
- **Inversor**: trage butonul lui în sus pentru **înainte** sau în jos pentru **înapoi**; mijlocul este **neutru**. Butonul sare dintr-o poziție în alta și nu se oprește niciodată între ele. Ca într-o cabină adevărată, se mișcă doar când maneta de tracțiune este la 0.

**Valori**: treapta de putere (0–8), inversorul (1 = înainte, 0 = neutru, −1 = înapoi) și **tracțiunea**: treapta ÷ 8 × 100, cu semnul sensului, de la −100 la 100. Tracțiunea poate comanda direct un motor de tren.

**Aspecte**: Original, Mașini de construcție, Audio Hi-Fi, Aură, Cărămizi, Buggy, Nucleu de circuit, Mașină de oraș, Clasic, Concept, Spațiu profund, Off-road, Transport greu, 4x4 clasic, Camion greu, Miami, Neo Orbită, Supercar, Cal de povară, Cabină off-road, Curse, Raliu, Rock Crawler, Sedan, Apus, Tactic, Cursă lungă, Retro, Formula, High-tech, Hologramă.

**Legături rapide**: intrarea [Glisor](/docs/Application/Links/Blocks/InputBlocks#controller-train); ea dă tracțiunea.

## Blocuri {#blocks}

Fiecare comandă specială își adaugă propriile blocuri în categoria **Controlere pe ecran** din Blocuri logice:

| Comandă | Evenimente | Valori |
|---|---|---|
| Volan | *când volanul … este mutat / apăsat / eliberat* | *volan …*, *volan … apăsat / eliberat?* |
| Pedale | *când pedalele … orice / frână / accelerație este mutat / apăsat / eliberat* | *pedale … accelerație / frână*, *pedală … apăsat / eliberat?* |
| Cutii de viteze | *când cutia de viteze … schimbă treapta / urcă o treaptă / coboară o treaptă / trece la neutru / trece în marșarier / trece în parcare* | *treapta …*, *este cutia de viteze … în neutru / în marșarier / într-o treaptă înainte / în parcare?*, *treptele de viteză din …* |
| Frână de mână | *când frâna de mână … este trasă / blocată / deblocată / eliberată* | *forța frânei de mână …*, *este frâna de mână … blocată / deblocată / trasă?* |
| Semnalizare | *când semnalizatoarele … semnalizarea stânga / semnalizarea dreapta / luminile se aprinde / se stinge* | *semnalizatoarele … semnalizarea stânga / semnalizarea dreapta / luminile este aprins?* |
| Controler de tren | *când controlerul de tren … treapta schimbată / treapta crescută / treapta scăzută, tracțiunea oprită, inversorul mutat, maneta eliberată* | *controlerul de tren … tracțiune / treapta de putere / inversor*, *este controlerul de tren … înainte / înapoi / în neutru / la treapta 0?* |

Volanul și pedalele au și blocul *sunet … de la …*: el alege unul dintre sunetele lor pentru blocurile **Sunete**. Detalii: [Controlere pe ecran](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Simulatorul de vehicul {#vehicle-simulator}

Comenzile speciale dau doar valori brute. **Simulatorul de vehicul** transformă pedalele, schimbătorul de viteze și frâna de mână într-un model care se conduce ca o mașină: accelerează cu inerție, rulează liber, frânează, merge înapoi, schimbă treptele în D și stă pe loc pe frâna de mână.

- **Legături rapide**: folosește intrarea [Vehicul](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Alege de pe tabloul de bord **Pedalele**, **Schimbătorul de viteze** și **Frâna de mână**, apoi **Tip de vehicul** (Autoturism, Vehicul off-road, Mașină sport, Camion) și **Ieșire**: **Viteză**, **Turația motorului (rpm)**, **Frânare** sau **Pe frâna de mână**.
- **Blocuri logice**: când tabloul de bord are pedale, un schimbător de viteze sau o frână de mână, apare categoria **Simulator**. Creează acolo un vehicul (**Creează vehicul**) și pune blocul *conduce* sub un eveniment. Conectează valori în sloturile lui: *accelerație*, *frână*, *treapta*, *din* (numărul de trepte; aici se potrivește blocul *treptele de viteză din …*), *frână de mână* și *blocată*. Alte blocuri Simulator setează tipul vehiculului, inerția motorului și viteza de marșarier, citesc viteza, turația motorului și treapta și reacționează când vehiculul pornește, se oprește, frânează sau schimbă treapta.

Cum conduce simulatorul:

- **Accelerația** mărește viteza modelului cu inerție; când o eliberezi, modelul rulează liber. **Frâna** îl încetinește.
- **Fără cutie de viteze**, dacă ții frâna apăsată după ce modelul s-a oprit, acesta merge înapoi.
- **Cutie de viteze manuală**: R merge înapoi, N nu conduce. Opțional, fiecare treaptă limitează viteza maximă.
- **Cutie de viteze automată**: R merge înapoi, N nu conduce, P ține modelul pe loc ca o frână de mână blocată. În D, simulatorul urcă și coboară singur treptele și afișează treapta pe selector.
- **Frâna de mână**: forța ei se adaugă la frânare; o frână de mână blocată poate ține modelul pe loc.
- **Tip de vehicul**: un camion este mai greu (mai multă inerție) și are frână pneumatică; o mașină sport reacționează rapid și merge înapoi mai repede.

Ultimele pedale, ultimul schimbător de viteze sau ultima frână de mână nu pot fi șterse cât timp programul folosește blocuri Simulator.
