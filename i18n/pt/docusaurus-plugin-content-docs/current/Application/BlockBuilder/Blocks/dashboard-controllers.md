---
id: DashboardControllers
title: Controladores na tela
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controladores na tela {#dashboard-controllers}

Estes blocos leem os controles do painel, reagem quando você os usa e mudam a aparência deles. Eles ficam na categoria **Controladores na tela**, que aparece assim que o painel tem um controle. Cada tipo de controle adiciona os seus próprios blocos; em um bloco, você escolhe o controle pelo nome, como *BTN1* ou *GEAR1*.

Faixas usadas abaixo: a maioria dos valores analógicos vai de 0 a 100, ou de −100 a 100 quando o zero fica no meio.

Nesta página:

- [Blocos para todos os controles](#blocks-for-all-controls): cor, interatividade e sons
- [Botões e interruptores](#buttons-and-switches): botão, interruptor, seletor
- [Joysticks e direcionais](#joysticks-and-d-pads)
- [Sliders e botões giratórios](#sliders-and-knobs): slider, botão giratório
- [Monitores](#monitor-blocks)
- [Volante e pedais](#steering-wheel-and-pedals)
- [Outros controles especiais](#other-special-controls): câmbio, freio de mão, setas, caixa de transferência, controlador do trem

## Blocos para todos os controles {#blocks-for-all-controls}

### `Definir a cor do controle` (Avançado) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*definir [controle] cor para [cor]*: muda a cor de destaque de um controle.

- Tipo: bloco de comando
- Funciona com os controles que têm cor de destaque (não com o volante nem com os pedais)
- Uso típico: mostrar um estado, por exemplo, um botão que fica vermelho quando a bateria está fraca

### `Definir a interatividade do controle` (Avançado) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[ativar / desativar] [controle] interatividade*: um controle desativado não reage a toques.

- Tipo: bloco de comando
- Uso típico: bloquear um controle por um tempo, por exemplo, o acelerador até que uma verificação na inicialização termine

### `Som de um controle` (Iniciante) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*som [som] de [controle]*: um dos sons de um controle, para os blocos de tocar som da categoria **Sons**.

- Tipo: bloco de valor
- Aparece quando o painel tem um controle com sons: o [volante](/docs/Application/Dashboard/SpecialControls#steering-wheel) (buzinas de carro, caminhão e carro esportivo) ou os [pedais](/docs/Application/Dashboard/SpecialControls#pedals) (freios de carro, carro esportivo e caminhão, bipe de ré)
- O som só toca se a configuração **Efeitos sonoros** do controle e o som do app estiverem ativados

## Botões e interruptores {#buttons-and-switches}

### Blocos de botão {#button-blocks}

#### `Evento de botão` (Iniciante) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*quando o botão [controle] [pressionado / liberado]*: executa o script quando o botão é pressionado ou solto.

- Tipo: bloco de evento

#### `Valor do botão (booleano)` (Iniciante) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*botão [controle] [pressionado / liberado]*: se o botão está pressionado ou solto neste momento.

- Tipo: bloco de valor, `true` / `false`

### Blocos de interruptor {#switch-blocks}

#### `Evento de interruptor` (Iniciante) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*quando interruptor [controle] está alternado [ligado / desligado]*: executa o script quando o interruptor é ligado ou desligado.

- Tipo: bloco de evento

#### `Valor do interruptor (booleano)` (Iniciante) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*interruptor [controle] [ligado / desligado]*: se o interruptor está ligado ou desligado.

- Tipo: bloco de valor, `true` / `false`

### Blocos de seletor {#stepper-blocks}

Estes blocos funcionam com o seletor e com o seletor vertical.

#### `Evento de seletor` (Iniciante) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*quando o interruptor de passo [controle] [qualquer / redefinir / menos / mais] [pressionado / liberado]*: executa o script quando um botão do seletor é pressionado ou solto (**qualquer** significa qualquer um deles).

- Tipo: bloco de evento

#### `Valor do seletor (número)` (Iniciante) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*interruptor de passo [controle]*: o número do passo atual.

- Tipo: bloco de valor

## Joysticks e direcionais {#joysticks-and-d-pads}

### Blocos de joystick {#joystick-blocks}

#### `Evento de joystick` (Iniciante) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*quando o joystick [controle] [cima / baixo / esquerda / direita / movido / liberado]*: executa o script quando a alavanca é empurrada em uma direção, movida de qualquer forma ou solta.

- Tipo: bloco de evento

#### `Valor do joystick (número)` (Iniciante) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [controle] [eixo X / eixo Y]*: a posição da alavanca em um eixo, de −100 a 100; o centro é 0.

- Tipo: bloco de valor

#### `Valor do joystick (booleano)` (Iniciante) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*é joystick [controle] [pressionado / liberado]*: se há um dedo no joystick.

- Tipo: bloco de valor, `true` / `false`

### Blocos de direcional {#d-pad-blocks}

#### `Evento de direcional` (Iniciante) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*quando o D-pad [controle] [cima / baixo / esquerda / direita] botão [pressionado / liberado]*: executa o script quando um botão do direcional é pressionado ou solto.

- Tipo: bloco de evento

#### `Valor do direcional (booleano)` (Iniciante) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*painel direcional [controle] [cima / baixo / esquerda / direita] botão [pressionado / liberado]*: se um botão do direcional está pressionado ou solto neste momento.

- Tipo: bloco de valor, `true` / `false`

## Sliders e botões giratórios {#sliders-and-knobs}

### Blocos de slider {#slider-blocks}

Estes blocos funcionam com o slider e com o slider vertical.

#### `Evento de slider` (Iniciante) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*quando o controle deslizante [controle] [baixo / alto / movido / liberado]*: executa o script quando o cursor chega à extremidade baixa ou alta, se move ou é solto.

- Tipo: bloco de evento

#### `Valor do slider (número)` (Iniciante) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*deslizador [controle]*: a posição do cursor, de 0 a 100, ou de −100 a 100 com **Valores negativos**.

- Tipo: bloco de valor

### Blocos de botão giratório {#rotary-knob-blocks}

Blocos do [botão giratório](/docs/Application/Dashboard/ControlTypes#rotary-knob) dos temas pagos.

#### `Evento de botão giratório` (Iniciante) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*quando botão giratório [controle] [girado / pressionado / liberado / girado ao mínimo / girado ao máximo]*: executa o script quando o botão é girado, tocado, solto ou chega a uma das extremidades.

- Tipo: bloco de evento

#### `Valor do botão giratório (número)` (Iniciante) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*valor do botão giratório [controle]*: a posição do botão, de 0 a 100, ou de −100 a 100 com **Zero no centro (-100..100)**.

- Tipo: bloco de valor

#### `Valor do botão giratório (booleano)` (Iniciante) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*botão giratório [controle] [pressionado / no mínimo / no máximo] ?*: se há um dedo no botão ou se ele está em uma das extremidades.

- Tipo: bloco de valor, `true` / `false`

## Monitores {#monitor-blocks}

Blocos dos [monitores](/docs/Application/Dashboard/Indicators).

### `Mostrar no monitor` (Iniciante) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*mostrar [valor] em [controle] monitor*: mostra um texto ou um valor em um **Monitor**.

- Tipo: bloco de comando
- Uso típico: mostrar o nível da bateria, o ângulo de um motor, o dispositivo conectado a uma porta do hub ou o nome de um modo

### `Definir valor do monitor` (Iniciante) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*definir [valor] para [controle] monitor*: define o valor de um monitor **Nível da bateria** ou **Velocímetro**.

- Tipo: bloco de comando

### `Definir valor do monitor de inclinação` (Iniciante) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*definir [valor] para [controle] [inclinação / rotação] monitor*: define a arfagem ou a rolagem mostrada em um **Monitor de inclinação**.

- Tipo: bloco de comando

## Volante e pedais {#steering-wheel-and-pedals}

### Blocos de volante {#steering-wheel-blocks}

Blocos do [volante](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Evento de volante` (Iniciante) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*quando o volante [controle] [movido / pressionado / liberado]*: executa o script quando o volante gira, ou quando você o toca ou solta.

- Tipo: bloco de evento

#### `Valor do volante (número)` (Iniciante) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*volante [controle]*: o ângulo de direção, de −100 (todo à esquerda) a 100 (todo à direita).

- Tipo: bloco de valor

#### `Valor do volante (booleano)` (Iniciante) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*volante [controle] [pressionado / liberado]*: se há um dedo no volante.

- Tipo: bloco de valor, `true` / `false`

### Blocos de pedais {#pedals-blocks}

Blocos dos [pedais](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Evento de pedais` (Iniciante) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*quando os pedais [controle] [qualquer / freio / aceleração] [movido / pressionado / liberado]*: executa o script quando um pedal se move, é pressionado ou é solto.

- Tipo: bloco de evento

#### `Valor dos pedais (número)` (Iniciante) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedais [controle] [aceleração / freio]*: o quanto o acelerador ou o freio está pressionado, de 0 a 100.

- Tipo: bloco de valor

#### `Valor dos pedais (booleano)` (Iniciante) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedal [controle] [aceleração / freio] [pressionado / liberado]*: se um pedal está pressionado.

- Tipo: bloco de valor, `true` / `false`

## Outros controles especiais {#other-special-controls}

Blocos dos outros [controles especiais](/docs/Application/Dashboard/SpecialControls).

### Blocos de câmbio {#gearbox-blocks}

Blocos dos [câmbios manual e automático](/docs/Application/Dashboard/SpecialControls#gear-shifter). Valores das marchas: manual −1 = R, 0 = N, 1…6 = marchas para frente; automático −2 = P, −1 = R, 0 = N, 1 = D.

#### `Evento de câmbio` (Iniciante) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*quando câmbio [controle] [troca de marcha / sobe a marcha / reduz a marcha / coloca em ponto morto / engata a ré / engata o estacionamento]*: executa o script quando a marcha muda. **Sobe a marcha** e **reduz a marcha** significam uma mudança para um valor maior ou menor.

- Tipo: bloco de evento

#### `Marcha` (Iniciante) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*marcha [controle]*: a marcha engatada (veja os valores acima).

- Tipo: bloco de valor

#### `Estado do câmbio (booleano)` (Iniciante) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*câmbio [controle] [em ponto morto / em ré / numa marcha à frente / em estacionamento] ?*

- Tipo: bloco de valor, `true` / `false`
- **Numa marcha à frente** é verdadeiro em qualquer marcha para frente do câmbio manual e em D do automático

#### `Número de marchas` (Avançado) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*marchas de [controle]*: a configuração **Número de marchas** do câmbio.

- Tipo: bloco de valor
- Uso típico: o encaixe *de* do bloco *dirigir* do Simulador

### Blocos de freio de mão {#handbrake-blocks}

Blocos do [freio de mão](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Evento de freio de mão` (Iniciante) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*quando freio de mão [controle] [puxado / travado / destravado / liberado]*: executa o script quando a alavanca é puxada, travada, destravada ou solta.

- Tipo: bloco de evento

#### `Força do freio de mão` (Iniciante) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*força do freio de mão [controle]*: o quanto a alavanca está puxada, de 0 a 100.

- Tipo: bloco de valor

#### `Estado do freio de mão (booleano)` (Iniciante) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*freio de mão [controle] [travado / destravado / puxado] ?* **Puxado** é verdadeiro enquanto a força está acima de 0.

- Tipo: bloco de valor, `true` / `false`

### Blocos de setas {#turn-signals-blocks}

Blocos das [setas](/docs/Application/Dashboard/SpecialControls#turn-signals). Eles veem o estado estável das setas, sem o pisca-pisca.

#### `Evento de setas` (Iniciante) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*quando setas [controle] [seta esquerda / seta direita / farol] [liga / desliga]*

- Tipo: bloco de evento

#### `Estado das setas (booleano)` (Iniciante) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*setas [controle] [seta esquerda / seta direita / farol] está ligado ?*

- Tipo: bloco de valor, `true` / `false`

### Blocos da caixa de transferência {#transfer-case-blocks}

Blocos da [caixa de transferência](/docs/Application/Dashboard/SpecialControls#transfer-case). A segunda lista nos blocos de evento e de estado tem as mesmas opções:

- **2H**, **4H**, **N**, **4L**: o seletor está nesta posição;
- **tração nas quatro rodas**: o seletor está em 4H ou 4L;
- **reduzida**: o seletor está em 4L;
- **bloqueio dianteiro**, **bloqueio central**, **bloqueio traseiro**: o bloqueio do diferencial está engatado.

#### `Evento da caixa de transferência` (Iniciante) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*quando caixa de transferência [controle] [2H / 4H / N / 4L / tração nas quatro rodas / reduzida / bloqueio dianteiro / bloqueio central / bloqueio traseiro] [é engatado / é desengatado]*: **é engatado** executa o script quando a opção passa a ser verdadeira (o seletor chega à posição ou o bloqueio é ligado), **é desengatado** quando ela deixa de ser verdadeira.

- Tipo: bloco de evento

#### `Estado da caixa de transferência (booleano)` (Iniciante) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*caixa de transferência [controle] [2H / 4H / N / 4L / tração nas quatro rodas / reduzida / bloqueio dianteiro / bloqueio central / bloqueio traseiro] está engatado ?*

- Tipo: bloco de valor, `true` / `false`

#### `Posição da caixa de transferência (número)` (Iniciante) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*posição da caixa de transferência [controle]*: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Encaixe-o no espaço *caixa de transferência* do bloco [dirigir](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive) para que o simulador use a caixa de transferência.

- Tipo: bloco de valor

### Blocos de controlador do trem {#train-controller-blocks}

Blocos do [controlador do trem](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Evento do controlador do trem` (Iniciante) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*quando controlador do trem [controle] [ponto alterado / ponto aumentado / ponto reduzido / acelerador fechado / reversor movido / alavanca solta]*: **Acelerador fechado** significa que a alavanca voltou ao ponto 0.

- Tipo: bloco de evento

#### `Valor do controlador do trem (número)` (Iniciante) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*controlador do trem [controle] [tração / ponto de potência / reversor]*:

- **tração**: de −100 a 100, o ponto em porcentagem com o sinal do sentido;
- **ponto de potência**: de 0 a 8;
- **reversor**: 1 = para frente, 0 = neutro, −1 = ré.
- Tipo: bloco de valor

#### `Estado do controlador do trem (booleano)` (Iniciante) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*controlador do trem [controle] [para frente / em ré / em neutro / no ponto 0] ?*

- Tipo: bloco de valor, `true` / `false`
