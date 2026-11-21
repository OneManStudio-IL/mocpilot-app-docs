---
id: Processing
title: Procesare
description: "Blocurile de procesare din Legături rapide: Inversează, Limită, Zonă moartă, Prag, Lin și Comutare."
---

# Procesare {#processing}

Blocurile de procesare stau între intrare și operație și modifică valoarea pe parcurs. Un rând poate avea niciunul, unul sau mai multe, în orice ordine. Setări și valori permise: [Blocuri de procesare](/docs/Application/Links/Blocks/ProcessingBlocks).

| Bloc | Ce face |
|---|---|
| [Inversează](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | inversează sensul sau schimbă între pornit și oprit |
| [Limită](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | plafonează valoarea |
| [Zonă moartă](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ignoră mișcările mici în jurul lui zero |
| [Prag](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | transformă o valoare în pornit/oprit |
| [Lin](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | accelerează și încetinește treptat |
| [Comutare](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | o apăsare pentru pornit, încă una pentru oprit |

## Inversează {#invert}

Motorul se rotește în sensul greșit? Adaugă **Inversează** în loc să reconstruiești modelul. Pentru două motoare care trebuie să se rotească în sensuri opuse (șenilele stângă și dreaptă, cele două părți ale unei cutii de viteze), fă două rânduri din aceeași intrare și pune Inversează în unul dintre ele.

## Limită {#limit}

Face modelul mai lent și mai ușor de controlat: cu **Maxim** 50 %, stickul împins la maximum dă jumătate din viteză. Bun pentru copii, condus în interior și mecanisme delicate.

## Zonă moartă {#dead-zone}

Un joystick rareori stă exact la zero, așa că un motor poate bâzâi sau se poate mișca încet. **Zonă moartă** tratează valorile mici ca zero. 10 % este un bun punct de pornire.

## Prag {#threshold}

Transformă o valoare în pornit/oprit: „pornit când valoarea este **Peste** 20 %”. Cu un senzor, *Senzor de distanță* → *Prag* (Sub, 20 %) este pornit când ceva este aproape. Pragul are un mic histerezis, așa că nu pâlpâie la limită.

## Lin {#smooth}

Pornește și oprește treptat, ca un vehicul adevărat. Accelerația și decelerația se setează separat: un camion greu poate avea nevoie de 2 s ca să accelereze și de 0,5 s ca să se oprească. Pe o lumină, Lin o aprinde și o stinge treptat.

## Comutare {#toggle}

Transformă un buton într-un comutator: o apăsare pentru pornit, încă o apăsare pentru oprit. *Buton* → *Comutare* → *Lumină*.

## Sfaturi {#tips}

- Ordinea contează: *Zonă moartă → Limită → Lin* este un lanț bun pentru condus.
- Un bloc care nu se potrivește cu semnalul nu se îmbină: Comutare are nevoie de o intrare pornit/oprit; Zonă moartă și Prag au nevoie de o valoare.
- Urmărește valorile în timp real cât timp programul rulează, ca să vezi ce face fiecare bloc.
