---
id: FirstCarLinks
title: Vaše první RC auto s Rychlými propojeními
description: "Krok za krokem: postavte dálkově ovládané auto LEGO s pohonem, servo řízením a světly v Rychlých propojeních, bez kódu."
---

import Screenshot from '@site/src/components/Screenshot';

# Vaše první RC auto s Rychlými propojeními {#your-first-rc-car-with-quick-links}

V tomto návodu postavíte v [Rychlých propojeních](/docs/Application/Links/LinksIntroducing) kompletní dálkově ovládané auto: jeden joystick jezdí a zatáčí a tlačítko zapíná a vypíná světla. Zabere to asi 15 minut a nenapíšete ani řádek kódu.

**Co potřebujete**

- LEGO® Technic™ Hub (88012);
- motor pohonu na **portu A**;
- motor řízení se snímačem polohy (enkodérem) na **portu B**, například motor Technic L nebo XL nebo libovolný úhlový motor Technic. Řízení musí mít koncové dorazy: kola se mohou natočit doleva a doprava jen do určité míry;
- světla LEGO® na **portu C** (volitelné);
- MOCPilot na telefonu, tabletu nebo počítači s Bluetooth.

:::note City Hub
City Hub (88009) má jen dva porty. Motor pohonu dejte na **A**, motor řízení na **B** a světla vynechte, nebo pro ně přidejte druhý hub. Všechno ostatní funguje stejně.
:::

**Výsledek**: profil se třemi řádky:

| # | Vstup | Zpracování | Operace | Výstup |
|---|---|---|---|---|
| 1 | JOY1, Osa Y | Plynule | Motor | Technic Hub, port A |
| 2 | JOY1, Osa X | | Servo (Auto) | Technic Hub, port B |
| 3 | BTN1 | Přepínač | Světlo | Technic Hub, port C |

## 1. Vytvořte profil {#create-the-profile}

1. Přejděte na **Moje profily** a začněte nový profil: na telefonu klepněte na **+** → **Nový profil**, na tabletu klepněte na **Nový profil** v záhlaví, na počítači zvolte **Soubor → Nový profil**.
2. Zvolte dlaždici **Rychlá propojení**.
3. Zadejte **Název**, například „Moje první auto“. Obrázek a hashtagy jsou zatím nepovinné.
4. Klepněte na **Vytvořit**. Profil se otevře v editoru Rychlých propojení s jedním prázdným řádkem.

Typ programu později změnit nelze. Více v článku [Vytvoření profilu](/docs/Application/Profiles/CreateProfile).

## 2. Přidejte a připojte hub {#add-the-hub}

1. V editoru klepněte na **Moje huby** (na počítači **Huby** na horní liště).
2. Ve volném slotu klepněte na **Přidat nový hub**, v seznamu zvolte Technic Hub a klepněte na **Přidat**.
3. Zapněte hub a stiskněte jeho tlačítko. MOCPilot ho najde a připojí se; hub zůstane ve slotu.
4. Pokud se objeví dialog **Je vyžadována aktualizace firmwaru**, klepněte na **Aktualizovat** a nechte hub zapnutý a nablízku, dokud aktualizace neskončí. Viz [Aktualizace firmwaru](/docs/Application/Hubs/FirmwareUpdating).

Tip: otevřete připojený hub a podívejte se na jeho [monitor hubu](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Ukazuje, jaké zařízení je zapojené do kterého portu, takže motory můžete zkontrolovat ještě před sestavením řádků.

Více v článku [Přidání a připojení hubu](/docs/Application/Hubs/ConnectingHubs).

## 3. Umístěte ovládací prvky na panel {#dashboard}

1. Otevřete **Panel** a klepněte na **+** (**Přidat ovladač**; na počítači **+ Ovladač**).
2. Ve skupině **Joystick** zvolte **Joystick** a klepněte na **Přidat na panel**. Dostane název **JOY1**. **Typ osy** nechte na **Obě osy (X, Y)**: nahoru a dolů se bude jezdit, doleva a doprava zatáčet.
3. Znovu klepněte na **+**. Ve skupině **Tlačítka a přepínače** zvolte **Tlačítko** a klepněte na **Přidat na panel**. Dostane název **BTN1**.
4. Přetáhněte joystick na levou stranu a tlačítko na pravou, kde budete mít palce. Klepnutím na ovládací prvek změníte jeho velikost (**S**, **M** nebo **L**) nebo styl.

<Screenshot name="tutorial-car-dashboard" alt="Panel s joystickem JOY1 vlevo a tlačítkem BTN1 vpravo" width={900} />

Chcete jezdit a zatáčet každým palcem zvlášť? Přidejte místo toho dva joysticky: **JOY1** s **Pouze svisle (Y)** a **JOY2** s **Pouze vodorovně (X)** a v řádku řízení použijte JOY2.

Více v článcích [Přidání a uspořádání ovládacích prvků](/docs/Application/Dashboard/ArrangingControls) a [Typy ovládacích prvků](/docs/Application/Dashboard/ControlTypes).

### Možnost: volant a pedály {#wheel-and-pedals}

Pokud máte [speciální ovládací prvky](/docs/Application/Dashboard/SpecialControls) **Volant** a **Pedály**, můžete je použít místo joysticku. V kroku 4 sestavte řádek 1 ze vstupu [Vozidlo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) s **Výstupem** nastaveným na **Rychlost** (zrychluje a zpomaluje jako skutečné auto, takže Plynule nepotřebujete) a řádek 2 ze vstupu **Volant** s kanálem **Úhel řízení**.

## 4. Sestavte řádky {#rows}

Vraťte se do programu. Paleta dole má tři karty: **Vstupy**, **Zpracování** a **Výstupy**. Každý řádek probíhá zleva doprava: vstup → zpracování → operace → hub. Jak editor funguje: [Úvod do Rychlých propojení](/docs/Application/Links/LinksIntroducing).

### Řádek 1: jízda {#row-drive}

1. Na kartě **Vstupy** přetáhněte **JOY1** s kanálem **Osa Y** do prázdného řádku („Nový řádek: vstup“). Pod ním se objeví nový prázdný řádek.
2. Na kartě **Zpracování** přetáhněte za vstup blok **Plynule**. Výchozí hodnoty **Zrychlení (na plnou rychlost)** a **Zpomalení (do zastavení)** 0,5 s jsou dobrý začátek.
3. Na kartě **Výstupy** přetáhněte za Plynule blok **Motor**.
4. Za Motor přetáhněte výstup **Technic Hub** a klepněte na čip portu **A**.

### Řádek 2: řízení {#row-steering}

1. Přetáhněte **JOY1** s kanálem **Osa X** do dalšího prázdného řádku.
2. Z karty **Výstupy** přetáhněte **Servo**.
3. Klepněte na blok Servo a nastavte **Kalibrace** na **Auto**.
4. Za Servo přetáhněte výstup **Technic Hub** a klepněte na **B**.

V režimu **Auto** se motor řízení při každém spuštění programu natočí k oběma koncovým dorazům; střed se stane nulou a rozsah pohybu úhlem řízení. Chcete-li to vyzkoušet hned, klepněte v nastavení Serva na **Kalibrovat teď**, zatímco je hub připojený. Pokud kalibrace selže, zkontrolujte hub, motor a to, zda řízení opravdu má koncové dorazy.

<Screenshot name="links-servo-settings" alt="Nastavení bloku Servo" width={900} />

Řízení nemá dorazy? Použijte **Ručně**: natočte kola rukou rovně, klepněte na **Nastavit jako nulu** a zvolte **Úhel**. Viz [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Řádek 3: světla {#row-lights}

1. Přetáhněte **BTN1** do dalšího prázdného řádku.
2. Z karty **Zpracování** přetáhněte **Přepínač**. Z tlačítka udělá přepínač: jedním stisknutím zapnete, dalším vypnete.
3. Z karty **Výstupy** přetáhněte **Světlo**.
4. Za Světlo přetáhněte výstup **Technic Hub** a klepněte na **C**.

<Screenshot name="tutorial-car-links-rows" alt="Tři hotové řádky auta: jízda, řízení a světla" width={900} />

Když jsou všechny tři řádky hotové, tlačítko **Problémy** na horní liště (hned před **Spustit**) ukáže zelenou fajfku. Červený „!“ ukazuje, kolik problémů zbývá; klepněte na něj a pak na problém, abyste přeskočili na příslušný řádek. Viz [Spuštění a řešení problémů](/docs/Application/Links/Problems).

## 5. Spusťte a vyzkoušejte {#run}

1. Postavte auto na stojan nebo ho držte tak, aby kola nebyla na stole.
2. Stiskněte **Spustit**. Motor řízení se zkalibruje: natočí se na obě strany a vrátí se doprostřed.
3. Pohněte joystickem nahoru a dolů: auto jede vpřed a vzad a plynule se rozjíždí i zastavuje. Pohněte jím doleva a doprava: kola zatáčejí.
4. Stiskněte **BTN1**: světla se rozsvítí. Stiskněte ho znovu: zhasnou.
5. Stisknutím **Zastavit** se vrátíte k úpravám.

Když program běží, každý spoj mezi bloky ukazuje hodnotu, která jím prochází, takže můžete sledovat signál od joysticku až k hubu.

<Screenshot name="links-live-values" alt="Běžící program v Rychlých propojeních s aktuálními hodnotami na spojích" width={900} />

Více v článku [Řízení modelu (Spustit)](/docs/Application/Profiles/PlayMode).

## 6. Doladění {#tune}

Nejprve stiskněte **Zastavit**: když program běží, řádky nelze upravovat.

- **Auto jede vzad, když joystick tlačíte nahoru?** Přidejte do řádku 1 **Obrátit**. Totéž funguje pro řádek 2, pokud kola zatáčejí opačně.
- **Motor bzučí nebo se plíží, když je joystick puštěný?** Přidejte do řádku 1 před Plynule blok **Mrtvá zóna**. Výchozí **Zóna** 10 % je dobrý začátek.
- **Příliš rychlé?** Přidejte do řádku 1 **Omezení**, například s **Maximum** 50 %.
- **Příliš líné?** Klepněte na Plynule a zvolte kratší čas, nebo **Okamžitě**.

Dobré pořadí pro řádek jízdy je *Mrtvá zóna → Omezení → Plynule*. Všechna nastavení: [Bloky zpracování](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Volitelně: jízda s herním ovladačem {#gamepad}

1. Spárujte herní ovladač ve stylu Xbox nebo PlayStation se zařízením v systémovém nastavení Bluetooth.
2. V editoru otevřete **Herní ovladač** a zapněte **Povolit bloky gamepadu**.
3. V každém řádku přetáhněte vstup z panelu zpět na paletu, čímž ho odstraníte, a na jeho místo přetáhněte vstup **Herní ovladač**. Nastavte jeho **Vstup**: **Levá páčka Y** pro řádek 1, **Pravá páčka X** pro řádek 2 a **A** (**Křížek** na PlayStationu) pro řádek 3.

Každý port může patřit jen jednomu řádku, takže řádek ovládá port buď z panelu, nebo z herního ovladače. Více v článku [Herní ovladač](/docs/Application/Dashboard/Gamepad).

## Když se něco nehýbe {#if-something-does-not-move}

1. Je hub připojený? Zkontrolujte **Moje huby** a tečku připojení na bloku Hub.
2. Jsou motory zapojené do portů, které jste v řádcích zvolili?
3. Ukazuje tlačítko **Problémy** zelenou fajfku a je každý řádek zapnutý?
4. Běží program?
5. Spusťte program a sledujte aktuální hodnoty: pokud se hodnota na vstupu mění, ale motor se netočí, zkontrolujte hub a port.

Zpráva jako „Port B: toto zařízení nemůže fungovat jako servo (je potřeba motor s enkodérem)“ znamená, že motor na tomto portu nemá enkodér. Další zprávy a řešení: [Spuštění a řešení problémů](/docs/Application/Links/Problems) a [Řešení problémů](/docs/Help/Troubleshooting).

## 8. Uložení a sdílení {#save-and-share}

Tlačítko Uložit neexistuje: profil si vaše změny uchovává sám. Když jste přihlášeni, také se [synchronizuje](/docs/Application/Account/Sync) na vaše ostatní zařízení.

- **Sdílet jako soubor**: na stránce **Moje profily** klepněte na kartě profilu na **Sdílet** (na počítači **Sdílet…**). Získáte soubor `.dat`, který můžete poslat kamarádovi. Viz [Správa profilů](/docs/Application/Profiles/ManageProfiles).
- **Publikovat v katalogu**: otevřete **Upravit profil** a klepněte na **Odeslat do katalogu**. Nejprve přidejte obrázek, popis a hashtag. Viz [Katalog a publikování](/docs/Application/Profiles/Catalog).

## Další kroky {#next-steps}

- Hlídejte baterii: přidejte na panel **Úroveň baterie** nebo textový **Monitor** a řádek *Technic Hub (Baterie) → Indikátor*. Viz [Indikátory a monitory](/docs/Application/Dashboard/Indicators).
- Postavte stejné auto v Logických blocích: [Stejné auto v Logických blocích](/docs/Tutorials/FirstCarBlocks).
- Další recepty: tank, jeřáb a vlak v článku [Příklady](/docs/Application/Links/Examples).
- Dejte panelu nový vzhled pomocí [motivů](/docs/Application/Themes/ThemesOverview).
