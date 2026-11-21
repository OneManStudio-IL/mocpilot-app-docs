---
id: BlocksIntroducing
title: Introduzione a Blocchi logici
description: "Blocchi logici è l'editor di programmazione visuale a blocchi di MOCPilot: eventi, cicli, condizioni, variabili, sensori e suoni."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Blocchi logici {#logic-blocks}

**Blocchi logici** è l'editor di programmazione a blocchi di MOCPilot. Crei i programmi incastrando blocchi, in modo molto simile a Scratch: eventi, cicli, condizioni, variabili, liste, blocchi personalizzati, suoni e blocchi per motori, luci, sensori, controlli della dashboard e gamepad.

Scegli Blocchi logici quando il tuo modello ha bisogno di una logica: robot, sequenze automatiche, reazioni ai sensori, controlli all'avvio, giochi. Se devi solo collegare i controlli ai motori, [Collegamenti rapidi](/docs/Application/Links/LinksIntroducing) è più veloce.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Programma in Blocchi logici" style={{width: '100%', maxWidth: 720}} />

:::warning Non è Scratch
Blocchi logici ha un proprio insieme di blocchi e un proprio comportamento. Non puoi importare i programmi MOCPilot in Scratch né i progetti Scratch in MOCPilot.
:::

## L'editor in breve {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Editor di Blocchi logici con la palette e un programma" width={900} />

- La **palette** elenca le categorie di blocchi: **Eventi**, **Controllo**, **Sensori**, **Suoni**, **Operatore**, **Variabili**, **Liste** e **I miei blocchi**. Altre categorie compaiono quando il profilo ne ha bisogno: **Motori** e **Luce** (quando un hub li supporta), **Simulatore** (quando la dashboard ha pedali, un cambio o un freno a mano), **Controller su schermo** e **Gamepad**.
- L'**area del programma** è dove trascini i blocchi e costruisci gli script.
- La barra superiore contiene **I miei hub**, **Dashboard**, **Gamepad**, **Monitor**, **Impostazioni dell'editor**, l'**Assistente IA** e **Avvia/Ferma**.

Per i dettagli vedi [Lavorare nell'editor](/docs/Application/BlockBuilder/Editor).

## Come viene eseguito un programma {#how-a-program-runs}

- Uno script inizia con un blocco **evento** (un blocco cappello): *quando il programma inizia*, *quando il bottone … è premuto*, *quando ricevo …* e così via.
- I blocchi agganciati sotto di esso vengono eseguiti dall'alto in basso.
- Più script vengono eseguiti **contemporaneamente**. Usa i messaggi (*trasmettere*) per coordinarli.
- I **cicli** (*ripetere sempre*, *ripetere*, *ripetere finché*) mantengono attivo uno script; le **condizioni** (*se*, *se … altro*, *aspettare fino a*) prendono decisioni.
- I blocchi **valore** (arrotondati) restituiscono valori e si inseriscono negli spazi di altri blocchi; i blocchi **booleani** (a punta) restituiscono vero o falso per le condizioni.
- Le **variabili** e le **liste** conservano valori tra blocchi e script.

## Forme dei blocchi {#block-shapes}

### Blocchi cappello {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Avviano uno script quando succede qualcosa. Puoi agganciare blocchi solo sotto di essi.

---

### Blocchi comando {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

I principali blocchi di comando: ognuno fa qualcosa.

---

### Blocchi C {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Blocchi a forma di C che contengono altri blocchi: cicli e condizioni.

---

### Blocchi valore {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Restituiscono un valore, ad esempio un numero o un testo.

---

### Blocchi booleani {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Restituiscono solo `true` o `false`. Di solito si usano nelle condizioni.

---

### Blocchi finali {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Chiudono uno script: sotto di essi non si può agganciare nulla.

---

### Pila di blocchi {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Una pila è un gruppo di blocchi collegati che viene eseguito come un unico script, dall'alto in basso.
Di solito una pila inizia con un blocco evento, seguito dai blocchi che vengono eseguiti in ordine.

---


## Hub, porte e controlli {#hubs-ports-and-controls}

- I blocchi per motori e luci ricevono un **Hub** e una **Porta**. Le categorie Motori e Luce compaiono solo se un hub del profilo le supporta, e alcuni blocchi esistono solo per determinati hub (ad esempio le modalità di potenza BuWizz o le funzioni del Technic Move Hub). La descrizione di ogni blocco indica con quali hub funziona.
- I blocchi della dashboard fanno riferimento ai controlli per nome (**JOY1**, **BTN2**). Non puoi eliminare un controllo dalla dashboard finché dei blocchi lo usano; rimuovi prima quei blocchi.
- I blocchi del gamepad compaiono quando **Abilita blocchi del gamepad** è attivo nella [pagina Gamepad](/docs/Application/Dashboard/Gamepad).

## Livelli dei blocchi {#block-levels}

Ogni profilo ha un **Livello blocchi**: **Principiante** mostra i blocchi più semplici, **Avanzato** aggiunge i blocchi di logica e per i dispositivi più comuni, e **Guru** mostra l'insieme completo. Lo scegli quando crei il profilo oppure in seguito nelle Impostazioni dell'editor. Questo riferimento indica il livello di ogni blocco accanto al suo nome.

## Flusso di lavoro consigliato {#recommended-workflow}

1. Inizia con un blocco evento e uno script breve; premi **Avvia** e verifica che funzioni.
2. Controlla presto il verso dei motori e gli intervalli dei valori (un Monitor aiuta).
3. Suddividi il programma in piccoli script che comunicano tra loro con i messaggi; sposta la logica ripetuta in [I miei blocchi](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Aggiungi sicurezza: limiti, arresti, un controllo all'avvio e un piano per quando un hub si disconnette.

## Errori comuni {#common-pitfalls}

- Uno script senza blocco evento non parte mai.
- È selezionato l'hub o la porta sbagliata, quindi non succede nulla di visibile.
- Mescolare testo, numeri e valori booleani dà risultati inattesi.
- Eventi molto frequenti senza filtro (ad esempio un evento del sensore a ogni minima variazione) possono sovraccaricare il programma; usa soglie o brevi attese.

## Riferimento dei blocchi {#block-reference}

- [Eventi](/docs/Application/BlockBuilder/Blocks/Events) · [Controllo](/docs/Application/BlockBuilder/Blocks/Control) · [Operatore](/docs/Application/BlockBuilder/Blocks/Operators)
- [Variabili](/docs/Application/BlockBuilder/Blocks/Variables) · [Liste](/docs/Application/BlockBuilder/Blocks/Lists) · [I miei blocchi](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motori](/docs/Application/BlockBuilder/Blocks/Motors) · [Luce](/docs/Application/BlockBuilder/Blocks/Light) · [Sensori](/docs/Application/BlockBuilder/Blocks/Sensors) · [Suoni](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulatore](/docs/Application/BlockBuilder/Blocks/Simulator) · [Controller su schermo](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad)

Nell'app, tieni premuto (o fai clic con il tasto destro su) un blocco e scegli **Informazioni sul blocco** per aprirne qui la descrizione.

Programmi pronti all'uso: [Esempi](/docs/Application/BlockBuilder/Examples).
