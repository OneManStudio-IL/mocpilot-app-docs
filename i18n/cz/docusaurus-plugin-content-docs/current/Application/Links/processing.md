---
id: Processing
title: Zpracování
description: "Bloky zpracování v Rychlých propojeních: Obrátit, Omezení, Mrtvá zóna, Práh, Plynule a Přepínač."
---

# Zpracování {#processing}

Bloky zpracování stojí mezi vstupem a operací a mění hodnotu cestou. Řádek jich může mít žádný, jeden nebo několik, v libovolném pořadí. Nastavení a povolené hodnoty: [Bloky zpracování](/docs/Application/Links/Blocks/ProcessingBlocks).

| Blok | Co dělá |
|---|---|
| [Obrátit](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | otočí směr nebo prohodí zapnuto a vypnuto |
| [Omezení](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | omezí hodnotu shora |
| [Mrtvá zóna](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignoruje malé pohyby kolem nuly |
| [Práh](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | převede hodnotu na zapnuto/vypnuto |
| [Plynule](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | zrychluje a zpomaluje postupně |
| [Přepínač](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | jedním stiskem zapnout, dalším vypnout |

## Obrátit {#invert}

Točí se motor opačně? Místo přestavby modelu přidejte **Obrátit**. U dvou motorů, které se musí točit opačně (levý a pravý pás, dvě strany převodovky), vytvořte ze stejného vstupu dva řádky a do jednoho z nich dejte Obrátit.

## Omezení {#limit}

Zpomalí model a usnadní jeho ovládání: s hodnotou **Maximum** 50 % dá plná výchylka páčky poloviční rychlost. Hodí se pro děti, jízdu v interiéru a jemné mechanismy.

## Mrtvá zóna {#dead-zone}

Joystick se málokdy zastaví přesně na nule, takže motor může bzučet nebo se plížit. **Mrtvá zóna** považuje malé hodnoty za nulu. Dobrým začátkem je 10 %.

## Práh {#threshold}

Převede hodnotu na zapnuto/vypnuto: „zapnuto, když je hodnota **Nad** 20 %“. Se senzorem je *Senzor vzdálenosti* → *Práh* (Pod, 20 %) zapnutý, když je něco blízko. Práh má malou hysterezi, takže na hranici nebliká.

## Plynule {#smooth}

Rozjíždí se a zastavuje postupně, jako skutečné vozidlo. Zrychlení a zpomalení se nastavují zvlášť: těžkému nákladáku může rozjezd trvat 2 s a zastavení 0,5 s. U světla Plynule zajistí postupné rozsvícení a zhasnutí.

## Přepínač {#toggle}

Udělá z tlačítka spínač: jedním stiskem zapnete, dalším vypnete. *Tlačítko* → *Přepínač* → *Světlo*.

## Tipy {#tips}

- Na pořadí záleží: *Mrtvá zóna → Omezení → Plynule* je dobrý řetězec pro jízdu.
- Blok, který se k signálu nehodí, nezapadne: Přepínač potřebuje vstup zapnuto/vypnuto; Mrtvá zóna a Práh potřebují hodnotu.
- Za běhu programu sledujte aktuální hodnoty a uvidíte, co který blok dělá.
