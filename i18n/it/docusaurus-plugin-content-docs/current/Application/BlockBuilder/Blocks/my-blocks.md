---
id: MyBlocks
title: I miei blocchi
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# I miei blocchi {#my-blocks}

I miei blocchi ti permettono di creare blocchi personalizzati riutilizzabili.
Funzionano come una funzione nella programmazione tradizionale: descrivi il comportamento una volta e lo usi in tutti i punti che vuoi.

## I blocchi {#the-blocks}

### `definire …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Premi **Crea un blocco** in cima alla categoria per creare un nuovo blocco. Nell'area del programma compare un blocco cappello `definire` con il nome del tuo blocco: i blocchi che agganci sotto di esso sono ciò che fa il tuo blocco.

- Uso tipico: raccogliere la logica ripetuta in un unico blocco con un nome chiaro.

### Il tuo blocco (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Ogni blocco che crei compare nella palette con il suo nome. Usarlo esegue i blocchi agganciati al suo blocco `definire`.

- Tipo: blocco comando
- Uso tipico: usare la stessa logica in più punti senza copiare le pile.

## Esempi con ingressi diversi {#examples-with-different-inputs}

Blocchi personalizzati con diversi insiemi di ingressi:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Usare un blocco personalizzato in un programma {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Qui il blocco personalizzato è usato sotto `quando il programma inizia`, e la pila `definire` contiene la logica dei motori che esegue.

- Schema abituale: usare i tuoi blocchi negli script degli eventi.
- Vantaggio: una sola definizione, tanti punti in cui usarla.

## L'editor dei blocchi {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Nell'editor **Crea un blocco** progetti l'aspetto del tuo blocco: aggiungi etichette (**Aggiungi un’etichetta**) e ingressi (**Aggiungi un input**: *numero o testo* oppure *booleano*). All'interno della pila `definire`, gli ingressi funzionano come variabili che contengono i valori passati al blocco.

## Perché usare I miei blocchi {#why-use-my-blocks}

- Riutilizzo: scrivi una volta, usa tante volte.
- Leggibilità: un nome significativo invece di lunghe pile ripetute.
- Modifiche semplici: correggi la logica in un solo punto invece che in ogni copia.
- Struttura: suddividi un programma grande in piccole parti logiche.

## Note {#notes}

- I blocchi personalizzati appartengono al profilo e si possono usare ovunque nel suo programma.
- Dai ai blocchi nomi che dicano che cosa fanno, non come lo fanno.
- Un blocco che richiama sé stesso può entrare in un ciclo infinito; l'editor ti avvisa.
