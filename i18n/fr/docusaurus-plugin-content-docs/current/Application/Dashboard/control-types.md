---
id: ControlTypes
title: Types de commandes
description: "Joystick, croix directionnelle, curseurs, bouton rotatif, boutons, interrupteurs, interrupteurs à pas, moniteurs et commandes spéciales."
---

# Types de commandes {#control-types}

Chaque [thème](/docs/Application/Themes/ThemesOverview) dessine le même ensemble de types de commandes dans son propre style. Le thème gratuit **De base** en propose neuf ; chaque thème payant y ajoute le **Bouton rotatif** et trois moniteurs graphiques. Les volants, pédales, leviers de vitesses et autres [commandes spéciales](/docs/Application/Dashboard/SpecialControls) sont des produits à part.

| Commande | Nom sur le tableau de bord | Ce qu'elle transmet au programme | Disponible dans |
|---|---|---|---|
| Manette (joystick) | JOY | axes X et Y | tous les thèmes |
| Croix directionnelle | DPAD | boutons haut / bas / gauche / droite | tous les thèmes |
| Curseur | SLDR | une valeur | tous les thèmes |
| Curseur ver. | VSLDR | une valeur | tous les thèmes |
| Bouton rotatif | DIAL | une valeur | thèmes payants |
| Bouton | BTN | appuyé / relâché | tous les thèmes |
| Interrupteur | SWCH | activé / désactivé | tous les thèmes |
| Interrupteur à pas | STPR | un numéro de pas | tous les thèmes |
| Interrupteur à pas ver. | VSTPR | un numéro de pas | tous les thèmes |
| Moniteur | MNTR | affiche un texte ou une valeur | tous les thèmes |
| Niveau de la batterie | MNTBT | affiche un niveau | thèmes payants |
| Vitesse | MNTSP | affiche une vitesse | thèmes payants |
| Moniteur inclinable | MNTLT | affiche le tangage et le roulis | thèmes payants |
| Volant, pédales, boîtes de vitesses, frein à main, clignotants, manipulateur de train | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | voir [Commandes spéciales](/docs/Application/Dashboard/SpecialControls) | produits spéciaux |

Le nom sur le tableau de bord reçoit un numéro : le premier joystick s'appelle **JOY1**, le deuxième **JOY2**.

## Joystick {#joystick}

Un manche qui revient au centre tout seul. Il transmet une valeur **X** (gauche/droite) et une valeur **Y** (haut/bas) ; le centre vaut zéro.

- **Type d'axes** : **Les deux axes (X, Y)**, **Seulement horizontal (X)** ou **Seulement vertical (Y)**. Un joystick à un seul axe est plus facile à utiliser quand il sert uniquement à avancer ou uniquement à tourner.
- Usage typique : Y pour avancer et X pour tourner, ou un joystick par chenille pour un char.

## Croix directionnelle {#directional-pad}

Quatre boutons : haut, bas, gauche et droite. Chacun est soit appuyé, soit relâché. En Liens rapides, un axe de la croix donne −1, 0 ou +1 (**Haut / bas** ou **Gauche / droite**), ce qui est pratique pour des mouvements pas à pas, comme le crochet d'une grue.

## Curseur et Curseur ver. {#slider-and-ver-slider}

Une poignée qui se déplace le long d'une piste horizontale ou verticale.

- **Retour à zéro** : la poignée revient en place quand vous la lâchez (comme un accélérateur) au lieu de rester là où vous la laissez (comme le réglage de vitesse d'un train).
- **Valeurs négatives** : le zéro est au milieu, le curseur donne donc des valeurs négatives et positives (marche arrière et marche avant).
- **Valeur de l'étape** : le curseur se déplace par paliers.

## Bouton rotatif {#rotary-knob}

Un bouton rond, comme un réglage de volume, dans le groupe **Curseurs** de chaque thème payant. Tournez-le d'un doigt autour de son centre : il tourne d'environ 135° de chaque côté et reste là où vous le laissez.

- **Crans (0 = sans crans)** (0–24) : avec des crans, le bouton passe d'un cran à l'autre avec un déclic.
- **Zéro au centre (-100..100)** : le bouton donne de −100 à 100 avec le zéro au milieu, au lieu de 0 à 100.
- Blocs : *quand le bouton rotatif … est tourné / appuyé / relâché / tourné au minimum / tourné au maximum*, *valeur du bouton rotatif …*, *le bouton rotatif … est-il appuyé / au minimum / au maximum ?* Voir [Contrôleurs à l'écran](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- En Liens rapides, le bouton rotatif fonctionne comme un [curseur](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Le thème De base n'a pas de bouton rotatif. Comme chaque thème payant en a un, **Changer de thème** fait passer un bouton rotatif à l'apparence d'un autre thème.

## Bouton {#button}

Appuyé tant que vous le maintenez, relâché quand vous le lâchez. Utilisez-le pour un klaxon ou un mouvement bref, ou avec le bloc **Bascule** en Liens rapides pour allumer et éteindre quelque chose.

## Interrupteur {#switch}

Reste activé ou désactivé : touchez-le pour changer d'état. Utilisez-le pour les phares, des modes ou le blocage d'un treuil.

## Interrupteur à pas et Interrupteur à pas ver. {#step-switch-and-ver-step-switch}

Une commande **−** / **+** qui compte des pas, comme des rapports ou les crans de vitesse d'un train.

- **Nombre de pas** : de 1 à 100 (10 par défaut).
- **Valeurs négatives** : autorise des pas en dessous de zéro (crans de marche arrière).
- **Activer la réinitialisation** : toucher la valeur la remet à zéro.

## Moniteur {#monitor}

Affiche un texte ou un nombre venant du programme : vitesse, batterie, nom d'un mode, valeur d'un capteur.

- **Disposition du texte** (une ou plusieurs lignes), **Dépassement du texte** (Rogner, Retour à la ligne, Texte défilant, Faire défiler), **Lignes maximales**, options de défilement, **Alignement du texte** et **Échelle du texte**.

## Niveau de la batterie, Vitesse, Moniteur inclinable {#battery-level-speedometer-tilt-monitor}

Des indicateurs graphiques des thèmes payants. Le programme définit leur valeur : la batterie d'un hub, la vitesse d'un moteur, l'inclinaison d'un hub. Le **Moniteur inclinable** propose **Inverser l'inclinaison** et **Inverser le roulis**. Voir [Indicateurs et moniteurs](/docs/Application/Dashboard/Indicators).

## Commandes spéciales {#special-controls}

Un volant, des pédales, une boîte de vitesses manuelle ou automatique, un frein à main, un commodo de clignotants et un manipulateur de train. Chacune est un produit à part, avec de nombreuses apparences. Voir [Commandes spéciales](/docs/Application/Dashboard/SpecialControls).

## Interactivité {#interactivity}

Chaque commande interactive dispose de l'option **Interactivité** (activée par défaut). Une commande non interactive ne réagit pas au toucher. Le programme peut activer et désactiver l'interactivité, par exemple pour bloquer l'accélérateur jusqu'à la fin d'une vérification au démarrage.
