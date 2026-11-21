---
id: LinksIntroducing
title: Introduzione a Collegamenti rapidi
description: "Collegamenti rapidi collega i controlli della dashboard ai motori e alle luci degli hub riga per riga, senza codice."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Collegamenti rapidi {#quick-links}

**Collegamenti rapidi** è l'editor di programmi di MOCPilot che non richiede codice. Colleghi i controlli della dashboard, il gamepad o i sensori degli hub a motori, luci e indicatori, **una riga alla volta**. Se hai già usato la classica app Controlz, ti sentirai a casa.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Righe di Collegamenti rapidi" style={{width: '100%', maxWidth: 720}} />

## Una riga si legge come una frase {#a-row-reads-like-a-sentence}

Ogni riga va da sinistra a destra:

**Ingresso → Elaborazione (facoltativa) → Operazione → Uscita**

> *Joystick 1, Asse Y* → *Graduale* → *Motore* → *Technic Hub, porta A*
>
> «Quando muovo il joystick su e giù, il motore sulla porta A gira, partendo e fermandosi in modo graduale.»

| Parte | Che cos'è | Esempi |
|---|---|---|
| **Ingresso** | da dove arriva il valore | un controllo della dashboard, il veicolo simulato, il gamepad, un pulsante o un sensore dell'hub |
| **Elaborazione** | modifica il valore lungo il percorso (nessuno, uno o più blocchi) | Inverti, Limite, Zona morta, Soglia, Graduale, Alterna |
| **Operazione** | che cosa deve fare l'hub | Motore, Servo, Motore a tempo, Luce, Ruota di gradi, Vai alla posizione… |
| **Uscita** | dove avviene l'azione | un **Hub** con le sue porte, oppure un'uscita diretta: Indicatore, LED dell'hub, Matrice LED, Calibra servo |

Le uscite dirette (Indicatore, LED dell'hub, Matrice LED, Calibra servo) non richiedono un'operazione: *Batteria dell'hub → Indicatore*.

## L'editor {#the-editor}

<Screenshot name="links-editor" alt="Editor di Collegamenti rapidi con le righe e la palette" width={900} />

- Le **righe** riempiono lo schermo e scorrono in verticale. Le nuove righe si creano nell'ultima riga, quella vuota («Nuova riga: ingresso»).
- La **palette** in basso ha tre schede: **Ingressi**, **Elaborazione** e **Uscite**. Si costruisce dal tuo profilo: ogni controllo della dashboard e ogni hub in I miei hub compaiono automaticamente, il gamepad compare quando i blocchi del gamepad sono attivi e un'operazione compare solo se un hub del profilo è in grado di eseguirla.
- Il pulsante **Problemi** nella barra superiore mostra un segno di spunta verde quando tutte le righe sono pronte, oppure un «!» rosso con il numero di problemi.

## Creare una riga {#build-a-row}

1. Trascina un ingresso da **Ingressi** nella riga vuota. Viene creata una nuova riga.
2. Se serve, trascina dei blocchi di elaborazione da **Elaborazione** dopo l'ingresso.
3. Trascina un'operazione (ad esempio **Motore**) da **Uscite**.
4. Trascina l'uscita **Hub** dopo l'operazione e tocca le porte da usare.
5. Tocca un blocco qualsiasi per modificarne le impostazioni: scegli tra le opzioni proposte, senza scrivere nulla.

I blocchi si incastrano come tessere di un puzzle. La forma di ogni giunzione indica il tipo di segnale, quindi i blocchi che non possono funzionare insieme non si agganciano:

- un **valore** da −1 a 1 (assi del joystick, cursori, pedali, sensori);
- **acceso/spento** (pulsanti, interruttori, soglie);
- la giunzione **operazione → hub**, per cui un hub può seguire solo un'operazione.

Per rimuovere un blocco, trascinalo di nuovo sulla palette («Rilascia qui per rimuovere») oppure toccalo e scegli **Rimuovi blocco**.

## Righe {#rows}

Tocca il numero della riga per aprire il menu della riga:

- **Disattiva** / **Attiva**: una riga disattivata resta nel programma ma non viene eseguita. Comodo per fare esperimenti.
- **Rimuovi riga**.

Puoi aggiungere tutte le righe che vuoi.

## Avvio {#run}

Premi **Avvia**. Mentre il programma è in esecuzione, ogni giunzione mostra il **valore in tempo reale** che la attraversa, così vedi esattamente dove si ferma un segnale. Durante l'esecuzione non puoi modificare il programma; premi **Ferma** per tornare a modificarlo. Vedi [Esecuzione e risoluzione dei problemi](/docs/Application/Links/Problems).

## Annulla {#undo}

**Annulla** e **Ripeti** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z, oppure i pulsanti mobili) tornano indietro fino a 100 passaggi. Non sono disponibili mentre il programma è in esecuzione.

## Per saperne di più {#read-more}

- [Ingressi](/docs/Application/Links/Inputs): controlli, il veicolo, il gamepad, pulsanti e sensori degli hub
- [Elaborazione](/docs/Application/Links/Processing): Inverti, Limite, Zona morta, Soglia, Graduale, Alterna
- [Operazioni e uscite](/docs/Application/Links/Operations)
- [Blocco Hub e porte](/docs/Application/Links/HubsAndPorts)
- [Esecuzione e risoluzione dei problemi](/docs/Application/Links/Problems)
- [Esempi: auto, carro armato, gru, treno](/docs/Application/Links/Examples)
- Riferimento dei blocchi: [ingressi](/docs/Application/Links/Blocks/InputBlocks), [elaborazione](/docs/Application/Links/Blocks/ProcessingBlocks), [operazioni e uscite](/docs/Application/Links/Blocks/OutputBlocks)

## Collegamenti rapidi o Blocchi logici? {#quick-links-or-logic-blocks}

Collegamenti rapidi è ideale quando ogni controllo si limita a muovere qualcosa. Quando ti serve una logica (sequenze, condizioni, variabili o una reazione in più passaggi a un sensore), usa [Blocchi logici](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Il tipo di programma si sceglie quando crei il profilo; vedi il [confronto](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
