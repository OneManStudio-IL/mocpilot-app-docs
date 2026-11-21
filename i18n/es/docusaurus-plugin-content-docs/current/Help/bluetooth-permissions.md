---
id: BluetoothPermissions
title: Bluetooth y permisos
description: "Qué permisos pide MOCPilot en cada plataforma, para qué, y cómo solucionar un permiso denegado o un problema de Bluetooth."
---

# Bluetooth y permisos {#bluetooth-and-permissions}

MOCPilot se comunica con los hubs por Bluetooth, así que el sistema te pide que lo permitas. Algunos otros permisos solo se piden cuando usas una función que los necesita.

## Qué pide MOCPilot y para qué {#what-mocpilot-asks-for-and-why}

| Permiso | Cuándo se pide | Para qué |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | la primera vez que buscas un hub | para encontrar y conectar hubs |
| **Dispositivos cercanos** (Android 12 y posteriores) | la primera vez que buscas un hub | para encontrar y conectar hubs |
| **Ubicación** precisa (Android 10 y 11) | la primera vez que buscas un hub | Android la exige en estas versiones para buscar dispositivos Bluetooth. MOCPilot no recopila, guarda ni comparte tu ubicación |
| **Ubicación** (Android, hubs Mould King) | cuando conectas un hub Mould King | la app envía las órdenes a los hubs Mould King como emisiones Bluetooth y, para ello, pide la ubicación en todas las versiones de Android |
| **Cámara** (teléfono, tablet) | cuando escaneas un código QR en **Conectar un mando remoto** | para leer el [código de conexión](/docs/Application/Profiles/RemoteControl). También puedes escribir los 6 dígitos |
| **Micrófono** (iPhone, iPad, Mac, Android) | la primera vez que dictas una petición al [asistente IA](/docs/Application/Profiles/AiBuilder) | entrada por voz |
| **Reconocimiento de voz** (iPhone, iPad, Mac) | junto con el micrófono | para convertir tu voz en texto |

En Windows, MOCPilot no pide permiso de Bluetooth; basta con que el Bluetooth esté activado. Para la entrada por voz en Windows, MOCPilot sugiere el dictado por voz de Windows (Win+H).

## Si denegaste un permiso {#if-you-denied-a-permission}

Si denegaste un permiso, normalmente el sistema no vuelve a preguntar. MOCPilot muestra entonces un mensaje, por ejemplo **Error de escaneo** con «The app requires permission to scan nearby devices…», «Permite que MOCPilot use la cámara en los ajustes del sistema para escanear el código.» o «Permite el acceso al micrófono para MOCPilot en los ajustes del sistema». Activa el permiso en los ajustes del sistema y vuelve a la app:

**iPhone y iPad**
1. Abre **Ajustes** y desplázate hasta **MOCPilot**.
2. Activa **Bluetooth** (y **Cámara**, **Micrófono** o **Reconocimiento de voz** si los necesitas).

**Android** (los nombres varían un poco según el fabricante)
1. Abre **Ajustes → Aplicaciones → MOCPilot → Permisos**.
2. Permite **Dispositivos cercanos**. En Android 10 y 11, o para hubs Mould King, permite también **Ubicación** y activa **Usar ubicación precisa**.
3. Permite **Cámara** o **Micrófono** si los necesitas.

**Mac**
1. Abre **Ajustes del Sistema → Privacidad y seguridad**.
2. Elige **Bluetooth** (o **Micrófono**, **Reconocimiento de voz**) y activa **MOCPilot**.

**Windows**
1. Abre **Configuración → Bluetooth y dispositivos** y activa **Bluetooth**.

## «El Bluetooth está apagado» {#bluetooth-is-off}

MOCPilot muestra **El Bluetooth está apagado** cuando el Bluetooth del dispositivo está desactivado. Actívalo en el centro de control, los ajustes rápidos o los ajustes del sistema, y luego confirma el mensaje: la app vuelve a buscar.

## Adaptadores Bluetooth en Windows {#bluetooth-adapters-on-windows}

- Necesitas un adaptador Bluetooth 4.0 (LE) o posterior: integrado en el ordenador o un adaptador USB.
- **Mould King 6.0** necesita un adaptador y un controlador capaces de enviar emisiones Bluetooth (advertising). No todos los adaptadores pueden.
- **Mould King 4.0** no funciona en Windows: la app indica «Los hubs Mould King de 4 puertos requieren anuncios Bluetooth con datos de servicio, que Windows no admite.» Usa un teléfono o una tablet para estos hubs.

## Hubs con Bluetooth clásico {#classic-bluetooth-hubs}

El hub **Robot Inventor** usa Bluetooth clásico, no Bluetooth Low Energy. Funciona en Android, Mac y Windows, pero no en iPhone ni iPad. En Windows, si MOCPilot no lo encuentra, empareja primero el hub en **Configuración → Bluetooth y dispositivos → Agregar dispositivo** y vuelve a buscar en la app.

Todos los demás hubs compatibles usan Bluetooth Low Energy y se añaden solo en MOCPilot, no en los ajustes de Bluetooth del sistema.

## Una conexión estable {#a-stable-connection}

- **Una app cada vez.** Un hub solo acepta una conexión. Cierra las apps de LEGO® y otras apps de control remoto, y desconecta el hub de otros teléfonos.
- **Alcance.** Mantén el dispositivo a pocos metros del modelo. Las paredes, el metal, tu cuerpo y otros dispositivos de 2,4 GHz (routers Wi-Fi, otros dispositivos Bluetooth) reducen el alcance.
- **Pilas.** Las pilas gastadas provocan desconexiones cuando los motores trabajan a fondo.
- **Mantén la app abierta.** Conduce con MOCPilot en pantalla y activa **Mantener la pantalla encendida** en [Configuración](/docs/Application/Account/Settings) para que la pantalla no se apague mientras hay un perfil abierto.

Más soluciones para hubs que no se encuentran o se desconectan una y otra vez: [Solución de problemas](/docs/Help/Troubleshooting#hubs).
