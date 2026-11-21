---
id: FirstCarLinks
title: Je eerste RC-auto met Snelle koppelingen
description: "Stap voor stap: bouw met Snelle koppelingen een op afstand bestuurbare LEGO-auto met aandrijving, servobesturing en lampen, zonder code."
---

import Screenshot from '@site/src/components/Screenshot';

# Je eerste RC-auto met Snelle koppelingen {#your-first-rc-car-with-quick-links}

In deze tutorial bouw je een complete op afstand bestuurbare auto met [Snelle koppelingen](/docs/Application/Links/LinksIntroducing): één joystick rijdt en stuurt, en een knop zet de lampen aan en uit. Het kost ongeveer 15 minuten en je schrijft geen code.

**Wat je nodig hebt**

- een LEGO® Technic™ Hub (88012);
- een aandrijfmotor op **poort A**;
- een stuurmotor met positiesensor (encoder) op **poort B**, bijvoorbeeld een Technic L- of XL-motor of een willekeurige Technic-hoekmotor. De besturing moet eindaanslagen hebben: de wielen kunnen maar tot een bepaald punt naar links en rechts draaien;
- LEGO®-lampen op **poort C** (optioneel);
- MOCPilot op een telefoon, tablet of computer met Bluetooth.

:::note City Hub
Een City Hub (88009) heeft maar twee poorten. Zet de aandrijfmotor op **A** en de stuurmotor op **B**, en sla de lampen over of voeg er een tweede hub voor toe. Verder werkt alles hetzelfde.
:::

**Het resultaat**: een profiel met drie rijen:

| # | Invoer | Verwerking | Bewerking | Uitvoer |
|---|---|---|---|---|
| 1 | JOY1, Y-as | Geleidelijk | Motor | Technic Hub, poort A |
| 2 | JOY1, X-as | | Servo (Auto) | Technic Hub, poort B |
| 3 | BTN1 | Wisselen | Licht | Technic Hub, poort C |

## 1. Maak het profiel {#create-the-profile}

1. Ga naar **Mijn profielen** en begin een nieuw profiel: tik op een telefoon op **+** → **Nieuw profiel**, tik op een tablet op **Nieuw profiel** in de kop, kies op een computer **Bestand → Nieuw profiel**.
2. Kies de tegel **Snelle koppelingen**.
3. Vul een **Naam** in, bijvoorbeeld “Mijn eerste auto”. Een afbeelding en hashtags zijn voorlopig optioneel.
4. Tik op **Maken**. Het profiel opent in de editor van Snelle koppelingen met één lege rij.

Het programmatype kan later niet worden gewijzigd. Meer in [Een profiel maken](/docs/Application/Profiles/CreateProfile).

## 2. Voeg de hub toe en verbind hem {#add-the-hub}

1. Tik in de editor op **Mijn hubs**.
2. Tik in een vrij slot op **Nieuwe hub toevoegen**, kies de Technic Hub in de lijst en tik op **Toevoegen**.
3. Zet de hub aan en druk op de knop ervan. MOCPilot vindt hem en maakt verbinding; de hub blijft in het slot.
4. Verschijnt het venster **Firmware-update vereist**, tik dan op **Bijwerken** en houd de hub aan en dichtbij tot de update klaar is. Zie [Firmware bijwerken](/docs/Application/Hubs/FirmwareUpdating).

Tip: open de verbonden hub om de [hubmonitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor) te zien. Die toont welk apparaat op elke poort is aangesloten, zodat je de motoren kunt controleren voordat je de rijen bouwt.

Meer in [Een hub toevoegen en verbinden](/docs/Application/Hubs/ConnectingHubs).

## 3. Zet de bedieningselementen op het dashboard {#dashboard}

1. Open **Dashboard** en tik op **+** (**Controller toevoegen**).
2. Kies in de groep **Joysticks** de **Joystick** en tik op **Toevoegen aan dashboard**. Hij heet **JOY1**. Laat **As-type** op **Beide assen (X, Y)** staan: omhoog en omlaag rijdt, links en rechts stuurt.
3. Tik opnieuw op **+**. Kies in **Knoppen en schakelaars** de **Knop** en tik op **Toevoegen aan dashboard**. Hij heet **BTN1**.
4. Sleep de joystick naar de linkerkant en de knop naar de rechterkant, waar je duimen zitten. Tik op een bedieningselement om de grootte (**S**, **M** of **L**) of het uiterlijk te wijzigen.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard met de joystick JOY1 links en de knop BTN1 rechts" width={900} />

Rijd en stuur je liever met aparte duimen? Voeg dan twee joysticks toe: **JOY1** met **Alleen verticaal (Y)** en **JOY2** met **Alleen horizontaal (X)**, en gebruik JOY2 in de stuurrij.

Meer in [Bedieningselementen toevoegen en schikken](/docs/Application/Dashboard/ArrangingControls) en [Soorten bedieningselementen](/docs/Application/Dashboard/ControlTypes).

### Optie: stuurwiel en pedalen {#wheel-and-pedals}

Heb je de [speciale bedieningselementen](/docs/Application/Dashboard/SpecialControls) **Stuurwiel** en **Pedalen**, dan kun je die in plaats van de joystick gebruiken. Bouw in stap 4 rij 1 met de invoer [Voertuig](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) en zet **Uitvoer** op **Snelheid** (die versnelt en remt af als een echte auto, dus Geleidelijk is niet nodig), en bouw rij 2 met de invoer **Stuur** en het kanaal **Stuurhoek**.

## 4. Bouw de rijen {#rows}

Ga terug naar het programma. Het palet onderaan heeft drie tabbladen: **Invoer**, **Verwerking** en **Uitvoer**. Elke rij loopt van links naar rechts: invoer → verwerking → bewerking → hub. Hoe de editor werkt: [Kennismaking met Snelle koppelingen](/docs/Application/Links/LinksIntroducing).

### Rij 1: rijden {#row-drive}

1. Sleep op **Invoer** de **JOY1** met het kanaal **Y-as** naar de lege rij (“Nieuwe rij: invoer”). Eronder verschijnt een nieuwe lege rij.
2. Sleep op **Verwerking** het blok **Geleidelijk** achter de invoer. De standaardwaarden van 0,5 s voor **Versnelling (tot volle snelheid)** en **Vertraging (tot stilstand)** zijn een goed begin.
3. Sleep op **Uitvoer** het blok **Motor** achter Geleidelijk.
4. Sleep de uitvoer **Technic Hub** achter Motor en tik op de poortchip **A**.

### Rij 2: sturen {#row-steering}

1. Sleep **JOY1** met het kanaal **X-as** naar de volgende lege rij.
2. Sleep **Servo** uit **Uitvoer**.
3. Tik op het blok Servo en zet **Kalibratie** op **Auto**.
4. Sleep de uitvoer **Technic Hub** achter Servo en tik op **B**.

In de modus **Auto** draait de stuurmotor bij elke start van het programma naar beide eindaanslagen; het midden wordt het nulpunt en de slag wordt de stuurhoek. Wil je het meteen proberen, tik dan in de Servo-instellingen op **Nu kalibreren** terwijl de hub verbonden is. Mislukt de kalibratie, controleer dan de hub, de motor en of de besturing echt eindaanslagen heeft.

<Screenshot name="links-servo-settings" alt="Instellingen van een Servo-blok" width={900} />

Geen eindaanslagen? Gebruik **Handmatig**: zet de wielen met de hand recht, tik op **Instellen als nul** en kies de **Hoek**. Zie [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Rij 3: lampen {#row-lights}

1. Sleep **BTN1** naar de volgende lege rij.
2. Sleep **Wisselen** uit **Verwerking**. Dat maakt van de drukknop een schakelaar: één keer drukken is aan, nog een keer is uit.
3. Sleep **Licht** uit **Uitvoer**.
4. Sleep de uitvoer **Technic Hub** achter Licht en tik op **C**.

<Screenshot name="tutorial-car-links-rows" alt="De drie voltooide rijen van de auto: rijden, sturen en lampen" width={900} />

Als alle drie de rijen klaar zijn, toont de knop **Problemen** in de bovenbalk een groen vinkje. Een rood “!” geeft aan hoeveel problemen er nog zijn; tik erop en daarna op een probleem om naar de rij te springen. Zie [Uitvoeren en problemen oplossen](/docs/Application/Links/Problems).

## 5. Starten en testen {#run}

1. Zet de auto op een standaard of houd hem zo vast dat de wielen van de tafel af zijn.
2. Druk op **Start**. De stuurmotor kalibreert: hij draait naar beide kanten en komt terug naar het midden.
3. Duw de joystick omhoog en omlaag: de auto rijdt vooruit en achteruit en trekt soepel op en remt soepel af. Beweeg hem naar links en rechts: de wielen sturen.
4. Druk op **BTN1**: de lampen gaan aan. Druk nog een keer: ze gaan uit.
5. Druk op **Stop** om terug te gaan naar bewerken.

Terwijl het programma loopt, toont elke verbinding tussen blokken de waarde die erdoorheen gaat, zodat je een signaal van de joystick tot aan de hub kunt volgen.

<Screenshot name="links-live-values" alt="Een lopend programma met Snelle koppelingen met live waarden op de verbindingen" width={900} />

Meer in [Een model besturen (Start)](/docs/Application/Profiles/PlayMode).

## 6. Bijstellen {#tune}

Druk eerst op **Stop**: rijen kunnen niet worden bewerkt terwijl het programma loopt.

- **Rijdt de auto achteruit als je omhoog duwt?** Voeg **Omkeren** toe aan rij 1. Hetzelfde werkt voor rij 2 als de wielen de verkeerde kant op sturen.
- **Bromt of kruipt de motor als je de joystick loslaat?** Voeg **Dode zone** toe aan rij 1, vóór Geleidelijk. De standaard **Zone** van 10 % is een goed begin.
- **Te snel?** Voeg **Begrenzing** toe aan rij 1, bijvoorbeeld met **Maximum** 50 %.
- **Te traag?** Tik op Geleidelijk en kies een kortere tijd, of **Direct**.

Een goede volgorde voor een rijrij is *Dode zone → Begrenzing → Geleidelijk*. Alle instellingen: [Verwerkingsblokken](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Optioneel: rijden met een gamepad {#gamepad}

1. Koppel een gamepad in Xbox- of PlayStation-stijl met je apparaat via de Bluetooth-instellingen van het systeem.
2. Open in de editor **Gamepad** en zet **Gamepad-blokken inschakelen** aan.
3. Sleep in elke rij de dashboardinvoer terug naar het palet om hem te verwijderen, en sleep de invoer **Gamepad** op zijn plaats. Stel de **Invoer** in: **Linker stick Y** voor rij 1, **Rechter stick X** voor rij 2 en **A** (**Kruis** op PlayStation) voor rij 3.

Elke poort kan maar bij één rij horen, dus een rij stuurt een poort aan vanaf het dashboard of vanaf de gamepad. Meer in [Gamepad](/docs/Application/Dashboard/Gamepad).

## Als er iets niet beweegt {#if-something-does-not-move}

1. Is de hub verbonden? Controleer **Mijn hubs** en het verbindingspuntje op het Hub-blok.
2. Zitten de motoren op de poorten die je in de rijen hebt gekozen?
3. Toont de knop **Problemen** een groen vinkje, en staat elke rij aan?
4. Loopt het programma?
5. Start het programma en kijk naar de live waarden: verandert de waarde bij de invoer maar draait de motor niet, controleer dan de hub en de poort.

Een melding als “Poort B: dit apparaat kan niet als servo werken (een motor met encoder is nodig)” betekent dat de motor op die poort geen encoder heeft. Meer meldingen en oplossingen: [Uitvoeren en problemen oplossen](/docs/Application/Links/Problems) en [Problemen oplossen](/docs/Help/Troubleshooting).

## 8. Opslaan en delen {#save-and-share}

Er is geen knop Opslaan: het profiel bewaart je wijzigingen zelf. Als je bent ingelogd, wordt het ook [gesynchroniseerd](/docs/Application/Account/Sync) met je andere apparaten.

- **Delen als bestand**: tik op **Mijn profielen** op **Delen** op de profielkaart (**Delen…** op een computer). Je krijgt een `.dat`-bestand dat je naar een vriend kunt sturen. Zie [Profielen beheren](/docs/Application/Profiles/ManageProfiles).
- **Publiceren in de catalogus**: open **Profiel bewerken** en tik op **Naar de catalogus sturen**. Voeg eerst een afbeelding, een beschrijving en een hashtag toe. Zie [Catalogus en publiceren](/docs/Application/Profiles/Catalog).

## Volgende stappen {#next-steps}

- Houd de batterij in de gaten: voeg een **Batterijniveau** of een tekst-**Monitor** toe aan het dashboard en een rij *Technic Hub (Batterij) → Indicator*. Zie [Indicatoren en monitors](/docs/Application/Dashboard/Indicators).
- Bouw dezelfde auto met Logicablokken: [Dezelfde auto met Logicablokken](/docs/Tutorials/FirstCarBlocks).
- Meer recepten: een tank, een kraan en een trein in [Voorbeelden](/docs/Application/Links/Examples).
- Geef het dashboard een nieuwe look met [thema's](/docs/Application/Themes/ThemesOverview).
