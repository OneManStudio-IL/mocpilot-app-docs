---
id: MyBlocks
title: Mine blokke
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mine blokke {#my-blocks}

Med Mine blokke kan du lave dine egne blokke, som kan genbruges.
Det fungerer som en funktion i almindelig programmering: Du beskriver opførslen én gang og bruger den så mange steder, du vil.

## Blokkene {#the-blocks}

### `definere …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Tryk på **Opret blok** øverst i kategorien for at oprette en ny blok. Programområdet får så en `definere`-hatteblok med din bloks navn: De blokke, du sætter fast under den, er det, din blok gør.

- Typisk brug: saml gentaget logik i én blok med et tydeligt navn.

### Din blok (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Hver blok, du laver, vises i paletten under sit navn. Når du bruger den, kører de blokke, der er sat fast under dens `definere`-blok.

- Type: stakblok
- Typisk brug: brug den samme logik flere steder uden at kopiere stakke.

## Eksempler med forskellige input {#examples-with-different-inputs}

Brugerdefinerede blokke med forskellige sæt input:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Brug af en brugerdefineret blok i et program {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Her bruges den brugerdefinerede blok under `når programmet starter`, og `definere`-stakken indeholder den motorlogik, den kører.

- Almindeligt mønster: brug dine blokke i hændelsesscripts.
- Fordel: én definition, mange steder, der bruger den.

## Blokeditoren {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

I editoren **Opret blok** bestemmer du, hvordan din blok ser ud: Tilføj etiketter (**Tilføj etiket**) og input (**Tilføj input**: *tal eller tekst* eller *boolean*). Inde i `definere`-stakken fungerer inputtene som variabler, der indeholder de værdier, der sendes til blokken.

## Hvorfor bruge Mine blokke {#why-use-my-blocks}

- Genbrug: skriv én gang, brug mange gange.
- Læsbarhed: ét meningsfuldt navn i stedet for lange gentagne stakke.
- Nemme ændringer: ret logikken ét sted i stedet for i hver kopi.
- Struktur: del et stort program op i små logiske dele.

## Bemærkninger {#notes}

- Brugerdefinerede blokke hører til profilen og kan bruges overalt i dens program.
- Giv blokkene navne, der siger, hvad de gør, ikke hvordan de gør det.
- En blok, der kalder sig selv, kan køre i ring for evigt; editoren advarer dig om det.
