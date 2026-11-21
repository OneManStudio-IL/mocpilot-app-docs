---
id: Operations
title: Operações e saídas
description: "Operações das Ligações rápidas (Motor, Servo, Luz e outras) e saídas (Hub, Indicador, LED do hub, Matriz de LEDs, Calibrar servos)."
---

import Screenshot from '@site/src/components/Screenshot';

# Operações e saídas {#operations-and-outputs}

A aba **Saídas** da paleta contém operações e saídas.

- Uma **operação** diz *o que* fazer (girar um motor, virar a direção, piscar uma luz). Uma saída **Hub** sempre vem depois dela e diz *onde*: qual hub e quais portas.
- Uma **saída direta** (Indicador, LED do hub, Matriz de LEDs, Calibrar servos) encerra a linha sozinha, sem operação.

As operações comuns (Motor, Servo, Motor por tempo, Luz) estão sempre disponíveis. As operações específicas de um hub só aparecem quando algum hub do perfil as suporta. Todas as configurações com valores e padrões: [Blocos de operação e saída](/docs/Application/Links/Blocks/OutputBlocks).

## Motores e luzes {#motors-and-lights}

| Operação | O que faz | Uso típico |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | aciona o motor com o valor da entrada; 0 o para | tração, guinchos |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | gira um motor com encoder até uma posição que acompanha a entrada | direção |
| [Motor por tempo](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | aciona o motor por um tempo definido a cada toque | portas, basculantes |
| [Girar por graus](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | gira o motor em um ângulo definido a cada toque | posicionamento passo a passo, plataformas giratórias |
| [Ir para a posição](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | leva um motor angular a uma posição quando ligado e a outra quando desligado | abas, seletores de marcha |
| [Luz](/docs/Application/Links/Blocks/OutputBlocks#op-light) | acende as luzes LEGO®, fixas ou piscando | faróis, giroflex, setas |
| [Cor da porta](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | colore os LEDs das portas de um BuWizz 3.0 Pro | cores de status |
| [Luzes do sensor](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | acende os "olhos" do sensor de distância Technic (Robot Inventor) | rostos de robôs |

### Direção com Servo {#steering-with-servo}

O Servo precisa de um motor com encoder e de um mecanismo de direção que você centraliza à mão ou que tenha batentes.

- **Manual**: gire o eixo até o meio e toque em **Definir como zero**; faça o ajuste fino com **◀ 5°** / **5° ▶**. Depois escolha o **Ângulo** e, se as rodas ainda puxarem para um lado, o **Centro**.
- **Auto**: a cada início, o motor gira até os dois batentes, o meio vira o zero e o curso vira o ângulo. **Calibrar agora** faz isso imediatamente. Mensagens: "Calibrando: o motor gira até os dois batentes…", "Calibrado: o servo gira ±…°, o centro é zero", "Falha na calibração: verifique o hub, o motor e se o eixo tem batentes".

Em um **Technic Move Hub**, o próprio hub controla a direção e calibra a cremalheira; só o modo de calibração se aplica.

<Screenshot name="links-servo-settings" alt="Configurações de um bloco Servo" width={900} />

## Operações para o hub inteiro {#operations-for-the-whole-hub}

Estas controlam o hub como um todo, por isso o bloco Hub depois delas não tem portas.

| Operação | Hub | O que faz |
|---|---|---|
| [Freio](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | freia enquanto a entrada está ligada |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | modo de potência boost enquanto ligado, normal quando desligado |
| [Pulso de potência](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | um pulso de potência a cada toque (só com a configuração Batmobile™ Tumbler) |
| [Modo de potência](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | troca o modo de potência: Lenta, Normal, Rápida, Ludicrous |
| [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | troca o canal de controle: A, B, C |

## Saídas {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): o hub e as portas dele. Veja [Bloco Hub e portas](/docs/Application/Links/HubsAndPorts).
- [Indicador](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): mostra o valor em um monitor do painel (monitor de texto, Nível da bateria, Velocímetro, Monitor de inclinação). Logo depois de um sensor do hub, um monitor de texto mostra o valor real com a unidade. O indicador mostra o valor como ele é, por isso a linha não tem operação. Veja [Indicadores e monitores](/docs/Application/Dashboard/Indicators).
- [LED do hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led): a luz colorida de um hub LEGO®, uma cor enquanto a entrada está ligada e outra enquanto está desligada.
- [Matriz de LEDs](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): a matriz de luzes do hub Robot Inventor: uma barra de nível, um número ou uma imagem.
- [Calibrar servos](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): recalibra todos os Servos no modo **Auto**. Coloque em um botão do painel: *BTN3* → *Calibrar servos*.

## Quando o programa para {#when-the-program-stops}

Os motores param, a matriz de LEDs é apagada, e as cores das portas e as luzes do sensor se apagam.
