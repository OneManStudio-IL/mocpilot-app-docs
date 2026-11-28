---
id: InputBlocks
title: Blocos de entrada
description: "Referência de todas as entradas das Ligações rápidas: controles do painel e seus canais, o veículo, o gamepad, botões e sensores dos hubs."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocos de entrada {#input-blocks}

Toda linha começa com uma entrada. A aba **Entradas** da paleta mostra os blocos que o seu perfil pode usar agora: um bloco para cada controle do painel (um por canal nos controles com vários canais), os blocos **Veículo**, o bloco **Gamepad** e um bloco **Hub** para cada hub. Como usá-los: [Entradas](/docs/Application/Links/Inputs).

Cada entrada envia um de dois sinais pela linha:

- **valor**: um número de −1 a 1 (0…1 nos controles que não têm lado negativo);
- **liga/desliga**: 1 ou 0.

Os blocos de processamento e as operações aceitam só os sinais com que sabem trabalhar; veja [Blocos de processamento](/docs/Application/Links/Blocks/ProcessingBlocks).

## Controlador {#src-controller}

Um controle do seu painel, mostrado pelo nome (**JOY1**, **SLDR1**, **BTN2**…).

- **Controlador**: qualquer controle do painel listado abaixo. Os monitores são saídas, não entradas.
- **Canal**: o que o controle fornece, nos controles com vários canais. A paleta oferece um bloco por canal.

O volante, os pedais, a alavanca de câmbio, o freio de mão, as setas, a caixa de transferência e o controlador do trem estão descritos em [Controles especiais](/docs/Application/Dashboard/SpecialControls).

Se o controle for removido do painel, a linha informa "Escolha um controlador do painel". Se o canal dele não existir mais, ela informa "Escolha o que … fornece" (para um joystick: "… não se move neste eixo").

### Joystick {#controller-joystick}

- **Canal**: **Eixo X** ou **Eixo Y**. Um joystick configurado como **Somente horizontal (X)** ou **Somente vertical (Y)** oferece só esse eixo.
- Fornece: valor −1…1, 0 no centro.

### Slider, slider vertical {#controller-slider}

- Sem canal.
- Fornece: valor 0…1, ou −1…1 quando **Valores negativos** está ativado.

### Controlador do trem {#controller-train}

O controlador do trem (controle especial) funciona como um slider nas Ligações rápidas.

- Sem canal.
- Fornece: valor −1…1: a posição da alavanca como fração de todos os pontos, negativa quando o reversor está em ré, 0 em neutro.

### Botão giratório {#controller-knob}

O botão giratório dos temas pagos funciona como um slider nas Ligações rápidas.

- Sem canal.
- Fornece: valor 0…1, ou −1…1 quando o botão tem o zero no centro.

### Volante {#controller-wheel}

- **Canal**: **Ângulo do volante** (padrão) ou **Buzina**.
- Ângulo do volante fornece: valor −1…1, 0 em linha reta.
- Buzina fornece: valor 1 enquanto a área da buzina está pressionada, caso contrário 0.

### Pedais {#controller-pedals}

- **Canal**: **Pedal do acelerador** (padrão) ou **Pedal do freio**.
- Fornece: valor 0…1, o quanto o pedal está pressionado.
- Os pedais fornecem a posição bruta do pedal. Para um carro que acelera, desacelera e dá ré sozinho, use a entrada [Veículo](#src-vehicle).

### Alavanca de câmbio {#controller-gear}

As alavancas de câmbio manual e automático (controle especial).

- **Canal**: **Marcha** (padrão) ou **Sentido (R − / frente +)**.
- Marcha, câmbio manual: a marcha engatada dividida pelo número de marchas para frente: marcha mais alta 1, neutro 0, ré negativo. Com 4 marchas, a 2ª marcha fornece 0,5.
- Marcha, câmbio automático: o mesmo que Sentido.
- Sentido fornece: −1 em R, 0 em N (e P), +1 em qualquer marcha para frente ou em D.

### Freio de mão {#controller-handbrake}

- **Canal**: **Freio de mão puxado** (padrão) ou **Força do freio de mão**.
- Freio de mão puxado fornece: liga/desliga, ligado enquanto a alavanca está travada.
- Força do freio de mão fornece: valor 0…1, o quanto a alavanca está puxada.

### Setas {#controller-turnsignals}

A alavanca das setas (controle especial).

- **Canal**: **Setas (esquerda − / direita +)** (padrão), **Seta esquerda**, **Seta direita** ou **Farol**.
- Setas fornece: valor −1 (esquerda), 0 (desligado) ou +1 (direita).
- Seta esquerda e Seta direita fornecem: valor 1 enquanto aquela seta está ligada (piscando junto com a lâmpada quando o pisca do controle está ativado), caso contrário 0.
- Farol fornece: valor 1 enquanto o farol está aceso, caso contrário 0.

### Caixa de transferência {#controller-transfercase}

A [caixa de transferência](/docs/Application/Dashboard/SpecialControls#transfer-case) (controle especial).

- **Canal**: **Tração nas quatro rodas** (padrão), **Reduzida**, **Bloqueio do diferencial dianteiro**, **Bloqueio do diferencial central** ou **Bloqueio do diferencial traseiro**.
- Tração nas quatro rodas fornece: liga/desliga, ligado em 4H e 4L.
- Reduzida fornece: liga/desliga, ligado em 4L.
- Cada bloqueio do diferencial fornece: liga/desliga, ligado enquanto aquele bloqueio está engatado.
- A posição em si (2H, 4H, N, 4L) vai para o simulador pela configuração **Caixa de transferência** da entrada [Veículo](#src-vehicle).

### Direcional {#controller-dpad}

- **Canal**: **Cima / baixo** ou **Esquerda / direita**.
- Fornece: valor +1 (cima ou direita), −1 (baixo ou esquerda) ou 0.

### Botão {#controller-button}

- Sem canal.
- Fornece: liga/desliga, ligado enquanto pressionado.

### Interruptor {#controller-switch}

- Sem canal.
- Fornece: liga/desliga.

### Seletor {#controller-stepper}

- Sem canal.
- Fornece: valor: o passo atual dividido por **Número de passos**, de modo que o último passo é 1 (−1 para o último passo negativo).

## Veículo {#src-vehicle}

Um carro simulado controlado pelos pedais, pela alavanca de câmbio, pelo freio de mão e pela caixa de transferência do painel: ele acelera, freia, segue embalado e dá ré como um veículo de verdade, e a linha recebe a velocidade ou a rotação do motor dele. A paleta mostra os blocos Veículo quando o painel tem pedais, alavanca de câmbio ou freio de mão, um bloco por saída, já ligado ao primeiro controle de cada tipo.

- **Pedais**: os pedais do painel que conduzem o veículo (obrigatório).
- **Alavanca de câmbio**: **nenhum** ou uma alavanca de câmbio do painel. Sem ela, segurar o pedal do freio com o veículo parado faz ele andar para trás.
- **Freio de mão**: **nenhum** ou um freio de mão do painel.
- **Caixa de transferência**: **nenhum** ou uma caixa de transferência do painel. Em 2H e 4H, o veículo anda como sem ela; em N, não anda (segue embalado); em 4L, a velocidade fica limitada a 40 %.
- **Tipo de veículo**: **Carro** (padrão), **Veículo off-road**, **Carro esportivo** ou **Caminhão**. Os tipos diferem em inércia e velocidade de ré; o caminhão também tem freio a ar.
- **Saída**:
  - **Velocidade** (padrão): valor −1…1, negativo em marcha a ré;
  - **Rotação do motor (rpm)**: valor 0…1;
  - **Freando**: liga/desliga, ligado enquanto o veículo freia;
  - **No freio de mão**: liga/desliga.

Problemas: "Escolha os pedais do veículo", "… não está no painel".

<Screenshot name="links-vehicle-settings" alt="Configurações de um bloco de entrada Veículo" width={900} />

## Gamepad {#src-gamepad}

O controle de jogo conectado ao seu dispositivo. O bloco só fica na paleta enquanto **Ativar blocos de gamepad** está ativado (página **Gamepad** na barra superior); caso contrário, a linha informa "Ative os blocos de gamepad na página Gamepad (barra superior)".

- **Entrada** (padrão **Analógico esquerdo Y**). Os rótulos seguem o **Layout dos botões do gamepad** (Xbox / PlayStation):
  - **Analógico esquerdo Y**, **Analógico esquerdo X**, **Analógico direito Y**, **Analógico direito X**: valor −1…1;
  - **RT** / **R2**, **LT** / **L2** (gatilhos): valor;
  - **A**, **B**, **X**, **Y** / **Xis**, **Círculo**, **Quadrado**, **Triângulo**: liga/desliga;
  - **LB** / **L1**, **RB** / **R1** (botões de ombro): liga/desliga;
  - **Cima**, **Baixo**, **Esquerda**, **Direita** (direcional): liga/desliga.

## Hub {#src-hub}

O botão do próprio hub ou um sensor: no hub ou em uma das portas dele. Há uma entrada Hub para cada hub do perfil, exceto os hubs Mould King, que só recebem comandos.

- **Hub**: um hub do perfil.
- **Botão ou sensor**: só o que este hub consegue informar (lista abaixo).
- **Porta**: para sensores em uma porta (valores de motor, sensores nas portas).
- **Orientação do hub**: para inclinação e aceleração nos hubs que permitem mudá-la: **Manter** (padrão) ou a forma como o hub está montado no modelo.

O valor de um sensor percorre a linha dividido pela escala total e limitado a −1…1: uma bateria em 50 % fornece 0,5. Um **Monitor** de texto logo depois do sensor mostra o valor real com a unidade.

| Botão ou sensor | Sinal | Unidade, escala total | Hubs |
|---|---|---|---|
| **Botão 1, 2…** | liga/desliga | | hubs com botão; os botões do controle remoto LEGO® Powered Up |
| **Bateria** | valor | %, 100 | hubs que a informam |
| **Tensão da bateria** | valor | V, 12 | hubs que a informam |
| **Tensão de saída** | valor | V, 12 | BuWizz 2.0 |
| **Temperatura** | valor | °C, 100 | hubs que a informam |
| **Inclinação: arfagem** | valor | °, 90 | hubs com sensor de inclinação |
| **Inclinação: rolagem** | valor | °, 180 | hubs com sensor de inclinação |
| **Inclinação: guinada** | valor | °, 180 | hubs com eixo de guinada |
| **Aceleração X / Y / Z** | valor | m/s², 19,6 | hubs com acelerômetro |
| **Velocidade de rotação X / Y / Z** | valor | °/s, 360 | hubs com giroscópio: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime |
| **Corrente do hub** | valor | mA, 3000 | Technic Hub, BOOST Move Hub |
| **Velocidade do motor** | valor | %, 100 | porta; todos os hubs com portas |
| **Ângulo do motor** | valor | °, 360 (relativo) | porta; motores com encoder; não no SBrick, BuWizz 2.0, WeDo 2.0 |
| **Posição do motor** | valor | °, 180 (absoluta) | porta; motores angulares |
| **Potência do motor** | valor | %, 100 | porta; Robot Inventor |
| **Corrente do motor** | valor | A, 3 | porta; BuWizz 2.0, BuWizz 3.0 Pro |
| **Sensor de distância** | valor | 250 | porta; não no SBrick nem no BuWizz |
| **Sensor de cor** | valor | número da cor, 10 | porta; não no SBrick, BuWizz nem WeDo 2.0 |
| **Luz refletida**, **Luz ambiente** | valor | %, 100 | porta; não no SBrick, BuWizz nem WeDo 2.0 |
| **Matiz da cor** | valor | °, 360 | porta; sensor de cor Technic ou sensor de cor e distância BOOST; não no SBrick, BuWizz nem WeDo 2.0 |
| **Saturação da cor**, **Brilho da cor** | valor | %, 100 | porta; como Matiz da cor |
| **Sensor de inclinação: arfagem / rolagem** | valor | °, 45 | porta; sensor de inclinação WeDo 2.0 / BOOST; não no SBrick nem no BuWizz |
| **Modo de potência** | valor | 1–4, 4 | BuWizz 2.0 |
| **Conectado** | liga/desliga | | todos os hubs |

Quando o hub está conectado, o MOCPilot também verifica o dispositivo na porta: "Porta A: nenhum motor nela", "Porta A: o motor não tem encoder", "Porta A: nenhum sensor de distância nela" e assim por diante.
