---
id: HowItWorks
title: Comment fonctionne MOCPilot
description: "Profils, tableau de bord, hubs et programme : les quatre éléments de chaque modèle MOCPilot."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Comment fonctionne MOCPilot {#how-mocpilot-works}

Dans MOCPilot, tout repose sur quatre éléments. Une fois que vous les connaissez, chaque écran devient clair.

<HowItWorks />

## 1. Profil : un modèle {#1-profile-one-model}

Un **profil** contient tout ce qui concerne un modèle : ses hubs, son tableau de bord et son programme. Créez un profil par modèle, par exemple « Buggy Technic » ou « Camion-grue ».

Lorsque vous créez un profil, vous choisissez son **type de programme** : Blocs logiques ou Liens rapides. Vous ne pourrez plus le changer ensuite. Voir [Créer un profil](/docs/Application/Profiles/CreateProfile).

## 2. Hubs : l'électronique du modèle {#2-hubs-the-models-electronics}

Les **hubs** sont les briques Bluetooth de votre modèle ; les moteurs, les lumières et les capteurs se branchent sur leurs ports. Un profil comporte des **emplacements** de hub. Vous ajoutez une seule fois les hubs de votre modèle aux emplacements, et MOCPilot s'y connecte chaque fois que vous ouvrez le profil. Voir [Hubs](/docs/Application/Hubs/HubsOverview).

## 3. Tableau de bord : vos commandes {#3-dashboard-your-controls}

Le **tableau de bord** est l'écran depuis lequel vous pilotez. Vous placez des commandes sur une grille : joysticks, curseurs, boutons, interrupteurs, interrupteurs à étapes et moniteurs, ainsi que des commandes spéciales comme un volant et des pédales. Une commande ne fait rien toute seule : elle transmet ses valeurs au programme. Voir [Tableau de bord](/docs/Application/Dashboard/DashboardOverview).

Vous pouvez aussi utiliser une manette de jeu, en plus du tableau de bord ou à sa place. Voir [Manette de jeu](/docs/Application/Dashboard/Gamepad).

## 4. Programme : ce qui relie le tout {#4-program-what-connects-them}

Le **programme** décide de ce qui se passe quand vous actionnez une commande : quel moteur tourne et à quelle vitesse, quelle lumière clignote, ce qu'affiche un moniteur.

- Dans **Liens rapides**, le programme est une liste de lignes : *entrée → traitement → opération → hub*. Voir [Liens rapides](/docs/Application/Links/LinksIntroducing).
- Dans **Blocs logiques**, le programme est fait de blocs : événements, boucles, conditions, variables et capteurs. Voir [Blocs logiques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Lancer {#5-run}

Appuyez sur **Lancer** (▶). Le programme démarre, les commandes du tableau de bord s'animent et le modèle réagit. Appuyez sur **Arrêter** pour revenir à l'édition. Voir [Piloter un modèle](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Programme Liens rapides : commandes du tableau de bord reliées aux ports des hubs" width={900} />

## Une séance type {#a-typical-session}

1. Ouvrez un profil ou [créez-en un](/docs/Application/Profiles/CreateProfile).
2. Ajoutez vos hubs dans **Mes hubs** et allumez-les.
3. Placez des commandes sur le **Tableau de bord**.
4. Reliez-les aux moteurs et aux lumières dans le **programme**.
5. Appuyez sur **Lancer**, pilotez, ajustez, recommencez.

## Où les données sont enregistrées {#what-is-stored-where}

- Les profils sont enregistrés sur votre appareil. Lorsque vous êtes connecté, ils sont aussi stockés dans votre compte et apparaissent sur tous vos appareils. Voir [Synchronisation entre appareils](/docs/Application/Account/Sync).
- Les thèmes et les autres achats appartiennent à votre compte. Voir [MocPilot Pro et achats](/docs/Application/Account/Pro).
