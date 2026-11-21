---
id: OutputBlocks
title: Blocchi di operazione e di uscita
description: "Riferimento di tutte le operazioni e uscite di Collegamenti rapidi: Motore, Servo, Luce, operazioni per Technic Move, BuWizz e Mould King, Hub, Indicatore, LED dell'hub, Matrice LED, Calibra servo."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocchi di operazione e di uscita {#operation-and-output-blocks}

La scheda **Uscite** della palette contiene le operazioni e le uscite. Come usarle: [Operazioni e uscite](/docs/Application/Links/Operations).

- Un'**operazione** dice che cosa fare. Deve essere seguita da un'uscita [Hub](#hub-out), che dice dove.
- Un'**uscita diretta** ([Indicatore](#dash-indicator), [LED dell'hub](#hub-led), [Matrice LED](#hub-matrix), [Calibra servo](#cmd-calibrate)) chiude da sola la riga; la riga non deve avere un'operazione.

**Motore**, **Servo**, **Motore a tempo** e **Luce** sono sempre nella palette. Le altre operazioni compaiono solo se un hub del profilo è in grado di eseguirle.

Qui sotto «acceso» indica un segnale acceso/spento che è acceso, oppure un valore di almeno 0,5 (con qualsiasi segno).

## Operazioni per le porte {#operations-for-ports}

### Motore {#op-motor}

Fa girare il motore al valore dell'ingresso: più spingi, più va veloce; 0 lo ferma.

- Accetta: valore o acceso/spento (acceso = velocità massima).
- **All'arresto**: **Predefinito dell'hub** (predefinito), **Inerzia**, **Freno** o **Mantieni posizione**.
- **Accelerazione dell'hub**: **Predefinito dell'hub** (predefinito), **Veloce**, **Bilanciata**, **Graduale**, **Lenta** o **Molto lenta**: la rampa propria dell'hub. Per una rampa personalizzata, usa [Graduale](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Rilevamento del blocco**: **Predefinito dell'hub** (predefinito), **Attivo** o **Disattivo**.
- Hub: qualsiasi hub con porte. **All'arresto** e **Accelerazione dell'hub** richiedono un hub con controllo della posizione (non SBrick, BuWizz 2.0, WeDo 2.0 o Mould King); **Rilevamento del blocco** richiede Robot Inventor. Su un Technic Move Hub, Motore aziona la trazione dell'auto.

### Servo {#op-servo}

Sterza con un motore dotato di encoder: l'ingresso −1…1 porta il motore a *centro + valore × angolo*, e 0 lo riporta al centro.

- Accetta: valore o acceso/spento.
- **Calibrazione**: **Manuale** (predefinito) o **Auto**.
- **Angolo**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 giro, ±2 giri, ±3 giri o ±5 giri (predefinito ±90°). Solo in Manuale.
- **Centro**: −20°, −10°, −5°, 0°, +5°, +10° o +20° (predefinito 0°). Solo in Manuale.
- **Velocità di rotazione**: 25, 50, 75 o 100 % (predefinito 100 %).
- Manuale: lo zero è la posizione in cui si trovava il motore all'accensione, oppure quella impostata con **Imposta come zero** (prima regola con **◀ 5°** / **5° ▶**).
- Auto: a ogni avvio il motore ruota fino a entrambi i finecorsa; il punto centrale diventa lo zero e la corsa diventa l'angolo. **Calibra ora** esegue subito la calibrazione. Lo sterzo deve avere dei finecorsa.
- Hub e porte: un motore con encoder su un hub con controllo della posizione (non SBrick, BuWizz 2.0, WeDo 2.0 o Mould King). Su un Technic Move Hub, Servo ruota la cremagliera dello sterzo dell'hub, che l'hub calibra da solo.

<Screenshot name="links-servo-settings" alt="Impostazioni di un blocco Servo" width={900} />

### Motore a tempo {#op-timed}

Fa girare il motore per un tempo stabilito ogni volta che l'ingresso si accende. Velocità e verso dipendono dal valore dell'ingresso in quel momento.

- Accetta: valore o acceso/spento.
- **Tempo**: 0,5, 1, 2, 3, 5 o 10 s (predefinito 1 s).
- Hub: qualsiasi hub con porte; su un Technic Move Hub aziona la trazione dell'auto.

### Ruota di gradi {#op-degrees}

Ruota il motore di un angolo stabilito ogni volta che l'ingresso si accende. Un ingresso negativo lo fa ruotare nel verso opposto.

- Accetta: valore o acceso/spento.
- **Gradi**: 45°, 90°, 180°, 1 giro, 2 giri, 3 giri, 5 giri o 10 giri (predefinito 1 giro).
- **Velocità**: 25, 50, 75 o 100 % (predefinito 50 %).
- Hub e porte: un motore con encoder su un hub con controllo della posizione.

### Vai alla posizione {#op-goto}

Porta il motore in una posizione assoluta quando l'ingresso si accende e in un'altra quando si spegne. Sceglie il percorso più breve.

- Accetta: valore o acceso/spento.
- **Posizione se attivo**: 0°, 45°, 90°, 135°, 180°, 225°, 270° o 315° (predefinito 90°).
- **Posizione se disattivo**: **Resta fermo** o una delle stesse posizioni (predefinito 0°).
- **Velocità**: 25, 50, 75 o 100 % (predefinito 50 %).
- Hub e porte: un motore angolare (posizione assoluta) su un hub con controllo della posizione.

### Luce {#op-light}

Comanda le luci LEGO® su una porta.

- Accetta: valore o acceso/spento. Con un valore, la luminosità lo segue (−1 e 1 corrispondono entrambi alla luminosità massima).
- **Luminosità**: 25, 50, 75 o 100 % (predefinito 100 %).
- **Lampeggio: acceso**: **Nessun lampeggio** (predefinito), 0,25, 0,5, 1 o 2 s: per quanto tempo la luce resta accesa in ogni lampeggio.
- **Lampeggio: spento**: **Come acceso** (predefinito), 0,25, 0,5, 1 o 2 s: per quanto tempo resta spenta.
- Hub: qualsiasi hub con porte tranne WeDo 2.0. Su un Technic Move Hub, Luce accende e spegne le luci dell'auto.

### Colore della porta {#op-portcolor}

Imposta il colore dei LED delle porte di un BuWizz 3.0 Pro.

- Accetta: valore o acceso/spento.
- **Colore**: **Dall'elenco** (predefinito) o **RGB**.
- **Colore se attivo** (predefinito Rosso) e **Colore se disattivo** (predefinito Disattivo): Disattivo, Rosa, Viola, Blu, Azzurro, Verde chiaro, Verde, Giallo, Arancione, Rosso, Bianco.
- **Rosso**, **Verde**, **Blu** (RGB): 0, 32, 64, 128, 192 o 255 (predefinito 255, 0, 0).
- Hub e porte: BuWizz 3.0 Pro, porte 1–4. I LED si spengono quando il programma si ferma.

### Luci del sensore {#op-sensorlights}

Accende i quattro segmenti attorno agli «occhi» del sensore di distanza Technic finché l'ingresso è acceso.

- Accetta: valore o acceso/spento.
- **Luci**: **Tutte** (predefinito), **Sopra**, **Sotto**, **Sinistra**, **Destra** o **Diagonale**.
- **Luminosità**: 25, 50, 75 o 100 % (predefinito 100 %).
- Hub e porte: Robot Inventor, una porta con il sensore di distanza. Le luci si spengono quando il programma si ferma.

## Operazioni per l'intero hub {#operations-for-the-whole-hub}

Il blocco Hub che segue queste operazioni non prevede porte.

### Freno {#op-brake}

Frena l'auto finché l'ingresso è acceso.

- Accetta: valore o acceso/spento. Nessuna impostazione.
- Hub: Technic Move.

### Boost {#op-boost}

Porta l'hub nella modalità di potenza boost finché l'ingresso è acceso e lo riporta al normale quando si spegne.

- Accetta: valore o acceso/spento. Nessuna impostazione.
- Hub: Technic Move.

### Impulso di potenza {#op-pulse}

Invia un impulso di potenza ogni volta che l'ingresso si accende: i motori girano alla massima potenza per circa due secondi.

- Accetta: valore o acceso/spento. Nessuna impostazione.
- Hub: Technic Move con la configurazione **Batmobile™ Tumbler**; vedi [Configurazioni del Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Modalità di potenza {#op-powermode}

Imposta la modalità di potenza di un BuWizz 2.0 quando l'ingresso si accende e, se ne scegli una, quando si spegne.

- Accetta: valore o acceso/spento.
- **Modalità se attivo**: **Lenta**, **Normale** (predefinito), **Veloce** o **Ludicrous**.
- **Modalità se disattivo**: **Mantieni** (predefinito) o una delle modalità.
- Hub: BuWizz 2.0.

### Canale {#op-channel}

Cambia il canale di controllo di un hub Mould King quando l'ingresso si accende e, se ne scegli uno, quando si spegne.

- Accetta: valore o acceso/spento.
- **Canale se attivo**: **A** (predefinito), **B** o **C**.
- **Canale se disattivo**: **Mantieni** (predefinito), **A**, **B** o **C**.
- Hub: Mould King 4.0 e 6.0.

## Uscite {#outputs}

### Hub {#hub-out}

Dove avviene l'operazione: un hub e le sue porte. C'è un blocco Hub per ogni hub del profilo.

- **Hub**: un hub del profilo.
- **Porte**: una o più porte di quell'hub (A–D sulla maggior parte degli hub e su SBrick, A–F su Robot Inventor e Mould King 6.0, 1–4 su BuWizz 2.0, 1–4 più A e B su BuWizz 3.0 Pro). Una porta può appartenere a una sola riga.
- Accetta: un'operazione. I Technic Move Hub e le operazioni per l'intero hub non prevedono porte.
- Altre informazioni: [Blocco Hub e porte](/docs/Application/Links/HubsAndPorts).

### Indicatore {#dash-indicator}

Mostra il valore su un monitor della dashboard, così com'è.

- Accetta: valore o acceso/spento, senza un'operazione prima.
- **Indicatore della dashboard**: un **Monitor di testo** (Monitor), un **Monitor di valore** (Livello della batteria, Velocimetro) o un **Monitor di inclinazione** nella dashboard.
- **Asse**: **Inclinazione X** o **Inclinazione Y**, solo per un Monitor di inclinazione (una riga per asse).
- Un monitor di testo subito dopo un sensore dell'hub mostra il valore reale con la sua unità.

### LED dell'hub {#hub-led}

La spia di stato colorata dell'hub: di un colore finché l'ingresso è acceso, di un altro finché è spento.

- Accetta: valore o acceso/spento, senza un'operazione prima.
- **Hub**: un hub con LED colorato.
- **Colore**: **Dall'elenco** (predefinito) o **RGB**.
- **Colore se attivo** (predefinito Rosso) e **Colore se disattivo** (predefinito Disattivo): Disattivo, Rosa, Viola, Blu, Azzurro, Verde chiaro, Verde, Giallo, Arancione, Rosso, Bianco.
- **Rosso**, **Verde**, **Blu** (RGB): 0, 32, 64, 128, 192 o 255 (predefinito 255, 0, 0).
- Hub: hub LEGO® (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, il telecomando Powered Up); non BuWizz, SBrick o Mould King.

### Matrice LED {#hub-matrix}

La matrice di luci dell'hub.

- Accetta: valore o acceso/spento, senza un'operazione prima.
- **Hub**: un hub con matrice LED.
- **Mostra**: **Barra di livello** (predefinito; le righe si accendono dal basso in base al valore), **Numero** (il valore da −100 a 100) o **Immagine se attivo**.
- **Immagine**: **Cuore** (predefinito), **Sorriso**, **Triste**, **Spunta**, **Croce**, **Freccia su**, **Freccia giù**, **Freccia sinistra**, **Freccia destra** o **Tutto acceso**.
- **Orientamento**: **Mantieni** (predefinito), **Dritto**, **Capovolto**, **Sinistra** o **Destra**.
- Hub: Robot Inventor. La matrice viene cancellata quando il programma si ferma.

### Calibra servo {#cmd-calibrate}

Ogni volta che l'ingresso si accende, tutti i [Servo](#op-servo) del programma in modalità **Auto** si ricalibrano.

- Accetta: valore o acceso/spento, senza un'operazione prima. Nessuna impostazione.
- Il programma deve avere una riga Servo pronta in modalità Auto, altrimenti la riga segnala «Nessun servo in modalità di calibrazione Auto in questo programma».
