---
id: Backpack
title: Zaino
description: "Conserva parti dei tuoi programmi Blocchi logici nello zaino e inseriscile in qualsiasi profilo, su tutti i tuoi dispositivi."
---

import Screenshot from '@site/src/components/Screenshot';

# Zaino {#backpack}

Lo **Zaino** è il posto dove conservi parti dei tuoi programmi a blocchi per riutilizzarle in altri profili: una routine di sterzo, uno spettacolo di luci, un blocco di I miei blocchi scritto una volta e che vuoi avere ovunque. Salva una pila di blocchi nello zaino da un profilo, poi inseriscila in qualsiasi altro profilo, su questo dispositivo o su qualsiasi dispositivo su cui hai effettuato l'accesso.

Lo zaino fa parte dell'editor [Blocchi logici](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). I profili Collegamenti rapidi non lo hanno.

<Screenshot name="backpack-panel" alt="Il pannello Zaino accanto a un programma a blocchi" width={900} />

## Cosa conserva lo zaino {#what-the-backpack-keeps}

Ogni elemento dello zaino è una **copia** dei blocchi che hai salvato:

- **Una pila**: il blocco che hai scelto insieme a tutto ciò che è agganciato sotto e dentro di esso, proprio come lo copia **Duplica**.
- **Un blocco di I miei blocchi**: se salvi il blocco `definire …` di un [blocco personalizzato](/docs/Application/BlockBuilder/Blocks/MyBlocks), lo zaino conserva l'intera definizione. Questi elementi sono contrassegnati con **Il mio blocco**.

L'elemento ricorda anche i blocchi di I miei blocchi usati dai tuoi blocchi (anche attraverso altri blocchi di I miei blocchi) e i nomi delle variabili, delle liste, dei messaggi, dei veicoli e dei suoni a cui fanno riferimento, così i blocchi funzionano quando li inserisci altrove.

I blocchi inseriti diventano una parte normale del programma del profilo. Nulla nel profilo dipende dallo zaino: eliminare o rinominare un elemento non cambia i programmi in cui lo hai inserito. Gli elementi non si possono modificare nello zaino. Per cambiarne uno, inseriscilo, modifica i blocchi nel programma e salvali di nuovo nello zaino come nuovo elemento.

## Salvare blocchi nello zaino {#save-blocks}

1. Nel programma, fai clic destro su un blocco (computer) o tienilo premuto (smartphone, tablet).
2. Scegli **Aggiungi allo zaino**.
3. Inserisci un nome in **Nome dei blocchi** e tocca **Salva**.

Il blocco e tutto ciò che vi è agganciato finiscono nello zaino. Per salvare la definizione di un blocco di I miei blocchi, apri il menu del suo blocco `definire …`.

<Screenshot name="backpack-add" alt="Il menu del blocco con Aggiungi allo zaino e la finestra del nome" width={900} />

## Aprire lo zaino {#open}

- **Computer ed editor web**: il pulsante **Zaino** nella barra superiore dell'editor, **Vista → Zaino** nel menu, oppure **Ctrl+Maiusc+B** (**⌘⇧B** su Mac). Se la finestra è stretta, il pulsante si trova nel menu **Altro**. Lo zaino si apre come pannello sul lato destro dell'editor, accanto al [Monitor](/docs/Application/BlockBuilder/Editor#monitor) se anche questo è aperto.
- **Smartphone e tablet**: **Altro → Zaino** nella barra superiore dell'editor. Lo zaino si apre come pannello sopra l'editor.

Il pulsante resta evidenziato finché lo zaino è aperto. Premilo di nuovo per chiudere lo zaino.

Ogni elemento mostra la sua immagine, il suo nome e il numero di blocchi che contiene (**Blocchi: N**). La nota in fondo al pannello indica dove viene conservato lo zaino (vedi [più sotto](#where-it-is-kept)).

## Inserire blocchi in un programma {#insert}

- **Tocca un elemento**: i suoi blocchi compaiono nella parte visibile del programma.
- **Trascina un elemento sul programma**: i blocchi finiscono dove li rilasci. Trascina di lato, verso il programma; trascinando in su o in giù scorri l'elenco.
- **Menu dell'elemento (⋯)**: **Inserisci**, **Rinomina…** o **Elimina**.

Su smartphone e tablet lo zaino si chiude dopo l'inserimento, così puoi vedere i blocchi. Un solo **Annulla** rimuove tutto ciò che è stato inserito.

### Cosa succede quando inserisci {#what-happens}

- **I miei blocchi**: un blocco di I miei blocchi che il profilo ha già con lo stesso contenuto viene riutilizzato, quindi inserire di nuovo gli stessi blocchi non ne crea copie. Se un altro blocco di I miei blocchi del profilo usa lo stesso nome, quello inserito ne riceve uno proprio. Inserire un elemento Il mio blocco che è già nel profilo non fa nulla e mostra **Già presente**: trova il blocco in **I miei blocchi**.
- **Variabili, liste, messaggi e veicoli**: se il profilo ne ha uno con lo stesso nome, i blocchi usano quello; altrimenti viene creato. I valori delle variabili e il contenuto delle liste non vengono copiati. Se il nome è già usato da qualcos'altro, compare un messaggio come *Impossibile creare la variabile «velocità»: il nome è già in uso*.
- **Suoni**: i tuoi suoni sono file del profilo e non vengono conservati nello zaino. Se il profilo non ha un suono con quel nome, vedi *Il suono «…» non è in questo profilo: scegli un suono nei blocchi*. I suoni integrati funzionano ovunque.
- **Blocchi di hub e della dashboard**: i blocchi di un hub, di un controllo della dashboard o di un gamepad che questo profilo non ha non possono essere inseriti. Prima di cambiare qualsiasi cosa, l'app mostra **Alcuni blocchi non possono essere inseriti** con l'elenco di questi blocchi e quanti ne verranno esclusi, e chiede se inserire gli altri. Se vuoi tenerli, aggiungi prima l'hub o il controllo della dashboard. Se nessuno dei blocchi è adatto al profilo, non viene inserito nulla.

## Rinominare ed eliminare {#rename-delete}

Apri il menu dell'elemento (⋯):

- **Rinomina…** cambia il nome dell'elemento.
- **Elimina** lo rimuove dopo la tua conferma (**Eliminare dallo zaino?**). I programmi in cui lo hai inserito conservano i loro blocchi.

Lo zaino non rimuove mai elementi da solo: elimina ciò che non ti serve più.

## Dove viene conservato lo zaino {#where-it-is-kept}

- **Senza account (ospite)**: solo su questo dispositivo. Il pannello indica *Salvato su questo dispositivo. Accedi per avere lo zaino su tutti i tuoi dispositivi.*
- **Con l'accesso effettuato**: anche nel tuo account, così hai lo stesso zaino su tutti i tuoi dispositivi, compreso l'[editor web](/docs/Introducing/WebEditor). Il pannello indica *Salvato nel tuo account: lo stesso zaino su tutti i tuoi dispositivi.* Le modifiche fatte su un dispositivo compaiono sugli altri.
- **Primo accesso**: gli elementi che hai salvato come ospite su questo dispositivo passano nel tuo account.

Puoi usare lo zaino anche offline. Le modifiche vengono conservate sul dispositivo e inviate al tuo account quando torna la connessione (nel frattempo il pannello mostra **Sincronizzazione…**). Un elemento che si sta ancora scaricando dal tuo account non può ancora essere inserito: l'app indica **Non ancora pronto**, quindi riprova tra un attimo.

## Limiti {#limits}

| | Limite |
|---|---|
| Elementi nello zaino | 200 |
| Dimensione di un elemento | circa 512 KB (una parte di programma molto grande potrebbe non starci: salva una parte più piccola) |
| Nome dell'elemento | fino a 100 caratteri |

Se lo zaino nel tuo account è pieno o un elemento è troppo grande, l'elemento resta solo su questo dispositivo e l'app te lo segnala. Gli elementi salvati con una versione più recente dell'app si possono inserire solo dopo aver aggiornato l'app.

## Risoluzione dei problemi {#troubleshooting}

| Messaggio | Cosa fare |
|---|---|
| **Lo zaino è pieno (200 elementi). Elimina qualcosa che non ti serve.** | Elimina gli elementi che non usi più. |
| **Troppi blocchi per lo zaino. Salva una parte più piccola.** | Salva una pila più piccola, oppure dividi il programma in più elementi. |
| **Alcuni blocchi non possono essere inseriti** | Al profilo manca un hub, un controllo della dashboard o un gamepad di cui i blocchi hanno bisogno. Aggiungilo e inserisci di nuovo, oppure inserisci gli altri blocchi. |
| **Già presente** | Il blocco di I miei blocchi è già in questo profilo: trovalo in **I miei blocchi**. |
| **Non ancora pronto** | L'elemento si sta ancora scaricando dal tuo account. Attendi un attimo e riprova. |
| **Questi blocchi sono stati salvati con una versione più recente dell'app. Aggiorna l'app per usarli.** | Aggiorna MOCPilot su questo dispositivo. |
