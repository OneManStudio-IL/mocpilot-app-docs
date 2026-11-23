---
id: DashboardControllers
title: Bildschirm-Controller
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Bildschirm-Controller {#dashboard-controllers}

Diese Blöcke lesen die Steuerelemente auf dem Dashboard, reagieren, wenn Sie sie benutzen, und ändern ihr Aussehen. Sie befinden sich in der Kategorie **Bildschirm-Controller**, die erscheint, sobald das Dashboard ein Steuerelement hat. Jeder Steuerelementtyp bringt eigene Blöcke mit; im Block wählen Sie das Steuerelement über seinen Namen, etwa *BTN1* oder *GEAR1*.

Verwendete Bereiche: Die meisten analogen Werte reichen von 0 bis 100 oder von −100 bis 100, wenn null in der Mitte liegt.

Auf dieser Seite:

- [Blöcke für alle Steuerelemente](#blocks-for-all-controls): Farbe, Interaktivität und Töne
- [Tasten und Schalter](#buttons-and-switches): Taste, Schalter, Schritt-Schalter
- [Joysticks und Steuerkreuze](#joysticks-and-d-pads)
- [Schieberegler und Drehknöpfe](#sliders-and-knobs): Schieberegler, Drehknopf
- [Monitore](#monitor-blocks)
- [Lenkrad und Pedale](#steering-wheel-and-pedals)
- [Weitere spezielle Steuerelemente](#other-special-controls): Getriebe, Handbremse, Blinker, Verteilergetriebe, Fahrschalter

## Blöcke für alle Steuerelemente {#blocks-for-all-controls}

### `Farbe des Steuerelements setzen` (Fortgeschritten) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*setze [Steuerelement] Farbe zu [Farbe]*: ändert die Akzentfarbe eines Steuerelements.

- Typ: Befehlsblock
- Funktioniert mit den Steuerelementen, die eine Akzentfarbe haben (nicht mit Lenkrad oder Pedalen)
- Typische Verwendung: einen Zustand anzeigen, zum Beispiel eine Taste, die bei schwachem Akku rot wird

### `Interaktivität des Steuerelements setzen` (Fortgeschritten) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*[aktivieren / deaktivieren] [Steuerelement] Interaktivität*: Ein deaktiviertes Steuerelement reagiert nicht auf Berührungen.

- Typ: Befehlsblock
- Typische Verwendung: ein Steuerelement eine Zeit lang sperren, zum Beispiel den Gashebel bis zum Abschluss einer Startprüfung

### `Ton eines Steuerelements` (Anfänger) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*Ton [Ton] von [Steuerelement]*: einer der Töne eines Steuerelements, für die Abspielblöcke der Kategorie **Töne**.

- Typ: Werteblock
- Erscheint, wenn das Dashboard ein Steuerelement mit Tönen hat: das [Lenkrad](/docs/Application/Dashboard/SpecialControls#steering-wheel) (Hupen von Auto, Lkw und Sportwagen) oder die [Pedale](/docs/Application/Dashboard/SpecialControls#pedals) (Bremsen von Auto, Sportwagen und Lkw, Rückfahrwarner)
- Der Ton wird nur abgespielt, wenn die Einstellung **Soundeffekte** des Steuerelements und der App-Ton eingeschaltet sind

## Tasten und Schalter {#buttons-and-switches}

### Tastenblöcke {#button-blocks}

#### `Tasten-Ereignis` (Anfänger) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*wenn der Knopf [Steuerelement] [gedrückt / losgelassen]*: führt das Skript aus, wenn die Taste gedrückt oder losgelassen wird.

- Typ: Ereignisblock

#### `Tastenwert (boolesch)` (Anfänger) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*Taste [Steuerelement] [gedrückt / losgelassen]*: ob die Taste gerade gedrückt oder losgelassen ist.

- Typ: Werteblock, `true` / `false`

### Schalterblöcke {#switch-blocks}

#### `Schalter-Ereignis` (Anfänger) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*wenn Schalter [Steuerelement] ist umgeschaltet [an / aus]*: führt das Skript aus, wenn der Schalter ein- oder ausgeschaltet wird.

- Typ: Ereignisblock

#### `Schalterwert (boolesch)` (Anfänger) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*Schalter [Steuerelement] [an / aus]*: ob der Schalter an oder aus ist.

- Typ: Werteblock, `true` / `false`

### Schritt-Schalter-Blöcke {#stepper-blocks}

Diese Blöcke funktionieren mit dem Schritt-Schalter und dem vertikalen Schritt-Schalter.

#### `Schritt-Schalter-Ereignis` (Anfänger) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*wenn Schritt-Schalter [Steuerelement] [irgendein / Zurücksetzen / minus / plus] ist [gedrückt / losgelassen]*: führt das Skript aus, wenn eine Taste des Schritt-Schalters gedrückt oder losgelassen wird (**irgendein** steht für jede beliebige davon).

- Typ: Ereignisblock

#### `Schritt-Schalter-Wert (Zahl)` (Anfänger) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*Stellschalter [Steuerelement]*: die Nummer der aktuellen Stufe.

- Typ: Werteblock

## Joysticks und Steuerkreuze {#joysticks-and-d-pads}

### Joystick-Blöcke {#joystick-blocks}

#### `Joystick-Ereignis` (Anfänger) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*wenn Joystick [Steuerelement] ist [hoch / runter / links / rechts / bewegt / losgelassen]*: führt das Skript aus, wenn der Stick in eine Richtung gedrückt, überhaupt bewegt oder losgelassen wird.

- Typ: Ereignisblock

#### `Joystick-Wert (Zahl)` (Anfänger) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*Joystick [Steuerelement] [X-Achse / Y-Achse]*: die Stellung des Sticks auf einer Achse, von −100 bis 100; die Mitte ist 0.

- Typ: Werteblock

#### `Joystick-Wert (boolesch)` (Anfänger) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*ist Joystick [Steuerelement] [gedrückt / losgelassen]*: ob ein Finger auf dem Joystick liegt.

- Typ: Werteblock, `true` / `false`

### Steuerkreuz-Blöcke {#d-pad-blocks}

#### `Steuerkreuz-Ereignis` (Anfänger) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*wenn Steuerkreuz [Steuerelement] [hoch / runter / links / rechts] Taste [gedrückt / losgelassen]*: führt das Skript aus, wenn eine Taste des Steuerkreuzes gedrückt oder losgelassen wird.

- Typ: Ereignisblock

#### `Steuerkreuz-Wert (boolesch)` (Anfänger) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*Steuerkreuz [Steuerelement] [hoch / runter / links / rechts] Taste [gedrückt / losgelassen]*: ob eine Taste des Steuerkreuzes gerade gedrückt oder losgelassen ist.

- Typ: Werteblock, `true` / `false`

## Schieberegler und Drehknöpfe {#sliders-and-knobs}

### Schieberegler-Blöcke {#slider-blocks}

Diese Blöcke funktionieren mit dem Schieberegler und dem vertikalen Schieberegler.

#### `Schieberegler-Ereignis` (Anfänger) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*wenn Schieberegler [Steuerelement] ist [niedrig / hoch / bewegt / losgelassen]*: führt das Skript aus, wenn der Griff das untere oder obere Ende erreicht, sich bewegt oder losgelassen wird.

- Typ: Ereignisblock

#### `Schieberegler-Wert (Zahl)` (Anfänger) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*Schieberegler [Steuerelement]*: die Stellung des Griffs, von 0 bis 100 oder von −100 bis 100 mit **Negative Werte**.

- Typ: Werteblock

### Drehknopf-Blöcke {#rotary-knob-blocks}

Blöcke des [Drehknopfs](/docs/Application/Dashboard/ControlTypes#rotary-knob) der kostenpflichtigen Themes.

#### `Drehknopf-Ereignis` (Anfänger) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*wenn Drehregler [Steuerelement] ist [gedreht / gedrückt / losgelassen / auf Minimum gedreht / auf Maximum gedreht]*: führt das Skript aus, wenn der Knopf gedreht, berührt, losgelassen wird oder eines seiner Enden erreicht.

- Typ: Ereignisblock

#### `Drehknopf-Wert (Zahl)` (Anfänger) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*Drehreglerwert [Steuerelement]*: die Stellung des Knopfs, von 0 bis 100 oder von −100 bis 100 mit **Null in der Mitte (-100..100)**.

- Typ: Werteblock

#### `Drehknopf-Wert (boolesch)` (Anfänger) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*ist Drehregler [Steuerelement] [gedrückt / auf Minimum / auf Maximum] ?*: ob ein Finger auf dem Knopf liegt oder der Knopf an einem seiner Enden steht.

- Typ: Werteblock, `true` / `false`

## Monitore {#monitor-blocks}

Blöcke der [Monitore](/docs/Application/Dashboard/Indicators).

### `Monitor anzeigen` (Anfänger) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*zeigen [Wert] auf [Steuerelement] Monitor*: zeigt Text oder einen Wert auf einem **Monitor** an.

- Typ: Befehlsblock
- Typische Verwendung: den Akkustand, einen Motorwinkel, das an einem Hub-Port angeschlossene Gerät oder den Namen eines Modus anzeigen

### `Monitorwert setzen` (Anfänger) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*setze [Wert] auf [Steuerelement] Monitor*: setzt den Wert eines Monitors **Batteriestand** oder **Geschwindigkeitsmesser**.

- Typ: Befehlsblock

### `Neigungsmonitor-Wert setzen` (Anfänger) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*setze [Wert] auf [Steuerelement] [Nicken / Rollen] Monitor*: setzt das Nicken oder Rollen, das ein **Neigungsmonitor** anzeigt.

- Typ: Befehlsblock

## Lenkrad und Pedale {#steering-wheel-and-pedals}

### Lenkrad-Blöcke {#steering-wheel-blocks}

Blöcke des [Lenkrads](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Lenkrad-Ereignis` (Anfänger) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*wenn Lenkrad [Steuerelement] ist [bewegt / gedrückt / losgelassen]*: führt das Skript aus, wenn sich das Lenkrad dreht oder wenn Sie es berühren oder loslassen.

- Typ: Ereignisblock

#### `Lenkrad-Wert (Zahl)` (Anfänger) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*Lenkrad [Steuerelement]*: der Lenkwinkel, von −100 (voll links) bis 100 (voll rechts).

- Typ: Werteblock

#### `Lenkrad-Wert (boolesch)` (Anfänger) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*Lenkrad [Steuerelement] [gedrückt / losgelassen]*: ob ein Finger auf dem Lenkrad liegt.

- Typ: Werteblock, `true` / `false`

### Pedal-Blöcke {#pedals-blocks}

Blöcke der [Pedale](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Pedal-Ereignis` (Anfänger) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*wenn Pedale [Steuerelement] [irgendein / Bremse / Beschleunigung] ist [bewegt / gedrückt / losgelassen]*: führt das Skript aus, wenn sich ein Pedal bewegt, gedrückt oder losgelassen wird.

- Typ: Ereignisblock

#### `Pedal-Wert (Zahl)` (Anfänger) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*Pedale [Steuerelement] [Beschleunigung / Bremse]*: wie weit Gas- oder Bremspedal gedrückt ist, von 0 bis 100.

- Typ: Werteblock

#### `Pedal-Wert (boolesch)` (Anfänger) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*Pedal [Steuerelement] [Beschleunigung / Bremse] [gedrückt / losgelassen]*: ob ein Pedal gedrückt ist.

- Typ: Werteblock, `true` / `false`

## Weitere spezielle Steuerelemente {#other-special-controls}

Blöcke der weiteren [speziellen Steuerelemente](/docs/Application/Dashboard/SpecialControls).

### Getriebe-Blöcke {#gearbox-blocks}

Blöcke des [Schalt- und Automatikgetriebes](/docs/Application/Dashboard/SpecialControls#gear-shifter). Gangwerte: Schaltgetriebe −1 = R, 0 = N, 1…6 = Vorwärtsgänge; Automatik −2 = P, −1 = R, 0 = N, 1 = D.

#### `Getriebe-Ereignis` (Anfänger) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*wenn Schaltgetriebe [Steuerelement] [schaltet / schaltet hoch / schaltet runter / schaltet in den Leerlauf / legt den Rückwärtsgang ein / schaltet in Parken]*: führt das Skript aus, wenn sich der Gang ändert. **schaltet hoch** und **schaltet runter** bedeuten einen Wechsel zu einem höheren bzw. niedrigeren Wert.

- Typ: Ereignisblock

#### `Gang` (Anfänger) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*Gang [Steuerelement]*: der eingelegte Gang (siehe die Werte oben).

- Typ: Werteblock

#### `Getriebezustand (boolesch)` (Anfänger) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*ist Schaltgetriebe [Steuerelement] [im Leerlauf / im Rückwärtsgang / in einem Vorwärtsgang / in Parken] ?*

- Typ: Werteblock, `true` / `false`
- **in einem Vorwärtsgang** ist in jedem Vorwärtsgang des Schaltgetriebes und in D der Automatik wahr

#### `Anzahl der Gänge` (Fortgeschritten) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*Gänge von [Steuerelement]*: die Einstellung **Anzahl der Gänge** des Getriebes.

- Typ: Werteblock
- Typische Verwendung: das Feld *von* im Block *fahren* des Simulators

### Handbremsen-Blöcke {#handbrake-blocks}

Blöcke der [Handbremse](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Handbremsen-Ereignis` (Anfänger) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*wenn Handbremse [Steuerelement] ist [gezogen / eingerastet / gelöst / losgelassen]*: führt das Skript aus, wenn der Hebel gezogen, eingerastet, gelöst oder losgelassen wird.

- Typ: Ereignisblock

#### `Handbremskraft` (Anfänger) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*Handbremskraft [Steuerelement]*: wie weit der Hebel gezogen ist, von 0 bis 100.

- Typ: Werteblock

#### `Handbremszustand (boolesch)` (Anfänger) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*ist Handbremse [Steuerelement] [eingerastet / gelöst / gezogen] ?* **gezogen** ist wahr, solange die Kraft über 0 liegt.

- Typ: Werteblock, `true` / `false`

### Blinker-Blöcke {#turn-signals-blocks}

Blöcke der [Blinker](/docs/Application/Dashboard/SpecialControls#turn-signals). Sie sehen den Dauerzustand der Blinker, ohne das Blinken.

#### `Blinker-Ereignis` (Anfänger) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*wenn Blinker [Steuerelement] [linker Blinker / rechter Blinker / Licht] [geht an / geht aus]*

- Typ: Ereignisblock

#### `Blinkerzustand (boolesch)` (Anfänger) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*Blinker [Steuerelement] [linker Blinker / rechter Blinker / Licht] ist an ?*

- Typ: Werteblock, `true` / `false`

### Verteilergetriebe-Blöcke {#transfer-case-blocks}

Blöcke des [Verteilergetriebes](/docs/Application/Dashboard/SpecialControls#transfer-case). Die zweite Liste im Ereignis- und im Zustandsblock bietet dieselbe Auswahl:

- **2H**, **4H**, **N**, **4L**: Der Wählhebel steht in dieser Stellung;
- **Allradantrieb**: Der Wählhebel steht auf 4H oder 4L;
- **Geländeuntersetzung**: Der Wählhebel steht auf 4L;
- **Sperre vorn**, **Mittelsperre**, **Sperre hinten**: Die Differenzialsperre ist eingelegt.

#### `Verteilergetriebe-Ereignis` (Anfänger) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*wenn Verteilergetriebe [Steuerelement] [2H / 4H / N / 4L / Allradantrieb / Geländeuntersetzung / Sperre vorn / Mittelsperre / Sperre hinten] [wird eingelegt / wird ausgelegt]*: **wird eingelegt** wird ausgeführt, wenn die Auswahl wahr wird (der Wählhebel erreicht die Stellung oder die Sperre wird eingeschaltet), **wird ausgelegt**, wenn sie nicht mehr wahr ist.

- Typ: Ereignisblock

#### `Verteilergetriebe-Zustand (boolesch)` (Anfänger) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*Verteilergetriebe [Steuerelement] [2H / 4H / N / 4L / Allradantrieb / Geländeuntersetzung / Sperre vorn / Mittelsperre / Sperre hinten] ist eingelegt ?*

- Typ: Werteblock, `true` / `false`

#### `Verteilergetriebe-Stellung (Zahl)` (Anfänger) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*Stellung des Verteilergetriebes [Steuerelement]*: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Stecken Sie ihn in den Anschluss *Verteilergetriebe* des Blocks [fahren](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive), damit der Simulator das Verteilergetriebe berücksichtigt.

- Typ: Werteblock

### Fahrschalter-Blöcke {#train-controller-blocks}

Blöcke des [Fahrschalters](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Fahrschalter-Ereignis` (Anfänger) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*wenn Fahrschalter [Steuerelement] [Fahrstufe geändert / Fahrstufe erhöht / Fahrstufe verringert / Fahrschalter auf null / Richtungswender umgelegt / Hebel losgelassen]*: **Fahrschalter auf null** bedeutet, dass der Hebel auf Fahrstufe 0 zurückgekehrt ist.

- Typ: Ereignisblock

#### `Fahrschalter-Wert (Zahl)` (Anfänger) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*Fahrschalter [Steuerelement] [Zugkraft / Fahrstufe / Richtungswender]*:

- **Zugkraft**: von −100 bis 100, die Fahrstufe in Prozent mit dem Vorzeichen der Fahrtrichtung;
- **Fahrstufe**: 0 bis 8;
- **Richtungswender**: 1 = vorwärts, 0 = neutral, −1 = rückwärts.
- Typ: Werteblock

#### `Fahrschalterzustand (boolesch)` (Anfänger) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*ist Fahrschalter [Steuerelement] [auf vorwärts / auf rückwärts / in Neutral / auf Fahrstufe 0] ?*

- Typ: Werteblock, `true` / `false`
