---
id: MyBlocks
title: Moje bloki
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moje bloki

Moje bloki pozwalają tworzyć własne bloki wielokrotnego użytku.
Działają jak funkcja w zwykłym programowaniu: zachowanie opisujesz raz i używasz go w dowolnie wielu miejscach.

## Bloki {#the-blocks}

### `zdefiniować …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Naciśnij **Stwórz blok** na górze kategorii, aby utworzyć nowy blok. W obszarze programu pojawi się wtedy blok-czapka `zdefiniować` z nazwą Twojego bloku: bloki dołączone pod nim określają, co robi Twój blok.

- Typowe zastosowanie: zebranie powtarzającej się logiki w jednym bloku o jasnej nazwie.

### Twój blok (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Każdy utworzony blok pojawia się w palecie pod swoją nazwą. Użycie go uruchamia bloki dołączone do jego bloku `zdefiniować`.

- Typ: blok poleceń
- Typowe zastosowanie: użycie tej samej logiki w kilku miejscach bez kopiowania stosów.

## Przykłady z różnymi polami {#examples-with-different-inputs}

Własne bloki z różnymi zestawami pól:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Użycie własnego bloku w programie {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Tutaj własny blok jest użyty pod blokiem `gdy program się uruchamia`, a stos `zdefiniować` zawiera logikę silnika, którą ten blok wykonuje.

- Typowy wzorzec: używaj swoich bloków w skryptach zdarzeń.
- Korzyść: jedna definicja, wiele miejsc użycia.

## Edytor bloku {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

W edytorze **Stwórz blok** projektujesz wygląd swojego bloku: dodajesz etykiety (**Dodaj etykietę**) i pola (**Dodaj wejście**: *liczba lub tekst* albo *boolean*). Wewnątrz stosu `zdefiniować` pola działają jak zmienne, które przechowują wartości przekazane do bloku.

## Po co używać Moich bloków {#why-use-my-blocks}

- Wielokrotne użycie: piszesz raz, używasz wiele razy.
- Czytelność: jedna sensowna nazwa zamiast długich, powtarzających się stosów.
- Łatwe zmiany: poprawiasz logikę w jednym miejscu, a nie w każdej kopii.
- Struktura: duży program dzielisz na małe, logiczne części.

## Uwagi {#notes}

- Własne bloki należą do profilu i można ich używać w dowolnym miejscu jego programu.
- Nadawaj blokom nazwy, które mówią, co robią, a nie jak to robią.
- Blok, który wywołuje sam siebie, może się zapętlić w nieskończoność; edytor ostrzega przed tym.
