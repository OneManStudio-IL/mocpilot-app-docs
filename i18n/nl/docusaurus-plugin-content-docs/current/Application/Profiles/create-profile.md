---
id: CreateProfile
title: Een profiel maken
description: "Maak een profiel en kies tussen de programma-editors Logicablokken en Snelle koppelingen."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Een profiel maken {#create-a-profile}

1. Ga naar **Mijn profielen**.
   - Telefoon: tik op **+** → **Nieuw profiel**.
   - Tablet: **Nieuw profiel** in de kop.
   - Computer: **Bestand → Nieuw profiel** (⌘N / Ctrl+N).
2. Kies het **programmatype** (zie hieronder).
3. Vul de gegevens van het profiel in.
4. Tik op **Maken**. Het profiel opent in de editor.

<Screenshot name="create-profile-tiles" alt="De pagina Nieuw profiel" width={900} />

## Het programmatype kiezen {#choose-the-program-type}

Het programmatype bepaalt welke editor het profiel gebruikt. **Je kunt het later niet meer wijzigen.** Wil je de andere editor proberen, maak dan een tweede profiel.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Snelle koppelingen" style={{width: '100%', maxWidth: 320}} />
    <h3>Snelle koppelingen</h3>
    <p><em>Een vereenvoudigd schema, zoals in Controlz.</em> Verbind bedieningselementen op het dashboard rij voor rij met motoren en lampen op de hub: invoer, verwerking, bewerking, hub. Binnen een paar minuten klaar.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Logicablokken" style={{width: '100%', maxWidth: 320}} />
    <h3>Logicablokken</h3>
    <p><em>Robotica, algoritmen en geavanceerde scenario's.</em> Programmeer het model met blokken: gebeurtenissen, lussen, voorwaarden, variabelen en sensorgegevens. Voor robots en automatisering.</p>
  </div>
</div>

| | Snelle koppelingen | Logicablokken |
|---|---|---|
| Hoe je bouwt | Rijen: invoer → verwerking → bewerking → hub | Blokken die samen scripts vormen |
| Leertijd | Minuten | Langer; meer mogelijkheden |
| Het meest geschikt voor | Auto's, trucks, treinen, kranen: “dit bedieningselement beweegt die motor” | Robots, automatische reeksen, sensorlogica, spelletjes |
| Logica (als, lussen, variabelen) | Nee (alleen drempels en wisselen) | Ja |
| Sensoren | Hubsensoren als invoer; waarden naar indicatoren | Alle sensoren van hubs en telefoon, elke berekening |
| Soepel optrekken, begrenzingen, dode zone | Kant-en-klare blokken | Gebouwd met blokken |
| Servobesturing met kalibratie | Kant-en-klaar blok | Blokken |
| Gamepad | Ja | Ja |
| Meerdere hubs | Ja | Ja |

**Twijfel je?** Begin met Snelle koppelingen. Heb je later logica nodig, maak dan een profiel met Logicablokken voor het model.

Tik je op **Maken** zonder een type te kiezen, dan worden de tegels gemarkeerd. Elke tegel heeft een link **Documentatie ↗** naar het bijbehorende deel van deze documentatie.

## Gegevens van het profiel {#profile-details}

- **Afbeelding**: klik op het afbeeldingsvak (houd het op een touchscreen ingedrukt) om een afbeelding te kiezen. Sleep de afbeelding omhoog of omlaag om het zichtbare deel te kiezen. Met **Werk afbeelding bij** en **Verwijderen** wijzig je hem later.
- **Naam**: verplicht, en moet uniek zijn: “Een profiel met de naam … bestaat al” betekent dat je al een profiel met deze naam hebt.
- **Blokniveau** (alleen Logicablokken): **Beginner**, **Gevorderd** of **Guru**. Dit bepaalt welke blokken het palet voor dit profiel toont. Je kunt het later wijzigen in Editorinstellingen. Zie [Werken in de editor](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtags**: beschrijven het profiel en helpen anderen het te vinden. Hashtags komen uit een gedeelde lijst, die wordt geladen als je online bent.

Alles behalve het programmatype kun je later wijzigen in **Profiel bewerken**. Daar kun je ook een beschrijving toevoegen en het profiel als **Favoriet** markeren.

## Volgende stappen {#next-steps}

1. Voeg hubs toe: [Een hub toevoegen en verbinden](/docs/Application/Hubs/ConnectingHubs).
2. Plaats bedieningselementen: [Dashboard](/docs/Application/Dashboard/DashboardOverview).
3. Schrijf het programma: [Snelle koppelingen](/docs/Application/Links/LinksIntroducing) of [Logicablokken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip AI-bouwer
Met [MocPilot Pro](/docs/Application/Account/Pro) kun je je model in woorden of met je stem beschrijven en de AI-bouwer de hubs, het dashboard en het programma laten maken (Logicablokken of Snelle koppelingen). Vertel welke hub je gebruikt, wat er op elke poort is aangesloten en wat het moet doen. Zie [Zo krijg je een goed resultaat](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
