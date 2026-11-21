---
id: Examples
title: "Exemplos: carro, tanque, guindaste, trem"
description: "Receitas prontas das Ligações rápidas para um carro, um tanque, um guindaste e um trem."
---

# Exemplos {#examples}

Receitas prontas. Coloque os controles no painel e adicione os hubs em Meus hubs primeiro; depois monte as linhas.

## Carro com direção por servo {#car-with-servo-steering}

Painel: **JOY1** (Somente vertical) à esquerda, **JOY2** (Somente horizontal) à direita, **BTN1** e um monitor **Nível da bateria**.

| # | Entrada | Processamento | Operação | Saída |
|---|---|---|---|---|
| 1 | JOY1, Eixo Y | Zona morta 10 %, Suave 0,5 s | Motor | Technic Hub, portas A + B |
| 2 | JOY2, Eixo X | | Servo (Auto, ±90°) | Technic Hub, porta D |
| 3 | BTN1 | Alternar | Luz | Technic Hub, porta C |
| 4 | Hub: Bateria | | | Indicador: Nível da bateria |

Se um dos motores de tração girar para o lado errado, divida a linha 1 em duas linhas e adicione **Inverter** a uma delas.

## Carro com volante, pedais e câmbio {#car-with-a-wheel-pedals-and-a-gearbox}

Painel: um **Volante**, **Pedais**, uma **Alavanca de câmbio**, um **Freio de mão** e **Setas**. A entrada [Veículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) transforma os pedais, o câmbio e o freio de mão em uma velocidade que aumenta e diminui como a de um carro de verdade.

| # | Entrada | Processamento | Operação | Saída |
|---|---|---|---|---|
| 1 | Veículo: Velocidade | | Motor | Technic Hub, portas A + B |
| 2 | Volante: Ângulo do volante | | Servo (Auto) | Technic Hub, porta D |
| 3 | Veículo: Freando | | Luz | Technic Hub, porta C (luzes de freio) |
| 4 | Setas: Seta esquerda | | Luz | City Hub, porta A |
| 5 | Setas: Seta direita | | Luz | City Hub, porta B |

## Tanque (duas esteiras) {#tank-two-tracks}

Painel: dois sliders verticais **VSLDR1** e **VSLDR2** com **Retornar ao zero** e **Valores negativos** ativados.

| # | Entrada | Processamento | Operação | Saída |
|---|---|---|---|---|
| 1 | VSLDR1 | Suave 0,25 s | Motor | Hub, porta A |
| 2 | VSLDR2 | Inverter, Suave 0,25 s | Motor | Hub, porta B |

Com um gamepad, use Analógico esquerdo Y na linha 1 e Analógico direito Y na linha 2.

## Guindaste {#crane}

Painel: **DPAD1**, **SLDR1**, **SWCH1**.

| # | Entrada | Processamento | Operação | Saída |
|---|---|---|---|---|
| 1 | DPAD1, Esquerda / direita | Limite 50 % | Motor | Hub, porta A (giro) |
| 2 | DPAD1, Cima / baixo | | Motor | Hub, porta B (guincho do gancho) |
| 3 | SLDR1 | Zona morta 10 % | Motor | Hub, porta C (lança) |
| 4 | SWCH1 | | Luz (piscar 0,5 s) | Hub, porta D (giroflex) |

## Trem {#train}

Painel: um **Seletor** **STPR1** com **Valores negativos** (níveis de velocidade para frente e para trás) e **BTN1** para as luzes.

| # | Entrada | Processamento | Operação | Saída |
|---|---|---|---|---|
| 1 | STPR1 | Suave 2 s | Motor | City Hub, porta A |
| 2 | BTN1 | Alternar | Luz | City Hub, porta B |
| 3 | Hub: Bateria | | | Indicador: Monitor |

O bloco Suave faz o trem arrancar e parar como um de verdade. Com um **controlador do trem** no painel, use-o na linha 1 no lugar do STPR1: ele fornece a posição da alavanca, negativa em marcha a ré.

## Carro Technic Move {#technic-move-car}

| # | Entrada | Processamento | Operação | Saída |
|---|---|---|---|---|
| 1 | Veículo: Velocidade | | Motor | Technic Move (tração) |
| 2 | Volante: Ângulo do volante | | Servo | Technic Move (direção) |
| 3 | BTN1 | Alternar | Luz | Technic Move (luzes) |
| 4 | BTN2 | | Boost | Technic Move |

Sem alavanca de câmbio no painel, o carro dá ré quando você segura o pedal do freio com ele parado.

## Experimente no navegador {#try-it-in-the-browser}

A demonstração das Ligações rápidas em [mocpilot.com](https://mocpilot.com) tem um perfil de exemplo com linhas como estas; veja [Editor web](/docs/Introducing/WebEditor).
