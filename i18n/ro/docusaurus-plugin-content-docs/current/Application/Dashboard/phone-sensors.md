---
id: PhoneSensors
title: Senzorii telefonului
description: "Folosește înclinarea și accelerația telefonului sau tabletei ca să controlezi un model."
---

# Senzorii telefonului {#phone-sensors}

Telefonul sau tableta ta are senzori de mișcare. MOCPilot îi poate folosi ca intrare: înclini telefonul ca să virezi, îl scuturi ca să declanșezi ceva sau afișezi bateria telefonului pe tabloul de bord.

Senzorii telefonului sunt disponibili în **Blocuri logice** (categoria **Senzori**). Legături rapide folosește ca intrări comenzile de pe tabloul de bord, gamepadul și senzorii hubului.

## Blocurile senzorilor {#sensor-blocks}

| Bloc | Ce dă |
|---|---|
| `Dispozitiv înclinare` (tangaj, ruliu) | înclinarea dispozitivului, în grade |
| `Dispozitiv accelerație` (x, y, z) | accelerația dispozitivului, în m/s² |
| `Dispozitiv accelerometru` (x, y, z) | valorile brute ale accelerometrului, în m/s² |
| `Dispozitiv % baterie` | nivelul bateriei dispozitivului |

Detalii: [Senzori](/docs/Application/BlockBuilder/Blocks/Sensors).

## Exemplu: virează înclinând telefonul {#example-steer-by-tilting-the-phone}

```text
când începe programul
repeta mereu
    Mergi la poziție  (Hub 1, portul B)  ←  Dispozitiv înclinare (ruliu) × 2
```

Folosește pentru direcție un motor cu poziție absolută (un motor unghiular).

Ține telefonul în mod peisaj, ca pe un volan. Limitează valoarea cu operatorii *este între* sau *min/max*, ca direcția să nu lovească opritoarele.

## Sfaturi {#tips}

- Blochează rotirea ecranului pe dispozitiv, altfel sistemul ar putea roti ecranul în timp ce înclini.
- Computerele nu au senzori de mișcare; acolo blocurile dau zero.
- Ca să afișezi înclinarea pe tabloul de bord, trimite unghiurile către un **Monitor înclinat** (temele plătite). Vezi [Indicatoare și monitoare](/docs/Application/Dashboard/Indicators).
- Și huburile au propriii senzori de înclinare: vezi blocurile senzorilor hubului și intrarea **Hub** din Legături rapide.
