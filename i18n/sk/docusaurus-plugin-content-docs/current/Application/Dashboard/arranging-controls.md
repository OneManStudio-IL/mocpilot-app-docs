---
id: ArrangingControls
title: Pridanie a usporiadanie ovládacích prvkov
description: "Pridávajte ovládacie prvky z palety, presúvajte ich, meňte ich veľkosť, duplikujte, zamykajte a odstraňujte."
---

import Screenshot from '@site/src/components/Screenshot';

# Pridanie a usporiadanie ovládacích prvkov {#add-and-arrange-controls}

## Pridanie ovládacieho prvku {#add-a-control}

1. Na paneli ťuknite na **+** (**Pridať ovládač**). Na počítači sa paleta otvorí vo vlastnom okne.
2. V zozname vyberte typ ovládacieho prvku. Typy sú zoskupené: **Joysticky**, **Posuvníky**, **Tlačidlá a prepínače**, **Monitory**, potom **Vozidlo a špeciálne** pre [špeciálne ovládacie prvky](/docs/Application/Dashboard/SpecialControls) a **Moje návrhy** pre návrhy, ktoré ste si uložili. Ak chcete ovládací prvok nájsť rýchlo, píšte do poľa **Hľadať ovládacie prvky**.
3. Pás vzhľadov ukazuje vybraný typ v každej [téme](/docs/Application/Themes/ThemesOverview) (pri špeciálnom ovládacom prvku všetky jeho vzhľady). Ťuknutím na vzhľad ho zobrazíte vo veľkom náhľade; môžete ho tam rovno vyskúšať.
4. Ovládací prvok nastavte v časti **Konfigurovať**: karty **Štýl** a **Nastavenia** a veľkosť.
5. Ťuknite na **Pridať na panel**. Na počítači môžete pridať niekoľko ovládacích prvkov za sebou.

<Screenshot name="controller-palette" alt="Paleta Pridať ovládač" width={900} />

Ovládací prvok sa umiestni na prvé voľné miesto a dostane odznak **NOVÝ**. Ak nie je miesto, MOCPilot vám to oznámi: uvoľnite miesto alebo zvoľte menšiu veľkosť.

Ovládacie prvky z tém, ktoré nevlastníte, namiesto **Pridať na panel** ukazujú **Kúpiť** a **Všetko s MocPilot Pro**. Pozrite si [Získanie, kúpa a aktualizácia tém](/docs/Application/Themes/GettingThemes).

## Presúvanie {#move}

V režime úprav ovládací prvok stlačte a potiahnite. Keď ho pustíte, prichytí sa k najbližšej bunke mriežky. Ak by prekrýval iný ovládací prvok, vráti sa späť.

## Veľkosti {#sizes}

Každý ovládací prvok má tri veľkosti: **S**, **M** a **L**. Zmeníte ju pomocou **Veľkosť** vo vlastnostiach ovládacieho prvku. Veľkosti v bunkách mriežky (šírka × výška):

| Ovládací prvok | S | M | L |
|---|---|---|---|
| Joystick, Smerová podložka | 7×7 | 10×10 | 13×13 |
| Posuvník | 10×3 | 14×4 | 18×5 |
| Vert. posuvník | 3×10 | 4×14 | 5×18 |
| Otočný gombík | 6×6 | 8×8 | 10×10 |
| Tlačidlo, Prepínač | 3×3 | 4×4 | 5×5 |
| Krokový spínač | 8×3 | 12×4 | 16×5 |
| Vert. krokový spínač | 3×8 | 4×12 | 5×16 |
| Monitor | 4×2 | 6×2 | 8×3 |
| Úroveň batérie, Rýchlomer | 6×6 | 8×8 | 10×10 |
| Monitor náklonu | 8×4 | 12×6 | 16×8 |
| Volant | 8×8 | 12×12 | 16×16 |
| Pedále | 11×8 | 16×12 | 21×16 |
| Manuálna prevodovka, Automatická prevodovka | 8×8 | 10×10 | 12×12 |
| Ručná brzda | 4×7 | 6×10 | 8×13 |
| Smerovky | 8×5 | 10×6 | 14×8 |
| Ovládač vlaku | 6×8 | 8×10 | 10×13 |

Celá plocha má 40 × 20 buniek. Ak sa väčšia veľkosť nezmestí, najprv presuňte susedné ovládacie prvky.

## Výber a úprava {#select-and-edit}

Ťuknutím (kliknutím) na ovládací prvok ho vyberiete a otvoríte jeho **vlastnosti**. Pozrite si [Vlastnosti ovládacích prvkov](/docs/Application/Dashboard/ControlProperties).

## Kontextová ponuka {#context-menu}

Ovládací prvok dlho podržte (dotyková obrazovka) alebo naň kliknite pravým tlačidlom (počítač):

- **Zamknúť** / **Odomknúť**
- **Vlastnosti**
- **Zmeniť motív**: prepne ovládací prvok na inú tému, ktorú vlastníte a ktorá má rovnaký typ ovládacieho prvku
- **Duplikovať**: kópia s rovnakými vlastnosťami
- **Duplikovať (Iba typ)**: nový ovládací prvok rovnakého typu s predvolenými vlastnosťami
- **Odstrániť**

Dlho podržte prázdnu časť plochy alebo na ňu kliknite pravým tlačidlom:

- **Zamknúť všetko** / **Odomknúť všetko**
- **Odstrániť N ovládačov**: odstráni všetky odomknuté ovládacie prvky

Na počítači s otvoreným panelom vlastností: **Esc** ho zatvorí, **Delete** / **Backspace** odstráni ovládací prvok, **⌘D / Ctrl+D** ho duplikuje.

## Zamykanie ovládacích prvkov {#lock-controls}

**Zamknutý** ovládací prvok sa nedá presunúť ani odstrániť, takže ho počas jazdy alebo úprav omylom neposuniete. Zobrazuje ikonu zámku. Jeden ovládací prvok zamknete z jeho ponuky alebo pomocou **Zablokovať ovládač** v jeho nastaveniach, všetky naraz pomocou **Zamknúť všetko**.

## Názvy ovládacích prvkov {#control-names}

Každý ovládací prvok má krátky názov, ktorý sa v režime úprav zobrazuje na jeho rámčeku, napríklad **JOY1**, **SLDR2** alebo **BTN1**. Program sa na ovládacie prvky odkazuje týmito názvami: v Rýchlych prepojeniach je na vstupnom bloku *JOY1* a v Logických blokoch zvolíte *JOY1* v ponuke bloku.

## Odstránenie {#delete}

Použite **Odstrániť** v ponuke alebo tlačidlo koša vo vlastnostiach. Zamknuté ovládacie prvky sa nedajú odstrániť. Ovládací prvok, ktorý program používa, sa nedá odstrániť, kým neodstránite jeho riadky alebo bloky.
