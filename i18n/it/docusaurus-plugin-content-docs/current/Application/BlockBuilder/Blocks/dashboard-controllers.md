---
id: DashboardControllers
title: Controller su schermo
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Controller su schermo {#dashboard-controllers}

Questi blocchi leggono i controlli della dashboard, reagiscono quando li usi e ne cambiano l'aspetto. Si trovano nella categoria **Controller su schermo**, che compare non appena la dashboard ha un controllo. Ogni tipo di controllo aggiunge i propri blocchi; in un blocco scegli il controllo in base al suo nome, ad esempio *BTN1* o *GEAR1*.

Intervalli usati qui sotto: la maggior parte dei valori analogici va da 0 a 100, oppure da −100 a 100 quando lo zero è al centro.

In questa pagina:

- [Blocchi per tutti i controlli](#blocks-for-all-controls): colore, interattività e suoni
- [Pulsanti e interruttori](#buttons-and-switches): pulsante, interruttore, interruttore a passi
- [Joystick e pad direzionali](#joysticks-and-d-pads)
- [Cursori e manopole](#sliders-and-knobs): cursore, manopola
- [Monitor](#monitor-blocks)
- [Volante e pedali](#steering-wheel-and-pedals)
- [Altri controlli speciali](#other-special-controls): cambio, freno a mano, frecce, riduttore, manipolatore del treno

## Blocchi per tutti i controlli {#blocks-for-all-controls}

### `Impostare il colore del controllo` (Avanzato) {#block_dashboard_controller_all_set_color}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_color.svg')} alt="block_dashboard_controller_all_set_color.svg" />

*impostare [controllo] colore a [colore]*: cambia il colore d'accento di un controllo.

- Tipo: blocco comando
- Funziona con i controlli che hanno un colore d'accento (non con il volante né con i pedali)
- Uso tipico: mostrare uno stato, ad esempio un pulsante che diventa rosso quando la batteria è scarica

### `Impostare l'interattività del controllo` (Avanzato) {#block_dashboard_controller_all_set_interactivity}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_all_set_interactivity.svg')} alt="block_dashboard_controller_all_set_interactivity.svg" />

*impostare [controllo] interattività [abilitare / disabilitare]*: un controllo disabilitato non reagisce al tocco.

- Tipo: blocco comando
- Uso tipico: bloccare un controllo per un certo tempo, ad esempio l'acceleratore finché non è terminato un controllo all'avvio

### `Suono di un controllo` (Principiante) {#block_dashboard_controller_sound}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_sound.svg')} alt="block_dashboard_controller_sound.svg" />

*suono [suono] di [controllo]*: uno dei suoni di un controllo, per i blocchi di riproduzione della categoria **Suoni**.

- Tipo: blocco valore
- Compare quando la dashboard ha un controllo con suoni: il [volante](/docs/Application/Dashboard/SpecialControls#steering-wheel) (clacson di auto, camion e auto sportiva) o i [pedali](/docs/Application/Dashboard/SpecialControls#pedals) (freni di auto, auto sportiva e camion, cicalino di retromarcia)
- Il suono viene riprodotto solo se l'impostazione **Effetti sonori** del controllo e il suono dell'app sono attivi

## Pulsanti e interruttori {#buttons-and-switches}

### Blocchi del pulsante {#button-blocks}

#### `Evento del pulsante` (Principiante) {#block_dashboard_controller_button_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_event.svg')} alt="block_dashboard_controller_button_event.svg" />

*quando il bottone [controllo] è [premuto / rilasciato]*: esegue lo script quando il pulsante viene premuto o rilasciato.

- Tipo: blocco evento

#### `Valore del pulsante (booleano)` (Principiante) {#block_dashboard_controller_button_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_button_value_boolean.svg')} alt="block_dashboard_controller_button_value_boolean.svg" />

*pulsante [controllo] [premuto / rilasciato]*: se il pulsante è premuto o rilasciato in questo momento.

- Tipo: blocco valore, `true` / `false`

### Blocchi dell'interruttore {#switch-blocks}

#### `Evento dell'interruttore` (Principiante) {#block_dashboard_controller_switch_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_event.svg')} alt="block_dashboard_controller_switch_event.svg" />

*quando interruttore [controllo] è stato attivato [abilitato / spento]*: esegue lo script quando l'interruttore viene acceso o spento.

- Tipo: blocco evento

#### `Valore dell'interruttore (booleano)` (Principiante) {#block_dashboard_controller_switch_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_switch_value_boolean.svg')} alt="block_dashboard_controller_switch_value_boolean.svg" />

*interruttore [controllo] [abilitato / spento]*: se l'interruttore è acceso o spento.

- Tipo: blocco valore, `true` / `false`

### Blocchi dell'interruttore a passi {#stepper-blocks}

Questi blocchi funzionano con l'interruttore a passi e con l'interruttore a passi verticale.

#### `Evento dell'interruttore a passi` (Principiante) {#block_dashboard_controller_stepper_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_event.svg')} alt="block_dashboard_controller_stepper_event.svg" />

*quando l'interruttore a passo [controllo] [qualsiasi / ripristina / meno / più] è [premuto / rilasciato]*: esegue lo script quando un pulsante dell'interruttore a passi viene premuto o rilasciato (**qualsiasi** indica uno qualsiasi di essi).

- Tipo: blocco evento

#### `Valore dell'interruttore a passi (numero)` (Principiante) {#block_dashboard_controller_stepper_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_stepper_value_float.svg')} alt="block_dashboard_controller_stepper_value_float.svg" />

*interruttore a passo [controllo]*: il numero del passo attuale.

- Tipo: blocco valore

## Joystick e pad direzionali {#joysticks-and-d-pads}

### Blocchi del joystick {#joystick-blocks}

#### `Evento del joystick` (Principiante) {#block_dashboard_controller_joystick_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_event.svg')} alt="block_dashboard_controller_joystick_event.svg" />

*quando il joystick [controllo] è [su / giù / sinistra / destra / spostato / rilasciato]*: esegue lo script quando la levetta viene spinta in una direzione, mossa in qualsiasi modo o rilasciata.

- Tipo: blocco evento

#### `Valore del joystick (numero)` (Principiante) {#block_dashboard_controller_joystick_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_float.svg')} alt="block_dashboard_controller_joystick_value_float.svg" />

*joystick [controllo] [asse X / asse Y]*: la posizione della levetta su un asse, da −100 a 100; il centro è 0.

- Tipo: blocco valore

#### `Valore del joystick (booleano)` (Principiante) {#block_dashboard_controller_joystick_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_joystick_value_boolean.svg')} alt="block_dashboard_controller_joystick_value_boolean.svg" />

*è joystick [controllo] [premuto / rilasciato]*: se c'è un dito sul joystick.

- Tipo: blocco valore, `true` / `false`

### Blocchi del pad direzionale {#d-pad-blocks}

#### `Evento del pad direzionale` (Principiante) {#block_dashboard_controller_dpad_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_event.svg')} alt="block_dashboard_controller_dpad_event.svg" />

*quando il D-pad [controllo] [su / giù / sinistra / destra] pulsante [premuto / rilasciato]*: esegue lo script quando un pulsante del pad direzionale viene premuto o rilasciato.

- Tipo: blocco evento

#### `Valore del pad direzionale (booleano)` (Principiante) {#block_dashboard_controller_dpad_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_dpad_value_boolean.svg')} alt="block_dashboard_controller_dpad_value_boolean.svg" />

*pad direzionale [controllo] [su / giù / sinistra / destra] pulsante [premuto / rilasciato]*: se un pulsante del pad direzionale è premuto o rilasciato in questo momento.

- Tipo: blocco valore, `true` / `false`

## Cursori e manopole {#sliders-and-knobs}

### Blocchi del cursore {#slider-blocks}

Questi blocchi funzionano con il cursore e con il cursore verticale.

#### `Evento del cursore` (Principiante) {#block_dashboard_controller_slider_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_event.svg')} alt="block_dashboard_controller_slider_event.svg" />

*quando il cursore [controllo] è [basso / alto / spostato / rilasciato]*: esegue lo script quando la maniglia raggiunge l'estremità bassa o alta, si muove o viene rilasciata.

- Tipo: blocco evento

#### `Valore del cursore (numero)` (Principiante) {#block_dashboard_controller_slider_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_slider_value_float.svg')} alt="block_dashboard_controller_slider_value_float.svg" />

*slider [controllo]*: la posizione della maniglia, da 0 a 100, oppure da −100 a 100 con **Valori negativi**.

- Tipo: blocco valore

### Blocchi della manopola {#rotary-knob-blocks}

Blocchi della [manopola](/docs/Application/Dashboard/ControlTypes#rotary-knob) dei temi a pagamento.

#### `Evento della manopola` (Principiante) {#block_dashboard_controller_rotary_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_event.svg')} alt="block_dashboard_controller_rotary_event.svg" />

*quando manopola [controllo] è [girata / premuta / rilasciata / girata al minimo / girata al massimo]*: esegue lo script quando la manopola viene girata, toccata, lasciata o raggiunge una delle sue estremità.

- Tipo: blocco evento

#### `Valore della manopola (numero)` (Principiante) {#block_dashboard_controller_rotary_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_float.svg')} alt="block_dashboard_controller_rotary_value_float.svg" />

*valore manopola [controllo]*: la posizione della manopola, da 0 a 100, oppure da −100 a 100 con **Zero al centro (-100..100)**.

- Tipo: blocco valore

#### `Valore della manopola (booleano)` (Principiante) {#block_dashboard_controller_rotary_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_rotary_value_boolean.svg')} alt="block_dashboard_controller_rotary_value_boolean.svg" />

*manopola [controllo] [premuta / al minimo / al massimo] ?*: se c'è un dito sulla manopola o se la manopola si trova a una delle sue estremità.

- Tipo: blocco valore, `true` / `false`

## Monitor {#monitor-blocks}

Blocchi dei [monitor](/docs/Application/Dashboard/Indicators).

### `Mostrare sul monitor` (Principiante) {#block_dashboard_controller_monitor_show}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_show.svg')} alt="block_dashboard_controller_monitor_show.svg" />

*mostrare [valore] su [controllo] monitor*: mostra un testo o un valore su un **Monitor**.

- Tipo: blocco comando
- Uso tipico: mostrare il livello della batteria, l'angolo di un motore, il dispositivo collegato a una porta dell'hub o il nome di una modalità

### `Impostare il valore del monitor` (Principiante) {#block_dashboard_controller_monitor_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_set_value.svg')} alt="block_dashboard_controller_monitor_set_value.svg" />

*impostare [valore] a [controllo] monitor*: imposta il valore di un monitor **Livello della batteria** o **Velocimetro**.

- Tipo: blocco comando

### `Impostare il valore del monitor inclinabile` (Principiante) {#block_dashboard_controller_monitor_tilt_set_value}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_monitor_tilt_set_value.svg')} alt="block_dashboard_controller_monitor_tilt_set_value.svg" />

*impostare [valore] a [controllo] [beccheggio / rollio] monitor*: imposta il beccheggio o il rollio mostrato su un **Monitor inclinabile**.

- Tipo: blocco comando

## Volante e pedali {#steering-wheel-and-pedals}

### Blocchi del volante {#steering-wheel-blocks}

Blocchi del [volante](/docs/Application/Dashboard/SpecialControls#steering-wheel).

#### `Evento del volante` (Principiante) {#block_dashboard_controller_steering_wheel_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_event.svg')} alt="block_dashboard_controller_steering_wheel_event.svg" />

*quando il volante [controllo] è [spostato / premuto / rilasciato]*: esegue lo script quando il volante gira, oppure quando lo tocchi o lo lasci.

- Tipo: blocco evento

#### `Valore del volante (numero)` (Principiante) {#block_dashboard_controller_steering_wheel_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steering_wheel_value_float.svg')} alt="block_dashboard_controller_steering_wheel_value_float.svg" />

*volante [controllo]*: l'angolo di sterzata, da −100 (tutto a sinistra) a 100 (tutto a destra).

- Tipo: blocco valore

#### `Valore del volante (booleano)` (Principiante) {#block_dashboard_controller_steeringwheel_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_steeringwheel_value_boolean.svg')} alt="block_dashboard_controller_steeringwheel_value_boolean.svg" />

*volante [controllo] [premuto / rilasciato]*: se c'è un dito sul volante.

- Tipo: blocco valore, `true` / `false`

### Blocchi dei pedali {#pedals-blocks}

Blocchi dei [pedali](/docs/Application/Dashboard/SpecialControls#pedals).

#### `Evento dei pedali` (Principiante) {#block_dashboard_controller_pedals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_event.svg')} alt="block_dashboard_controller_pedals_event.svg" />

*quando i pedali [controllo] [qualsiasi / freno / accelerazione] è [spostato / premuto / rilasciato]*: esegue lo script quando un pedale si muove, viene premuto o viene rilasciato.

- Tipo: blocco evento

#### `Valore dei pedali (numero)` (Principiante) {#block_dashboard_controller_pedals_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_float.svg')} alt="block_dashboard_controller_pedals_value_float.svg" />

*pedali [controllo] [accelerazione / freno]*: quanto sono premuti l'acceleratore o il freno, da 0 a 100.

- Tipo: blocco valore

#### `Valore dei pedali (booleano)` (Principiante) {#block_dashboard_controller_pedals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_pedals_value_boolean.svg')} alt="block_dashboard_controller_pedals_value_boolean.svg" />

*pedale [controllo] [accelerazione / freno] [premuto / rilasciato]*: se un pedale è premuto.

- Tipo: blocco valore, `true` / `false`

## Altri controlli speciali {#other-special-controls}

Blocchi degli altri [controlli speciali](/docs/Application/Dashboard/SpecialControls).

### Blocchi del cambio {#gearbox-blocks}

Blocchi del [cambio manuale e automatico](/docs/Application/Dashboard/SpecialControls#gear-shifter). Valori delle marce: manuale −1 = R, 0 = N, 1…6 = marce avanti; automatico −2 = P, −1 = R, 0 = N, 1 = D.

#### `Evento del cambio` (Principiante) {#block_dashboard_controller_gearbox_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_event.svg')} alt="block_dashboard_controller_gearbox_event.svg" />

*quando cambio [controllo] [cambia marcia / sale di marcia / scala marcia / mette in folle / inserisce la retromarcia / inserisce il parcheggio]*: esegue lo script quando cambia la marcia. **Sale di marcia** e **scala marcia** indicano il passaggio a un valore più alto o più basso.

- Tipo: blocco evento

#### `Marcia` (Principiante) {#block_dashboard_controller_gearbox_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_float.svg')} alt="block_dashboard_controller_gearbox_value_float.svg" />

*marcia [controllo]*: la marcia inserita (vedi i valori sopra).

- Tipo: blocco valore

#### `Stato del cambio (booleano)` (Principiante) {#block_dashboard_controller_gearbox_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_value_boolean.svg')} alt="block_dashboard_controller_gearbox_value_boolean.svg" />

*cambio [controllo] [in folle / in retromarcia / in una marcia avanti / in parcheggio] ?*

- Tipo: blocco valore, `true` / `false`
- **In una marcia avanti** è vero in qualsiasi marcia avanti del cambio manuale e in D del cambio automatico

#### `Numero di marce` (Avanzato) {#block_dashboard_controller_gearbox_gears}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_gearbox_gears.svg')} alt="block_dashboard_controller_gearbox_gears.svg" />

*marce di [controllo]*: l'impostazione **Numero di marce** del cambio.

- Tipo: blocco valore
- Uso tipico: lo spazio *di* del blocco *guida* del Simulatore

### Blocchi del freno a mano {#handbrake-blocks}

Blocchi del [freno a mano](/docs/Application/Dashboard/SpecialControls#handbrake).

#### `Evento del freno a mano` (Principiante) {#block_dashboard_controller_handbrake_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_event.svg')} alt="block_dashboard_controller_handbrake_event.svg" />

*quando freno a mano [controllo] è [tirato / bloccato / sbloccato / rilasciato]*: esegue lo script quando la leva viene tirata, bloccata, sbloccata o lasciata.

- Tipo: blocco evento

#### `Forza del freno a mano` (Principiante) {#block_dashboard_controller_handbrake_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_float.svg')} alt="block_dashboard_controller_handbrake_value_float.svg" />

*forza del freno a mano [controllo]*: quanto è tirata la leva, da 0 a 100.

- Tipo: blocco valore

#### `Stato del freno a mano (booleano)` (Principiante) {#block_dashboard_controller_handbrake_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_handbrake_value_boolean.svg')} alt="block_dashboard_controller_handbrake_value_boolean.svg" />

*freno a mano [controllo] [bloccato / sbloccato / tirato] ?* **Tirato** è vero finché la forza è superiore a 0.

- Tipo: blocco valore, `true` / `false`

### Blocchi delle frecce {#turn-signals-blocks}

Blocchi delle [frecce](/docs/Application/Dashboard/SpecialControls#turn-signals). Vedono lo stato stabile delle frecce, senza il lampeggio.

#### `Evento delle frecce` (Principiante) {#block_dashboard_controller_turnsignals_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_event.svg')} alt="block_dashboard_controller_turnsignals_event.svg" />

*quando frecce [controllo] [freccia sinistra / freccia destra / luci] [si accende / si spegne]*

- Tipo: blocco evento

#### `Stato delle frecce (booleano)` (Principiante) {#block_dashboard_controller_turnsignals_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_turnsignals_value_boolean.svg')} alt="block_dashboard_controller_turnsignals_value_boolean.svg" />

*frecce [controllo] [freccia sinistra / freccia destra / luci] è acceso ?*

- Tipo: blocco valore, `true` / `false`

### Blocchi del riduttore {#transfer-case-blocks}

Blocchi del [riduttore](/docs/Application/Dashboard/SpecialControls#transfer-case). Il secondo elenco dei blocchi evento e stato offre le stesse scelte:

- **2H**, **4H**, **N**, **4L**: il selettore è in questa posizione;
- **trazione integrale**: il selettore è in 4H o 4L;
- **ridotte**: il selettore è in 4L;
- **bloccaggio anteriore**, **bloccaggio centrale**, **bloccaggio posteriore**: il bloccaggio del differenziale è inserito.

#### `Evento del riduttore` (Principiante) {#block_dashboard_controller_transfercase_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_event.svg')} alt="block_dashboard_controller_transfercase_event.svg" />

*quando riduttore [controllo] [2H / 4H / N / 4L / trazione integrale / ridotte / bloccaggio anteriore / bloccaggio centrale / bloccaggio posteriore] [si inserisce / si disinserisce]*: **si inserisce** viene eseguito quando la scelta diventa vera (il selettore raggiunge la posizione o il bloccaggio viene attivato), **si disinserisce** quando smette di esserlo.

- Tipo: blocco evento

#### `Stato del riduttore (booleano)` (Principiante) {#block_dashboard_controller_transfercase_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_boolean.svg')} alt="block_dashboard_controller_transfercase_value_boolean.svg" />

*riduttore [controllo] [2H / 4H / N / 4L / trazione integrale / ridotte / bloccaggio anteriore / bloccaggio centrale / bloccaggio posteriore] è inserito ?*

- Tipo: blocco valore, `true` / `false`

#### `Posizione del riduttore (numero)` (Principiante) {#block_dashboard_controller_transfercase_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_transfercase_value_float.svg')} alt="block_dashboard_controller_transfercase_value_float.svg" />

*posizione del riduttore [controllo]*: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L. Inseriscilo nello spazio *riduttore* del blocco [guida](/docs/Application/BlockBuilder/Blocks/Simulator#block_vehicle_drive) perché il simulatore usi il riduttore.

- Tipo: blocco valore

### Blocchi del manipolatore del treno {#train-controller-blocks}

Blocchi del [manipolatore del treno](/docs/Application/Dashboard/SpecialControls#train-controller).

#### `Evento del manipolatore` (Principiante) {#block_dashboard_controller_train_event}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_event.svg')} alt="block_dashboard_controller_train_event.svg" />

*quando manipolatore [controllo] [tacca cambiata / tacca aumentata / tacca diminuita / trazione chiusa / invertitore spostato / leva rilasciata]*: **Trazione chiusa** significa che la leva è tornata alla tacca 0.

- Tipo: blocco evento

#### `Valore del manipolatore (numero)` (Principiante) {#block_dashboard_controller_train_value_float}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_float.svg')} alt="block_dashboard_controller_train_value_float.svg" />

*manipolatore [controllo] [trazione / tacca di trazione / invertitore]*:

- **trazione**: da −100 a 100, la tacca in percentuale con il segno della direzione;
- **tacca di trazione**: da 0 a 8;
- **invertitore**: 1 = avanti, 0 = folle, −1 = indietro.
- Tipo: blocco valore

#### `Stato del manipolatore (booleano)` (Principiante) {#block_dashboard_controller_train_value_boolean}

<img src={useBaseUrl('/img/blocks/block_dashboard_controller_train_value_boolean.svg')} alt="block_dashboard_controller_train_value_boolean.svg" />

*manipolatore [controllo] [in avanti / in indietro / in folle / alla tacca 0] ?*

- Tipo: blocco valore, `true` / `false`
