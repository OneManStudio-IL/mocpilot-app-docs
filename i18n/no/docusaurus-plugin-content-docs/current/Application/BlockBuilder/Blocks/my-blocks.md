---
id: MyBlocks
title: Mine blokker
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mine blokker {#my-blocks}

Med Mine blokker kan du lage dine egne gjenbrukbare blokker.
Det fungerer som en funksjon i vanlig programmering: Du beskriver oppførselen én gang og bruker den så mange steder du vil.

## Blokkene {#the-blocks}

### `definer …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Trykk på **Lag en blokk** øverst i kategorien for å lage en ny blokk. Programområdet får da en `definer`-hatteblokk med navnet på blokken din: Blokkene du fester under den, er det blokken din gjør.

- Typisk bruk: samle gjentatt logikk i én blokk med et tydelig navn.

### Din blokk (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Hver blokk du lager, vises i paletten under sitt eget navn. Når du bruker den, kjøres blokkene som er festet til `definer`-blokken.

- Type: stabelblokk
- Typisk bruk: bruke den samme logikken flere steder uten å kopiere stabler.

## Eksempler med ulike innganger {#examples-with-different-inputs}

Egne blokker med ulike sett av innganger:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Bruke en egen blokk i et program {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Her brukes den egne blokken under `når programmet starter`, og `definer`-stabelen inneholder motorlogikken som blokken kjører.

- Vanlig mønster: bruk blokkene dine i hendelsesskript.
- Fordel: én definisjon, mange steder som bruker den.

## Blokkeditoren {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

I editoren **Lag en blokk** utformer du hvordan blokken din ser ut: Legg til etiketter (**Legg til etikett**) og innganger (**Legg til input**: *tall eller tekst* eller *boolean*). Inne i `definer`-stabelen fungerer inngangene som variabler som holder verdiene som sendes til blokken.

## Hvorfor bruke Mine blokker {#why-use-my-blocks}

- Gjenbruk: skriv én gang, bruk mange ganger.
- Lesbarhet: ett meningsfullt navn i stedet for lange, gjentatte stabler.
- Enkle endringer: rett logikken på ett sted i stedet for i hver kopi.
- Struktur: del et stort program i små, logiske deler.

## Merknader {#notes}

- Egne blokker hører til profilen og kan brukes hvor som helst i profilens program.
- Gi blokkene navn som sier hva de gjør, ikke hvordan de gjør det.
- En blokk som kaller seg selv, kan gå i en evig løkke; editoren advarer deg om det.
