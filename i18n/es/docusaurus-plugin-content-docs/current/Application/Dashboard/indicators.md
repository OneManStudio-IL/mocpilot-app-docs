---
id: Indicators
title: Indicadores y monitores
description: "Muestra en el panel la batería, la velocidad, la inclinación, valores de sensores y texto."
---

# Indicadores y monitores {#indicators-and-monitors}

Los monitores muestran información en el panel mientras conduces: el nivel de batería, la velocidad, la inclinación, la distancia a un obstáculo, la marcha o el modo actual.

| Monitor | Muestra | Tema |
|---|---|---|
| **Monitor** | texto o un número | todos los temas |
| **Nivel de batería** | un indicador de nivel | temas de pago |
| **Velocímetro** | un indicador de velocidad | temas de pago |
| **Monitor de inclinación** | el cabeceo y el balanceo de un modelo | temas de pago |

Los monitores solo muestran información; no se puede conducir con ellos. El programa decide qué muestran.

## En Enlaces rápidos {#in-quick-links}

Usa la salida **Indicador**. La fila termina en el indicador en lugar de en un hub:

- *Hub* (Batería) → *Indicador* (Nivel de batería): la batería del hub en un indicador.
- *Hub* (Velocidad del motor, puerto A) → *Indicador* (Velocímetro).
- *Hub* (Inclinación: cabeceo) → *Indicador* (Monitor de inclinación, Inclinación X), y una segunda fila para Inclinación: balanceo → Inclinación Y.
- *Hub* (Voltaje de la batería) → *Indicador* (Monitor): muestra el valor con su unidad, por ejemplo «7.85 V».

El indicador muestra el valor tal cual, así que la fila no tiene operación. Consulta [Indicador](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## En Bloques lógicos {#in-logic-blocks}

Usa los bloques de controladores en pantalla:

- *mostrar … en … monitor* para el Monitor;
- *configurar … a … monitor* para el Nivel de batería y el Velocímetro;
- *configurar … a … monitor de inclinación / balanceo* para el Monitor de inclinación.

Puedes mostrar cualquier cosa que puedas calcular: el valor de un sensor, una variable, un texto como «Marcha 2». Consulta [Controladores en pantalla](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Consejos {#tips}

- Pon el monitor de batería en una esquina donde los dedos no lo tapen.
- Para mensajes más largos, usa un Monitor de varias líneas con desbordamiento **Marquesina** o **Desplazar**.
- El programa puede cambiar el color de la mayoría de los controles, por ejemplo para poner un botón en rojo cuando la batería está baja.
