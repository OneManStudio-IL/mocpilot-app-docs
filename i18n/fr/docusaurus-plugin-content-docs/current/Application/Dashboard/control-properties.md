---
id: ControlProperties
title: Propriétés des commandes
description: "Modifiez la taille, la couleur, l'icône, l'apparence, le comportement et le thème d'une commande dans ses propriétés."
---

import Screenshot from '@site/src/components/Screenshot';

# Propriétés des commandes {#control-properties}

En mode édition, touchez (cliquez sur) une commande pour ouvrir ses propriétés.

- **Téléphone et tablette** : un panneau au-dessus du tableau de bord ; touchez en dehors pour le fermer.
- **Ordinateur** : un panneau latéral ; vous pouvez continuer à travailler sur le tableau de bord pendant qu'il est ouvert.

<Screenshot name="controller-properties" alt="Panneau des propriétés d'une commande avec les onglets Style et Paramètres" width={900} />

L'en-tête affiche le nom de la commande (par exemple **JOY1**), le bouton corbeille, le menu de duplication et **OK**.

## Onglet Style {#style-tab}

- **Taille** : S, M ou L. Voir [Tailles](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Couleur d'accent** : la couleur principale de la commande.
- **Icône** : une image sur la commande (boutons, interrupteurs, moniteurs), à choisir parmi plus de 260 icônes.
- **Apparence** : l'apparence d'une [commande spéciale](/docs/Application/Dashboard/SpecialControls), par exemple le style d'un volant.
- Options propres au thème : par exemple **Carbone coloré**, **Bordures colorées** et **Afficher les lignes de course** dans Course, **Nombre de segments de l'indicateur** dans Machines de construction, **Afficher les valeurs** dans Aura.
- **Changer de thème** : fait passer la commande à un autre thème que vous possédez et qui propose le même type de commande.

## Onglet Paramètres {#settings-tab}

Réglages communs :

- **Verrouiller le contrôleur** : une commande verrouillée ne peut être ni déplacée ni supprimée.
- **Interactivité** : une commande non interactive n'enregistre pas les appuis.

Réglages propres à chaque type :

| Commande | Réglages |
|---|---|
| Manette (joystick) | **Type d'axes** : Les deux axes (X, Y), Seulement horizontal (X), Seulement vertical (Y) |
| Curseur, Curseur ver. | **Retour à zéro**, **Valeurs négatives**, **Valeur de l'étape** |
| Bouton rotatif | **Crans (0 = sans crans)** (0–24), **Zéro au centre (-100..100)** |
| Interrupteur à pas, Interrupteur à pas ver. | **Nombre de pas** (1–100), **Valeurs négatives**, **Activer la réinitialisation** |
| Moniteur | **Disposition du texte**, **Dépassement du texte**, **Lignes maximales**, **Sens de défilement**, **Vitesse de défilement**, **Afficher la barre de défilement**, **Défilement interactif**, **Alignement du texte**, **Échelle du texte** |
| Moniteur inclinable | **Inverser l'inclinaison**, **Inverser le roulis** |
| Volant | **Angle du volant** (20–120°), **Effets sonores** |
| Pédales | **Effets sonores** |
| Boîte manuelle | **Nombre de rapports** (2–6) |
| Boîte automatique | **Nombre de rapports** (2–8) |
| Clignotants | **Les sorties des clignotants clignotent** ; dans l'onglet Style, **Icône: left**, **Icône: light**, **Icône: right** |

Les réglages numériques ont un bouton **Réinitialiser** qui rétablit la valeur par défaut.

## Modifier les propriétés depuis le programme {#change-properties-from-the-program}

En Blocs logiques, des blocs peuvent modifier une commande pendant l'exécution du programme : changer sa couleur, activer ou désactiver son interactivité, afficher des valeurs sur les moniteurs. Voir [Blocs des contrôleurs à l'écran](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
