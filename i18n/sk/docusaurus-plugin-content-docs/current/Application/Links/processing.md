---
id: Processing
title: Spracovanie
description: "Bloky spracovania v Rýchlych prepojeniach: Invertovať, Obmedzenie, Mŕtva zóna, Prah, Plynulo a Prepínač."
---

# Spracovanie {#processing}

Bloky spracovania sú medzi vstupom a operáciou a cestou menia hodnotu. Riadok ich môže mať nula, jeden alebo viac, v ľubovoľnom poradí. Nastavenia a povolené hodnoty: [Bloky spracovania](/docs/Application/Links/Blocks/ProcessingBlocks).

| Blok | Čo robí |
|---|---|
| [Invertovať](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | otočí smer alebo prehodí zap. a vyp. |
| [Obmedzenie](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | obmedzí hodnotu zhora |
| [Mŕtva zóna](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignoruje malé pohyby okolo nuly |
| [Prah](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | zmení hodnotu na zap./vyp. |
| [Plynulo](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | postupne zrýchľuje a spomaľuje |
| [Prepínač](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | prvé stlačenie zapne, ďalšie vypne |

## Invertovať {#invert}

Motor sa točí opačne? Namiesto prestavby modelu pridajte **Invertovať**. Pre dva motory, ktoré sa musia točiť opačným smerom (ľavý a pravý pás, dve strany prevodovky), vytvorte dva riadky s rovnakým vstupom a do jedného z nich vložte Invertovať.

## Obmedzenie {#limit}

Model je pomalší a ľahšie sa ovláda: s hodnotou **Maximum** 50 % dá plné vychýlenie páčky polovičnú rýchlosť. Hodí sa pre deti, na jazdu v interiéri a pre citlivé mechanizmy.

## Mŕtva zóna {#dead-zone}

Joystick sa málokedy zastaví presne na nule, takže motor môže bzučať alebo sa pomaly posúvať. **Mŕtva zóna** považuje malé hodnoty za nulu. Dobrým začiatkom je 10 %.

## Prah {#threshold}

Zmení hodnotu na zap./vyp.: „zapnuté, keď je hodnota **Nad** 20 %“. So senzorom je *Senzor vzdialenosti* → *Prah* (Pod, 20 %) zapnutý, keď je niečo blízko. Prah má malú hysterézu, takže na hranici nebliká.

## Plynulo {#smooth}

Rozbieha sa a zastavuje postupne, ako skutočné vozidlo. Zrýchlenie a spomalenie sa nastavujú zvlášť: ťažkému nákladiaku môže rozbeh trvať 2 s a zastavenie 0,5 s. Pri svetle blok Plynulo svetlo postupne rozsvieti a zhasne.

## Prepínač {#toggle}

Z tlačidla urobí spínač: prvým stlačením zapnete, ďalším vypnete. *Tlačidlo* → *Prepínač* → *Svetlo*.

## Tipy {#tips}

- Na poradí záleží: *Mŕtva zóna → Obmedzenie → Plynulo* je dobrá reťaz na jazdu.
- Blok, ktorý sa k signálu nehodí, nezapadne: Prepínač potrebuje vstup zap./vyp.; Mŕtva zóna a Prah potrebujú hodnotu.
- Počas behu programu sledujte aktuálne hodnoty a uvidíte, čo každý blok robí.
