---
id: AboutApp
title: Acerca de MOCPilot
description: "MOCPilot convierte un teléfono, una tablet o un ordenador en un mando a distancia para modelos LEGO® y modelos Bluetooth compatibles."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: constrúyelo, condúcelo, contrólalo todo {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** convierte tu teléfono, tablet u ordenador en un mando a distancia para modelos LEGO® y modelos Bluetooth compatibles: coches, camiones, trenes, grúas, robots y tus propios MOC.

Los controles los diseñas tú: un **panel** con joysticks, deslizadores, botones, volantes e indicadores. Después, un **programa** conecta el panel con los motores y las luces de tus **hubs**. MOCPilot tiene dos editores de programas:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Editor de Enlaces rápidos: filas de la entrada al hub" style={{width: '100%'}} />
    <h3>Enlaces rápidos</h3>
    <p>Sin código. Cada fila conecta un control con un motor o una luz: <em>entrada → procesamiento → operación → hub</em>. Un coche está listo para conducir en minutos. <a href="/docs/Application/Links/LinksIntroducing">Más información</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Editor de Bloques lógicos: programa de bloques" style={{width: '100%'}} />
    <h3>Bloques lógicos</h3>
    <p>Bloques visuales con eventos, bucles, condiciones, variables y datos de sensores. Para robots, automatización y todo lo que necesite lógica. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Más información</a>.</p>
  </div>
</div>

## Qué puedes hacer {#what-you-can-do}

- **Conducir cualquier modelo** desde un panel diseñado por ti: joysticks, deslizadores, botones, interruptores, interruptores de paso, monitores y controles especiales como volante, pedales, caja de cambios, freno de mano, intermitentes y controlador de tren.
- **Usar hubs reales**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick y Mould King. Consulta [Dispositivos compatibles](/docs/Introducing/SupportedDevices).
- **Usar un gamepad** (tipo Xbox o PlayStation) en lugar de la pantalla táctil.
- **Leer sensores**: batería e inclinación del hub, velocidad y posición del motor, sensores de color y de distancia, y la inclinación de tu teléfono.
- **Personalizar el panel** con [temas](/docs/Application/Themes/ThemesOverview).
- **Tener tus perfiles en todas partes**: con una cuenta, los perfiles se sincronizan entre tus dispositivos y puedes editarlos en el navegador en [mocpilot.com](/docs/Introducing/WebEditor).
- **Conducir desde otro dispositivo**: con MocPilot Pro, un dispositivo conecta los hubs y otro, o el editor web, hace de mando remoto.
- **Compartir**: instala perfiles del [Catálogo de perfiles](/docs/Application/Profiles/Catalog) y publica los tuyos.

<Screenshot name="dashboard-run" alt="Un panel de MOCPilot mientras se conduce un modelo" width={900} />

## Dónde funciona MOCPilot {#where-mocpilot-runs}

| Dispositivo | Diseño |
|---|---|
| iPhone y teléfonos Android | Diseño de teléfono: barra inferior; un perfil abierto ocupa toda la pantalla en horizontal |
| iPad y tablets Android | Diseño de tablet: barra lateral, más espacio para el editor |
| Ordenadores Mac y Windows | Diseño de escritorio: menús, atajos de teclado, el panel en su propia ventana |
| Navegador en mocpilot.com | [Editor web](/docs/Introducing/WebEditor): edita perfiles; los hubs los conecta la app en otro dispositivo |

Más detalles en [Teléfono, tablet y escritorio](/docs/Introducing/Layouts).

Los hubs, tus perfiles y los temas descargados también funcionan sin internet. Consulta [Trabajar sin conexión](/docs/Application/Account/Sync#working-offline).

## Por dónde empezar {#where-to-start}

1. Lee [Cómo funciona MOCPilot](/docs/Introducing/HowItWorks): cinco minutos que lo hacen todo más fácil.
2. Sigue el [Inicio rápido](/docs/Introducing/QuickStart) para conducir tu primer modelo.
3. ¿No sabes qué editor elegir? Compáralos en [Crear un perfil](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, el logotipo de LEGO, Powered Up y Technic son marcas comerciales del Grupo LEGO, que no patrocina, autoriza ni respalda MOCPilot.
:::
