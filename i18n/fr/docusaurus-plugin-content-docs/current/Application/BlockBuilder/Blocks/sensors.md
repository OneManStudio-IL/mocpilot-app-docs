---
id: Sensors
title: Capteurs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Capteurs

Les blocs de capteurs lisent l’état de votre téléphone ou tablette, le minuteur du programme, les hubs et les capteurs qui y sont branchés. Utilisez leurs valeurs dans les conditions, les événements et les calculs.

Sur cette page :

- [État du hub](#hub-state) : batterie, tension, température, courant et mode de puissance
- [Boutons, inclinaison et orientation du hub](#hub-tilt-and-orientation)
- [Capteurs sur les ports](#sensors-on-ports) : n’importe quel appareil, capteur de couleur Technic, capteur de distance Technic, capteur de couleur et de distance BOOST, capteurs WeDo 2.0
- [Hub Robot Inventor](#robot-inventor-sensors) : capteur de force, gestes, orientation, lacet, tangage et roulis, inclinaison, radio entre hubs
- [Cet appareil](#this-device) : le téléphone, la tablette ou l’ordinateur sur lequel tourne MOCPilot
- [Minuteur](#timer)

## État du hub {#hub-state}

Ces blocs n’existent pas pour les hubs Mould King, qui ne renvoient aucune donnée.

### `… % batterie` (Débutant) {#block_hubs_all_sensors_battery_level}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_level.svg')} alt="block_hubs_all_sensors_battery_level.svg" />
Renvoie le niveau de batterie du hub, en pourcentage.

### `… tension de la batterie (V)` (Avancé) {#block_hubs_all_sensors_battery_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_battery_voltage.svg')} alt="block_hubs_all_sensors_battery_voltage.svg" />
Renvoie la tension de la batterie du hub, en volts.

- Hubs : BuWizz 2, BuWizz 3, SBrick, SBrick Plus, Robot Inventor.
- Renvoie `NaN` lorsque le hub n’est pas connecté.

### `… température (C°)` (Avancé) {#block_hubs_all_sensors_board_temp}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_board_temp.svg')} alt="block_hubs_all_sensors_board_temp.svg" />
Renvoie la température de l’électronique du hub, en degrés Celsius.

- Hubs : BuWizz 2, BuWizz 3, SBrick, SBrick Plus.

### `obtenir … tension de sortie (V)` (Gourou) {#block_hubs_buwizz_sensors_get_output_voltage}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_output_voltage.svg')} alt="block_hubs_buwizz_sensors_get_output_voltage.svg" />
Renvoie la tension que le hub fournit actuellement à ses ports, en volts.

- Hubs : BuWizz 2.

### `… courant (A)` (Gourou) {#block_hubs_buwizz_sensors_port_get_current}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_port_get_current.svg')} alt="block_hubs_buwizz_sensors_port_get_current.svg" />
Renvoie le courant consommé sur le port sélectionné, en ampères.

- Hubs : BuWizz 2, BuWizz 3.

### `définir le mode d'alimentation …` (Technic Move Hub) (Débutant) {#block_hubs_technicmove_sensors_set_power_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_sensors_set_power_mode.svg')} alt="block_hubs_technicmove_sensors_set_power_mode.svg" />
Règle le mode de puissance d’un Technic Move Hub.

- Modes : `normal`, `boost`
- Hubs : Technic Move Hub.

## Boutons, inclinaison et orientation du hub {#hub-tilt-and-orientation}

Le bloc de bouton indique les hubs avec lesquels il fonctionne. Les blocs d’inclinaison et d’orientation fonctionnent sur BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub et Robot Inventor.

### `est-ce que … … bouton …` (Débutant) {#block_hubs_all_sensors_button_pressed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_button_pressed.svg?v=20260409-2258')} alt="block_hubs_all_sensors_button_pressed.svg" />
Renvoie `true` lorsque le bouton sélectionné du hub est dans l’état sélectionné.

- États : `appuyé`, `relâché`
- Hubs : hubs LEGO Powered Up, WeDo 2.0 et Robot Inventor. La liste des boutons dépend du hub (généralement `centre`).

### `… … angle` (Débutant) {#block_hubs_all_sensors_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_tilt.svg')} alt="block_hubs_all_sensors_tilt.svg" />
Renvoie l’angle d’inclinaison du hub.

- Angles : `tangage`, `roulis`, `lacet`
- `lacet` n’est disponible que sur le Technic Hub et le Robot Inventor.

### `… … accéléromètre (m/s²)` (Gourou) {#block_hubs_all_sensors_accelerometer}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_accelerometer.svg')} alt="block_hubs_all_sensors_accelerometer.svg" />
Renvoie la mesure brute de l’accéléromètre du hub sur un axe.

- Axes : `x`, `y`, `z`

### `… … accélération (m/s²)` (Gourou) {#block_hubs_all_sensors_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_acceleration.svg')} alt="block_hubs_all_sensors_acceleration.svg" />
Renvoie l’accélération du hub sur un axe.

- Axes : `x`, `y`, `z`

### `obtenir … orientation …` (Débutant) {#block_hubs_sensors_get_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_get_orientation.svg')} alt="block_hubs_sensors_get_orientation.svg" />
Indique quelle face du hub est tournée vers le haut.

- Sortie : `texte` ou `index`
- Valeurs : `Avant`, `Haut`, `Droite`, `Arrière`, `Bas`, `Gauche`

### `… orientation …` (Débutant) {#block_hubs_all_sensors_is_orientation_up}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_orientation_up.svg')} alt="block_hubs_all_sensors_is_orientation_up.svg" />
Renvoie `true` lorsque la face sélectionnée du hub est tournée vers le haut.

- Options : `Avant`, `Haut`, `Droite`, `Arrière`, `Bas`, `Gauche`

### `définir … orientation d'inclinaison à …` (Avancé) {#block_hubs_sensors_set_tilt_orientation}
<img src={useBaseUrl('/img/blocks/block_hubs_sensors_set_tilt_orientation.svg')} alt="block_hubs_sensors_set_tilt_orientation.svg" />
Indique au hub comment il est monté dans le modèle, afin que l’inclinaison et l’orientation soient mesurées à partir de cette position.

- Options : `Avant`, `Haut`, `Droite`, `Arrière`, `Bas`, `Gauche`

## Capteurs sur les ports {#sensors-on-ports}

Les blocs de capteurs Technic et BOOST ci-dessous fonctionnent sur le City Hub, le Technic Hub, le BOOST Move Hub et le hub MINDSTORMS Robot Inventor (pas SBrick, BuWizz, WeDo 2.0 ni Mould King).

### N’importe quel appareil sur un port {#any-port-device}

#### `… type d'appareil` (Débutant) {#block_hubs_all_motors_port_device_type}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_device_type.svg')} alt="block_hubs_all_motors_port_device_type.svg" />
Renvoie le type de l’appareil branché sur le port sélectionné.

- Hubs : tous les hubs à ports sauf SBrick, SBrick Plus et BuWizz 2.
- Utilisation type : vérifier ce qui est branché avant d’exécuter des blocs propres à un appareil.

### Capteur de couleur Technic {#technic-color-sensor}

#### Capteur Technic : `définir le mode sur …` (Avancé) {#block_hubs_all_sensors_port_technic_sensor_set_mode}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_set_mode.svg')} alt="block_hubs_all_sensors_port_technic_sensor_set_mode.svg" />
Fait passer le capteur de couleur Technic dans le mode sélectionné.

- Modes : `par défaut`, `ambiant`
- Changer de mode peut affecter votre programme de façon inattendue : en mode `ambiant`, le capteur ne peut lire ni les couleurs ni la lumière réfléchie.

#### Capteur Technic : `couleur …` (Débutant) {#block_hubs_all_sensors_port_technic_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_color.svg" />
Renvoie la couleur vue par le capteur de couleur Technic.

- Sortie : `valeur` (un nombre) ou `chaîne` (le nom de la couleur)

#### Capteur Technic : `est une couleur …` (Débutant) {#block_hubs_all_sensors_port_technic_sensor_when_color_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_color_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_color_is.svg" />
Renvoie `true` lorsque le capteur de couleur Technic voit la couleur sélectionnée.

#### Capteur Technic : `lumière réfléchie (%)` (Débutant) {#block_hubs_all_sensors_port_technic_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_reflected_light.svg" />
Renvoie la quantité de lumière que la surface renvoie vers le capteur de couleur Technic, en pourcentage.

#### Capteur Technic : `lumière réfléchie …` (Débutant) {#block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_reflected_light_is.svg" />
Renvoie `true` lorsque la lumière réfléchie se compare à la valeur selon l’opérateur choisi.

- Comparaison : `<`, `=`, `>`

#### Capteur Technic : `lumière ambiante (%)` (Débutant) {#block_hubs_all_sensors_port_technic_sensor_ambient_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_ambient_light.svg')} alt="block_hubs_all_sensors_port_technic_sensor_ambient_light.svg" />
Renvoie la luminosité de la lumière environnante, en pourcentage.

#### Capteur Technic : `lumière ambiante …` (Débutant) {#block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_ambient_light_is.svg" />
Renvoie `true` lorsque la lumière ambiante se compare à la valeur selon l’opérateur choisi.

- Comparaison : `<`, `=`, `>`

#### Capteur Technic : `valeur brute …` (Débutant) {#block_hubs_all_sensors_port_technic_sensor_raw_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_raw_color.svg')} alt="block_hubs_all_sensors_port_technic_sensor_raw_color.svg" />
Renvoie la valeur brute d’un canal de couleur du capteur de couleur Technic.

- Canaux : `rouge`, `vert`, `bleu`

### Capteur de distance Technic {#technic-distance-sensor}

#### Capteur Technic : `distance …` (Débutant) {#block_hubs_all_sensors_port_technic_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_distance.svg')} alt="block_hubs_all_sensors_port_technic_sensor_distance.svg" />
Renvoie la distance mesurée par le capteur de distance Technic.

- Unités : `mm`, `cm`, `pouces`, `%`

#### Capteur Technic : `est plus proche que / plus loin que / exactement à …` (Débutant) {#block_hubs_all_sensors_port_technic_sensor_when_distance_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg')} alt="block_hubs_all_sensors_port_technic_sensor_when_distance_is.svg" />
Renvoie `true` lorsque la distance mesurée par le capteur de distance Technic remplit la condition.

- Comparaison : `plus proche que`, `plus loin que`, `exactement à`
- Unités : `mm`, `cm`, `pouces`, `%`

### Capteur de couleur et de distance BOOST {#boost-color-and-distance-sensor}

#### Capteur BOOST : `couleur …` (Débutant) {#block_hubs_all_sensors_port_boost_sensor_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_color.svg" />
Renvoie la couleur vue par le capteur de couleur et de distance BOOST.

- Sortie : `valeur` (un nombre) ou `chaîne` (le nom de la couleur)

#### Capteur BOOST : `est une couleur …` (Débutant) {#block_hubs_all_sensors_port_boost_sensor_is_color}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_is_color.svg')} alt="block_hubs_all_sensors_port_boost_sensor_is_color.svg" />
Renvoie `true` lorsque le capteur BOOST voit la couleur sélectionnée.

#### Capteur BOOST : `distance …` (Débutant) {#block_hubs_all_sensors_port_boost_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_distance.svg" />
Renvoie la distance mesurée par le capteur de couleur et de distance BOOST.

- Unités : `%`, `cm`, `pouces`

#### Capteur BOOST : `est plus proche que / plus loin que / exactement à …` (Débutant) {#block_hubs_all_sensors_port_boost_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_distance.svg" />
Renvoie `true` lorsque la distance mesurée par le capteur BOOST remplit la condition.

- Comparaison : `plus proche que`, `plus loin que`, `exactement à`
- Unités : `%`, `cm`, `pouces`

#### Capteur BOOST : `lumière réfléchie (%)` (Débutant) {#block_hubs_all_sensors_port_boost_sensor_reflected_light}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_reflected_light.svg')} alt="block_hubs_all_sensors_port_boost_sensor_reflected_light.svg" />
Renvoie la quantité de lumière que la surface renvoie vers le capteur BOOST, en pourcentage.

#### Capteur BOOST : `lumière réfléchie …` (Débutant) {#block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg')} alt="block_hubs_all_sensors_port_boost_sensor_when_reflected_light_is.svg" />
Renvoie `true` lorsque la lumière réfléchie se compare à la valeur selon l’opérateur choisi.

- Comparaison : `<`, `=`, `>`

### Capteurs WeDo 2.0 {#wedo-2-sensors}

Le capteur de mouvement et le capteur d’inclinaison WeDo 2.0, sur le hub WeDo 2.0.

#### Capteur WeDo 2.0 : `distance …` (Débutant) {#block_hubs_all_sensors_port_wedo2_sensor_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_distance.svg" />
Renvoie la distance mesurée par le capteur de mouvement WeDo 2.0.

- Unités : `%`, `cm`, `pouces`
- Hubs : WeDo 2.0.

#### Capteur WeDo 2.0 : `est plus proche que / plus loin que / exactement à …` (Débutant) {#block_hubs_all_sensors_port_wedo2_sensor_when_distance}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg')} alt="block_hubs_all_sensors_port_wedo2_sensor_when_distance.svg" />
Renvoie `true` lorsque la distance mesurée par le capteur de mouvement WeDo 2.0 remplit la condition.

- Comparaison : `plus proche que`, `plus loin que`, `exactement à`
- Unités : `%`, `cm`, `pouces`
- Hubs : WeDo 2.0.

#### Capteur WeDo 2.0 : `angle …` / `direction comme …` (Débutant) {#block_hubs_all_sensors_port_wedo2_tilt}
<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_port_wedo2_tilt.svg')} alt="block_hubs_all_sensors_port_wedo2_tilt.svg" />
Renvoie les données du capteur d’inclinaison WeDo 2.0 : un angle d’inclinaison, ou la direction dans laquelle il est incliné.

- Angles : `tangage`, `roulis`
- Sortie de direction : `texte` ou `nombre` ; directions : `neutre`, `en avant`, `en arrière`, `gauche`, `droite`, `inconnu`
- Hubs : WeDo 2.0.

## Hub Robot Inventor {#robot-inventor-sensors}

Ces blocs proviennent de l’application Robot Inventor et ne fonctionnent qu’avec les [hubs MINDSTORMS Robot Inventor et SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Ils portent l’icône du hub. Leurs événements (quand le hub est secoué, incliné, etc.) se trouvent sur la page [Événements](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events).

### Capteur de force {#robot-inventor-force-sensor}

#### `est … pressé / appuyé fort / relâché ?` (Débutant) {#block_ri_force_is_pressed}

<img src={useBaseUrl('/img/blocks/block_ri_force_is_pressed.svg')} alt="block_ri_force_is_pressed.svg" />

Vérifie le capteur de force branché sur le port sélectionné. `appuyé fort` signifie appuyé avec plus de 5 newtons.

#### `… pression en % / newton` (Débutant) {#block_ri_force_value}

<img src={useBaseUrl('/img/blocks/block_ri_force_value.svg')} alt="block_ri_force_value.svg" />

Renvoie la force avec laquelle le capteur de force est appuyé : en pourcentage (0–100) ou en newtons (0–10).

### Mouvements du hub {#robot-inventor-motion}

#### `le hub est-il … ?` (Avancé) {#block_ri_is_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_is_gesture.svg')} alt="block_ri_is_gesture.svg" />

`true` si le hub vient d’être bougé de cette façon : `tapoté`, `tapoté deux fois`, `secoué` (par défaut) ou `en chute`. Un geste ne compte qu’une fois : une fois lu par un bloc, il disparaît.

#### `geste` (Gourou) {#block_ri_gesture}

<img src={useBaseUrl('/img/blocks/block_ri_gesture.svg')} alt="block_ri_gesture.svg" />

Renvoie le dernier geste sous forme de texte : `tapped`, `doubletapped`, `shake` ou `freefall`, ou une valeur vide s’il n’y en a pas eu.

#### `est … en haut ?` (Débutant) {#block_ri_is_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_is_orientation.svg')} alt="block_ri_is_orientation.svg" />

`true` si cette face du hub est tournée vers le haut : `avant` (la matrice lumineuse), `dessus`, `côté droit`, `arrière`, `dessous` ou `côté gauche`.

#### `orientation` (Gourou) {#block_ri_orientation}

<img src={useBaseUrl('/img/blocks/block_ri_orientation.svg')} alt="block_ri_orientation.svg" />

Renvoie la face tournée vers le haut sous forme de texte : `front`, `up`, `rightside`, `back`, `down` ou `leftside`.

#### `… angle` (Débutant) {#block_ri_angle}

<img src={useBaseUrl('/img/blocks/block_ri_angle.svg')} alt="block_ri_angle.svg" />

Renvoie l’angle du hub en degrés autour d’un axe : `lacet` (rotation à gauche et à droite, comme une boussole), `tangage` (avant qui monte et descend) ou `roulis` (inclinaison sur les côtés).

- Utilisation type : faire rouler un robot en ligne droite ou le faire tourner d’exactement 90° : remettez le lacet à zéro, puis braquez jusqu’à ce que le lacet atteigne l’angle voulu.

#### `mettre l'angle de lacet à 0` (Débutant) {#block_ri_reset_yaw}

<img src={useBaseUrl('/img/blocks/block_ri_reset_yaw.svg')} alt="block_ri_reset_yaw.svg" />

Fait de la direction actuelle du hub le nouveau zéro de l’angle de lacet. Le bloc attend 0,1 s pour que la mesure suivante soit déjà comptée à partir de ce zéro.

#### `vitesse angulaire …` (Gourou) {#block_ri_angular_velocity}

<img src={useBaseUrl('/img/blocks/block_ri_angular_velocity.svg')} alt="block_ri_angular_velocity.svg" />

Renvoie la vitesse de rotation du hub autour de l’axe `x`, `y` ou `z` (le gyroscope), en degrés par seconde.

#### `accélération …` (Gourou) {#block_ri_acceleration}

<img src={useBaseUrl('/img/blocks/block_ri_acceleration.svg')} alt="block_ri_acceleration.svg" />

Renvoie l’accélération du hub le long de l’axe `x`, `y` ou `z`, telle que le hub la transmet.

#### `le hub est-il incliné … ?` (Avancé) {#block_ri_is_tilted}

<img src={useBaseUrl('/img/blocks/block_ri_is_tilted.svg')} alt="block_ri_is_tilted.svg" />

`true` si le hub est incliné dans cette direction : `vers le haut`, `vers le bas`, `vers la gauche`, `vers la droite` ou `n'importe quel côté` (par défaut). Le hub est considéré comme incliné à partir d’environ 12° par rapport à l’horizontale ; s’il est incliné dans deux directions, c’est la plus forte inclinaison qui l’emporte.

### Radio entre hubs {#robot-inventor-radio}

Les hubs Robot Inventor peuvent s’envoyer de courts signaux par radio, sans passer par MOCPilot. Un signal a un nom et une valeur.

#### `envoyer le signal du hub … avec …` (Gourou) {#block_ri_radio_transmit}

<img src={useBaseUrl('/img/blocks/block_ri_radio_transmit.svg')} alt="block_ri_radio_transmit.svg" />

Envoie le signal portant le nom indiqué (`signal` par défaut) et la valeur indiquée (`1`) depuis ce hub vers les hubs à proximité.

#### `signal reçu … valeur` (Gourou) {#block_ri_radio_value}

<img src={useBaseUrl('/img/blocks/block_ri_radio_value.svg')} alt="block_ri_radio_value.svg" />

Renvoie la dernière valeur reçue par ce hub pour le signal portant ce nom, ou 0 si aucune n’est encore arrivée. Pour réagir dès qu’un signal arrive, utilisez [quand le hub reçoit le signal](/docs/Application/BlockBuilder/Blocks/Events#block_ri_when_radio).

## Cet appareil {#this-device}

Ces blocs lisent le téléphone, la tablette ou l’ordinateur sur lequel tourne MOCPilot.

### `appareil % batterie` (Débutant) {#block_sensors_device_battery_level}
<img src={useBaseUrl('/img/blocks/block_sensors_device_battery_level.svg')} alt="block_sensors_device_battery_level.svg" />
Renvoie le niveau de batterie de l’appareil, en pourcentage.

### `appareil … angle` (Avancé) {#block_sensors_device_tilt_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_tilt_sensor_data.svg')} alt="block_sensors_device_tilt_sensor_data.svg" />
Renvoie l’angle d’inclinaison de l’appareil.

- Angles : `tangage`, `roulis`, `lacet`
- Utilisation type : diriger le modèle en inclinant le téléphone.

### `appareil … accéléromètre (m/s²)` (Gourou) {#block_sensors_device_accelerometer_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_accelerometer_sensor_data.svg')} alt="block_sensors_device_accelerometer_sensor_data.svg" />
Renvoie la mesure brute de l’accéléromètre de l’appareil sur un axe, en m/s².

- Axes : `x`, `y`, `z`

### `appareil … accélération (m/s²)` (Gourou) {#block_sensors_device_acceleration_sensor_data}
<img src={useBaseUrl('/img/blocks/block_sensors_device_acceleration_sensor_data.svg')} alt="block_sensors_device_acceleration_sensor_data.svg" />
Renvoie l’accélération de l’appareil sur un axe, en m/s².

- Axes : `x`, `y`, `z`

## Minuteur {#timer}

### `minuteur` (Avancé) {#block_sensors_timer_value_float}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
Renvoie le temps écoulé depuis le démarrage du programme ou depuis le dernier **réinitialiser le minuteur**, en secondes.

### `réinitialiser le minuteur` (Avancé) {#block_sensors_timer_reset}
<img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
Remet le minuteur à zéro.
