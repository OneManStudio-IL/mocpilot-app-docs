---
id: PlayMode
title: Guidare un modello (Avvia)
description: "Avviare un profilo, guidare il modello, fermarlo, e cosa succede quando si ferma o una connessione cade."
---

import Screenshot from '@site/src/components/Screenshot';

# Guidare un modello (Avvia) {#driving-a-model-run}

Un profilo ha due modalità:

- **Modifica**: cambi gli hub, la dashboard e il programma.
- **Avvia**: il programma è in esecuzione e i controlli della dashboard guidano il modello.

## Avviare e fermare {#start-and-stop}

Premi **Avvia** (▶) all'estremità destra della barra superiore dell'editor; su smartphone o tablet ce l'ha anche la dashboard. Su un computer, **Avvia** è il pulsante arancione nell'editor (anche **Programma → Avvia**, ⌘R / Ctrl+R). Premi **Ferma** (■) per tornare alla modifica (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Dashboard mentre il programma è in esecuzione" width={900} />

Mentre il programma è in esecuzione:

- i punti della griglia della dashboard sono nascosti, così come i suoi pulsanti di modifica (su un computer sono disattivati);
- i controlli rispondono al tocco e al gamepad;
- monitor e indicatori mostrano valori in tempo reale;
- nei Collegamenti rapidi, l'editor mostra i valori in tempo reale tra i blocchi di ogni riga e le righe non si possono modificare;
- nei Blocchi logici, il programma resta modificabile, così puoi regolarlo dal vivo.

## Su uno smartphone o un tablet {#on-a-phone-or-tablet}

Aprendo un profilo, lo smartphone passa in orizzontale a schermo intero, così la dashboard ha a disposizione tutto lo schermo. Attiva **Mantieni lo schermo acceso** nelle Impostazioni, così lo schermo non si spegne mentre guidi. Vedi [Impostazioni](/docs/Application/Account/Settings).

## Prima di premere Avvia {#before-you-press-run}

- Accendi gli hub e controlla in **I miei hub** che siano collegati (il numero sul pulsante **I miei hub**, **Hub** su un computer, mostra quanti lo sono).
- Nei Collegamenti rapidi, controlla il pulsante **Problemi**: un «!» rosso significa che alcune righe non possono essere eseguite. Vedi [Esecuzione e risoluzione dei problemi](/docs/Application/Links/Problems).
- Per la prima prova, metti il modello su un supporto o tienilo lontano dal bordo del tavolo.

## Quando il programma si ferma {#when-the-program-stops}

- I **Collegamenti rapidi** fermano tutti i motori usati dalle righe e azzerano le uscite (matrice LED cancellata, colori delle porte e luci dei sensori spenti).
- I **Blocchi logici** fermano le porte degli hub se **Arresta le porte dell'hub quando il programma si ferma** è attivo nelle Impostazioni dell'editor.
- Se un hub si disconnette mentre il programma è in esecuzione, i suoi motori si fermano. Nei Collegamenti rapidi, un ingresso dell'hub «Connesso» può mostrarlo sulla dashboard.
- Con il controllo remoto, se la connessione tra il telecomando e il dispositivo con gli hub si interrompe per circa 4 secondi, il dispositivo con gli hub ferma il profilo e tutti i motori.

## Guidare da un altro dispositivo {#drive-from-another-device}

Con [MocPilot Pro](/docs/Application/Account/Pro) puoi eseguire il profilo su un dispositivo (il dispositivo con gli hub, che collega gli hub) e controllarlo da un altro dispositivo o dall'editor web. Vedi [Controllo remoto](/docs/Application/Profiles/RemoteControl).
