---
id: CreateProfile
title: Creare un profilo
description: "Crea un profilo e scegli tra gli editor di programmi Blocchi logici e Collegamenti rapidi."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Creare un profilo {#create-a-profile}

1. Vai in **I miei profili**.
   - Smartphone: tocca **+** → **Nuovo profilo**.
   - Tablet: **Nuovo profilo** nell'intestazione.
   - Computer: **File → Nuovo profilo** (⌘N / Ctrl+N).
2. Scegli il **tipo di programma** (vedi sotto).
3. Compila i dettagli del profilo.
4. Tocca **Crea**. Il profilo si apre nell'editor.

<Screenshot name="create-profile-tiles" alt="Pagina Nuovo profilo" width={900} />

## Scegliere il tipo di programma {#choose-the-program-type}

Il tipo di programma decide quale editor usa il profilo. **Non potrai cambiarlo in seguito.** Per provare l'altro editor, crea un secondo profilo.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Collegamenti rapidi" style={{width: '100%', maxWidth: 320}} />
    <h3>Collegamenti rapidi</h3>
    <p><em>Uno schema semplificato, come in Controlz.</em> Collega i controlli della dashboard ai motori e alle luci degli hub riga per riga: ingresso, elaborazione, operazione, hub. Pronto in pochi minuti.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Blocchi logici" style={{width: '100%', maxWidth: 320}} />
    <h3>Blocchi logici</h3>
    <p><em>Robotica, algoritmi e scenari avanzati.</em> Programma il modello con i blocchi: eventi, cicli, condizioni, variabili e dati dei sensori. Per robot e automazioni.</p>
  </div>
</div>

| | Collegamenti rapidi | Blocchi logici |
|---|---|---|
| Come si costruisce | Righe: ingresso → elaborazione → operazione → hub | Blocchi agganciati in script |
| Tempo di apprendimento | Minuti | Più lungo; più possibilità |
| Ideale per | Auto, camion, treni, gru: «questo controllo muove quel motore» | Robot, sequenze automatiche, logica con sensori, giochi |
| Logica (se, cicli, variabili) | No (solo soglie e commutazioni) | Sì |
| Sensori | Sensori degli hub come ingressi; valori sugli indicatori | Tutti i sensori degli hub e dello smartphone, qualsiasi calcolo |
| Partenza graduale, limiti, zona morta | Blocchi pronti | Costruiti con i blocchi |
| Sterzo servo con calibrazione | Blocco pronto | Blocchi |
| Gamepad | Sì | Sì |
| Più hub | Sì | Sì |

**Non sei sicuro?** Inizia con i Collegamenti rapidi. Se in seguito ti serve una logica, crea un profilo Blocchi logici per il modello.

Se tocchi **Crea** senza aver scelto un tipo, i riquadri vengono evidenziati. Ogni riquadro ha un link **Documentazione ↗** alla relativa parte di questa documentazione.

## Dettagli del profilo {#profile-details}

- **Immagine**: fai clic sull'area dell'immagine (tienila premuta su un touch screen) per scegliere un'immagine. Trascina l'immagine in su o in giù per scegliere la parte visibile. **Aggiorna immagine** e **Rimuovi** permettono di cambiarla in seguito.
- **Nome**: obbligatorio e deve essere unico: «Esiste già un profilo con il nome “…”» significa che ne hai già uno con questo nome.
- **Livello blocchi** (solo Blocchi logici): **Principiante**, **Avanzato** o **Guru**. Determina quali blocchi mostra la tavolozza per questo profilo. Puoi cambiarlo in seguito nelle Impostazioni dell'editor. Vedi [Lavorare nell'editor](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtag**: descrivono il profilo e aiutano gli altri a trovarlo. Gli hashtag provengono da un elenco comune, che si carica quando sei online.

Tutto tranne il tipo di programma si può cambiare in seguito in **Modifica profilo**, dove puoi anche aggiungere una descrizione e contrassegnare il profilo come **Preferito**.

## Prossimi passi {#next-steps}

1. Aggiungi gli hub: [Aggiungere e collegare un hub](/docs/Application/Hubs/ConnectingHubs).
2. Disponi i controlli: [Dashboard](/docs/Application/Dashboard/DashboardOverview).
3. Scrivi il programma: [Collegamenti rapidi](/docs/Application/Links/LinksIntroducing) o [Blocchi logici](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip Assistente IA
Con [MocPilot Pro](/docs/Application/Account/Pro) puoi descrivere il tuo modello a parole o a voce e lasciare che l'Assistente IA crei gli hub, la dashboard e il programma (Blocchi logici o Collegamenti rapidi). Indica quale hub usi, cosa è collegato a ogni porta e cosa deve fare. Vedi [Come ottenere un buon risultato](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
