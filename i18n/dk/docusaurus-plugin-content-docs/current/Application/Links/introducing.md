---
id: LinksIntroducing
title: Introduktion til Hurtige forbindelser
description: "Hurtige forbindelser kobler dashboardets kontroller til hubbens motorer og lys række for række – helt uden kode."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Hurtige forbindelser {#quick-links}

**Hurtige forbindelser** er MOCPilots programeditor uden kode. Du forbinder dashboardets kontroller, spilcontrolleren eller hubbens sensorer med motorer, lys og indikatorer – **én række ad gangen**. Har du brugt den klassiske Controlz-app, vil du hurtigt føle dig hjemme.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Rækker i Hurtige forbindelser" style={{width: '100%', maxWidth: 720}} />

## En række læses som en sætning {#a-row-reads-like-a-sentence}

Hver række læses fra venstre mod højre:

**Input → Behandling (valgfri) → Handling → Output**

> *Joystick 1, Y-akse* → *Blød* → *Motor* → *Technic Hub, port A*
>
> »Når jeg bevæger joysticket op og ned, drejer motoren på port A og starter og stopper blødt.«

| Del | Hvad det er | Eksempler |
|---|---|---|
| **Input** | hvor værdien kommer fra | en kontrol på dashboardet, det simulerede køretøj, spilcontrolleren, en knap eller sensor på hubben |
| **Behandling** | ændrer værdien undervejs (ingen, én eller flere blokke) | Inverter, Begrænsning, Dødzone, Tærskel, Blød, Skift |
| **Handling** | hvad hubben skal gøre | Motor, Servo, Motor i tid, Lys, Kør et antal grader, Gå til position… |
| **Output** | hvor det sker | en **Hub** med sine porte eller et direkte output: Indikator, Hub-LED, LED-matrix, Kalibrer servoer |

Direkte output (Indikator, Hub-LED, LED-matrix, Kalibrer servoer) kræver ingen handling: *Hubbens batteri → Indikator*.

## Editoren {#the-editor}

<Screenshot name="links-editor" alt="Editoren i Hurtige forbindelser med rækker og palet" width={900} />

- **Rækkerne** fylder skærmen og rulles lodret. Nye rækker starter i den sidste, tomme række (»Ny række: input«).
- **Paletten** nederst har tre faner: **Input**, **Behandling** og **Output**. Den bygges ud fra din profil: hver kontrol på dashboardet og hver hub under Mine hubs vises automatisk, spilcontrolleren vises, når spilcontrollerblokkene er slået til, og en handling vises kun, hvis en hub i profilen kan udføre den.
- Knappen **Problemer** i den øverste bjælke viser et grønt flueben, når alle rækker er klar, eller et rødt »!« med antallet af problemer.

## Byg en række {#build-a-row}

1. Træk et input fra **Input** ind i den tomme række. Der oprettes en ny række.
2. Træk om nødvendigt behandlingsblokke fra **Behandling** ind efter inputtet.
3. Træk en handling (for eksempel **Motor**) fra **Output**.
4. Træk outputtet **Hub** ind efter handlingen, og tryk på de porte, der skal bruges.
5. Tryk på en blok for at ændre dens indstillinger: Du vælger mellem knapper og skal ikke skrive noget.

Blokkene passer sammen som puslespilsbrikker. Formen på hver samling viser signaltypen, så blokke, der ikke kan arbejde sammen, ikke klikker fast:

- en **værdi** fra −1 til 1 (joystickakser, skydere, pedaler, sensorer);
- **til/fra** (knapper, kontakter, tærskler);
- samlingen **handling → hub**, så en hub kun kan følge efter en handling.

Du fjerner en blok ved at trække den tilbage til paletten (»Slip her for at fjerne«) eller ved at trykke på den og vælge **Fjern blok**.

## Rækker {#rows}

Tryk på rækkens nummer for at åbne rækkemenuen:

- **Slå fra** / **Slå til**: En række, der er slået fra, bliver i programmet, men kører ikke. Praktisk til eksperimenter.
- **Fjern række**.

Du kan tilføje så mange rækker, du vil.

## Kør {#run}

Tryk på **Kør**. Mens programmet kører, viser hver samling den **aktuelle værdi**, der passerer igennem, så du kan se præcis, hvor et signal stopper. Du kan ikke redigere, mens programmet kører – tryk på **Stop** for at redigere igen. Se [Kørsel og fejlretning](/docs/Application/Links/Problems).

## Fortryd {#undo}

**Fortryd** og **Gentag** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z eller de svævende knapper) går op til 100 trin tilbage. De er ikke tilgængelige, mens programmet kører.

## Læs mere {#read-more}

- [Input](/docs/Application/Links/Inputs): kontroller, køretøjet, spilcontrolleren, hubbens knapper og sensorer
- [Behandling](/docs/Application/Links/Processing): Inverter, Begrænsning, Dødzone, Tærskel, Blød, Skift
- [Handlinger og output](/docs/Application/Links/Operations)
- [Hub-blokken og porte](/docs/Application/Links/HubsAndPorts)
- [Kørsel og fejlretning](/docs/Application/Links/Problems)
- [Eksempler: bil, kampvogn, kran, tog](/docs/Application/Links/Examples)
- Blokoversigt: [input](/docs/Application/Links/Blocks/InputBlocks), [behandling](/docs/Application/Links/Blocks/ProcessingBlocks), [handlinger og output](/docs/Application/Links/Blocks/OutputBlocks)

## Hurtige forbindelser eller Logikblokke? {#quick-links-or-logic-blocks}

Hurtige forbindelser er ideelt, når hver kontrol blot skal bevæge noget. Har du brug for logik (sekvenser, betingelser, variabler eller en reaktion i flere trin på en sensor), så brug [Logikblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Du vælger programtypen, når du opretter profilen; se [sammenligningen](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
