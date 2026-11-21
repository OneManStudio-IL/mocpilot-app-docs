---
id: Troubleshooting
title: Risoluzione dei problemi
description: "Soluzioni ai problemi più comuni con hub, motori, dashboard, sincronizzazione, acquisti, aggiornamenti, suono, Assistente IA e controllo remoto."
---

# Risoluzione dei problemi {#troubleshooting}

## Hub {#hubs}

**L'hub non viene trovato**
- Attiva il Bluetooth e consenti a MOCPilot di usarlo (su Android anche Dispositivi nelle vicinanze o Posizione) nelle impostazioni di sistema. Vedi [Bluetooth e autorizzazioni](/docs/Help/BluetoothPermissions).
- Accendi l'hub e premi il suo pulsante subito prima della ricerca; tocca di nuovo **Avvia scansione**.
- Assicurati che l'hub non sia collegato a un altro smartphone o a un'altra app (app LEGO®, un altro telecomando). Chiudili.
- Sostituisci o ricarica le batterie.
- Robot Inventor: non disponibile su iPhone e iPad. Mould King 4.0: non disponibile su Windows.

**L'hub si disconnette**
- Avvicina il dispositivo: muri, metallo e altri dispositivi a 2,4 GHz riducono la portata.
- Le batterie scariche causano disconnessioni sotto carico: ricaricale o sostituiscile.
- Alcuni hub si spengono dopo un po' di tempo senza comandi; ricollegali in **I miei hub**.
- Altre informazioni su portata, adattatori e autorizzazioni: [Bluetooth e autorizzazioni](/docs/Help/BluetoothPermissions).

**«Aggiornamento firmware richiesto»**
- MOCPilot richiede un firmware supportato per gli hub Technic, Technic Move, BOOST e City. Segui [Aggiornamento del firmware](/docs/Application/Hubs/FirmwareUpdating). Se un aggiornamento non è riuscito, vedi [Ripristino del firmware](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King non reagisce**
- Gli hub Mould King ricevono solo comandi. Usa **Connetti di nuovo**, controlla il canale (**Seleziona canale**) e usa un solo tipo di Mould King per profilo.

## Motori e programma {#motors-and-the-program}

**Il motore non si muove**
- Il programma è in esecuzione (**Avvia**)? L'hub è collegato?
- Il motore è sulla porta usata dal programma? Controlla il [monitor dell'hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Collegamenti rapidi: apri **Problemi**; segui i valori in tempo reale lungo la riga. Vedi [Esecuzione e risoluzione dei problemi](/docs/Application/Links/Problems).
- Blocchi logici: lo script inizia con un blocco evento? Usa **Monitor** per osservare i valori.

**Il motore gira nel verso sbagliato**
- Collegamenti rapidi: aggiungi **Inverti** alla riga. Blocchi logici: moltiplica il valore per −1.

**Il motore si muove piano o ronza quando il joystick è rilasciato**
- Collegamenti rapidi: aggiungi **Zona morta**. Blocchi logici: ignora i valori piccoli con *tra*.

**Lo sterzo servo non è centrato o arriva a fine corsa**
- Collegamenti rapidi: Servo con calibrazione **Auto**, oppure **Manuale** con **Imposta come zero** e **Centro**; riduci l'**Angolo**. Blocchi logici: *calibrare la cremagliera dello sterzo*.
- Servo, Ruota di gradi e Vai alla posizione richiedono motori con encoder; i motori semplici e le porte SBrick accettano solo la velocità.

**I motori continuano a girare dopo Ferma**
- Blocchi logici: attiva **Arresta le porte dell'hub quando il programma si ferma** nelle Impostazioni dell'editor.

## Dashboard {#dashboard}

**Non riesco a spostare o eliminare un controllo**
- È bloccato: **Sblocca** dal suo menu. Un controllo usato dal programma non si può eliminare finché non rimuovi le sue righe o i suoi blocchi.

**«Non c'è spazio disponibile sulla dashboard»**
- Sposta o rimpicciolisci altri controlli, oppure scegli una dimensione più piccola.

**Un tema o un controllo è bloccato**
- Non lo possiedi: acquistalo o passa a [MocPilot Pro](/docs/Application/Account/Pro), oppure porta il controllo al tema Base con **Cambia tema**.

**Il gamepad non viene rilevato**
- Associa il gamepad nelle impostazioni Bluetooth del sistema (o collegalo via USB). La pagina **Gamepad** mostra **Gamepad: (nome)** quando l'app lo vede e «Gamepad non connesso» quando non lo vede.
- Attiva **Abilita blocchi del gamepad** nella pagina **Gamepad**, altrimenti gli ingressi e i blocchi del gamepad non compaiono.
- Hai più gamepad collegati? Scegline uno in **Seleziona gamepad**.
- Controlla pulsanti e levette con **Testa gamepad**.
- Windows: i controller Xbox (XInput) e Sony DualSense / DualSense Edge funzionano; altri controller senza supporto XInput potrebbero non funzionare.
- Vedi [Gamepad](/docs/Application/Dashboard/Gamepad).

## Profili e sincronizzazione {#profiles-and-sync}

**I miei profili non sono sull'altro dispositivo**
- Accedi con lo stesso account su entrambi i dispositivi e controlla la connessione a internet. Se l'app mostra **Offline**, tocca **Riprova** o **Vai online**.

**«Il profilo non è compatibile»**
- Il profilo è stato creato con una versione più recente di MOCPilot. Aggiorna l'app.

**Ho perso i miei profili dopo aver reinstallato l'app**
- In modalità ospite i profili esistono solo sul dispositivo e vanno persi insieme all'app. Con un account, accedi di nuovo e ricompaiono.

## Email dell'account {#account-emails}

**L'email di attivazione o il codice per reimpostare la password non arriva**
- Attendi qualche minuto e controlla la cartella spam o posta indesiderata. Le email arrivano da no-reply@mocpilot.com.
- Controlla di aver digitato correttamente l'indirizzo email.
- Attivazione: apri la pagina del tuo account e tocca **Invia nuovamente l’email di attivazione**. Finché l'account non è verificato, alcune funzioni restano disattivate.
- Reimpostazione della password: «Email non trovata» significa che non esiste un account con questa email; prova l'indirizzo con cui ti sei registrato. Altrimenti tocca di nuovo **Ripristina** accanto a «Hai dimenticato la password?» per ricevere un nuovo codice. Vedi [Account](/docs/Application/Account/UserAccount).

## Acquisti {#purchases}

**Manca un acquisto**
- Accedi con l'account con cui hai effettuato l'acquisto, poi vai in **Account → Acquisti → Ripristina**.
- «Abbonamento collegato a un altro account»: l'abbonamento Pro di questo account dello store appartiene a un altro account MOCPilot.

**«MocPilot Pro richiede una verifica online»**
- Pro è stato usato offline per molto tempo. Collegati a internet e la verifica parte da sola.

## Aggiornamenti dell'app {#app-updates}

**«Aggiornamento necessario»**
- Il messaggio a schermo intero «Questa versione di MOCPilot non è più supportata…» significa che questa versione non può più essere usata. Tocca **Aggiorna** per aprire lo store e installare la nuova versione. La schermata mostra anche la tua **Versione installata**.
- Nell'editor web il pulsante è **Ricarica la pagina**: viene caricato l'editor più recente.

**«MOCPilot (versione) è disponibile»**
- È uscita una versione più recente. Tocca **Aggiorna** (nell'editor web, **Ricarica la pagina**) oppure chiudi il banner con ×: non ricomparirà fino alla versione successiva.

## Suono {#sound}

**Non c'è suono**
- Attiva **Suono** nelle [Impostazioni](/docs/Application/Account/Settings): disattiva tutti i suoni dell'app, dei controlli e dei programmi.
- Alza il volume multimediale del dispositivo. Se sono collegate cuffie o uno speaker Bluetooth, il suono viene riprodotto lì.
- Blocchi logici: controlla che il programma non imposti il volume a 0 o non fermi tutti i suoni. Vedi [Suoni](/docs/Application/BlockBuilder/Blocks/Sounds).

## Assistente IA {#ai-builder}

**L'Assistente IA non è disponibile o mostra un errore**
- L'Assistente IA richiede [MocPilot Pro](/docs/Application/Account/Pro) e una connessione a internet: «L'assistente IA richiede MocPilot Pro.» oppure «Impossibile raggiungere il servizio IA. Controlla la connessione a internet e riprova.»
- «Il servizio IA non è temporaneamente disponibile. Riprova più tardi.» oppure «Troppe richieste all’IA in questo momento. Riprova tra un minuto.»: attendi e riprova.
- Esistono limiti giornalieri e mensili: «Hai raggiunto il limite giornaliero di richieste all'IA. Riprova domani.»
- Input vocale: consenti il microfono (e il riconoscimento vocale sui dispositivi Apple) nelle impostazioni di sistema; vedi [Bluetooth e autorizzazioni](/docs/Help/BluetoothPermissions).
- Tutti i messaggi e cosa fare: [Assistente IA](/docs/Application/Profiles/AiBuilder).

## Controllo remoto {#remote-control}

**Il dispositivo con gli hub non si collega o la connessione cade**
- «Il controllo remoto fa parte di MocPilot Pro»: l'account del telecomando deve avere [MocPilot Pro](/docs/Application/Account/Pro).
- «Il codice è scaduto…» oppure «Codice errato o scaduto…»: il codice di connessione è valido per 5 minuti. Mostra un nuovo codice sul telecomando e scansionalo o digitalo di nuovo.
- «Consenti a MOCPilot di usare la fotocamera nelle impostazioni di sistema per scansionare il codice.»: consenti la fotocamera nelle impostazioni di sistema ([come fare](/docs/Help/BluetoothPermissions)) oppure tocca **Inserisci codice** e digita le 6 cifre.
- «Questa versione dell'app non può connettersi a un telecomando» oppure «L'altro dispositivo non ha potuto aprire il profilo»: aggiorna MOCPilot su entrambi i dispositivi.
- «Connessione al telecomando persa…»: controlla che entrambi i dispositivi siano online. Se la connessione si interrompe per circa 4 secondi, il dispositivo con gli hub ferma il profilo e tutti i motori.
- Altro: [Controllo remoto](/docs/Application/Profiles/RemoteControl).

## Ancora bloccato? {#still-stuck}

Usa **Fai una domanda** o **Segnala un bug** in **Aiuto** nell'app (su computer: il menu **Aiuto**). La risposta arriva via email e in **Notifiche**.
