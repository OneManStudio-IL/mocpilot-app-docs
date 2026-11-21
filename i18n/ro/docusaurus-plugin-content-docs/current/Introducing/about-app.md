---
id: AboutApp
title: Despre MOCPilot
description: "MOCPilot transformă telefonul, tableta sau computerul într-o telecomandă pentru modele LEGO® și compatibile cu Bluetooth."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: construiește, condu, controlează tot {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** transformă telefonul, tableta sau computerul tău într-o telecomandă pentru modele LEGO® și compatibile cu Bluetooth: mașini, camioane, trenuri, macarale, roboți și propriile tale MOC-uri.

Comenzile le creezi chiar tu: un **tablou de bord** cu joystickuri, glisoare, butoane, volane și indicatoare. Apoi un **program** leagă tabloul de bord de motoarele și luminile de pe **huburi**. MOCPilot are două editoare de programe:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Editorul Legături rapide: rânduri de la intrare la hub" style={{width: '100%'}} />
    <h3>Legături rapide</h3>
    <p>Fără cod. Fiecare rând leagă o comandă de un motor sau de o lumină: <em>intrare → procesare → operație → hub</em>. O mașină e gata de condus în câteva minute. <a href="/docs/Application/Links/LinksIntroducing">Află mai multe</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Editorul Blocuri logice: program din blocuri" style={{width: '100%'}} />
    <h3>Blocuri logice</h3>
    <p>Blocuri vizuale cu evenimente, bucle, condiții, variabile și date de la senzori. Pentru roboți, automatizări și tot ce are nevoie de logică. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Află mai multe</a>.</p>
  </div>
</div>

## Ce poți face {#what-you-can-do}

- **Conduci orice model** de pe un tablou de bord creat de tine: joystickuri, glisoare, butoane, comutatoare, comutatoare pas cu pas, monitoare și comenzi speciale precum volan, pedale, cutie de viteze, frână de mână, semnalizatoare și controler de tren.
- **Folosești huburi reale**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick și Mould King. Vezi [Dispozitive acceptate](/docs/Introducing/SupportedDevices).
- **Folosești un gamepad** (în stil Xbox sau PlayStation) în locul ecranului tactil.
- **Citești senzori**: bateria și înclinarea hubului, viteza și poziția motorului, senzori de culoare și de distanță, precum și înclinarea telefonului.
- **Personalizezi tabloul de bord** cu [teme](/docs/Application/Themes/ThemesOverview).
- **Ai profilurile peste tot**: cu un cont, profilurile se sincronizează între dispozitive și le poți edita în browser pe [mocpilot.com](/docs/Introducing/WebEditor).
- **Conduci de pe alt dispozitiv**: cu MocPilot Pro, un dispozitiv conectează huburile, iar altul sau editorul web este telecomanda.
- **Partajezi**: instalezi profiluri din [Catalogul de profiluri](/docs/Application/Profiles/Catalog) și le publici pe ale tale.

<Screenshot name="dashboard-run" alt="Un tablou de bord MOCPilot în timpul condusului unui model" width={900} />

## Unde rulează MOCPilot {#where-mocpilot-runs}

| Dispozitiv | Aspect |
|---|---|
| Telefoane iPhone și Android | Aspect de telefon: bară inferioară; un profil deschis ocupă tot ecranul, în mod peisaj |
| iPad și tablete Android | Aspect de tabletă: bară laterală, mai mult loc pentru editor |
| Computere Mac și Windows | Aspect de desktop: meniuri, comenzi rapide de la tastatură, tabloul de bord în fereastră proprie |
| Browser pe mocpilot.com | [Editor web](/docs/Introducing/WebEditor): editezi profiluri; huburile sunt conectate de aplicația de pe alt dispozitiv |

Detalii în [Telefon, tabletă și desktop](/docs/Introducing/Layouts).

Huburile, profilurile tale și temele descărcate funcționează și fără internet. Vezi [Lucrul offline](/docs/Application/Account/Sync#working-offline).

## De unde să începi {#where-to-start}

1. Citește [Cum funcționează MOCPilot](/docs/Introducing/HowItWorks): cinci minute care fac totul mai ușor.
2. Urmează [Pornirea rapidă](/docs/Introducing/QuickStart) ca să conduci primul model.
3. Nu știi ce editor să alegi? Compară-le în [Creează un profil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, sigla LEGO, Powered Up și Technic sunt mărci comerciale ale LEGO Group, care nu sponsorizează, nu autorizează și nu susține MOCPilot.
:::
