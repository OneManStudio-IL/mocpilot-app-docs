---
id: Examples
title: Exemple
description: "Programe exemplu în Blocuri logice pentru tracțiune, direcție, lumini, sunete, avertizări de baterie și senzori."
---

# Exemple {#examples}

Programe scurte de la care să pornești. Numele blocurilor urmează [referința blocurilor](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); valorile din paranteze sunt hubul, portul sau un bloc raportor pus într-un câmp. Liniile indentate intră într-un bloc C.

## Condus cu un joystick {#drive-with-a-joystick}

Tabloul de bord: joystickul **JOY1**. Motorul de tracțiune pe portul A.

```text
când începe programul
repeta mereu
    pornește motorul la (joystick JOY1 axa Y) % viteză  (Hub 1, portul A)
```

## Virare cu un servo {#steer-with-a-servo}

Motorul de direcție (un motor unghiular) pe portul B. Setează poziția lui curentă drept centru, apoi urmează joystickul: `× 0.9` transformă intervalul −100…100 al joystickului în −90…90 de grade.

```text
când începe programul
setează poziția relativă 0  (Hub 1, portul B)
repeta mereu
    mergi la poziție relativă (joystick JOY1 axa X × 0.9) la 100 % viteză  (Hub 1, portul B)
```

Pentru o cremalieră de direcție cu opritoare, calibrează-o mai întâi (consultă [Motoare](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `centru` și `interval` sunt variabile. După calibrare, cremaliera stă la mijloc, dar poziția ei relativă acolo este valoarea centrului, nu 0, așa că setează-o la 0 înainte de a vira:

```text
când începe programul
calibrare cremalieră (centru) centru (interval) grade  (Hub 1, portul B)
setează poziția relativă 0  (Hub 1, portul B)
repeta mereu
    mergi la poziție relativă ((interval × joystick JOY1 axa X) ÷ 100) la 100 % viteză  (Hub 1, portul B)
```

## Lumini pe un comutator {#lights-on-a-switch}

```text
când comutator SWCH1 este comutat activat
    porni la 100 % luminozitate  (Hub 1, portul C)
când comutator SWCH1 este comutat oprit
    opriți  (Hub 1, portul C)
```

## Butonul de claxon {#horn-button}

```text
când butonul BTN1 este apăsat
    sunetul Claxon mașină redă până la final
```

## Avertizare de baterie {#battery-warning}

Monitorul **MNTR1**; butonul devine roșu când bateria este descărcată.

```text
când începe programul
repeta mereu
    afișează (Hub 1 % baterie) pe MNTR1 monitor
    dacă (Hub 1 % baterie) < 20 atunci
        setează BTN1 culoare la roșu
    aștepta 5 secunde
```

## Oprire înaintea unui obstacol {#stop-before-an-obstacle}

Senzorul de distanță Technic pe portul D, motorul de tracțiune pe portul A.

```text
când începe programul
repeta mereu
    dacă (distanță cm  (Hub 1, portul D)) < 10 atunci
        oprește motorul  (Hub 1, portul A)
        setează culoarea LED la roșu  (Hub 1)
    altul
        pornește motorul la (slider SLDR1) % viteză  (Hub 1, portul A)
        setează culoarea LED la verde  (Hub 1)
```

## Limită de viteză cu un comutator pas cu pas {#speed-limit-on-a-stepper}

Comutatorul pas cu pas **STPR1** cu 4 trepte limitează viteza maximă.

```text
când începe programul
repeta mereu
    setează (limita de viteză) la (comutator pas cu pas STPR1 × 25)
    pornește motorul la (joystick JOY1 axa Y × limita de viteză / 100) % viteză  (Hub 1, portul A)
```

`limita de viteză` este o variabilă (**Variabile → Creează o variabilă**).

## Verificare la pornire {#startup-check}

Blochează accelerația până când ambele huburi sunt conectate.

```text
când începe programul
JOY1 interactivitate dezactiva
așteptați până la (Hub 1 conectat) și (Hub 2 conectat)
afișează "Gata" pe MNTR1 monitor
JOY1 interactivitate activa
```

## Gamepad {#gamepad}

Setează **Intervalul valorilor gamepad-ului** la −100…100 pe [pagina Gamepad](/docs/Application/Dashboard/Gamepad) și activează **Activează blocurile gamepad-ului**.

```text
când începe programul
repeta mereu
    pornește motorul la (joystick stânga axa Y) % viteză  (Hub 1, portul A)
    mergi la poziție relativă (joystick dreapta axa X × 0.9) la 100 % viteză  (Hub 1, portul B)
```

## Mașină cu pedale {#car-with-pedals}

Pentru o mașină condusă cu pedale, cutie de viteze și frână de mână, consultă [Simulator](/docs/Application/BlockBuilder/Blocks/Simulator).

## Mai multe {#more}

- Instalează profiluri oficiale din [catalog](/docs/Application/Profiles/Catalog) și studiază-le programele.
- Încearcă demonstrația Blocuri logice pe [mocpilot.com](https://mocpilot.com).
