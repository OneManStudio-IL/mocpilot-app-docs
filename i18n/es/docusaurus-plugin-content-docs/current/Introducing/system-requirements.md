---
id: SystemRequirements
title: Requisitos del sistema
description: "Sistemas operativos, Bluetooth, memoria y navegadores compatibles con MOCPilot."
---

# Requisitos del sistema {#system-requirements}

MOCPilot funciona en teléfonos, tablets y ordenadores. Para conducir un modelo, el dispositivo también necesita Bluetooth y un [hub compatible](/docs/Introducing/SupportedDevices).

## Sistemas operativos {#operating-systems}

| Plataforma | Versión mínima | Dónde conseguirla |
|---|---|---|
| iPhone y iPad | iOS / iPadOS 17 | App Store |
| Teléfonos y tablets Android | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| PC con Windows (64 bits, x64) | Windows 10 versión 1809 o Windows 11 | Microsoft Store |

Encontrarás los enlaces a las tiendas en [mocpilot.com](https://mocpilot.com). La app elige por sí misma el diseño de teléfono, tablet o escritorio; consulta [Teléfono, tablet y escritorio](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Los hubs se conectan por **Bluetooth Low Energy** (Bluetooth 4.0 o posterior). Casi todos los teléfonos y tablets lo tienen; en un ordenador, usa el adaptador integrado o un adaptador Bluetooth USB.
- El hub **Robot Inventor** usa Bluetooth clásico. Funciona en Android, Mac y Windows, pero no en iPhone ni iPad. En Windows y Mac también se puede conectar con un cable USB.
- Los hubs **Mould King** reciben las órdenes como emisiones Bluetooth (advertising). En Windows, Mould King 6.0 necesita un adaptador y un controlador capaces de emitir, y Mould King 4.0 no funciona en absoluto; usa un teléfono o una tablet para él.
- La app pide permiso de Bluetooth (en Android, también Dispositivos cercanos o Ubicación). Consulta [Bluetooth y permisos](/docs/Help/BluetoothPermissions).

## Memoria {#memory}

En dispositivos con menos de 4 GB de memoria, MOCPilot dibuja los Bloques lógicos de forma más sencilla para que los programas grandes sigan funcionando con fluidez. Esto ocurre automáticamente; los bloques funcionan igual.

## Editor web {#web-editor}

El [editor web](/docs/Introducing/WebEditor) de mocpilot.com funciona en el navegador:

- usa un navegador de escritorio actualizado; el editor necesita WebAssembly;
- la primera vez descarga unos 20 MB para el editor y unos 15 MB de temas, así que conviene una conexión rápida;
- los navegadores no pueden conectarse a hubs Bluetooth: para conducir un modelo desde el navegador, usa el [control remoto](/docs/Application/Profiles/RemoteControl), que necesita un navegador compatible con WebRTC;
- si ves «The editor could not start in this browser.», actualiza el navegador o prueba con otro.

## Internet {#internet}

Los hubs, tus perfiles y los temas descargados funcionan sin conexión. El inicio de sesión, la sincronización, el catálogo, el asistente IA, el control remoto y las compras necesitan conexión a internet. Consulta [Trabajar sin conexión](/docs/Application/Account/Sync#working-offline).
