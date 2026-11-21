---
id: ControlTypes
title: Typy ovládacích prvkov
description: "Joystick, smerová podložka, posuvníky, otočný gombík, tlačidlá, prepínače, krokové spínače, monitory a špeciálne ovládacie prvky."
---

# Typy ovládacích prvkov {#control-types}

Každá [téma](/docs/Application/Themes/ThemesOverview) kreslí tú istú sadu typov ovládacích prvkov vo vlastnom štýle. Bezplatná téma **Základný** ich má deväť; každá platená téma pridáva **Otočný gombík** a tri grafické monitory. Volanty, pedále, radiace páky a ostatné [špeciálne ovládacie prvky](/docs/Application/Dashboard/SpecialControls) sú samostatné produkty.

| Ovládací prvok | Názov na paneli | Čo dáva programu | K dispozícii v |
|---|---|---|---|
| Joystick | JOY | osi X a Y | všetkých témach |
| Smerová podložka | DPAD | tlačidlá hore / dole / vľavo / vpravo | všetkých témach |
| Posuvník | SLDR | hodnotu | všetkých témach |
| Vert. posuvník | VSLDR | hodnotu | všetkých témach |
| Otočný gombík | DIAL | hodnotu | platených témach |
| Tlačidlo | BTN | stlačené / pustené | všetkých témach |
| Prepínač | SWCH | zapnuté / vypnuté | všetkých témach |
| Krokový spínač | STPR | číslo kroku | všetkých témach |
| Vert. krokový spínač | VSTPR | číslo kroku | všetkých témach |
| Monitor | MNTR | zobrazuje text alebo hodnotu | všetkých témach |
| Úroveň batérie | MNTBT | zobrazuje úroveň | platených témach |
| Rýchlomer | MNTSP | zobrazuje rýchlosť | platených témach |
| Monitor náklonu | MNTLT | zobrazuje náklon dopredu a do strany | platených témach |
| Volant, pedále, prevodovky, ručná brzda, smerovky, ovládač vlaku | STWHEEL, PDLS, GEAR, GEARA, HBRK, STALK, TRTHR | pozrite si [Špeciálne ovládacie prvky](/docs/Application/Dashboard/SpecialControls) | špeciálnych produktoch |

Názov na paneli dostane číslo: prvý joystick je **JOY1**, druhý **JOY2**.

## Joystick {#joystick}

Páčka, ktorá sa vracia do stredu. Dáva hodnotu **X** (vľavo/vpravo) a **Y** (hore/dole); stred je nula.

- **Typ osí**: **Obe osi (X, Y)**, **Iba horizontálne (X)** alebo **Iba vertikálne (Y)**. Jednoosový joystick sa ovláda ľahšie, keď iba jazdí alebo iba riadi.
- Typické použitie: Y na jazdu a X na riadenie, alebo jeden joystick pre každý pás tanku.

## Smerová podložka {#directional-pad}

Štyri tlačidlá: hore, dole, vľavo a vpravo. Každé je buď stlačené, alebo pustené. V Rýchlych prepojeniach dáva os D-padu hodnotu −1, 0 alebo +1 (**Hore / dole** alebo **Vľavo / vpravo**), čo sa hodí na pohyby po krokoch, napríklad pre hák žeriavu.

## Posuvník a Vert. posuvník {#slider-and-ver-slider}

Jazdec, ktorý sa pohybuje po vodorovnej alebo zvislej dráhe.

- **Návrat na nulu**: jazdec sa po pustení vráti späť (ako plyn), namiesto toho, aby zostal tam, kde ste ho nechali (ako nastavenie rýchlosti vlaku).
- **Záporné hodnoty**: nula je uprostred, takže posuvník dáva záporné aj kladné hodnoty (dozadu a dopredu).
- **Kroková hodnota**: posuvník sa pohybuje po krokoch.

## Otočný gombík {#rotary-knob}

Okrúhly gombík, ako ovládač hlasitosti, v skupine **Posuvníky** každej platenej témy. Otáčajte ním jedným prstom okolo jeho stredu: otočí sa asi o 135° na každú stranu a zostane tam, kde ho necháte.

- **Kroky s aretáciou (0 = plynulo)** (0–24): s krokmi gombík preskakuje z jednej aretácie na ďalšiu.
- **Nula v strede (-100..100)**: gombík dáva −100 až 100 s nulou uprostred namiesto 0 až 100.
- Bloky: *keď otočný ovládač … je otočený / stlačený / pustený / otočený na minimum / otočený na maximum*, *hodnota otočného ovládača …*, *otočný ovládač … stlačený / na minime / na maxime?* Pozrite si [Ovládače na obrazovke](/docs/Application/BlockBuilder/Blocks/DashboardControllers#rotary-knob-blocks).
- V Rýchlych prepojeniach funguje gombík ako [posuvník](/docs/Application/Links/Blocks/InputBlocks#controller-knob).

Téma Základný otočný gombík nemá. Keďže ho má každá platená téma, **Zmeniť motív** prepne gombík na vzhľad inej témy.

## Tlačidlo {#button}

Stlačené, kým ho držíte, pustené, keď ho pustíte. Použite ho na klaksón alebo krátky pohyb, prípadne s blokom **Prepínač** v Rýchlych prepojeniach na zapínanie a vypínanie niečoho.

## Prepínač {#switch}

Zostáva zapnutý alebo vypnutý: ťuknutím ho prepnete. Použite ho na svetlá, režimy alebo zámok navijaka.

## Krokový spínač a Vert. krokový spínač {#step-switch-and-ver-step-switch}

Ovládací prvok **−** / **+**, ktorý počíta kroky, napríklad prevodové stupne alebo stupne rýchlosti vlaku.

- **Počet krokov**: 1 až 100 (predvolene 10).
- **Záporné hodnoty**: povolí kroky pod nulou (stupne dozadu).
- **Povoliť reset**: ťuknutím na hodnotu ju vrátite na nulu.

## Monitor {#monitor}

Zobrazuje text alebo číslo z programu: rýchlosť, batériu, názov režimu, hodnotu senzora.

- **Rozloženie textu** (jeden alebo viac riadkov), **Pretečenie textu** (Orezať, Zalamovať, Bežiaci text, Posúvať), **Maximum riadkov**, možnosti posúvania, **Zarovnanie textu** a **Mierka textu**.

## Úroveň batérie, Rýchlomer, Monitor náklonu {#battery-level-speedometer-tilt-monitor}

Grafické indikátory v platených témach. Ich hodnotu nastavuje program: batériu hubu, rýchlosť motora, náklon hubu. **Monitor náklonu** má **Invertovať naklon** a **Invertovať rolovanie**. Pozrite si [Indikátory a monitory](/docs/Application/Dashboard/Indicators).

## Špeciálne ovládacie prvky {#special-controls}

Volant, pedále, manuálna alebo automatická prevodovka, ručná brzda, páčka smeroviek a ovládač vlaku. Každý je samostatný produkt s mnohými vzhľadmi. Pozrite si [Špeciálne ovládacie prvky](/docs/Application/Dashboard/SpecialControls).

## Interaktivita {#interactivity}

Každý interaktívny ovládací prvok má **Interaktivita** (predvolene zapnutá). Neinteraktívny ovládací prvok nereaguje na dotyky. Program môže interaktivitu zapínať a vypínať, napríklad zablokovať plyn, kým sa nedokončí kontrola pri štarte.
