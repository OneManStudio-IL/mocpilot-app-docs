---
id: Indicators
title: Indikátory a monitory
description: "Zobrazujte na paneli batériu, rýchlosť, náklon, hodnoty senzorov a text."
---

# Indikátory a monitory {#indicators-and-monitors}

Monitory zobrazujú na paneli informácie počas jazdy: úroveň batérie, rýchlosť, náklon, vzdialenosť od prekážky, aktuálny prevodový stupeň alebo režim.

| Monitor | Zobrazuje | Téma |
|---|---|---|
| **Monitor** | text alebo číslo | všetky témy |
| **Úroveň batérie** | ukazovateľ úrovne | platené témy |
| **Rýchlomer** | ukazovateľ rýchlosti | platené témy |
| **Monitor náklonu** | náklon modelu dopredu a do strany | platené témy |

Monitory iba zobrazujú informácie; jazdiť sa s nimi nedá. Čo zobrazujú, rozhoduje program.

## V Rýchlych prepojeniach {#in-quick-links}

Použite výstup **Indikátor**. Riadok sa namiesto hubom končí indikátorom:

- *Hub* (Batéria) → *Indikátor* (Úroveň batérie): batéria hubu na ukazovateli.
- *Hub* (Rýchlosť motora, port A) → *Indikátor* (Rýchlomer).
- *Hub* (Náklon dopredu) → *Indikátor* (Monitor náklonu, Náklon X) a druhý riadok pre Náklon do strany → Náklon Y.
- *Hub* (Napätie batérie) → *Indikátor* (Monitor): zobrazí hodnotu s jednotkou, napríklad „7.85 V“.

Indikátor zobrazuje hodnotu tak, ako je, takže riadok nemá operáciu. Pozrite si [Indikátor](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator).

## V Logických blokoch {#in-logic-blocks}

Použite bloky ovládačov na obrazovke:

- *zobraziť … na … monitor* pre Monitor;
- *nastaviť … na … monitor* pre Úroveň batérie a Rýchlomer;
- *nastaviť … na … monitor náklonu / rotácie* pre Monitor náklonu.

Zobraziť môžete čokoľvek, čo dokážete vypočítať: hodnotu senzora, premennú, text ako „Stupeň 2“. Pozrite si [Ovládače na obrazovke](/docs/Application/BlockBuilder/Blocks/DashboardControllers#monitor-blocks).

## Tipy {#tips}

- Monitor batérie umiestnite do rohu, kde ho nezakryjú prsty.
- Na dlhšie správy použite viacriadkový Monitor s pretečením **Bežiaci text** alebo **Posúvať**.
- Program môže meniť farbu väčšiny ovládacích prvkov, napríklad sfarbiť tlačidlo načerveno, keď je batéria slabá.
