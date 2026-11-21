---
id: DashboardOverview
title: Dashboard-editoren
description: "MOCPilot-dashboardet: feltet, rutenettet, verktøylinjen, bakgrunnen og angre."
---

import Screenshot from '@site/src/components/Screenshot';

# Dashboard-editoren {#dashboard-editor}

**Dashboardet** er skjermen du kjører modellen fra: joysticker, skyveknapper, knapper, monitorer og andre kontroller. Hver profil har ett dashboard.

Du åpner det med **Dashboard**-knappen i editoren (⌘2 / Ctrl+2 på en datamaskin).

- **Telefon og nettbrett**: dashboardet åpnes i fullskjerm over editoren.
- **Datamaskin**: dashboardet åpnes i sitt eget **Dashboard**-vindu, slik at du kan ha det ved siden av programmet.
- **Webeditor**: et flytende panel du kan dra og endre størrelse på.

<Screenshot name="dashboard-edit" alt="Dashboardet i redigeringsmodus med prikkrutenettet" width={900} />

## Feltet og rutenettet {#the-field-and-the-grid}

- Feltet har alltid formatet **2:1** og tilpasses skjermen, så et dashboard ser likt ut på telefon, nettbrett og datamaskin.
- I redigeringsmodus vises et **prikkrutenett** på 40 × 20 ruter. Kontrollene legger seg etter rutenettet.
- Kontroller kan ikke overlappe. Hvis en kontroll ikke får plass, går den tilbake dit den var.

## Verktøylinje {#toolbar}

| Knapp | Hva den gjør |
|---|---|
| ← | tilbake til programeditoren |
| Angre / Gjør om | angrer og gjør om endringer på dashboardet |
| **+** (Legg til kontroller) | åpner kontrollpaletten; se [Legg til og ordne kontroller](/docs/Application/Dashboard/ArrangingControls) |
| ⚙ (Dashboardinnstillinger) | alternativer for bakgrunn og rutenett (nedenfor) |
| ▶ / ■ | **Kjør** / **Stopp**: starter og stopper programmet |

På en datamaskin har Dashboard-vinduet også menyer: **Fil** (Lukk profil, Åpne i eget vindu, Dashboardinnstillinger…), **Rediger** (Angre, Gjør om, Legg til kontroller…) og **Vis** (Blokker ⌘1, Dashboard ⌘2).

Mens programmet kjører, er redigeringsknappene skjult.

## Angre og gjør om {#undo-and-redo}

Dashboardet har sin egen historikk, atskilt fra programmet. Du kan angre hver flytting, endring av størrelse, endring av egenskaper, tillegging og sletting.

## Dashboardinnstillinger {#dashboard-settings}

**Bakgrunnsbilde**: trykk **Endre** og velg:

- **Velg ferdig**: en ferdig bakgrunn som følger med et tema. Galleriet viser bakgrunnene til temaene som har kontroller på dette dashboardet. En ferdig bakgrunn fyller alltid skjermen rundt feltet, så alternativene nedenfor gjelder ikke for den.
- **Last opp egen**: et hvilket som helst bilde fra enheten din. Det lagres i profilen.

**Fjern** fjerner bakgrunnen.

<Screenshot name="dashboard-backgrounds" alt="Dashboardinnstillinger med galleriet av ferdige bakgrunner" width={900} />

For ditt eget bilde kan du også stille inn:

- **Bildets fyllmodus**: Strekk, Behold sideforhold og tilpass, Behold sideforhold og beskjær, Flislegg, Flislegg vertikalt, Flislegg horisontalt eller Fyll ut.
- **Bildets overordnede område**: **Arbeidsområde** (bare feltet) eller **Hele skjermen**.
- **Bildeopasitet**, **Aktiver bildeuskarphet** og **Uskarphetsverdi**: gjør bakgrunnen roligere slik at kontrollene trer tydeligere frem.

**Skjul prikker**: skjuler rutenettprikkene mens profilen kjører. I redigeringsmodus er prikkene fortsatt synlige, så du kan rette inn kontrollene.

## Kontrollene og programmet {#controls-and-the-program}

En kontroll gir verdier; programmet bestemmer hva de gjør. En kontroll som programmet bruker, kan ikke slettes før programmet slutter å bruke den. I Hurtigkoblinger fjerner du radene som bruker den; i Logikkblokker fjerner du blokkene.

## Les mer {#read-more}

- [Legg til og ordne kontroller](/docs/Application/Dashboard/ArrangingControls): legge til, flytte, størrelser, låsing
- [Kontrolltyper](/docs/Application/Dashboard/ControlTypes)
- [Spesialkontroller](/docs/Application/Dashboard/SpecialControls): ratt, pedaler, girspak, håndbrekk, blinklys, togkontroll
- [Kontrollegenskaper](/docs/Application/Dashboard/ControlProperties)
- [Indikatorer og monitorer](/docs/Application/Dashboard/Indicators)
