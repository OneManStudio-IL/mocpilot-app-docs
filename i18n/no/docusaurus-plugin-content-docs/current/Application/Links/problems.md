---
id: Problems
title: Kjøre og rette problemer
description: "Problempanelet, røde rammer, sanntidsverdier og vanlige meldinger i Hurtigkoblinger."
---

import Screenshot from '@site/src/components/Screenshot';

# Kjøre og rette problemer {#running-and-fixing-problems}

## Er alt klart? {#is-everything-ready}

Knappen **Problemer** i topplinjen i redigeringsprogrammet viser:

- en **grønn hake**: «Alle rader er klare»;
- et **rødt «!»**: «Problemer: N».

Trykk på den for å åpne problempanelet (et sidepanel på telefon, en meny på nettbrett eller datamaskin). Det viser «Rad N — årsak»; trykk på et element for å gå til den raden. Blokken som forårsaker problemet, har en **rød ramme**. Når alt er i orden, står det i panelet «Alle rader som er slått på, kan kjøre.»

<Screenshot name="links-problems" alt="Problempanelet med en rad som ikke er klar" width={900} />

Rader med problemer kjører ikke; de andre radene gjør det.

## Vanlige meldinger {#common-messages}

| Melding | Hva du gjør |
|---|---|
| Dra en inngang og en utgang (en hub eller en dashboardindikator) inn i raden | raden er tom |
| Legg til en inngang i starten av raden | dra først inn en kontroll, kjøretøyet, spillkontrolleren eller en hub-inngang |
| Legg til en utgang: en hub eller en dashboardindikator | avslutt raden med en utgang |
| Legg til en handling før huben: motor, servo, lys | en Hub-utgang trenger en handling foran seg |
| Velg minst én port på huben | trykk på en portbrikke på Hub-blokken |
| Velg en dashboardkontroller | trykk på inngangsblokken og velg en kontroll |
| … beveger seg ikke langs denne aksen | joysticken har bare én akse: velg den andre aksen eller endre joysticken |
| Velg hva … gir | kontrollen har ikke lenger denne kanalen: velg en |
| Velg pedalene til kjøretøyet | Kjøretøy-inngangen krever pedaler på dashboardet |
| … er ikke på dashboardet | girspaken eller handbrekket som er valgt for Kjøretøy, er fjernet |
| «…» fungerer ikke med denne kontrolleren | denne behandlingsblokken passer ikke til signalet |
| Port A: denne enheten kan ikke fungere som servo (en motor med enkoder trengs) | bruk en motor med enkoder eller en annen handling |
| Port A har en sensor, ikke en motor | sjekk hva som er koblet til porten |
| Port A brukes også i rad 2 | hver port kan bare høre til én rad |
| Slå på spillkontrollerblokker på Spillkontroller-siden (topplinjen) | åpne **Spillkontroller** og slå på **Aktiver gamepad-blokker** |
| Indikatoren viser verdien som den er: fjern handlingen | en Indikator-rad har ingen handling |
| Kalibrering trenger ingen handling: fjern den | en rad med Kalibrer servoer har ingen handling |
| Velg en hub med farge-LED (LEGO-hubber) | Hub-LED fungerer bare på LEGO®-hubber |
| Portfarger er bare tilgjengelig på BuWizz 3 | Portfarge krever en BuWizz 3.0 Pro |
| Ingen servo med kalibrering Auto i dette programmet | Kalibrer servoer krever en Servo i Auto-modus |
| Denne blokken krever en nyere versjon av appen | profilen ble laget i en nyere versjon: oppdater MOCPilot |
| Raden er slått av | slå den på i radmenyen |

## Sanntidsverdier {#live-values}

Mens programmet kjører, viser hver skjøt mellom blokkene verdien som går gjennom den. Beveg en kontroll og følg verdien langs raden:

- ingenting endres ved inngangen: kontrollen eller spillkontrolleren sender ingenting; sjekk kanalen eller aksen;
- verdien endres, men motoren beveger seg ikke: sjekk tilkoblingsprikken på huben og porten;
- verdien er liten etter **Begrens** eller **Dødsone**: juster innstillingene deres.

<Screenshot name="links-live-values" alt="Et kjørende program i Hurtigkoblinger med sanntidsverdier på skjøtene" width={900} />

## Modellen beveger seg ikke {#the-model-does-not-move}

1. Er huben tilkoblet? Sjekk **Mine hubber** og tilkoblingsprikken på Hub-blokken.
2. Er riktig port valgt? Er motorene koblet til der du tror?
3. Er raden slått på, uten rød ramme?
4. Kjører programmet (**Kjør**)?
5. Er batteriet ladet? Legg til en rad *Batteri → Indikator* for å holde øye med det.

Mer i [Feilsøking](/docs/Help/Troubleshooting).
