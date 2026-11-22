---
id: AiBuilder
title: Assistente IA
description: "Descrivi il tuo modello a parole o a voce e l'Assistente IA configura gli hub, la dashboard e il programma di un profilo Blocchi logici o Collegamenti rapidi."
---

import Screenshot from '@site/src/components/Screenshot';

# Assistente IA {#ai-builder}

Descrivi il tuo modello con parole tue, scrivendo o parlando, e l'**Assistente IA** configura il profilo per te: hub e porte, controlli della dashboard e programma. Funziona in entrambi gli editor: in un profilo [Blocchi logici](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) crea blocchi, in un profilo [Collegamenti rapidi](/docs/Application/Links/LinksIntroducing) crea righe. Poi puoi continuare a parlargli per modificare il profilo, oppure modificarlo tu stesso.

L'Assistente IA fa parte di [MocPilot Pro](/docs/Application/Account/Pro) e funziona nell'app e nell'[editor web](/docs/Introducing/WebEditor). Richiede una connessione a internet.

<Screenshot name="blocks-ai-builder" alt="Pannello dell'Assistente IA accanto al programma" width={900} />

## Aprire l'Assistente IA {#open-the-ai-builder}

1. Apri un profilo da modificare.
2. Su un computer, premi il pulsante **Assistente IA** (l'icona con le scintille) a destra della barra superiore, oppure ⇧⌘I / Ctrl+Maiusc+I; in una finestra stretta si trova in **Altro** (⋯). Su smartphone o tablet, tocca **Altro** → **Assistente IA**.
3. Scrivi la tua richiesta in **Cosa deve creare o modificare l'IA?** e premi **Invia** (o Invio; Maiusc+Invio va a capo).

Senza MocPilot Pro, il pulsante mostra cosa fa l'Assistente IA, con **Ottieni MocPilot Pro** e **Non ora**.

Dove si apre il pannello:

- **Smartphone**: una pagina a schermo intero sopra l'editor.
- **Tablet**: una scheda mobile; trascinala per l'intestazione sul lato sinistro o destro.
- **Computer**: una scheda a destra. Nell'app (non nel browser) puoi premere **Apri in una finestra separata** nella sua intestazione e posizionare la finestra accanto all'editor.

Mentre l'IA lavora, il pannello mostra cosa sta facendo (**Sto pensando al tuo modello…**, **Controllo del profilo…** e così via). Le modifiche compaiono nell'editor appena ha finito, insieme a un breve riepilogo di cosa è cambiato. Quando il pannello è vuoto, propone alcune richieste di esempio: toccane una per inserirla nel campo di testo, poi inviala così com'è o modificala prima.

La conversazione viene conservata per ogni profilo, quindi puoi chiudere il pannello e riprenderla in seguito.

## Scrivere una buona richiesta {#ai-builder-tips}

:::tip Indica quale hub usi, cosa è collegato a ogni porta e cosa deve fare
Una richiesta di una riga come «un'auto con le luci» non basta: l'IA deve indovinare l'hub, le porte e cosa fa ogni motore, e il risultato probabilmente andrà corretto. Includi:

- **L'hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Cosa c'è su ogni porta**: un motore di trazione, un motore dello sterzo (servo), luci, un sensore.
- **Cosa deve fare ciascuno**: trazione, sterzo con calibrazione, accensione e spegnimento, un limite di velocità.
- **Come vuoi controllarlo**: joystick, slider, pulsanti, un gamepad.
:::

Spiegalo come lo spiegheresti a un amico. Puoi scrivere nella tua lingua.

Se qualcosa non va ancora bene, di' all'IA cosa cambiare invece di ricominciare da capo.

## Richieste di esempio {#example-requests}

**Un'auto**: «Un'auto con un Technic Hub: il motore di trazione è sulla porta A, il motore dello sterzo sulla porta C funziona come servo, le luci sono sulla porta D. Joystick dello sterzo a sinistra, acceleratore a destra, un pulsante che accende e spegne le luci.»

**Una gru**: «Una gru con un Technic Hub: il motore di rotazione è sulla porta A, il motore del braccio sulla porta B, l'argano del gancio sulla porta C. Uno slider per la rotazione, pulsanti su/giù per il braccio, un joystick per il gancio, la velocità del braccio limitata al 50%.»

**Un treno**: «Un treno City con un City Hub: il motore del treno è sulla porta A, le luci sulla porta B. Un interruttore a passi per la velocità, un tachimetro e un pulsante per le luci.»

## Modificare un profilo esistente {#change-an-existing-profile}

Apri l'Assistente IA in un profilo che hai già, anche uno creato a mano, e di' cosa cambiare. L'IA vede gli hub, la dashboard e il programma attuali e li modifica:

- «Rendi lo sterzo più lento.»
- «Aggiungi un pulsante di stop.»
- «Copia i controlli sul mio gamepad.»
- «Limita la velocità del braccio al 50%.»

Puoi anche fare domande sul profilo, ad esempio «Su quale porta sono le luci?». L'IA risponde nel pannello e lascia il profilo com'è.

## Cosa succede al tuo profilo {#what-happens-to-your-profile}

- L'IA modifica direttamente il profilo aperto: hub, dashboard e programma vengono aggiornati subito. Se il programma è in esecuzione, si ferma.
- L'IA lavora con il tipo di programma del profilo: in un profilo Blocchi logici scrive blocchi, in un profilo Collegamenti rapidi scrive righe. Non trasforma mai l'uno nell'altro. Se una richiesta richiede qualcosa che le righe dei Collegamenti rapidi non possono fare, l'IA ti dice che serve un profilo Blocchi logici.
- Le parti del profilo che l'IA non deve modificare restano come sono.
- **Annulla l'ultima modifica dell'IA** (il pulsante Annulla nell'intestazione del pannello) riporta il profilo a com'era prima dell'ultima modifica dell'IA. Premilo di nuovo per tornare ancora più indietro, fino a 10 modifiche. La cronologia di annullamento si azzera quando apri un altro profilo.
- Puoi continuare a modificare il profilo tu stesso in qualsiasi momento.

## Input vocale {#voice-input}

Premi **Detta** (il pulsante del microfono) e pronuncia la tua richiesta; il testo compare nel campo e puoi correggerlo prima di inviarlo. Premi di nuovo il pulsante per fermarti. Se sono disponibili più lingue, il piccolo pulsante della lingua accanto al microfono cambia la lingua di dettatura; l'app ricorda la tua scelta.

| Dove | Come |
|---|---|
| iPhone, iPad, Mac | **Detta**; la prima volta consenti l'accesso al microfono e il riconoscimento vocale |
| Android | **Detta**; la prima volta consenti l'accesso al microfono |
| Windows | premi **Win+H** per dettare con la digitazione vocale di Windows (il pulsante del microfono te lo ricorda) |
| Editor web | **Detta** in Chrome, Edge e Safari; consenti l'accesso al microfono per il sito. Firefox non ha la dettatura |

Messaggi dell'input vocale:

| Messaggio | Cosa fare |
|---|---|
| **Consenti l'accesso al microfono per MOCPilot nelle impostazioni di sistema** | Attiva l'accesso al microfono per MOCPilot nelle impostazioni di sistema |
| **Consenti il riconoscimento vocale per MOCPilot nelle impostazioni di sistema** | Su un dispositivo Apple, attiva il riconoscimento vocale per MOCPilot nelle impostazioni di sistema |
| **Consenti l'accesso al microfono per questo sito nel browser** | Consenti il microfono nelle impostazioni del sito del browser |
| **Non si è sentito nulla** | Premi **Detta** e parla di nuovo |
| **L'input vocale richiede una connessione** | Collegati a internet oppure scrivi la richiesta |
| **Il riconoscimento vocale non è disponibile per questa lingua al momento** | Cambia la lingua di dettatura oppure scrivi la richiesta |
| **Nessun microfono trovato** / **L'input vocale non è disponibile su questo dispositivo** | Scrivi la richiesta |

## Limiti {#limits}

- Circa 30 richieste al giorno e un limite mensile. L'intestazione del pannello mostra quanto hai usato: **Oggi 5/30 · Mese 12%**.
- Durante la prova gratuita il numero di richieste all'IA è limitato; riprendono quando inizia l'abbonamento.
- Una richiesta alla volta: attendi la risposta prima di inviare la successiva.
- L'Assistente IA crea e modifica solo profili. Non risponde a domande su altri argomenti.

## Messaggi di errore {#error-messages}

| Messaggio | Cosa fare |
|---|---|
| **Il generatore IA non è disponibile** / **Impossibile raggiungere il servizio IA. Controlla la connessione a internet e riprova.** | Controlla la connessione a internet e riapri il pannello |
| **Nessuna connessione al servizio IA. Controlla la connessione a internet e riprova.** | Controlla la connessione e invia di nuovo la richiesta |
| **La connessione al servizio IA è stata persa…** | Quando torni online, la risposta compare nel pannello; altrimenti invia di nuovo la richiesta |
| **L'IA non ha risposto in tempo. Invia di nuovo la richiesta.** / **La richiesta è andata persa, inviala di nuovo** | Invia di nuovo la richiesta |
| **L’IA non è riuscita a creare un profilo funzionante per questa richiesta. Prova a dirlo con altre parole.** | Riformula la richiesta: indica l'hub, le porte e cosa fa ciascuna |
| **Il profilo è troppo grande per crearlo in una volta. Chiedi meno cose alla volta.** | Dividi la richiesta in passi più piccoli |
| **L’IA ha rifiutato questa richiesta.** | Riformula la richiesta in modo che riguardi il profilo |
| **Hai raggiunto il limite giornaliero di richieste all'IA. Riprova domani.** | Attendi fino a domani oppure modifica il profilo tu stesso |
| **Hai raggiunto il limite mensile dell'IA.** | Il limite si azzera il mese prossimo |
| **Hai usato tutte le richieste IA della prova gratuita. Riprenderanno quando inizia l'abbonamento.** | Attendi l'inizio dell'abbonamento |
| **L'assistente IA crea e modifica solo profili. Troppe richieste su altri argomenti: riprova tra un'ora.** | Attendi un'ora e chiedi solo cose sul profilo |
| **Troppe richieste all’IA in questo momento. Riprova tra un minuto.** | Riprova tra un minuto |
| **La richiesta precedente è ancora in corso.** | Attendi la risposta |
| **Il servizio IA non è temporaneamente disponibile. Riprova più tardi.** / **Hai MocPilot Pro. L'assistente IA non è disponibile al momento, riprova più tardi.** | Riprova più tardi |
| **La risposta era per un altro profilo** | Hai aperto un altro profilo mentre l'IA lavorava, quindi la modifica non è stata applicata. Riapri il primo profilo e ripeti la richiesta |
| **Prima apri un profilo da modificare** | Apri il profilo nell'editor, poi invia la richiesta |
| **Impossibile aggiornare il profilo nell'editor** / **Impossibile annullare la modifica** | Riprova; se continua a succedere, chiudi e riapri il profilo |
