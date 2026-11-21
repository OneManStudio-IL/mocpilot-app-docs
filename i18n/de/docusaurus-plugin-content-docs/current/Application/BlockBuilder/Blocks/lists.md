---
id: Lists
title: Listen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listen {#lists}

Eine Liste speichert mehrere Werte in einer Reihenfolge. Mit **Eine Liste erstellen**, **Liste umbenennen** und **Liste löschen** oben in der Kategorie erstellen, benennen und löschen Sie Listen. Die folgenden Blöcke erscheinen, sobald das Programm mindestens eine Liste hat. Die Einträge sind ab 1 nummeriert.

## Eine Liste ändern {#changing-a-list}

### `hinzufügen … zu …` (Fortgeschritten) {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

Fügt einen Wert am Ende der Liste hinzu.

### `einfügen … bei … von …` (Guru) {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

Fügt einen Wert an der angegebenen Position ein; die Einträge danach rücken um eins nach hinten.

### `ersetzen Artikel … von … mit …` (Guru) {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

Ersetzt den Eintrag an der angegebenen Position durch einen neuen Wert.

### `löschen … von …` (Fortgeschritten) {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

Löscht den Eintrag an der angegebenen Position.

### `löschen …` (Fortgeschritten) {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

Entfernt alle Einträge aus der Liste.

## Eine Liste lesen {#reading-a-list}

### `Artikel … von …` (Fortgeschritten) {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

Liefert den Eintrag an der angegebenen Position.

### `Index von … in …` (Guru) {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

Liefert die Position des ersten Eintrags, der dem Wert entspricht, oder `0`, wenn es keinen gibt.

### `… enthält …` (Guru) {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

Liefert `true`, wenn die Liste den Wert enthält.

### `Größe von …` (Fortgeschritten) {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

Liefert die Anzahl der Einträge in der Liste.

### Liste (Fortgeschritten) {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

Jede Liste hat einen eigenen Werteblock mit ihrem Namen. Er liefert die ganze Liste als Text.

- Ausgabebeispiel: `[item1,item2,item3]`; eine leere Liste ergibt leeren Text.
- Typische Verwendung: die Liste auf einem Monitor anzeigen oder an Blöcke übergeben, die eine Liste annehmen (zum Beispiel **aufleuchten** für die Lichter des Abstandssensors).
