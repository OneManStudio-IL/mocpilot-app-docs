---
id: WebEditor
title: Éditeur web
description: "Modifiez vos profils MOCPilot dans le navigateur sur mocpilot.com et pilotez le modèle via l'application sur un autre appareil."
---

import Screenshot from '@site/src/components/Screenshot';

# L'éditeur web sur mocpilot.com {#web-editor-on-mocpilotcom}

L'éditeur web, c'est MOCPilot qui tourne dans votre navigateur. C'est la même application, avec les mêmes éditeurs, le même tableau de bord et les mêmes thèmes : tout ce qui figure dans cette documentation s'y applique.

Les navigateurs ne peuvent pas communiquer avec les hubs Bluetooth : l'éditeur web sert donc à **modifier**. Pour tester un profil, lancez-le dans le navigateur sans hubs ; pour piloter le modèle, laissez l'application MOCPilot d'un téléphone, d'une tablette ou d'un ordinateur se connecter aux hubs (voir [Contrôle à distance](/docs/Application/Profiles/RemoteControl)).

## Essayer sans compte {#try-it-without-an-account}

Sur la page d'accueil de [mocpilot.com](https://mocpilot.com), chaque éditeur (Blocs logiques et Liens rapides) a un bouton **Essayer la démo** qui ouvre un profil de démonstration. La démo ne demande ni compte ni hubs. Vous pouvez y essayer tous les thèmes et toutes les commandes spéciales ; rien n'est enregistré.

## Modifier vos propres profils {#edit-your-own-profiles}

1. Connectez-vous sur [mocpilot.com](https://mocpilot.com) avec votre compte MOCPilot.
2. Ouvrez vos profils et cliquez sur **Modifier** sur l'un d'eux.
3. Modifiez les hubs, le tableau de bord ou le programme, exactement comme dans l'application.
4. Fermez le profil (bouton Accueil). L'éditeur enregistre le profil et l'envoie sur le serveur, et la modification arrive dans l'application sur vos appareils grâce à la [synchronisation](/docs/Application/Account/Sync).

Remarques :

- Vous ne pouvez modifier que les profils du compte avec lequel vous êtes connecté. Sinon, le message « Ce profil n'est pas dans votre compte » s'affiche avec un bouton **Retour au site**.
- Vos achats et MocPilot Pro fonctionnent dans le navigateur comme dans l'application.
- Dans un navigateur de bureau, le tableau de bord est un panneau flottant que vous pouvez déplacer et redimensionner.
- Les thèmes sont téléchargés à chaque visite (environ 15 Mo) : la première ouverture peut donc prendre un moment.
- L'import et l'export de fichiers `.dat` ne sont pas disponibles dans le navigateur ; utilisez l'application.

## Lancer un profil {#run-a-profile}

**Lancer** dans l'éditeur web exécute le profil dans le navigateur : tous les blocs et toutes les lignes fonctionnent, sauf le Bluetooth. C'est idéal pour tester la logique, les moniteurs et le tableau de bord. Lorsqu'un appareil des hubs est associé (MocPilot Pro, voir ci-dessous), **Lancer** démarre plutôt le profil sur l'appareil des hubs.

## Contrôle à distance {#remote-control}

Avec [MocPilot Pro](/docs/Application/Account/Pro), l'éditeur web peut servir de **télécommande** : l'application MOCPilot d'un téléphone, d'une tablette ou d'un ordinateur placé près du modèle (l'**appareil des hubs**) connecte les hubs et exécute le profil, et la page du navigateur le pilote. Appuyez sur **Contrôle à distance** dans la barre supérieure du profil, puis sur **Afficher le code** ; sur l'appareil des hubs, touchez **Connecter une télécommande** sur la page **Mes profils** et scannez le code. Voir [Contrôle à distance](/docs/Application/Profiles/RemoteControl).
