---
id: DashboardOverview
title: Editorul tabloului de bord
description: "Tabloul de bord MOCPilot: câmpul, grila, bara de instrumente, fundalul și anularea."
---

import Screenshot from '@site/src/components/Screenshot';

# Editorul tabloului de bord {#dashboard-editor}

**Tabloul de bord** este ecranul de pe care îți conduci modelul: joystickuri, glisoare, butoane, monitoare și alte comenzi. Fiecare profil are un tablou de bord.

Deschide-l cu butonul **Tablou de bord** din editor (⌘2 / Ctrl+2 pe computer).

- **Telefon și tabletă**: tabloul de bord se deschide pe tot ecranul, peste editor.
- **Computer**: tabloul de bord se deschide în propria fereastră **Tablou de bord**, ca să-l poți ține lângă program.
- **Editor web**: un panou flotant pe care îl poți muta și redimensiona.

<Screenshot name="dashboard-edit" alt="Tabloul de bord în modul de editare, cu grila de puncte" width={900} />

## Câmpul și grila {#the-field-and-the-grid}

- Câmpul are întotdeauna proporția **2:1** și se încadrează în ecran, așa că un tablou de bord arată la fel pe telefon, pe tabletă și pe computer.
- În modul de editare se afișează o **grilă de puncte** de 40 × 20 de celule. Comenzile se aliniază la grilă.
- Comenzile nu se pot suprapune. Dacă o comandă nu încape, revine unde era.

## Bara de instrumente {#toolbar}

| Buton | Ce face |
|---|---|
| ← | înapoi la editorul de program |
| Anulează / Refă | anulează și reface modificările tabloului de bord |
| **+** (Adaugă controler) | deschide paleta de controlere; vezi [Adaugă și aranjează comenzi](/docs/Application/Dashboard/ArrangingControls) |
| ⚙ (Setări tablou de bord) | opțiuni pentru fundal și grilă (mai jos) |
| ▶ / ■ | **Rulează** / **Oprește**: pornește și oprește programul |

Pe computer, fereastra Tablou de bord are și meniuri: **Fișier** (Închide profilul, Deschide în fereastră separată, Setări tablou de bord…), **Editare** (Anulează, Refă, Adaugă controler…) și **Vizualizare** (Blocuri ⌘1, Tablou de bord ⌘2).

Cât timp programul rulează, butoanele de editare sunt ascunse.

## Anulare și refacere {#undo-and-redo}

Tabloul de bord are propriul istoric, separat de program. Poți anula fiecare mutare, redimensionare, modificare de proprietăți, adăugare și ștergere.

## Setări tablou de bord {#dashboard-settings}

**Imagine de fundal**: atinge **Schimbă** și alege:

- **Alege unul gata**: un fundal gata făcut care vine cu o temă. Galeria afișează fundalurile temelor ale căror comenzi se află pe acest tablou de bord. Un fundal încorporat umple întotdeauna ecranul din jurul câmpului, așa că opțiunile de mai jos nu i se aplică.
- **Încarcă-l pe al tău**: orice imagine de pe dispozitivul tău. Ea se salvează în profil.

**Elimină** șterge fundalul.

<Screenshot name="dashboard-backgrounds" alt="Setări tablou de bord cu galeria de fundaluri încorporate" width={900} />

Pentru propria imagine poți seta și:

- **Mod de umplere a imaginii**: Întinde, Păstrează proporțiile și potrivește, Păstrează proporțiile și decupează, Mozaic, Mozaic vertical, Mozaic orizontal sau Adaugă margini.
- **Zona părinte a imaginii**: **Zona de lucru** (doar câmpul) sau **Tot ecranul**.
- **Opacitate imagine**, **Activează estomparea imaginii** și **Valoare estompare**: fac fundalul mai discret, ca să iasă în evidență comenzile.

**Ascunde punctele**: ascunde punctele grilei cât timp profilul rulează. În modul de editare punctele rămân vizibile, ca să poți alinia în continuare comenzile.

## Comenzile și programul {#controls-and-the-program}

O comandă dă valori; programul decide ce fac ele. O comandă folosită de program nu poate fi ștearsă până când programul nu o mai folosește. În Legături rapide, elimină rândurile care o folosesc; în Blocuri logice, elimină-i blocurile.

## Citește mai departe {#read-more}

- [Adaugă și aranjează comenzi](/docs/Application/Dashboard/ArrangingControls): adăugare, mutare, dimensiuni, blocare
- [Tipuri de comenzi](/docs/Application/Dashboard/ControlTypes)
- [Comenzi speciale](/docs/Application/Dashboard/SpecialControls): volan, pedale, schimbător de viteze, frână de mână, semnalizare, controler de tren
- [Proprietățile comenzilor](/docs/Application/Dashboard/ControlProperties)
- [Indicatoare și monitoare](/docs/Application/Dashboard/Indicators)
