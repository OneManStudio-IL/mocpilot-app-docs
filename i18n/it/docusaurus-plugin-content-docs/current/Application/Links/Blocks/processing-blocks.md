---
id: ProcessingBlocks
title: Blocchi di elaborazione
description: "Riferimento di tutti i blocchi di elaborazione di Collegamenti rapidi: Inverti, Limite, Zona morta, Soglia, Graduale e Alterna."
---

# Blocchi di elaborazione {#processing-blocks}

I blocchi di elaborazione si trovano tra l'ingresso e l'operazione (o l'indicatore) e modificano il segnale lungo il percorso. Una riga può averne un numero qualsiasi, in qualsiasi ordine. Un blocco che non accetta il segnale in arrivo non si aggancia; in un file viene segnalato come «… non funziona con questo controller». Come usarli: [Elaborazione](/docs/Application/Links/Processing).

## Inverti {#mod-invert}

Inverte il segnale.

- Nessuna impostazione.
- Accetta: valore o acceso/spento. Fornisce: lo stesso tipo.
- Valore: cambia il segno (0,7 diventa −0,7). Acceso/spento: acceso diventa spento e spento diventa acceso.

## Limite {#mod-limit}

Riduce il valore in scala, così l'escursione massima non supera il massimo impostato.

- **Massimo**: 20, 30, 40, 50, 60, 70, 80 o 90 % (predefinito 50 %).
- Accetta: valore o acceso/spento. Fornisce: valore (un pulsante limitato dà 0 o il massimo).

## Zona morta {#mod-deadzone}

Considera zero i valori piccoli attorno allo zero; il resto viene riportato all'intervallo completo, quindi l'escursione massima dà ancora 1.

- **Zona**: 5, 10, 15, 20 o 30 % (predefinito 10 %).
- Accetta: valore. Fornisce: valore.

## Soglia {#mod-threshold}

Trasforma un valore in acceso/spento.

- **Attivo quando il valore è**: **Sopra** (predefinito) o **Sotto**.
- **Livello (del fondo scala)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 o 90 % (predefinito 20 %).
- Accetta: valore. Fornisce: acceso/spento.
- Una piccola isteresi (2 % del fondo scala) evita che l'uscita sfarfalli quando il valore oscilla attorno al livello.

## Graduale {#mod-smooth}

Si avvicina gradualmente al valore in arrivo invece di saltarci.

- **Accelerazione (fino a piena velocità)**: **Istantaneo**, 0,25, 0,5, 1, 2 o 3 s (predefinito 0,5 s): il tempo da 0 al massimo, allontanandosi dallo zero.
- **Decelerazione (fino all'arresto)**: le stesse scelte (predefinito 0,5 s): il tempo dal massimo di nuovo a 0.
- Accetta: valore o acceso/spento. Fornisce: valore (un pulsante con Graduale sale e scende in rampa).

## Alterna {#mod-toggle}

Trasforma un pulsante in un interruttore: ogni pressione commuta l'uscita tra acceso e spento. L'uscita parte spenta.

- Nessuna impostazione.
- Accetta: acceso/spento. Fornisce: acceso/spento.
