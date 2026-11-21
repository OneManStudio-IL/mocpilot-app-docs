---
id: SystemRequirements
title: Configuration requise
description: "Systèmes d'exploitation, Bluetooth, mémoire et navigateurs pris en charge par MOCPilot."
---

# Configuration requise {#system-requirements}

MOCPilot fonctionne sur les téléphones, les tablettes et les ordinateurs. Pour piloter un modèle, l'appareil doit aussi disposer du Bluetooth et d'un [hub compatible](/docs/Introducing/SupportedDevices).

## Systèmes d'exploitation {#operating-systems}

| Plateforme | Version minimale | Où l'obtenir |
|---|---|---|
| iPhone et iPad | iOS / iPadOS 17 | App Store |
| Téléphones et tablettes Android | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| PC Windows (64 bits, x64) | Windows 10 version 1809 ou Windows 11 | Microsoft Store |

Vous trouverez les liens vers les stores sur [mocpilot.com](https://mocpilot.com). L'application choisit elle-même l'interface téléphone, tablette ou ordinateur ; voir [Téléphone, tablette et ordinateur](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Les hubs se connectent en **Bluetooth Low Energy** (Bluetooth 4.0 ou plus récent). Presque tous les téléphones et tablettes en sont équipés ; sur un ordinateur, utilisez l'adaptateur intégré ou une clé Bluetooth USB.
- Le hub **Robot Inventor** utilise le Bluetooth classique. Il fonctionne sur Android, Mac et Windows, mais pas sur iPhone ni iPad.
- Les hubs **Mould King** reçoivent les commandes sous forme de diffusions Bluetooth (advertising). Sous Windows, le Mould King 6.0 nécessite un adaptateur et un pilote capables de diffuser, et le Mould King 4.0 ne fonctionne pas du tout ; utilisez plutôt un téléphone ou une tablette.
- L'application demande l'autorisation Bluetooth (sur Android, également Appareils à proximité ou Localisation). Voir [Bluetooth et autorisations](/docs/Help/BluetoothPermissions).

## Mémoire {#memory}

Sur les appareils de moins de 4 Go de mémoire, MOCPilot affiche les Blocs logiques de façon simplifiée afin que les gros programmes restent fluides. Cela se fait automatiquement ; les blocs fonctionnent de la même manière.

## Éditeur web {#web-editor}

L'[éditeur web](/docs/Introducing/WebEditor) de mocpilot.com fonctionne dans le navigateur :

- utilisez un navigateur de bureau à jour ; l'éditeur a besoin de WebAssembly ;
- la première ouverture télécharge environ 20 Mo pour l'éditeur et environ 15 Mo de thèmes, une connexion rapide est donc préférable ;
- les navigateurs ne peuvent pas se connecter aux hubs Bluetooth : pour piloter un modèle depuis le navigateur, utilisez le [contrôle à distance](/docs/Application/Profiles/RemoteControl), qui nécessite un navigateur compatible WebRTC ;
- si le message « The editor could not start in this browser. » s'affiche, mettez le navigateur à jour ou essayez-en un autre.

## Internet {#internet}

Les hubs, vos profils et les thèmes téléchargés fonctionnent hors ligne. La connexion au compte, la synchronisation, le catalogue, l'Assistant IA, le contrôle à distance et les achats nécessitent une connexion Internet. Voir [Travailler hors ligne](/docs/Application/Account/Sync#working-offline).
