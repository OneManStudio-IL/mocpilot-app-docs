---
id: Movement
title: Bewegung
description: "Bewegungsblöcke steuern einen Roboter mit zwei Motoren am MINDSTORMS-Robot-Inventor- oder SPIKE-Hub: fahren, lenken, Panzersteuerung, Geschwindigkeit, Beschleunigung und Anhalten."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Bewegung

Bewegungsblöcke steuern einen Roboter mit zwei Rädern, von denen jedes einen eigenen Motor hat, als eine Einheit: „10 cm vorwärts fahren“, „1 Umdrehung im Uhrzeigersinn drehen“, „mit 30 nach rechts lenken“. Es sind dieselben Bewegungsblöcke wie in der App LEGO® MINDSTORMS® Robot Inventor. Die Kategorie erscheint als erste in der Palette, wenn das Profil einen [Robot-Inventor- oder SPIKE-Prime-Hub](/docs/Application/Hubs/RobotInventorHub) hat. Alle ihre Blöcke tragen das schwarz-weiße Hub-Symbol.

## So funktioniert die Bewegung {#how-movement-works}

- **Fahrmotoren.** Standardmäßig ist das linke Rad an Port **A** und das rechte Rad an Port **B**. Mit [Fahrmotoren einstellen auf](#block_ri_move_set_pair) wählen Sie andere Ports. Die beiden Motoren sind am Roboter einander zugewandt, deshalb dreht MOCPilot den rechten in die Gegenrichtung: Eine positive Geschwindigkeit fährt den Roboter immer vorwärts.
- **Fahrgeschwindigkeit.** Blöcke ohne eigene Geschwindigkeit verwenden die Fahrgeschwindigkeit: **50 %**, bis [Fahrgeschwindigkeit einstellen auf](#block_ri_move_set_speed) sie ändert.
- **Lenkung** ist eine Zahl von −100 bis 100. Bei **0** fährt der Roboter geradeaus. Positive Werte lenken nach rechts, negative nach links: Das innere Rad wird umso langsamer, je näher die Lenkung an ±100 kommt (bei 50 dreht es mit halber Geschwindigkeit). Bei **100** oder **−100** drehen sich die Räder in entgegengesetzte Richtungen und der Roboter dreht sich auf der Stelle.
- **Einheiten.** Strecken können in `cm`, `Zoll`, `umdrehungen` oder `grad` der Motoren angegeben werden, viele Blöcke nehmen auch `sekunden`. Für Zentimeter und Zoll gilt die Strecke pro Motorumdrehung: standardmäßig **17,5 cm** (das Robot-Inventor-Rad), geändert mit [1 Motorumdrehung einstellen auf](#block_ri_move_set_distance). Eine negative Strecke fährt in die andere Richtung.
- **Warten.** Blöcke mit einer Strecke (`fahren … um …`) warten, bis der Roboter so weit gefahren ist. Blöcke, die mit **Fahren starten** beginnen, kehren sofort zurück: Der Roboter fährt weiter bis **Fahren stoppen** oder bis zu einem anderen Bewegungsblock.

## Bewegungseinstellungen {#movement-settings}

### `Fahrmotoren einstellen auf … …` (Anfänger) {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
Wählt die Ports des Motors für das linke und das rechte Rad. Standard: **A** und **B**. Die beiden Ports müssen verschieden sein.

### `Fahrgeschwindigkeit einstellen auf … %` (Anfänger) {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
Legt die Geschwindigkeit (von −100 bis 100 %) für die Bewegungsblöcke fest, die keine eigene Geschwindigkeit haben. Standard: 50 %. Dieser Block startet die Motoren nicht.

### `1 Motorumdrehung einstellen auf … cm / Zoll Strecke` (Fortgeschritten) {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
Teilt MOCPilot mit, wie weit der Roboter bei einer Motorumdrehung fährt, damit Strecken in Zentimetern und Zoll stimmen. Standard: 17,5 cm. Messen Sie Ihren Roboter aus: Lassen Sie ihn **1 Umdrehung vorwärts fahren** und messen Sie die Strecke. Der Wert 0 wird ignoriert.

### `Fahrbeschleunigung einstellen auf …` (Guru) {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
Legt fest, wie schnell die Fahrmotoren beschleunigen und abbremsen.

- Optionen: `standard`, `schnell` (0,1 s), `ausgeglichen` (0,35 s), `sanft` (0,8 s), `langsam` (1,2 s), `sehr langsam` (2 s): die Zeit vom Stillstand bis zur vollen Geschwindigkeit.

### `Fahrmotoren einstellen auf … beim anhalten` (Fortgeschritten) {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
Legt fest, was die Motoren tun, wenn der Roboter anhält.

- `Ausrollen`: Die Motoren laufen frei und der Roboter rollt aus.
- `Bremsen` (Standard): Die Motoren bremsen.
- `Position halten`: Die Motoren halten ihre Position aktiv, auch wenn Sie den Roboter schieben.

## Fahren {#moving}

### `fahren … um …` (Anfänger) {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
Bewegt den Roboter mit der Fahrgeschwindigkeit und wartet, bis er fertig ist.

- Richtung: `vorwärts`, `rückwärts`, `im uhrzeigersinn`, `gegen den Uhrzeigersinn` (die letzten beiden drehen den Roboter auf der Stelle).
- Einheiten: `cm`, `Zoll`, `umdrehungen`, `grad`, `sekunden`. Standard: 10 cm.

### `fahren … um …` (mit Lenkung) (Anfänger) {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
Bewegt den Roboter mit der angegebenen Lenkung (−100 bis 100) und der Fahrgeschwindigkeit und wartet, bis er fertig ist. Mit Lenkung 30 fährt der Roboter eine Kurve nach rechts.

- Einheiten: `cm`, `Zoll`, `umdrehungen`, `grad`, `sekunden`.

### `fahren … um … bei … % geschwindigkeit` (Fortgeschritten) {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
Wie oben, aber mit eigener Geschwindigkeit statt der Fahrgeschwindigkeit.

- Einheiten: `cm`, `Zoll`, `umdrehungen`, `grad`.

### `fahren für … bei … … % geschwindigkeit` (Fortgeschritten) {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
Panzersteuerung über eine Strecke: Legt die Geschwindigkeit des linken und des rechten Rads getrennt fest (je −100 bis 100 %) und wartet, bis der Roboter so weit gefahren ist.

- Einheiten: `cm`, `Zoll`, `umdrehungen`, `grad`, `sekunden`.

### `Fahren starten …` (Anfänger) {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
Beginnt mit der angegebenen Lenkung und der Fahrgeschwindigkeit zu fahren und geht sofort zum nächsten Block weiter.

### `Fahren starten … bei … % geschwindigkeit` (Fortgeschritten) {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
Beginnt mit der angegebenen Lenkung und Geschwindigkeit zu fahren.

- Typische Verwendung: Setzen Sie einen Schieberegler des Dashboards in das Lenkungsfeld und ein Pedal in das Geschwindigkeitsfeld.

### `Fahren starten … bei … % Leistung` (Guru) {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
Wie der Block oben, legt aber die **Leistung** der Motoren statt einer geregelten Geschwindigkeit fest: Die Motoren versuchen nicht, die Geschwindigkeit zu halten, wenn der Roboter bergauf fährt oder eine Last trägt.

### `Fahren starten mit … … % geschwindigkeit` (Fortgeschritten) {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
Panzersteuerung: Startet das linke und das rechte Rad mit jeweils eigener Geschwindigkeit.

### `Fahren starten mit … … % Leistung` (Guru) {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
Panzersteuerung mit der Motorleistung jedes Rads statt einer geregelten Geschwindigkeit.

### `Fahren stoppen` (Anfänger) {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
Stoppt beide Fahrmotoren so, wie es **Fahrmotoren einstellen auf … beim anhalten** festlegt (standardmäßig bremsen sie).

### `wurde die Fahrt unterbrochen?` (Guru) {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
`true`, wenn die letzte Fahrt nicht zu Ende kam: Ein anderer Bewegungsblock oder **Fahren stoppen** hat sie abgebrochen.
