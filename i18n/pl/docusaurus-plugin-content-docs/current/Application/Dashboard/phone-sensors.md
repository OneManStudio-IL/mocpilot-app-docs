---
id: PhoneSensors
title: Czujniki telefonu
description: "Steruj modelem, wykorzystując nachylenie i przyspieszenie telefonu lub tabletu."
---

# Czujniki telefonu {#phone-sensors}

Twój telefon lub tablet ma czujniki ruchu. MOCPilot może używać ich jako wejścia: przechyl telefon, aby skręcać, potrząśnij nim, aby coś wywołać, albo pokaż baterię telefonu na panelu.

Czujniki telefonu są dostępne w **Blokach logicznych** (kategoria **Czujniki**). Szybkie połączenia korzystają jako wejść z elementów sterujących panelu, gamepada i czujników huba.

## Bloki czujników {#sensor-blocks}

| Blok | Podaje |
|---|---|
| `urządzenie nachylenie` (pochylenie, przechył) | nachylenie urządzenia w stopniach |
| `urządzenie przyspieszenie` (x, y, z) | przyspieszenie urządzenia, m/s² |
| `urządzenie akcelerometr` (x, y, z) | surowe wartości akcelerometru, m/s² |
| `urządzenie % baterii` | poziom baterii urządzenia |

Szczegóły: [Czujniki](/docs/Application/BlockBuilder/Blocks/Sensors).

## Przykład: skręcanie przez przechylanie telefonu {#example-steer-by-tilting-the-phone}

```text
gdy program się uruchamia
powtarzać zawsze
    Do pozycji  (Hub 1, port B)  ←  urządzenie nachylenie (przechył) × 2
```

Do skręcania użyj silnika z pozycją bezwzględną (silnika kątowego).

Trzymaj telefon poziomo jak kierownicę. Ogranicz wartość operatorami *pomiędzy* lub *min/max*, aby układ kierowniczy nie uderzał w ograniczniki.

## Wskazówki {#tips}

- Zablokuj obracanie ekranu urządzenia, w przeciwnym razie system może obracać ekran podczas przechylania.
- Komputery nie mają czujników ruchu; bloki dają tam zero.
- Aby pokazać nachylenie na panelu, wysyłaj kąty do **Monitora nachylenia** (płatne motywy). Zobacz [Wskaźniki i monitory](/docs/Application/Dashboard/Indicators).
- Huby też mają własne czujniki nachylenia: zobacz bloki czujników huba i wejście **Hub** w Szybkich połączeniach.
