---
id: Simulator
title: Simulador
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Simulador {#simulator}

El **Simulador** convierte los pedales, la caja de cambios y el freno de mano del panel en un coche que se comporta como uno de verdad: acelera con inercia, avanza por inercia, frena, da marcha atrás y cambia de marcha. Los controles solo dan sus valores en bruto; el programa construye el coche a partir de ellos y envía su velocidad a los motores.

La categoría aparece mientras el panel tiene pedales, caja de cambios o freno de mano. Consulta [Controles del panel](/docs/Application/BlockBuilder/Blocks/DashboardControllers) para ver los bloques que leen esos controles.

## Vehículos {#vehicles}

Pulsa **Crear vehículo** en la parte superior de la categoría y ponle un nombre (por ejemplo, «Vehículo 1»). Los bloques aparecen en cuanto el programa tiene al menos un vehículo, y en cada bloque eliges con qué vehículo trabaja. **Renombrar vehículo** y **Eliminar vehículo** sirven para gestionarlos; no puedes eliminar un vehículo mientras sus bloques estén en el programa, y los últimos pedales, caja de cambios o freno de mano no se pueden quitar del panel mientras se usen bloques del Simulador.

<Screenshot name="blocks-simulator" alt="Categoría Simulador con un bloque conducir colgado del evento de los pedales" width={900} />

Un coche típico: cuelga **conducir** del evento de los pedales, conecta los pedales a `acelerador` y `freno`, y dentro arranca el motor de tracción a la `velocidad` del vehículo:

```text
cuando los pedales PDL1 cualquiera está movido
    Vehículo 1  conducir  acelerador (pedales PDL1 aceleración)  freno (pedales PDL1 freno)
        iniciar motor en (velocidad de Vehículo 1) % velocidad  (Hub 1, puerto A)
```

No hace falta un bucle `repetir siempre`: **conducir** sigue funcionando por sí solo hasta que el coche se detiene.

## Bloques {#blocks}

### `… conducir acelerador … freno … marcha … de … freno de mano … bloqueado …` (Principiante) {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

El corazón del simulador. Un bloque en forma de C que conduce el vehículo: cada 0,1 s lee sus entradas, mueve el coche un paso y ejecuta los bloques que contiene (pon ahí los bloques de motor). Termina cuando el coche está parado y no se pulsa nada; los bloques interiores se ejecutan una última vez para que el motor reciba el valor final.

- `acelerador` y `freno`: cuánto se pisa cada pedal, de 0 a 100.
- `marcha`: la marcha seleccionada: `-1` marcha atrás, `0` punto muerto, `1` y superiores hacia delante. Con un control de caja automática en este campo, se usa la posición de su selector (P, R, N, D) y el coche elige la marcha por sí solo en D.
- `de`: cuántas marchas tiene la caja de cambios (6 por defecto).
- `freno de mano`: cuánto se tira del freno de mano, de 0 a 100; `bloqueado`: si está bloqueado.
- Una entrada solo cuenta cuando se coloca un bloque en ella; un número suelto en un campo vacío se ignora (excepto `de`).
- Solo un bloque **conducir** puede conducir un vehículo a la vez; un segundo bloque para el mismo vehículo omite sus bloques interiores.

### `fijar … tipo a …` (Principiante) {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

Ajusta el motor del vehículo a un tipo de vehículo: cuánto tiempo sigue rodando (inercia), su velocidad máxima marcha atrás y si tiene freno de aire.

- Tipos: `coche`, `todoterreno`, `deportivo`, `camión` (el camión tiene freno de aire)

### `fijar … … a … %` (Avanzado) {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

Cambia un ajuste del motor.

- `inercia del motor`: cuanto más alta, más tiempo rueda el coche sin acelerar (0 significa sin inercia).
- `velocidad de marcha atrás`: la velocidad máxima marcha atrás.

### `fijar … … a …` (Avanzado) {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

Activa o desactiva una opción del vehículo.

- `marcha atrás con el freno`: solo con pedales, mantener el freno pisado estando parado hace ir marcha atrás.
- `las marchas limitan la velocidad`: cada marcha tiene su propia velocidad máxima.
- `el freno de mano retiene`: un freno de mano bloqueado mantiene el coche en su sitio.
- `freno de aire`: el freno de aire del camión (genera el evento «suelta aire»).
- `caja automática`: trata la entrada `marcha` como un selector automático.

### `restablecer …` (Avanzado) {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

Detiene el vehículo donde está y olvida su estado.

### `… de …` (Principiante) {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

Devuelve uno de los valores del vehículo.

- `velocidad`: de −100 a 100 (negativa al ir marcha atrás), lista para el campo de velocidad de un motor.
- `revoluciones del motor`: de 0 a 100, para un cuentarrevoluciones o el sonido del motor.
- `marcha`: la marcha actual (`-1` marcha atrás, `0` punto muerto, después `1`, `2`…).

### `¿está … … ?` (Principiante) {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

Devuelve `true` cuando el vehículo está en el estado seleccionado.

- Estados: `en movimiento`, `frenando`, `con el freno de mano`

### `cuando … …` (Principiante) {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

Ejecuta su script cuando le ocurre algo al vehículo.

- Eventos: `arranca`, `se detiene`, `empieza a frenar`, `deja de frenar`, `frena fuerte`, `suelta aire`, `cambia de marcha`
- Uso típico: reproducir un sonido, por ejemplo el siseo de un freno de aire con `suelta aire` o un chirrido con `frena fuerte` (consulta [Sonidos](/docs/Application/BlockBuilder/Blocks/Sounds)).
