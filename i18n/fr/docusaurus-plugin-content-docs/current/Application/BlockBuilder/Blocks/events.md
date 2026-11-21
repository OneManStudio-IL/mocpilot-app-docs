---
id: Events
title: Événements
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Événements

La catégorie **Événements** contient les blocs qui lancent des scripts lorsqu’il se passe quelque chose, ainsi que les blocs qui envoient des messages entre scripts. Utilisez **Ajouter un message** et **Supprimer le message** en haut de la catégorie pour gérer les messages.

## Événements de base {#core-events}

### `lorsque le programme commence` (Débutant) {#block_event_when_program_started}

<img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />

Exécute son script une fois, au démarrage du programme.

- Utilisation type : définir les valeurs de départ des variables, mettre les moteurs dans leur état initial, afficher un message « prêt ».

### `quand …` (Avancé) {#block_event_when}

<img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />

Exécute son script lorsque la condition placée dans l’emplacement passe de faux à vrai. Pendant l’exécution du script, le bloc attend ; il ne se déclenche de nouveau qu’après que la condition est redevenue fausse puis vraie.

- Utilisation type : réagir à un état, par exemple `quand minuteur > 5 et l’interrupteur est activé`.

### `lorsque le minuteur > …` (Avancé) {#block_event_when_timer_greater_than}

<img src={useBaseUrl('/img/blocks/block_event_when_timer_greater_than.svg')} alt="block_event_when_timer_greater_than.svg" />

Exécute son script lorsque le minuteur du programme dépasse la valeur (en secondes).

- Utilisation type : actions différées, phases chronométrées. Remettez le minuteur à zéro avec **réinitialiser le minuteur** (Capteurs).

### `quand je reçois …` (Gourou) {#block_event_when_message_recieved}

<img src={useBaseUrl('/img/blocks/block_event_when_message_recieved.svg')} alt="block_event_when_message_recieved.svg" />

Exécute son script lorsque le message sélectionné est transmis.

- Utilisation type : coordonner plusieurs scripts.

### `transmettre …` (Gourou) {#block_event_broadcast}

<img src={useBaseUrl('/img/blocks/block_event_broadcast.svg')} alt="block_event_broadcast.svg" />

Envoie un message à chaque script qui commence par **quand je reçois** pour ce message, et continue aussitôt.

- Utilisation type : demander à d’autres scripts de démarrer sans les attendre.

### `transmettre … et attendre` (Gourou) {#block_event_broadcast_and_wait}

<img src={useBaseUrl('/img/blocks/block_event_broadcast_and_wait.svg')} alt="block_event_broadcast_and_wait.svg" />

Envoie un message et met ce script en pause jusqu’à ce que tous les scripts qui l’ont reçu soient terminés.

- Utilisation type : séquences pas à pas où l’ordre compte.

## Événements de hub {#hub-events}

Ces blocs apparaissent lorsqu’un hub du profil les prend en charge. Ils n’existent pas pour les hubs Mould King.

### `quand … … bouton …` (Débutant) {#block_hubs_all_event_button_pressed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_button_pressed.svg')} alt="block_hubs_all_event_button_pressed.svg" />

S’exécute lorsqu’un bouton du hub est appuyé ou relâché.

- États possibles : `appuyé`, `relâché`, `changé`
- Hubs : hubs LEGO Powered Up, WeDo 2.0 et Robot Inventor. La liste des boutons dépend du hub.

### `quand … est connecté / déconnecté` (Débutant) {#block_hubs_all_event_connection_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_connection_changed.svg')} alt="block_hubs_all_event_connection_changed.svg" />

S’exécute lorsque le hub se connecte ou se déconnecte.

- Utilisation type : arrêter le modèle en toute sécurité quand la connexion est perdue, et rétablir son état quand elle revient.

### `quand … % batterie modifiée` (Débutant) {#block_hubs_all_event_battery_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_battery_changed.svg')} alt="block_hubs_all_event_battery_changed.svg" />

S’exécute lorsque le niveau de batterie signalé par le hub change.

- Hubs : ceux qui signalent leur niveau de batterie.
- Utilisation type : alerte de batterie faible, passage en mode économie d’énergie.

### `quand … les données de l’accéléromètre ont changé` (Gourou) {#block_hubs_all_event_accelerometer_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_accelerometer_changed.svg')} alt="block_hubs_all_event_accelerometer_changed.svg" />

S’exécute lorsque les valeurs de l’accéléromètre du hub changent.

- Hubs : BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor.

### `quand … inclinaison … l’angle a changé` (Débutant) {#block_hubs_all_event_tilt_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_changed.svg')} alt="block_hubs_all_event_tilt_changed.svg" />

S’exécute lorsque l’angle d’inclinaison du hub change.

- Angles possibles : `n'importe`, `tangage`, `roulis`, `lacet`
- Hubs : BuWizz 2, BuWizz 3, BOOST Move Hub, Technic Hub, Robot Inventor. `lacet` n’est disponible que sur le Technic Hub et le Robot Inventor.

### `quand … l’orientation a changé` (Débutant) {#block_hubs_all_event_tilt_orientation_changed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_tilt_orientation_changed.svg')} alt="block_hubs_all_event_tilt_orientation_changed.svg" />

S’exécute lorsque l’orientation du hub change, c’est-à-dire lorsqu’une autre face du hub est tournée vers le haut.

- Hubs : les mêmes que pour l’événement d’inclinaison.

## Événements de capteur {#sensor-events}

Ces événements lisent un capteur branché sur un port du hub. Hubs : City Hub, Technic Hub, BOOST Move Hub et le hub MINDSTORMS Robot Inventor (pas SBrick, BuWizz, WeDo 2.0 ni Mould King).

### Capteur Technic : `quand la couleur est …` (Débutant) {#block_hubs_all_event_port_technic_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_color.svg')} alt="block_hubs_all_event_port_technic_sensor_color.svg" />

S’exécute lorsque le capteur de couleur Technic voit la couleur sélectionnée.

### Capteur Technic : `quand … plus proche que / plus loin que / exactement à …` (Débutant) {#block_hubs_all_event_port_technic_sensor_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_technic_sensor_distance.svg')} alt="block_hubs_all_event_port_technic_sensor_distance.svg" />

S’exécute lorsque la distance mesurée par le capteur de distance Technic remplit la condition.

- Comparaisons possibles : `plus proche que`, `plus loin que`, `exactement à`
- Unités : `mm`, `cm`, `pouces`, `%`

### Capteur BOOST : `quand … plus proche que / plus loin que / exactement à …` (Débutant) {#block_hubs_all_event_port_boost_sensor_when_distance}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_when_distance.svg')} alt="block_hubs_all_event_port_boost_sensor_when_distance.svg" />

S’exécute lorsque la distance mesurée par le capteur de couleur et de distance BOOST remplit la condition.

- Comparaisons possibles : `plus proche que`, `plus loin que`, `exactement à`
- Unités : `%`, `cm`, `pouces`

### Capteur BOOST : `quand la couleur est …` (Débutant) {#block_hubs_all_event_port_boost_sensor_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_event_port_boost_sensor_color.svg')} alt="block_hubs_all_event_port_boost_sensor_color.svg" />

S’exécute lorsque le capteur de couleur et de distance BOOST voit la couleur sélectionnée.
