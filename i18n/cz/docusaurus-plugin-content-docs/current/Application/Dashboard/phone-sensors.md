---
id: PhoneSensors
title: Senzory telefonu
description: "Ovládejte model náklonem a zrychlením svého telefonu nebo tabletu."
---

# Senzory telefonu {#phone-sensors}

Váš telefon nebo tablet má pohybové senzory. MOCPilot je může používat jako vstup: nakloňte telefon a zatáčejte, zatřeste jím a něco spusťte, nebo zobrazte baterii telefonu na panelu.

Senzory telefonu jsou k dispozici v **Logických blocích** (kategorie **Senzory**). Rychlá propojení používají jako vstupy ovládací prvky panelu, herní ovladač a senzory hubů.

## Bloky senzorů {#sensor-blocks}

| Blok | Dává |
|---|---|
| `náklon zařízení` (klopení, klonění) | náklon zařízení ve stupních |
| `zrychlení zařízení` (x, y, z) | zrychlení zařízení, m/s² |
| `akcelerometr zařízení` (x, y, z) | surové hodnoty akcelerometru, m/s² |
| `% baterie zařízení` | stav baterie zařízení |

Podrobnosti: [Senzory](/docs/Application/BlockBuilder/Blocks/Sensors).

## Příklad: řízení náklonem telefonu {#example-steer-by-tilting-the-phone}

```text
když program začne
opakovat vždy
    jet do polohy  (Hub 1, port B)  ←  náklon zařízení (klonění) × 2
```

Pro řízení použijte motor s absolutní polohou (úhlový motor).

Držte telefon na šířku jako volant. Hodnotu omezte operátory *je mezi* nebo *min/max*, aby řízení nenaráželo do koncových dorazů.

## Tipy {#tips}

- Zamkněte otáčení obrazovky zařízení, jinak může systém při naklánění obrazovku otočit.
- Počítače pohybové senzory nemají; bloky tam dávají nulu.
- Chcete-li náklon zobrazit na panelu, posílejte úhly do **Monitoru náklonu** (placené motivy). Viz [Indikátory a monitory](/docs/Application/Dashboard/Indicators).
- Huby mají také vlastní senzory náklonu: viz bloky senzorů hubu a vstup **Hub** v Rychlých propojeních.
