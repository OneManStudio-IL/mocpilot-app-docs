---
id: HubsAndPorts
title: Blocco Hub e porte
description: "Il blocco Hub di Collegamenti rapidi: scelta delle porte, controlli sulle porte e la domanda sulla porta già in uso."
---

import Screenshot from '@site/src/components/Screenshot';

# Blocco Hub e porte {#hub-block-and-ports}

L'uscita [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) chiude una riga dopo un'operazione. C'è un blocco Hub per ogni hub in **I miei hub**, quindi aggiungi prima lì i tuoi hub. Finché non lo fai, la scheda mostra «Aggiungi hub in I miei hub o indicatori nella dashboard: compariranno qui».

## Cosa mostra il blocco Hub {#what-the-hub-block-shows}

- il nome dell'hub e un **indicatore di connessione** (collegato o no);
- le **Porte** come pulsanti: A, B, C, D… sugli hub LEGO® e su SBrick (A–F su Robot Inventor e Mould King 6.0), 1–4 su BuWizz 2.0, 1–4 più A e B su BuWizz 3.0 Pro;
- un sottotitolo: «porte A, B», «scegli le porte», «intero hub» (dopo un'operazione sull'intero hub) oppure «trazione, sterzo, luci» (Technic Move).

## Scegliere le porte {#choose-ports}

Tocca il pulsante di una porta per usarla; toccalo di nuovo per liberarla. Una riga può comandare **più porte** contemporaneamente, ad esempio due motori di trazione su A e B.

Vuoi che due motori girino in versi opposti? Crea due righe con lo stesso ingresso e aggiungi **Inverti** a una delle due.

## Una porta, una riga {#one-port-one-row}

Una porta appartiene a una sola riga. Se scegli una porta già usata da un'altra riga, MOCPilot chiede:

> **Porta già in uso**: Su «Technic Hub», la porta A è usata nella riga 2 (Motore). Usarla in questa riga? L'altra riga perde questa porta e smette di pilotarla.

**Usa in questa riga** sposta la porta; **Annulla** la lascia dov'era. Una porta usata da due righe (ad esempio in un vecchio file) viene segnalata come problema: «La porta A è usata anche nella riga 2».

<Screenshot name="port-in-use" alt="Finestra Porta già in uso" width={700} />

## Controlli sulle porte {#port-checks}

Quando l'hub è collegato, MOCPilot sa che cosa è collegato a ogni porta e verifica che l'operazione sia adatta:

| Problema | Significato |
|---|---|
| «Porta A: questo dispositivo non può funzionare come servo (serve un motore con encoder)» | Servo e Ruota di gradi richiedono un motore con encoder |
| «Porta A: il motore non ha posizione assoluta (solo motori angolari)» | Vai alla posizione richiede un motore angolare |
| «La porta A ha un sensore, non un motore» | il dispositivo sulla porta è un sensore |
| «La porta A accetta solo semplici comandi di velocità: nessun controllo di posizione» | questa porta non può controllare le posizioni |
| «La porta A non ha LED: usa le porte 1-4» | Colore della porta funziona solo sulle porte 1–4 di BuWizz 3.0 Pro |
| «Luci del sensore: scegli una sola porta, quella del sensore di distanza» | Luci del sensore richiede esattamente una porta |

Le operazioni che un hub non sa eseguire non vengono proposte per quell'hub. Se passi una riga a un altro hub, la riga indica quale operazione non è adatta, ad esempio «Freno: solo Technic Move (… non ha il comando freno)».

## Technic Move Hub {#technic-move-hub}

Il Technic Move Hub (nelle auto radiocomandate LEGO® Technic) si comanda per funzione, non per porta: il suo blocco Hub mostra **trazione, sterzo, luci** e non prevede porte. Usa **Motore** o **Motore a tempo** per la trazione, **Servo** per sterzare, **Luce** per le luci e **Freno**, **Boost** e **Impulso di potenza** per le funzioni speciali.

Trazione, sterzo, luci, freno e boost possono essere usati ciascuno da una sola riga («La riga 2 già aziona questo Technic Move»).

Per caricare nell'hub la configurazione di un'auto (Porsche, Lamborghini, Batmobile), usa **I miei hub → Seleziona configurazione**. Vedi [Configurazioni del Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Gli hub Mould King ricevono solo comandi, quindi non hanno ingressi e non danno alcun riscontro sulla connessione. Per cambiare il canale di controllo dell'hub, usa l'operazione [Canale](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
