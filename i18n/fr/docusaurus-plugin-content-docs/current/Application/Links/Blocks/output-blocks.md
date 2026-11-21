---
id: OutputBlocks
title: Blocs d’opération et de sortie
description: "Référence de toutes les opérations et sorties de Liens rapides : Moteur, Servo, Lumière, opérations Technic Move, BuWizz et Mould King, Hub, Indicateur, LED du hub, Matrice de LED, Étalonner les servos."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocs d’opération et de sortie

L’onglet **Sorties** de la palette regroupe les opérations et les sorties. Mode d’emploi : [Opérations et sorties](/docs/Application/Links/Operations).

- Une **Opération** indique quoi faire. Une sortie [Hub](#hub-out) doit la suivre et indique où.
- Une **sortie directe** ([Indicateur](#dash-indicator), [LED du hub](#hub-led), [Matrice de LED](#hub-matrix), [Étalonner les servos](#cmd-calibrate)) termine la ligne à elle seule ; la ligne ne doit pas contenir d’opération.

**Moteur**, **Servo**, **Moteur temporisé** et **Lumière** sont toujours présents dans la palette. Les autres opérations n’apparaissent que si un hub du profil sait les exécuter.

Ci-dessous, « activé » désigne un signal activé/désactivé qui est activé, ou une valeur d’au moins 0,5 (quel que soit son signe).

## Opérations sur les ports {#operations-for-ports}

### Moteur {#op-motor}

Fait tourner le moteur selon la valeur de l’entrée : plus vous poussez, plus il va vite ; 0 l’arrête.

- Accepte : une valeur ou activé/désactivé (activé = pleine vitesse).
- **À l'arrêt** : **Par défaut du hub** (par défaut), **Roue libre**, **Frein** ou **Maintenir la position**.
- **Accélération du hub** : **Par défaut du hub** (par défaut), **Rapide**, **Équilibrée**, **Progressif**, **Lente** ou **Très lente** : la rampe propre au hub. Pour votre propre rampe, utilisez [Progressif](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth).
- **Détection de blocage** : **Par défaut du hub** (par défaut), **Activée** ou **Désactivée**.
- Hubs : tout hub doté de ports. **À l'arrêt** et **Accélération du hub** nécessitent un hub avec contrôle de position (pas SBrick, BuWizz 2.0, WeDo 2.0 ni Mould King) ; **Détection de blocage** nécessite un Robot Inventor. Sur un Technic Move Hub, Moteur fait rouler la voiture.

### Servo {#op-servo}

Dirige avec un moteur doté d’un encodeur : l’entrée −1…1 amène le moteur à *centre + valeur × angle*, et 0 le ramène au centre.

- Accepte : une valeur ou activé/désactivé.
- **Étalonnage** : **Manuel** (par défaut) ou **Auto**.
- **Angle** : ±30°, ±45°, ±60°, ±90°, ±120°, ±180°, ±1 tour, ±2 tours, ±3 tours ou ±5 tours (par défaut ±90°). En mode manuel uniquement.
- **Centre** : −20°, −10°, −5°, 0°, +5°, +10° ou +20° (par défaut 0°). En mode manuel uniquement.
- **Vitesse de rotation** : 25, 50, 75 ou 100 % (par défaut 100 %).
- Manuel : le zéro est la position du moteur à la mise sous tension, ou celle que vous avez fixée avec **Définir comme zéro** (ajustez d’abord avec **◀ 5°** / **5° ▶**).
- Auto : à chaque démarrage, le moteur tourne jusqu’aux deux butées ; le milieu devient le zéro et la course devient l’angle. **Étalonner maintenant** le lance aussitôt. La direction doit avoir des butées.
- Hubs et ports : un moteur avec encodeur sur un hub avec contrôle de position (pas SBrick, BuWizz 2.0, WeDo 2.0 ni Mould King). Sur un Technic Move Hub, Servo actionne la crémaillère de direction du hub, que le hub étalonne lui-même.

<Screenshot name="links-servo-settings" alt="Réglages d’un bloc Servo" width={900} />

### Moteur temporisé {#op-timed}

Fait tourner le moteur pendant une durée fixe chaque fois que l’entrée s’active. La vitesse et le sens dépendent de la valeur de l’entrée à ce moment-là.

- Accepte : une valeur ou activé/désactivé.
- **Durée** : 0,5, 1, 2, 3, 5 ou 10 s (par défaut 1 s).
- Hubs : tout hub doté de ports ; sur un Technic Move Hub, il fait rouler la voiture.

### Tourner de X degrés {#op-degrees}

Fait tourner le moteur d’un angle fixe chaque fois que l’entrée s’active. Une entrée négative le fait tourner dans l’autre sens.

- Accepte : une valeur ou activé/désactivé.
- **Degrés** : 45°, 90°, 180°, 1 tour, 2 tours, 3 tours, 5 tours ou 10 tours (par défaut 1 tour).
- **Vitesse** : 25, 50, 75 ou 100 % (par défaut 50 %).
- Hubs et ports : un moteur avec encodeur sur un hub avec contrôle de position.

### Aller à la position {#op-goto}

Amène le moteur à une position absolue lorsque l’entrée s’active, et à une autre lorsqu’elle se désactive. Il prend le chemin le plus court.

- Accepte : une valeur ou activé/désactivé.
- **Position si activé** : 0°, 45°, 90°, 135°, 180°, 225°, 270° ou 315° (par défaut 90°).
- **Position si désactivé** : **Ne pas bouger** ou l’une des mêmes positions (par défaut 0°).
- **Vitesse** : 25, 50, 75 ou 100 % (par défaut 50 %).
- Hubs et ports : un moteur angulaire (position absolue) sur un hub avec contrôle de position.

### Lumière {#op-light}

Commande des lumières LEGO® branchées sur un port.

- Accepte : une valeur ou activé/désactivé. Avec une valeur, la luminosité la suit (−1 et 1 donnent tous deux la pleine luminosité).
- **Luminosité** : 25, 50, 75 ou 100 % (par défaut 100 %).
- **Clignotement : allumé** : **Sans clignotement** (par défaut), 0,25, 0,5, 1 ou 2 s : durée pendant laquelle la lumière reste allumée à chaque clignotement.
- **Clignotement : éteint** : **Comme allumé** (par défaut), 0,25, 0,5, 1 ou 2 s : durée pendant laquelle elle reste éteinte.
- Hubs : tout hub doté de ports sauf WeDo 2.0. Sur un Technic Move Hub, Lumière allume les phares de la voiture.

### Couleur du port {#op-portcolor}

Règle la couleur des LED de port d’un BuWizz 3.0 Pro.

- Accepte : une valeur ou activé/désactivé.
- **Couleur** : **Dans la liste** (par défaut) ou **RGB**.
- **Couleur si activé** (par défaut Rouge) et **Couleur si désactivé** (par défaut Désactivée) : Désactivée, Rose, Violet, Bleu, Bleu clair, Vert clair, Vert, Jaune, Orange, Rouge, Blanc.
- **Rouge**, **Vert**, **Bleu** (RGB) : 0, 32, 64, 128, 192 ou 255 (par défaut 255, 0, 0).
- Hubs et ports : BuWizz 3.0 Pro, ports 1 à 4. Les LED s’éteignent à l’arrêt du programme.

### Lumières du capteur {#op-sensorlights}

Allume les quatre segments autour des « yeux » du capteur de distance Technic tant que l’entrée est activée.

- Accepte : une valeur ou activé/désactivé.
- **Lumières** : **Toutes** (par défaut), **Haut**, **Bas**, **Gauche**, **Droite** ou **Diagonale**.
- **Luminosité** : 25, 50, 75 ou 100 % (par défaut 100 %).
- Hubs et ports : Robot Inventor, un seul port, celui du capteur de distance. Les lumières s’éteignent à l’arrêt du programme.

## Opérations sur le hub entier {#operations-for-the-whole-hub}

Le bloc Hub placé après ces opérations ne prend pas de ports.

### Frein {#op-brake}

Freine la voiture tant que l’entrée est activée.

- Accepte : une valeur ou activé/désactivé. Aucun réglage.
- Hubs : Technic Move.

### Boost {#op-boost}

Passe le hub en mode de puissance boost tant que l’entrée est activée, et revient en mode normal quand elle se désactive.

- Accepte : une valeur ou activé/désactivé. Aucun réglage.
- Hubs : Technic Move.

### Impulsion de puissance {#op-pulse}

Envoie une impulsion de puissance chaque fois que l’entrée s’active : les moteurs tournent à pleine puissance pendant environ deux secondes.

- Accepte : une valeur ou activé/désactivé. Aucun réglage.
- Hubs : Technic Move avec la configuration **Batmobile™ Tumbler** ; voir [Configurations du Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

### Mode de puissance {#op-powermode}

Règle le mode de puissance d’un BuWizz 2.0 lorsque l’entrée s’active et, si vous en choisissez un, lorsqu’elle se désactive.

- Accepte : une valeur ou activé/désactivé.
- **Mode si activé** : **Lente**, **Normal** (par défaut), **Rapide** ou **Ludicrous**.
- **Mode si désactivé** : **Conserver** (par défaut) ou l’un des modes.
- Hubs : BuWizz 2.0.

### Canal {#op-channel}

Change le canal de contrôle d’un hub Mould King lorsque l’entrée s’active et, si vous en choisissez un, lorsqu’elle se désactive.

- Accepte : une valeur ou activé/désactivé.
- **Canal si activé** : **A** (par défaut), **B** ou **C**.
- **Canal si désactivé** : **Conserver** (par défaut), **A**, **B** ou **C**.
- Hubs : Mould King 4.0 et 6.0.

## Sorties {#outputs}

### Hub {#hub-out}

L’endroit où l’opération s’exécute : un hub et ses ports. Il y a un bloc Hub par hub du profil.

- **Hub** : un hub du profil.
- **Ports** : un ou plusieurs ports de ce hub (A–D sur la plupart des hubs et sur SBrick, A–F sur Robot Inventor et Mould King 6.0, 1–4 sur BuWizz 2.0, 1–4 plus A et B sur BuWizz 3.0 Pro). Un port ne peut appartenir qu’à une seule ligne.
- Accepte : une opération. Les Technic Move Hub et les opérations sur le hub entier ne prennent pas de ports.
- Pour en savoir plus : [Bloc Hub et ports](/docs/Application/Links/HubsAndPorts).

### Indicateur {#dash-indicator}

Affiche la valeur telle quelle sur un moniteur du tableau de bord.

- Accepte : une valeur ou activé/désactivé, sans opération avant.
- **Indicateur du tableau de bord** : un **Moniteur de texte** (Moniteur), un **Moniteur de valeur** (Niveau de la batterie, Vitesse) ou un **Moniteur d'inclinaison** du tableau de bord.
- **Axe** : **Inclinaison X** ou **Inclinaison Y**, uniquement pour un moniteur d’inclinaison (une ligne par axe).
- Un moniteur de texte placé juste après un capteur du hub affiche la valeur réelle avec son unité.

### LED du hub {#hub-led}

Le voyant de couleur du hub : une couleur tant que l’entrée est activée, une autre tant qu’elle est désactivée.

- Accepte : une valeur ou activé/désactivé, sans opération avant.
- **Hub** : un hub doté d’une LED de couleur.
- **Couleur** : **Dans la liste** (par défaut) ou **RGB**.
- **Couleur si activé** (par défaut Rouge) et **Couleur si désactivé** (par défaut Désactivée) : Désactivée, Rose, Violet, Bleu, Bleu clair, Vert clair, Vert, Jaune, Orange, Rouge, Blanc.
- **Rouge**, **Vert**, **Bleu** (RGB) : 0, 32, 64, 128, 192 ou 255 (par défaut 255, 0, 0).
- Hubs : hubs LEGO® (Technic, Technic Move, City, BOOST, WeDo 2.0, Robot Inventor, la télécommande Powered Up) ; pas BuWizz, SBrick ni Mould King.

### Matrice de LED {#hub-matrix}

La matrice lumineuse du hub.

- Accepte : une valeur ou activé/désactivé, sans opération avant.
- **Hub** : un hub doté d’une matrice de LED.
- **Afficher** : **Barre de niveau** (par défaut ; les rangées s’allument depuis le bas selon la valeur), **Nombre** (la valeur de −100 à 100) ou **Image si activé**.
- **Image** : **Cœur** (par défaut), **Sourire**, **Triste**, **Coche**, **Croix**, **Flèche haut**, **Flèche bas**, **Flèche gauche**, **Flèche droite** ou **Tout allumé**.
- **Orientation** : **Conserver** (par défaut), **À l'endroit**, **À l'envers**, **Gauche** ou **Droite**.
- Hubs : Robot Inventor. La matrice s’efface à l’arrêt du programme.

### Étalonner les servos {#cmd-calibrate}

Chaque fois que l’entrée s’active, chaque [Servo](#op-servo) du programme en mode **Auto** s’étalonne à nouveau.

- Accepte : une valeur ou activé/désactivé, sans opération avant. Aucun réglage.
- Le programme doit contenir une ligne Servo prête en mode Auto ; sinon, la ligne signale « Aucun servo en mode d'étalonnage Auto dans ce programme ».
