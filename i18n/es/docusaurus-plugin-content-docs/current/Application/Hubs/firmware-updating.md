---
id: FirmwareUpdating
title: Actualización del firmware
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Actualización del firmware {#firmware-updating}

MOCPilot puede actualizar el firmware de los hubs LEGO® Powered Up compatibles cuando hay disponible una versión compatible más reciente.

Algunos hubs necesitan una actualización para funcionar correctamente con MOCPilot: el firmware nuevo corrige errores del hub y añade las funciones en las que se apoya la app.

## Hubs compatibles {#supported-hubs}

MOCPilot puede actualizar estos hubs:

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

## Antes de empezar {#before-you-start}

Asegúrate de que el hub y tu teléfono, tableta u ordenador tengan batería suficiente.

Mantén el hub encendido durante toda la actualización y el dispositivo cerca de él para que la conexión Bluetooth sea estable. No cierres MOCPilot, no desactives el Bluetooth ni apagues el hub mientras se carga el firmware.

:::warning Importante
Una actualización interrumpida puede dejar el hub con un firmware incompleto. En ese caso, puede que el hub necesite una recuperación del firmware antes de poder usarlo de nuevo.
:::

## Iniciar la actualización {#starting-the-update}

Al conectar un hub, MOCPilot comprueba la versión de su firmware. Si se necesita una versión más reciente, la app muestra el diálogo **Se requiere actualización de firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Diálogo de actualización de firmware requerida" />

Selecciona **Actualizar** para iniciar la actualización del firmware de inmediato.

Para actualizar más tarde, selecciona **Cancelar**. Puedes iniciar la actualización desde el menú del hub en cualquier momento.

## Actualizar más tarde desde el menú del hub {#updating-later-from-the-hub-menu}

Para iniciar la actualización tú mismo:

1. Abre **Mis hubs Bluetooth**.
2. Busca el hub que necesita la actualización.
3. Abre el menú del hub.
4. Selecciona **Actualizar firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Acción Actualizar firmware en el menú contextual del hub" />

## Durante la actualización del firmware {#during-the-firmware-update}

MOCPilot carga el firmware en el hub y muestra el progreso.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Pantalla de progreso de la actualización del firmware" />

Espera a que termine la carga. Es posible que el hub se reinicie o se desconecte un momento mientras se aplica el nuevo firmware.

Después, MOCPilot vuelve a buscar el hub. Mantén el hub cerca y espera a que la app se reconecte.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware cargado y búsqueda del hub" />

## Finalizar la actualización {#finishing-the-update}

Cuando termina la actualización, MOCPilot muestra una confirmación.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Diálogo de actualización del firmware finalizada" />

Selecciona **Aceptar**. El hub se vuelve a conectar y su tarjeta muestra la nueva versión del firmware.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Tarjeta del hub con la versión de firmware actualizada" />

Ya puedes seguir usando el hub con MOCPilot.

## Si la actualización falla {#if-the-update-fails}

Si la actualización falla, MOCPilot muestra un mensaje de error.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Diálogo de error en la actualización del firmware" />

Primero, apaga y enciende el hub y vuelve a ejecutar la actualización:

1. Apaga el hub.
2. Vuelve a encender el hub.
3. Mantén el hub cerca de tu dispositivo.
4. Conéctate al hub en MOCPilot.
5. Inicia de nuevo la actualización del firmware.

Si el hub sigue sin responder con normalidad, puede que necesite una recuperación del firmware: consulta [Recuperación del firmware del hub](/docs/Application/Hubs/RecoveryHubFirmware/).
