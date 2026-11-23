---
id: Simulator
title: Simulator
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulator {#simulator}

**Simulator** gjør pedalene, girkassen og handbrekket på dashboardet om til en bil som oppfører seg som en ekte: Den akselererer med treghet, triller, bremser, rygger og skifter gir. Kontrollerne gir bare råverdiene sine; programmet bygger bilen ut fra dem og sender hastigheten til motorene.

Kategorien vises når dashboardet har pedaler, en girkasse eller et handbrekk. Se [Skjermkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers) for blokkene som leser disse kontrollerne.

## Kjøretøy {#vehicles}

Trykk på **Opprett kjøretøy** øverst i kategorien og gi kjøretøyet et navn (for eksempel «Kjøretøy 1»). Blokkene vises så snart programmet har minst ett kjøretøy, og i hver blokk velger du hvilket kjøretøy den skal styre. Med **Gi nytt navn til kjøretøy** og **Slett kjøretøy** administrerer du dem. Du kan ikke slette et kjøretøy mens blokkene for det er i programmet, og de siste pedalene, girkassen eller handbrekket kan ikke fjernes fra dashboardet mens Simulator-blokker er i bruk.

<Screenshot name="blocks-simulator" alt="Simulator-kategorien med en kjør-blokk hengt på pedalhendelsen" width={900} />

En typisk bil: Heng **kjør** på pedalhendelsen, koble pedalene til `gass` og `brems`, og start drivmotoren inni blokken med kjøretøyets `hastighet`:

```text
når pedalene PDL1 hvilken som helst flyttet
    Kjøretøy 1  kjør  gass (pedaler PDL1 akselerasjon)  brems (pedaler PDL1 brems)
        start motor på (hastighet av Kjøretøy 1) % hastighet  (Hub 1, port A)
```

Du trenger ingen `gjenta alltid`-løkke: **kjør** fortsetter av seg selv til bilen står stille.

## Blokker {#blocks}

### `… kjør gass … brems … gir … av … handbrekk … låst … fordelingsgir …` (Nybegynner) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Hjertet i simulatoren. En C-blokk som kjører kjøretøyet: Hvert 0,1 s leser den inngangene sine, flytter bilen ett steg og kjører blokkene inni seg (legg motorblokkene der). Den avsluttes når bilen står stille og ingenting er trykket inn; blokkene inni kjøres en siste gang, slik at motoren får den endelige verdien.

- `gass` og `brems`: hvor dypt hver pedal er trykket inn, 0 til 100.
- `gir`: det valgte giret: `-1` revers, `0` fri, `1` og oppover forover. Står en automatgirkontroller i dette feltet, brukes velgerposisjonen i stedet (P, R, N, D), og i D velger bilen giret selv.
- `av`: hvor mange gir girkassen har (6 som standard).
- `handbrekk`: hvor hardt handbrekket er trukket, 0 til 100; `låst`: om det er låst.
- `fordelingsgir` (valgfritt): posisjonen til [fordelingsgiret](/docs/Application/Dashboard/SpecialControls#transfer-case), som regel blokken [stilling for fordelingsgiret](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_transfercase_value_float): `0` 2H, `1` 4H, `2` N, `3` 4L. I 2H og 4H kjører bilen som uten det; i N kjører den ikke (den triller, og bremsen bremser den bare ned uten å rygge); i 4L er hastigheten begrenset til 40 %. La feltet stå tomt hvis modellen ikke har fordelingsgir.
- En inngang teller bare når det er plassert en blokk i den; et vanlig tall i et tomt felt ignoreres (unntatt `av`).
- Bare én **kjør**-blokk kan kjøre et kjøretøy om gangen; en annen blokk for det samme kjøretøyet hopper over blokkene inni seg.

### `sett … type til …` (Nybegynner) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Tilpasser kjøretøyets motor til en type kjøretøy: hvor lenge det fortsetter å trille (treghet), toppfarten i revers og om det har luftbrems.

- Typer: `bil`, `terrengkjøretøy`, `sportsbil`, `lastebil` (lastebilen har luftbrems)

### `sett … … til … %` (Avansert) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Endrer én motorinnstilling.

- `motortreghet`: Jo høyere den er, desto lenger triller bilen uten gass (0 betyr ingen treghet).
- `ryggehastighet`: toppfarten i revers.

### `sett … … til …` (Avansert) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Slår ett kjøretøyalternativ på eller av.

- `rygg med bremsen`: Med bare pedaler rygger bilen når du holder inne bremsen mens den står stille.
- `gir begrenser hastigheten`: Hvert gir har sin egen toppfart.
- `handbrekk holder`: Et låst handbrekk holder bilen på plass.
- `luftbrems`: lastebilens luftbrems (gir hendelsen «slipper ut luft»).
- `automatgir`: behandler `gir`-inngangen som en automatgirvelger.

### `tilbakestill …` (Avansert) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Stopper kjøretøyet der det er, og glemmer tilstanden.

### `… av …` (Nybegynner) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Returnerer én av kjøretøyets verdier.

- `hastighet`: fra −100 til 100 (negativ ved rygging), klar for et hastighetsfelt på en motor.
- `turtall`: fra 0 til 100, for en turteller eller motorlyd.
- `gir`: det nåværende giret (`-1` revers, `0` fri, deretter `1`, `2` …).

### `er … … ?` (Nybegynner) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Returnerer `true` når kjøretøyet er i den valgte tilstanden.

- Tilstander: `i bevegelse`, `under bremsing`, `på handbrekk`

### `når … …` (Nybegynner) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Kjører skriptet sitt når noe skjer med kjøretøyet.

- Hendelser: `starter`, `stopper`, `begynner å bremse`, `slutter å bremse`, `bremser hardt`, `slipper ut luft`, `skifter gir`
- Typisk bruk: spille av en lyd, for eksempel et luftbremsfres ved `slipper ut luft` eller et hvin ved `bremser hardt` (se [Lyder](/docs/Application/BlockBuilder/Blocks/Sounds)).
