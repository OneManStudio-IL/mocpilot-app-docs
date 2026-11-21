---
id: Troubleshooting
title: Dépannage
description: "Solutions aux problèmes courants avec les hubs, les moteurs, le tableau de bord, la synchronisation, les achats, les mises à jour, le son, l'Assistant IA et le contrôle à distance."
---

# Dépannage {#troubleshooting}

## Hubs {#hubs}

**Le hub est introuvable**
- Activez le Bluetooth et autorisez MOCPilot à l'utiliser (sur Android, également Appareils à proximité ou Position) dans les réglages du système. Voir [Bluetooth et autorisations](/docs/Help/BluetoothPermissions).
- Allumez le hub et appuyez sur son bouton juste avant la recherche ; touchez de nouveau **Démarrer le scan**.
- Vérifiez que le hub n'est pas connecté à un autre téléphone ou à une autre application (applications LEGO®, autre télécommande). Fermez-les.
- Remplacez ou rechargez les piles.
- Robot Inventor : non disponible sur iPhone et iPad. Mould King 4.0 : non disponible sous Windows.

**Le hub se déconnecte**
- Rapprochez l'appareil : les murs, le métal et les autres appareils en 2,4 GHz réduisent la portée.
- Des piles faibles provoquent des déconnexions sous charge : rechargez-les ou remplacez-les.
- Certains hubs s'éteignent au bout d'un moment sans commandes ; reconnectez-les dans **Mes hubs**.
- Plus d'informations sur la portée, les adaptateurs et les autorisations : [Bluetooth et autorisations](/docs/Help/BluetoothPermissions).

**« Mise à jour du firmware requise »**
- MOCPilot a besoin d'un firmware compatible pour les hubs Technic, Technic Move, BOOST et City. Suivez [Mise à jour du firmware](/docs/Application/Hubs/FirmwareUpdating). Si une mise à jour a échoué, voir [Récupération du firmware](/docs/Application/Hubs/RecoveryHubFirmware).

**Le Mould King ne réagit pas**
- Les hubs Mould King ne font que recevoir des commandes. Utilisez **Reconnecter**, vérifiez le canal (**Sélectionner le canal**) et n'utilisez qu'un seul type de Mould King par profil.

## Moteurs et programme {#motors-and-the-program}

**Le moteur ne bouge pas**
- Le programme est-il lancé (**Lancer**) ? Le hub est-il connecté ?
- Le moteur est-il branché sur le port utilisé par le programme ? Vérifiez le [moniteur du hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Liens rapides : ouvrez **Problèmes** ; suivez les valeurs en direct le long de la ligne. Voir [Exécution et résolution des problèmes](/docs/Application/Links/Problems).
- Blocs logiques : le script commence-t-il par un bloc d'événement ? Utilisez le **Moniteur** pour observer les valeurs.

**Le moteur tourne dans le mauvais sens**
- Liens rapides : ajoutez **Inverser** à la ligne. Blocs logiques : multipliez la valeur par −1.

**Le moteur avance tout doucement ou bourdonne quand le joystick est relâché**
- Liens rapides : ajoutez **Zone morte**. Blocs logiques : ignorez les petites valeurs avec *entre*.

**La direction par servo est décentrée ou force contre la butée**
- Liens rapides : Servo avec l'étalonnage **Auto**, ou **Manuel** avec **Définir comme zéro** et **Centre** ; réduisez l'**Angle**. Blocs logiques : *calibrer crémaillère de direction*.
- Servo, Tourner de X degrés et Aller à la position nécessitent des moteurs avec encodeur ; les moteurs simples et les ports SBrick n'acceptent que la vitesse.

**Les moteurs continuent de tourner après Arrêter**
- Blocs logiques : activez **Arrêter les ports du hub quand le programme s'arrête** dans les Paramètres de l'éditeur.

## Tableau de bord {#dashboard}

**Je ne peux pas déplacer ou supprimer une commande**
- Elle est verrouillée : choisissez **Déverrouiller** dans son menu. Une commande utilisée par le programme ne peut pas être supprimée tant que vous n'avez pas retiré ses lignes ou ses blocs.

**« Il n'y a pas d'espace disponible sur l'écran »**
- Déplacez ou réduisez d'autres commandes, ou choisissez une taille plus petite.

**Un thème ou une commande est verrouillé**
- Vous ne le possédez pas : achetez-le ou prenez [MocPilot Pro](/docs/Application/Account/Pro), ou passez la commande au thème De base avec **Changer de thème**.

**La manette de jeu n'est pas détectée**
- Associez la manette dans les réglages Bluetooth du système (ou branchez-la en USB). La page **Manette de jeu** affiche **Manette : (nom)** quand l'application la voit, et « La manette n'est pas connectée » sinon.
- Activez **Activer les blocs de manette** sur la page **Manette de jeu**, sinon les entrées et les blocs de manette n'apparaissent pas.
- Plusieurs manettes connectées ? Choisissez-en une dans **Sélectionner la manette**.
- Vérifiez les boutons et les sticks avec **Tester la manette**.
- Windows : les manettes Xbox (XInput) et Sony DualSense / DualSense Edge fonctionnent ; les autres manettes sans prise en charge de XInput risquent de ne pas fonctionner.
- Voir [Manette de jeu](/docs/Application/Dashboard/Gamepad).

## Profils et synchronisation {#profiles-and-sync}

**Mes profils ne sont pas sur mon autre appareil**
- Connectez-vous avec le même compte sur les deux appareils et vérifiez la connexion Internet. Si l'application affiche **Hors ligne**, touchez **Réessayer** ou **Passer en ligne**.

**« Le profil n'est pas compatible »**
- Le profil a été créé avec une version plus récente de MOCPilot. Mettez l'application à jour.

**J'ai perdu mes profils après une réinstallation**
- En mode invité, les profils n'existent que sur l'appareil et disparaissent avec l'application. Avec un compte, reconnectez-vous et ils reviennent.

## E-mails du compte {#account-emails}

**L'e-mail d'activation ou le code de réinitialisation du mot de passe n'arrive pas**
- Patientez quelques minutes et vérifiez le dossier des spams ou des courriers indésirables. Les e-mails proviennent de no-reply@mocpilot.com.
- Vérifiez que vous avez correctement saisi l'adresse e-mail.
- Activation : ouvrez la page de votre compte et touchez **Renvoyer le mail d'activation**. Tant que le compte n'est pas vérifié, certaines fonctions restent désactivées.
- Réinitialisation du mot de passe : « E-mail introuvable » signifie qu'aucun compte n'existe avec cette adresse ; essayez l'adresse utilisée lors de l'inscription. Sinon, touchez à nouveau **Réinitialiser** à côté de « Mot de passe oublié ? » pour recevoir un nouveau code. Voir [Compte](/docs/Application/Account/UserAccount).

## Achats {#purchases}

**Un achat a disparu**
- Connectez-vous avec le compte utilisé pour l'achat, puis allez dans **Compte → Achats → Restaurer**.
- « Abonnement lié à un autre compte » : l'abonnement Pro de ce compte de store appartient à un autre compte MOCPilot.

**« MocPilot Pro doit être vérifié en ligne »**
- Pro est utilisé hors ligne depuis longtemps. Connectez-vous à Internet et la vérification se fait toute seule.

## Mises à jour de l'application {#app-updates}

**« Mise à jour requise »**
- Le message plein écran « Cette version de MOCPilot n'est plus prise en charge… » signifie que cette version ne peut plus être utilisée. Touchez **Mettre à jour** pour ouvrir le store et installer la nouvelle version. L'écran indique aussi votre **Version installée**.
- Dans l'éditeur web, le bouton s'appelle **Recharger la page** : l'éditeur le plus récent se charge.

**« MOCPilot (version) est disponible »**
- Une nouvelle version est sortie. Touchez **Mettre à jour** (dans l'éditeur web, **Recharger la page**), ou fermez le bandeau avec × : il ne réapparaîtra qu'à la version suivante.

## Son {#sound}

**Il n'y a pas de son**
- Activez **Son** dans les [Paramètres](/docs/Application/Account/Settings) : ce réglage coupe tous les sons de l'application, des commandes et des programmes.
- Augmentez le volume multimédia de l'appareil. Si un casque ou une enceinte Bluetooth est connecté, le son y est diffusé.
- Blocs logiques : vérifiez que le programme ne règle pas le volume à 0 et n'arrête pas tous les sons. Voir [Sons](/docs/Application/BlockBuilder/Blocks/Sounds).

## Assistant IA {#ai-builder}

**L'Assistant IA n'est pas disponible ou affiche une erreur**
- L'Assistant IA nécessite [MocPilot Pro](/docs/Application/Account/Pro) et une connexion Internet : « L'assistant IA nécessite MocPilot Pro. » ou « Impossible de joindre le service d'IA. Vérifiez votre connexion Internet et réessayez. »
- « Le service d'IA est temporairement indisponible. Réessayez plus tard. » ou « Trop de demandes à l'IA en ce moment. Réessayez dans une minute. » : patientez et réessayez.
- Il existe des limites quotidiennes et mensuelles : « Vous avez atteint la limite quotidienne de demandes à l'IA. Réessayez demain. »
- Saisie vocale : autorisez le micro (et la reconnaissance vocale sur les appareils Apple) dans les réglages du système ; voir [Bluetooth et autorisations](/docs/Help/BluetoothPermissions).
- Tous les messages et la marche à suivre : [Assistant IA](/docs/Application/Profiles/AiBuilder).

## Contrôle à distance {#remote-control}

**L'appareil des hubs ne se connecte pas ou la connexion se coupe**
- « Le contrôle à distance fait partie de MocPilot Pro » : le compte de la télécommande doit disposer de [MocPilot Pro](/docs/Application/Account/Pro).
- « Le code a expiré… » ou « Code incorrect ou expiré… » : le code de connexion est valable 5 minutes. Affichez un nouveau code sur la télécommande, puis scannez-le ou saisissez-le à nouveau.
- « Autorisez MOCPilot à utiliser la caméra dans les réglages système pour scanner le code. » : autorisez l'appareil photo dans les réglages du système ([comment faire](/docs/Help/BluetoothPermissions)), ou touchez **Saisir le code** et tapez les 6 chiffres.
- « Cette version de l'app ne peut pas se connecter à une télécommande » ou « L'autre appareil n'a pas pu ouvrir le profil » : mettez MOCPilot à jour sur les deux appareils.
- « Connexion à la télécommande perdue… » : vérifiez que les deux appareils sont en ligne. Si la connexion est perdue pendant environ 4 secondes, l'appareil des hubs arrête le profil et tous les moteurs.
- Pour en savoir plus : [Contrôle à distance](/docs/Application/Profiles/RemoteControl).

## Toujours bloqué ? {#still-stuck}

Utilisez **Poser une question** ou **Signaler un bug** dans l'**Aide** de l'application (sur ordinateur : le menu **Aide**). La réponse arrive par e-mail et dans **Notifications**.
