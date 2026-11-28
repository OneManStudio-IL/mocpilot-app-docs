---
id: HubFunctions
title: Funções específicas dos hubs
description: "Funções especiais dos hubs Technic Move, BuWizz, SBrick, Mould King, Robot Inventor e outros nos dois editores."
---

# Funções específicas dos hubs {#hub-specific-functions}

Todo hub com portas pode controlar motores e luzes. Alguns hubs fazem mais. Em **Ligações rápidas**, essas funções aparecem na paleta só quando um hub desses está no perfil; em **Blocos lógicos**, elas são blocos específicos do hub.

## Motores com encoder (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Função | Ligações rápidas | Blocos lógicos |
|---|---|---|
| Controle de velocidade | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | definir velocidade, iniciar motor em velocidade |
| Servo de direção com calibração | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manual / Auto) | ir para posição relativa, calibrar cremalheira |
| Girar por um ângulo | [Girar por graus](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | executar por |
| Posição absoluta (motores angulares) | [Ir para a posição](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | ir para a posição |
| Comportamento ao parar: livre, freio, manter | Motor → **Ao parar** | definir motor para … ao parar |
| Predefinições de aceleração do hub | Motor → **Aceleração do hub** | definir aceleração, definir desaceleração |
| Velocidade, posição, potência e corrente como entrada | [Entrada Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) | velocidade, posição, posição relativa, potência |

## Technic Move Hub {#technic-move-hub}

O hub dos carros de controle remoto LEGO® Technic (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Tração, direção e luzes são controladas por função, não por porta.
- **Direção** calibra a própria cremalheira.
- **Freio**, **Boost** (modo de potência) e **Pulso de potência** (só com a configuração Batmobile™ Tumbler).
- **Configurações do hub**: carregue um perfil de carro no hub com **Meus hubs → Selecionar configuração**. Veja [Configurações do Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Blocos lógicos: os blocos de perfil de carro (*iniciar motores*, *definir barra de direção para*, *definir o freio dos motores*, *pulso de potência*, *ligar as luzes*, *definir modo de energia*), ou os blocos de porta comuns: motores `A`, `B` (tração) e `C` (direção; *calibrar cremalheira* em `C`, depois *ir para posição relativa*), luzes `1`–`6` uma a uma, inclinação, aceleração e orientação. Use uma só maneira por hub: os dois comandam os mesmos motores e luzes. Veja [Motores → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub).
- Ligações rápidas: **Controlo** no bloco Hub escolhe **Perfil de carro** (as linhas controlam a tração, a direção e as luzes) ou **Portas** (motores `A`, `B`, `C` e luzes `1`–`6`, como nos outros hubs). Veja [Bloco Hub e portas → Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub). Uma [Entrada Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) também pode ler a inclinação, a aceleração e a velocidade de rotação dele.

## BuWizz 2.0 {#buwizz-20}

- **Modo de potência**: Lenta, Normal, Rápida, Ludicrous. Ligações rápidas: a operação [Modo de potência](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Blocos lógicos: *BuWizz 2: definir modo de energia*.
- O modo de potência atual, a **tensão de saída** e a corrente dos motores como entradas. Sem carga, a tensão de saída é de cerca de 6,3 V em Lenta, 7,7 V em Normal, 9,15 V em Rápida e 10,5 V em Ludicrous.
- Controle simples de velocidade nas portas 1–4: sem controle de posição.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- LEDs de **Cor da porta** nas portas 1–4: a partir de uma lista ou RGB ([Cor da porta](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *BuWizz 3: definir a cor do LED da porta*).
- Corrente dos motores como entrada, posições relativas.
- Os motores com sensor (Technic L e XL, SPIKE, Robot Inventor e os motores angulares cinza) nas portas 1–4 funcionam com controle de velocidade: o hub mantém a velocidade definida, então eles giram de forma constante mesmo em baixa velocidade (a partir de cerca de 20 %). Ao parar, ficam em roda livre. Os motores simples, as luzes e as portas A e B funcionam como antes.
- Os motores BOOST (do conjunto BOOST Move Hub) não funcionam em um BuWizz 3.0 Pro: o hub só os reconhece de vez em quando, e o motor não gira corretamente.

## SBrick e SBrick Plus {#sbrick-and-sbrick-plus}

- Motores e luzes com controle de velocidade.
- Sem controle de posição: Servo, Girar por graus e Ir para a posição não estão disponíveis.

## Mould King 4.0 e 6.0 {#mould-king-40-and-60}

- Apenas comandos: sem sensores, sem botões, sem retorno de conexão.
- **Canal de controle** A, B ou C: a operação [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) em Ligações rápidas, o bloco *MouldKing: definir canal de controlo* em Blocos lógicos ou **Selecionar canal** em Meus hubs.
- Até 3 Mould King 4.0 ou 1 Mould King 6.0 por perfil, e só um tipo de Mould King por perfil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Tudo sobre conexão, firmware e blocos: [hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).

- **Matriz de LEDs**: uma barra de nível, um número ou uma imagem em Ligações rápidas; texto e pixels em Blocos lógicos.
- **Luzes do sensor** de distância (os "olhos" do sensor).
- **Detecção de travamento** e potência do motor.
- Todos os blocos do app Robot Inventor: [Movimento](/docs/Application/BlockBuilder/Blocks/Movement), sons e música do hub, gestos, guinada, o sensor de força, rádio entre hubs.
- Bluetooth clássico (não disponível no iPhone e no iPad) ou um cabo USB no Windows e no Mac.

## Hubs LEGO® com LED colorido {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor e o controle remoto: você pode definir a cor do LED do hub a partir de uma lista ou como RGB ([LED do hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led) em Ligações rápidas, *definir cor do LED para* em Blocos lógicos).

## LEGO® Powered Up Remote Control {#lego-powered-up-remote-control}

Os botões dele são entradas, então você pode dirigir um modelo com o controle remoto físico através do MOCPilot (Ligações rápidas: entrada **Hub** → Botão; Blocos lógicos: eventos de botão do hub).

## Sensores integrados {#built-in-sensors}

Nível e tensão da bateria, temperatura da placa, inclinação (arfagem, rolagem, guinada), aceleração e orientação estão disponíveis nos hubs que os têm. Ajuste **Orientação do hub** (Ligações rápidas) ou *definir orientação de inclinação para* (Blocos lógicos) de acordo com a forma como o hub está montado.

Nos Blocos lógicos, os hubs Technic Hub, Technic Move Hub, Robot Inventor e SPIKE Prime também informam sua velocidade de rotação (giroscópio, *velocidade de rotação (°/s)*), e o Technic Hub e o BOOST Move Hub informam a corrente que consomem (*corrente (mA)*). Veja [Sensores](/docs/Application/BlockBuilder/Blocks/Sensors#hub-state).
