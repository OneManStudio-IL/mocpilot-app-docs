---
id: DashboardOverview
title: Dashboard-editor
description: "MOCPilots dashboard: feltet, gitteret, topbjælken, baggrunden og fortryd."
---

import Screenshot from '@site/src/components/Screenshot';

# Dashboard-editor {#dashboard-editor}

**Dashboardet** er den skærm, du kører din model fra: joysticks, skydere, knapper, skærme og andre kontroller. Hver profil har ét dashboard.

Åbn det med knappen **Dashboard** i editorens topbjælke (⌘2 / Ctrl+2 på en computer). På en telefon med en smal skærm ligger den under **Mere**.

- **Telefon og tablet**: dashboardet åbnes i fuld skærm over editoren.
- **Computer**: dashboardet åbnes i sit eget vindue **Dashboard**, så du kan have det ved siden af programmet.
- **Webeditor**: et flydende panel, som du kan trække og ændre størrelse på.

<Screenshot name="dashboard-edit" alt="Dashboardet i redigeringstilstand med prikgitteret" width={900} />

## Feltet og gitteret {#the-field-and-the-grid}

- Feltet har altid formatet **2:1** og tilpasses skærmen, så et dashboard ser ens ud på en telefon, en tablet og en computer.
- I redigeringstilstand vises et **prikgitter** på 40 × 20 celler. Kontrollerne klikker på plads i gitteret.
- Kontroller kan ikke overlappe hinanden. Hvis en kontrol ikke kan være der, vender den tilbage til sin plads.

## Topbjælke {#toolbar}

**Telefon og tablet**

| Knap | Hvad den gør |
|---|---|
| ← | tilbage til programeditoren |
| Fortryd / Gentag | fortryd og gentag ændringer på dashboardet |
| **Vælg** | vælg flere kontroller, og lås, lås op, slet eller rediger dem samlet; **Færdig** afslutter |
| ⚙ (Dashboardindstillinger) | indstillinger for baggrund og gitter (nedenfor) |
| **+** (Tilføj controller, med en orange ring) | åbner controllerpaletten; se [Tilføj og arrangér kontroller](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Kør** / **Stop**: start og stop programmet |

Mens programmet kører, er redigeringsknapperne skjult.

**Computer og webeditor**

Topbjælken ligner editorens:

- **Venstre**: **Hjem** (lukker profilen), menuerne **Fil**, **Rediger** og **Vis** og derefter **Fortryd** og **Gentag**.
- **Midten**: profilens navn og **Blokke** (eller **Forbindelser** i en profil med Hurtige forbindelser, ⌘1 / Ctrl+1) for at gå tilbage til programmet. Selve dashboardet har ingen knap her: Det er den side, du er på.
- **Højre**: **Vælg**, **Dashboardindstillinger** (⚙) og den orange knap **+ Controller** (Tilføj controller). I et smalt vindue skjules profilens navn og knappen **Blokke**, og **+ Controller** beholder kun sit **+**.

På en computer har dashboardets bjælke ingen **Kør**: Start og stop programmet fra editoren (⌘R / Ctrl+R, ⌘. / Ctrl+.). Mens det kører, er **Vælg**, **Dashboardindstillinger** og **+ Controller** ikke tilgængelige.

Menuer: **Fil** (Luk profil, Åbn i separat vindue), **Rediger** (Fortryd, Gentag) og **Vis** (Blokke ⌘1, Dashboard ⌘2). I det separate dashboardvindue viser bjælken vinduets titel i stedet for **Hjem**, **Fil** har **Luk vindue**, og der er hverken menuen **Vis** eller knappen **Blokke**.

## Fortryd og gentag {#undo-and-redo}

Dashboardet har sin egen historik, adskilt fra programmet. Du kan fortryde hver flytning, ændring af størrelse, ændring af egenskaber, tilføjelse og sletning.

## Dashboardindstillinger {#dashboard-settings}

**Baggrundsbillede**: tryk på **Skift**, og vælg:

- **Vælg færdig**: en færdig baggrund, der følger med et tema. Galleriet viser baggrundene for de temaer, hvis kontroller er på dette dashboard. En færdig baggrund fylder altid skærmen rundt om feltet, så indstillingerne nedenfor gælder ikke for den.
- **Upload din egen**: et hvilket som helst billede fra din enhed. Det gemmes i profilen.

**Fjern** rydder baggrunden.

<Screenshot name="dashboard-backgrounds" alt="Dashboardindstillinger med galleriet af færdige baggrunde" width={900} />

For dit eget billede kan du også indstille:

- **Billedets udfyldningstilstand**: Stræk, Bevar størrelsesforhold og tilpas, Bevar størrelsesforhold og beskær, Fliselæg, Fliselæg lodret, Fliselæg vandret eller Udfyld med kant.
- **Billedets overordnede område**: **Arbejdsområde** (kun feltet) eller **Hele skærmen**.
- **Billedopacitet**, **Aktivér billedsløring** og **Sløringsværdi**: gør baggrunden roligere, så kontrollerne træder frem.

**Skjul prikker**: skjuler gitterprikkerne, mens profilen kører. I redigeringstilstand forbliver prikkerne synlige, så du stadig kan stille kontrollerne på linje.

## Kontroller og programmet {#controls-and-the-program}

En kontrol giver værdier; programmet bestemmer, hvad de gør. En kontrol, som programmet bruger, kan ikke slettes, før programmet holder op med at bruge den. I Hurtige forbindelser fjerner du de rækker, der bruger den; i Logikblokke fjerner du dens blokke.

## Læs mere {#read-more}

- [Tilføj og arrangér kontroller](/docs/Application/Dashboard/ArrangingControls): tilføjelse, flytning, størrelser, låsning
- [Kontroltyper](/docs/Application/Dashboard/ControlTypes)
- [Specialkontroller](/docs/Application/Dashboard/SpecialControls): rat, pedaler, gearstang, håndbremse, blinklys, togkontrol
- [Kontrollens egenskaber](/docs/Application/Dashboard/ControlProperties)
- [Indikatorer og skærme](/docs/Application/Dashboard/Indicators)
