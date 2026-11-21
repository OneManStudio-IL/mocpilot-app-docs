---
id: ControlProperties
title: Vlastnosti ovládacích prvků
description: "Ve vlastnostech ovládacího prvku měňte jeho velikost, barvu, ikonu, vzhled, chování a motiv."
---

import Screenshot from '@site/src/components/Screenshot';

# Vlastnosti ovládacích prvků {#control-properties}

V režimu úprav klepnutím (kliknutím) na ovládací prvek otevřete jeho vlastnosti.

- **Telefon a tablet**: okno přes panel; zavřete ho klepnutím mimo něj.
- **Počítač**: postranní panel; zatímco je otevřený, můžete dál pracovat s panelem.

<Screenshot name="controller-properties" alt="Panel vlastností ovládacího prvku s kartami Styl a Nastavení" width={900} />

V záhlaví je název ovládacího prvku (například **JOY1**), tlačítko koše, nabídka duplikování a **OK**.

## Karta Styl {#style-tab}

- **Velikost**: S, M nebo L. Viz [velikosti](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Akcentová barva**: hlavní barva ovládacího prvku.
- **Ikona**: obrázek na ovládacím prvku (tlačítka, přepínače, monitory), vybraný z více než 260 ikon.
- **Vzhled**: vzhled [speciálního ovládacího prvku](/docs/Application/Dashboard/SpecialControls), například styl volantu.
- Možnosti motivu, podle motivu: například **Barevný uhlík**, **Barevné rámy** a **Zobrazit závodní čáry** v motivu Závodění, **Počet segmentů indikátoru** v motivu Stavební stroje, **Zobrazit hodnoty** v motivu Aura.
- **Změnit motiv**: přepne ovládací prvek na jiný motiv, který vlastníte a který má stejný typ ovládacího prvku.

## Karta Nastavení {#settings-tab}

Společná nastavení:

- **Zablokovat ovladač**: zamčený ovládací prvek nelze přesunout ani smazat.
- **Interaktivita**: neinteraktivní ovládací prvek nezaregistruje stisknutí.

Nastavení jednotlivých typů:

| Ovládací prvek | Nastavení |
|---|---|
| Joystick | **Typ osy**: Obě osy (X, Y), Pouze vodorovně (X), Pouze svisle (Y) |
| Posuvník, Vert. posuvník | **Návrat na nulu**, **Záporné hodnoty**, **Kroková hodnota** |
| Otočný knoflík | **Kroky s aretací (0 = plynule)** (0–24), **Nula uprostřed (-100..100)** |
| Krokový spínač, Vert. krokový spínač | **Počet kroků** (1–100), **Záporné hodnoty**, **Povolit reset** |
| Monitor | **Rozložení textu**, **Přetečení textu**, **Maximum řádků**, **Směr posouvání**, **Rychlost posouvání**, **Zobrazit posuvník**, **Interaktivní posouvání**, **Zarovnání textu**, **Měřítko textu** |
| Monitor náklonu | **Invertovat naklánění**, **Invertovat rolování** |
| Volant | **Úhel volantu** (20–120°), **Zvukové efekty** |
| Pedály | **Zvukové efekty** |
| Manuální převodovka | **Počet rychlostních stupňů** (2–6) |
| Automatická převodovka | **Počet rychlostních stupňů** (2–8) |
| Blinkry | **Výstupy blinkrů blikají**; na kartě Styl **Ikona: left**, **Ikona: light**, **Ikona: right** |

Číselná nastavení mají tlačítko **Obnovit**, které vrátí výchozí hodnotu.

## Změna vlastností z programu {#change-properties-from-the-program}

V Logických blocích mohou bloky měnit ovládací prvek za běhu programu: nastavit jeho barvu, zapnout nebo vypnout jeho interaktivitu, zobrazovat hodnoty na monitorech. Viz [Bloky ovladačů na obrazovce](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
