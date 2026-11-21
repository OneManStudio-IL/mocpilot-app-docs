---
id: ControlProperties
title: Vlastnosti ovládacích prvkov
description: "Vo vlastnostiach ovládacieho prvku zmeníte jeho veľkosť, farbu, ikonu, vzhľad, správanie a tému."
---

import Screenshot from '@site/src/components/Screenshot';

# Vlastnosti ovládacích prvkov {#control-properties}

V režime úprav ťuknutím (kliknutím) na ovládací prvok otvoríte jeho vlastnosti.

- **Telefón a tablet**: panel nad panelom ovládania; zatvoríte ho ťuknutím mimo neho.
- **Počítač**: bočný panel; kým je otvorený, môžete na paneli ďalej pracovať.

<Screenshot name="controller-properties" alt="Panel vlastností ovládacieho prvku s kartami Štýl a Nastavenia" width={900} />

V hlavičke je názov ovládacieho prvku (napríklad **JOY1**), tlačidlo koša, ponuka duplikovania a **OK**.

## Karta Štýl {#style-tab}

- **Veľkosť**: S, M alebo L. Pozrite si [veľkosti](/docs/Application/Dashboard/ArrangingControls#sizes).
- **Akcentová farba**: hlavná farba ovládacieho prvku.
- **Ikona**: obrázok na ovládacom prvku (tlačidlá, prepínače, monitory), na výber z viac ako 260 ikon.
- **Vzhľad**: vzhľad [špeciálneho ovládacieho prvku](/docs/Application/Dashboard/SpecialControls), napríklad štýl volantu.
- Možnosti témy, podľa témy: napríklad **Farebný uhlík**, **Farebné rámiky** a **Zobraziť pretekárske čiary** v téme Preteky, **Počet segmentov indikátora** v téme Stavebné stroje, **Zobraziť hodnoty** v téme Aura.
- **Zmeniť motív**: prepne ovládací prvok na inú tému, ktorú vlastníte a ktorá má rovnaký typ ovládacieho prvku.

## Karta Nastavenia {#settings-tab}

Spoločné nastavenia:

- **Zablokovať ovládač**: zamknutý ovládací prvok sa nedá presunúť ani odstrániť.
- **Interaktivita**: neinteraktívny ovládací prvok nezaregistruje žiadne stlačenia.

Nastavenia jednotlivých typov:

| Ovládací prvok | Nastavenia |
|---|---|
| Joystick | **Typ osí**: Obe osi (X, Y), Iba horizontálne (X), Iba vertikálne (Y) |
| Posuvník, Vert. posuvník | **Návrat na nulu**, **Záporné hodnoty**, **Kroková hodnota** |
| Otočný gombík | **Kroky s aretáciou (0 = plynulo)** (0–24), **Nula v strede (-100..100)** |
| Krokový spínač, Vert. krokový spínač | **Počet krokov** (1–100), **Záporné hodnoty**, **Povoliť reset** |
| Monitor | **Rozloženie textu**, **Pretečenie textu**, **Maximum riadkov**, **Smer posúvania**, **Rýchlosť posúvania**, **Zobraziť posúvač**, **Interaktívne posúvanie**, **Zarovnanie textu**, **Mierka textu** |
| Monitor náklonu | **Invertovať naklon**, **Invertovať rolovanie** |
| Volant | **Uhol volantu** (20–120°), **Zvukové efekty** |
| Pedále | **Zvukové efekty** |
| Manuálna prevodovka | **Počet prevodových stupňov** (2–6) |
| Automatická prevodovka | **Počet prevodových stupňov** (2–8) |
| Smerovky | **Výstupy smeroviek blikajú**; na karte Štýl **Ikona: left**, **Ikona: light**, **Ikona: right** |

Číselné nastavenia majú tlačidlo **Obnoviť**, ktoré vráti predvolenú hodnotu.

## Zmena vlastností z programu {#change-properties-from-the-program}

V Logických blokoch môžu bloky meniť ovládací prvok počas behu programu: nastaviť jeho farbu, zapnúť alebo vypnúť jeho interaktivitu, zobrazovať hodnoty na monitoroch. Pozrite si [Bloky ovládačov na obrazovke](/docs/Application/BlockBuilder/Blocks/DashboardControllers).
