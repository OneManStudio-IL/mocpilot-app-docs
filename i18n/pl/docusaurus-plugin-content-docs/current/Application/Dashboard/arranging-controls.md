---
id: ArrangingControls
title: Dodawanie i rozmieszczanie elementów sterujących
description: "Dodawaj elementy sterujące z palety, przesuwaj je, zmieniaj ich rozmiar, duplikuj, blokuj i usuwaj."
---

import Screenshot from '@site/src/components/Screenshot';

# Dodawanie i rozmieszczanie elementów sterujących {#add-and-arrange-controls}

## Dodawanie elementu sterującego {#add-a-control}

1. Na panelu stuknij **+** (**Dodaj kontroler**). Na komputerze paleta otwiera się we własnym oknie.
2. Wybierz z listy typ elementu sterującego. Typy są pogrupowane: **Dżojstiki**, **Suwaki**, **Przyciski i przełączniki**, **Monitory**, a dalej **Pojazd i specjalne** dla [specjalnych elementów sterujących](/docs/Application/Dashboard/SpecialControls) oraz **Moje projekty** dla zapisanych przez Ciebie projektów. Aby szybko znaleźć element, pisz w polu **Szukaj elementów sterujących**.
3. Pasek wyglądów pokazuje wybrany typ w każdym [motywie](/docs/Application/Themes/ThemesOverview) (dla specjalnego elementu sterującego – wszystkie jego wyglądy). Stuknij wygląd, aby zobaczyć go w dużym podglądzie; możesz go od razu wypróbować.
4. Skonfiguruj element w sekcji **Konfiguruj**: karty **Styl** i **Ustawienia** oraz rozmiar.
5. Stuknij **Dodaj do panelu**. Na komputerze możesz dodać kilka elementów jeden po drugim.

<Screenshot name="controller-palette" alt="Paleta Dodaj kontroler" width={900} />

Element sterujący trafia w pierwsze wolne miejsce i dostaje plakietkę **NOWY**. Jeśli brakuje miejsca, MOCPilot Cię o tym poinformuje: zrób trochę miejsca albo wybierz mniejszy rozmiar.

Elementy sterujące z motywów, których nie posiadasz, zamiast **Dodaj do panelu** pokazują **Kup** i **Wszystko z MocPilot Pro**. Zobacz [Pobieranie, kupowanie i aktualizacja motywów](/docs/Application/Themes/GettingThemes).

## Przesuwanie {#move}

W trybie edycji naciśnij i przeciągnij element sterujący. Po puszczeniu przyciąga się do najbliższej komórki siatki. Jeśli nachodziłby na inny element, wraca na miejsce.

## Rozmiary {#sizes}

Każdy element sterujący ma trzy rozmiary: **S**, **M** i **L**. Zmienisz go opcją **Rozmiar** we właściwościach elementu. Rozmiary w komórkach siatki (szerokość × wysokość):

| Element sterujący | S | M | L |
|---|---|---|---|
| Joystick, Pad kierunkowy | 7×7 | 10×10 | 13×13 |
| Suwak | 10×3 | 14×4 | 18×5 |
| Pionowy suwak | 3×10 | 4×14 | 5×18 |
| Pokrętło | 6×6 | 8×8 | 10×10 |
| Przycisk, Przełącznik | 3×3 | 4×4 | 5×5 |
| Przełącznik krokowy | 8×3 | 12×4 | 16×5 |
| Pionowy przełącznik krokowy | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Poziom baterii, Prędkościomierz | 6×6 | 8×8 | 10×10 |
| Monitor nachylenia | 8×4 | 12×6 | 16×8 |
| Kierownica | 8×8 | 12×12 | 16×16 |
| Pedały | 11×8 | 16×12 | 21×16 |
| Manualna skrzynia biegów, Automatyczna skrzynia biegów | 8×8 | 10×10 | 12×12 |
| Hamulec ręczny | 4×7 | 6×10 | 8×13 |
| Kierunkowskazy | 8×5 | 10×6 | 14×8 |
| Nastawnik jazdy | 6×8 | 8×10 | 10×13 |

Całe pole ma 40 × 20 komórek. Jeśli większy rozmiar się nie mieści, najpierw przesuń sąsiednie elementy.

## Zaznaczanie i edycja {#select-and-edit}

Stuknij (kliknij) element sterujący, aby go zaznaczyć i otworzyć jego **właściwości**. Zobacz [Właściwości elementów sterujących](/docs/Application/Dashboard/ControlProperties).

## Menu kontekstowe {#context-menu}

Przytrzymaj (ekran dotykowy) lub kliknij prawym przyciskiem (komputer) element sterujący:

- **Zablokuj** / **Odblokuj**
- **Właściwości**
- **Zmień motyw**: przełącza element na inny posiadany motyw, który ma ten sam typ elementu
- **Duplikat**: kopia z tymi samymi właściwościami
- **Duplikat (Tylko typ)**: nowy element tego samego typu z domyślnymi właściwościami
- **Usuń**

Przytrzymaj lub kliknij prawym przyciskiem pustą część pola:

- **Zablokuj wszystko** / **Odblokuj wszystko**
- **Usuń N kontrolerów**: usuwa wszystkie niezablokowane elementy sterujące

Na komputerze, przy otwartym panelu właściwości: **Esc** go zamyka, **Delete** / **Backspace** usuwa element, **⌘D / Ctrl+D** go duplikuje.

## Blokowanie elementów sterujących {#lock-controls}

**Zablokowanego** elementu sterującego nie można przesunąć ani usunąć, więc nie strącisz go przypadkiem podczas jazdy czy edycji. Pokazuje ikonę kłódki. Zablokuj pojedynczy element z jego menu albo opcją **Zablokować kontroler** w jego ustawieniach, lub zablokuj wszystko opcją **Zablokuj wszystko**.

## Nazwy elementów sterujących {#control-names}

Każdy element sterujący ma krótką nazwę widoczną na jego ramce w trybie edycji, np. **JOY1**, **SLDR2** lub **BTN1**. Program odwołuje się do elementów po tych nazwach: w Szybkich połączeniach blok wejścia ma napis *JOY1*, a w Blokach logicznych wybierasz *JOY1* w menu bloku.

## Usuwanie {#delete}

Użyj **Usuń** w menu lub przycisku kosza we właściwościach. Zablokowanych elementów nie można usunąć. Elementu używanego przez program nie można usunąć, dopóki nie usuniesz jego wierszy lub bloków.
