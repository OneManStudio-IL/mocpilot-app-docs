---
id: ProcessingBlocks
title: Bloki przetwarzania
description: "Opis wszystkich bloków przetwarzania Szybkich połączeń: Odwróć, Ograniczenie, Martwa strefa, Próg, Wygładzanie i Zatrzask."
---

# Bloki przetwarzania

Bloki przetwarzania stoją między wejściem a operacją (lub wskaźnikiem) i zmieniają sygnał po drodze. Wiersz może mieć ich dowolnie wiele, w dowolnej kolejności. Blok, który nie może przyjąć nadchodzącego sygnału, się nie łączy; w pliku jest zgłaszany jako „«…» nie działa z tym kontrolerem”. Jak ich używać: [Przetwarzanie](/docs/Application/Links/Processing).

## Odwróć {#mod-invert}

Odwraca sygnał.

- Brak ustawień.
- Przyjmuje: wartość lub wł./wył. Podaje: ten sam rodzaj.
- Wartość: zmienia znak (0,7 staje się −0,7). Wł./wył.: wł. staje się wył., a wył. — wł.

## Ograniczenie {#mod-limit}

Zmniejsza skalę wartości, więc pełne wychylenie daje nie więcej niż maksimum.

- **Maksimum**: 20, 30, 40, 50, 60, 70, 80 lub 90 % (domyślnie 50 %).
- Przyjmuje: wartość lub wł./wył. Podaje: wartość (ograniczony przycisk daje 0 albo maksimum).

## Martwa strefa {#mod-deadzone}

Traktuje małe wartości wokół zera jak zero; resztę rozciąga z powrotem do pełnego zakresu, więc pełne wychylenie nadal daje 1.

- **Strefa**: 5, 10, 15, 20 lub 30 % (domyślnie 10 %).
- Przyjmuje: wartość. Podaje: wartość.

## Próg {#mod-threshold}

Zamienia wartość na wł./wył.

- **Włączone, gdy wartość jest**: **Powyżej** (domyślnie) lub **Poniżej**.
- **Poziom (pełnej skali)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 lub 90 % (domyślnie 20 %).
- Przyjmuje: wartość. Podaje: wł./wył.
- Niewielka histereza (2 % pełnej skali) zapobiega migotaniu wyjścia, gdy wartość waha się wokół poziomu.

## Wygładzanie {#mod-smooth}

Zbliża się do nadchodzącej wartości stopniowo, zamiast skakać.

- **Przyspieszanie (do pełnej prędkości)**: **Natychmiast**, 0,25, 0,5, 1, 2 lub 3 s (domyślnie 0,5 s): czas od 0 do pełnej wartości w dowolną stronę od zera.
- **Zwalnianie (do zatrzymania)**: te same opcje (domyślnie 0,5 s): czas od pełnej wartości z powrotem do 0.
- Przyjmuje: wartość lub wł./wył. Podaje: wartość (wygładzony przycisk narasta i opada płynnie).

## Zatrzask {#mod-toggle}

Zamienia przycisk chwilowy w przełącznik: każde naciśnięcie przełącza wyjście między wł. a wył. Na początku wyjście jest wyłączone.

- Brak ustawień.
- Przyjmuje: wł./wył. Podaje: wł./wył.
