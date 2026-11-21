---
id: MyBlocks
title: Mina block
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mina block {#my-blocks}

Med Mina block kan du skapa egna block som går att återanvända.
Det fungerar som en funktion i vanlig programmering: du beskriver beteendet en gång och använder det på så många ställen du vill.

## Blocken {#the-blocks}

### `definiera …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Tryck på **Skapa ett block** högst upp i kategorin för att skapa ett nytt block. Programområdet får då ett hattblock `definiera` med ditt blocks namn: blocken som du fäster under det är vad ditt block gör.

- Typisk användning: samla upprepad logik i ett block med ett tydligt namn.

### Ditt block (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Varje block du skapar visas i paletten under sitt namn. När det används körs blocken som är fästa vid dess `definiera`-block.

- Typ: stapelblock
- Typisk användning: använda samma logik på flera ställen utan att kopiera högar.

## Exempel med olika indata {#examples-with-different-inputs}

Egna block med olika uppsättningar indata:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Använda ett eget block i ett program {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Här används det egna blocket under `när programmet startar`, och `definiera`-högen innehåller motorlogiken som det kör.

- Vanligt mönster: använd dina block i händelseskript.
- Fördel: en definition, många ställen som använder den.

## Blockredigeraren {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

I redigeraren **Skapa ett block** utformar du hur ditt block ser ut: lägg till etiketter (**Lägg till etikett**) och indata (**Lägg till inmatning**: *nummer eller text* eller *boolean*). Inuti `definiera`-högen fungerar indata som variabler som innehåller värdena som skickas till blocket.

## Varför använda Mina block {#why-use-my-blocks}

- Återanvändning: skriv en gång, använd många gånger.
- Läsbarhet: ett meningsfullt namn i stället för långa upprepade högar.
- Enkla ändringar: rätta logiken på ett ställe i stället för i varje kopia.
- Struktur: dela upp ett stort program i små logiska delar.

## Att tänka på {#notes}

- Egna block hör till profilen och kan användas var som helst i dess program.
- Ge blocken namn som säger vad de gör, inte hur de gör det.
- Ett block som anropar sig självt kan loopa i all oändlighet; redigeraren varnar dig för det.
