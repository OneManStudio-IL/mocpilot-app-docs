---
id: PhoneSensors
title: Sensori dello smartphone
description: "Usa l'inclinazione e l'accelerazione del tuo smartphone o tablet per controllare un modello."
---

# Sensori dello smartphone {#phone-sensors}

Il tuo smartphone o tablet ha dei sensori di movimento. MOCPilot può usarli come ingresso: inclina lo smartphone per sterzare, scuotilo per attivare qualcosa o mostra la batteria dello smartphone sulla dashboard.

I sensori dello smartphone sono disponibili nei **Blocchi logici** (categoria **Sensori**). I Collegamenti rapidi usano come ingressi i controlli della dashboard, il gamepad e i sensori degli hub.

## Blocchi dei sensori {#sensor-blocks}

| Blocco | Fornisce |
|---|---|
| `dispositivo inclinazione` (beccheggio, rollio) | l'inclinazione del dispositivo in gradi |
| `dispositivo accelerazione` (x, y, z) | l'accelerazione del dispositivo, m/s² |
| `dispositivo accelerometro` (x, y, z) | i valori grezzi dell'accelerometro, m/s² |
| `dispositivo % batteria` | il livello della batteria del dispositivo |

Dettagli: [Sensori](/docs/Application/BlockBuilder/Blocks/Sensors).

## Esempio: sterzare inclinando lo smartphone {#example-steer-by-tilting-the-phone}

```text
quando il programma inizia
ripetere sempre
    vai alla posizione  (Hub 1, porta B)  ←  dispositivo inclinazione (rollio) × 2
```

Per lo sterzo usa un motore con posizione assoluta (un motore angolare).

Tieni lo smartphone in orizzontale come un volante. Limita il valore con gli operatori *tra* o *min/max*, così lo sterzo non arriva ai finecorsa.

## Suggerimenti {#tips}

- Blocca la rotazione dello schermo del dispositivo, altrimenti il sistema potrebbe ruotare lo schermo mentre lo inclini.
- I computer non hanno sensori di movimento; lì i blocchi forniscono zero.
- Per mostrare l'inclinazione sulla dashboard, invia gli angoli a un **Monitor di inclinazione** (temi a pagamento). Vedi [Indicatori e monitor](/docs/Application/Dashboard/Indicators).
- Anche gli hub hanno i propri sensori di inclinazione: vedi i blocchi dei sensori degli hub e l'ingresso **Hub** dei Collegamenti rapidi.
