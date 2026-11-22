---
id: LinksIntroducing
title: Úvod do Rýchlych prepojení
description: "Rýchle prepojenia spájajú ovládače panela s motormi a svetlami hubov riadok po riadku, bez kódu."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Rýchle prepojenia {#quick-links}

**Rýchle prepojenia** sú editor programov v MOCPilote, ktorý nevyžaduje programovanie. Ovládače panela, herný ovládač alebo senzory hubov spájate s motormi, svetlami a indikátormi **po jednom riadku**. Ak ste používali klasickú aplikáciu Controlz, budete sa cítiť ako doma.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Riadky Rýchlych prepojení" style={{width: '100%', maxWidth: 720}} />

## Riadok sa číta ako veta {#a-row-reads-like-a-sentence}

Každý riadok ide zľava doprava:

**Vstup → Spracovanie (voliteľné) → Operácia → Výstup**

> *Joystick 1, os Y* → *Plynulo* → *Motor* → *Technic Hub, port A*
>
> „Keď pohnem joystickom hore a dole, motor na porte A sa točí a plynulo sa rozbieha aj zastavuje.“

| Časť | Čo to je | Príklady |
|---|---|---|
| **Vstup** | odkiaľ hodnota prichádza | ovládač panela, simulované vozidlo, herný ovládač, tlačidlo alebo senzor hubu |
| **Spracovanie** | cestou mení hodnotu (žiadny, jeden alebo viac blokov) | Invertovať, Obmedzenie, Mŕtva zóna, Prah, Plynulo, Prepínač |
| **Operácia** | čo má hub urobiť | Motor, Servo, Motor na čas, Svetlo, Otočiť o stupne, Ísť do polohy… |
| **Výstup** | kde sa to deje | **Hub** s jeho portami alebo priamy výstup: Indikátor, LED hubu, LED matica, Kalibrovať servá |

Priame výstupy (Indikátor, LED hubu, LED matica, Kalibrovať servá) nepotrebujú operáciu: *Batéria hubu → Indikátor*.

## Editor {#the-editor}

<Screenshot name="links-editor" alt="Editor Rýchlych prepojení s riadkami a paletou" width={900} />

- **Riadky** vypĺňajú obrazovku a posúvajú sa zvisle. Nové riadky začínajú v poslednom, prázdnom riadku („Nový riadok: vstup“).
- **Paleta** dole má tri karty: **Vstupy**, **Spracovanie** a **Výstupy**. Zostavuje sa z vášho profilu: každý ovládač panela a každý hub v Mojich huboch sa v nej zobrazí automaticky, herný ovládač sa objaví, keď sú zapnuté bloky gamepadu, a operácia sa zobrazí iba vtedy, ak ju dokáže vykonať niektorý hub profilu.
- Stav riadkov na hornej lište, hneď pred **Spustiť**, ukazuje zelenú značku, keď sú všetky riadky pripravené, alebo červený „!“ s počtom problémov. Na počítači je pri ňom aj text **Všetky riadky sú pripravené** alebo **Problémy: N**.

## Zostavenie riadku {#build-a-row}

1. Presuňte vstup z karty **Vstupy** do prázdneho riadku. Vytvorí sa nový riadok.
2. Ak treba, za vstup presuňte bloky spracovania z karty **Spracovanie**.
3. Z karty **Výstupy** presuňte operáciu (napríklad **Motor**).
4. Za operáciu presuňte výstup **Hub** a ťuknutím vyberte porty, ktoré chcete použiť.
5. Ťuknutím na ľubovoľný blok zmeníte jeho nastavenia: vyberáte z čipov, nič nepíšete.

Bloky do seba zapadajú ako dieliky puzzle. Tvar každého spoja ukazuje druh signálu, takže bloky, ktoré spolu nemôžu fungovať, nezapadnú:

- **hodnota** od −1 do 1 (osi joysticku, posuvníky, pedále, senzory);
- **zap./vyp.** (tlačidlá, spínače, prahy);
- spoj **operácia → hub**, takže hub môže nasledovať iba za operáciou.

Blok odstránite tak, že ho presuniete späť na paletu („Pustite sem na odstránenie“), alebo naň ťuknete a vyberiete **Odstrániť blok**.

## Riadky {#rows}

Ťuknutím na číslo riadku otvoríte ponuku riadku:

- **Vypnúť** / **Zapnúť**: vypnutý riadok zostane v programe, ale nespúšťa sa. Hodí sa na experimenty.
- **Odstrániť riadok**.

Riadkov môžete pridať, koľko chcete.

## Spustenie {#run}

Stlačte **Spustiť**. Kým program beží, každý spoj ukazuje **aktuálnu hodnotu**, ktorá ním prechádza, takže presne vidíte, kde sa signál zastaví. Počas behu programu nemôžete nič upravovať; na ďalšie úpravy stlačte **Zastaviť**. Pozrite si [Spustenie a riešenie problémov](/docs/Application/Links/Problems).

## Späť {#undo}

**Späť** a **Znova** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z alebo tlačidlá na hornej lište) vrátia až 100 krokov. Počas behu programu nie sú k dispozícii.

## Ďalšie informácie {#read-more}

- [Vstupy](/docs/Application/Links/Inputs): ovládače, vozidlo, herný ovládač, tlačidlá a senzory hubov
- [Spracovanie](/docs/Application/Links/Processing): Invertovať, Obmedzenie, Mŕtva zóna, Prah, Plynulo, Prepínač
- [Operácie a výstupy](/docs/Application/Links/Operations)
- [Blok Hub a porty](/docs/Application/Links/HubsAndPorts)
- [Spustenie a riešenie problémov](/docs/Application/Links/Problems)
- [Príklady: auto, tank, žeriav, vlak](/docs/Application/Links/Examples)
- Prehľad blokov: [vstupy](/docs/Application/Links/Blocks/InputBlocks), [spracovanie](/docs/Application/Links/Blocks/ProcessingBlocks), [operácie a výstupy](/docs/Application/Links/Blocks/OutputBlocks)

## Rýchle prepojenia, alebo Logické bloky? {#quick-links-or-logic-blocks}

Rýchle prepojenia sú ideálne, keď každý ovládač jednoducho niečím pohybuje. Keď potrebujete logiku (postupnosti, podmienky, premenné alebo viackrokovú reakciu na senzor), použite [Logické bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Typ programu si vyberáte pri vytváraní profilu; pozrite si [porovnanie](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
