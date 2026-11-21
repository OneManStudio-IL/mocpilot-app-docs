---
id: RemoteControl
title: Contrôle à distance
description: "Exécutez un profil sur le téléphone, la tablette ou l'ordinateur placé près du modèle et pilotez-le depuis un autre appareil ou depuis l'éditeur web."
---

import Screenshot from '@site/src/components/Screenshot';

# Contrôle à distance {#remote-control}

Le contrôle à distance vous permet de piloter un modèle connecté à un autre appareil. Un appareil reste près du modèle et communique avec les hubs en Bluetooth ; vous tenez l'autre et utilisez son tableau de bord. C'est aussi ainsi que vous pilotez un modèle depuis l'[éditeur web](/docs/Introducing/WebEditor), car les navigateurs ne peuvent pas se connecter aux hubs.

## Les deux appareils {#the-two-devices}

- L'**appareil des hubs** est le téléphone, la tablette ou l'ordinateur placé près du modèle. Son application MOCPilot connecte les hubs et exécute le profil. Il n'a pas besoin de compte.
- La **télécommande** est l'appareil depuis lequel vous pilotez : l'application MOCPilot sur un autre appareil, ou l'éditeur web sur [mocpilot.com](https://mocpilot.com). Le profil est ouvert sur la télécommande, qui l'envoie à l'appareil des hubs.

## Ce qu'il vous faut {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) sur le compte connecté sur la **télécommande**. L'appareil des hubs n'a besoin ni de compte ni de Pro.
- L'application MOCPilot sur l'appareil des hubs.
- Une connexion Internet sur les deux appareils.

## Connecter un appareil des hubs {#connect-a-hub-device}

1. Sur la télécommande, ouvrez le profil et appuyez sur **Contrôle à distance** (l'icône de télécommande : une maison avec des ondes) dans la barre supérieure du profil. Dans l'éditeur web, appuyez sur **Afficher le code** dans le panneau qui s'ouvre.

   La télécommande affiche un **code de connexion** : un code QR et 6 chiffres.
2. Sur l'appareil des hubs, ouvrez MOCPilot et touchez **Connecter une télécommande** sur la page **Mes profils**. Sur Mac, vous pouvez aussi choisir **Fichier → Connecter une télécommande…**.
3. Saisissez le code :
   - **sur un téléphone ou une tablette**, dirigez l'appareil photo vers le code QR, ou touchez **Saisir le code** et tapez les 6 chiffres ;
   - **sur un ordinateur**, tapez les 6 chiffres et appuyez sur **Connecter**.
4. Les appareils se connectent. La télécommande envoie le profil à l'appareil des hubs et l'y démarre, et l'appareil des hubs affiche la page plein écran **Contrôle à distance**.

<Screenshot name="remote-control-code" alt="Panneau Contrôle à distance dans un profil ouvert, avec le code QR et le code à 6 chiffres" width={900} />

À propos du code de connexion :

- Il ne fonctionne qu'une fois et reste valable 5 minutes. Tant que la télécommande l'affiche, un nouveau code le remplace à son expiration.
- Scannez-le dans l'application MOCPilot, pas avec l'application Appareil photo du téléphone.
- Si vous fermez le panneau sur la télécommande avant que l'appareil des hubs se connecte, rien n'est configuré ; appuyez de nouveau sur **Contrôle à distance** pour obtenir un nouveau code.

<Screenshot name="remote-connect-code-entry" alt="Fenêtre Connecter une télécommande sur un ordinateur avec le champ pour les 6 chiffres" width={900} />

## Quand les appareils sont connectés {#when-the-devices-are-connected}

**Sur la télécommande :**

- Le bouton **Contrôle à distance** devient vert (sur un téléphone ou une tablette, un anneau vert), et son panneau affiche le nom de l'appareil des hubs et un bouton **Déconnecter**.
- **Mes hubs** affiche les hubs de l'appareil des hubs. Connectez-y les hubs comme d'habitude : c'est l'appareil des hubs qui les recherche, appuyez donc sur le bouton du hub quand on vous le demande.
- Le tableau de bord pilote le modèle.

**Sur l'appareil des hubs**, la page plein écran **Contrôle à distance** affiche :

- l'état, par exemple **Exécution de « Ma voiture »** ;
- **Hubs connectés : N** et, pendant la recherche, **Recherche d'un hub : appuyez sur le bouton du hub.** ;
- un rappel : **Gardez cette application ouverte. C'est l'appareil des hubs : il connecte les hubs et exécute le profil ; la télécommande ne fait que le piloter.** ;
- un bouton **Arrêter**.

L'écran de l'appareil des hubs reste allumé tant qu'il est connecté. Le profil n'est pas enregistré sur l'appareil des hubs et n'apparaît pas dans sa liste de profils.

<Screenshot name="remote-hub-device" alt="Page plein écran Contrôle à distance sur l'appareil des hubs, avec l'état de la connexion, le nombre de hubs connectés et le bouton Arrêter" width={900} />

## Lancer et Arrêter {#run-and-stop}

- Appuyez sur **Arrêter** sur la télécommande pour arrêter le profil sur l'appareil des hubs. L'appareil des hubs arrête toujours tous les moteurs, même si **Arrêter les ports du hub quand le programme s'arrête** est désactivé dans le profil.
- Appuyez sur **Lancer** sur la télécommande pour le redémarrer sur l'appareil des hubs.
- Dans l'éditeur web, l'appareil des hubs reste associé pour tous les profils que vous ouvrez dans le même onglet du navigateur : **Lancer** démarre le profil sur l'appareil des hubs. Quand aucun appareil des hubs n'est associé, **Lancer** exécute le profil dans le navigateur, sans hubs.

## Si la connexion est perdue {#if-the-connection-drops}

:::caution Sécurité
Si l'appareil des hubs ne reçoit rien de la télécommande pendant 4 secondes, il arrête le profil et tous les moteurs.
:::

Ensuite :

- l'appareil des hubs affiche **Connexion à la télécommande perdue. Le profil a été arrêté. En attente de la télécommande…** et attend ;
- l'application sur la télécommande affiche **La connexion a été perdue. Nouvelle tentative…** avec **Réessayer** et **Déconnecter** ;
- l'éditeur web affiche **L'appareil des hubs s'est déconnecté** : « *appareil* ne répond plus. Le profil qui y tournait a été arrêté et ses moteurs sont coupés. » Il continue d'essayer de se reconnecter ; vous pouvez aussi appuyer sur **Reconnecter**, **Lancer dans le navigateur** ou **Arrêter**.

Une fois les appareils reconnectés, vérifiez l'état sur la télécommande et appuyez sur **Lancer** si le profil ne tourne pas.

## Se déconnecter {#disconnect}

- **Sur la télécommande** : appuyez sur **Contrôle à distance** et choisissez **Déconnecter**.
- **Sur l'appareil des hubs** : appuyez sur **Arrêter** sur la page **Contrôle à distance**.

Dans les deux cas, le profil et les moteurs s'arrêtent, et l'appareil des hubs ferme le profil.

## Dépannage {#troubleshooting}

| Message | Où | Que faire |
|---|---|---|
| **Le contrôle à distance fait partie de MocPilot Pro** | télécommande | Abonnez-vous à [MocPilot Pro](/docs/Application/Account/Pro) sur le compte de la télécommande. Vous ne pouvez pas vous abonner dans le navigateur : faites-le dans l'application, et Pro fonctionnera aussi dans l'éditeur web |
| **Aucune connexion au serveur** | les deux | Vérifiez la connexion Internet et réessayez |
| **Impossible d'obtenir un code du serveur** | télécommande | Appuyez sur **Afficher le code** pour réessayer |
| **Code incorrect ou expiré. Vérifiez les 6 chiffres affichés sur la télécommande.** | appareil des hubs | Tapez les 6 chiffres que la télécommande affiche en ce moment |
| **Le code a expiré. Affichez un nouveau code sur la télécommande et scannez-le à nouveau.** | appareil des hubs | Appuyez sur **Contrôle à distance** sur la télécommande et scannez le nouveau code |
| **Ce n'est pas un code MOCPilot. Scannez le code affiché par la télécommande.** | appareil des hubs | Scannez le code QR du panneau **Contrôle à distance** de la télécommande |
| **Trop de codes incorrects. Réessayez dans quelques minutes.** | appareil des hubs | Patientez quelques minutes, puis saisissez le code actuel |
| **Autorisez MOCPilot à utiliser la caméra dans les réglages système pour scanner le code.** | appareil des hubs | Autorisez l'accès à l'appareil photo dans les réglages du système, ou touchez **Saisir le code** et tapez les 6 chiffres |
| **La télécommande ne répond pas. Vérifiez que le profil y est ouvert et qu'elle est en ligne.** | appareil des hubs | Gardez le profil ouvert sur la télécommande et vérifiez sa connexion Internet |
| **Cette version de l'app ne peut pas se connecter à une télécommande** | les deux | Mettez MOCPilot à jour |
| **Ce navigateur ne peut pas ouvrir de connexion directe (WebRTC)** | éditeur web | Utilisez un autre navigateur, par exemple Chrome, Edge ou Safari |
| **Le profil est trop volumineux** / **Le profil n'est pas arrivé en entier** | les deux | Vérifiez la connexion et appuyez de nouveau sur **Lancer** |
| **L'autre appareil n'a pas pu enregistrer le profil** / **L'autre appareil n'a pas pu ouvrir le profil** | télécommande | Appuyez de nouveau sur **Lancer** ; si le problème persiste, déconnectez puis reconnectez l'appareil des hubs |
| **La connexion à *appareil* a été perdue** / **Connexion à la télécommande perdue. En attente…** | les deux | Voir [Si la connexion est perdue](#if-the-connection-drops) |
