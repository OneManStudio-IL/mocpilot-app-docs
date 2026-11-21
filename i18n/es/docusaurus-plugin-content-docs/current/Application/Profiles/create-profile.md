---
id: CreateProfile
title: Crear un perfil
description: "Crea un perfil y elige entre los editores de programas Bloques lógicos y Enlaces rápidos."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Crear un perfil {#create-a-profile}

1. Ve a **Mis perfiles**.
   - Teléfono: toca **+** → **Nuevo perfil**.
   - Tablet: **Nuevo perfil** en la cabecera.
   - Ordenador: **Archivo → Nuevo perfil** (⌘N / Ctrl+N).
2. Elige el **tipo de programa** (ver más abajo).
3. Rellena los datos del perfil.
4. Toca **Crear**. El perfil se abre en el editor.

<Screenshot name="create-profile-tiles" alt="Página Nuevo perfil" width={900} />

## Elegir el tipo de programa {#choose-the-program-type}

El tipo de programa determina qué editor usa el perfil. **No se puede cambiar después.** Para probar el otro editor, crea un segundo perfil.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Enlaces rápidos" style={{width: '100%', maxWidth: 320}} />
    <h3>Enlaces rápidos</h3>
    <p><em>Un esquema simplificado, como en Controlz.</em> Conecta los controles del panel con los motores y las luces del hub fila a fila: entrada, procesamiento, operación, hub. Listo en minutos.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Bloques lógicos" style={{width: '100%', maxWidth: 320}} />
    <h3>Bloques lógicos</h3>
    <p><em>Robótica, algoritmos y escenarios avanzados.</em> Programa el modelo con bloques: eventos, bucles, condiciones, variables y datos de sensores. Para robots y automatización.</p>
  </div>
</div>

| | Enlaces rápidos | Bloques lógicos |
|---|---|---|
| Cómo se construye | Filas: entrada → procesamiento → operación → hub | Bloques encajados en scripts |
| Tiempo de aprendizaje | Minutos | Más largo; más posibilidades |
| Ideal para | Coches, camiones, trenes, grúas: «este control mueve ese motor» | Robots, secuencias automáticas, lógica con sensores, juegos |
| Lógica (si, bucles, variables) | No (solo umbrales y alternancias) | Sí |
| Sensores | Sensores del hub como entradas; valores a indicadores | Todos los sensores del hub y del teléfono, cualquier cálculo |
| Arranque suave, límites, zona muerta | Bloques listos | Se construyen con bloques |
| Dirección por servo con calibración | Bloque listo | Bloques |
| Gamepad | Sí | Sí |
| Varios hubs | Sí | Sí |

**¿No lo tienes claro?** Empieza con Enlaces rápidos. Si más adelante necesitas lógica, crea un perfil de Bloques lógicos para el modelo.

Si tocas **Crear** sin elegir un tipo, los mosaicos se resaltan. Cada mosaico tiene un enlace **Documentación ↗** a su parte de esta documentación.

## Datos del perfil {#profile-details}

- **Imagen**: haz clic en la zona de la imagen (mantenla pulsada en una pantalla táctil) para elegir una imagen. Arrastra la imagen hacia arriba o hacia abajo para elegir la parte que se ve. **Actualizar imagen** y **Eliminar** sirven para cambiarla después.
- **Nombre**: obligatorio y debe ser único: «Ya existe un perfil con el nombre “…”» significa que ya tienes uno con ese nombre.
- **Nivel de bloques** (solo Bloques lógicos): **Principiante**, **Avanzado** o **Gurú**. Determina qué bloques muestra la paleta para este perfil. Puedes cambiarlo más tarde en la Configuración del editor. Consulta [Trabajar en el editor](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtags**: describen el perfil y ayudan a encontrarlo. Los hashtags salen de una lista compartida, que se carga cuando estás en línea.

Todo salvo el tipo de programa se puede cambiar después en **Editar perfil**, donde también puedes añadir una descripción y marcar el perfil como **Favorito**.

## Siguientes pasos {#next-steps}

1. Añade hubs: [Añadir y conectar un hub](/docs/Application/Hubs/ConnectingHubs).
2. Coloca controles: [Panel](/docs/Application/Dashboard/DashboardOverview).
3. Escribe el programa: [Enlaces rápidos](/docs/Application/Links/LinksIntroducing) o [Bloques lógicos](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip Asistente IA
Con [MocPilot Pro](/docs/Application/Account/Pro), puedes describir tu modelo con palabras o por voz y dejar que el asistente IA cree los hubs, el panel y el programa (Bloques lógicos o Enlaces rápidos). Indica qué hub usas, qué hay conectado a cada puerto y qué debe hacer. Consulta [Cómo obtener un buen resultado](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
