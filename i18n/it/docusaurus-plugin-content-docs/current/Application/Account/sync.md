---
id: Sync
title: Sincronizzazione tra dispositivi
description: "Mantieni sincronizzati profili e impostazioni di MOCPilot tra smartphone, tablet, computer ed editor web, e lavora offline."
---

import Screenshot from '@site/src/components/Screenshot';

# Sincronizzazione tra dispositivi {#sync-between-devices}

Quando hai effettuato l'accesso, MOCPilot mantiene uguali i tuoi profili e le tue impostazioni su ogni dispositivo: smartphone, tablet, computer e [editor web](/docs/Introducing/WebEditor). Non c'è nulla da attivare: con un account la sincronizzazione è sempre attiva.

## Come funziona {#how-it-works}

- Le modifiche vengono salvate prima sul dispositivo e caricate quando sei online («Sincronizzazione dei profili…»).
- Gli altri dispositivi scaricano la nuova versione quando sono online.
- Gli acquisti non vengono sincronizzati come file; appartengono al tuo account e sono disponibili ovunque tu acceda.
- I profili aggiunti sul sito (**Aggiungi al mio account** nel catalogo) o modificati nell'editor web arrivano tramite la sincronizzazione.
- In modalità ospite non viene sincronizzato nulla: i profili restano solo su questo dispositivo.

## Conflitti {#conflicts}

Se lo stesso profilo è stato modificato su due dispositivi prima della sincronizzazione, prevale la versione del tuo account e la tua versione su questo dispositivo viene salvata come copia (al nome viene aggiunto «(copia)»). MOCPilot ti avvisa con un messaggio **Sincronizzazione dei profili**. Lo stesso accade se un profilo che hai modificato qui è stato eliminato su un altro dispositivo.

Se apri un profilo che in quel momento è in modifica su un altro dispositivo, puoi scegliere **Sola lettura** (le modifiche non vengono salvate) o **Prendi il controllo della modifica**.

## Lavorare offline {#working-offline}

Gli hub, i tuoi profili e i temi scaricati funzionano senza internet.

- Se all'avvio MOCPilot non riesce a raggiungere il server, mostra **Nessuna connessione a internet** con **Lavora offline** e **Riprova**.
- Mentre sei offline, in alto compare l'etichetta **Offline**. Le funzioni che richiedono il server (catalogo e pubblicazione, Assistente IA, controllo remoto, notifiche, acquisti, messaggi all'assistenza) ti segnalano che serve una connessione a internet.
- Le modifiche fatte offline vengono caricate quando torna la connessione. Quando l'app vede di nuovo il server, mostra **La connessione è tornata** con **Vai online**.

<Screenshot name="offline-prompt" alt="Messaggio Nessuna connessione a internet con i pulsanti Lavora offline e Riprova" width={900} />

## Disconnessione {#signing-out}

La disconnessione rimuove i tuoi profili e le tue impostazioni da questo dispositivo; restano nel tuo account e tornano quando accedi di nuovo. Se alcune modifiche non sono ancora state caricate, MOCPilot ti avvisa prima ed elenca i profili: collegati a internet e lascia terminare la sincronizzazione, oppure scegli **Esci comunque** (una copia viene conservata nella cartella Backup dell'app).

## Suggerimenti {#tips}

- Prima di pubblicare un profilo nel catalogo, assicurati che sia sincronizzato: il catalogo lo prende dal tuo account.
- Per spostare i profili su un dispositivo senza account, usa **Condividi** e **Importa profilo…** con i file `.dat`. Vedi [Gestire i profili](/docs/Application/Profiles/ManageProfiles).
