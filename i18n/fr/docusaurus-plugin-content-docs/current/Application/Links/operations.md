---
id: Operations
title: Opérations et sorties
description: "Les opérations de Liens rapides (Moteur, Servo, Lumière et autres) et les sorties (Hub, Indicateur, LED du hub, Matrice de LED, Étalonner les servos)."
---

import Screenshot from '@site/src/components/Screenshot';

# Opérations et sorties

L’onglet **Sorties** de la palette regroupe les opérations et les sorties.

- Une **Opération** indique *quoi* faire (faire tourner un moteur, diriger, faire clignoter une lumière). Une sortie **Hub** la suit toujours et indique *où* : quel hub et quels ports.
- Une **sortie directe** (Indicateur, LED du hub, Matrice de LED, Étalonner les servos) termine la ligne à elle seule, sans opération.

Les opérations courantes (Moteur, Servo, Moteur temporisé, Lumière) sont toujours présentes. Les opérations propres à un hub n’apparaissent que si un hub du profil les prend en charge. Chaque réglage avec ses valeurs et sa valeur par défaut : [Blocs d’opération et de sortie](/docs/Application/Links/Blocks/OutputBlocks).

## Moteurs et lumières {#motors-and-lights}

| Opération | Ce qu’elle fait | Utilisation type |
|---|---|---|
| [Moteur](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | fait tourner le moteur selon la valeur de l’entrée ; 0 l’arrête | propulsion, treuils |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | amène un moteur avec encodeur à une position qui suit l’entrée | direction |
| [Moteur temporisé](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | fait tourner le moteur pendant une durée fixe à chaque appui | portes, bennes |
| [Tourner de X degrés](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | fait tourner le moteur d’un angle fixe à chaque appui | indexage, plaques tournantes |
| [Aller à la position](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | amène un moteur angulaire à une position quand c’est activé et à une autre quand c’est désactivé | volets, sélecteurs de vitesse |
| [Lumière](/docs/Application/Links/Blocks/OutputBlocks#op-light) | allume des lumières LEGO®, en continu ou en clignotant | phares, gyrophares, clignotants |
| [Couleur du port](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | colore les LED de port d’un BuWizz 3.0 Pro | couleurs d’état |
| [Lumières du capteur](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | allume les « yeux » du capteur de distance Technic (Robot Inventor) | visages de robots |

### Diriger avec Servo {#steering-with-servo}

Servo nécessite un moteur avec encodeur et un mécanisme de direction que vous centrez à la main ou qui possède des butées.

- **Manuel** : tournez l’axe jusqu’au milieu et touchez **Définir comme zéro** ; affinez avec **◀ 5°** / **5° ▶**. Choisissez ensuite l’**Angle** et, si les roues tirent encore d’un côté, le **Centre**.
- **Auto** : à chaque démarrage, le moteur tourne jusqu’aux deux butées, le milieu devient le zéro et la course devient l’angle. **Étalonner maintenant** le lance immédiatement. Messages : « Étalonnage : le moteur tourne jusqu'aux deux butées… », « Étalonné : le servo tourne de ±…°, le centre est le zéro », « Échec de l'étalonnage : vérifiez le hub, le moteur et que l'axe a des butées ».

Sur un **Technic Move Hub**, le hub dirige et étalonne lui-même sa crémaillère ; seul le mode d’étalonnage s’applique.

<Screenshot name="links-servo-settings" alt="Réglages d’un bloc Servo" width={900} />

## Opérations sur le hub entier {#operations-for-the-whole-hub}

Elles commandent le hub dans son ensemble : le bloc Hub qui les suit n’a donc pas de ports.

| Opération | Hub | Ce qu’elle fait |
|---|---|---|
| [Frein](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | freine tant que l’entrée est activée |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | mode de puissance boost quand c’est activé, normal quand c’est désactivé |
| [Impulsion de puissance](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | une impulsion de puissance par appui (configuration Batmobile™ Tumbler uniquement) |
| [Mode de puissance](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | change le mode de puissance : Lente, Normal, Rapide, Ludicrous |
| [Canal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | change le canal de contrôle : A, B, C |

## Sorties {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) : le hub et ses ports. Voir [Bloc Hub et ports](/docs/Application/Links/HubsAndPorts).
- [Indicateur](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator) : affiche la valeur sur un moniteur du tableau de bord (moniteur de texte, Niveau de la batterie, Vitesse, Moniteur d'inclinaison). Juste après un capteur du hub, un moniteur de texte affiche la valeur réelle avec son unité. L’indicateur affiche la valeur telle quelle : la ligne n’a donc pas d’opération. Voir [Indicateurs et moniteurs](/docs/Application/Dashboard/Indicators).
- [LED du hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led) : le voyant de couleur d’un hub LEGO®, d’une couleur tant que l’entrée est activée et d’une autre tant qu’elle est désactivée.
- [Matrice de LED](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix) : la matrice lumineuse du hub Robot Inventor : une barre de niveau, un nombre ou une image.
- [Étalonner les servos](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate) : réétalonne chaque Servo en mode **Auto**. Placez-le sur un bouton du tableau de bord : *BTN3* → *Étalonner les servos*.

## À l’arrêt du programme {#when-the-program-stops}

Les moteurs s’arrêtent, la matrice de LED s’efface, et les couleurs des ports et les lumières du capteur s’éteignent.
