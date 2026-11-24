---
id: BlocksIntroducing
title: Logiikkalohkot lyhyesti
description: "Logiikkalohkot on MOCPilotin visuaalinen lohko-ohjelmointieditori: tapahtumat, silmukat, ehdot, muuttujat, anturit ja äänet."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logiikkalohkot {#logic-blocks}

**Logiikkalohkot** on MOCPilotin lohko-ohjelmointieditori. Ohjelmat rakennetaan napsauttamalla lohkoja yhteen, vähän kuin Scratchissa: tapahtumat, silmukat, ehdot, muuttujat, listat, omat lohkot, äänet sekä lohkot moottoreille, valoille, antureille, kojelaudan ohjaimille ja peliohjaimelle.

Valitse Logiikkalohkot, kun mallisi tarvitsee logiikkaa: robotit, automaattiset sarjat, reaktiot antureihin, käynnistystarkistukset, pelit. Jos haluat vain yhdistää ohjaimet moottoreihin, [Pikalinkit](/docs/Application/Links/LinksIntroducing) on nopeampi.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Logiikkalohko-ohjelma" style={{width: '100%', maxWidth: 720}} />

:::warning Ei Scratch
Logiikkalohkoilla on omat lohkonsa ja oma toimintansa. MOCPilot-ohjelmia ei voi tuoda Scratchiin eikä Scratch-projekteja MOCPilotiin.
:::

## Editori yhdellä silmäyksellä {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Logiikkalohkojen editori paletteineen ja ohjelmineen" width={900} />

- **Paletissa** ovat lohkoluokat: **Tapahtumat**, **Hallinta**, **Anturit**, **Äänet**, **Operaattori**, **Muuttujat**, **Listat** ja **Minun lohkot**. Muut luokat näkyvät, kun profiilisi tarvitsee niitä: **Moottorit** ja **Valo** (kun hubi tukee niitä), **Liike** ([Robot Inventor -hubin](/docs/Application/Hubs/RobotInventorHub) kanssa), **Simulaattori** (kun kojelaudalla on polkimet, vaihteisto tai käsijarru), **Näytön ohjaimet** ja **Peliohjain**.
- **Ohjelma-alueelle** vedetään lohkot ja rakennetaan skriptit.
- Yläpalkissa ovat **Kumoa** ja **Tee uudelleen**, **Kojelauta**, **Omat hubit**, **Peliohjain**, sivupaneelit **Tekoälyrakentaja**, [**Reppu**](/docs/Application/BlockBuilder/Backpack) ja **Seuranta**, **Lisää toimintoja** (jossa on **Editorin asetukset**) sekä **Suorita/Pysäytä**. Puhelimessa ja tabletissa sivupaneelit ja Peliohjain ovat kohdassa **Lisää toimintoja**.

Lisätietoja: [Työskentely editorissa](/docs/Application/BlockBuilder/Editor).

## Miten ohjelma toimii {#how-a-program-runs}

- Skripti alkaa **tapahtumalohkolla** (hattulohko): *kun ohjelma käynnistyy*, *kun nappia painetaan …*, *kun vastaanotan …* ja niin edelleen.
- Sen alle liitetyt lohkot suoritetaan ylhäältä alas.
- Useat skriptit toimivat **samanaikaisesti**. Koordinoi niitä viesteillä (*siirtää*).
- **Silmukat** (*toistaa aina*, *toista*, *toistaa, kunnes*) pitävät skriptin käynnissä; **ehdot** (*jos*, *jos … muu*, *odota kunnes*) tekevät päätöksiä.
- **Raportointilohkot** (pyöristetyt) palauttavat arvoja ja sopivat muiden lohkojen syötteisiin; **totuusarvolohkot** (kärkevät) palauttavat ehtoja varten tosi tai epätosi.
- **Muuttujat** ja **listat** säilyttävät arvoja lohkojen ja skriptien välillä.

## Lohkojen muodot {#block-shapes}

### Hattulohkot {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Käynnistävät skriptin, kun jotain tapahtuu. Lohkoja voi liittää vain niiden alle.

---

### Pinolohkot {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Tärkeimmät komentolohkot: kukin tekee jotakin.

---

### C-lohkot {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

C-kirjaimen muotoiset lohkot, joiden sisään mahtuu muita lohkoja: silmukat ja ehdot.

---

### Raportointilohkot {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Palauttavat arvon, esimerkiksi luvun tai tekstin.

---

### Totuusarvolohkot {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Palauttavat vain arvon `true` tai `false`. Niitä käytetään yleensä ehdoissa.

---

### Päätöslohkot {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Päättävät skriptin: niiden alle ei voi liittää mitään.

---

### Lohkopino {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Pino on joukko toisiinsa liitettyjä lohkoja, jotka suoritetaan yhtenä skriptinä ylhäältä alas.
Pino alkaa yleensä tapahtumalohkolla, jota seuraavat järjestyksessä suoritettavat lohkot.

---


## Hubit, portit ja ohjaimet {#hubs-ports-and-controls}

- Moottori- ja valolohkot ottavat **hubin** ja **portin**. Moottorit- ja Valo-luokat näkyvät vain, kun jokin profiilin hubi tukee niitä, ja jotkin lohkot ovat olemassa vain tietyille hubeille (esimerkiksi BuWizzin tehotilat tai Technic Move Hubin toiminnot). Kunkin lohkon kuvauksessa kerrotaan, minkä hubien kanssa se toimii.
- Kojelaudan lohkot viittaavat ohjaimiin nimellä (**JOY1**, **BTN2**). Ohjainta ei voi poistaa kojelaudalta, kun lohkot käyttävät sitä; poista ensin ne lohkot.
- Peliohjainlohkot näkyvät, kun **Ota peliohjaimen lohkot käyttöön** on päällä [Peliohjain-sivulla](/docs/Application/Dashboard/Gamepad).

## Lohkotasot {#block-levels}

Jokaisella profiililla on **lohkotaso**: **Aloittelija** näyttää yksinkertaisimmat lohkot, **Edistynyt** lisää yleiset logiikka- ja laitelohkot, ja **Guru** näyttää koko valikoiman. Valitse taso profiilia luodessasi tai myöhemmin Editorin asetuksista. Tässä hakemistossa kunkin lohkon taso näkyy sen nimen vieressä.

## Suositeltu työtapa {#recommended-workflow}

1. Aloita yhdellä tapahtumalohkolla ja lyhyellä skriptillä; paina **Suorita** ja tarkista, että se toimii.
2. Tarkista moottorien suunnat ja arvoalueet ajoissa (Seuranta auttaa).
3. Jaa ohjelma pieniin skripteihin, jotka viestivät keskenään viesteillä; siirrä toistuva logiikka [Minun lohkoihin](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Lisää turvallisuutta: rajoja, pysäytyksiä, käynnistystarkistus ja suunnitelma sen varalle, että hubin yhteys katkeaa.

## Yleisiä sudenkuoppia {#common-pitfalls}

- Skripti ilman tapahtumalohkoa ei koskaan käynnisty.
- Väärä hubi tai portti on valittu, joten mitään näkyvää ei tapahdu.
- Tekstin, lukujen ja totuusarvojen sekoittaminen antaa odottamattomia tuloksia.
- Hyvin tiheät tapahtumat ilman suodatusta (esimerkiksi anturitapahtuma jokaisesta pienestä muutoksesta) voivat ylikuormittaa ohjelman; käytä kynnyksiä tai lyhyitä odotuksia.

## Lohkohakemisto {#block-reference}

- [Tapahtumat](/docs/Application/BlockBuilder/Blocks/Events) · [Hallinta](/docs/Application/BlockBuilder/Blocks/Control) · [Operaattorit](/docs/Application/BlockBuilder/Blocks/Operators)
- [Muuttujat](/docs/Application/BlockBuilder/Blocks/Variables) · [Listat](/docs/Application/BlockBuilder/Blocks/Lists) · [Minun lohkot](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Liike](/docs/Application/BlockBuilder/Blocks/Movement) · [Moottorit](/docs/Application/BlockBuilder/Blocks/Motors) · [Valo](/docs/Application/BlockBuilder/Blocks/Light) · [Anturit](/docs/Application/BlockBuilder/Blocks/Sensors) · [Äänet](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulaattori](/docs/Application/BlockBuilder/Blocks/Simulator) · [Näytön ohjaimet](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Peliohjain](/docs/Application/BlockBuilder/Blocks/Gamepad)

Sovelluksessa voit painaa lohkoa pitkään (tai napsauttaa sitä hiiren oikealla painikkeella) ja valita **Tietoja lohkosta**, niin sen kuvaus avautuu täällä.

Valmiita ohjelmia: [Esimerkit](/docs/Application/BlockBuilder/Examples).
