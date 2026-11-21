---
id: HowItWorks
title: Come funziona MOCPilot
description: "Profili, dashboard, hub e programma: le quattro parti di ogni modello in MOCPilot."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Come funziona MOCPilot {#how-mocpilot-works}

In MOCPilot tutto è composto da quattro parti. Una volta capite, ogni schermata avrà senso.

<HowItWorks />

## 1. Profilo: un modello {#1-profile-one-model}

Un **profilo** contiene tutto ciò che riguarda un modello: i suoi hub, la sua dashboard e il suo programma. Crea un profilo per ogni modello, ad esempio «Technic Buggy» o «Autogru».

Quando crei un profilo, scegli il suo **tipo di programma**: Blocchi logici o Collegamenti rapidi. Non potrai cambiarlo in seguito. Vedi [Creare un profilo](/docs/Application/Profiles/CreateProfile).

## 2. Hub: l'elettronica del modello {#2-hubs-the-models-electronics}

Gli **hub** sono i mattoncini Bluetooth del modello; motori, luci e sensori si collegano alle loro porte. Un profilo ha degli **slot** per gli hub. Aggiungi una volta sola gli hub del modello agli slot e MOCPilot si collega a loro ogni volta che apri il profilo. Vedi [Hub](/docs/Application/Hubs/HubsOverview).

## 3. Dashboard: i tuoi comandi {#3-dashboard-your-controls}

La **dashboard** è la schermata da cui guidi. Disponi i controlli su una griglia: joystick, slider, pulsanti, interruttori, interruttori a passi e monitor, oltre a controlli speciali come volante e pedali. Un controllo da solo non fa nulla: passa i suoi valori al programma. Vedi [Dashboard](/docs/Application/Dashboard/DashboardOverview).

Puoi anche usare un gamepad, insieme alla dashboard o al suo posto. Vedi [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Programma: ciò che li collega {#4-program-what-connects-them}

Il **programma** decide cosa succede quando muovi un controllo: quale motore gira e a che velocità, quale luce lampeggia, cosa mostra un monitor.

- Nei **Collegamenti rapidi** il programma è un elenco di righe: *ingresso → elaborazione → operazione → hub*. Vedi [Collegamenti rapidi](/docs/Application/Links/LinksIntroducing).
- Nei **Blocchi logici** il programma è fatto di blocchi: eventi, cicli, condizioni, variabili e sensori. Vedi [Blocchi logici](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Avvio {#5-run}

Premi **Avvia** (▶). Il programma parte, i controlli della dashboard prendono vita e il modello risponde. Premi **Ferma** per tornare alla modifica. Vedi [Guidare un modello](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Programma Collegamenti rapidi: controlli della dashboard collegati alle porte dell'hub" width={900} />

## Una sessione tipica {#a-typical-session}

1. Apri un profilo o [creane uno](/docs/Application/Profiles/CreateProfile).
2. Aggiungi i tuoi hub in **I miei hub** e accendili.
3. Disponi i controlli sulla **Dashboard**.
4. Collegali a motori e luci nel **programma**.
5. Premi **Avvia**, guida, regola, ripeti.

## Cosa viene salvato e dove {#what-is-stored-where}

- I profili vengono salvati sul tuo dispositivo. Se hai effettuato l'accesso, vengono salvati anche nel tuo account e compaiono su tutti i tuoi dispositivi. Vedi [Sincronizzazione tra dispositivi](/docs/Application/Account/Sync).
- I temi e gli altri acquisti appartengono al tuo account. Vedi [MocPilot Pro e acquisti](/docs/Application/Account/Pro).
