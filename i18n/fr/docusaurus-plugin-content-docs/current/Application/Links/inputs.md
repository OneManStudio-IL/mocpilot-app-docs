---
id: Inputs
title: Entrées
description: "Les entrées de Liens rapides : commandes du tableau de bord, véhicule simulé, manette, boutons et capteurs des hubs."
---

import Screenshot from '@site/src/components/Screenshot';

# Entrées

Chaque ligne commence par une entrée. L’onglet **Entrées** de la palette contient :

- un bloc par **commande du tableau de bord** ; les commandes à plusieurs canaux (axes du joystick et de la croix directionnelle, volant, pédales, levier de vitesses, frein à main, clignotants) ont un bloc par canal ;
- les blocs **Véhicule**, lorsque le tableau de bord comporte des pédales, un levier de vitesses ou un frein à main ;
- le bloc **Manette de jeu**, lorsque les blocs de manette sont activés ;
- un bloc **Hub** par hub du profil (sauf Mould King, qui n’a ni boutons ni capteurs).

Si l’onglet est vide, il affiche « Ajoutez des contrôleurs sur le tableau de bord ou des hubs dans Mes hubs : ils apparaissent ici ».

<Screenshot name="links-palette-inputs" alt="L’onglet Entrées de la palette Liens rapides" width={900} />

Tous les réglages et toutes les valeurs de chaque entrée sont détaillés dans la référence [Blocs d’entrée](/docs/Application/Links/Blocks/InputBlocks).

## Commandes du tableau de bord {#dashboard-controls}

Un bloc [Contrôleur](/docs/Application/Links/Blocks/InputBlocks#src-controller) prend une commande de votre tableau de bord par son nom (**JOY1**, **SLDR1**, **BTN2**…) et, si la commande en a plusieurs, le **Canal** voulu :

| Commande | Ce que reçoit la ligne |
|---|---|
| [Joystick](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **Axe X** ou **Axe Y**, −1…1 |
| [Curseur](/docs/Application/Links/Blocks/InputBlocks#controller-slider), [manipulateur de traction](/docs/Application/Links/Blocks/InputBlocks#controller-train), [bouton rotatif](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | sa position |
| [Volant](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **Angle de braquage** −1…1 ou **Klaxon** |
| [Pédales](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **Pédale d'accélérateur** ou **Pédale de frein**, 0…1 |
| [Levier de vitesses](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **Rapport** ou **Sens (R − / avant +)** |
| [Frein à main](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **Frein à main serré** (activé/désactivé) ou **Force du frein à main** |
| [Clignotants](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **Clignotants (gauche − / droite +)**, **Clignotant gauche**, **Clignotant droit** ou **Lumière** |
| [Croix directionnelle](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **Haut / bas** ou **Gauche / droite** : −1, 0 ou +1 |
| [Bouton](/docs/Application/Links/Blocks/InputBlocks#controller-button) | activé tant qu’il est appuyé |
| [Interrupteur](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | activé / désactivé |
| [Interrupteur à étapes](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | l’étape actuelle |

Lorsque vous ajoutez, renommez ou modifiez une commande sur le tableau de bord, la palette et les lignes suivent automatiquement. Si vous réglez un joystick sur **Seulement horizontal**, les lignes qui utilisent son axe Y signalent « … ne bouge pas sur cet axe ».

## Conduire comme une vraie voiture {#drive-like-a-real-car}

Le volant, les pédales, le levier de vitesses et le frein à main donnent leur position brute : une ligne de pédale fait tourner le moteur exactement autant que la pédale est enfoncée. Pour un modèle qui se comporte comme une voiture (il accélère avec de l’inertie, roule sur son élan, freine et recule en R), utilisez plutôt l’entrée [Véhicule](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Elle lit ensemble les pédales, le levier de vitesses et le frein à main et donne la **Vitesse** du véhicule, son **Régime moteur (tr/min)**, le **Freinage** ou **Sur le frein à main** :

- *Véhicule (Vitesse)* → *Moteur* → moteurs de propulsion ;
- *Volant (Angle de braquage)* → *Servo* → direction ;
- *Véhicule (Freinage)* → *Lumière* → feux stop ;
- *Clignotants (Clignotant gauche)* → *Lumière* → clignotant gauche.

## Manette de jeu {#gamepad}

Un seul bloc [Manette de jeu](/docs/Application/Links/Blocks/InputBlocks#src-gamepad) couvre toute la manette ; choisissez un stick, une gâchette ou un bouton dans **Entrée**. Activez d’abord **Activer les blocs de manette** sur la [page Manette de jeu](/docs/Application/Dashboard/Gamepad). Les libellés suivent la **Disposition des boutons de la manette** (Xbox ou PlayStation).

## Boutons et capteurs des hubs {#hub-buttons-and-sensors}

Une entrée [Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) lit le bouton d’un hub ou l’un de ses capteurs : batterie, inclinaison, accélération, vitesse et position des moteurs, capteurs de distance et de couleur sur les ports, etc. La liste n’affiche que ce que ce hub peut signaler. Pour l’inclinaison et l’accélération, réglez **Orientation du hub** selon la position du hub dans le modèle.

La valeur circule le long de la ligne ramenée à −1…1. Un **Moniteur** de texte placé juste après un capteur affiche la valeur réelle avec son unité, par exemple « 7,85 V » ou « −12° ».

Utilisations courantes :

- *Batterie* → *Indicateur* (Niveau de la batterie) ;
- *Capteur de distance* → *Seuil* (En dessous, 20 %) → *Moteur temporisé* : reculer quand un objet s’approche ;
- *Bouton 1* (télécommande Powered Up) → *Moteur* : piloter avec la télécommande physique.
