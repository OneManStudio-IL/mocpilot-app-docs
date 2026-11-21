---
id: ManageProfiles
title: Gestire i profili
description: "Modificare, condividere, importare, esportare ed eliminare i profili di MOCPilot."
---

import Screenshot from '@site/src/components/Screenshot';

# Gestire i profili {#manage-profiles}

## Modificare i dettagli del profilo {#edit-profile-details}

Tocca **Modifica** (smartphone, tablet) o fai clic su **Modifica…** (computer) su un profilo. In **Modifica profilo** puoi cambiare:

- l'**immagine** e il **nome**;
- la **descrizione** (cosa fa il profilo, per quale modello è, come si guida);
- il **livello blocchi** (Blocchi logici);
- gli **hashtag**;
- **Preferito** (smartphone, tablet): un profilo preferito si sposta in cima all'elenco. Su un computer, **Preferito** si trova nella barra in basso della pagina dei profili.

<Screenshot name="edit-profile" alt="Finestra Modifica profilo con immagine, nome, descrizione e hashtag" width={900} />

Qui puoi anche eliminare il profilo e, dopo aver effettuato l'accesso, inviarlo al catalogo.

Il tipo di programma non si può cambiare. Per spostare un modello nell'altro editor, crea un nuovo profilo.

## Condividere (esportare) un profilo {#share-export-a-profile}

**Condividi…** racchiude il profilo in un unico file `.dat` (con un nome come `Technic Buggy_<id>.dat`) e apre il menu di condivisione del sistema. Invialo in un messaggio o via email, oppure salvalo tra i tuoi file.

Il file contiene gli hub, la dashboard e il programma. Non contiene acquisti: i temi e i controlli speciali che il destinatario non possiede vengono sostituiti o bloccati quando modifica il profilo (vedi [sotto](#paid-themes-in-shared-profiles)).

## Importare un profilo {#import-a-profile}

1. In **I miei profili**, scegli **Importa profilo…** (smartphone: **+** → **Importa profilo…**; tablet: il menu **Nuovo profilo**; computer: **File → Importa profilo…**, ⌘O / Ctrl+O).
2. Scegli un file `.dat`.

Se hai già questo profilo:

- una versione diversa: scegli **Sostituisci**, **Salva come copia** (aggiunge «(copia)» al nome) o **Annulla**;
- esattamente lo stesso file: non viene caricato di nuovo.

Un file che non è un profilo viene rifiutato.

:::tip Duplicare un profilo
Non esiste un comando «duplica» separato. Per ottenere una copia, condividi il profilo in un file e importalo con **Salva come copia**.
:::

## Eliminare un profilo {#delete-a-profile}

Apri **Modifica profilo**:

- smartphone e tablet: **Scorri per eliminare il profilo**;
- computer: **Elimina profilo**, poi conferma. **Elimina profilo** si trova anche nel menu della scheda del profilo.

Il profilo viene eliminato da questo dispositivo e dal tuo account, quindi scompare anche dagli altri tuoi dispositivi. L'operazione non si può annullare; se pensi che ti possa servire ancora, prima condividi il profilo in un file.

## Profili dal catalogo {#profiles-from-the-catalog}

Un profilo installato dal [Catalogo dei profili](/docs/Application/Profiles/Catalog) è una tua copia:

- finché non lo modifichi, funziona esattamente come è stato pubblicato e **Aggiorna** installa una nuova versione quando l'autore ne pubblica una (**Aggiorna dal catalogo** in **Modifica profilo** fa la stessa cosa);
- la prima modifica mostra un avviso: dopo di essa, il profilo non riceve più aggiornamenti dal catalogo.

## Temi a pagamento nei profili condivisi {#paid-themes-in-shared-profiles}

I profili possono usare [temi](/docs/Application/Themes/ThemesOverview) a pagamento e controlli speciali (volante, pedali, cambio e altri). Quando modifichi un profilo che usa prodotti che non possiedi:

- i controlli dei temi che non possiedi passano al tema gratuito **Base**;
- i controlli speciali senza un equivalente gratuito restano bloccati finché non li acquisti;
- i prodotti che possiedi restano come sono.

Un profilo del catalogo non modificato funziona con tutti i suoi prodotti, anche quelli che non possiedi.

## Sincronizzazione {#sync}

Quando hai effettuato l'accesso, ogni modifica viene caricata e compare sugli altri tuoi dispositivi. Vedi [Sincronizzazione tra dispositivi](/docs/Application/Account/Sync).

Se apri un profilo che è già in modifica su un altro dispositivo, MOCPilot ti chiede di scegliere: **Sola lettura** (le modifiche non vengono salvate) o **Prendi il controllo della modifica**.
