---
id: ControlProperties
title: Właściwości elementów sterujących
description: "Zmieniaj rozmiar, kolor, ikonę, wygląd, zachowanie i motyw elementu sterującego w jego właściwościach."
---

import Screenshot from '@site/src/components/Screenshot';

# Właściwości elementów sterujących {#control-properties}

W trybie edycji stuknij (kliknij) element sterujący, aby otworzyć jego właściwości.

- **Telefon i tablet**: okno nad panelem; stuknij poza nim, aby je zamknąć.
- **Komputer**: panel boczny; możesz dalej pracować na panelu, gdy jest otwarty.

<Screenshot name="controller-properties" alt="Panel właściwości elementu sterującego z kartami Styl i Ustawienia" width={900} />

Nagłówek pokazuje nazwę elementu (na przykład **JOY1**), przycisk kosza, menu duplikowania i **OK**.

## Karta Styl {#style-tab}

- **Rozmiar**: S, M lub L. Zobacz [rozmiary](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Kolor akcentu**: główny kolor elementu.
- **Ikona**: obrazek na elemencie (przyciski, przełączniki, monitory), do wyboru spośród ponad 260 ikon.
- **Wygląd**: wygląd [specjalnego elementu sterującego](/docs/Application/Dashboard/SpecialControls), na przykład styl kierownicy.
- Opcje motywu, zależne od motywu: na przykład **Kolorowy węgiel**, **Kolorowe ramki** i **Pokaż linie wyścigowe** w motywie Wyścigi, **Liczba segmentów wskaźnika** w motywie Maszyny budowlane, **Wyświetl wartości** w motywie Aura.
- **Zmień motyw**: przełącza element na inny posiadany motyw, który ma ten sam typ elementu.

## Karta Ustawienia {#settings-tab}

Wspólne ustawienia:

- **Zablokować kontroler**: zablokowanego elementu nie można przesunąć ani usunąć.
- **Interaktywność**: element nieinteraktywny nie rejestruje naciśnięć.

Ustawienia poszczególnych typów:

| Element sterujący | Ustawienia |
|---|---|
| Joystick | **Typ osi**: Obie osie (X, Y), Tylko poziomo (X), Tylko pionowo (Y) |
| Suwak, Pionowy suwak | **Powróć do zera**, **Wartości ujemne**, **Wartość kroku** |
| Pokrętło | **Skoki z zapadką (0 = płynnie)** (0–24), **Zero na środku (-100..100)** |
| Przełącznik krokowy, Pionowy przełącznik krokowy | **Liczba kroków** (1–100), **Wartości ujemne**, **Włącz resetowanie** |
| Monitor | **Układ tekstu**, **Przepełnienie tekstu**, **Maksymalna liczba wierszy**, **Kierunek przewijania**, **Szybkość przewijania**, **Pokaż pasek przewijania**, **Interaktywne przewijanie**, **Wyrównanie tekstu**, **Skala tekstu** |
| Monitor nachylenia | **Odwrócenie nachylenia**, **Odwrócenie toczenia** |
| Kierownica | **Kąt kierownicy** (20–120°), **Efekty dźwiękowe** |
| Pedały | **Efekty dźwiękowe** |
| Manualna skrzynia biegów | **Liczba biegów** (2–6) |
| Automatyczna skrzynia biegów | **Liczba biegów** (2–8) |
| Kierunkowskazy | **Wyjścia kierunkowskazów migają**; na karcie Styl **Ikona: left**, **Ikona: light**, **Ikona: right** |

Ustawienia liczbowe mają przycisk **Zresetuj**, który przywraca wartość domyślną.

## Zmiana właściwości z poziomu programu {#change-properties-from-the-program}

W Blokach logicznych bloki mogą zmieniać element sterujący podczas działania programu: ustawiać jego kolor, włączać i wyłączać interaktywność, pokazywać wartości na monitorach. Zobacz [Bloki kontrolerów panelu](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
