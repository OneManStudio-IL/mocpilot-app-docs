---
id: RemoteControl
title: Controllo remoto
description: "Esegui un profilo sullo smartphone, il tablet o il computer vicino al modello e controllalo da un altro dispositivo o dall'editor web."
---

import Screenshot from '@site/src/components/Screenshot';

# Controllo remoto {#remote-control}

Il controllo remoto ti permette di guidare un modello collegato a un altro dispositivo. Un dispositivo resta vicino al modello e comunica con gli hub tramite Bluetooth; tu tieni in mano l'altro e usi la sua dashboard. È anche il modo per guidare un modello dall'[editor web](/docs/Introducing/WebEditor), perché i browser non possono collegarsi agli hub.

## I due dispositivi {#the-two-devices}

- Il **dispositivo con gli hub** è lo smartphone, il tablet o il computer vicino al modello. La sua app MOCPilot collega gli hub ed esegue il profilo. Non serve un account.
- Il **telecomando** è il dispositivo da cui controlli: l'app MOCPilot su un altro dispositivo oppure l'editor web su [mocpilot.com](https://mocpilot.com). Il profilo viene aperto sul telecomando, che lo invia al dispositivo con gli hub.

## Cosa ti serve {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) sull'account con cui hai effettuato l'accesso sul **telecomando**. Il dispositivo con gli hub non ha bisogno né di un account né di Pro.
- L'app MOCPilot sul dispositivo con gli hub.
- Una connessione a internet su entrambi i dispositivi.

## Collegare un dispositivo con gli hub {#connect-a-hub-device}

1. Sul telecomando, apri il profilo e premi **Controllo remoto** (l'icona del telecomando: una casetta con le onde del segnale) nella barra superiore del profilo, accanto ad **Avvia**. Nell'editor web, premi **Mostra il codice** nel pannello che si apre.

   Il telecomando mostra un **codice di connessione**: un codice QR e 6 cifre.
2. Sul dispositivo con gli hub, apri MOCPilot e tocca **Connetti un telecomando** nella pagina **I miei profili**. Su Mac puoi anche scegliere **File → Connetti un telecomando…**.
3. Inserisci il codice:
   - **su uno smartphone o un tablet**, inquadra il codice QR con la fotocamera, oppure tocca **Inserisci codice** e digita le 6 cifre;
   - **su un computer**, digita le 6 cifre e premi **Connetti**.
4. I dispositivi si collegano. Il telecomando invia il profilo al dispositivo con gli hub e lo avvia lì, e il dispositivo con gli hub mostra la pagina a schermo intero **Controllo remoto**.

<Screenshot name="remote-control-code" alt="Pannello Controllo remoto in un profilo aperto con il codice QR e il codice a 6 cifre" width={900} />

Sul codice di connessione:

- Funziona una sola volta ed è valido per 5 minuti. Finché il telecomando continua a mostrarlo, alla scadenza viene sostituito da un nuovo codice.
- Scansionalo nell'app MOCPilot, non con l'app Fotocamera dello smartphone.
- Se chiudi il pannello sul telecomando prima che il dispositivo con gli hub si colleghi, non viene configurato nulla; premi di nuovo **Controllo remoto** per ottenere un nuovo codice.

<Screenshot name="remote-connect-code-entry" alt="Finestra Connetti un telecomando su un computer con il campo per le 6 cifre" width={900} />

## Quando i dispositivi sono collegati {#when-the-devices-are-connected}

**Sul telecomando:**

- Il pulsante **Controllo remoto** diventa verde (su uno smartphone o un tablet, un anello verde) e il suo pannello mostra il nome del dispositivo con gli hub e un pulsante **Disconnetti**.
- **I miei hub** mostra gli hub del dispositivo con gli hub. Collega gli hub da lì come al solito: è il dispositivo con gli hub a cercarli, quindi premi il pulsante sull'hub quando richiesto.
- La dashboard controlla il modello.

**Sul dispositivo con gli hub**, la pagina a schermo intero **Controllo remoto** mostra:

- lo stato, ad esempio **In esecuzione «La mia auto»**;
- **Hub connessi: N** e, durante la ricerca, **Ricerca di un hub: premi il pulsante sull'hub.**;
- un promemoria: **Tieni aperta questa app. È il dispositivo con gli hub: collega gli hub ed esegue il profilo; il telecomando lo controlla soltanto.**;
- un pulsante **Ferma**.

Lo schermo del dispositivo con gli hub resta acceso finché è collegato. Il profilo non viene salvato sul dispositivo con gli hub e non compare nel suo elenco dei profili.

<Screenshot name="remote-hub-device" alt="Pagina a schermo intero Controllo remoto sul dispositivo con gli hub con lo stato della connessione, il numero di hub connessi e il pulsante Ferma" width={900} />

## Avvia e Ferma {#run-and-stop}

- Premi **Ferma** sul telecomando per fermare il profilo sul dispositivo con gli hub. Il dispositivo con gli hub ferma sempre tutti i motori, anche se **Arresta le porte dell'hub quando il programma si ferma** è disattivato nel profilo.
- Premi **Avvia** sul telecomando per riavviarlo sul dispositivo con gli hub.
- Nell'editor web, il dispositivo con gli hub resta associato per ogni profilo che apri nella stessa scheda del browser: **Avvia** avvia il profilo sul dispositivo con gli hub. Quando nessun dispositivo con gli hub è associato, **Avvia** esegue il profilo nel browser, senza hub.

## Se la connessione cade {#if-the-connection-drops}

:::caution Sicurezza
Se il dispositivo con gli hub non riceve nulla dal telecomando per 4 secondi, ferma il profilo e tutti i motori.
:::

A quel punto:

- il dispositivo con gli hub mostra **Connessione al telecomando persa. Il profilo è stato fermato. In attesa del telecomando…** e resta in attesa;
- l'app sul telecomando mostra **Connessione persa. Nuovo tentativo…** con **Riprova** e **Disconnetti**;
- l'editor web mostra **Il dispositivo con gli hub si è disconnesso**: «*dispositivo* ha smesso di rispondere. Il profilo su di esso è stato fermato e i suoi motori sono stati spenti.» Continua a tentare di riconnettersi; puoi anche premere **Riconnetti**, **Avvia nel browser** o **Ferma**.

Quando i dispositivi sono di nuovo collegati, controlla lo stato sul telecomando e premi **Avvia** se il profilo non è in esecuzione.

## Disconnettere {#disconnect}

- **Sul telecomando**: premi **Controllo remoto** e scegli **Disconnetti**.
- **Sul dispositivo con gli hub**: premi **Ferma** nella pagina **Controllo remoto**.

In entrambi i casi il profilo e i motori si fermano e il dispositivo con gli hub chiude il profilo.

## Risoluzione dei problemi {#troubleshooting}

| Messaggio | Dove | Cosa fare |
|---|---|---|
| **Il controllo remoto fa parte di MocPilot Pro** | telecomando | Abbonati a [MocPilot Pro](/docs/Application/Account/Pro) con l'account del telecomando. Non puoi abbonarti nel browser: fallo nell'app e Pro funzionerà anche nell'editor web |
| **Nessuna connessione al server** | entrambi | Controlla la connessione a internet e riprova |
| **Impossibile ottenere un codice dal server** | telecomando | Premi **Mostra il codice** per riprovare |
| **Codice errato o scaduto. Controlla le 6 cifre mostrate sul telecomando.** | dispositivo con gli hub | Digita le 6 cifre che il telecomando mostra in questo momento |
| **Il codice è scaduto. Mostra un nuovo codice sul telecomando e scansionalo di nuovo.** | dispositivo con gli hub | Premi **Controllo remoto** sul telecomando e scansiona il nuovo codice |
| **Questo non è un codice MOCPilot. Scansiona il codice mostrato dal telecomando.** | dispositivo con gli hub | Scansiona il codice QR nel pannello **Controllo remoto** del telecomando |
| **Troppi codici errati. Riprova tra qualche minuto.** | dispositivo con gli hub | Attendi qualche minuto, poi inserisci il codice attuale |
| **Consenti a MOCPilot di usare la fotocamera nelle impostazioni di sistema per scansionare il codice.** | dispositivo con gli hub | Consenti l'accesso alla fotocamera nelle impostazioni di sistema, oppure tocca **Inserisci codice** e digita le 6 cifre |
| **Il telecomando non risponde. Controlla che il profilo sia aperto su di esso e che sia online.** | dispositivo con gli hub | Tieni il profilo aperto sul telecomando e controlla la sua connessione a internet |
| **Questa versione dell'app non può connettersi a un telecomando** | entrambi | Aggiorna MOCPilot |
| **Questo browser non può aprire una connessione diretta (WebRTC)** | editor web | Usa un altro browser, ad esempio Chrome, Edge o Safari |
| **Il profilo è troppo grande** / **Il profilo non è arrivato completo** | entrambi | Controlla la connessione e premi di nuovo **Avvia** |
| **L'altro dispositivo non ha potuto salvare il profilo** / **L'altro dispositivo non ha potuto aprire il profilo** | telecomando | Premi di nuovo **Avvia**; se continua a succedere, disconnetti e ricollega il dispositivo con gli hub |
| **La connessione a *dispositivo* è stata persa** / **Connessione al telecomando persa. In attesa…** | entrambi | Vedi [Se la connessione cade](#if-the-connection-drops) |
