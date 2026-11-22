---
id: DashboardOverview
title: Dashboard-editoren
description: "MOCPilot-dashboardet: feltet, rutenettet, topplinjen, bakgrunnen og angre."
---

import Screenshot from '@site/src/components/Screenshot';

# Dashboard-editoren {#dashboard-editor}

**Dashboardet** er skjermen du kjører modellen fra: joysticker, skyveknapper, knapper, monitorer og andre kontroller. Hver profil har ett dashboard.

Du åpner det med **Dashboard**-knappen i topplinjen i editoren (⌘2 / Ctrl+2 på en datamaskin). På en telefon med smal skjerm ligger den under **Mer**.

- **Telefon og nettbrett**: dashboardet åpnes i fullskjerm over editoren.
- **Datamaskin**: dashboardet åpnes i sitt eget **Dashboard**-vindu, slik at du kan ha det ved siden av programmet.
- **Webeditor**: et flytende panel du kan dra og endre størrelse på.

<Screenshot name="dashboard-edit" alt="Dashboardet i redigeringsmodus med prikkrutenettet" width={900} />

## Feltet og rutenettet {#the-field-and-the-grid}

- Feltet har alltid formatet **2:1** og tilpasses skjermen, så et dashboard ser likt ut på telefon, nettbrett og datamaskin.
- I redigeringsmodus vises et **prikkrutenett** på 40 × 20 ruter. Kontrollene legger seg etter rutenettet.
- Kontroller kan ikke overlappe. Hvis en kontroll ikke får plass, går den tilbake dit den var.

## Topplinje {#toolbar}

**Telefon og nettbrett**

| Knapp | Hva den gjør |
|---|---|
| ← | tilbake til programeditoren |
| Angre / Gjør om | angrer og gjør om endringer på dashboardet |
| **Velg** | velg flere kontroller og lås, lås opp, slett eller rediger dem samlet; **Ferdig** avslutter |
| ⚙ (Dashboardinnstillinger) | alternativer for bakgrunn og rutenett (nedenfor) |
| **+** (Legg til kontroller, med en oransje ring) | åpner kontrollpaletten; se [Legg til og ordne kontroller](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Kjør** / **Stopp**: starter og stopper programmet |

Mens programmet kjører, er redigeringsknappene skjult.

**Datamaskin og webeditor**

Topplinjen ser ut som i editoren:

- **Venstre**: **Hjem** (lukker profilen), menyene **Fil**, **Rediger** og **Vis**, deretter **Angre** og **Gjør om**.
- **Midten**: profilnavnet og **Blokker** (eller **Koblinger** i en Hurtigkoblinger-profil, ⌘1 / Ctrl+1) for å gå tilbake til programmet. Selve dashboardet har ingen knapp her: det er siden du er på.
- **Høyre**: **Velg**, **Dashboardinnstillinger** (⚙) og den oransje **+ Kontroller**-knappen (Legg til kontroller). I et smalt vindu skjules profilnavnet og **Blokker**-knappen, og **+ Kontroller** beholder bare **+**.

Det finnes ingen **Kjør** i topplinjen på dashboardet på en datamaskin: kjør og stopp programmet fra editoren (⌘R / Ctrl+R, ⌘. / Ctrl+.). Mens det kjører, er **Velg**, **Dashboardinnstillinger** og **+ Kontroller** utilgjengelige.

Menyer: **Fil** (Lukk profil, Åpne i eget vindu), **Rediger** (Angre, Gjør om) og **Vis** (Blokker ⌘1, Dashboard ⌘2). I det separate Dashboard-vinduet viser linjen vindustittelen i stedet for **Hjem**, **Fil** har **Lukk vindu**, og det finnes verken **Vis**-meny eller **Blokker**-knapp.

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
