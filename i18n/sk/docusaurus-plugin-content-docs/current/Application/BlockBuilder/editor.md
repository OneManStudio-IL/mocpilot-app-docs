---
id: Editor
title: Práca v editore
description: "Paleta, presúvanie blokov, priblíženie, kontextové ponuky, vrátenie krokov, Monitor, Nastavenia editora a AI staviteľ v Logických blokoch."
---

import Screenshot from '@site/src/components/Screenshot';

# Práca v editore {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Editor Logických blokov" width={900} />

## Paleta a programová plocha {#palette-and-program-area}

- Paletu zobrazíte alebo skryjete cez **Zobraziť → Paleta blokov** (⌘P / Ctrl+P).
- Vyberte kategóriu, presuňte blok na programovú plochu a pustite ho pod iný blok, aby sa k nemu pripojil. Náhľad ukazuje, kam sa prichytí.
- Celý stĺpec presuniete za jeho horný blok; ak potiahnete blok zo stredu, vezmete ho spolu so všetkým pod ním.
- Bloky odstránite tak, že ich presuniete späť na paletu.
- Premenné, zoznamy, správy a Moje bloky vytvoríte tlačidlami v ich kategóriách (**Vytvoriť premennú**, **Vytvoriť zoznam**, **Pridať správu**, **Vytvoriť blok**) alebo cez **Upraviť → Nová premenná… / Nový zoznam… / Nová správa… / Nový blok…**. Zvuky a vozidlá majú tiež vlastné tlačidlá: **Pridať zvuk** v kategórii [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds) a **Vytvoriť vozidlo** v kategórii [Simulátor](/docs/Application/BlockBuilder/Blocks/Simulator).

## Priblíženie a posúvanie {#zoom-and-scroll}

- Roztiahnite prsty (na dotykovej obrazovke) alebo použite **Zobraziť → Priblížiť / Oddialiť / Skutočná veľkosť** (⌘+ / ⌘− / ⌘0).
- Potiahnutím prázdneho miesta sa posúvate po ploche.
- Kontextová ponuka prázdneho miesta obsahuje **Priblížiť**, **Oddialiť**, **Obnoviť priblíženie** a **Vymazať N blokov**.

## Ponuka bloku {#block-menu}

Dlho podržte blok (na dotykovej obrazovke) alebo naň kliknite pravým tlačidlom:

- **Upraviť**: zmena jeho hodnôt;
- **Duplikovať**;
- **Odstrániť blok** / **Vymazať N blokov**;
- **O bloku**: otvorí popis bloku v tejto dokumentácii;
- **Exportovať blok ako SVG** / **Exportovať všetky bloky ako SVG**: uloží obrázok pre návod alebo príspevok vo fóre.

<Screenshot name="blocks-block-menu" alt="Kontextová ponuka bloku v Logických blokoch" width={900} />

Blok prepojený s ovládačom panela môžete odstrániť až po jeho uvoľnení z tohto ovládača.

## Späť a znova {#undo-and-redo}

Použite **Upraviť → Späť / Znova** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) alebo plávajúce tlačidlá.

- Jedno presunutie je jeden krok; rýchle úpravy tej istej hodnoty sa zlúčia do jedného kroku.
- Vrátenie funguje aj počas behu programu.
- Krokom je aj vytvorenie alebo odstránenie premenných, zoznamov, správ či Mojich blokov; jeho vrátenie zastaví bežiaci program.
- Hodnoty uložené v premenných a zoznamoch sa nevracajú.
- Panel má vlastnú históriu krokov.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M) počas behu programu ukazuje aktuálne hodnoty premenných a zoznamov. Na počítači ho môžete otvoriť v samostatnom okne. Veľmi pomáha pri hľadaní chýb.

<Screenshot name="blocks-monitor" alt="Monitor s premennými a zoznamom počas behu programu" width={900} />

## Nastavenia editora {#editor-settings}

- **Spustiť blok kliknutím**: kliknutím na blok ho spustíte, takže ho môžete otestovať samostatne; ak je program zastavený, zároveň ho spustí.
- **Otvárať program v strede**: keď otvoríte profil, program sa zobrazí v 100 % uprostred plochy (alebo od ľavého horného rohu, ak je väčší), bez ohľadu na to, kde ste ho pri úpravách nechali. Platí to pre všetky profily v tomto zariadení.
- **Zastaviť porty hubu pri zastavení programu**: po stlačení **Zastaviť** zastaví všetky motory a zhasne všetky svetlá. Nechajte zapnuté, pokiaľ motory nemusia zachovať svoj stav.
- **Vybrať úroveň blokov**: Začiatočník, Pokročilý alebo Guru.

<Screenshot name="blocks-editor-settings" alt="Panel Nastavenia editora v Logických blokoch" width={900} />

## Úrovne blokov {#block-levels}

| Úroveň | Zobrazuje |
|---|---|
| **Začiatočník** | najjednoduchšie bloky; prehľadná paleta pre deti a prvé kroky |
| **Pokročilý** | bežné logické bloky a bloky zariadení |
| **Guru** | kompletnú sadu blokov |

Úroveň sa ukladá do profilu. Bloky, ktoré už sú v programe, fungujú ďalej aj po znížení úrovne.

## AI staviteľ {#ai-builder}

S [MocPilot Pro](/docs/Application/Account/Pro) nastaví **AI staviteľ** (tlačidlo s iskierkami, ⇧⌘I / Ctrl+Shift+I) huby, panel a program podľa popisu, ktorý napíšete alebo poviete, a potom profil mení podľa vašich pokynov. Funguje v profiloch s Logickými blokmi aj Rýchlymi prepojeniami. Pozrite si [AI staviteľ](/docs/Application/Profiles/AiBuilder).

### Ako dosiahnuť dobrý výsledok {#ai-builder-tips}

Uveďte hub, povedzte, čo je pripojené ku každému portu a čo má robiť, a ako to chcete ovládať. Pozrite si [Napíšte dobrú požiadavku](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Ponuky na počítači {#desktop-menus}

| Ponuka | Položky |
|---|---|
| Súbor | Zavrieť profil (⌘W) |
| Upraviť | Späť, Znova, Nová premenná…, Nový zoznam…, Nová správa…, Nový blok… |
| Zobraziť | Paleta blokov, Priblížiť, Oddialiť, Skutočná veľkosť |
| Program | Spustiť (⌘R), Zastaviť (⌘.) |
