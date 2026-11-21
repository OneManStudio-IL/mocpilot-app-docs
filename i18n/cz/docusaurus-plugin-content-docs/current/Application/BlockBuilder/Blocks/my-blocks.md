---
id: MyBlocks
title: Moje bloky
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moje bloky {#my-blocks}

Moje bloky vám umožní vytvářet vlastní opakovaně použitelné bloky.
Fungují jako funkce v běžném programování: chování popíšete jednou a použijete ho na libovolném počtu míst.

## Bloky {#the-blocks}

### `definovat …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Nový blok vytvoříte tlačítkem **Vytvořit blok** v horní části kategorie. Na programové ploše se pak objeví blok s čepicí `definovat` s názvem vašeho bloku: bloky, které pod něj připojíte, určují, co váš blok dělá.

- Typické použití: soustředit opakující se logiku do jednoho bloku s výstižným názvem.

### Váš blok (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Každý blok, který vytvoříte, se objeví v paletě pod svým názvem. Jeho použití spustí bloky připojené k jeho bloku `definovat`.

- Typ: příkazový blok
- Typické použití: použít stejnou logiku na několika místech bez kopírování zásobníků.

## Příklady s různými vstupy {#examples-with-different-inputs}

Vlastní bloky s různými sadami vstupů:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Použití vlastního bloku v programu {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Zde je vlastní blok použit pod blokem `když program začne` a zásobník `definovat` obsahuje logiku motoru, kterou spouští.

- Obvyklý postup: používat své bloky ve skriptech událostí.
- Výhoda: jedna definice, mnoho míst použití.

## Editor bloku {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

V editoru **Vytvořit blok** navrhnete, jak bude váš blok vypadat: přidáte popisky (**Přidat štítek**) a vstupy (**Přidat vstup**: *číslo nebo text* nebo *boolean*). Uvnitř zásobníku `definovat` fungují vstupy jako proměnné, které obsahují hodnoty předané bloku.

## Proč používat Moje bloky {#why-use-my-blocks}

- Opakované použití: napíšete jednou, použijete mnohokrát.
- Čitelnost: jeden smysluplný název místo dlouhých opakovaných zásobníků.
- Snadné změny: logiku opravíte na jednom místě místo v každé kopii.
- Struktura: velký program rozdělíte na malé logické části.

## Poznámky {#notes}

- Vlastní bloky patří k profilu a lze je použít kdekoli v jeho programu.
- Dávejte blokům názvy, které říkají, co dělají, ne jak to dělají.
- Blok, který volá sám sebe, se může zacyklit; editor vás na to upozorní.
