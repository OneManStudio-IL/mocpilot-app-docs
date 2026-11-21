---
id: Variables
title: Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Variables

Variables store values that every script in the program can read and change. Create, rename and delete them with **Make a variable**, **Rename variable** and **Delete variable** at the top of the category. The blocks below appear once the program has at least one variable.

## Changing a variable

### `set … to …` (Beginner) {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

Sets the selected variable to a value.

- Typical use: set a starting value, replace the previous value.

### `change … by …` (Advanced) {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

Adds a number to the selected variable. Use a negative number to subtract.

- Typical use: counters, scores, adding up distance or time.

## Reading a variable

### Variable (Beginner) {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

Each variable has its own reporter block with its name. It returns the variable's current value.

- Typical use: put the value into operators, conditions and the inputs of other blocks.
- The [Monitor](/docs/Application/BlockBuilder/Editor#monitor) shows the values of all variables while the program runs.
