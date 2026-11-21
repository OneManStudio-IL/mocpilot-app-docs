---
id: Indicators
title: Wskaźniki i monitory
description: "Pokazuj na panelu baterię, prędkość, nachylenie, wartości czujników i tekst."
---

# Wskaźniki i monitory {#indicators-and-monitors}

Monitory pokazują informacje na panelu podczas jazdy: poziom baterii, prędkość, nachylenie, odległość od przeszkody, bieżący bieg lub tryb.

| Monitor | Pokazuje | Motyw |
|---|---|---|
| **Monitor** | tekst lub liczbę | wszystkie motywy |
| **Poziom baterii** | wskaźnik poziomu | płatne motywy |
| **Prędkościomierz** | wskaźnik prędkości | płatne motywy |
| **Monitor nachylenia** | pochylenie i przechył modelu | płatne motywy |

Monitory tylko wyświetlają informacje; nie da się nimi sterować. To program decyduje, co pokazują.

## W Szybkich połączeniach {#in-quick-links}

Użyj wyjścia **Wskaźnik**. Wiersz kończy się wskaźnikiem zamiast huba:

- *Hub* (Bateria) → *Wskaźnik* (Poziom baterii): bateria huba na wskaźniku.
- *Hub* (Prędkość silnika, port A) → *Wskaźnik* (Prędkościomierz).
- *Hub* (Nachylenie: pochylenie) → *Wskaźnik* (Monitor nachylenia, Nachylenie X) i drugi wiersz dla Nachylenie: przechył → Nachylenie Y.
- *Hub* (Napięcie baterii) → *Wskaźnik* (Monitor): pokazuje wartość z jednostką, np. „7.85 V”.

Wskaźnik pokazuje wartość bez zmian, więc wiersz nie ma operacji. Zobacz [Wskaźnik](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## W Blokach logicznych {#in-logic-blocks}

Użyj bloków kontrolerów panelu:

- *pokaż … na … monitor* dla Monitora;
- *ustawić … do … monitor* dla Poziomu baterii i Prędkościomierza;
- *ustawić … do … pochylenie / obrót monitor* dla Monitora nachylenia.

Możesz pokazać wszystko, co da się obliczyć: wartość czujnika, zmienną, tekst w rodzaju „Bieg 2”. Zobacz [Kontrolery ekranowe](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Wskazówki {#tips}

- Umieść monitor baterii w rogu, gdzie nie zasłonią go palce.
- Do dłuższych komunikatów użyj wielowierszowego Monitora z przepełnieniem **Przewijany tekst** lub **Przewijaj**.
- Program może zmieniać kolor większości elementów sterujących, na przykład zmienić przycisk na czerwony, gdy bateria jest słaba.
