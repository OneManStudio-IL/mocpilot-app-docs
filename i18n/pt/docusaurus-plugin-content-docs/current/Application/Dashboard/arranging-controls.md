---
id: ArrangingControls
title: Adicionar e organizar controles
description: "Adicione controles a partir da paleta, mova-os e redimensione-os, duplique, bloqueie e exclua."
---

import Screenshot from '@site/src/components/Screenshot';

# Adicionar e organizar controles {#add-and-arrange-controls}

## Adicionar um controle {#add-a-control}

1. No painel, toque em **+** (**Adicionar controlador**); no computador, clique em **+ Controlador** à direita da barra superior. No computador, a paleta abre em uma janela própria, com **Adicionar controlador** no meio da barra superior dela.
2. Escolha um tipo de controle na lista. Os tipos são agrupados: **Joysticks**, **Deslizadores**, **Botões e interruptores**, **Monitores**, depois **Veículo e especiais** para os [controles especiais](/docs/Application/Dashboard/SpecialControls) e **Meus designs** para os designs que você salvou. Para achar um controle rapidamente, digite em **Buscar controles**.
3. A faixa de visuais mostra o tipo selecionado em cada [tema](/docs/Application/Themes/ThemesOverview) (para um controle especial, todas as aparências dele). Toque em um visual para vê-lo na pré-visualização grande; você pode testá-lo ali mesmo.
4. Configure o controle em **Configurar**: as abas **Estilo** e **Configurações** e o tamanho.
5. Toque em **Adicionar ao painel** (no computador, o botão laranja à direita da barra superior da paleta). No computador, você pode adicionar vários controles seguidos.

<Screenshot name="controller-palette" alt="A paleta Adicionar controlador" width={900} />

O controle vai para a primeira área livre e recebe o selo **NOVO**. Se não houver espaço, o MOCPilot avisa: abra espaço ou escolha um tamanho menor.

Os controles de temas que você não possui mostram **Comprar** e **Tudo com MocPilot Pro** em vez de **Adicionar ao painel**. Veja [Obter, comprar e atualizar temas](/docs/Application/Themes/GettingThemes).

## Mover {#move}

No modo de edição, pressione e arraste um controle. Quando você o solta, ele se encaixa na célula mais próxima da grade. Se ele ficar sobreposto a outro controle, volta para onde estava.

## Tamanhos {#sizes}

Todo controle tem três tamanhos: **S**, **M** e **L**. Mude-o em **Tamanho** nas propriedades do controle. Tamanhos em células da grade (largura × altura):

| Controle | S | M | L |
|---|---|---|---|
| Joystick, Painel direcional | 7×7 | 10×10 | 13×13 |
| Controle deslizante | 10×3 | 14×4 | 18×5 |
| Deslizador ver. | 3×10 | 4×14 | 5×18 |
| Botão giratório | 6×6 | 8×8 | 10×10 |
| Botão, Interruptor | 3×3 | 4×4 | 5×5 |
| Interruptor de passo | 8×3 | 12×4 | 16×5 |
| Interruptor de passo ver. | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Nível da bateria, Velocímetro | 6×6 | 8×8 | 10×10 |
| Monitor de inclinação | 8×4 | 12×6 | 16×8 |
| Volante | 8×8 | 12×12 | 16×16 |
| Pedais | 11×8 | 16×12 | 21×16 |
| Câmbio manual, Câmbio automático | 8×8 | 10×10 | 12×12 |
| Freio de mão | 4×7 | 6×10 | 8×13 |
| Setas | 8×5 | 10×6 | 14×8 |
| Controle de trem | 6×8 | 8×10 | 10×13 |

O campo inteiro tem 40 × 20 células. Se um tamanho maior não couber, mova os vizinhos primeiro.

## Selecionar e editar {#select-and-edit}

Toque (clique) em um controle para selecioná-lo e abrir as **propriedades** dele. Veja [Propriedades dos controles](/docs/Application/Dashboard/ControlProperties).

## Menu de contexto {#context-menu}

Toque e segure (tela sensível ao toque) ou clique com o botão direito (computador) em um controle:

- **Bloquear** / **Desbloquear**
- **Propriedades**
- **Alterar tema**: passa o controle para outro tema que você possui e que tem o mesmo tipo de controle
- **Duplicar**: uma cópia com as mesmas propriedades
- **Duplicar (só o tipo)**: um controle novo do mesmo tipo, com as propriedades padrão
- **Excluir**

Toque e segure ou clique com o botão direito em uma parte vazia do campo:

- **Bloquear tudo** / **Desbloquear tudo**
- **Excluir N controlador(es)**: exclui todos os controles desbloqueados

No computador, com o painel de propriedades aberto: **Esc** o fecha, **Delete** / **Backspace** exclui o controle e **⌘D / Ctrl+D** o duplica.

## Bloquear controles {#lock-controls}

Um controle **bloqueado** não pode ser movido nem excluído, então você não o tira do lugar sem querer enquanto dirige ou edita. Ele mostra um ícone de cadeado. Bloqueie um controle pelo menu dele ou com **Bloquear o controlador** nas configurações, ou bloqueie tudo com **Bloquear tudo**.

## Nomes dos controles {#control-names}

Cada controle tem um nome curto, mostrado na moldura dele no modo de edição, como **JOY1**, **SLDR2** ou **BTN1**. O programa se refere aos controles por esses nomes: em Ligações rápidas, o bloco de entrada diz *JOY1*, e em Blocos lógicos você escolhe *JOY1* no menu do bloco.

## Excluir {#delete}

Use **Excluir** no menu ou o botão de lixeira nas propriedades. Controles bloqueados não podem ser excluídos. Um controle que o programa usa não pode ser excluído até você remover as linhas ou os blocos dele.
