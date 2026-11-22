---
id: Gamepad
title: Manette de jeu
description: "Pilotez votre modèle avec une manette de type Xbox ou PlayStation."
---

import Screenshot from '@site/src/components/Screenshot';

# Manette de jeu {#gamepad}

Une vraie manette est souvent plus agréable qu'un écran tactile : de vrais sticks, de vraies gâchettes et de vrais boutons. MOCPilot fonctionne avec les manettes Bluetooth et USB prises en charge par le système de l'appareil (manettes de type Xbox et PlayStation sur iPhone, iPad, Android, Mac et Windows).

La manette fonctionne en complément du tableau de bord ; vous pouvez utiliser les deux en même temps.

## Connecter une manette {#connect-a-gamepad}

1. Associez la manette à votre téléphone, votre tablette ou votre ordinateur dans les réglages Bluetooth du système (ou branchez-la en USB).
2. Ouvrez un profil et allez dans **Manette de jeu** : dans la barre supérieure de l'éditeur sur un ordinateur, dans **Plus** sur un téléphone ou une tablette (l'élément indique **Manette de jeu (connectée)** quand le système voit une manette).
3. L'en-tête de la page affiche **Manette : (nom)**. « La manette n'est pas connectée » signifie que le système ne la voit pas encore.

<Screenshot name="gamepad" alt="La page Manette de jeu" width={900} />

## La page Manette de jeu {#gamepad-page}

- **Activer les blocs de manette** : active les entrées de manette pour ce profil. Sans cette option, les lignes Liens rapides qui utilisent l'entrée Manette de jeu signalent « Activez les blocs de manette sur la page Manette (barre du haut) », et Blocs logiques n'affiche pas la catégorie Manette de jeu.
- **Disposition des boutons de la manette** : **Xbox** (A, B, X, Y, LB, RB, LT, RT) ou **Sony PS** (Croix, Rond, Carré, Triangle, L1, R1, L2, R2). Les éditeurs nomment les boutons selon ce choix.
- **Plage de valeurs de la manette** (Blocs logiques) : les sticks donnent **-1..1** ou **-100..100**.
- **Sélectionner la manette** : lorsque plusieurs manettes sont connectées.
- **Tester la manette** → **Test** : un testeur en direct qui affiche les boutons, les gâchettes, les sticks et la croix directionnelle, pour tout vérifier avant de l'utiliser.

Les réglages sont enregistrés dans le profil.

## Utiliser la manette en Liens rapides {#use-the-gamepad-in-quick-links}

Faites glisser l'entrée **Manette de jeu** dans une ligne et choisissez son **Entrée** :

- sticks : Stick gauche Y, Stick gauche X, Stick droit Y, Stick droit X ;
- gâchettes : RT / LT (R2 / L2) ;
- boutons de façade : A, B, X, Y (Croix, Rond, Carré, Triangle) ;
- boutons de tranche : LB / RB (L1 / R1) ;
- croix directionnelle : Haut, Bas, Gauche, Droite.

Exemple : *Manette de jeu* (Stick gauche Y) → *Progressif* → *Moteur* → *Hub* (port A). Voir [Entrées](/docs/Application/Links/Inputs#gamepad).

## Utiliser la manette en Blocs logiques {#use-the-gamepad-in-logic-blocks}

La catégorie **Manette de jeu** contient des blocs d'événement (*quand le bouton de la manette est …*, *quand la croix directionnelle de la manette est …*, *quand le stick de la manette est …*) et des blocs de valeur (bouton, croix directionnelle, stick, pression des gâchettes). Voir [Blocs de manette](/docs/Application/BlockBuilder/Blocks/Gamepad).

## Profils à publier {#profiles-for-publishing}

Un profil peut être publié dans le catalogue avec seulement une manette et aucune commande sur le tableau de bord : la condition est « un contrôleur du tableau de bord ou la manette ».
