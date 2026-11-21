---
id: SpecialControls
title: Controlli speciali
description: "Volante, pedali, leva del cambio, freno a mano, frecce e manipolatore del treno: come usarli, impostazioni, aspetti, valori e blocchi."
---

import Screenshot from '@site/src/components/Screenshot';

# Controlli speciali {#special-controls}

I controlli speciali hanno l'aspetto e il funzionamento di quelli veri: un volante, i pedali, una leva del cambio, un freno a mano, una leva delle frecce e un manipolatore da locomotiva. Ognuno è un prodotto separato: acquista quelli che ti servono oppure ottienili tutti con [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Una dashboard con volante, pedali, leva del cambio, freno a mano, frecce e manipolatore del treno" width={900} />

| Controllo | Prodotto | Nome sulla dashboard | Cosa fornisce al programma |
|---|---|---|---|
| [Volante](#steering-wheel) | Volante | STWHEEL | angolo di sterzata, clacson |
| [Pedali](#pedals) | Pedali | PDLS | acceleratore e freno |
| [Cambio manuale](#gear-shifter) | Leva del cambio | GEAR | marcia: R, N, 1…6 |
| [Cambio automatico](#gear-shifter) | Leva del cambio | GEARA | selettore: P, R, N, D |
| [Freno a mano](#handbrake) | Freno a mano | HBRK | forza, tirato |
| [Frecce](#turn-signals) | Frecce | STALK | freccia sinistra, freccia destra, luce |
| [Manipolatore del treno](#train-controller) | Manipolatore del treno | TRTHR | tacca di trazione, direzione, trazione |

La **Manopola** non è un prodotto separato: è inclusa in ogni tema a pagamento. Vedi [Tipi di controlli](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Aggiungere un controllo speciale {#add-a-special-control}

1. Apri la dashboard e tocca **+** (**Aggiungi controller**).
2. Nell'elenco dei tipi di controlli, scorri fino a **Veicolo e speciali** e seleziona un controllo.
3. La striscia degli aspetti mostra tutti i suoi aspetti. Scegline uno, poi configura il controllo in **Configura**.
4. Tocca **Aggiungi alla dashboard**. Per un controllo che non possiedi ancora, tocca **Acquista** o **Tutto con MocPilot Pro**.

<Screenshot name="special-control-looks" alt="La tavolozza Aggiungi controller con il volante selezionato e i suoi aspetti nella striscia degli aspetti" width={900} />

## Aspetti {#looks}

Ogni controllo speciale è disponibile in molti **aspetti**. La maggior parte corrisponde a un tema a pagamento (Corse, Aura, Classico, Ologramma e così via), così volante, leva del cambio e freno a mano possono accordarsi con il resto della dashboard. Puoi cambiare l'aspetto in qualsiasi momento: seleziona il controllo e scegline un altro in **Aspetto** nella scheda **Stile**. L'aspetto cambia solo l'immagine: i valori, i blocchi e il programma restano invariati.

Alcuni aspetti, quando li scegli, impostano anche un colore di accento adatto.

## Impostazioni di tutti i controlli speciali {#settings-of-all-special-controls}

- **Aspetto** (scheda Stile): vedi sopra.
- **Colore di accento** (scheda Stile): leva del cambio, freno a mano, frecce e manipolatore del treno.
- **Bloccare il controller** e **Interattività** (scheda Impostazioni), come per ogni controllo. Vedi [Proprietà dei controlli](/docs/Application/Dashboard/ControlProperties).

## Volante {#steering-wheel}

Appoggia un dito sul volante e ruotalo attorno al suo centro. Quando lo lasci, torna al centro da solo. Premi il centro del volante per suonare il clacson: questo non fa girare il volante.

**Impostazioni**

- **Angolo del volante** (20–120°, predefinito 60°): quanto devi ruotare il volante per arrivare a fine corsa. Non cambia i valori che riceve il programma.
- **Effetti sonori**: il suono del clacson e i suoni che il programma riproduce dal volante. Il suono dell'app deve essere attivo.

**Valori**: l'angolo di sterzata da −100 (tutto a sinistra) passando per 0 fino a 100 (tutto a destra); il clacson vale 100 finché lo tieni premuto, altrimenti 0.

**Aspetti**: Veicolo fuoristrada, Camion pesante, Supercar, Legno vintage, Volante da corsa, Rally scamosciato, Fuoristrada da lavoro, Concept luminoso, Autoarticolato, Berlina, Citycar, Dune buggy, 4x4 classico, Macchine da costruzione, Audio Hi-Fi, Aura, Mattoncini, Nucleo del circuito, Spazio profondo, Trasporto pesante, Neo Orbita, Cabina fuoristrada, Corse, Rock Crawler, Tattico, Classico, Tramonto, Miami, Hi-tech, Ologramma.

**Suoni** per il programma: Clacson auto, Tromba del camion, Clacson auto sportiva.

**Collegamenti rapidi**: l'ingresso [Volante](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) con i canali **Angolo di sterzata** e **Clacson**.

## Pedali {#pedals}

Il pedale del freno è a sinistra, l'acceleratore a destra. Premi un pedale con un dito: più in alto è il dito sul pedale, più il pedale è premuto. Vicino al fondo è premuto leggermente; vicino alla cima, a fondo. Lascialo e il pedale torna su. Puoi premere entrambi i pedali contemporaneamente.

**Impostazioni**: **Effetti sonori**: consente al programma di riprodurre i suoni dei pedali. Il suono dell'app deve essere attivo.

**Valori**: l'acceleratore e il freno, ciascuno da 0 a 100.

**Aspetti**: Veicolo fuoristrada, Camion pesante, Supercar, Cromo vintage, Carbonio e rosso, Corsa forato, Grip fuoristrada, Concept luminoso, Autoarticolato, Berlina, Citycar, Dune buggy, 4x4 classico, Macchine da costruzione, Audio Hi-Fi, Aura, Mattoncini, Nucleo del circuito, Spazio profondo, Trasporto pesante, Neo Orbita, Cabina fuoristrada, Corse, Rock Crawler, Tattico, Classico, Tramonto, Miami, Hi-tech, Ologramma.

**Suoni** per il programma: Freno auto, Freno auto sportiva, Freno ad aria del camion, Cicalino di retromarcia.

**Collegamenti rapidi**: l'ingresso [Pedali](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) con i canali **Pedale dell'acceleratore** e **Pedale del freno**.

:::tip I pedali da soli non fanno un'auto
I pedali forniscono solo quanto è premuto ciascuno di essi. Se una riga invia l'acceleratore direttamente a un motore, il motore gira esattamente quanto è premuto il pedale. Per ottenere un modello che accelera gradualmente, procede per inerzia, frena e va in retromarcia, usa il [simulatore di veicolo](#vehicle-simulator).
:::

## Leva del cambio {#gear-shifter}

Il prodotto **Leva del cambio** comprende due controlli: un **Cambio manuale** e un **Cambio automatico**.

### Cambio manuale {#manual-gearbox}

Una griglia ad H con la retromarcia e fino a sei marce avanti. Trascina il pomello lungo la fila centrale e poi in su o in giù in una marcia. Quando lo lasci, il pomello si aggancia alla marcia più vicina o torna in folle.

- **Numero di marce** (2–6, predefinito 6, scheda Impostazioni): la griglia cambia di conseguenza. La retromarcia è sempre nella colonna più a sinistra, la folle al centro.
- **Valori**: −1 = retromarcia (R), 0 = folle (N), 1…6 = marce avanti.

### Cambio automatico {#automatic-gearbox}

Un selettore con quattro posizioni: **P** (parcheggio), **R** (retromarcia), **N** (folle) e **D** (marcia). Il modo di azionarlo dipende dall'aspetto:

| Selettore | Come si usa | Aspetti |
|---|---|---|
| Leva | fai scorrere la leva lungo la guida; si ferma nella posizione più vicina | Hi-tech |
| Selettore rotante | ruota il selettore con un dito; scatta su P, R, N o D | Classico, Spazio profondo, Tattico, Macchine da costruzione, Audio Hi-Fi, Aura, Nucleo del circuito, Rock Crawler, Cabina fuoristrada, Neo Orbita, Fuoristrada, Mulo da lavoro, Concept, Berlina, Citycar, 4x4 classico |
| Pulsanti | tocca P, R, N o D | Corse, Trasporto pesante, Mattoncini, Camion pesante, Retrò, Rally, Supercar, Formula, Lungo raggio, Buggy, Tramonto, Miami, Ologramma |

- **Numero di marce** (2–8, predefinito 6, scheda Impostazioni): quante marce attraversa il [simulatore di veicolo](#vehicle-simulator) in D. Quando il simulatore sceglie una marcia, il selettore la mostra, ad esempio **D3**.
- **Valori**: −2 = P, −1 = R, 0 = N, 1 = D. Tutti e tre i selettori forniscono gli stessi valori, quindi il programma funziona con qualsiasi aspetto.

Entrambi i cambi hanno gli stessi aspetti: Classico, Corse, Spazio profondo, Tattico, Trasporto pesante, Macchine da costruzione, Audio Hi-Fi, Aura, Nucleo del circuito, Rock Crawler, Cabina fuoristrada, Mattoncini, Neo Orbita, Camion pesante, Retrò, Rally, Fuoristrada, Supercar, Formula, Mulo da lavoro, Concept, Lungo raggio, Berlina, Citycar, Buggy, Tramonto, 4x4 classico, Miami, Hi-tech, Ologramma.

**Collegamenti rapidi**: l'ingresso [Leva del cambio](/docs/Application/Links/Blocks/InputBlocks#controller-gear) con i canali **Marcia** (manuale: la marcia rispetto al numero di marce, retromarcia negativa; automatico: la direzione) e **Direzione (R − / avanti +)**: −1 in retromarcia, 0 in folle e in parcheggio, +1 in qualsiasi marcia avanti.

## Freno a mano {#handbrake}

Una leva del freno a mano. Afferra la leva per l'impugnatura e tirala verso il basso. La forza frenante segue quanto tiri. Lasciala e la leva torna indietro da sola.

Per **bloccarla**, tira la leva fino in fondo, poi fai scorrere il dito lungo la leva verso la sua base: l'impugnatura scivola giù e la leva resta bloccata. Per **rilasciare** una leva bloccata, tocca il controllo o trascina indietro la leva.

**Valori**: la forza da 0 a 100 e se la leva è bloccata.

**Aspetti**: Classico, Rally, Camion pesante, Retrò, Spazio profondo, Tattico, Aura, Trasporto pesante, Macchine da costruzione, Audio Hi-Fi, Neo Orbita, Cabina fuoristrada, Corse, Mattoncini, Nucleo del circuito, Rock Crawler, Fuoristrada, Supercar, Formula, Mulo da lavoro, Concept, Lungo raggio, Berlina, Citycar, Buggy, Tramonto, 4x4 classico, Miami, Hi-tech, Ologramma.

**Collegamenti rapidi**: l'ingresso [Freno a mano](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) con i canali **Freno a mano tirato** (acceso/spento, come un interruttore) e **Forza del freno a mano**.

## Frecce {#turn-signals}

Una leva delle frecce con un interruttore delle luci.

- Trascina la leva **in su** per la freccia sinistra e **in giù** per la freccia destra. Resta dove la lasci; riportala al centro per spegnere la freccia.
- **Tocca** la leva o il pulsante dei fari per accendere o spegnere la luce. Questo non sposta la leva.

**Impostazioni**

- **Icona: left**, **Icona: light**, **Icona: right** (scheda Stile): le icone delle spie.
- **Le uscite delle frecce lampeggiano** (scheda Impostazioni, attiva per impostazione predefinita): le uscite delle frecce lampeggiano insieme alla spia sulla leva, così una luce collegata a esse lampeggia da sola. Quando è disattivata, le uscite restano accese fisse mentre la freccia è attiva. I blocchi vedono sempre lo stato fisso.

**Valori**: freccia sinistra, freccia destra e luce, ciascuna accesa o spenta.

**Aspetti**: Classico, Corse, Spazio profondo, Tattico, Trasporto pesante, Macchine da costruzione, Audio Hi-Fi, Aura, Nucleo del circuito, Rock Crawler, Cabina fuoristrada, Mattoncini, Neo Orbita, Camion pesante, Retrò, Rally, Fuoristrada, Supercar, Formula, Mulo da lavoro, Concept, Lungo raggio, Berlina, Citycar, Buggy, Tramonto, 4x4 classico, Miami, Hi-tech, Ologramma.

**Collegamenti rapidi**: l'ingresso [Frecce](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) con i canali **Frecce (sinistra − / destra +)** (due luci di polarità opposta su una porta), **Freccia sinistra**, **Freccia destra** e **Luce**.

## Manipolatore del treno {#train-controller}

Un manipolatore da locomotiva con una leva di trazione e un invertitore.

- **Trazione**: trascina la leva in su o in giù. Ha 8 tacche di trazione (0–8) e resta sulla tacca in cui la lasci.
- **Invertitore**: trascina il suo pomello in su per **avanti** o in giù per **retromarcia**; al centro c'è la **folle**. Il pomello salta da una posizione all'altra e non si ferma mai a metà. Come in una vera cabina, si muove solo quando la trazione è a 0.

**Valori**: la tacca di trazione (0–8), l'invertitore (1 = avanti, 0 = folle, −1 = retromarcia) e la **trazione**: tacca ÷ 8 × 100 con il segno della direzione, da −100 a 100. La trazione può comandare direttamente un motore del treno.

**Aspetti**: Originale, Macchine da costruzione, Audio Hi-Fi, Aura, Mattoncini, Buggy, Nucleo del circuito, Citycar, Classico, Concept, Spazio profondo, Fuoristrada, Trasporto pesante, 4x4 classico, Camion pesante, Miami, Neo Orbita, Supercar, Mulo da lavoro, Cabina fuoristrada, Corse, Rally, Rock Crawler, Berlina, Tramonto, Tattico, Lungo raggio, Retrò, Formula, Hi-tech, Ologramma.

**Collegamenti rapidi**: l'ingresso [Slider](/docs/Application/Links/Blocks/InputBlocks#controller-train); fornisce la trazione.

## Blocchi {#blocks}

Ogni controllo speciale aggiunge i propri blocchi alla categoria **Controller su schermo** dei Blocchi logici:

| Controllo | Eventi | Valori |
|---|---|---|
| Volante | *quando il volante … viene mosso / premuto / rilasciato* | *volante …*, *volante … premuto / rilasciato?* |
| Pedali | *quando i pedali … qualsiasi / freno / accelerazione viene mosso / premuto / rilasciato* | *pedali … accelerazione / freno*, *pedale … premuto / rilasciato?* |
| Cambi | *quando cambio … cambia marcia / sale di marcia / scala marcia / mette in folle / in retromarcia / in parcheggio* | *marcia …*, *cambio … in folle / in retromarcia / in una marcia avanti / in parcheggio?*, *marce di …* |
| Freno a mano | *quando freno a mano … viene tirato / bloccato / sbloccato / rilasciato* | *forza del freno a mano …*, *freno a mano … bloccato / sbloccato / tirato?* |
| Frecce | *quando frecce … freccia sinistra / freccia destra / luce si accende / si spegne* | *frecce … freccia sinistra / freccia destra / luce è acceso?* |
| Manipolatore del treno | *quando manipolatore … tacca cambiata / alzata / abbassata, trazione chiusa, invertitore spostato, leva rilasciata* | *manipolatore … trazione / tacca di trazione / invertitore*, *manipolatore … in avanti / in retromarcia / in folle / alla tacca 0?* |

Il volante e i pedali hanno anche il blocco *suono … di …*: sceglie uno dei loro suoni per i blocchi **Suoni**. Dettagli: [Controller su schermo](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Simulatore di veicolo {#vehicle-simulator}

I controlli speciali forniscono solo valori grezzi. Il **simulatore di veicolo** trasforma pedali, leva del cambio e freno a mano in un modello che si guida come un'auto: accelera con inerzia, procede per inerzia, frena, va in retromarcia, cambia marcia in D e resta fermo con il freno a mano.

- **Collegamenti rapidi**: usa l'ingresso [Veicolo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Scegli i **Pedali**, la **Leva del cambio** e il **Freno a mano** dalla tua dashboard, il **Tipo di veicolo** (Auto, Fuoristrada, Auto sportiva, Camion) e l'**Uscita**: **Velocità**, **Regime motore (giri/min)**, **In frenata** o **Con il freno a mano**.
- **Blocchi logici**: quando la dashboard ha pedali, una leva del cambio o un freno a mano, compare la categoria **Simulatore**. Crea lì un veicolo (**Crea veicolo**) e metti il blocco *guida* sotto un evento. Inserisci i valori nei suoi spazi: *acceleratore*, *freno*, *marcia*, *di* (numero di marce; qui si inserisce il blocco *marce di …*), *freno a mano* e *tirato*. Altri blocchi del Simulatore impostano il tipo di veicolo, l'inerzia del motore e la velocità in retromarcia, leggono la velocità, i giri motore e la marcia, e reagiscono quando il veicolo parte, si ferma, frena o cambia marcia.

Come guida il simulatore:

- L'**acceleratore** fa accelerare il modello con inerzia; rilascialo e il modello procede per inerzia. Il **freno** lo rallenta.
- **Senza cambio**, tenendo premuto il freno quando il modello è fermo, il modello va in retromarcia.
- **Cambio manuale**: R va in retromarcia, N non fa avanzare. Facoltativamente, ogni marcia limita la velocità massima.
- **Cambio automatico**: R va in retromarcia, N non fa avanzare, P tiene fermo il modello come un freno a mano tirato. In D il simulatore sale e scala di marcia da solo e mostra la marcia sul selettore.
- **Freno a mano**: la sua forza si aggiunge alla frenata; un freno a mano tirato può tenere fermo il modello.
- **Tipo di veicolo**: un camion è più pesante (più inerzia) e ha il freno ad aria; un'auto sportiva reagisce rapidamente e va più veloce in retromarcia.

Gli ultimi pedali, leva del cambio o freno a mano non si possono eliminare finché il programma usa blocchi del Simulatore.
