---
id: ProfilesOverview
title: Profils
description: "Ce qu'est un profil, la liste des profils, la recherche, le tri et les favoris."
---

import Screenshot from '@site/src/components/Screenshot';

# Profils {#profiles}

Un **profil** regroupe tout ce que MOCPilot sait d'un modèle : ses hubs, son tableau de bord et son programme. Vous gardez un profil par modèle.

<Screenshot name="profiles-desktop" alt="La liste Mes profils" width={900} />

## D'où viennent les profils {#where-profiles-come-from}

- **Vos propres profils**, créés avec **Nouveau profil**. Voir [Créer un profil](/docs/Application/Profiles/CreateProfile).
- **Les profils du catalogue** : des profils officiels pour les sets LEGO® créés par l'équipe MOCPilot, et des profils de la communauté créés par d'autres constructeurs. En installer un ajoute votre propre copie à la liste. Voir [Catalogue et publication](/docs/Application/Profiles/Catalog).
- **Les profils importés** : des fichiers `.dat` que quelqu'un a partagés avec vous. Voir [Gérer les profils](/docs/Application/Profiles/ManageProfiles#import-a-profile).

Ils se trouvent tous dans la même liste.

## La liste des profils {#the-profile-list}

La page s'appelle **Mes profils**.

- **Rechercher** trouve des profils par nom, hashtag, auteur, hub, numéro de set ou année.
- **Trier et filtrer** trie par **Nouveaux ensembles**, **Ensembles les plus anciens**, **Nom (A–Z)**, **Nom (Z–A)**, **Auteur (A–Z)**, **Auteur (Z–A)** ou **Hubs utilisés**. **Seulement mes profils** masque les profils installés depuis le catalogue.
- **Filtrer par hashtags** (tablette et ordinateur) n'affiche que les profils portant les hashtags que vous choisissez.
- Les profils **Favori** apparaissent toujours en premier.

Une carte affiche l'image et le nom du profil et, s'ils sont connus, le numéro de set, l'année de sortie et le nombre de pièces. **Mise à jour disponible** signifie que vous pouvez installer une nouvelle version d'un profil du catalogue.

## Actions sur les profils {#profile-actions}

| Action | Téléphone | Tablette | Ordinateur |
|---|---|---|---|
| Ouvrir (lancer) | **Lancer** sur la carte | toucher deux fois la carte, ou la sélectionner et toucher **Lancer** | double-cliquer sur la carte, ou **Lancer** |
| Modifier le nom, l'image, les hashtags, la description | **Modifier** sur la carte | **Modifier** | **Modifier…** |
| Ajouter aux favoris | dans **Modifier le profil** | **Ajouter aux favoris** | **Ajouter aux favoris** |
| Partager sous forme de fichier | **Partager** sur la carte | **Partager** | **Partager…** |
| Mettre à jour depuis le catalogue | **Mettre à jour** | **Mettre à jour** | **Mettre à jour** |
| Envoyer au catalogue | dans **Modifier le profil** | dans **Modifier le profil** | dans **Modifier le profil** |
| Supprimer | **Glissez pour supprimer le profil** dans **Modifier le profil** | idem, ou **Supprimer le profil** dans le menu de la carte | **Supprimer le profil** dans **Modifier le profil** ou dans le menu de la carte |

## Deux types de programmes {#two-kinds-of-programs}

Chaque profil utilise l'un des deux éditeurs de programme, choisi à sa création :

- **Liens rapides** : des lignes qui relient les commandes aux moteurs et aux lumières, sans code. Voir [Liens rapides](/docs/Application/Links/LinksIntroducing).
- **Blocs logiques** : un programme en blocs avec des événements, des boucles, des conditions et des variables. Voir [Blocs logiques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::info
Un profil créé avec une version plus récente de MOCPilot peut ne pas s'ouvrir dans une version plus ancienne (« Le profil n'est pas compatible »). Mettez l'application à jour sur cet appareil.
:::
