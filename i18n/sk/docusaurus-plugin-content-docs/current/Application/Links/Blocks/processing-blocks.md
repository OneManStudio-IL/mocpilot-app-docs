---
id: ProcessingBlocks
title: Bloky spracovania
description: "Prehľad všetkých blokov spracovania v Rýchlych prepojeniach: Invertovať, Obmedzenie, Mŕtva zóna, Prah, Plynulo a Prepínač."
---

# Bloky spracovania {#processing-blocks}

Bloky spracovania sú medzi vstupom a operáciou (alebo indikátorom) a cestou menia signál. Riadok ich môže mať ľubovoľný počet, v ľubovoľnom poradí. Blok, ktorý nedokáže prijať prichádzajúci signál, nezapadne; v súbore sa ohlási ako problém „…“ s týmto ovládačom nefunguje. Ako ich používať: [Spracovanie](/docs/Application/Links/Processing).

## Invertovať {#mod-invert}

Otočí signál.

- Bez nastavení.
- Prijíma: hodnotu alebo zap./vyp. Dáva: rovnaký druh.
- Hodnota: zmení znamienko (0,7 sa zmení na −0,7). Zap./vyp.: zapnuté sa zmení na vypnuté a vypnuté na zapnuté.

## Obmedzenie {#mod-limit}

Zmenší hodnotu, takže plné vychýlenie nedá viac ako maximum.

- **Maximum**: 20, 30, 40, 50, 60, 70, 80 alebo 90 % (predvolené 50 %).
- Prijíma: hodnotu alebo zap./vyp. Dáva: hodnotu (obmedzené tlačidlo dáva 0 alebo maximum).

## Mŕtva zóna {#mod-deadzone}

Malé hodnoty okolo nuly považuje za nulu; zvyšok roztiahne späť na plný rozsah, takže plné vychýlenie stále dáva 1.

- **Zóna**: 5, 10, 15, 20 alebo 30 % (predvolené 10 %).
- Prijíma: hodnotu. Dáva: hodnotu.

## Prah {#mod-threshold}

Zmení hodnotu na zap./vyp.

- **Zapnuté, keď je hodnota**: **Nad** (predvolené) alebo **Pod**.
- **Úroveň (z plného rozsahu)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 alebo 90 % (predvolené 20 %).
- Prijíma: hodnotu. Dáva: zap./vyp.
- Malá hysteréza (2 % plného rozsahu) zabraňuje blikaniu výstupu, keď sa hodnota drží okolo úrovne.

## Plynulo {#mod-smooth}

Približuje sa k prichádzajúcej hodnote postupne namiesto skoku.

- **Rozbeh (na plnú rýchlosť)**: **Okamžite**, 0,25, 0,5, 1, 2 alebo 3 s (predvolené 0,5 s): čas z 0 na plnú hodnotu smerom od nuly.
- **Spomalenie (do zastavenia)**: rovnaké možnosti (predvolené 0,5 s): čas z plnej hodnoty späť na 0.
- Prijíma: hodnotu alebo zap./vyp. Dáva: hodnotu (vyhladené tlačidlo postupne narastá a klesá).

## Prepínač {#mod-toggle}

Z tlačidla urobí spínač: každé stlačenie prepne výstup medzi zapnutým a vypnutým. Výstup začína vo vypnutom stave.

- Bez nastavení.
- Prijíma: zap./vyp. Dáva: zap./vyp.
