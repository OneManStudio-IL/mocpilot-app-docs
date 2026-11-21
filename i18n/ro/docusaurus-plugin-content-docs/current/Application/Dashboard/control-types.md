---
id: ControlTypes
title: Tipuri de comenzi
description: "Joystick, pad direcțional, glisoare, buton rotativ, butoane, comutatoare, comutatoare pas cu pas, monitoare și comenzi speciale."
---

# Tipuri de comenzi {#control-types}

Fiecare [temă](/docs/Application/Themes/ThemesOverview) desenează același set de tipuri de comenzi în propriul stil. Tema gratuită **De bază** are nouă dintre ele; fiecare temă plătită adaugă **Butonul rotativ** și trei monitoare grafice. Volanele, pedalele, schimbătoarele de viteze și celelalte [comenzi speciale](/docs/Application/Dashboard/SpecialControls) sunt produse separate.

| Comandă | Numele pe tabloul de bord | Ce primește programul | Disponibilă în |
|---|---|---|---|
| Joystick | JOY | axele X și Y | toate temele |
| Pad direcțional | DPAD | butoane sus / jos / stânga / dreapta | toate temele |
| Glisor | SLDR | o valoare | toate temele |
| Glisor ver. | VSLDR | o valoare | toate temele |
| Buton rotativ | DIAL | o valoare | temele plătite |
| Buton | BTN | apăsat / eliberat | toate temele |
| Comutator | SWCH | pornit / oprit | toate temele |
| Comutator pas cu pas | STPR | numărul pasului | toate temele |
| Comutator pas cu pas ver. | VSTPR | numărul pasului | toate temele |
| Monitor | MNTR | afișează text sau o valoare | toate temele |
| Nivelul bateriei | MNTBT | afișează un nivel | temele plătite |
| Vitezometru | MNTSP | afișează o viteză | temele plătite |
| Monitor înclinat | MNTLT | afișează tangajul și ruliul | temele plătite |
| Volan, pedale, cutii de viteze, frână de mână, semnalizare, controler de tren | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | vezi [Comenzi speciale](/docs/Application/Dashboard/SpecialControls) | produse speciale |

Numele de pe tabloul de bord primește un număr: primul joystick este **JOY1**, al doilea **JOY2**.

## Joystick {#joystick}

Un stick care revine singur în centru. Dă o valoare **X** (stânga/dreapta) și una **Y** (sus/jos); centrul este zero.

- **Tip de axe**: **Ambele axe (X, Y)**, **Doar orizontal (X)** sau **Doar vertical (Y)**. Un joystick cu o singură axă e mai ușor de folosit când doar conduce sau doar virează.
- Utilizare tipică: Y pentru condus și X pentru virat sau câte un joystick pentru fiecare șenilă a unui tanc.

## Pad direcțional {#directional-pad}

Patru butoane: sus, jos, stânga și dreapta. Fiecare este fie apăsat, fie eliberat. În Legături rapide, o axă a padului dă −1, 0 sau +1 (**Sus / jos** sau **Stânga / dreapta**), util pentru mișcări pas cu pas, precum cârligul unei macarale.

## Glisor și Glisor ver. {#slider-and-ver-slider}

Un mâner care se deplasează pe o pistă orizontală sau verticală.

- **Revenire la zero**: mânerul revine când îl eliberezi (ca o pedală de accelerație), în loc să rămână unde l-ai lăsat (ca setarea vitezei unui tren).
- **Valori negative**: zero este la mijloc, așa că glisorul dă valori negative și pozitive (înapoi și înainte).
- **Valoare pas**: glisorul se deplasează în pași.

## Buton rotativ {#rotary-knob}

Un buton rotund, ca un control de volum, în grupul **Glisoare** al fiecărei teme plătite. Rotește-l cu un deget în jurul centrului: se rotește aproximativ 135° în fiecare parte și rămâne unde îl lași.

- **Trepte cu clic (0 = lin)** (0–24): cu trepte, butonul trece cu un clic de la o treaptă la alta.
- **Zero la mijloc (-100..100)**: butonul dă valori de la −100 la 100, cu zero la mijloc, în loc de 0 la 100.
- Blocuri: *când butonul rotativ … rotit / apăsat / eliberat / rotit la minim / rotit la maxim*, *valoarea butonului rotativ …*, *este butonul rotativ … apăsat / la minim / la maxim?* Vezi [Controlere pe ecran](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- În Legături rapide, butonul rotativ funcționează ca un [glisor](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Tema De bază nu are buton rotativ. Deoarece fiecare temă plătită are unul, **Schimbă tema** trece un buton rotativ la aspectul altei teme.

## Buton {#button}

Apăsat cât timp îl ții, eliberat când îi dai drumul. Folosește-l pentru claxon sau pentru o mișcare scurtă ori, în Legături rapide, cu blocul **Comutare** ca să pornești și să oprești ceva.

## Comutator {#switch}

Rămâne pornit sau oprit: atinge-l ca să-l schimbi. Folosește-l pentru lumini, moduri sau blocarea unui troliu.

## Comutator pas cu pas și Comutator pas cu pas ver. {#step-switch-and-ver-step-switch}

O comandă **−** / **+** care numără pași, ca treptele de viteză sau nivelurile de viteză ale unui tren.

- **Numărul de pași**: de la 1 la 100 (implicit 10).
- **Valori negative**: permite pași sub zero (niveluri pentru mersul înapoi).
- **Activează resetarea**: atingerea valorii o readuce la zero.

## Monitor {#monitor}

Afișează text sau un număr din program: viteza, bateria, numele unui mod, valoarea unui senzor.

- **Aspect text** (o singură linie sau mai multe linii), **Depășire text** (Decupează, Încadrează, Text derulant, Derulează), **Număr maxim de linii**, opțiuni de derulare, **Aliniere text** și **Scală text**.

## Nivelul bateriei, Vitezometru, Monitor înclinat {#battery-level-speedometer-tilt-monitor}

Indicatoare grafice din temele plătite. Programul le setează valoarea: bateria unui hub, viteza unui motor, înclinarea unui hub. **Monitor înclinat** are **Inversare înclinare** și **Inversare rostogolire**. Vezi [Indicatoare și monitoare](/docs/Application/Dashboard/Indicators).

## Comenzi speciale {#special-controls}

Un volan, pedale, o cutie de viteze manuală sau automată, o frână de mână, o manetă de semnalizare și un controler de tren. Fiecare este un produs separat, cu multe aspecte. Vezi [Comenzi speciale](/docs/Application/Dashboard/SpecialControls).

## Interactivitate {#interactivity}

Fiecare comandă interactivă are **Interactivitate** (activată implicit). O comandă non-interactivă nu reacționează la atingeri. Programul poate activa și dezactiva interactivitatea, de exemplu ca să blocheze accelerația până la terminarea unei verificări la pornire.
