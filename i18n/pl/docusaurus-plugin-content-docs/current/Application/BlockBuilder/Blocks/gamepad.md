---
id: Gamepad
title: Gamepad
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Gamepad

Bloki gamepada reagują na kontroler do gier i odczytują jego przyciski, drążki i spusty. Kategoria pojawia się, gdy na [stronie Gamepad](/docs/Application/Dashboard/Gamepad) włączona jest opcja **Włącz bloki gamepada**. Nazwy przycisków zależą od układu kontrolera: Xbox lub Sony.

## Zdarzenia {#events}

### `gdy … jest …` (Początkujący) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Uruchamia się, gdy wybrany przycisk zostanie naciśnięty lub zwolniony.

- Przyciski (układ Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Przyciski (układ Sony): `krzyż`, `okrąg`, `kwadrat`, `trójkąt`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stany: `naciśnięty`, `zwolniony`

### `kiedy D-Pad … przycisk …` (Początkujący) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Uruchamia się, gdy przycisk pada kierunkowego zostanie naciśnięty lub zwolniony.

- Kierunki: `góra`, `dół`, `lewo`, `prawo`
- Stany: `naciśnięty`, `zwolniony`

### `gdy … drążek …` (Początkujący) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Uruchamia się, gdy drążek zostanie wychylony w danym kierunku, przesunięty lub puszczony.

- Drążek: `lewy`, `prawy`
- Stan: `góra`, `dół`, `lewo`, `prawo`, `przesunięty`, `zwolniony`
- Typowe zastosowanie: reakcja na ruch drążka oraz zatrzymanie lub wyśrodkowanie modelu po puszczeniu drążka.

## Wartości {#values}

### `jest … …` (Początkujący) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Zwraca `true`, gdy wybrany przycisk jest w wybranym stanie.

- Przyciski (układ Xbox): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Przyciski (układ Sony): `krzyż`, `okrąg`, `kwadrat`, `trójkąt`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Stany: `naciśnięty`, `zwolniony`

### `D-Pad … przycisk …` (Początkujący) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Zwraca `true`, gdy wybrany przycisk pada kierunkowego jest w wybranym stanie.

- Kierunki: `góra`, `dół`, `lewo`, `prawo`
- Stany: `naciśnięty`, `zwolniony`

### `drążek … …` (Początkujący) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Zwraca położenie drążka wzdłuż jednej osi.

- Drążek: `lewy`, `prawy`
- Oś: `oś X`, `oś Y`
- Zakres: domyślnie od `-1` do `1` albo od `-100` do `100`, jeśli wybierzesz to w ustawieniu **Zakres wartości gamepada** na stronie Gamepad.

### `… ciśnienie` (Początkujący) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Zwraca, jak mocno wciśnięty jest spust.

- Spusty (układ Xbox): `LT`, `RT`
- Spusty (układ Sony): `L2`, `R2`
- Zakres: domyślnie od `0` (puszczony) do `1` albo od `0` do `100` przy szerszym ustawieniu **Zakres wartości gamepada**.
