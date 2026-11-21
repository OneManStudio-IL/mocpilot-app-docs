---
id: ManageProfiles
title: Gestionar perfiles
description: "Edita, comparte, importa, exporta y elimina perfiles de MOCPilot."
---

import Screenshot from '@site/src/components/Screenshot';

# Gestionar perfiles {#manage-profiles}

## Editar los datos del perfil {#edit-profile-details}

Toca **Editar** (teléfono, tablet) o haz clic en **Editar…** (ordenador) en un perfil. En **Editar perfil** puedes cambiar:

- la **imagen** y el **nombre**;
- la **descripción** (qué hace el perfil, para qué modelo es, cómo se conduce);
- el **nivel de bloques** (Bloques lógicos);
- los **hashtags**;
- **Favorito** (teléfono, tablet): un perfil favorito sube al principio de tu lista. En un ordenador, **Favorito** está en la barra inferior de la página de perfiles.

<Screenshot name="edit-profile" alt="Ventana Editar perfil con la imagen, el nombre, la descripción y los hashtags" width={900} />

Aquí también puedes eliminar el perfil y, si has iniciado sesión, enviarlo al catálogo.

El tipo de programa no se puede cambiar. Para pasar un modelo al otro editor, crea un perfil nuevo.

## Compartir (exportar) un perfil {#share-export-a-profile}

**Compartir…** empaqueta el perfil en un único archivo `.dat` (con un nombre como `Technic Buggy_<id>.dat`) y abre el menú de compartir del sistema. Envíalo en un mensaje o por correo electrónico, o guárdalo en tus archivos.

El archivo contiene los hubs, el panel y el programa. No contiene compras: los temas y controles especiales que el destinatario no tenga se sustituyen o se bloquean cuando edite el perfil (consulta [más abajo](#paid-themes-in-shared-profiles)).

## Importar un perfil {#import-a-profile}

1. En **Mis perfiles**, elige **Importar perfil…** (teléfono: **+** → **Importar perfil…**; tablet: el menú **Nuevo perfil**; ordenador: **Archivo → Importar perfil…**, ⌘O / Ctrl+O).
2. Elige un archivo `.dat`.

Si ya tienes este perfil:

- una versión distinta: elige **Reemplazar**, **Guardar como copia** (añade «(copy)» al nombre) o **Cancelar**;
- exactamente el mismo archivo: no se vuelve a cargar.

Un archivo que no es un perfil se rechaza.

:::tip Duplicar un perfil
No hay un comando «duplicar» aparte. Para obtener una copia, comparte el perfil como archivo e impórtalo con **Guardar como copia**.
:::

## Eliminar un perfil {#delete-a-profile}

Abre **Editar perfil**:

- teléfono y tablet: **Desliza para eliminar el perfil**;
- ordenador: **Eliminar perfil** y confirma. **Eliminar perfil** también está en el menú de la tarjeta del perfil.

El perfil se elimina de este dispositivo y de tu cuenta, así que también desaparece de tus otros dispositivos. No se puede deshacer; si crees que podrías volver a necesitarlo, compártelo antes como archivo.

## Perfiles del catálogo {#profiles-from-the-catalog}

Un perfil instalado desde el [Catálogo de perfiles](/docs/Application/Profiles/Catalog) es tu propia copia:

- mientras no lo modifiques, funciona exactamente como se publicó, y **Actualizar** instala una versión nueva cuando el autor la publica (**Actualizar desde el catálogo** en **Editar perfil** hace lo mismo);
- el primer cambio muestra un aviso: a partir de ahí, el perfil deja de recibir actualizaciones del catálogo.

## Temas de pago en perfiles compartidos {#paid-themes-in-shared-profiles}

Los perfiles pueden usar [temas](/docs/Application/Themes/ThemesOverview) de pago y controles especiales (volante, pedales, caja de cambios y otros). Cuando editas un perfil que usa productos que no tienes:

- los controles de temas que no tienes pasan al tema gratuito **Básico**;
- los controles especiales sin equivalente gratuito quedan bloqueados hasta que los compres;
- los productos que sí tienes se quedan como están.

Un perfil del catálogo sin modificar funciona con todos sus productos, incluso los que no tienes.

## Sincronización {#sync}

Si has iniciado sesión, cada cambio se sube y aparece en tus otros dispositivos. Consulta [Sincronización entre dispositivos](/docs/Application/Account/Sync).

Si abres un perfil que ya se está editando en otro dispositivo, MOCPilot te pide que elijas: **Solo ver** (los cambios no se guardan) o **Tomar el control de la edición**.
