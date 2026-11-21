---
id: Indicators
title: Indikatorer og monitorer
description: "Vis batteri, hastighet, helling, sensorverdier og tekst på dashboardet."
---

# Indikatorer og monitorer {#indicators-and-monitors}

Monitorer viser informasjon på dashboardet mens du kjører: batterinivå, hastighet, helling, avstanden til en hindring, det nåværende giret eller modusen.

| Monitor | Viser | Tema |
|---|---|---|
| **Monitor** | tekst eller et tall | alle temaer |
| **Batterinivå** | en nivåmåler | betalte temaer |
| **Fartsmåler** | en hastighetsmåler | betalte temaer |
| **Hellingsmonitor** | stamp og rull for en modell | betalte temaer |

Monitorer viser bare informasjon; du kan ikke kjøre med dem. Programmet bestemmer hva de viser.

## I Hurtigkoblinger {#in-quick-links}

Bruk utgangen **Indikator**. Raden slutter med indikatoren i stedet for en hub:

- *Hub* (Batteri) → *Indikator* (Batterinivå): hubbatteriet på en måler.
- *Hub* (Motorhastighet, port A) → *Indikator* (Fartsmåler).
- *Hub* (Helling pitch) → *Indikator* (Hellingsmonitor, Helling X), og en rad til for Helling roll → Helling Y.
- *Hub* (Batterispenning) → *Indikator* (Monitor): viser verdien med enhet, for eksempel «7.85 V».

Indikatoren viser verdien som den er, så raden har ingen handling. Se [Indikator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## I Logikkblokker {#in-logic-blocks}

Bruk blokkene for dashboardkontroller:

- *vis … på … skjerm* for Monitor;
- *sett … til … skjerm* for Batterinivå og Fartsmåler;
- *sett … til … stigning / rulling skjerm* for Hellingsmonitor.

Du kan vise alt du kan regne ut: en sensorverdi, en variabel, tekst som «Gir 2». Se [Skjermkontrollere](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Tips {#tips}

- Plasser batterimonitoren i et hjørne der fingrene dine ikke dekker den.
- For lengre meldinger bruker du en Monitor med flere linjer og overflyt satt til **Rulletekst** eller **Rull**.
- Programmet kan endre fargen på de fleste kontroller, for eksempel for å gjøre en knapp rød når batteriet er lavt.
