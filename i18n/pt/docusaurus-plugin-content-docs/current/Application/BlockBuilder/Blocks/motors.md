---
id: Motors
title: Motores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motores {#motors}

Os blocos de motor ligam, param e posicionam motores conectados às portas do hub e ajustam como eles se movem. A categoria aparece quando algum hub do perfil tem portas de motor. Em cada bloco, você escolhe o hub e uma ou mais portas.

Alguns blocos precisam de um motor com sensor de rotação integrado (encoder), como os motores angulares Technic, e de um hub capaz de controlá-lo. Esses blocos estão marcados como "motores com encoder". Eles não estão disponíveis para os hubs SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 e Mould King. O Technic Move Hub tem o seu próprio conjunto de blocos no fim desta página.

## Acionar motores {#running-motors}

### `definir velocidade para …` (Avançado) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Define a velocidade (de −100 a 100 %) que **iniciar motor** e **executar … por** usam nestas portas. Este bloco não liga o motor sozinho.

### `iniciar motor …` (Iniciante) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Liga o motor no sentido selecionado, com a velocidade definida por **definir velocidade para**.

- Sentido: horário ou anti-horário

### `iniciar motor em … % velocidade` (Iniciante) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Liga o motor com a velocidade indicada, de −100 a 100 %. Uma velocidade negativa faz ele girar para o outro lado.

- Uso típico: dirigir com um joystick ou um slider: coloque o valor do controle no encaixe da velocidade.

### `parar motor` (Iniciante) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Para o motor.

### `executar … por …` (Avançado) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Aciona o motor no sentido selecionado por um número de rotações, graus ou segundos.

- Sentido: horário ou anti-horário
- Unidades: `rotações`, `graus`, `segundos`
- Só motores com encoder.

### `executar por … em … % velocidade` (Avançado) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Aciona o motor por um número de rotações, graus ou segundos com a velocidade indicada.

- Unidades: `rotações`, `graus`, `segundos`
- Só motores com encoder.

## Posição {#position}

### `ir … para a posição …` (Avançado) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Gira o motor até uma posição absoluta (a marca de zero do próprio motor).

- Caminho: `caminho mais curto`, `no sentido horário`, `no sentido anti-horário`
- Só motores com encoder.

### `ir para posição relativa … em … % velocidade` (Iniciante) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Gira o motor até uma posição, em graus, contada a partir do ponto definido por **definir posição relativa**.

- Uso típico: direção com servo, em que o valor do joystick dá o ângulo.
- Só motores com encoder; no BuWizz 3, use o bloco abaixo.

### `ir para posição relativa …` (BuWizz 3) (Iniciante) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
A versão para BuWizz 3 do bloco acima, sem a entrada de velocidade.

- Hubs: BuWizz 3, com motores com encoder.

### `definir posição relativa …` (Iniciante) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Declara que a posição atual do motor é o valor indicado. As posições relativas são contadas a partir dele.

- Só motores com encoder.

### `calibrar cremalheira … centro … graus …` (Iniciante) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Encontra o centro e o curso de uma cremalheira de direção.

- O motor gira a cremalheira até as duas extremidades, mede até onde ela vai e coloca o resultado nas duas variáveis que você põe nos encaixes: a posição do centro e a amplitude em graus. A cremalheira para no meio, mas a posição relativa dela ali é igual ao valor do centro, não a 0, então adicione **definir posição relativa** 0 logo depois deste bloco; depois, controle a direção com `amplitude × joystick / 100`.
- A direção precisa ter batentes mecânicos firmes nas duas extremidades (o fim da cremalheira ou das engrenagens).
- Só motores com encoder.

## Configurações do motor {#motor-settings}

### `definir motor para … ao parar` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Escolhe o que o motor faz quando para.

- `freio`: para rapidamente.
- `manter posição`: mantém ativamente a posição (útil para a direção).
- `rolamento livre`: desacelera livremente.
- Só motores com encoder.

### `ativar detecção de bloqueio …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Liga ou desliga a detecção de travamento.

- Hubs: MINDSTORMS Robot Inventor.

### `definir aceleração para …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Escolhe a rapidez com que o motor ganha velocidade.

- Opções: `padrão`, `rápido`, `equilibrado`, `suave`, `lento`, `muito lento`
- Só motores com encoder.

### `definir desaceleração para …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Escolhe a rapidez com que o motor perde velocidade.

- Opções: `padrão`, `rápido`, `equilibrado`, `suave`, `lento`, `muito lento`
- Só motores com encoder.

## Valores do motor {#motor-values}

### `posição` (Iniciante) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Retorna a posição absoluta do motor.

- Só motores com encoder.

### `posição relativa` (Iniciante) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Retorna a posição relativa do motor, em graus.

- Só motores com encoder.

### `velocidade` (Iniciante) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Retorna a velocidade atual do motor.

### `potência` (Avançado) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Retorna a potência atual do motor.

- Hubs: MINDSTORMS Robot Inventor.

## Technic Move Hub {#technic-move-hub}

O Technic Move Hub aciona os seus motores integrados com estes blocos, em vez dos blocos de porta acima.

### `iniciar motores em … % velocidade` (Iniciante) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Liga os motores de tração com a velocidade indicada.

### `pulso de potência` (Iniciante) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Envia um pulso de potência aos motores de tração.

- Uso típico: um impulso curto antes dos próximos blocos.

### `parar motores` (Iniciante) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Para os motores de tração.

### `definir o freio dos motores …` (Iniciante) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Liga ou desliga o freio dos motores de tração.

- Opções: `desligado`, `ativado`

### `definir barra de direção para …` (Iniciante) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Gira a direção até a posição indicada.

### `calibrar barra de direção` (Iniciante) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Calibra a direção com o algoritmo do próprio hub, que encontra a amplitude da direção automaticamente.

- A direção precisa ter batentes mecânicos firmes (por exemplo, as extremidades da cremalheira).
