---
id: DashboardControllers
title: Contrôleurs à l'écran
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Contrôleurs à l'écran

Ces blocs lisent les commandes du tableau de bord, réagissent quand vous les utilisez et modifient leur apparence. Ils se trouvent dans la catégorie **Contrôleurs à l'écran**, qui apparaît dès que le tableau de bord comporte une commande. Chaque type de commande ajoute ses propres blocs ; dans un bloc, vous choisissez la commande par son nom, par exemple *BTN1* ou *GEAR1*.

Plages utilisées ci-dessous : la plupart des valeurs analogiques vont de 0 à 100, ou de −100 à 100 lorsque le zéro est au milieu.

Sur cette page :

- [Blocs pour toutes les commandes](#blocks-for-all-controls) : couleur, interactivité et sons
- [Boutons et interrupteurs](#buttons-and-switches) : bouton, interrupteur, interrupteur à étapes
- [Joysticks et croix directionnelles](#joysticks-and-d-pads)
- [Curseurs et boutons rotatifs](#sliders-and-knobs) : curseur, bouton rotatif
- [Moniteurs](#monitor-blocks)
- [Volant et pédales](#steering-wheel-and-pedals)
- [Autres commandes spéciales](#other-special-controls) : boîte de vitesses, frein à main, clignotants, boîte de transfert, manipulateur de traction

## Blocs pour toutes les commandes {#blocks-for-all-controls}

### `Couleur du contrôleur` (Avancé) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*définir [commande] couleur à [couleur]* : change la couleur d’accent d’une commande.

- Type : bloc de commande
- Fonctionne avec les commandes qui ont une couleur d’accent (pas avec le volant ni les pédales)
- Utilisation type : signaler un état, par exemple un bouton qui devient rouge quand la batterie est faible

### `Interactivité du contrôleur` (Avancé) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[activer / désactiver] [commande] interactivité* : une commande désactivée ne réagit pas au toucher.

- Type : bloc de commande
- Utilisation type : bloquer une commande pendant un moment, par exemple l’accélérateur tant que la vérification au démarrage n’est pas terminée

### `Son d’une commande` (Débutant) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*son [son] de [commande]* : l’un des sons d’une commande, pour les blocs de lecture de son de la catégorie **Sons**.

- Type : bloc de valeur
- Apparaît lorsque le tableau de bord comporte une commande avec des sons : le [volant](/docs/Application/Dashboard/SpecialControls#steering-wheel) (klaxons de voiture, de camion et de voiture de sport) ou les [pédales](/docs/Application/Dashboard/SpecialControls#pedals) (freins de voiture, de voiture de sport et de camion, bip de recul)
- Le son n’est joué que si le réglage **Effets sonores** de la commande et le son de l’application sont activés

## Boutons et interrupteurs {#buttons-and-switches}

### Blocs de bouton {#button-blocks}

#### `Événement du bouton` (Débutant) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*lorsque le bouton [commande] est [appuyé / relâché]* : exécute le script lorsque le bouton est appuyé ou relâché.

- Type : bloc d’événement

#### `Valeur du bouton (booléen)` (Débutant) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*bouton [commande] [appuyé / relâché]* : indique si le bouton est appuyé ou relâché en ce moment.

- Type : bloc de valeur, `true` / `false`

### Blocs d’interrupteur {#switch-blocks}

#### `Événement de l’interrupteur` (Débutant) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*lorsque l'interrupteur [commande] est basculé [activé / désactivé]* : exécute le script lorsque l’interrupteur est activé ou désactivé.

- Type : bloc d’événement

#### `Valeur de l’interrupteur (booléen)` (Débutant) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*interrupteur [commande] [activé / désactivé]* : indique si l’interrupteur est activé ou désactivé.

- Type : bloc de valeur, `true` / `false`

### Blocs d’interrupteur à étapes {#stepper-blocks}

Ces blocs fonctionnent avec l’interrupteur à étapes et l’interrupteur à étapes vertical.

#### `Événement de l’interrupteur à étapes` (Débutant) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*lorsque l'interrupteur à étapes [commande] [n'importe / réinitialiser / moins / plus] est [appuyé / relâché]* : exécute le script lorsqu’un bouton de l’interrupteur à étapes est appuyé ou relâché (**n'importe** désigne n’importe lequel).

- Type : bloc d’événement

#### `Valeur de l’interrupteur à étapes (nombre)` (Débutant) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*interrupteur à étape [commande]* : le numéro de l’étape actuelle.

- Type : bloc de valeur

## Joysticks et croix directionnelles {#joysticks-and-d-pads}

### Blocs de joystick {#joystick-blocks}

#### `Événement du joystick` (Débutant) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*quand le joystick [commande] est [haut / bas / gauche / droite / déplacé / relâché]* : exécute le script lorsque le stick est poussé dans une direction, déplacé de quelque façon que ce soit ou relâché.

- Type : bloc d’événement

#### `Valeur du joystick (nombre)` (Débutant) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [commande] [axe X / axe Y]* : la position du stick sur un axe, de −100 à 100 ; le centre vaut 0.

- Type : bloc de valeur

#### `Valeur du joystick (booléen)` (Débutant) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*est un joystick [commande] [appuyé / relâché]* : indique si un doigt est posé sur le joystick.

- Type : bloc de valeur, `true` / `false`

### Blocs de croix directionnelle {#d-pad-blocks}

#### `Événement de la croix directionnelle` (Débutant) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*quand la croix directionnelle [commande] [haut / bas / gauche / droite] bouton [appuyé / relâché]* : exécute le script lorsqu’un bouton de la croix directionnelle est appuyé ou relâché.

- Type : bloc d’événement

#### `Valeur de la croix directionnelle (booléen)` (Débutant) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*croix directionnelle [commande] [haut / bas / gauche / droite] bouton [appuyé / relâché]* : indique si un bouton de la croix directionnelle est appuyé ou relâché en ce moment.

- Type : bloc de valeur, `true` / `false`

## Curseurs et boutons rotatifs {#sliders-and-knobs}

### Blocs de curseur {#slider-blocks}

Ces blocs fonctionnent avec le curseur et le curseur vertical.

#### `Événement du curseur` (Débutant) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*lorsque le curseur [commande] est [bas / haut / déplacé / relâché]* : exécute le script lorsque la poignée atteint l’extrémité basse ou haute, se déplace ou est relâchée.

- Type : bloc d’événement

#### `Valeur du curseur (nombre)` (Débutant) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*curseur [commande]* : la position de la poignée, de 0 à 100, ou de −100 à 100 avec **Valeurs négatives**.

- Type : bloc de valeur

### Blocs de bouton rotatif {#rotary-knob-blocks}

Blocs du [bouton rotatif](/docs/Application/Dashboard/ControlTypes#rotary-knob) des thèmes payants.

#### `Événement du bouton rotatif` (Débutant) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*quand bouton rotatif [commande] est [tourné / appuyé / relâché / tourné au minimum / tourné au maximum]* : exécute le script lorsque le bouton est tourné, touché, lâché ou atteint l’une de ses extrémités.

- Type : bloc d’événement

#### `Valeur du bouton rotatif (nombre)` (Débutant) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*valeur du bouton rotatif [commande]* : la position du bouton, de 0 à 100, ou de −100 à 100 avec **Zéro au centre (-100..100)**.

- Type : bloc de valeur

#### `Valeur du bouton rotatif (booléen)` (Débutant) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*bouton rotatif [commande] [appuyé / au minimum / au maximum] ?* : indique si un doigt est posé sur le bouton, ou si le bouton est à l’une de ses extrémités.

- Type : bloc de valeur, `true` / `false`

## Moniteurs {#monitor-blocks}

Blocs des [moniteurs](/docs/Application/Dashboard/Indicators).

### `Affichage sur le moniteur` (Débutant) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*afficher [valeur] sur [commande] moniteur* : affiche un texte ou une valeur sur un **Moniteur**.

- Type : bloc de commande
- Utilisation type : afficher le niveau de batterie, l’angle d’un moteur, l’appareil branché sur un port du hub ou le nom d’un mode

### `Valeur du moniteur` (Débutant) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*définir [valeur] à [commande] moniteur* : règle la valeur d’un moniteur **Niveau de la batterie** ou **Vitesse**.

- Type : bloc de commande

### `Valeur du moniteur d’inclinaison` (Débutant) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*définir [valeur] à [commande] [tangage / roulis] moniteur* : règle le tangage ou le roulis affiché sur un **Moniteur d'inclinaison**.

- Type : bloc de commande

## Volant et pédales {#steering-wheel-and-pedals}

### Blocs du volant {#steering-wheel-blocks}

Blocs du [volant](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Événement du volant` (Débutant) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*lorsque le volant [commande] est [déplacé / appuyé / relâché]* : exécute le script lorsque le volant tourne, ou lorsque vous le touchez ou le lâchez.

- Type : bloc d’événement

#### `Valeur du volant (nombre)` (Débutant) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*volant [commande]* : l’angle de braquage, de −100 (à fond à gauche) à 100 (à fond à droite).

- Type : bloc de valeur

#### `Valeur du volant (booléen)` (Débutant) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*volant [commande] [appuyé / relâché]* : indique si un doigt est posé sur le volant.

- Type : bloc de valeur, `true` / `false`

### Blocs des pédales {#pedals-blocks}

Blocs des [pédales](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Événement des pédales` (Débutant) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*lorsque les pédales [commande] [n'importe / frein / accélération] est [déplacé / appuyé / relâché]* : exécute le script lorsqu’une pédale bouge, est enfoncée ou est relâchée.

- Type : bloc d’événement

#### `Valeur des pédales (nombre)` (Débutant) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pédales [commande] [accélération / frein]* : l’enfoncement de l’accélérateur ou du frein, de 0 à 100.

- Type : bloc de valeur

#### `Valeur des pédales (booléen)` (Débutant) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pédale [commande] [accélération / frein] [appuyé / relâché]* : indique si une pédale est enfoncée.

- Type : bloc de valeur, `true` / `false`

## Autres commandes spéciales {#other-special-controls}

Blocs des autres [commandes spéciales](/docs/Application/Dashboard/SpecialControls).

### Blocs de boîte de vitesses {#gearbox-blocks}

Blocs des [boîtes de vitesses manuelle et automatique](/docs/Application/Dashboard/SpecialControls#gear-shifter). Valeurs des rapports : manuelle −1 = R, 0 = N, 1…6 = rapports avant ; automatique −2 = P, −1 = R, 0 = N, 1 = D.

#### `Événement de la boîte de vitesses` (Débutant) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*quand boîte de vitesses [commande] [change de rapport / monte un rapport / descend un rapport / passe au point mort / passe la marche arrière / passe en parking]* : exécute le script lorsque le rapport change. **Monte un rapport** et **descend un rapport** désignent un passage à une valeur plus haute ou plus basse.

- Type : bloc d’événement

#### `Rapport` (Débutant) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*rapport [commande]* : le rapport engagé (voir les valeurs ci-dessus).

- Type : bloc de valeur

#### `État de la boîte de vitesses (booléen)` (Débutant) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*boîte de vitesses [commande] [au point mort / en marche arrière / en marche avant / en parking] ?*

- Type : bloc de valeur, `true` / `false`
- **En marche avant** est vrai sur n’importe quel rapport avant de la boîte manuelle et en D sur la boîte automatique

#### `Nombre de rapports` (Avancé) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*rapports de [commande]* : le réglage **Nombre de rapports** de la boîte de vitesses.

- Type : bloc de valeur
- Utilisation type : l’emplacement *de* du bloc *conduire* du Simulateur

### Blocs du frein à main {#handbrake-blocks}

Blocs du [frein à main](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Événement du frein à main` (Débutant) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*quand frein à main [commande] est [tiré / serré / déverrouillé / relâché]* : exécute le script lorsque le levier est tiré, verrouillé, déverrouillé ou lâché.

- Type : bloc d’événement

#### `Force du frein à main` (Débutant) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*force du frein à main [commande]* : la course du levier, de 0 à 100.

- Type : bloc de valeur

#### `État du frein à main (booléen)` (Débutant) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*frein à main [commande] [serré / déverrouillé / tiré] ?* **Tiré** est vrai tant que la force est supérieure à 0.

- Type : bloc de valeur, `true` / `false`

### Blocs des clignotants {#turn-signals-blocks}

Blocs des [clignotants](/docs/Application/Dashboard/SpecialControls#turn-signals). Ils voient l’état stable des clignotants, sans le clignotement.

#### `Événement des clignotants` (Débutant) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*quand clignotants [commande] [clignotant gauche / clignotant droit / feux] [s'allume / s'éteint]*

- Type : bloc d’événement

#### `État des clignotants (booléen)` (Débutant) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*clignotants [commande] [clignotant gauche / clignotant droit / feux] est allumé ?*

- Type : bloc de valeur, `true` / `false`

### Blocs de la boîte de transfert {#transfer-case-blocks}

Blocs de la [boîte de transfert](/docs/Application/Dashboard/SpecialControls#transfer-case). La deuxième liste des blocs d’événement et d’état propose les mêmes choix :

- **2H**, **4H**, **N**, **4L** : le sélecteur est sur cette position ;
- **transmission intégrale** : le sélecteur est sur 4H ou 4L ;
- **gamme courte** : le sélecteur est sur 4L ;
- **blocage avant**, **blocage central**, **blocage arrière** : le blocage de différentiel est enclenché.

#### `Événement de la boîte de transfert` (Débutant) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*quand boîte de transfert [commande] [2H / 4H / N / 4L / transmission intégrale / gamme courte / blocage avant / blocage central / blocage arrière] [s'enclenche / se désenclenche]* : **s'enclenche** s’exécute quand le choix devient vrai (le sélecteur atteint la position ou le blocage est activé), **se désenclenche** quand il cesse de l’être.

- Type : bloc d’événement

#### `État de la boîte de transfert (booléen)` (Débutant) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*boîte de transfert [commande] [2H / 4H / N / 4L / transmission intégrale / gamme courte / blocage avant / blocage central / blocage arrière] est enclenché ?*

- Type : bloc de valeur, `true` / `false`

#### `Position de la boîte de transfert (nombre)` (Débutant) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*position de la boîte de transfert [commande]* : 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Branchez-le dans l’emplacement *boîte de transfert* du bloc [conduire](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive) pour que le simulateur tienne compte de la boîte de transfert.

- Type : bloc de valeur

### Blocs du manipulateur de traction {#train-controller-blocks}

Blocs du [manipulateur de traction](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Événement du manipulateur de traction` (Débutant) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*quand manipulateur de traction [commande] [cran changé / cran augmenté / cran diminué / traction coupée / inverseur déplacé / levier relâché]* : **Traction coupée** signifie que le levier est revenu au cran 0.

- Type : bloc d’événement

#### `Valeur du manipulateur de traction (nombre)` (Débutant) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*manipulateur de traction [commande] [traction / cran de traction / inverseur]* :

- **traction** : de −100 à 100, le cran en pourcentage avec le signe du sens de marche ;
- **cran de traction** : de 0 à 8 ;
- **inverseur** : 1 = marche avant, 0 = neutre, −1 = marche arrière.
- Type : bloc de valeur

#### `État du manipulateur de traction (booléen)` (Débutant) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*manipulateur de traction [commande] [en marche avant / en marche arrière / au point mort / au cran 0] ?*

- Type : bloc de valeur, `true` / `false`
