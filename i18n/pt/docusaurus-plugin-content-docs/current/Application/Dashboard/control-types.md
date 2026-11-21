---
id: ControlTypes
title: Tipos de controle
description: "Joystick, painel direcional, controles deslizantes, botão giratório, botões, interruptores, interruptores de passo, monitores e controles especiais."
---

# Tipos de controle {#control-types}

Todo [tema](/docs/Application/Themes/ThemesOverview) desenha o mesmo conjunto de tipos de controle no seu próprio estilo. O tema gratuito **Básico** tem nove deles; todo tema pago acrescenta o **Botão giratório** e três monitores gráficos. Volantes, pedais, alavancas de câmbio e os outros [controles especiais](/docs/Application/Dashboard/SpecialControls) são produtos separados.

| Controle | Nome no painel | O que passa ao programa | Disponível em |
|---|---|---|---|
| Joystick | JOY | eixos X e Y | todos os temas |
| Painel direcional | DPAD | botões cima / baixo / esquerda / direita | todos os temas |
| Controle deslizante | SLDR | um valor | todos os temas |
| Deslizador ver. | VSLDR | um valor | todos os temas |
| Botão giratório | DIAL | um valor | temas pagos |
| Botão | BTN | pressionado / solto | todos os temas |
| Interruptor | SWCH | ligado / desligado | todos os temas |
| Interruptor de passo | STPR | um número de passo | todos os temas |
| Interruptor de passo ver. | VSTPR | um número de passo | todos os temas |
| Monitor | MNTR | mostra texto ou um valor | todos os temas |
| Nível da bateria | MNTBT | mostra um nível | temas pagos |
| Velocímetro | MNTSP | mostra uma velocidade | temas pagos |
| Monitor de inclinação | MNTLT | mostra a inclinação para a frente e para os lados | temas pagos |
| Volante, pedais, câmbios, freio de mão, setas, controle de trem | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | veja [Controles especiais](/docs/Application/Dashboard/SpecialControls) | produtos especiais |

O nome no painel recebe um número: o primeiro joystick é **JOY1**, o segundo, **JOY2**.

## Joystick {#joystick}

Uma alavanca que volta sozinha ao centro. Ela dá um valor **X** (esquerda/direita) e um **Y** (cima/baixo); o centro é zero.

- **Tipo de eixos**: **Ambos os eixos (X, Y)**, **Apenas horizontal (X)** ou **Apenas vertical (Y)**. Um joystick de um eixo é mais fácil de usar quando só acelera ou só esterça.
- Uso típico: Y para acelerar e X para esterçar, ou um joystick para cada esteira de um tanque.

## Painel direcional {#directional-pad}

Quatro botões: cima, baixo, esquerda e direita. Cada um está pressionado ou solto. Em Ligações rápidas, um eixo do D-pad dá −1, 0 ou +1 (**Cima / baixo** ou **Esquerda / direita**), o que é prático para movimentos passo a passo, como o gancho de um guindaste.

## Controle deslizante e Deslizador ver. {#slider-and-ver-slider}

Uma alça que se move ao longo de um trilho horizontal ou vertical.

- **Retornar ao zero**: a alça volta sozinha quando você a solta (como um acelerador), em vez de ficar onde você a deixou (como o ajuste de velocidade de um trem).
- **Valores negativos**: o zero fica no meio, então o controle deslizante dá valores negativos e positivos (ré e frente).
- **Valor do passo**: o controle deslizante se move em passos.

## Botão giratório {#rotary-knob}

Um botão redondo, como um controle de volume, no grupo **Deslizadores** de todo tema pago. Gire-o com um dedo em volta do centro: ele gira cerca de 135° para cada lado e fica onde você o deixa.

- **Passos com trava (0 = suave)** (0–24): com passos, o botão estala de uma posição para a próxima.
- **Zero no centro (-100..100)**: o botão dá de −100 a 100, com zero no meio, em vez de 0 a 100.
- Blocos: *quando botão giratório … girado / pressionado / solto / girado ao mínimo / girado ao máximo*, *valor do botão giratório …*, *botão giratório … pressionado / no mínimo / no máximo?* Veja [Controladores na tela](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- Em Ligações rápidas, o botão giratório funciona como um [controle deslizante](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

O tema Básico não tem botão giratório. Como todo tema pago tem um, **Alterar tema** passa um botão giratório para o visual de outro tema.

## Botão {#button}

Pressionado enquanto você o segura, solto quando você tira o dedo. Use-o para uma buzina ou um movimento curto, ou com o bloco **Alternar** em Ligações rápidas para ligar e desligar algo.

## Interruptor {#switch}

Fica ligado ou desligado: toque nele para mudar. Use-o para luzes, modos ou a trava de um guincho.

## Interruptor de passo e Interruptor de passo ver. {#step-switch-and-ver-step-switch}

Um controle **−** / **+** que conta passos, como marchas ou os níveis de velocidade de um trem.

- **Contagem de passos**: de 1 a 100 (padrão 10).
- **Valores negativos**: permite passos abaixo de zero (níveis de ré).
- **Habilitar reinício**: tocar no valor o faz voltar a zero.

## Monitor {#monitor}

Mostra texto ou um número vindo do programa: velocidade, bateria, o nome de um modo, o valor de um sensor.

- **Layout do texto** (uma ou várias linhas), **Estouro de texto** (Recortar, Quebrar linha, Letreiro, Rolar), **Máximo de linhas**, opções de rolagem, **Alinhamento do texto** e **Escala do texto**.

## Nível da bateria, Velocímetro, Monitor de inclinação {#battery-level-speedometer-tilt-monitor}

Indicadores gráficos dos temas pagos. O programa define o valor deles: a bateria de um hub, a velocidade de um motor, a inclinação de um hub. O **Monitor de inclinação** tem **Inverter inclinação** e **Inverter rotação**. Veja [Indicadores e monitores](/docs/Application/Dashboard/Indicators).

## Controles especiais {#special-controls}

Um volante, pedais, um câmbio manual ou automático, um freio de mão, uma alavanca de seta e um controle de trem. Cada um é um produto separado, com muitas aparências. Veja [Controles especiais](/docs/Application/Dashboard/SpecialControls).

## Interatividade {#interactivity}

Todo controle interativo tem **Interatividade** (ativada por padrão). Um controle não interativo não reage a toques. O programa pode ativar e desativar a interatividade, por exemplo para bloquear o acelerador até terminar uma verificação de partida.
