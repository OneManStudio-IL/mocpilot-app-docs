---
id: Operations
title: Operazioni e uscite
description: "Operazioni di Collegamenti rapidi (Motore, Servo, Luce e altre) e uscite (Hub, Indicatore, LED dell'hub, Matrice LED, Calibra servo)."
---

import Screenshot from '@site/src/components/Screenshot';

# Operazioni e uscite {#operations-and-outputs}

La scheda **Uscite** della palette contiene operazioni e uscite.

- Un'**operazione** dice *che cosa* fare (far girare un motore, sterzare, far lampeggiare una luce). È sempre seguita da un'uscita **Hub**, che dice *dove*: quale hub e quali porte.
- Un'**uscita diretta** (Indicatore, LED dell'hub, Matrice LED, Calibra servo) chiude da sola la riga, senza un'operazione.

Le operazioni comuni (Motore, Servo, Motore a tempo, Luce) sono sempre presenti. Le operazioni specifiche per un hub compaiono solo se un hub del profilo le supporta. Tutte le impostazioni con i loro valori e il valore predefinito: [Blocchi di operazione e di uscita](/docs/Application/Links/Blocks/OutputBlocks).

## Motori e luci {#motors-and-lights}

| Operazione | Che cosa fa | Uso tipico |
|---|---|---|
| [Motore](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | fa girare il motore al valore dell'ingresso; 0 lo ferma | trazione, verricelli |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | porta un motore con encoder in una posizione che segue l'ingresso | sterzo |
| [Motore a tempo](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | fa girare il motore per un tempo stabilito a ogni pressione | porte, cassoni ribaltabili |
| [Ruota di gradi](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | ruota il motore di un angolo stabilito a ogni pressione | posizionamento a scatti, piattaforme girevoli |
| [Vai alla posizione](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | porta un motore angolare in una posizione quando è acceso e in un'altra quando è spento | sportelli, selettori di marcia |
| [Luce](/docs/Application/Links/Blocks/OutputBlocks#op-light) | accende le luci LEGO®, fisse o lampeggianti | fari, lampeggianti, frecce |
| [Colore della porta](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | colora i LED delle porte di un BuWizz 3.0 Pro | colori di stato |
| [Luci del sensore](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | accende gli «occhi» del sensore di distanza Technic (Robot Inventor) | volti di robot |

### Sterzare con Servo {#steering-with-servo}

Servo richiede un motore con encoder e un meccanismo di sterzo che centri a mano oppure dotato di finecorsa.

- **Manuale**: ruota l'asse al centro e tocca **Imposta come zero**; regola con precisione con **◀ 5°** / **5° ▶**. Poi scegli l'**Angolo** e, se le ruote tirano ancora da un lato, il **Centro**.
- **Auto**: a ogni avvio il motore ruota fino a entrambi i finecorsa, il punto centrale diventa lo zero e la corsa diventa l'angolo. **Calibra ora** esegue subito la calibrazione. Messaggi: «Calibrazione: il motore ruota fino a entrambi i finecorsa…», «Calibrato: il servo ruota di ±…°, il centro è lo zero», «Calibrazione non riuscita: controlla l'hub, il motore e che l'asse abbia dei finecorsa».

Su un **Technic Move Hub** è l'hub a sterzare e a calibrare la propria cremagliera; vale solo la modalità di calibrazione.

<Screenshot name="links-servo-settings" alt="Impostazioni di un blocco Servo" width={900} />

## Operazioni per l'intero hub {#operations-for-the-whole-hub}

Queste operazioni controllano l'hub nel suo complesso, quindi il blocco Hub che le segue non ha porte.

| Operazione | Hub | Che cosa fa |
|---|---|---|
| [Freno](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | frena finché l'ingresso è acceso |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | modalità di potenza boost quando è acceso, normale quando è spento |
| [Impulso di potenza](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | un impulso di potenza a ogni pressione (solo con la configurazione Batmobile™ Tumbler) |
| [Modalità di potenza](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | cambia la modalità di potenza: Lenta, Normale, Veloce, Ludicrous |
| [Canale](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | cambia il canale di controllo: A, B, C |

## Uscite {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): l'hub e le sue porte. Vedi [Blocco Hub e porte](/docs/Application/Links/HubsAndPorts).
- [Indicatore](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): mostra il valore su un monitor della dashboard (monitor di testo, Livello della batteria, Velocimetro, Monitor inclinabile). Subito dopo un sensore dell'hub, un monitor di testo mostra il valore reale con la sua unità. L'indicatore mostra il valore così com'è, quindi la riga non ha un'operazione. Vedi [Indicatori e monitor](/docs/Application/Dashboard/Indicators).
- [LED dell'hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led): la luce colorata di un hub LEGO®, di un colore finché l'ingresso è acceso e di un altro finché è spento.
- [Matrice LED](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): la matrice di luci dell'hub Robot Inventor: una barra di livello, un numero o un'immagine.
- [Calibra servo](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): ricalibra tutti i Servo in modalità **Auto**. Assegnalo a un pulsante della dashboard: *BTN3* → *Calibra servo*.

## Quando il programma si ferma {#when-the-program-stops}

I motori si fermano, la matrice LED viene cancellata e i colori delle porte e le luci del sensore si spengono.
