---
id: Movement
title: Mouvement
description: "Les blocs Mouvement pilotent un robot à deux moteurs sur le hub MINDSTORMS Robot Inventor ou SPIKE : déplacement, direction, conduite type char, vitesse, accélération et arrêt."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mouvement

Les blocs Mouvement pilotent comme un seul ensemble un robot à deux roues, chacune entraînée par son propre moteur : « avancer de 10 cm », « tourner dans le sens des aiguilles d’une montre d’une rotation », « braquer de 30 vers la droite ». Ce sont les mêmes blocs de déplacement que dans l’application LEGO® MINDSTORMS® Robot Inventor. La catégorie apparaît en tête de la palette lorsque le profil comporte un [hub Robot Inventor ou SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Tous ses blocs portent l’icône noir et blanc du hub.

## Fonctionnement du déplacement {#how-movement-works}

- **Moteurs de déplacement.** Par défaut, la roue gauche est sur le port **A** et la roue droite sur le port **B**. Utilisez [définir les moteurs de déplacement sur](#block_ri_move_set_pair) pour choisir d’autres ports. Sur un robot, les deux moteurs sont montés face à face ; MOCPilot fait donc tourner le moteur droit dans l’autre sens : une vitesse positive fait toujours avancer le robot.
- **Vitesse de déplacement.** Les blocs sans vitesse propre utilisent la vitesse de déplacement : **50 %** tant que [définir la vitesse de déplacement à](#block_ri_move_set_speed) ne la modifie pas.
- **La direction** est un nombre de −100 à 100. **0** fait aller tout droit. Les valeurs positives tournent à droite, les négatives à gauche : la roue intérieure ralentit d’autant plus que la direction approche de ±100 (à 50, elle tourne à mi-vitesse). À **100** ou **−100**, les roues tournent en sens opposés et le robot pivote sur place.
- **Unités.** Les distances peuvent être en `cm`, en `pouces`, en `rotations` ou en `degrés` des moteurs, et de nombreux blocs acceptent aussi les `secondes`. Les centimètres et les pouces utilisent la distance par rotation du moteur : **17,5 cm** par défaut (la roue Robot Inventor), modifiable avec [définir 1 rotation du moteur à](#block_ri_move_set_distance). Une distance négative fait rouler dans l’autre sens.
- **Attente.** Les blocs avec une distance (`déplacer … de …`) attendent que le robot ait parcouru cette distance. Les blocs qui commencent par **commencer à se déplacer** rendent la main aussitôt : le robot continue de rouler jusqu’à **arrêter le déplacement** ou un autre bloc de mouvement.

## Réglages du déplacement {#movement-settings}

### `définir les moteurs de déplacement sur … …` (Débutant) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Choisit les ports des moteurs de la roue gauche et de la roue droite. Par défaut : **A** et **B**. Les deux ports doivent être différents.

### `définir la vitesse de déplacement à … %` (Débutant) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Règle la vitesse, de −100 à 100 %, des blocs de mouvement qui n’ont pas de vitesse propre. Par défaut : 50 %. Ce bloc ne démarre pas les moteurs.

### `définir 1 rotation du moteur à … cm / pouces parcourus` (Avancé) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Indique à MOCPilot la distance que parcourt le robot pendant une rotation du moteur, pour que les distances en centimètres et en pouces soient justes. Par défaut : 17,5 cm. Mesurez votre robot : faites-le **avancer d’une rotation** et mesurez la distance. La valeur 0 est ignorée.

### `définir l'accélération du déplacement à …` (Gourou) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
La rapidité avec laquelle les moteurs de déplacement accélèrent et ralentissent.

- Options : `par défaut`, `rapide` (0,1 s), `équilibré` (0,35 s), `doux` (0,8 s), `lent` (1,2 s), `très lent` (2 s) : le temps pour passer de l’arrêt à la pleine vitesse.

### `définir les moteurs de déplacement sur … à l'arrêt` (Avancé) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Ce que font les moteurs quand le robot s’arrête.

- `roue libre` : les moteurs tournent librement et le robot roule jusqu’à l’arrêt.
- `frein` (par défaut) : les moteurs freinent.
- `maintenir la position` : les moteurs maintiennent activement leur position, même si vous poussez le robot.

## Se déplacer {#moving}

### `déplacer … de …` (Débutant) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Déplace le robot à la vitesse de déplacement et attend la fin du mouvement.

- Sens : `en avant`, `en arrière`, `dans le sens des aiguilles d'une montre`, `dans le sens inverse des aiguilles d'une montre` (les deux derniers font pivoter le robot sur place).
- Unités : `cm`, `pouces`, `rotations`, `degrés`, `secondes`. Par défaut : 10 cm.

### `déplacer … de …` (avec direction) (Débutant) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Déplace le robot avec la direction indiquée (−100 à 100) à la vitesse de déplacement et attend la fin du mouvement. Avec une direction de 30, le robot décrit une courbe vers la droite.

- Unités : `cm`, `pouces`, `rotations`, `degrés`, `secondes`.

### `déplacer … de … à … % vitesse` (Avancé) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
Identique, mais avec sa propre vitesse au lieu de la vitesse de déplacement.

- Unités : `cm`, `pouces`, `rotations`, `degrés`.

### `déplacer de … à … … % vitesse` (Avancé) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Conduite type char sur une distance : règle séparément la vitesse de la roue gauche et celle de la roue droite (de −100 à 100 % chacune) et attend que le robot ait parcouru la distance.

- Unités : `cm`, `pouces`, `rotations`, `degrés`, `secondes`.

### `commencer à se déplacer …` (Débutant) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Commence à se déplacer avec la direction indiquée à la vitesse de déplacement et passe aussitôt au bloc suivant.

### `commencer à se déplacer … à … % vitesse` (Avancé) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Commence à se déplacer avec la direction et la vitesse indiquées.

- Utilisation type : placez un curseur du tableau de bord dans l’emplacement de la direction et une pédale dans celui de la vitesse.

### `commencer à se déplacer … à … % puissance` (Gourou) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Comme le bloc précédent, mais règle la **puissance** des moteurs au lieu d’une vitesse régulée : les moteurs n’essaient pas de maintenir la vitesse quand le robot monte une pente ou porte une charge.

### `commencer à se déplacer à … … % vitesse` (Avancé) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Conduite type char : démarre la roue gauche et la roue droite chacune à sa propre vitesse.

### `commencer à se déplacer à … … % puissance` (Gourou) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Conduite type char avec la puissance moteur de chaque roue au lieu d’une vitesse régulée.

### `arrêter le déplacement` (Débutant) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Arrête les deux moteurs de déplacement de la façon indiquée par **définir les moteurs de déplacement sur … à l'arrêt** (frein par défaut).

### `le déplacement a-t-il été interrompu ?` (Gourou) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true` si le dernier mouvement ne s’est pas terminé : un autre bloc de mouvement ou **arrêter le déplacement** l’a interrompu.
