---
id: Gamepad
title: Manette de jeu
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Manette de jeu

Les blocs de manette réagissent à une manette de jeu et lisent ses boutons, ses sticks et ses gâchettes. La catégorie apparaît lorsque **Activer les blocs de manette** est activé sur la [page Manette de jeu](/docs/Application/Dashboard/Gamepad). Les noms des boutons suivent la disposition de la manette : Xbox ou Sony.

## Événements {#events}

### `quand … est …` (Débutant) {#block_gamepad_event_when_button_is}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is.svg')} alt="block_gamepad_event_when_button_is.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_event_when_button_is_sony.svg')} alt="block_gamepad_event_when_button_is_sony.svg" />
</div>

S’exécute lorsque le bouton sélectionné est appuyé ou relâché.

- Boutons (disposition Xbox) : `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Boutons (disposition Sony) : `croix`, `cercle`, `carré`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- États : `appuyé`, `relâché`

### `lorsque D-Pad … bouton …` (Débutant) {#block_gamepad_event_when_dpad_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_dpad_is.svg')} alt="block_gamepad_event_when_dpad_is.svg" />

S’exécute lorsqu’un bouton de la croix directionnelle est appuyé ou relâché.

- Directions : `haut`, `bas`, `gauche`, `droite`
- États : `appuyé`, `relâché`

### `quand … joystick …` (Débutant) {#block_gamepad_event_when_thumbstick_is}

<img src={useBaseUrl('/img/blocks/block_gamepad_event_when_thumbstick_is.svg')} alt="block_gamepad_event_when_thumbstick_is.svg" />

S’exécute lorsqu’un stick est poussé dans une direction, déplacé ou relâché.

- Stick : `gauche`, `droite`
- État : `haut`, `bas`, `gauche`, `droite`, `déplacé`, `relâché`
- Utilisation type : réagir au mouvement du stick, et arrêter ou recentrer le modèle quand le stick est relâché.

## Valeurs {#values}

### `est-ce que … …` (Débutant) {#block_gamepad_button_value_boolean}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean.svg')} alt="block_gamepad_button_value_boolean.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_button_value_boolean_sony.svg')} alt="block_gamepad_button_value_boolean_sony.svg" />
</div>

Renvoie `true` lorsque le bouton sélectionné est dans l’état sélectionné.

- Boutons (disposition Xbox) : `A`, `B`, `X`, `Y`, `LB`, `RB`, `LT`, `RT`, `LSB`, `RSB`
- Boutons (disposition Sony) : `croix`, `cercle`, `carré`, `triangle`, `L1`, `R1`, `L2`, `R2`, `L3`, `R3`
- États : `appuyé`, `relâché`

### `D-Pad … bouton …` (Débutant) {#block_gamepad_dpad_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_gamepad_dpad_button_value_boolean.svg')} alt="block_gamepad_dpad_button_value_boolean.svg" />

Renvoie `true` lorsque le bouton sélectionné de la croix directionnelle est dans l’état sélectionné.

- Directions : `haut`, `bas`, `gauche`, `droite`
- États : `appuyé`, `relâché`

### `joystick … …` (Débutant) {#block_gamepad_thumbstick_value_float}

<img src={useBaseUrl('/img/blocks/block_gamepad_thumbstick_value_float.svg')} alt="block_gamepad_thumbstick_value_float.svg" />

Renvoie la position d’un stick sur un axe.

- Stick : `gauche`, `droite`
- Axe : `axe X`, `axe Y`
- Plage : de `-1` à `1` par défaut, ou de `-100` à `100` si vous le choisissez dans **Plage de valeurs de la manette** sur la page Manette de jeu.

### `… pression` (Débutant) {#block_gamepad_trigger_pressure_value_float}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float.svg')} alt="block_gamepad_trigger_pressure_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_gamepad_trigger_pressure_value_float_sony.svg')} alt="block_gamepad_trigger_pressure_value_float_sony.svg" />
</div>

Renvoie à quel point une gâchette est enfoncée.

- Gâchettes (disposition Xbox) : `LT`, `RT`
- Gâchettes (disposition Sony) : `L2`, `R2`
- Plage : de `0` (relâchée) à `1` par défaut, ou de `0` à `100` avec la **Plage de valeurs de la manette** élargie.
