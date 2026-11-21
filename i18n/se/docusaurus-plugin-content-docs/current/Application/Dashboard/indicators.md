---
id: Indicators
title: Indikatorer och monitorer
description: "Visa batteri, hastighet, lutning, sensorvärden och text på instrumentpanelen."
---

# Indikatorer och monitorer

Monitorer visar information på instrumentpanelen medan du kör: batterinivå, hastighet, lutning, avståndet till ett hinder, aktuell växel eller aktuellt läge.

| Monitor | Visar | Tema |
|---|---|---|
| **Monitor** | text eller ett tal | alla teman |
| **Batterinivå** | en nivåmätare | betalda teman |
| **Hastighetsmätare** | en hastighetsmätare | betalda teman |
| **Lutningsmonitor** | en modells lutning framåt och i sidled | betalda teman |

Monitorer visar bara information; du kan inte köra med dem. Programmet bestämmer vad de visar.

## I Snabbkopplingar {#in-quick-links}

Använd utgången **Indikator**. Raden slutar med indikatorn i stället för en hubb:

- *Hubb* (Batteri) → *Indikator* (Batterinivå): hubbens batteri på en mätare.
- *Hubb* (Motorhastighet, port A) → *Indikator* (Hastighetsmätare).
- *Hubb* (Lutning framåt) → *Indikator* (Lutningsmonitor, Lutning X), och en andra rad för Lutning i sidled → Lutning Y.
- *Hubb* (Batterispänning) → *Indikator* (Monitor): visar värdet med enhet, till exempel ”7.85 V”.

Indikatorn visar värdet som det är, så raden har ingen åtgärd. Se [Indikator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## I Logikblock {#in-logic-blocks}

Använd blocken för instrumentpanelens kontroller:

- *visa … på monitor …* för Monitor;
- *ställ in … till monitor …* för Batterinivå och Hastighetsmätare;
- *ställ in … till lutnings- / rullningsmonitor …* för Lutningsmonitor.

Du kan visa allt som går att beräkna: ett sensorvärde, en variabel, text som ”Växel 2”. Se [Instrumentpanelens kontroller](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Tips {#tips}

- Placera batterimonitorn i ett hörn där fingrarna inte täcker den.
- För längre meddelanden använder du en Monitor med flera rader och överflödet **Rullande text** eller **Rulla**.
- Programmet kan ändra färgen på de flesta kontroller, till exempel för att göra en knapp röd när batteriet är lågt.
