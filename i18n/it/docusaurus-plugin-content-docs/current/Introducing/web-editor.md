---
id: WebEditor
title: Editor web
description: "Modifica i tuoi profili MOCPilot nel browser su mocpilot.com e guida il modello tramite l'app su un altro dispositivo."
---

import Screenshot from '@site/src/components/Screenshot';

# Editor web su mocpilot.com {#web-editor-on-mocpilotcom}

L'editor web è MOCPilot che funziona nel tuo browser. È la stessa app con gli stessi editor, la stessa dashboard e gli stessi temi, quindi tutto ciò che trovi in questa documentazione vale anche per lui.

I browser non possono comunicare con gli hub Bluetooth, quindi l'editor web serve per la **modifica**. Per provare un profilo, eseguilo nel browser senza hub; per guidare il modello, lascia che sia l'app MOCPilot su uno smartphone, un tablet o un computer a collegare gli hub (vedi [Controllo remoto](/docs/Application/Profiles/RemoteControl)).

## Provalo senza account {#try-it-without-an-account}

Nella home page di [mocpilot.com](https://mocpilot.com), ogni editor (Blocchi logici e Collegamenti rapidi) ha un pulsante **Prova la demo** che apre un profilo dimostrativo. La demo non richiede né un account né hub. Nella demo puoi provare ogni tema e ogni controllo speciale; non viene salvato nulla.

## Modifica i tuoi profili {#edit-your-own-profiles}

1. Accedi su [mocpilot.com](https://mocpilot.com) con il tuo account MOCPilot.
2. Apri i tuoi profili e fai clic su **Modifica** su uno di essi.
3. Modifica gli hub, la dashboard o il programma, proprio come nell'app.
4. Chiudi il profilo (il pulsante Home). L'editor salva il profilo e lo carica online, e la modifica arriva all'app sui tuoi dispositivi tramite la [sincronizzazione](/docs/Application/Account/Sync).

Note:

- Puoi modificare solo i profili dell'account con cui hai effettuato l'accesso. Altrimenti vedrai «Questo profilo non è nel tuo account» e un pulsante **Torna al sito**.
- I tuoi acquisti e MocPilot Pro funzionano nel browser esattamente come nell'app.
- In un browser desktop, la dashboard è un pannello mobile che puoi trascinare e ridimensionare.
- I temi vengono scaricati di nuovo a ogni visita (circa 15 MB), quindi la prima apertura può richiedere un momento.
- L'importazione e l'esportazione dei file `.dat` non sono disponibili nel browser; usa l'app.

## Eseguire un profilo {#run-a-profile}

**Avvia** nell'editor web esegue il profilo nel browser: funzionano tutti i blocchi e tutte le righe tranne il Bluetooth, il che è utile per provare la logica, i monitor e la dashboard. Quando è associato un dispositivo con gli hub (MocPilot Pro, vedi sotto), **Avvia** avvia invece il profilo sul dispositivo con gli hub.

## Controllo remoto {#remote-control}

Con [MocPilot Pro](/docs/Application/Account/Pro), l'editor web può fare da **telecomando**: l'app MOCPilot su uno smartphone, un tablet o un computer vicino al modello (il **dispositivo con gli hub**) collega gli hub ed esegue il profilo, e la pagina del browser lo controlla. Premi **Controllo remoto** nella barra superiore del profilo e poi **Mostra il codice**; sul dispositivo con gli hub tocca **Connetti un telecomando** nella pagina **I miei profili** e scansiona il codice. Vedi [Controllo remoto](/docs/Application/Profiles/RemoteControl).
