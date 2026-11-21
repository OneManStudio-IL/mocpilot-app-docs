---
id: FirstCarBlocks
title: La stessa auto con i Blocchi logici
description: "Passo dopo passo: programma un'auto LEGO radiocomandata con trazione, sterzo servo, luci e frecce nei Blocchi logici."
---

import Screenshot from '@site/src/components/Screenshot';

# La stessa auto con i Blocchi logici {#the-same-car-in-logic-blocks}

Questo tutorial ricostruisce l'auto di [La tua prima auto RC con i Collegamenti rapidi](/docs/Tutorials/FirstCarLinks), questa volta con i [Blocchi logici](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Il risultato è lo stesso, un joystick che fa avanzare e sterzare l'auto e un pulsante per le luci, e lungo la strada impari le basi della programmazione a blocchi: eventi, cicli, variabili e il Monitor. Alla fine puoi aggiungere le frecce con il ticchettio.

**Cosa ti serve**: lo stesso modello del tutorial sui Collegamenti rapidi:

- un LEGO® Technic™ Hub (88012);
- un motore di trazione sulla **porta A**;
- un motore dello sterzo con encoder sulla **porta B** (un motore Technic L o XL o qualsiasi motore angolare Technic);
- luci LEGO® sulla **porta C** (facoltative).

Con un City Hub, usa le porte **A** e **B** e rinuncia alle luci.

**Il risultato**:

```text
quando il programma inizia
imposta (luci) a 0
imposta posizione relativa 0  (Hub 1, porta B)
ripetere sempre
    imposta (acceleratore) a (joystick JOY1 asse Y)
    avvia motore a (acceleratore) % velocità  (Hub 1, porta A)
    vai alla posizione relativa (joystick JOY1 asse X × 0.9) a 100 % velocità  (Hub 1, porta B)

quando il bottone BTN1 premuto
    se (luci) = 0 allora
        accendere a 100 % luminosità  (Hub 1, porta C)
        imposta (luci) a 1
    altro
        spegnere  (Hub 1, porta C)
        imposta (luci) a 0
```

Come leggere gli elenchi: ogni riga è un blocco, così come lo mostra l'app. I valori tra parentesi sono l'hub e la porta che scegli nel blocco, oppure un blocco o una variabile che inserisci in uno spazio. Le righe rientrate vanno dentro il blocco a C che le precede.

## 1. Crea il profilo {#create-the-profile}

1. In **I miei profili**, inizia un nuovo profilo (**+** → **Nuovo profilo** su uno smartphone, **Nuovo profilo** su un tablet, **File → Nuovo profilo** su un computer).
2. Scegli il riquadro **Blocchi logici**.
3. Inserisci un **Nome** e imposta **Livello blocchi** su **Avanzato**. Il ciclo **ripetere sempre** e **se … allora … altro** usati qui sono blocchi del livello Avanzato; la tavolozza **Principiante** non li mostra.
4. Tocca **Crea**.

Puoi cambiare il livello in seguito in **Impostazioni dell'editor** → **Seleziona livello blocchi**. Vedi [Creare un profilo](/docs/Application/Profiles/CreateProfile) e [Livelli dei blocchi](/docs/Application/BlockBuilder/Editor#block-levels).

## 2. Aggiungi l'hub e i controlli {#hub-and-dashboard}

Procedi esattamente come nel tutorial sui Collegamenti rapidi:

1. [Aggiungi e collega l'hub](/docs/Tutorials/FirstCarLinks#add-the-hub) in **I miei hub**.
2. [Disponi i controlli sulla dashboard](/docs/Tutorials/FirstCarLinks#dashboard): un **Joystick** (**JOY1**) a sinistra e un **Bottone** (**BTN1**) a destra.

<Screenshot name="tutorial-car-dashboard" alt="Dashboard con il joystick JOY1 a sinistra e il pulsante BTN1 a destra" width={900} />

Quando l'hub è nel profilo, la tavolozza mostra le categorie **Motori** e **Luce**; i controlli compaiono in **Controller su schermo**.

## 3. Eventi o ciclo? {#events-or-loop}

Uno script inizia con un blocco **evento** ed esegue i blocchi sottostanti dall'alto verso il basso. Più script vengono eseguiti contemporaneamente.

- Un blocco evento come [quando il bottone … premuto](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) esegue il suo script una volta ogni volta che l'evento si verifica. Gli eventi sono adatti a ciò che accade in un preciso momento: la pressione di un pulsante, un interruttore, una freccia.
- Un joystick cambia di continuo. Il modo più semplice per seguirlo è uno script che inizia con [quando il programma inizia](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) e continua a leggere la levetta in un ciclo [ripetere sempre](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).

Quest'auto usa entrambi: un ciclo per trazione e sterzo e un evento per le luci.

## 4. Trazione {#drive}

1. Da **Eventi**, trascina [quando il programma inizia](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) nell'area del programma.
2. Da **Controllo**, aggancia sotto di esso [ripetere sempre](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever).
3. Da **Motori**, inserisci [avvia motore a … % velocità](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) dentro **ripetere sempre**. Scegli l'hub e la porta **A**.
4. Da **Controller su schermo**, trascina il blocco del valore del [joystick](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) nello spazio della velocità. Scegli **JOY1** e **asse Y**.

```text
quando il programma inizia
ripetere sempre
    avvia motore a (joystick JOY1 asse Y) % velocità  (Hub 1, porta A)
```

Metti l'auto su un supporto, premi **Avvia** e spingi il joystick: il joystick fornisce valori da −100 a 100, che corrispondono esattamente alla velocità del motore in percentuale. Quando hai finito, premi **Ferma**.

**Va indietro quando spingi in su?** Usa [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) da **Operatore**: `(joystick JOY1 asse Y × -1)`. **Troppo veloce?** Moltiplica invece per 0.5.

## 5. Sterzo {#steer}

Il motore dello sterzo segue l'asse X del joystick con [vai alla posizione relativa … a … % velocità](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position). Le posizioni relative si contano dal punto che imposti con [imposta posizione relativa …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position).

1. Aggancia **imposta posizione relativa** subito sotto **quando il programma inizia**, sopra **ripetere sempre**. Lascia il valore a 0 e scegli la porta **B**.
2. Dentro **ripetere sempre**, sotto il blocco del motore, aggiungi **vai alla posizione relativa … a … % velocità** con la porta **B**.
3. Nello spazio della posizione inserisci **… × …**, con l'**asse X** del joystick a sinistra e `0.9` a destra. Così −100…100 diventa −90…90 gradi.
4. Imposta la velocità a 100.

```text
quando il programma inizia
imposta posizione relativa 0  (Hub 1, porta B)
ripetere sempre
    avvia motore a (joystick JOY1 asse Y) % velocità  (Hub 1, porta A)
    vai alla posizione relativa (joystick JOY1 asse X × 0.9) a 100 % velocità  (Hub 1, porta B)
```

Prima di ogni **Avvia**, raddrizza le ruote a mano: quella posizione diventa il centro. Se le ruote girano troppo, usa un numero più piccolo di 0.9; se sterzano dalla parte sbagliata, usa −0.9.

### Variante: calibrare lo sterzo automaticamente {#calibrate-rack}

Se lo sterzo ha dei finecorsa, [calibrare cremagliera … centro … gradi …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) trova il centro e la corsa al posto tuo. Prima crea due variabili (**Variabili** → **Creare una variabile**), ad esempio `centro` e `corsa`, e inseriscile negli spazi del blocco. Il blocco porta la cremagliera a entrambe le estremità, si ferma a metà e scrive i risultati nelle variabili; lo script prosegue al termine della calibrazione.

```text
quando il programma inizia
calibrare cremagliera (centro) centro (corsa) gradi  (Hub 1, porta B)
imposta posizione relativa 0  (Hub 1, porta B)
ripetere sempre
    avvia motore a (joystick JOY1 asse Y) % velocità  (Hub 1, porta A)
    vai alla posizione relativa ((corsa × joystick JOY1 asse X) ÷ 100) a 100 % velocità  (Hub 1, porta B)
```

**imposta posizione relativa 0** subito dopo la calibrazione rende il centro lo zero, così con la levetta tutta piegata le ruote girano della corsa misurata.

## 6. Luci su un pulsante {#lights}

I Collegamenti rapidi hanno un blocco Alterna già pronto. Nei Blocchi logici, una [variabile](/docs/Application/BlockBuilder/Blocks/Variables) ricorda se le luci sono accese.

1. In **Variabili**, tocca **Creare una variabile** e chiamala `luci`.
2. Aggiungi [imposta … a …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) all'inizio dello script principale: `imposta (luci) a 0`.
3. Da **Controller su schermo**, trascina [quando il bottone … premuto](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) in un punto libero e scegli **BTN1**.
4. Sotto di esso, aggiungi [se … allora … altro](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) con la condizione [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal): `(luci) = 0`.
5. Nel primo ramo, aggiungi [accendere a … % luminosità](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to) (porta **C**) e `imposta (luci) a 1`. Nel secondo ramo, aggiungi [spegnere](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off) (porta **C**) e `imposta (luci) a 0`.

```text
quando il bottone BTN1 premuto
    se (luci) = 0 allora
        accendere a 100 % luminosità  (Hub 1, porta C)
        imposta (luci) a 1
    altro
        spegnere  (Hub 1, porta C)
        imposta (luci) a 0
```

Con un **Interruttore** al posto del pulsante è ancora più semplice: *quando interruttore … è stato attivato / disattivato*; vedi gli [esempi](/docs/Application/BlockBuilder/Examples).

## 7. Avvia e osserva il Monitor {#monitor}

Quando qualcosa non funziona come previsto, guarda i valori. Il [Monitor](/docs/Application/BlockBuilder/Editor#monitor) nella barra superiore mostra tutte le variabili mentre il programma è in esecuzione.

1. Crea una variabile `acceleratore`.
2. Nel ciclo, salva al suo interno il valore del joystick e usa la variabile per la velocità del motore:

```text
ripetere sempre
    imposta (acceleratore) a (joystick JOY1 asse Y)
    avvia motore a (acceleratore) % velocità  (Hub 1, porta A)
    vai alla posizione relativa (joystick JOY1 asse X × 0.9) a 100 % velocità  (Hub 1, porta B)
```

3. Premi **Avvia** e apri **Monitor**. Muovi il joystick e premi BTN1: `acceleratore` segue la levetta e `luci` passa da 0 a 1 e viceversa.

<Screenshot name="blocks-monitor" alt="Monitor che mostra variabili e una lista mentre il programma è in esecuzione" width={900} />

- `acceleratore` cambia ma il motore non gira: controlla la connessione dell'hub in **I miei hub** e la porta nel blocco.
- `acceleratore` resta a 0: controlla che il blocco legga **JOY1** e l'asse giusto.

Nei Blocchi logici il programma resta modificabile durante l'esecuzione, quindi puoi cambiare un numero e vederne subito l'effetto. Ecco il programma completo:

<Screenshot name="tutorial-car-blocks-program" alt="Il programma finito dell'auto: lo script principale con il ciclo ripetere sempre e lo script delle luci di BTN1" width={900} />

Altro aiuto: [Risoluzione dei problemi](/docs/Help/Troubleshooting).

## 8. Facoltativo: frecce con suono {#turn-signals}

Aggiungi alla dashboard il [controllo speciale](/docs/Application/Dashboard/SpecialControls#turn-signals) **Frecce** (**STALK1**) e collega una luce alla **porta D**. Sposta la leva in su per la freccia sinistra e in giù per quella destra.

```text
quando frecce STALK1 freccia sinistra si accende
    suono Freccia riproduci
    ripetere finché non (frecce STALK1 freccia sinistra è acceso ?)
        accendere a 100 % luminosità  (Hub 1, porta D)
        aspettare 0.5 secondi
        spegnere  (Hub 1, porta D)
        aspettare 0.5 secondi
    ferma suono Freccia
```

I blocchi: [quando frecce …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) e [frecce … è acceso ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean) in **Controller su schermo**; [suono … riproduci](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) e [ferma suono …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop) in **Suoni**; [ripetere finché …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) e [aspettare … secondi](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for) in **Controllo**; [non …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not) in **Operatore**.

Il suono **Freccia** si ripete da solo finché non lo fermi. Il suono viene riprodotto sul tuo smartphone, tablet o computer.

Duplica lo script (pressione prolungata o clic con il tasto destro → **Duplica**) e scegli **freccia destra** in entrambi i blocchi. A quel punto entrambe le frecce fanno lampeggiare la stessa luce sulla porta D; per avere luci separate a sinistra e a destra servono due porte libere, ad esempio su un secondo hub.

## Collegamenti rapidi o Blocchi logici: quale scegliere? {#which-to-choose}

| | Collegamenti rapidi | Blocchi logici |
|---|---|---|
| Quest'auto | 3 righe | 2 script, 2 variabili |
| Partenza graduale, zona morta, limite | blocchi pronti | moltiplicare e calcolare da sé |
| Sterzo servo | blocco Servo con calibrazione Auto | blocchi di posizione relativa o calibrare cremagliera |
| Luci su un pulsante | blocco Alterna | una variabile e *se … allora … altro* |
| Suoni, sequenze, condizioni | no | sì |
| Valori in tempo reale | su ogni giunto di una riga | il Monitor e i monitor della dashboard |
| Modifica durante l'esecuzione | no | sì |

Scegli i **Collegamenti rapidi** quando ogni controllo deve semplicemente muovere qualcosa: auto, camion, treni, gru. Scegli i **Blocchi logici** quando ti serve una logica: suoni, sequenze di lampeggi, sequenze di azioni, reazioni ai sensori, giochi. Il tipo di programma non si può cambiare, ma puoi creare un secondo profilo per lo stesso modello. Maggiori dettagli in [Creare un profilo](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

## Prossimi passi {#next-steps}

- Mostra la batteria su un **Monitor** della dashboard e ricevi un avviso quando si sta scaricando: [Esempi](/docs/Application/BlockBuilder/Examples#battery-warning).
- Guida con un gamepad: [Blocchi del gamepad](/docs/Application/BlockBuilder/Blocks/Gamepad) e l'[esempio con il gamepad](/docs/Application/BlockBuilder/Examples#gamepad).
- Rendi l'auto realistica con pedali, cambio e inerzia: [Simulatore](/docs/Application/BlockBuilder/Blocks/Simulator).
- Impara a usare l'editor: [Lavorare nell'editor](/docs/Application/BlockBuilder/Editor).
