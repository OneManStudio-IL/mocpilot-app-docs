---
id: Examples
title: Príklady
description: "Ukážkové programy v Logických blokoch na jazdu, riadenie, svetlá, zvuky, upozornenia na batériu a senzory."
---

# Príklady {#examples}

Krátke programy na začiatok. Názvy blokov zodpovedajú [prehľadu blokov](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); hodnoty v zátvorkách sú hub, port alebo hlásiaci blok vložený do políčka. Odsadené riadky patria dovnútra bloku v tvare C.

## Jazda joystickom {#drive-with-a-joystick}

Panel: joystick **JOY1**. Hnací motor na porte A.

```text
keď program začne
zopakovať vždy
    spustiť motor na (joystick JOY1 os Y) % rýchlosť  (Hub 1, port A)
```

## Riadenie servom {#steer-with-a-servo}

Motor riadenia (uhlový motor) na porte B. Jeho aktuálnu polohu nastavte ako stred a potom sledujte joystick: `× 0,9` prevedie rozsah joysticku −100…100 na −90…90 stupňov.

```text
keď program začne
nastaviť relatívnu polohu 0  (Hub 1, port B)
zopakovať vždy
    ísť na relatívnu pozíciu (joystick JOY1 os X × 0,9) na 100 % rýchlosť  (Hub 1, port B)
```

Hrebeň riadenia s koncovými dorazmi najprv nakalibrujte (pozrite si [Motory](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `stred` a `rozsah` sú premenné. Po kalibrácii stojí hrebeň v strede, jeho relatívna poloha tam však nie je 0, ale hodnota stredu, preto ju pred riadením nastavte na 0:

```text
keď program začne
kalibrovať hrebeň (stred) stred (rozsah) stupne  (Hub 1, port B)
nastaviť relatívnu polohu 0  (Hub 1, port B)
zopakovať vždy
    ísť na relatívnu pozíciu ((rozsah × joystick JOY1 os X) ÷ 100) na 100 % rýchlosť  (Hub 1, port B)
```

## Svetlá na spínači {#lights-on-a-switch}

```text
keď prepínač SWCH1 je prehodený zap.
    zapnúť na 100 % jas  (Hub 1, port C)
keď prepínač SWCH1 je prehodený vyp.
    vypnúť  (Hub 1, port C)
```

## Tlačidlo klaksónu {#horn-button}

```text
keď tlačidlo BTN1 je stlačené
    zvuk Klaksón auta prehrať do konca
```

## Upozornenie na batériu {#battery-warning}

Monitor **MNTR1**; pri slabej batérii tlačidlo sčervenie.

```text
keď program začne
zopakovať vždy
    zobraziť (Hub 1 % batérie) na monitore MNTR1
    ak (Hub 1 % batérie) < 20 potom
        nastaviť BTN1 farba na červená
    čakať 5 sekundy
```

## Zastavenie pred prekážkou {#stop-before-an-obstacle}

Senzor vzdialenosti Technic na porte D, hnací motor na porte A.

```text
keď program začne
zopakovať vždy
    ak (vzdialenosť cm  (Hub 1, port D)) < 10 potom
        zastaviť motor  (Hub 1, port A)
        nastaviť farbu LED na červená  (Hub 1)
    iné
        spustiť motor na (posuvník SLDR1) % rýchlosť  (Hub 1, port A)
        nastaviť farbu LED na zelená  (Hub 1)
```

## Obmedzenie rýchlosti krokovým spínačom {#speed-limit-on-a-stepper}

Krokový spínač **STPR1** so 4 krokmi obmedzuje najvyššiu rýchlosť.

```text
keď program začne
zopakovať vždy
    nastaviť (limit rýchlosti) na (krokový spínač STPR1 × 25)
    spustiť motor na (joystick JOY1 os Y × limit rýchlosti / 100) % rýchlosť  (Hub 1, port A)
```

`limit rýchlosti` je premenná (**Premenné → Vytvoriť premennú**).

## Kontrola pri štarte {#startup-check}

Zamknite plyn, kým sa nepripoja oba huby.

```text
keď program začne
nastaviť JOY1 interaktivita zakázať
počkajte, kým (Hub 1 pripojené) a (Hub 2 pripojené)
zobraziť "Pripravené" na monitore MNTR1
nastaviť JOY1 interaktivita povoliť
```

## Herný ovládač {#gamepad}

Na [stránke Herný ovládač](/docs/Application/Dashboard/Gamepad) nastavte **Rozsah hodnôt gamepadu** na −100…100 a zapnite **Povoliť bloky gamepadu**.

```text
keď program začne
zopakovať vždy
    spustiť motor na (joystick ľavý os Y) % rýchlosť  (Hub 1, port A)
    ísť na relatívnu pozíciu (joystick pravý os X × 0,9) na 100 % rýchlosť  (Hub 1, port B)
```

## Auto s pedálmi {#car-with-pedals}

Auto ovládané pedálmi, prevodovkou a ručnou brzdou nájdete v kategórii [Simulátor](/docs/Application/BlockBuilder/Blocks/Simulator).

## Ďalšie {#more}

- Nainštalujte si oficiálne profily z [katalógu](/docs/Application/Profiles/Catalog) a preštudujte ich programy.
- Vyskúšajte ukážku Logických blokov na [mocpilot.com](https://mocpilot.com).
