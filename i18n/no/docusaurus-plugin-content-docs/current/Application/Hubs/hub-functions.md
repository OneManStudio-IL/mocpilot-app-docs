---
id: HubFunctions
title: Hubspesifikke funksjoner
description: "Spesialfunksjoner i Technic Move, BuWizz, SBrick, Mould King, Robot Inventor og andre hubber i begge redigeringsprogrammene."
---

# Hubspesifikke funksjoner {#hub-specific-functions}

Alle hubber med porter kan styre motorer og lys. Noen hubber kan mer. I **Hurtigkoblinger** vises disse funksjonene i paletten bare når en slik hub finnes i profilen; i **Logikkblokker** er de hubspesifikke blokker.

## Motorer med enkoder (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Funksjon | Hurtigkoblinger | Logikkblokker |
|---|---|---|
| Hastighetsstyring | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | Sett hastighet, Start motor på hastighet |
| Styreservo med kalibrering | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manuell / Auto) | Gå til relativ posisjon, Kalibrer styring |
| Drei en vinkel | [Kjør et antall grader](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | Kjør i |
| Absolutt posisjon (vinkelmotorer) | [Gå til posisjon](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | Gå til posisjon |
| Oppførsel ved stopp: rull fritt, brems, hold | Motor → **Ved stopp** | Sett motorens oppførsel ved stopp |
| Forhåndsinnstillinger for hubakselerasjon | Motor → **Hubakselerasjon** | Sett akselerasjon, Sett retardasjon |
| Hastighet, posisjon, effekt og strøm som inngang | [Hub-inngang](/docs/Application/Links/Blocks/InputBlocks#src-hub) | Hastighet, Posisjon, Relativ posisjon, Kraft |

## Technic Move Hub {#technic-move-hub}

Huben i de fjernstyrte LEGO® Technic-bilene (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Kjøring, styring og lys styres etter funksjon, ikke etter port.
- **Styring** kalibrerer sin egen tannstang.
- **Brems**, **Boost** (effektmodus) og **Kraftpuls** (bare med Batmobile™ Tumbler-konfigurasjonen).
- **Hubkonfigurasjoner**: last en bilprofil inn i huben med **Mine hubber → Velg konfigurasjon**. Se [Konfigurasjoner for Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Logikkblokker: bilprofilblokkene (*start motorer*, *sett styring til*, *sett motorbremsen*, *kraftpuls*, *slå på lysene*, *sett strømmodus*) eller de vanlige portblokkene: motorer `A`, `B` (drift) og `C` (styring; *kalibrer tannstang* på `C`, deretter *gå til relativ posisjon*), lys `1`–`6` hver for seg, helling, akselerasjon og orientering. Bruk én måte per hub: begge styrer de samme motorene og lysene. Se [Motorer → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub).
- Hurtigkoblinger: **Styring** i Hub-blokken velger **Bilprofil** (radene kjører, styrer og slår lysene av og på) eller **Porter** (motorene `A`, `B`, `C` og lysene `1`–`6`, som på de andre hubbene). Se [Hub-blokken og porter → Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub). En [Hub-inngang](/docs/Application/Links/Blocks/InputBlocks#src-hub) kan også lese hellingen, akselerasjonen og rotasjonshastigheten.

## BuWizz 2.0 {#buwizz-20}

- **Effektmodus**: Sakte, Normal, Rask, Ludicrous. Hurtigkoblinger: operasjonen [Effektmodus](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Logikkblokker: *BuWizz 2 sett strømmodus*.
- Gjeldende effektmodus, **utgangsspenningen** og motorstrømmen som innganger.
- Enkel hastighetsstyring på port 1–4: ingen posisjonsstyring.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- **Portfarge**-LED-er på port 1–4: fra en liste eller som RGB ([Portfarge](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *BuWizz 3 sett LED-farge*).
- Motorstrøm som inngang, relative posisjoner.

## SBrick og SBrick Plus {#sbrick-and-sbrick-plus}

- Motorer og lys med hastighetsstyring.
- Ingen posisjonsstyring: Servo, Kjør et antall grader og Gå til posisjon er ikke tilgjengelige.

## Mould King 4.0 og 6.0 {#mould-king-40-and-60}

- Bare kommandoer: ingen sensorer, ingen knapper, ingen tilbakemelding om tilkobling.
- **Styrekanal** A, B eller C: operasjonen [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) i Hurtigkoblinger, blokken *MouldKing sett styrekanal* i Logikkblokker eller **Velg kanal** i Mine hubber.
- Opptil 3 Mould King 4.0 eller 1 Mould King 6.0 per profil, og bare én Mould King-type per profil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Alt om tilkobling, fastvare og blokkene: [MINDSTORMS Robot Inventor-huben](/docs/Application/Hubs/RobotInventorHub).

- **LED-matrise**: en nivåstolpe, et tall eller et bilde i Hurtigkoblinger; tekst og piksler i Logikkblokker.
- **Sensorlys** på avstandssensoren (sensorens «øyne»).
- **Stall-deteksjon** og motoreffekt.
- Alle blokkene fra Robot Inventor-appen: [Bevegelse](/docs/Application/BlockBuilder/Blocks/Movement), hublyder og musikk, gester, yaw, kraftsensoren, radio mellom hubber.
- Klassisk Bluetooth (ikke tilgjengelig på iPhone og iPad) eller en USB-kabel på Windows og Mac.

## LEGO®-hubber med farge-LED {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor og fjernkontrollen: du kan angi fargen på hub-LED-en fra en liste eller som RGB (Hurtigkoblinger [Hub-LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led), Logikkblokker *sett LED-farge til*).

## LEGO® Powered Up Remote Control {#lego-powered-up-remote-control}

Knappene er innganger, så du kan kjøre en modell med den fysiske fjernkontrollen via MOCPilot (Hurtigkoblinger: **Hub**-inngang → Knapp; Logikkblokker: hendelser for hubknapper).

## Innebygde sensorer {#built-in-sensors}

Batterinivå og spenning, korttemperatur, helning (stigning, rulling, yaw), akselerasjon og orientering er tilgjengelige på hubber som har dem. Still inn **Huborientering** (Hurtigkoblinger) eller *sett tiltorientering til* (Logikkblokker) slik at det passer med hvordan huben er montert.

I Logikkblokker rapporterer Technic Hub, Technic Move Hub, Robot Inventor og SPIKE Prime også rotasjonshastigheten sin (gyroskop, *rotasjonshastighet (°/s)*), og Technic Hub rapporterer strømmen den trekker (*strøm (mA)*). Se [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors#hub-state).
