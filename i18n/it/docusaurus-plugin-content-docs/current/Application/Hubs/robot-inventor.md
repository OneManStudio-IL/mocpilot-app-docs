---
id: RobotInventorHub
title: Hub MINDSTORMS Robot Inventor
description: "Collega l'hub LEGO MINDSTORMS Robot Inventor (51515) o SPIKE Prime via Bluetooth o USB, usa i suoi blocchi e ripristina l'hub se smette di funzionare."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub MINDSTORMS Robot Inventor

L'hub del set LEGO® MINDSTORMS® Robot Inventor (51515) è il **LEGO® Technic™ Large Hub** (88016): sei porte A–F, una matrice di luci 5×5, un altoparlante, un giroscopio e un accelerometro. MOCPilot lo controlla con gli stessi blocchi dell'app Robot Inventor, più tutto ciò che aggiunge MOCPilot: la dashboard, il gamepad e gli altri hub del profilo.

L'**hub SPIKE™ Prime** (45601) è lo stesso hardware con il firmware LEGO® Education. MOCPilot lo supporta con il firmware **SPIKE Legacy** (beta); vedi [Firmware](#firmware).

## Cosa può fare {#features}

- **Blocchi logici**: tutti i blocchi dell'app Robot Inventor, vedi [Blocchi Robot Inventor](#blocks).
- **Collegamenti rapidi**: motori, sensori, la [matrice di luci](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) e le [luci del sensore di distanza](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Monitor dell'hub**: batteria, orientamento, inclinazione e dispositivi sulle porte, vedi [Monitor dell'hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Un programma a blocchi può essere eseguito in due modi: in **streaming**, in cui MOCPilot lo esegue e invia i comandi all'hub (tieni il dispositivo connesso), oppure con il **download**, in cui MOCPilot lo scrive in uno degli slot programma dell'hub e l'hub lo esegue da solo. Vedi [Eseguire il programma sull'hub](#download).

## Collegare l'hub {#connect}

Aggiungi l'hub come al solito ([Aggiungere e collegare un hub](/docs/Application/Hubs/ConnectingHubs)) e scegli **Lego® Large Hub** (o **LEGO® SPIKE™ Prime Hub**). Su un computer la pagina di connessione ha in alto un selettore **Bluetooth / USB**. MOCPilot ricorda la tua scelta per questo modello di hub.

### Via Bluetooth {#bluetooth}

L'hub usa il Bluetooth classico, non il Bluetooth Low Energy: funziona su Android, Mac e Windows, ma non su iPhone e iPad.

1. Accendi l'hub.
2. Associalo nelle impostazioni Bluetooth del dispositivo come un normale dispositivo Bluetooth (su Windows: **Impostazioni → Bluetooth e dispositivi → Aggiungi dispositivo**). Premi il pulsante Bluetooth dell'hub perché possa essere trovato.
3. In MOCPilot, tocca **Scansiona**.

### Con un cavo USB {#usb}

Su Windows e Mac puoi invece collegare l'hub con il suo cavo USB. Non serve installare alcun driver LEGO.

1. Collega l'hub al computer con un cavo USB e accendi l'hub.
2. Tocca **Connetti**.

Se MOCPilot dice **Nessun hub su USB**, controlla il cavo (alcuni cavi servono solo per la ricarica) e che l'hub sia acceso.

<Screenshot name="robot-inventor-connect" alt="Collegamento di un hub Robot Inventor: il selettore Bluetooth / USB" width={900} />

### Chiudi prima l'app LEGO {#close-lego-app}

L'hub accetta una sola connessione. Se l'app MINDSTORMS o SPIKE è aperta e occupa l'hub, MOCPilot dice **L'hub è occupato: un'altra app lo sta usando (LEGO MINDSTORMS o SPIKE). Chiudi quell'app e riprova.** Chiudi l'app LEGO e connettiti di nuovo.

## Blocchi Robot Inventor {#blocks}

Quando il profilo ha un hub Robot Inventor o SPIKE Prime, la palette dei Blocchi logici riceve i blocchi dell'app Robot Inventor. I blocchi che solo questo hub può eseguire hanno un'**icona dell'hub** bianca e nera.

| Categoria | Blocchi Robot Inventor |
|---|---|
| [Movimento](/docs/Application/BlockBuilder/Blocks/Movement) (nuova categoria) | motori di movimento, velocità, distanza per rotazione, movimento, sterzo, guida a carro armato, accelerazione, arresto, «il movimento è stato interrotto?» |
| [Motori](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | avvio a una potenza, «il motore è stato interrotto?», più la potenza del motore e il rilevamento del blocco |
| [Luce](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | immagine per alcuni secondi, animazioni con un editor di fotogrammi, luminosità dei pixel, più le luci del sensore di distanza |
| [Suoni](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | bip, suoni robot dell'hub, volume, effetti sonori, musica: note, tamburi, pause, strumento, tempo |
| [Sensori](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | Force Sensor, gesti, orientamento, imbardata / beccheggio / rollio, azzeramento dell'imbardata, velocità angolare, accelerazione, inclinazione, radio tra hub |
| [Eventi](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | quando l'hub viene scosso o toccato, è appoggiato su un lato, è inclinato, quando il Force Sensor viene premuto, quando arriva un segnale radio |

I blocchi di controllo, operatori, variabili, liste e I miei blocchi dell'app Robot Inventor sono gli stessi [blocchi di base](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) di MOCPilot. I blocchi già coperti dai blocchi generici degli hub (velocità e posizione del motore, sensori di colore e di distanza, matrice di luci, pulsante dell'hub, timer) si trovano nelle loro categorie abituali.

## Eseguire il programma sull'hub {#download}

Come l'app Robot Inventor, MOCPilot può scrivere un programma di Blocchi logici in uno dei 20 slot programma dell'hub (0–19). L'hub poi lo esegue senza l'app: puoi scollegare il telefono o il computer e riavviare il programma più tardi con i pulsanti dell'hub stesso.

### Il pulsante e la scheda dello slot {#slot-card}

Quando un hub Robot Inventor o SPIKE Prime è collegato a un profilo di Blocchi logici, nell'angolo in basso a destra dell'editor, accanto allo zoom, compare un pulsante. Mostra il numero dello slot selezionato su una piccola matrice 5×5, oppure un simbolo di streaming. Toccalo per aprire la scheda:

- l'hub con lo slot selezionato; **‹** e **›** scelgono lo slot 0–19;
- **Download / Streaming**: come funziona **Avvia** per questo hub;
- il pulsante di **download** (⤓): scrive il programma nello slot senza avviarlo;
- una riga di stato: l'avanzamento, *Slot 3: il programma è sull’hub*, oppure cosa è andato storto.

Quando sono collegati più hub Robot Inventor o SPIKE Prime, la scheda ha anche un pulsante dell'hub: toccalo per scegliere quale hub riceve il programma. MOCPilot ricorda la modalità e lo slot su questo dispositivo.

<Screenshot name="robot-inventor-slot-card" alt="La scheda dello slot: l'hub, le frecce dello slot, il selettore Download / Streaming e il pulsante di download" width={500} />

### Download {#download-mode}

In modalità **Download**, **Avvia** trasforma il programma a blocchi in un programma per l'hub, lo scrive nello slot selezionato e lo avvia sull'hub. La scrittura richiede qualche secondo; poi il programma gira sull'hub da solo.

- Per riavviarlo più tardi senza l'app, scegli lo slot con i pulsanti sinistro e destro dell'hub e premi il pulsante centrale.
- Il **pulsante centrale** dell'hub ferma il programma.
- Per tornare a eseguire i programmi da MOCPilot, passa la scheda su **Streaming**.

### Cosa può girare sull'hub {#download-blocks}

La maggior parte dei blocchi può andare sull'hub:

- eventi: avvio del programma, messaggi, condizioni, il timer, i pulsanti dell'hub, sensori, gesti, orientamento, inclinazione e segnali radio;
- controllo, operatori, variabili, liste e I miei blocchi;
- tutti i blocchi Robot Inventor, e i blocchi motore, luce e sensori di questo hub.

Alcuni blocchi hanno bisogno dell'app e non possono girare sull'hub da solo: i blocchi della dashboard e del gamepad, i blocchi di altri hub, l'evento del **pulsante centrale** (sull'hub quel pulsante ferma il programma), gli eventi della batteria e della connessione, la temperatura e la calibrazione della cremagliera. Se il programma ne contiene anche uno solo, non viene scritto nulla: la scheda dice **Questi blocchi non possono funzionare sull’hub senza l’app** e li elenca. Rimuovi quei blocchi o usa **Streaming**.

Se la scrittura non riesce, la riga di stato dice perché, per esempio **Spazio insufficiente sull’hub** o **L’hub non ha risposto**. Riprova, oppure riavvia l'hub se continua a non riuscire.

## Firmware {#firmware}

MOCPilot funziona con il firmware LEGO dell'hub e non lo sostituisce:

- **Hub Robot Inventor**: il firmware dell'app MINDSTORMS Robot Inventor. L'ultima versione è il firmware 1.5.6 con il software dell'hub 3.2.36.
- **Hub SPIKE Prime**: il firmware **SPIKE Legacy** (quello dell'app SPIKE 2). Il firmware più recente **SPIKE App 3** non è supportato: MOCPilot lo segnala quando trova un hub di questo tipo. Installa il firmware SPIKE Legacy con l'app LEGO® Education SPIKE™ Legacy, poi connettiti di nuovo.

Quando l'hub è pronto, mostra un numero di slot programma sulla sua matrice di luci.

## Se l'hub non si avvia {#restore}

Se l'hub non si avvia, resta spento, non mostra un numero di slot o è stato passato al firmware SPIKE App 3, ripristinalo prima con l'app ufficiale:

1. Apri l'app MINDSTORMS Robot Inventor (l'app SPIKE Legacy per un hub SPIKE Prime) e collega l'hub con il cavo USB.
2. Avvia l'aggiornamento dell'hub (**Update hub firmware**). Riscrive il firmware, il software dell'hub e i suoni robot e richiede circa 6 minuti. Non scollegare l'hub mentre è in corso.
3. Chiudi l'app LEGO e collega l'hub in MOCPilot.

### Modalità di ripristino (DFU) {#dfu}

Solo se l'app ufficiale non vede affatto l'hub, puoi scrivere il firmware tramite la modalità di ripristino dell'hub (DFU). È una procedura per utenti esperti:

1. Spegni l'hub e scollegalo. Tieni premuto il **pulsante Bluetooth** e collega il cavo USB; continua a tenerlo premuto finché la luce del pulsante non lampeggia in rosso, verde e blu. Ora il computer vede «LEGO Technic Large Hub in DFU Mode».
2. Su Windows, installa una volta il driver WinUSB per quel dispositivo, per esempio con Zadig. Mac e Linux non hanno bisogno di driver.
3. Scrivi l'immagine del firmware dell'app Robot Inventor (1.5.6) con `dfu-util` all'indirizzo `0x08008000`. L'hub si riavvia da solo al termine. Non scollegarlo durante la scrittura.
4. Poi esegui **Update hub firmware** nell'app Robot Inventor (vedi sopra) per ripristinare il software dell'hub e i suoni.

DFU scrive solo il firmware. Il bootloader di ripristino non può essere sovrascritto, quindi puoi sempre riprovare.
