---
id: Indicators
title: Indikatorer og skærme
description: "Vis batteri, hastighed, hældning, sensorværdier og tekst på dashboardet."
---

# Indikatorer og skærme {#indicators-and-monitors}

Skærme viser information på dashboardet, mens du kører: batteriniveau, hastighed, hældning, afstanden til en forhindring, det aktuelle gear eller den aktuelle tilstand.

| Skærm | Viser | Tema |
|---|---|---|
| **Skærm** | tekst eller et tal | alle temaer |
| **Batteriniveau** | en niveaumåler | betalte temaer |
| **Fartmåler** | en hastighedsmåler | betalte temaer |
| **Tilt skærm** | en models pitch og rulning | betalte temaer |

Skærme viser kun information; du kan ikke køre med dem. Programmet bestemmer, hvad de viser.

## I Hurtige forbindelser {#in-quick-links}

Brug outputtet **Indikator**. Rækken slutter med indikatoren i stedet for en hub:

- *Hub* (Batteri) → *Indikator* (Batteriniveau): hubbens batteri på en måler.
- *Hub* (Motorhastighed, port A) → *Indikator* (Fartmåler).
- *Hub* (Hældning pitch) → *Indikator* (Tilt skærm, Hældning X) og en række mere for Hældning roll → Hældning Y.
- *Hub* (Batterispænding) → *Indikator* (Skærm): viser værdien med enhed, for eksempel "7.85 V".

Indikatoren viser værdien, som den er, så rækken har ingen handling. Se [Indikator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## I Logikblokke {#in-logic-blocks}

Brug blokkene til skærmkontrollere:

- *vis … på … skærm* til Skærm;
- *sæt … til … skærm* til Batteriniveau og Fartmåler;
- *sæt … til … hældning / rulning skærm* til Tilt skærm.

Du kan vise alt, hvad du kan beregne: en sensorværdi, en variabel, tekst som "Gear 2". Se [Skærmkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Tips {#tips}

- Placer batteriskærmen i et hjørne, hvor dine fingre ikke dækker den.
- Til længere meddelelser kan du bruge en Skærm med flere linjer og tekstoverløbet **Rulletekst** eller **Rul**.
- Programmet kan ændre farven på de fleste kontroller, for eksempel for at gøre en knap rød, når batteriet er lavt.
