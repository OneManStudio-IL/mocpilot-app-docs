---
id: RobotInventorHub
title: Hub MINDSTORMS Robot Inventor
description: "Connecter le hub LEGO MINDSTORMS Robot Inventor (51515) ou SPIKE Prime en Bluetooth ou en USB, utiliser ses blocs et remettre le hub en état s’il ne fonctionne plus."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub MINDSTORMS Robot Inventor

Le hub de l’ensemble LEGO® MINDSTORMS® Robot Inventor (51515) est le **LEGO® Technic™ Large Hub** (88016) : six ports A–F, une matrice lumineuse 5×5, un haut-parleur, un gyroscope et un accéléromètre. MOCPilot le pilote avec les mêmes blocs que l’application Robot Inventor, plus tout ce qu’apporte MOCPilot : le tableau de bord, la manette de jeu et les autres hubs du profil.

Le **hub SPIKE™ Prime** (45601) est le même matériel avec le firmware LEGO® Education. MOCPilot le prend en charge avec le firmware **SPIKE Legacy** (bêta) ; voir [Firmware](#firmware).

## Ce qu’il sait faire {#features}

- **Blocs logiques** : tous les blocs de l’application Robot Inventor, voir [Blocs Robot Inventor](#blocks).
- **Liens rapides** : moteurs, capteurs, la [matrice lumineuse](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) et les [lumières du capteur de distance](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights).
- **Moniteur du hub** : batterie, orientation, inclinaison et appareils branchés sur les ports, voir [Moniteur du hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor).

Un programme de blocs peut s’exécuter de deux façons : en **streaming**, où MOCPilot l’exécute et envoie les commandes au hub (gardez l’appareil connecté), ou par **téléchargement**, où MOCPilot l’écrit dans l’un des emplacements de programme du hub et le hub l’exécute tout seul. Voir [Exécuter le programme sur le hub](#download).

## Connecter le hub {#connect}

Ajoutez le hub comme d’habitude ([Ajouter et connecter un hub](/docs/Application/Hubs/ConnectingHubs)) et choisissez **Lego® Large Hub** (ou **LEGO® SPIKE™ Prime Hub**). Sur un ordinateur, la page de connexion comporte en haut un sélecteur **Bluetooth / USB**. MOCPilot mémorise votre choix pour ce modèle de hub.

### En Bluetooth {#bluetooth}

Le hub utilise le Bluetooth classique, et non le Bluetooth Low Energy : il fonctionne sur Android, Mac et Windows, mais pas sur iPhone ni iPad.

1. Allumez le hub.
2. Associez-le dans les paramètres Bluetooth de l’appareil comme un appareil Bluetooth ordinaire (sous Windows : **Paramètres → Bluetooth et appareils → Ajouter un appareil**). Appuyez sur le bouton Bluetooth du hub pour qu’il soit détectable.
3. Dans MOCPilot, touchez **Scanner**.

### Avec un câble USB {#usb}

Sous Windows et Mac, vous pouvez aussi connecter le hub avec son câble USB. Aucun pilote LEGO n’est à installer.

1. Branchez le hub à l’ordinateur avec un câble USB et allumez le hub.
2. Touchez **Connecter**.

Si MOCPilot affiche **Aucun hub en USB**, vérifiez le câble (certains câbles ne font que charger) et que le hub est allumé.

<Screenshot name="robot-inventor-connect" alt="Connexion d’un hub Robot Inventor : le sélecteur Bluetooth / USB" width={900} />

### Fermez d’abord l’application LEGO {#close-lego-app}

Le hub n’accepte qu’une seule connexion. Si l’application MINDSTORMS ou SPIKE est ouverte et occupe le hub, MOCPilot affiche **Le hub est occupé : une autre application l’utilise (LEGO MINDSTORMS ou SPIKE). Fermez cette application et réessayez.** Fermez l’application LEGO et connectez-vous à nouveau.

## Blocs Robot Inventor {#blocks}

Lorsque le profil comporte un hub Robot Inventor ou SPIKE Prime, la palette des Blocs logiques reçoit les blocs de l’application Robot Inventor. Les blocs que seul ce hub peut exécuter portent une **icône du hub** noir et blanc.

| Catégorie | Blocs Robot Inventor |
|---|---|
| [Mouvement](/docs/Application/BlockBuilder/Blocks/Movement) (nouvelle catégorie) | moteurs de déplacement, vitesse, distance par rotation, déplacement, direction, conduite type char, accélération, arrêt, « le déplacement a-t-il été interrompu ? » |
| [Moteurs](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | démarrage à une puissance, « le moteur a-t-il été interrompu ? », ainsi que la puissance du moteur et la détection de blocage |
| [Lumière](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | image pendant quelques secondes, animations avec un éditeur d’images, luminosité des pixels, ainsi que les lumières du capteur de distance |
| [Sons](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | bips, sons de robot du hub, volume, effets sonores, musique : notes, percussions, pauses, instrument, tempo |
| [Capteurs](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | capteur de force, gestes, orientation, lacet / tangage / roulis, remise à zéro du lacet, vitesse angulaire, accélération, inclinaison, radio entre hubs |
| [Événements](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | quand le hub est secoué ou tapoté, posé sur une face, incliné, quand le capteur de force est appuyé, quand un signal radio arrive |

Les blocs de contrôle, d’opérateurs, de variables, de listes et Mes blocs de l’application Robot Inventor sont identiques aux [blocs de base](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) de MOCPilot. Les blocs que les blocs de hub généraux couvrent déjà (vitesse et position des moteurs, capteurs de couleur et de distance, matrice lumineuse, bouton du hub, minuteur) se trouvent dans leurs catégories habituelles.

## Exécuter le programme sur le hub {#download}

Comme l’application Robot Inventor, MOCPilot peut écrire un programme Blocs logiques dans l’un des 20 emplacements de programme du hub (0–19). Le hub l’exécute ensuite sans l’application : vous pouvez déconnecter le téléphone ou l’ordinateur et relancer le programme plus tard avec les boutons du hub.

### Le bouton et la carte de l’emplacement {#slot-card}

Lorsqu’un hub Robot Inventor ou SPIKE Prime est connecté à un profil Blocs logiques, un bouton apparaît dans le coin inférieur droit de l’éditeur, à côté du zoom. Il affiche le numéro de l’emplacement choisi sur une petite matrice 5×5, ou un symbole de streaming. Touchez-le pour ouvrir la carte :

- le hub avec l’emplacement choisi ; **‹** et **›** choisissent l’emplacement 0–19 ;
- **Téléchargement / Streaming** : le fonctionnement de **Lancer** pour ce hub ;
- le bouton de **téléchargement** (⤓) : écrit le programme dans l’emplacement sans le démarrer ;
- une ligne d’état : la progression, *Emplacement 3 : le programme est sur le hub*, ou ce qui n’a pas fonctionné.

Lorsque plusieurs hubs Robot Inventor ou SPIKE Prime sont connectés, la carte comporte aussi un bouton du hub : touchez-le pour choisir le hub qui reçoit le programme. MOCPilot mémorise le mode et l’emplacement sur cet appareil.

<Screenshot name="robot-inventor-slot-card" alt="La carte de l’emplacement : le hub, les flèches d’emplacement, le sélecteur Téléchargement / Streaming et le bouton de téléchargement" width={500} />

### Téléchargement {#download-mode}

En mode **Téléchargement**, **Lancer** transforme le programme de blocs en programme pour le hub, l’écrit dans l’emplacement choisi et le démarre sur le hub. L’écriture prend quelques secondes ; ensuite, le programme s’exécute tout seul sur le hub.

- Pour le relancer plus tard sans l’application, choisissez l’emplacement avec les boutons gauche et droit du hub et appuyez sur le bouton central.
- Le **bouton central** du hub arrête le programme.
- Pour revenir à l’exécution des programmes depuis MOCPilot, passez la carte sur **Streaming**.

### Ce qui peut s’exécuter sur le hub {#download-blocks}

La plupart des blocs peuvent être envoyés sur le hub :

- événements : démarrage du programme, messages, conditions, minuteur, boutons du hub, capteurs, gestes, orientation, inclinaison et signaux radio ;
- contrôle, opérateurs, variables, listes et Mes blocs ;
- tous les blocs Robot Inventor, ainsi que les blocs de moteurs, de lumière et de capteurs de ce hub.

Certains blocs ont besoin de l’application et ne peuvent pas s’exécuter sur le hub seul : les blocs du tableau de bord et de la manette de jeu, les blocs d’autres hubs, l’événement du **bouton central** (sur le hub, ce bouton arrête le programme), les événements de batterie et de connexion, la température et l’étalonnage de la crémaillère. Si le programme en contient un, rien n’est écrit : la carte affiche **Ces blocs ne peuvent pas fonctionner sur le hub sans l’application** et les énumère. Retirez ces blocs ou utilisez **Streaming**.

Si l’écriture échoue, la ligne d’état en indique la raison, par exemple **Pas assez d’espace sur le hub** ou **Le hub n’a pas répondu**. Réessayez, ou redémarrez le hub si l’échec persiste.

## Firmware {#firmware}

MOCPilot fonctionne avec le firmware LEGO du hub et ne le remplace pas :

- **Hub Robot Inventor** : le firmware de l’application MINDSTORMS Robot Inventor. La dernière version est le firmware 1.5.6 avec le logiciel du hub 3.2.36.
- **Hub SPIKE Prime** : le firmware **SPIKE Legacy** (celui de l’application SPIKE 2). Le firmware plus récent **SPIKE App 3** n’est pas pris en charge : MOCPilot le signale lorsqu’il trouve un tel hub. Installez le firmware SPIKE Legacy avec l’application LEGO® Education SPIKE™ Legacy, puis connectez-vous à nouveau.

Quand le hub est prêt, il affiche un numéro d’emplacement de programme sur sa matrice lumineuse.

## Si le hub ne démarre pas {#restore}

Si le hub ne démarre pas, reste éteint, n’affiche pas de numéro d’emplacement ou a été passé au firmware SPIKE App 3, restaurez-le d’abord avec l’application officielle :

1. Ouvrez l’application MINDSTORMS Robot Inventor (l’application SPIKE Legacy pour un hub SPIKE Prime) et connectez le hub avec le câble USB.
2. Lancez la mise à jour du hub (**Update hub firmware**). Elle réécrit le firmware, le logiciel du hub et les sons de robot et dure environ 6 minutes. Ne débranchez pas le hub pendant ce temps.
3. Fermez l’application LEGO et connectez le hub dans MOCPilot.

### Mode de récupération (DFU) {#dfu}

Seulement si l’application officielle ne voit pas du tout le hub, vous pouvez écrire le firmware via le mode de récupération du hub (DFU). Ceci est réservé aux utilisateurs expérimentés :

1. Éteignez le hub et débranchez-le. Maintenez le **bouton Bluetooth** enfoncé et branchez le câble USB ; continuez d’appuyer jusqu’à ce que le voyant du bouton clignote en rouge, vert et bleu. L’ordinateur voit maintenant « LEGO Technic Large Hub in DFU Mode ».
2. Sous Windows, installez une fois le pilote WinUSB pour ce périphérique, par exemple avec Zadig. Mac et Linux n’ont pas besoin de pilote.
3. Écrivez l’image du firmware de l’application Robot Inventor (1.5.6) avec `dfu-util` à l’adresse `0x08008000`. Le hub redémarre tout seul une fois l’écriture terminée. Ne le débranchez pas pendant l’écriture.
4. Lancez ensuite **Update hub firmware** dans l’application Robot Inventor (voir ci-dessus) pour restaurer le logiciel du hub et les sons.

Le DFU n’écrit que le firmware. Le chargeur de démarrage de récupération lui-même ne peut pas être écrasé : vous pouvez donc toujours réessayer.
