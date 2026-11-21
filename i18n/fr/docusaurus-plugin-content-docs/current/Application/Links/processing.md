---
id: Processing
title: Traitement
description: "Les blocs de traitement de Liens rapides : Inverser, Limite, Zone morte, Seuil, Progressif et Bascule."
---

# Traitement

Les blocs de traitement se placent entre l’entrée et l’opération et modifient la valeur au passage. Une ligne peut n’en contenir aucun, un seul ou plusieurs, dans n’importe quel ordre. Réglages et valeurs autorisées : [Blocs de traitement](/docs/Application/Links/Blocks/ProcessingBlocks).

| Bloc | Ce qu’il fait |
|---|---|
| [Inverser](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | inverse le sens, ou échange activé et désactivé |
| [Limite](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | plafonne la valeur |
| [Zone morte](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignore les petits mouvements autour de zéro |
| [Seuil](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | transforme une valeur en activé/désactivé |
| [Progressif](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | accélère et ralentit progressivement |
| [Bascule](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | un appui pour activer, un autre pour désactiver |

## Inverser {#invert}

Le moteur tourne dans le mauvais sens ? Ajoutez **Inverser** au lieu de reconstruire le modèle. Pour deux moteurs qui doivent tourner en sens opposés (chenilles gauche et droite, deux côtés d’une boîte de vitesses), créez deux lignes à partir de la même entrée et placez Inverser dans l’une d’elles.

## Limite {#limit}

Rend le modèle plus lent et plus facile à contrôler : avec **Maximum** à 50 %, le stick à fond donne la moitié de la vitesse. Idéal pour les enfants, la conduite en intérieur et les mécanismes fragiles.

## Zone morte {#dead-zone}

Un joystick revient rarement exactement à zéro : un moteur peut alors bourdonner ou avancer tout doucement. **Zone morte** traite les petites valeurs comme zéro. 10 % est un bon point de départ.

## Seuil {#threshold}

Transforme une valeur en activé/désactivé : « activé quand la valeur est **Au-dessus** de 20 % ». Avec un capteur, *Capteur de distance* → *Seuil* (En dessous, 20 %) est activé quand un objet est proche. Seuil possède une légère hystérésis, pour ne pas clignoter à la limite.

## Progressif {#smooth}

Démarre et s’arrête progressivement, comme un vrai véhicule. L’accélération et la décélération se règlent séparément : un camion lourd peut mettre 2 s à prendre de la vitesse et 0,5 s à s’arrêter. Sur une lumière, Progressif la fait apparaître et disparaître en fondu.

## Bascule {#toggle}

Transforme un bouton en interrupteur : un appui pour activer, un nouvel appui pour désactiver. *Bouton* → *Bascule* → *Lumière*.

## Conseils {#tips}

- L’ordre compte : *Zone morte → Limite → Progressif* est un bon enchaînement pour la conduite.
- Un bloc qui ne convient pas au signal ne s’emboîte pas : Bascule a besoin d’une entrée activé/désactivé ; Zone morte et Seuil ont besoin d’une valeur.
- Observez les valeurs en direct pendant l’exécution du programme pour voir ce que fait chaque bloc.
