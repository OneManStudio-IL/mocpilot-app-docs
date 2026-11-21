---
id: BluetoothPermissions
title: Bluetooth e autorizzazioni
description: "Quali autorizzazioni chiede MOCPilot su ogni piattaforma, perché, e come risolvere un'autorizzazione negata o un problema con il Bluetooth."
---

# Bluetooth e autorizzazioni {#bluetooth-and-permissions}

MOCPilot comunica con gli hub tramite Bluetooth, quindi il sistema ti chiede di consentirlo. Alcune altre autorizzazioni vengono chieste solo quando usi una funzione che ne ha bisogno.

## Cosa chiede MOCPilot e perché {#what-mocpilot-asks-for-and-why}

| Autorizzazione | Quando viene chiesta | Perché |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | la prima volta che cerchi un hub | per trovare e collegare gli hub |
| **Dispositivi nelle vicinanze** (Android 12 e successivi) | la prima volta che cerchi un hub | per trovare e collegare gli hub |
| **Posizione**, precisa (Android 10 e 11) | la prima volta che cerchi un hub | su queste versioni Android la richiede per la ricerca Bluetooth. MOCPilot non raccoglie, non salva e non condivide la tua posizione |
| **Posizione** (Android, hub Mould King) | quando colleghi un hub Mould King | l'app invia i comandi agli hub Mould King come trasmissioni Bluetooth e per questo chiede la Posizione su tutte le versioni di Android |
| **Fotocamera** (smartphone, tablet) | quando scansioni un codice QR in **Connetti un telecomando** | per leggere il [codice di connessione](/docs/Application/Profiles/RemoteControl). In alternativa puoi digitare le 6 cifre |
| **Microfono** (iPhone, iPad, Mac, Android) | la prima volta che detti una richiesta all'[Assistente IA](/docs/Application/Profiles/AiBuilder) | input vocale |
| **Riconoscimento vocale** (iPhone, iPad, Mac) | insieme al microfono | per trasformare la tua voce in testo |

Su Windows, MOCPilot non chiede un'autorizzazione Bluetooth; basta che il Bluetooth sia attivo. Per l'input vocale su Windows, MOCPilot suggerisce la digitazione vocale di Windows (Win+H).

## Se hai negato un'autorizzazione {#if-you-denied-a-permission}

Se hai negato un'autorizzazione, di solito il sistema non la chiede più. MOCPilot mostra allora un messaggio, ad esempio **Scansione non riuscita** con «L'app richiede l'autorizzazione per cercare i dispositivi nelle vicinanze…», «Consenti a MOCPilot di usare la fotocamera nelle impostazioni di sistema per scansionare il codice.» oppure «Consenti l'accesso al microfono per MOCPilot nelle impostazioni di sistema». Attiva l'autorizzazione nelle impostazioni di sistema e torna all'app:

**iPhone e iPad**
1. Apri **Impostazioni** e scorri fino a **MOCPilot**.
2. Attiva **Bluetooth** (e **Fotocamera**, **Microfono** o **Riconoscimento vocale**, se ti servono).

**Android** (i nomi variano leggermente a seconda del produttore)
1. Apri **Impostazioni → App → MOCPilot → Autorizzazioni**.
2. Consenti **Dispositivi nelle vicinanze**. Su Android 10 e 11, o per gli hub Mould King, consenti anche **Posizione** e attiva **Usa posizione precisa**.
3. Consenti **Fotocamera** o **Microfono**, se ti servono.

**Mac**
1. Apri **Impostazioni di Sistema → Privacy e sicurezza**.
2. Scegli **Bluetooth** (oppure **Microfono**, **Riconoscimento vocale**) e attiva **MOCPilot**.

**Windows**
1. Apri **Impostazioni → Bluetooth e dispositivi** e attiva **Bluetooth**.

## «Bluetooth è disattivato» {#bluetooth-is-off}

MOCPilot mostra **Bluetooth è disattivato** quando il Bluetooth del dispositivo è spento. Attivalo dal centro di controllo, dalle impostazioni rapide o dalle impostazioni di sistema, poi conferma il messaggio: l'app ricomincia la ricerca.

## Adattatori Bluetooth su Windows {#bluetooth-adapters-on-windows}

- Ti serve un adattatore Bluetooth 4.0 (LE) o successivo: integrato nel computer o una chiavetta USB.
- **Mould King 6.0** richiede un adattatore e un driver in grado di inviare trasmissioni Bluetooth (advertising). Non tutti gli adattatori ci riescono.
- **Mould King 4.0** non funziona su Windows: l'app mostra «Gli hub Mould King a 4 porte richiedono annunci Bluetooth con dati di servizio, che Windows non supporta.» Per questi hub usa uno smartphone o un tablet.

## Hub con Bluetooth classico {#classic-bluetooth-hubs}

L'hub **Robot Inventor** usa il Bluetooth classico, non il Bluetooth Low Energy. Funziona su Android, Mac e Windows, ma non su iPhone e iPad. Su Windows, se MOCPilot non lo trova, associa prima l'hub in **Impostazioni → Bluetooth e dispositivi → Aggiungi dispositivo**, poi ripeti la ricerca nell'app.

Tutti gli altri hub supportati usano il Bluetooth Low Energy e si aggiungono solo in MOCPilot, non nelle impostazioni Bluetooth del sistema.

## Una connessione stabile {#a-stable-connection}

- **Una app alla volta.** Un hub accetta una sola connessione. Chiudi le app LEGO® e le altre app di controllo remoto e scollega l'hub dagli altri smartphone.
- **Portata.** Tieni il dispositivo a pochi metri dal modello. Muri, metallo, il tuo corpo e altri dispositivi a 2,4 GHz (router Wi-Fi, altri dispositivi Bluetooth) riducono la portata.
- **Batterie.** Le batterie scariche causano disconnessioni quando i motori lavorano sotto sforzo.
- **Tieni l'app aperta.** Guida con MOCPilot sullo schermo e attiva **Mantieni lo schermo acceso** nelle [Impostazioni](/docs/Application/Account/Settings), così lo schermo non si spegne mentre un profilo è aperto.

Altre soluzioni per gli hub che non vengono trovati o che continuano a disconnettersi: [Risoluzione dei problemi](/docs/Help/Troubleshooting#hubs).
