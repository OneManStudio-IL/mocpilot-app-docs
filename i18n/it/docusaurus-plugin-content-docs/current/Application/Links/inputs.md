---
id: Inputs
title: Ingressi
description: "Ingressi di Collegamenti rapidi: controlli della dashboard, il veicolo simulato, il gamepad, i pulsanti e i sensori degli hub."
---

import Screenshot from '@site/src/components/Screenshot';

# Ingressi {#inputs}

Ogni riga inizia con un ingresso. La scheda **Ingressi** della palette elenca:

- un blocco per ogni **controllo della dashboard**; i controlli con più canali (assi del joystick e del pad direzionale, volante, pedali, leva del cambio, freno a mano, frecce) hanno un blocco per canale;
- i blocchi **Veicolo**, quando la dashboard ha pedali, una leva del cambio o un freno a mano;
- il blocco **Gamepad**, quando i blocchi del gamepad sono attivi;
- un blocco **Hub** per ogni hub del profilo (tranne Mould King, che non ha pulsanti né sensori).

Se la scheda è vuota, mostra «Aggiungi controller nella dashboard o hub in I miei hub: compariranno qui».

<Screenshot name="links-palette-inputs" alt="La scheda Ingressi della palette di Collegamenti rapidi" width={900} />

Tutte le impostazioni e i valori di ciascun ingresso sono elencati nel riferimento [Blocchi di ingresso](/docs/Application/Links/Blocks/InputBlocks).

## Controlli della dashboard {#dashboard-controls}

Un blocco [Controller](/docs/Application/Links/Blocks/InputBlocks#src-controller) prende un controllo della dashboard in base al suo nome (**JOY1**, **SLDR1**, **BTN2**…) e, se il controllo ne ha più di uno, il **Canale** che ti serve:

| Controllo | Che cosa riceve la riga |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **Asse X** o **Asse Y**, −1…1 |
| [Cursore](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [manipolatore del treno](/docs/Application/Links/Blocks/InputBlocks#controller-train), [manopola](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | la sua posizione |
| [Volante](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Angolo di sterzata** −1…1 o **Clacson** |
| [Pedali](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Pedale dell'acceleratore** o **Pedale del freno**, 0…1 |
| [Leva del cambio](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Marcia** o **Direzione (R − / avanti +)** |
| [Freno a mano](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Freno a mano tirato** (acceso/spento) o **Forza del freno a mano** |
| [Frecce](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Frecce (sinistra − / destra +)**, **Freccia sinistra**, **Freccia destra** o **Luce** |
| [Riduttore](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase) | **Trazione integrale**, **Ridotte**, **Bloccaggio del differenziale anteriore**, **Bloccaggio del differenziale centrale** o **Bloccaggio del differenziale posteriore** (acceso/spento) |
| [Pad direzionale](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Su / giù** o **Sinistra / destra**: −1, 0 o +1 |
| [Pulsante](/docs/Application/Links/Blocks/InputBlocks#controller-button) | acceso finché è premuto |
| [Interruttore](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | acceso / spento |
| [Interruttore a passi](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | il passo attuale |

Quando aggiungi, rinomini o modifichi un controllo nella dashboard, la palette e le righe si aggiornano automaticamente. Se imposti un joystick su **Solo orizzontale**, le righe che usano il suo asse Y segnalano «… non si muove su questo asse».

## Guidare come un'auto vera {#drive-like-a-real-car}

Volante, pedali, leva del cambio e freno a mano forniscono le loro posizioni grezze: una riga con il pedale fa girare il motore esattamente quanto è premuto il pedale. Per un modello che si comporta come un'auto (accelera con inerzia, procede per inerzia, frena e va in retromarcia in R), usa invece l'ingresso [Veicolo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Legge insieme pedali, leva del cambio e freno a mano e fornisce **Velocità**, **Regime motore (giri/min)**, **In frenata** o **Con il freno a mano** del veicolo:

- *Veicolo (Velocità)* → *Motore* → motori di trazione;
- *Volante (Angolo di sterzata)* → *Servo* → sterzo;
- *Veicolo (In frenata)* → *Luce* → luci dei freni;
- *Frecce (Freccia sinistra)* → *Luce* → lampeggiatore sinistro.

## Gamepad {#gamepad}

Un solo blocco [Gamepad](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) copre l'intero controller; scegli una levetta, un grilletto o un pulsante in **Ingresso**. Prima attiva **Abilita blocchi del gamepad** nella [pagina Gamepad](/docs/Application/Dashboard/Gamepad). Le etichette seguono **Layout dei pulsanti del gamepad** (Xbox o PlayStation).

## Pulsanti e sensori degli hub {#hub-buttons-and-sensors}

Un ingresso [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) legge il pulsante di un hub o uno dei suoi sensori: batteria, inclinazione, accelerazione, velocità e posizione dei motori, sensori di distanza e di colore sulle porte e altro ancora. L'elenco mostra solo ciò che quell'hub è in grado di fornire. Per inclinazione e accelerazione, imposta **Orientamento dell'hub** in base a come è posizionato l'hub nel modello.

Il valore viaggia lungo la riga scalato su −1…1. Un **Monitor** testuale subito dopo un sensore mostra il valore reale con la sua unità, ad esempio «7,85 V» o «−12°».

Usi tipici:

- *Batteria* → *Indicatore* (Livello della batteria);
- *Sensore di distanza* → *Soglia* (Sotto, 20 %) → *Motore a tempo*: arretra quando qualcosa si avvicina;
- *Pulsante 1* (telecomando Powered Up) → *Motore*: guida con il telecomando fisico.
