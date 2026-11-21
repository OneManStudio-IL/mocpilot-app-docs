---
id: Examples
title: "Esempi: auto, carro armato, gru, treno"
description: "Ricette pronte di Collegamenti rapidi per un'auto, un carro armato, una gru e un treno."
---

# Esempi {#examples}

Ricette pronte all'uso. Prima metti i controlli nella dashboard e aggiungi gli hub in I miei hub, poi crea le righe.

## Auto con sterzo a servo {#car-with-servo-steering}

Dashboard: **JOY1** (Solo verticale) a sinistra, **JOY2** (Solo orizzontale) a destra, **BTN1** e un monitor **Livello della batteria**.

| # | Ingresso | Elaborazione | Operazione | Uscita |
|---|---|---|---|---|
| 1 | JOY1, Asse Y | Zona morta 10 %, Graduale 0,5 s | Motore | Technic Hub, porte A + B |
| 2 | JOY2, Asse X | | Servo (Auto, ±90°) | Technic Hub, porta D |
| 3 | BTN1 | Alterna | Luce | Technic Hub, porta C |
| 4 | Hub: Batteria | | | Indicatore: Livello della batteria |

Se uno dei motori di trazione gira nel verso sbagliato, dividi la riga 1 in due righe e aggiungi **Inverti** a una delle due.

## Auto con volante, pedali e cambio {#car-with-a-wheel-pedals-and-a-gearbox}

Dashboard: un **Volante**, i **Pedali**, una **Leva del cambio**, un **Freno a mano** e le **Frecce**. L'ingresso [Veicolo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) trasforma pedali, cambio e freno a mano in una velocità che cresce e cala come quella di un'auto vera.

| # | Ingresso | Elaborazione | Operazione | Uscita |
|---|---|---|---|---|
| 1 | Veicolo: Velocità | | Motore | Technic Hub, porte A + B |
| 2 | Volante: Angolo di sterzata | | Servo (Auto) | Technic Hub, porta D |
| 3 | Veicolo: In frenata | | Luce | Technic Hub, porta C (luci dei freni) |
| 4 | Frecce: Freccia sinistra | | Luce | City Hub, porta A |
| 5 | Frecce: Freccia destra | | Luce | City Hub, porta B |

## Carro armato (due cingoli) {#tank-two-tracks}

Dashboard: due cursori verticali **VSLDR1** e **VSLDR2** con **Torna a zero** e **Valori negativi** attivi.

| # | Ingresso | Elaborazione | Operazione | Uscita |
|---|---|---|---|---|
| 1 | VSLDR1 | Graduale 0,25 s | Motore | Hub, porta A |
| 2 | VSLDR2 | Inverti, Graduale 0,25 s | Motore | Hub, porta B |

Con un gamepad, usa Stick sinistro Y per la riga 1 e Stick destro Y per la riga 2.

## Gru {#crane}

Dashboard: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Ingresso | Elaborazione | Operazione | Uscita |
|---|---|---|---|---|
| 1 | DPAD1, Sinistra / destra | Limite 50 % | Motore | Hub, porta A (rotazione) |
| 2 | DPAD1, Su / giù | | Motore | Hub, porta B (verricello del gancio) |
| 3 | SLDR1 | Zona morta 10 % | Motore | Hub, porta C (braccio) |
| 4 | SWCH1 | | Luce (lampeggio 0,5 s) | Hub, porta D (lampeggiante) |

## Treno {#train}

Dashboard: un **Interruttore a passi** **STPR1** con **Valori negativi** (livelli di velocità in avanti e in retromarcia) e **BTN1** per le luci.

| # | Ingresso | Elaborazione | Operazione | Uscita |
|---|---|---|---|---|
| 1 | STPR1 | Graduale 2 s | Motore | City Hub, porta A |
| 2 | BTN1 | Alterna | Luce | City Hub, porta B |
| 3 | Hub: Batteria | | | Indicatore: Monitor |

Il blocco Graduale fa partire e fermare il treno come uno vero. Con un **Manipolatore del treno** nella dashboard, usalo nella riga 1 al posto di STPR1: fornisce la posizione della leva, negativa in retromarcia.

## Auto Technic Move {#technic-move-car}

| # | Ingresso | Elaborazione | Operazione | Uscita |
|---|---|---|---|---|
| 1 | Veicolo: Velocità | | Motore | Technic Move (trazione) |
| 2 | Volante: Angolo di sterzata | | Servo | Technic Move (sterzo) |
| 3 | BTN1 | Alterna | Luce | Technic Move (luci) |
| 4 | BTN2 | | Boost | Technic Move |

Senza leva del cambio nella dashboard, l'auto va in retromarcia quando tieni premuto il pedale del freno da ferma.

## Provalo nel browser {#try-it-in-the-browser}

La demo di Collegamenti rapidi su [mocpilot.com](https://mocpilot.com) contiene un profilo di esempio con righe come queste; vedi [Editor web](/docs/Introducing/WebEditor).
