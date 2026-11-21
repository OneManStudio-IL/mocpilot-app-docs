---
id: Simulator
title: Simulator
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulator {#simulator}

Der **Simulator** macht aus Pedalen, Getriebe und Handbremse des Dashboards ein Auto, das sich wie ein echtes verhält: Es beschleunigt mit Trägheit, rollt aus, bremst, fährt rückwärts und schaltet die Gänge. Die Steuerelemente liefern nur ihre Rohwerte; das Programm baut daraus das Auto und sendet seine Geschwindigkeit an die Motoren.

Die Kategorie erscheint, solange das Dashboard Pedale, ein Getriebe oder eine Handbremse hat. Die Blöcke, die diese Steuerelemente lesen, finden Sie unter [Bildschirm-Controller](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Fahrzeuge {#vehicles}

Drücken Sie oben in der Kategorie auf **Fahrzeug erstellen** und geben Sie ihm einen Namen (zum Beispiel „Fahrzeug 1“). Die Blöcke erscheinen, sobald das Programm mindestens ein Fahrzeug hat, und in jedem Block wählen Sie, mit welchem Fahrzeug er arbeitet. Mit **Fahrzeug umbenennen** und **Fahrzeug löschen** verwalten Sie sie; ein Fahrzeug lässt sich nicht löschen, solange seine Blöcke im Programm sind, und die letzten Pedale, das letzte Getriebe oder die letzte Handbremse lassen sich nicht vom Dashboard entfernen, solange Simulator-Blöcke verwendet werden.

<Screenshot name="blocks-simulator" alt="Kategorie Simulator mit einem Block „fahren“ am Pedal-Ereignis" width={900} />

Ein typisches Auto: Hängen Sie **fahren** an das Pedal-Ereignis, verbinden Sie die Pedale mit `Gas` und `Bremse` und starten Sie darin den Antriebsmotor mit der `Geschwindigkeit` des Fahrzeugs:

```text
wenn Pedale PDL1 irgendein bewegt
    Fahrzeug 1  fahren  Gas (Pedale PDL1 Beschleunigung)  Bremse (Pedale PDL1 Bremse)
        Motor starten bei (Geschwindigkeit von Fahrzeug 1) % Geschwindigkeit  (Hub 1, Port A)
```

Eine Schleife `immer wiederholen` ist nicht nötig: **fahren** läuft von selbst weiter, bis das Auto steht.

## Blöcke {#blocks}

### `… fahren Gas … Bremse … Gang … von … Handbremse … angezogen …` (Anfänger) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Das Herzstück des Simulators. Ein C-Block, der das Fahrzeug fährt: Alle 0,1 s liest er seine Eingaben, bewegt das Auto einen Schritt weiter und führt die Blöcke darin aus (setzen Sie die Motorblöcke dort hinein). Er endet, wenn das Auto steht und nichts gedrückt ist; die Blöcke darin laufen ein letztes Mal, damit der Motor den Endwert erhält.

- `Gas` und `Bremse`: wie tief das jeweilige Pedal gedrückt ist, 0 bis 100.
- `Gang`: der gewählte Gang: `-1` rückwärts, `0` Leerlauf, ab `1` vorwärts. Steckt ein Automatikgetriebe-Steuerelement in diesem Feld, wird stattdessen seine Wählhebelstellung verwendet (P, R, N, D), und das Auto wählt in D den Gang selbst.
- `von`: wie viele Gänge das Getriebe hat (standardmäßig 6).
- `Handbremse`: wie stark die Handbremse gezogen ist, 0 bis 100; `angezogen`: ob sie eingerastet ist.
- Eine Eingabe zählt nur, wenn ein Block darin steckt; eine einfache Zahl in einem leeren Feld wird ignoriert (außer bei `von`).
- Nur ein Block **fahren** kann ein Fahrzeug gleichzeitig fahren; ein zweiter für dasselbe Fahrzeug überspringt seine inneren Blöcke.

### `setzen … Typ auf …` (Anfänger) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Stimmt den Motor des Fahrzeugs auf eine Fahrzeugart ab: wie lange es weiterrollt (Trägheit), seine Höchstgeschwindigkeit rückwärts und ob es eine Druckluftbremse hat.

- Typen: `Auto`, `Geländewagen`, `Sportwagen`, `Lkw` (der Lkw hat eine Druckluftbremse)

### `setzen … … auf … %` (Fortgeschritten) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Ändert eine Motoreinstellung.

- `Motorträgheit`: Je höher sie ist, desto länger rollt das Auto ohne Gas (0 bedeutet keine Trägheit).
- `Rückwärtstempo`: die Höchstgeschwindigkeit im Rückwärtsgang.

### `setzen … … auf …` (Fortgeschritten) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Schaltet eine Fahrzeugoption ein oder aus.

- `Rückwärts mit der Bremse`: nur mit Pedalen; wird die Bremse im Stand gehalten, fährt das Auto rückwärts.
- `Gänge begrenzen Tempo`: Jeder Gang hat seine eigene Höchstgeschwindigkeit.
- `Handbremse hält`: Eine angezogene Handbremse hält das Auto an Ort und Stelle.
- `Druckluftbremse`: die Druckluftbremse des Lkw (liefert das Ereignis „Luft ablässt“).
- `Automatikgetriebe`: die Eingabe `Gang` als Automatik-Wählhebel behandeln.

### `zurücksetzen …` (Fortgeschritten) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Hält das Fahrzeug dort an, wo es ist, und vergisst seinen Zustand.

### `… von …` (Anfänger) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Liefert einen der Werte des Fahrzeugs.

- `Geschwindigkeit`: von −100 bis 100 (negativ bei Rückwärtsfahrt), passend für das Geschwindigkeitsfeld eines Motors.
- `Motordrehzahl`: von 0 bis 100, für einen Drehzahlmesser oder Motorgeräusche.
- `Gang`: der aktuelle Gang (`-1` rückwärts, `0` Leerlauf, dann `1`, `2`…).

### `ist … … ?` (Anfänger) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Liefert `true`, wenn das Fahrzeug im ausgewählten Zustand ist.

- Zustände: `in Bewegung`, `am Bremsen`, `mit Handbremse`

### `wenn … …` (Anfänger) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Führt sein Skript aus, wenn mit dem Fahrzeug etwas passiert.

- Ereignisse: `losfährt`, `anhält`, `zu bremsen beginnt`, `aufhört zu bremsen`, `stark bremst`, `Luft ablässt`, `schaltet`
- Typische Verwendung: einen Ton abspielen, zum Beispiel das Zischen einer Druckluftbremse bei `Luft ablässt` oder ein Quietschen bei `stark bremst` (siehe [Töne](/docs/Application/BlockBuilder/Blocks/Sounds)).
