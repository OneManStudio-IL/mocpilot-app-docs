---
id: ArrangingControls
title: Ajouter et disposer des commandes
description: "Ajoutez des commandes depuis la palette, déplacez-les et redimensionnez-les, dupliquez-les, verrouillez-les et supprimez-les."
---

import Screenshot from '@site/src/components/Screenshot';

# Ajouter et disposer des commandes {#add-and-arrange-controls}

## Ajouter une commande {#add-a-control}

1. Sur le tableau de bord, touchez **+** (**Ajouter un contrôleur**). Sur un ordinateur, la palette s'ouvre dans sa propre fenêtre.
2. Choisissez un type de commande dans la liste. Les types sont regroupés : **Manettes**, **Curseurs**, **Boutons et interrupteurs**, **Moniteurs**, puis **Véhicule et spéciaux** pour les [commandes spéciales](/docs/Application/Dashboard/SpecialControls) et **Mes designs** pour les designs que vous avez enregistrés. Pour trouver rapidement une commande, tapez dans **Rechercher des commandes**.
3. Le bandeau des apparences montre le type sélectionné dans chaque [thème](/docs/Application/Themes/ThemesOverview) (pour une commande spéciale, toutes ses apparences). Touchez une apparence pour la voir dans le grand aperçu ; vous pouvez l'essayer directement.
4. Réglez la commande dans **Configurer** : les onglets **Style** et **Paramètres** et la taille.
5. Touchez **Ajouter au tableau de bord**. Sur un ordinateur, vous pouvez ajouter plusieurs commandes à la suite.

<Screenshot name="controller-palette" alt="La palette Ajouter un contrôleur" width={900} />

La commande se place dans la première zone libre et reçoit un badge **NOUVEAU**. S'il n'y a pas de place, MOCPilot vous le signale : faites de la place ou choisissez une taille plus petite.

Les commandes des thèmes que vous ne possédez pas affichent **Acheter** et **Tout avec MocPilot Pro** au lieu de **Ajouter au tableau de bord**. Voir [Obtenir, acheter et mettre à jour des thèmes](/docs/Application/Themes/GettingThemes).

## Déplacer {#move}

En mode édition, appuyez sur une commande et faites-la glisser. Quand vous la relâchez, elle s'aligne sur la case de grille la plus proche. Si elle chevauchait une autre commande, elle revient à sa place.

## Tailles {#sizes}

Chaque commande existe en trois tailles : **S**, **M** et **L**. Changez-la avec **Taille** dans les propriétés de la commande. Tailles en cases de grille (largeur × hauteur) :

| Commande | S | M | L |
|---|---|---|---|
| Manette (joystick), Croix directionnelle | 7×7 | 10×10 | 13×13 |
| Curseur | 10×3 | 14×4 | 18×5 |
| Curseur ver. | 3×10 | 4×14 | 5×18 |
| Bouton rotatif | 6×6 | 8×8 | 10×10 |
| Bouton, Interrupteur | 3×3 | 4×4 | 5×5 |
| Interrupteur à pas | 8×3 | 12×4 | 16×5 |
| Interrupteur à pas ver. | 3×8 | 4×12 | 5×16 |
| Moniteur | 4×2 | 6×2 | 8×3 |
| Niveau de la batterie, Vitesse | 6×6 | 8×8 | 10×10 |
| Moniteur inclinable | 8×4 | 12×6 | 16×8 |
| Volant | 8×8 | 12×12 | 16×16 |
| Pédales | 11×8 | 16×12 | 21×16 |
| Boîte manuelle, Boîte automatique | 8×8 | 10×10 | 12×12 |
| Frein à main | 4×7 | 6×10 | 8×13 |
| Clignotants | 8×5 | 10×6 | 14×8 |
| Manipulateur de train | 6×8 | 8×10 | 10×13 |

Le champ complet mesure 40 × 20 cases. Si une taille plus grande ne rentre pas, déplacez d'abord les commandes voisines.

## Sélectionner et modifier {#select-and-edit}

Touchez (cliquez sur) une commande pour la sélectionner et ouvrir ses **propriétés**. Voir [Propriétés des commandes](/docs/Application/Dashboard/ControlProperties).

## Menu contextuel {#context-menu}

Appui long (écran tactile) ou clic droit (ordinateur) sur une commande :

- **Verrouiller** / **Déverrouiller**
- **Propriétés**
- **Changer de thème** : fait passer la commande à un autre thème que vous possédez et qui propose le même type de commande
- **Dupliquer** : une copie avec les mêmes propriétés
- **Dupliquer (Type uniquement)** : une nouvelle commande du même type avec les propriétés par défaut
- **Supprimer**

Appui long ou clic droit sur une partie vide du champ :

- **Verrouiller tout** / **Déverrouiller tout**
- **Supprimer N contrôleurs** : supprime toutes les commandes non verrouillées

Sur un ordinateur, avec le panneau des propriétés ouvert : **Échap** le ferme, **Suppr** / **Retour arrière** supprime la commande, **⌘D / Ctrl+D** la duplique.

## Verrouiller des commandes {#lock-controls}

Une commande **verrouillée** ne peut être ni déplacée ni supprimée : vous ne risquez pas de la décaler en pilotant ou en modifiant le tableau de bord. Elle affiche une icône de cadenas. Verrouillez une commande depuis son menu ou avec **Verrouiller le contrôleur** dans ses réglages, ou verrouillez tout avec **Verrouiller tout**.

## Noms des commandes {#control-names}

Chaque commande a un nom court affiché sur son cadre en mode édition, comme **JOY1**, **SLDR2** ou **BTN1**. Le programme désigne les commandes par ces noms : en Liens rapides, le bloc d'entrée indique *JOY1*, et en Blocs logiques, vous choisissez *JOY1* dans le menu du bloc.

## Supprimer {#delete}

Utilisez **Supprimer** dans le menu ou le bouton corbeille dans les propriétés. Les commandes verrouillées ne peuvent pas être supprimées. Une commande utilisée par le programme ne peut pas être supprimée tant que vous n'avez pas retiré ses lignes ou ses blocs.
