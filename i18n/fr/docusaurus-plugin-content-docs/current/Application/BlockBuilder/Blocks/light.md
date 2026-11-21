---
id: Light
title: Lumière
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Lumière

Les blocs de lumière commandent le voyant d’état du hub, les lumières branchées sur les ports et la matrice lumineuse des hubs compatibles. La catégorie apparaît lorsqu’un hub du profil a quelque chose à allumer.

## Lumières du hub et des ports {#hub-and-port-lights}

### `définir la couleur LED sur …` (Débutant) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Règle la couleur du voyant d’état du hub.

- Hubs : hubs LEGO Powered Up (y compris le Technic Move Hub), WeDo 2.0 et le hub MINDSTORMS Robot Inventor.
- Utilisation type : indiquer l’état du modèle (prêt, en marche, avertissement, erreur).

### `allumer à … % luminosité` (Débutant) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Allume les lumières branchées sur le port sélectionné à la luminosité indiquée.

- Hubs : tous les hubs à ports, sauf WeDo 2.0.
- Utilisation type : phares, éclairage réglable.

### `éteindre` (Débutant) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Éteint les lumières branchées sur le port sélectionné.

- Hubs : les mêmes que pour **allumer à … % luminosité**.

### `allumer les lumières …` (Débutant) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Allume ou éteint les phares d’un Technic Move Hub.

- Options : `éteint`, `activé`
- Hubs : Technic Move Hub.

## Matrice lumineuse {#light-matrix}

Ces blocs utilisent la matrice lumineuse 5×5 intégrée au hub MINDSTORMS Robot Inventor.

### `allumer …` (Avancé) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Affiche l’image sélectionnée sur la matrice lumineuse et passe aussitôt au bloc suivant. L’image reste affichée jusqu’à ce qu’un autre bloc modifie la matrice ou que le programme s’arrête.

### `écrire …` (Débutant) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Fait défiler le texte sur la matrice lumineuse, une lettre à la fois.

### `éteindre les pixels` (Débutant) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Éteint tous les pixels de la matrice lumineuse.

### `définir le pixel … x … y … luminosité …` (Avancé) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Règle la luminosité d’un seul pixel ; le reste de la matrice ne change pas. `x` est la colonne et `y` la rangée ; le pixel `1, 1` est dans le coin supérieur gauche.

### `faire pivoter l’orientation …` (Avancé) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Fait pivoter l’image de la matrice lumineuse de 90 degrés, dans le sens des aiguilles d’une montre ou dans le sens inverse. La nouvelle orientation s’applique aux blocs Lumière exécutés ensuite.

### `régler l’orientation sur …` (Avancé) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Règle l’orientation de l’image sur la matrice lumineuse. Elle est `à l’endroit` par défaut ; la nouvelle orientation s’applique aux blocs Lumière exécutés ensuite.

- Options : `à l’endroit`, `gauche`, `droite`, `à l’envers`

## Lumières du capteur de distance {#distance-sensor-lights}

### `allumer …` (Débutant) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Commande les lumières autour des « yeux » du capteur de distance branché sur le port sélectionné. Vous pouvez allumer ou éteindre chaque lumière, ou placer une liste dans l’emplacement pour régler la luminosité de chacune.

- Hubs : MINDSTORMS Robot Inventor.

## LED de port du BuWizz 3 {#buwizz-3-port-leds}

Ces blocs règlent la couleur de la LED située à côté d’un port du BuWizz 3.

### `définir la couleur de la LED du port sur …` (Débutant) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Règle la LED du port sur l’une des couleurs prédéfinies.

### `définir la couleur de la LED du port sur … … …` (RGB) (Avancé) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Règle la couleur de la LED du port à partir de valeurs de rouge, de vert et de bleu.

- Utilisation type : n’importe quelle couleur, transitions de couleur douces.

### `définir la couleur de la LED du port à partir de la chaîne …` (Gourou) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Règle la couleur de la LED du port à partir d’un texte.

- Utilisation type : prendre la couleur dans une variable ou une liste.
