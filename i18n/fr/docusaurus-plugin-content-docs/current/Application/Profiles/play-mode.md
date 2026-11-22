---
id: PlayMode
title: Piloter un modèle (Lancer)
description: "Lancez un profil, pilotez le modèle, arrêtez-le, et découvrez ce qui se passe quand il s'arrête ou qu'une connexion est perdue."
---

import Screenshot from '@site/src/components/Screenshot';

# Piloter un modèle (Lancer) {#driving-a-model-run}

Un profil a deux modes :

- **Édition** : vous modifiez les hubs, le tableau de bord et le programme.
- **Lancer** : le programme s'exécute et les commandes du tableau de bord pilotent le modèle.

## Démarrer et arrêter {#start-and-stop}

Appuyez sur **Lancer** (▶) à l'extrémité droite de la barre supérieure de l'éditeur ; sur un téléphone ou une tablette, le tableau de bord l'a aussi. Sur un ordinateur, **Lancer** est le bouton orange de l'éditeur (aussi **Programme → Lancer**, ⌘R / Ctrl+R). Appuyez sur **Arrêter** (■) pour revenir à l'édition (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Le tableau de bord pendant l'exécution du programme" width={900} />

Pendant l'exécution du programme :

- les points de la grille du tableau de bord sont masqués, tout comme ses boutons d'édition (sur un ordinateur, ils sont indisponibles) ;
- les commandes réagissent au toucher et à la manette de jeu ;
- les moniteurs et les indicateurs affichent les valeurs en direct ;
- en Liens rapides, l'éditeur affiche les valeurs en direct entre les blocs de chaque ligne, et les lignes ne sont pas modifiables ;
- en Blocs logiques, le programme reste modifiable : vous pouvez l'ajuster en direct.

## Sur un téléphone ou une tablette {#on-a-phone-or-tablet}

L'ouverture d'un profil fait passer un téléphone en mode paysage, en plein écran, pour que le tableau de bord occupe tout l'écran. Activez **Garder l'écran allumé** dans les Paramètres pour que l'écran ne s'éteigne pas pendant que vous pilotez. Voir [Paramètres](/docs/Application/Account/Settings).

## Avant d'appuyer sur Lancer {#before-you-press-run}

- Allumez les hubs et vérifiez dans **Mes hubs** qu'ils sont connectés (le nombre affiché sur le bouton **Mes hubs**, **Hubs** sur un ordinateur, indique combien le sont).
- En Liens rapides, regardez le bouton **Problèmes** : un « ! » rouge signifie que certaines lignes ne peuvent pas s'exécuter. Voir [Exécution et résolution des problèmes](/docs/Application/Links/Problems).
- Pour le premier essai, posez le modèle sur un support ou éloignez-le du bord de la table.

## Quand le programme s'arrête {#when-the-program-stops}

- **Liens rapides** arrête tous les moteurs utilisés par les lignes et réinitialise les sorties (matrice LED effacée, couleurs des ports et lumières des capteurs éteintes).
- **Blocs logiques** arrête les ports des hubs si **Arrêter les ports du hub quand le programme s'arrête** est activé dans les Paramètres de l'éditeur.
- Si un hub se déconnecte pendant l'exécution du programme, ses moteurs s'arrêtent. En Liens rapides, une entrée de hub « Connecté » peut l'afficher sur le tableau de bord.
- En contrôle à distance, si la connexion entre la télécommande et l'appareil des hubs est perdue pendant environ 4 secondes, l'appareil des hubs arrête le profil et tous les moteurs.

## Piloter depuis un autre appareil {#drive-from-another-device}

Avec [MocPilot Pro](/docs/Application/Account/Pro), vous pouvez exécuter le profil sur un appareil (l'appareil des hubs, qui connecte les hubs) et le piloter depuis un autre appareil ou depuis l'éditeur web. Voir [Contrôle à distance](/docs/Application/Profiles/RemoteControl).
