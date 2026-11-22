---
id: ConnectingHubs
title: Aggiungere e collegare un hub
description: "Aggiungi un hub a uno slot del profilo, collegalo, rinominalo e osserva i suoi sensori nel monitor dell'hub."
---

import Screenshot from '@site/src/components/Screenshot';

# Aggiungere e collegare un hub {#add-and-connect-a-hub}

Un hub si aggiunge a un profilo una sola volta. Da quel momento MOCPilot si collega all'hub ogni volta che apri il profilo.

## Aggiungere un hub {#add-a-hub}

1. Apri il profilo e tocca **I miei hub** (su un computer, **Hub** nella barra superiore oppure ⇧⌘H / Ctrl+Shift+H). La pagina **I miei hub Bluetooth** mostra gli slot.
2. Tocca **Aggiungi un nuovo hub** in uno slot libero.
3. Scegli il tuo hub dall'elenco. Il filtro in alto mostra **Tutto**, **LEGO**, **SBrick**, **BuWizz** o **Mould King**. Tocca **Aggiungi**.
4. Segui i passaggi sullo schermo: **Premi il pulsante sull’hub** e **Attendi che la ricerca trovi l’hub**. Tocca **Avvia scansione** per cercare di nuovo.

<Screenshot name="add-hub" alt="Scelta dell'hub da aggiungere" width={900} />

Quando l'hub viene trovato, si collega e resta nello slot.

<Screenshot name="my-hubs" alt="I miei hub Bluetooth con hub collegati e slot liberi" width={900} />

## Il menu dello slot {#the-slot-menu}

Il pulsante **Connetti** di uno slot collega l'hub. Il menu dello slot contiene:

- **Disconnetti**;
- **Rinomina hub**: salva un nuovo nome nell'hub stesso (hub collegati che lo supportano);
- **Aggiorna firmware**: quando è disponibile un firmware più recente; vedi [Aggiornamento del firmware](/docs/Application/Hubs/FirmwareUpdating);
- **Ripristina firmware dell'hub**: quando l'hub è collegato in modalità di ripristino; vedi [Ripristino del firmware](/docs/Application/Hubs/RecoveryHubFirmware);
- **Seleziona configurazione**: configurazioni del Technic Move; vedi [Configurazioni del Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Seleziona canale: A / B / C**: il canale di controllo Mould King;
- **Elimina hub**: rimuove l'hub dal profilo.

Il pulsante **I miei hub** nell'editor (**Hub** su un computer) mostra quanti hub sono collegati.

## Monitor dell'hub {#hub-monitor}

Apri un hub collegato per vedere il suo **Monitor dell'hub**:

- l'hub: modello, nome, firmware, batteria, ricarica, temperatura della scheda, configurazione, orientamento, inclinazione (beccheggio, rollio, imbardata) e accelerometro;
- ogni porta: il dispositivo collegato e la sua velocità, posizione, posizione relativa, colore, luce riflessa e ambientale o distanza.

Usalo per verificare quale motore è su quale porta e in che verso gira, prima di creare il programma.

<Screenshot name="hub-monitor" alt="Monitor dell'hub di un Technic Hub collegato" width={900} />

## Consigli per la connessione {#connection-tips}

- Accendi l'hub subito prima di collegarlo: molti hub si spengono da soli dopo qualche minuto senza connessione.
- Tieni il telefono vicino all'hub: muri e metallo riducono la portata.
- Un hub può essere collegato a un solo dispositivo alla volta. Chiudi le altre app che lo usano (app LEGO®, altri telecomandi).
- **Bluetooth è disattivato**: attiva il Bluetooth e consenti a MOCPilot di usarlo nelle impostazioni di sistema.
- **Hub non trovato**: premi di nuovo il pulsante dell'hub, riavvia la scansione o cambia le batterie.
- Gli hub **Mould King** non si «collegano» davvero: MOCPilot invia loro i comandi tramite Bluetooth advertising. Se l'hub non reagisce, tocca **Connetti di nuovo** e controlla il canale.

Altre informazioni in [Risoluzione dei problemi](/docs/Help/Troubleshooting#hubs).
