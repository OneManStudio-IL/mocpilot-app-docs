---
id: ProfilesOverview
title: Profily
description: "Čo je profil, zoznam profilov, vyhľadávanie, zoradenie a obľúbené."
---

import Screenshot from '@site/src/components/Screenshot';

# Profily {#profiles}

**Profil** je všetko, čo MOCPilot vie o jednom modeli: jeho huby, panel a program. Pre každý model máte jeden profil.

<Screenshot name="profiles-desktop" alt="Zoznam Moje profily" width={900} />

## Odkiaľ profily pochádzajú {#where-profiles-come-from}

- **Vaše vlastné profily**, vytvorené cez **Nový profil**. Pozrite si [Vytvorenie profilu](/docs/Application/Profiles/CreateProfile).
- **Profily z katalógu**: oficiálne profily pre súpravy LEGO® od tímu MOCPilot a komunitné profily od iných staviteľov. Inštaláciou sa do zoznamu pridá vaša vlastná kópia. Pozrite si [Katalóg a zverejňovanie](/docs/Application/Profiles/Catalog).
- **Importované profily**: súbory `.dat`, ktoré s vami niekto zdieľal. Pozrite si [Správa profilov](/docs/Application/Profiles/ManageProfiles#import-a-profile).

Všetky sú v tom istom zozname.

## Zoznam profilov {#the-profile-list}

Stránka sa volá **Moje profily**.

- **Hľadať** nájde profily podľa názvu, hashtagu, autora, hubu, čísla súpravy alebo roku.
- **Zoradiť a filtrovať** zoraďuje podľa **Najnovšie sady**, **Najstaršie sady**, **Názov (A–Z)**, **Názov (Z–A)**, **Autor (A–Z)**, **Autor (Z–A)** alebo **Použité huby**. **Iba moje profily** skryje profily nainštalované z katalógu.
- **Filtrovať podľa hashtagov** (tablet a počítač) zobrazí iba profily so zvolenými hashtagmi.
- **Obľúbené** profily sú vždy na začiatku.

Karta zobrazuje obrázok a názov profilu a ak sú známe, aj číslo súpravy, rok vydania a počet dielikov. **Dostupná aktualizácia** znamená, že môžete nainštalovať novú verziu profilu z katalógu.

## Akcie s profilom {#profile-actions}

| Akcia | Telefón | Tablet | Počítač |
|---|---|---|---|
| Otvoriť (spustiť) | **Spustiť** na karte | dvojité ťuknutie na kartu, alebo ju vyberte a ťuknite na **Spustiť** | dvojité kliknutie na kartu, alebo **Spustiť** |
| Upraviť názov, obrázok, hashtagy, popis | **Upraviť** na karte | **Upraviť** | **Upraviť…** |
| Pridať do obľúbených | v **Upraviť profil** | **Pridať do obľúbených** | **Pridať do obľúbených** |
| Zdieľať ako súbor | **Zdieľať** na karte | **Zdieľať** | **Zdieľať…** |
| Aktualizovať z katalógu | **Aktualizovať** | **Aktualizovať** | **Aktualizovať** |
| Odoslať do katalógu | v **Upraviť profil** | v **Upraviť profil** | v **Upraviť profil** |
| Odstrániť | **Prejdite pre vymazanie profilu** v **Upraviť profil** | to isté, alebo **Odstrániť profil** v ponuke karty | **Odstrániť profil** v **Upraviť profil** alebo v ponuke karty |

## Dva druhy programov {#two-kinds-of-programs}

Každý profil používa jeden z dvoch editorov programov, ktorý zvolíte pri jeho vytvorení:

- **Rýchle prepojenia**: riadky, ktoré prepájajú ovládacie prvky s motormi a svetlami, bez kódu. Pozrite si [Rýchle prepojenia](/docs/Application/Links/LinksIntroducing).
- **Logické bloky**: program z blokov s udalosťami, cyklami, podmienkami a premennými. Pozrite si [Logické bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::info
Profil vytvorený v novšej verzii MOCPilot sa v staršej verzii nemusí otvoriť („Profil nie je kompatibilný“). Aktualizujte aplikáciu na danom zariadení.
:::
