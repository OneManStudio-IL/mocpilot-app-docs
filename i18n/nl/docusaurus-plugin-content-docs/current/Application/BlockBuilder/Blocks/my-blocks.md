---
id: MyBlocks
title: Mijn blokken
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mijn blokken {#my-blocks}

Met Mijn blokken maak je je eigen herbruikbare blokken.
Het werkt als een functie in gewoon programmeren: je beschrijft het gedrag één keer en gebruikt het op zoveel plekken als je wilt.

## De blokken {#the-blocks}

### `definiëren …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Druk op **Maak een blok** bovenaan de categorie om een nieuw blok te maken. In het programmagebied verschijnt dan een hoedblok `definiëren` met de naam van je blok: de blokken die je eronder vastmaakt, bepalen wat je blok doet.

- Gebruikelijke toepassing: herhaalde logica in één blok met een duidelijke naam zetten.

### Je eigen blok (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Elk blok dat je maakt, verschijnt onder zijn naam in het palet. Als je het gebruikt, worden de blokken uitgevoerd die aan het bijbehorende blok `definiëren` vastzitten.

- Type: stapelblok
- Gebruikelijke toepassing: dezelfde logica op meerdere plekken gebruiken zonder stapels te kopiëren.

## Voorbeelden met verschillende invoer {#examples-with-different-inputs}

Eigen blokken met verschillende sets invoer:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Een eigen blok in een programma gebruiken {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Hier wordt het eigen blok gebruikt onder `wanneer het programma start`, en bevat de stapel `definiëren` de motorlogica die het uitvoert.

- Gebruikelijk patroon: gebruik je blokken in gebeurtenisscripts.
- Voordeel: één definitie, veel plekken waar je haar gebruikt.

## De blokeditor {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

In de editor **Maak een blok** ontwerp je hoe je blok eruitziet: voeg labels toe (**Voeg een label toe**) en invoer (**Voeg een invoer toe**: *nummer of tekst* of *boolean*). Binnen de stapel `definiëren` werkt de invoer als variabelen die de waarden bevatten die aan het blok worden doorgegeven.

## Waarom Mijn blokken gebruiken {#why-use-my-blocks}

- Hergebruik: één keer schrijven, vaak gebruiken.
- Leesbaarheid: één betekenisvolle naam in plaats van lange herhaalde stapels.
- Makkelijk aanpassen: corrigeer de logica op één plek in plaats van in elke kopie.
- Structuur: verdeel een groot programma in kleine logische delen.

## Opmerkingen {#notes}

- Eigen blokken horen bij het profiel en kunnen overal in het programma worden gebruikt.
- Geef blokken namen die zeggen wat ze doen, niet hoe ze het doen.
- Een blok dat zichzelf aanroept, kan eindeloos blijven herhalen; de editor waarschuwt je daarvoor.
