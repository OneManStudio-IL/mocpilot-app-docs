---
id: ManageProfiles
title: Gérer les profils
description: "Modifier, partager, importer, exporter et supprimer des profils MOCPilot."
---

import Screenshot from '@site/src/components/Screenshot';

# Gérer les profils {#manage-profiles}

## Modifier les informations du profil {#edit-profile-details}

Touchez **Modifier** (téléphone, tablette) ou cliquez sur **Modifier…** (ordinateur) sur un profil. Dans **Modifier le profil**, vous pouvez changer :

- l'**image** et le **nom** ;
- la **description** (ce que fait le profil, pour quel modèle il est prévu, comment le piloter) ;
- le **niveau des blocs** (Blocs logiques) ;
- les **hashtags** ;
- **Favori** (téléphone, tablette) : un profil favori remonte en haut de votre liste. Sur un ordinateur, **Favori** se trouve dans la barre du bas de la page des profils.

<Screenshot name="edit-profile" alt="Fenêtre Modifier le profil avec l'image, le nom, la description et les hashtags" width={900} />

C'est aussi ici que vous supprimez le profil et, une fois connecté, que vous l'envoyez au catalogue.

Le type de programme ne peut pas être changé. Pour faire passer un modèle dans l'autre éditeur, créez un nouveau profil.

## Partager (exporter) un profil {#share-export-a-profile}

**Partager…** regroupe le profil dans un seul fichier `.dat` (nommé par exemple `Technic Buggy_<id>.dat`) et ouvre la feuille de partage du système. Envoyez-le par message ou par e-mail, ou enregistrez-le dans vos fichiers.

Le fichier contient les hubs, le tableau de bord et le programme. Il ne contient pas les achats : les thèmes et les commandes spéciales que le destinataire ne possède pas sont remplacés ou verrouillés lorsqu'il modifie le profil (voir [ci-dessous](#paid-themes-in-shared-profiles)).

## Importer un profil {#import-a-profile}

1. Dans **Mes profils**, choisissez **Importer un profil…** (téléphone : **+** → **Importer un profil…** ; tablette : le menu **Nouveau profil** ; ordinateur : **Fichier → Importer un profil…**, ⌘O / Ctrl+O).
2. Sélectionnez un fichier `.dat`.

Si vous avez déjà ce profil :

- s'il s'agit d'une autre version : choisissez **Remplacer**, **Enregistrer comme copie** (ajoute « (copie) » au nom) ou **Annuler** ;
- s'il s'agit exactement du même fichier : il n'est pas chargé une seconde fois.

Un fichier qui n'est pas un profil est refusé.

:::tip Dupliquer un profil
Il n'existe pas de commande « dupliquer » à part. Pour obtenir une copie, partagez le profil dans un fichier et importez-le avec **Enregistrer comme copie**.
:::

## Supprimer un profil {#delete-a-profile}

Ouvrez **Modifier le profil** :

- téléphone et tablette : **Glissez pour supprimer le profil** ;
- ordinateur : **Supprimer le profil**, puis confirmez. **Supprimer le profil** figure aussi dans le menu de la carte du profil.

Le profil est supprimé de cet appareil et de votre compte : il disparaît donc aussi de vos autres appareils. Cette action est irréversible ; partagez d'abord le profil dans un fichier si vous risquez d'en avoir de nouveau besoin.

## Profils du catalogue {#profiles-from-the-catalog}

Un profil installé depuis le [Catalogue de profils](/docs/Application/Profiles/Catalog) est votre propre copie :

- tant que vous ne le modifiez pas, il fonctionne exactement comme il a été publié, et **Mettre à jour** installe une nouvelle version quand l'auteur en publie une (**Mettre à jour depuis le catalogue** dans **Modifier le profil** fait la même chose) ;
- la première modification affiche un avertissement : ensuite, le profil ne reçoit plus les mises à jour du catalogue.

## Thèmes payants dans les profils partagés {#paid-themes-in-shared-profiles}

Les profils peuvent utiliser des [thèmes](/docs/Application/Themes/ThemesOverview) payants et des commandes spéciales (volant, pédales, boîte de vitesses et autres). Lorsque vous modifiez un profil qui utilise des produits que vous ne possédez pas :

- les commandes des thèmes que vous ne possédez pas passent au thème gratuit **De base** ;
- les commandes spéciales sans équivalent gratuit sont verrouillées jusqu'à ce que vous les achetiez ;
- les produits que vous possédez restent tels quels.

Un profil du catalogue non modifié fonctionne avec tous ses produits, même ceux que vous ne possédez pas.

## Synchronisation {#sync}

Lorsque vous êtes connecté, chaque modification est envoyée sur le serveur et apparaît sur vos autres appareils. Voir [Synchronisation entre appareils](/docs/Application/Account/Sync).

Si vous ouvrez un profil déjà en cours de modification sur un autre appareil, MOCPilot vous demande de choisir : **Lecture seule** (les modifications ne sont pas enregistrées) ou **Prendre le relais**.
