---
id: PhoneSensors
title: Capteurs du téléphone
description: "Utilisez l'inclinaison et l'accélération de votre téléphone ou de votre tablette pour piloter un modèle."
---

# Capteurs du téléphone {#phone-sensors}

Votre téléphone ou votre tablette possède des capteurs de mouvement. MOCPilot peut s'en servir comme entrée : inclinez le téléphone pour tourner, secouez-le pour déclencher une action, ou affichez la batterie du téléphone sur le tableau de bord.

Les capteurs du téléphone sont disponibles en **Blocs logiques** (catégorie **Capteurs**). Liens rapides utilise comme entrées les commandes du tableau de bord, la manette de jeu et les capteurs des hubs.

## Blocs de capteurs {#sensor-blocks}

| Bloc | Donne |
|---|---|
| `Inclinaison de l'appareil` (tangage, roulis) | l'inclinaison de l'appareil en degrés |
| `Accélération de l'appareil` (x, y, z) | l'accélération de l'appareil, en m/s² |
| `Accéléromètre de l'appareil` (x, y, z) | les valeurs brutes de l'accéléromètre, en m/s² |
| `% batterie de l'appareil` | le niveau de batterie de l'appareil |

Détails : [Capteurs](/docs/Application/BlockBuilder/Blocks/Sensors).

## Exemple : tourner en inclinant le téléphone {#example-steer-by-tilting-the-phone}

```text
lorsque le programme commence
répéter toujours
    Aller à la position  (Hub 1, port B)  ←  Inclinaison de l'appareil (roulis) × 2
```

Utilisez pour la direction un moteur à position absolue (un moteur angulaire).

Tenez le téléphone en paysage comme un volant. Limitez la valeur avec les opérateurs *entre* ou *min/max* pour que la direction ne force pas contre ses butées.

## Astuces {#tips}

- Verrouillez la rotation de l'écran de l'appareil, sinon le système risque de faire pivoter l'écran pendant que vous l'inclinez.
- Les ordinateurs n'ont pas de capteurs de mouvement ; les blocs y donnent zéro.
- Pour afficher l'inclinaison sur le tableau de bord, envoyez les angles vers un **Moniteur inclinable** (thèmes payants). Voir [Indicateurs et moniteurs](/docs/Application/Dashboard/Indicators).
- Les hubs ont aussi leurs propres capteurs d'inclinaison : voir les blocs de capteurs des hubs et l'entrée **Hub** de Liens rapides.
