---
id: Indicators
title: Indicatoren en monitors
description: "Toon batterij, snelheid, kanteling, sensorwaarden en tekst op het dashboard."
---

# Indicatoren en monitors {#indicators-and-monitors}

Monitors tonen informatie op het dashboard terwijl je rijdt: batterijniveau, snelheid, kanteling, de afstand tot een obstakel, de huidige versnelling of modus.

| Monitor | Toont | Thema |
|---|---|---|
| **Monitor** | tekst of een getal | alle thema's |
| **Batterijniveau** | een niveaumeter | betaalde thema's |
| **Snelheidsmeter** | een snelheidsmeter | betaalde thema's |
| **Kantelmonitor** | kanteling en rolling van een model | betaalde thema's |

Monitors tonen alleen informatie; je kunt er niet mee besturen. Het programma bepaalt wat ze tonen.

## Bij Snelle koppelingen {#in-quick-links}

Gebruik de uitvoer **Indicator**. De rij eindigt dan met de indicator in plaats van met een hub:

- *Hub* (Batterij) → *Indicator* (Batterijniveau): de batterij van de hub op een meter.
- *Hub* (Motorsnelheid, poort A) → *Indicator* (Snelheidsmeter).
- *Hub* (Kanteling pitch) → *Indicator* (Kantelmonitor, Kanteling X), en een tweede rij voor Kanteling roll → Kanteling Y.
- *Hub* (Batterijspanning) → *Indicator* (Monitor): toont de waarde met de eenheid, bijvoorbeeld “7.85 V”.

De indicator toont de waarde zoals die is, dus de rij heeft geen bewerking. Zie [Indicator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## Bij Logicablokken {#in-logic-blocks}

Gebruik de blokken voor dashboardbedieningselementen:

- *tonen … op … monitor* voor de Monitor;
- *instellen … naar … monitor* voor het Batterijniveau en de Snelheidsmeter;
- *instellen … naar … helling / rol monitor* voor de Kantelmonitor.

Je kunt alles tonen wat je kunt berekenen: een sensorwaarde, een variabele, tekst zoals “Versnelling 2”. Zie [Dashboardbedieningselementen](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Tips {#tips}

- Zet de batterijmonitor in een hoek waar je vingers hem niet bedekken.
- Gebruik voor langere berichten een Monitor met meerdere regels en de overloop **Lichtkrant** of **Scrollen**.
- Het programma kan de kleur van de meeste bedieningselementen wijzigen, bijvoorbeeld om een knop rood te maken als de batterij bijna leeg is.
