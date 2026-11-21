---
id: Examples
title: Exemplos
description: "Programas de exemplo em Blocos lógicos para tração, direção, luzes, sons, avisos de bateria e sensores."
---

# Exemplos {#examples}

Programas curtos para começar. Os nomes dos blocos seguem a [referência dos blocos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference); os valores entre parênteses são o hub, a porta ou um bloco repórter colocado em um encaixe. As linhas recuadas ficam dentro de um bloco C.

## Dirigir com um joystick {#drive-with-a-joystick}

Painel: joystick **JOY1**. Motor de tração na porta A.

```text
quando o programa começa
repetir sempre
    iniciar motor em (joystick JOY1 eixo Y) % velocidade  (Hub 1, porta A)
```

## Direção com servo {#steer-with-a-servo}

Motor de direção (um motor angular) na porta B. Defina a posição atual dele como centro e depois siga o joystick: `× 0.9` transforma os −100…100 do joystick em −90…90 graus.

```text
quando o programa começa
definir posição relativa 0  (Hub 1, porta B)
repetir sempre
    ir para posição relativa (joystick JOY1 eixo X × 0.9) em 100 % velocidade  (Hub 1, porta B)
```

Para uma cremalheira de direção com batentes, calibre-a primeiro (veja [Motores](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)). `centro` e `amplitude` são variáveis. Depois da calibração, a cremalheira fica no meio, mas a posição relativa dela ali é o valor do centro, não 0, então defina-a como 0 antes de começar a controlar a direção:

```text
quando o programa começa
calibrar cremalheira (centro) centro (amplitude) graus  (Hub 1, porta B)
definir posição relativa 0  (Hub 1, porta B)
repetir sempre
    ir para posição relativa ((amplitude × joystick JOY1 eixo X) ÷ 100) em 100 % velocidade  (Hub 1, porta B)
```

## Luzes em um interruptor {#lights-on-a-switch}

```text
quando interruptor SWCH1 está alternado ligado
    ligar em 100 % brilho  (Hub 1, porta C)
quando interruptor SWCH1 está alternado desligado
    desligar  (Hub 1, porta C)
```

## Botão de buzina {#horn-button}

```text
quando o botão BTN1 pressionado
    som Buzina de carro tocar até o fim
```

## Aviso de bateria {#battery-warning}

Monitor **MNTR1**; o botão fica vermelho quando a bateria está fraca.

```text
quando o programa começa
repetir sempre
    mostrar (Hub 1 % bateria) em MNTR1 monitor
    se (Hub 1 % bateria) < 20 então
        definir BTN1 cor para vermelho
    esperar 5 segundos
```

## Parar antes de um obstáculo {#stop-before-an-obstacle}

Sensor de distância Technic na porta D, motor de tração na porta A.

```text
quando o programa começa
repetir sempre
    se (distância cm  (Hub 1, porta D)) < 10 então
        parar motor  (Hub 1, porta A)
        definir cor do LED para vermelho  (Hub 1)
    outro
        iniciar motor em (deslizador SLDR1) % velocidade  (Hub 1, porta A)
        definir cor do LED para verde  (Hub 1)
```

## Limite de velocidade em um seletor {#speed-limit-on-a-stepper}

O seletor **STPR1** com 4 passos limita a velocidade máxima.

```text
quando o programa começa
repetir sempre
    definir (limite de velocidade) para (interruptor de passo STPR1 × 25)
    iniciar motor em (joystick JOY1 eixo Y × limite de velocidade / 100) % velocidade  (Hub 1, porta A)
```

`limite de velocidade` é uma variável (**Variáveis → Criar uma variável**).

## Verificação na inicialização {#startup-check}

Trave o acelerador até que os dois hubs estejam conectados.

```text
quando o programa começa
desativar JOY1 interatividade
esperar até (Hub 1 conectado) e (Hub 2 conectado)
mostrar "Pronto" em MNTR1 monitor
ativar JOY1 interatividade
```

## Gamepad {#gamepad}

Defina o **Intervalo de valores do gamepad** como −100…100 na [página Gamepad](/docs/Application/Dashboard/Gamepad) e ative **Ativar blocos de gamepad**.

```text
quando o programa começa
repetir sempre
    iniciar motor em (controle esquerda eixo Y) % velocidade  (Hub 1, porta A)
    ir para posição relativa (controle direita eixo X × 0.9) em 100 % velocidade  (Hub 1, porta B)
```

## Carro com pedais {#car-with-pedals}

Para um carro conduzido com pedais, câmbio e freio de mão, veja o [Simulador](/docs/Application/BlockBuilder/Blocks/Simulator).

## Mais {#more}

- Instale perfis oficiais do [catálogo](/docs/Application/Profiles/Catalog) e estude os programas deles.
- Experimente a demonstração dos Blocos lógicos em [mocpilot.com](https://mocpilot.com).
