---
id: MyBlocks
title: Meine Blöcke
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Meine Blöcke {#my-blocks}

Mit Meine Blöcke erstellen Sie eigene, wiederverwendbare Blöcke.
Das funktioniert wie eine Funktion in der normalen Programmierung: Sie beschreiben das Verhalten einmal und verwenden es an beliebig vielen Stellen.

## Die Blöcke {#the-blocks}

### `definieren …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Drücken Sie oben in der Kategorie auf **Block erstellen**, um einen neuen Block anzulegen. Im Programmbereich erscheint dann ein Hutblock `definieren` mit dem Namen Ihres Blocks: Die Blöcke, die Sie darunter anhängen, bestimmen, was Ihr Block tut.

- Typische Verwendung: wiederholte Logik in einen Block mit einem klaren Namen packen.

### Ihr Block (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Jeder Block, den Sie erstellen, erscheint unter seinem Namen in der Palette. Wenn Sie ihn verwenden, laufen die Blöcke, die an seinem Block `definieren` hängen.

- Typ: Stapelblock
- Typische Verwendung: dieselbe Logik an mehreren Stellen nutzen, ohne Stapel zu kopieren.

## Beispiele mit verschiedenen Eingaben {#examples-with-different-inputs}

Eigene Blöcke mit unterschiedlichen Eingaben:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Einen eigenen Block im Programm verwenden {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Hier wird der eigene Block unter `wenn das Programm startet` verwendet, und der Stapel `definieren` enthält die Motorlogik, die er ausführt.

- Übliches Muster: Ihre Blöcke in Ereignisskripten verwenden.
- Vorteil: eine Definition, viele Stellen, die sie nutzen.

## Der Blockeditor {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

Im Editor **Block erstellen** gestalten Sie, wie Ihr Block aussieht: Fügen Sie Beschriftungen (**Etikett hinzufügen**) und Eingaben (**Eingabe hinzufügen**: *Zahl oder Text* oder *boolean*) hinzu. Innerhalb des Stapels `definieren` funktionieren die Eingaben wie Variablen, die die an den Block übergebenen Werte enthalten.

## Warum Meine Blöcke {#why-use-my-blocks}

- Wiederverwendung: einmal schreiben, oft verwenden.
- Lesbarkeit: ein aussagekräftiger Name statt langer, wiederholter Stapel.
- Einfache Änderungen: die Logik an einer Stelle korrigieren statt in jeder Kopie.
- Struktur: ein großes Programm in kleine, logische Teile aufteilen.

## Hinweise {#notes}

- Eigene Blöcke gehören zum Profil und können überall in seinem Programm verwendet werden.
- Geben Sie Blöcken Namen, die sagen, was sie tun, nicht wie sie es tun.
- Ein Block, der sich selbst aufruft, kann endlos laufen; der Editor warnt Sie davor.
