---
id: Gamepad
title: Gamepad
description: "Guida il tuo modello con un gamepad in stile Xbox o PlayStation."
---

import Screenshot from '@site/src/components/Screenshot';

# Gamepad {#gamepad}

Un gamepad fisico è spesso più piacevole di un touch screen: levette, grilletti e pulsanti veri. MOCPilot funziona con i gamepad Bluetooth e USB supportati dal sistema del dispositivo (controller in stile Xbox e PlayStation su iPhone, iPad, Android, Mac e Windows).

Il gamepad funziona insieme alla dashboard; puoi usarli entrambi contemporaneamente.

## Collegare un gamepad {#connect-a-gamepad}

1. Associa il gamepad allo smartphone, al tablet o al computer nelle impostazioni Bluetooth del sistema (o collegalo via USB).
2. Apri un profilo e tocca **Gamepad** nell'editor.
3. L'intestazione della pagina mostra **Gamepad: (nome)**. «Gamepad non connesso» significa che il sistema non lo vede ancora.

<Screenshot name="gamepad" alt="Pagina Gamepad" width={900} />

## Pagina Gamepad {#gamepad-page}

- **Abilita blocchi del gamepad**: attiva gli ingressi del gamepad per questo profilo. Senza questa opzione, le righe dei Collegamenti rapidi con l'ingresso Gamepad segnalano «Attiva i blocchi del gamepad nella pagina Gamepad (barra superiore)» e i Blocchi logici non mostrano la categoria Gamepad.
- **Layout dei pulsanti del gamepad**: **Xbox** (A, B, X, Y, LB, RB, LT, RT) o **Sony PS** (Croce, Cerchio, Quadrato, Triangolo, L1, R1, L2, R2). Gli editor etichettano i pulsanti in base a questa scelta.
- **Intervallo dei valori del gamepad** (Blocchi logici): le levette forniscono **-1..1** o **-100..100**.
- **Seleziona gamepad**: quando sono collegati più gamepad.
- **Testa gamepad** → **Test**: un tester in tempo reale che mostra pulsanti, grilletti, levette e croce direzionale, così puoi controllare tutto prima dell'uso.

Le impostazioni vengono salvate nel profilo.

## Usare il gamepad nei Collegamenti rapidi {#use-the-gamepad-in-quick-links}

Trascina l'ingresso **Gamepad** in una riga e scegli il suo **Ingresso**:

- levette: Stick sinistro Y, Stick sinistro X, Stick destro Y, Stick destro X;
- grilletti: RT / LT (R2 / L2);
- pulsanti frontali: A, B, X, Y (Croce, Cerchio, Quadrato, Triangolo);
- dorsali: LB / RB (L1 / R1);
- croce direzionale: Su, Giù, Sinistra, Destra.

Esempio: *Gamepad* (Stick sinistro Y) → *Graduale* → *Motore* → *Hub* (porta A). Vedi [Ingressi](/docs/Application/Links/Inputs#gamepad).

## Usare il gamepad nei Blocchi logici {#use-the-gamepad-in-logic-blocks}

La categoria **Gamepad** contiene blocchi evento (*quando il pulsante del gamepad è …*, *quando la croce direzionale del gamepad è …*, *quando la levetta del gamepad è …*) e blocchi valore (pulsante, croce direzionale, levetta, pressione del grilletto). Vedi [Blocchi del gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profili da pubblicare {#profiles-for-publishing}

Un profilo può essere pubblicato nel catalogo anche con il solo gamepad e senza controlli sulla dashboard: il requisito è «un controller della dashboard o il gamepad».
