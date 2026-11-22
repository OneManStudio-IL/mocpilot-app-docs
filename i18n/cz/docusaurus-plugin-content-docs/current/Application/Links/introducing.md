---
id: LinksIntroducing
title: Seznámení s Rychlými propojeními
description: "Rychlá propojení spojují ovládací prvky panelu s motory a světly hubu řádek po řádku, bez kódu."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Rychlá propojení {#quick-links}

**Rychlá propojení** jsou editor programů v MOCPilotu, který nevyžaduje programování. Ovládací prvky panelu, gamepad nebo senzory hubu propojujete s motory, světly a indikátory **jeden řádek po druhém**. Pokud znáte klasickou aplikaci Controlz, budete se tu cítit jako doma.

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Řádky Rychlých propojení" style={{width: '100%', maxWidth: 720}} />

## Řádek se čte jako věta {#a-row-reads-like-a-sentence}

Každý řádek vede zleva doprava:

**Vstup → Zpracování (volitelné) → Operace → Výstup**

> *Joystick 1, Osa Y* → *Plynule* → *Motor* → *Technic Hub, port A*
>
> „Když pohnu joystickem nahoru a dolů, motor na portu A se otáčí a plynule se rozjíždí i zastavuje.“

| Část | Co to je | Příklady |
|---|---|---|
| **Vstup** | odkud hodnota přichází | ovládací prvek panelu, simulované vozidlo, gamepad, tlačítko nebo senzor hubu |
| **Zpracování** | mění hodnotu cestou (žádný, jeden nebo několik bloků) | Obrátit, Omezení, Mrtvá zóna, Práh, Plynule, Přepínač |
| **Operace** | co má hub udělat | Motor, Servo, Motor na dobu, Světlo, Otočit o stupně, Jet do polohy… |
| **Výstup** | kde se to stane | **Hub** s porty nebo přímý výstup: Indikátor, LED hubu, LED matice, Kalibrovat serva |

Přímé výstupy (Indikátor, LED hubu, LED matice, Kalibrovat serva) nepotřebují operaci: *Baterie hubu → Indikátor*.

## Editor {#the-editor}

<Screenshot name="links-editor" alt="Editor Rychlých propojení s řádky a paletou" width={900} />

- **Řádky** vyplňují obrazovku a posouvají se svisle. Nové řádky začínají v posledním, prázdném řádku („Nový řádek: vstup“).
- **Paleta** dole má tři karty: **Vstupy**, **Zpracování** a **Výstupy**. Sestavuje se z vašeho profilu: každý ovládací prvek panelu a každý hub v Mých hubech se objeví automaticky, gamepad se objeví, když jsou zapnuté bloky gamepadu, a operace se objeví, jen pokud ji některý hub profilu umí.
- Stav řádků na horní liště, hned před **Spustit**, ukazuje zelenou fajfku, když je každý řádek připravený, nebo červený „!“ s počtem problémů. Na počítači je u něj také text **Všechny řádky jsou připravené** nebo **Problémy: N**.

## Sestavení řádku {#build-a-row}

1. Přetáhněte vstup z karty **Vstupy** do prázdného řádku. Vytvoří se nový řádek.
2. Pokud potřebujete, přetáhněte za vstup bloky z karty **Zpracování**.
3. Přetáhněte operaci (například **Motor**) z karty **Výstupy**.
4. Za operaci přetáhněte výstup **Hub** a klepněte na porty, které chcete použít.
5. Klepnutím na libovolný blok změníte jeho nastavení: vybíráte z čipů, nic nepíšete.

Bloky do sebe zapadají jako dílky puzzle. Tvar každého spoje ukazuje druh signálu, takže bloky, které spolu nemohou fungovat, nezapadnou:

- **hodnota** od −1 do 1 (osy joysticku, posuvníky, pedály, senzory);
- **zapnuto/vypnuto** (tlačítka, spínače, prahy);
- spoj **operace → hub**, takže hub může následovat jen za operací.

Blok odeberete tak, že ho přetáhnete zpět na paletu („Pusťte sem pro odebrání“), nebo na něj klepnete a zvolíte **Odebrat blok**.

## Řádky {#rows}

Klepnutím na číslo řádku otevřete nabídku řádku:

- **Vypnout** / **Zapnout**: vypnutý řádek zůstává v programu, ale neběží. Hodí se pro experimenty.
- **Odebrat řádek**.

Řádků můžete přidat, kolik chcete.

## Spuštění {#run}

Stiskněte **Spustit**. Za běhu programu ukazuje každý spoj **aktuální hodnotu**, která jím prochází, takže přesně vidíte, kde se signál zastaví. Za běhu nelze upravovat; pro další úpravy stiskněte **Zastavit**. Viz [Spuštění a řešení problémů](/docs/Application/Links/Problems).

## Zpět {#undo}

**Zpět** a **Znovu** (⌘Z / ⇧⌘Z, Ctrl+Z / Ctrl+Shift+Z nebo tlačítka na horní liště) vrátí až 100 kroků. Za běhu programu nejsou k dispozici.

## Další informace {#read-more}

- [Vstupy](/docs/Application/Links/Inputs): ovládací prvky, vozidlo, gamepad, tlačítka a senzory hubu
- [Zpracování](/docs/Application/Links/Processing): Obrátit, Omezení, Mrtvá zóna, Práh, Plynule, Přepínač
- [Operace a výstupy](/docs/Application/Links/Operations)
- [Blok Hub a porty](/docs/Application/Links/HubsAndPorts)
- [Spuštění a řešení problémů](/docs/Application/Links/Problems)
- [Příklady: auto, tank, jeřáb, vlak](/docs/Application/Links/Examples)
- Přehled bloků: [vstupy](/docs/Application/Links/Blocks/InputBlocks), [zpracování](/docs/Application/Links/Blocks/ProcessingBlocks), [operace a výstupy](/docs/Application/Links/Blocks/OutputBlocks)

## Rychlá propojení, nebo Logické bloky? {#quick-links-or-logic-blocks}

Rychlá propojení jsou ideální, když každý ovládací prvek prostě něčím pohybuje. Když potřebujete logiku (sekvence, podmínky, proměnné nebo vícekrokovou reakci na senzor), použijte [Logické bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Typ programu volíte při vytváření profilu; viz [srovnání](/docs/Application/Profiles/CreateProfile#choose-the-program-type).
