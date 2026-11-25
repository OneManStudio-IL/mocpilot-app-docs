---
id: Motors
title: Moteurs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Moteurs

Les blocs de moteurs démarrent, arrêtent et positionnent les moteurs branchés sur les ports des hubs, et règlent leur façon de se déplacer. La catégorie apparaît lorsqu’un hub du profil possède des ports moteur. Dans chaque bloc, vous choisissez le hub et un ou plusieurs ports.

Certains blocs nécessitent un moteur doté d’un capteur de rotation intégré (encodeur), comme les moteurs angulaires Technic, et un hub capable de le contrôler. Ces blocs portent la mention « moteurs à encodeur ». Ils ne sont pas disponibles pour les hubs SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 et Mould King. Le Technic Move Hub fonctionne aussi avec ces blocs (ses moteurs sont les ports `A`, `B` et `C`) et dispose en plus de ses propres blocs de profil de voiture : voir [Technic Move Hub](#technic-move-hub) à la fin de cette page.

## Faire tourner les moteurs {#running-motors}

### `définir la vitesse à …` (Avancé) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Règle la vitesse (de −100 à 100 %) qu’utilisent **démarrer le moteur** et **exécuter … pendant** sur ces ports. Ce bloc ne démarre pas le moteur à lui seul.

### `démarrer le moteur …` (Débutant) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Démarre le moteur dans le sens choisi, à la vitesse réglée par **définir la vitesse à**.

- Sens : dans le sens des aiguilles d’une montre ou dans le sens inverse

### `démarrer le moteur à … % vitesse` (Débutant) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Démarre le moteur à la vitesse indiquée, de −100 à 100 %. Une vitesse négative le fait tourner dans l’autre sens.

- Utilisation type : piloter depuis un joystick ou un curseur : placez la valeur de la commande dans l’emplacement de la vitesse.

### `arrêter le moteur` (Débutant) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Arrête le moteur.

### `exécuter … pendant …` (Avancé) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Fait tourner le moteur dans le sens choisi pendant un nombre de rotations, de degrés ou de secondes.

- Sens : dans le sens des aiguilles d’une montre ou dans le sens inverse
- Unités : `rotations`, `degrés`, `secondes`
- Moteurs à encodeur uniquement.

### `exécuter pendant … à … % vitesse` (Avancé) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Fait tourner le moteur pendant un nombre de rotations, de degrés ou de secondes, à la vitesse indiquée.

- Unités : `rotations`, `degrés`, `secondes`
- Moteurs à encodeur uniquement.

## Position {#position}

### `aller … à la position …` (Avancé) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Amène le moteur à une position absolue (le repère zéro propre au moteur).

- Trajet : `chemin le plus court`, `dans le sens des aiguilles d'une montre`, `dans le sens inverse des aiguilles d'une montre`
- Moteurs à encodeur uniquement.

### `aller à la position relative … à … % vitesse` (Débutant) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Amène le moteur à une position, en degrés, comptée à partir du point fixé par **définir la position relative**.

- Utilisation type : direction par servo, où la valeur du joystick donne l’angle.
- Moteurs à encodeur uniquement ; sur BuWizz 3, utilisez le bloc ci-dessous.

### `aller à la position relative …` (BuWizz 3) (Débutant) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
La version BuWizz 3 du bloc ci-dessus, sans l’entrée de vitesse.

- Hubs : BuWizz 3, avec des moteurs à encodeur.

### `définir la position relative …` (Débutant) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Déclare que la position actuelle du moteur vaut la valeur indiquée. Les positions relatives sont comptées à partir de celle-ci.

- Moteurs à encodeur uniquement.

### `étalonner la crémaillère … centre … degrés …` (Débutant) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Trouve le centre et la course d’une crémaillère de direction.

- Le moteur pousse la crémaillère jusqu’aux deux extrémités, mesure jusqu’où elle peut aller et place le résultat dans les deux variables que vous mettez dans les emplacements : la position du centre et la plage en degrés (du centre à une extrémité). La crémaillère s’arrête au milieu, et ce point devient la position relative 0 : dirigez ensuite avec **aller à la position relative** `plage × joystick / 100`.
- La direction doit avoir des butées mécaniques franches aux deux extrémités (la fin de la crémaillère ou de l’engrenage).
- Moteurs à encodeur uniquement.

## Réglages du moteur {#motor-settings}

### `régler le moteur sur … à l'arrêt` (Gourou) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Choisit ce que fait le moteur lorsqu’il s’arrête.

- `frein` : s’arrête rapidement.
- `maintenir la position` : maintient activement sa position (utile pour la direction).
- `roue libre` : ralentit librement.
- Moteurs à encodeur uniquement.

### `activer la détection de blocage …` (Gourou) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Active ou désactive la détection de blocage. Lorsqu’elle est activée, un moteur bloqué abandonne au lieu de continuer à forcer, ce qui permet à un bloc qui attend le moteur de se terminer.

- Hubs : [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (le bloc porte l’icône du hub).

### `définir l'accélération à …` (Gourou) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Choisit la rapidité avec laquelle le moteur prend de la vitesse.

- Options : `par défaut`, `rapide`, `équilibré`, `doux`, `lent`, `très lent`
- Moteurs à encodeur uniquement.

### `définir la décélération à …` (Gourou) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Choisit la rapidité avec laquelle le moteur ralentit.

- Options : `par défaut`, `rapide`, `équilibré`, `doux`, `lent`, `très lent`
- Moteurs à encodeur uniquement.

## Valeurs du moteur {#motor-values}

### `position` (Débutant) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Renvoie la position absolue du moteur.

- Moteurs à encodeur uniquement.

### `position relative` (Débutant) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Renvoie la position relative du moteur, en degrés.

- Moteurs à encodeur uniquement.

### `vitesse` (Débutant) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Renvoie la vitesse actuelle du moteur.

### `puissance` (Avancé) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Renvoie la puissance actuelle du moteur.

- Hubs : [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (le bloc porte l’icône du hub).

## Robot Inventor {#robot-inventor-motors}

Ces blocs proviennent de l’application Robot Inventor et ne fonctionnent qu’avec les [hubs MINDSTORMS Robot Inventor et SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ils portent l’icône du hub. Pour piloter un robot à deux roues, voir les blocs [Mouvement](/docs/Application/BlockBuilder/Blocks/Movement).

### `démarrer le moteur à … % puissance` (Avancé) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Démarre les moteurs des ports sélectionnés à la puissance indiquée, de −100 à 100 % (75 % par défaut). Contrairement à **démarrer le moteur à … % vitesse**, le moteur ne maintient pas une vitesse régulée : sous la charge, il ralentit, comme un moteur sans encodeur.

### `le moteur a-t-il été interrompu ?` (Gourou) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true` si la dernière commande du moteur de ce port ne s’est pas terminée parce qu’un autre bloc moteur sur le même port l’a interrompue.

## Technic Move Hub {#technic-move-hub}

Le Technic Move Hub (dans les voitures télécommandées LEGO® Technic) se programme de deux façons :

- **Blocs de port** (les blocs de moteurs ci-dessus). Les trois moteurs intégrés du hub sont des ports : `A` et `B` sont les moteurs de propulsion, `C` est le moteur de direction. Ce sont des moteurs à encodeur : tous les blocs de moteurs ci-dessus fonctionnent avec eux, sauf **activer la détection de blocage** et **puissance**. Dans les modèles de voitures LEGO, `A` tourne dans le sens inverse de `B` pour avancer, et la direction sur `C` a des butées : exécutez une fois **étalonner la crémaillère** sur `C`, puis dirigez avec **aller à la position relative** sur `C` (0 est le centre). Les six lumières du hub sont les ports `1`–`6` des [blocs Lumière](/docs/Application/BlockBuilder/Blocks/Light), et ses blocs d’[inclinaison, d’accélération et d’orientation](/docs/Application/BlockBuilder/Blocks/Sensors#hub-tilt-and-orientation) fonctionnent comme sur le Technic Hub.
- **Blocs de profil de voiture** (ci-dessous) : propulsion, direction, frein, impulsion de puissance, phares et mode de puissance, via la configuration de voiture chargée dans le hub. Voir [Configurations du Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

:::caution Une seule méthode par hub
Les blocs de profil et les blocs de port commandent les mêmes moteurs et lumières : la dernière commande l’emporte, et un bloc de profil reprend le contrôle des moteurs et des lumières. La vérification du programme dans l’éditeur de blocs le signale sur chaque bloc de port de ce hub : « … est commandé à la fois par les blocs de son profil de voiture et par des blocs de ports ».
:::

### `démarrer les moteurs à … % vitesse` (Débutant) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Démarre les moteurs de propulsion à la vitesse indiquée.

### `impulsion de puissance` (Débutant) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Envoie une impulsion de puissance aux moteurs de propulsion.

- Utilisation type : un bref coup d’accélérateur avant les blocs suivants.

### `arrêter les moteurs` (Débutant) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Arrête les moteurs de propulsion.

### `définir le frein des moteurs …` (Débutant) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Active ou désactive le frein des moteurs de propulsion.

- Options : `éteint`, `activé`

### `définir la crémaillère de direction sur …` (Débutant) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Tourne la direction jusqu’à la position indiquée.

### `calibrer crémaillère de direction` (Débutant) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Étalonne la direction avec l’algorithme propre au hub, qui trouve automatiquement la plage de braquage.

- La direction doit avoir des butées mécaniques franches (par exemple les extrémités de la crémaillère).
