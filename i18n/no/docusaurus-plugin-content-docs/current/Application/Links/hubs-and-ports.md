---
id: HubsAndPorts
title: Hub-blokken og porter
description: "Hub-blokken i Hurtigkoblinger, valg av porter, portkontroller og spørsmålet om porten allerede er i bruk."
---

import Screenshot from '@site/src/components/Screenshot';

# Hub-blokken og porter {#hub-block-and-ports}

Utgangen [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) avslutter en rad etter en handling. Det finnes én Hub-blokk per hub i **Mine hubber**, så legg til hubbene dine der først. Inntil du gjør det, står det i fanen «Legg til hubber i Mine hubber eller indikatorer på dashboardet: de vises her».

## Hva Hub-blokken viser {#what-the-hub-block-shows}

- navnet på huben og en **tilkoblingsprikk** (tilkoblet eller ikke);
- **portene** som brikker: A, B, C, D… på LEGO®-hubber og SBrick (A–F på Robot Inventor og Mould King 6.0), 1–4 på BuWizz 2.0, 1–4 pluss A og B på BuWizz 3.0 Pro;
- en undertittel: «porter A, B», «velg porter», «hele huben» (etter en handling for hele huben) eller «kjøring, styring, lys» (Technic Move i modusen **Bilprofil**).

## Velg porter {#choose-ports}

Trykk på en portbrikke for å bruke den; trykk igjen for å frigjøre den. Én rad kan styre **flere porter** samtidig, for eksempel to drivmotorer på A og B.

Trenger du to motorer som går hver sin vei? Lag to rader fra samme inngang og legg til **Inverter** i den ene.

## Én port, én rad {#one-port-one-row}

En port hører til én rad. Velger du en port som en annen rad allerede bruker, spør MOCPilot:

> **Porten er allerede i bruk**: På «Technic Hub» brukes port A i rad 2 (Motor). Bruke den i denne raden? Den andre raden mister porten og slutter å styre den.

**Bruk i denne raden** flytter porten; **Avbryt** lar den bli der den var. En port som brukes av to rader (for eksempel i en gammel fil), rapporteres som et problem: «Port A brukes også i rad 2».

<Screenshot name="port-in-use" alt="Dialogen Porten er allerede i bruk" width={700} />

## Portkontroller {#port-checks}

Når huben er tilkoblet, vet MOCPilot hva som er koblet til hver port, og sjekker at handlingen passer:

| Problem | Betydning |
|---|---|
| «Port A: denne enheten kan ikke fungere som servo (en motor med enkoder trengs)» | Servo og Kjør et antall grader krever en motor med enkoder |
| «Port A: motoren har ingen absolutt posisjon (kun vinkelmotorer)» | Gå til posisjon krever en vinkelmotor |
| «Port A har en sensor, ikke en motor» | enheten på porten er en sensor |
| «Port A tar bare enkle hastighetskommandoer: ingen posisjonsstyring» | denne porten kan ikke styre posisjoner |
| «Port A har ingen LED: bruk port 1-4» | Portfarge fungerer bare på port 1–4 på BuWizz 3.0 Pro |
| «Sensorlys: velg én port, den med avstandssensoren» | Sensorlys tar nøyaktig én port |
| «Port A: ingen fargesensor der» | Fargesensorens lys og inngangene fargetone, fargemetning og fargelysstyrke krever en fargesensor på porten |

Handlinger en hub ikke kan utføre, tilbys ikke for den. Bytter du en rad til en annen hub, viser raden hvilken handling som ikke passer, for eksempel «Brems: kun Technic Move (… har ingen bremsekommando)».

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (i de fjernstyrte LEGO® Technic-bilene) kan styres på to måter. Velg én med **Styring** i Hub-blokkens vindu: **Bilprofil** (standard) eller **Porter**. Valget hører til huben, så alle Hub-blokker for den huben bruker det samme.

- **Bilprofil**: Huben styres etter funksjon, ikke etter port. Hub-blokken viser **kjøring, styring, lys** og tar ingen porter. Bruk **Motor** eller **Motor i en tid** for å kjøre, **Servo** for å styre, **Lys** for lysene og **Brems**, **Boost** og **Kraftpuls** for spesialfunksjonene. Kjøring, styring, lys, brems og boost kan hver bare brukes av én rad («Rad 2 driver denne Technic Move allerede»).
- **Porter**: Huben fungerer som de andre hubbene med porter. Motorene er portene `A`, `B` (drivmotorene) og `C` (styremotoren): **Motor**, **Motor i en tid**, **Servo** (med kalibreringen **Auto** på `C`), **Kjør et antall grader**, **Gå til posisjon**, **Ved stopp** og **Hubakselerasjon** virker på dem. De seks lysene er portene `1`–`6` i **Lys**-rader. En [Hub-inngang](/docs/Application/Links/Blocks/InputBlocks#src-hub) leser motorenes hastighet og vinkel. **Brems**, **Boost** og **Kraftpuls** virker bare i modusen **Bilprofil**.

En rad som ikke passer til hubens modus, er et problem som sier hva du skal bytte: «… styres av bilprofilen: bytt huben til «Porter» for dette» eller «… styres port for port: bytt huben til «Bilprofil» for dette». Profiler som ble laget før dette valget fantes, åpnes i modusen **Bilprofil**.

For å laste en bilkonfigurasjon inn i huben (Porsche, Lamborghini, Batmobile) bruker du **Mine hubber → Velg konfigurasjon**. Se [Konfigurasjoner for Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Mould King-hubber tar bare imot kommandoer, så de har ingen innganger og gir ingen tilbakemelding om tilkobling. For å bytte styrekanal på huben bruker du handlingen [Kanal](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
