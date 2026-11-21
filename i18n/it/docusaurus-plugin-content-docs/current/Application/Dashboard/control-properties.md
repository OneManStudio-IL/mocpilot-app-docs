---
id: ControlProperties
title: Proprietà dei controlli
description: "Cambia dimensione, colore, icona, aspetto, comportamento e tema di un controllo nelle sue proprietà."
---

import Screenshot from '@site/src/components/Screenshot';

# Proprietà dei controlli {#control-properties}

In modalità di modifica, tocca (fai clic su) un controllo per aprirne le proprietà.

- **Smartphone e tablet**: un pannello sopra la dashboard; tocca fuori dal pannello per chiuderlo.
- **Computer**: un pannello laterale; puoi continuare a lavorare sulla dashboard mentre è aperto.

<Screenshot name="controller-properties" alt="Pannello delle proprietà del controllo con le schede Stile e Impostazioni" width={900} />

L'intestazione mostra il nome del controllo (ad esempio **JOY1**), il pulsante del cestino, il menu di duplicazione e **OK**.

## Scheda Stile {#style-tab}

- **Dimensione**: S, M o L. Vedi [dimensioni](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Colore di accento**: il colore principale del controllo.
- **Icona**: un'immagine sul controllo (pulsanti, interruttori, monitor), scelta tra più di 260 icone.
- **Aspetto**: l'aspetto di un [controllo speciale](/docs/Application/Dashboard/SpecialControls), ad esempio lo stile di un volante.
- Opzioni del tema, a seconda del tema: ad esempio **Carbone colorato**, **Cornici colorate** e **Mostra linee di corsa** in Corse, **Numero di segmenti dell'indicatore** in Macchine da costruzione, **Visualizza valori** in Aura.
- **Cambia tema**: passa il controllo a un altro tema che possiedi e che ha lo stesso tipo di controllo.

## Scheda Impostazioni {#settings-tab}

Impostazioni comuni:

- **Bloccare il controller**: un controllo bloccato non si può spostare né eliminare.
- **Interattività**: un controllo non interattivo non registra le pressioni.

Impostazioni di ciascun tipo:

| Controllo | Impostazioni |
|---|---|
| Joystick | **Tipo di assi**: Entrambi gli assi (X, Y), Solo orizzontale (X), Solo verticale (Y) |
| Slider, Slider ver. | **Torna a zero**, **Valori negativi**, **Valore del passo** |
| Manopola | **Scatti (0 = continuo)** (0–24), **Zero al centro (-100..100)** |
| Interruttore a passi, Interruttore a passi ver. | **Conteggio dei passi** (1–100), **Valori negativi**, **Abilita reset** |
| Monitor | **Layout del testo**, **Eccedenza del testo**, **Righe massime**, **Direzione di scorrimento**, **Velocità di scorrimento**, **Mostra barra di scorrimento**, **Scorrimento interattivo**, **Allineamento del testo**, **Scala del testo** |
| Monitor di inclinazione | **Invertire l'inclinazione**, **Invertire il rotolamento** |
| Volante | **Angolo del volante** (20–120°), **Effetti sonori** |
| Pedali | **Effetti sonori** |
| Cambio manuale | **Numero di marce** (2–6) |
| Cambio automatico | **Numero di marce** (2–8) |
| Frecce | **Le uscite delle frecce lampeggiano**; nella scheda Stile, **Icona: left**, **Icona: light**, **Icona: right** |

Le impostazioni numeriche hanno un pulsante **Ripristina** che riporta il valore predefinito.

## Modificare le proprietà dal programma {#change-properties-from-the-program}

Nei Blocchi logici, i blocchi possono modificare un controllo mentre il programma è in esecuzione: impostarne il colore, attivarne o disattivarne l'interattività, mostrare valori sui monitor. Vedi [Blocchi dei controller su schermo](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
