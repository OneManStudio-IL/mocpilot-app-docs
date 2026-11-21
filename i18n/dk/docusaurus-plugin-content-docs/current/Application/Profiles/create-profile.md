---
id: CreateProfile
title: Opret en profil
description: "Opret en profil, og vælg mellem programeditorerne Logikblokke og Hurtige forbindelser."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Opret en profil {#create-a-profile}

1. Gå til **Mine profiler**.
   - Telefon: tryk på **+** → **Ny profil**.
   - Tablet: **Ny profil** i overskriften.
   - Computer: **Fil → Ny profil** (⌘N / Ctrl+N).
2. Vælg **programtype** (se nedenfor).
3. Udfyld profilens oplysninger.
4. Tryk på **Opret**. Profilen åbnes i editoren.

<Screenshot name="create-profile-tiles" alt="Siden Ny profil" width={900} />

## Vælg programtype {#choose-the-program-type}

Programtypen bestemmer, hvilken editor profilen bruger. **Du kan ikke ændre den senere.** Hvis du vil prøve den anden editor, så opret en profil mere.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Hurtige forbindelser" style={{width: '100%', maxWidth: 320}} />
    <h3>Hurtige forbindelser</h3>
    <p><em>Et forenklet skema som i Controlz.</em> Forbind dashboardets kontroller med hubbens motorer og lys række for række: input, behandling, handling, hub. Klar på få minutter.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Logikblokke" style={{width: '100%', maxWidth: 320}} />
    <h3>Logikblokke</h3>
    <p><em>Robotteknik, algoritmer og avancerede scenarier.</em> Programmér modellen med blokke: hændelser, løkker, betingelser, variabler og sensordata. Til robotter og automatisering.</p>
  </div>
</div>

| | Hurtige forbindelser | Logikblokke |
|---|---|---|
| Sådan bygger du | Rækker: input → behandling → handling → hub | Blokke sat sammen til scripts |
| Indlæringstid | Minutter | Længere; flere muligheder |
| Bedst til | Biler, lastbiler, tog, kraner: "denne kontrol bevæger den motor" | Robotter, automatiske sekvenser, sensorlogik, spil |
| Logik (hvis, løkker, variabler) | Nej (kun tærskler og skift) | Ja |
| Sensorer | Hubsensorer som input; værdier til indikatorer | Alle hub- og telefonsensorer, enhver beregning |
| Blød start, grænser, dødzone | Færdige blokke | Bygges med blokke |
| Servostyring med kalibrering | Færdig blok | Blokke |
| Gamepad | Ja | Ja |
| Flere hubs | Ja | Ja |

**Usikker?** Start med Hurtige forbindelser. Hvis du senere får brug for logik, så lav en profil med Logikblokke til modellen.

Hvis du trykker på **Opret** uden at vælge en type, fremhæves felterne. Hvert felt har et link **Dokumentation ↗** til den relevante del af denne dokumentation.

## Profilens oplysninger {#profile-details}

- **Billede**: klik på billedområdet (tryk længe på det på en touchskærm) for at vælge et billede. Træk billedet op eller ned for at vælge den del, der vises. **Opdater billede** og **Fjern** ændrer det senere.
- **Navn**: påkrævet, og det skal være unikt: "En profil med navnet … findes allerede" betyder, at du allerede har en med dette navn.
- **Blokniveau** (kun Logikblokke): **Begynder**, **Avanceret** eller **Guru**. Det bestemmer, hvilke blokke paletten viser for denne profil. Du kan ændre det senere i Editorindstillinger. Se [Arbejde i editoren](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtags**: beskriver profilen og hjælper andre med at finde den. Hashtags kommer fra en fælles liste, som indlæses, når du er online.

Alt undtagen programtypen kan ændres senere i **Rediger profil**, hvor du også kan tilføje en beskrivelse og markere profilen som **Favorit**.

## Næste skridt {#next-steps}

1. Tilføj hubs: [Tilføj og forbind en hub](/docs/Application/Hubs/ConnectingHubs).
2. Placer kontroller: [Dashboard](/docs/Application/Dashboard/DashboardOverview).
3. Skriv programmet: [Hurtige forbindelser](/docs/Application/Links/LinksIntroducing) eller [Logikblokke](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip AI-bygger
Med [MocPilot Pro](/docs/Application/Account/Pro) kan du beskrive din model med ord eller stemme og lade AI-byggeren oprette hubs, dashboard og program (Logikblokke eller Hurtige forbindelser). Fortæl, hvilken hub du bruger, hvad der sidder på hver port, og hvad det skal gøre. Se [Sådan får du et godt resultat](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
