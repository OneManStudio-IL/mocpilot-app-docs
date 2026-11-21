---
id: MyBlocks
title: Moje bloky
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moje bloky {#my-blocks}

Moje bloky vám umožňujú vytvárať vlastné opakovane použiteľné bloky.
Fungujú ako funkcia v bežnom programovaní: správanie opíšete raz a použijete ho na ľubovoľnom počte miest.

## Bloky {#the-blocks}

### `definovať …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Nový blok vytvoríte stlačením **Vytvoriť blok** hore v kategórii. Na programovej ploche sa potom objaví klobúkový blok `definovať` s názvom vášho bloku: bloky, ktoré pripojíte pod neho, určujú, čo váš blok robí.

- Typické použitie: zhrnúť opakujúcu sa logiku do jedného bloku s jasným názvom.

### Váš blok (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Každý blok, ktorý vytvoríte, sa zobrazí v palete pod svojím názvom. Jeho použitím sa vykonajú bloky pripojené k jeho bloku `definovať`.

- Typ: príkazový blok
- Typické použitie: použiť rovnakú logiku na viacerých miestach bez kopírovania stĺpcov.

## Príklady s rôznymi vstupmi {#examples-with-different-inputs}

Vlastné bloky s rôznymi sadami vstupov:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Použitie vlastného bloku v programe {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Tu je vlastný blok použitý pod blokom `keď program začne` a stĺpec `definovať` obsahuje logiku motora, ktorú vykonáva.

- Obvyklý postup: používajte svoje bloky v skriptoch udalostí.
- Výhoda: jedna definícia, mnoho miest, kde sa používa.

## Editor blokov {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

V editore **Vytvoriť blok** navrhnete, ako bude váš blok vyzerať: pridajte popisy (**Pridať štítok**) a vstupy (**Pridať vstup**: *číslo alebo text* alebo *boolean*). V stĺpci `definovať` fungujú vstupy ako premenné, ktoré obsahujú hodnoty odovzdané bloku.

## Prečo používať Moje bloky {#why-use-my-blocks}

- Opakované použitie: napíšete raz, použijete mnohokrát.
- Čitateľnosť: jeden výstižný názov namiesto dlhých opakovaných stĺpcov.
- Jednoduché zmeny: logiku opravíte na jednom mieste namiesto v každej kópii.
- Štruktúra: veľký program rozdelíte na malé logické časti.

## Poznámky {#notes}

- Vlastné bloky patria profilu a dajú sa použiť kdekoľvek v jeho programe.
- Blokom dávajte názvy, ktoré hovoria, čo robia, nie ako to robia.
- Blok, ktorý volá sám seba, sa môže zacykliť navždy; editor vás na to upozorní.
