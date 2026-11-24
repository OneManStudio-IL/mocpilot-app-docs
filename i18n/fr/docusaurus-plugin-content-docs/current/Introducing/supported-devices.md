---
id: SupportedDevices
title: Hubs, moteurs et capteurs compatibles
description: "Les hubs, moteurs et capteurs qui fonctionnent avec MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Appareils compatibles {#supported-devices}

MOCPilot fonctionne avec les hubs, moteurs et capteurs ci-dessous. Chaque hub fonctionne avec les deux éditeurs de programme, [Liens rapides](/docs/Application/Links/LinksIntroducing) et [Blocs logiques](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Hubs {#hubs}

<SupportedHubsTable />

Remarques :

- Un profil dispose de 5 emplacements de hub : 2 sont gratuits, les 3 autres s'obtiennent avec l'achat d'un emplacement de hub supplémentaire ou avec [MocPilot Pro](/docs/Application/Account/Pro).
- Les hubs **Mould King** ne font que recevoir des commandes (pas de capteurs, pas de retour d'information). Un seul type de Mould King peut être utilisé dans un profil : jusqu'à 3 hubs Mould King 4.0 ou 1 Mould King 6.0.
- Le hub **Robot Inventor** (LEGO® Large Hub) et le hub **SPIKE Prime** (bêta, firmware SPIKE Legacy) utilisent le Bluetooth classique et ne sont pas disponibles sur iPhone et iPad. Sous Windows et Mac, ils se connectent aussi avec un câble USB. Voir [Hub MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).
- Le hub **SPIKE Essential** (bêta) se connecte en Bluetooth Low Energy, comme le Technic Hub : 2 ports, une lumière, l'inclinaison et l'accélération. Il nécessite lui aussi le firmware SPIKE Legacy ; les hubs équipés du firmware SPIKE App 3 ne sont pas encore pris en charge.
- Les hubs SPIKE Prime et SPIKE Essential sont signalés **Beta** dans l'application : leur prise en charge est récente et n'a pas encore été vérifiée sur tous les hubs.
- La mise à jour et la récupération du firmware sont disponibles pour le Technic Hub, le Technic Move Hub, le BOOST Move Hub et le City Hub. Voir [Mise à jour du firmware](/docs/Application/Hubs/FirmwareUpdating).
- Ce que chaque hub sait faire en plus des moteurs et des lumières est décrit dans [Fonctions propres aux hubs](/docs/Application/Hubs/HubFunctions).

## Moteurs {#motors}

<SupportedMotorsTable />

Les moteurs équipés d'un encodeur (moteurs angulaires, Technic L et XL) renvoient leur vitesse et leur position : ils peuvent donc servir de servomoteurs, tourner d'un nombre de degrés donné et rejoindre des positions. Les moteurs simples (moteur de train, moteur linéaire moyen simple) n'acceptent que la vitesse.

## Capteurs et lumières {#sensors-and-lights}

<SupportedSensorsTable />

Le **capteur de force** fonctionne avec les hubs Robot Inventor et SPIKE Prime : il mesure la force avec laquelle on appuie dessus (0–10 N) et indique s'il est pressé, appuyé fort ou relâché. Voir [Blocs Robot Inventor : capteur de force](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor). Il ne fonctionne pas avec les hubs Powered Up (Technic Hub, City Hub, BOOST).

Les capteurs intégrés des hubs (batterie, inclinaison, accélération, température) et les capteurs de votre téléphone ou de votre tablette sont également utilisables. Voir [Capteurs du téléphone](/docs/Application/Dashboard/PhoneSensors).
