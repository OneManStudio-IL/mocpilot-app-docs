---
id: Simulator
title: Simulator
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulator {#simulator}

**Simulator** gør dashboardets pedaler, gearkasse og håndbremse til en bil, der opfører sig som en rigtig: Den accelererer med inerti, ruller frit, bremser, bakker og skifter gear. Kontrollerne giver kun deres rå værdier; programmet bygger bilen ud fra dem og sender dens hastighed til motorerne.

Kategorien vises, så længe dashboardet har pedaler, en gearkasse eller en håndbremse. Se [Skærmkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers) for de blokke, der læser disse kontroller.

## Køretøjer {#vehicles}

Tryk på **Opret køretøj** øverst i kategorien, og giv det et navn (for eksempel »Køretøj 1«). Blokkene vises, så snart programmet har mindst ét køretøj, og i hver blok vælger du, hvilket køretøj den arbejder med. **Omdøb køretøj** og **Slet køretøj** administrerer dem; du kan ikke slette et køretøj, mens dets blokke er i programmet, og de sidste pedaler, den sidste gearkasse eller håndbremse kan ikke fjernes fra dashboardet, mens der bruges Simulator-blokke.

<Screenshot name="blocks-simulator" alt="Kategorien Simulator med en kør-blok hængt på pedalhændelsen" width={900} />

En typisk bil: Hæng **kør** på pedalhændelsen, forbind pedalerne til `speeder` og `bremse`, og start inde i den drivmotoren med køretøjets `hastighed`:

```text
når pedaler PDL1 enhver er flyttet
    Køretøj 1  kør  speeder (pedaler PDL1 acceleration)  bremse (pedaler PDL1 bremse)
        start motor ved (hastighed af Køretøj 1) % hastighed  (Hub 1, port A)
```

Der er ikke brug for en `gentag altid`-løkke: **kør** bliver selv ved med at køre, indtil bilen holder stille.

## Blokke {#blocks}

### `… kør speeder … bremse … gear … af … håndbremse … låst … fordelergearkasse …` (Begynder) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

Hjertet i simulatoren. En C-blok, der kører køretøjet: Hvert 0,1 s læser den sine input, flytter bilen ét trin og kører blokkene inden i den (læg motorblokkene dér). Den slutter, når bilen holder stille, og intet er trykket ned; blokkene inden i den kører en sidste gang, så motoren får den endelige værdi.

- `speeder` og `bremse`: hvor langt hver pedal er trådt ned, 0 til 100.
- `gear`: det valgte gear: `-1` bak, `0` frigear, `1` og opefter fremad. Sidder en kontrol til automatgear i dette felt, bruges dens vælgerposition i stedet (P, R, N, D), og bilen vælger selv gear i D.
- `af`: hvor mange gear gearkassen har (6 som standard).
- `håndbremse`: hvor hårdt håndbremsen er trukket, 0 til 100; `låst`: om den er låst.
- `fordelergearkasse` (valgfri): [fordelergearkassens](/docs/Application/Dashboard/SpecialControls#transfer-case) position, som regel blokken [fordelergearkassens position](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_transfercase_value_float): `0` 2H, `1` 4H, `2` N, `3` 4L. I 2H og 4H kører bilen som uden fordelergearkasse; i N kører den ikke (den triller, og bremsen sænker kun farten uden at bakke); i 4L er farten begrænset til 40 %. Lad feltet være tomt, hvis modellen ikke har en fordelergearkasse.
- Et input tæller kun, når der er sat en blok ind i det; et almindeligt tal i et tomt felt ignoreres (undtagen `af`).
- Kun én **kør**-blok kan køre et køretøj ad gangen; en anden blok til samme køretøj springer sine indre blokke over.

### `sæt … type til …` (Begynder) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Tilpasser køretøjets motor til en type køretøj: hvor længe det bliver ved med at rulle (inerti), dets tophastighed i bak, og om det har luftbremse.

- Typer: `bil`, `terrængående køretøj`, `sportsvogn`, `lastbil` (lastbilen har luftbremse)

### `sæt … … til … %` (Avanceret) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Ændrer én motorindstilling.

- `motorinerti`: Jo højere den er, desto længere ruller bilen uden speeder (0 betyder ingen inerti).
- `baghastighed`: tophastigheden i bak.

### `sæt … … til …` (Avanceret) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Slår én køretøjsindstilling til eller fra.

- `bak med bremsen`: kun med pedaler – holder du bremsen nede i stilstand, kører bilen baglæns.
- `gear begrænser farten`: hvert gear har sin egen tophastighed.
- `håndbremse holder`: en låst håndbremse holder bilen på stedet.
- `luftbremse`: lastbilens luftbremse (giver hændelsen »slipper luft«).
- `automatgear`: behandl `gear`-inputtet som en automatisk gearvælger.

### `nulstil …` (Avanceret) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Stopper køretøjet, hvor det er, og glemmer dets tilstand.

### `… af …` (Begynder) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Returnerer en af køretøjets værdier.

- `hastighed`: fra −100 til 100 (negativ ved bakning), klar til et felt for motorhastighed.
- `motoromdrejninger`: fra 0 til 100, til en omdrejningstæller eller motorlyd.
- `gear`: det aktuelle gear (`-1` bak, `0` frigear, derefter `1`, `2`…).

### `er … … ?` (Begynder) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Returnerer `true`, når køretøjet er i den valgte tilstand.

- Tilstande: `i bevægelse`, `ved at bremse`, `på håndbremsen`

### `når … …` (Begynder) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Kører sit script, når der sker noget med køretøjet.

- Hændelser: `starter`, `stopper`, `begynder at bremse`, `holder op med at bremse`, `bremser hårdt`, `slipper luft`, `skifter gear`
- Typisk brug: afspil en lyd, for eksempel en luftbremsehvæsen ved `slipper luft` eller et hvin ved `bremser hårdt` (se [Lyde](/docs/Application/BlockBuilder/Blocks/Sounds)).
