---
id: MyBlocks
title: Mis bloques
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mis bloques {#my-blocks}

Mis bloques te permite crear tus propios bloques reutilizables.
Funciona como una función en la programación habitual: describes el comportamiento una vez y lo usas en tantos sitios como quieras.

## Los bloques {#the-blocks}

### `definir …` (Gurú) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Pulsa **Crear un bloque** en la parte superior de la categoría para crear un bloque nuevo. El área del programa recibe entonces un bloque de sombrero `definir` con el nombre de tu bloque: los bloques que encajes debajo son lo que hace tu bloque.

- Uso típico: reunir lógica repetida en un solo bloque con un nombre claro.

### Tu bloque (Gurú) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Cada bloque que creas aparece en la paleta con su nombre. Al usarlo se ejecutan los bloques encajados en su bloque `definir`.

- Tipo: bloque de pila
- Uso típico: usar la misma lógica en varios sitios sin copiar pilas.

## Ejemplos con distintas entradas {#examples-with-different-inputs}

Bloques personalizados con distintos conjuntos de entradas:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Usar un bloque personalizado en un programa {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Aquí el bloque personalizado se usa debajo de `cuando el programa comienza`, y la pila `definir` contiene la lógica del motor que ejecuta.

- Patrón habitual: usar tus bloques en scripts de eventos.
- Ventaja: una sola definición, muchos sitios donde se usa.

## El editor de bloques {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

En el editor **Crear un bloque** diseñas el aspecto de tu bloque: añade etiquetas (**Agregar una etiqueta**) y entradas (**Agregar entrada**: *número o texto* o *booleano*). Dentro de la pila `definir`, las entradas funcionan como variables que contienen los valores que se pasan al bloque.

## Por qué usar Mis bloques {#why-use-my-blocks}

- Reutilización: escribe una vez, usa muchas veces.
- Legibilidad: un nombre con sentido en lugar de largas pilas repetidas.
- Cambios sencillos: corrige la lógica en un solo sitio en lugar de en cada copia.
- Estructura: divide un programa grande en partes lógicas pequeñas.

## Notas {#notes}

- Los bloques personalizados pertenecen al perfil y se pueden usar en cualquier parte de su programa.
- Pon a los bloques nombres que digan qué hacen, no cómo lo hacen.
- Un bloque que se llama a sí mismo puede repetirse sin fin; el editor te avisa de ello.
