---
id: InputBlocks
title: Blocs d’entrée
description: "Référence de toutes les entrées de Liens rapides : commandes du tableau de bord et leurs canaux, véhicule, manette, boutons et capteurs des hubs."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocs d’entrée

Chaque ligne commence par une entrée. L’onglet **Entrées** de la palette affiche les blocs que votre profil peut utiliser en ce moment : un bloc par commande du tableau de bord (un par canal pour les commandes à plusieurs canaux), les blocs **Véhicule**, le bloc **Manette de jeu** et un bloc **Hub** par hub. Mode d’emploi : [Entrées](/docs/Application/Links/Inputs).

Chaque entrée envoie l’un de ces deux signaux le long de la ligne :

- **valeur** : un nombre de −1 à 1 (0…1 pour les commandes sans côté négatif) ;
- **activé/désactivé** : 1 ou 0.

Les blocs de traitement et les opérations n’acceptent que les signaux qu’ils savent traiter ; voir [Blocs de traitement](/docs/Application/Links/Blocks/ProcessingBlocks).

## Contrôleur {#src-controller}

Une commande de votre tableau de bord, affichée sous son nom (**JOY1**, **SLDR1**, **BTN2**…).

- **Contrôleur** : n’importe quelle commande du tableau de bord parmi celles listées ci-dessous. Les moniteurs sont des sorties, pas des entrées.
- **Canal** : ce que donne la commande, pour les commandes à plusieurs canaux. La palette propose un bloc par canal.

Le volant, les pédales, le levier de vitesses, le frein à main, les clignotants, la boîte de transfert et le manipulateur de traction sont décrits dans [Commandes spéciales](/docs/Application/Dashboard/SpecialControls).

Si la commande est retirée du tableau de bord, la ligne signale « Choisissez un contrôleur du tableau de bord ». Si son canal n’existe plus, elle signale « Choisissez ce que donne … » (pour un joystick : « … ne bouge pas sur cet axe »).

### Joystick {#controller-joystick}

- **Canal** : **Axe X** ou **Axe Y**. Un joystick réglé sur **Seulement horizontal (X)** ou **Seulement vertical (Y)** ne propose que cet axe.
- Donne : une valeur de −1…1, 0 au centre.

### Curseur, curseur vertical {#controller-slider}

- Pas de canal.
- Donne : une valeur de 0…1, ou de −1…1 lorsque **Valeurs négatives** est activé.

### Manipulateur de traction {#controller-train}

Le manipulateur de traction (commande spéciale) fonctionne comme un curseur dans Liens rapides.

- Pas de canal.
- Donne : une valeur de −1…1 : la position du levier par rapport à l’ensemble des crans, négative quand l’inverseur est en marche arrière, 0 au neutre.

### Bouton rotatif {#controller-knob}

Le bouton rotatif des thèmes payants fonctionne comme un curseur dans Liens rapides.

- Pas de canal.
- Donne : une valeur de 0…1, ou de −1…1 lorsque le zéro du bouton est au centre.

### Volant {#controller-wheel}

- **Canal** : **Angle de braquage** (par défaut) ou **Klaxon**.
- Angle de braquage donne : une valeur de −1…1, 0 en ligne droite.
- Klaxon donne : la valeur 1 tant que la zone du klaxon est appuyée, sinon 0.

### Pédales {#controller-pedals}

- **Canal** : **Pédale d'accélérateur** (par défaut) ou **Pédale de frein**.
- Donne : une valeur de 0…1, selon l’enfoncement de la pédale.
- Les pédales donnent la position brute de la pédale. Pour une voiture qui accélère, ralentit et recule d’elle-même, utilisez l’entrée [Véhicule](#src-vehicle).

### Levier de vitesses {#controller-gear}

Les leviers de vitesses manuel et automatique (commande spéciale).

- **Canal** : **Rapport** (par défaut) ou **Sens (R − / avant +)**.
- Rapport, boîte manuelle : le rapport engagé divisé par le nombre de rapports avant : le rapport le plus haut donne 1, le point mort 0, la marche arrière une valeur négative. Avec 4 rapports, la 2ᵉ donne 0,5.
- Rapport, boîte automatique : identique à Sens.
- Sens donne : −1 en R, 0 en N (et P), +1 sur n’importe quel rapport avant ou en D.

### Frein à main {#controller-handbrake}

- **Canal** : **Frein à main serré** (par défaut) ou **Force du frein à main**.
- Frein à main serré donne : activé/désactivé, activé tant que le levier est verrouillé.
- Force du frein à main donne : une valeur de 0…1, selon la course du levier.

### Clignotants {#controller-turnsignals}

Le commodo des clignotants (commande spéciale).

- **Canal** : **Clignotants (gauche − / droite +)** (par défaut), **Clignotant gauche**, **Clignotant droit** ou **Lumière**.
- Clignotants donne : la valeur −1 (gauche), 0 (éteint) ou +1 (droite).
- Clignotant gauche et Clignotant droit donnent : la valeur 1 tant que ce clignotant est actif (en clignotant avec la lampe lorsque le clignotement de la commande est activé), sinon 0.
- Lumière donne : la valeur 1 tant que la lumière est allumée, sinon 0.

### Boîte de transfert {#controller-transfercase}

La [boîte de transfert](/docs/Application/Dashboard/SpecialControls#transfer-case) (commande spéciale).

- **Canal** : **Transmission intégrale** (par défaut), **Gamme courte**, **Blocage du différentiel avant**, **Blocage du différentiel central** ou **Blocage du différentiel arrière**.
- Transmission intégrale donne : activé/désactivé, activé en 4H et 4L.
- Gamme courte donne : activé/désactivé, activé en 4L.
- Chaque blocage de différentiel donne : activé/désactivé, activé tant que ce blocage est enclenché.
- La position elle-même (2H, 4H, N, 4L) est transmise au simulateur par le réglage **Boîte de transfert** de l’entrée [Véhicule](#src-vehicle).

### Croix directionnelle {#controller-dpad}

- **Canal** : **Haut / bas** ou **Gauche / droite**.
- Donne : la valeur +1 (haut ou droite), −1 (bas ou gauche) ou 0.

### Bouton {#controller-button}

- Pas de canal.
- Donne : activé/désactivé, activé tant qu’il est appuyé.

### Interrupteur {#controller-switch}

- Pas de canal.
- Donne : activé/désactivé.

### Interrupteur à étapes {#controller-stepper}

- Pas de canal.
- Donne : une valeur : l’étape actuelle divisée par **Nombre de pas**, de sorte que la dernière étape donne 1 (−1 pour la dernière étape négative).

## Véhicule {#src-vehicle}

Une voiture simulée, pilotée par les pédales, le levier de vitesses, le frein à main et la boîte de transfert du tableau de bord : elle accélère, freine, roule sur son élan et recule comme un vrai véhicule, et la ligne reçoit sa vitesse ou son régime moteur. La palette affiche les blocs Véhicule lorsque le tableau de bord comporte des pédales, un levier de vitesses ou un frein à main, avec un bloc par sortie, déjà relié à la première commande de chaque type.

- **Pédales** : les pédales du tableau de bord qui pilotent le véhicule (obligatoire).
- **Levier de vitesses** : **aucun** ou un levier de vitesses du tableau de bord. Sans levier, maintenir la pédale de frein à l’arrêt fait reculer le véhicule.
- **Frein à main** : **aucun** ou un frein à main du tableau de bord.
- **Boîte de transfert** : **aucun** ou une boîte de transfert du tableau de bord. En 2H et 4H, le véhicule roule comme sans elle ; en N, il n’avance pas (il roule sur son élan) ; en 4L, sa vitesse est limitée à 40 %.
- **Type de véhicule** : **Voiture** (par défaut), **Tout-terrain**, **Voiture de sport** ou **Camion**. Les types diffèrent par leur inertie et leur vitesse en marche arrière ; le camion a en plus un frein pneumatique.
- **Sortie** :
  - **Vitesse** (par défaut) : une valeur de −1…1, négative en marche arrière ;
  - **Régime moteur (tr/min)** : une valeur de 0…1 ;
  - **Freinage** : activé/désactivé, activé tant que le véhicule freine ;
  - **Sur le frein à main** : activé/désactivé.

Problèmes : « Choisissez les pédales du véhicule », « … n'est pas sur le tableau de bord ».

<Screenshot name="links-vehicle-settings" alt="Réglages d’un bloc d’entrée Véhicule" width={900} />

## Manette de jeu {#src-gamepad}

La manette de jeu connectée à votre appareil. Le bloc n’apparaît dans la palette que si **Activer les blocs de manette** est activé (page **Manette de jeu** dans la barre du haut) ; sinon, la ligne signale « Activez les blocs de manette sur la page Manette (barre du haut) ».

- **Entrée** (par défaut **Stick gauche Y**). Les libellés suivent la **Disposition des boutons de la manette** (Xbox / PlayStation) :
  - **Stick gauche Y**, **Stick gauche X**, **Stick droit Y**, **Stick droit X** : une valeur de −1…1 ;
  - **RT** / **R2**, **LT** / **L2** (gâchettes) : une valeur ;
  - **A**, **B**, **X**, **Y** / **Croix**, **Rond**, **Carré**, **Triangle** : activé/désactivé ;
  - **LB** / **L1**, **RB** / **R1** (boutons de tranche) : activé/désactivé ;
  - **Haut**, **Bas**, **Gauche**, **Droite** (croix directionnelle) : activé/désactivé.

## Hub {#src-hub}

Le bouton d’un hub ou un capteur : sur le hub lui-même ou sur l’un de ses ports. Il y a une entrée Hub par hub du profil, sauf pour les hubs Mould King, qui ne font que recevoir des commandes.

- **Hub** : un hub du profil.
- **Bouton ou capteur** : uniquement ce que ce hub peut signaler (liste ci-dessous).
- **Port** : pour les capteurs branchés sur un port (valeurs des moteurs, capteurs de port).
- **Orientation du hub** : pour l’inclinaison et l’accélération sur les hubs qui permettent de la changer : **Conserver** (par défaut) ou la façon dont le hub est monté dans le modèle.

La valeur d’un capteur circule le long de la ligne divisée par sa pleine échelle et limitée à −1…1 : une batterie à 50 % donne 0,5. Un **Moniteur** de texte placé juste après le capteur affiche la valeur réelle avec son unité.

| Bouton ou capteur | Signal | Unité, pleine échelle | Hubs |
|---|---|---|---|
| **Bouton 1, 2…** | activé/désactivé | | hubs dotés d’un bouton ; les boutons de la télécommande LEGO® Powered Up |
| **Batterie** | valeur | %, 100 | hubs qui la signalent |
| **Tension de la batterie** | valeur | V, 12 | hubs qui la signalent |
| **Tension de sortie** | valeur | V, 12 | BuWizz 2.0 |
| **Température** | valeur | °C, 100 | hubs qui la signalent |
| **Inclinaison : tangage** | valeur | °, 90 | hubs avec capteur d’inclinaison |
| **Inclinaison : roulis** | valeur | °, 180 | hubs avec capteur d’inclinaison |
| **Inclinaison : lacet** | valeur | °, 180 | hubs avec axe de lacet |
| **Accélération X / Y / Z** | valeur | m/s², 19,6 | hubs avec accéléromètre |
| **Vitesse de rotation X / Y / Z** | valeur | °/s, 360 | hubs avec gyroscope : Technic Hub, Technic Move Hub, Robot Inventor, SPIKE Prime |
| **Courant du hub** | valeur | mA, 3000 | Technic Hub |
| **Vitesse du moteur** | valeur | %, 100 | port ; tous les hubs à ports |
| **Angle du moteur** | valeur | °, 360 (relatif) | port ; moteurs avec encodeur ; pas SBrick, BuWizz 2.0, WeDo 2.0 |
| **Position du moteur** | valeur | °, 180 (absolu) | port ; moteurs angulaires |
| **Puissance du moteur** | valeur | %, 100 | port ; Robot Inventor |
| **Courant du moteur** | valeur | A, 3 | port ; BuWizz 2.0, BuWizz 3.0 Pro |
| **Capteur de distance** | valeur | 250 | port ; pas SBrick ni BuWizz |
| **Capteur de couleur** | valeur | numéro de couleur, 10 | port ; pas SBrick, BuWizz ni WeDo 2.0 |
| **Lumière réfléchie**, **Lumière ambiante** | valeur | %, 100 | port ; pas SBrick, BuWizz ni WeDo 2.0 |
| **Teinte** | valeur | °, 360 | port ; capteur de couleur Technic ou capteur de couleur et de distance BOOST ; pas SBrick, BuWizz ni WeDo 2.0 |
| **Saturation**, **Luminosité de la couleur** | valeur | %, 100 | port ; comme Teinte |
| **Capteur d'inclinaison : tangage / roulis** | valeur | °, 45 | port ; capteur d’inclinaison WeDo 2.0 / BOOST ; pas SBrick ni BuWizz |
| **Mode de puissance** | valeur | 1–4, 4 | BuWizz 2.0 |
| **Connecté** | activé/désactivé | | tous les hubs |

Lorsque le hub est connecté, MOCPilot vérifie aussi l’appareil branché sur le port : « Port A : aucun moteur », « Port A : le moteur n'a pas d'encodeur », « Port A : aucun capteur de distance », etc.
