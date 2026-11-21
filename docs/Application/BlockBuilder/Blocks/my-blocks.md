---
id: MyBlocks
title: My Blocks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# My Blocks

My Blocks let you make your own reusable blocks.
It works like a function in ordinary programming: you describe the behavior once and use it in as many places as you like.

## The blocks

### `define …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Press **Make a Block** at the top of the category to create a new block. The program area then gets a `define` hat block with your block's name: the blocks you attach below it are what your block does.

- Typical use: put repeated logic into one block with a clear name.

### Your block (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Every block you make appears in the palette under its name. Using it runs the blocks attached to its `define` block.

- Type: stack block
- Typical use: use the same logic in several places without copying stacks.

## Examples with different inputs

Custom blocks with different sets of inputs:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Using a custom block in a program

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Here the custom block is used under `when program starts`, and the `define` stack holds the motor logic it runs.

- Usual pattern: use your blocks in event scripts.
- Benefit: one definition, many places that use it.

## The block editor

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

In the **Make a Block** editor you design what your block looks like: add labels (**Add a label**) and inputs (**Add an input**: *number or text* or *boolean*). Inside the `define` stack, the inputs work like variables that hold the values passed to the block.

## Why use My Blocks

- Reuse: write once, use many times.
- Readability: one meaningful name instead of long repeated stacks.
- Easy changes: fix the logic in one place instead of in every copy.
- Structure: split a large program into small logical parts.

## Notes

- Custom blocks belong to the profile and can be used anywhere in its program.
- Give blocks names that say what they do, not how they do it.
- A block that calls itself can loop forever; the editor warns you about it.
