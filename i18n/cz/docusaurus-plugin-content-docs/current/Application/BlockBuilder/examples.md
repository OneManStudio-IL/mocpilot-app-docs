---
id: Examples
title: Příklady
description: "Ukázkové programy v Logických blocích pro jízdu, řízení, světla, zvuky, varování před vybitou baterií a senzory."
---

# Příklady {#examples}

Krátké programy pro začátek. Názvy bloků odpovídají [přehledu bloků](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); hodnoty v závorkách jsou hub, port nebo hodnotový blok vložený do slotu. Odsazené řádky patří dovnitř bloku ve tvaru C.

## Jízda joystickem {#drive-with-a-joystick}

Panel: joystick **JOY1**. Hnací motor na portu A.

```text
když program začne
opakovat vždy
    spustit motor na (joystick JOY1 osa Y) % rychlost  (Hub 1, port A)
```

## Řízení servem {#steer-with-a-servo}

Motor řízení (úhlový motor) na portu B. Nastavte jeho aktuální polohu jako střed a pak sledujte joystick: `× 0.9` převede rozsah joysticku −100…100 na −90…90 stupňů.

```text
když program začne
nastavit relativní polohu 0  (Hub 1, port B)
opakovat vždy
    jít na relativní polohu (joystick JOY1 osa X × 0.9) na 100 % rychlost  (Hub 1, port B)
```

Hřeben řízení s koncovými dorazy nejprve zkalibrujte (viz [Motory](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `střed` a `rozsah` jsou proměnné. Po kalibraci stojí hřeben uprostřed, ale jeho relativní poloha tam odpovídá hodnotě středu, ne 0, takže ji před řízením nastavte na 0:

```text
když program začne
kalibrovat ozubený hřeben (střed) střed (rozsah) stupně  (Hub 1, port B)
nastavit relativní polohu 0  (Hub 1, port B)
opakovat vždy
    jít na relativní polohu ((rozsah × joystick JOY1 osa X) ÷ 100) na 100 % rychlost  (Hub 1, port B)
```

## Světla na spínači {#lights-on-a-switch}

```text
když přepínač SWCH1 je přepnut povoleno
    zapnout na 100 % jas  (Hub 1, port C)
když přepínač SWCH1 je přepnut vypnuto
    vypnout  (Hub 1, port C)
```

## Tlačítko klaksonu {#horn-button}

```text
když tlačítko BTN1 je stisknuto
    zvuk Klakson auta přehrát do konce
```

## Varování před vybitou baterií {#battery-warning}

Monitor **MNTR1**; tlačítko zčervená, když je baterie slabá.

```text
když program začne
opakovat vždy
    zobrazit (Hub 1 % baterie) na MNTR1 monitor
    pokud (Hub 1 % baterie) < 20 pak
        nastavit BTN1 barva na červená
    čekat 5 sekundy
```

## Zastavení před překážkou {#stop-before-an-obstacle}

Senzor vzdálenosti Technic na portu D, hnací motor na portu A.

```text
když program začne
opakovat vždy
    pokud (vzdálenost cm  (Hub 1, port D)) < 10 pak
        zastavit motor  (Hub 1, port A)
        nastavit barvu LED na červená  (Hub 1)
    jinak
        spustit motor na (posuvník SLDR1) % rychlost  (Hub 1, port A)
        nastavit barvu LED na zelená  (Hub 1)
```

## Omezení rychlosti krokovým spínačem {#speed-limit-on-a-stepper}

Krokový spínač **STPR1** se 4 kroky omezuje nejvyšší rychlost.

```text
když program začne
opakovat vždy
    nastavit (limit rychlosti) k (krokový spínač STPR1 × 25)
    spustit motor na (joystick JOY1 osa Y × limit rychlosti / 100) % rychlost  (Hub 1, port A)
```

`limit rychlosti` je proměnná (**Proměnné → Vytvořit proměnnou**).

## Kontrola při spuštění {#startup-check}

Zablokujte plyn, dokud nejsou připojené oba huby.

```text
když program začne
zakázat JOY1 interaktivita
čekat, dokud (Hub 1 připojeno) a (Hub 2 připojeno)
zobrazit "Připraveno" na MNTR1 monitor
povolit JOY1 interaktivita
```

## Gamepad {#gamepad}

Na [stránce Herní ovladač](/docs/Application/Dashboard/Gamepad) nastavte **Rozsah hodnot herního ovladače** na −100…100 a zapněte **Povolit bloky gamepadu**.

```text
když program začne
opakovat vždy
    spustit motor na (joystick levý osa Y) % rychlost  (Hub 1, port A)
    jít na relativní polohu (joystick pravý osa X × 0.9) na 100 % rychlost  (Hub 1, port B)
```

## Auto s pedály {#car-with-pedals}

Auto ovládané pedály, převodovkou a ruční brzdou popisuje [Simulátor](/docs/Application/BlockBuilder/Blocks/Simulator).

## Další {#more}

- Nainstalujte si oficiální profily z [katalogu](/docs/Application/Profiles/Catalog) a prostudujte jejich programy.
- Vyzkoušejte demo Logických bloků na [mocpilot.com](https://mocpilot.com).
