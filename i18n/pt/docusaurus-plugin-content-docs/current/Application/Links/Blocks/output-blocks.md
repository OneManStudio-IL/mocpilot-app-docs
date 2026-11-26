---
id: OutputBlocks
title: Blocos de operação e saída
description: "Referência de todas as operações e saídas das Ligações rápidas: Motor, Servo, Luz, operações do Technic Move, BuWizz e Mould King, Hub, Indicador, LED do hub, Matriz de LEDs, Calibrar servos."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocos de operação e saída {#operation-and-output-blocks}

A aba **Saídas** da paleta contém as operações e as saídas. Como usá-las: [Operações e saídas](/docs/Application/Links/Operations).

- Uma **operação** diz o que fazer. Uma saída [Hub](#hub-out) precisa vir depois dela e diz onde.
- Uma **saída direta** ([Indicador](#dash-indicator), [LED do hub](#hub-led), [Matriz de LEDs](#hub-matrix), [Calibrar servos](#cmd-calibrate)) encerra a linha sozinha; a linha não pode ter operação.

**Motor**, **Servo**, **Motor por tempo** e **Luz** estão sempre na paleta. As outras operações só aparecem quando algum hub do perfil sabe executá-las.

"Ligado", abaixo, significa um sinal liga/desliga que está ligado, ou um valor de pelo menos 0,5 (com qualquer sinal).

## Operações para portas {#operations-for-ports}

### Motor {#op-motor}

Aciona o motor com o valor da entrada: quanto mais você empurra, mais rápido; 0 o para.

- Recebe: valor ou liga/desliga (ligado = velocidade máxima).
- **Ao parar**: **Padrão do hub** (padrão), **Livre**, **Freio** ou **Manter posição**.
- **Aceleração do hub**: **Padrão do hub** (padrão), **Rápida**, **Equilibrada**, **Suave**, **Lenta** ou **Muito lenta**: a rampa do próprio hub. Para uma rampa sua, use [Suave](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Detecção de travamento**: **Padrão do hub** (padrão), **Ligado** ou **Desligado**.
- Hubs: qualquer hub com portas. **Ao parar** e **Aceleração do hub** precisam de um hub com controle de posição (não SBrick, BuWizz 2.0, WeDo 2.0 nem Mould King); **Detecção de travamento** precisa do Robot Inventor. Em um Technic Move Hub, Motor controla a tração do carro no modo **Perfil de carro** e os motores `A`–`C` no modo **Portas** ([Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub)).

### Servo {#op-servo}

Controla a direção com um motor que tem encoder: a entrada −1…1 gira o motor até *centro + valor × ângulo*, e 0 o traz de volta ao centro.

- Recebe: valor ou liga/desliga.
- **Calibração**: **Manual** (padrão) ou **Auto**.
- **Ângulo**: ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 volta, ±2 voltas, ±3 voltas ou ±5 voltas (padrão ±90°). Só no modo Manual.
- **Centro**: −20°, −10°, −5°, 0°, +5°, +10° ou +20° (padrão 0°). Só no modo Manual.
- **Velocidade de giro**: 25, 50, 75 ou 100 % (padrão 100 %).
- Manual: o zero é onde o motor estava ao ser ligado, ou a posição que você definiu com **Definir como zero** (ajuste antes com **◀ 5°** / **5° ▶**).
- Auto: a cada início, o motor gira até os dois batentes; o meio vira o zero e o curso vira o ângulo. **Calibrar agora** faz isso imediatamente. A direção precisa ter batentes.
- Hubs e portas: um motor com encoder em um hub com controle de posição (não SBrick, BuWizz 2.0, WeDo 2.0 nem Mould King). Em um Technic Move Hub no modo **Perfil de carro**, Servo gira a cremalheira de direção do hub, que o próprio hub calibra; no modo **Portas**, use a porta `C` com a calibração **Auto**.

<Screenshot name="links-servo-settings" alt="Configurações de um bloco Servo" width={900} />

### Motor por tempo {#op-timed}

Aciona o motor por um tempo definido sempre que a entrada liga. A velocidade e o sentido vêm do valor da entrada naquele momento.

- Recebe: valor ou liga/desliga.
- **Tempo**: 0,5, 1, 2, 3, 5 ou 10 s (padrão 1 s).
- Hubs: qualquer hub com portas; em um Technic Move Hub no modo **Perfil de carro**, controla a tração do carro.

### Girar por graus {#op-degrees}

Gira o motor em um ângulo definido sempre que a entrada liga. Uma entrada negativa gira para o outro lado.

- Recebe: valor ou liga/desliga.
- **Graus**: 45°, 90°, 180°, 1 volta, 2 voltas, 3 voltas, 5 voltas ou 10 voltas (padrão 1 volta).
- **Velocidade**: 25, 50, 75 ou 100 % (padrão 50 %).
- Hubs e portas: um motor com encoder em um hub com controle de posição.

### Ir para a posição {#op-goto}

Gira o motor até uma posição absoluta quando a entrada liga, e até outra quando ela desliga. Ele segue pelo caminho mais curto.

- Recebe: valor ou liga/desliga.
- **Posição quando ligado**: 0°, 45°, 90°, 135°, 180°, 225°, 270° ou 315° (padrão 90°).
- **Posição quando desligado**: **Ficar** ou uma das mesmas posições (padrão 0°).
- **Velocidade**: 25, 50, 75 ou 100 % (padrão 50 %).
- Hubs e portas: um motor angular (posição absoluta) em um hub com controle de posição.

### Luz {#op-light}

Controla luzes LEGO® em uma porta.

- Recebe: valor ou liga/desliga. Com um valor, o brilho o acompanha (−1 e 1 são ambos brilho máximo).
- **Brilho**: 25, 50, 75 ou 100 % (padrão 100 %).
- **Piscar: ligado**: **Sem piscar** (padrão), 0,25, 0,5, 1 ou 2 s: quanto tempo a luz fica acesa em cada piscada.
- **Piscar: desligado**: **Igual a ligado** (padrão), 0,25, 0,5, 1 ou 2 s: quanto tempo ela fica apagada.
- Hubs: qualquer hub com portas, exceto o WeDo 2.0. Em um Technic Move Hub, Luz liga e desliga as luzes do carro no modo **Perfil de carro**, e as luzes `1`–`6` uma a uma no modo **Portas**.

### Cor da porta {#op-portcolor}

Define a cor dos LEDs das portas de um BuWizz 3.0 Pro.

- Recebe: valor ou liga/desliga.
- **Cor**: **Da lista** (padrão) ou **RGB**.
- **Cor quando ligado** (padrão Vermelho) e **Cor quando desligado** (padrão Desligado): Desligado, Rosa, Roxo, Azul, Azul-claro, Verde-claro, Verde, Amarelo, Laranja, Vermelho, Branco.
- **Vermelho**, **Verde**, **Azul** (RGB): 0, 32, 64, 128, 192 ou 255 (padrão 255, 0, 0).
- Hubs e portas: BuWizz 3.0 Pro, portas 1–4. Os LEDs se apagam quando o programa para.

### Luzes do sensor {#op-sensorlights}

Acende os quatro segmentos em volta dos "olhos" do sensor de distância Technic enquanto a entrada está ligada.

- Recebe: valor ou liga/desliga.
- **Luzes**: **Todas** (padrão), **Superior**, **Inferior**, **Esquerda**, **Direita** ou **Diagonal**.
- **Brilho**: 25, 50, 75 ou 100 % (padrão 100 %).
- Hubs e portas: Robot Inventor, SPIKE Prime e Technic Hub, uma porta com o sensor de distância. As luzes se apagam quando o programa para.

### Luzes do sensor de cor {#op-colorlights}

Acende as três luzes ao redor da lente do sensor de cor Technic (o sensor de cor SPIKE) enquanto a entrada está ligada.

- Recebe: valor ou liga/desliga.
- **Luzes**: **Todas** (padrão), 1, 2, 3, 1 + 2, 2 + 3 ou 1 + 3.
- **Brilho**: 25, 50, 75 ou 100 % (padrão 100 %).
- Hubs e portas: Technic Hub, a porta com o sensor de cor.
- Enquanto as luzes dele estão acesas, o sensor não mede nada. Quando a entrada desliga ou o programa para, as luzes se apagam e o sensor volta a medir cores. Uma linha que lê o sensor de cor em uma porta que outra linha acende é um problema ("A linha 2 acende o sensor de cor na porta A: um sensor aceso não mede nada").

## Operações para o hub inteiro {#operations-for-the-whole-hub}

O bloco Hub depois destas operações não aceita portas.

### Freio {#op-brake}

Freia o carro enquanto a entrada está ligada.

- Recebe: valor ou liga/desliga. Sem configurações.
- Hubs: Technic Move.

### Boost {#op-boost}

Coloca o hub no modo de potência boost enquanto a entrada está ligada e volta ao normal quando ela desliga.

- Recebe: valor ou liga/desliga. Sem configurações.
- Hubs: Technic Move.

### Pulso de potência {#op-pulse}

Envia um pulso de potência sempre que a entrada liga: os motores funcionam com potência máxima por cerca de dois segundos.

- Recebe: valor ou liga/desliga. Sem configurações.
- Hubs: Technic Move com a configuração **Batmobile™ Tumbler**; veja [Configurações do Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Modo de potência {#op-powermode}

Define o modo de potência de um BuWizz 2.0 quando a entrada liga e, se você escolher um, quando ela desliga.

- Recebe: valor ou liga/desliga.
- **Modo quando ligado**: **Lenta**, **Normal** (padrão), **Rápida** ou **Ludicrous**.
- **Modo quando desligado**: **Manter** (padrão) ou um dos modos.
- Hubs: BuWizz 2.0.

### Canal {#op-channel}

Troca o canal de controle de um hub Mould King quando a entrada liga e, se você escolher um, quando ela desliga.

- Recebe: valor ou liga/desliga.
- **Canal quando ligado**: **A** (padrão), **B** ou **C**.
- **Canal quando desligado**: **Manter** (padrão), **A**, **B** ou **C**.
- Hubs: Mould King 4.0 e 6.0.

## Saídas {#outputs}

### Hub {#hub-out}

Onde a operação acontece: um hub e as portas dele. Há um bloco Hub para cada hub do perfil.

- **Hub**: um hub do perfil.
- **Portas**: uma ou mais portas desse hub (A–D na maioria dos hubs e no SBrick, A–F no Robot Inventor e no Mould King 6.0, 1–4 no BuWizz 2.0, 1–4 mais A e B no BuWizz 3.0 Pro). Uma porta só pode pertencer a uma linha.
- Recebe: uma operação. Os Technic Move Hubs no modo **Perfil de carro** e as operações para o hub inteiro não aceitam portas. No modo **Portas**, um Technic Move Hub tem as portas A–C, e as luzes 1–6 para **Luz**.
- Mais: [Bloco Hub e portas](/docs/Application/Links/HubsAndPorts).

### Indicador {#dash-indicator}

Mostra o valor em um monitor do painel, como ele é.

- Recebe: valor ou liga/desliga, sem operação antes.
- **Indicador do painel**: um **Monitor de texto** (Monitor), um **Monitor de valor** (Nível da bateria, Velocímetro) ou um **Monitor de inclinação** no painel.
- **Eixo**: **Inclinação X** ou **Inclinação Y**, só para um Monitor de inclinação (uma linha por eixo).
- Um monitor de texto logo depois de um sensor do hub mostra o valor real com a unidade.

### LED do hub {#hub-led}

A luz de status colorida do hub: uma cor enquanto a entrada está ligada, outra enquanto está desligada.

- Recebe: valor ou liga/desliga, sem operação antes.
- **Hub**: um hub com LED colorido.
- **Cor**: **Da lista** (padrão) ou **RGB**.
- **Cor quando ligado** (padrão Vermelho) e **Cor quando desligado** (padrão Desligado): Desligado, Rosa, Roxo, Azul, Azul-claro, Verde-claro, Verde, Amarelo, Laranja, Vermelho, Branco.
- **Vermelho**, **Verde**, **Azul** (RGB): 0, 32, 64, 128, 192 ou 255 (padrão 255, 0, 0).
- Hubs: hubs LEGO® (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, o controle remoto Powered Up); não BuWizz, SBrick nem Mould King.

### Matriz de LEDs {#hub-matrix}

A matriz de luzes do hub.

- Recebe: valor ou liga/desliga, sem operação antes.
- **Hub**: um hub com matriz de LEDs.
- **Mostrar**: **Barra de nível** (padrão; as linhas acendem de baixo para cima conforme o valor), **Número** (o valor de −100 a 100) ou **Imagem quando ligado**.
- **Imagem**: **Coração** (padrão), **Sorriso**, **Triste**, **Visto**, **Xis**, **Seta para cima**, **Seta para baixo**, **Seta para a esquerda**, **Seta para a direita** ou **Tudo aceso**.
- **Orientação**: **Manter** (padrão), **Em pé**, **De cabeça para baixo**, **Esquerda** ou **Direita**.
- Hubs: Robot Inventor. A matriz é apagada quando o programa para.

### Calibrar servos {#cmd-calibrate}

Sempre que a entrada liga, todo [Servo](#op-servo) no modo **Auto** do programa é calibrado de novo.

- Recebe: valor ou liga/desliga, sem operação antes. Sem configurações.
- O programa precisa ter uma linha de Servo pronta no modo Auto; caso contrário, a linha informa "Nenhum servo no modo de calibração Auto neste programa".
