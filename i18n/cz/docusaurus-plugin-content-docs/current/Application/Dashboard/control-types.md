---
id: ControlTypes
title: Typy ovládacích prvků
description: "Joystick, směrová podložka, posuvníky, otočný knoflík, tlačítka, přepínače, krokové spínače, monitory a speciální ovládací prvky."
---

# Typy ovládacích prvků {#control-types}

Každý [motiv](/docs/Application/Themes/ThemesOverview) kreslí stejnou sadu typů ovládacích prvků ve vlastním stylu. Bezplatný **Základní** motiv jich má devět; každý placený motiv přidává **Otočný knoflík** a tři grafické monitory. Volanty, pedály, řadicí páky a další [speciální ovládací prvky](/docs/Application/Dashboard/SpecialControls) jsou samostatné produkty.

| Ovládací prvek | Název na panelu | Co dává programu | K dispozici v |
|---|---|---|---|
| Joystick | JOY | osy X a Y | všech motivech |
| Směrová podložka | DPAD | tlačítka nahoru / dolů / vlevo / vpravo | všech motivech |
| Posuvník | SLDR | hodnotu | všech motivech |
| Vert. posuvník | VSLDR | hodnotu | všech motivech |
| Otočný knoflík | DIAL | hodnotu | placených motivech |
| Tlačítko | BTN | stisknuto / uvolněno | všech motivech |
| Přepínač | SWCH | zapnuto / vypnuto | všech motivech |
| Krokový spínač | STPR | číslo kroku | všech motivech |
| Vert. krokový spínač | VSTPR | číslo kroku | všech motivech |
| Monitor | MNTR | zobrazuje text nebo hodnotu | všech motivech |
| Úroveň baterie | MNTBT | zobrazuje úroveň | placených motivech |
| Rychloměr | MNTSP | zobrazuje rychlost | placených motivech |
| Monitor náklonu | MNTLT | zobrazuje klopení a klonění | placených motivech |
| Volant, pedály, převodovky, ruční brzda, blinkry, ovladač vlaku | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | viz [Speciální ovládací prvky](/docs/Application/Dashboard/SpecialControls) | speciálních produktech |

Název na panelu dostane číslo: první joystick je **JOY1**, druhý **JOY2**.

## Joystick {#joystick}

Páčka, která se sama vrací do středu. Dává hodnotu **X** (vlevo/vpravo) a **Y** (nahoru/dolů); střed je nula.

- **Typ osy**: **Obě osy (X, Y)**, **Pouze vodorovně (X)** nebo **Pouze svisle (Y)**. Jednoosý joystick se ovládá snáz, když slouží jen k jízdě nebo jen k řízení.
- Typické použití: Y pro jízdu a X pro řízení, nebo jeden joystick pro každý pás tanku.

## Směrová podložka {#directional-pad}

Čtyři tlačítka: nahoru, dolů, vlevo a vpravo. Každé je buď stisknuté, nebo uvolněné. V Rychlých propojeních dává osa směrové podložky −1, 0 nebo +1 (**Nahoru / dolů** nebo **Vlevo / vpravo**), což se hodí pro pohyby po krocích, třeba u háku jeřábu.

## Posuvník a Vert. posuvník {#slider-and-ver-slider}

Jezdec, který se pohybuje po vodorovné nebo svislé dráze.

- **Návrat na nulu**: jezdec se po puštění vrátí zpět (jako plyn), místo aby zůstal, kde jste ho nechali (jako nastavení rychlosti vlaku).
- **Záporné hodnoty**: nula je uprostřed, takže posuvník dává záporné i kladné hodnoty (couvání a jízdu vpřed).
- **Kroková hodnota**: posuvník se pohybuje po krocích.

## Otočný knoflík {#rotary-knob}

Kulatý knoflík, podobný ovladači hlasitosti, ve skupině **Posuvníky** každého placeného motivu. Otáčíte jím jedním prstem kolem jeho středu: otočí se asi o 135° na každou stranu a zůstane tam, kde ho necháte.

- **Kroky s aretací (0 = plynule)** (0–24): s kroky knoflík cvaká z jedné polohy do další.
- **Nula uprostřed (-100..100)**: knoflík dává −100 až 100 s nulou uprostřed místo 0 až 100.
- Bloky: *když otočný ovladač … otočen / stisknut / uvolněn / otočen na minimum / otočen na maximum*, *hodnota otočného ovladače …*, *otočný ovladač … stisknut / na minimu / na maximu?* Viz [Ovladače na obrazovce](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- V Rychlých propojeních funguje knoflík jako [posuvník](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Základní motiv otočný knoflík nemá. Protože ho má každý placený motiv, **Změnit motiv** přepne knoflík na vzhled jiného motivu.

## Tlačítko {#button}

Stisknuté, dokud ho držíte, uvolněné, když ho pustíte. Použijte ho pro klakson nebo krátký pohyb, případně s blokem **Přepínač** v Rychlých propojeních k zapínání a vypínání.

## Přepínač {#switch}

Zůstává zapnutý nebo vypnutý: klepnutím ho přepnete. Použijte ho pro světla, režimy nebo zámek navijáku.

## Krokový spínač a Vert. krokový spínač {#step-switch-and-ver-step-switch}

Ovládací prvek **−** / **+**, který počítá kroky, jako rychlostní stupně nebo rychlostní úrovně vlaku.

- **Počet kroků**: 1 až 100 (výchozí 10).
- **Záporné hodnoty**: povolí kroky pod nulou (úrovně couvání).
- **Povolit reset**: klepnutím na hodnotu ji vrátíte na nulu.

## Monitor {#monitor}

Zobrazuje text nebo číslo z programu: rychlost, baterii, název režimu, hodnotu senzoru.

- **Rozložení textu** (jeden nebo více řádků), **Přetečení textu** (Oříznout, Zalamovat, Běžící text, Posouvat), **Maximum řádků**, možnosti posouvání, **Zarovnání textu** a **Měřítko textu**.

## Úroveň baterie, Rychloměr, Monitor náklonu {#battery-level-speedometer-tilt-monitor}

Grafické indikátory v placených motivech. Jejich hodnotu nastavuje program: baterii hubu, rychlost motoru, náklon hubu. **Monitor náklonu** má **Invertovat naklánění** a **Invertovat rolování**. Viz [Indikátory a monitory](/docs/Application/Dashboard/Indicators).

## Speciální ovládací prvky {#special-controls}

Volant, pedály, manuální nebo automatická převodovka, ruční brzda, páčka blinkrů a ovladač vlaku. Každý je samostatný produkt s mnoha styly. Viz [Speciální ovládací prvky](/docs/Application/Dashboard/SpecialControls).

## Interaktivita {#interactivity}

Každý interaktivní ovládací prvek má **Interaktivitu** (ve výchozím stavu zapnutou). Neinteraktivní ovládací prvek nereaguje na dotyky. Program může interaktivitu zapínat a vypínat, například aby zablokoval plyn, dokud neproběhne kontrola po spuštění.
