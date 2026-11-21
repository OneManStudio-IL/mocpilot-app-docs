---
id: CreateProfile
title: Opprett en profil
description: "Opprett en profil og velg mellom programeditorene Logikkblokker og Hurtigkoblinger."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Opprett en profil {#create-a-profile}

1. Gå til **Mine profiler**.
   - Telefon: trykk **+** → **Ny profil**.
   - Nettbrett: **Ny profil** øverst på siden.
   - Datamaskin: **Fil → Ny profil** (⌘N / Ctrl+N).
2. Velg **programtype** (se nedenfor).
3. Fyll ut opplysningene om profilen.
4. Trykk **Opprett**. Profilen åpnes i editoren.

<Screenshot name="create-profile-tiles" alt="Siden Ny profil" width={900} />

## Velg programtype {#choose-the-program-type}

Programtypen bestemmer hvilken editor profilen bruker. **Den kan ikke endres senere.** Vil du prøve den andre editoren, oppretter du en profil til.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Hurtigkoblinger" style={{width: '100%', maxWidth: 320}} />
    <h3 id="quick-links">Hurtigkoblinger</h3>
    <p><em>Et forenklet oppsett, som i Controlz.</em> Koble dashboardkontroller til motorer og lys på hubben rad for rad: inngang, behandling, handling, hub. Klart på få minutter.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Logikkblokker" style={{width: '100%', maxWidth: 320}} />
    <h3 id="logic-blocks">Logikkblokker</h3>
    <p><em>Robotikk, algoritmer og avanserte scenarier.</em> Programmer modellen med blokker: hendelser, løkker, betingelser, variabler og sensordata. For roboter og automatisering.</p>
  </div>
</div>

| | Hurtigkoblinger | Logikkblokker |
|---|---|---|
| Slik bygger du | Rader: inngang → behandling → handling → hub | Blokker som klikkes sammen til skript |
| Læringstid | Minutter | Lengre; flere muligheter |
| Best for | Biler, lastebiler, tog, kraner: «denne kontrollen beveger den motoren» | Roboter, automatiske sekvenser, sensorlogikk, spill |
| Logikk (hvis, løkker, variabler) | Nei (bare terskler og veksling) | Ja |
| Sensorer | Hubsensorer som innganger; verdier til indikatorer | Alle sensorer i hubber og telefon, alle slags beregninger |
| Myk start, grenser, dødsone | Ferdige blokker | Bygges med blokker |
| Servostyring med kalibrering | Ferdig blokk | Blokker |
| Spillkontroller | Ja | Ja |
| Flere hubber | Ja | Ja |

**Usikker?** Begynn med Hurtigkoblinger. Hvis du senere trenger logikk, lager du en Logikkblokker-profil for modellen.

Hvis du trykker **Opprett** uten å velge type, blir flisene uthevet. Hver flis har en **Dokumentasjon ↗**-lenke til sin del av denne dokumentasjonen.

## Opplysninger om profilen {#profile-details}

- **Bilde**: klikk på bildeområdet (hold fingeren på det på en berøringsskjerm) for å velge et bilde. Dra bildet opp eller ned for å velge hvilken del som vises. **Oppdater bilde** og **Fjern** endrer det senere.
- **Namn**: påkrevd, og det må være unikt: «Profil med navnet «…» finnes allerede» betyr at du allerede har en profil med dette navnet.
- **Blokknivå** (bare Logikkblokker): **Nybegynner**, **Avansert** eller **Guru**. Det styrer hvilke blokker paletten viser for denne profilen. Du kan endre det senere i Editorinnstillinger. Se [Arbeide i editoren](/docs/Application/BlockBuilder/Editor#block-levels).
- **Emneknagger**: beskriver profilen og hjelper andre med å finne den. Emneknaggene kommer fra en felles liste, som lastes inn når du er på nett.

Alt unntatt programtypen kan endres senere i **Rediger profil**, der du også kan legge til en beskrivelse og merke profilen som **Favoritt**.

## Neste steg {#next-steps}

1. Legg til hubber: [Legg til og koble til en hub](/docs/Application/Hubs/ConnectingHubs).
2. Plasser kontroller: [Dashboard](/docs/Application/Dashboard/DashboardOverview).
3. Skriv programmet: [Hurtigkoblinger](/docs/Application/Links/LinksIntroducing) eller [Logikkblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip AI-bygger
Med [MocPilot Pro](/docs/Application/Account/Pro) kan du beskrive modellen din med ord eller med stemmen og la AI-byggeren lage hubbene, dashboardet og programmet (Logikkblokker eller Hurtigkoblinger). Si hvilken hub du bruker, hva som er koblet til hver port og hva det skal gjøre. Se [Slik får du et godt resultat](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
