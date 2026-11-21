---
id: Sync
title: Synchronisatie tussen apparaten
description: "Houd MOCPilot-profielen en -instellingen gesynchroniseerd tussen telefoons, tablets, computers en de webeditor, en werk offline."
---

import Screenshot from '@site/src/components/Screenshot';

# Synchronisatie tussen apparaten {#sync-between-devices}

Als je bent ingelogd, houdt MOCPilot je profielen en instellingen op elk apparaat hetzelfde: telefoon, tablet, computer en de [webeditor](/docs/Introducing/WebEditor). Je hoeft niets aan te zetten: synchronisatie staat bij een account altijd aan.

## Hoe het werkt {#how-it-works}

- Wijzigingen worden eerst op het apparaat opgeslagen en geüpload zodra je online bent (“Profielen synchroniseren…”).
- Andere apparaten downloaden de nieuwe versie zodra ze online zijn.
- Aankopen worden niet als bestanden gesynchroniseerd; ze horen bij je account en zijn beschikbaar waar je ook inlogt.
- Profielen die op de website zijn toegevoegd (**Aan mijn account toevoegen** in de catalogus) of in de webeditor zijn bewerkt, komen via synchronisatie binnen.
- In gastmodus wordt niets gesynchroniseerd: profielen blijven alleen op dit apparaat.

## Conflicten {#conflicts}

Is hetzelfde profiel op twee apparaten gewijzigd voordat ze werden gesynchroniseerd, dan wint de versie uit je account, en wordt jouw versie op dit apparaat als kopie opgeslagen (er komt “(kopie)” achter de naam). MOCPilot meldt dit in een bericht **Profielsynchronisatie**. Hetzelfde gebeurt als een profiel dat je hier hebt gewijzigd, op een ander apparaat is verwijderd.

Open je een profiel dat op dit moment op een ander apparaat wordt bewerkt, dan kun je kiezen voor **Alleen bekijken** (wijzigingen worden niet opgeslagen) of **Bewerken overnemen**.

## Offline werken {#working-offline}

Hubs, je profielen en gedownloade thema's werken zonder internet.

- Kan MOCPilot bij het starten de server niet bereiken, dan toont het **Geen internetverbinding** met **Offline werken** en **Opnieuw proberen**.
- Zolang je offline bent, staat bovenaan het label **Offline**. Functies die de server nodig hebben (de catalogus en publiceren, de AI-bouwer, de afstandsbediening, meldingen, aankopen, berichten aan support) melden dat ze een internetverbinding nodig hebben.
- Wijzigingen die je offline maakt, worden geüpload zodra de verbinding terug is. Ziet de app de server weer, dan toont hij **De verbinding is terug** met **Online gaan**.

<Screenshot name="offline-prompt" alt="De melding Geen internetverbinding met de knoppen Offline werken en Opnieuw proberen" width={900} />

## Afmelden {#signing-out}

Als je je afmeldt, worden je profielen en instellingen van dit apparaat verwijderd; ze blijven in je account en komen terug als je weer inlogt. Zijn sommige wijzigingen nog niet geüpload, dan waarschuwt MOCPilot je eerst en toont het de betreffende profielen: maak verbinding met internet en laat de synchronisatie afronden, of kies **Toch afmelden** (er blijft een kopie in de map Backup van de app).

## Tips {#tips}

- Zorg dat een profiel gesynchroniseerd is voordat je het in de catalogus publiceert: de catalogus haalt het uit je account.
- Wil je profielen naar een apparaat zonder account overzetten, gebruik dan **Delen** en **Profiel importeren…** met `.dat`-bestanden. Zie [Profielen beheren](/docs/Application/Profiles/ManageProfiles).
