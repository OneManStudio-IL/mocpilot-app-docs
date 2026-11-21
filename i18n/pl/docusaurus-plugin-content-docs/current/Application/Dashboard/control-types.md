---
id: ControlTypes
title: Typy elementów sterujących
description: "Joystick, pad kierunkowy, suwaki, pokrętło, przyciski, przełączniki, przełączniki krokowe, monitory i specjalne elementy sterujące."
---

# Typy elementów sterujących {#control-types}

Każdy [motyw](/docs/Application/Themes/ThemesOverview) rysuje ten sam zestaw typów elementów sterujących we własnym stylu. Darmowy motyw **Podstawowy** ma ich dziewięć; każdy płatny motyw dodaje **Pokrętło** i trzy graficzne monitory. Kierownice, pedały, skrzynie biegów i pozostałe [specjalne elementy sterujące](/docs/Application/Dashboard/SpecialControls) to osobne produkty.

| Element sterujący | Nazwa na panelu | Co przekazuje programowi | Dostępny w |
|---|---|---|---|
| Joystick | JOY | osie X i Y | wszystkich motywach |
| Pad kierunkowy | DPAD | przyciski góra / dół / lewo / prawo | wszystkich motywach |
| Suwak | SLDR | wartość | wszystkich motywach |
| Pionowy suwak | VSLDR | wartość | wszystkich motywach |
| Pokrętło | DIAL | wartość | płatnych motywach |
| Przycisk | BTN | naciśnięty / puszczony | wszystkich motywach |
| Przełącznik | SWCH | wł. / wył. | wszystkich motywach |
| Przełącznik krokowy | STPR | numer kroku | wszystkich motywach |
| Pionowy przełącznik krokowy | VSTPR | numer kroku | wszystkich motywach |
| Monitor | MNTR | pokazuje tekst lub wartość | wszystkich motywach |
| Poziom baterii | MNTBT | pokazuje poziom | płatnych motywach |
| Prędkościomierz | MNTSP | pokazuje prędkość | płatnych motywach |
| Monitor nachylenia | MNTLT | pokazuje pochylenie i przechył | płatnych motywach |
| Kierownica, pedały, skrzynie biegów, hamulec ręczny, kierunkowskazy, nastawnik jazdy | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | zobacz [Specjalne elementy sterujące](/docs/Application/Dashboard/SpecialControls) | produktach specjalnych |

Nazwa na panelu otrzymuje numer: pierwszy joystick to **JOY1**, drugi – **JOY2**.

## Joystick {#joystick}

Drążek, który sprężynuje z powrotem do środka. Podaje wartość **X** (lewo/prawo) i **Y** (góra/dół); środek to zero.

- **Typ osi**: **Obie osie (X, Y)**, **Tylko poziomo (X)** lub **Tylko pionowo (Y)**. Joystick z jedną osią jest wygodniejszy, gdy służy tylko do jazdy albo tylko do skręcania.
- Typowe użycie: Y do jazdy i X do skręcania albo po jednym joysticku na każdą gąsienicę czołgu.

## Pad kierunkowy {#directional-pad}

Cztery przyciski: góra, dół, lewo i prawo. Każdy jest albo naciśnięty, albo puszczony. W Szybkich połączeniach oś pada kierunkowego daje −1, 0 lub +1 (**Góra / dół** lub **Lewo / prawo**), co przydaje się do ruchów krok po kroku, na przykład haka dźwigu.

## Suwak i Pionowy suwak {#slider-and-ver-slider}

Uchwyt, który przesuwa się po poziomej lub pionowej ścieżce.

- **Powróć do zera**: uchwyt sprężynuje z powrotem po puszczeniu (jak przepustnica), zamiast zostawać tam, gdzie go zostawisz (jak nastawa prędkości pociągu).
- **Wartości ujemne**: zero jest na środku, więc suwak daje wartości ujemne i dodatnie (do tyłu i do przodu).
- **Wartość kroku**: suwak przesuwa się skokowo.

## Pokrętło {#rotary-knob}

Okrągłe pokrętło, jak regulator głośności, w grupie **Suwaki** każdego płatnego motywu. Obracaj je jednym palcem wokół środka: obraca się o około 135° w każdą stronę i zostaje tam, gdzie je zostawisz.

- **Skoki z zapadką (0 = płynnie)** (0–24): ze skokami pokrętło przeskakuje z klikiem od jednej zapadki do następnej.
- **Zero na środku (-100..100)**: pokrętło daje wartości od −100 do 100 z zerem na środku zamiast od 0 do 100.
- Bloki: *gdy pokrętło … obrócone / wciśnięte / puszczony / obrócone do minimum / obrócone do maksimum*, *wartość pokrętła …*, *pokrętło … wciśnięte / na minimum / na maksimum?* Zobacz [Kontrolery ekranowe](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- W Szybkich połączeniach pokrętło działa jak [suwak](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Motyw Podstawowy nie ma pokrętła. Ponieważ każdy płatny motyw je ma, **Zmień motyw** przełącza pokrętło na wygląd innego motywu.

## Przycisk {#button}

Naciśnięty, dopóki go trzymasz, puszczony, gdy go zwolnisz. Używaj go do klaksonu lub krótkiego ruchu albo z blokiem **Zatrzask** w Szybkich połączeniach, aby coś włączać i wyłączać.

## Przełącznik {#switch}

Pozostaje włączony lub wyłączony: stuknij, aby zmienić. Używaj go do świateł, trybów lub blokady wciągarki.

## Przełącznik krokowy i Pionowy przełącznik krokowy {#step-switch-and-ver-step-switch}

Element **−** / **+**, który liczy kroki, jak biegi albo poziomy prędkości pociągu.

- **Liczba kroków**: od 1 do 100 (domyślnie 10).
- **Wartości ujemne**: pozwala na kroki poniżej zera (poziomy jazdy do tyłu).
- **Włącz resetowanie**: stuknięcie wartości przywraca zero.

## Monitor {#monitor}

Pokazuje tekst lub liczbę z programu: prędkość, baterię, nazwę trybu, wartość czujnika.

- **Układ tekstu** (jeden lub wiele wierszy), **Przepełnienie tekstu** (Przytnij, Zawijaj, Przewijany tekst, Przewijaj), **Maksymalna liczba wierszy**, opcje przewijania, **Wyrównanie tekstu** i **Skala tekstu**.

## Poziom baterii, Prędkościomierz, Monitor nachylenia {#battery-level-speedometer-tilt-monitor}

Graficzne wskaźniki w płatnych motywach. Ich wartość ustawia program: bateria huba, prędkość silnika, nachylenie huba. **Monitor nachylenia** ma opcje **Odwrócenie nachylenia** i **Odwrócenie toczenia**. Zobacz [Wskaźniki i monitory](/docs/Application/Dashboard/Indicators).

## Specjalne elementy sterujące {#special-controls}

Kierownica, pedały, manualna lub automatyczna skrzynia biegów, hamulec ręczny, dźwignia kierunkowskazów i nastawnik jazdy. Każdy z nich to osobny produkt z wieloma wyglądami. Zobacz [Specjalne elementy sterujące](/docs/Application/Dashboard/SpecialControls).

## Interaktywność {#interactivity}

Każdy interaktywny element sterujący ma opcję **Interaktywność** (domyślnie włączoną). Element nieinteraktywny nie reaguje na dotyk. Program może włączać i wyłączać interaktywność, na przykład aby zablokować gaz do czasu zakończenia kontroli przy starcie.
