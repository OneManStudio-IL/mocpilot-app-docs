---
id: Indicators
title: Indicateurs et moniteurs
description: "Affichez la batterie, la vitesse, l'inclinaison, des valeurs de capteurs et du texte sur le tableau de bord."
---

# Indicateurs et moniteurs {#indicators-and-monitors}

Les moniteurs affichent des informations sur le tableau de bord pendant que vous pilotez : niveau de la batterie, vitesse, inclinaison, distance jusqu'à un obstacle, rapport ou mode en cours.

| Moniteur | Affiche | Thème |
|---|---|---|
| **Moniteur** | un texte ou un nombre | tous les thèmes |
| **Niveau de la batterie** | une jauge de niveau | thèmes payants |
| **Vitesse** | un compteur de vitesse | thèmes payants |
| **Moniteur inclinable** | le tangage et le roulis d'un modèle | thèmes payants |

Les moniteurs ne font qu'afficher des informations ; vous ne pouvez pas piloter avec eux. Le programme décide de ce qu'ils affichent.

## En Liens rapides {#in-quick-links}

Utilisez la sortie **Indicateur**. La ligne se termine par l'indicateur au lieu d'un hub :

- *Hub* (Batterie) → *Indicateur* (Niveau de la batterie) : la batterie du hub sur une jauge.
- *Hub* (Vitesse du moteur, port A) → *Indicateur* (Vitesse).
- *Hub* (Inclinaison : tangage) → *Indicateur* (Moniteur inclinable, Inclinaison X), et une seconde ligne pour Inclinaison : roulis → Inclinaison Y.
- *Hub* (Tension de la batterie) → *Indicateur* (Moniteur) : affiche la valeur avec son unité, par exemple « 7.85 V ».

L'indicateur affiche la valeur telle quelle : la ligne n'a donc pas d'opération. Voir [Indicateur](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## En Blocs logiques {#in-logic-blocks}

Utilisez les blocs des contrôleurs à l'écran :

- *afficher … sur le moniteur …* pour le Moniteur ;
- *définir … sur le moniteur …* pour le Niveau de la batterie et la Vitesse ;
- *définir … sur le moniteur de tangage / roulis …* pour le Moniteur inclinable.

Vous pouvez afficher tout ce que vous savez calculer : une valeur de capteur, une variable, un texte comme « Rapport 2 ». Voir [Contrôleurs à l'écran](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Astuces {#tips}

- Placez le moniteur de batterie dans un coin où vos doigts ne le cacheront pas.
- Pour les messages plus longs, utilisez un Moniteur multiligne avec le dépassement **Texte défilant** ou **Faire défiler**.
- Le programme peut changer la couleur de la plupart des commandes, par exemple pour faire passer un bouton au rouge quand la batterie est faible.
