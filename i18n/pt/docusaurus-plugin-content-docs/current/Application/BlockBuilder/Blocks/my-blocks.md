---
id: MyBlocks
title: Meus blocos
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Meus blocos {#my-blocks}

Meus blocos permitem criar os seus próprios blocos reutilizáveis.
Funciona como uma função na programação comum: você descreve o comportamento uma vez e o usa em quantos lugares quiser.

## Os blocos {#the-blocks}

### `definir …` (Guru) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

Pressione **Criar um bloco** no topo da categoria para criar um novo bloco. A área do programa ganha então um bloco chapéu `definir` com o nome do seu bloco: os blocos que você encaixa embaixo dele são o que o seu bloco faz.

- Uso típico: colocar uma lógica repetida em um único bloco com um nome claro.

### O seu bloco (Guru) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

Cada bloco que você cria aparece na paleta com o nome dele. Usá-lo executa os blocos encaixados no bloco `definir` correspondente.

- Tipo: bloco de pilha
- Uso típico: usar a mesma lógica em vários lugares sem copiar pilhas.

## Exemplos com entradas diferentes {#examples-with-different-inputs}

Blocos personalizados com diferentes conjuntos de entradas:

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## Usar um bloco personalizado em um programa {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

Aqui, o bloco personalizado é usado embaixo de `quando o programa começa`, e a pilha `definir` contém a lógica do motor que ele executa.

- Padrão comum: usar os seus blocos em scripts de eventos.
- Vantagem: uma definição, muitos lugares que a usam.

## O editor de blocos {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

No editor **Criar um bloco**, você define a aparência do seu bloco: adicione rótulos (**Adicionar um rótulo**) e entradas (**Adicionar entrada**: *número ou texto* ou *booleano*). Dentro da pilha `definir`, as entradas funcionam como variáveis que guardam os valores passados ao bloco.

## Por que usar Meus blocos {#why-use-my-blocks}

- Reutilização: escreva uma vez, use muitas vezes.
- Legibilidade: um nome significativo em vez de longas pilhas repetidas.
- Mudanças fáceis: corrija a lógica em um só lugar em vez de em cada cópia.
- Estrutura: divida um programa grande em pequenas partes lógicas.

## Observações {#notes}

- Os blocos personalizados pertencem ao perfil e podem ser usados em qualquer lugar do programa dele.
- Dê aos blocos nomes que digam o que eles fazem, não como fazem.
- Um bloco que chama a si mesmo pode entrar em um laço infinito; o editor avisa sobre isso.
