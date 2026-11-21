---
id: ArrangingControls
title: Přidání a uspořádání ovládacích prvků
description: "Přidávejte ovládací prvky z palety, přesouvejte je, měňte jejich velikost, duplikujte, zamykejte a mažte je."
---

import Screenshot from '@site/src/components/Screenshot';

# Přidání a uspořádání ovládacích prvků {#add-and-arrange-controls}

## Přidání ovládacího prvku {#add-a-control}

1. Na panelu klepněte na **+** (**Přidat ovladač**). Na počítači se paleta otevře ve vlastním okně.
2. V seznamu zvolte typ ovládacího prvku. Typy jsou rozdělené do skupin: **Joystick**, **Posuvníky**, **Tlačítka a přepínače**, **Monitory**, dále **Vozidlo a speciální** pro [speciální ovládací prvky](/docs/Application/Dashboard/SpecialControls) a **Moje návrhy** pro uložené návrhy. Chcete-li ovládací prvek rychle najít, pište do pole **Hledat ovládací prvky**.
3. Pás stylů ukazuje vybraný typ v každém [motivu](/docs/Application/Themes/ThemesOverview) (u speciálního ovládacího prvku všechny jeho styly). Klepnutím na styl si ho prohlédnete ve velkém náhledu; rovnou tam si ho můžete vyzkoušet.
4. Nastavte ovládací prvek v části **Konfigurovat**: karty **Styl** a **Nastavení** a velikost.
5. Klepněte na **Přidat na panel**. Na počítači můžete přidat několik ovládacích prvků za sebou.

<Screenshot name="controller-palette" alt="Paleta Přidat ovladač" width={900} />

Ovládací prvek se umístí na první volné místo a dostane odznak **NOVÝ**. Pokud není místo, MOCPilot vám to oznámí: uvolněte místo nebo zvolte menší velikost.

Ovládací prvky motivů, které nevlastníte, ukazují místo **Přidat na panel** tlačítka **Koupit** a **Vše s MocPilot Pro**. Viz [Získání, nákup a aktualizace motivů](/docs/Application/Themes/GettingThemes).

## Přesouvání {#move}

V režimu úprav ovládací prvek stiskněte a přetáhněte. Po uvolnění se přichytí k nejbližší buňce mřížky. Pokud by překrýval jiný ovládací prvek, skočí zpět.

## Velikosti {#sizes}

Každý ovládací prvek má tři velikosti: **S**, **M** a **L**. Změníte ji pomocí **Velikost** ve vlastnostech ovládacího prvku. Velikosti v buňkách mřížky (šířka × výška):

| Ovládací prvek | S | M | L |
|---|---|---|---|
| Joystick, Směrová podložka | 7×7 | 10×10 | 13×13 |
| Posuvník | 10×3 | 14×4 | 18×5 |
| Vert. posuvník | 3×10 | 4×14 | 5×18 |
| Otočný knoflík | 6×6 | 8×8 | 10×10 |
| Tlačítko, Přepínač | 3×3 | 4×4 | 5×5 |
| Krokový spínač | 8×3 | 12×4 | 16×5 |
| Vert. krokový spínač | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Úroveň baterie, Rychloměr | 6×6 | 8×8 | 10×10 |
| Monitor náklonu | 8×4 | 12×6 | 16×8 |
| Volant | 8×8 | 12×12 | 16×16 |
| Pedály | 11×8 | 16×12 | 21×16 |
| Manuální převodovka, Automatická převodovka | 8×8 | 10×10 | 12×12 |
| Ruční brzda | 4×7 | 6×10 | 8×13 |
| Blinkry | 8×5 | 10×6 | 14×8 |
| Ovladač vlaku | 6×8 | 8×10 | 10×13 |

Celá plocha má 40 × 20 buněk. Pokud se větší velikost nevejde, nejprve odsuňte sousední ovládací prvky.

## Výběr a úpravy {#select-and-edit}

Klepnutím (kliknutím) na ovládací prvek ho vyberete a otevřete jeho **vlastnosti**. Viz [Vlastnosti ovládacích prvků](/docs/Application/Dashboard/ControlProperties).

## Kontextová nabídka {#context-menu}

Dlouze stiskněte ovládací prvek (dotyková obrazovka) nebo na něj klikněte pravým tlačítkem (počítač):

- **Zamknout** / **Odemknout**
- **Vlastnosti**
- **Změnit motiv**: přepne ovládací prvek na jiný motiv, který vlastníte a který má stejný typ ovládacího prvku
- **Duplikovat**: kopie se stejnými vlastnostmi
- **Duplikovat (jen typ)**: nový ovládací prvek stejného typu s výchozími vlastnostmi
- **Smazat**

Dlouze stiskněte prázdnou část plochy nebo na ni klikněte pravým tlačítkem:

- **Zamknout vše** / **Odemknout vše**
- **Smazat N ovladačů**: smaže všechny nezamčené ovládací prvky

Na počítači s otevřeným panelem vlastností: **Esc** ho zavře, **Delete** / **Backspace** smaže ovládací prvek, **⌘D / Ctrl+D** ho duplikuje.

## Zamykání ovládacích prvků {#lock-controls}

**Zamčený** ovládací prvek nelze přesunout ani smazat, takže ho při jízdě nebo úpravách omylem neposunete. Zobrazuje ikonu zámku. Jeden ovládací prvek zamknete z jeho nabídky nebo volbou **Zablokovat ovladač** v jeho nastavení, všechny najednou pomocí **Zamknout vše**.

## Názvy ovládacích prvků {#control-names}

Každý ovládací prvek má krátký název, který se v režimu úprav zobrazuje na jeho rámečku, například **JOY1**, **SLDR2** nebo **BTN1**. Program se na ovládací prvky odkazuje těmito názvy: v Rychlých propojeních je ve vstupním bloku *JOY1* a v Logických blocích zvolíte *JOY1* v nabídce bloku.

## Mazání {#delete}

Použijte **Smazat** v nabídce nebo tlačítko koše ve vlastnostech. Zamčené ovládací prvky nelze smazat. Ovládací prvek, který program používá, nelze smazat, dokud neodstraníte jeho řádky nebo bloky.
