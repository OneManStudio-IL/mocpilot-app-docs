---
id: Sync
title: Synchronisation entre appareils
description: "Synchronisez vos profils et paramètres MOCPilot entre téléphones, tablettes, ordinateurs et l'éditeur web, et travaillez hors ligne."
---

import Screenshot from '@site/src/components/Screenshot';

# Synchronisation entre appareils {#sync-between-devices}

Lorsque vous êtes connecté, MOCPilot garde vos profils et vos paramètres identiques sur tous vos appareils : téléphone, tablette, ordinateur et [éditeur web](/docs/Introducing/WebEditor). Il n'y a rien à activer : la synchronisation est toujours active avec un compte.

## Comment ça marche {#how-it-works}

- Les modifications sont d'abord enregistrées sur l'appareil, puis envoyées sur le serveur dès que vous êtes en ligne (« Synchronisation des profils… »).
- Les autres appareils téléchargent la nouvelle version lorsqu'ils sont en ligne.
- Les achats ne sont pas synchronisés sous forme de fichiers ; ils appartiennent à votre compte et sont disponibles partout où vous vous connectez.
- Les profils ajoutés sur le site web (**Ajouter à mon compte** dans le catalogue) ou modifiés dans l'éditeur web arrivent par la synchronisation.
- En mode invité, rien n'est synchronisé : les profils restent uniquement sur cet appareil.

## Conflits {#conflicts}

Si le même profil a été modifié sur deux appareils avant leur synchronisation, la version de votre compte l'emporte, et votre version sur cet appareil est enregistrée comme copie (« (copie) » est ajouté à son nom). MOCPilot vous en informe par un message **Synchronisation des profils**. Il en va de même si un profil que vous avez modifié ici a été supprimé sur un autre appareil.

Si vous ouvrez un profil en cours de modification sur un autre appareil, vous pouvez choisir **Lecture seule** (les modifications ne sont pas enregistrées) ou **Prendre le relais**.

## Travailler hors ligne {#working-offline}

Les hubs, vos profils et les thèmes téléchargés fonctionnent sans Internet.

- Si MOCPilot ne parvient pas à joindre le serveur au lancement, il affiche **Pas de connexion Internet** avec **Travailler hors ligne** et **Réessayer**.
- Tant que vous êtes hors ligne, une étiquette **Hors ligne** s'affiche en haut. Les fonctions qui ont besoin du serveur (le catalogue et la publication, l'Assistant IA, le contrôle à distance, les notifications, les achats, les messages à l'assistance) vous indiquent qu'elles nécessitent une connexion Internet.
- Les modifications faites hors ligne sont envoyées au retour de la connexion. Quand l'application retrouve le serveur, elle affiche **La connexion est rétablie** avec **Passer en ligne**.

<Screenshot name="offline-prompt" alt="Message Pas de connexion Internet avec les boutons Travailler hors ligne et Réessayer" width={900} />

## Se déconnecter {#signing-out}

La déconnexion supprime vos profils et vos paramètres de cet appareil ; ils restent dans votre compte et reviennent quand vous vous reconnectez. Si certaines modifications n'ont pas encore été envoyées, MOCPilot vous prévient d'abord et liste les profils concernés : connectez-vous à Internet et laissez la synchronisation se terminer, ou choisissez **Se déconnecter quand même** (une copie est conservée dans le dossier Backup de l'application).

## Astuces {#tips}

- Avant de publier un profil dans le catalogue, vérifiez qu'il est synchronisé : le catalogue le récupère dans votre compte.
- Pour transférer des profils vers un appareil sans compte, utilisez **Partager** et **Importer un profil…** avec des fichiers `.dat`. Voir [Gérer les profils](/docs/Application/Profiles/ManageProfiles).
