---
id: PhoneSensors
title: Sensores del teléfono
description: "Usa la inclinación y la aceleración de tu teléfono o tablet para controlar un modelo."
---

# Sensores del teléfono {#phone-sensors}

Tu teléfono o tablet tiene sensores de movimiento. MOCPilot puede usarlos como entrada: inclina el teléfono para girar, agítalo para activar algo o muestra la batería del teléfono en el panel.

Los sensores del teléfono están disponibles en **Bloques lógicos** (categoría **Sensores**). Enlaces rápidos usa como entradas los controles del panel, el gamepad y los sensores de los hubs.

## Bloques de sensores {#sensor-blocks}

| Bloque | Da |
|---|---|
| `Inclinación del dispositivo` (inclinación, balanceo) | la inclinación del dispositivo en grados |
| `Aceleración del dispositivo` (x, y, z) | la aceleración del dispositivo, m/s² |
| `Acelerómetro del dispositivo` (x, y, z) | valores en bruto del acelerómetro, m/s² |
| `% batería del dispositivo` | el nivel de batería del dispositivo |

Más detalles: [Sensores](/docs/Application/BlockBuilder/Blocks/Sensors).

## Ejemplo: girar inclinando el teléfono {#example-steer-by-tilting-the-phone}

```text
Cuando el programa comienza
Repetir siempre
    Ir a la posición  (Hub 1, puerto B)  ←  Inclinación del dispositivo (balanceo) × 2
```

Usa un motor con posición absoluta (un motor angular) para la dirección.

Sujeta el teléfono en horizontal, como un volante. Limita el valor con los operadores *entre* o *mín/máx* para que la dirección no choque con sus topes.

## Consejos {#tips}

- Bloquea la rotación de la pantalla del dispositivo; si no, el sistema puede girar la pantalla mientras inclinas el teléfono.
- Los ordenadores no tienen sensores de movimiento; allí los bloques dan cero.
- Para mostrar la inclinación en el panel, envía los ángulos a un **Monitor de inclinación** (temas de pago). Consulta [Indicadores y monitores](/docs/Application/Dashboard/Indicators).
- Los hubs también tienen sus propios sensores de inclinación: consulta los bloques de sensores del hub y la entrada **Hub** de Enlaces rápidos.
