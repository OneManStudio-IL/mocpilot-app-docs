---
id: Operations
title: Operácie a výstupy
description: "Operácie Rýchlych prepojení (Motor, Servo, Svetlo a ďalšie) a výstupy (Hub, Indikátor, LED hubu, LED matica, Kalibrovať servá)."
---

import Screenshot from '@site/src/components/Screenshot';

# Operácie a výstupy {#operations-and-outputs}

Karta palety **Výstupy** obsahuje operácie a výstupy.

- **Operácia** hovorí, *čo* sa má urobiť (otočiť motorom, zatočiť, zablikať svetlom). Vždy za ňou nasleduje výstup **Hub**, ktorý hovorí *kde*: ktorý hub a ktoré porty.
- **Priamy výstup** (Indikátor, LED hubu, LED matica, Kalibrovať servá) ukončí riadok sám, bez operácie.

Bežné operácie (Motor, Servo, Motor na čas, Svetlo) sú k dispozícii vždy. Operácie špecifické pre hub sa zobrazia iba vtedy, keď ich podporuje niektorý hub profilu. Všetky nastavenia s hodnotami a predvolenými hodnotami: [Bloky operácií a výstupov](/docs/Application/Links/Blocks/OutputBlocks).

## Motory a svetlá {#motors-and-lights}

| Operácia | Čo robí | Typické použitie |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | poháňa motor hodnotou vstupu; 0 ho zastaví | jazda, navijaky |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | natočí motor s enkodérom do polohy, ktorá sleduje vstup | riadenie |
| [Motor na čas](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | pri každom stlačení poháňa motor nastavený čas | dvere, sklápače |
| [Otočiť o stupne](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | pri každom stlačení otočí motor o nastavený uhol | krokovanie, otočné plošiny |
| [Ísť do polohy](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | pošle uhlový motor do jednej polohy pri zapnutí a do inej pri vypnutí | klapky, voliče prevodov |
| [Svetlo](/docs/Application/Links/Blocks/OutputBlocks#op-light) | rozsvieti svetlá LEGO®, trvalo alebo blikajúco | svetlomety, majáky, smerovky |
| [Farba portu](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | zafarbí LED portov hubu BuWizz 3.0 Pro | stavové farby |
| [Svetlá senzora](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | rozsvieti „oči“ senzora vzdialenosti Technic (Robot Inventor) | tváre robotov |

### Riadenie pomocou serva {#steering-with-servo}

Servo potrebuje motor s enkodérom a mechanizmus riadenia, ktorý buď vycentrujete ručne, alebo má koncové dorazy.

- **Ručne**: otočte os do stredu a ťuknite na **Nastaviť ako nulu**; doladíte tlačidlami **◀ 5°** / **5° ▶**. Potom vyberte **Uhol** a ak kolesá stále ťahajú na jednu stranu, aj **Stred**.
- **Auto**: pri každom spustení sa motor otočí k obom koncovým dorazom, stred sa stane nulou a rozsah pohybu uhlom. **Kalibrovať teraz** to spustí okamžite. Hlásenia: „Kalibrácia: motor sa otáča k obom koncovým dorazom…“, „Kalibrované: servo sa otáča o ±…°, stred je nula“, „Kalibrácia zlyhala: skontrolujte hub, motor a či má os koncové dorazy“.

Na **Technic Move Hube** riadi a kalibruje svoj hrebeň samotný hub; uplatní sa iba režim kalibrácie.

<Screenshot name="links-servo-settings" alt="Nastavenia bloku Servo" width={900} />

## Operácie pre celý hub {#operations-for-the-whole-hub}

Tieto operácie ovládajú hub ako celok, preto blok Hub za nimi nemá porty.

| Operácia | Hub | Čo robí |
|---|---|---|
| [Brzda](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | brzdí, kým je vstup zapnutý |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | pri zapnutí výkonový režim boost, pri vypnutí normálny |
| [Výkonový impulz](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | jeden výkonový impulz na stlačenie (iba s konfiguráciou Batmobile™ Tumbler) |
| [Režim výkonu](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | prepína režim výkonu: Pomaly, Normálny, Rýchlo, Ludicrous |
| [Kanál](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | prepína ovládací kanál: A, B, C |

## Výstupy {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): hub a jeho porty. Pozrite si [Blok Hub a porty](/docs/Application/Links/HubsAndPorts).
- [Indikátor](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): zobrazí hodnotu na monitore panela (textový monitor, Úroveň batérie, Rýchlomer, Monitor náklonu). Hneď za senzorom hubu ukazuje textový monitor skutočnú hodnotu s jednotkou. Indikátor zobrazuje hodnotu tak, ako je, preto riadok nemá operáciu. Pozrite si [Indikátory a monitory](/docs/Application/Dashboard/Indicators).
- [LED hubu](/docs/Application/Links/Blocks/OutputBlocks#hub-led): farebné svetlo hubu LEGO®, jedna farba, kým je vstup zapnutý, a iná, kým je vypnutý.
- [LED matica](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): svetelná matica hubu Robot Inventor: ukazovateľ úrovne, číslo alebo obrázok.
- [Kalibrovať servá](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): znova nakalibruje každé Servo v režime **Auto**. Priraďte ho tlačidlu na paneli: *BTN3* → *Kalibrovať servá*.

## Keď sa program zastaví {#when-the-program-stops}

Motory sa zastavia, LED matica sa vymaže a farby portov aj svetlá senzora zhasnú.
