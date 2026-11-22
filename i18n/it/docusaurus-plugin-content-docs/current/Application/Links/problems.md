---
id: Problems
title: Esecuzione e risoluzione dei problemi
description: "Pannello dei problemi, cornici rosse, valori in tempo reale e messaggi comuni di Collegamenti rapidi."
---

import Screenshot from '@site/src/components/Screenshot';

# Esecuzione e risoluzione dei problemi {#running-and-fixing-problems}

## È tutto pronto? {#is-everything-ready}

Il pulsante **Problemi** nella barra superiore dell'editor (su un computer, subito prima di **Avvia**) mostra:

- un **segno di spunta verde**: «Tutte le righe sono pronte»;
- un **«!» rosso**: «Problemi: N».

Su un computer il testo è scritto sul pulsante; in una finestra stretta restano solo l'icona e il numero di problemi. Su smartphone o tablet il pulsante mostra l'icona, con il numero in un badge rosso.

Toccalo per aprire il pannello dei problemi (un pannello laterale sul telefono, un menu su tablet o computer). Il pannello elenca «Riga N — motivo»; tocca una voce per passare a quella riga. Il blocco che causa il problema ha una **cornice rossa**. Quando è tutto a posto, il pannello mostra «Ogni riga attiva può essere eseguita.»

<Screenshot name="links-problems" alt="Pannello dei problemi con una riga non pronta" width={900} />

Le righe con problemi non vengono eseguite; le altre sì.

## Messaggi comuni {#common-messages}

| Messaggio | Cosa fare |
|---|---|
| Trascina nella riga un ingresso e un'uscita (un hub o un indicatore della dashboard) | la riga è vuota |
| Aggiungi un ingresso all'inizio della riga | trascina prima un controllo, il veicolo, il gamepad o un ingresso dell'hub |
| Aggiungi un'uscita: un hub o un indicatore della dashboard | completa la riga con un'uscita |
| Aggiungi un'operazione prima dell'hub: motore, servo, luce | un'uscita Hub richiede un'operazione prima di sé |
| Scegli almeno una porta dell'hub | tocca il pulsante di una porta nel blocco Hub |
| Scegli un controller della dashboard | tocca il blocco di ingresso e scegli un controllo |
| … non si muove su questo asse | il joystick ha un solo asse: scegli l'altro asse o modifica il joystick |
| Scegli cosa fornisce … | il controllo non ha più questo canale: scegline uno |
| Scegli i pedali del veicolo | l'ingresso Veicolo richiede dei pedali nella dashboard |
| … non è nella dashboard | la leva del cambio o il freno a mano scelti per il Veicolo sono stati rimossi |
| «…» non funziona con questo controller | questo blocco di elaborazione non è adatto al segnale |
| Porta A: questo dispositivo non può funzionare come servo (serve un motore con encoder) | usa un motore con encoder o un'altra operazione |
| La porta A ha un sensore, non un motore | controlla che cosa è collegato alla porta |
| La porta A è usata anche nella riga 2 | ogni porta può appartenere a una sola riga |
| Attiva i blocchi del gamepad nella pagina Gamepad (barra superiore) | apri **Gamepad** e attiva **Abilita blocchi del gamepad** |
| L'indicatore mostra il valore così com'è: rimuovi l'operazione | una riga con Indicatore non ha operazioni |
| La calibrazione non ha bisogno di un'operazione: rimuovila | una riga con Calibra servo non ha operazioni |
| Scegli un hub con LED a colori (hub LEGO) | LED dell'hub funziona solo sugli hub LEGO® |
| I colori delle porte sono disponibili solo su BuWizz 3 | Colore della porta richiede un BuWizz 3.0 Pro |
| Nessun servo in modalità di calibrazione Auto in questo programma | Calibra servo richiede un Servo in modalità Auto |
| Questo blocco richiede una versione più recente dell'app | il profilo è stato creato in una versione più recente: aggiorna MOCPilot |
| La riga è disattivata | attivala dal menu della riga |

## Valori in tempo reale {#live-values}

Mentre il programma è in esecuzione, ogni giunzione tra i blocchi mostra il valore che la attraversa. Muovi un controllo e segui il valore lungo la riga:

- all'ingresso non cambia nulla: il controllo o il gamepad non invia niente; controlla il canale o l'asse;
- il valore cambia ma il motore non si muove: controlla l'indicatore di connessione dell'hub e la porta;
- il valore è piccolo dopo **Limite** o **Zona morta**: regola le loro impostazioni.

<Screenshot name="links-live-values" alt="Un programma di Collegamenti rapidi in esecuzione con i valori in tempo reale sulle giunzioni" width={900} />

## Il modello non si muove {#the-model-does-not-move}

1. L'hub è collegato? Controlla **I miei hub** e l'indicatore di connessione nel blocco Hub.
2. È stata scelta la porta giusta? I motori sono collegati dove pensi?
3. La riga è attiva e senza cornice rossa?
4. Il programma è in esecuzione (**Avvia**)?
5. La batteria è carica? Aggiungi una riga *Batteria → Indicatore* per tenerla d'occhio.

Altre informazioni in [Risoluzione dei problemi](/docs/Help/Troubleshooting).
