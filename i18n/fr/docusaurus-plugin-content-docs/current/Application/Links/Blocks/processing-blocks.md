---
id: ProcessingBlocks
title: Blocs de traitement
description: "Référence de tous les blocs de traitement de Liens rapides : Inverser, Limite, Zone morte, Seuil, Progressif et Bascule."
---

# Blocs de traitement

Les blocs de traitement se placent entre l’entrée et l’opération (ou l’indicateur) et modifient le signal au passage. Une ligne peut en contenir autant que nécessaire, dans n’importe quel ordre. Un bloc qui ne peut pas accepter le signal entrant ne s’emboîte pas ; dans un fichier, il est signalé par le message « “…” ne fonctionne pas avec ce contrôleur ». Mode d’emploi : [Traitement](/docs/Application/Links/Processing).

## Inverser {#mod-invert}

Inverse le signal.

- Aucun réglage.
- Accepte : une valeur ou activé/désactivé. Donne : le même type de signal.
- Valeur : change le signe (0,7 devient −0,7). Activé/désactivé : activé devient désactivé et inversement.

## Limite {#mod-limit}

Réduit la valeur, de sorte qu’un débattement complet ne dépasse pas le maximum.

- **Maximum** : 20, 30, 40, 50, 60, 70, 80 ou 90 % (par défaut 50 %).
- Accepte : une valeur ou activé/désactivé. Donne : une valeur (un bouton limité donne 0 ou le maximum).

## Zone morte {#mod-deadzone}

Traite les petites valeurs autour de zéro comme zéro ; le reste est étiré sur toute la plage, de sorte qu’un débattement complet donne toujours 1.

- **Zone** : 5, 10, 15, 20 ou 30 % (par défaut 10 %).
- Accepte : une valeur. Donne : une valeur.

## Seuil {#mod-threshold}

Transforme une valeur en activé/désactivé.

- **Activé quand la valeur est** : **Au-dessus** (par défaut) ou **En dessous**.
- **Niveau (de la pleine échelle)** : −50, −20, 0, 5, 10, 20, 30, 50, 70 ou 90 % (par défaut 20 %).
- Accepte : une valeur. Donne : activé/désactivé.
- Une petite hystérésis (2 % de la pleine échelle) empêche la sortie de clignoter quand la valeur oscille autour du niveau.

## Progressif {#mod-smooth}

Se rapproche progressivement de la valeur entrante au lieu de sauter d’un coup.

- **Accélération (jusqu'à pleine vitesse)** : **Instantané**, 0,25, 0,5, 1, 2 ou 3 s (par défaut 0,5 s) : le temps pour passer de 0 au maximum en s’éloignant de zéro.
- **Décélération (jusqu'à l'arrêt)** : les mêmes choix (par défaut 0,5 s) : le temps pour revenir du maximum à 0.
- Accepte : une valeur ou activé/désactivé. Donne : une valeur (un bouton lissé monte et descend en rampe).

## Bascule {#mod-toggle}

Transforme un bouton-poussoir en interrupteur : chaque appui fait passer la sortie d’activé à désactivé et inversement. La sortie démarre désactivée.

- Aucun réglage.
- Accepte : activé/désactivé. Donne : activé/désactivé.
