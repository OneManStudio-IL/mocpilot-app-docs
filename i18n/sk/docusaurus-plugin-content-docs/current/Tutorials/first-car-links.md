---
id: FirstCarLinks
title: Vaše prvé RC auto s Rýchlymi prepojeniami
description: "Krok za krokom: postavte diaľkovo ovládané auto LEGO s pohonom, riadením servom a svetlami v Rýchlych prepojeniach, bez kódu."
---

import Screenshot from '@site/src/components/Screenshot';

# Vaše prvé RC auto s Rýchlymi prepojeniami {#your-first-rc-car-with-quick-links}

V tomto návode postavíte kompletné diaľkovo ovládané auto v [Rýchlych prepojeniach](/docs/Application/Links/LinksIntroducing): jeden joystick ovláda jazdu aj riadenie a tlačidlo zapína a vypína svetlá. Zaberie to asi 15 minút a nenapíšete ani riadok kódu.

**Čo potrebujete**

- LEGO® Technic™ Hub (88012);
- hnací motor na **porte A**;
- motor riadenia so senzorom polohy (enkodérom) na **porte B**, napríklad motor Technic L alebo XL alebo ľubovoľný uhlový motor Technic. Riadenie musí mať dorazy: kolesá sa dajú natočiť doľava a doprava len po určitú hranicu;
- svetlá LEGO® na **porte C** (voliteľné);
- MOCPilot na telefóne, tablete alebo počítači s Bluetooth.

:::note City Hub
City Hub (88009) má iba dva porty. Hnací motor zapojte do **A**, motor riadenia do **B** a svetlá vynechajte, prípadne pre ne pridajte druhý hub. Všetko ostatné funguje rovnako.
:::

**Výsledok**: profil s tromi riadkami:

| # | Vstup | Spracovanie | Operácia | Výstup |
|---|---|---|---|---|
| 1 | JOY1, Os Y | Plynulo | Motor | Technic Hub, port A |
| 2 | JOY1, Os X | | Servo (Auto) | Technic Hub, port B |
| 3 | BTN1 | Prepínač | Svetlo | Technic Hub, port C |

## 1. Vytvorte profil {#create-the-profile}

1. Prejdite na **Moje profily** a začnite nový profil: na telefóne ťuknite na **+** → **Nový profil**, na tablete ťuknite na **Nový profil** v hlavičke, na počítači zvoľte **Súbor → Nový profil**.
2. Vyberte dlaždicu **Rýchle prepojenia**.
3. Zadajte **Názov**, napríklad „Moje prvé auto“. Obrázok a hashtagy sú zatiaľ voliteľné.
4. Ťuknite na **Vytvoriť**. Profil sa otvorí v editore Rýchlych prepojení s jedným prázdnym riadkom.

Typ programu sa neskôr nedá zmeniť. Viac v časti [Vytvorenie profilu](/docs/Application/Profiles/CreateProfile).

## 2. Pridajte a pripojte hub {#add-the-hub}

1. V editore ťuknite na **Moje huby**.
2. V prázdnom slote ťuknite na **Pridať nový hub**, v zozname vyberte Technic Hub a ťuknite na **Pridať**.
3. Zapnite hub a stlačte jeho tlačidlo. MOCPilot ho nájde a pripojí sa; hub zostane v slote.
4. Ak sa zobrazí dialóg **Vyžaduje sa aktualizácia firmvéru**, ťuknite na **Aktualizovať** a nechajte hub zapnutý a nablízku, kým sa aktualizácia nedokončí. Pozrite si [Aktualizácia firmvéru](/docs/Application/Hubs/FirmwareUpdating).

Tip: otvorte pripojený hub a zobrazte jeho [monitor hubu](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Ukazuje, aké zariadenie je zapojené v každom porte, takže môžete motory skontrolovať ešte pred zostavením riadkov.

Viac v časti [Pridanie a pripojenie hubu](/docs/Application/Hubs/ConnectingHubs).

## 3. Umiestnite ovládacie prvky na panel {#dashboard}

1. Otvorte **Panel** a ťuknite na **+** (**Pridať ovládač**).
2. V skupine **Joysticky** vyberte **Joystick** a ťuknite na **Pridať na panel**. Dostane názov **JOY1**. **Typ osí** nechajte na **Obe osi (X, Y)**: hore a dole bude ovládať jazdu, doľava a doprava riadenie.
3. Znova ťuknite na **+**. V skupine **Tlačidlá a prepínače** vyberte **Tlačidlo** a ťuknite na **Pridať na panel**. Dostane názov **BTN1**.
4. Presuňte joystick na ľavú stranu a tlačidlo na pravú, tam, kde budete mať palce. Ťuknutím na ovládací prvok zmeníte jeho veľkosť (**S**, **M** alebo **L**) alebo vzhľad.

<Screenshot name="tutorial-car-dashboard" alt="Panel s joystickom JOY1 vľavo a tlačidlom BTN1 vpravo" width={900} />

Chcete jazdu a riadenie ovládať každým palcom zvlášť? Pridajte namiesto toho dva joysticky: **JOY1** s **Iba vertikálne (Y)** a **JOY2** s **Iba horizontálne (X)** a v riadku riadenia použite JOY2.

Viac v častiach [Pridanie a usporiadanie ovládacích prvkov](/docs/Application/Dashboard/ArrangingControls) a [Typy ovládacích prvkov](/docs/Application/Dashboard/ControlTypes).

### Možnosť: volant a pedále {#wheel-and-pedals}

Ak máte [špeciálne ovládacie prvky](/docs/Application/Dashboard/SpecialControls) **Volant** a **Pedále**, môžete ich použiť namiesto joysticku. V kroku 4 zostavte riadok 1 zo vstupu [Vozidlo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) s **Výstup** nastaveným na **Rýchlosť** (zrýchľuje a spomaľuje ako skutočné auto, takže Plynulo nepotrebujete) a riadok 2 zo vstupu **Volant** s kanálom **Uhol natočenia volantu**.

## 4. Zostavte riadky {#rows}

Vráťte sa do programu. Paleta dole má tri karty: **Vstupy**, **Spracovanie** a **Výstupy**. Každý riadok sa číta zľava doprava: vstup → spracovanie → operácia → hub. Ako editor funguje: [Úvod do Rýchlych prepojení](/docs/Application/Links/LinksIntroducing).

### Riadok 1: jazda {#row-drive}

1. Na karte **Vstupy** presuňte **JOY1** s kanálom **Os Y** do prázdneho riadka („Nový riadok: vstup“). Pod ním sa objaví nový prázdny riadok.
2. Na karte **Spracovanie** presuňte **Plynulo** za vstup. Predvolené hodnoty **Rozbeh (na plnú rýchlosť)** a **Spomalenie (do zastavenia)** 0,5 s sú dobrý začiatok.
3. Na karte **Výstupy** presuňte **Motor** za Plynulo.
4. Presuňte výstup **Technic Hub** za Motor a ťuknite na štítok portu **A**.

### Riadok 2: riadenie {#row-steering}

1. Presuňte **JOY1** s kanálom **Os X** do ďalšieho prázdneho riadka.
2. Presuňte **Servo** z karty **Výstupy**.
3. Ťuknite na blok Servo a nastavte **Kalibrácia** na **Auto**.
4. Presuňte výstup **Technic Hub** za Servo a ťuknite na **B**.

V režime **Auto** sa motor riadenia pri každom spustení programu otočí k obom dorazom; stred sa stane stredovou polohou a rozsah pohybu uhlom riadenia. Ak to chcete vyskúšať hneď, ťuknite v nastaveniach Serva na **Kalibrovať teraz**, kým je hub pripojený. Ak kalibrácia zlyhá, skontrolujte hub, motor a to, či riadenie naozaj má dorazy.

<Screenshot name="links-servo-settings" alt="Nastavenia bloku Servo" width={900} />

Nemáte dorazy? Použite **Ručne**: rukou natočte kolesá rovno, ťuknite na **Nastaviť ako nulu** a zvoľte **Uhol**. Pozrite si [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Riadok 3: svetlá {#row-lights}

1. Presuňte **BTN1** do ďalšieho prázdneho riadka.
2. Presuňte **Prepínač** z karty **Spracovanie**. Z tlačidla urobí prepínač: prvým stlačením zapnete, ďalším vypnete.
3. Presuňte **Svetlo** z karty **Výstupy**.
4. Presuňte výstup **Technic Hub** za Svetlo a ťuknite na **C**.

<Screenshot name="tutorial-car-links-rows" alt="Tri hotové riadky auta: jazda, riadenie a svetlá" width={900} />

Keď sú všetky tri riadky pripravené, tlačidlo **Problémy** na hornej lište ukazuje zelenú značku. Červený „!“ udáva, koľko problémov zostáva; ťuknite naň a potom na problém, a prejdete na príslušný riadok. Pozrite si [Spustenie a riešenie problémov](/docs/Application/Links/Problems).

## 5. Spustite a otestujte {#run}

1. Postavte auto na podstavec alebo ho držte tak, aby kolesá neboli na stole.
2. Stlačte **Spustiť**. Motor riadenia sa kalibruje: otočí sa na obe strany a vráti sa do stredu.
3. Pohnite joystickom hore a dole: auto ide dopredu a dozadu a plynulo sa rozbieha aj zastavuje. Pohnite ním doľava a doprava: kolesá zatáčajú.
4. Stlačte **BTN1**: svetlá sa zapnú. Stlačte ho znova: zhasnú.
5. Stlačením **Zastaviť** sa vrátite k úpravám.

Kým program beží, každý spoj medzi blokmi ukazuje hodnotu, ktorá ním prechádza, takže môžete sledovať signál od joysticku až po hub.

<Screenshot name="links-live-values" alt="Spustený program Rýchlych prepojení so živými hodnotami na spojoch" width={900} />

Viac v časti [Riadenie modelu (Spustiť)](/docs/Application/Profiles/PlayMode).

## 6. Dolaďte {#tune}

Najprv stlačte **Zastaviť**: kým program beží, riadky sa nedajú upravovať.

- **Auto ide dozadu, keď tlačíte hore?** Pridajte do riadka 1 **Invertovať**. To isté funguje v riadku 2, ak kolesá zatáčajú opačne.
- **Motor bzučí alebo sa pomaly hýbe, aj keď joystick pustíte?** Pridajte do riadka 1 pred Plynulo **Mŕtva zóna**. Predvolená **Zóna** 10 % je dobrý začiatok.
- **Príliš rýchle?** Pridajte do riadka 1 **Obmedzenie**, napríklad s **Maximum** 50 %.
- **Príliš pomalé reakcie?** Ťuknite na Plynulo a zvoľte kratší čas alebo **Okamžite**.

Vhodné poradie pre riadok jazdy je *Mŕtva zóna → Obmedzenie → Plynulo*. Všetky nastavenia: [Bloky spracovania](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Voliteľne: jazda s herným ovládačom {#gamepad}

1. Spárujte herný ovládač v štýle Xbox alebo PlayStation so zariadením v systémových nastaveniach Bluetooth.
2. V editore otvorte **Herný ovládač** a zapnite **Povoliť bloky gamepadu**.
3. V každom riadku presuňte vstup z panela späť na paletu, aby ste ho odstránili, a na jeho miesto presuňte vstup **Herný ovládač**. Nastavte jeho **Vstup**: **Ľavá páčka Y** pre riadok 1, **Pravá páčka X** pre riadok 2 a **A** (**Krížik** na PlayStation) pre riadok 3.

Každý port môže patriť iba jednému riadku, takže riadok ovláda port buď z panela, alebo z herného ovládača. Viac v časti [Herný ovládač](/docs/Application/Dashboard/Gamepad).

## Ak sa niečo nehýbe {#if-something-does-not-move}

1. Je hub pripojený? Skontrolujte **Moje huby** a bodku pripojenia na bloku Hub.
2. Sú motory zapojené do portov, ktoré ste zvolili v riadkoch?
3. Ukazuje tlačidlo **Problémy** zelenú značku a je každý riadok zapnutý?
4. Beží program?
5. Spustite program a sledujte živé hodnoty: ak sa hodnota na vstupe mení, ale motor sa netočí, skontrolujte hub a port.

Správa ako „Port B: toto zariadenie nemôže fungovať ako servo (je potrebný motor s enkodérom)“ znamená, že motor v tomto porte nemá enkodér. Ďalšie správy a riešenia: [Spustenie a riešenie problémov](/docs/Application/Links/Problems) a [Riešenie problémov](/docs/Help/Troubleshooting).

## 8. Uložte a zdieľajte {#save-and-share}

Tlačidlo Uložiť neexistuje: profil si vaše zmeny pamätá sám. Keď ste prihlásení, [synchronizuje sa](/docs/Application/Account/Sync) aj do vašich ďalších zariadení.

- **Zdieľať ako súbor**: na stránke **Moje profily** ťuknite na karte profilu na **Zdieľať** (na počítači **Zdieľať…**). Získate súbor `.dat`, ktorý môžete poslať kamarátovi. Pozrite si [Správa profilov](/docs/Application/Profiles/ManageProfiles).
- **Publikovať v katalógu**: otvorte **Upraviť profil** a ťuknite na **Odoslať do katalógu**. Najprv pridajte obrázok, popis a hashtag. Pozrite si [Katalóg a zverejňovanie](/docs/Application/Profiles/Catalog).

## Ďalšie kroky {#next-steps}

- Sledujte batériu: pridajte na panel **Úroveň batérie** alebo textový **Monitor** a riadok *Technic Hub (Batéria) → Indikátor*. Pozrite si [Indikátory a monitory](/docs/Application/Dashboard/Indicators).
- Postavte to isté auto v Logických blokoch: [To isté auto v Logických blokoch](/docs/Tutorials/FirstCarBlocks).
- Ďalšie recepty: tank, žeriav a vlak v [Príkladoch](/docs/Application/Links/Examples).
- Dajte panelu nový vzhľad pomocou [tém](/docs/Application/Themes/ThemesOverview).
