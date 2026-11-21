---
id: PhoneSensors
title: Senzory telefónu
description: "Ovládajte model náklonom a zrýchlením telefónu alebo tabletu."
---

# Senzory telefónu {#phone-sensors}

Váš telefón alebo tablet má senzory pohybu. MOCPilot ich môže použiť ako vstup: nakloňte telefón a riaďte, zatraste ním a niečo spustite, alebo zobrazte batériu telefónu na paneli.

Senzory telefónu sú k dispozícii v **Logických blokoch** (kategória **Senzory**). Rýchle prepojenia používajú ako vstupy ovládacie prvky panela, herný ovládač a senzory hubov.

## Bloky senzorov {#sensor-blocks}

| Blok | Dáva |
|---|---|
| `zariadenie náklon` (náklon, rotácia) | náklon zariadenia v stupňoch |
| `zariadenie zrýchlenie` (x, y, z) | zrýchlenie zariadenia, m/s² |
| `zariadenie akcelerometer` (x, y, z) | surové hodnoty akcelerometra, m/s² |
| `zariadenie % batérie` | úroveň batérie zariadenia |

Podrobnosti: [Senzory](/docs/Application/BlockBuilder/Blocks/Sensors).

## Príklad: riadenie náklonom telefónu {#example-steer-by-tilting-the-phone}

```text
keď program začne
zopakovať vždy
    Ísť do polohy  (Hub 1, port B)  ←  zariadenie náklon (rotácia) × 2
```

Na riadenie použite motor s absolútnou polohou (uhlový motor).

Držte telefón na šírku ako volant. Hodnotu obmedzte operátormi *medzi* alebo *min/max*, aby riadenie nenarážalo na dorazy.

## Tipy {#tips}

- Uzamknite otáčanie obrazovky zariadenia, inak môže systém pri nakláňaní obrazovku otočiť.
- Počítače nemajú senzory pohybu; bloky tam dávajú nulu.
- Ak chcete náklon zobraziť na paneli, posielajte uhly do **Monitor náklonu** (platené témy). Pozrite si [Indikátory a monitory](/docs/Application/Dashboard/Indicators).
- Aj huby majú vlastné senzory náklonu: pozrite si bloky senzorov hubu a vstup **Hub** v Rýchlych prepojeniach.
