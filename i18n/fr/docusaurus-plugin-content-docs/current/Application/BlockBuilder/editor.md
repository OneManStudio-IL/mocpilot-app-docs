---
id: Editor
title: Travailler dans l’éditeur
description: "Barre supérieure, palette, glisser-déposer des blocs, zoom, menus contextuels, annulation, Moniteur, Sac à dos, Paramètres de l’éditeur et Assistant IA dans Blocs logiques."
---

import Screenshot from '@site/src/components/Screenshot';

# Travailler dans l’éditeur

<Screenshot name="blocks-editor" alt="Éditeur Blocs logiques" width={900} />

## Barre supérieure {#top-bar}

- **Ordinateur et éditeur web** : **Accueil** et les menus à gauche, avec **Annuler** et **Rétablir** à côté. Au milieu : le nom du profil et **Tableau de bord**, **Hubs** et **Manette de jeu**. À droite : **Assistant IA**, [**Sac à dos**](/docs/Application/BlockBuilder/Backpack), **Moniteur**, **Plus** (⋯), **Contrôle à distance** et le bouton orange **Lancer**. Dans une fenêtre étroite, les boutons qui ne tiennent pas passent dans **Plus** ; ce menu contient toujours **Paramètres de l’éditeur…**.
- **Téléphone et tablette** : **Accueil** à gauche ; à droite **Annuler**, **Rétablir**, **Tableau de bord**, **Mes hubs**, **Contrôle à distance**, **Plus** et **Lancer / Arrêter**. **Plus** contient l’**Assistant IA**, le **Sac à dos**, le **Moniteur**, la **Manette de jeu** et les **Paramètres de l’éditeur**.

Voir [Téléphone, tablette et ordinateur](/docs/Introducing/Layouts#editor-top-bar) pour savoir comment la barre se replie dans une fenêtre étroite.

## Palette et zone de programme {#palette-and-program-area}

- Affichez ou masquez la palette avec **Affichage → Palette de blocs** (⌘P / Ctrl+P).
- Choisissez une catégorie, faites glisser un bloc dans la zone de programme et déposez-le sous un autre bloc pour l’y accrocher. Un aperçu montre où il va s’emboîter.
- Faites glisser une pile entière par son bloc du haut ; faites glisser un bloc du milieu pour le prendre avec tout ce qui se trouve en dessous.
- Pour supprimer des blocs, faites-les glisser vers la palette.
- Les variables, les listes, les messages et Mes blocs se créent avec les boutons de leurs catégories (**Créer une variable**, **Créer une liste**, **Ajouter un message**, **Créer un bloc**) ou depuis **Édition → Nouvelle variable… / Nouvelle liste… / Nouveau message… / Nouveau bloc…**. Les sons et les véhicules ont aussi leurs propres boutons : **Ajouter un son** dans [Sons](/docs/Application/BlockBuilder/Blocks/Sounds) et **Créer un véhicule** dans [Simulateur](/docs/Application/BlockBuilder/Blocks/Simulator).

## Zoom et défilement {#zoom-and-scroll}

- Pincez (sur un écran tactile) ou utilisez **Affichage → Zoom avant / Zoom arrière / Taille réelle** (⌘+ / ⌘− / ⌘0).
- Faites glisser un endroit vide pour vous déplacer.
- Le menu contextuel d’un endroit vide contient **Zoom avant**, **Zoom arrière**, **Réinitialiser le zoom** et **Supprimer N blocs**.

## Menu du bloc {#block-menu}

Faites un appui long (sur un écran tactile) ou un clic droit sur un bloc :

- **Modifier** : changer ses valeurs ;
- **Dupliquer** ;
- **Supprimer le bloc** / **Supprimer N blocs** ;
- **Ajouter au sac à dos** : garder le bloc et tout ce qui y est accroché dans le [sac à dos](/docs/Application/BlockBuilder/Backpack) ;
- **À propos du bloc** : ouvre la description du bloc dans cette documentation ;
- **Exporter le bloc au format SVG** / **Exporter tous les blocs au format SVG** : enregistrer une image pour un tutoriel ou un message sur un forum.

<Screenshot name="blocks-block-menu" alt="Menu contextuel d’un bloc dans Blocs logiques" width={900} />

Un bloc lié à une commande du tableau de bord ne peut être supprimé qu’après avoir été détaché de cette commande.

## Annuler et rétablir {#undo-and-redo}

Utilisez **Édition → Annuler / Rétablir** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Maj+Z) ou les boutons **Annuler** et **Rétablir** de la barre supérieure (à côté des menus sur ordinateur).

- Un glisser-déposer correspond à une étape ; des modifications rapides d’une même valeur sont regroupées en une seule étape.
- L’annulation fonctionne même pendant l’exécution du programme.
- Créer ou supprimer des variables, des listes, des messages ou des blocs de Mes blocs constitue aussi une étape ; l’annuler arrête le programme en cours.
- Les valeurs stockées dans les variables et les listes ne sont pas annulées.
- Le tableau de bord a son propre historique d’annulation.

## Moniteur {#monitor}

Le **Moniteur** (⇧⌘M / Ctrl+Maj+M, **Affichage → Moniteur**) affiche les valeurs actuelles des variables et des listes pendant l’exécution du programme. Son bouton se trouve dans la barre supérieure sur ordinateur et dans **Plus** sur téléphone ou tablette. Sur ordinateur, vous pouvez l’ouvrir dans une fenêtre séparée. C’est une aide précieuse pour traquer un bug.

## Sac à dos {#backpack}

Le **Sac à dos** (⇧⌘B / Ctrl+Maj+B, **Affichage → Sac à dos**) garde des piles de blocs à réutiliser dans n’importe quel profil : choisissez **Ajouter au sac à dos** dans le menu d’un bloc, puis touchez l’élément ou faites-le glisser pour l’insérer dans n’importe quel programme. Son bouton se trouve à côté du **Moniteur** dans la barre supérieure, ou dans **Plus**. Voir [Sac à dos](/docs/Application/BlockBuilder/Backpack).

<Screenshot name="blocks-monitor" alt="Moniteur affichant des variables et une liste pendant l’exécution du programme" width={900} />

## Paramètres de l’éditeur {#editor-settings}

Ouvrez-les depuis **Plus → Paramètres de l’éditeur** dans la barre supérieure (sur ordinateur, aussi **Programme → Paramètres de l’éditeur…**).

- **Lancer un bloc au clic** : cliquer sur un bloc l’exécute, pour que vous puissiez le tester seul ; si le programme est arrêté, cela le démarre aussi.
- **Ouvrir le programme au centre** : à l’ouverture d’un profil, le programme s’affiche à 100 % au centre de la zone (ou depuis son coin supérieur gauche s’il est plus grand), quel que soit l’endroit où vous l’avez laissé pendant la modification. Cela s’applique à tous les profils de cet appareil.
- **Arrêter les ports du hub quand le programme s'arrête** : arrête tous les moteurs et éteint toutes les lumières lorsque vous appuyez sur **Arrêter**. Laissez cette option activée, sauf si les moteurs doivent conserver leur état.
- **Sélectionner le niveau des blocs** : Débutant, Avancé ou Gourou.

<Screenshot name="blocks-editor-settings" alt="Panneau Paramètres de l’éditeur dans Blocs logiques" width={900} />

## Niveaux des blocs {#block-levels}

| Niveau | Affiche |
|---|---|
| **Débutant** | les blocs les plus simples ; une palette épurée pour les enfants et les premiers pas |
| **Avancé** | les blocs courants de logique et d’appareils |
| **Gourou** | l’ensemble complet des blocs |

Le niveau est enregistré dans le profil. Les blocs déjà présents dans le programme continuent de fonctionner si vous baissez le niveau.

## Assistant IA {#ai-builder}

Avec [MocPilot Pro](/docs/Application/Account/Pro), l’**Assistant IA** (le bouton aux étincelles dans la barre supérieure, **Plus → Assistant IA** sur téléphone ou tablette, ⇧⌘I / Ctrl+Maj+I) configure les hubs, le tableau de bord et le programme à partir d’une description que vous tapez ou dictez, puis modifie le profil selon vos demandes. Il fonctionne dans les profils Blocs logiques et Liens rapides. Voir [Assistant IA](/docs/Application/Profiles/AiBuilder).

### Comment obtenir un bon résultat {#ai-builder-tips}

Nommez le hub, indiquez ce qui est branché sur chaque port et ce que cela doit faire, et comment vous voulez le piloter. Voir [Rédiger une bonne demande](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Menus sur ordinateur {#desktop-menus}

| Menu | Éléments |
|---|---|
| Fichier | Fermer le profil (⌘W) |
| Édition | Annuler, Rétablir, Nouvelle variable…, Nouvelle liste…, Nouveau message…, Nouveau bloc… |
| Affichage | Palette de blocs (⌘P), [Sac à dos](/docs/Application/BlockBuilder/Backpack) (⇧⌘B), Moniteur (⇧⌘M), Zoom avant, Zoom arrière, Taille réelle |
| Programme | Lancer (⌘R), Arrêter (⌘.), Paramètres de l’éditeur… |

Sous Windows, utilisez Ctrl au lieu de ⌘ et Maj au lieu de ⇧.
