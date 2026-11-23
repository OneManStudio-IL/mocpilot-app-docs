---
id: SpecialControls
title: Špeciálne ovládacie prvky
description: "Volant, pedále, radiaca páka, ručná brzda, smerovky a ovládač vlaku: ako ich používať, ich nastavenia, vzhľady, hodnoty a bloky."
---

import Screenshot from '@site/src/components/Screenshot';

# Špeciálne ovládacie prvky {#special-controls}

Špeciálne ovládacie prvky vyzerajú a fungujú ako skutočné: volant, pedále, radiaca páka, ručná brzda, páčka smeroviek, rozdeľovacia prevodovka a ovládač lokomotívy. Každý z nich je samostatný produkt: kúpte si tie, ktoré potrebujete, alebo ich získajte všetky s [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Panel s volantom, pedálmi, radiacou pákou, ručnou brzdou, smerovkami a ovládačom vlaku" width={900} />

| Ovládací prvok | Produkt | Názov na paneli | Čo dáva programu |
|---|---|---|---|
| [Volant](#steering-wheel) | Volant | STWHEEL | uhol natočenia, klaksón |
| [Pedále](#pedals) | Pedále | PDLS | plyn a brzdu |
| [Manuálna prevodovka](#gear-shifter) | Radiaca páka | GEAR | stupeň: R, N, 1…6 |
| [Automatická prevodovka](#gear-shifter) | Radiaca páka | GEARA | volič: P, R, N, D |
| [Ručná brzda](#handbrake) | Ručná brzda | HBRK | sila, zatiahnutá |
| [Smerovky](#turn-signals) | Smerovky | STALK | ľavá smerovka, pravá smerovka, svetlá |
| [Rozdeľovacia prevodovka](#transfer-case) | Rozdeľovacia prevodovka | XFER | režim pohonu: 2H, 4H, N, 4L; uzávierky diferenciálov |
| [Ovládač vlaku](#train-controller) | Ovládač vlaku | TRTHR | jazdný stupeň, smer, ťah |

**Otočný gombík** nie je samostatný produkt: je súčasťou každej platenej témy. Pozrite si [Typy ovládacích prvkov](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Pridanie špeciálneho ovládacieho prvku {#add-a-special-control}

1. Otvorte panel a ťuknite na **+** (**Pridať ovládač**; na počítači **+ Ovládač**).
2. V zozname typov ovládacích prvkov prejdite na **Vozidlo a špeciálne** a vyberte ovládací prvok.
3. Pás vzhľadov ukazuje všetky jeho vzhľady. Vyberte jeden a potom ovládací prvok nastavte v časti **Konfigurovať**.
4. Ťuknite na **Pridať na panel**. Pri ovládacom prvku, ktorý ešte nevlastníte, ťuknite na **Kúpiť** alebo **Všetko s MocPilot Pro**.

<Screenshot name="special-control-looks" alt="Paleta Pridať ovládač s vybraným volantom a jeho vzhľadmi v páse vzhľadov" width={900} />

## Vzhľady {#looks}

Každý špeciálny ovládací prvok má mnoho **vzhľadov**. Väčšina z nich zodpovedá niektorej platenej téme (Preteky, Aura, Klasický, Hologram a ďalšie), takže volant, radiaca páka aj ručná brzda môžu ladiť so zvyškom panela. Vzhľad môžete kedykoľvek zmeniť: vyberte ovládací prvok a na karte **Štýl** zvoľte iný v časti **Vzhľad**. Vzhľad mení iba obrázok: hodnoty, bloky aj program zostávajú rovnaké.

Niektoré vzhľady pri výbere nastavia aj akcentovú farbu, ktorá k nim pasuje.

## Nastavenia všetkých špeciálnych ovládacích prvkov {#settings-of-all-special-controls}

- **Vzhľad** (karta Štýl): pozrite vyššie.
- **Akcentová farba** (karta Štýl): radiaca páka, ručná brzda, smerovky, rozdeľovacia prevodovka a ovládač vlaku.
- **Zablokovať ovládač** a **Interaktivita** (karta Nastavenia), ako pri každom ovládacom prvku. Pozrite si [Vlastnosti ovládacích prvkov](/docs/Application/Dashboard/ControlProperties).

## Volant {#steering-wheel}

Položte prst na volant a otáčajte ním okolo jeho stredu. Keď ho pustíte, vráti sa do stredu. Stlačením stredu volantu zatrúbite klaksónom: volant sa pritom neotáča.

**Nastavenia**

- **Uhol volantu** (20–120°, predvolene 60°): ako ďaleko musíte volant otočiť, aby ste dosiahli plné natočenie. Nemení hodnoty, ktoré dostáva program.
- **Zvukové efekty**: zvuk klaksónu a zvuky, ktoré program prehráva z volantu. Zvuk aplikácie musí byť zapnutý.

**Hodnoty**: uhol natočenia od −100 (úplne vľavo) cez 0 po 100 (úplne vpravo); klaksón je 100, kým ho držíte, inak 0.

**Vzhľady**: Terénne vozidlo, Ťažký nákladný automobil, Superauto, Retro drevo, Pretekársky volant, Rally semiš, Terénny úžitkový, Koncept so žiarou, Ťahač, Rodinný sedan, Mestské auto, Bugina, Klasická 4x4, Stavebné stroje, Hi-Fi zvuk, Aura, Kocky, Jadro obvodu, Hlboký vesmír, Ťahač (Heavy Haul), Neo Orbit, Terénna kabína, Preteky, Rock Crawler, Taktický, Klasický, Západ slnka, Miami, Hi-tech, Hologram.

**Zvuky** pre program: Klaksón osobného auta, Húkačka nákladného auta, Klaksón športového auta.

**Rýchle prepojenia**: vstup [Volant](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) s kanálmi **Uhol natočenia volantu** a **Klaksón**.

## Pedále {#pedals}

Brzdový pedál je vľavo, plynový vpravo. Stlačte pedál prstom: čím vyššie máte prst na pedáli, tým silnejšie je stlačený. Pri spodnom okraji je stlačený jemne, pri hornom naplno. Keď ho pustíte, pedál sa vráti hore. Oba pedále môžete stlačiť naraz.

**Nastavenia**: **Zvukové efekty**: umožní programu prehrávať zvuky pedálov. Zvuk aplikácie musí byť zapnutý.

**Hodnoty**: plyn a brzda, každá od 0 do 100.

**Vzhľady**: Terénne vozidlo, Ťažký nákladný automobil, Superauto, Retro chróm, Karbón a červená, Pretekárske vŕtané, Terénny úchop, Koncept so žiarou, Ťahač, Rodinný sedan, Mestské auto, Bugina, Klasická 4x4, Stavebné stroje, Hi-Fi zvuk, Aura, Kocky, Jadro obvodu, Hlboký vesmír, Ťahač (Heavy Haul), Neo Orbit, Terénna kabína, Preteky, Rock Crawler, Taktický, Klasický, Západ slnka, Miami, Hi-tech, Hologram.

**Zvuky** pre program: Brzda osobného auta, Brzda športového auta, Vzduchová brzda nákladného auta, Cúvací pípač.

**Rýchle prepojenia**: vstup [Pedále](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) s kanálmi **Plynový pedál** a **Brzdový pedál**.

:::tip Samotné pedále z modelu auto neurobia
Pedále dávajú iba to, ako silno je každý z nich stlačený. Ak riadok posiela plyn priamo do motora, motor beží presne tak, ako ďaleko je pedál stlačený. Ak chcete model, ktorý postupne zrýchľuje, ide zotrvačnosťou, brzdí a cúva, použite [simulátor vozidla](#vehicle-simulator).
:::

## Radiaca páka {#gear-shifter}

Produkt **Radiaca páka** obsahuje dva ovládacie prvky: **Manuálna prevodovka** a **Automatická prevodovka**.

### Manuálna prevodovka {#manual-gearbox}

Kulisa v tvare H so spiatočkou a až šiestimi stupňami dopredu. Potiahnite hlavicu pozdĺž stredného radu a hore alebo dole do stupňa. Keď ju pustíte, hlavica zapadne do najbližšieho stupňa alebo späť do neutrálu.

- **Počet prevodových stupňov** (2–6, predvolene 6, karta Nastavenia): kulisa sa podľa neho zmení. Spiatočka je vždy v ľavom stĺpci, neutrál uprostred.
- **Hodnoty**: −1 = spiatočka (R), 0 = neutrál (N), 1…6 = stupne dopredu.

### Automatická prevodovka {#automatic-gearbox}

Volič so štyrmi polohami: **P** (parkovanie), **R** (spiatočka), **N** (neutrál) a **D** (jazda). Ako sa ovláda, závisí od vzhľadu:

| Volič | Ako ho používať | Vzhľady |
|---|---|---|
| Páka | posúvajte rukoväť pozdĺž drážky; zastaví sa v najbližšej polohe | Hi-tech |
| Otočný volič | otáčajte voličom prstom; zacvakne do P, R, N alebo D | Klasický, Hlboký vesmír, Taktický, Stavebné stroje, Hi-Fi zvuk, Aura, Jadro obvodu, Rock Crawler, Terénna kabína, Neo Orbit, Terénne auto, Drič, Koncept, Sedan, Mestské auto, Klasická 4x4 |
| Tlačidlá | ťuknite na P, R, N alebo D | Preteky, Ťahač (Heavy Haul), Kocky, Ťažký nákladný automobil, Retro, Rely, Superauto, Formula, Diaľkový ťahač, Bugina, Západ slnka, Miami, Hologram |

- **Počet prevodových stupňov** (2–8, predvolene 6, karta Nastavenia): koľko stupňov [simulátor vozidla](#vehicle-simulator) v polohe D prechádza. Keď simulátor zvolí stupeň, volič ho ukáže, napríklad **D3**.
- **Hodnoty**: −2 = P, −1 = R, 0 = N, 1 = D. Všetky tri voliče dávajú rovnaké hodnoty, takže program funguje s akýmkoľvek vzhľadom.

Obe prevodovky majú rovnaké vzhľady: Klasický, Preteky, Hlboký vesmír, Taktický, Ťahač (Heavy Haul), Stavebné stroje, Hi-Fi zvuk, Aura, Jadro obvodu, Rock Crawler, Terénna kabína, Kocky, Neo Orbit, Ťažký nákladný automobil, Retro, Rely, Terénne auto, Superauto, Formula, Drič, Koncept, Diaľkový ťahač, Sedan, Mestské auto, Bugina, Západ slnka, Klasická 4x4, Miami, Hi-tech, Hologram.

**Rýchle prepojenia**: vstup [Radiaca páka](/docs/Application/Links/Blocks/InputBlocks#controller-gear) s kanálmi **Prevodový stupeň** (manuálna: stupeň vzhľadom na počet stupňov, spiatočka záporná; automatická: smer) a **Smer (R − / dopredu +)**: −1 na spiatočke, 0 v neutráli a na parkovaní, +1 v ktoromkoľvek stupni dopredu.

## Ručná brzda {#handbrake}

Páka ručnej brzdy. Uchopte páku za rukoväť a potiahnite ju nadol. Sila brzdenia zodpovedá tomu, ako ďaleko ju potiahnete. Keď ju pustíte, páka sa vráti späť.

Ak ju chcete **zatiahnuť**, potiahnite páku úplne a potom posuňte prst pozdĺž páky k jej základni: rukoväť sa posunie nadol a páka zostane zatiahnutá. Zatiahnutú páku **uvoľníte** ťuknutím na ovládací prvok alebo potiahnutím páky späť.

**Hodnoty**: sila od 0 do 100 a to, či je páka zatiahnutá.

**Vzhľady**: Klasický, Rely, Ťažký nákladný automobil, Retro, Hlboký vesmír, Taktický, Aura, Ťahač (Heavy Haul), Stavebné stroje, Hi-Fi zvuk, Neo Orbit, Terénna kabína, Preteky, Kocky, Jadro obvodu, Rock Crawler, Terénne auto, Superauto, Formula, Drič, Koncept, Diaľkový ťahač, Sedan, Mestské auto, Bugina, Západ slnka, Klasická 4x4, Miami, Hi-tech, Hologram.

**Rýchle prepojenia**: vstup [Ručná brzda](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) s kanálmi **Ručná brzda zatiahnutá** (zap/vyp, ako prepínač) a **Sila ručnej brzdy**.

## Smerovky {#turn-signals}

Páčka smeroviek so spínačom svetiel.

- Potiahnite páčku **hore** pre ľavú smerovku a **dole** pre pravú. Zostane tam, kde ju necháte; smerovku vypnete potiahnutím späť do stredu.
- **Ťuknutím** na páčku alebo tlačidlo svetlometu zapnete alebo vypnete svetlá. Páčka sa pritom nepohne.

**Nastavenia**

- **Ikona: left**, **Ikona: light**, **Ikona: right** (karta Štýl): ikony kontroliek.
- **Výstupy smeroviek blikajú** (karta Nastavenia, predvolene zapnuté): výstupy smeroviek blikajú spolu s kontrolkou na páčke, takže svetlo k nim pripojené bliká samo. Keď je to vypnuté, výstupy svietia nepretržite, kým je smerovka zapnutá. Bloky vždy vidia ustálený stav.

**Hodnoty**: ľavá smerovka, pravá smerovka a svetlá, každá zapnutá alebo vypnutá.

**Vzhľady**: Klasický, Preteky, Hlboký vesmír, Taktický, Ťahač (Heavy Haul), Stavebné stroje, Hi-Fi zvuk, Aura, Jadro obvodu, Rock Crawler, Terénna kabína, Kocky, Neo Orbit, Ťažký nákladný automobil, Retro, Rely, Terénne auto, Superauto, Formula, Drič, Koncept, Diaľkový ťahač, Sedan, Mestské auto, Bugina, Západ slnka, Klasická 4x4, Miami, Hi-tech, Hologram.

**Rýchle prepojenia**: vstup [Smerovky](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) s kanálmi **Smerovky (ľavá − / pravá +)** (dve svetlá s opačnou polaritou na jednom porte), **Ľavá smerovka**, **Pravá smerovka** a **Svetlo**.

## Rozdeľovacia prevodovka {#transfer-case}

Rozdeľovacia prevodovka terénneho vozidla určuje, ktoré kolesá motor poháňa. Ovládací prvok má volič so štyrmi polohami a spínače uzávierok diferenciálov:

| Poloha | Čo znamená |
|---|---|
| **2H** | pohon dvoch kolies: poháňané sú iba zadné kolesá, na bežné cesty |
| **4H** | pohon všetkých kolies: poháňané sú všetky kolesá, do blata, piesku a snehu |
| **N** | neutrál: motor je od kolies odpojený |
| **4L** | pohon všetkých kolies s **redukciou**: pomaly a silno, na strmé stúpania a lezenie po skalách |

**Uzávierky diferenciálov** zabezpečia, že sa kolesá jednej nápravy (**predná**, **zadná**) alebo obe nápravy (**stredová**) otáčajú spolu, takže koleso, ktoré stratilo priľnavosť, sa len neprekĺzava naprázdno.

<Screenshot name="transfer-case-dashboard" alt="Ovládací prvok rozdeľovacej prevodovky na paneli: volič, spínače uzávierok a displej" width={700} />

### Ako ju používať {#transfer-case-use}

- **Volič**: polohy zhora nadol: 2H, 4H, N, 4L. Podľa vzhľadu je to **posuvník** (ryhovaný gombík v drážke: posúvajte ho po nej; keď ho pustíte, zapadne do najbližšej polohy) alebo **otočný volič** (otáčajte ním; zacvakáva do polôh). Drážka je rovná, takže zo 4H sa do 4L dostanete iba cez N, ako pri skutočnej rozdeľovacej prevodovke s pákou.
- **Uzávierky**: rad spínačov pre prednú, stredovú a zadnú uzávierku: páčkové spínače s kontrolkou alebo aretačné tlačidlá, ktorých krúžok sa rozsvieti v akcentovej farbe, podľa vzhľadu. Ťuknutím na spínač uzávierku zapnete, ďalším ťuknutím ju uvoľníte.
- **Displej**: označenia 2H, 4H, N a 4L pri voliči sa nemenia; displej ukazuje zvolenú polohu a zapnuté uzávierky (**F**, **C**, **R**) v akcentovej farbe.

### Nastavenia {#transfer-case-settings}

Na karte **Nastavenia**:

- **Neutrál (N)** (predvolene zapnuté): vypnite pre volič iba s polohami 2H, 4H a 4L.
- **Uzávierka predného diferenciálu** (zapnuté), **Uzávierka stredového diferenciálu** (vypnuté), **Uzávierka zadného diferenciálu** (zapnuté): ktoré spínače uzávierok ovládací prvok zobrazí. Ak ich je menej ako tri, presunú sa do stredu radu.
- **Predná a stredová uzávierka len v 4WD** (zapnuté): predná a stredová uzávierka fungujú iba v 4H a 4L, ako v skutočnom aute. V 2H sa ťuknutie na ne odmietne (spínač červeno blikne) a preradenie do 2H ich uvoľní. N ich ponechá tak, ako sú. Zadná uzávierka funguje v akejkoľvek polohe.

### Hodnoty {#transfer-case-values}

- **Poloha**: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L.
- **Pohon všetkých kolies**: zapnutý v 4H a 4L. **Redukcia**: zapnutá v 4L.
- Každá uzávierka: zapnutá alebo vypnutá.

**Vzhľady**: pre každú tému je jeden vzhľad pomenovaný podľa nej: Klasický, Klasická 4x4, Terénne auto a po jednom pre každú platenú tému. Niektoré vzhľady majú posuvník, iné otočný volič. **Hologram** vykreslí celý ovládací prvok ako jednofarebný obrys v akcentovej farbe.

**Rýchle prepojenia**: vstup [Rozdeľovacia prevodovka](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase) s kanálmi **Pohon všetkých kolies**, **Redukcia**, **Uzávierka predného diferenciálu**, **Uzávierka stredového diferenciálu** a **Uzávierka zadného diferenciálu** (každý zapnuté/vypnuté, ako spínač). Vstup [Vozidlo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) preberá celú rozdeľovaciu prevodovku v nastavení **Rozdeľovacia prevodovka**.

## Ovládač vlaku {#train-controller}

Jazdný ovládač lokomotívy s jazdnou pákou a smerovou pákou.

- **Jazdná páka**: potiahnite páku hore alebo dole. Má 8 jazdných stupňov (0–8) a zostane na stupni, kde ju necháte.
- **Smerová páka**: potiahnite jej hlavicu hore pre **dopredu** alebo dole pre **dozadu**; stred je **neutrál**. Hlavica preskakuje z polohy do polohy a nikdy nezostane medzi nimi. Ako v skutočnej kabíne sa pohne, iba keď je jazdná páka na 0.

**Hodnoty**: jazdný stupeň (0–8), smerová páka (1 = dopredu, 0 = neutrál, −1 = dozadu) a **ťah**: stupeň ÷ 8 × 100 so znamienkom smeru, od −100 do 100. Ťah môže priamo poháňať vlakový motor.

**Vzhľady**: Originál, Stavebné stroje, Hi-Fi zvuk, Aura, Kocky, Bugina, Jadro obvodu, Mestské auto, Klasický, Koncept, Hlboký vesmír, Terénne auto, Ťahač (Heavy Haul), Klasická 4x4, Ťažký nákladný automobil, Miami, Neo Orbit, Superauto, Drič, Terénna kabína, Preteky, Rely, Rock Crawler, Sedan, Západ slnka, Taktický, Diaľkový ťahač, Retro, Formula, Hi-tech, Hologram.

**Rýchle prepojenia**: vstup [Posuvník](/docs/Application/Links/Blocks/InputBlocks#controller-train); dáva ťah.

## Bloky {#blocks}

Každý špeciálny ovládací prvok pridáva vlastné bloky do kategórie **Ovládače na obrazovke** v Logických blokoch:

| Ovládací prvok | Udalosti | Hodnoty |
|---|---|---|
| Volant | *keď volant … pohnutý / stlačený / pustený* | *volant …*, *volant … stlačený / pustený?* |
| Pedále | *keď pedále … akýkoľvek / brzda / zrýchlenie pohnutý / stlačený / pustený* | *pedále … zrýchlenie / brzda*, *pedál … stlačený / pustený?* |
| Prevodovky | *keď prevodovka … preradí / preradí hore / preradí dole / zaradí neutrál / spiatočku / parkovanie* | *prevodový stupeň …*, *prevodovka … v neutráli / na spiatočke / na rýchlosti vpred / na parkovaní?*, *prevodové stupne …* |
| Ručná brzda | *keď ručná brzda … ťahaná / zatiahnutá / uvoľnená / pustená* | *sila ručnej brzdy …*, *ručná brzda … zatiahnutá / uvoľnená / ťahaná?* |
| Smerovky | *keď smerovky … ľavá smerovka / pravá smerovka / svetlá sa zapne / vypne* | *smerovky … ľavá smerovka / pravá smerovka / svetlá je zapnutý?* |
| Rozdeľovacia prevodovka | *keď rozdeľovacia prevodovka … 2H / 4H / N / 4L / pohon všetkých kolies / redukcia / predná uzávierka / stredová uzávierka / zadná uzávierka sa zapne / sa vypne* | *rozdeľovacia prevodovka … [to isté] je zapnuté?*, *poloha rozdeľovacej prevodovky …* |
| Ovládač vlaku | *keď jazdný ovládač … zmenil stupeň / stupeň zvýšený / stupeň znížený, jazda vypnutá, smerová páka prestavená, páka pustená* | *jazdný ovládač … ťah / jazdný stupeň / smerová páka*, *jazdný ovládač … vpred / vzad / v neutráli / na stupni 0?* |

Volant a pedále majú aj blok *zvuk … z …*: vyberie jeden z ich zvukov pre bloky **Zvuky**. Podrobnosti: [Ovládače na obrazovke](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Simulátor vozidla {#vehicle-simulator}

Špeciálne ovládacie prvky dávajú iba surový vstup. **Simulátor vozidla** premení pedále, radiacu páku a ručnú brzdu na model, ktorý jazdí ako auto: zrýchľuje so zotrvačnosťou, ide voľnobehom, brzdí, cúva, v polohe D radí a drží na ručnej brzde.

- **Rýchle prepojenia**: použite vstup [Vozidlo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Zvoľte **Pedále**, **Radiaca páka**, **Ručná brzda** a **Rozdeľovacia prevodovka** z vášho panela, **Typ vozidla** (Osobné auto, Terénne vozidlo, Športové auto, Nákladné auto) a **Výstup**: **Rýchlosť**, **Otáčky motora (ot/min)**, **Brzdenie** alebo **Na ručnej brzde**.
- **Logické bloky**: keď sú na paneli pedále, radiaca páka alebo ručná brzda, objaví sa kategória **Simulátor**. Vytvorte v nej vozidlo (**Vytvoriť vozidlo**) a blok *jazdiť* umiestnite pod udalosť. Do jeho otvorov vložte hodnoty: *plyn*, *brzda*, *prevodový stupeň*, *z* (počet stupňov; sem pasuje blok *prevodové stupne …*), *ručná brzda*, *zatiahnutá* a *rozdeľovacia prevodovka* (sem pasuje blok *poloha rozdeľovacej prevodovky …*; nechajte ho prázdny, ak model rozdeľovaciu prevodovku nemá). Ďalšie bloky Simulátora nastavujú typ vozidla, zotrvačnosť motora a rýchlosť cúvania, čítajú rýchlosť, otáčky motora a stupeň a reagujú, keď sa vozidlo rozbehne, zastaví, brzdí alebo preradí.

Ako simulátor jazdí:

- **Plyn** zrýchľuje model so zotrvačnosťou; keď ho pustíte, model ide voľnobehom. **Brzda** ho spomaľuje.
- **Bez prevodovky** model po zastavení začne cúvať, ak držíte brzdu.
- **Manuálna prevodovka**: R cúva, N nejazdí. Voliteľne každý stupeň obmedzuje maximálnu rýchlosť.
- **Automatická prevodovka**: R cúva, N nejazdí, P drží model ako zatiahnutá ručná brzda. V polohe D simulátor sám radí hore aj dole a stupeň ukazuje na voliči.
- **Ručná brzda**: jej sila sa pripočíta k brzdeniu; zatiahnutá ručná brzda dokáže model udržať.
- **Rozdeľovacia prevodovka**: v 2H a 4H model jazdí, akoby tam nebola. **N** nejazdí: model ide voľnobehom a brzda ho iba spomaľuje, bez cúvania. **4L** obmedzuje rýchlosť na 40 % dopredu aj dozadu a otáčky motora sú zodpovedajúco vyššie; model, ktorý ide rýchlejšie, po preradení do 4L spomalí na tento limit. Uzávierky diferenciálov jazdu simulátora nemenia: sú to iba výstupy ovládacieho prvku.
- **Typ vozidla**: nákladné auto je ťažšie (väčšia zotrvačnosť) a má vzduchovú brzdu; športové auto reaguje rýchlo a cúva rýchlejšie.

Posledné pedále, radiaca páka alebo ručná brzda sa nedajú odstrániť, kým program používa bloky Simulátora.
