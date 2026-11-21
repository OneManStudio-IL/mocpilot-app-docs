---
id: Problems
title: Kørsel og fejlretning
description: "Problempanelet, røde rammer, aktuelle værdier og almindelige meddelelser i Hurtige forbindelser."
---

import Screenshot from '@site/src/components/Screenshot';

# Kørsel og fejlretning {#running-and-fixing-problems}

## Er alt klar? {#is-everything-ready}

Knappen **Problemer** i editorens øverste bjælke viser:

- et **grønt flueben**: »Alle rækker er klar«;
- et **rødt »!«**: »Problemer: N«.

Tryk på den for at åbne problempanelet (et sidepanel på en telefon, en menu på en tablet eller computer). Det viser »Række N — årsag«; tryk på et punkt for at springe til den række. Blokken, der forårsager problemet, har en **rød ramme**. Når alt er i orden, står der i panelet »Alle rækker, der er slået til, kan køre.«

<Screenshot name="links-problems" alt="Problempanelet med en række, der ikke er klar" width={900} />

Rækker med problemer kører ikke; det gør de øvrige rækker.

## Almindelige meddelelser {#common-messages}

| Meddelelse | Hvad du skal gøre |
|---|---|
| Træk et input og et output (en hub eller en dashboardindikator) ind i rækken | rækken er tom |
| Tilføj et input i starten af rækken | træk først en kontrol, køretøjet, spilcontrolleren eller et hubinput ind |
| Tilføj et output: en hub eller en dashboardindikator | afslut rækken med et output |
| Tilføj en handling før hubben: motor, servo, lys | et Hub-output kræver en handling foran sig |
| Vælg mindst én port på hubben | tryk på en portknap på Hub-blokken |
| Vælg en dashboardcontroller | tryk på inputblokken, og vælg en kontrol |
| … bevæger sig ikke langs denne akse | joysticket har kun én akse: vælg den anden akse, eller skift joysticket |
| Vælg, hvad … giver | kontrollen har ikke længere denne kanal: vælg en |
| Vælg køretøjets pedaler | inputtet Køretøj kræver pedaler på dashboardet |
| … er ikke på dashboardet | gearstangen eller håndbremsen, der var valgt til Køretøj, er fjernet |
| »…« virker ikke med denne controller | denne behandlingsblok passer ikke til signalet |
| Port A: denne enhed kan ikke fungere som servo (en motor med encoder kræves) | brug en motor med encoder eller en anden handling |
| Port A har en sensor, ikke en motor | tjek, hvad der er sat i porten |
| Port A bruges også i række 2 | hver port kan kun høre til én række |
| Slå spilcontrollerblokke til på siden Spilcontroller (øverste bjælke) | åbn **Spilcontroller**, og slå **Aktivér gamepad-blokke** til |
| Indikatoren viser værdien, som den er: fjern handlingen | en Indikator-række har ingen handling |
| Kalibrering kræver ingen handling: fjern den | en Kalibrer servoer-række har ingen handling |
| Vælg en hub med farve-LED (LEGO-hubs) | Hub-LED virker kun på LEGO®-hubs |
| Portfarver findes kun på BuWizz 3 | Portfarve kræver en BuWizz 3.0 Pro |
| Ingen servo i kalibreringstilstanden Auto i dette program | Kalibrer servoer kræver en Servo i tilstanden Auto |
| Denne blok kræver en nyere version af appen | profilen er lavet i en nyere version: opdater MOCPilot |
| Rækken er slået fra | slå den til i rækkemenuen |

## Aktuelle værdier {#live-values}

Mens programmet kører, viser hver samling mellem blokkene den værdi, der passerer igennem. Bevæg en kontrol, og følg værdien hen ad rækken:

- intet ændrer sig ved inputtet: kontrollen eller spilcontrolleren sender ikke noget; tjek kanalen eller aksen;
- værdien ændrer sig, men motoren bevæger sig ikke: tjek hubbens forbindelsesprik og porten;
- værdien er lille efter **Begrænsning** eller **Dødzone**: juster deres indstillinger.

<Screenshot name="links-live-values" alt="Et kørende program i Hurtige forbindelser med aktuelle værdier på samlingerne" width={900} />

## Modellen bevæger sig ikke {#the-model-does-not-move}

1. Er hubben forbundet? Tjek **Mine hubs** og forbindelsesprikken på Hub-blokken.
2. Er den rigtige port valgt? Sidder motorerne der, hvor du tror?
3. Er rækken slået til og uden rød ramme?
4. Kører programmet (**Kør**)?
5. Er batteriet opladet? Tilføj en række *Batteri → Indikator* for at holde øje med det.

Mere under [Fejlfinding](/docs/Help/Troubleshooting).
