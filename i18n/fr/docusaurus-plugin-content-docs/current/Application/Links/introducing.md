---
id: LinksIntroducing
title: Présentation de Liens rapides
description: "Liens rapides relie les commandes du tableau de bord aux moteurs et lumières des hubs, ligne par ligne, sans code."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Liens rapides

**Liens rapides** est l’éditeur de programmes sans code de MOCPilot. Vous reliez les commandes du tableau de bord, la manette ou les capteurs des hubs aux moteurs, aux lumières et aux indicateurs, **une ligne à la fois**. Si vous avez utilisé l’application classique Controlz, vous serez en terrain connu.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Lignes de Liens rapides" style={{width: '100%', maxWidth: 720}} />

## Une ligne se lit comme une phrase {#a-row-reads-like-a-sentence}

Chaque ligne se lit de gauche à droite :

**Entrée → Traitement (facultatif) → Opération → Sortie**

> *Joystick 1, axe Y* → *Progressif* → *Moteur* → *Technic Hub, port A*
>
> « Quand je bouge le joystick vers le haut et vers le bas, le moteur du port A tourne, en démarrant et en s’arrêtant en douceur. »

| Élément | Ce que c’est | Exemples |
|---|---|---|
| **Entrée** | d’où vient la valeur | une commande du tableau de bord, le véhicule simulé, la manette, un bouton ou un capteur du hub |
| **Traitement** | modifie la valeur au passage (aucun, un ou plusieurs blocs) | Inverser, Limite, Zone morte, Seuil, Progressif, Bascule |
| **Opération** | ce que le hub doit faire | Moteur, Servo, Moteur temporisé, Lumière, Tourner de X degrés, Aller à la position… |
| **Sortie** | où cela se passe | un **Hub** avec ses ports, ou une sortie directe : Indicateur, LED du hub, Matrice de LED, Étalonner les servos |

Les sorties directes (Indicateur, LED du hub, Matrice de LED, Étalonner les servos) n’ont pas besoin d’opération : *Batterie du hub → Indicateur*.

## L’éditeur {#the-editor}

<Screenshot name="links-editor" alt="Éditeur Liens rapides avec des lignes et la palette" width={900} />

- Les **lignes** occupent l’écran et défilent verticalement. Les nouvelles lignes commencent dans la dernière ligne, vide (« Nouvelle ligne : entrée »).
- La **palette** en bas comporte trois onglets : **Entrées**, **Traitement** et **Sorties**. Elle est construite à partir de votre profil : chaque commande du tableau de bord et chaque hub de Mes hubs y apparaissent automatiquement, la manette apparaît quand les blocs de manette sont activés, et une opération n’apparaît que si un hub du profil sait l’exécuter.
- L’état des lignes dans la barre du haut, juste avant **Lancer**, affiche une coche verte quand toutes les lignes sont prêtes, ou un « ! » rouge avec le nombre de problèmes. Sur un ordinateur, il indique aussi **Toutes les lignes sont prêtes** ou **Problèmes : N**.

## Construire une ligne {#build-a-row}

1. Faites glisser une entrée depuis **Entrées** dans la ligne vide. Une nouvelle ligne est créée.
2. Si besoin, faites glisser des blocs de traitement depuis **Traitement** après l’entrée.
3. Faites glisser une opération (par exemple **Moteur**) depuis **Sorties**.
4. Faites glisser la sortie **Hub** après l’opération et touchez les ports à utiliser.
5. Touchez n’importe quel bloc pour modifier ses réglages : vous choisissez parmi des pastilles, sans rien saisir.

Les blocs s’emboîtent comme des pièces de puzzle. La forme de chaque jointure indique le type de signal, si bien que les blocs incompatibles ne s’emboîtent pas :

- une **valeur** de −1 à 1 (axes du joystick, curseurs, pédales, capteurs) ;
- **activé/désactivé** (boutons, interrupteurs, seuils) ;
- la jointure **opération → hub**, si bien qu’un hub ne peut suivre qu’une opération.

Pour retirer un bloc, faites-le glisser vers la palette (« Déposez ici pour supprimer »), ou touchez-le et choisissez **Supprimer le bloc**.

## Lignes {#rows}

Touchez le numéro de la ligne pour ouvrir le menu de la ligne :

- **Désactiver** / **Activer** : une ligne désactivée reste dans le programme mais ne s’exécute pas. Pratique pour les essais.
- **Supprimer la ligne**.

Vous pouvez ajouter autant de lignes que vous le souhaitez.

## Exécution {#run}

Appuyez sur **Lancer**. Pendant l’exécution du programme, chaque jointure affiche la **valeur en direct** qui la traverse : vous voyez exactement où un signal s’arrête. Vous ne pouvez pas modifier le programme pendant qu’il s’exécute ; appuyez sur **Arrêter** pour le modifier de nouveau. Voir [Exécution et résolution des problèmes](/docs/Application/Links/Problems).

## Annuler {#undo}

**Annuler** et **Rétablir** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Maj+Z, ou les boutons de la barre du haut) permettent de revenir jusqu’à 100 étapes en arrière. Ils ne sont pas disponibles pendant l’exécution du programme.

## En savoir plus {#read-more}

- [Entrées](/docs/Application/Links/Inputs) : commandes, véhicule, manette, boutons et capteurs des hubs
- [Traitement](/docs/Application/Links/Processing) : Inverser, Limite, Zone morte, Seuil, Progressif, Bascule
- [Opérations et sorties](/docs/Application/Links/Operations)
- [Bloc Hub et ports](/docs/Application/Links/HubsAndPorts)
- [Exécution et résolution des problèmes](/docs/Application/Links/Problems)
- [Exemples : voiture, char, grue, train](/docs/Application/Links/Examples)
- Référence des blocs : [entrées](/docs/Application/Links/Blocks/InputBlocks), [traitement](/docs/Application/Links/Blocks/ProcessingBlocks), [opérations et sorties](/docs/Application/Links/Blocks/OutputBlocks)

## Liens rapides ou Blocs logiques ? {#quick-links-or-logic-blocks}

Liens rapides est idéal lorsque chaque commande se contente de faire bouger quelque chose. Si vous avez besoin de logique (séquences, conditions, variables ou réaction en plusieurs étapes à un capteur), utilisez les [Blocs logiques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Vous choisissez le type de programme lors de la création du profil ; voir la [comparaison](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
