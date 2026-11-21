---
id: AboutApp
title: À propos de MOCPilot
description: "MOCPilot transforme un téléphone, une tablette ou un ordinateur en télécommande pour les modèles LEGO® et les modèles Bluetooth compatibles."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot : construisez, pilotez, contrôlez tout {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** transforme votre téléphone, votre tablette ou votre ordinateur en télécommande pour les modèles LEGO® et les modèles Bluetooth compatibles : voitures, camions, trains, grues, robots et vos propres MOC.

C'est vous qui concevez les commandes : un **tableau de bord** de joysticks, de curseurs, de boutons, de volants et d'indicateurs. Un **programme** relie ensuite le tableau de bord aux moteurs et aux lumières de vos **hubs**. MOCPilot propose deux éditeurs de programme :

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Éditeur Liens rapides : des lignes de l'entrée jusqu'au hub" style={{width: '100%'}} />
    <h3>Liens rapides</h3>
    <p>Sans code. Chaque ligne relie une commande à un moteur ou à une lumière : <em>entrée → traitement → opération → hub</em>. Une voiture est prête à rouler en quelques minutes. <a href="/docs/Application/Links/LinksIntroducing">En savoir plus</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Éditeur Blocs logiques : un programme en blocs" style={{width: '100%'}} />
    <h3>Blocs logiques</h3>
    <p>Des blocs visuels avec des événements, des boucles, des conditions, des variables et des données de capteurs. Pour les robots, l'automatisation et tout ce qui demande de la logique. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">En savoir plus</a>.</p>
  </div>
</div>

## Ce que vous pouvez faire {#what-you-can-do}

- **Piloter n'importe quel modèle** depuis un tableau de bord que vous concevez : joysticks, curseurs, boutons, interrupteurs, interrupteurs à étapes, moniteurs et commandes spéciales comme un volant, des pédales, une boîte de vitesses, un frein à main, des clignotants et un manipulateur de traction pour les trains.
- **Utiliser de vrais hubs** : LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick et Mould King. Voir [Appareils compatibles](/docs/Introducing/SupportedDevices).
- **Utiliser une manette de jeu** (de type Xbox ou PlayStation) à la place de l'écran tactile.
- **Lire les capteurs** : batterie et inclinaison du hub, vitesse et position des moteurs, capteurs de couleur et de distance, et inclinaison de votre téléphone.
- **Personnaliser le tableau de bord** avec des [thèmes](/docs/Application/Themes/ThemesOverview).
- **Retrouver vos profils partout** : avec un compte, les profils se synchronisent entre vos appareils, et vous pouvez les modifier dans le navigateur sur [mocpilot.com](/docs/Introducing/WebEditor).
- **Piloter depuis un autre appareil** : avec MocPilot Pro, un appareil connecte les hubs et un autre, ou l'éditeur web, sert de télécommande.
- **Partager** : installez des profils depuis le [Catalogue de profils](/docs/Application/Profiles/Catalog) et publiez les vôtres.

<Screenshot name="dashboard-run" alt="Un tableau de bord MOCPilot pendant le pilotage d'un modèle" width={900} />

## Où fonctionne MOCPilot {#where-mocpilot-runs}

| Appareil | Interface |
|---|---|
| iPhone et téléphones Android | Interface téléphone : barre en bas ; un profil ouvert occupe tout l'écran en paysage |
| iPad et tablettes Android | Interface tablette : barre latérale, plus de place pour l'éditeur |
| Ordinateurs Mac et Windows | Interface ordinateur : menus, raccourcis clavier, tableau de bord dans sa propre fenêtre |
| Navigateur sur mocpilot.com | [Éditeur web](/docs/Introducing/WebEditor) : modification des profils ; les hubs sont connectés par l'application sur un autre appareil |

Pour en savoir plus, voir [Téléphone, tablette et ordinateur](/docs/Introducing/Layouts).

Les hubs, vos profils et les thèmes téléchargés fonctionnent aussi sans Internet. Voir [Travailler hors ligne](/docs/Application/Account/Sync#working-offline).

## Par où commencer {#where-to-start}

1. Lisez [Comment fonctionne MOCPilot](/docs/Introducing/HowItWorks) : cinq minutes qui rendent tout le reste plus simple.
2. Suivez le [Démarrage rapide](/docs/Introducing/QuickStart) pour piloter votre premier modèle.
3. Vous hésitez entre les deux éditeurs ? Comparez-les dans [Créer un profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, le logo LEGO, Powered Up et Technic sont des marques déposées du groupe LEGO, qui ne parraine, n'autorise ni ne cautionne MOCPilot.
:::
