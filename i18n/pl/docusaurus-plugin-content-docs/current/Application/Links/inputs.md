---
id: Inputs
title: Wejścia
description: "Wejścia Szybkich połączeń: kontrolery panelu, symulowany pojazd, gamepad, przyciski i czujniki hubów."
---

import Screenshot from '@site/src/components/Screenshot';

# Wejścia

Każdy wiersz zaczyna się od wejścia. Karta **Wejścia** w palecie zawiera:

- po jednym bloku na każdy **kontroler panelu**; kontrolery z kilkoma kanałami (osie joysticka i pada kierunkowego, kierownica, pedały, skrzynia biegów, hamulec ręczny, kierunkowskazy) mają po jednym bloku na kanał;
- bloki **Pojazd**, gdy na panelu są pedały, skrzynia biegów lub hamulec ręczny;
- blok **Gamepad**, gdy bloki gamepada są włączone;
- po jednym bloku **Hub** na każdy hub profilu (z wyjątkiem Mould King, który nie ma przycisków ani czujników).

Jeśli karta jest pusta, wyświetla komunikat „Dodaj kontrolery do panelu lub huby w «Moje huby»: pojawią się tutaj”.

<Screenshot name="links-palette-inputs" alt="Karta Wejścia w palecie Szybkich połączeń" width={900} />

Wszystkie ustawienia i wartości każdego wejścia znajdziesz w opisie [Bloki wejść](/docs/Application/Links/Blocks/InputBlocks).

## Kontrolery panelu {#dashboard-controls}

Blok [Kontroler](/docs/Application/Links/Blocks/InputBlocks#src-controller) pobiera kontroler z panelu według jego nazwy (**JOY1**, **SLDR1**, **BTN2**…), a jeśli kontroler ma kilka kanałów — wybrany **Kanał**:

| Kontroler | Co dostaje wiersz |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **Oś X** lub **Oś Y**, −1…1 |
| [Suwak](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [nastawnik jazdy](/docs/Application/Links/Blocks/InputBlocks#controller-train), [pokrętło](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | jego położenie |
| [Kierownica](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Kąt skrętu** −1…1 lub **Klakson** |
| [Pedały](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Pedał gazu** lub **Pedał hamulca**, 0…1 |
| [Skrzynia biegów](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Bieg** lub **Kierunek (R − / naprzód +)** |
| [Hamulec ręczny](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Hamulec ręczny zaciągnięty** (wł./wył.) lub **Siła hamulca ręcznego** |
| [Kierunkowskazy](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Kierunkowskazy (lewy − / prawy +)**, **Lewy kierunkowskaz**, **Prawy kierunkowskaz** lub **Światło** |
| [Reduktor](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase) | **Napęd na cztery koła**, **Reduktor**, **Blokada przedniego dyferencjału**, **Blokada centralnego dyferencjału** lub **Blokada tylnego dyferencjału** (wł./wył.) |
| [Pad kierunkowy](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Góra / dół** lub **Lewo / prawo**: −1, 0 lub +1 |
| [Przycisk](/docs/Application/Links/Blocks/InputBlocks#controller-button) | wł., dopóki jest wciśnięty |
| [Przełącznik](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | wł. / wył. |
| [Przełącznik krokowy](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | bieżący krok |

Gdy dodajesz kontroler na panelu, zmieniasz jego nazwę lub ustawienia, paleta i wiersze dostosowują się automatycznie. Jeśli ustawisz joystick na **Tylko poziomo**, wiersze korzystające z jego osi Y zgłoszą „… nie porusza się w tej osi”.

## Jedź jak prawdziwym samochodem {#drive-like-a-real-car}

Kierownica, pedały, skrzynia biegów i hamulec ręczny podają swoje surowe położenie: wiersz z pedałem obraca silnik dokładnie tak mocno, jak mocno wciśnięty jest pedał. Jeśli model ma zachowywać się jak samochód (przyspieszać z bezwładnością, toczyć się, hamować i cofać na biegu R), użyj zamiast tego wejścia [Pojazd](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Odczytuje ono jednocześnie pedały, skrzynię biegów i hamulec ręczny i podaje **Prędkość** pojazdu, **Obroty silnika (obr./min)**, **Hamowanie** lub **Na hamulcu ręcznym**:

- *Pojazd (Prędkość)* → *Silnik* → silniki napędu;
- *Kierownica (Kąt skrętu)* → *Serwo* → skręt;
- *Pojazd (Hamowanie)* → *Światło* → światła stop;
- *Kierunkowskazy (Lewy kierunkowskaz)* → *Światło* → lewa lampka kierunkowskazu.

## Gamepad {#gamepad}

Jeden blok [Gamepad](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) obejmuje cały kontroler; drążek, spust lub przycisk wybierasz w polu **Wejście**. Najpierw włącz **Włącz bloki gamepada** na [stronie Gamepad](/docs/Application/Dashboard/Gamepad). Etykiety zależą od ustawienia **Układ przycisków gamepada** (Xbox lub PlayStation).

## Przyciski i czujniki hubów {#hub-buttons-and-sensors}

Wejście [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) odczytuje przycisk huba lub jeden z jego czujników: baterię, nachylenie, przyspieszenie, prędkość i pozycję silnika, czujniki odległości i koloru na portach i nie tylko. Lista pokazuje tylko to, co dany hub potrafi zgłaszać. Dla nachylenia i przyspieszenia ustaw **Orientacja huba** zgodnie z tym, jak hub jest zamontowany w modelu.

Wartość przechodzi przez wiersz przeskalowana do zakresu −1…1. Tekstowy **Monitor** tuż za czujnikiem pokazuje rzeczywistą wartość z jednostką, na przykład „7.85 V” lub „−12°”.

Typowe zastosowania:

- *Bateria* → *Wskaźnik* (Poziom baterii);
- *Czujnik odległości* → *Próg* (Poniżej, 20 %) → *Silnik na czas*: cofnij się, gdy coś się zbliży;
- *Przycisk 1* (pilot Powered Up) → *Silnik*: jedź za pomocą fizycznego pilota.
