---
id: DashboardOverview
title: Editor panelu
description: "Panel MOCPilotu: plocha, mřížka, horní lišta, pozadí a vracení změn."
---

import Screenshot from '@site/src/components/Screenshot';

# Editor panelu {#dashboard-editor}

**Panel** je obrazovka, ze které řídíte svůj model: joysticky, posuvníky, tlačítka, monitory a další ovládací prvky. Každý profil má jeden panel.

Otevřete ho tlačítkem **Panel** na horní liště editoru (na počítači ⌘2 / Ctrl+2). Na telefonu s úzkou obrazovkou je v nabídce **Více**.

- **Telefon a tablet**: panel se otevře na celou obrazovku přes editor.
- **Počítač**: panel se otevře ve vlastním okně **Panel**, takže ho můžete mít vedle programu.
- **Webový editor**: plovoucí panel, který můžete přetahovat a měnit jeho velikost.

<Screenshot name="dashboard-edit" alt="Panel v režimu úprav s mřížkou teček" width={900} />

## Plocha a mřížka {#the-field-and-the-grid}

- Plocha má vždy poměr stran **2:1** a přizpůsobí se obrazovce, takže panel vypadá stejně na telefonu, tabletu i počítači.
- V režimu úprav se zobrazuje **mřížka teček** o 40 × 20 buňkách. Ovládací prvky se k mřížce přichytávají.
- Ovládací prvky se nemohou překrývat. Pokud se ovládací prvek nevejde, vrátí se tam, kde byl.

## Horní lišta {#toolbar}

**Telefon a tablet**

| Tlačítko | Co dělá |
|---|---|
| ← | zpět do editoru programu |
| Zpět / Znovu | vrácení a opakování změn panelu |
| **Vybrat** | výběr několika ovládacích prvků, které pak můžete společně zamknout, odemknout, smazat nebo upravit; **Hotovo** výběr ukončí |
| ⚙ (Nastavení panelu) | možnosti pozadí a mřížky (níže) |
| **+** (Přidat ovladač, s oranžovým kroužkem) | otevře paletu ovládacích prvků; viz [Přidání a uspořádání ovládacích prvků](/docs/Application/Dashboard/ArrangingControls) |
| ▶ / ■ | **Spustit** / **Zastavit**: spuštění a zastavení programu |

Když program běží, tlačítka pro úpravy jsou skrytá.

**Počítač a webový editor**

Horní lišta vypadá stejně jako v editoru:

- **Vlevo**: **Domů** (zavře profil), nabídky **Soubor**, **Úpravy** a **Zobrazení** a za nimi **Zpět** a **Znovu**.
- **Uprostřed**: název profilu a **Bloky** (v profilu s Rychlými propojeními **Propojení**, ⌘1 / Ctrl+1) pro návrat k programu. Samotný panel tu tlačítko nemá: je to stránka, na které jste.
- **Vpravo**: **Vybrat**, **Nastavení panelu** (⚙) a oranžové tlačítko **+ Ovladač** (Přidat ovladač). V úzkém okně se název profilu a tlačítko **Bloky** skryjí a z **+ Ovladač** zůstane jen **+**.

Na liště panelu na počítači není **Spustit**: program spouštějte a zastavujte z editoru (⌘R / Ctrl+R, ⌘. / Ctrl+.). Když program běží, **Vybrat**, **Nastavení panelu** a **+ Ovladač** nejsou k dispozici.

Nabídky: **Soubor** (Zavřít profil, Otevřít v samostatném okně), **Úpravy** (Zpět, Znovu) a **Zobrazení** (Bloky ⌘1, Panel ⌘2). V samostatném okně Panelu ukazuje lišta místo **Domů** název okna, nabídka **Soubor** obsahuje **Zavřít okno** a nabídka **Zobrazení** ani tlačítko **Bloky** tam nejsou.

## Vrácení a opakování změn {#undo-and-redo}

Panel má vlastní historii, oddělenou od programu. Vrátit můžete každé přesunutí, změnu velikosti, změnu vlastnosti, přidání i smazání.

## Nastavení panelu {#dashboard-settings}

**Obrázek pozadí**: klepněte na **Změnit** a zvolte:

- **Vybrat hotové**: hotové pozadí, které patří k některému motivu. Galerie ukazuje pozadí motivů, jejichž ovládací prvky jsou na tomto panelu. Hotové pozadí vždy vyplní obrazovku kolem plochy, takže se na něj níže uvedené možnosti nevztahují.
- **Nahrát vlastní**: libovolný obrázek z vašeho zařízení. Uloží se do profilu.

**Odebrat** pozadí odstraní.

<Screenshot name="dashboard-backgrounds" alt="Nastavení panelu s galerií hotových pozadí" width={900} />

Pro vlastní obrázek můžete nastavit také:

- **Režim vyplnění obrázku**: Roztáhnout, Zachovat poměr stran a přizpůsobit, Zachovat poměr stran a oříznout, Dlaždice, Dlaždice svisle, Dlaždice vodorovně nebo Vyplnit okraje.
- **Nadřazená oblast obrázku**: **Pracovní oblast** (jen plocha), nebo **Celá obrazovka**.
- **Neprůhlednost obrázku**, **Povolit rozmazání obrázku** a **Hodnota rozmazání**: zklidní pozadí, aby ovládací prvky vynikly.

**Skrýt tečky**: skryje tečky mřížky, když profil běží. V režimu úprav zůstávají tečky viditelné, abyste mohli ovládací prvky dál zarovnávat.

## Ovládací prvky a program {#controls-and-the-program}

Ovládací prvek dává hodnoty; co s nimi bude, rozhoduje program. Ovládací prvek, který program používá, nelze smazat, dokud ho program nepřestane používat. V Rychlých propojeních odstraňte řádky, které ho používají; v Logických blocích odstraňte jeho bloky.

## Další informace {#read-more}

- [Přidání a uspořádání ovládacích prvků](/docs/Application/Dashboard/ArrangingControls): přidávání, přesouvání, velikosti, zamykání
- [Typy ovládacích prvků](/docs/Application/Dashboard/ControlTypes)
- [Speciální ovládací prvky](/docs/Application/Dashboard/SpecialControls): volant, pedály, řadicí páka, ruční brzda, blinkry, ovladač vlaku
- [Vlastnosti ovládacích prvků](/docs/Application/Dashboard/ControlProperties)
- [Indikátory a monitory](/docs/Application/Dashboard/Indicators)
