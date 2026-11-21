---
id: DashboardOverview
title: Editor do painel
description: "O painel do MOCPilot: o campo, a grade, a barra de ferramentas, o fundo e o desfazer."
---

import Screenshot from '@site/src/components/Screenshot';

# Editor do painel {#dashboard-editor}

O **painel** é a tela de onde você dirige o modelo: joysticks, controles deslizantes, botões, monitores e outros controles. Cada perfil tem um painel.

Abra-o com o botão **Painel** no editor (⌘2 / Ctrl+2 no computador).

- **Celular e tablet**: o painel abre em tela cheia sobre o editor.
- **Computador**: o painel abre em uma janela **Painel** própria, para você mantê-lo ao lado do programa.
- **Editor web**: uma janela flutuante que você pode arrastar e redimensionar.

<Screenshot name="dashboard-edit" alt="Painel no modo de edição com a grade de pontos" width={900} />

## O campo e a grade {#the-field-and-the-grid}

- O campo sempre tem formato **2:1** e se ajusta à tela, então um painel fica igual no celular, no tablet e no computador.
- No modo de edição, aparece uma **grade de pontos** de 40 × 20 células. Os controles se encaixam na grade.
- Os controles não podem se sobrepor. Se um controle não couber, ele volta para onde estava.

## Barra de ferramentas {#toolbar}

| Botão | O que faz |
|---|---|
| ← | volta ao editor do programa |
| Desfazer / Refazer | desfaz e refaz alterações no painel |
| **+** (Adicionar controlador) | abre a paleta de controladores; veja [Adicionar e organizar controles](/docs/Application/Dashboard/ArrangingControls) |
| ⚙ (Configurações do painel) | opções de fundo e de grade (abaixo) |
| ▶ / ■ | **Executar** / **Parar**: inicia e para o programa |

No computador, a janela do Painel também tem menus: **Arquivo** (Fechar perfil, Abrir em janela separada, Configurações do painel…), **Editar** (Desfazer, Refazer, Adicionar controlador…) e **Exibir** (Blocos ⌘1, Painel ⌘2).

Enquanto o programa roda, os botões de edição ficam ocultos.

## Desfazer e refazer {#undo-and-redo}

O painel tem um histórico próprio, separado do programa. Você pode desfazer cada movimento, redimensionamento, alteração de propriedade, adição e exclusão.

## Configurações do painel {#dashboard-settings}

**Imagem de fundo**: toque em **Alterar** e escolha:

- **Escolher pronto**: um fundo pronto que vem com um tema. A galeria mostra os fundos dos temas cujos controles estão neste painel. Um fundo pronto sempre preenche a tela em volta do campo, então as opções abaixo não se aplicam a ele.
- **Enviar o meu**: qualquer imagem do seu dispositivo. Ela fica guardada no perfil.

**Remover** apaga o fundo.

<Screenshot name="dashboard-backgrounds" alt="Configurações do painel com a galeria de fundos prontos" width={900} />

Para uma imagem sua, você também pode definir:

- **Modo de preenchimento da imagem**: Esticar, Preservar proporção e ajustar, Preservar proporção e recortar, Mosaico, Mosaico vertical, Mosaico horizontal ou Preencher.
- **Área principal da imagem**: **Área de trabalho** (só o campo) ou **Ecrã inteiro**.
- **Opacidade da imagem**, **Ativar desfoque da imagem** e **Valor de desfoque**: deixam o fundo mais discreto, para os controles se destacarem.

**Ocultar pontos**: oculta os pontos da grade enquanto o perfil roda. No modo de edição, os pontos continuam visíveis para você poder alinhar os controles.

## Os controles e o programa {#controls-and-the-program}

Um controle dá valores; o programa decide o que eles fazem. Um controle que o programa usa não pode ser excluído até o programa deixar de usá-lo. Em Ligações rápidas, remova as linhas que o usam; em Blocos lógicos, remova os blocos dele.

## Leia mais {#read-more}

- [Adicionar e organizar controles](/docs/Application/Dashboard/ArrangingControls): adicionar, mover, tamanhos, bloquear
- [Tipos de controle](/docs/Application/Dashboard/ControlTypes)
- [Controles especiais](/docs/Application/Dashboard/SpecialControls): volante, pedais, alavanca de câmbio, freio de mão, setas, controle de trem
- [Propriedades dos controles](/docs/Application/Dashboard/ControlProperties)
- [Indicadores e monitores](/docs/Application/Dashboard/Indicators)
