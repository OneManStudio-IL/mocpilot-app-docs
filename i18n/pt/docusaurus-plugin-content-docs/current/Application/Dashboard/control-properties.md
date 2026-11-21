---
id: ControlProperties
title: Propriedades dos controles
description: "Altere o tamanho, a cor, o ícone, a aparência, o comportamento e o tema de um controle nas propriedades dele."
---

import Screenshot from '@site/src/components/Screenshot';

# Propriedades dos controles {#control-properties}

No modo de edição, toque (clique) em um controle para abrir as propriedades dele.

- **Celular e tablet**: um painel sobre o painel de controles; toque fora dele para fechá-lo.
- **Computador**: um painel lateral; você pode continuar trabalhando no painel de controles enquanto ele está aberto.

<Screenshot name="controller-properties" alt="Painel de propriedades do controle com as abas Estilo e Configurações" width={900} />

O cabeçalho mostra o nome do controle (por exemplo, **JOY1**), o botão de lixeira, o menu de duplicação e **OK**.

## Aba Estilo {#style-tab}

- **Tamanho**: S, M ou L. Veja [tamanhos](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Cor de acento**: a cor principal do controle.
- **Ícone**: uma imagem no controle (botões, interruptores, monitores), escolhida entre mais de 260 ícones.
- **Aparência**: a aparência de um [controle especial](/docs/Application/Dashboard/SpecialControls), por exemplo o estilo de um volante.
- Opções do tema, conforme o tema: por exemplo **Carvão colorido**, **Bezel colorido** e **Mostrar linhas de corrida** em Corrida, **Número de segmentos do indicador** em Máquinas de construção, **Exibir valores** em Aura.
- **Alterar tema**: passa o controle para outro tema que você possui e que tem o mesmo tipo de controle.

## Aba Configurações {#settings-tab}

Configurações comuns:

- **Bloquear o controlador**: um controle bloqueado não pode ser movido nem excluído.
- **Interatividade**: um controle não interativo não registra toques.

Configurações de cada tipo:

| Controle | Configurações |
|---|---|
| Joystick | **Tipo de eixos**: Ambos os eixos (X, Y), Apenas horizontal (X), Apenas vertical (Y) |
| Controle deslizante, Deslizador ver. | **Retornar ao zero**, **Valores negativos**, **Valor do passo** |
| Botão giratório | **Passos com trava (0 = suave)** (0–24), **Zero no centro (-100..100)** |
| Interruptor de passo, Interruptor de passo ver. | **Contagem de passos** (1–100), **Valores negativos**, **Habilitar reinício** |
| Monitor | **Layout do texto**, **Estouro de texto**, **Máximo de linhas**, **Direção da rolagem**, **Velocidade da rolagem**, **Mostrar barra de rolagem**, **Rolagem interativa**, **Alinhamento do texto**, **Escala do texto** |
| Monitor de inclinação | **Inverter inclinação**, **Inverter rotação** |
| Volante | **Ângulo do volante** (20–120°), **Efeitos sonoros** |
| Pedais | **Efeitos sonoros** |
| Câmbio manual | **Número de marchas** (2–6) |
| Câmbio automático | **Número de marchas** (2–8) |
| Setas | **As saídas das setas piscam**; na aba Estilo, **Ícone: esquerda**, **Ícone: luz**, **Ícone: direita** |

As configurações numéricas têm um botão **Redefinir** que restaura o valor padrão.

## Alterar propriedades pelo programa {#change-properties-from-the-program}

Em Blocos lógicos, os blocos podem alterar um controle enquanto o programa roda: definir a cor dele, ativar ou desativar a interatividade, mostrar valores nos monitores. Veja [Blocos dos controladores do painel](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
