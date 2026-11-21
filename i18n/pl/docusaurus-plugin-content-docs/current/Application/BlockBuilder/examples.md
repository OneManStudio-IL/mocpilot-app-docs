---
id: Examples
title: Przykłady
description: "Przykładowe programy w Blokach logicznych: jazda, skręcanie, światła, dźwięki, ostrzeżenia o baterii i czujniki."
---

# Przykłady

Krótkie programy na początek. Nazwy bloków są zgodne z [opisem bloków](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); wartości w nawiasach to hub, port lub blok raportujący wstawiony do pola. Wcięte wiersze znajdują się wewnątrz bloku C.

## Jazda joystickiem {#drive-with-a-joystick}

Panel: joystick **JOY1**. Silnik napędu na porcie A.

```text
gdy program się uruchamia
powtarzać zawsze
    uruchom silnik na (joystick JOY1 oś Y) % prędkość  (Hub 1, port A)
```

## Skręcanie serwem {#steer-with-a-servo}

Silnik skrętu (silnik kątowy) na porcie B. Ustaw jego bieżącą pozycję jako środek, a potem podążaj za joystickiem: `× 0.9` zamienia zakres joysticka −100…100 na −90…90 stopni.

```text
gdy program się uruchamia
ustaw pozycję względną 0  (Hub 1, port B)
powtarzać zawsze
    przejdź do względnej pozycji (joystick JOY1 oś X × 0.9) w 100 % prędkość  (Hub 1, port B)
```

Zębatkę układu kierowniczego z ogranicznikami najpierw skalibruj (zobacz [Silniki](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `środek` i `zakres` to zmienne. Po kalibracji zębatka stoi na środku, ale jej pozycja względna jest tam równa wartości środka, a nie 0, więc przed skręcaniem ustaw ją na 0:

```text
gdy program się uruchamia
skalibruj zębatkę (środek) środek (zakres) stopnie  (Hub 1, port B)
ustaw pozycję względną 0  (Hub 1, port B)
powtarzać zawsze
    przejdź do względnej pozycji ((zakres × joystick JOY1 oś X) ÷ 100) w 100 % prędkość  (Hub 1, port B)
```

## Światła na przełączniku {#lights-on-a-switch}

```text
gdy przełącznik SWCH1 jest przełączony włączone
    włączyć w 100 % jasność  (Hub 1, port C)
gdy przełącznik SWCH1 jest przełączony wyłącz
    wyłączyć  (Hub 1, port C)
```

## Przycisk klaksonu {#horn-button}

```text
gdy przycisk BTN1 jest naciśnięty
    dźwięk Klakson samochodu odtwórz do końca
```

## Ostrzeżenie o baterii {#battery-warning}

Monitor **MNTR1**; przycisk robi się czerwony przy słabej baterii.

```text
gdy program się uruchamia
powtarzać zawsze
    pokaż (Hub 1 % baterii) na MNTR1 monitor
    jeśli (Hub 1 % baterii) < 20 wtedy
        ustawić BTN1 kolor do czerwony
    czekać 5 sekundy
```

## Zatrzymanie przed przeszkodą {#stop-before-an-obstacle}

Czujnik odległości Technic na porcie D, silnik napędu na porcie A.

```text
gdy program się uruchamia
powtarzać zawsze
    jeśli (odległość cm  (Hub 1, port D)) < 10 wtedy
        zatrzymaj silnik  (Hub 1, port A)
        ustaw kolor LED na czerwony  (Hub 1)
    inne
        uruchom silnik na (suwak SLDR1) % prędkość  (Hub 1, port A)
        ustaw kolor LED na zielony  (Hub 1)
```

## Ograniczenie prędkości przełącznikiem krokowym {#speed-limit-on-a-stepper}

Przełącznik krokowy **STPR1** z 4 krokami ogranicza prędkość maksymalną.

```text
gdy program się uruchamia
powtarzać zawsze
    ustawić (limit prędkości) do (przełącznik krokowy STPR1 × 25)
    uruchom silnik na (joystick JOY1 oś Y × limit prędkości / 100) % prędkość  (Hub 1, port A)
```

`limit prędkości` to zmienna (**Zmienne → Utwórz zmienną**).

## Kontrola przy starcie {#startup-check}

Zablokuj przepustnicę, dopóki oba huby się nie połączą.

```text
gdy program się uruchamia
wyłączyć JOY1 interaktywność
czekać aż (Hub 1 połączony) i (Hub 2 połączony)
pokaż "Gotowe" na MNTR1 monitor
włączyć JOY1 interaktywność
```

## Gamepad {#gamepad}

Na [stronie Gamepad](/docs/Application/Dashboard/Gamepad) ustaw **Zakres wartości gamepada** na −100…100 i włącz **Włącz bloki gamepada**.

```text
gdy program się uruchamia
powtarzać zawsze
    uruchom silnik na (drążek lewy oś Y) % prędkość  (Hub 1, port A)
    przejdź do względnej pozycji (drążek prawo oś X × 0.9) w 100 % prędkość  (Hub 1, port B)
```

## Samochód z pedałami {#car-with-pedals}

Samochód sterowany pedałami, skrzynią biegów i hamulcem ręcznym opisano w sekcji [Symulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Więcej {#more}

- Zainstaluj oficjalne profile z [katalogu](/docs/Application/Profiles/Catalog) i przeanalizuj ich programy.
- Wypróbuj demo Bloków logicznych na [mocpilot.com](https://mocpilot.com).
