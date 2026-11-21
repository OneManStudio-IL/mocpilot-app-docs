---
id: ProcessingBlocks
title: Blocuri de procesare
description: "Referința tuturor blocurilor de procesare din Legături rapide: Inversează, Limită, Zonă moartă, Prag, Lin și Comutare."
---

# Blocuri de procesare {#processing-blocks}

Blocurile de procesare stau între intrare și operație (sau indicator) și modifică semnalul pe parcurs. Un rând poate avea oricâte, în orice ordine. Un bloc care nu poate primi semnalul de intrare nu se îmbină; într-un fișier, este raportat ca „«…» nu funcționează cu acest controler”. Cum le folosești: [Procesare](/docs/Application/Links/Processing).

## Inversează {#mod-invert}

Inversează semnalul.

- Fără setări.
- Primește: valoare sau pornit/oprit. Oferă: același tip.
- Valoare: schimbă semnul (0,7 devine −0,7). Pornit/oprit: pornit devine oprit și oprit devine pornit.

## Limită {#mod-limit}

Reduce valoarea la scară, astfel încât deviația maximă nu dă mai mult decât maximul.

- **Maxim**: 20, 30, 40, 50, 60, 70, 80 sau 90 % (implicit 50 %).
- Primește: valoare sau pornit/oprit. Oferă: valoare (un buton limitat dă 0 sau maximul).

## Zonă moartă {#mod-deadzone}

Tratează valorile mici din jurul lui zero ca zero; restul este întins din nou pe întreaga plajă, astfel încât deviația maximă dă tot 1.

- **Zonă**: 5, 10, 15, 20 sau 30 % (implicit 10 %).
- Primește: valoare. Oferă: valoare.

## Prag {#mod-threshold}

Transformă o valoare în pornit/oprit.

- **Pornit când valoarea este**: **Peste** (implicit) sau **Sub**.
- **Nivel (din scala completă)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 sau 90 % (implicit 20 %).
- Primește: valoare. Oferă: pornit/oprit.
- Un mic histerezis (2 % din scala completă) împiedică pâlpâirea ieșirii când valoarea oscilează în jurul nivelului.

## Lin {#mod-smooth}

Se apropie treptat de valoarea de intrare în loc să sară.

- **Accelerație (până la viteza maximă)**: **Instantaneu**, 0,25, 0,5, 1, 2 sau 3 s (implicit 0,5 s): timpul de la 0 la maximum, în sens opus lui zero.
- **Decelerație (până la oprire)**: aceleași opțiuni (implicit 0,5 s): timpul de la maximum înapoi la 0.
- Primește: valoare sau pornit/oprit. Oferă: valoare (un buton netezit crește și scade treptat).

## Comutare {#mod-toggle}

Transformă un buton de apăsare într-un comutator: fiecare apăsare schimbă ieșirea între pornit și oprit. Ieșirea pornește din starea oprit.

- Fără setări.
- Primește: pornit/oprit. Oferă: pornit/oprit.
