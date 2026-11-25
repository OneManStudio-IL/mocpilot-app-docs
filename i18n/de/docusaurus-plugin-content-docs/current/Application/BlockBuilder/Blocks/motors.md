---
id: Motors
title: Motoren
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Motoren {#motors}

Motorblöcke starten, stoppen und positionieren Motoren an den Hub-Ports und stellen ein, wie sie sich bewegen. Die Kategorie erscheint, wenn ein Hub im Profil Motor-Ports hat. In jedem Block wählen Sie den Hub und einen oder mehrere Ports.

Manche Blöcke brauchen einen Motor mit eingebautem Drehsensor (Encoder), etwa die Technic-Winkelmotoren, und einen Hub, der ihn steuern kann. Diese Blöcke sind mit „Encoder-Motoren“ gekennzeichnet. Für SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 und Mould-King-Hubs sind sie nicht verfügbar. Der Technic Move Hub funktioniert ebenfalls mit diesen Blöcken (seine Motoren sind die Ports `A`, `B` und `C`) und hat außerdem eigene Fahrzeugprofil-Blöcke: siehe [Technic Move Hub](#technic-move-hub) am Ende dieser Seite.

## Motoren laufen lassen {#running-motors}

### `Geschwindigkeit einstellen auf …` (Fortgeschritten) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Legt die Geschwindigkeit (von −100 bis 100 %) fest, die **Motor starten** und **laufen … für** an diesen Ports verwenden. Dieser Block startet den Motor nicht selbst.

### `Motor starten …` (Anfänger) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Startet den Motor in der gewählten Richtung mit der Geschwindigkeit, die mit **Geschwindigkeit einstellen auf** festgelegt wurde.

- Richtung: im oder gegen den Uhrzeigersinn

### `Motor starten bei … % Geschwindigkeit` (Anfänger) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Startet den Motor mit der angegebenen Geschwindigkeit von −100 bis 100 %. Eine negative Geschwindigkeit dreht ihn in die andere Richtung.

- Typische Verwendung: mit einem Joystick oder Schieberegler fahren: Setzen Sie den Wert des Steuerelements in das Geschwindigkeitsfeld.

### `Motor stoppen` (Anfänger) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Stoppt den Motor.

### `laufen … für …` (Fortgeschritten) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Lässt den Motor in der gewählten Richtung eine Anzahl Umdrehungen, Grad oder Sekunden laufen.

- Richtung: im oder gegen den Uhrzeigersinn
- Einheiten: `Umdrehungen`, `Grad`, `Sekunden`
- Nur Encoder-Motoren.

### `laufen für … bei … % Geschwindigkeit` (Fortgeschritten) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Lässt den Motor eine Anzahl Umdrehungen, Grad oder Sekunden mit der angegebenen Geschwindigkeit laufen.

- Einheiten: `Umdrehungen`, `Grad`, `Sekunden`
- Nur Encoder-Motoren.

## Position {#position}

### `gehen … zur Position …` (Fortgeschritten) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Dreht den Motor auf eine absolute Position (die eigene Nullmarke des Motors).

- Weg: `kürzester Weg`, `im Uhrzeigersinn`, `gegen den Uhrzeigersinn`
- Nur Encoder-Motoren.

### `zur relativen Position gehen … bei … % Geschwindigkeit` (Anfänger) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Dreht den Motor auf eine Position in Grad, gezählt ab dem Punkt, der mit **relative Position einstellen** festgelegt wurde.

- Typische Verwendung: Lenken mit einem Servo, wobei der Joystickwert den Winkel vorgibt.
- Nur Encoder-Motoren; beim BuWizz 3 verwenden Sie den folgenden Block.

### `zur relativen Position gehen …` (BuWizz 3) (Anfänger) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Die BuWizz-3-Version des obigen Blocks, ohne Geschwindigkeitseingabe.

- Hubs: BuWizz 3, mit Encoder-Motoren.

### `relative Position einstellen …` (Anfänger) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Erklärt die aktuelle Position des Motors zum angegebenen Wert. Relative Positionen werden ab diesem Punkt gezählt.

- Nur Encoder-Motoren.

### `Zahnstange kalibrieren … Mitte … Grad …` (Anfänger) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Ermittelt die Mitte und den Stellweg einer Lenkzahnstange.

- Der Motor dreht die Zahnstange zu beiden Enden, misst, wie weit sie sich bewegen kann, und schreibt das Ergebnis in die beiden Variablen, die Sie in die Eingabefelder setzen: die Mittelposition und den Bereich in Grad (von der Mitte bis zu einem Ende). Die Zahnstange bleibt in der Mitte stehen, und dieser Punkt wird zur relativen Position 0: Lenken Sie mit **zur relativen Position gehen** `range × joystick / 100`.
- Die Lenkung muss an beiden Enden feste mechanische Anschläge haben (das Ende der Zahnstange oder des Getriebes).
- Nur Encoder-Motoren.

## Motoreinstellungen {#motor-settings}

### `Motor einstellen auf … beim Anhalten` (Guru) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Legt fest, was der Motor tut, wenn er stoppt.

- `Bremsen`: hält schnell an.
- `Position halten`: hält seine Position aktiv (nützlich für die Lenkung).
- `Ausrollen`: läuft frei aus.
- Nur Encoder-Motoren.

### `Blockierungserkennung aktivieren …` (Guru) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Schaltet die Blockiererkennung ein oder aus. Ist sie eingeschaltet, gibt ein blockierter Motor auf, statt weiterzudrücken, sodass ein Block, der auf den Motor wartet, fertig werden kann.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (der Block trägt das Hub-Symbol).

### `Beschleunigung einstellen auf …` (Guru) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Legt fest, wie schnell der Motor beschleunigt.

- Optionen: `Standard`, `schnell`, `ausgeglichen`, `sanft`, `langsam`, `sehr langsam`
- Nur Encoder-Motoren.

### `Verzögerung einstellen auf …` (Guru) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Legt fest, wie schnell der Motor abbremst.

- Optionen: `Standard`, `schnell`, `ausgeglichen`, `sanft`, `langsam`, `sehr langsam`
- Nur Encoder-Motoren.

## Motorwerte {#motor-values}

### `Position` (Anfänger) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Liefert die absolute Position des Motors.

- Nur Encoder-Motoren.

### `relative Position` (Anfänger) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Liefert die relative Position des Motors in Grad.

- Nur Encoder-Motoren.

### `Geschwindigkeit` (Anfänger) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Liefert die aktuelle Geschwindigkeit des Motors.

### `Leistung` (Fortgeschritten) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Liefert die aktuelle Leistung des Motors.

- Hubs: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (der Block trägt das Hub-Symbol).

## Robot Inventor {#robot-inventor-motors}

Diese Blöcke stammen aus der Robot-Inventor-App und funktionieren nur mit den [Hubs von MINDSTORMS Robot Inventor und SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). Sie tragen das Hub-Symbol. Um einen zweirädrigen Roboter zu fahren, verwenden Sie die Blöcke der Kategorie [Bewegung](/docs/Application/BlockBuilder/Blocks/Movement).

### `Motor starten bei … % Leistung` (Fortgeschritten) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Startet die Motoren an den gewählten Ports mit der angegebenen Leistung von −100 bis 100 % (Standard 75 %). Anders als bei **Motor starten bei … % Geschwindigkeit** hält der Motor keine geregelte Geschwindigkeit: Unter Last wird er langsamer, wie ein Motor ohne Encoder.

### `wurde der Motor unterbrochen?` (Guru) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true`, wenn der letzte Befehl des Motors an diesem Port nicht zu Ende kam, weil ein anderer Motorblock am selben Port ihn abgebrochen hat.

## Technic Move Hub {#technic-move-hub}

Der Technic Move Hub (in den ferngesteuerten LEGO® Technic-Autos) lässt sich auf zwei Arten programmieren:

- **Port-Blöcke** (die Motorblöcke oben). Die drei eingebauten Motoren des Hubs sind Ports: `A` und `B` sind die Antriebsmotoren, `C` ist der Lenkmotor. Es sind Encoder-Motoren, daher funktioniert jeder Motorblock oben mit ihnen, außer **Blockierungserkennung aktivieren** und **Leistung**. In den LEGO-Automodellen dreht sich `A` zum Vorwärtsfahren andersherum als `B`, und die Lenkung an `C` hat Endanschläge: Führen Sie einmal **Zahnstange kalibrieren** an `C` aus und lenken Sie dann mit **zur relativen Position gehen** an `C` (0 ist die Mitte). Die sechs Lichter des Hubs sind die Ports `1`–`6` der [Lichtblöcke](/docs/Application/BlockBuilder/Blocks/Light), und seine Blöcke für [Neigung, Beschleunigung und Ausrichtung](/docs/Application/BlockBuilder/Blocks/Sensors#hub-tilt-and-orientation) funktionieren wie beim Technic Hub.
- **Fahrzeugprofil-Blöcke** (unten): Fahren, Lenken, Bremsen, Leistungsimpuls, Licht und Leistungsmodus, über die in den Hub geladene Fahrzeugkonfiguration. Siehe [Konfigurationen des Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

:::caution Nur eine Art pro Hub
Die Profilblöcke und die Port-Blöcke steuern dieselben Motoren und Lichter: Der letzte Befehl gewinnt, und ein Profilblock übernimmt die Motoren und Lichter wieder. Die Programmprüfung im Blockeditor warnt davor bei jedem Port-Block dieses Hubs: „… wird sowohl von den Blöcken seines Fahrzeugprofils als auch von Port-Blöcken gesteuert“.
:::

### `Starte Motoren bei … % Geschwindigkeit` (Anfänger) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Startet die Antriebsmotoren mit der angegebenen Geschwindigkeit.

### `Leistungsimpuls` (Anfänger) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Sendet einen Kraftimpuls an die Antriebsmotoren.

- Typische Verwendung: ein kurzer Schub vor den nächsten Blöcken.

### `Motoren stoppen` (Anfänger) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Stoppt die Antriebsmotoren.

### `Setze die Motorbremse …` (Anfänger) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Schaltet die Bremse der Antriebsmotoren ein oder aus.

- Optionen: `aus`, `auf`

### `Setze die Lenkstange auf …` (Anfänger) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Dreht die Lenkung auf die angegebene Position.

### `Lenkstangen kalibrieren` (Anfänger) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Kalibriert die Lenkung mit dem eigenen Algorithmus des Hubs, der den Lenkbereich automatisch ermittelt.

- Die Lenkung muss feste mechanische Anschläge haben (zum Beispiel die Enden der Lenkzahnstange).
