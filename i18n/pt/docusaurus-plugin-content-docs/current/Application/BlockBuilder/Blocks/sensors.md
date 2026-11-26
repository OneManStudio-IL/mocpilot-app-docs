---
id: Sensors
title: Sensores
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sensores {#sensors}

Os blocos de sensores leem o estado do seu celular ou tablet, o temporizador do programa, os hubs e os sensores conectados a eles. Use os valores deles em condições, eventos e cálculos.

Nesta página:

- [Estado do hub](#hub-state): bateria, tensão, temperatura, corrente e modo de potência
- [Botões, inclinação e orientação do hub](#hub-tilt-and-orientation)
- [Sensores nas portas](#sensors-on-ports): qualquer dispositivo, sensor de cor Technic, sensor de distância Technic, sensor de cor e distância BOOST, sensores WeDo 2.0
- [Hub Robot Inventor](#robot-inventor-sensors): sensor de força, gestos, orientação, guinada, inclinação e rotação, inclinação para um lado, rádio entre hubs
- [Este dispositivo](#this-device): o celular, tablet ou computador que executa o MOCPilot
- [Temporizador](#timer)

## Estado do hub {#hub-state}

Estes blocos não existem para hubs Mould King, que não informam nenhum dado.

### `… % bateria` (Iniciante) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Retorna o nível da bateria do hub, em porcentagem.

### `… tensão da bateria (V)` (Avançado) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Retorna a tensão da bateria do hub, em volts.

- Hubs: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Retorna `NaN` quando o hub não está conectado.

### `… temperatura (C°)` (Avançado) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Retorna a temperatura da eletrônica do hub, em graus Celsius.

- Hubs: Technic Hub, BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `… corrente (mA)` (Guru) {#block_hubs_all_sensors_hub_current}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_hub_current.svg')} alt="block_hubs_all_sensors_hub_current.svg" />
Retorna a corrente total consumida pelo hub, em miliampères.

- Hubs: Technic Hub.
- Uso típico: parar uma garra ou um guincho quando a carga aumenta.

### `obter … tensão de saída (V)` (Guru) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Retorna a tensão que o hub fornece às portas no momento, em volts.

- Hubs: BuWizz 2.

### `… corrente (A)` (Guru) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Retorna a corrente consumida na porta selecionada, em amperes.

- Hubs: BuWizz 2, BuWizz 3.

### `definir modo de energia …` (Technic Move Hub) (Iniciante) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Define o modo de potência de um Technic Move Hub.

- Modos: `normal`, `impulso`
- Hubs: Technic Move Hub.

## Botões, inclinação e orientação do hub {#hub-tilt-and-orientation}

O bloco de botão lista os hubs com que funciona. Os blocos de inclinação e orientação funcionam no BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Technic Move Hub e Robot Inventor. No Technic Move Hub, eles são calculados a partir do acelerômetro dele para o hub montado com o botão para baixo, como nos modelos de carro LEGO; ele não tem `guinada` nem **definir … orientação de inclinação para …**.

### `está … … botão …` (Iniciante) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Retorna `true` quando o botão do hub selecionado está no estado selecionado.

- Estados: `pressionado`, `liberado`
- Hubs: hubs LEGO Powered Up, WeDo 2.0 e Robot Inventor. A lista de botões depende do hub (normalmente `centro`).

### `… … ângulo` (Iniciante) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Retorna o ângulo de inclinação do hub.

- Ângulos: `inclinação`, `rotação`, `guinada`
- `guinada` só está disponível no Technic Hub e no Robot Inventor.

### `… … acelerômetro (m/s²)` (Guru) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Retorna a leitura bruta do acelerômetro do hub em um eixo.

- Eixos: `x`, `y`, `z`

### `… … aceleração (m/s²)` (Guru) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Retorna a aceleração do hub em um eixo.

- Eixos: `x`, `y`, `z`

### `… … velocidade de rotação (°/s)` (Guru) {#block_hubs_all_sensors_gyro}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_gyro.svg')} alt="block_hubs_all_sensors_gyro.svg" />
Retorna a velocidade com que o hub gira em torno de um eixo, em graus por segundo (do giroscópio do hub).

- Eixos: `x`, `y`, `z`. `z` é o giro no próprio lugar (positivo = para a esquerda com o hub deitado); `x` e `y` são a rolagem e a arfagem.
- Hubs: Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime.
- Uso típico: manter um veículo andando em linha reta, perceber que um modelo está girando ou tombando.

### `obter … orientação …` (Iniciante) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Retorna qual lado do hub está virado para cima.

- Saída: `texto` ou `índice`
- Valores: `Frente`, `Superior`, `Direita`, `Traseira`, `Inferior`, `Esquerda`

### `… orientação …` (Iniciante) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Retorna `true` quando o lado selecionado do hub está virado para cima.

- Opções: `Frente`, `Superior`, `Direita`, `Traseira`, `Inferior`, `Esquerda`

### `definir … orientação de inclinação para …` (Avançado) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Informa ao hub como ele está montado no modelo, para que a inclinação e a orientação sejam medidas a partir dessa posição.

- Opções: `Frente`, `Superior`, `Direita`, `Traseira`, `Inferior`, `Esquerda`
- Não disponível para o Technic Move Hub.

## Sensores nas portas {#sensors-on-ports}

Os blocos dos sensores Technic e BOOST abaixo funcionam no City Hub, Technic Hub, BOOST Move Hub e no hub MINDSTORMS Robot Inventor (não SBrick, BuWizz, WeDo 2.0 nem Mould King).

### Qualquer dispositivo em uma porta {#any-port-device}

#### `… tipo de dispositivo` (Iniciante) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Retorna o tipo do dispositivo conectado à porta selecionada.

- Hubs: todos os hubs com portas, exceto SBrick, SBrick Plus, BuWizz 2 e Technic Move Hub.
- Uso típico: verificar o que está conectado antes de executar blocos específicos de um dispositivo.

### Sensor de cor Technic {#technic-color-sensor}

#### Sensor Technic: `definir modo para …` (Avançado) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Muda o sensor de cor Technic para o modo selecionado.

- Modos: `padrão`, `ambiente`
- Mudar o modo pode afetar o seu programa de formas inesperadas: no modo `ambiente`, o sensor não consegue ler cores nem luz refletida.

#### Sensor Technic: `cor …` (Iniciante) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Retorna a cor vista pelo sensor de cor Technic.

- Saída: `valor` (um número) ou `cadeia` (o nome da cor)

#### Sensor Technic: `é cor …` (Iniciante) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Retorna `true` quando o sensor de cor Technic vê a cor selecionada.

#### Sensor Technic: `luz refletida (%)` (Iniciante) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Retorna quanta luz a superfície reflete de volta para o sensor de cor Technic, em porcentagem.

#### Sensor Technic: `luz refletida …` (Iniciante) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Retorna `true` quando a luz refletida se compara ao valor da forma selecionada.

- Comparação: `<`, `=`, `>`

#### Sensor Technic: `luz ambiente (%)` (Iniciante) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Retorna o brilho da luz ao redor, em porcentagem.

#### Sensor Technic: `luz ambiente …` (Iniciante) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Retorna `true` quando a luz ambiente se compara ao valor da forma selecionada.

- Comparação: `<`, `=`, `>`

#### Sensor Technic: `valor bruto …` (Iniciante) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Retorna um valor bruto da cor que o sensor vê.

- Valores: `vermelho`, `verde`, `azul`, `matiz (°)` (0–359), `saturação (%)`, `brilho (%)`
- Sensores: o sensor de cor Technic e o sensor de cor e distância BOOST. No Technic Hub, o matiz e a saturação vêm do sensor, e o brilho é calculado a partir do vermelho, do verde e do azul.
- Uso típico: distinguir pelo matiz cores que o bloco **cor** não conhece, ou tons parecidos.

### Sensor de distância Technic {#technic-distance-sensor}

#### Sensor Technic: `distância …` (Iniciante) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Retorna a distância medida pelo sensor de distância Technic.

- Unidades: `mm`, `cm`, `polegadas`, `%`

#### Sensor Technic: `está mais perto que / mais longe que / exatamente em …` (Iniciante) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Retorna `true` quando a distância medida pelo sensor de distância Technic atende à condição.

- Comparação: `mais perto que`, `mais longe que`, `exatamente em`
- Unidades: `mm`, `cm`, `polegadas`, `%`

### Sensor de cor e distância BOOST {#boost-color-and-distance-sensor}

#### Sensor BOOST: `cor …` (Iniciante) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Retorna a cor vista pelo sensor de cor e distância BOOST.

- Saída: `valor` (um número) ou `cadeia` (o nome da cor)

#### Sensor BOOST: `é cor …` (Iniciante) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Retorna `true` quando o sensor BOOST vê a cor selecionada.

#### Sensor BOOST: `distância …` (Iniciante) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Retorna a distância medida pelo sensor de cor e distância BOOST.

- Unidades: `%`, `cm`, `polegadas`

#### Sensor BOOST: `está mais perto que / mais longe que / exatamente em …` (Iniciante) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Retorna `true` quando a distância medida pelo sensor BOOST atende à condição.

- Comparação: `mais perto que`, `mais longe que`, `exatamente em`
- Unidades: `%`, `cm`, `polegadas`

#### Sensor BOOST: `luz refletida (%)` (Iniciante) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Retorna quanta luz a superfície reflete de volta para o sensor BOOST, em porcentagem, em passos de 1 %.

- Para a cor bruta (vermelho, verde, azul, matiz, saturação, brilho) deste sensor, use Sensor Technic: **valor bruto …**, que também funciona com ele.

#### Sensor BOOST: `luz refletida …` (Iniciante) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Retorna `true` quando a luz refletida se compara ao valor da forma selecionada.

- Comparação: `<`, `=`, `>`

### Sensores WeDo 2.0 {#wedo-2-sensors}

O sensor de movimento e o sensor de inclinação WeDo 2.0, no hub WeDo 2.0.

#### Sensor WeDo 2.0: `distância …` (Iniciante) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Retorna a distância medida pelo sensor de movimento WeDo 2.0.

- Unidades: `%`, `cm`, `polegadas`
- Hubs: WeDo 2.0.

#### Sensor WeDo 2.0: `está mais perto que / mais longe que / exatamente em …` (Iniciante) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Retorna `true` quando a distância medida pelo sensor de movimento WeDo 2.0 atende à condição.

- Comparação: `mais perto que`, `mais longe que`, `exatamente em`
- Unidades: `%`, `cm`, `polegadas`
- Hubs: WeDo 2.0.

#### Sensor WeDo 2.0: `ângulo …` / `direção como …` (Iniciante) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Retorna dados do sensor de inclinação WeDo 2.0: um ângulo de inclinação ou a direção para a qual ele está inclinado.

- Ângulos: `inclinação`, `rotação`
- Saída da direção: `texto` ou `número`; direções: `neutro`, `para a frente`, `para trás`, `esquerda`, `direita`, `desconhecido`
- Hubs: WeDo 2.0.

## Hub Robot Inventor {#robot-inventor-sensors}

Estes blocos vêm do app Robot Inventor e só funcionam com os [hubs MINDSTORMS Robot Inventor e SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Eles têm o ícone do hub. Os eventos deles (quando o hub é sacudido, inclinado etc.) estão na página [Eventos](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Sensor de força {#robot-inventor-force-sensor}

#### `… está pressionado / pressionado com força / solto ?` (Iniciante) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Verifica o sensor de força na porta selecionada. `pressionado com força` significa pressionado com mais de 5 newtons.

#### `… pressão em % / newton` (Iniciante) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Retorna a força com que o sensor de força é pressionado: em porcentagem (0–100) ou em newtons (0–10).

### Movimento do hub {#robot-inventor-motion}

#### `o hub está … ?` (Avançado) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true` se o hub acabou de ser movido desta forma: `tocado`, `tocado duas vezes`, `sacudido` (padrão) ou `caindo`. Um gesto conta uma vez só: depois que um bloco o lê, ele desaparece.

#### `gesto` (Guru) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Retorna o último gesto como texto: `tapped`, `doubletapped`, `shake` ou `freefall`, ou um valor vazio se não houve nenhum.

#### `está … para cima?` (Iniciante) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true` se este lado do hub está virado para cima: `frente` (a matriz de luzes), `topo`, `lado direito`, `traseira`, `base` ou `lado esquerdo`.

#### `orientação` (Guru) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Retorna o lado virado para cima como texto: `front`, `up`, `rightside`, `back`, `down` ou `leftside`.

#### `… ângulo` (Iniciante) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Retorna o ângulo do hub em graus em torno de um eixo: `guinada` (virar para a esquerda e para a direita, como uma bússola), `inclinação` (frente para cima e para baixo) ou `rotação` (inclinar para os lados).

- Uso típico: fazer um robô andar em linha reta ou virar exatamente 90°: zere a guinada e depois corrija a direção até a guinada chegar ao ângulo.

#### `definir ângulo de guinada para 0` (Iniciante) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Torna a direção atual do hub o novo zero do ângulo de guinada. O bloco espera 0,1 s para que a próxima leitura já seja contada a partir dele.

#### `velocidade angular …` (Guru) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Retorna a velocidade com que o hub gira em torno do eixo `x`, `y` ou `z` (o giroscópio), em graus por segundo.

#### `aceleração …` (Guru) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Retorna a aceleração do hub ao longo do eixo `x`, `y` ou `z`, como o hub a informa.

#### `o hub está inclinado … ?` (Avançado) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true` se o hub está inclinado nesta direção: `para cima`, `para baixo`, `para a esquerda`, `para a direita` ou `qualquer` (padrão). O hub conta como inclinado a partir de cerca de 12° em relação à horizontal; quando está inclinado nos dois sentidos, vale a inclinação maior.

### Rádio entre hubs {#robot-inventor-radio}

Os hubs Robot Inventor podem enviar sinais curtos uns aos outros pelo ar, sem o MOCPilot no meio. Um sinal tem um nome e um valor.

#### `transmitir sinal do hub … com …` (Guru) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Envia o sinal com o nome indicado (`signal` por padrão) e o valor indicado (`1`) deste hub para os hubs próximos.

#### `sinal recebido … valor` (Guru) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Retorna o último valor que este hub recebeu para o sinal com este nome, ou 0 se ainda não chegou nenhum. Para reagir no momento em que um sinal chega, use [quando o hub receber o sinal](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

## Este dispositivo {#this-device}

Estes blocos leem o celular, tablet ou computador que executa o MOCPilot.

### `dispositivo % bateria` (Iniciante) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Retorna o nível da bateria do dispositivo, em porcentagem.

### `dispositivo … ângulo` (Avançado) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Retorna o ângulo de inclinação do dispositivo.

- Ângulos: `inclinação`, `rotação`, `guinada`
- Uso típico: controlar a direção do modelo inclinando o celular.

### `dispositivo … acelerômetro (m/s²)` (Guru) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Retorna a leitura bruta do acelerômetro do dispositivo em um eixo, em m/s².

- Eixos: `x`, `y`, `z`

### `dispositivo … aceleração (m/s²)` (Guru) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Retorna a aceleração do dispositivo em um eixo, em m/s².

- Eixos: `x`, `y`, `z`

## Temporizador {#timer}

### `temporizador` (Avançado) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Retorna o tempo desde o início do programa ou desde o último **reiniciar temporizador**, em segundos.

### `reiniciar temporizador` (Avançado) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Zera o temporizador.
