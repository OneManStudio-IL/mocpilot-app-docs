---
id: Operations
title: Operacje i wyjścia
description: "Operacje Szybkich połączeń (Silnik, Serwo, Światło i inne) oraz wyjścia (Hub, Wskaźnik, Dioda LED huba, Matryca LED, Kalibracja serw)."
---

import Screenshot from '@site/src/components/Screenshot';

# Operacje i wyjścia

Karta **Wyjścia** w palecie zawiera operacje i wyjścia.

- **Operacja** określa, *co* zrobić (obrócić silnik, skręcić, mignąć światłem). Zawsze następuje po niej wyjście **Hub**, które określa, *gdzie*: który hub i które porty.
- **Wyjście bezpośrednie** (Wskaźnik, Dioda LED huba, Matryca LED, Kalibracja serw) samo kończy wiersz, bez operacji.

Popularne operacje (Silnik, Serwo, Silnik na czas, Światło) są zawsze dostępne. Operacje specyficzne dla huba pojawiają się tylko wtedy, gdy obsługuje je któryś hub profilu. Każde ustawienie z wartościami i wartością domyślną: [Bloki operacji i wyjść](/docs/Application/Links/Blocks/OutputBlocks).

## Silniki i światła {#motors-and-lights}

| Operacja | Co robi | Typowe zastosowanie |
|---|---|---|
| [Silnik](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | obraca silnik zgodnie z wartością wejścia; 0 go zatrzymuje | jazda, wyciągarki |
| [Serwo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | ustawia silnik z enkoderem w pozycji, która podąża za wejściem | skręcanie |
| [Silnik na czas](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | po każdym naciśnięciu obraca silnik przez ustalony czas | drzwi, wywrotki |
| [Obrót o stopnie](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | po każdym naciśnięciu obraca silnik o ustalony kąt | podział kątowy, obrotnice |
| [Do pozycji](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | ustawia silnik kątowy w jednej pozycji po włączeniu i w innej po wyłączeniu | klapy, wybieraki biegów |
| [Światło](/docs/Application/Links/Blocks/OutputBlocks#op-light) | zapala światła LEGO® światłem ciągłym lub migającym | reflektory, koguty, kierunkowskazy |
| [Kolor portu](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | zmienia kolor diod LED portów BuWizz 3.0 Pro | kolory stanu |
| [Światła czujnika](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | zapala „oczy” czujnika odległości Technic (Robot Inventor) | twarze robotów |

### Skręcanie za pomocą serwa {#steering-with-servo}

Serwo wymaga silnika z enkoderem i mechanizmu skrętu, który albo ustawiasz na środku ręcznie, albo który ma ograniczniki.

- **Ręczna**: ustaw oś na środku i dotknij **Ustaw jako zero**; dostrój za pomocą **◀ 5°** / **5° ▶**. Następnie wybierz **Kąt**, a jeśli koła nadal ściągają w jedną stronę — **Środek**.
- **Auto**: przy każdym uruchomieniu silnik obraca się do obu ograniczników, środek staje się zerem, a zakres ruchu — kątem. **Kalibruj teraz** uruchamia kalibrację od razu. Komunikaty: „Kalibracja: silnik obraca się do obu ograniczników…”, „Skalibrowano: serwo obraca się o ±…°, środek to zero”, „Kalibracja nie powiodła się: sprawdź hub, silnik i czy oś ma ograniczniki”.

W **Technic Move Hub** hub sam skręca i kalibruje swoją zębatkę; ma znaczenie tylko tryb kalibracji.

<Screenshot name="links-servo-settings" alt="Ustawienia bloku Serwo" width={900} />

## Operacje dla całego huba {#operations-for-the-whole-hub}

Sterują hubem jako całością, więc blok Hub za nimi nie ma portów.

| Operacja | Hub | Co robi |
|---|---|---|
| [Hamulec](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | hamuje, dopóki wejście jest włączone |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | tryb mocy Boost, gdy włączone, normalny po wyłączeniu |
| [Impuls mocy](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | jeden impuls mocy na naciśnięcie (tylko konfiguracja Batmobile™ Tumbler) |
| [Tryb mocy](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | przełącza tryb mocy: Wolno, Normalny, Szybko, Ludicrous |
| [Kanał](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | przełącza kanał sterowania: A, B, C |

## Wyjścia {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): hub i jego porty. Zobacz [Blok Hub i porty](/docs/Application/Links/HubsAndPorts).
- [Wskaźnik](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): pokazuje wartość na monitorze panelu (monitor tekstu, Poziom baterii, Prędkościomierz, Monitor nachylenia). Tuż za czujnikiem huba monitor tekstu pokazuje rzeczywistą wartość z jednostką. Wskaźnik pokazuje wartość bez zmian, więc wiersz nie ma operacji. Zobacz [Wskaźniki i monitory](/docs/Application/Dashboard/Indicators).
- [Dioda LED huba](/docs/Application/Links/Blocks/OutputBlocks#hub-led): kolorowe światło huba LEGO®, w jednym kolorze, gdy wejście jest włączone, i w innym, gdy jest wyłączone.
- [Matryca LED](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): matryca świetlna huba Robot Inventor: pasek poziomu, liczba lub obraz.
- [Kalibracja serw](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): ponownie kalibruje każde Serwo w trybie **Auto**. Przypisz ją do przycisku na panelu: *BTN3* → *Kalibracja serw*.

## Gdy program się zatrzymuje {#when-the-program-stops}

Silniki się zatrzymują, matryca LED jest czyszczona, a kolory portów i światła czujnika gasną.
