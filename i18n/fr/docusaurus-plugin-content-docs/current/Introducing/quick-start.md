---
id: QuickStart
title: Démarrage rapide
description: "Installez MOCPilot, connectez-vous, créez votre premier profil et pilotez un modèle en quelques minutes."
---

import Screenshot from '@site/src/components/Screenshot';

# Démarrage rapide {#quick-start}

Ce guide vous accompagne de l'installation de l'application jusqu'au pilotage de votre premier modèle. Il vous faut un hub compatible avec un moteur ; voir [Appareils compatibles](/docs/Introducing/SupportedDevices).

## 1. Installez l'application {#1-install-the-app}

MOCPilot est disponible sur l'App Store (iPhone, iPad, Mac), Google Play (Android) et le Microsoft Store (Windows). Vous trouverez les liens sur [mocpilot.com](https://mocpilot.com).

## 2. Connectez-vous ou continuez sans compte {#2-sign-in-or-continue-without-an-account}

Au premier lancement, l'application vous invite à vous connecter. Utilisez votre e-mail ou identifiant et votre mot de passe, Google ou votre identifiant Apple, ou créez un nouveau compte.

<Screenshot name="sign-in" alt="L'écran de connexion de MOCPilot" width={900} />

Nous vous recommandons de créer un compte :

- vos profils et vos paramètres sont enregistrés sur le serveur et synchronisés entre vos appareils ;
- vous pouvez récupérer vos données si vous remplacez ou perdez un appareil ;
- les achats et MocPilot Pro fonctionnent sur tous vos appareils.

**Continuer sans compte** fonctionne aussi, mais tout reste alors uniquement sur cet appareil et sera perdu si vous supprimez l'application. Vous pourrez vous connecter plus tard dans **Paramètres → Compte**. Voir [Compte](/docs/Application/Account/UserAccount).

## 3. Repérez-vous dans l'application {#3-find-your-way-around}

- Sur un **téléphone**, la barre du bas contient **Profils**, **Paramètres** et **Aide** (et **Notifications** une fois connecté).
- Sur une **tablette**, ces mêmes sections, le **Catalogue de profils** et votre compte se trouvent dans la barre latérale.
- Sur un **ordinateur**, utilisez la barre supérieure : les menus à gauche ; Compte, Notifications et Paramètres à droite.

Voir [Téléphone, tablette et ordinateur](/docs/Introducing/Layouts).

## 4. Créez un profil {#4-create-a-profile}

1. Sur la page **Mes profils**, touchez **+** → **Nouveau profil** (téléphone) ou choisissez **Nouveau profil** (tablette et ordinateur, ou **Fichier → Nouveau profil**).
2. Choisissez le **type de programme** :
   - **Liens rapides** pour piloter un modèle sans code. Idéal pour un premier essai.
   - **Blocs logiques** si vous voulez des événements, des boucles, des conditions et des capteurs.
3. Saisissez un **nom** et, si vous le souhaitez, ajoutez une image.
4. Touchez **Créer**.

<Screenshot name="create-profile-tiles" alt="Page Nouveau profil avec les vignettes Blocs logiques et Liens rapides" width={900} />

Le profil s'ouvre dans l'éditeur. Pour en savoir plus, voir [Créer un profil](/docs/Application/Profiles/CreateProfile).

:::tip Vous voulez un modèle prêt à l'emploi ?
Ouvrez le **Catalogue de profils** (**Rechercher en ligne** sur la page des profils) et installez un profil officiel pour votre set. Voir [Catalogue et publication](/docs/Application/Profiles/Catalog).
:::

## 5. Ajoutez votre hub {#5-add-your-hub}

1. Dans l'éditeur, ouvrez **Mes hubs** (**Hubs** dans la barre supérieure sur un ordinateur).
2. Touchez **Ajouter un nouveau hub** dans un emplacement libre, choisissez le modèle de votre hub, puis touchez **Ajouter**.
3. Allumez le hub, appuyez sur son bouton et attendez que MOCPilot le trouve.

<Screenshot name="my-hubs" alt="Page Mes hubs avec les emplacements de hub" width={900} />

Si l'application demande une mise à jour du firmware, suivez [Mise à jour du firmware](/docs/Application/Hubs/FirmwareUpdating). Pour en savoir plus, voir [Ajouter et connecter un hub](/docs/Application/Hubs/ConnectingHubs).

## 6. Placez des commandes sur le tableau de bord {#6-place-controls-on-the-dashboard}

1. Ouvrez **Tableau de bord**.
2. Touchez **+** (**Ajouter un contrôleur** ; sur un ordinateur, **+ Contrôleur**), choisissez un **Joystick** et touchez **Ajouter au tableau de bord**.
3. Faites-le glisser à l'endroit voulu. Touchez-le pour modifier sa taille, sa couleur ou son comportement.

<Screenshot name="controller-palette" alt="Palette Ajouter un contrôleur avec le joystick sélectionné" width={900} />

Voir [Ajouter et disposer des commandes](/docs/Application/Dashboard/ArrangingControls).

## 7. Reliez la commande à un moteur {#7-connect-the-control-to-a-motor}

**Liens rapides :** faites glisser l'entrée du joystick (par exemple *JOY1 Axe Y*) depuis **Entrées** dans la ligne vide, ajoutez l'opération **Moteur** et la sortie **Hub** depuis **Sorties**, puis touchez le port sur lequel votre moteur est branché. La ligne est prête lorsqu'elle n'a plus de cadre rouge. Voir [Liens rapides](/docs/Application/Links/LinksIntroducing).

**Blocs logiques :** ajoutez un bloc *lorsque le programme commence*, une boucle *répéter toujours* et un bloc *définir la vitesse du moteur* qui reçoit la valeur du joystick. Voir [Blocs logiques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) et les [exemples](/docs/Application/BlockBuilder/Examples).

## 8. Appuyez sur Lancer {#8-press-run}

Appuyez sur **Lancer** (▶). Bougez le joystick : le moteur tourne. Appuyez sur **Arrêter** pour revenir à l'édition.

C'est tout ! Pour la suite :

- Découvrez tous les [types de commandes](/docs/Application/Dashboard/ControlTypes).
- Donnez un nouveau look au tableau de bord avec les [thèmes](/docs/Application/Themes/ThemesOverview).
- Connectez une [manette de jeu](/docs/Application/Dashboard/Gamepad).
- Si quelque chose ne fonctionne pas, consultez le [Dépannage](/docs/Help/Troubleshooting).
