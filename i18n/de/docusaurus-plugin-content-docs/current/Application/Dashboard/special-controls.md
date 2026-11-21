---
id: SpecialControls
title: Spezial-Steuerelemente
description: "Lenkrad, Pedale, Schalthebel, Handbremse, Blinker und Fahrschalter: Bedienung, Einstellungen, Aussehen, Werte und Blöcke."
---

import Screenshot from '@site/src/components/Screenshot';

# Spezial-Steuerelemente {#special-controls}

Spezial-Steuerelemente sehen aus und funktionieren wie das echte Vorbild: ein Lenkrad, Pedale, ein Schalthebel, eine Handbremse, ein Blinkerhebel und ein Fahrschalter für Lokomotiven. Jedes ist ein eigenes Produkt: Kaufen Sie die, die Sie brauchen, oder erhalten Sie alle mit [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Ein Dashboard mit Lenkrad, Pedalen, Schalthebel, Handbremse, Blinkern und Fahrschalter" width={900} />

| Steuerelement | Produkt | Name auf dem Dashboard | Liefert dem Programm |
|---|---|---|---|
| [Lenkrad](#steering-wheel) | Lenkrad | STWHEEL | Lenkwinkel, Hupe |
| [Pedale](#pedals) | Pedale | PDLS | Gas und Bremse |
| [Schaltgetriebe](#gear-shifter) | Schalthebel | GEAR | Gang: R, N, 1…6 |
| [Automatikgetriebe](#gear-shifter) | Schalthebel | GEARA | Wählhebel: P, R, N, D |
| [Handbremse](#handbrake) | Handbremse | HBRK | Kraft, angezogen |
| [Blinker](#turn-signals) | Blinker | STALK | linker Blinker, rechter Blinker, Licht |
| [Fahrschalter](#train-controller) | Fahrschalter | TRTHR | Fahrstufe, Richtung, Zugkraft |

Der **Drehknopf** ist kein eigenes Produkt: Er gehört zu jedem kostenpflichtigen Theme. Siehe [Steuerelementtypen](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Ein Spezial-Steuerelement hinzufügen {#add-a-special-control}

1. Öffnen Sie das Dashboard und tippen Sie auf **+** (**Controller hinzufügen**).
2. Scrollen Sie in der Liste der Steuerelementtypen zu **Fahrzeug & Spezial** und wählen Sie ein Steuerelement.
3. Der Streifen mit den Varianten zeigt alle seine Aussehen. Wählen Sie eines und richten Sie das Steuerelement dann unter **Konfigurieren** ein.
4. Tippen Sie auf **Zum Dashboard hinzufügen**. Für ein Steuerelement, das Sie noch nicht besitzen, tippen Sie auf **Kaufen** oder **Alles mit MocPilot Pro**.

<Screenshot name="special-control-looks" alt="Die Palette „Controller hinzufügen“ mit ausgewähltem Lenkrad und seinen Aussehen-Varianten im Streifen" width={900} />

## Aussehen {#looks}

Jedes Spezial-Steuerelement gibt es in vielen **Aussehen**. Die meisten passen zu einem kostenpflichtigen Theme (Rennen, Aura, Klassisch, Hologramm usw.), sodass Lenkrad, Schalthebel und Handbremse zum Rest Ihres Dashboards passen. Sie können das Aussehen jederzeit ändern: Wählen Sie das Steuerelement aus und wählen Sie im Tab **Stil** unter **Aussehen** ein anderes. Das Aussehen ändert nur das Bild: Werte, Blöcke und Programm bleiben gleich.

Manche Aussehen setzen bei der Auswahl auch eine passende Akzentfarbe.

## Einstellungen aller Spezial-Steuerelemente {#settings-of-all-special-controls}

- **Aussehen** (Tab „Stil“): siehe oben.
- **Akzentfarbe** (Tab „Stil“): Schalthebel, Handbremse, Blinker und Fahrschalter.
- **Controller sperren** und **Interaktivität** (Tab „Einstellungen“), wie bei jedem Steuerelement. Siehe [Eigenschaften von Steuerelementen](/docs/Application/Dashboard/ControlProperties).

## Lenkrad {#steering-wheel}

Legen Sie einen Finger auf das Lenkrad und drehen Sie es um seine Mitte. Wenn Sie loslassen, federt es in die Mitte zurück. Drücken Sie auf die Mitte des Lenkrads, um zu hupen: Dabei dreht sich das Lenkrad nicht.

**Einstellungen**

- **Lenkradwinkel** (20–120°, Standard 60°): wie weit Sie das Lenkrad drehen, um den vollen Einschlag zu erreichen. Die Werte, die das Programm erhält, ändern sich dadurch nicht.
- **Soundeffekte**: der Hupton und die Töne, die das Programm über das Lenkrad abspielt. Der App-Ton muss eingeschaltet sein.

**Werte**: der Lenkwinkel von −100 (voll links) über 0 bis 100 (voll rechts); die Hupe ist 100, solange Sie sie halten, sonst 0.

**Aussehen**: Geländewagen, Schwerlast-Lkw, Supersportwagen, Retro-Holz, Renn-Lenkrad, Rallye-Wildleder, Gelände-Nutzfahrzeug, Konzept-Glühen, Sattelzug, Familienlimousine, Stadtauto, Strandbuggy, Klassischer 4x4, Baumaschinen, Hi-Fi Audio, Aura, Bausteine, Circuit Core, Deep Space, Schwertransport, Neo Orbit, Geländewagen-Cockpit, Rennen, Rock Crawler, Taktisch, Klassisch, Sonnenuntergang, Miami, Hightech, Hologramm.

**Töne** für das Programm: Pkw-Hupe, Lkw-Horn, Sportwagen-Hupe.

**Schnellverknüpfungen**: der Eingang [Lenkrad](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) mit den Kanälen **Lenkwinkel** und **Hupe**.

## Pedale {#pedals}

Das Bremspedal ist links, das Gaspedal rechts. Drücken Sie ein Pedal mit einem Finger: Je höher Ihr Finger auf dem Pedal liegt, desto stärker ist es durchgedrückt. Weiter unten ist es leicht gedrückt, ganz oben voll. Lassen Sie los, kommt das Pedal wieder hoch. Sie können beide Pedale gleichzeitig drücken.

**Einstellungen**: **Soundeffekte**: erlaubt dem Programm, die Pedaltöne abzuspielen. Der App-Ton muss eingeschaltet sein.

**Werte**: Gas und Bremse, jeweils von 0 bis 100.

**Aussehen**: Geländewagen, Schwerlast-Lkw, Supersportwagen, Retro-Chrom, Carbon & Rot, Renn-gelocht, Gelände-Grip, Konzept-Glühen, Sattelzug, Familienlimousine, Stadtauto, Strandbuggy, Klassischer 4x4, Baumaschinen, Hi-Fi Audio, Aura, Bausteine, Circuit Core, Deep Space, Schwertransport, Neo Orbit, Geländewagen-Cockpit, Rennen, Rock Crawler, Taktisch, Klassisch, Sonnenuntergang, Miami, Hightech, Hologramm.

**Töne** für das Programm: Pkw-Bremse, Sportwagen-Bremse, Lkw-Druckluftbremse, Rückfahrwarner.

**Schnellverknüpfungen**: der Eingang [Pedale](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) mit den Kanälen **Gaspedal** und **Bremspedal**.

:::tip Pedale allein machen noch kein Auto
Die Pedale liefern nur, wie stark jedes gedrückt ist. Sendet eine Zeile das Gaspedal direkt an einen Motor, läuft der Motor genau so stark, wie das Pedal gedrückt ist. Für ein Modell, das allmählich beschleunigt, ausrollt, bremst und rückwärts fährt, verwenden Sie den [Fahrzeugsimulator](#vehicle-simulator).
:::

## Schalthebel {#gear-shifter}

Das Produkt **Schalthebel** enthält zwei Steuerelemente: ein **Schaltgetriebe** und ein **Automatikgetriebe**.

### Schaltgetriebe {#manual-gearbox}

Eine H-Schaltkulisse mit Rückwärtsgang und bis zu sechs Vorwärtsgängen. Ziehen Sie den Knauf entlang der mittleren Gasse und nach oben oder unten in einen Gang. Wenn Sie loslassen, rastet der Knauf im nächsten Gang ein oder kehrt in den Leerlauf zurück.

- **Anzahl der Gänge** (2–6, Standard 6, Tab „Einstellungen“): Die Kulisse passt sich an. Der Rückwärtsgang liegt immer in der Spalte ganz links, der Leerlauf in der Mitte.
- **Werte**: −1 = Rückwärtsgang (R), 0 = Leerlauf (N), 1…6 = Vorwärtsgänge.

### Automatikgetriebe {#automatic-gearbox}

Ein Wählhebel mit vier Stellungen: **P** (Parken), **R** (Rückwärts), **N** (Neutral) und **D** (Fahren). Wie Sie ihn bedienen, hängt vom Aussehen ab:

| Wählhebel | Bedienung | Aussehen |
|---|---|---|
| Hebel | den Griff entlang der Führung schieben; er hält an der nächsten Stellung | Hightech |
| Drehwählschalter | den Wählschalter mit einem Finger drehen; er rastet bei P, R, N oder D ein | Klassisch, Deep Space, Taktisch, Baumaschinen, Hi-Fi Audio, Aura, Circuit Core, Rock Crawler, Geländewagen-Cockpit, Neo Orbit, Geländewagen, Arbeitstier, Konzept, Limousine, Stadtauto, Klassischer 4x4 |
| Tasten | auf P, R, N oder D tippen | Rennen, Schwertransport, Bausteine, Schwerlast-Lkw, Retro, Rallye, Supersportwagen, Formel, Fernverkehr, Buggy, Sonnenuntergang, Miami, Hologramm |

- **Anzahl der Gänge** (2–8, Standard 6, Tab „Einstellungen“): durch wie viele Gänge der [Fahrzeugsimulator](#vehicle-simulator) in D schaltet. Wählt der Simulator einen Gang, zeigt der Wählhebel ihn an, zum Beispiel **D3**.
- **Werte**: −2 = P, −1 = R, 0 = N, 1 = D. Alle drei Wählhebel liefern dieselben Werte, daher funktioniert das Programm mit jedem Aussehen.

Beide Getriebe haben dieselben Aussehen: Klassisch, Rennen, Deep Space, Taktisch, Schwertransport, Baumaschinen, Hi-Fi Audio, Aura, Circuit Core, Rock Crawler, Geländewagen-Cockpit, Bausteine, Neo Orbit, Schwerlast-Lkw, Retro, Rallye, Geländewagen, Supersportwagen, Formel, Arbeitstier, Konzept, Fernverkehr, Limousine, Stadtauto, Buggy, Sonnenuntergang, Klassischer 4x4, Miami, Hightech, Hologramm.

**Schnellverknüpfungen**: der Eingang [Schalthebel](/docs/Application/Links/Blocks/InputBlocks#controller-gear) mit den Kanälen **Gang** (Schaltgetriebe: der Gang im Verhältnis zur Anzahl der Gänge, Rückwärtsgang negativ; Automatik: die Richtung) und **Richtung (R − / vorwärts +)**: −1 im Rückwärtsgang, 0 in Neutral und Parken, +1 in jedem Vorwärtsgang.

## Handbremse {#handbrake}

Ein Handbremshebel. Fassen Sie den Hebel am Griff und ziehen Sie ihn nach unten. Die Bremskraft folgt, wie weit Sie ziehen. Lassen Sie los, federt der Hebel zurück.

Zum **Feststellen** ziehen Sie den Hebel ganz durch und schieben dann Ihren Finger am Hebel entlang zu seinem Fuß: Der Griff gleitet nach unten, und der Hebel bleibt angezogen. Um einen angezogenen Hebel zu **lösen**, tippen Sie auf das Steuerelement oder ziehen den Hebel zurück.

**Werte**: die Kraft von 0 bis 100 und ob der Hebel angezogen ist.

**Aussehen**: Klassisch, Rallye, Schwerlast-Lkw, Retro, Deep Space, Taktisch, Aura, Schwertransport, Baumaschinen, Hi-Fi Audio, Neo Orbit, Geländewagen-Cockpit, Rennen, Bausteine, Circuit Core, Rock Crawler, Geländewagen, Supersportwagen, Formel, Arbeitstier, Konzept, Fernverkehr, Limousine, Stadtauto, Buggy, Sonnenuntergang, Klassischer 4x4, Miami, Hightech, Hologramm.

**Schnellverknüpfungen**: der Eingang [Handbremse](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) mit den Kanälen **Handbremse angezogen** (an/aus, wie ein Schalter) und **Handbremskraft**.

## Blinker {#turn-signals}

Ein Blinkerhebel mit Lichtschalter.

- Ziehen Sie den Hebel **nach oben** für den linken und **nach unten** für den rechten Blinker. Er bleibt, wo Sie ihn loslassen; ziehen Sie ihn in die Mitte zurück, um den Blinker auszuschalten.
- **Tippen** Sie auf den Hebel oder die Scheinwerfertaste, um das Licht ein- oder auszuschalten. Dabei bewegt sich der Hebel nicht.

**Einstellungen**

- **Symbol: left**, **Symbol: light**, **Symbol: right** (Tab „Stil“): die Symbole der Kontrollleuchten.
- **Blinker-Ausgänge blinken** (Tab „Einstellungen“, standardmäßig an): Die Blinker-Ausgänge blinken zusammen mit der Leuchte am Hebel, sodass ein daran angeschlossenes Licht von selbst blinkt. Ist die Option aus, bleiben die Ausgänge dauerhaft an, solange der Blinker eingeschaltet ist. Die Blöcke sehen immer den dauerhaften Zustand.

**Werte**: linker Blinker, rechter Blinker und Licht, jeweils an oder aus.

**Aussehen**: Klassisch, Rennen, Deep Space, Taktisch, Schwertransport, Baumaschinen, Hi-Fi Audio, Aura, Circuit Core, Rock Crawler, Geländewagen-Cockpit, Bausteine, Neo Orbit, Schwerlast-Lkw, Retro, Rallye, Geländewagen, Supersportwagen, Formel, Arbeitstier, Konzept, Fernverkehr, Limousine, Stadtauto, Buggy, Sonnenuntergang, Klassischer 4x4, Miami, Hightech, Hologramm.

**Schnellverknüpfungen**: der Eingang [Blinker](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) mit den Kanälen **Blinker (links − / rechts +)** (zwei Lichter mit entgegengesetzter Polarität an einem Port), **Linker Blinker**, **Rechter Blinker** und **Licht**.

## Fahrschalter {#train-controller}

Ein Fahrschalter für Lokomotiven mit Fahrhebel und Richtungswender.

- **Fahrhebel**: Ziehen Sie den Hebel nach oben oder unten. Er hat 8 Fahrstufen (0–8) und bleibt auf der Stufe, auf der Sie ihn loslassen.
- **Richtungswender**: Ziehen Sie seinen Knauf nach oben für **vorwärts** oder nach unten für **rückwärts**; die Mitte ist **neutral**. Der Knauf springt von Stellung zu Stellung und bleibt nie dazwischen stehen. Wie in einem echten Führerstand bewegt er sich nur, wenn der Fahrhebel auf 0 steht.

**Werte**: die Fahrstufe (0–8), der Richtungswender (1 = vorwärts, 0 = neutral, −1 = rückwärts) und die **Zugkraft**: Fahrstufe ÷ 8 × 100 mit dem Vorzeichen der Richtung, von −100 bis 100. Die Zugkraft kann einen Zugmotor direkt antreiben.

**Aussehen**: Original, Baumaschinen, Hi-Fi Audio, Aura, Bausteine, Buggy, Circuit Core, Stadtauto, Klassisch, Konzept, Deep Space, Geländewagen, Schwertransport, Klassischer 4x4, Schwerlast-Lkw, Miami, Neo Orbit, Supersportwagen, Arbeitstier, Geländewagen-Cockpit, Rennen, Rallye, Rock Crawler, Limousine, Sonnenuntergang, Taktisch, Fernverkehr, Retro, Formel, Hightech, Hologramm.

**Schnellverknüpfungen**: der Eingang [Schieberegler](/docs/Application/Links/Blocks/InputBlocks#controller-train); er liefert die Zugkraft.

## Blöcke {#blocks}

Jedes Spezial-Steuerelement fügt der Kategorie **Bildschirm-Controller** bei Logikblöcken eigene Blöcke hinzu:

| Steuerelement | Ereignisse | Werte |
|---|---|---|
| Lenkrad | *wenn Lenkrad … bewegt / gedrückt / losgelassen* | *Lenkrad …*, *Lenkrad … gedrückt / losgelassen?* |
| Pedale | *wenn Pedale … irgendein / Bremse / Beschleunigung bewegt / gedrückt / losgelassen* | *Pedale … Beschleunigung / Bremse*, *Pedal … gedrückt / losgelassen?* |
| Getriebe | *wenn Schaltgetriebe … schaltet / schaltet hoch / schaltet runter / schaltet in den Leerlauf / legt den Rückwärtsgang ein / schaltet in Parken* | *Gang …*, *ist Schaltgetriebe … im Leerlauf / im Rückwärtsgang / in einem Vorwärtsgang / in Parken?*, *Gänge von …* |
| Handbremse | *wenn Handbremse … gezogen / angezogen / gelöst / losgelassen* | *Handbremskraft …*, *ist Handbremse … angezogen / gelöst / gezogen?* |
| Blinker | *wenn Blinker … linker Blinker / rechter Blinker / Licht geht an / aus* | *Blinker … linker Blinker / rechter Blinker / Licht ist an?* |
| Fahrschalter | *wenn Fahrschalter … Fahrstufe geändert / erhöht / verringert, Fahrschalter auf null, Richtungswender umgelegt, Hebel losgelassen* | *Fahrschalter … Zugkraft / Fahrstufe / Richtungswender*, *ist Fahrschalter … auf vorwärts / auf rückwärts / in Neutral / auf Fahrstufe 0?* |

Lenkrad und Pedale haben außerdem den Block *Ton … von …*: Er wählt einen ihrer Töne für die Blöcke unter **Töne** aus. Details: [Bildschirm-Controller](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Fahrzeugsimulator {#vehicle-simulator}

Spezial-Steuerelemente liefern nur Rohwerte. Der **Fahrzeugsimulator** macht aus Pedalen, Schalthebel und Handbremse ein Modell, das sich wie ein Auto fährt: Es beschleunigt mit Trägheit, rollt aus, bremst, fährt rückwärts, schaltet in D die Gänge und hält mit der Handbremse.

- **Schnellverknüpfungen**: Verwenden Sie den Eingang [Fahrzeug](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Wählen Sie die **Pedale**, den **Schalthebel** und die **Handbremse** von Ihrem Dashboard, den **Fahrzeugtyp** (Auto, Geländewagen, Sportwagen, Lkw) und den **Ausgang**: **Geschwindigkeit**, **Motordrehzahl (U/min)**, **Bremsen** oder **Handbremse angezogen**.
- **Logikblöcke**: Hat das Dashboard Pedale, einen Schalthebel oder eine Handbremse, erscheint die Kategorie **Simulator**. Erstellen Sie dort ein Fahrzeug (**Fahrzeug erstellen**) und setzen Sie den Block *fahren* unter ein Ereignis. Stecken Sie Werte in seine Anschlüsse: *Gas*, *Bremse*, *Gang*, *von* (Anzahl der Gänge; hier passt der Block *Gänge von …*), *Handbremse* und *angezogen*. Weitere Simulator-Blöcke legen den Fahrzeugtyp, die Motorträgheit und die Rückwärtsgeschwindigkeit fest, lesen Geschwindigkeit, Motordrehzahl und Gang aus und reagieren, wenn das Fahrzeug anfährt, hält, bremst oder schaltet.

So fährt der Simulator:

- **Gaspedal** beschleunigt das Modell mit Trägheit; lassen Sie es los, rollt das Modell aus. **Bremse** verlangsamt es.
- **Ohne Getriebe** fährt das Modell rückwärts, wenn Sie nach dem Anhalten die Bremse gedrückt halten.
- **Schaltgetriebe**: R fährt rückwärts, N fährt nicht. Optional begrenzt jeder Gang die Höchstgeschwindigkeit.
- **Automatikgetriebe**: R fährt rückwärts, N fährt nicht, P hält das Modell wie eine angezogene Handbremse. In D schaltet der Simulator selbstständig hoch und runter und zeigt den Gang auf dem Wählhebel an.
- **Handbremse**: Ihre Kraft addiert sich zur Bremswirkung; eine angezogene Handbremse kann das Modell halten.
- **Fahrzeugtyp**: Ein Lkw ist schwerer (mehr Trägheit) und hat eine Druckluftbremse; ein Sportwagen reagiert schnell und fährt schneller rückwärts.

Die letzten Pedale, der letzte Schalthebel oder die letzte Handbremse lassen sich nicht löschen, solange das Programm Simulator-Blöcke verwendet.
