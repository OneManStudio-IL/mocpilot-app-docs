---
id: ConnectingHubs
title: Añadir y conectar un hub
description: "Añade un hub a una ranura del perfil, conéctalo, cámbiale el nombre y observa sus sensores en el monitor del hub."
---

import Screenshot from '@site/src/components/Screenshot';

# Añadir y conectar un hub {#add-and-connect-a-hub}

Un hub se añade al perfil una sola vez. Después, MOCPilot se conecta a él cada vez que abres el perfil.

## Añadir un hub {#add-a-hub}

1. Abre el perfil y toca **Mis hubs** (en un ordenador, **Hubs** en la barra superior o ⇧⌘H / Ctrl+Shift+H). La página **Mis hubs Bluetooth** muestra las ranuras.
2. Toca **Agregar un nuevo Hub** en una ranura libre.
3. Elige tu hub en la lista. El filtro de arriba muestra **Todo**, **LEGO**, **SBrick**, **BuWizz** o **Mould King**. Toca **Añadir**.
4. Sigue los pasos en pantalla: **Pulsa el botón del hub** y **Espera a que la búsqueda encuentre el hub**. Toca **Iniciar escaneo** para buscar de nuevo.

<Screenshot name="add-hub" alt="Elegir el hub que se va a añadir" width={900} />

En cuanto se encuentra el hub, se conecta y se queda en la ranura.

<Screenshot name="my-hubs" alt="Mis hubs Bluetooth con hubs conectados y ranuras libres" width={900} />

## El menú de la ranura {#the-slot-menu}

El botón **Conectar** de una ranura conecta el hub. El menú de la ranura contiene:

- **Desconectar**;
- **Renombrar hub**: guarda un nombre nuevo en el propio hub (en los hubs conectados que lo admiten);
- **Actualizar firmware**: cuando hay un firmware más reciente; consulta [Actualización del firmware](/docs/Application/Hubs/FirmwareUpdating);
- **Recuperar firmware del hub**: cuando el hub está conectado en modo de recuperación; consulta [Recuperación del firmware](/docs/Application/Hubs/RecoveryHubFirmware);
- **Seleccionar configuración**: configuraciones del Technic Move; consulta [Configuraciones del Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations);
- **Seleccionar canal: A / B / C**: el canal de control de Mould King;
- **Eliminar hub**: quita el hub del perfil.

El botón **Mis hubs** del editor (**Hubs** en un ordenador) muestra cuántos hubs están conectados.

## Monitor del hub {#hub-monitor}

Abre un hub conectado para ver su **Monitor del hub**:

- el hub: modelo, nombre, firmware, batería, voltaje de batería, carga, temperatura de la placa, configuración, orientación, inclinación (cabeceo, balanceo y guiñada) y acelerómetro;
- cada puerto: el dispositivo conectado y su velocidad, posición, posición relativa, color, luz reflejada y ambiental, o distancia.

Úsalo para comprobar qué motor está en qué puerto y hacia dónde gira antes de crear el programa. Los valores se siguen actualizando mientras la ventana de MOCPilot está en segundo plano.

<Screenshot name="hub-monitor" alt="Monitor del hub de un Technic Hub conectado" width={900} />

## Consejos de conexión {#connection-tips}

- Enciende el hub justo antes de conectarlo: muchos hubs se apagan solos tras unos minutos sin conexión.
- Mantén el teléfono cerca del hub; las paredes y el metal reducen el alcance.
- Un hub solo puede estar conectado a un dispositivo a la vez. Cierra otras apps que lo usen (apps de LEGO®, otros mandos).
- **El Bluetooth está apagado**: activa el Bluetooth y permite que MOCPilot lo use en los ajustes del sistema.
- **Hub no encontrado**: vuelve a pulsar el botón del hub, reinicia la búsqueda o cambia las pilas.
- Los hubs **Mould King** no se «conectan» realmente: MOCPilot les envía comandos mediante anuncios Bluetooth (advertising). Si el hub no reacciona, toca **Conectar de nuevo** y comprueba el canal.

Más información en [Solución de problemas](/docs/Help/Troubleshooting#hubs).
