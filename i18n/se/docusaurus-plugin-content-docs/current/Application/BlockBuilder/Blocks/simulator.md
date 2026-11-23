---
id: Simulator
title: Simulator
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulator {#simulator}

**Simulator** gör om instrumentpanelens pedaler, växellåda och handbroms till en bil som beter sig som en riktig: den accelererar med tröghet, rullar, bromsar, backar och växlar. Kontrollerna ger bara sina råa värden; programmet bygger bilen utifrån dem och skickar dess hastighet till motorerna.

Kategorin visas så länge instrumentpanelen har pedaler, en växellåda eller en handbroms. Se [Skärmkontroller](/docs/Application/BlockBuilder/Blocks/DashboardControllers) för blocken som läser de kontrollerna.

## Fordon {#vehicles}

Tryck på **Skapa fordon** högst upp i kategorin och ge det ett namn (till exempel ”Fordon 1”). Blocken visas när programmet har minst ett fordon, och i varje block väljer du vilket fordon det ska arbeta med. **Byt namn på fordon** och **Ta bort fordon** hanterar dem; du kan inte ta bort ett fordon medan dess block finns i programmet, och de sista pedalerna, växellådan eller handbromsen kan inte tas bort från instrumentpanelen medan Simulator-block används.

<Screenshot name="blocks-simulator" alt="Kategorin Simulator med ett kör-block under pedalhändelsen" width={900} />

En typisk bil: häng **kör** under pedalhändelsen, koppla pedalerna till `gas` och `broms`, och starta drivmotorn med fordonets `hastighet` inuti:

```text
när pedalerna PDL1 vilken som helst är flyttad
    Fordon 1  kör  gas (pedaler PDL1 acceleration)  broms (pedaler PDL1 broms)
        starta motor vid (hastighet av Fordon 1) % hastighet  (Hubb 1, port A)
```

Ingen `upprepa alltid`-loop behövs: **kör** fortsätter av sig själv tills bilen stannar.

## Block {#blocks}

### `… kör gas … broms … växel … av … handbroms … låst … fördelningslåda …` (Nybörjare) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Simulatorns hjärta. Ett C-block som kör fordonet: var 0,1 s läser det sina indata, flyttar bilen ett steg och kör blocken inuti (lägg motorblocken där). Det avslutas när bilen står still och ingenting är nedtryckt; blocken inuti körs en sista gång så att motorn får det slutliga värdet.

- `gas` och `broms`: hur djupt respektive pedal är nedtryckt, 0 till 100.
- `växel`: den valda växeln: `-1` back, `0` friläge, `1` och uppåt framåt. Med en kontroll för automatlåda i det här facket används i stället väljarens läge (P, R, N, D), och bilen väljer själv växel i D.
- `av`: hur många växlar växellådan har (6 som standard).
- `handbroms`: hur hårt handbromsen är dragen, 0 till 100; `låst`: om den är låst.
- `fördelningslåda` (valfritt): [fördelningslådans](/docs/Application/Dashboard/SpecialControls#transfer-case) läge, oftast blocket [fördelningslådans läge](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_transfercase_value_float): `0` 2H, `1` 4H, `2` N, `3` 4L. I 2H och 4H kör bilen som utan det; i N kör den inte (den rullar fritt, och bromsen saktar bara ned den utan att backa); i 4L begränsas hastigheten till 40 %. Lämna facket tomt om modellen saknar fördelningslåda.
- Ett indata räknas bara när ett block ligger i det; ett vanligt tal i ett tomt fack ignoreras (utom `av`).
- Bara ett **kör**-block i taget kan köra ett fordon; ett andra för samma fordon hoppar över sina inre block.

### `ställ in … typ till …` (Nybörjare) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Anpassar fordonets motor för en viss sorts fordon: hur länge det fortsätter rulla (tröghet), dess högsta backhastighet och om det har luftbroms.

- Typer: `personbil`, `terrängfordon`, `sportbil`, `lastbil` (lastbilen har luftbroms)

### `ställ in … … till … %` (Avancerad) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Ändrar en motorinställning.

- `motortröghet`: ju högre den är, desto längre rullar bilen utan gas (0 betyder ingen tröghet).
- `backhastighet`: högsta hastighet i back.

### `ställ in … … till …` (Avancerad) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Slår på eller av ett fordonsalternativ.

- `back med bromsen`: med bara pedaler kör fordonet bakåt när du håller in bromsen vid stillastående.
- `växlar begränsar hastigheten`: varje växel har sin egen toppfart.
- `handbromsen håller`: en låst handbroms håller bilen på plats.
- `luftbroms`: lastbilens luftbroms (ger händelsen ”släpper ut luft”).
- `automatlåda`: behandla indata `växel` som en automatväljare.

### `återställ …` (Avancerad) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Stoppar fordonet där det är och glömmer dess tillstånd.

### `… av …` (Nybörjare) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Returnerar ett av fordonets värden.

- `hastighet`: från −100 till 100 (negativ vid backning), redo för ett hastighetsfack i ett motorblock.
- `motorvarvtal`: från 0 till 100, för en varvräknare eller ett motorljud.
- `växel`: aktuell växel (`-1` back, `0` friläge, sedan `1`, `2` …).

### `är … … ?` (Nybörjare) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Returnerar `true` när fordonet är i det valda tillståndet.

- Tillstånd: `i rörelse`, `under inbromsning`, `på handbromsen`

### `när … …` (Nybörjare) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Kör sitt skript när något händer med fordonet.

- Händelser: `startar`, `stannar`, `börjar bromsa`, `slutar bromsa`, `tvärbromsar`, `släpper ut luft`, `växlar`
- Typisk användning: spela ett ljud, till exempel ett pys från luftbromsen vid `släpper ut luft` eller ett tjut vid `tvärbromsar` (se [Ljud](/docs/Application/BlockBuilder/Blocks/Sounds)).
