---
id: AboutApp
title: Informazioni su MOCPilot
description: "MOCPilot trasforma uno smartphone, un tablet o un computer in un telecomando per modelli LEGO® e modelli Bluetooth compatibili."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: costruisci, guida, controlla tutto {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** trasforma il tuo smartphone, tablet o computer in un telecomando per modelli LEGO® e modelli Bluetooth compatibili: auto, camion, treni, gru, robot e i tuoi MOC.

I comandi li progetti tu: una **dashboard** con joystick, slider, pulsanti, volanti e indicatori. Un **programma** collega poi la dashboard ai motori e alle luci dei tuoi **hub**. MOCPilot ha due editor di programmi:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Editor Collegamenti rapidi: righe dall'ingresso all'hub" style={{width: '100%'}} />
    <h3>Collegamenti rapidi</h3>
    <p>Niente codice. Ogni riga collega un comando a un motore o a una luce: <em>ingresso → elaborazione → operazione → hub</em>. Un'auto è pronta da guidare in pochi minuti. <a href="/docs/Application/Links/LinksIntroducing">Scopri di più</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Editor Blocchi logici: programma a blocchi" style={{width: '100%'}} />
    <h3>Blocchi logici</h3>
    <p>Blocchi visivi con eventi, cicli, condizioni, variabili e dati dei sensori. Per robot, automazioni e tutto ciò che richiede una logica. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Scopri di più</a>.</p>
  </div>
</div>

## Cosa puoi fare {#what-you-can-do}

- **Guidare qualsiasi modello** da una dashboard progettata da te: joystick, slider, pulsanti, interruttori, interruttori a passi, monitor e controlli speciali come volante, pedali, cambio, freno a mano, frecce e manipolatore del treno.
- **Usare hub veri**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick e Mould King. Vedi [Dispositivi supportati](/docs/Introducing/SupportedDevices).
- **Usare un gamepad** (stile Xbox o PlayStation) al posto del touch screen.
- **Leggere i sensori**: batteria e inclinazione dell'hub, velocità e posizione dei motori, sensori di colore e di distanza e l'inclinazione del tuo smartphone.
- **Personalizzare la dashboard** con i [temi](/docs/Application/Themes/ThemesOverview).
- **Avere i tuoi profili ovunque**: con un account i profili si sincronizzano tra i tuoi dispositivi e puoi modificarli nel browser su [mocpilot.com](/docs/Introducing/WebEditor).
- **Guidare da un altro dispositivo**: con MocPilot Pro un dispositivo collega gli hub e un altro, o l'editor web, fa da telecomando.
- **Condividere**: installa profili dal [Catalogo dei profili](/docs/Application/Profiles/Catalog) e pubblica i tuoi.

<Screenshot name="dashboard-run" alt="Una dashboard di MOCPilot durante la guida di un modello" width={900} />

## Dove funziona MOCPilot {#where-mocpilot-runs}

| Dispositivo | Layout |
|---|---|
| iPhone e smartphone Android | Layout smartphone: barra in basso; un profilo aperto occupa tutto lo schermo in orizzontale |
| iPad e tablet Android | Layout tablet: barra laterale, più spazio per l'editor |
| Computer Mac e Windows | Layout desktop: menu, scorciatoie da tastiera, la dashboard in una finestra separata |
| Browser su mocpilot.com | [Editor web](/docs/Introducing/WebEditor): modifica dei profili; gli hub vengono collegati dall'app su un altro dispositivo |

Per i dettagli vedi [Smartphone, tablet e desktop](/docs/Introducing/Layouts).

Gli hub, i tuoi profili e i temi scaricati funzionano anche senza internet. Vedi [Lavorare offline](/docs/Application/Account/Sync#working-offline).

## Da dove iniziare {#where-to-start}

1. Leggi [Come funziona MOCPilot](/docs/Introducing/HowItWorks): cinque minuti che rendono tutto il resto più semplice.
2. Segui l'[Avvio rapido](/docs/Introducing/QuickStart) per guidare il tuo primo modello.
3. Non sai quale editor scegliere? Confrontali in [Creare un profilo](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, il logo LEGO, Powered Up e Technic sono marchi del Gruppo LEGO, che non sponsorizza, non autorizza e non approva MOCPilot.
:::
