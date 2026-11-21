---
id: HubFunctions
title: Funzioni specifiche degli hub
description: "Funzioni speciali di Technic Move, BuWizz, SBrick, Mould King, Robot Inventor e altri hub in entrambi gli editor."
---

# Funzioni specifiche degli hub {#hub-specific-functions}

Ogni hub dotato di porte può comandare motori e luci. Alcuni hub sanno fare di più. In **Collegamenti rapidi** queste funzioni compaiono nella palette solo se nel profilo c'è un hub di quel tipo; in **Blocchi logici** sono blocchi specifici per l'hub.

## Motori con encoder (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Funzione | Collegamenti rapidi | Blocchi logici |
|---|---|---|
| Controllo della velocità | [Motore](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | imposta velocità a, avvia motore a … % velocità |
| Servo dello sterzo con calibrazione | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Manuale / Auto) | vai alla posizione relativa, calibrare cremagliera |
| Rotazione di un angolo | [Ruota di gradi](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | eseguire per |
| Posizione assoluta (motori angolari) | [Vai alla posizione](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | vai … alla posizione |
| Comportamento all'arresto: inerzia, freno, mantenimento | Motore → **All'arresto** | imposta motore a … alla fermata |
| Preimpostazioni di accelerazione dell'hub | Motore → **Accelerazione dell'hub** | imposta accelerazione a, imposta decelerazione a |
| Velocità, posizione, potenza, corrente come ingresso | [Ingresso Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) | velocità, posizione, posizione relativa, potenza |

## Technic Move Hub {#technic-move-hub}

L'hub delle auto radiocomandate LEGO® Technic (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Trazione, sterzo e luci si comandano per funzione, non per porta.
- **Sterzo** calibra da solo la propria cremagliera.
- **Freno**, **Boost** (modalità di potenza) e **Impulso di potenza** (solo con la configurazione Batmobile™ Tumbler).
- **Configurazioni dell'hub**: carica nell'hub il profilo di un'auto con **I miei hub → Seleziona configurazione**. Vedi [Configurazioni del Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Luci in Blocchi logici: *accendere le luci*.

## BuWizz 2.0 {#buwizz-20}

- **Modalità di potenza**: Lenta, Normale, Veloce, Ludicrous. In Collegamenti rapidi: l'operazione [Modalità di potenza](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); in Blocchi logici: *impostare … modalità di alimentazione su*.
- La modalità di potenza attuale, la **Tensione di uscita** e la corrente dei motori come ingressi.
- Semplice controllo della velocità sulle porte 1–4: nessun controllo della posizione.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- LED **Colore della porta** sulle porte 1–4: da un elenco o in RGB ([Colore della porta](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *imposta il colore della LED del porto su*).
- Corrente dei motori come ingresso, posizioni relative.

## SBrick e SBrick Plus {#sbrick-and-sbrick-plus}

- Motori e luci con controllo della velocità.
- Nessun controllo della posizione: Servo, Ruota di gradi e Vai alla posizione non sono disponibili.

## Mould King 4.0 e 6.0 {#mould-king-40-and-60}

- Solo comandi: niente sensori, niente pulsanti, nessun riscontro sulla connessione.
- **Canale di controllo** A, B o C: l'operazione [Canale](/docs/Application/Links/Blocks/OutputBlocks#op-channel) in Collegamenti rapidi, il blocco *impostare … canale di controllo a* in Blocchi logici oppure **Seleziona canale** in I miei hub.
- Al massimo 3 Mould King 4.0 oppure 1 Mould King 6.0 per profilo, e un solo tipo di Mould King per profilo.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

- **Matrice LED**: una barra di livello, un numero o un'immagine in Collegamenti rapidi; testo e pixel in Blocchi logici.
- **Luci del sensore di distanza** (gli «occhi» del sensore).
- **Rilevamento del blocco** e potenza del motore.
- Bluetooth classico: non disponibile su iPhone e iPad.

## Hub LEGO® con LED colorato {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor e il telecomando: puoi impostare il colore del LED dell'hub da un elenco o in RGB ([LED dell'hub](/docs/Application/Links/Blocks/OutputBlocks#hub-led) in Collegamenti rapidi, *imposta colore LED su* in Blocchi logici).

## Telecomando LEGO® Powered Up {#lego-powered-up-remote-control}

I suoi pulsanti sono ingressi, quindi puoi guidare un modello con il telecomando fisico tramite MOCPilot (Collegamenti rapidi: ingresso **Hub** → Pulsante; Blocchi logici: eventi dei pulsanti dell'hub).

## Sensori integrati {#built-in-sensors}

Livello e tensione della batteria, temperatura della scheda, inclinazione (beccheggio, rollio, imbardata), accelerazione e orientamento sono disponibili sugli hub che li hanno. Imposta **Orientamento dell'hub** (Collegamenti rapidi) o *impostare … orientamento inclinato a* (Blocchi logici) in base a come è montato l'hub.
