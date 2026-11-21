---
id: Indicators
title: Indikátory a monitory
description: "Zobrazujte na panelu baterii, rychlost, náklon, hodnoty senzorů a text."
---

# Indikátory a monitory {#indicators-and-monitors}

Monitory zobrazují během jízdy informace na panelu: stav baterie, rychlost, náklon, vzdálenost k překážce, aktuální rychlostní stupeň nebo režim.

| Monitor | Zobrazuje | Motiv |
|---|---|---|
| **Monitor** | text nebo číslo | všechny motivy |
| **Úroveň baterie** | ukazatel úrovně | placené motivy |
| **Rychloměr** | ukazatel rychlosti | placené motivy |
| **Monitor náklonu** | klopení a klonění modelu | placené motivy |

Monitory informace jen zobrazují; řídit se s nimi nedá. Co zobrazují, rozhoduje program.

## V Rychlých propojeních {#in-quick-links}

Použijte výstup **Indikátor**. Řádek místo hubem končí indikátorem:

- *Hub* (Baterie) → *Indikátor* (Úroveň baterie): baterie hubu na ukazateli.
- *Hub* (Rychlost motoru, port A) → *Indikátor* (Rychloměr).
- *Hub* (Náklon: klopení) → *Indikátor* (Monitor náklonu, Náklon X) a druhý řádek pro Náklon: klonění → Náklon Y.
- *Hub* (Napětí baterie) → *Indikátor* (Monitor): zobrazí hodnotu s jednotkou, například „7.85 V“.

Indikátor zobrazuje hodnotu tak, jak je, takže řádek nemá žádnou operaci. Viz [Indikátor](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## V Logických blocích {#in-logic-blocks}

Použijte bloky ovladačů na obrazovce:

- *zobrazit … na monitoru …* pro Monitor;
- *nastavit … na monitor …* pro Úroveň baterie a Rychloměr;
- *nastavit … na monitor klopení / klonění …* pro Monitor náklonu.

Zobrazit můžete cokoli, co dokážete spočítat: hodnotu senzoru, proměnnou, text jako „Rychlost 2“. Viz [Ovladače na obrazovce](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Tipy {#tips}

- Monitor baterie umístěte do rohu, kde ho nezakryjete prsty.
- Pro delší zprávy použijte víceřádkový Monitor s přetečením **Běžící text** nebo **Posouvat**.
- Program může měnit barvu většiny ovládacích prvků, například zbarvit tlačítko do červena, když je baterie slabá.
