---
id: ManageProfiles
title: Profielen beheren
description: "MOCPilot-profielen bewerken, delen, importeren, exporteren en verwijderen."
---

import Screenshot from '@site/src/components/Screenshot';

# Profielen beheren {#manage-profiles}

## Gegevens van een profiel bewerken {#edit-profile-details}

Tik op **Bewerken** (telefoon, tablet) of klik op **Bewerken…** (computer) bij een profiel. In **Profiel bewerken** kun je het volgende wijzigen:

- de **afbeelding** en de **naam**;
- de **beschrijving** (wat het profiel doet, voor welk model het is, hoe je ermee rijdt);
- het **blokniveau** (Logicablokken);
- **hashtags**;
- **Favoriet** (telefoon, tablet): een favoriet profiel komt bovenaan je lijst te staan. Op een computer staat **Favoriet** in de balk onderaan de profielenpagina.

<Screenshot name="edit-profile" alt="Het venster Profiel bewerken met de afbeelding, naam, beschrijving en hashtags" width={900} />

Hier verwijder je ook het profiel en stuur je het, als je bent ingelogd, naar de catalogus.

Het programmatype kan niet worden gewijzigd. Wil je een model naar de andere editor overzetten, maak dan een nieuw profiel.

## Een profiel delen (exporteren) {#share-export-a-profile}

**Delen…** verpakt het profiel in één `.dat`-bestand (met een naam als `Technic Buggy_<id>.dat`) en opent het deelmenu van het systeem. Stuur het in een bericht of per e-mail, of sla het op in je bestanden.

Het bestand bevat de hubs, het dashboard en het programma. Aankopen zitten er niet in: thema's en speciale bedieningselementen die de ontvanger niet bezit, worden vervangen of vergrendeld als die het profiel bewerkt (zie [hieronder](#paid-themes-in-shared-profiles)).

## Een profiel importeren {#import-a-profile}

1. Kies op **Mijn profielen** de optie **Profiel importeren…** (telefoon: **+** → **Profiel importeren…**; tablet: het menu **Nieuw profiel**; computer: **Bestand → Profiel importeren…**, ⌘O / Ctrl+O).
2. Kies een `.dat`-bestand.

Heb je dit profiel al:

- een andere versie: kies **Vervangen**, **Opslaan als kopie** (voegt “(kopie)” toe aan de naam) of **Annuleren**;
- precies hetzelfde bestand: het wordt niet opnieuw geladen.

Een bestand dat geen profiel is, wordt geweigerd.

:::tip Een profiel dupliceren
Er is geen aparte opdracht om te dupliceren. Wil je een kopie, deel het profiel dan als bestand en importeer het met **Opslaan als kopie**.
:::

## Een profiel verwijderen {#delete-a-profile}

Open **Profiel bewerken**:

- telefoon en tablet: **Veeg om het profiel te verwijderen**;
- computer: **Profiel verwijderen** en bevestig. **Profiel verwijderen** staat ook in het menu van de profielkaart.

Het profiel wordt van dit apparaat en uit je account verwijderd, dus het verdwijnt ook van je andere apparaten. Dit kan niet ongedaan worden gemaakt; deel het profiel eerst als bestand als je het misschien nog nodig hebt.

## Profielen uit de catalogus {#profiles-from-the-catalog}

Een profiel dat je uit de [Profielcatalogus](/docs/Application/Profiles/Catalog) hebt geïnstalleerd, is je eigen kopie:

- zolang je het niet wijzigt, werkt het precies zoals het is gepubliceerd, en installeert **Bijwerken** een nieuwe versie als de auteur die uitbrengt (**Bijwerken vanuit de catalogus** in **Profiel bewerken** doet hetzelfde);
- bij de eerste wijziging verschijnt een waarschuwing: daarna krijgt het profiel geen updates meer uit de catalogus.

## Betaalde thema's in gedeelde profielen {#paid-themes-in-shared-profiles}

Profielen kunnen betaalde [thema's](/docs/Application/Themes/ThemesOverview) en speciale bedieningselementen (stuurwiel, pedalen, versnellingsbak en andere) gebruiken. Als je een profiel bewerkt dat producten gebruikt die je niet bezit:

- schakelen bedieningselementen van thema's die je niet bezit over naar het gratis thema **Basis**;
- worden speciale bedieningselementen zonder gratis tegenhanger vergrendeld tot je ze koopt;
- blijven producten die je wel bezit zoals ze zijn.

Een ongewijzigd profiel uit de catalogus werkt met al zijn producten, ook met de producten die je niet bezit.

## Synchronisatie {#sync}

Als je bent ingelogd, wordt elke wijziging geüpload en verschijnt die op je andere apparaten. Zie [Synchronisatie tussen apparaten](/docs/Application/Account/Sync).

Open je een profiel dat al op een ander apparaat wordt bewerkt, dan vraagt MOCPilot je te kiezen: **Alleen bekijken** (wijzigingen worden niet opgeslagen) of **Bewerken overnemen**.
