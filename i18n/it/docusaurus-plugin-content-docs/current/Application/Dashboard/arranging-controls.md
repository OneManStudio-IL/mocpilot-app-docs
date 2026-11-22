---
id: ArrangingControls
title: Aggiungere e disporre i controlli
description: "Aggiungi controlli dalla tavolozza, spostali e ridimensionali, duplicali, bloccali ed eliminali."
---

import Screenshot from '@site/src/components/Screenshot';

# Aggiungere e disporre i controlli {#add-and-arrange-controls}

## Aggiungere un controllo {#add-a-control}

1. Sulla dashboard, tocca **+** (**Aggiungi controller**); su un computer, fai clic su **+ Controller** a destra della barra superiore. Su un computer la tavolozza si apre in una finestra separata, con **Aggiungi controller** al centro della sua barra superiore.
2. Scegli un tipo di controllo nell'elenco. I tipi sono raggruppati: **Joystick**, **Sliders**, **Pulsanti e interruttori**, **Monitor**, poi **Veicolo e speciali** per i [controlli speciali](/docs/Application/Dashboard/SpecialControls) e **I miei design** per i design che hai salvato. Per trovare rapidamente un controllo, scrivi in **Cerca controlli**.
3. La striscia degli aspetti mostra il tipo selezionato in ogni [tema](/docs/Application/Themes/ThemesOverview) (per un controllo speciale, tutti i suoi aspetti). Tocca un aspetto per vederlo nell'anteprima grande; puoi provarlo direttamente lì.
4. Configura il controllo in **Configura**: le schede **Stile** e **Impostazioni** e la dimensione.
5. Tocca **Aggiungi alla dashboard** (su un computer, il pulsante arancione a destra della barra superiore della tavolozza). Su un computer puoi aggiungere più controlli di seguito.

<Screenshot name="controller-palette" alt="La tavolozza Aggiungi controller" width={900} />

Il controllo va nella prima area libera e riceve un badge **NUOVO**. Se non c'è spazio, MOCPilot te lo segnala: fai spazio o scegli una dimensione più piccola.

I controlli dei temi che non possiedi mostrano **Acquista** e **Tutto con MocPilot Pro** al posto di **Aggiungi alla dashboard**. Vedi [Ottenere, acquistare e aggiornare i temi](/docs/Application/Themes/GettingThemes).

## Spostare {#move}

In modalità di modifica, tieni premuto un controllo e trascinalo. Quando lo rilasci, si aggancia alla cella della griglia più vicina. Se si sovrapporrebbe a un altro controllo, torna indietro.

## Dimensioni {#sizes}

Ogni controllo ha tre dimensioni: **S**, **M** e **L**. Cambiala con **Dimensione** nelle proprietà del controllo. Dimensioni in celle della griglia (larghezza × altezza):

| Controllo | S | M | L |
|---|---|---|---|
| Joystick, Pad direzionale | 7×7 | 10×10 | 13×13 |
| Slider | 10×3 | 14×4 | 18×5 |
| Slider ver. | 3×10 | 4×14 | 5×18 |
| Manopola | 6×6 | 8×8 | 10×10 |
| Bottone, Interruttore | 3×3 | 4×4 | 5×5 |
| Interruttore a passi | 8×3 | 12×4 | 16×5 |
| Interruttore a passi ver. | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Livello della batteria, Velocimetro | 6×6 | 8×8 | 10×10 |
| Monitor di inclinazione | 8×4 | 12×6 | 16×8 |
| Volante | 8×8 | 12×12 | 16×16 |
| Pedali | 11×8 | 16×12 | 21×16 |
| Cambio manuale, Cambio automatico | 8×8 | 10×10 | 12×12 |
| Freno a mano | 4×7 | 6×10 | 8×13 |
| Frecce | 8×5 | 10×6 | 14×8 |
| Manipolatore del treno | 6×8 | 8×10 | 10×13 |

L'intero campo misura 40 × 20 celle. Se una dimensione più grande non ci sta, sposta prima i controlli vicini.

## Selezionare e modificare {#select-and-edit}

Tocca (fai clic su) un controllo per selezionarlo e aprirne le **proprietà**. Vedi [Proprietà dei controlli](/docs/Application/Dashboard/ControlProperties).

## Menu contestuale {#context-menu}

Tieni premuto (touch screen) o fai clic con il tasto destro (computer) su un controllo:

- **Blocca** / **Sblocca**
- **Proprietà**
- **Cambia tema**: passa il controllo a un altro tema che possiedi e che ha lo stesso tipo di controllo
- **Duplica**: una copia con le stesse proprietà
- **Duplica (solo tipo)**: un nuovo controllo dello stesso tipo con le proprietà predefinite
- **Elimina**

Tieni premuta o fai clic con il tasto destro su una parte vuota del campo:

- **Blocca tutto** / **Sblocca tutto**
- **Elimina N controller**: elimina tutti i controlli non bloccati

Su un computer, con il pannello delle proprietà aperto: **Esc** lo chiude, **Canc** / **Backspace** elimina il controllo, **⌘D / Ctrl+D** lo duplica.

## Bloccare i controlli {#lock-controls}

Un controllo **bloccato** non si può spostare né eliminare, così non lo sposti per sbaglio mentre guidi o modifichi. Mostra l'icona di un lucchetto. Blocca un controllo dal suo menu o con **Bloccare il controller** nelle sue impostazioni, oppure blocca tutto con **Blocca tutto**.

## Nomi dei controlli {#control-names}

Ogni controllo ha un nome breve mostrato sulla sua cornice in modalità di modifica, come **JOY1**, **SLDR2** o **BTN1**. Il programma si riferisce ai controlli con questi nomi: nei Collegamenti rapidi il blocco di ingresso riporta *JOY1* e nei Blocchi logici scegli *JOY1* nel menu del blocco.

## Eliminare {#delete}

Usa **Elimina** nel menu o il pulsante del cestino nelle proprietà. I controlli bloccati non si possono eliminare. Un controllo usato dal programma non si può eliminare finché non rimuovi le sue righe o i suoi blocchi.
