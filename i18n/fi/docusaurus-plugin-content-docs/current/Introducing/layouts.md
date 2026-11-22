---
id: Layouts
title: Puhelin, tabletti ja työpöytä
description: "Mistä löydät kaiken MOCPilotin puhelin-, tabletti- ja työpöytäasettelussa sekä työpöytäversion valikot ja pikanäppäimet."
---

import Screenshot from '@site/src/components/Screenshot';

# Puhelin, tabletti ja työpöytä {#phone-tablet-and-desktop}

MOCPilotissa on kolme asettelua, ja sovellus valitsee niistä yhden automaattisesti:

- **Puhelin**: iPhone- ja Android-puhelimet.
- **Tabletti**: iPad- ja Android-tabletit (7 tuumaa ja suuremmat).
- **Työpöytä**: Mac- ja Windows-tietokoneet. Selaimessa toimiva [verkkoeditori](/docs/Introducing/WebEditor) käyttää myös työpöytäeditoria.

Profiilit, editorit ja kojelauta ovat kaikkialla samat; vain navigointi eroaa.

## Puhelin {#phone}

<Screenshot name="profiles-phone" alt="Omat profiilit -sivu puhelimessa alapalkin kanssa" width={360} />

- **Alapalkissa** ovat **Profiilit**, **Asetukset** ja **Ohje** sekä kirjautuneena **Ilmoitukset**.
- **Tili** on **Asetusten** yläosassa.
- **Omat profiilit** -otsakkeessa ovat **Lajittele ja suodata**, **Yhdistä kauko-ohjain** (kauko-ohjaimen kuvake), **+** (Uusi profiili, Tuo profiili…, Hae verkosta) ja hakukenttä.
- Päänäkymät ovat pystysuunnassa. Kun avaat profiilin, sovellus siirtyy **vaakasuuntaan ja koko näytön tilaan**, jotta editori ja kojelauta saavat koko näytön. Profiilin sulkeminen palauttaa pystysuunnan.
- Editorin yläpalkin vasemmassa reunassa on **Koti**. Oikealla ovat **Kumoa** ja **Tee uudelleen**, **Kojelauta**, **Omat hubit** (yhdistettyjen hubien määrä), **Ongelmat** (Pikalinkit), **Etäohjaus**, **Lisää toimintoja** (⋯) ja **Suorita / Pysäytä**. Kohdassa **Lisää toimintoja** ovat **Tekoälyrakentaja**, [**Reppu**](/docs/Application/BlockBuilder/Backpack) ja **Seuranta** (Logiikkalohkot), **Peliohjain** ja **Editorin asetukset**. Kapealla näytöllä myös Kojelauta ja Omat hubit siirtyvät kohtaan **Lisää toimintoja**, jotta painikkeet pysyvät sormelle sopivan kokoisina.

<Screenshot name="editor-phone" alt="Profiilieditori ja sen yläpalkki puhelimessa" width={900} />

## Tabletti {#tablet}

<Screenshot name="profiles-tablet" alt="Omat profiilit -sivu tabletissa sivupalkin kanssa" width={900} />

- Vasemmalla olevassa **sivupalkissa** ovat **Profiilit**, **Profiilikatalogi**, **Ilmoitukset**, **Asetukset** ja **Ohje**. Niiden alla ovat **MocPilot Pro** -kortti ja tilisi (vierastilassa **Kirjaudu sisään**). Sivupalkin voi pienentää pelkiksi kuvakkeiksi.
- **Omat profiilit** -otsakkeessa ovat **Uusi profiili** (sen valikossa ovat myös Tuo profiili…, Yhdistä kauko-ohjain ja Hae verkosta), **Lajittele ja suodata**, **Suodata hashtagien mukaan**, **Yhdistä kauko-ohjain** ja hakukenttä.
- Valitse profiili napauttamalla sen korttia: alareunan palkissa näkyvät **Jaa**, **Muokkaa**, **Lisää suosikkeihin** ja **Käynnistä**. Kaksoisnapautus käynnistää profiilin. Pitkä painallus avaa kortin valikon, jossa on myös **Poista profiili**.
- Leveillä näytöillä Asetukset ja Ohje avautuvat luettelon viereen.
- Profiili avautuu vaakasuuntaan, ja editorissa on sama yläpalkki kuin puhelimessa.

## Työpöytä (Mac ja Windows) {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="Omat profiilit tietokoneella" width={900} />

- Yläpalkin oikeassa reunassa: **Tili** (vierastilassa **Kirjaudu sisään**), **Ilmoitukset** (kirjautuneena), **Yhdistä kauko-ohjain** (kauko-ohjaimen kuvake) ja **Asetukset** (hammasratas).
- Asetukset, Ohje, Tili, Uusi profiili, Muokkaa profiilia, Profiilikatalogi ja muut sivut avautuvat **ikkunoina** profiililuettelon päälle.
- Napsauta profiilin korttia nähdäksesi, mitä sillä voi tehdä (**Jaa…**, **Muokkaa…**, **Lisää suosikkeihin**, **Käynnistä**); kaksoisnapsautus käynnistää sen. Napsauta korttia hiiren kakkospainikkeella avataksesi sen valikon, jossa on myös **Poista profiili**.
- Editorissa **Kojelauta** avautuu **omaan ikkunaansa**, joten näet ohjelman ja kojelaudan rinnakkain.

### Editorin yläpalkki {#editor-top-bar}

- **Vasemmalla**: **Koti** (sulkee profiilin), valikot **Tiedosto**, **Muokkaa**, **Näytä** ja **Ohjelma** sekä sitten **Kumoa** ja **Tee uudelleen**.
- **Keskellä**: profiilin nimi ja profiilin muiden osien painikkeet: **Kojelauta**, **Hubit** (yhdistettyjen hubien määrä) ja **Peliohjain**. Sivulla, jolla olet, ei ole omaa painiketta.
- **Oikealla**: sivupaneelit **Tekoälyrakentaja**, [**Reppu**](/docs/Application/BlockBuilder/Backpack) ja **Seuranta** (kaksi viimeistä vain Logiikkalohkoissa), **Lisää toimintoja** (⋯), sitten Pikalinkeissä rivien tila (**Kaikki rivit ovat valmiita** tai **Ongelmia: N**), **Etäohjaus** ja oranssi **Suorita**-painike (ohjelman käydessä **Pysäytä**).

Kohdassa **Lisää toimintoja** on aina **Editorin asetukset…**. Kun ikkuna kapenee, palkki tiivistyy vaihe vaiheelta painikkeiden puristamisen sijaan: ensin piiloutuu profiilin nimi, sitten **Seuranta**, **Reppu** ja **Tekoälyrakentaja** siirtyvät kohtaan **Lisää toimintoja**, sitten **Suorita**-painikkeesta jää vain kuvake (ja Pikalinkkien tilasta vain kuvake ja määrä), ja lopuksi myös **Peliohjain**, **Kojelauta** ja **Hubit** siirtyvät kohtaan **Lisää toimintoja**. Jos jokin kohdassa **Lisää toimintoja** oleva sivupaneeli on auki, **Lisää toimintoja**-painike on sävytetty.

Kojelaudan yläpalkki on samanlainen: vasemmalla **Koti**, **Tiedosto**, **Muokkaa** ja **Näytä**, **Kumoa** ja **Tee uudelleen**; keskellä profiilin nimi ja **Lohkot** (tai **Linkit**), joilla palaat ohjelmaan; oikealla **Valitse**, **Kojelaudan asetukset** ja **+ Ohjain**. Katso [Kojelaudan editori](/docs/Application/Dashboard/DashboardOverview#toolbar).

### Valikot {#menus}

Windowsissa valikot ovat sovelluksen yläpalkin vasemmassa reunassa. Macissa ne ovat järjestelmän valikkorivillä näytön yläreunassa.

| Valikko | Windows | Mac |
|---|---|---|
| **MOCPilot** (sovellusvalikko) | — | Tietoja MOCPilotista, Asetukset…, Lopeta |
| **Tiedosto** | Uusi profiili, Tuo profiili…, Hae verkosta, Lopeta | Uusi profiili, Tuo profiili…, Hae verkosta, Yhdistä kauko-ohjain… |
| **Näytä** | Koko näyttö | Koko näyttö / Poistu koko näytöstä |
| **Ikkuna** | Pienennä, Suurenna / Palauta | Pienennä |
| **Ohje** | MOCPilot-ohje, Esitä kysymys, Ilmoita virheestä, Tietoja MOCPilotista | MOCPilot-ohje, Esitä kysymys, Ilmoita virheestä |

Kun profiili on auki, editorilla on omat **Tiedosto**-, **Muokkaa**-, **Näytä**- ja **Ohjelma**-valikot (katso [Työpöydän valikot](/docs/Application/BlockBuilder/Editor#desktop-menus)), ja Kojelauta-ikkunassa on **Tiedosto**, **Muokkaa** ja **Näytä** (katso [Kojelauta](/docs/Application/Dashboard/DashboardOverview)).

### Pikanäppäimet {#keyboard-shortcuts}

Macissa ⌘ (Command) tekee saman kuin Ctrl Windowsissa; ⇧ on Vaihto (Shift) ja ⌃ on Control.

**Kaikkialla**

| Toiminto | Windows | Mac |
|---|---|---|
| Asetukset | Ctrl+2 | ⌘, |
| Koko näyttöön / pois koko näytöstä | F11 tai Alt+Enter | ⌃⌘F |
| Pienennä ikkuna | — | ⌘M |
| Lopeta | Alt+F4 | ⌘Q |

**Omat profiilit** (ei avointa profiilia)

| Toiminto | Windows | Mac |
|---|---|---|
| Uusi profiili | Ctrl+N | ⌘N |
| Tuo profiili | Ctrl+O | ⌘O |
| Hae profiileja | Ctrl+F | — |
| Profiilit / Asetukset / Ohje / Tili | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Profiilieditori**

| Toiminto | Windows | Mac |
|---|---|---|
| Sulje profiili | Ctrl+W | ⌘W |
| Suorita / Pysäytä | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Kumoa / Tee uudelleen | Ctrl+Z / Ctrl+Shift+Z tai Ctrl+Y | ⌘Z / ⇧⌘Z |
| Näytä kojelauta | Ctrl+2 | ⌘2 |
| Omat hubit | Ctrl+Shift+H | ⇧⌘H |
| Tekoälyrakentaja | Ctrl+Shift+I | ⇧⌘I |
| Näytä / piilota lohkopaletti (Logiikkalohkot) | Ctrl+P | ⌘P |
| Hae lohkopaletista (Logiikkalohkot) | Ctrl+F | ⌘F |
| Seuranta (Logiikkalohkot) | Ctrl+Shift+M | ⇧⌘M |
| [Reppu](/docs/Application/BlockBuilder/Backpack) (Logiikkalohkot) | Ctrl+Shift+B | ⇧⌘B |
| Lähennä / loitonna / todellinen koko (Logiikkalohkot) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Kojelauta**

| Toiminto | Windows | Mac |
|---|---|---|
| Kumoa / Tee uudelleen | Ctrl+Z / Ctrl+Shift+Z tai Ctrl+Y | ⌘Z / ⇧⌘Z |
| Takaisin ohjelmaan (kun kojelauta on pääikkunassa) | Ctrl+1 | ⌘1 |
| Sulje Kojelauta-ikkuna | — | ⌘W |
| Poistu **Valitse**-tilasta tai sulje ominaisuuspaneeli | Esc | Esc |
| Poista ohjain (ominaisuuspaneeli auki) | Delete tai Backspace | Delete tai Backspace |
| Monista ohjain (ominaisuuspaneeli auki) | Ctrl+D | ⌘D |

Näppäimistöllä varustetussa tabletissa Ctrl+B (iPadissa ⌘B) näyttää tai piilottaa sivupalkin.

## Profiilieditori kaikissa asetteluissa {#the-profile-editor-on-every-layout}

Editorissa ei ole välilehtiä. **Ohjelma** (Pikalinkkien rivit tai Logiikkalohkot) täyttää näytön, ja yläpalkin painikkeet avaavat kaiken muun. Osa niistä on kohdassa **Lisää toimintoja** (⋯): puhelimessa tai tabletissa Tekoälyrakentaja, Reppu, Seuranta, Peliohjain ja Editorin asetukset; tietokoneella Editorin asetukset ja kaikki, mikä ei mahdu kapeaan ikkunaan.

| Painike | Avaa |
|---|---|
| **Omat hubit** (tietokoneella **Hubit**) | profiilin [hubipaikat](/docs/Application/Hubs/ConnectingHubs) |
| **Kojelauta** | [kojelaudan](/docs/Application/Dashboard/DashboardOverview) |
| **Peliohjain** | [peliohjaimen asetukset](/docs/Application/Dashboard/Gamepad) |
| **Seuranta** | muuttujien ja listojen arvot (vain Logiikkalohkot) |
| **Reppu** | lohkopinot, jotka olet tallentanut käytettäviksi uudelleen missä tahansa profiilissa (vain Logiikkalohkot); katso [Reppu](/docs/Application/BlockBuilder/Backpack) |
| **Editorin asetukset** | [editorin asetukset](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **Tekoälyrakentaja** | [tekoälyrakentajan](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Ongelmat** | rivit, joita ei voi suorittaa (vain Pikalinkit) |
| **Etäohjaus** | suorita profiili toisella laitteella ja ohjaa sitä täältä (MocPilot Pro); katso [Etäohjaus](/docs/Application/Profiles/RemoteControl) |
| **Suorita / Pysäytä** | käynnistää ja pysäyttää ohjelman (tietokoneella oranssi **Suorita**-painike oikeassa reunassa) |
