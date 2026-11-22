---
id: Backpack
title: Rugzak
description: "Bewaar stukken van je Logicablokken-programma's in de rugzak en voeg ze in elk profiel in, op al je apparaten."
---

import Screenshot from '@site/src/components/Screenshot';

# Rugzak {#backpack}

In de **Rugzak** bewaar je stukken van je blokprogramma's om ze in andere profielen opnieuw te gebruiken: een stuurroutine, een lichtshow, een eigen blok dat je één keer hebt geschreven en overal wilt hebben. Stop in het ene profiel een stapel blokken in de rugzak en voeg die daarna in elk ander profiel in, op dit apparaat of op elk apparaat waarop je bent ingelogd.

De rugzak hoort bij de editor van [Logicablokken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Profielen met Snelle koppelingen hebben hem niet.

<Screenshot name="backpack-panel" alt="Het paneel Rugzak naast een blokprogramma" width={900} />

## Wat de rugzak bewaart {#what-the-backpack-keeps}

Elk item in de rugzak is een **kopie** van de blokken die je hebt opgeslagen:

- **Een stapel**: het gekozen blok samen met alles wat eronder en erin vastzit, precies zoals **Dupliceren** het kopieert.
- **Een eigen blok**: als je het blok `definiëren …` van een blok uit [Mijn blokken](/docs/Application/BlockBuilder/Blocks/MyBlocks) opslaat, bewaart de rugzak de hele definitie. Zulke items zijn gemarkeerd met **Mijn blok**.

Het item onthoudt ook de eigen blokken die je blokken gebruiken (ook via andere eigen blokken) en de namen van de variabelen, lijsten, berichten, voertuigen en geluiden waarnaar ze verwijzen, zodat de blokken werken als je ze ergens anders invoegt.

Ingevoegde blokken worden een gewoon onderdeel van het programma van het profiel. Niets in het profiel is afhankelijk van de rugzak: als je een item verwijdert of een andere naam geeft, veranderen de programma's waarin je het hebt ingevoegd niet. Items kun je in de rugzak niet bewerken. Wil je er een wijzigen, voeg het dan in, bewerk de blokken in het programma en sla ze opnieuw als nieuw item in de rugzak op.

## Blokken in de rugzak opslaan {#save-blocks}

1. Klik in het programma met de rechtermuisknop op een blok (computer) of houd het ingedrukt (telefoon, tablet).
2. Kies **Aan rugzak toevoegen**.
3. Typ een naam bij **Naam van de blokken** en tik op **Opslaan**.

Het blok en alles wat eraan vastzit, gaan de rugzak in. Om de definitie van een eigen blok op te slaan, open je het menu van het blok `definiëren …`.

<Screenshot name="backpack-add" alt="Het blokmenu met Aan rugzak toevoegen en het venster voor de naam" width={900} />

## De rugzak openen {#open}

- **Computer en webeditor**: de knop **Rugzak** in de bovenbalk van de editor, **Weergave → Rugzak** in het menu of **Ctrl+Shift+B** (**⌘⇧B** op een Mac). Is het venster smal, dan staat de knop in het menu **Meer**. De rugzak opent als paneel aan de rechterkant van de editor, naast de [Monitor](/docs/Application/BlockBuilder/Editor#monitor) als die ook open is.
- **Telefoon en tablet**: **Meer → Rugzak** in de bovenbalk van de editor. De rugzak opent als paneel over de editor.

Zolang de rugzak open is, is de knop gemarkeerd. Druk er nog eens op om de rugzak te sluiten.

Elk item toont zijn afbeelding, zijn naam en het aantal blokken erin (**Blokken: N**). De melding onderaan het paneel vertelt waar de rugzak wordt bewaard (zie [hieronder](#where-it-is-kept)).

## Blokken in een programma invoegen {#insert}

- **Tik op een item**: de blokken verschijnen in het zichtbare deel van het programma.
- **Sleep een item naar het programma**: de blokken komen terecht waar je ze loslaat. Sleep opzij, richting het programma; slepen naar boven of beneden scrolt de lijst.
- **Itemmenu (⋯)**: **Invoegen**, **Naam wijzigen…** of **Verwijderen**.

Op telefoons en tablets gaat de rugzak na het invoegen dicht, zodat je de blokken ziet. Eén keer **Ongedaan maken** verwijdert alles wat is ingevoegd.

### Wat er gebeurt bij het invoegen {#what-happens}

- **Mijn blokken**: een eigen blok dat het profiel al met dezelfde inhoud heeft, wordt hergebruikt, dus als je dezelfde blokken nog eens invoegt, ontstaan er geen kopieën van. Gebruikt een ander eigen blok in het profiel intern dezelfde naam, dan krijgt het ingevoegde blok een eigen exemplaar. Een item met een eigen blok dat al in het profiel staat, invoegen doet niets en toont **Al aanwezig**: je vindt het blok in **Mijn blokken**.
- **Variabelen, lijsten, berichten en voertuigen**: heeft het profiel er een met dezelfde naam, dan gebruiken de blokken die; anders wordt hij aangemaakt. Waarden van variabelen en inhoud van lijsten worden niet gekopieerd. Is de naam al in gebruik door iets anders, dan krijg je een melding zoals *Variabele „speed“ kon niet worden gemaakt: de naam is al in gebruik*.
- **Geluiden**: je eigen geluiden zijn bestanden van het profiel en worden niet in de rugzak bewaard. Heeft het profiel geen geluid met die naam, dan zie je *Geluid „…“ zit niet in dit profiel: kies een geluid in de blokken*. Ingebouwde geluiden werken overal.
- **Hub- en dashboardblokken**: blokken voor een hub, een bedieningselement van het dashboard of een gamepad die dit profiel niet heeft, kunnen niet worden ingevoegd. Voordat er iets verandert, toont de app **Sommige blokken kunnen niet worden ingevoegd** met de lijst van die blokken en hoeveel er worden weggelaten, en vraagt of de andere moeten worden ingevoegd. Voeg eerst de hub of het bedieningselement toe als je ze wilt behouden. Past geen enkel blok bij het profiel, dan wordt er niets ingevoegd.

## Naam wijzigen en verwijderen {#rename-delete}

Open het itemmenu (⋯):

- **Naam wijzigen…** verandert de naam van het item.
- **Verwijderen** verwijdert het nadat je hebt bevestigd (**Uit de rugzak verwijderen?**). Programma's waarin je het hebt ingevoegd, houden hun blokken.

De rugzak verwijdert nooit uit zichzelf items: verwijder wat je niet meer nodig hebt.

## Waar de rugzak wordt bewaard {#where-it-is-kept}

- **Zonder account (gast)**: alleen op dit apparaat. In het paneel staat *Bewaard op dit apparaat. Log in om de rugzak op al je apparaten te hebben.*
- **Ingelogd**: ook in je account, zodat je op al je apparaten dezelfde rugzak hebt, ook in de [webeditor](/docs/Introducing/WebEditor). In het paneel staat *Bewaard in je account: dezelfde rugzak op al je apparaten.* Wijzigingen op het ene apparaat verschijnen op de andere.
- **Eerste keer inloggen**: items die je op dit apparaat als gast hebt opgeslagen, gaan naar je account.

Je kunt de rugzak ook offline gebruiken. Wijzigingen blijven op het apparaat en worden naar je account gestuurd zodra de verbinding terug is (in de tussentijd toont het paneel **Synchroniseren…**). Een item dat nog uit je account wordt gedownload, kun je nog niet invoegen: de app meldt **Nog niet klaar**. Probeer het zo meteen opnieuw.

## Limieten {#limits}

| | Limiet |
|---|---|
| Items in de rugzak | 200 |
| Grootte van één item | ongeveer 512 KB (een heel groot programmadeel past misschien niet: sla een kleiner deel op) |
| Naam van een item | tot 100 tekens |

Is de rugzak in je account vol of is een item er te groot voor, dan blijft het item alleen op dit apparaat en laat de app je dat weten. Items die zijn opgeslagen met een nieuwere versie van de app, kun je pas invoegen nadat je de app hebt bijgewerkt.

## Problemen oplossen {#troubleshooting}

| Melding | Wat te doen |
|---|---|
| **De rugzak is vol (200 items). Verwijder iets wat je niet nodig hebt.** | Verwijder items die je niet meer gebruikt. |
| **Te veel blokken voor de rugzak. Sla een kleiner deel op.** | Sla een kleinere stapel op, of verdeel het programma over meerdere items. |
| **Sommige blokken kunnen niet worden ingevoegd** | Het profiel mist een hub, bedieningselement of gamepad die de blokken nodig hebben. Voeg die toe en voeg opnieuw in, of voeg alleen de andere blokken in. |
| **Al aanwezig** | Het eigen blok staat al in dit profiel: je vindt het in **Mijn blokken**. |
| **Nog niet klaar** | Het item wordt nog uit je account gedownload. Wacht even en probeer het opnieuw. |
| **Deze blokken zijn opgeslagen met een nieuwere versie van de app. Werk de app bij om ze te gebruiken.** | Werk MOCPilot op dit apparaat bij. |
