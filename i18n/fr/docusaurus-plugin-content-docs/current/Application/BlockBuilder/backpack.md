---
id: Backpack
title: Sac à dos
description: "Gardez des morceaux de vos programmes Blocs logiques dans le sac à dos et insérez-les dans n’importe quel profil, sur tous vos appareils."
---

import Screenshot from '@site/src/components/Screenshot';

# Sac à dos {#backpack}

Le **Sac à dos** est l’endroit où vous gardez des morceaux de vos programmes en blocs pour les réutiliser dans d’autres profils : une routine de direction, un jeu de lumières, un bloc de Mes blocs écrit une fois et dont vous avez besoin partout. Enregistrez une pile de blocs dans le sac à dos depuis un profil, puis insérez-la dans n’importe quel autre profil, sur cet appareil ou sur tout appareil où vous êtes connecté.

Le sac à dos fait partie de l’éditeur [Blocs logiques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Les profils Liens rapides n’en ont pas.

<Screenshot name="backpack-panel" alt="Le panneau Sac à dos à côté d’un programme en blocs" width={900} />

## Ce que garde le sac à dos {#what-the-backpack-keeps}

Chaque élément du sac à dos est une **copie** des blocs que vous avez enregistrés :

- **Une pile** : le bloc choisi avec tout ce qui est accroché en dessous et à l’intérieur, exactement comme le copie **Dupliquer**.
- **Un bloc de Mes blocs** : si vous enregistrez le bloc `définir …` d’un [bloc personnalisé](/docs/Application/BlockBuilder/Blocks/MyBlocks), le sac à dos garde toute la définition. Ces éléments portent la mention **Mon bloc**.

L’élément mémorise aussi les blocs de Mes blocs qu’utilisent vos blocs (même à travers d’autres blocs de Mes blocs) ainsi que les noms des variables, listes, messages, véhicules et sons auxquels ils font référence, pour que les blocs fonctionnent quand vous les insérez ailleurs.

Les blocs insérés deviennent une partie ordinaire du programme du profil. Rien dans le profil ne dépend du sac à dos : supprimer ou renommer un élément ne change pas les programmes dans lesquels vous l’avez inséré. Les éléments ne se modifient pas dans le sac à dos. Pour en changer un, insérez-le, modifiez les blocs dans le programme et enregistrez-les de nouveau dans le sac à dos comme un nouvel élément.

## Enregistrer des blocs dans le sac à dos {#save-blocks}

1. Dans le programme, faites un clic droit sur un bloc (ordinateur) ou un appui long (téléphone, tablette).
2. Choisissez **Ajouter au sac à dos**.
3. Saisissez un nom dans **Nom des blocs** et touchez **Enregistrer**.

Le bloc et tout ce qui y est accroché vont dans le sac à dos. Pour enregistrer la définition d’un bloc de Mes blocs, ouvrez le menu de son bloc `définir …`.

<Screenshot name="backpack-add" alt="Le menu du bloc avec Ajouter au sac à dos et la fenêtre du nom" width={900} />

## Ouvrir le sac à dos {#open}

- **Ordinateur et éditeur web** : le bouton **Sac à dos** dans la barre supérieure de l’éditeur, **Affichage → Sac à dos** dans le menu, ou **Ctrl+Maj+B** (**⌘⇧B** sur Mac). Si la fenêtre est étroite, le bouton se trouve dans le menu **Plus**. Le sac à dos s’ouvre dans un panneau à droite de l’éditeur, à côté du [Moniteur](/docs/Application/BlockBuilder/Editor#monitor) s’il est ouvert lui aussi.
- **Téléphone et tablette** : **Plus → Sac à dos** dans la barre supérieure de l’éditeur. Le sac à dos s’ouvre dans un panneau par-dessus l’éditeur.

Le bouton est mis en surbrillance tant que le sac à dos est ouvert. Appuyez de nouveau dessus pour le fermer.

Chaque élément affiche son image, son nom et le nombre de blocs qu’il contient (**Blocs : N**). La note en bas du panneau indique où le sac à dos est conservé (voir [plus bas](#where-it-is-kept)).

## Insérer des blocs dans un programme {#insert}

- **Touchez un élément** : ses blocs apparaissent dans la partie visible du programme.
- **Faites glisser un élément sur le programme** : les blocs se placent là où vous les déposez. Faites glisser latéralement, vers le programme ; glisser vers le haut ou vers le bas fait défiler la liste.
- **Menu de l’élément (⋯)** : **Insérer**, **Renommer…** ou **Supprimer**.

Sur téléphone et tablette, le sac à dos se ferme après l’insertion pour que vous voyiez les blocs. Un seul **Annuler** retire tout ce qui a été inséré.

### Ce qui se passe à l’insertion {#what-happens}

- **Mes blocs** : un bloc de Mes blocs que le profil possède déjà avec le même contenu est réutilisé ; insérer à nouveau les mêmes blocs n’en crée donc pas de copies. Si un autre bloc de Mes blocs du profil utilise le même nom, le bloc inséré reçoit le sien. Insérer un élément Mon bloc déjà présent dans le profil ne fait rien et affiche **Déjà présent** : retrouvez le bloc dans **Mes blocs**.
- **Variables, listes, messages et véhicules** : si le profil en a un du même nom, les blocs l’utilisent ; sinon, il est créé. Les valeurs des variables et le contenu des listes ne sont pas copiés. Si le nom est déjà pris par autre chose, un message s’affiche, par exemple *Impossible de créer la variable « vitesse » : le nom est déjà pris*.
- **Sons** : vos propres sons sont des fichiers du profil et ne sont pas gardés dans le sac à dos. Si le profil n’a pas de son portant ce nom, vous voyez *Le son « … » n’est pas dans ce profil : choisissez un son dans les blocs*. Les sons intégrés fonctionnent partout.
- **Blocs de hub et de tableau de bord** : les blocs d’un hub, d’une commande du tableau de bord ou d’une manette que ce profil n’a pas ne peuvent pas être insérés. Avant toute modification, l’application affiche **Certains blocs ne peuvent pas être insérés** avec la liste de ces blocs et le nombre de blocs qui seront ignorés, et vous demande s’il faut insérer les autres. Ajoutez d’abord le hub ou la commande du tableau de bord si vous voulez les garder. Si aucun des blocs ne convient au profil, rien n’est inséré.

## Renommer et supprimer {#rename-delete}

Ouvrez le menu de l’élément (⋯) :

- **Renommer…** change le nom de l’élément.
- **Supprimer** le retire après confirmation (**Supprimer du sac à dos ?**). Les programmes dans lesquels vous l’avez inséré gardent leurs blocs.

Le sac à dos ne supprime jamais d’éléments de lui-même : supprimez ce dont vous n’avez plus besoin.

## Où le sac à dos est conservé {#where-it-is-kept}

- **Sans compte (invité)** : uniquement sur cet appareil. Le panneau indique *Conservé sur cet appareil. Connectez-vous pour avoir le sac à dos sur tous vos appareils.*
- **Connecté** : aussi dans votre compte, si bien que vous avez le même sac à dos sur tous vos appareils, y compris dans l’[éditeur web](/docs/Introducing/WebEditor). Le panneau indique *Conservé dans votre compte : le même sac à dos sur tous vos appareils.* Les modifications faites sur un appareil apparaissent sur les autres.
- **Première connexion** : les éléments que vous avez enregistrés en tant qu’invité sur cet appareil sont transférés dans votre compte.

Vous pouvez utiliser le sac à dos hors ligne. Les modifications sont conservées sur l’appareil et envoyées à votre compte dès le retour de la connexion (le panneau affiche **Synchronisation…** entre-temps). Un élément encore en cours de téléchargement depuis votre compte ne peut pas encore être inséré : l’application indique **Pas encore prêt** ; réessayez dans un instant.

## Limites {#limits}

| | Limite |
|---|---|
| Éléments dans le sac à dos | 200 |
| Taille d’un élément | environ 512 Ko (une très grande partie de programme peut ne pas tenir : enregistrez une partie plus petite) |
| Nom de l’élément | jusqu’à 100 caractères |

Si le sac à dos de votre compte est plein ou si un élément est trop volumineux, l’élément reste uniquement sur cet appareil et l’application vous le signale. Les éléments enregistrés par une version plus récente de l’application ne peuvent être insérés qu’après la mise à jour de l’application.

## Dépannage {#troubleshooting}

| Message | Que faire |
|---|---|
| **Le sac à dos est plein (200 éléments). Supprimez ce dont vous n’avez plus besoin.** | Supprimez les éléments que vous n’utilisez plus. |
| **Trop de blocs pour le sac à dos. Enregistrez une partie plus petite.** | Enregistrez une pile plus petite, ou répartissez le programme en plusieurs éléments. |
| **Certains blocs ne peuvent pas être insérés** | Il manque au profil un hub, une commande du tableau de bord ou une manette dont les blocs ont besoin. Ajoutez-le et insérez de nouveau, ou insérez les autres blocs. |
| **Déjà présent** | Le bloc de Mes blocs est déjà dans ce profil : retrouvez-le dans **Mes blocs**. |
| **Pas encore prêt** | L’élément est encore en cours de téléchargement depuis votre compte. Patientez un instant et réessayez. |
| **Ces blocs ont été enregistrés par une version plus récente de l’application. Mettez l’application à jour pour les utiliser.** | Mettez MOCPilot à jour sur cet appareil. |
