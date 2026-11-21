---
id: Indicators
title: Indicatori e monitor
description: "Mostra batteria, velocità, inclinazione, valori dei sensori e testo sulla dashboard."
---

# Indicatori e monitor {#indicators-and-monitors}

I monitor mostrano informazioni sulla dashboard mentre guidi: livello della batteria, velocità, inclinazione, distanza da un ostacolo, marcia o modalità attuale.

| Monitor | Mostra | Tema |
|---|---|---|
| **Monitor** | un testo o un numero | tutti i temi |
| **Livello della batteria** | un indicatore di livello | temi a pagamento |
| **Velocimetro** | un indicatore di velocità | temi a pagamento |
| **Monitor di inclinazione** | beccheggio e rollio di un modello | temi a pagamento |

I monitor mostrano solo informazioni; non si possono usare per guidare. È il programma a decidere cosa mostrano.

## Nei Collegamenti rapidi {#in-quick-links}

Usa l'uscita **Indicatore**. La riga termina con l'indicatore invece che con un hub:

- *Hub* (Batteria) → *Indicatore* (Livello della batteria): la batteria dell'hub su un indicatore.
- *Hub* (Velocità del motore, porta A) → *Indicatore* (Velocimetro).
- *Hub* (Inclinazione: beccheggio) → *Indicatore* (Monitor di inclinazione, Inclinazione X), e una seconda riga per Inclinazione: rollio → Inclinazione Y.
- *Hub* (Tensione della batteria) → *Indicatore* (Monitor): mostra il valore con la sua unità di misura, ad esempio «7.85 V».

L'indicatore mostra il valore così com'è, quindi la riga non ha un'operazione. Vedi [Indicatore](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## Nei Blocchi logici {#in-logic-blocks}

Usa i blocchi dei controller su schermo:

- *mostra … sul monitor …* per il Monitor;
- *imposta … sul monitor …* per il Livello della batteria e il Velocimetro;
- *imposta … sul monitor beccheggio / rollio …* per il Monitor di inclinazione.

Puoi mostrare tutto ciò che puoi calcolare: il valore di un sensore, una variabile, un testo come «Marcia 2». Vedi [Controller su schermo](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Suggerimenti {#tips}

- Metti il monitor della batteria in un angolo dove le dita non lo coprono.
- Per messaggi più lunghi, usa un Monitor su più righe con l'eccedenza **Testo scorrevole** o **Scorri**.
- Il programma può cambiare il colore della maggior parte dei controlli, ad esempio per far diventare rosso un pulsante quando la batteria è scarica.
