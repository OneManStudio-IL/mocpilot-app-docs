---
id: AboutApp
title: Tietoja MOCPilotista
description: "MOCPilot tekee puhelimesta, tabletista tai tietokoneesta kauko-ohjaimen LEGO®-malleille ja yhteensopiville Bluetooth-malleille."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: rakenna, aja ja ohjaa kaikkea {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** tekee puhelimestasi, tabletistasi tai tietokoneestasi kauko-ohjaimen LEGO®-malleille ja yhteensopiville Bluetooth-malleille: autoille, kuorma-autoille, junille, nostureille, roboteille ja omille MOCeillesi.

Suunnittelet ohjaimet itse: **kojelaudan**, jossa on ohjainsauvoja, liukusäätimiä, painikkeita, ohjauspyöriä ja ilmaisimia. **Ohjelma** yhdistää kojelaudan sitten **hubiesi** moottoreihin ja valoihin. MOCPilotissa on kaksi ohjelmaeditoria:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Pikalinkit-editori: rivit syötteestä hubiin" style={{width: '100%'}} />
    <h3>Pikalinkit</h3>
    <p>Ei koodia. Jokainen rivi yhdistää yhden ohjaimen moottoriin tai valoon: <em>syöte → käsittely → toiminto → hubi</em>. Auto on ajovalmis muutamassa minuutissa. <a href="/docs/Application/Links/LinksIntroducing">Lue lisää</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Logiikkalohkot-editori: lohko-ohjelma" style={{width: '100%'}} />
    <h3>Logiikkalohkot</h3>
    <p>Visuaaliset lohkot, joissa on tapahtumia, silmukoita, ehtoja, muuttujia ja anturitietoja. Roboteille, automaatioon ja kaikkeen, mikä vaatii logiikkaa. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Lue lisää</a>.</p>
  </div>
</div>

## Mitä voit tehdä {#what-you-can-do}

- **Aja mitä tahansa mallia** itse suunnittelemaltasi kojelaudalta: ohjainsauvat, liukusäätimet, painikkeet, kytkimet, askelkytkimet, näytöt sekä erikoisohjaimet, kuten ohjauspyörä, polkimet, vaihteisto, käsijarru, suuntavilkut ja junan ajokytkin.
- **Käytä oikeita hubeja**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick ja Mould King. Katso [Tuetut laitteet](/docs/Introducing/SupportedDevices).
- **Käytä peliohjainta** (Xbox- tai PlayStation-tyyppistä) kosketusnäytön sijaan.
- **Lue antureita**: hubin akku ja kallistus, moottorin nopeus ja asento, väri- ja etäisyysanturit sekä puhelimesi kallistus.
- **Tee kojelaudasta omannäköisesi** [teemoilla](/docs/Application/Themes/ThemesOverview).
- **Profiilit mukana kaikkialla**: tilin kanssa profiilit synkronoituvat laitteidesi välillä, ja voit muokata niitä selaimessa osoitteessa [mocpilot.com](/docs/Introducing/WebEditor).
- **Aja toiselta laitteelta**: MocPilot Prolla yksi laite yhdistää hubit ja toinen laite tai verkkoeditori toimii kauko-ohjaimena.
- **Jaa**: asenna profiileja [Profiilikatalogista](/docs/Application/Profiles/Catalog) ja julkaise omiasi.

<Screenshot name="dashboard-run" alt="MOCPilotin kojelauta mallia ajettaessa" width={900} />

## Missä MOCPilot toimii {#where-mocpilot-runs}

| Laite | Asettelu |
|---|---|
| iPhone- ja Android-puhelimet | Puhelinasettelu: alapalkki; avattu profiili täyttää näytön vaakasuunnassa |
| iPad- ja Android-tabletit | Tablettiasettelu: sivupalkki, enemmän tilaa editorille |
| Mac- ja Windows-tietokoneet | Työpöytäasettelu: valikot, pikanäppäimet, kojelauta omassa ikkunassaan |
| Selain osoitteessa mocpilot.com | [Verkkoeditori](/docs/Introducing/WebEditor): profiilien muokkaus; hubit yhdistää sovellus toisella laitteella |

Lisätietoja on sivulla [Puhelin, tabletti ja työpöytä](/docs/Introducing/Layouts).

Hubit, profiilisi ja ladatut teemat toimivat myös ilman internetyhteyttä. Katso [Offline-käyttö](/docs/Application/Account/Sync#working-offline).

## Mistä aloittaa {#where-to-start}

1. Lue [Miten MOCPilot toimii](/docs/Introducing/HowItWorks): viisi minuuttia, jotka helpottavat kaikkea muuta.
2. Aja ensimmäinen mallisi [Pikaoppaan](/docs/Introducing/QuickStart) avulla.
3. Etkö tiedä, kumman editorin valitsisit? Vertaa niitä sivulla [Profiilin luominen](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, LEGO-logo, Powered Up ja Technic ovat LEGO Groupin tavaramerkkejä. LEGO Group ei sponsoroi, valtuuta eikä tue MOCPilotia.
:::
