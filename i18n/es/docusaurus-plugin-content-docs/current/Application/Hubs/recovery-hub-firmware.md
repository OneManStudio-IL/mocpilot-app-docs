---
id: RecoveryHubFirmware
title: Recuperación del firmware del hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Recuperación del firmware del hub {#hub-firmware-recovery}

La recuperación del firmware devuelve a la vida un hub que no puede arrancar con normalidad tras una actualización de firmware interrumpida o fallida.

MOCPilot carga un firmware que funciona en el hub para que pueda arrancar y volver a actualizarse. Usa la recuperación solo cuando el hub no responda con normalidad, cuando MOCPilot indique que el hub está en modo de recuperación o tras una actualización fallida.

:::warning Importante
Mantén el hub encendido y tu dispositivo cerca de él durante toda la recuperación. Si desactivas el Bluetooth, cierras MOCPilot, quitas las pilas o apagas el hub durante la carga, la recuperación puede fallar.
:::

## Cuándo hace falta la recuperación {#when-recovery-is-required}

Puede que necesites la recuperación si:

- Una actualización de firmware no terminó correctamente.
- El hub ya no se conecta como un hub normal.
- El hub aparece como **LEGO Bootloader** en MOCPilot.
- MOCPilot detecta que el hub está conectado en modo de recuperación del firmware.

Antes de empezar, asegúrate de que el hub tenga batería suficiente, de que tu teléfono, tableta u ordenador esté cargado y de que el Bluetooth esté activado.

## Hubs compatibles {#supported-hubs}

La recuperación funciona con los mismos hubs que la actualización del firmware:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Poner un Technic Hub, Boost Hub o City Hub en modo de recuperación {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Estos hubs se conectan a través de su bootloader:

1. Apaga el hub.
2. Mantén pulsado el botón verde.
3. Sigue manteniéndolo hasta que el LED del hub empiece a parpadear en morado.
4. No sueltes el botón mientras el LED parpadee en morado.
5. Sin soltar el botón, abre **Mis hubs Bluetooth** en MOCPilot y conéctate al hub.
6. Cuando el hub esté conectado en modo bootloader, ya puedes soltar el botón.

En modo de recuperación, el hub puede aparecer como **LEGO Bootloader** en lugar de con su nombre habitual.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hub LEGO Bootloader en la lista de hubs con la acción de recuperar el firmware" />

## Poner un Technic Move Hub en modo de recuperación {#put-a-technic-move-hub-into-recovery-mode}

El Technic Move Hub se recupera de otra manera: no se conecta como **LEGO Bootloader**. En su lugar, la secuencia de botones de abajo carga el firmware de fábrica **1.2.3**, que no está pensado para el uso diario.

Para restaurar su firmware:

1. Apaga el hub.
2. Mantén pulsado el botón verde.
3. Sigue manteniendo el botón verde durante un minuto aproximadamente.
4. Suelta el botón.
5. Espera a que el LED del hub empiece a parpadear en blanco.
6. Abre **Mis hubs Bluetooth** en MOCPilot y conéctate al hub.

Cuando el hub se conecte, MOCPilot detectará el firmware de fábrica y te ofrecerá actualizarlo a la última versión. Inicia la actualización y espera a que termine.

## Iniciar la recuperación desde el diálogo {#start-recovery-from-the-dialog}

Cuando MOCPilot detecta un hub conectado en modo de recuperación, muestra un diálogo de recuperación.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Diálogo de hub detectado en modo de recuperación" />

Selecciona **Recuperar** para empezar a cargar el firmware en el hub.

Si no estás listo, selecciona **Cancelar**. Puedes iniciar la recuperación más tarde desde el menú del hub.

## Iniciar la recuperación desde el menú del hub {#start-recovery-from-the-hub-menu}

Para iniciar la recuperación tú mismo:

1. Abre **Mis hubs Bluetooth**.
2. Busca el hub que aparece como **LEGO Bootloader**.
3. Abre el menú del hub.
4. Selecciona **Recuperar firmware del hub**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Acción Recuperar firmware del hub en el menú contextual del hub" />

## Durante la recuperación del firmware {#during-firmware-recovery}

MOCPilot carga el firmware en el hub y muestra el progreso.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Pantalla de progreso de la recuperación del firmware" />

Espera a que termine. No alejes el hub de tu dispositivo, no cierres la app, no desactives el Bluetooth ni cortes la alimentación del hub.

El hub puede reiniciarse o volver a conectarse varias veces. Es normal: deja MOCPilot abierto y espera.

## Finalizar la recuperación {#finish-recovery}

Cuando termina la recuperación, MOCPilot muestra una confirmación.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Diálogo de recuperación del firmware finalizada" />

Selecciona **Aceptar**. El hub debería reiniciarse y volver a conectarse como un hub normal en lugar de como **LEGO Bootloader**.

Después, comprueba el hub en **Mis hubs Bluetooth**. Si MOCPilot sigue pidiendo una actualización del firmware, ejecuta una [actualización del firmware](/docs/Application/Hubs/FirmwareUpdating/) normal.

## Si la recuperación falla {#if-recovery-fails}

Si la recuperación falla:

1. Mantén el hub cerca de tu dispositivo.
2. Apaga y enciende el hub.
3. Vuelve a poner el hub en modo de recuperación.
4. Conéctate a **LEGO Bootloader** en MOCPilot.
5. Inicia de nuevo **Recuperar firmware del hub**.

Si el error vuelve a aparecer, repite todo el procedimiento. Si fallan varios intentos, cambia o recarga las pilas e inténtalo de nuevo.
