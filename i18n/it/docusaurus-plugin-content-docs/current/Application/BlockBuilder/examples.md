---
id: Examples
title: Esempi
description: "Programmi di esempio in Blocchi logici per guida, sterzo, luci, suoni, avvisi della batteria e sensori."
---

# Esempi {#examples}

Brevi programmi da cui partire. I nomi dei blocchi seguono il [riferimento dei blocchi](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); i valori tra parentesi sono l'hub, la porta o un blocco valore inserito in uno spazio. Le righe rientrate vanno all'interno di un blocco C.

## Guidare con un joystick {#drive-with-a-joystick}

Dashboard: joystick **JOY1**. Motore di trazione sulla porta A.

```text
quando il programma inizia
ripetere sempre
    avvia motore a (joystick JOY1 asse Y) % velocità  (Hub 1, porta A)
```

## Sterzare con un servo {#steer-with-a-servo}

Motore dello sterzo (un motore angolare) sulla porta B. Imposta la sua posizione attuale come centro, poi segui il joystick: `× 0.9` trasforma il −100…100 del joystick in −90…90 gradi.

```text
quando il programma inizia
imposta posizione relativa 0  (Hub 1, porta B)
ripetere sempre
    vai alla posizione relativa (joystick JOY1 asse X × 0.9) a 100 % velocità  (Hub 1, porta B)
```

Per una cremagliera dello sterzo con finecorsa, calibrala prima (vedi [Motori](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `centro` ed `escursione` sono variabili. Dopo la calibrazione la cremagliera si trova al centro, ma lì la sua posizione relativa vale quanto il centro, non 0, quindi impostala a 0 prima di sterzare:

```text
quando il programma inizia
calibrare cremagliera (centro) centro (escursione) gradi  (Hub 1, porta B)
imposta posizione relativa 0  (Hub 1, porta B)
ripetere sempre
    vai alla posizione relativa ((escursione × joystick JOY1 asse X) ÷ 100) a 100 % velocità  (Hub 1, porta B)
```

## Luci su un interruttore {#lights-on-a-switch}

```text
quando interruttore SWCH1 è stato attivato abilitato
    accendere a 100 % luminosità  (Hub 1, porta C)
quando interruttore SWCH1 è stato attivato spento
    spegnere  (Hub 1, porta C)
```

## Pulsante del clacson {#horn-button}

```text
quando il bottone BTN1 è premuto
    suono Car horn riproduci fino alla fine
```

## Avviso batteria {#battery-warning}

Monitor **MNTR1**; il pulsante diventa rosso quando la batteria è scarica.

```text
quando il programma inizia
ripetere sempre
    mostrare (Hub 1 % batteria) su MNTR1 monitor
    se (Hub 1 % batteria) < 20 allora
        impostare BTN1 colore a rosso
    aspettare 5 secondi
```

## Fermarsi davanti a un ostacolo {#stop-before-an-obstacle}

Technic Distance Sensor sulla porta D, motore di trazione sulla porta A.

```text
quando il programma inizia
ripetere sempre
    se (distanza cm  (Hub 1, porta D)) < 10 allora
        fermare motore  (Hub 1, porta A)
        imposta colore LED su rosso  (Hub 1)
    altro
        avvia motore a (slider SLDR1) % velocità  (Hub 1, porta A)
        imposta colore LED su verde  (Hub 1)
```

## Limite di velocità con un interruttore a passi {#speed-limit-on-a-stepper}

L'interruttore a passi **STPR1** con 4 passi limita la velocità massima.

```text
quando il programma inizia
ripetere sempre
    impostare (limite velocità) a (interruttore a passo STPR1 × 25)
    avvia motore a (joystick JOY1 asse Y × limite velocità / 100) % velocità  (Hub 1, porta A)
```

`limite velocità` è una variabile (**Variabili → Creare una variabile**).

## Controllo all'avvio {#startup-check}

Blocca l'acceleratore finché entrambi gli hub non sono collegati.

```text
quando il programma inizia
impostare JOY1 interattività disabilitare
aspettare fino a (Hub 1 connesso) e (Hub 2 connesso)
mostrare "Pronto" su MNTR1 monitor
impostare JOY1 interattività abilitare
```

## Gamepad {#gamepad}

Imposta **Intervallo dei valori del gamepad** su −100…100 nella [pagina Gamepad](/docs/Application/Dashboard/Gamepad) e attiva **Abilita blocchi del gamepad**.

```text
quando il programma inizia
ripetere sempre
    avvia motore a (stick sinistra asse Y) % velocità  (Hub 1, porta A)
    vai alla posizione relativa (stick destra asse X × 0.9) a 100 % velocità  (Hub 1, porta B)
```

## Auto con pedali {#car-with-pedals}

Per un'auto guidata con pedali, cambio e freno a mano, vedi il [Simulatore](/docs/Application/BlockBuilder/Blocks/Simulator).

## Altro {#more}

- Installa i profili ufficiali dal [catalogo](/docs/Application/Profiles/Catalog) e studiane i programmi.
- Prova la demo di Blocchi logici su [mocpilot.com](https://mocpilot.com).
