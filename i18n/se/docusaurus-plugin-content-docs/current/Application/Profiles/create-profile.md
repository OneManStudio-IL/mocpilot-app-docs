---
id: CreateProfile
title: Skapa en profil
description: "Skapa en profil och välj mellan programredigerarna Logikblock och Snabbkopplingar."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Skapa en profil

1. Gå till **Mina profiler**.
   - Telefon: tryck på **+** → **Ny profil**.
   - Surfplatta: **Ny profil** i sidhuvudet.
   - Dator: **Fil → Ny profil** (⌘N / Ctrl+N).
2. Välj **programtyp** (se nedan).
3. Fyll i profilens uppgifter.
4. Tryck på **Skapa**. Profilen öppnas i redigeraren.

<Screenshot name="create-profile-tiles" alt="Sidan Ny profil" width={900} />

## Välj programtyp {#choose-the-program-type}

Programtypen avgör vilken redigerare profilen använder. **Den kan inte ändras i efterhand.** Om du vill prova den andra redigeraren skapar du en andra profil.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Snabbkopplingar" style={{width: '100%', maxWidth: 320}} />
    <h3>Snabbkopplingar</h3>
    <p><em>Ett förenklat schema, som i Controlz.</em> Koppla kontroller på instrumentpanelen till hubbens motorer och lampor rad för rad: ingång, bearbetning, åtgärd, hubb. Klart på några minuter.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Logikblock" style={{width: '100%', maxWidth: 320}} />
    <h3>Logikblock</h3>
    <p><em>Robotik, algoritmer och avancerade scenarier.</em> Programmera modellen med block: händelser, loopar, villkor, variabler och sensordata. För robotar och automation.</p>
  </div>
</div>

| | Snabbkopplingar | Logikblock |
|---|---|---|
| Hur du bygger | Rader: ingång → bearbetning → åtgärd → hubb | Block som fästs ihop till skript |
| Inlärningstid | Minuter | Längre; fler möjligheter |
| Passar bäst för | Bilar, lastbilar, tåg, kranar: ”den här kontrollen styr den där motorn” | Robotar, automatiska sekvenser, sensorlogik, spel |
| Logik (om, loopar, variabler) | Nej (bara tröskelvärden och växlingar) | Ja |
| Sensorer | Hubbens sensorer som ingångar; värden till indikatorer | Alla sensorer i hubbar och telefon, valfria beräkningar |
| Mjuk start, begränsningar, dödzon | Färdiga block | Byggs med block |
| Servostyrning med kalibrering | Färdigt block | Block |
| Handkontroll | Ja | Ja |
| Flera hubbar | Ja | Ja |

**Osäker?** Börja med Snabbkopplingar. Om du senare behöver logik skapar du en Logikblock-profil för modellen.

Om du trycker på **Skapa** utan att välja en typ markeras rutorna. Varje ruta har en länk **Dokumentation ↗** till sin del av den här dokumentationen.

## Profilens uppgifter {#profile-details}

- **Bild**: klicka på bildytan (tryck länge på en pekskärm) för att välja en bild. Dra bilden uppåt eller nedåt för att välja vilken del som syns. Med **Uppdatera bild** och **Ta bort** ändrar du den senare.
- **Namn**: obligatoriskt och måste vara unikt: ”Profil med namnet ”…” finns redan” betyder att du redan har en profil med det namnet.
- **Blocknivå** (endast Logikblock): **Nybörjare**, **Avancerad** eller **Guru**. Den styr vilka block paletten visar för den här profilen. Du kan ändra den senare i Redigerarens inställningar. Se [Arbeta i redigeraren](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtaggar**: beskriver profilen och hjälper andra att hitta den. Hashtaggarna kommer från en gemensam lista, som laddas när du är online.

Allt utom programtypen kan ändras senare i **Redigera profil**, där du också kan lägga till en beskrivning och markera profilen som **Favorit**.

## Nästa steg {#next-steps}

1. Lägg till hubbar: [Lägga till och ansluta en hubb](/docs/Application/Hubs/ConnectingHubs).
2. Placera kontroller: [Instrumentpanel](/docs/Application/Dashboard/DashboardOverview).
3. Skriv programmet: [Snabbkopplingar](/docs/Application/Links/LinksIntroducing) eller [Logikblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip AI-byggare
Med [MocPilot Pro](/docs/Application/Account/Pro) kan du beskriva din modell i ord eller med rösten och låta AI-byggaren skapa hubbarna, instrumentpanelen och programmet (Logikblock eller Snabbkopplingar). Ange vilken hubb du använder, vad som är anslutet till varje port och vad det ska göra. Se [Så får du ett bra resultat](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
