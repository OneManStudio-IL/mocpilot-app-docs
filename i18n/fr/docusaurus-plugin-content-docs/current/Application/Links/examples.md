---
id: Examples
title: "Exemples : voiture, char, grue, train"
description: "Recettes Liens rapides prêtes à l’emploi pour une voiture, un char, une grue et un train."
---

# Exemples

Des recettes prêtes à l’emploi. Placez d’abord les commandes sur le tableau de bord et ajoutez les hubs dans Mes hubs, puis construisez les lignes.

## Voiture avec direction par servo {#car-with-servo-steering}

Tableau de bord : **JOY1** (Seulement vertical) à gauche, **JOY2** (Seulement horizontal) à droite, **BTN1** et un moniteur **Niveau de la batterie**.

| # | Entrée | Traitement | Opération | Sortie |
|---|---|---|---|---|
| 1 | JOY1, axe Y | Zone morte 10 %, Progressif 0,5 s | Moteur | Technic Hub, ports A + B |
| 2 | JOY2, axe X | | Servo (Auto, ±90°) | Technic Hub, port D |
| 3 | BTN1 | Bascule | Lumière | Technic Hub, port C |
| 4 | Hub : Batterie | | | Indicateur : Niveau de la batterie |

Si l’un des moteurs de propulsion tourne dans le mauvais sens, scindez la ligne 1 en deux lignes et ajoutez **Inverser** à l’une d’elles.

## Voiture avec volant, pédales et boîte de vitesses {#car-with-a-wheel-pedals-and-a-gearbox}

Tableau de bord : un **Volant**, des **Pédales**, un **Levier de vitesses**, un **Frein à main** et des **Clignotants**. L’entrée [Véhicule](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) transforme les pédales, la boîte de vitesses et le frein à main en une vitesse qui monte et retombe comme celle d’une vraie voiture.

| # | Entrée | Traitement | Opération | Sortie |
|---|---|---|---|---|
| 1 | Véhicule : Vitesse | | Moteur | Technic Hub, ports A + B |
| 2 | Volant : Angle de braquage | | Servo (Auto) | Technic Hub, port D |
| 3 | Véhicule : Freinage | | Lumière | Technic Hub, port C (feux stop) |
| 4 | Clignotants : Clignotant gauche | | Lumière | City Hub, port A |
| 5 | Clignotants : Clignotant droit | | Lumière | City Hub, port B |

## Char (deux chenilles) {#tank-two-tracks}

Tableau de bord : deux curseurs verticaux **VSLDR1** et **VSLDR2** avec **Retour à zéro** et **Valeurs négatives** activés.

| # | Entrée | Traitement | Opération | Sortie |
|---|---|---|---|---|
| 1 | VSLDR1 | Progressif 0,25 s | Moteur | Hub, port A |
| 2 | VSLDR2 | Inverser, Progressif 0,25 s | Moteur | Hub, port B |

Avec une manette, utilisez Stick gauche Y pour la ligne 1 et Stick droit Y pour la ligne 2.

## Grue {#crane}

Tableau de bord : **DPAD1**, **SLDR1**, **SWCH1**.

| # | Entrée | Traitement | Opération | Sortie |
|---|---|---|---|---|
| 1 | DPAD1, Gauche / droite | Limite 50 % | Moteur | Hub, port A (orientation) |
| 2 | DPAD1, Haut / bas | | Moteur | Hub, port B (treuil du crochet) |
| 3 | SLDR1 | Zone morte 10 % | Moteur | Hub, port C (flèche) |
| 4 | SWCH1 | | Lumière (clignotement 0,5 s) | Hub, port D (gyrophare) |

## Train {#train}

Tableau de bord : un **Interrupteur à pas** **STPR1** avec **Valeurs négatives** (crans de vitesse en marche avant et arrière) et **BTN1** pour les phares.

| # | Entrée | Traitement | Opération | Sortie |
|---|---|---|---|---|
| 1 | STPR1 | Progressif 2 s | Moteur | City Hub, port A |
| 2 | BTN1 | Bascule | Lumière | City Hub, port B |
| 3 | Hub : Batterie | | | Indicateur : Moniteur |

Le bloc Progressif fait démarrer et s’arrêter le train comme un vrai. Avec un **manipulateur de traction** sur le tableau de bord, utilisez-le dans la ligne 1 à la place de STPR1 : il donne la position du levier, négative en marche arrière.

## Voiture Technic Move {#technic-move-car}

| # | Entrée | Traitement | Opération | Sortie |
|---|---|---|---|---|
| 1 | Véhicule : Vitesse | | Moteur | Technic Move (propulsion) |
| 2 | Volant : Angle de braquage | | Servo | Technic Move (direction) |
| 3 | BTN1 | Bascule | Lumière | Technic Move (phares) |
| 4 | BTN2 | | Boost | Technic Move |

Sans levier de vitesses sur le tableau de bord, la voiture recule lorsque vous maintenez la pédale de frein à l’arrêt.

## Essayer dans le navigateur {#try-it-in-the-browser}

La démo Liens rapides sur [mocpilot.com](https://mocpilot.com) propose un profil d’exemple avec des lignes de ce type ; voir [Éditeur web](/docs/Introducing/WebEditor).
