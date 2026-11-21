---
id: HubsAndPorts
title: Bloc Hub et ports
description: "Le bloc Hub de Liens rapides, le choix des ports, les vérifications de ports et la question du port déjà utilisé."
---

import Screenshot from '@site/src/components/Screenshot';

# Bloc Hub et ports

La sortie [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) termine une ligne après une opération. Il y a un bloc Hub par hub dans **Mes hubs** : ajoutez donc d’abord vos hubs à cet endroit. Tant que ce n’est pas fait, l’onglet affiche « Ajoutez des hubs dans Mes hubs ou des indicateurs sur le tableau de bord : ils apparaissent ici ».

## Ce qu’affiche le bloc Hub {#what-the-hub-block-shows}

- le nom du hub et un **point de connexion** (connecté ou non) ;
- les **Ports** sous forme de pastilles : A, B, C, D… sur les hubs LEGO® et le SBrick (A–F sur Robot Inventor et Mould King 6.0), 1–4 sur BuWizz 2.0, 1–4 plus A et B sur BuWizz 3.0 Pro ;
- un sous-titre : « ports A, B », « choisir les ports », « hub entier » (après une opération sur le hub entier) ou « propulsion, direction, phares » (Technic Move).

## Choisir les ports {#choose-ports}

Touchez la pastille d’un port pour l’utiliser ; touchez-la de nouveau pour la libérer. Une ligne peut piloter **plusieurs ports** à la fois, par exemple deux moteurs de propulsion sur A et B.

Deux moteurs doivent tourner en sens opposés ? Créez deux lignes à partir de la même entrée et ajoutez **Inverser** à l’une d’elles.

## Un port, une ligne {#one-port-one-row}

Un port appartient à une seule ligne. Si vous choisissez un port déjà utilisé par une autre ligne, MOCPilot demande :

> **Port déjà utilisé** : Sur « Technic Hub », le port A est utilisé dans la ligne 2 (Moteur). L'utiliser dans cette ligne ? L'autre ligne perd ce port et cesse de le piloter.

**Utiliser dans cette ligne** déplace le port ; **Annuler** le laisse où il était. Un port utilisé par deux lignes (par exemple dans un ancien fichier) est signalé comme problème : « Le port A est aussi utilisé dans la ligne 2 ».

<Screenshot name="port-in-use" alt="Boîte de dialogue Port déjà utilisé" width={700} />

## Vérifications des ports {#port-checks}

Lorsque le hub est connecté, MOCPilot sait ce qui est branché sur chaque port et vérifie que l’opération convient :

| Problème | Signification |
|---|---|
| « Port A : cet appareil ne peut pas servir de servo (il faut un moteur avec encodeur) » | Servo et Tourner de X degrés nécessitent un moteur avec encodeur |
| « Port A : le moteur n'a pas de position absolue (moteurs angulaires uniquement) » | Aller à la position nécessite un moteur angulaire |
| « Le port A a un capteur, pas un moteur » | l’appareil branché sur le port est un capteur |
| « Le port A n'accepte que des commandes de vitesse simples : pas de contrôle de position » | ce port ne peut pas contrôler de positions |
| « Le port A n'a pas de LED : utilisez les ports 1-4 » | Couleur du port ne fonctionne que sur les ports 1 à 4 du BuWizz 3.0 Pro |
| « Lumières du capteur : choisissez un seul port, celui du capteur de distance » | Lumières du capteur prend exactement un port |

Les opérations qu’un hub ne sait pas faire ne sont pas proposées pour lui. Si vous basculez une ligne vers un autre hub, la ligne indique quelle opération ne convient pas, par exemple « Frein : Technic Move uniquement (… n'a pas de commande de frein) ».

## Technic Move Hub {#technic-move-hub}

Le Technic Move Hub (dans les voitures télécommandées LEGO® Technic) se pilote par fonction, et non par port : son bloc Hub affiche **propulsion, direction, phares** et ne prend pas de ports. Utilisez **Moteur** ou **Moteur temporisé** pour rouler, **Servo** pour diriger, **Lumière** pour les phares, et **Frein**, **Boost** et **Impulsion de puissance** pour les fonctions spéciales.

La propulsion, la direction, les phares, le frein et le boost ne peuvent chacun être utilisés que par une seule ligne (« La ligne 2 pilote déjà ce Technic Move »).

Pour charger une configuration de voiture dans le hub (Porsche, Lamborghini, Batmobile), utilisez **Mes hubs → Sélectionner la configuration**. Voir [Configurations du Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Les hubs Mould King ne font que recevoir des commandes : ils n’ont donc pas d’entrées et ne renvoient aucun retour de connexion. Pour changer le canal de contrôle du hub, utilisez l’opération [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
