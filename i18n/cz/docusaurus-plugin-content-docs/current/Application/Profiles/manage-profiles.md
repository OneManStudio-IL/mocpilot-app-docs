---
id: ManageProfiles
title: Správa profilů
description: "Úpravy, sdílení, import, export a mazání profilů MOCPilotu."
---

import Screenshot from '@site/src/components/Screenshot';

# Správa profilů {#manage-profiles}

## Úprava údajů profilu {#edit-profile-details}

U profilu klepněte na **Upravit** (telefon, tablet) nebo klikněte na **Upravit…** (počítač). V **Upravit profil** můžete změnit:

- **obrázek** a **název**;
- **popis** (co profil dělá, pro jaký model je a jak ho řídit);
- **úroveň bloků** (Logické bloky);
- **hashtagy**;
- **Oblíbené** (telefon, tablet): oblíbený profil se přesune na začátek seznamu. Na počítači je **Oblíbené** ve spodní liště stránky profilů.

<Screenshot name="edit-profile" alt="Okno Upravit profil s obrázkem, názvem, popisem a hashtagy" width={900} />

Tady také profil smažete a po přihlášení ho odešlete do katalogu.

Typ programu změnit nelze. Chcete-li model převést do druhého editoru, vytvořte nový profil.

## Sdílení (export) profilu {#share-export-a-profile}

**Sdílet…** zabalí profil do jednoho souboru `.dat` (s názvem jako `Technic Buggy_<id>.dat`) a otevře systémovou nabídku sdílení. Pošlete ho ve zprávě nebo e-mailem, případně ho uložte do souborů.

Soubor obsahuje huby, panel a program. Neobsahuje nákupy: motivy a speciální ovládací prvky, které příjemce nevlastní, se při úpravě profilu nahradí nebo zamknou (viz [níže](#paid-themes-in-shared-profiles)).

## Import profilu {#import-a-profile}

1. Na stránce **Moje profily** zvolte **Importovat profil…** (telefon: **+** → **Importovat profil…**; tablet: nabídka **Nový profil**; počítač: **Soubor → Importovat profil…**, ⌘O / Ctrl+O).
2. Vyberte soubor `.dat`.

Pokud už tento profil máte:

- jiná verze: zvolte **Nahradit**, **Uložit jako kopii** (k názvu přidá „(copy)“) nebo **Zrušit**;
- přesně stejný soubor: znovu se nenačte.

Soubor, který není profilem, se odmítne.

:::tip Duplikování profilu
Samostatný příkaz „duplikovat“ neexistuje. Chcete-li kopii, sdílejte profil do souboru a importujte ho pomocí **Uložit jako kopii**.
:::

## Smazání profilu {#delete-a-profile}

Otevřete **Upravit profil**:

- telefon a tablet: **Přejeďte pro smazání profilu**;
- počítač: **Smazat profil** a pak potvrďte. **Smazat profil** je také v nabídce karty profilu.

Profil se smaže z tohoto zařízení i z vašeho účtu, takže zmizí i z vašich ostatních zařízení. Tuto akci nelze vrátit zpět; pokud byste profil mohli ještě potřebovat, sdílejte ho nejprve do souboru.

## Profily z katalogu {#profiles-from-the-catalog}

Profil nainstalovaný z [Katalogu profilů](/docs/Application/Profiles/Catalog) je vaše vlastní kopie:

- dokud ho neměníte, běží přesně tak, jak byl publikován, a **Aktualizovat** nainstaluje novou verzi, když ji autor vydá (totéž dělá **Aktualizovat z katalogu** v **Upravit profil**);
- první změna zobrazí upozornění: potom už profil aktualizace z katalogu nedostává.

## Placené motivy ve sdílených profilech {#paid-themes-in-shared-profiles}

Profily mohou používat placené [motivy](/docs/Application/Themes/ThemesOverview) a speciální ovládací prvky (volant, pedály, převodovku a další). Když upravíte profil, který používá produkty, jež nevlastníte:

- ovládací prvky motivů, které nevlastníte, se přepnou na bezplatný **Základní** motiv;
- speciální ovládací prvky bez bezplatné náhrady se zamknou, dokud si je nekoupíte;
- produkty, které vlastníte, zůstanou beze změny.

Nezměněný profil z katalogu běží se všemi svými produkty, i s těmi, které nevlastníte.

## Synchronizace {#sync}

Když jste přihlášeni, každá změna se nahraje a objeví se na vašich ostatních zařízeních. Viz [Synchronizace mezi zařízeními](/docs/Application/Account/Sync).

Pokud otevřete profil, který se už upravuje na jiném zařízení, MOCPilot vás nechá vybrat: **Pouze zobrazit** (změny se neuloží), nebo **Převzít úpravy**.
