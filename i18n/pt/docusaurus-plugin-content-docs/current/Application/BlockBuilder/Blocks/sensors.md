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

- Hubs: BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Retorna `NaN` quando o hub não está conectado.

### `… temperatura (C°)` (Avançado) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Retorna a temperatura da eletrônica do hub, em graus Celsius.

- Hubs: BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

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

O bloco de botão lista os hubs com que funciona. Os blocos de inclinação e orientação funcionam no BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub e Robot Inventor.

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

## Sensores nas portas {#sensors-on-ports}

Os blocos dos sensores Technic e BOOST abaixo funcionam no City Hub, Technic Hub, BOOST Move Hub e no hub MINDSTORMS Robot Inventor (não SBrick, BuWizz, WeDo 2.0 nem Mould King).

### Qualquer dispositivo em uma porta {#any-port-device}

#### `… tipo de dispositivo` (Iniciante) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Retorna o tipo do dispositivo conectado à porta selecionada.

- Hubs: todos os hubs com portas, exceto SBrick, SBrick Plus e BuWizz 2.
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
Retorna o valor bruto de um canal de cor do sensor de cor Technic.

- Canais: `vermelho`, `verde`, `azul`

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
Retorna quanta luz a superfície reflete de volta para o sensor BOOST, em porcentagem.

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
