---
id: SpecialControls
title: Speciální ovládací prvky
description: "Volant, pedály, řadicí páka, ruční brzda, blinkry a ovladač vlaku: jak je používat, jejich nastavení, styly, hodnoty a bloky."
---

import Screenshot from '@site/src/components/Screenshot';

# Speciální ovládací prvky {#special-controls}

Speciální ovládací prvky vypadají a fungují jako skutečné: volant, pedály, řadicí páka, ruční brzda, páčka blinkrů a ovladač lokomotivy. Každý z nich je samostatný produkt: kupte si ty, které potřebujete, nebo je získejte všechny s [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Panel s volantem, pedály, řadicí pákou, ruční brzdou, blinkry a ovladačem vlaku" width={900} />

| Ovládací prvek | Produkt | Název na panelu | Co dává programu |
|---|---|---|---|
| [Volant](#steering-wheel) | Volant | STWHEEL | úhel řízení, klakson |
| [Pedály](#pedals) | Pedály | PDLS | plyn a brzdu |
| [Manuální převodovka](#gear-shifter) | Řadicí páka | GEAR | rychlostní stupeň: R, N, 1…6 |
| [Automatická převodovka](#gear-shifter) | Řadicí páka | GEARA | volič: P, R, N, D |
| [Ruční brzda](#handbrake) | Ruční brzda | HBRK | sílu, zajištění |
| [Blinkry](#turn-signals) | Blinkry | STALK | levý blinkr, pravý blinkr, světla |
| [Ovladač vlaku](#train-controller) | Ovladač vlaku | TRTHR | stupeň výkonu, směr, tah |

**Otočný knoflík** není samostatný produkt: je součástí každého placeného motivu. Viz [Typy ovládacích prvků](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Přidání speciálního ovládacího prvku {#add-a-special-control}

1. Otevřete panel a klepněte na **+** (**Přidat ovladač**; na počítači **+ Ovladač**).
2. V seznamu typů ovládacích prvků sjeďte ke skupině **Vozidlo a speciální** a vyberte ovládací prvek.
3. Pás stylů ukazuje všechny jeho styly. Vyberte jeden a pak ovládací prvek nastavte v části **Konfigurovat**.
4. Klepněte na **Přidat na panel**. U ovládacího prvku, který ještě nevlastníte, klepněte na **Koupit** nebo **Vše s MocPilot Pro**.

<Screenshot name="special-control-looks" alt="Paleta Přidat ovladač s vybraným volantem a jeho styly v pásu stylů" width={900} />

## Styly {#looks}

Každý speciální ovládací prvek má mnoho **stylů**. Většina z nich odpovídá některému placenému motivu (Závodění, Aura, Klasický, Hologram a další), takže volant, řadicí páka i ruční brzda mohou ladit se zbytkem panelu. Styl můžete kdykoli změnit: vyberte ovládací prvek a na kartě **Styl** zvolte jiný v poli **Vzhled**. Styl mění jen obrázek: hodnoty, bloky i program zůstávají stejné.

Některé styly při výběru také nastaví akcentovou barvu, která k nim ladí.

## Nastavení všech speciálních ovládacích prvků {#settings-of-all-special-controls}

- **Vzhled** (karta Styl): viz výše.
- **Akcentová barva** (karta Styl): řadicí páka, ruční brzda, blinkry a ovladač vlaku.
- **Zablokovat ovladač** a **Interaktivita** (karta Nastavení), jako u každého ovládacího prvku. Viz [Vlastnosti ovládacích prvků](/docs/Application/Dashboard/ControlProperties).

## Volant {#steering-wheel}

Položte prst na volant a otáčejte jím kolem středu. Když ho pustíte, vrátí se do středu. Stisknutím středu volantu zatroubíte: volantem to neotočí.

**Nastavení**

- **Úhel volantu** (20–120°, výchozí 60°): jak daleko musíte volantem otočit, abyste dosáhli plného rejdu. Nemění hodnoty, které program dostává.
- **Zvukové efekty**: zvuk klaksonu a zvuky, které program přehrává z volantu. Zvuk aplikace musí být zapnutý.

**Hodnoty**: úhel řízení od −100 (plně vlevo) přes 0 do 100 (plně vpravo); klakson je 100, dokud ho držíte, jinak 0.

**Styly**: Terénní vozidlo, Těžký nákladní automobil, Superauto, Retro dřevo, Závodní volant, Rally semiš, Terénní užitkový, Koncept se září, Tahač, Rodinný sedan, Městské auto, Bugina, Klasický 4x4, Stavební stroje, Hi-Fi zvuk, Aura, Kostky, Jádro obvodu, Hluboký vesmír, Tahač, Neo Orbit, Terénní kabina, Závodění, Rock Crawler, Taktický, Klasický, Západ slunce, Miami, Hi-tech, Hologram.

**Zvuky** pro program: Klakson osobního auta, Houkačka nákladního auta, Klakson sportovního auta.

**Rychlá propojení**: vstup [Volant](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) s kanály **Úhel řízení** a **Klakson**.

## Pedály {#pedals}

Brzdový pedál je vlevo, plynový vpravo. Stiskněte pedál prstem: čím výš na pedálu prst máte, tím víc je sešlápnutý. U spodního okraje je sešlápnutý lehce, u horního úplně. Když ho pustíte, pedál se vrátí nahoru. Sešlápnout můžete oba pedály najednou.

**Nastavení**: **Zvukové efekty**: umožní programu přehrávat zvuky pedálů. Zvuk aplikace musí být zapnutý.

**Hodnoty**: plyn a brzda, každý od 0 do 100.

**Styly**: Terénní vozidlo, Těžký nákladní automobil, Superauto, Retro chrom, Karbon a červená, Závodní vrtané, Terénní úchop, Koncept se září, Tahač, Rodinný sedan, Městské auto, Bugina, Klasický 4x4, Stavební stroje, Hi-Fi zvuk, Aura, Kostky, Jádro obvodu, Hluboký vesmír, Tahač, Neo Orbit, Terénní kabina, Závodění, Rock Crawler, Taktický, Klasický, Západ slunce, Miami, Hi-tech, Hologram.

**Zvuky** pro program: Brzda osobního auta, Brzda sportovního auta, Vzduchová brzda nákladního auta, Couvací pípák.

**Rychlá propojení**: vstup [Pedály](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) s kanály **Plynový pedál** a **Brzdový pedál**.

:::tip Pedály samy auto neudělají
Pedály dávají jen to, jak moc je každý sešlápnutý. Pokud řádek posílá plyn přímo do motoru, motor běží přesně tak, jak je pedál sešlápnutý. Chcete-li model, který postupně zrychluje, jede setrvačností, brzdí a couvá, použijte [simulátor vozidla](#vehicle-simulator).
:::

## Řadicí páka {#gear-shifter}

Produkt **Řadicí páka** obsahuje dva ovládací prvky: **Manuální převodovku** a **Automatickou převodovku**.

### Manuální převodovka {#manual-gearbox}

Kulisa ve tvaru H se zpátečkou a až šesti rychlostními stupni vpřed. Táhněte hlavici po prostřední řadě a nahoru nebo dolů do rychlostního stupně. Když ji pustíte, hlavice zapadne do nejbližšího stupně nebo zpět do neutrálu.

- **Počet rychlostních stupňů** (2–6, výchozí 6, karta Nastavení): kulisa se podle něj mění. Zpátečka je vždy v levém sloupci, neutrál uprostřed.
- **Hodnoty**: −1 = zpátečka (R), 0 = neutrál (N), 1…6 = stupně vpřed.

### Automatická převodovka {#automatic-gearbox}

Volič se čtyřmi polohami: **P** (parkování), **R** (zpátečka), **N** (neutrál) a **D** (jízda). Ovládání závisí na stylu:

| Volič | Jak ho používat | Styly |
|---|---|---|
| Páka | posuňte rukojeť po drážce; zastaví se v nejbližší poloze | Hi-tech |
| Otočný volič | otáčejte voličem prstem; zacvakne do P, R, N nebo D | Klasický, Hluboký vesmír, Taktický, Stavební stroje, Hi-Fi zvuk, Aura, Jádro obvodu, Rock Crawler, Terénní kabina, Neo Orbit, Teréňák, Dříč, Koncept, Sedan, Městské auto, Klasický 4x4 |
| Tlačítka | klepněte na P, R, N nebo D | Závodění, Tahač, Kostky, Těžký nákladní automobil, Retro, Rally, Superauto, Formule, Dálkový tahač, Bugina, Západ slunce, Miami, Hologram |

- **Počet rychlostních stupňů** (2–8, výchozí 6, karta Nastavení): kolika stupni [simulátor vozidla](#vehicle-simulator) v D řadí. Když simulátor zvolí stupeň, volič ho ukáže, například **D3**.
- **Hodnoty**: −2 = P, −1 = R, 0 = N, 1 = D. Všechny tři voliče dávají stejné hodnoty, takže program funguje s jakýmkoli stylem.

Obě převodovky mají stejné styly: Klasický, Závodění, Hluboký vesmír, Taktický, Tahač, Stavební stroje, Hi-Fi zvuk, Aura, Jádro obvodu, Rock Crawler, Terénní kabina, Kostky, Neo Orbit, Těžký nákladní automobil, Retro, Rally, Teréňák, Superauto, Formule, Dříč, Koncept, Dálkový tahač, Sedan, Městské auto, Bugina, Západ slunce, Klasický 4x4, Miami, Hi-tech, Hologram.

**Rychlá propojení**: vstup [Řadicí páka](/docs/Application/Links/Blocks/InputBlocks#controller-gear) s kanály **Převod** (manuální: stupeň vzhledem k počtu stupňů, zpátečka záporně; automatická: směr) a **Směr (R − / vpřed +)**: −1 na zpátečce, 0 v neutrálu a v parkování, +1 v jakémkoli stupni vpřed.

## Ruční brzda {#handbrake}

Páka ruční brzdy. Uchopte páku za rukojeť a stáhněte ji dolů. Brzdná síla odpovídá tomu, jak daleko páku stáhnete. Když ji pustíte, páka se vrátí zpět.

Chcete-li ji **zajistit**, stáhněte páku úplně a pak posuňte prst po páce směrem k její základně: rukojeť sjede dolů a páka zůstane zajištěná. Zajištěnou páku **uvolníte** klepnutím na ovládací prvek nebo přetažením páky zpět.

**Hodnoty**: síla od 0 do 100 a to, zda je páka zajištěná.

**Styly**: Klasický, Rally, Těžký nákladní automobil, Retro, Hluboký vesmír, Taktický, Aura, Tahač, Stavební stroje, Hi-Fi zvuk, Neo Orbit, Terénní kabina, Závodění, Kostky, Jádro obvodu, Rock Crawler, Teréňák, Superauto, Formule, Dříč, Koncept, Dálkový tahač, Sedan, Městské auto, Bugina, Západ slunce, Klasický 4x4, Miami, Hi-tech, Hologram.

**Rychlá propojení**: vstup [Ruční brzda](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) s kanály **Ruční brzda zajištěna** (zapnuto/vypnuto, jako přepínač) a **Síla ruční brzdy**.

## Blinkry {#turn-signals}

Páčka blinkrů se spínačem světel.

- Táhněte páčku **nahoru** pro levý blinkr a **dolů** pro pravý. Zůstane tam, kde ji necháte; blinkr vypnete přetažením páčky zpět doprostřed.
- **Klepnutím** na páčku nebo na tlačítko světlometu zapnete nebo vypnete světla. Páčkou to nepohne.

**Nastavení**

- **Ikona: left**, **Ikona: light**, **Ikona: right** (karta Styl): ikony kontrolek.
- **Výstupy blinkrů blikají** (karta Nastavení, ve výchozím stavu zapnuto): výstupy blinkrů blikají společně s kontrolkou na páčce, takže světlo k nim připojené bliká samo. Když je to vypnuté, výstupy svítí trvale, dokud je blinkr zapnutý. Bloky vždy vidí trvalý stav.

**Hodnoty**: levý blinkr, pravý blinkr a světla, každé zapnuto nebo vypnuto.

**Styly**: Klasický, Závodění, Hluboký vesmír, Taktický, Tahač, Stavební stroje, Hi-Fi zvuk, Aura, Jádro obvodu, Rock Crawler, Terénní kabina, Kostky, Neo Orbit, Těžký nákladní automobil, Retro, Rally, Teréňák, Superauto, Formule, Dříč, Koncept, Dálkový tahač, Sedan, Městské auto, Bugina, Západ slunce, Klasický 4x4, Miami, Hi-tech, Hologram.

**Rychlá propojení**: vstup [Blinkry](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) s kanály **Blinkry (vlevo − / vpravo +)** (dvě světla opačné polarity na jednom portu), **Levý blinkr**, **Pravý blinkr** a **Světlo**.

## Ovladač vlaku {#train-controller}

Hlavní řadič lokomotivy s pákou výkonu a směrovou pákou.

- **Páka výkonu**: táhněte páku nahoru nebo dolů. Má 8 stupňů výkonu (0–8) a zůstane na stupni, kde ji necháte.
- **Směrová páka**: táhněte její hlavici nahoru pro **vpřed**, nebo dolů pro **vzad**; uprostřed je **neutrální** poloha. Hlavice skáče z polohy do polohy a nikdy nezůstane mezi nimi. Stejně jako ve skutečné kabině se pohne, jen když je páka výkonu na 0.

**Hodnoty**: stupeň výkonu (0–8), směrová páka (1 = vpřed, 0 = neutrál, −1 = vzad) a **tah**: stupeň ÷ 8 × 100 se znaménkem směru, od −100 do 100. Tahem lze přímo pohánět vlakový motor.

**Styly**: Originál, Stavební stroje, Hi-Fi zvuk, Aura, Kostky, Bugina, Jádro obvodu, Městské auto, Klasický, Koncept, Hluboký vesmír, Teréňák, Tahač, Klasický 4x4, Těžký nákladní automobil, Miami, Neo Orbit, Superauto, Dříč, Terénní kabina, Závodění, Rally, Rock Crawler, Sedan, Západ slunce, Taktický, Dálkový tahač, Retro, Formule, Hi-tech, Hologram.

**Rychlá propojení**: vstup [Posuvník](/docs/Application/Links/Blocks/InputBlocks#controller-train); dává tah.

## Bloky {#blocks}

Každý speciální ovládací prvek přidává v Logických blocích vlastní bloky do kategorie **Ovladače na obrazovce**:

| Ovládací prvek | Události | Hodnoty |
|---|---|---|
| Volant | *když volant … pohnut / stisknut / puštěn* | *volant …*, *je volant … stisknut / puštěn?* |
| Pedály | *když pedály … libovolný / brzda / plyn pohnut / stisknut / puštěn* | *pedály … plyn / brzda*, *je pedál … stisknut / puštěn?* |
| Převodovky | *když převodovka … přeřadí / přeřadí nahoru / přeřadí dolů / zařadí neutrál / zpátečku / parkování* | *převod …*, *je převodovka … v neutrálu / na zpátečce / ve stupni vpřed / v parkování?*, *rychlostní stupně z …* |
| Ruční brzda | *když ruční brzda … zatažena / zajištěna / odjištěna / puštěna* | *síla ruční brzdy …*, *je ruční brzda … zajištěna / odjištěna / zatažena?* |
| Blinkry | *když blinkry … levý blinkr / pravý blinkr / světla se zapne / vypne* | *blinkry … levý blinkr / pravý blinkr / světla zapnuto?* |
| Ovladač vlaku | *když ovladač vlaku … změna stupně / zvýšení / snížení, jízda vypnuta, směrová páka přestavena, páka puštěna* | *ovladač vlaku … tah / stupeň výkonu / směrová páka*, *je ovladač vlaku … vpřed / vzad / v neutrálu / na stupni 0?* |

Volant a pedály mají také blok *zvuk … z …*: vybere jeden z jejich zvuků pro bloky **Zvuky**. Podrobnosti: [Ovladače na obrazovce](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Simulátor vozidla {#vehicle-simulator}

Speciální ovládací prvky dávají jen surový vstup. **Simulátor vozidla** z pedálů, řadicí páky a ruční brzdy udělá model, který jezdí jako auto: zrychluje se setrvačností, jede setrvačností, brzdí, couvá, v D řadí rychlostní stupně a drží na ruční brzdě.

- **Rychlá propojení**: použijte vstup [Vozidlo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Zvolte z panelu **Pedály**, **Řadicí páku** a **Ruční brzdu**, **Typ vozidla** (Osobní auto, Terénní vozidlo, Sportovní auto, Nákladní auto) a **Výstup**: **Rychlost**, **Otáčky motoru (ot/min)**, **Brzdění** nebo **Na ruční brzdě**.
- **Logické bloky**: když jsou na panelu pedály, řadicí páka nebo ruční brzda, objeví se kategorie **Simulátor**. Vytvořte v ní vozidlo (**Vytvořit vozidlo**) a blok *jízda* umístěte pod nějakou událost. Do jeho vstupů zapojte hodnoty: *plyn*, *brzda*, *převod*, *z* (počet rychlostních stupňů; hodí se sem blok *rychlostní stupně z …*), *ruční brzda* a *zajištěna*. Další bloky Simulátoru nastavují typ vozidla, setrvačnost motoru a rychlost couvání, čtou rychlost, otáčky motoru a rychlostní stupeň a reagují, když se vozidlo rozjede, zastaví, brzdí nebo řadí.

Jak simulátor jezdí:

- **Plyn** model zrychluje se setrvačností; když ho pustíte, model jede setrvačností. **Brzda** ho zpomaluje.
- **Bez převodovky**: když model stojí a držíte brzdu, začne couvat.
- **Manuální převodovka**: R couvá, N nejede. Každý stupeň může volitelně omezovat nejvyšší rychlost.
- **Automatická převodovka**: R couvá, N nejede, P drží model jako zajištěná ruční brzda. V D simulátor řadí nahoru a dolů sám a ukazuje stupeň na voliči.
- **Ruční brzda**: její síla se přičítá k brzdění; zajištěná ruční brzda dokáže model udržet.
- **Typ vozidla**: nákladní auto je těžší (větší setrvačnost) a má vzduchovou brzdu; sportovní auto reaguje rychle a rychleji couvá.

Poslední pedály, řadicí páku nebo ruční brzdu nelze smazat, dokud program používá bloky Simulátoru.
