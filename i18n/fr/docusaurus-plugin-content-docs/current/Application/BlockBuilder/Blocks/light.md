---
id: Light
title: Lumière
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

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
- Technic Move Hub : les ports `1`–`6` sont les six lumières du hub, numérotées sur le hub. Chaque lumière se règle séparément, luminosité de 0 à 100 %.
- Utilisation type : phares, éclairage réglable.

### `éteindre` (Débutant) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Éteint les lumières branchées sur le port sélectionné.

- Hubs : les mêmes que pour **allumer à … % luminosité**.

### `allumer les lumières …` (Débutant) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Allume ou éteint les phares d’un Technic Move Hub via son profil de voiture.

- Options : `éteint`, `activé`
- Hubs : Technic Move Hub. Pour régler chaque lumière séparément, utilisez plutôt **allumer à … % luminosité** avec les ports `1`–`6` ; ne mélangez pas les deux sur un même hub (voir [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

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

- Hubs : [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (le bloc porte l’icône du hub).

### `allumer le capteur de couleur 1 … 2 … 3 … %` (Avancé) {#block_hubs_all_light_port_color_sensor_light_up}

Règle la luminosité des trois lumières autour de l’objectif du capteur de couleur Technic (le capteur de couleur SPIKE) branché sur le port sélectionné, de 0 à 100 % chacune.

- Hubs : Technic Hub.
- Tant que ses lumières sont allumées, le capteur ne mesure pas : ses valeurs de couleur et de lumière restent inchangées. Avant de relire le capteur, utilisez Capteur Technic : **définir le mode sur …** (`par défaut` ou `ambiant`) sur ce port. La vérification du programme dans l’éditeur de blocs signale un programme qui allume le capteur et le lit sans **définir le mode**.
- Utilisation type : un voyant sur le modèle, ou les yeux d’un robot.

## Matrice lumineuse Robot Inventor {#robot-inventor-light}

Ces blocs proviennent de l’application Robot Inventor et ne fonctionnent qu’avec les [hubs MINDSTORMS Robot Inventor et SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ils portent l’icône du hub. Touchez l’image d’un bloc pour la dessiner ; dans les blocs d’animation, elle montre la première image et le nombre d’images.

### `allumer … pendant … secondes` (Débutant) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Affiche l’image sur la matrice lumineuse pendant la durée indiquée (2 secondes par défaut), puis l’éteint. Le bloc attend que la durée soit écoulée.

### `jouer l'animation … à … images par seconde jusqu'à la fin` (Débutant) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Joue une fois les images de l’animation, à la vitesse indiquée (4 images par seconde par défaut), et attend la dernière image.

### `démarrer l'animation … à … images par seconde …` (Débutant) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Démarre l’animation et passe aussitôt au bloc suivant.

- `une fois` : la joue une seule fois.
- `répéter` (par défaut) : la joue en boucle jusqu’à ce qu’un autre bloc de lumière modifie la matrice.

### `définir la luminosité des pixels à … %` (Avancé) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Règle la luminosité des images et des animations des blocs Robot Inventor ci-dessus, de 0 à 100 %. Tant que ce bloc ne s’est pas exécuté, elles sont à pleine luminosité. Chaque pixel garde sa luminosité par rapport aux autres.

### Dessiner des images et des animations {#animation-editor}

Touchez l’image d’un bloc de lumière pour ouvrir l’éditeur :

- **Pixels** : touchez la grille 5×5 ou faites glisser le doigt dessus pour peindre avec la luminosité sélectionnée.
- **Luminosité** : l’échelle à côté de la grille choisit la luminosité de peinture (10 niveaux, d’éteint à pleine luminosité).
- **Tout éteindre / tout allumer** : effacer l’image ou la remplir avec la luminosité sélectionnée.
- **Images** (blocs d’animation uniquement) : la barre sous la grille indique l’image en cours, par exemple **2/3**. Les boutons passent à l’image **précédente** et **suivante**, **ajoutent** une image vide après l’image en cours, **dupliquent** l’image en cours ou la **suppriment** (une animation garde au moins une image).

<Screenshot name="robot-inventor-animation-editor" alt="L’éditeur d’animation : la grille 5×5, l’échelle de luminosité et la barre des images" width={600} />

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
