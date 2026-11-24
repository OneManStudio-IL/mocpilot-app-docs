---
id: Indicators
title: Indicatoare și monitoare
description: "Afișează pe tabloul de bord bateria, viteza, înclinarea, valorile senzorilor și text."
---

# Indicatoare și monitoare {#indicators-and-monitors}

Monitoarele afișează informații pe tabloul de bord în timp ce conduci: nivelul bateriei, viteza, înclinarea, distanța până la un obstacol, treapta de viteză sau modul curent.

| Monitor | Afișează | Temă |
|---|---|---|
| **Monitor** | text sau un număr | toate temele |
| **Nivelul bateriei** | un indicator de nivel | temele plătite |
| **Vitezometru** | un indicator de viteză | temele plătite |
| **Monitor înclinat** | tangajul și ruliul unui model | temele plătite |

Monitoarele doar afișează informații; nu poți conduce cu ele. Programul decide ce afișează.

## În Legături rapide {#in-quick-links}

Folosește ieșirea **Indicator**. Rândul se termină cu indicatorul în loc de un hub:

- *Hub* (Baterie) → *Indicator* (Nivelul bateriei): bateria hubului pe un indicator.
- *Hub* (Viteza motorului, portul A) → *Indicator* (Vitezometru).
- *Hub* (Înclinare: tangaj) → *Indicator* (Monitor înclinat, Înclinare X) și un al doilea rând pentru Înclinare: ruliu → Înclinare Y.
- *Hub* (Tensiunea bateriei) → *Indicator* (Monitor): afișează valoarea cu unitatea de măsură, de exemplu „7.85 V”.

Indicatorul afișează valoarea așa cum este, așa că rândul nu are operație. Vezi [Indicator](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## În Blocuri logice {#in-logic-blocks}

Folosește blocurile controlerelor de pe ecran:

- *afișează … pe monitorul …* pentru Monitor;
- *setează … la monitorul …* pentru Nivelul bateriei și Vitezometru;
- *setează … la monitorul de tangaj / ruliu …* pentru Monitor înclinat.

Poți afișa orice poți calcula: valoarea unui senzor, o variabilă, un text precum „Treapta 2”. Vezi [Controlere pe ecran](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Sfaturi {#tips}

- Pune monitorul bateriei într-un colț unde degetele nu îl acoperă.
- Pentru mesaje mai lungi, folosește un Monitor pe mai multe linii, cu depășirea **Text derulant** sau **Derulează**.
- Programul poate schimba culoarea majorității comenzilor, de exemplu ca un buton să devină roșu când bateria este descărcată.
