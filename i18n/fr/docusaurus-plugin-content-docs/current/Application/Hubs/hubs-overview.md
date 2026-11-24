---
id: HubsOverview
title: Hubs
description: "Les hubs dans les profils MOCPilot : hubs pris en charge, emplacements de hub et possibilités de chaque hub."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Hubs

Un **Hub** est la brique Bluetooth de votre modèle : moteurs, lumières et capteurs se branchent sur ses ports, et MOCPilot communique avec lui en Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/spike_hub_p.webp')} alt="SPIKE Prime Hub" style={{maxWidth: 110}} /><div>SPIKE Prime</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/essential_hub_p.webp')} alt="SPIKE Essential Hub" style={{maxWidth: 110}} /><div>SPIKE Essential</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Hubs pris en charge {#supported-hubs}

| Hub | Remarques |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 ports, capteurs d’inclinaison et d’accélération |
| LEGO® Technic™ Move Hub | dans les voitures télécommandées LEGO Technic ; propulsion, direction, phares ; [configurations](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 ports, trains et sets City |
| LEGO® Move Hub / BOOST (88006) | 2 moteurs intégrés + 2 ports |
| LEGO® Remote Control (88010) | ses boutons sont des entrées |
| LEGO® WeDo 2.0 Smart Hub | 2 ports |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 ports, matrice lumineuse, haut-parleur, gyroscope ; Bluetooth ou USB ; non disponible sur iPhone et iPad |
| LEGO® SPIKE™ Prime Hub (45601) | bêta ; le même hub que Robot Inventor avec le firmware SPIKE Legacy ; Bluetooth ou USB ; non disponible sur iPhone et iPad |
| LEGO® SPIKE™ Essential Hub (45609) | bêta ; 2 ports, lumière, inclinaison et accélération ; Bluetooth Low Energy |
| BuWizz 2.0 | 4 ports, modes de puissance |
| BuWizz 3.0 Pro | 6 ports, LED de couleur des ports |
| SBrick, SBrick Plus | 4 ports, contrôle de la vitesse, pas de contrôle de position |
| Mould King 4.0, 6.0 | 4 ou 6 ports, commandes uniquement, canaux de contrôle |

Liste complète avec moteurs et capteurs : [Appareils pris en charge](/docs/Introducing/SupportedDevices).

## Emplacements de hub {#hub-slots}

Chaque profil dispose de **5 emplacements de hub** :

- **2 emplacements sont gratuits** ;
- **3 autres** se débloquent avec **Déverrouiller l’emplacement** (un achat *Emplacement de hub supplémentaire*, un par emplacement) ou tous à la fois avec [MocPilot Pro](/docs/Application/Account/Pro).

Les emplacements achetés sont liés à votre compte et fonctionnent dans tous vos profils.

Limites Mould King : un seul type de Mould King par profil, avec jusqu’à 3 Mould King 4.0 ou 1 Mould King 6.0 (ils partagent l’émetteur d’annonces Bluetooth du téléphone).

## Les hubs dans le programme {#hubs-in-the-program}

- Dans **Liens rapides**, chaque hub du profil apparaît dans la palette comme sortie **Hub**, et comme entrée **Hub** pour ses boutons et capteurs. Les opérations qu’aucun hub du profil ne sait faire ne sont pas proposées. Voir [Bloc Hub et ports](/docs/Application/Links/HubsAndPorts).
- Dans **Blocs logiques**, les blocs de moteurs, de lumières et de capteurs prennent l’emplacement du hub et le port. Voir [Moteurs](/docs/Application/BlockBuilder/Blocks/Motors).

## En savoir plus {#read-more}

- [Ajouter et connecter un hub](/docs/Application/Hubs/ConnectingHubs)
- [Fonctions propres aux hubs](/docs/Application/Hubs/HubFunctions)
- [Mise à jour du firmware](/docs/Application/Hubs/FirmwareUpdating) et [récupération du firmware](/docs/Application/Hubs/RecoveryHubFirmware)
