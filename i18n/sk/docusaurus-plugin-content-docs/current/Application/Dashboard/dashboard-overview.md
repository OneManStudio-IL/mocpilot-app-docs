---
id: DashboardOverview
title: Editor panela
description: "Panel MOCPilot: plocha, mriežka, horná lišta, pozadie a funkcia Späť."
---

import Screenshot from '@site/src/components/Screenshot';

# Editor panela {#dashboard-editor}

**Panel** je obrazovka, z ktorej riadite model: joysticky, posuvníky, tlačidlá, monitory a ďalšie ovládacie prvky. Každý profil má jeden panel.

Otvoríte ho tlačidlom **Panel** na hornej lište editora (na počítači ⌘2 / Ctrl+2). Na telefóne s úzkou obrazovkou je v ponuke **Viac**.

- **Telefón a tablet**: panel sa otvorí na celú obrazovku nad editorom.
- **Počítač**: panel sa otvorí vo vlastnom okne **Panel**, takže ho môžete mať vedľa programu.
- **Webový editor**: plávajúce okno, ktoré môžete presúvať a meniť jeho veľkosť.

<Screenshot name="dashboard-edit" alt="Panel v režime úprav s bodkovanou mriežkou" width={900} />

## Plocha a mriežka {#the-field-and-the-grid}

- Plocha má vždy pomer strán **2:1** a prispôsobí sa obrazovke, takže panel vyzerá rovnako na telefóne, tablete aj počítači.
- V režime úprav sa zobrazuje **bodková mriežka** so 40 × 20 bunkami. Ovládacie prvky sa prichytávajú k mriežke.
- Ovládacie prvky sa nemôžu prekrývať. Ak sa ovládací prvok nezmestí, vráti sa na pôvodné miesto.

## Horná lišta {#toolbar}

**Telefón a tablet**

| Tlačidlo | Čo robí |
|---|---|
| ← | späť do editora programu |
| Späť / Znova | vráti a zopakuje zmeny panela |
| **Vybrať** | výber niekoľkých ovládacích prvkov, ktoré potom môžete spoločne zamknúť, odomknúť, odstrániť alebo upraviť; **Hotovo** výber ukončí |
| ⚙ (Nastavenia panela) | možnosti pozadia a mriežky (nižšie) |
| **+** (Pridať ovládač, s oranžovým krúžkom) | otvorí paletu ovládačov; pozrite si [Pridanie a usporiadanie ovládacích prvkov](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Spustiť** / **Zastaviť**: spustenie a zastavenie programu |

Kým program beží, tlačidlá na úpravy sú skryté.

**Počítač a webový editor**

Horná lišta vyzerá rovnako ako v editore:

- **Vľavo**: **Domov** (zatvorí profil), ponuky **Súbor**, **Upraviť** a **Zobraziť** a za nimi **Späť** a **Znova**.
- **V strede**: názov profilu a **Bloky** (v profile s Rýchlymi prepojeniami **Prepojenia**, ⌘1 / Ctrl+1) na návrat k programu. Samotný panel tu tlačidlo nemá: je to stránka, na ktorej ste.
- **Vpravo**: **Vybrať**, **Nastavenia panela** (⚙) a oranžové tlačidlo **+ Ovládač** (Pridať ovládač). V úzkom okne sa názov profilu a tlačidlo **Bloky** skryjú a z **+ Ovládač** zostane iba **+**.

Na lište panela na počítači nie je **Spustiť**: program spúšťajte a zastavujte z editora (⌘R / Ctrl+R, ⌘. / Ctrl+.). Kým program beží, **Vybrať**, **Nastavenia panela** a **+ Ovládač** nie sú k dispozícii.

Ponuky: **Súbor** (Zavrieť profil, Otvoriť v samostatnom okne), **Upraviť** (Späť, Znova) a **Zobraziť** (Bloky ⌘1, Panel ⌘2). V samostatnom okne Panel ukazuje lišta namiesto **Domov** názov okna, ponuka **Súbor** obsahuje **Zavrieť okno** a ponuka **Zobraziť** ani tlačidlo **Bloky** tam nie sú.

## Späť a Znova {#undo-and-redo}

Panel má vlastnú históriu, oddelenú od programu. Vrátiť môžete každý presun, zmenu veľkosti, zmenu vlastnosti, pridanie aj odstránenie.

## Nastavenia panela {#dashboard-settings}

**Obrázok pozadia**: ťuknite na **Zmeniť** a zvoľte:

- **Vybrať hotové**: hotové pozadie, ktoré je súčasťou témy. Galéria ukazuje pozadia tém, ktorých ovládacie prvky sú na tomto paneli. Hotové pozadie vždy vyplní obrazovku okolo plochy, takže možnosti nižšie sa naň nevzťahujú.
- **Nahrať vlastné**: ľubovoľný obrázok z vášho zariadenia. Uloží sa do profilu.

**Odstrániť** pozadie vymaže.

<Screenshot name="dashboard-backgrounds" alt="Nastavenia panela s galériou hotových pozadí" width={900} />

Pre vlastný obrázok môžete nastaviť aj:

- **Režim vyplnenia obrázka**: Roztiahnuť, Zachovať pomer strán a prispôsobiť, Zachovať pomer strán a orezať, Dlaždice, Dlaždice zvislo, Dlaždice vodorovne alebo Vyplniť okraje.
- **Nadradená oblasť obrázka**: **Pracovná oblasť** (iba plocha) alebo **Celá obrazovka**.
- **Nepriehľadnosť obrázka**, **Povoliť rozmazanie obrázka** a **Hodnota rozmazania**: upokojí pozadie, aby ovládacie prvky vynikli.

**Skryť bodky**: skryje body mriežky, keď profil beží. V režime úprav zostávajú body viditeľné, aby ste mohli ovládacie prvky zarovnávať.

## Ovládacie prvky a program {#controls-and-the-program}

Ovládací prvok dáva hodnoty; program rozhoduje, čo s nimi urobí. Ovládací prvok, ktorý program používa, sa nedá odstrániť, kým ho program prestane používať. V Rýchlych prepojeniach odstráňte riadky, ktoré ho používajú; v Logických blokoch odstráňte jeho bloky.

## Ďalšie informácie {#read-more}

- [Pridanie a usporiadanie ovládacích prvkov](/docs/Application/Dashboard/ArrangingControls): pridávanie, presúvanie, veľkosti, zamykanie
- [Typy ovládacích prvkov](/docs/Application/Dashboard/ControlTypes)
- [Špeciálne ovládacie prvky](/docs/Application/Dashboard/SpecialControls): volant, pedále, radiaca páka, ručná brzda, smerovky, ovládač vlaku
- [Vlastnosti ovládacích prvkov](/docs/Application/Dashboard/ControlProperties)
- [Indikátory a monitory](/docs/Application/Dashboard/Indicators)
