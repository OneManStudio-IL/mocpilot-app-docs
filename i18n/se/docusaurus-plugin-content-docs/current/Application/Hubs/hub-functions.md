---
id: HubFunctions
title: Hubbspecifika funktioner
description: "Specialfunktioner i Technic Move, BuWizz, SBrick, Mould King, Robot Inventor och andra hubbar i båda redigerarna."
---

# Hubbspecifika funktioner {#hub-specific-functions}

Alla hubbar med portar kan styra motorer och lampor. Vissa hubbar kan mer. I **Snabbkopplingar** visas dessa funktioner i paletten bara när en sådan hubb finns i profilen; i **Logikblock** är de hubbspecifika block.

## Motorer med encoder (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Funktion | Snabbkopplingar | Logikblock |
|---|---|---|
| Hastighetsstyrning | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | ställ in hastighet till, starta motor vid … % hastighet |
| Styrservo med kalibrering | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manuell / Auto) | gå till relativ position, kalibrera kuggstång |
| Vrida en viss vinkel | [Kör ett antal grader](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | köra … för |
| Absolut position (vinkelmotorer) | [Gå till position](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | gå … till position |
| Beteende vid stopp: rulla fritt, broms, håll position | Motor → **Vid stopp** | ställ in motor på … vid stopp |
| Förinställningar för hubbacceleration | Motor → **Hubbacceleration** | ställ in acceleration till, ställ in retardation till |
| Hastighet, position, effekt och ström som indata | [Hubb-ingång](/docs/Application/Links/Blocks/InputBlocks#src-hub) | hastighet, position, relativ position, kraft |

## Technic Move Hub {#technic-move-hub}

Hubben i LEGO® Technics radiostyrda bilar (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Körning, styrning och lampor styrs per funktion, inte per port.
- **Styrning** kalibrerar sin egen kuggstång.
- **Broms**, **Boost** (effektläge) och **Effektpuls** (endast med konfigurationen Batmobile™ Tumbler).
- **Hubbkonfigurationer**: läs in en bilprofil i hubben med **Mina hubbar → Välj konfiguration**. Se [Konfigurationer för Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Lampor i Logikblock: *slå på ljusen* (Technic Move).

## BuWizz 2.0 {#buwizz-20}

- **Effektläge**: Långsam, Normal, Snabb, Ludicrous. Snabbkopplingar: åtgärden [Effektläge](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Logikblock: *ställ in strömläge till* (BuWizz 2).
- Aktuellt effektläge, **utspänning** och motorström som indata.
- Enkel hastighetsstyrning på port 1–4: ingen positionsstyrning.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- **Portfärg**-lysdioder på port 1–4: från en lista eller som RGB ([Portfärg](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *ställ in port LED-färg till* för BuWizz 3).
- Motorström som indata, relativa positioner.

## SBrick och SBrick Plus {#sbrick-and-sbrick-plus}

- Motorer och lampor med hastighetsstyrning.
- Ingen positionsstyrning: Servo, Kör ett antal grader och Gå till position är inte tillgängliga.

## Mould King 4.0 och 6.0 {#mould-king-40-and-60}

- Bara kommandon: inga sensorer, inga knappar, ingen återkoppling om anslutningen.
- **Styrkanal** A, B eller C: åtgärden [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel) i Snabbkopplingar, blocket *ställ in styrkanal till* (Mould King) i Logikblock eller **Välj kanal** i Mina hubbar.
- Upp till 3 Mould King 4.0 eller 1 Mould King 6.0 per profil, och bara en Mould King-typ per profil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

Allt om anslutning, firmware och blocken: [MINDSTORMS Robot Inventor-hubben](/docs/Application/Hubs/RobotInventorHub).

- **LED-matris**: en nivåstapel, ett tal eller en bild i Snabbkopplingar; text och pixlar i Logikblock.
- **Sensorlampor** (avståndssensorns ”ögon”).
- **Stoppdetektering** och motoreffekt.
- Alla block från Robot Inventor-appen: [Rörelse](/docs/Application/BlockBuilder/Blocks/Movement), hubbljud och musik, gester, yaw, kraftsensorn, radio mellan hubbar.
- Klassisk Bluetooth (inte tillgänglig på iPhone och iPad) eller en USB-kabel på Windows och Mac.

## LEGO®-hubbar med färglysdiod {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor och fjärrkontrollen: du kan ställa in hubbens LED-färg från en lista eller som RGB (Snabbkopplingar: [Hubbens LED](/docs/Application/Links/Blocks/OutputBlocks#hub-led), Logikblock: *ställ in LED-färg till*).

## LEGO® Powered Up-fjärrkontroll {#lego-powered-up-remote-control}

Dess knappar är indata, så du kan köra en modell med den fysiska fjärrkontrollen via MOCPilot (Snabbkopplingar: ingången **Hubb** → knapp; Logikblock: händelser för hubbknappar).

## Inbyggda sensorer {#built-in-sensors}

Batterinivå och spänning, korttemperatur, lutning (pitch, roll, yaw), acceleration och orientering finns på de hubbar som har dem. Ställ in **Hubbens orientering** (Snabbkopplingar) eller *ställ in lutningsorientering till* (Logikblock) så att det stämmer med hur hubben är monterad.
