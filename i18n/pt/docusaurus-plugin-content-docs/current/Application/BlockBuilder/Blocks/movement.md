---
id: Movement
title: Movimento
description: "Os blocos de movimento dirigem um robô de dois motores no hub MINDSTORMS Robot Inventor ou SPIKE: mover, esterçar, tração tipo tanque, velocidade, aceleração e parada."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Movimento

Os blocos de movimento dirigem um robô com duas rodas, cada uma girada pelo seu próprio motor, como uma única unidade: "mover para a frente 10 cm", "girar no sentido horário por 1 rotação", "esterçar 30 para a direita". São os mesmos blocos de movimento do app LEGO® MINDSTORMS® Robot Inventor. A categoria aparece em primeiro lugar na paleta quando o perfil tem um [hub Robot Inventor ou SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Todos os blocos dela têm o ícone preto e branco do hub.

## Como o movimento funciona {#how-movement-works}

- **Motores de movimento.** Por padrão, a roda esquerda fica na porta **A** e a roda direita na porta **B**. Use [definir motores de movimento para](#block_ri_move_set_pair) para escolher outras portas. Num robô, os dois motores ficam virados um para o outro, por isso o MOCPilot gira o da direita no sentido contrário: uma velocidade positiva sempre leva o robô para a frente.
- **Velocidade de movimento.** Os blocos sem velocidade própria usam a velocidade de movimento: **50 %** até que [definir velocidade de movimento para](#block_ri_move_set_speed) a mude.
- **Esterçamento** é um número de −100 a 100. **0** anda em linha reta. Valores positivos viram para a direita, negativos para a esquerda: a roda de dentro desacelera, tanto mais quanto mais perto de ±100 estiver o esterçamento (com 50 ela gira com metade da velocidade). Com **100** ou **−100**, as rodas giram em sentidos opostos e o robô gira no lugar.
- **Unidades.** As distâncias podem ser em `cm`, `polegadas`, `rotações` ou `graus` dos motores, e muitos blocos também aceitam `segundos`. Centímetros e polegadas usam a distância por rotação do motor: **17,5 cm** por padrão (a roda do Robot Inventor), alterada com [definir 1 rotação do motor para](#block_ri_move_set_distance). Uma distância negativa leva o robô para o outro lado.
- **Espera.** Os blocos com distância (`mover … por …`) esperam até o robô percorrer essa distância. Os blocos que começam com **começar a mover** retornam na hora: o robô continua andando até **parar de mover** ou outro bloco de movimento.

## Configurações de movimento {#movement-settings}

### `definir motores de movimento para … …` (Iniciante) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Escolhe as portas do motor da roda esquerda e da roda direita. Padrão: **A** e **B**. As duas portas têm de ser diferentes.

### `definir velocidade de movimento para … %` (Iniciante) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Define a velocidade, de −100 a 100 %, dos blocos de movimento que não têm velocidade própria. Padrão: 50 %. Não liga os motores.

### `definir 1 rotação do motor para … cm / polegadas percorridos` (Avançado) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Diz ao MOCPilot quanto o robô anda numa rotação do motor, para que as distâncias em centímetros e polegadas saiam certas. Padrão: 17,5 cm. Meça o seu robô: faça-o **mover para a frente por 1 rotação** e meça a distância. O valor 0 é ignorado.

### `definir aceleração de movimento para …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Com que rapidez os motores de movimento aceleram e desaceleram.

- Opções: `padrão`, `rápido` (0,1 s), `equilibrado` (0,35 s), `suave` (0,8 s), `lento` (1,2 s), `muito lento` (2 s): o tempo da parada até a velocidade máxima.

### `definir motores de movimento para … ao parar` (Avançado) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
O que os motores fazem quando o robô para.

- `rolamento livre`: os motores giram livremente e o robô para rolando.
- `freio` (padrão): os motores freiam.
- `manter posição`: os motores mantêm ativamente a posição, mesmo que você empurre o robô.

## Mover {#moving}

### `mover … por …` (Iniciante) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Move o robô com a velocidade de movimento e espera até terminar.

- Direção: `para a frente`, `para trás`, `no sentido horário`, `no sentido anti-horário` (as duas últimas giram o robô no lugar).
- Unidades: `cm`, `polegadas`, `rotações`, `graus`, `segundos`. Padrão: 10 cm.

### `mover … por …` (com esterçamento) (Iniciante) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Move o robô com o esterçamento indicado (−100 a 100) e a velocidade de movimento, e espera até terminar. Com esterçamento 30, o robô faz uma curva para a direita.

- Unidades: `cm`, `polegadas`, `rotações`, `graus`, `segundos`.

### `mover … por … em … % velocidade` (Avançado) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
O mesmo, com velocidade própria em vez da velocidade de movimento.

- Unidades: `cm`, `polegadas`, `rotações`, `graus`.

### `mover por … em … … % velocidade` (Avançado) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Tração tipo tanque por uma distância: define separadamente a velocidade da roda esquerda e da direita (−100 a 100 % cada) e espera até o robô percorrer essa distância.

- Unidades: `cm`, `polegadas`, `rotações`, `graus`, `segundos`.

### `começar a mover …` (Iniciante) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Começa a mover com o esterçamento indicado e a velocidade de movimento, e passa na hora para o próximo bloco.

### `começar a mover … em … % velocidade` (Avançado) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Começa a mover com o esterçamento e a velocidade indicados.

- Uso típico: coloque um slider do painel no encaixe do esterçamento e um pedal no encaixe da velocidade.

### `começar a mover … em … % potência` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Como o bloco acima, mas define a **potência** dos motores em vez de uma velocidade regulada: os motores não tentam manter a velocidade quando o robô sobe uma rampa ou leva carga.

### `começar a mover a … … % velocidade` (Avançado) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Tração tipo tanque: liga a roda esquerda e a direita, cada uma com a sua velocidade.

### `começar a mover a … … % potência` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Tração tipo tanque com a potência do motor de cada roda em vez de uma velocidade regulada.

### `parar de mover` (Iniciante) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Para os dois motores de movimento da forma que **definir motores de movimento para … ao parar** indica (freio por padrão).

### `o movimento foi interrompido?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true` se o último movimento não terminou: outro bloco de movimento ou **parar de mover** o interrompeu.
