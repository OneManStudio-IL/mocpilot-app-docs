---
id: RobotInventorHub
title: Hub MINDSTORMS Robot Inventor
description: "Conecte o hub LEGO MINDSTORMS Robot Inventor (51515) ou SPIKE Prime por Bluetooth ou USB, use os blocos dele e recupere o hub se ele parar de funcionar."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub MINDSTORMS Robot Inventor

O hub do conjunto LEGO® MINDSTORMS® Robot Inventor (51515) é o **LEGO® Technic™ Large Hub** (88016): seis portas A–F, uma matriz de luzes 5×5, um alto-falante, um giroscópio e um acelerômetro. O MOCPilot o controla com os mesmos blocos do app Robot Inventor, mais tudo o que o MOCPilot acrescenta: o painel, o gamepad e os outros hubs do perfil.

O **hub SPIKE™ Prime** (45601) é o mesmo hardware com o firmware da LEGO® Education. O MOCPilot o suporta com o firmware **SPIKE Legacy** (beta); veja [Firmware](#firmware).

## O que ele faz {#features}

- **Blocos lógicos**: todos os blocos do app Robot Inventor, veja [Blocos Robot Inventor](#blocks).
- **Ligações rápidas**: motores, sensores, a [matriz de luzes](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) e as [luzes do sensor de distância](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Monitor do hub**: bateria, orientação, inclinação e os dispositivos nas portas, veja [Monitor do hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Um programa de blocos pode ser executado de duas formas: por **streaming**, em que o MOCPilot o executa e envia comandos ao hub (mantenha o dispositivo conectado), ou por **transferência**, em que o MOCPilot o grava num dos slots de programa do hub e o hub o executa sozinho. Veja [Executar o programa no hub](#download).

## Conectar o hub {#connect}

Adicione o hub como de costume ([Adicionar e conectar um hub](/docs/Application/Hubs/ConnectingHubs)) e escolha **Lego® Large Hub** (ou **LEGO® SPIKE™ Prime Hub**). Num computador, a página de conexão tem um seletor **Bluetooth / USB** no topo. O MOCPilot lembra a sua escolha para esse modelo de hub.

### Por Bluetooth {#bluetooth}

O hub usa Bluetooth clássico, não Bluetooth Low Energy: funciona no Android, no Mac e no Windows, mas não no iPhone e no iPad.

1. Ligue o hub.
2. Emparelhe-o nas configurações de Bluetooth do dispositivo como um dispositivo Bluetooth comum (no Windows: **Configurações → Bluetooth e dispositivos → Adicionar dispositivo**). Aperte o botão Bluetooth do hub para que ele possa ser encontrado.
3. No MOCPilot, toque em **Escanear**.

### Com um cabo USB {#usb}

No Windows e no Mac, você também pode conectar o hub com o cabo USB dele. Não é preciso instalar nenhum driver da LEGO.

1. Conecte o hub ao computador com um cabo USB e ligue o hub.
2. Toque em **Conectar**.

Se o MOCPilot disser **Nenhum hub no USB**, verifique o cabo (alguns cabos só carregam) e se o hub está ligado.

<Screenshot name="robot-inventor-connect" alt="Conexão de um hub Robot Inventor: o seletor Bluetooth / USB" width={900} />

### Feche antes o app da LEGO {#close-lego-app}

O hub aceita só uma conexão. Se o app MINDSTORMS ou SPIKE estiver aberto e ocupando o hub, o MOCPilot diz **O hub está ocupado: outra aplicação está a usá-lo (LEGO MINDSTORMS ou SPIKE). Feche essa aplicação e tente novamente.** Feche o app da LEGO e conecte de novo.

## Blocos Robot Inventor {#blocks}

Quando o perfil tem um hub Robot Inventor ou SPIKE Prime, a paleta dos Blocos lógicos ganha os blocos do app Robot Inventor. Os blocos que só esse hub consegue executar têm um **ícone do hub** preto e branco.

| Categoria | Blocos Robot Inventor |
|---|---|
| [Movimento](/docs/Application/BlockBuilder/Blocks/Movement) (categoria nova) | motores de movimento, velocidade, distância por rotação, mover, esterçar, tração tipo tanque, aceleração, parada, "o movimento foi interrompido?" |
| [Motores](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | iniciar com potência, "o motor foi interrompido?", além da potência do motor e da detecção de travamento |
| [Luz](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | imagem por alguns segundos, animações com editor de quadros, brilho dos pixels, além das luzes do sensor de distância |
| [Sons](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | bipes, os sons de robô do hub, volume, efeitos sonoros, música: notas, tambores, pausas, instrumento, andamento |
| [Sensores](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | sensor de força, gestos, orientação, guinada / inclinação / rotação, zerar a guinada, velocidade angular, aceleração, inclinação para um lado, rádio entre hubs |
| [Eventos](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | quando o hub é sacudido ou tocado, fica de um lado, é inclinado, quando o sensor de força é pressionado, quando chega um sinal de rádio |

Os blocos de controle, operadores, variáveis, listas e Meus blocos do app Robot Inventor são iguais aos [blocos básicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) do próprio MOCPilot. Os blocos que os blocos gerais de hub já cobrem (velocidade e posição do motor, os sensores de cor e de distância, a matriz de luzes, o botão do hub, o temporizador) estão nas suas categorias de sempre.

## Executar o programa no hub {#download}

Como o app Robot Inventor, o MOCPilot pode gravar um programa dos Blocos lógicos num dos 20 slots de programa do hub (0–19). O hub então o executa sem o app: você pode desconectar o celular ou o computador e iniciar o programa de novo mais tarde com os botões do próprio hub.

### O botão e o cartão do slot {#slot-card}

Quando um hub Robot Inventor ou SPIKE Prime está conectado a um perfil de Blocos lógicos, aparece um botão no canto inferior direito do editor, ao lado do zoom. Ele mostra o número do slot selecionado numa pequena matriz 5×5, ou um sinal de streaming. Toque nele para abrir o cartão:

- o hub com o slot selecionado; **‹** e **›** escolhem o slot 0–19;
- **Transferência / Streaming**: como **Executar** funciona para esse hub;
- o botão de **transferência** (⤓): grava o programa no slot sem iniciá-lo;
- uma linha de estado: o progresso, *Slot 3: o programa está no hub*, ou o que deu errado.

Quando vários hubs Robot Inventor ou SPIKE Prime estão conectados, o cartão também tem um botão de hub: toque nele para escolher qual hub recebe o programa. O MOCPilot lembra o modo e o slot neste dispositivo.

<Screenshot name="robot-inventor-slot-card" alt="O cartão do slot: o hub, as setas do slot, a chave Transferência / Streaming e o botão de transferência" width={500} />

### Transferência {#download-mode}

No modo **Transferência**, **Executar** transforma o programa de blocos num programa do hub, grava-o no slot selecionado e o inicia no hub. A gravação leva alguns segundos; depois o programa roda no hub sozinho.

- Para iniciá-lo de novo mais tarde sem o app, escolha o slot com os botões esquerdo e direito do hub e aperte o botão central.
- O **botão central** do hub para o programa.
- Para voltar a executar programas a partir do MOCPilot, mude o cartão para **Streaming**.

### O que pode rodar no hub {#download-blocks}

A maioria dos blocos pode ir para o hub:

- eventos: início do programa, mensagens, condições, o temporizador, os botões do hub, sensores, gestos, orientação, inclinação e sinais de rádio;
- controle, operadores, variáveis, listas e Meus blocos;
- todos os blocos Robot Inventor e os blocos de motor, luz e sensores desse hub.

Alguns blocos precisam do app e não podem rodar só no hub: os blocos do painel e do gamepad, blocos de outros hubs, o evento do **botão central** (no hub, esse botão para o programa), os eventos de bateria e de conexão, a temperatura e a calibração da cremalheira. Se o programa tiver algum deles, nada é gravado: o cartão diz **Estes blocos não podem funcionar no hub sem a aplicação** e os lista. Remova esses blocos ou use **Streaming**.

Se a gravação falhar, a linha de estado diz por quê, por exemplo **Espaço insuficiente no hub** ou **O hub não respondeu**. Tente de novo, ou reinicie o hub se continuar falhando.

## Firmware {#firmware}

O MOCPilot funciona com o firmware LEGO do próprio hub e não o substitui:

- **Hub Robot Inventor**: o firmware do app MINDSTORMS Robot Inventor. A última versão é o firmware 1.5.6 com o software do hub 3.2.36.
- **Hub SPIKE Prime**: o firmware **SPIKE Legacy** (o do app SPIKE 2). O firmware mais novo **SPIKE App 3** não é suportado: o MOCPilot avisa quando encontra um hub assim. Instale o firmware SPIKE Legacy com o app LEGO® Education SPIKE™ Legacy e conecte de novo.

Quando o hub está pronto, ele mostra o número de um slot de programa na matriz de luzes.

## Se o hub não iniciar {#restore}

Se o hub não iniciar, ficar apagado, não mostrar o número de um slot ou tiver sido passado para o firmware SPIKE App 3, primeiro recupere-o com o app oficial:

1. Abra o app MINDSTORMS Robot Inventor (o app SPIKE Legacy, no caso de um hub SPIKE Prime) e conecte o hub com o cabo USB.
2. Inicie a atualização do hub (**Update hub firmware**). Ela regrava o firmware, o software do hub e os sons de robô e leva cerca de 6 minutos. Não desconecte o hub enquanto ela estiver em andamento.
3. Feche o app da LEGO e conecte o hub no MOCPilot.

### Modo de recuperação (DFU) {#dfu}

Só se o app oficial não enxergar o hub de jeito nenhum, você pode gravar o firmware pelo modo de recuperação do hub (DFU). Isso é para usuários experientes:

1. Desligue o hub e desconecte-o. Segure o **botão Bluetooth** e conecte o cabo USB; continue segurando até a luz do botão piscar em vermelho, verde e azul. Agora o computador vê "LEGO Technic Large Hub in DFU Mode".
2. No Windows, instale uma vez o driver WinUSB para esse dispositivo, por exemplo com o Zadig. Mac e Linux não precisam de driver.
3. Grave a imagem de firmware do app Robot Inventor (1.5.6) com o `dfu-util` no endereço `0x08008000`. O hub reinicia sozinho quando termina. Não o desconecte durante a gravação.
4. Depois, execute **Update hub firmware** no app Robot Inventor (veja acima) para recuperar o software do hub e os sons.

O DFU grava só o firmware. O próprio bootloader de recuperação não pode ser sobrescrito, então você sempre pode tentar de novo.
