---
id: ControlProperties
title: Proprietățile comenzilor
description: "Schimbă dimensiunea, culoarea, pictograma, aspectul, comportamentul și tema unei comenzi din proprietățile ei."
---

import Screenshot from '@site/src/components/Screenshot';

# Proprietățile comenzilor {#control-properties}

În modul de editare, atinge (dă clic pe) o comandă ca să-i deschizi proprietățile.

- **Telefon și tabletă**: un panou peste tabloul de bord; atinge în afara lui ca să-l închizi.
- **Computer**: un panou lateral; poți continua să lucrezi pe tabloul de bord cât timp este deschis.

<Screenshot name="controller-properties" alt="Panoul de proprietăți al comenzii cu filele Stil și Setări" width={900} />

Antetul afișează numele comenzii (de exemplu **JOY1**), butonul coș de gunoi, meniul de duplicare și **OK**.

## Fila Stil {#style-tab}

- **Dimensiune**: S, M sau L. Vezi [dimensiunile](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Culoare de accent**: culoarea principală a comenzii.
- **Pictogramă**: o imagine pe comandă (butoane, comutatoare, monitoare), aleasă dintre peste 260 de pictograme.
- **Aspect**: aspectul unei [comenzi speciale](/docs/Application/Dashboard/SpecialControls), de exemplu stilul unui volan.
- Opțiuni ale temei, în funcție de temă: de exemplu **Carbon colorat**, **Rame colorate** și **Arată liniile de cursă** în Curse, **Numărul segmentelor indicatorului** în Mașini de construcție, **Afișează valorile** în Aură.
- **Schimbă tema**: trece comanda la altă temă pe care o deții și care are același tip de comandă.

## Fila Setări {#settings-tab}

Setări comune:

- **Blocați controlerul**: o comandă blocată nu poate fi mutată sau ștearsă.
- **Interactivitate**: o comandă non-interactivă nu înregistrează apăsările.

Setările fiecărui tip:

| Comandă | Setări |
|---|---|
| Joystick | **Tip de axe**: Ambele axe (X, Y), Doar orizontal (X), Doar vertical (Y) |
| Glisor, Glisor ver. | **Revenire la zero**, **Valori negative**, **Valoare pas** |
| Buton rotativ | **Trepte cu clic (0 = lin)** (0–24), **Zero la mijloc (-100..100)** |
| Comutator pas cu pas, Comutator pas cu pas ver. | **Numărul de pași** (1–100), **Valori negative**, **Activează resetarea** |
| Monitor | **Aspect text**, **Depășire text**, **Număr maxim de linii**, **Direcția derulării**, **Viteza derulării**, **Afișează bara de derulare**, **Derulare interactivă**, **Aliniere text**, **Scală text** |
| Monitor înclinat | **Inversare înclinare**, **Inversare rostogolire** |
| Volan | **Unghiul volanului** (20–120°), **Efecte sonore** |
| Pedale | **Efecte sonore** |
| Cutie de viteze manuală | **Numărul de trepte** (2–6) |
| Cutie de viteze automată | **Numărul de trepte** (2–8) |
| Semnalizare | **Ieșirile semnalizării clipesc**; în fila Stil, **Iconiță: left**, **Iconiță: light**, **Iconiță: right** |

Setările numerice au un buton **Resetare** care restabilește valoarea implicită.

## Schimbarea proprietăților din program {#change-properties-from-the-program}

În Blocuri logice, blocurile pot modifica o comandă cât timp programul rulează: îi pot seta culoarea, îi pot activa sau dezactiva interactivitatea, pot afișa valori pe monitoare. Vezi [Blocurile controlerelor de pe ecran](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
