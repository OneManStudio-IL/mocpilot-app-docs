---
id: Inputs
title: Entradas
description: "Entradas das Ligações rápidas: controles do painel, o veículo simulado, o gamepad, botões e sensores dos hubs."
---

import Screenshot from '@site/src/components/Screenshot';

# Entradas {#inputs}

Toda linha começa com uma entrada. A aba **Entradas** da paleta lista:

- um bloco para cada **controle do painel**; controles com vários canais (eixos do joystick e do direcional, volante, pedais, alavanca de câmbio, freio de mão, setas) recebem um bloco por canal;
- os blocos **Veículo**, quando o painel tem pedais, alavanca de câmbio ou freio de mão;
- o bloco **Gamepad**, quando os blocos de gamepad estão ativados;
- um bloco **Hub** para cada hub do perfil (exceto o Mould King, que não tem botões nem sensores).

Se a aba estiver vazia, ela mostra "Adicione controladores no painel ou hubs em Meus hubs: eles aparecem aqui".

<Screenshot name="links-palette-inputs" alt="A aba Entradas da paleta das Ligações rápidas" width={900} />

Todas as configurações e valores de cada entrada estão na referência [Blocos de entrada](/docs/Application/Links/Blocks/InputBlocks).

## Controles do painel {#dashboard-controls}

Um bloco [Controlador](/docs/Application/Links/Blocks/InputBlocks#src-controller) pega um controle do seu painel pelo nome (**JOY1**, **SLDR1**, **BTN2**…) e, se o controle tiver vários, o **Canal** desejado:

| Controle | O que a linha recebe |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **Eixo X** ou **Eixo Y**, −1…1 |
| [Slider](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [controlador do trem](/docs/Application/Links/Blocks/InputBlocks#controller-train), [botão giratório](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | a posição dele |
| [Volante](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Ângulo do volante** −1…1 ou **Buzina** |
| [Pedais](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Pedal do acelerador** ou **Pedal do freio**, 0…1 |
| [Alavanca de câmbio](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Marcha** ou **Sentido (R − / frente +)** |
| [Freio de mão](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Freio de mão puxado** (liga/desliga) ou **Força do freio de mão** |
| [Setas](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Setas (esquerda − / direita +)**, **Seta esquerda**, **Seta direita** ou **Farol** |
| [Direcional](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Cima / baixo** ou **Esquerda / direita**: −1, 0 ou +1 |
| [Botão](/docs/Application/Links/Blocks/InputBlocks#controller-button) | ligado enquanto pressionado |
| [Interruptor](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | liga / desliga |
| [Seletor](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | o passo atual |

Quando você adiciona, renomeia ou altera um controle no painel, a paleta e as linhas acompanham automaticamente. Se você configurar um joystick como **Somente horizontal**, as linhas que usam o eixo Y dele informam "… não se move neste eixo".

## Dirigir como um carro de verdade {#drive-like-a-real-car}

O volante, os pedais, a alavanca de câmbio e o freio de mão fornecem suas posições brutas: uma linha com o pedal aciona o motor exatamente na medida em que o pedal é pressionado. Para um modelo que se comporta como um carro (acelera com inércia, segue embalado, freia e dá ré em R), use a entrada [Veículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Ela lê os pedais, a alavanca de câmbio e o freio de mão em conjunto e fornece a **Velocidade**, a **Rotação do motor (rpm)**, **Freando** ou **No freio de mão** do veículo:

- *Veículo (Velocidade)* → *Motor* → motores de tração;
- *Volante (Ângulo do volante)* → *Servo* → direção;
- *Veículo (Freando)* → *Luz* → luzes de freio;
- *Setas (Seta esquerda)* → *Luz* → lâmpada da seta esquerda.

## Gamepad {#gamepad}

Um único bloco [Gamepad](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) cobre o controle inteiro; escolha um analógico, gatilho ou botão em **Entrada**. Antes, ative **Ativar blocos de gamepad** na [página Gamepad](/docs/Application/Dashboard/Gamepad). Os rótulos seguem o **Layout dos botões do gamepad** (Xbox ou PlayStation).

## Botões e sensores dos hubs {#hub-buttons-and-sensors}

Uma entrada [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) lê o botão de um hub ou um dos sensores dele: bateria, inclinação, aceleração, velocidade e posição dos motores, sensores de distância e de cor nas portas, e mais. A lista mostra só o que aquele hub consegue informar. Para inclinação e aceleração, ajuste a **Orientação do hub** de acordo com a posição do hub no modelo.

O valor percorre a linha em escala de −1…1. Um **Monitor** de texto logo depois de um sensor mostra o valor real com a unidade, como "7,85 V" ou "−12°".

Usos típicos:

- *Bateria* → *Indicador* (Nível da bateria);
- *Sensor de distância* → *Limiar* (Abaixo, 20 %) → *Motor por tempo*: recuar quando algo se aproxima;
- *Botão 1* (controle remoto Powered Up) → *Motor*: dirigir com o controle remoto físico.
