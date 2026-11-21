---
id: Sync
title: Sincronización entre dispositivos
description: "Mantén sincronizados los perfiles y la configuración de MOCPilot en teléfonos, tablets, ordenadores y el editor web, y trabaja sin conexión."
---

import Screenshot from '@site/src/components/Screenshot';

# Sincronización entre dispositivos {#sync-between-devices}

Si has iniciado sesión, MOCPilot mantiene tus perfiles y tu configuración iguales en todos los dispositivos: teléfono, tablet, ordenador y el [editor web](/docs/Introducing/WebEditor). No hay nada que activar: con una cuenta, la sincronización está siempre activa.

## Cómo funciona {#how-it-works}

- Los cambios se guardan primero en el dispositivo y se suben cuando estás en línea («Sincronizando perfiles…»).
- Los demás dispositivos descargan la nueva versión cuando están en línea.
- Las compras no se sincronizan como archivos; pertenecen a tu cuenta y están disponibles allí donde inicies sesión.
- Los perfiles añadidos en el sitio web (**Añadir a mi cuenta** en el catálogo) o editados en el editor web llegan mediante la sincronización.
- En modo invitado no se sincroniza nada: los perfiles se quedan solo en este dispositivo.

## Conflictos {#conflicts}

Si el mismo perfil se modificó en dos dispositivos antes de que se sincronizaran, gana la versión de tu cuenta, y tu versión de este dispositivo se guarda como copia (se añade «(copy)» a su nombre). MOCPilot te lo indica con un mensaje de **Sincronización de perfiles**. Lo mismo ocurre si un perfil que modificaste aquí se eliminó en otro dispositivo.

Si abres un perfil que se está editando en ese momento en otro dispositivo, puedes elegir **Solo ver** (los cambios no se guardan) o **Tomar el control de la edición**.

## Trabajar sin conexión {#working-offline}

Los hubs, tus perfiles y los temas descargados funcionan sin internet.

- Si MOCPilot no puede contactar con el servidor al iniciarse, muestra **Sin conexión a internet** con **Trabajar sin conexión** y **Reintentar**.
- Mientras estás sin conexión, se muestra la etiqueta **Sin conexión** en la parte superior. Las funciones que necesitan el servidor (el catálogo y la publicación, el asistente IA, el control remoto, las notificaciones, las compras, los mensajes al soporte) te avisan de que necesitan conexión a internet.
- Los cambios que haces sin conexión se suben cuando vuelve la conexión. Cuando la app vuelve a ver el servidor, muestra **La conexión ha vuelto** con **Conectarse**.

<Screenshot name="offline-prompt" alt="Mensaje Sin conexión a internet con los botones Trabajar sin conexión y Reintentar" width={900} />

## Cerrar sesión {#signing-out}

Al cerrar sesión se eliminan tus perfiles y tu configuración de este dispositivo; se quedan en tu cuenta y vuelven cuando inicias sesión de nuevo. Si algunos cambios aún no se han subido, MOCPilot te avisa antes y enumera los perfiles: conéctate a internet y deja que termine la sincronización, o elige **Cerrar sesión de todos modos** (se guarda una copia en la carpeta Backup de la app).

## Consejos {#tips}

- Antes de publicar un perfil en el catálogo, asegúrate de que está sincronizado: el catálogo lo toma de tu cuenta.
- Para pasar perfiles a un dispositivo sin cuenta, usa **Compartir** e **Importar perfil…** con archivos `.dat`. Consulta [Gestionar perfiles](/docs/Application/Profiles/ManageProfiles).
