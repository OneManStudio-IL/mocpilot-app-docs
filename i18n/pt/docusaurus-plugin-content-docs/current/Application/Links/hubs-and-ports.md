---
id: HubsAndPorts
title: Bloco Hub e portas
description: "O bloco Hub das Ligações rápidas, a escolha das portas, as verificações das portas e a pergunta sobre porta em uso."
---

import Screenshot from '@site/src/components/Screenshot';

# Bloco Hub e portas {#hub-block-and-ports}

A saída [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) encerra uma linha depois de uma operação. Há um bloco Hub para cada hub em **Meus hubs**, então adicione seus hubs lá primeiro. Enquanto você não fizer isso, a aba mostra "Adicione hubs em Meus hubs ou indicadores no painel: eles aparecem aqui".

## O que o bloco Hub mostra {#what-the-hub-block-shows}

- o nome do hub e um **ponto de conexão** (conectado ou não);
- as **portas** como chips: A, B, C, D… nos hubs LEGO® e no SBrick (A–F no Robot Inventor e no Mould King 6.0), 1–4 no BuWizz 2.0, 1–4 mais A e B no BuWizz 3.0 Pro;
- um subtítulo: "portas A, B", "escolha as portas", "hub inteiro" (depois de uma operação para o hub inteiro) ou "tração, direção, luzes" (Technic Move no modo **Perfil de carro**).

## Escolher as portas {#choose-ports}

Toque no chip de uma porta para usá-la; toque de novo para liberá-la. Uma linha pode controlar **várias portas** ao mesmo tempo, por exemplo, dois motores de tração em A e B.

Precisa que dois motores girem em sentidos opostos? Crie duas linhas a partir da mesma entrada e adicione **Inverter** a uma delas.

## Uma porta, uma linha {#one-port-one-row}

Uma porta pertence a uma única linha. Se você escolher uma porta que outra linha já usa, o MOCPilot pergunta:

> **A porta já está em uso**: no "Technic Hub", a porta A é usada na linha 2 (Motor). Usar nesta linha? A outra linha perde esta porta e deixa de controlá-la.

**Usar nesta linha** move a porta; **Cancelar** a deixa onde estava. Uma porta usada por duas linhas (por exemplo, em um arquivo antigo) é indicada como problema: "A porta A também é usada na linha 2".

<Screenshot name="port-in-use" alt="Diálogo A porta já está em uso" width={700} />

## Verificações das portas {#port-checks}

Quando o hub está conectado, o MOCPilot sabe o que está ligado em cada porta e verifica se a operação é adequada:

| Problema | Significado |
|---|---|
| "Porta A: este dispositivo não funciona como servo (é preciso um motor com encoder)" | Servo e Girar por graus precisam de um motor com encoder |
| "Porta A: o motor não tem posição absoluta (só motores angulares)" | Ir para a posição precisa de um motor angular |
| "A porta A tem um sensor, não um motor" | o dispositivo na porta é um sensor |
| "A porta A aceita só comandos simples de velocidade: sem controle de posição" | esta porta não consegue controlar posições |
| "A porta A não tem LED: use as portas 1-4" | Cor da porta funciona só nas portas 1–4 do BuWizz 3.0 Pro |
| "Luzes do sensor: escolha uma porta, a do sensor de distância" | Luzes do sensor aceita exatamente uma porta |
| "Porta A: nenhum sensor de cor nela" | Luzes do sensor de cor e as entradas de matiz, saturação e brilho da cor precisam de um sensor de cor na porta |

As operações que um hub não sabe executar não são oferecidas para ele. Se você trocar o hub de uma linha, a linha informa qual operação não é compatível, por exemplo, "Freio: só Technic Move (… não tem comando de freio)".

## Technic Move Hub {#technic-move-hub}

O Technic Move Hub (dos carros de controle remoto LEGO® Technic) pode ser controlado de duas maneiras. Escolha uma com **Controlo** na janela do bloco Hub: **Perfil de carro** (padrão) ou **Portas**. A escolha pertence ao hub, então todos os blocos Hub desse hub usam a mesma.

- **Perfil de carro**: o hub é controlado por função, não por porta. O bloco Hub dele mostra **tração, direção, luzes** e não aceita portas. Use **Motor** ou **Motor por tempo** para a tração, **Servo** para a direção, **Luz** para as luzes e **Freio**, **Boost** e **Pulso de potência** para as funções especiais. Tração, direção, luzes, freio e boost só podem ser usados por uma linha cada ("A linha 2 já controla a tração deste Technic Move").
- **Portas**: o hub funciona como os outros hubs com portas. Os motores dele são as portas `A`, `B` (os motores de tração) e `C` (o motor de direção): **Motor**, **Motor por tempo**, **Servo** (com a calibração **Auto** em `C`), **Girar por graus**, **Ir para a posição**, **Ao parar** e **Aceleração do hub** funcionam neles. As seis luzes dele são as portas `1`–`6` das linhas **Luz**. Uma [Entrada Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) lê a velocidade e o ângulo dos motores. **Freio**, **Boost** e **Pulso de potência** só funcionam no modo **Perfil de carro**.

Uma linha que não combina com o modo do hub é um problema que diz o que mudar: "… é controlado pelo seu perfil de carro: mude o hub para «Portas» para isto" ou "… é controlado porta a porta: mude o hub para «Perfil de carro» para isto". Os perfis criados antes de existir essa escolha abrem no modo **Perfil de carro**.

Para carregar uma configuração de carro no hub (Porsche, Lamborghini, Batmobile), use **Meus hubs → Selecionar configuração**. Veja [Configurações do Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Os hubs Mould King só recebem comandos, por isso não têm entradas nem dão retorno de conexão. Para trocar o canal de controle do hub, use a operação [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
