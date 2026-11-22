---
id: Backpack
title: Mochila
description: "Guarde partes dos seus programas de Blocos lógicos na Mochila e insira-as em qualquer perfil, em qualquer um dos seus dispositivos."
---

import Screenshot from '@site/src/components/Screenshot';

# Mochila {#backpack}

A **Mochila** é onde você guarda partes dos seus programas de blocos para reutilizá-las em outros perfis: uma rotina de direção, um show de luzes, um Meu bloco que você escreveu uma vez e quer ter em todo lugar. Salve uma pilha de blocos na Mochila em um perfil e depois insira-a em qualquer outro perfil, neste dispositivo ou em qualquer dispositivo em que você esteja conectado à sua conta.

A Mochila faz parte do editor de [Blocos lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Os perfis de Ligações rápidas não a têm.

<Screenshot name="backpack-panel" alt="O painel da Mochila ao lado de um programa de blocos" width={900} />

## O que a Mochila guarda {#what-the-backpack-keeps}

Cada item da Mochila é uma **cópia** dos blocos que você salvou:

- **Uma pilha**: o bloco escolhido junto com tudo o que está encaixado abaixo dele e dentro dele, exatamente como **Duplicar** o copia.
- **Um Meu bloco**: se você salvar o bloco `define …` de um [Meu bloco](/docs/Application/BlockBuilder/Blocks/MyBlocks), a Mochila guarda a definição inteira. Esses itens são marcados como **O meu bloco**.

O item também lembra os Meus blocos que os seus blocos usam (mesmo por meio de outros Meus blocos) e os nomes das variáveis, listas, mensagens, veículos e sons a que eles se referem, para que os blocos funcionem quando você os inserir em outro lugar.

Os blocos inseridos passam a ser uma parte comum do programa do perfil. Nada no perfil depende da Mochila: excluir ou renomear um item não altera os programas em que você o inseriu. Os itens não podem ser editados na Mochila. Para alterar um, insira-o, edite os blocos no programa e salve-os de novo na Mochila como um novo item.

## Salvar blocos na Mochila {#save-blocks}

1. No programa, clique com o botão direito em um bloco (computador) ou toque e segure-o (celular, tablet).
2. Escolha **Adicionar à mochila**.
3. Digite um nome em **Nome dos blocos** e toque em **Guardar**.

O bloco e tudo o que está encaixado nele vão para a Mochila. Para salvar a definição de um Meu bloco, abra o menu do bloco `define …` dele.

<Screenshot name="backpack-add" alt="O menu do bloco com Adicionar à mochila e a janela do nome" width={900} />

## Abrir a Mochila {#open}

- **Computador e editor web**: o botão **Mochila** na barra superior do editor, **Exibir → Mochila** no menu ou **Ctrl+Shift+B** (**⌘⇧B** no Mac). Se a janela for estreita, o botão fica no menu **Mais**. A Mochila abre como um painel no lado direito do editor, ao lado do [Monitor](/docs/Application/BlockBuilder/Editor#monitor), se ele também estiver aberto.
- **Celular e tablet**: **Mais → Mochila** na barra superior do editor. A Mochila abre como um painel sobre o editor.

O botão fica destacado enquanto a Mochila está aberta. Pressione-o de novo para fechar a Mochila.

Cada item mostra a imagem, o nome e o número de blocos que contém (**Blocos: N**). A nota na parte de baixo do painel informa onde a Mochila é guardada (veja [abaixo](#where-it-is-kept)).

## Inserir blocos em um programa {#insert}

- **Toque em um item**: os blocos dele aparecem na parte visível do programa.
- **Arraste um item para o programa**: os blocos ficam onde você os soltar. Arraste para o lado, em direção ao programa; arrastar para cima ou para baixo rola a lista.
- **Menu do item (⋯)**: **Inserir**, **Mudar o nome…** ou **Eliminar**.

No celular e no tablet, a Mochila se fecha depois de inserir, para que você veja os blocos. Um único **Desfazer** remove tudo o que foi inserido.

### O que acontece ao inserir {#what-happens}

- **Meus blocos**: um Meu bloco que o perfil já tem com o mesmo conteúdo é reutilizado, então inserir os mesmos blocos de novo não cria cópias dele. Se um Meu bloco diferente no perfil usa o mesmo nome por dentro, o inserido ganha um próprio. Inserir um item de Meu bloco que já está no perfil não faz nada e mostra **Já existe**: procure o bloco em **Meus blocos**.
- **Variáveis, listas, mensagens e veículos**: se o perfil tem um com o mesmo nome, os blocos o usam; caso contrário, ele é criado. Os valores das variáveis e o conteúdo das listas não são copiados. Se o nome já estiver sendo usado por outra coisa, aparece uma mensagem como *Não foi possível criar a variável «speed»: o nome já existe*.
- **Sons**: os seus próprios sons são arquivos do perfil e não ficam guardados na Mochila. Se o perfil não tiver um som com esse nome, você verá *O som «…» não está neste perfil: escolha um som nos blocos*. Os sons integrados funcionam em todo lugar.
- **Blocos de hub e do painel**: blocos de um hub, de um controle do painel ou de um gamepad que este perfil não tem não podem ser inseridos. Antes de qualquer mudança, o app mostra **Alguns blocos não podem ser inseridos** com a lista desses blocos e quantos ficarão de fora, e pergunta se deve inserir os outros. Se quiser mantê-los, adicione primeiro o hub ou o controle do painel. Se nenhum dos blocos servir para o perfil, nada é inserido.

## Renomear e excluir {#rename-delete}

Abra o menu do item (⋯):

- **Mudar o nome…** altera o nome do item.
- **Eliminar** o remove depois que você confirma (**Eliminar da mochila?**). Os programas em que você o inseriu mantêm os blocos.

A Mochila nunca remove itens sozinha: exclua o que você não precisa mais.

## Onde a Mochila é guardada {#where-it-is-kept}

- **Sem conta (convidado)**: só neste dispositivo. O painel diz *Guardada neste dispositivo. Inicie sessão para ter a mochila em todos os seus dispositivos.*
- **Conectado à conta**: também na sua conta, então você tem a mesma Mochila em todos os seus dispositivos, inclusive no [editor web](/docs/Introducing/WebEditor). O painel diz *Guardada na sua conta: a mesma mochila em todos os seus dispositivos.* As alterações feitas em um dispositivo aparecem nos outros.
- **Primeiro login**: os itens que você salvou como convidado neste dispositivo passam para a sua conta.

Você pode usar a Mochila offline. As alterações ficam guardadas no dispositivo e são enviadas para a sua conta quando a conexão volta (enquanto isso, o painel mostra **A sincronizar…**). Um item que ainda está sendo baixado da sua conta não pode ser inserido ainda: o app diz **Ainda não está pronto**, então tente de novo daqui a pouco.

## Limites {#limits}

| | Limite |
|---|---|
| Itens na Mochila | 200 |
| Tamanho de um item | cerca de 512 KB (uma parte muito grande de um programa pode não caber: salve uma parte menor) |
| Nome do item | até 100 caracteres |

Se a Mochila da sua conta estiver cheia ou um item for grande demais para ela, o item fica só neste dispositivo e o app avisa você. Itens salvos por uma versão mais nova do app só podem ser inseridos depois que você atualizar o app.

## Solução de problemas {#troubleshooting}

| Mensagem | O que fazer |
|---|---|
| **A mochila está cheia (200 itens). Elimine algo de que não precise.** | Exclua os itens que você não usa mais. |
| **Demasiados blocos para a mochila. Guarde uma parte mais pequena.** | Salve uma pilha menor ou divida o programa em vários itens. |
| **Alguns blocos não podem ser inseridos** | Falta no perfil um hub, um controle do painel ou um gamepad de que os blocos precisam. Adicione-o e insira de novo, ou insira os outros blocos. |
| **Já existe** | O Meu bloco já está neste perfil: procure-o em **Meus blocos**. |
| **Ainda não está pronto** | O item ainda está sendo baixado da sua conta. Espere um pouco e tente de novo. |
| **Estes blocos foram guardados por uma versão mais recente da app. Atualize a app para os usar.** | Atualize o MOCPilot neste dispositivo. |
