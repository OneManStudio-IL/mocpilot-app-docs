---
id: Processing
title: Processamento
description: "Blocos de processamento das Ligações rápidas: Inverter, Limite, Zona morta, Limiar, Suave e Alternar."
---

# Processamento {#processing}

Os blocos de processamento ficam entre a entrada e a operação e alteram o valor no caminho. Uma linha pode ter nenhum, um ou vários, em qualquer ordem. Configurações e valores permitidos: [Blocos de processamento](/docs/Application/Links/Blocks/ProcessingBlocks).

| Bloco | O que faz |
|---|---|
| [Inverter](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | inverte o sentido ou troca ligado por desligado |
| [Limite](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | limita o valor |
| [Zona morta](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignora pequenos movimentos em torno do zero |
| [Limiar](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | transforma um valor em liga/desliga |
| [Suave](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | acelera e desacelera aos poucos |
| [Alternar](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | pressione uma vez para ligar e outra para desligar |

## Inverter {#invert}

O motor gira para o lado errado? Adicione **Inverter** em vez de remontar o modelo. Para dois motores que precisam girar em sentidos opostos (esteiras esquerda e direita, os dois lados de uma caixa de engrenagens), crie duas linhas a partir da mesma entrada e coloque Inverter em uma delas.

## Limite {#limit}

Deixa o modelo mais lento e mais fácil de controlar: com **Máximo** em 50 %, o analógico todo inclinado dá metade da velocidade. Bom para crianças, para dirigir em ambientes fechados e para mecanismos delicados.

## Zona morta {#dead-zone}

Um joystick raramente descansa exatamente no zero, então o motor pode zumbir ou se arrastar devagar. A **Zona morta** trata valores pequenos como zero. 10 % é um bom começo.

## Limiar {#threshold}

Transforma um valor em liga/desliga: "ligado quando o valor está **Acima** de 20 %". Com um sensor, *Sensor de distância* → *Limiar* (Abaixo, 20 %) fica ligado quando algo está perto. O Limiar tem uma pequena histerese, por isso não fica piscando no limite.

## Suave {#smooth}

Arranca e para aos poucos, como um veículo de verdade. A aceleração e a desaceleração são ajustadas separadamente: um caminhão pesado pode levar 2 s para ganhar velocidade e 0,5 s para parar. Em uma luz, Suave faz ela acender e apagar gradualmente.

## Alternar {#toggle}

Transforma um botão em interruptor: pressione uma vez para ligar, pressione de novo para desligar. *Botão* → *Alternar* → *Luz*.

## Dicas {#tips}

- A ordem importa: *Zona morta → Limite → Suave* é uma boa sequência para dirigir.
- Um bloco que não combina com o sinal não se encaixa: Alternar precisa de uma entrada liga/desliga; Zona morta e Limiar precisam de um valor.
- Observe os valores ao vivo durante a execução para ver o que cada bloco faz.
