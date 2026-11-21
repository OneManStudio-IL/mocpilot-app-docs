---
id: Sounds
title: Lyde
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Lyde {#sounds}

Lydblokke afspiller lyde på den telefon, tablet eller computer, der kører MOCPilot: bip, signaler, horn, effekter og dine egne optagelser.

## Hvilke lyde du kan afspille {#which-sounds-you-can-play}

Lydlisten i blokkene har to dele:

- **Det indbyggede bibliotek**: korte bip, kvidren, en bakalarm, en sirene, en alarm, signaler for succes og fejl, horn til bil, lastbil og tog, en cykelklokke, et blinklys og nogle få effekter (klik, plop, laser, mønt, opstart, nedlukning).
- **Dine egne lyde**: Tryk på **Tilføj lyd** øverst i kategorien, og vælg en lydfil. Appen konverterer den og gemmer den i profilen, så den følger med profilen til dine andre enheder og til kataloget. En profil kan rumme op til 30 lyde; en længere fil afkortes til 15 sekunder. Brug **Omdøb lyd** og **Slet lyd** til at administrere dem; blokke, der afspillede en slettet lyd, bliver tavse.

<Screenshot name="blocks-add-sound" alt="Dialogen Tilføj lyd i Logikblokke" width={900} />

## Blokke {#blocks}

### `lyd … afspil / afspil til slut / gentag` (Begynder) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Afspiller den valgte lyd.

- `afspil`: starter lyden og går straks videre til næste blok. Lyde, der er beregnet til at køre i løkke (som sirenen eller bakalarmen), bliver ved med at gentage sig.
- `afspil til slut`: afspiller lyden én gang og venter, til den er slut.
- `gentag`: afspiller lyden i løkke, indtil du stopper den.
- Starter du en lyd, der allerede spiller, starter den forfra.
- Du kan sætte en **lyd**-rapporteringsblok (eller en variabel, der indeholder en) ind i feltet i stedet for at vælge fra listen.

### `bip … Hz i … s` (Begynder) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Afspiller en tone med den angivne tonehøjde og længde og venter, til den er slut.

- Tonehøjde: fra 50 til 8000 Hz (440 som standard).
- Længde: fra 0,02 til 10 sekunder (0,2 som standard).

### `stop lyd …` (Begynder) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Stopper den valgte lyd.

### `stop alle lyde` (Begynder) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Stopper alle lyde, der spiller.

### `sæt lydstyrke til … %` (Avanceret) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Indstiller lydstyrken for alle programmets lyde fra 0 til 100 %. Når programmet stopper, går lydstyrken tilbage til 100 %.

### `lydstyrke` (Avanceret) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Returnerer den aktuelle lydstyrke fra 0 til 100.

### `lyd …` (Avanceret) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Returnerer den valgte lyd som en værdi.

- Typisk brug: gem en lyd i en variabel eller en liste, eller send den til en af [Mine blokke](/docs/Application/BlockBuilder/Blocks/MyBlocks), og afspil den derefter med **lyd … afspil**.
