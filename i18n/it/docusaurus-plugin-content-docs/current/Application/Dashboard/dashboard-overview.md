---
id: DashboardOverview
title: Editor della dashboard
description: "La dashboard di MOCPilot: il campo, la griglia, la barra superiore, lo sfondo e l'annullamento."
---

import Screenshot from '@site/src/components/Screenshot';

# Editor della dashboard {#dashboard-editor}

La **dashboard** è la schermata da cui guidi il tuo modello: joystick, slider, pulsanti, monitor e altri controlli. Ogni profilo ha una dashboard.

Aprila con il pulsante **Dashboard** nella barra superiore dell'editor (⌘2 / Ctrl+2 su un computer). Su uno smartphone con schermo stretto si trova in **Altro**.

- **Smartphone e tablet**: la dashboard si apre a schermo intero sopra l'editor.
- **Computer**: la dashboard si apre nella sua finestra **Dashboard**, così puoi tenerla accanto al programma.
- **Editor web**: un pannello mobile che puoi trascinare e ridimensionare.

<Screenshot name="dashboard-edit" alt="Dashboard in modalità di modifica con la griglia di punti" width={900} />

## Il campo e la griglia {#the-field-and-the-grid}

- Il campo ha sempre proporzioni **2:1** e si adatta allo schermo, quindi una dashboard appare uguale su smartphone, tablet e computer.
- In modalità di modifica viene mostrata una **griglia di punti** di 40 × 20 celle. I controlli si agganciano alla griglia.
- I controlli non possono sovrapporsi. Se un controllo non ci sta, torna dov'era.

## Barra superiore {#toolbar}

**Smartphone e tablet**

| Pulsante | Cosa fa |
|---|---|
| ← | torna all'editor del programma |
| Annulla / Ripeti | annulla e ripete le modifiche alla dashboard |
| **Seleziona** | seleziona più controlli per bloccarli, sbloccarli, eliminarli o modificarli insieme; **Fine** termina la selezione |
| ⚙ (Impostazioni della dashboard) | opzioni di sfondo e griglia (vedi sotto) |
| **+** (Aggiungi controller, con un anello arancione) | apre la tavolozza dei controller; vedi [Aggiungere e disporre i controlli](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Avvia** / **Ferma**: avvia e ferma il programma |

Mentre il programma è in esecuzione, i pulsanti di modifica sono nascosti.

**Computer ed editor web**

La barra superiore è simile a quella dell'editor:

- **Sinistra**: **Home** (chiude il profilo), i menu **File**, **Modifica** e **Vista**, poi **Annulla** e **Ripeti**.
- **Centro**: il nome del profilo e **Blocchi** (o **Collegamenti** in un profilo Collegamenti rapidi, ⌘1 / Ctrl+1) per tornare al programma. La dashboard stessa non ha un pulsante qui: è la pagina in cui ti trovi.
- **Destra**: **Seleziona**, **Impostazioni della dashboard** (⚙) e il pulsante arancione **+ Controller** (Aggiungi controller). In una finestra stretta il nome del profilo e il pulsante **Blocchi** si nascondono, e **+ Controller** mantiene solo il suo **+**.

Su un computer la barra della dashboard non ha **Avvia**: avvia e ferma il programma dall'editor (⌘R / Ctrl+R, ⌘. / Ctrl+.). Durante l'esecuzione, **Seleziona**, **Impostazioni della dashboard** e **+ Controller** non sono disponibili.

Menu: **File** (Chiudi profilo, Apri in una finestra separata), **Modifica** (Annulla, Ripeti) e **Vista** (Blocchi ⌘1, Dashboard ⌘2). Nella finestra separata della Dashboard, la barra mostra il titolo della finestra al posto di **Home**, **File** contiene **Chiudi finestra** e non ci sono né il menu **Vista** né il pulsante **Blocchi**.

## Annullare e ripetere {#undo-and-redo}

La dashboard ha una propria cronologia, separata da quella del programma. Puoi annullare ogni spostamento, ridimensionamento, modifica delle proprietà, aggiunta ed eliminazione.

## Impostazioni della dashboard {#dashboard-settings}

**Immagine di sfondo**: tocca **Cambia** e scegli:

- **Scegli uno pronto**: uno sfondo già pronto fornito con un tema. La galleria mostra gli sfondi dei temi i cui controlli sono su questa dashboard. Uno sfondo pronto riempie sempre lo schermo attorno al campo, quindi le opzioni qui sotto non si applicano.
- **Carica il tuo**: qualsiasi immagine dal tuo dispositivo. Viene salvata nel profilo.

**Rimuovi** elimina lo sfondo.

<Screenshot name="dashboard-backgrounds" alt="Impostazioni della dashboard con la galleria degli sfondi pronti" width={900} />

Per un'immagine tua puoi anche impostare:

- **Modalità riempimento immagine**: Allunga, Mantieni proporzioni e adatta, Mantieni proporzioni e ritaglia, Affianca, Affianca verticalmente, Affianca orizzontalmente o Aggiungi margini.
- **Area padre dell'immagine**: **Area di lavoro** (solo il campo) o **Schermo intero**.
- **Opacità immagine**, **Abilita sfocatura immagine** e **Valore sfocatura**: rendono lo sfondo più discreto, così i controlli risaltano.

**Nascondi punti**: nasconde i punti della griglia mentre il profilo è in esecuzione. In modalità di modifica i punti restano visibili, così puoi comunque allineare i controlli.

## I controlli e il programma {#controls-and-the-program}

Un controllo fornisce valori; è il programma a decidere cosa fanno. Un controllo usato dal programma non si può eliminare finché il programma non smette di usarlo. Nei Collegamenti rapidi, rimuovi le righe che lo usano; nei Blocchi logici, rimuovi i suoi blocchi.

## Per saperne di più {#read-more}

- [Aggiungere e disporre i controlli](/docs/Application/Dashboard/ArrangingControls): aggiunta, spostamento, dimensioni, blocco
- [Tipi di controlli](/docs/Application/Dashboard/ControlTypes)
- [Controlli speciali](/docs/Application/Dashboard/SpecialControls): volante, pedali, leva del cambio, freno a mano, frecce, manipolatore del treno
- [Proprietà dei controlli](/docs/Application/Dashboard/ControlProperties)
- [Indicatori e monitor](/docs/Application/Dashboard/Indicators)
