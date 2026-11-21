---
id: Variables
title: Variablen
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variablen {#variables}

Variablen speichern Werte, die jedes Skript im Programm lesen und ändern kann. Mit **Eine Variable erstellen**, **Variable umbenennen** und **Variable löschen** oben in der Kategorie erstellen, benennen und löschen Sie sie. Die folgenden Blöcke erscheinen, sobald das Programm mindestens eine Variable hat.

## Eine Variable ändern {#changing-a-variable}

### `setze … auf …` (Anfänger) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Setzt die ausgewählte Variable auf einen Wert.

- Typische Verwendung: einen Startwert setzen, den bisherigen Wert ersetzen.

### `ändern … durch …` (Fortgeschritten) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Addiert eine Zahl zur ausgewählten Variablen. Mit einer negativen Zahl wird subtrahiert.

- Typische Verwendung: Zähler, Punktestände, Aufsummieren von Strecke oder Zeit.

## Eine Variable lesen {#reading-a-variable}

### Variable (Anfänger) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Jede Variable hat einen eigenen Werteblock mit ihrem Namen. Er liefert den aktuellen Wert der Variablen.

- Typische Verwendung: den Wert in Operatoren, Bedingungen und die Eingabefelder anderer Blöcke einsetzen.
- Der [Monitor](/docs/Application/BlockBuilder/Editor#monitor) zeigt die Werte aller Variablen, während das Programm läuft.
