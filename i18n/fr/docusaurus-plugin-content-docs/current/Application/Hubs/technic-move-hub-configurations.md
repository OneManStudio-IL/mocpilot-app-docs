---
id: TechnicMoveHubConfigurations
title: Configurations du Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Configurations du Technic Move Hub

## Présentation {#overview}

Contrairement aux autres hubs LEGO® Powered Up, le Technic Move Hub se comporte différemment selon la configuration chargée.

MOCPilot peut changer cette configuration pour que le hub corresponde au set LEGO officiel que vous voulez piloter.

## Configurations prises en charge {#supported-configurations}

MOCPilot connaît ces configurations :

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Options de configuration du Technic Move Hub dans le bloc de configuration du hub" />

## Changer la configuration depuis Mes hubs Bluetooth {#change-configuration-from-my-bluetooth-hubs}

Pour changer la configuration sur la page **Mes hubs Bluetooth** :

1. Ouvrez **Mes hubs Bluetooth**.
2. Repérez le Technic Move Hub.
3. Ouvrez le menu du hub.
4. Sélectionnez **Sélectionner la configuration**.
5. Choisissez la configuration.
6. Confirmez dans la boîte de dialogue.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Menu contextuel du Technic Move Hub avec l’action Sélectionner la configuration" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Sous-menu des configurations du Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Boîte de dialogue de confirmation de la reconfiguration du Technic Move Hub" />

:::warning Important
Changer de configuration écrit un programme dans le hub, un peu comme une mise à jour du firmware.

Laissez le hub allumé pendant toute l’opération, et gardez votre téléphone, tablette ou ordinateur allumé et près du hub pour que la connexion Bluetooth reste stable. Ne fermez pas MOCPilot, ne désactivez pas le Bluetooth et n’éteignez pas le hub pendant le changement de configuration.

Un changement interrompu peut endommager le firmware du hub. Il faudra alors peut-être une [récupération du firmware](/docs/Application/Hubs/RecoveryHubFirmware/) avant de pouvoir réutiliser le hub.
:::

Pendant le changement de configuration, le hub ignore les commandes habituelles et sa LED passe par plusieurs couleurs. Une fois la nouvelle configuration en place, le hub redémarre.

## Blocs de configuration {#configuration-blocks}

Les Blocs logiques peuvent lire et changer la configuration pendant l’exécution d’un programme.

### Définir la configuration du hub {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Bloc de définition de la configuration du hub" />

Le bloc **Définir la configuration du hub** charge l’une des configurations prises en charge dans le hub sélectionné.

- Sélecteur de hub : choisit le hub à reconfigurer.
- Sélecteur de configuration : choisit la configuration cible.
- Configurations disponibles pour le Technic Move Hub : **Porsche GT4 e-Performance**, **Lamborghini Revuelto** et **Batmobile™ Tumbler**.

Voir la [documentation du bloc de définition de la configuration](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Configuration du hub {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Bloc rapporteur de la configuration du hub" />

Le bloc **Configuration du hub** renvoie la configuration actuelle du hub sélectionné.

- Sélecteur de hub : choisit le hub à lire.
- Format de sortie : **texte** renvoie le nom de la configuration.
- Format de sortie : **index** renvoie l’index de la configuration, pratique pour les comparaisons dans les conditions.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Options de format de sortie du bloc de configuration du hub" />

Voir la [documentation du bloc de configuration du hub](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Impulsion de puissance {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Bloc d’impulsion de puissance du Technic Move Hub" />

Le bloc **Impulsion de puissance** envoie une impulsion de puissance au Technic Move Hub sélectionné. Il ne fonctionne qu’avec la configuration **Batmobile™ Tumbler**.

Le hub fait alors tourner les moteurs à pleine puissance et à vitesse maximale pendant un court instant, environ 1 à 2 secondes. Dans Liens rapides, la même fonction correspond à l’opération [Impulsion de puissance](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Voir la [documentation du bloc Impulsion de puissance](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Changer la configuration pendant l’exécution du programme {#change-configuration-during-program-runtime}

Un programme peut aussi changer la configuration pendant son exécution. Une démarche type :

1. Lire la configuration actuelle du hub.
2. La comparer à la configuration exigée par le profil.
3. Si elle est différente, définir la configuration exigée.
4. Relire la configuration après la reconfiguration.
5. Ne continuer que si le hub renvoie la configuration attendue.
6. Se déconnecter ou arrêter le programme si la configuration exigée n’a pas été appliquée.

Le profil prêt à l’emploi de ce hub montre comment faire.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Exemple de blocs changeant la configuration du Technic Move Hub pendant l’exécution" />
