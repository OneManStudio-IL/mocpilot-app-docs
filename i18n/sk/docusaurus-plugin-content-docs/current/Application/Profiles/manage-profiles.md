---
id: ManageProfiles
title: Správa profilov
description: "Úprava, zdieľanie, import, export a odstránenie profilov MOCPilot."
---

import Screenshot from '@site/src/components/Screenshot';

# Správa profilov {#manage-profiles}

## Úprava údajov profilu {#edit-profile-details}

Pri profile ťuknite na **Upraviť** (telefón, tablet) alebo kliknite na **Upraviť…** (počítač). V **Upraviť profil** môžete zmeniť:

- **obrázok** a **názov**;
- **popis** (čo profil robí, pre aký model je, ako s ním jazdiť);
- **úroveň blokov** (Logické bloky);
- **hashtagy**;
- **Obľúbený** (telefón, tablet): obľúbený profil sa presunie na začiatok zoznamu. Na počítači je **Obľúbený** na spodnej lište stránky profilov.

<Screenshot name="edit-profile" alt="Okno Upraviť profil s obrázkom, názvom, popisom a hashtagmi" width={900} />

Tu tiež profil odstránite a po prihlásení ho odošlete do katalógu.

Typ programu sa nedá zmeniť. Ak chcete model presunúť do druhého editora, vytvorte nový profil.

## Zdieľanie (export) profilu {#share-export-a-profile}

**Zdieľať…** zabalí profil do jedného súboru `.dat` (s názvom ako `Technic Buggy_<id>.dat`) a otvorí systémový panel zdieľania. Pošlite ho v správe alebo e-mailom, prípadne ho uložte do súborov.

Súbor obsahuje huby, panel a program. Neobsahuje nákupy: témy a špeciálne ovládacie prvky, ktoré príjemca nevlastní, sa pri úprave profilu nahradia alebo zamknú (pozrite [nižšie](#paid-themes-in-shared-profiles)).

## Import profilu {#import-a-profile}

1. Na stránke **Moje profily** zvoľte **Importovať profil…** (telefón: **+** → **Importovať profil…**; tablet: ponuka **Nový profil**; počítač: **Súbor → Importovať profil…**, ⌘O / Ctrl+O).
2. Vyberte súbor `.dat`.

Ak tento profil už máte:

- iná verzia: zvoľte **Nahradiť**, **Uložiť ako kópiu** (k názvu pridá „(kópia)“) alebo **Zrušiť**;
- presne ten istý súbor: znova sa nenačíta.

Súbor, ktorý nie je profilom, sa odmietne.

:::tip Duplikovanie profilu
Samostatný príkaz „duplikovať“ neexistuje. Ak chcete kópiu, zdieľajte profil do súboru a importujte ho s možnosťou **Uložiť ako kópiu**.
:::

## Odstránenie profilu {#delete-a-profile}

Otvorte **Upraviť profil**:

- telefón a tablet: **Prejdite pre vymazanie profilu**;
- počítač: **Odstrániť profil** a potom potvrďte. **Odstrániť profil** je aj v ponuke karty profilu.

Profil sa odstráni z tohto zariadenia aj z vášho účtu, takže zmizne aj z vašich ďalších zariadení. Túto akciu nemožno vrátiť späť; ak by ste profil mohli ešte potrebovať, najprv ho zdieľajte do súboru.

## Profily z katalógu {#profiles-from-the-catalog}

Profil nainštalovaný z [Katalógu profilov](/docs/Application/Profiles/Catalog) je vaša vlastná kópia:

- kým ho nezmeníte, beží presne tak, ako bol zverejnený, a **Aktualizovať** nainštaluje novú verziu, keď ju autor vydá (to isté robí **Aktualizovať z katalógu** v **Upraviť profil**);
- pri prvej zmene sa zobrazí upozornenie: po nej už profil nedostáva aktualizácie z katalógu.

## Platené témy v zdieľaných profiloch {#paid-themes-in-shared-profiles}

Profily môžu používať platené [témy](/docs/Application/Themes/ThemesOverview) a špeciálne ovládacie prvky (volant, pedále, prevodovka a ďalšie). Keď upravujete profil, ktorý používa produkty, ktoré nevlastníte:

- ovládacie prvky z tém, ktoré nevlastníte, sa prepnú na bezplatnú tému **Základný**;
- špeciálne ovládacie prvky bez bezplatnej obdoby sa zamknú, kým si ich nekúpite;
- produkty, ktoré vlastníte, zostanú nezmenené.

Nezmenený profil z katalógu beží so všetkými svojimi produktmi, aj s tými, ktoré nevlastníte.

## Synchronizácia {#sync}

Keď ste prihlásení, každá zmena sa nahrá a zobrazí sa na vašich ďalších zariadeniach. Pozrite si [Synchronizácia medzi zariadeniami](/docs/Application/Account/Sync).

Ak otvoríte profil, ktorý sa práve upravuje na inom zariadení, MOCPilot vás požiada o výber: **Iba na zobrazenie** (zmeny sa neuložia) alebo **Prevziať úpravy**.
