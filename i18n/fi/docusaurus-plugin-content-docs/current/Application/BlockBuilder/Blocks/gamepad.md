---
id: Gamepad
title: Peliohjain
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Peliohjain {#gamepad}

Peliohjainlohkot reagoivat peliohjaimeen ja lukevat sen painikkeita, tatteja ja liipaisimia. Luokka näkyy, kun **Ota peliohjaimen lohkot käyttöön** on päällä [Peliohjain-sivulla](/docs/Application/Dashboard/Gamepad). Painikkeiden nimet noudattavat ohjaimen asettelua: Xbox tai Sony.

## Tapahtumat {#events}

### `kun … on …` (Aloittelija) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

Suoritetaan, kun valittua painiketta painetaan tai se vapautetaan.

- Painikkeet (Xbox-asettelu): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Painikkeet (Sony-asettelu): `risti`, `ympyrä`, `neliö`, `kolmio`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilat: `painettu`, `vapautettu`

### `kun D-Pad … nappi …` (Aloittelija) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

Suoritetaan, kun D-padin painiketta painetaan tai se vapautetaan.

- Suunnat: `ylös`, `alas`, `vasen`, `oikea`
- Tilat: `painettu`, `vapautettu`

### `kun … ohjain …` (Aloittelija) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

Suoritetaan, kun tattia työnnetään johonkin suuntaan, liikutetaan tai se vapautetaan.

- Tatti: `vasen`, `oikea`
- Tila: `ylös`, `alas`, `vasen`, `oikea`, `liikkuu`, `vapautettu`
- Tyypillinen käyttö: reagointi tatin liikkeeseen ja mallin pysäyttäminen tai keskittäminen, kun tatti vapautetaan.

## Arvot {#values}

### `on … …` (Aloittelija) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Palauttaa arvon `true`, kun valittu painike on valitussa tilassa.

- Painikkeet (Xbox-asettelu): `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Painikkeet (Sony-asettelu): `risti`, `ympyrä`, `neliö`, `kolmio`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- Tilat: `painettu`, `vapautettu`

### `D-Pad … painike …` (Aloittelija) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Palauttaa arvon `true`, kun valittu D-padin painike on valitussa tilassa.

- Suunnat: `ylös`, `alas`, `vasen`, `oikea`
- Tilat: `painettu`, `vapautettu`

### `ohjain … …` (Aloittelija) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Palauttaa tatin asennon yhden akselin suunnassa.

- Tatti: `vasen`, `oikea`
- Akseli: `X-akseli`, `Y-akseli`
- Alue: oletuksena `-1`…`1` tai `-100`…`100`, jos valitset sen Peliohjain-sivun asetuksessa **Peliohjaimen arvoalue**.

### `… paine` (Aloittelija) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Palauttaa, kuinka pitkälle liipaisinta on painettu.

- Liipaisimet (Xbox-asettelu): `LT`, `RT`
- Liipaisimet (Sony-asettelu): `L2`, `R2`
- Alue: oletuksena `0` (vapautettu)…`1` tai `0`…`100` laajemmalla **Peliohjaimen arvoalueella**.
