---
id: ControlTypes
title: Tipi di controlli
description: "Joystick, pad direzionale, slider, manopola, pulsanti, interruttori, interruttori a passi, monitor e controlli speciali."
---

# Tipi di controlli {#control-types}

Ogni [tema](/docs/Application/Themes/ThemesOverview) disegna lo stesso insieme di tipi di controlli nel proprio stile. Il tema gratuito **Base** ne ha nove; ogni tema a pagamento aggiunge la **Manopola** e tre monitor grafici. Volanti, pedali, leve del cambio e gli altri [controlli speciali](/docs/Application/Dashboard/SpecialControls) sono prodotti separati.

| Controllo | Nome sulla dashboard | Cosa fornisce al programma | Disponibile in |
|---|---|---|---|
| Joystick | JOY | assi X e Y | tutti i temi |
| Pad direzionale | DPAD | pulsanti su / giù / sinistra / destra | tutti i temi |
| Slider | SLDR | un valore | tutti i temi |
| Slider ver. | VSLDR | un valore | tutti i temi |
| Manopola | DIAL | un valore | temi a pagamento |
| Bottone | BTN | premuto / rilasciato | tutti i temi |
| Interruttore | SWCH | acceso / spento | tutti i temi |
| Interruttore a passi | STPR | un numero di passo | tutti i temi |
| Interruttore a passi ver. | VSTPR | un numero di passo | tutti i temi |
| Monitor | MNTR | mostra un testo o un valore | tutti i temi |
| Livello della batteria | MNTBT | mostra un livello | temi a pagamento |
| Velocimetro | MNTSP | mostra una velocità | temi a pagamento |
| Monitor di inclinazione | MNTLT | mostra beccheggio e rollio | temi a pagamento |
| Volante, pedali, cambi, freno a mano, frecce, manipolatore del treno | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | vedi [Controlli speciali](/docs/Application/Dashboard/SpecialControls) | prodotti speciali |

Il nome sulla dashboard riceve un numero: il primo joystick è **JOY1**, il secondo **JOY2**.

## Joystick {#joystick}

Una levetta che torna al centro da sola. Fornisce un valore **X** (sinistra/destra) e un valore **Y** (su/giù); il centro è zero.

- **Tipo di assi**: **Entrambi gli assi (X, Y)**, **Solo orizzontale (X)** o **Solo verticale (Y)**. Un joystick a un solo asse è più comodo quando serve solo per avanzare o solo per sterzare.
- Uso tipico: Y per la trazione e X per lo sterzo, oppure un joystick per ogni cingolo di un carro armato.

## Pad direzionale {#directional-pad}

Quattro pulsanti: su, giù, sinistra e destra. Ognuno è premuto o rilasciato. Nei Collegamenti rapidi un asse del pad direzionale fornisce −1, 0 o +1 (**Su / giù** o **Sinistra / destra**), utile per movimenti passo passo come il gancio di una gru.

## Slider e Slider ver. {#slider-and-ver-slider}

Una maniglia che scorre lungo una guida orizzontale o verticale.

- **Torna a zero**: la maniglia torna indietro quando la lasci (come un acceleratore) invece di restare dove l'hai lasciata (come l'impostazione della velocità di un treno).
- **Valori negativi**: lo zero è al centro, quindi lo slider fornisce valori negativi e positivi (retromarcia e marcia avanti).
- **Valore del passo**: lo slider si muove a passi.

## Manopola {#rotary-knob}

Una manopola rotonda, come quella del volume, nel gruppo **Sliders** di ogni tema a pagamento. Ruotala con un dito attorno al suo centro: gira di circa 135° in ciascun verso e resta dove la lasci.

- **Scatti (0 = continuo)** (0–24): con gli scatti, la manopola passa da una posizione all'altra con un clic.
- **Zero al centro (-100..100)**: la manopola fornisce da −100 a 100 con lo zero al centro, invece che da 0 a 100.
- Blocchi: *quando manopola … viene ruotata / premuta / rilasciata / portata al minimo / portata al massimo*, *valore manopola …*, *manopola … premuta / al minimo / al massimo?* Vedi [Controller su schermo](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- Nei Collegamenti rapidi la manopola funziona come uno [slider](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Il tema Base non ha la manopola. Dato che ogni tema a pagamento ne ha una, **Cambia tema** fa passare una manopola all'aspetto di un altro tema.

## Bottone {#button}

Premuto finché lo tieni, rilasciato quando lo lasci. Usalo per un clacson o un breve movimento, oppure con il blocco **Alterna** nei Collegamenti rapidi per accendere e spegnere qualcosa.

## Interruttore {#switch}

Resta acceso o spento: toccalo per cambiare stato. Usalo per luci, modalità o il blocco di un argano.

## Interruttore a passi e Interruttore a passi ver. {#step-switch-and-ver-step-switch}

Un controllo **−** / **+** che conta i passi, come le marce o i livelli di velocità di un treno.

- **Conteggio dei passi**: da 1 a 100 (predefinito 10).
- **Valori negativi**: consente passi sotto lo zero (livelli di retromarcia).
- **Abilita reset**: toccando il valore lo si riporta a zero.

## Monitor {#monitor}

Mostra un testo o un numero proveniente dal programma: velocità, batteria, il nome di una modalità, il valore di un sensore.

- **Layout del testo** (riga singola o più righe), **Eccedenza del testo** (Taglia, A capo, Testo scorrevole, Scorri), **Righe massime**, opzioni di scorrimento, **Allineamento del testo** e **Scala del testo**.

## Livello della batteria, Velocimetro, Monitor di inclinazione {#battery-level-speedometer-tilt-monitor}

Indicatori grafici dei temi a pagamento. È il programma a impostarne il valore: la batteria di un hub, la velocità di un motore, l'inclinazione di un hub. **Monitor di inclinazione** ha **Invertire l'inclinazione** e **Invertire il rotolamento**. Vedi [Indicatori e monitor](/docs/Application/Dashboard/Indicators).

## Controlli speciali {#special-controls}

Un volante, i pedali, un cambio manuale o automatico, un freno a mano, una leva delle frecce e un manipolatore del treno. Ognuno è un prodotto separato con molti aspetti. Vedi [Controlli speciali](/docs/Application/Dashboard/SpecialControls).

## Interattività {#interactivity}

Ogni controllo interattivo ha **Interattività** (attiva per impostazione predefinita). Un controllo non interattivo non reagisce al tocco. Il programma può attivare e disattivare l'interattività, ad esempio per bloccare l'acceleratore finché non è terminato un controllo all'avvio.
