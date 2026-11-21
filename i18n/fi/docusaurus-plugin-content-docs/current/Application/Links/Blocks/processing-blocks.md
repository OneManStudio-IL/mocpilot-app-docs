---
id: ProcessingBlocks
title: Käsittelylohkot
description: "Kaikkien Pikalinkkien käsittelylohkojen hakemisto: Käännä, Rajoitus, Kuollut alue, Kynnys, Pehmeä ja Vaihto."
---

# Käsittelylohkot {#processing-blocks}

Käsittelylohkot sijoittuvat syötteen ja toiminnon (tai ilmaisimen) väliin ja muuttavat signaalia matkalla. Rivillä voi olla niitä kuinka monta tahansa, missä järjestyksessä tahansa. Lohko, joka ei voi ottaa vastaan tulevaa signaalia, ei napsahda paikalleen; tiedostossa se ilmoitetaan viestillä ”’…’ ei toimi tämän ohjaimen kanssa”. Käyttöohjeet: [Käsittely](/docs/Application/Links/Processing).

## Käännä {#mod-invert}

Kääntää signaalin.

- Ei asetuksia.
- Ottaa: arvon tai päällä/pois. Antaa: saman tyypin.
- Arvo: vaihtaa etumerkin (0,7:stä tulee −0,7). Päällä/pois: päällä muuttuu pois-tilaksi ja pois päällä-tilaksi.

## Rajoitus {#mod-limit}

Skaalaa arvoa alaspäin, jotta täysi poikkeama antaa enintään asetetun maksimin.

- **Enintään**: 20, 30, 40, 50, 60, 70, 80 tai 90 % (oletus 50 %).
- Ottaa: arvon tai päällä/pois. Antaa: arvon (rajoitettu painike antaa 0 tai maksimin).

## Kuollut alue {#mod-deadzone}

Käsittelee pienet arvot nollan ympärillä nollana; loput venytetään takaisin koko alueelle, joten täysi poikkeama antaa edelleen 1.

- **Alue**: 5, 10, 15, 20 tai 30 % (oletus 10 %).
- Ottaa: arvon. Antaa: arvon.

## Kynnys {#mod-threshold}

Muuttaa arvon päällä/pois-tiedoksi.

- **Päällä, kun arvo on**: **Yli** (oletus) tai **Alle**.
- **Taso (koko asteikosta)**: −50, −20, 0, 5, 10, 20, 30, 50, 70 tai 90 % (oletus 20 %).
- Ottaa: arvon. Antaa: päällä/pois.
- Pieni hystereesi (2 % koko asteikosta) estää lähtöä välkkymästä, kun arvo pyörii tason tuntumassa.

## Pehmeä {#mod-smooth}

Siirtyy kohti tulevaa arvoa vähitellen hyppäämisen sijaan.

- **Kiihdytys (täyteen nopeuteen)**: **Heti**, 0,25, 0,5, 1, 2 tai 3 s (oletus 0,5 s): aika nollasta täyteen poispäin nollasta.
- **Hidastus (pysähdykseen)**: samat vaihtoehdot (oletus 0,5 s): aika täydestä takaisin nollaan.
- Ottaa: arvon tai päällä/pois. Antaa: arvon (pehmennetty painike nousee ja laskee liukuen).

## Vaihto {#mod-toggle}

Tekee painonapista kytkimen: jokainen painallus vaihtaa lähdön päällä- ja pois-tilan välillä. Lähtö on aluksi pois päältä.

- Ei asetuksia.
- Ottaa: päällä/pois. Antaa: päällä/pois.
