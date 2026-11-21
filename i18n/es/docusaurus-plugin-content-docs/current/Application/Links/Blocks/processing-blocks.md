---
id: ProcessingBlocks
title: Bloques de procesamiento
description: "Referencia de todos los bloques de procesamiento de Enlaces rápidos: Invertir, Límite, Zona muerta, Umbral, Suave y Alternar."
---

# Bloques de procesamiento {#processing-blocks}

Los bloques de procesamiento se colocan entre la entrada y la operación (o el indicador) y cambian la señal por el camino. Una fila puede tener cualquier número de ellos, en cualquier orden. Un bloque que no puede recibir la señal entrante no se acopla; en un archivo se indica como «"…" no funciona con este controlador». Cómo usarlos: [Procesamiento](/docs/Application/Links/Processing).

## Invertir {#mod-invert}

Invierte la señal.

- Sin ajustes.
- Recibe: valor o encendido/apagado. Da: el mismo tipo.
- Valor: cambia el signo (0,7 pasa a ser −0,7). Encendido/apagado: encendido pasa a apagado y apagado a encendido.

## Límite {#mod-limit}

Reduce la escala del valor, de modo que la desviación máxima no da más que el máximo.

- **Máximo**: 20, 30, 40, 50, 60, 70, 80 o 90 % (predeterminado 50 %).
- Recibe: valor o encendido/apagado. Da: valor (un botón limitado da 0 o el máximo).

## Zona muerta {#mod-deadzone}

Trata como cero los valores pequeños alrededor de cero; el resto se vuelve a estirar hasta el rango completo, así que la desviación máxima sigue dando 1.

- **Zona**: 5, 10, 15, 20 o 30 % (predeterminado 10 %).
- Recibe: valor. Da: valor.

## Umbral {#mod-threshold}

Convierte un valor en encendido/apagado.

- **Activo cuando el valor está**: **Por encima** (predeterminado) o **Por debajo**.
- **Nivel (del fondo de escala)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 o 90 % (predeterminado 20 %).
- Recibe: valor. Da: encendido/apagado.
- Una pequeña histéresis (2 % del fondo de escala) evita que la salida parpadee cuando el valor ronda el nivel.

## Suave {#mod-smooth}

Se acerca al valor entrante de forma gradual en lugar de saltar.

- **Aceleración (hasta velocidad máxima)**: **Instantáneo**, 0,25, 0,5, 1, 2 o 3 s (predeterminado 0,5 s): el tiempo para pasar de 0 al máximo, alejándose de cero.
- **Deceleración (hasta detenerse)**: las mismas opciones (predeterminado 0,5 s): el tiempo para volver del máximo a 0.
- Recibe: valor o encendido/apagado. Da: valor (un botón suavizado sube y baja en rampa).

## Alternar {#mod-toggle}

Convierte un pulsador en un interruptor: cada pulsación cambia la salida entre encendido y apagado. La salida empieza apagada.

- Sin ajustes.
- Recibe: encendido/apagado. Da: encendido/apagado.
