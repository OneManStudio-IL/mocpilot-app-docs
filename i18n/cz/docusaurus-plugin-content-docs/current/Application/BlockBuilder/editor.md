---
id: Editor
title: Práce v editoru
description: "Paleta, přetahování bloků, přiblížení, kontextové nabídky, vracení změn, Monitor, Nastavení editoru a AI tvůrce v Logických blocích."
---

import Screenshot from '@site/src/components/Screenshot';

# Práce v editoru {#working-in-the-editor}

<Screenshot name="blocks-editor" alt="Editor Logických bloků" width={900} />

## Paleta a programová plocha {#palette-and-program-area}

- Paletu zobrazíte nebo skryjete přes **Zobrazení → Paleta bloků** (⌘P / Ctrl+P).
- Vyberte kategorii, přetáhněte blok na programovou plochu a pusťte ho pod jiný blok, abyste ho připojili. Náhled ukazuje, kam zapadne.
- Celý zásobník přetáhnete za jeho horní blok; přetažením bloku ze středu vezmete jeho i vše pod ním.
- Bloky smažete tak, že je přetáhnete zpět na paletu.
- Proměnné, seznamy, zprávy a Moje bloky se vytvářejí tlačítky v jejich kategoriích (**Vytvořit proměnnou**, **Vytvořit seznam**, **Přidat zprávu**, **Vytvořit blok**) nebo přes **Úpravy → Nová proměnná… / Nový seznam… / Nová zpráva… / Nový blok…**. Zvuky a vozidla mají také svá tlačítka: **Přidat zvuk** v kategorii [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds) a **Vytvořit vozidlo** v kategorii [Simulátor](/docs/Application/BlockBuilder/Blocks/Simulator).

## Přiblížení a posouvání {#zoom-and-scroll}

- Roztáhněte prsty (na dotykové obrazovce) nebo použijte **Zobrazení → Přiblížit / Oddálit / Skutečná velikost** (⌘+ / ⌘− / ⌘0).
- Plochu posouváte tažením prázdného místa.
- Kontextová nabídka prázdného místa obsahuje **Přiblížit**, **Oddálit**, **Obnovit přiblížení** a **Smazat N bloků**.

## Nabídka bloku {#block-menu}

Blok dlouze podržte (na dotykové obrazovce) nebo na něj klikněte pravým tlačítkem:

- **Upravit**: změní jeho hodnoty;
- **Duplikovat**;
- **Smazat blok** / **Smazat N bloků**;
- **O bloku**: otevře popis bloku v této dokumentaci;
- **Exportovat blok jako SVG** / **Exportovat všechny bloky jako SVG**: uloží obrázek pro návod nebo příspěvek na fóru.

<Screenshot name="blocks-block-menu" alt="Kontextová nabídka bloku v Logických blocích" width={900} />

Blok propojený s ovládacím prvkem panelu lze smazat, až když ho od tohoto prvku uvolníte.

## Zpět a znovu {#undo-and-redo}

Použijte **Úpravy → Zpět / Znovu** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z) nebo plovoucí tlačítka.

- Jedno přetažení je jeden krok; rychlé úpravy stejné hodnoty se sloučí do jednoho kroku.
- Vracení funguje i za běhu programu.
- Vytvoření nebo smazání proměnných, seznamů, zpráv nebo Mých bloků je také krok; jeho vrácení zastaví běžící program.
- Hodnoty uložené v proměnných a seznamech se nevracejí.
- Panel má vlastní historii vracení.

## Monitor {#monitor}

**Monitor** (⇧⌘M / Ctrl+Shift+M) za běhu programu ukazuje aktuální hodnoty proměnných a seznamů. Na počítači ho můžete otevřít v samostatném okně. Velmi pomáhá při hledání chyb.

<Screenshot name="blocks-monitor" alt="Monitor s proměnnými a seznamem za běhu programu" width={900} />

## Nastavení editoru {#editor-settings}

- **Spustit blok kliknutím**: kliknutím na blok ho spustíte, takže ho můžete vyzkoušet samostatně; pokud je program zastavený, spustí se tím i program.
- **Otevírat program uprostřed**: když otevřete profil, program se zobrazí ve 100% velikosti uprostřed plátna (nebo od levého horního rohu, je-li větší), bez ohledu na to, kde jste ho při úpravách nechali. Platí pro všechny profily na tomto zařízení.
- **Zastavit porty hubu při zastavení programu**: po stisknutí **Zastavit** zastaví všechny motory a zhasne všechna světla. Nechte zapnuté, pokud motory nemusí udržet svůj stav.
- **Vybrat úroveň bloků**: Začátečník, Pokročilý nebo Guru.

<Screenshot name="blocks-editor-settings" alt="Panel Nastavení editoru v Logických blocích" width={900} />

## Úrovně bloků {#block-levels}

| Úroveň | Zobrazuje |
|---|---|
| **Začátečník** | nejjednodušší bloky; přehledná paleta pro děti a první kroky |
| **Pokročilý** | běžné logické bloky a bloky zařízení |
| **Guru** | kompletní sadu bloků |

Úroveň se ukládá v profilu. Bloky, které už jsou v programu, fungují dál i po snížení úrovně.

## AI tvůrce {#ai-builder}

S [MocPilot Pro](/docs/Application/Account/Pro) **AI tvůrce** (tlačítko s jiskrami, ⇧⌘I / Ctrl+Shift+I) nastaví huby, panel i program podle popisu, který napíšete nebo řeknete, a potom profil mění podle vašich pokynů. Funguje v profilech s Logickými bloky i s Rychlými propojeními. Viz [AI tvůrce](/docs/Application/Profiles/AiBuilder).

### Jak dosáhnout dobrého výsledku {#ai-builder-tips}

Uveďte hub, řekněte, co je připojeno ke kterému portu a co to má dělat, a jak to chcete ovládat. Viz [Jak napsat dobrý požadavek](/docs/Application/Profiles/AiBuilder#ai-builder-tips).

## Nabídky na počítači {#desktop-menus}

| Nabídka | Položky |
|---|---|
| Soubor | Zavřít profil (⌘W) |
| Úpravy | Zpět, Znovu, Nová proměnná…, Nový seznam…, Nová zpráva…, Nový blok… |
| Zobrazení | Paleta bloků, Přiblížit, Oddálit, Skutečná velikost |
| Program | Spustit (⌘R), Zastavit (⌘.) |
