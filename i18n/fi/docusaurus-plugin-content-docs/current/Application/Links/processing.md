---
id: Processing
title: Käsittely
description: "Pikalinkkien käsittelylohkot: Käännä, Rajoitus, Kuollut alue, Kynnys, Pehmeä ja Vaihto."
---

# Käsittely {#processing}

Käsittelylohkot sijoittuvat syötteen ja toiminnon väliin ja muuttavat arvoa matkalla. Rivillä voi olla niitä nolla, yksi tai useampi, missä järjestyksessä tahansa. Asetukset ja sallitut arvot: [Käsittelylohkot](/docs/Application/Links/Blocks/ProcessingBlocks).

| Lohko | Mitä se tekee |
|---|---|
| [Käännä](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | kääntää suunnan tai vaihtaa päällä- ja pois-tilan keskenään |
| [Rajoitus](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | rajaa arvon ylärajaan |
| [Kuollut alue](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | ohittaa pienet liikkeet nollan ympärillä |
| [Kynnys](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | muuttaa arvon päällä/pois-tiedoksi |
| [Pehmeä](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | kiihdyttää ja hidastaa vähitellen |
| [Vaihto](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | painallus kytkee päälle, toinen pois |

## Käännä {#invert}

Pyöriikö moottori väärään suuntaan? Lisää **Käännä**, niin mallia ei tarvitse rakentaa uudelleen. Jos kahden moottorin pitää pyöriä vastakkaisiin suuntiin (vasen ja oikea tela, vaihteiston kaksi puolta), tee samasta syötteestä kaksi riviä ja lisää Käännä toiseen niistä.

## Rajoitus {#limit}

Tekee mallista hitaamman ja helpommin hallittavan: kun **Enintään** on 50 %, täysi sauvan liike antaa puolet nopeudesta. Sopii lapsille, sisätiloissa ajamiseen ja herkille mekanismeille.

## Kuollut alue {#dead-zone}

Ohjainsauva palaa harvoin tarkalleen nollaan, joten moottori voi hurista tai ryömiä. **Kuollut alue** käsittelee pienet arvot nollana. 10 % on hyvä lähtökohta.

## Kynnys {#threshold}

Muuttaa arvon päällä/pois-tiedoksi: ”päällä, kun arvo on **Yli** 20 %”. Anturin kanssa *Etäisyysanturi* → *Kynnys* (Alle, 20 %) on päällä, kun jokin on lähellä. Kynnyksessä on pieni hystereesi, joten se ei välky rajan kohdalla.

## Pehmeä {#smooth}

Käynnistää ja pysäyttää vähitellen kuin oikea ajoneuvo. Kiihdytys ja hidastus asetetaan erikseen: raskas rekka voi kiihtyä 2 s ja pysähtyä 0,5 s:ssa. Valossa Pehmeä himmentää valon sisään ja ulos.

## Vaihto {#toggle}

Tekee painikkeesta kytkimen: yksi painallus kytkee päälle, seuraava pois. *Painike* → *Vaihto* → *Valo*.

## Vinkkejä {#tips}

- Järjestyksellä on väliä: *Kuollut alue → Rajoitus → Pehmeä* on hyvä ketju ajamiseen.
- Signaaliin sopimaton lohko ei napsahda paikalleen: Vaihto tarvitsee päällä/pois-syötteen, Kuollut alue ja Kynnys tarvitsevat arvon.
- Seuraa reaaliaikaisia arvoja ohjelman käydessä nähdäksesi, mitä kukin lohko tekee.
