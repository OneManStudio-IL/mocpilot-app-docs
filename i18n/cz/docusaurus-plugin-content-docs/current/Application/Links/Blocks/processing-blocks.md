---
id: ProcessingBlocks
title: Bloky zpracování
description: "Přehled všech bloků zpracování Rychlých propojení: Obrátit, Omezení, Mrtvá zóna, Práh, Plynule a Přepínač."
---

# Bloky zpracování {#processing-blocks}

Bloky zpracování stojí mezi vstupem a operací (nebo indikátorem) a mění signál cestou. Řádek jich může mít libovolný počet v libovolném pořadí. Blok, který nemůže přijmout přicházející signál, nezapadne; v souboru se hlásí zprávou „"…" s tímto ovladačem nefunguje“. Jak je používat: [Zpracování](/docs/Application/Links/Processing).

## Obrátit {#mod-invert}

Obrátí signál.

- Bez nastavení.
- Přijímá: hodnotu nebo zapnuto/vypnuto. Dává: stejný druh.
- Hodnota: změní znaménko (z 0,7 se stane −0,7). Zapnuto/vypnuto: ze zapnuto se stane vypnuto a z vypnuto zapnuto.

## Omezení {#mod-limit}

Zmenší hodnotu, takže plná výchylka nedá víc než maximum.

- **Maximum**: 20, 30, 40, 50, 60, 70, 80 nebo 90 % (výchozí 50 %).
- Přijímá: hodnotu nebo zapnuto/vypnuto. Dává: hodnotu (omezené tlačítko dává 0 nebo maximum).

## Mrtvá zóna {#mod-deadzone}

Malé hodnoty kolem nuly považuje za nulu; zbytek roztáhne zpět na plný rozsah, takže plná výchylka stále dává 1.

- **Zóna**: 5, 10, 15, 20 nebo 30 % (výchozí 10 %).
- Přijímá: hodnotu. Dává: hodnotu.

## Práh {#mod-threshold}

Převede hodnotu na zapnuto/vypnuto.

- **Zapnuto, když je hodnota**: **Nad** (výchozí) nebo **Pod**.
- **Úroveň (z plného rozsahu)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 nebo 90 % (výchozí 20 %).
- Přijímá: hodnotu. Dává: zapnuto/vypnuto.
- Malá hystereze (2 % plného rozsahu) brání blikání výstupu, když hodnota kolísá kolem úrovně.

## Plynule {#mod-smooth}

Přibližuje se k přicházející hodnotě postupně, místo aby skočil.

- **Zrychlení (na plnou rychlost)**: **Okamžitě**, 0,25, 0,5, 1, 2 nebo 3 s (výchozí 0,5 s): doba od 0 do plné hodnoty směrem od nuly.
- **Zpomalení (do zastavení)**: stejné volby (výchozí 0,5 s): doba od plné hodnoty zpět na 0.
- Přijímá: hodnotu nebo zapnuto/vypnuto. Dává: hodnotu (vyhlazené tlačítko náběhne a doběhne postupně).

## Přepínač {#mod-toggle}

Udělá z tlačítka spínač: každý stisk přepne výstup mezi zapnuto a vypnuto. Výstup začíná vypnutý.

- Bez nastavení.
- Přijímá: zapnuto/vypnuto. Dává: zapnuto/vypnuto.
