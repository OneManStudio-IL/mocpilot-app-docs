---
id: ConnectingHubs
title: Ajouter et connecter un hub
description: "Ajoutez un hub dans un emplacement du profil, connectez-le, renommez-le et suivez ses capteurs dans le moniteur du hub."
---

import Screenshot from '@site/src/components/Screenshot';

# Ajouter et connecter un hub

Vous n’ajoutez un hub à un profil qu’une seule fois. Ensuite, MOCPilot s’y connecte chaque fois que vous ouvrez le profil.

## Ajouter un hub {#add-a-hub}

1. Ouvrez le profil et touchez **Mes hubs** (sur un ordinateur, **Hubs** dans la barre supérieure ou ⇧⌘H / Ctrl+Maj+H). La page **Mes hubs Bluetooth** affiche les emplacements.
2. Touchez **Ajouter un nouveau hub** dans un emplacement libre.
3. Choisissez votre hub dans la liste. Le filtre en haut propose **Tout**, **LEGO**, **SBrick**, **BuWizz** ou **Mould King**. Touchez **Ajouter**.
4. Suivez les étapes à l’écran : **Appuyez sur le bouton du hub** et **Attendez que la recherche trouve le hub**. Touchez **Démarrer le scan** pour relancer la recherche.

<Screenshot name="add-hub" alt="Choix du hub à ajouter" width={900} />

Une fois trouvé, le hub se connecte et reste dans son emplacement.

<Screenshot name="my-hubs" alt="Mes hubs Bluetooth avec des hubs connectés et des emplacements libres" width={900} />

## Le menu de l’emplacement {#the-slot-menu}

Le bouton **Connecter** d’un emplacement connecte le hub. Le menu de l’emplacement contient :

- **Déconnecter** ;
- **Renommer le hub** : enregistre un nouveau nom dans le hub lui-même (hubs connectés qui le permettent) ;
- **Mettre à jour le firmware** : lorsqu’un firmware plus récent est disponible ; voir [Mise à jour du firmware](/docs/Application/Hubs/FirmwareUpdating) ;
- **Récupérer le firmware du hub** : lorsque le hub est connecté en mode de récupération ; voir [Récupération du firmware](/docs/Application/Hubs/RecoveryHubFirmware) ;
- **Sélectionner la configuration** : configurations du Technic Move ; voir [Configurations du Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations) ;
- **Sélectionner le canal : A / B / C** : le canal de contrôle Mould King ;
- **Supprimer le hub** : retire le hub du profil.

Le bouton **Mes hubs** de l’éditeur (**Hubs** sur un ordinateur) indique combien de hubs sont connectés.

## Moniteur du hub {#hub-monitor}

Ouvrez un hub connecté pour afficher son **Moniteur du hub** :

- le hub : modèle, nom, firmware, batterie, charge, température de la carte, configuration, orientation, inclinaison (tangage, roulis, lacet) et accéléromètre ;
- chaque port : l’appareil branché et sa vitesse, sa position, sa position relative, sa couleur, la lumière réfléchie et ambiante, ou la distance.

Servez-vous-en pour vérifier quel moteur est sur quel port et dans quel sens il tourne avant de construire le programme.

<Screenshot name="hub-monitor" alt="Moniteur du hub d’un Technic Hub connecté" width={900} />

## Conseils de connexion {#connection-tips}

- Allumez le hub juste avant de le connecter : beaucoup de hubs s’éteignent seuls après quelques minutes sans connexion.
- Gardez le téléphone près du hub ; les murs et le métal réduisent la portée.
- Un hub ne peut être connecté qu’à un seul appareil à la fois. Fermez les autres applications qui l’utilisent (applications LEGO®, autres télécommandes).
- **Bluetooth est désactivé** : activez le Bluetooth et autorisez MOCPilot à l’utiliser dans les réglages du système.
- **Hub non trouvé** : appuyez de nouveau sur le bouton du hub, relancez le scan ou changez les piles.
- Les hubs **Mould King** ne se « connectent » pas vraiment : MOCPilot leur envoie des commandes par annonces Bluetooth (advertising). Si le hub ne réagit pas, touchez **Reconnecter** et vérifiez le canal.

Plus d’informations dans [Dépannage](/docs/Help/Troubleshooting#hubs).
