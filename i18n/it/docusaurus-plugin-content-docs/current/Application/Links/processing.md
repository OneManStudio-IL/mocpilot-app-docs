---
id: Processing
title: Elaborazione
description: "Blocchi di elaborazione di Collegamenti rapidi: Inverti, Limite, Zona morta, Soglia, Graduale e Alterna."
---

# Elaborazione {#processing}

I blocchi di elaborazione si trovano tra l'ingresso e l'operazione e modificano il valore lungo il percorso. Una riga può non averne nessuno, averne uno o più, in qualsiasi ordine. Impostazioni e valori ammessi: [Blocchi di elaborazione](/docs/Application/Links/Blocks/ProcessingBlocks).

| Blocco | Che cosa fa |
|---|---|
| [Inverti](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | inverte il verso, oppure scambia acceso e spento |
| [Limite](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | limita il valore |
| [Zona morta](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignora i piccoli movimenti attorno allo zero |
| [Soglia](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | trasforma un valore in acceso/spento |
| [Graduale](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | accelera e rallenta gradualmente |
| [Alterna](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | premi una volta per accendere, di nuovo per spegnere |

## Inverti {#invert}

Il motore gira nel verso sbagliato? Aggiungi **Inverti** invece di ricostruire il modello. Per due motori che devono girare in versi opposti (cingolo sinistro e destro, due lati di un cambio), crea due righe con lo stesso ingresso e metti Inverti in una delle due.

## Limite {#limit}

Rende il modello più lento e più facile da controllare: con **Massimo** al 50 %, la levetta a fondo corsa dà metà velocità. Ideale per i bambini, la guida al chiuso e i meccanismi delicati.

## Zona morta {#dead-zone}

Un joystick raramente torna esattamente a zero, quindi un motore può ronzare o muoversi lentamente. **Zona morta** considera zero i valori piccoli. Il 10 % è un buon punto di partenza.

## Soglia {#threshold}

Trasforma un valore in acceso/spento: «acceso quando il valore è **Sopra** il 20 %». Con un sensore, *Sensore di distanza* → *Soglia* (Sotto, 20 %) è acceso quando qualcosa è vicino. Soglia ha una piccola isteresi, quindi non sfarfalla al limite.

## Graduale {#smooth}

Parte e si ferma gradualmente, come un veicolo vero. Accelerazione e decelerazione si impostano separatamente: un camion pesante può impiegare 2 s per accelerare e 0,5 s per fermarsi. Su una luce, Graduale la accende e la spegne in dissolvenza.

## Alterna {#toggle}

Trasforma un pulsante in un interruttore: premi una volta per accendere, premi di nuovo per spegnere. *Pulsante* → *Alterna* → *Luce*.

## Consigli {#tips}

- L'ordine conta: *Zona morta → Limite → Graduale* è una buona catena per la guida.
- Un blocco non adatto al segnale non si aggancia: Alterna richiede un ingresso acceso/spento; Zona morta e Soglia richiedono un valore.
- Osserva i valori in tempo reale mentre il programma è in esecuzione per vedere che cosa fa ogni blocco.
