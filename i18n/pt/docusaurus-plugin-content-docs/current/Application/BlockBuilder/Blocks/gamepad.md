---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad {#gamepad}

Os blocos de gamepad reagem a um controle de jogo e leem os botões, analógicos e gatilhos dele. A categoria aparece quando **Ativar blocos de gamepad** está ativado na [página Gamepad](/docs/Application/Dashboard/Gamepad). Os nomes dos botões seguem o layout do controle: Xbox ou Sony.

## Eventos {#events}

### `quando … está …` (Iniciante) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

É executado quando o botão selecionado é pressionado ou solto.

- Botões (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Botões (layout Sony): `cruz`, `círculo`, `quadrado`, `triângulo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Estados: `pressionado`, `liberado`

### `quando D-Pad … botão …` (Iniciante) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

É executado quando um botão do direcional é pressionado ou solto.

- Direções: `cima`, `baixo`, `esquerda`, `direita`
- Estados: `pressionado`, `liberado`

### `quando … controle …` (Iniciante) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

É executado quando um analógico é empurrado em uma direção, movido ou solto.

- Analógico: `esquerda`, `direita`
- Estado: `cima`, `baixo`, `esquerda`, `direita`, `movido`, `liberado`
- Uso típico: reagir ao movimento do analógico e parar ou centralizar o modelo quando o analógico é solto.

## Valores {#values}

### `está … …` (Iniciante) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Retorna `true` quando o botão selecionado está no estado selecionado.

- Botões (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Botões (layout Sony): `cruz`, `círculo`, `quadrado`, `triângulo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Estados: `pressionado`, `liberado`

### `D-Pad … botão …` (Iniciante) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Retorna `true` quando o botão do direcional selecionado está no estado selecionado.

- Direções: `cima`, `baixo`, `esquerda`, `direita`
- Estados: `pressionado`, `liberado`

### `controle … …` (Iniciante) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Retorna a posição de um analógico ao longo de um eixo.

- Analógico: `esquerda`, `direita`
- Eixo: `eixo X`, `eixo Y`
- Faixa: de `-1` a `1` por padrão, ou de `-100` a `100` se você escolher isso em **Intervalo de valores do gamepad** na página Gamepad.

### `… pressão` (Iniciante) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Retorna o quanto um gatilho está pressionado.

- Gatilhos (layout Xbox): `LT`, `RT`
- Gatilhos (layout Sony): `L2`, `R2`
- Faixa: de `0` (solto) a `1` por padrão, ou de `0` a `100` com o **Intervalo de valores do gamepad** mais amplo.
