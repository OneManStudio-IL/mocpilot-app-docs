---
id: Events
title: Eventos
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Eventos {#events}

A categoria **Eventos** reúne os blocos que iniciam scripts quando algo acontece, além dos blocos que enviam mensagens entre scripts. Use **Adicionar mensagem** e **Excluir mensagem** no topo da categoria para gerenciar as mensagens.

## Eventos básicos {#core-events}

### `quando o programa começa` (Iniciante) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Executa o seu script uma vez, quando o programa começa.

- Uso típico: definir os valores iniciais das variáveis, colocar os motores no estado inicial, mostrar uma mensagem de "pronto".

### `quando …` (Avançado) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Executa o seu script quando a condição no encaixe passa de falsa para verdadeira. Enquanto o script é executado, o bloco espera; ele só dispara de novo depois que a condição fica falsa e depois verdadeira outra vez.

- Uso típico: reagir a um estado, por exemplo, `quando temporizador > 5 e interruptor está ligado`.

### `quando o temporizador > …` (Avançado) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Executa o seu script quando o temporizador do programa passa do valor (em segundos).

- Uso típico: ações com atraso, fases cronometradas. Zere o temporizador com **reiniciar temporizador** (Sensores).

### `quando eu receber …` (Guru) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Executa o seu script quando a mensagem selecionada é transmitida.

- Uso típico: coordenar vários scripts.

### `transmitir …` (Guru) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Envia uma mensagem a todos os scripts que começam com **quando eu receber** essa mensagem e continua imediatamente.

- Uso típico: avisar outros scripts para começarem sem esperar por eles.

### `transmitir … e esperar` (Guru) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Envia uma mensagem e pausa este script até que todos os scripts que a receberam terminem.

- Uso típico: sequências passo a passo em que a ordem importa.

## Eventos de hub {#hub-events}

Estes blocos aparecem quando algum hub do perfil os suporta. Eles não existem para hubs Mould King.

### `quando … … botão …` (Iniciante) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

É executado quando um botão do hub é pressionado ou solto.

- Opções de estado: `pressionado`, `liberado`, `alterado`
- Hubs: hubs LEGO Powered Up, WeDo 2.0 e Robot Inventor. A lista de botões depende do hub.

### `quando … está conectado / desconectado` (Iniciante) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

É executado quando o hub se conecta ou se desconecta.

- Uso típico: parar o modelo com segurança quando a conexão cai e restaurar o estado dele quando ela volta.

### `quando … % bateria alterada` (Iniciante) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

É executado quando o nível de bateria informado pelo hub muda.

- Hubs: os que informam o nível da bateria.
- Uso típico: um aviso de bateria fraca, a mudança para um modo de economia de energia.

### `quando … os dados do acelerómetro foram alterados` (Guru) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

É executado quando os valores do acelerômetro do hub mudam.

- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor.

### `quando … inclinação … ângulo alterado` (Iniciante) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

É executado quando o ângulo de inclinação do hub muda.

- Opções de ângulo: `qualquer`, `inclinação`, `rotação`, `guinada`
- Hubs: BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub, Robot Inventor. `guinada` só está disponível no Technic Hub e no Robot Inventor.

### `quando … orientação alterada` (Iniciante) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

É executado quando a orientação do hub muda, ou seja, quando outro lado do hub fica virado para cima.

- Hubs: os mesmos do evento de inclinação.

## Eventos de sensores {#sensor-events}

Estes eventos leem um sensor conectado a uma porta do hub. Hubs: City Hub, Technic Hub, BOOST Move Hub e o hub MINDSTORMS Robot Inventor (não SBrick, BuWizz, WeDo 2.0 nem Mould King).

### Sensor Technic: `quando a cor é …` (Iniciante) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

É executado quando o sensor de cor Technic vê a cor selecionada.

### Sensor Technic: `quando … mais perto que / mais longe que / exatamente em …` (Iniciante) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

É executado quando a distância medida pelo sensor de distância Technic atende à condição.

- Opções de comparação: `mais perto que`, `mais longe que`, `exatamente em`
- Unidades: `mm`, `cm`, `polegadas`, `%`

### Sensor BOOST: `quando … mais perto que / mais longe que / exatamente em …` (Iniciante) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

É executado quando a distância medida pelo sensor de cor e distância BOOST atende à condição.

- Opções de comparação: `mais perto que`, `mais longe que`, `exatamente em`
- Unidades: `%`, `cm`, `polegadas`

### Sensor BOOST: `quando a cor é …` (Iniciante) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

É executado quando o sensor de cor e distância BOOST vê a cor selecionada.

## Eventos do Robot Inventor {#robot-inventor-events}

Estes eventos vêm do app Robot Inventor e só funcionam com os [hubs MINDSTORMS Robot Inventor e SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Eles têm o ícone do hub. Os valores correspondentes estão na página [Sensores](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors).

### `quando o hub for …` (Iniciante) {#block_ri_when_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_when_gesture.svg')} alt="block_ri_when_gesture.svg" />

É executado uma vez cada vez que o hub é `tocado`, `tocado duas vezes`, `sacudido` (padrão) ou está `caindo`.

### `quando … estiver para cima` (Iniciante) {#block_ri_when_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_when_orientation.svg')} alt="block_ri_when_orientation.svg" />

É executado quando o lado selecionado do hub fica virado para cima: `frente` (a matriz de luzes, padrão), `topo`, `lado direito`, `traseira`, `base` ou `lado esquerdo`.

### `quando o hub for inclinado …` (Avançado) {#block_ri_when_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_when_tilted.svg')} alt="block_ri_when_tilted.svg" />

É executado quando o hub é inclinado `para cima`, `para baixo`, `para a esquerda`, `para a direita` ou em `qualquer` direção (padrão), em cerca de 12° ou mais.

### `quando … pressionado / pressionado com força / solto` (Iniciante) {#block_ri_when_force}

<img src={useBaseUrl('/img/blocks/block_ri_when_force.svg')} alt="block_ri_when_force.svg" />

É executado quando o sensor de força na porta selecionada é pressionado, pressionado com força (mais de 5 newtons) ou solto.

### `quando o hub receber o sinal …` (Guru) {#block_ri_when_radio}

<img src={useBaseUrl('/img/blocks/block_ri_when_radio.svg')} alt="block_ri_when_radio.svg" />

É executado quando este hub recebe de outro hub o sinal de rádio com este nome. Leia o valor dele com [sinal recebido … valor](/docs/Application/BlockBuilder/Blocks/Sensors#block_ri_radio_value).
