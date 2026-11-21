---
id: QuickStart
title: Avvio rapido
description: "Installa MOCPilot, accedi, crea il tuo primo profilo e guida un modello in pochi minuti."
---

import Screenshot from '@site/src/components/Screenshot';

# Avvio rapido {#quick-start}

Questa guida ti accompagna dall'installazione dell'app alla guida del tuo primo modello. Ti serve un hub supportato con un motore; vedi [Dispositivi supportati](/docs/Introducing/SupportedDevices).

## 1. Installa l'app {#1-install-the-app}

MOCPilot è disponibile su App Store (iPhone, iPad, Mac), Google Play (Android) e Microsoft Store (Windows). Trovi i link su [mocpilot.com](https://mocpilot.com).

## 2. Accedi o continua senza account {#2-sign-in-or-continue-without-an-account}

Al primo avvio l'app ti chiede di accedere. Usa la tua email o il nome utente e la password, Google o l'ID Apple, oppure crea un nuovo account.

<Screenshot name="sign-in" alt="La schermata di accesso di MOCPilot" width={900} />

Ti consigliamo di creare un account:

- i tuoi profili e le impostazioni vengono salvati sul server e sincronizzati tra i tuoi dispositivi;
- puoi recuperare i tuoi dati se sostituisci o perdi un dispositivo;
- gli acquisti e MocPilot Pro funzionano su tutti i tuoi dispositivi.

Anche **Continua senza account** funziona, ma in questo caso tutto resta solo su questo dispositivo e va perso se rimuovi l'app. Puoi accedere in seguito da **Impostazioni → Account**. Vedi [Account](/docs/Application/Account/UserAccount).

## 3. Orientati nell'app {#3-find-your-way-around}

- Su uno **smartphone**, la barra in basso contiene **Profili**, **Impostazioni** e **Aiuto** (e **Notifiche** dopo l'accesso).
- Su un **tablet**, le stesse sezioni, il **Catalogo dei profili** e il tuo account si trovano nella barra laterale.
- Su un **computer**, usa la barra superiore: i menu a sinistra; Account, Notifiche e Impostazioni a destra.

Vedi [Smartphone, tablet e desktop](/docs/Introducing/Layouts).

## 4. Crea un profilo {#4-create-a-profile}

1. Nella pagina **I miei profili**, tocca **+** → **Nuovo profilo** (smartphone) oppure scegli **Nuovo profilo** (tablet e computer, oppure **File → Nuovo profilo**).
2. Scegli il **tipo di programma**:
   - **Collegamenti rapidi** se vuoi guidare un modello senza codice. Ideale per una prima prova.
   - **Blocchi logici** se ti servono eventi, cicli, condizioni e sensori.
3. Inserisci un **nome** e, se vuoi, aggiungi un'immagine.
4. Tocca **Crea**.

<Screenshot name="create-profile-tiles" alt="Pagina Nuovo profilo con i riquadri Blocchi logici e Collegamenti rapidi" width={900} />

Il profilo si apre nell'editor. Maggiori dettagli in [Creare un profilo](/docs/Application/Profiles/CreateProfile).

:::tip Vuoi un modello già pronto?
Apri il **Catalogo dei profili** (**Cerca online** nella pagina dei profili) e installa un profilo ufficiale per il tuo set. Vedi [Catalogo e pubblicazione](/docs/Application/Profiles/Catalog).
:::

## 5. Aggiungi il tuo hub {#5-add-your-hub}

1. Nell'editor, apri **I miei hub**.
2. Tocca **Aggiungi un nuovo hub** in uno slot libero, scegli il modello del tuo hub e tocca **Aggiungi**.
3. Accendi l'hub, premi il suo pulsante e attendi che MOCPilot lo trovi.

<Screenshot name="my-hubs" alt="Pagina I miei hub con gli slot degli hub" width={900} />

Se l'app chiede un aggiornamento del firmware, segui [Aggiornamento del firmware](/docs/Application/Hubs/FirmwareUpdating). Maggiori dettagli in [Aggiungere e collegare un hub](/docs/Application/Hubs/ConnectingHubs).

## 6. Disponi i controlli sulla dashboard {#6-place-controls-on-the-dashboard}

1. Apri **Dashboard**.
2. Tocca **+** (**Aggiungi controller**), scegli un **Joystick** e tocca **Aggiungi alla dashboard**.
3. Trascinalo dove preferisci. Toccalo per cambiarne dimensione, colore o comportamento.

<Screenshot name="controller-palette" alt="Tavolozza Aggiungi controller con il joystick selezionato" width={900} />

Vedi [Aggiungere e disporre i controlli](/docs/Application/Dashboard/ArrangingControls).

## 7. Collega il controllo a un motore {#7-connect-the-control-to-a-motor}

**Collegamenti rapidi:** trascina l'ingresso del joystick (ad esempio *JOY1 Asse Y*) da **Ingressi** nella riga vuota, aggiungi l'operazione **Motore** e l'uscita **Hub** da **Uscite**, poi tocca la porta a cui è collegato il motore. La riga è pronta quando non ha più la cornice rossa. Vedi [Collegamenti rapidi](/docs/Application/Links/LinksIntroducing).

**Blocchi logici:** aggiungi un blocco *quando il programma inizia*, un ciclo *ripetere sempre* e un blocco *avvia motore a … % velocità* che riceve il valore del joystick. Vedi [Blocchi logici](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) e gli [esempi](/docs/Application/BlockBuilder/Examples).

## 8. Premi Avvia {#8-press-run}

Premi **Avvia** (▶). Muovi il joystick e il motore gira. Premi **Ferma** per tornare alla modifica.

Ecco fatto. Prossimi passi:

- Scopri tutti i [tipi di controlli](/docs/Application/Dashboard/ControlTypes).
- Dai un nuovo aspetto alla dashboard con i [temi](/docs/Application/Themes/ThemesOverview).
- Collega un [gamepad](/docs/Application/Dashboard/Gamepad).
- Se qualcosa non funziona, vedi [Risoluzione dei problemi](/docs/Help/Troubleshooting).
