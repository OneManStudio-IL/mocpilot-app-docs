---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad {#gamepad}

I blocchi Gamepad reagiscono a un controller di gioco e ne leggono pulsanti, levette e grilletti. La categoria compare quando **Abilita blocchi del gamepad** è attivo nella [pagina Gamepad](/docs/Application/Dashboard/Gamepad). I nomi dei pulsanti seguono il layout del controller: Xbox o Sony.

## Eventi {#events}

### `quando … è …` (Principiante) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Viene eseguito quando il pulsante selezionato viene premuto o rilasciato.

- Pulsanti (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Pulsanti (layout Sony): `croce`, `cerchio`, `quadrato`, `triangolo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stati: `premuto`, `rilasciato`

### `quando D-Pad … pulsante …` (Principiante) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Viene eseguito quando un pulsante del pad direzionale viene premuto o rilasciato.

- Direzioni: `su`, `giù`, `sinistra`, `destra`
- Stati: `premuto`, `rilasciato`

### `quando … stick …` (Principiante) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Viene eseguito quando una levetta viene spinta in una direzione, mossa o rilasciata.

- Levetta: `sinistra`, `destra`
- Stato: `su`, `giù`, `sinistra`, `destra`, `spostato`, `rilasciato`
- Uso tipico: reagire al movimento della levetta, e fermare o centrare il modello quando la levetta viene rilasciata.

## Valori {#values}

### `è … …` (Principiante) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Restituisce `true` quando il pulsante selezionato è nello stato selezionato.

- Pulsanti (layout Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Pulsanti (layout Sony): `croce`, `cerchio`, `quadrato`, `triangolo`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stati: `premuto`, `rilasciato`

### `D-Pad … pulsante …` (Principiante) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Restituisce `true` quando il pulsante selezionato del pad direzionale è nello stato selezionato.

- Direzioni: `su`, `giù`, `sinistra`, `destra`
- Stati: `premuto`, `rilasciato`

### `stick … …` (Principiante) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Restituisce la posizione di una levetta lungo un asse.

- Levetta: `sinistra`, `destra`
- Asse: `asse X`, `asse Y`
- Intervallo: da `-1` a `1` per impostazione predefinita, oppure da `-100` a `100` se lo scegli in **Intervallo dei valori del gamepad** nella pagina Gamepad.

### `… pressione` (Principiante) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Restituisce quanto è premuto un grilletto.

- Grilletti (layout Xbox): `LT`, `RT`
- Grilletti (layout Sony): `L2`, `R2`
- Intervallo: da `0` (rilasciato) a `1` per impostazione predefinita, oppure da `0` a `100` con l'**Intervallo dei valori del gamepad** più ampio.
