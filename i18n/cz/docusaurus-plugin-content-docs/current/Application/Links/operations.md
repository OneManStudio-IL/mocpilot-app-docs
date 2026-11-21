---
id: Operations
title: Operace a výstupy
description: "Operace Rychlých propojení (Motor, Servo, Světlo a další) a výstupy (Hub, Indikátor, LED hubu, LED matice, Kalibrovat serva)."
---

import Screenshot from '@site/src/components/Screenshot';

# Operace a výstupy {#operations-and-outputs}

Karta **Výstupy** v paletě obsahuje operace a výstupy.

- **Operace** říká, *co* se má udělat (otočit motorem, zatočit, zablikat světlem). Vždy za ní následuje výstup **Hub**, který říká, *kde*: na kterém hubu a kterých portech.
- **Přímý výstup** (Indikátor, LED hubu, LED matice, Kalibrovat serva) ukončuje řádek sám, bez operace.

Běžné operace (Motor, Servo, Motor na dobu, Světlo) jsou k dispozici vždy. Operace pro konkrétní huby se objeví, jen když je některý hub profilu podporuje. Všechna nastavení s hodnotami a výchozím stavem: [Bloky operací a výstupů](/docs/Application/Links/Blocks/OutputBlocks).

## Motory a světla {#motors-and-lights}

| Operace | Co dělá | Typické použití |
|---|---|---|
| [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | pohání motor hodnotou vstupu; 0 ho zastaví | jízda, navijáky |
| [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) | natočí motor s enkodérem do polohy, která sleduje vstup | řízení |
| [Motor na dobu](/docs/Application/Links/Blocks/OutputBlocks#op-timed) | při každém stisku pohání motor nastavenou dobu | dveře, sklápěče |
| [Otočit o stupně](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | při každém stisku otočí motorem o nastavený úhel | krokování, otočné plošiny |
| [Jet do polohy](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | pošle úhlový motor do jedné polohy při zapnutí a do jiné při vypnutí | klapky, voliče převodů |
| [Světlo](/docs/Application/Links/Blocks/OutputBlocks#op-light) | rozsvítí světla LEGO®, trvale nebo blikavě | světlomety, majáky, blinkry |
| [Barva portu](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor) | obarví LED portů BuWizz 3.0 Pro | stavové barvy |
| [Světla senzoru](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights) | rozsvítí „oči“ senzoru vzdálenosti Technic (Robot Inventor) | tváře robotů |

### Řízení pomocí Serva {#steering-with-servo}

Servo potřebuje motor s enkodérem a mechanismus řízení, který buď vystředíte ručně, nebo který má koncové dorazy.

- **Ručně**: otočte osu do středu a klepněte na **Nastavit jako nulu**; dolaďte tlačítky **◀ 5°** / **5° ▶**. Pak zvolte **Úhel** a pokud kola pořád táhnou na jednu stranu, také **Střed**.
- **Auto**: při každém spuštění se motor otočí k oběma dorazům, střed se stane nulou a rozsah pohybu úhlem. **Kalibrovat teď** to spustí okamžitě. Zprávy: „Kalibrace: motor se otáčí k oběma dorazům…“, „Zkalibrováno: servo se otáčí o ±…°, střed je nula“, „Kalibrace selhala: zkontrolujte hub, motor a zda má osa koncové dorazy“.

U **Technic Move Hubu** řídí hub sám a sám si kalibruje hřeben řízení; uplatní se jen režim kalibrace.

<Screenshot name="links-servo-settings" alt="Nastavení bloku Servo" width={900} />

## Operace pro celý hub {#operations-for-the-whole-hub}

Tyto operace ovládají hub jako celek, takže blok Hub za nimi nemá porty.

| Operace | Hub | Co dělá |
|---|---|---|
| [Brzda](/docs/Application/Links/Blocks/OutputBlocks#op-brake) | Technic Move | brzdí, dokud je vstup zapnutý |
| [Boost](/docs/Application/Links/Blocks/OutputBlocks#op-boost) | Technic Move | při zapnutí režim výkonu boost, při vypnutí normální |
| [Výkonový pulz](/docs/Application/Links/Blocks/OutputBlocks#op-pulse) | Technic Move | jeden výkonový pulz na stisk (jen s konfigurací Batmobile™ Tumbler) |
| [Režim výkonu](/docs/Application/Links/Blocks/OutputBlocks#op-powermode) | BuWizz 2.0 | přepíná režim výkonu: Pomalé, Normální, Rychlé, Ludicrous |
| [Kanál](/docs/Application/Links/Blocks/OutputBlocks#op-channel) | Mould King | přepíná řídicí kanál: A, B, C |

## Výstupy {#indicator}

- [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out): hub a jeho porty. Viz [Blok Hub a porty](/docs/Application/Links/HubsAndPorts).
- [Indikátor](/docs/Application/Links/Blocks/OutputBlocks#dash-indicator): zobrazí hodnotu na monitoru panelu (textový monitor, Úroveň baterie, Rychloměr, Monitor náklonu). Hned za senzorem hubu ukazuje textový monitor skutečnou hodnotu s jednotkou. Indikátor zobrazuje hodnotu tak, jak je, takže řádek nemá operaci. Viz [Indikátory a monitory](/docs/Application/Dashboard/Indicators).
- [LED hubu](/docs/Application/Links/Blocks/OutputBlocks#hub-led): barevné světlo hubu LEGO®, jedna barva, dokud je vstup zapnutý, a jiná, dokud je vypnutý.
- [LED matice](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix): světelná matice hubu Robot Inventor: ukazatel úrovně, číslo nebo obrázek.
- [Kalibrovat serva](/docs/Application/Links/Blocks/OutputBlocks#cmd-calibrate): znovu zkalibruje každé Servo v režimu **Auto**. Dejte ho na tlačítko panelu: *BTN3* → *Kalibrovat serva*.

## Když se program zastaví {#when-the-program-stops}

Motory se zastaví, LED matice se vymaže a barvy portů i světla senzoru zhasnou.
