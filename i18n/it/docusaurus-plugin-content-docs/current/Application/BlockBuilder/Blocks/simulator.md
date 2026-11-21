---
id: Simulator
title: Simulatore
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulatore {#simulator}

Il **Simulatore** trasforma pedali, cambio e freno a mano della dashboard in un'auto che si comporta come una vera: accelera con inerzia, procede per inerzia, frena, va in retromarcia e cambia marcia. I controlli forniscono solo i loro valori grezzi; il programma costruisce l'auto a partire da essi e invia la sua velocità ai motori.

La categoria compare finché la dashboard ha pedali, un cambio o un freno a mano. Vedi [Controller su schermo](/docs/Application/BlockBuilder/Blocks/DashboardControllers) per i blocchi che leggono questi controlli.

## Veicoli {#vehicles}

Premi **Crea veicolo** in cima alla categoria e dagli un nome (ad esempio «Veicolo 1»). I blocchi compaiono non appena il programma ha almeno un veicolo, e in ogni blocco scegli con quale veicolo funziona. **Rinomina veicolo** ed **Elimina veicolo** servono a gestirli; non puoi eliminare un veicolo finché i suoi blocchi sono nel programma, e gli ultimi pedali, cambio o freno a mano non si possono rimuovere dalla dashboard finché vengono usati blocchi del Simulatore.

<Screenshot name="blocks-simulator" alt="Categoria Simulatore con un blocco guida agganciato all'evento dei pedali" width={900} />

Un'auto tipica: aggancia **guida** all'evento dei pedali, collega i pedali ad `acceleratore` e `freno` e, al suo interno, avvia il motore di trazione alla `velocità` del veicolo:

```text
quando i pedali PDL1 qualsiasi è spostato
    Veicolo 1  guida  acceleratore (pedali PDL1 accelerazione)  freno (pedali PDL1 freno)
        avvia motore a (velocità di Veicolo 1) % velocità  (Hub 1, porta A)
```

Non serve un ciclo `ripetere sempre`: **guida** continua a funzionare da solo finché l'auto non si ferma.

## Blocchi {#blocks}

### `… guida acceleratore … freno … marcia … di … freno a mano … tirato …` (Principiante) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Il cuore del simulatore. Un blocco C che guida il veicolo: ogni 0,1 s legge i suoi ingressi, fa avanzare l'auto di un passo ed esegue i blocchi al suo interno (mettici i blocchi dei motori). Termina quando l'auto è ferma e non c'è nulla di premuto; i blocchi interni vengono eseguiti un'ultima volta, così il motore riceve il valore finale.

- `acceleratore` e `freno`: quanto è premuto ciascun pedale, da 0 a 100.
- `marcia`: la marcia selezionata: `-1` retromarcia, `0` folle, `1` e oltre marce avanti. Se in questo spazio c'è un controllo del cambio automatico, viene usata invece la posizione del suo selettore (P, R, N, D) e in D l'auto sceglie la marcia da sola.
- `di`: quante marce ha il cambio (6 per impostazione predefinita).
- `freno a mano`: quanto è tirato il freno a mano, da 0 a 100; `tirato`: se è bloccato.
- Un ingresso conta solo se vi è inserito un blocco; un semplice numero in uno spazio vuoto viene ignorato (tranne `di`).
- Un solo blocco **guida** alla volta può guidare un veicolo; un secondo blocco per lo stesso veicolo salta i propri blocchi interni.

### `imposta … tipo a …` (Principiante) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Regola il motore del veicolo per un tipo di veicolo: per quanto continua a rotolare (inerzia), la sua velocità massima in retromarcia e se ha un freno ad aria.

- Tipi: `auto`, `fuoristrada`, `auto sportiva`, `camion` (il camion ha un freno ad aria)

### `imposta … … a … %` (Avanzato) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Modifica un'impostazione del motore.

- `inerzia del motore`: più è alta, più a lungo l'auto rotola senza acceleratore (0 significa nessuna inerzia).
- `velocità in retromarcia`: la velocità massima in retromarcia.

### `imposta … … a …` (Avanzato) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Attiva o disattiva un'opzione del veicolo.

- `retromarcia con il freno`: con i soli pedali, tenendo premuto il freno da fermo il veicolo va all'indietro.
- `le marce limitano la velocità`: ogni marcia ha una propria velocità massima.
- `il freno a mano tiene`: un freno a mano tirato tiene ferma l'auto.
- `freno ad aria`: il freno ad aria del camion (genera l'evento «rilascia aria»).
- `cambio automatico`: tratta l'ingresso `marcia` come un selettore automatico.

### `ripristina …` (Avanzato) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Ferma il veicolo dove si trova e ne dimentica lo stato.

### `… di …` (Principiante) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Restituisce uno dei valori del veicolo.

- `velocità`: da −100 a 100 (negativa in retromarcia), pronta per lo spazio della velocità di un motore.
- `giri motore`: da 0 a 100, per un contagiri o il suono del motore.
- `marcia`: la marcia attuale (`-1` retromarcia, `0` folle, poi `1`, `2`…).

### `è … … ?` (Principiante) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Restituisce `true` quando il veicolo è nello stato selezionato.

- Stati: `in movimento`, `in frenata`, `con il freno a mano tirato`

### `quando … …` (Principiante) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Esegue il suo script quando succede qualcosa al veicolo.

- Eventi: `parte`, `si ferma`, `inizia a frenare`, `smette di frenare`, `frena forte`, `rilascia aria`, `cambia marcia`
- Uso tipico: riprodurre un suono, ad esempio il sibilo del freno ad aria su `rilascia aria` o uno stridio su `frena forte` (vedi [Suoni](/docs/Application/BlockBuilder/Blocks/Sounds)).
