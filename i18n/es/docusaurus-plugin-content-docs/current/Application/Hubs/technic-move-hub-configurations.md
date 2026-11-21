---
id: TechnicMoveHubConfigurations
title: Configuraciones del Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Configuraciones del Technic Move Hub {#technic-move-hub-configurations}

## Descripción general {#overview}

A diferencia de otros hubs LEGO® Powered Up, el Technic Move Hub se comporta de forma distinta según la configuración que tenga cargada.

MOCPilot puede cambiar esta configuración para que el hub se corresponda con el set oficial de LEGO que quieres controlar.

## Configuraciones compatibles {#supported-configurations}

MOCPilot conoce estas configuraciones:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Opciones de configuración del Technic Move Hub en el bloque de establecer la configuración del hub" />

## Cambiar la configuración desde Mis hubs Bluetooth {#change-configuration-from-my-bluetooth-hubs}

Para cambiar la configuración en la página **Mis hubs Bluetooth**:

1. Abre **Mis hubs Bluetooth**.
2. Busca el Technic Move Hub.
3. Abre el menú del hub.
4. Elige **Seleccionar configuración**.
5. Elige la configuración.
6. Confirma en el diálogo.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Menú contextual del Technic Move Hub con la acción Seleccionar configuración" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Submenú de configuraciones del Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Diálogo de confirmación de la reconfiguración del Technic Move Hub" />

:::warning Importante
Cambiar la configuración escribe un programa en el hub, de forma parecida a una actualización del firmware.

Mantén el hub encendido durante todo el proceso, y tu teléfono, tableta u ordenador encendido y cerca del hub para que la conexión Bluetooth sea estable. No cierres MOCPilot, no desactives el Bluetooth ni apagues el hub mientras cambia la configuración.

Un cambio interrumpido puede dañar el firmware del hub. En ese caso, puede que el hub necesite una [recuperación del firmware](/docs/Application/Hubs/RecoveryHubFirmware/) antes de poder usarlo de nuevo.
:::

Mientras cambia la configuración, el hub ignora los comandos normales y su LED va pasando por distintos colores. Cuando la nueva configuración está lista, el hub se reinicia.

## Bloques de configuración {#configuration-blocks}

Los Bloques lógicos pueden leer y cambiar la configuración mientras se ejecuta un programa.

### Establecer la configuración del hub {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Bloque de establecer la configuración del hub" />

El bloque **establecer configuración a** carga una de las configuraciones compatibles en el hub seleccionado.

- Selector de hub: elige el hub que se va a reconfigurar.
- Selector de configuración: elige la configuración de destino.
- Configuraciones disponibles para el Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** y **Batmobile™ Tumbler**.

Consulta la [documentación del bloque de establecer la configuración del hub](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Configuración del hub {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Bloque informador de la configuración del hub" />

El bloque **configuración como** informa de la configuración actual del hub seleccionado.

- Selector de hub: elige el hub que se va a leer.
- Formato de salida: **texto** devuelve el nombre de la configuración.
- Formato de salida: **índice** devuelve el número de la configuración, útil para comparaciones en condiciones.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Opciones de formato de salida del bloque de configuración del hub" />

Consulta la [documentación del bloque de configuración del hub](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Pulso de potencia {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Bloque de pulso de potencia del Technic Move Hub" />

El bloque **pulso de potencia** envía un pulso de potencia al Technic Move Hub seleccionado. Solo funciona con la configuración **Batmobile™ Tumbler**.

El hub hace girar entonces los motores a máxima potencia y velocidad durante un instante, unos 1–2 segundos. En Enlaces rápidos, la misma función es la operación [Pulso de potencia](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Consulta la [documentación del bloque de pulso de potencia](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Cambiar la configuración mientras se ejecuta el programa {#change-configuration-during-program-runtime}

Un programa también puede cambiar la configuración mientras se ejecuta. Un enfoque típico:

1. Lee la configuración actual del hub.
2. Compárala con la configuración que necesita el perfil.
3. Si la configuración es distinta, establece la configuración necesaria.
4. Vuelve a leer la configuración tras la reconfiguración.
5. Continúa solo cuando el hub informe de la configuración esperada.
6. Desconecta o detén el programa si no se aplicó la configuración necesaria.

El perfil predefinido para este hub muestra cómo hacerlo.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Ejemplo de bloques que cambia la configuración del Technic Move Hub durante la ejecución" />
