---
id: LayeredThemes
title: Thèmes en couches
description: "Comment les thèmes en couches de MOCPilot sont construits à partir de calques d'images, et ce que cela signifie pour vous."
---

# Thèmes en couches {#layered-themes}

Les thèmes payants et les [commandes spéciales](/docs/Application/Dashboard/SpecialControls) utilisent le format **en couches**. Une commande en couches est dessinée à partir de plusieurs calques superposés au lieu d'une seule image :

- des calques d'**image** : le corps, la bordure, le verre et les ombres, préparés avec leurs effets ;
- des **formes et arcs** : anneaux, graduations et arcs de progression qui bougent avec la valeur ;
- du **texte et des icônes** : libellés, chiffres et l'icône que vous choisissez ;
- le **texte du moniteur** : le texte qu'affiche un moniteur.

L'application assemble les calques en direct : la poignée d'un curseur glisse sur sa piste, l'aiguille d'un compteur de vitesse tourne, un arc se remplit, la couleur d'accent teinte les bons calques.

## Ce que cela vous apporte {#what-this-gives-you}

- **Net à toutes les tailles** : S, M et L, et quelle que soit la densité de l'écran.
- **Vos couleurs** : la couleur d'accent et les options du thème modifient l'apparence sans nouveaux graphismes.
- **Fluide et léger** : quelques images par commande, si bien que les tableaux de bord restent rapides, même sur les téléphones anciens.
- **Même comportement** : un joystick de n'importe quel thème se comporte exactement comme un joystick De base ; vous pouvez donc changer de thème sans toucher au programme.

## Versions et compatibilité {#versions-and-compatibility}

Les thèmes sont mis à jour de temps en temps sur le serveur : nouvelles commandes, corrections, meilleurs graphismes. L'application télécharge la version la plus récente qu'elle sait afficher. Une application plus ancienne continue de recevoir la version prévue pour elle : un thème ne casse donc jamais après une mise à jour. Pour profiter de la dernière apparence, gardez MOCPilot à jour.
