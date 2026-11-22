---
id: Editor
title: Trabalhar no editor
description: "Barra superior, paleta, arrastar blocos, zoom, menus de contexto, desfazer, Monitor, Mochila, Configurações do editor e o Construtor com IA nos Blocos lógicos."
---

import Screenshot from '@site/src/components/Screenshot';

# Trabalhar no editor {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Editor dos Blocos lógicos" width={900} />

## Barra superior {#top-bar}

- **Computador e editor web**: **Início** e os menus à esquerda, com **Desfazer** e **Refazer** ao lado. No meio: o nome do perfil e **Painel**, **Hubs** e **Gamepad**. À direita: **Construtor com IA**, [**Mochila**](/docs/Application/BlockBuilder/Backpack), **Monitor**, **Mais** (⋯), **Controle remoto** e o botão laranja **Executar**. Em uma janela estreita, os botões que não cabem vão para **Mais**; ele sempre tem **Configurações do editor…**.
- **Celular e tablet**: **Início** à esquerda; à direita **Desfazer**, **Refazer**, **Painel**, **Meus hubs**, **Controle remoto**, **Mais** e **Executar / Parar**. **Mais** tem o **Construtor com IA**, a **Mochila**, o **Monitor**, o **Gamepad** e as **Configurações do editor**.

Veja [Celular, tablet e desktop](/docs/Introducing/Layouts#editor-top-bar) para saber como a barra se recolhe em uma janela estreita.

## Paleta e área do programa {#palette-and-program-area}

- Mostre ou oculte a paleta com **Exibir → Paleta de blocos** (⌘P / Ctrl+P).
- Escolha uma categoria, arraste um bloco para a área do programa e solte-o embaixo de outro bloco para encaixá-lo. Uma prévia mostra onde ele vai se encaixar.
- Arraste uma pilha inteira pelo bloco de cima; arraste um bloco do meio para levar ele e tudo o que está abaixo.
- Para excluir blocos, arraste-os de volta para a paleta.
- Variáveis, listas, mensagens e Meus blocos são criados com os botões das respectivas categorias (**Criar uma variável**, **Criar uma lista**, **Adicionar mensagem**, **Criar um bloco**) ou em **Editar → Nova variável… / Nova lista… / Nova mensagem… / Novo bloco…**. Sons e veículos também têm botões próprios: **Adicionar som** em [Sons](/docs/Application/BlockBuilder/Blocks/Sounds) e **Criar veículo** em [Simulador](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoom e rolagem {#zoom-and-scroll}

- Faça o gesto de pinça (em tela sensível ao toque) ou use **Exibir → Aumentar zoom / Diminuir zoom / Tamanho real** (⌘+ / ⌘− / ⌘0).
- Arraste um espaço vazio para se mover pela área.
- O menu de contexto de um espaço vazio tem **Ampliar**, **Reduzir**, **Redefinir zoom** e **Excluir N blocos**.

## Menu do bloco {#block-menu}

Toque e segure (em tela sensível ao toque) ou clique com o botão direito em um bloco:

- **Editar**: alterar os valores dele;
- **Duplicar**;
- **Excluir bloco** / **Excluir N blocos**;
- **Adicionar à mochila**: guarda o bloco e tudo o que está encaixado nele na [Mochila](/docs/Application/BlockBuilder/Backpack);
- **Sobre o bloco**: abre a descrição do bloco nesta documentação;
- **Exportar bloco como SVG** / **Exportar todos os blocos como SVG**: salva uma imagem para um tutorial ou uma postagem em fórum.

<Screenshot name="blocks-block-menu" alt="Menu de contexto de um bloco nos Blocos lógicos" width={900} />

Um bloco ligado a um controle do painel só pode ser excluído depois que você o libera desse controle.

## Desfazer e refazer {#undo-and-redo}

Use **Editar → Desfazer / Refazer** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) ou os botões **Desfazer** e **Refazer** na barra superior (ao lado dos menus, no computador).

- Um arraste é um passo; edições rápidas do mesmo valor se juntam em um só passo.
- Desfazer funciona mesmo com o programa em execução.
- Criar ou excluir variáveis, listas, mensagens ou Meus blocos também é um passo; desfazê-lo para um programa em execução.
- Os valores guardados em variáveis e listas não são desfeitos.
- O painel tem um histórico de desfazer próprio.

## Monitor {#monitor}

O **Monitor** (⇧⌘M / Ctrl+Shift+M, **Exibir → Monitor**) mostra os valores atuais das variáveis e listas enquanto o programa é executado. O botão dele fica na barra superior no computador e em **Mais** no celular ou tablet. No computador, você pode abri-lo em uma janela separada. Ele ajuda muito na hora de procurar um erro.

<Screenshot name="blocks-monitor" alt="Monitor mostrando variáveis e uma lista enquanto o programa é executado" width={900} />

## Mochila {#backpack}

A **Mochila** (⇧⌘B / Ctrl+Shift+B, **Exibir → Mochila**) guarda pilhas de blocos para reutilizar em qualquer perfil: escolha **Adicionar à mochila** no menu de um bloco e depois toque no item ou arraste-o para inseri-lo em qualquer programa. O botão dela fica ao lado do **Monitor** na barra superior, ou em **Mais**. Veja [Mochila](/docs/Application/BlockBuilder/Backpack).

## Configurações do editor {#editor-settings}

Abra-as em **Mais → Configurações do editor** na barra superior (no computador, também em **Programa → Configurações do editor…**).

- **Iniciar bloco ao clicar**: clicar em um bloco o executa, para você testá-lo isoladamente; se o programa estiver parado, isso também o inicia.
- **Abrir o programa ao centro**: ao abrir um perfil, o programa aparece em 100% no centro da área (ou a partir do canto superior esquerdo, quando é maior), não importa onde você o deixou durante a edição. Isso vale para todos os perfis neste dispositivo.
- **Parar portas do hub quando o programa parar**: para todos os motores e apaga todas as luzes quando você pressiona **Parar**. Deixe ativado, a menos que os motores precisem manter o estado.
- **Selecionar nível dos blocos**: Iniciante, Avançado ou Guru.

<Screenshot name="blocks-editor-settings" alt="Painel Configurações do editor nos Blocos lógicos" width={900} />

## Níveis dos blocos {#block-levels}

| Nível | Mostra |
|---|---|
| **Iniciante** | os blocos mais simples; uma paleta enxuta para crianças e primeiros passos |
| **Avançado** | os blocos comuns de lógica e de dispositivos |
| **Guru** | o conjunto completo de blocos |

O nível fica salvo no perfil. Os blocos que já estão no programa continuam funcionando quando você baixa o nível.

## Construtor com IA {#ai-builder}

Com o [MocPilot Pro](/docs/Application/Account/Pro), o **Construtor com IA** (o botão com brilhos na barra superior, **Mais → Construtor com IA** no celular ou tablet, ⇧⌘I / Ctrl+Shift+I) configura os hubs, o painel e o programa a partir de uma descrição que você digita ou fala, e depois altera o perfil conforme você pedir. Ele funciona em perfis de Blocos lógicos e de Ligações rápidas. Veja [Construtor com IA](/docs/Application/Profiles/AiBuilder).

### Como obter um bom resultado {#ai-builder-tips}

Diga o nome do hub, o que está ligado em cada porta e o que deve fazer, e como você quer controlá-lo. Veja [Escreva um bom pedido](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Menus no computador {#desktop-menus}

| Menu | Itens |
|---|---|
| Arquivo | Fechar perfil (⌘W) |
| Editar | Desfazer, Refazer, Nova variável…, Nova lista…, Nova mensagem…, Novo bloco… |
| Exibir | Paleta de blocos (⌘P), [Mochila](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Monitor (⇧⌘M), Aumentar zoom, Diminuir zoom, Tamanho real |
| Programa | Executar (⌘R), Parar (⌘.), Configurações do editor… |

No Windows, use Ctrl em vez de ⌘ e Shift em vez de ⇧.
