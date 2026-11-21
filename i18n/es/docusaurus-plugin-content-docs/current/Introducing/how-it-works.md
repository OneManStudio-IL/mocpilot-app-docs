---
id: HowItWorks
title: Cómo funciona MOCPilot
description: "Perfiles, panel, hubs y programa: las cuatro partes de cada modelo en MOCPilot."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Cómo funciona MOCPilot {#how-mocpilot-works}

Todo en MOCPilot se construye con cuatro partes. Cuando las conoces, cada pantalla cobra sentido.

<HowItWorks />

## 1. Perfil: un modelo {#1-profile-one-model}

Un **perfil** contiene todo lo relativo a un modelo: sus hubs, su panel y su programa. Crea un perfil por modelo, por ejemplo «Buggy Technic» o «Camión grúa».

Al crear un perfil eliges su **tipo de programa**: Bloques lógicos o Enlaces rápidos. Después no se puede cambiar. Consulta [Crear un perfil](/docs/Application/Profiles/CreateProfile).

## 2. Hubs: la electrónica del modelo {#2-hubs-the-models-electronics}

Los **hubs** son los ladrillos Bluetooth de tu modelo; los motores, las luces y los sensores se conectan a sus puertos. Un perfil tiene **ranuras** para hubs. Añades los hubs de tu modelo a las ranuras una vez, y MOCPilot se conecta a ellos cada vez que abres el perfil. Consulta [Hubs](/docs/Application/Hubs/HubsOverview).

## 3. Panel: tus controles {#3-dashboard-your-controls}

El **panel** es la pantalla desde la que conduces. Colocas controles en una cuadrícula: joysticks, deslizadores, botones, interruptores, interruptores de paso y monitores, además de controles especiales como un volante y pedales. Un control no hace nada por sí solo; pasa sus valores al programa. Consulta [Panel](/docs/Application/Dashboard/DashboardOverview).

También puedes usar un gamepad, junto con el panel o en su lugar. Consulta [Gamepad](/docs/Application/Dashboard/Gamepad).

## 4. Programa: lo que lo conecta todo {#4-program-what-connects-them}

El **programa** decide qué ocurre cuando mueves un control: qué motor gira y a qué velocidad, qué luz parpadea, qué muestra un monitor.

- En **Enlaces rápidos**, el programa es una lista de filas: *entrada → procesamiento → operación → hub*. Consulta [Enlaces rápidos](/docs/Application/Links/LinksIntroducing).
- En **Bloques lógicos**, el programa está hecho de bloques: eventos, bucles, condiciones, variables y sensores. Consulta [Bloques lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Ejecutar {#5-run}

Pulsa **Ejecutar** (▶). El programa arranca, los controles del panel cobran vida y el modelo responde. Pulsa **Detener** para volver a editar. Consulta [Conducir un modelo](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Programa de Enlaces rápidos: controles del panel conectados a puertos del hub" width={900} />

## Una sesión típica {#a-typical-session}

1. Abre un perfil o [crea uno](/docs/Application/Profiles/CreateProfile).
2. Añade tus hubs en **Mis hubs** y enciéndelos.
3. Coloca controles en el **Panel**.
4. Conéctalos a motores y luces en el **programa**.
5. Pulsa **Ejecutar**, conduce, ajusta y repite.

## Qué se guarda y dónde {#what-is-stored-where}

- Los perfiles se guardan en tu dispositivo. Si has iniciado sesión, también se guardan en tu cuenta y aparecen en todos tus dispositivos. Consulta [Sincronización entre dispositivos](/docs/Application/Account/Sync).
- Los temas y otras compras pertenecen a tu cuenta. Consulta [MocPilot Pro y compras](/docs/Application/Account/Pro).
