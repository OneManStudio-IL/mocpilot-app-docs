---
id: Problems
title: Exécution et résolution des problèmes
description: "Panneau des problèmes, cadres rouges, valeurs en direct et messages courants de Liens rapides."
---

import Screenshot from '@site/src/components/Screenshot';

# Exécution et résolution des problèmes

## Tout est prêt ? {#is-everything-ready}

Le bouton **Problèmes** de la barre du haut de l’éditeur affiche :

- une **coche verte** : « Toutes les lignes sont prêtes » ;
- un **« ! » rouge** : « Problèmes : N ».

Touchez-le pour ouvrir le panneau des problèmes (un panneau latéral sur téléphone, un menu sur tablette ou ordinateur). Il liste « Ligne N — raison » ; touchez un élément pour aller à cette ligne. Le bloc à l’origine du problème est entouré d’un **cadre rouge**. Quand tout va bien, le panneau indique « Chaque ligne activée peut s'exécuter. »

<Screenshot name="links-problems" alt="Panneau des problèmes avec une ligne qui n’est pas prête" width={900} />

Les lignes qui présentent des problèmes ne s’exécutent pas ; les autres, si.

## Messages courants {#common-messages}

| Message | Que faire |
|---|---|
| Faites glisser une entrée et une sortie (un hub ou un indicateur du tableau de bord) dans la ligne | la ligne est vide |
| Ajoutez une entrée au début de la ligne | faites d’abord glisser une commande, le véhicule, la manette ou une entrée de hub |
| Ajoutez une sortie : un hub ou un indicateur du tableau de bord | terminez la ligne par une sortie |
| Ajoutez une opération avant le hub : moteur, servo, lumière | une sortie Hub doit être précédée d’une opération |
| Choisissez au moins un port sur le hub | touchez la pastille d’un port sur le bloc Hub |
| Choisissez un contrôleur du tableau de bord | touchez le bloc d’entrée et choisissez une commande |
| … ne bouge pas sur cet axe | le joystick n’a qu’un seul axe : choisissez l’autre axe ou modifiez le joystick |
| Choisissez ce que donne … | la commande n’a plus ce canal : choisissez-en un |
| Choisissez les pédales du véhicule | l’entrée Véhicule a besoin de pédales sur le tableau de bord |
| … n'est pas sur le tableau de bord | le levier de vitesses ou le frein à main choisi pour le Véhicule a été retiré |
| « … » ne fonctionne pas avec ce contrôleur | ce bloc de traitement ne convient pas au signal |
| Port A : cet appareil ne peut pas servir de servo (il faut un moteur avec encodeur) | utilisez un moteur avec encodeur ou une autre opération |
| Le port A a un capteur, pas un moteur | vérifiez ce qui est branché sur le port |
| Le port A est aussi utilisé dans la ligne 2 | chaque port ne peut appartenir qu’à une seule ligne |
| Activez les blocs de manette sur la page Manette (barre du haut) | ouvrez **Manette de jeu** et activez **Activer les blocs de manette** |
| L'indicateur affiche la valeur telle quelle : supprimez l'opération | une ligne Indicateur n’a pas d’opération |
| L'étalonnage n'a pas besoin d'opération : supprimez-la | une ligne Étalonner les servos n’a pas d’opération |
| Choisissez un hub avec une LED couleur (hubs LEGO) | LED du hub ne fonctionne que sur les hubs LEGO® |
| Les couleurs des ports sont disponibles sur BuWizz 3 uniquement | Couleur du port nécessite un BuWizz 3.0 Pro |
| Aucun servo en mode d'étalonnage Auto dans ce programme | Étalonner les servos nécessite un Servo en mode Auto |
| Ce bloc nécessite une version plus récente de l'app | le profil a été créé avec une version plus récente : mettez MOCPilot à jour |
| La ligne est désactivée | activez-la dans le menu de la ligne |

## Valeurs en direct {#live-values}

Pendant l’exécution du programme, chaque jointure entre les blocs affiche la valeur qui la traverse. Bougez une commande et suivez la valeur le long de la ligne :

- rien ne change à l’entrée : la commande ou la manette n’envoie rien ; vérifiez le canal ou l’axe ;
- la valeur change mais le moteur ne bouge pas : vérifiez le point de connexion du hub et le port ;
- la valeur est faible après **Limite** ou **Zone morte** : ajustez leurs réglages.

<Screenshot name="links-live-values" alt="Programme Liens rapides en cours d’exécution avec les valeurs en direct sur les jointures" width={900} />

## Le modèle ne bouge pas {#the-model-does-not-move}

1. Le hub est-il connecté ? Vérifiez **Mes hubs** et le point de connexion sur le bloc Hub.
2. Le bon port est-il choisi ? Les moteurs sont-ils branchés là où vous le pensez ?
3. La ligne est-elle activée, sans cadre rouge ?
4. Le programme est-il en cours d’exécution (**Lancer**) ?
5. La batterie est-elle chargée ? Ajoutez une ligne *Batterie → Indicateur* pour la surveiller.

Plus d’informations dans [Dépannage](/docs/Help/Troubleshooting).
