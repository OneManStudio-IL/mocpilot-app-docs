---
id: HubFunctions
title: Fonctions propres aux hubs
description: "Fonctions spéciales des hubs Technic Move, BuWizz, SBrick, Mould King, Robot Inventor et autres dans les deux éditeurs."
---

# Fonctions propres aux hubs

Tout hub doté de ports peut piloter des moteurs et des lumières. Certains hubs en font davantage. Dans **Liens rapides**, ces fonctions n’apparaissent dans la palette que si un tel hub fait partie du profil ; dans **Blocs logiques**, ce sont des blocs propres au hub.

## Moteurs avec encodeur (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Fonction | Liens rapides | Blocs logiques |
|---|---|---|
| Contrôle de la vitesse | [Moteur](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | définir la vitesse à, démarrer le moteur à … % vitesse |
| Servo de direction avec étalonnage | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manuel / Auto) | aller à la position relative, étalonner la crémaillère |
| Rotation d’un angle donné | [Tourner de X degrés](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | exécuter … pendant |
| Position absolue (moteurs angulaires) | [Aller à la position](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | aller … à la position |
| Comportement à l’arrêt : roue libre, frein, maintien | Moteur → **À l'arrêt** | régler le moteur sur … à l'arrêt |
| Préréglages d’accélération du hub | Moteur → **Accélération du hub** | définir l'accélération à, définir la décélération à |
| Vitesse, position, puissance, courant comme entrée | [Entrée Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) | vitesse, position, position relative, puissance |

## Technic Move Hub {#technic-move-hub}

Le hub des voitures télécommandées LEGO® Technic (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- La propulsion, la direction et les phares se commandent par fonction, et non par port.
- La **direction** étalonne elle-même sa crémaillère.
- **Frein**, **Boost** (mode de puissance) et **Impulsion de puissance** (uniquement avec la configuration Batmobile™ Tumbler).
- **Configurations du hub** : chargez un profil de voiture dans le hub avec **Mes hubs → Sélectionner la configuration**. Voir [Configurations du Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Blocs logiques : les blocs de profil de voiture (*démarrer les moteurs*, *définir la crémaillère de direction sur*, *définir le frein des moteurs*, *impulsion de puissance*, *allumer les lumières*, *définir le mode d'alimentation*), ou les blocs de port ordinaires : moteurs `A`, `B` (propulsion) et `C` (direction ; *étalonner la crémaillère* sur `C`, puis *aller à la position relative*), lumières `1`–`6` une par une, inclinaison, accélération et orientation. Une seule méthode par hub : les deux commandent les mêmes moteurs et lumières. Voir [Moteurs → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub).
- Liens rapides : **Commande** dans le bloc Hub choisit **Profil de voiture** (les lignes font rouler, dirigent et allument les phares) ou **Ports** (moteurs `A`, `B`, `C` et lumières `1`–`6`, comme les autres hubs). Voir [Bloc Hub et ports → Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub). Une [Entrée Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) peut aussi lire son inclinaison, son accélération et sa vitesse de rotation.

## BuWizz 2.0 {#buwizz-20}

- **Mode de puissance** : Lent, Normal, Rapide, Ludicrous. Liens rapides : l’opération [Mode de puissance](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) ; Blocs logiques : *définir … mode d'alimentation sur …*.
- Le mode de puissance actuel, la **Tension de sortie** et le courant des moteurs comme entrées. À vide, la tension de sortie est d’environ 6,3 V en Lent, 7,7 V en Normal, 9,15 V en Rapide et 10,5 V en Ludicrous.
- Simple contrôle de la vitesse sur les ports 1 à 4 : pas de contrôle de position.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- LED de **Couleur du port** sur les ports 1 à 4 : depuis une liste ou en RVB ([Couleur du port](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) ; *définir la couleur de la LED du port sur …*).
- Courant des moteurs comme entrée, positions relatives.
- Les moteurs avec capteur (Technic L et XL, SPIKE, Robot Inventor et les moteurs angulaires gris) sur les ports 1 à 4 fonctionnent avec régulation de vitesse : le hub maintient la vitesse réglée, ils tournent donc régulièrement même à basse vitesse (à partir d’environ 20 %). À l’arrêt, ils passent en roue libre. Les moteurs simples, les lumières et les ports A et B fonctionnent comme avant.
- Les moteurs BOOST (du coffret BOOST Move Hub) ne fonctionnent pas sur un BuWizz 3.0 Pro : le hub ne les reconnaît que de temps en temps et le moteur ne tourne pas correctement.

## SBrick et SBrick Plus {#sbrick-and-sbrick-plus}

- Moteurs et lumières avec contrôle de la vitesse.
- Pas de contrôle de position : Servo, Tourner de X degrés et Aller à la position ne sont pas disponibles.
- Les moteurs passent en roue libre à l’arrêt ; le SBrick ne propose ni frein ni maintien.
- Les lettres de port A–D dans MOCPilot sont celles imprimées sur le hub.
- La tension de la batterie s’affiche en volts ; le pourcentage de batterie est approximatif (calculé sur 4,8–9 V).
- Les capteurs branchés sur les ports d’un SBrick Plus (via des adaptateurs) ne sont pas encore pris en charge.

## Mould King 4.0 et 6.0 {#mould-king-40-and-60}

- Commandes uniquement : pas de capteurs, pas de boutons, pas de retour de connexion.
- **Canal de contrôle** A, B ou C : l’opération [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) dans Liens rapides, le bloc *définir … canal de contrôle vers …* dans Blocs logiques, ou **Sélectionner le canal** dans Mes hubs.
- Jusqu’à 3 Mould King 4.0 ou 1 Mould King 6.0 par profil, et un seul type de Mould King par profil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Tout sur la connexion, le firmware et les blocs : [Hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).

- **Matrice de LED** : une barre de niveau, un nombre ou une image dans Liens rapides ; du texte et des pixels dans Blocs logiques.
- **Lumières du capteur de distance** (les « yeux » du capteur).
- **Détection de blocage** et puissance du moteur.
- Tous les blocs de l’application Robot Inventor : [Mouvement](/docs/Application/BlockBuilder/Blocks/Movement), sons et musique du hub, gestes, lacet, capteur de force, radio entre hubs.
- Bluetooth classique (non disponible sur iPhone et iPad) ou câble USB sous Windows et Mac.

## Hubs LEGO® avec LED de couleur {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor et la télécommande : vous pouvez régler la couleur de la LED du hub depuis une liste ou en RVB ([LED du hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led) dans Liens rapides, *définir la couleur LED sur* dans Blocs logiques).

## Télécommande LEGO® Powered Up {#lego-powered-up-remote-control}

Ses boutons sont des entrées : vous pouvez donc piloter un modèle avec la télécommande physique via MOCPilot (Liens rapides : entrée **Hub** → Bouton ; Blocs logiques : événements des boutons du hub).

## Capteurs intégrés {#built-in-sensors}

Le niveau et la tension de la batterie, la température de la carte, l’inclinaison (tangage, roulis, lacet), l’accélération et l’orientation sont disponibles sur les hubs qui en disposent. Réglez **Orientation du hub** (Liens rapides) ou *définir … orientation d'inclinaison à …* (Blocs logiques) selon la façon dont le hub est monté.

Dans les Blocs logiques, les hubs Technic Hub, Technic Move Hub, Robot Inventor et SPIKE Prime indiquent aussi leur vitesse de rotation (gyroscope, *vitesse de rotation (°/s)*), et le Technic Hub et le BOOST Move Hub indiquent le courant qu’ils consomment (*courant (mA)*). Voir [Capteurs](/docs/Application/BlockBuilder/Blocks/Sensors#hub-state).
