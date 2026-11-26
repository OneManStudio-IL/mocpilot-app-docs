---
id: HubFunctions
title: Hub-specifikke funktioner
description: "Særlige funktioner i Technic Move, BuWizz, SBrick, Mould King, Robot Inventor og andre hubs i begge editorer."
---

# Hub-specifikke funktioner {#hub-specific-functions}

Alle hubs med porte kan styre motorer og lys. Nogle hubs kan mere. I **Hurtige forbindelser** vises disse funktioner kun i paletten, når en sådan hub er med i profilen; i **Logikblokke** er de hub-specifikke blokke.

## Motorer med encoder (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Funktion | Hurtige forbindelser | Logikblokke |
|---|---|---|
| Hastighedsstyring | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | Indstil hastighed, Start motor ved hastighed |
| Styreservo med kalibrering | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manuel / Auto) | Gå til relativ position, Kalibrer styring |
| Drej en bestemt vinkel | [Kør et antal grader](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | Kør i |
| Absolut position (vinkelmotorer) | [Gå til position](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | Gå til position |
| Opførsel ved stop: frihjul, bremse, hold | Motor → **Ved stop** | Indstil motor til … ved stop |
| Forudindstillinger for hubacceleration | Motor → **Hubacceleration** | Indstil acceleration, Indstil deceleration |
| Hastighed, position, effekt, strøm som input | [Hub-input](/docs/Application/Links/Blocks/InputBlocks#src-hub) | Hastighed, Position, Relativ position, Effekt |

## Technic Move Hub {#technic-move-hub}

Hubben i de fjernstyrede LEGO® Technic-biler (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Kørsel, styring og lys styres efter funktion, ikke efter port.
- **Styring** kalibrerer selv sin tandstang.
- **Bremse**, **Boost** (effekttilstand) og **Kraftimpuls** (kun med konfigurationen Batmobile™ Tumbler).
- **Hubkonfigurationer**: Indlæs en bilprofil i hubben med **Mine hubs → Vælg konfiguration**. Se [Technic Move Hub-konfigurationer](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Logikblokke: bilprofilblokkene (*start motorer*, *sæt styring til*, *sæt motorbremse*, *kraftimpuls*, *tænd lys*, *indstil strømtilstand*) eller de almindelige portblokke: motorer `A`, `B` (drift) og `C` (styring; *kalibrer tandstang* på `C`, derefter *gå til relativ position*), lys `1`–`6` hver for sig, hældning, acceleration og orientering. Brug én måde pr. hub: Begge styrer de samme motorer og lys. Se [Motorer → Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub).
- Hurtige forbindelser: **Styring** i Hub-blokken vælger **Bilprofil** (rækkerne kører, styrer og tænder og slukker lysene) eller **Porte** (motorerne `A`, `B`, `C` og lysene `1`–`6`, som på de andre hubs). Se [Hub-blokken og porte → Technic Move Hub](/docs/Application/Links/HubsAndPorts#technic-move-hub). Et [Hub-input](/docs/Application/Links/Blocks/InputBlocks#src-hub) kan også læse dens hældning, acceleration og rotationshastighed.

## BuWizz 2.0 {#buwizz-20}

- **Effekttilstand**: Langsom, Normal, Hurtig, Ludicrous. Hurtige forbindelser: handlingen [Effekttilstand](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Logikblokke: *BuWizz 2 indstil strømtilstand*.
- Den aktuelle effekttilstand, **udgangsspændingen** og motorstrømmen som input.
- Simpel hastighedsstyring på port 1–4: ingen positionsstyring.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- **Portfarve**-LED'er på port 1–4: fra en liste eller som RGB ([Portfarve](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *BuWizz 3 sæt LED-farve til*).
- Motorstrøm som input, relative positioner.

## SBrick og SBrick Plus {#sbrick-and-sbrick-plus}

- Motorer og lys med hastighedsstyring.
- Ingen positionsstyring: Servo, Kør et antal grader og Gå til position er ikke tilgængelige.

## Mould King 4.0 og 6.0 {#mould-king-40-and-60}

- Kun kommandoer: ingen sensorer, ingen knapper, ingen tilbagemelding om forbindelsen.
- **Styrekanal** A, B eller C: handlingen [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) i Hurtige forbindelser, blokken *MouldKing indstil kontrolkanal til* i Logikblokke eller **Vælg kanal** under Mine hubs.
- Op til 3 Mould King 4.0 eller 1 Mould King 6.0 pr. profil og kun én Mould King-type pr. profil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Alt om forbindelse, firmware og blokkene: [MINDSTORMS Robot Inventor-hub](/docs/Application/Hubs/RobotInventorHub).

- **LED-matrix**: en niveaubjælke, et tal eller et billede i Hurtige forbindelser; tekst og pixels i Logikblokke.
- **Lys på afstandssensoren** (sensorens »øjne«).
- **Blokeringsregistrering** og motoreffekt.
- Alle blokkene fra Robot Inventor-appen: [Bevægelse](/docs/Application/BlockBuilder/Blocks/Movement), hublyde og musik, gestusser, gyring, kraftsensoren, radio mellem hubs.
- Klassisk Bluetooth (ikke tilgængelig på iPhone og iPad) eller et USB-kabel på Windows og Mac.

## LEGO®-hubs med farve-LED {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor og fjernbetjeningen: Du kan indstille hubbens LED-farve fra en liste eller som RGB ([Hub-LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led) i Hurtige forbindelser, *sæt LED-farve til* i Logikblokke).

## LEGO® Powered Up-fjernbetjening {#lego-powered-up-remote-control}

Dens knapper er input, så du kan køre en model med den fysiske fjernbetjening via MOCPilot (Hurtige forbindelser: **Hub**-input → Knap; Logikblokke: hændelser for hubbens knapper).

## Indbyggede sensorer {#built-in-sensors}

Batteriniveau og -spænding, printkorttemperatur, hældning (pitch, roll, gir), acceleration og orientering er tilgængelige på hubs, der har dem. Indstil **Hubbens orientering** (Hurtige forbindelser) eller *tilt orientering til* (Logikblokke), så den svarer til, hvordan hubben er monteret.

I Logikblokke rapporterer Technic Hub, Technic Move Hub, Robot Inventor og SPIKE Prime også deres rotationshastighed (gyroskop, *rotationshastighed (°/s)*), og Technic Hub rapporterer den strøm, den trækker (*strøm (mA)*). Se [Sensorer](/docs/Application/BlockBuilder/Blocks/Sensors#hub-state).
