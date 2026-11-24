---
id: BluetoothPermissions
title: Bluetooth et autorisations
description: "Les autorisations que MOCPilot demande sur chaque plateforme, pourquoi, et comment corriger une autorisation refusée ou un problème de Bluetooth."
---

# Bluetooth et autorisations {#bluetooth-and-permissions}

MOCPilot communique avec les hubs en Bluetooth : le système vous demande donc de l'autoriser. Quelques autres autorisations ne sont demandées que lorsque vous utilisez une fonction qui en a besoin.

## Ce que MOCPilot demande et pourquoi {#what-mocpilot-asks-for-and-why}

| Autorisation | Quand elle est demandée | Pourquoi |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | la première fois que vous recherchez un hub | pour trouver les hubs et s'y connecter |
| **Appareils à proximité** (Android 12 et plus récent) | la première fois que vous recherchez un hub | pour trouver les hubs et s'y connecter |
| **Position**, précise (Android 10 et 11) | la première fois que vous recherchez un hub | Android l'exige pour la recherche Bluetooth sur ces versions. MOCPilot ne collecte, ne stocke ni ne partage votre position |
| **Position** (Android, hubs Mould King) | quand vous connectez un hub Mould King | l'application envoie les commandes aux hubs Mould King sous forme de diffusions Bluetooth et demande pour cela la Position, quelle que soit la version d'Android |
| **Appareil photo** (téléphone, tablette) | quand vous scannez un code QR dans **Connecter une télécommande** | pour lire le [code de connexion](/docs/Application/Profiles/RemoteControl). Vous pouvez aussi saisir les 6 chiffres |
| **Micro** (iPhone, iPad, Mac, Android) | la première fois que vous dictez une demande à l'[Assistant IA](/docs/Application/Profiles/AiBuilder) | saisie vocale |
| **Reconnaissance vocale** (iPhone, iPad, Mac) | en même temps que le micro | pour transformer votre voix en texte |

Sous Windows, MOCPilot ne demande pas d'autorisation Bluetooth ; il suffit que le Bluetooth soit activé. Pour la saisie vocale sous Windows, MOCPilot propose la saisie vocale de Windows (Win+H).

## Si vous avez refusé une autorisation {#if-you-denied-a-permission}

Si vous avez refusé une autorisation, le système ne la redemande généralement pas. MOCPilot affiche alors un message, par exemple **Échec du scan** avec « L'application nécessite l'autorisation de scanner les appareils à proximité… », « Autorisez MOCPilot à utiliser la caméra dans les réglages système pour scanner le code. » ou « Autorisez l'accès au micro pour MOCPilot dans les réglages système ». Activez l'autorisation dans les réglages du système, puis revenez à l'application :

**iPhone et iPad**
1. Ouvrez **Réglages** et faites défiler jusqu'à **MOCPilot**.
2. Activez **Bluetooth** (et **Appareil photo**, **Micro** ou **Reconnaissance vocale** si vous en avez besoin).

**Android** (les noms varient un peu selon le fabricant)
1. Ouvrez **Paramètres → Applications → MOCPilot → Autorisations**.
2. Autorisez **Appareils à proximité**. Sur Android 10 et 11, ou pour les hubs Mould King, autorisez aussi **Position** et activez **Utiliser la position exacte**.
3. Autorisez **Appareil photo** ou **Micro** si vous en avez besoin.

**Mac**
1. Ouvrez **Réglages Système → Confidentialité et sécurité**.
2. Choisissez **Bluetooth** (ou **Micro**, **Reconnaissance vocale**) et activez **MOCPilot**.

**Windows**
1. Ouvrez **Paramètres → Bluetooth et appareils** et activez **Bluetooth**.

## « Bluetooth est désactivé » {#bluetooth-is-off}

MOCPilot affiche **Bluetooth est désactivé** lorsque le Bluetooth de l'appareil est éteint. Activez-le dans le centre de contrôle, les réglages rapides ou les réglages du système, puis validez le message : l'application relance la recherche.

## Adaptateurs Bluetooth sous Windows {#bluetooth-adapters-on-windows}

- Il vous faut un adaptateur Bluetooth 4.0 (LE) ou plus récent : intégré à l'ordinateur ou sous forme de clé USB.
- Le **Mould King 6.0** nécessite un adaptateur et un pilote capables d'envoyer des diffusions Bluetooth (advertising). Tous les adaptateurs n'en sont pas capables.
- Le **Mould King 4.0** ne fonctionne pas sous Windows : l'application indique « Les hubs Mould King à 4 ports nécessitent une diffusion Bluetooth avec données de service, que Windows ne prend pas en charge. » Utilisez un téléphone ou une tablette pour ces hubs.

## Hubs en Bluetooth classique {#classic-bluetooth-hubs}

Le hub **Robot Inventor** utilise le Bluetooth classique, et non le Bluetooth Low Energy. Il fonctionne sur Android, Mac et Windows, mais pas sur iPhone ni iPad. Sous Windows, si MOCPilot ne le trouve pas, associez d'abord le hub dans **Paramètres → Bluetooth et appareils → Ajouter un appareil**, puis relancez la recherche dans l'application. Sous Windows et Mac, vous pouvez aussi le connecter avec un câble USB ; voir [Hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub#connect).

Tous les autres hubs compatibles utilisent le Bluetooth Low Energy et s'ajoutent uniquement dans MOCPilot, pas dans les réglages Bluetooth du système.

## Une connexion stable {#a-stable-connection}

- **Une seule application à la fois.** Un hub n'accepte qu'une seule connexion. Fermez les applications LEGO® et les autres applications de télécommande, et déconnectez le hub des autres téléphones.
- **Portée.** Gardez l'appareil à quelques mètres du modèle. Les murs, le métal, votre corps et les autres appareils en 2,4 GHz (routeurs Wi-Fi, autres appareils Bluetooth) réduisent la portée.
- **Piles.** Des piles faibles provoquent des déconnexions quand les moteurs forcent.
- **Gardez l'application ouverte.** Pilotez avec MOCPilot à l'écran, et activez **Garder l'écran allumé** dans les [Paramètres](/docs/Application/Account/Settings) pour que l'écran ne s'éteigne pas tant qu'un profil est ouvert.

Autres solutions pour les hubs introuvables ou qui se déconnectent sans cesse : [Dépannage](/docs/Help/Troubleshooting#hubs).
