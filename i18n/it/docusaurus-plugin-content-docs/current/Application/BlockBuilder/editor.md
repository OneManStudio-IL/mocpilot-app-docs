---
id: Editor
title: Lavorare nell'editor
description: "Barra superiore, palette, trascinamento dei blocchi, zoom, menu contestuali, annullamento, Monitor, Zaino, Impostazioni dell'editor e Assistente IA in Blocchi logici."
---

import Screenshot from '@site/src/components/Screenshot';

# Lavorare nell'editor {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Editor di Blocchi logici" width={900} />

## Barra superiore {#top-bar}

- **Computer ed editor web**: **Home** e i menu a sinistra, con **Annulla** e **Ripeti** accanto. Al centro: il nome del profilo e **Dashboard**, **Hub** e **Gamepad**. A destra: **Assistente IA**, [**Zaino**](/docs/Application/BlockBuilder/Backpack), **Monitor**, **Altro** (⋯), **Controllo remoto** e il pulsante arancione **Avvia**. In una finestra stretta, i pulsanti che non ci stanno passano in **Altro**, che contiene sempre **Impostazioni dell'editor…**.
- **Smartphone e tablet**: **Home** a sinistra; a destra **Annulla**, **Ripeti**, **Dashboard**, **I miei hub**, **Controllo remoto**, **Altro** e **Avvia / Ferma**. **Altro** contiene **Assistente IA**, **Zaino**, **Monitor**, **Gamepad** e **Impostazioni dell'editor**.

Vedi [Smartphone, tablet e desktop](/docs/Introducing/Layouts#editor-top-bar) per sapere come si ripiega la barra in una finestra stretta.

## Palette e area del programma {#palette-and-program-area}

- Mostra o nascondi la palette con **Vista → Palette dei blocchi** (⌘P / Ctrl+P).
- Scegli una categoria, trascina un blocco nell'area del programma e rilascialo sotto un altro blocco per agganciarlo. Un'anteprima mostra dove si aggancerà.
- Trascina un'intera pila prendendola dal blocco in cima; trascina un blocco dal centro per prendere quel blocco e tutto ciò che sta sotto.
- Per eliminare dei blocchi, trascinali di nuovo sulla palette.
- Variabili, liste, messaggi e I miei blocchi si creano con i pulsanti delle rispettive categorie (**Creare una variabile**, **Creare una lista**, **Aggiungi messaggio**, **Crea un blocco**) oppure da **Modifica → Nuova variabile… / Nuova lista… / Nuovo messaggio… / Nuovo blocco…**. Anche suoni e veicoli hanno i loro pulsanti: **Aggiungi suono** in [Suoni](/docs/Application/BlockBuilder/Blocks/Sounds) e **Crea veicolo** in [Simulatore](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoom e scorrimento {#zoom-and-scroll}

- Avvicina o allontana due dita (su un touchscreen) oppure usa **Vista → Ingrandisci / Riduci / Dimensioni reali** (⌘+ / ⌘− / ⌘0).
- Trascina un punto vuoto per spostarti.
- Il menu contestuale di un punto vuoto contiene **Ingrandisci**, **Rimpicciolisci**, **Reimposta zoom** ed **Elimina N blocchi**.

## Menu del blocco {#block-menu}

Tieni premuto (su un touchscreen) o fai clic con il tasto destro su un blocco:

- **Modificare**: cambia i suoi valori;
- **Duplica**;
- **Elimina blocco** / **Elimina N blocchi**;
- **Aggiungi allo zaino**: conserva il blocco e tutto ciò che vi è agganciato nello [zaino](/docs/Application/BlockBuilder/Backpack);
- **Informazioni sul blocco**: apre la descrizione del blocco in questa documentazione;
- **Esporta blocco come SVG** / **Esporta tutti i blocchi come SVG**: salva un'immagine per un tutorial o un post sul forum.

<Screenshot name="blocks-block-menu" alt="Menu contestuale di un blocco in Blocchi logici" width={900} />

Un blocco collegato a un controllo della dashboard si può eliminare solo dopo averlo scollegato da quel controllo.

## Annulla e ripeti {#undo-and-redo}

Usa **Modifica → Annulla / Ripeti** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) oppure i pulsanti **Annulla** e **Ripeti** nella barra superiore (accanto ai menu su un computer).

- Un trascinamento è un passaggio; le modifiche rapide dello stesso valore si uniscono in un unico passaggio.
- L'annullamento funziona anche mentre il programma è in esecuzione.
- Anche creare o eliminare variabili, liste, messaggi o I miei blocchi è un passaggio; annullarlo ferma il programma in esecuzione.
- I valori memorizzati in variabili e liste non vengono annullati.
- La dashboard ha una propria cronologia di annullamento.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M, **Vista → Monitor**) mostra i valori attuali di variabili e liste mentre il programma è in esecuzione. Il suo pulsante si trova nella barra superiore su un computer e in **Altro** su smartphone o tablet. Su un computer puoi aprirlo in una finestra separata. È di grande aiuto quando cerchi un errore.

## Zaino {#backpack}

Lo **Zaino** (⇧⌘B / Ctrl+Shift+B, **Vista → Zaino**) conserva pile di blocchi da riutilizzare in qualsiasi profilo: scegli **Aggiungi allo zaino** nel menu di un blocco, poi tocca o trascina l'elemento per inserirlo in qualsiasi programma. Il suo pulsante si trova accanto a **Monitor** nella barra superiore, oppure in **Altro**. Vedi [Zaino](/docs/Application/BlockBuilder/Backpack).

<Screenshot name="blocks-monitor" alt="Monitor con variabili e una lista durante l'esecuzione del programma" width={900} />

## Impostazioni dell'editor {#editor-settings}

Aprile da **Altro → Impostazioni dell'editor** nella barra superiore (su un computer anche da **Programma → Impostazioni dell'editor…**).

- **Avvia blocco con clic**: facendo clic su un blocco lo esegui, così puoi provarlo da solo; se il programma è fermo, lo avvia anche.
- **Apri il programma al centro**: quando apri un profilo, il programma viene mostrato al 100% al centro dell'area di lavoro (oppure dal suo angolo in alto a sinistra, se è più grande), indipendentemente da dove lo avevi lasciato durante la modifica. Vale per tutti i profili su questo dispositivo.
- **Arresta le porte dell'hub quando il programma si ferma**: ferma tutti i motori e spegne tutte le luci quando premi **Ferma**. Lasciala attiva, a meno che i motori non debbano mantenere il loro stato.
- **Seleziona livello blocchi**: Principiante, Avanzato o Guru.

<Screenshot name="blocks-editor-settings" alt="Pannello Impostazioni dell'editor in Blocchi logici" width={900} />

## Livelli dei blocchi {#block-levels}

| Livello | Mostra |
|---|---|
| **Principiante** | i blocchi più semplici; una palette essenziale per i bambini e per i primi passi |
| **Avanzato** | i blocchi di logica e per i dispositivi più comuni |
| **Guru** | l'insieme completo dei blocchi |

Il livello viene salvato nel profilo. I blocchi già presenti nel programma continuano a funzionare quando abbassi il livello.

## Assistente IA {#ai-builder}

Con [MocPilot Pro](/docs/Application/Account/Pro), l'**Assistente IA** (il pulsante con le scintille nella barra superiore, **Altro → Assistente IA** su smartphone o tablet, ⇧⌘I / Ctrl+Shift+I) configura gli hub, la dashboard e il programma a partire da una descrizione che scrivi o detti, e poi modifica il profilo come richiedi. Funziona nei profili Blocchi logici e Collegamenti rapidi. Vedi [Assistente IA](/docs/Application/Profiles/AiBuilder).

### Come ottenere un buon risultato {#ai-builder-tips}

Indica l'hub, di' che cosa è collegato a ogni porta e che cosa deve fare, e come vuoi controllarlo. Vedi [Scrivere una buona richiesta](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Menu su desktop {#desktop-menus}

| Menu | Voci |
|---|---|
| File | Chiudi profilo (⌘W) |
| Modifica | Annulla, Ripeti, Nuova variabile…, Nuova lista…, Nuovo messaggio…, Nuovo blocco… |
| Vista | Palette dei blocchi (⌘P), [Zaino](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Monitor (⇧⌘M), Ingrandisci, Riduci, Dimensioni reali |
| Programma | Avvia (⌘R), Ferma (⌘.), Impostazioni dell'editor… |

Su Windows usa Ctrl al posto di ⌘ e Shift al posto di ⇧.
