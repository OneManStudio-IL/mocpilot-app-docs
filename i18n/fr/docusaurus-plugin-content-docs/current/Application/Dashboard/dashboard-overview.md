---
id: DashboardOverview
title: Éditeur du tableau de bord
description: "Le tableau de bord de MOCPilot : le champ, la grille, la barre supérieure, l'arrière-plan et l'annulation."
---

import Screenshot from '@site/src/components/Screenshot';

# Éditeur du tableau de bord {#dashboard-editor}

Le **tableau de bord** est l'écran depuis lequel vous pilotez votre modèle : joysticks, curseurs, boutons, moniteurs et autres commandes. Chaque profil a un tableau de bord.

Ouvrez-le avec le bouton **Tableau de bord** de la barre supérieure de l'éditeur (⌘2 / Ctrl+2 sur un ordinateur). Sur un téléphone à écran étroit, il se trouve dans **Plus**.

- **Téléphone et tablette** : le tableau de bord s'ouvre en plein écran au-dessus de l'éditeur.
- **Ordinateur** : le tableau de bord s'ouvre dans sa propre fenêtre **Tableau de bord**, que vous pouvez garder à côté du programme.
- **Éditeur web** : un panneau flottant que vous pouvez déplacer et redimensionner.

<Screenshot name="dashboard-edit" alt="Le tableau de bord en mode édition avec la grille de points" width={900} />

## Le champ et la grille {#the-field-and-the-grid}

- Le champ a toujours un format **2:1** et s'adapte à l'écran : un tableau de bord a donc le même aspect sur un téléphone, une tablette et un ordinateur.
- En mode édition, une **grille de points** de 40 × 20 cases s'affiche. Les commandes s'alignent sur la grille.
- Les commandes ne peuvent pas se chevaucher. Si une commande ne rentre pas, elle revient à sa place.

## Barre supérieure {#toolbar}

**Téléphone et tablette**

| Bouton | Ce qu'il fait |
|---|---|
| ← | retour à l'éditeur de programme |
| Annuler / Rétablir | annule et rétablit les modifications du tableau de bord |
| **Sélectionner** | sélectionner plusieurs commandes pour les verrouiller, les déverrouiller, les supprimer ou les modifier ensemble ; **Terminé** met fin à la sélection |
| ⚙ (Paramètres du tableau de bord) | options d'arrière-plan et de grille (voir ci-dessous) |
| **+** (Ajouter un contrôleur, avec un anneau orange) | ouvre la palette des contrôleurs ; voir [Ajouter et disposer des commandes](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Lancer** / **Arrêter** : démarre et arrête le programme |

Pendant l'exécution du programme, les boutons d'édition sont masqués.

**Ordinateur et éditeur web**

La barre supérieure ressemble à celle de l'éditeur :

- **À gauche** : **Accueil** (ferme le profil), les menus **Fichier**, **Édition** et **Affichage**, puis **Annuler** et **Rétablir**.
- **Au milieu** : le nom du profil et **Blocs** (ou **Liens** dans un profil Liens rapides, ⌘1 / Ctrl+1) pour revenir au programme. Le tableau de bord lui-même n'a pas de bouton ici : c'est la page sur laquelle vous êtes.
- **À droite** : **Sélectionner**, **Paramètres du tableau de bord** (⚙) et le bouton orange **+ Contrôleur** (Ajouter un contrôleur). Dans une fenêtre étroite, le nom du profil et le bouton **Blocs** se masquent, et **+ Contrôleur** ne garde que son **+**.

Il n'y a pas de **Lancer** dans la barre du tableau de bord sur un ordinateur : lancez et arrêtez le programme depuis l'éditeur (⌘R / Ctrl+R, ⌘. / Ctrl+.). Pendant l'exécution, **Sélectionner**, **Paramètres du tableau de bord** et **+ Contrôleur** sont indisponibles.

Menus : **Fichier** (Fermer le profil, Ouvrir dans une fenêtre séparée), **Édition** (Annuler, Rétablir) et **Affichage** (Blocs ⌘1, Tableau de bord ⌘2). Dans la fenêtre séparée du Tableau de bord, la barre affiche le titre de la fenêtre au lieu d'**Accueil**, **Fichier** contient **Fermer la fenêtre**, et il n'y a ni menu **Affichage** ni bouton **Blocs**.

## Annuler et rétablir {#undo-and-redo}

Le tableau de bord a son propre historique, distinct de celui du programme. Vous pouvez annuler chaque déplacement, redimensionnement, modification de propriété, ajout et suppression.

## Paramètres du tableau de bord {#dashboard-settings}

**Image d'arrière-plan** : touchez **Modifier** et choisissez :

- **Choisir un fond prêt** : un arrière-plan tout prêt fourni avec un thème. La galerie affiche les arrière-plans des thèmes dont les commandes figurent sur ce tableau de bord. Un fond prêt remplit toujours l'écran autour du champ ; les options ci-dessous ne s'y appliquent donc pas.
- **Importer le mien** : n'importe quelle image de votre appareil. Elle est enregistrée dans le profil.

**Supprimer** retire l'arrière-plan.

<Screenshot name="dashboard-backgrounds" alt="Paramètres du tableau de bord avec la galerie des fonds prêts" width={900} />

Pour votre propre image, vous pouvez aussi régler :

- **Mode de remplissage de l'image** : Étirer, Conserver les proportions et ajuster, Conserver les proportions et recadrer, Mosaïque, Mosaïque verticale, Mosaïque horizontale ou Remplir avec marges.
- **Parent de l'image** : **Zone de travail** (le champ uniquement) ou **Tout l'écran**.
- **Opacité de l'image**, **Activer le flou de l'image** et **Intensité du flou** : pour adoucir l'arrière-plan et faire ressortir les commandes.

**Masquer les points** : masque les points de la grille pendant l'exécution du profil. En mode édition, les points restent visibles pour que vous puissiez toujours aligner les commandes.

## Les commandes et le programme {#controls-and-the-program}

Une commande fournit des valeurs ; le programme décide de ce qu'elles font. Une commande utilisée par le programme ne peut pas être supprimée tant que le programme s'en sert. En Liens rapides, supprimez les lignes qui l'utilisent ; en Blocs logiques, supprimez ses blocs.

## Pour aller plus loin {#read-more}

- [Ajouter et disposer des commandes](/docs/Application/Dashboard/ArrangingControls) : ajout, déplacement, tailles, verrouillage
- [Types de commandes](/docs/Application/Dashboard/ControlTypes)
- [Commandes spéciales](/docs/Application/Dashboard/SpecialControls) : volant, pédales, levier de vitesses, frein à main, clignotants, manipulateur de train
- [Propriétés des commandes](/docs/Application/Dashboard/ControlProperties)
- [Indicateurs et moniteurs](/docs/Application/Dashboard/Indicators)
