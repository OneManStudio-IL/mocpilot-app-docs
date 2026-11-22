---
id: AiBuilder
title: Assistant IA
description: "Décrivez votre modèle par écrit ou à la voix, et l'Assistant IA configure les hubs, le tableau de bord et le programme d'un profil Blocs logiques ou Liens rapides."
---

import Screenshot from '@site/src/components/Screenshot';

# Assistant IA {#ai-builder}

Décrivez votre modèle avec vos propres mots, par écrit ou à voix haute, et l'**Assistant IA** configure le profil à votre place : les hubs et les ports, les commandes du tableau de bord et le programme. Il fonctionne dans les deux éditeurs : dans un profil [Blocs logiques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing), il construit des blocs ; dans un profil [Liens rapides](/docs/Application/Links/LinksIntroducing), il construit des lignes. Vous continuez ensuite à dialoguer avec lui pour modifier le profil, ou vous le modifiez vous-même.

L'Assistant IA fait partie de [MocPilot Pro](/docs/Application/Account/Pro) et fonctionne dans l'application comme dans l'[éditeur web](/docs/Introducing/WebEditor). Il nécessite une connexion Internet.

<Screenshot name="blocks-ai-builder" alt="Le panneau de l'Assistant IA à côté du programme" width={900} />

## Ouvrir l'Assistant IA {#open-the-ai-builder}

1. Ouvrez un profil en édition.
2. Sur un ordinateur, appuyez sur le bouton **Assistant IA** (l'icône d'étincelles) à droite de la barre supérieure, ou sur ⇧⌘I / Ctrl+Maj+I ; dans une fenêtre étroite, il se trouve dans **Plus** (⋯). Sur un téléphone ou une tablette, touchez **Plus** → **Assistant IA**.
3. Saisissez votre demande dans **Que doit créer ou modifier l'IA ?** et appuyez sur **Envoyer** (ou sur Entrée ; Maj+Entrée crée une nouvelle ligne).

Sans MocPilot Pro, le bouton présente ce que fait l'Assistant IA, avec **Obtenir MocPilot Pro** et **Pas maintenant**.

Où s'ouvre le panneau :

- **Téléphone** : une page plein écran au-dessus de l'éditeur.
- **Tablette** : une carte flottante ; faites-la glisser par son en-tête vers la gauche ou vers la droite.
- **Ordinateur** : une carte à droite. Dans l'application (pas dans le navigateur), vous pouvez appuyer sur **Ouvrir dans une fenêtre séparée** dans son en-tête et placer la fenêtre à côté de l'éditeur.

Pendant que l'IA travaille, le panneau indique ce qu'elle fait (**Réflexion sur votre modèle…**, **Vérification du profil…**, etc.). Les modifications apparaissent dans l'éditeur dès qu'elle a terminé, accompagnées d'un court résumé de ce qui a changé. Quand le panneau est vide, il propose quelques exemples de demandes : touchez-en un pour le placer dans le champ de texte, puis envoyez-le tel quel ou modifiez-le d'abord.

La conversation est conservée pour chaque profil : vous pouvez fermer le panneau et y revenir plus tard.

## Rédiger une bonne demande {#ai-builder-tips}

:::tip Indiquez le hub utilisé, ce qui est branché sur chaque port et ce que chaque élément doit faire
Une demande d'une ligne comme « une voiture avec des phares » ne suffit pas : l'IA doit deviner le hub, les ports et le rôle de chaque moteur, et le résultat devra probablement être corrigé. Précisez :

- **Le hub** : Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Ce qui est branché sur chaque port** : un moteur de propulsion, un moteur de direction (servo), des lumières, un capteur.
- **Ce que chaque élément doit faire** : avancer, tourner avec étalonnage, s'allumer et s'éteindre, une limite de vitesse.
- **Comment vous voulez le piloter** : joysticks, curseurs, boutons, manette de jeu.
:::

Formulez-le comme vous l'expliqueriez à un ami. Vous pouvez écrire dans votre propre langue.

Si quelque chose ne va toujours pas, dites à l'IA ce qu'il faut changer au lieu de tout recommencer.

## Exemples de demandes {#example-requests}

**Une voiture** : « Une voiture avec un Technic Hub : moteur de propulsion sur le port A, le moteur de direction sur le port C sert de servo, les phares sur le port D. Joystick de direction à gauche, accélérateur à droite, un bouton pour les phares. »

**Une grue** : « Une grue avec un Technic Hub : le moteur de rotation est sur le port A, le moteur de la flèche sur le port B, le treuil du crochet sur le port C. Un curseur pour la rotation, des boutons haut/bas pour la flèche, un joystick pour le crochet, la vitesse de la flèche limitée à 50 %. »

**Un train** : « Un train City avec un City Hub : le moteur du train est sur le port A, les phares sur le port B. Un interrupteur à pas pour la vitesse, un compteur de vitesse et un bouton pour les phares. »

## Modifier un profil existant {#change-an-existing-profile}

Ouvrez l'Assistant IA dans un profil que vous avez déjà, même construit à la main, et dites ce qu'il faut changer. L'IA voit les hubs, le tableau de bord et le programme actuels et les modifie :

- « Rends la direction plus lente. »
- « Ajoute un bouton stop. »
- « Copie les commandes sur ma manette. »
- « Limite la vitesse de la flèche à 50 %. »

Vous pouvez aussi poser des questions sur le profil, par exemple « Sur quel port sont les phares ? ». L'IA répond dans le panneau et laisse le profil tel quel.

## Ce qu'il advient de votre profil {#what-happens-to-your-profile}

- L'IA modifie directement le profil ouvert : les hubs, le tableau de bord et le programme sont mis à jour en une fois. Si le programme est en cours d'exécution, il s'arrête.
- L'IA respecte le type de programme du profil : dans un profil Blocs logiques, elle écrit des blocs ; dans un profil Liens rapides, elle écrit des lignes. Elle ne transforme jamais l'un en l'autre. Si une demande nécessite quelque chose que les lignes Liens rapides ne savent pas faire, l'IA vous indique qu'il faut un profil Blocs logiques.
- Les parties du profil que l'IA n'a pas besoin de modifier restent telles quelles.
- **Annuler la dernière modification de l'IA** (le bouton d'annulation dans l'en-tête du panneau) rétablit le profil tel qu'il était avant la dernière modification de l'IA. Appuyez de nouveau pour remonter plus loin, jusqu'à 10 modifications. L'historique d'annulation est effacé lorsque vous ouvrez un autre profil.
- Vous pouvez continuer à modifier le profil vous-même à tout moment.

## Saisie vocale {#voice-input}

Appuyez sur **Dicter** (le bouton du micro) et énoncez votre demande ; le texte apparaît dans le champ, et vous pouvez le corriger avant de l'envoyer. Appuyez de nouveau sur le bouton pour arrêter. Si plusieurs langues sont disponibles, le petit bouton de langue à côté du micro change la langue de dictée ; l'application mémorise votre choix.

| Où | Comment |
|---|---|
| iPhone, iPad, Mac | **Dicter** ; la première fois, autorisez l'accès au micro et la reconnaissance vocale |
| Android | **Dicter** ; la première fois, autorisez l'accès au micro |
| Windows | appuyez sur **Win+H** pour dicter avec la saisie vocale de Windows (le bouton du micro vous le rappelle) |
| Éditeur web | **Dicter** dans Chrome, Edge et Safari ; autorisez l'accès au micro pour le site. Firefox ne propose pas la dictée |

Messages de la saisie vocale :

| Message | Que faire |
|---|---|
| **Autorisez l'accès au micro pour MOCPilot dans les réglages système** | Activez l'accès au micro pour MOCPilot dans les réglages du système |
| **Autorisez la reconnaissance vocale pour MOCPilot dans les réglages système** | Sur un appareil Apple, activez la reconnaissance vocale pour MOCPilot dans les réglages du système |
| **Autorisez l'accès au micro pour ce site dans le navigateur** | Autorisez le micro dans les paramètres du site du navigateur |
| **Rien n'a été entendu** | Appuyez sur **Dicter** et parlez de nouveau |
| **La saisie vocale nécessite une connexion** | Connectez-vous à Internet ou tapez la demande |
| **La reconnaissance vocale n'est pas disponible pour cette langue pour le moment** | Changez la langue de dictée ou tapez la demande |
| **Aucun micro trouvé** / **La saisie vocale n'est pas disponible sur cet appareil** | Tapez la demande |

## Limites {#limits}

- Environ 30 demandes par jour et une limite mensuelle. L'en-tête du panneau indique votre consommation : **Aujourd'hui 5/30 · Mois 12%**.
- Pendant l'essai gratuit, le nombre de demandes à l'IA est limité ; elles reprennent au début de l'abonnement.
- Une demande à la fois : attendez la réponse avant d'envoyer la suivante.
- L'Assistant IA ne fait que créer et modifier des profils. Il ne répond pas aux questions sur d'autres sujets.

## Messages d'erreur {#error-messages}

| Message | Que faire |
|---|---|
| **Le générateur IA n'est pas disponible** / **Impossible de joindre le service d'IA. Vérifiez votre connexion Internet et réessayez.** | Vérifiez votre connexion Internet et rouvrez le panneau |
| **Aucune connexion au service d'IA. Vérifiez votre connexion Internet et réessayez.** | Vérifiez la connexion et renvoyez la demande |
| **La connexion au service d'IA a été perdue…** | Une fois de nouveau en ligne, la réponse apparaît dans le panneau ; sinon, renvoyez la demande |
| **L'IA n'a pas répondu à temps. Envoyez à nouveau la demande.** / **La demande a été perdue, veuillez la renvoyer** | Renvoyez la demande |
| **L'IA n'a pas pu créer un profil fonctionnel pour cette demande. Essayez de la formuler autrement.** | Reformulez la demande : indiquez le hub, les ports et le rôle de chacun |
| **Le profil est trop grand pour être créé en une fois. Demandez moins de choses à la fois.** | Découpez la demande en étapes plus petites |
| **L'IA a refusé cette demande.** | Reformulez la demande pour qu'elle porte sur le profil |
| **Vous avez atteint la limite quotidienne de demandes à l'IA. Réessayez demain.** | Attendez le lendemain ou modifiez le profil vous-même |
| **Vous avez atteint la limite mensuelle de l'IA.** | La limite est remise à zéro le mois suivant |
| **Vous avez utilisé toutes les requêtes IA de l'essai gratuit. Elles reprendront au début de l'abonnement.** | Attendez le début de l'abonnement |
| **L'assistant IA ne fait que créer et modifier des profils. Trop de demandes sur d'autres sujets : réessayez dans une heure.** | Attendez une heure et ne posez que des questions sur le profil |
| **Trop de demandes à l'IA en ce moment. Réessayez dans une minute.** | Réessayez dans une minute |
| **La demande précédente est toujours en cours.** | Attendez la réponse |
| **Le service d'IA est temporairement indisponible. Réessayez plus tard.** / **Vous avez MocPilot Pro. L'assistant IA n'est pas disponible pour le moment, veuillez réessayer plus tard.** | Réessayez plus tard |
| **La réponse concernait un autre profil** | Vous avez ouvert un autre profil pendant que l'IA travaillait, la modification n'a donc pas été appliquée. Rouvrez le premier profil et répétez la demande |
| **Ouvrez d'abord un profil pour le modifier** | Ouvrez le profil dans l'éditeur, puis envoyez la demande |
| **Le profil n'a pas pu être mis à jour dans l'éditeur** / **La modification n'a pas pu être annulée** | Réessayez ; si le problème persiste, fermez puis rouvrez le profil |
