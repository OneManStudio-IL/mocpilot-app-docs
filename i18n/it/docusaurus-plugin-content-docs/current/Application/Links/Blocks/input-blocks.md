---
id: InputBlocks
title: Blocchi di ingresso
description: "Riferimento di tutti gli ingressi di Collegamenti rapidi: controlli della dashboard e i loro canali, il veicolo, il gamepad, i pulsanti e i sensori degli hub."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocchi di ingresso {#input-blocks}

Ogni riga inizia con un ingresso. La scheda **Ingressi** della palette mostra i blocchi che il tuo profilo può usare in quel momento: un blocco per ogni controllo della dashboard (uno per canale per i controlli con più canali), i blocchi **Veicolo**, il blocco **Gamepad** e un blocco **Hub** per ogni hub. Come usarli: [Ingressi](/docs/Application/Links/Inputs).

Ogni ingresso invia lungo la riga uno di due segnali:

- **valore**: un numero da −1 a 1 (0…1 per i controlli senza lato negativo);
- **acceso/spento**: 1 o 0.

I blocchi di elaborazione e le operazioni accettano solo i segnali con cui sanno lavorare; vedi [Blocchi di elaborazione](/docs/Application/Links/Blocks/ProcessingBlocks).

## Controller {#src-controller}

Un controllo della dashboard, indicato con il suo nome (**JOY1**, **SLDR1**, **BTN2**…).

- **Controller**: uno qualsiasi dei controlli della dashboard elencati qui sotto. I monitor sono uscite, non ingressi.
- **Canale**: che cosa fornisce il controllo, per i controlli con più canali. La palette offre un blocco per canale.

Volante, pedali, leva del cambio, freno a mano, frecce, riduttore e manipolatore del treno sono descritti in [Controlli speciali](/docs/Application/Dashboard/SpecialControls).

Se il controllo viene rimosso dalla dashboard, la riga segnala «Scegli un controller della dashboard». Se il suo canale non esiste più, segnala «Scegli cosa fornisce …» (per un joystick: «… non si muove su questo asse»).

### Joystick {#controller-joystick}

- **Canale**: **Asse X** o **Asse Y**. Un joystick impostato su **Solo orizzontale (X)** o **Solo verticale (Y)** offre solo quell'asse.
- Fornisce: valore −1…1, 0 al centro.

### Cursore, cursore verticale {#controller-slider}

- Nessun canale.
- Fornisce: valore 0…1, oppure −1…1 quando **Valori negativi** è attivo.

### Manipolatore del treno {#controller-train}

Il manipolatore del treno (controllo speciale) funziona come un cursore in Collegamenti rapidi.

- Nessun canale.
- Fornisce: valore −1…1: la posizione della leva come frazione di tutte le tacche, negativa quando l'invertitore è in retromarcia, 0 in folle.

### Manopola {#controller-knob}

La manopola dei temi a pagamento funziona come un cursore in Collegamenti rapidi.

- Nessun canale.
- Fornisce: valore 0…1, oppure −1…1 quando la manopola ha lo zero al centro.

### Volante {#controller-wheel}

- **Canale**: **Angolo di sterzata** (predefinito) o **Clacson**.
- Angolo di sterzata fornisce: valore −1…1, 0 con le ruote dritte.
- Clacson fornisce: valore 1 finché l'area del clacson è premuta, altrimenti 0.

### Pedali {#controller-pedals}

- **Canale**: **Pedale dell'acceleratore** (predefinito) o **Pedale del freno**.
- Fornisce: valore 0…1, quanto è premuto il pedale.
- I pedali forniscono la posizione grezza del pedale. Per un'auto che accelera, rallenta e va in retromarcia da sola, usa l'ingresso [Veicolo](#src-vehicle).

### Leva del cambio {#controller-gear}

La leva del cambio manuale e quella del cambio automatico (controllo speciale).

- **Canale**: **Marcia** (predefinito) o **Direzione (R − / avanti +)**.
- Marcia, cambio manuale: la marcia inserita divisa per il numero di marce avanti: marcia più alta 1, folle 0, retromarcia negativa. Con 4 marce, la 2ª marcia dà 0,5.
- Marcia, cambio automatico: come Direzione.
- Direzione fornisce: −1 in R, 0 in N (e P), +1 in qualsiasi marcia avanti o in D.

### Freno a mano {#controller-handbrake}

- **Canale**: **Freno a mano tirato** (predefinito) o **Forza del freno a mano**.
- Freno a mano tirato fornisce: acceso/spento, acceso finché la leva è bloccata.
- Forza del freno a mano fornisce: valore 0…1, quanto è tirata la leva.

### Frecce {#controller-turnsignals}

La levetta delle frecce (controllo speciale).

- **Canale**: **Frecce (sinistra − / destra +)** (predefinito), **Freccia sinistra**, **Freccia destra** o **Luce**.
- Frecce fornisce: valore −1 (sinistra), 0 (spente) o +1 (destra).
- Freccia sinistra e Freccia destra forniscono: valore 1 finché quella freccia è attiva (lampeggia insieme alla spia quando il lampeggio del controllo è attivo), altrimenti 0.
- Luce fornisce: valore 1 finché la luce è accesa, altrimenti 0.

### Riduttore {#controller-transfercase}

Il [riduttore](/docs/Application/Dashboard/SpecialControls#transfer-case) (controllo speciale).

- **Canale**: **Trazione integrale** (predefinito), **Ridotte**, **Bloccaggio del differenziale anteriore**, **Bloccaggio del differenziale centrale** o **Bloccaggio del differenziale posteriore**.
- Trazione integrale fornisce: acceso/spento, acceso in 4H e 4L.
- Ridotte fornisce: acceso/spento, acceso in 4L.
- Ogni bloccaggio del differenziale fornisce: acceso/spento, acceso finché quel bloccaggio è inserito.
- La posizione vera e propria (2H, 4H, N, 4L) arriva al simulatore tramite l'impostazione **Riduttore** dell'ingresso [Veicolo](#src-vehicle).

### Pad direzionale {#controller-dpad}

- **Canale**: **Su / giù** o **Sinistra / destra**.
- Fornisce: valore +1 (su o destra), −1 (giù o sinistra) o 0.

### Pulsante {#controller-button}

- Nessun canale.
- Fornisce: acceso/spento, acceso finché è premuto.

### Interruttore {#controller-switch}

- Nessun canale.
- Fornisce: acceso/spento.

### Interruttore a passi {#controller-stepper}

- Nessun canale.
- Fornisce: valore: il passo attuale diviso per **Conteggio dei passi**, quindi l'ultimo passo vale 1 (−1 per l'ultimo passo negativo).

## Veicolo {#src-vehicle}

Un'auto simulata guidata da pedali, leva del cambio, freno a mano e riduttore della dashboard: accelera, frena, procede per inerzia e va in retromarcia come un veicolo vero, e la riga riceve la sua velocità o il regime del motore. La palette mostra i blocchi Veicolo quando la dashboard ha pedali, una leva del cambio o un freno a mano: un blocco per ogni uscita, già collegato al primo controllo di ciascun tipo.

- **Pedali**: i pedali della dashboard che guidano il veicolo (obbligatori).
- **Leva del cambio**: **nessuno** oppure una leva del cambio della dashboard. Senza leva, tenendo premuto il pedale del freno da fermo il veicolo va all'indietro.
- **Freno a mano**: **nessuno** oppure un freno a mano della dashboard.
- **Riduttore**: **nessuno** oppure un riduttore della dashboard. In 2H e 4H il veicolo si guida come senza riduttore, in N non avanza (procede per inerzia), in 4L la sua velocità è limitata al 40 %.
- **Tipo di veicolo**: **Auto** (predefinito), **Fuoristrada**, **Auto sportiva** o **Camion**. I tipi differiscono per inerzia e velocità in retromarcia; il camion ha anche un freno ad aria.
- **Uscita**:
  - **Velocità** (predefinita): valore −1…1, negativo in retromarcia;
  - **Regime motore (giri/min)**: valore 0…1;
  - **In frenata**: acceso/spento, acceso mentre il veicolo frena;
  - **Con il freno a mano**: acceso/spento.

Problemi: «Scegli i pedali del veicolo», «… non è nella dashboard».

<Screenshot name="links-vehicle-settings" alt="Impostazioni di un blocco di ingresso Veicolo" width={900} />

## Gamepad {#src-gamepad}

Il controller di gioco collegato al tuo dispositivo. Il blocco è nella palette solo finché **Abilita blocchi del gamepad** è attivo (pagina **Gamepad** nella barra superiore); altrimenti la riga segnala «Attiva i blocchi del gamepad nella pagina Gamepad (barra superiore)».

- **Ingresso** (predefinito **Stick sinistro Y**). Le etichette seguono **Layout dei pulsanti del gamepad** (Xbox / PlayStation):
  - **Stick sinistro Y**, **Stick sinistro X**, **Stick destro Y**, **Stick destro X**: valore −1…1;
  - **RT** / **R2**, **LT** / **L2** (grilletti): valore;
  - **A**, **B**, **X**, **Y** / **Croce**, **Cerchio**, **Quadrato**, **Triangolo**: acceso/spento;
  - **LB** / **L1**, **RB** / **R1** (dorsali): acceso/spento;
  - **Su**, **Giù**, **Sinistra**, **Destra** (pad direzionale): acceso/spento.

## Hub {#src-hub}

Il pulsante di un hub o un sensore: sull'hub stesso o su una delle sue porte. C'è un ingresso Hub per ogni hub del profilo, tranne gli hub Mould King, che ricevono solo comandi.

- **Hub**: un hub del profilo.
- **Pulsante o sensore**: solo ciò che questo hub è in grado di fornire (elenco qui sotto).
- **Porta**: per i sensori su una porta (valori dei motori, sensori sulle porte).
- **Orientamento dell'hub**: per inclinazione e accelerazione sugli hub che lo consentono: **Mantieni** (predefinito) oppure il modo in cui l'hub è montato nel modello.

Il valore di un sensore viaggia lungo la riga diviso per il suo fondo scala e limitato a −1…1: una batteria al 50 % dà 0,5. Un **Monitor** testuale subito dopo il sensore mostra il valore reale con la sua unità.

| Pulsante o sensore | Segnale | Unità, fondo scala | Hub |
|---|---|---|---|
| **Pulsante 1, 2…** | acceso/spento | | hub con un pulsante; i pulsanti del telecomando LEGO® Powered Up |
| **Batteria** | valore | %, 100 | hub che la forniscono |
| **Tensione della batteria** | valore | V, 12 | hub che la forniscono |
| **Tensione di uscita** | valore | V, 12 | BuWizz 2.0 |
| **Temperatura** | valore | °C, 100 | hub che la forniscono |
| **Inclinazione: beccheggio** | valore | °, 90 | hub con sensore di inclinazione |
| **Inclinazione: rollio** | valore | °, 180 | hub con sensore di inclinazione |
| **Inclinazione: imbardata** | valore | °, 180 | hub con asse di imbardata |
| **Accelerazione X / Y / Z** | valore | m/s², 19,6 | hub con accelerometro |
| **Velocità del motore** | valore | %, 100 | porta; tutti gli hub con porte |
| **Angolo del motore** | valore | °, 360 (relativo) | porta; motori con encoder; non SBrick, BuWizz 2.0, WeDo 2.0 |
| **Posizione del motore** | valore | °, 180 (assoluta) | porta; motori angolari |
| **Potenza del motore** | valore | %, 100 | porta; Robot Inventor |
| **Corrente del motore** | valore | A, 3 | porta; BuWizz 2.0, BuWizz 3.0 Pro |
| **Sensore di distanza** | valore | 250 | porta; non SBrick o BuWizz |
| **Sensore di colore** | valore | numero del colore, 10 | porta; non SBrick, BuWizz o WeDo 2.0 |
| **Luce riflessa**, **Luce ambientale** | valore | %, 100 | porta; non SBrick, BuWizz o WeDo 2.0 |
| **Sensore di inclinazione: beccheggio / rollio** | valore | °, 45 | porta; sensore di inclinazione WeDo 2.0 / BOOST; non SBrick o BuWizz |
| **Modalità di potenza** | valore | 1–4, 4 | BuWizz 2.0 |
| **Connesso** | acceso/spento | | tutti gli hub |

Quando l'hub è collegato, MOCPilot controlla anche il dispositivo sulla porta: «Porta A: nessun motore», «Porta A: il motore non ha encoder», «Porta A: nessun sensore di distanza» e così via.
