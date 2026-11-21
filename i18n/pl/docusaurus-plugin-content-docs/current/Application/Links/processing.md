---
id: Processing
title: Przetwarzanie
description: "Bloki przetwarzania w Szybkich połączeniach: Odwróć, Ograniczenie, Martwa strefa, Próg, Wygładzanie i Zatrzask."
---

# Przetwarzanie

Bloki przetwarzania stoją między wejściem a operacją i zmieniają wartość po drodze. Wiersz może nie mieć żadnego, mieć jeden lub kilka, w dowolnej kolejności. Ustawienia i dozwolone wartości: [Bloki przetwarzania](/docs/Application/Links/Blocks/ProcessingBlocks).

| Blok | Co robi |
|---|---|
| [Odwróć](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | odwraca kierunek albo zamienia wł. z wył. |
| [Ograniczenie](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | ogranicza wartość |
| [Martwa strefa](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | pomija drobne ruchy wokół zera |
| [Próg](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | zamienia wartość na wł./wył. |
| [Wygładzanie](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | stopniowo przyspiesza i zwalnia |
| [Zatrzask](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | naciśnij raz — wł., jeszcze raz — wył. |

## Odwróć {#invert}

Silnik kręci się w złą stronę? Zamiast przebudowywać model, dodaj **Odwróć**. Jeśli dwa silniki muszą się obracać w przeciwnych kierunkach (lewa i prawa gąsienica, dwie strony przekładni), zrób dwa wiersze z tym samym wejściem i w jednym z nich umieść Odwróć.

## Ograniczenie {#limit}

Spowalnia model i ułatwia sterowanie: przy ustawieniu **Maksimum** 50 % drążek wychylony do końca daje połowę prędkości. Dobre dla dzieci, do jazdy w domu i dla delikatnych mechanizmów.

## Martwa strefa {#dead-zone}

Joystick rzadko spoczywa dokładnie na zerze, więc silnik może buczeć lub pełzać. **Martwa strefa** traktuje małe wartości jak zero. Na początek dobre jest 10 %.

## Próg {#threshold}

Zamienia wartość na wł./wył.: „Włączone, gdy wartość jest **Powyżej** 20 %”. Z czujnikiem: *Czujnik odległości* → *Próg* (Poniżej, 20 %) jest włączony, gdy coś jest blisko. Próg ma niewielką histerezę, więc nie migocze na granicy.

## Wygładzanie {#smooth}

Rusza i zatrzymuje się stopniowo, jak prawdziwy pojazd. Przyspieszanie i zwalnianie ustawia się osobno: ciężka ciężarówka może rozpędzać się 2 s, a zatrzymywać 0,5 s. Na świetle Wygładzanie płynnie je rozjaśnia i przygasza.

## Zatrzask {#toggle}

Zamienia przycisk w przełącznik: naciśnij raz — wł., naciśnij ponownie — wył. *Przycisk* → *Zatrzask* → *Światło*.

## Wskazówki {#tips}

- Kolejność ma znaczenie: *Martwa strefa → Ograniczenie → Wygładzanie* to dobry łańcuch do jazdy.
- Blok, który nie pasuje do sygnału, się nie połączy: Zatrzask wymaga wejścia wł./wył., a Martwa strefa i Próg — wartości.
- Obserwuj bieżące wartości podczas działania programu, aby zobaczyć, co robi każdy blok.
