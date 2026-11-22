---
id: LinksIntroducing
title: Introduksjon til Hurtigkoblinger
description: "Hurtigkoblinger kobler kontrollene på dashboardet til motorer og lys på huben, rad for rad, helt uten kode."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Hurtigkoblinger {#quick-links}

**Hurtigkoblinger** er programredigeringen i MOCPilot som ikke krever kode. Du kobler kontroller på dashboardet, spillkontrolleren eller sensorer på huben til motorer, lys og indikatorer, **én rad om gangen**. Har du brukt den klassiske Controlz-appen, vil du føle deg hjemme.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Rader i Hurtigkoblinger" style={{width: '100%', maxWidth: 720}} />

## En rad leses som en setning {#a-row-reads-like-a-sentence}

Hver rad går fra venstre mot høyre:

**Inngang → Behandling (valgfritt) → Handling → Utgang**

> *Joystick 1, Y-akse* → *Myk* → *Motor* → *Technic Hub, port A*
>
> «Når jeg beveger joysticken opp og ned, går motoren på port A, og den starter og stopper mykt.»

| Del | Hva det er | Eksempler |
|---|---|---|
| **Inngang** | hvor verdien kommer fra | en kontroll på dashboardet, det simulerte kjøretøyet, spillkontrolleren, en knapp eller sensor på huben |
| **Behandling** | endrer verdien underveis (ingen, én eller flere blokker) | Inverter, Begrens, Dødsone, Terskel, Myk, Veksle |
| **Handling** | hva huben skal gjøre | Motor, Servo, Motor i en tid, Lys, Kjør et antall grader, Gå til posisjon… |
| **Utgang** | hvor det skjer | en **Hub** med portene sine, eller en direkte utgang: Indikator, Hub-LED, LED-matrise, Kalibrer servoer |

Direkte utganger (Indikator, Hub-LED, LED-matrise, Kalibrer servoer) trenger ingen handling: *Hubbatteri → Indikator*.

## Redigeringsprogrammet {#the-editor}

<Screenshot name="links-editor" alt="Redigeringsprogrammet for Hurtigkoblinger med rader og paletten" width={900} />

- **Radene** fyller skjermen og rulles loddrett. Nye rader starter i den siste, tomme raden («Ny rad: inngang»).
- **Paletten** nederst har tre faner: **Innganger**, **Behandling** og **Utganger**. Den bygges ut fra profilen din: hver kontroll på dashboardet og hver hub i Mine hubber vises automatisk, spillkontrolleren vises når gamepad-blokkene er slått på, og en handling vises bare hvis en hub i profilen kan utføre den.
- Radstatusen i topplinjen, rett før **Kjør**, viser en grønn hake når alle radene er klare, eller et rødt «!» med antall problemer. På en datamaskin står det også **Alle rader er klare** eller **Problemer: N**.

## Bygg en rad {#build-a-row}

1. Dra en inngang fra **Innganger** til den tomme raden. En ny rad opprettes.
2. Ved behov drar du behandlingsblokker fra **Behandling** inn etter inngangen.
3. Dra en handling (for eksempel **Motor**) fra **Utganger**.
4. Dra utgangen **Hub** inn etter handlingen og trykk på portene som skal brukes.
5. Trykk på en blokk for å endre innstillingene: du velger blant brikker, uten å skrive noe.

Blokkene passer sammen som puslespillbiter. Formen på hver skjøt viser hva slags signal det er, så blokker som ikke kan fungere sammen, klikker ikke på plass:

- en **verdi** fra −1 til 1 (joystickakser, skyveknapper, pedaler, sensorer);
- **av/på** (knapper, brytere, terskler);
- skjøten **handling → hub**, slik at en hub bare kan komme etter en handling.

For å fjerne en blokk drar du den tilbake til paletten («Slipp her for å fjerne»), eller trykker på den og velger **Fjern blokk**.

## Rader {#rows}

Trykk på radnummeret for å åpne radmenyen:

- **Slå av** / **Slå på**: en avslått rad blir værende i programmet, men kjører ikke. Praktisk for eksperimenter.
- **Fjern rad**.

Du kan legge til så mange rader du vil.

## Kjør {#run}

Trykk på **Kjør**. Mens programmet kjører, viser hver skjøt **sanntidsverdien** som går gjennom den, slik at du ser nøyaktig hvor et signal stopper. Du kan ikke redigere mens programmet kjører; trykk på **Stopp** for å redigere igjen. Se [Kjøre og rette problemer](/docs/Application/Links/Problems).

## Angre {#undo}

**Angre** og **Gjør om** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z eller knappene i topplinjen) går opptil 100 trinn tilbake. De er ikke tilgjengelige mens programmet kjører.

## Les mer {#read-more}

- [Innganger](/docs/Application/Links/Inputs): kontroller, kjøretøyet, spillkontrolleren, knapper og sensorer på huben
- [Behandling](/docs/Application/Links/Processing): Inverter, Begrens, Dødsone, Terskel, Myk, Veksle
- [Handlinger og utganger](/docs/Application/Links/Operations)
- [Hub-blokken og porter](/docs/Application/Links/HubsAndPorts)
- [Kjøre og rette problemer](/docs/Application/Links/Problems)
- [Eksempler: bil, stridsvogn, kran, tog](/docs/Application/Links/Examples)
- Blokkreferanse: [innganger](/docs/Application/Links/Blocks/InputBlocks), [behandling](/docs/Application/Links/Blocks/ProcessingBlocks), [handlinger og utganger](/docs/Application/Links/Blocks/OutputBlocks)

## Hurtigkoblinger eller Logikkblokker? {#quick-links-or-logic-blocks}

Hurtigkoblinger passer best når hver kontroll bare skal bevege noe. Trenger du logikk (sekvenser, betingelser, variabler eller en reaksjon på en sensor i flere trinn), bruker du [Logikkblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Du velger programtype når du oppretter profilen; se [sammenligningen](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
