---
id: FirstCarLinks
title: La tua prima auto RC con i Collegamenti rapidi
description: "Passo dopo passo: costruisci un'auto LEGO radiocomandata con trazione, sterzo servo e luci nei Collegamenti rapidi, senza codice."
---

import Screenshot from '@site/src/components/Screenshot';

# La tua prima auto RC con i Collegamenti rapidi {#your-first-rc-car-with-quick-links}

In questo tutorial costruisci un'auto radiocomandata completa nei [Collegamenti rapidi](/docs/Application/Links/LinksIntroducing): un joystick fa avanzare e sterzare l'auto e un pulsante accende e spegne le luci. Ci vogliono circa 15 minuti e non scrivi nemmeno una riga di codice.

**Cosa ti serve**

- un LEGO® Technic™ Hub (88012);
- un motore di trazione sulla **porta A**;
- un motore dello sterzo con sensore di posizione (encoder) sulla **porta B**, ad esempio un motore Technic L o XL o qualsiasi motore angolare Technic. Lo sterzo deve avere dei finecorsa: le ruote possono girare a sinistra e a destra solo fino a un certo punto;
- luci LEGO® sulla **porta C** (facoltative);
- MOCPilot su uno smartphone, un tablet o un computer con Bluetooth.

:::note City Hub
Un City Hub (88009) ha solo due porte. Collega il motore di trazione alla **A** e il motore dello sterzo alla **B** e rinuncia alle luci, oppure aggiungi un secondo hub per loro. Tutto il resto funziona allo stesso modo.
:::

**Il risultato**: un profilo con tre righe:

| # | Ingresso | Elaborazione | Operazione | Uscita |
|---|---|---|---|---|
| 1 | JOY1, Asse Y | Graduale | Motore | Technic Hub, porta A |
| 2 | JOY1, Asse X | | Servo (Auto) | Technic Hub, porta B |
| 3 | BTN1 | Alterna | Luce | Technic Hub, porta C |

## 1. Crea il profilo {#create-the-profile}

1. Vai in **I miei profili** e inizia un nuovo profilo: su uno smartphone tocca **+** → **Nuovo profilo**, su un tablet tocca **Nuovo profilo** nell'intestazione, su un computer scegli **File → Nuovo profilo**.
2. Scegli il riquadro **Collegamenti rapidi**.
3. Inserisci un **Nome**, ad esempio «La mia prima auto». Immagine e hashtag per ora sono facoltativi.
4. Tocca **Crea**. Il profilo si apre nell'editor dei Collegamenti rapidi con una riga vuota.

Il tipo di programma non si può cambiare in seguito. Maggiori dettagli in [Creare un profilo](/docs/Application/Profiles/CreateProfile).

## 2. Aggiungi e collega l'hub {#add-the-hub}

1. Nell'editor, tocca **I miei hub**.
2. Tocca **Aggiungi un nuovo hub** in uno slot libero, scegli il Technic Hub nell'elenco e tocca **Aggiungi**.
3. Accendi l'hub e premi il suo pulsante. MOCPilot lo trova e si collega; l'hub resta nello slot.
4. Se compare la finestra **Aggiornamento firmware richiesto**, tocca **Aggiorna** e tieni l'hub acceso e vicino finché l'aggiornamento non è terminato. Vedi [Aggiornamento del firmware](/docs/Application/Hubs/FirmwareUpdating).

Suggerimento: apri l'hub collegato per vedere il suo [monitor dell'hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Mostra quale dispositivo è collegato a ogni porta, così puoi controllare i motori prima di creare le righe.

Maggiori dettagli in [Aggiungere e collegare un hub](/docs/Application/Hubs/ConnectingHubs).

## 3. Disponi i controlli sulla dashboard {#dashboard}

1. Apri **Dashboard** e tocca **+** (**Aggiungi controller**).
2. Nel gruppo **Joystick**, scegli **Joystick** e tocca **Aggiungi alla dashboard**. Il suo nome è **JOY1**. Lascia **Tipo di assi** su **Entrambi gli assi (X, Y)**: su e giù serviranno per avanzare, sinistra e destra per sterzare.
3. Tocca di nuovo **+**. In **Pulsanti e interruttori**, scegli **Bottone** e tocca **Aggiungi alla dashboard**. Il suo nome è **BTN1**.
4. Trascina il joystick sul lato sinistro e il pulsante sul lato destro, dove si troveranno i tuoi pollici. Tocca un controllo per cambiarne la dimensione (**S**, **M** o **L**) o l'aspetto.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard con il joystick JOY1 a sinistra e il pulsante BTN1 a destra" width={900} />

Preferisci avanzare e sterzare con due pollici diversi? Aggiungi invece due joystick: **JOY1** con **Solo verticale (Y)** e **JOY2** con **Solo orizzontale (X)**, e usa JOY2 nella riga dello sterzo.

Maggiori dettagli in [Aggiungere e disporre i controlli](/docs/Application/Dashboard/ArrangingControls) e [Tipi di controlli](/docs/Application/Dashboard/ControlTypes).

### Variante: volante e pedali {#wheel-and-pedals}

Se hai i [controlli speciali](/docs/Application/Dashboard/SpecialControls) **Volante** e **Pedali**, puoi usarli al posto del joystick. Al passo 4, crea la riga 1 con l'ingresso [Veicolo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) con **Uscita** impostata su **Velocità** (accelera e rallenta come un'auto vera, quindi Graduale non serve) e la riga 2 con l'ingresso **Volante** e il canale **Angolo di sterzata**.

## 4. Crea le righe {#rows}

Torna al programma. La tavolozza in basso ha tre schede: **Ingressi**, **Elaborazione** e **Uscite**. Ogni riga va da sinistra a destra: ingresso → elaborazione → operazione → hub. Come funziona l'editor: [Introduzione ai Collegamenti rapidi](/docs/Application/Links/LinksIntroducing).

### Riga 1: trazione {#row-drive}

1. Nella scheda **Ingressi**, trascina **JOY1** con il canale **Asse Y** nella riga vuota («Nuova riga: ingresso»). Sotto compare una nuova riga vuota.
2. Nella scheda **Elaborazione**, trascina **Graduale** dopo l'ingresso. I valori predefiniti di 0,5 s per **Accelerazione (fino a piena velocità)** e **Decelerazione (fino all'arresto)** sono un buon punto di partenza.
3. Nella scheda **Uscite**, trascina **Motore** dopo Graduale.
4. Trascina l'uscita **Technic Hub** dopo Motore e tocca il chip della porta **A**.

### Riga 2: sterzo {#row-steering}

1. Trascina **JOY1** con il canale **Asse X** nella riga vuota successiva.
2. Trascina **Servo** da **Uscite**.
3. Tocca il blocco Servo e imposta **Calibrazione** su **Auto**.
4. Trascina l'uscita **Technic Hub** dopo Servo e tocca **B**.

In modalità **Auto**, ogni volta che il programma parte, il motore dello sterzo ruota fino a entrambi i finecorsa; il punto di mezzo diventa il centro e la corsa diventa l'angolo di sterzata. Per provarlo subito, tocca **Calibra ora** nelle impostazioni del Servo mentre l'hub è collegato. Se la calibrazione non riesce, controlla l'hub, il motore e che lo sterzo abbia davvero dei finecorsa.

<Screenshot name="links-servo-settings" alt="Impostazioni di un blocco Servo" width={900} />

Niente finecorsa? Usa **Manuale**: raddrizza le ruote a mano, tocca **Imposta come zero** e scegli l'**Angolo**. Vedi [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Riga 3: luci {#row-lights}

1. Trascina **BTN1** nella riga vuota successiva.
2. Trascina **Alterna** da **Elaborazione**. Trasforma il pulsante in un interruttore: premi una volta per accendere, di nuovo per spegnere.
3. Trascina **Luce** da **Uscite**.
4. Trascina l'uscita **Technic Hub** dopo Luce e tocca **C**.

<Screenshot name="tutorial-car-links-rows" alt="Le tre righe finite dell'auto: trazione, sterzo e luci" width={900} />

Quando tutte e tre le righe sono pronte, il pulsante **Problemi** nella barra superiore mostra un segno di spunta verde. Un «!» rosso indica quanti problemi restano; toccalo e poi tocca un problema per andare alla riga. Vedi [Esecuzione e risoluzione dei problemi](/docs/Application/Links/Problems).

## 5. Avvia e prova {#run}

1. Metti l'auto su un supporto o tienila in mano in modo che le ruote non tocchino il tavolo.
2. Premi **Avvia**. Il motore dello sterzo si calibra: gira da entrambi i lati e torna al centro.
3. Spingi il joystick su e giù: l'auto va avanti e indietro, partendo e fermandosi dolcemente. Muovilo a sinistra e a destra: le ruote sterzano.
4. Premi **BTN1**: le luci si accendono. Premilo di nuovo: si spengono.
5. Premi **Ferma** per tornare alla modifica.

Mentre il programma è in esecuzione, ogni giunto tra i blocchi mostra il valore che lo attraversa, così puoi seguire un segnale dal joystick fino all'hub.

<Screenshot name="links-live-values" alt="Un programma Collegamenti rapidi in esecuzione con i valori in tempo reale sui giunti" width={900} />

Maggiori dettagli in [Guidare un modello (Avvia)](/docs/Application/Profiles/PlayMode).

## 6. Regolazioni {#tune}

Prima premi **Ferma**: le righe non si possono modificare mentre il programma è in esecuzione.

- **L'auto va indietro quando spingi in su?** Aggiungi **Inverti** alla riga 1. Lo stesso vale per la riga 2 se le ruote sterzano dalla parte sbagliata.
- **Il motore ronza o si muove piano con il joystick rilasciato?** Aggiungi **Zona morta** alla riga 1, prima di Graduale. Il valore predefinito di **Zona** del 10 % è un buon punto di partenza.
- **Troppo veloce?** Aggiungi **Limite** alla riga 1, ad esempio con **Massimo** al 50 %.
- **Troppo lenta a reagire?** Tocca Graduale e scegli un tempo più breve, oppure **Istantaneo**.

Un buon ordine per una riga di trazione è *Zona morta → Limite → Graduale*. Tutte le impostazioni: [Blocchi di elaborazione](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Facoltativo: guida con un gamepad {#gamepad}

1. Associa un gamepad in stile Xbox o PlayStation al tuo dispositivo nelle impostazioni Bluetooth del sistema.
2. Nell'editor, apri **Gamepad** e attiva **Abilita blocchi del gamepad**.
3. In ogni riga, trascina l'ingresso della dashboard di nuovo nella tavolozza per rimuoverlo e trascina al suo posto l'ingresso **Gamepad**. Imposta il suo **Ingresso**: **Stick sinistro Y** per la riga 1, **Stick destro X** per la riga 2 e **A** (**Croce** su PlayStation) per la riga 3.

Ogni porta può appartenere a una sola riga, quindi una riga comanda una porta dalla dashboard oppure dal gamepad. Maggiori dettagli in [Gamepad](/docs/Application/Dashboard/Gamepad).

## Se qualcosa non si muove {#if-something-does-not-move}

1. L'hub è collegato? Controlla **I miei hub** e il punto di connessione sul blocco Hub.
2. I motori sono collegati alle porte che hai scelto nelle righe?
3. Il pulsante **Problemi** mostra un segno di spunta verde e ogni riga è attiva?
4. Il programma è in esecuzione?
5. Avvia il programma e osserva i valori in tempo reale: se il valore cambia all'ingresso ma il motore non gira, controlla l'hub e la porta.

Un messaggio come «Porta B: questo dispositivo non può funzionare come servo (serve un motore con encoder)» significa che il motore su quella porta non ha l'encoder. Altri messaggi e soluzioni: [Esecuzione e risoluzione dei problemi](/docs/Application/Links/Problems) e [Risoluzione dei problemi](/docs/Help/Troubleshooting).

## 8. Salva e condividi {#save-and-share}

Non c'è un pulsante Salva: il profilo conserva le tue modifiche. Se hai effettuato l'accesso, si [sincronizza](/docs/Application/Account/Sync) anche con gli altri tuoi dispositivi.

- **Condividi come file**: in **I miei profili**, tocca **Condividi** sulla scheda del profilo (**Condividi…** su un computer). Ottieni un file `.dat` da inviare a un amico. Vedi [Gestire i profili](/docs/Application/Profiles/ManageProfiles).
- **Pubblica nel catalogo**: apri **Modifica profilo** e tocca **Invia al catalogo**. Prima aggiungi un'immagine, una descrizione e un hashtag. Vedi [Catalogo e pubblicazione](/docs/Application/Profiles/Catalog).

## Prossimi passi {#next-steps}

- Tieni d'occhio la batteria: aggiungi alla dashboard un **Livello della batteria** o un **Monitor** di testo e una riga *Technic Hub (Batteria) → Indicatore*. Vedi [Indicatori e monitor](/docs/Application/Dashboard/Indicators).
- Costruisci la stessa auto con i Blocchi logici: [La stessa auto con i Blocchi logici](/docs/Tutorials/FirstCarBlocks).
- Altre ricette: un carro armato, una gru e un treno negli [Esempi](/docs/Application/Links/Examples).
- Dai un nuovo aspetto alla dashboard con i [temi](/docs/Application/Themes/ThemesOverview).
