---
id: HubsAndPorts
title: Blok Hub a porty
description: "Blok Hub v Rychlých propojeních, výběr portů, kontroly portů a dotaz na obsazený port."
---

import Screenshot from '@site/src/components/Screenshot';

# Blok Hub a porty {#hub-block-and-ports}

Výstup [Hub](/docs/Application/Links/Blocks/OutputBlocks#hub-out) ukončuje řádek za operací. Pro každý hub v **Moje huby** existuje jeden blok Hub, takže huby nejprve přidejte tam. Dokud to neuděláte, karta hlásí „Přidejte huby v Moje huby nebo indikátory na panel: objeví se tady“.

## Co blok Hub zobrazuje {#what-the-hub-block-shows}

- název hubu a **tečku připojení** (připojeno, nebo ne);
- **Porty** jako čipy: A, B, C, D… u hubů LEGO® a SBrick (A–F u Robot Inventor a Mould King 6.0), 1–4 u BuWizz 2.0, 1–4 a navíc A a B u BuWizz 3.0 Pro;
- podtitulek: „porty A, B“, „vyberte porty“, „celý hub“ (po operaci pro celý hub) nebo „pohon, řízení, světla“ (Technic Move v režimu **Profil auta**).

## Výběr portů {#choose-ports}

Klepnutím na čip portu ho použijete; dalším klepnutím ho uvolníte. Jeden řádek může ovládat **několik portů** najednou, například dva hnací motory na A a B.

Potřebujete, aby se dva motory točily opačně? Vytvořte ze stejného vstupu dva řádky a do jednoho z nich přidejte **Obrátit**.

## Jeden port, jeden řádek {#one-port-one-row}

Port patří jednomu řádku. Pokud vyberete port, který už používá jiný řádek, MOCPilot se zeptá:

> **Port se už používá**: Na „Technic Hub“ port A se používá v řádku 2 (Motor). Použít ho v tomto řádku? Druhý řádek o tento port přijde a přestane ho ovládat.

**Použít v tomto řádku** port přesune; **Zrušit** ho ponechá, kde byl. Port používaný dvěma řádky (například ve starém souboru) se hlásí jako problém: „Port A se používá i v řádku 2“.

<Screenshot name="port-in-use" alt="Dialog Port se už používá" width={700} />

## Kontroly portů {#port-checks}

Když je hub připojený, MOCPilot ví, co je zapojeno do každého portu, a kontroluje, zda operace sedí:

| Problém | Význam |
|---|---|
| „Port A: toto zařízení nemůže fungovat jako servo (je potřeba motor s enkodérem)“ | Servo a Otočit o stupně potřebují motor s enkodérem |
| „Port A: motor nemá absolutní polohu (jen úhlové motory)“ | Jet do polohy potřebuje úhlový motor |
| „Na portu A je senzor, ne motor“ | zařízení na portu je senzor |
| „Port A přijímá jen jednoduché příkazy rychlosti: bez řízení polohy“ | tento port neumí řídit polohu |
| „Port A nemá LED: použijte porty 1-4“ | Barva portu funguje jen na portech 1–4 BuWizz 3.0 Pro |
| „Světla senzoru: vyberte jeden port, ten se senzorem vzdálenosti“ | Světla senzoru berou právě jeden port |
| „Port A: není tam senzor barev“ | Světla senzoru barev a vstupy Barevný tón, Sytost barvy a Jas barvy potřebují na portu senzor barev |

Operace, které hub neumí, se pro něj nenabízejí. Pokud řádek přepnete na jiný hub, řádek oznámí, která operace nesedí, například „Brzda: jen Technic Move (… nemá příkaz brzdy)“.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (v dálkově ovládaných autech LEGO® Technic) lze ovládat dvěma způsoby. Jeden zvolte volbou **Ovládání** v okně bloku Hub: **Profil auta** (výchozí) nebo **Porty**. Volba patří hubu, takže všechny bloky Hub tohoto hubu používají stejný způsob.

- **Profil auta**: hub se ovládá podle funkce, ne podle portu. Jeho blok Hub ukazuje **pohon, řízení, světla** a nebere žádné porty. K jízdě použijte **Motor** nebo **Motor na dobu**, k řízení **Servo**, pro světla **Světlo** a pro speciální funkce **Brzda**, **Boost** a **Výkonový pulz**. Pohon, řízení, světla, brzdu a boost může používat vždy jen jeden řádek („Řádek 2 už ovládá pohon tohoto Technic Move“).
- **Porty**: hub funguje jako ostatní huby s porty. Jeho motory jsou porty `A`, `B` (motory pohonu) a `C` (motor řízení): fungují na nich **Motor**, **Motor na dobu**, **Servo** (s kalibrací **Auto** na `C`), **Otočit o stupně**, **Jet do polohy**, **Při zastavení** a **Zrychlení hubu**. Jeho šest světel jsou porty `1`–`6` řádků **Světlo**. [Vstup Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) čte rychlost a úhel motorů. **Brzda**, **Boost** a **Výkonový pulz** fungují jen v režimu **Profil auta**.

Řádek, který neodpovídá režimu hubu, je problém, který řekne, co přepnout: „… je ovládán profilem auta: přepněte hub na „Porty““ nebo „… je ovládán po portech: přepněte hub na „Profil auta““. Profily vytvořené dříve, než tato volba existovala, se otevírají v režimu **Profil auta**.

Konfiguraci auta (Porsche, Lamborghini, Batmobile) do hubu nahrajete přes **Moje huby → Vybrat konfiguraci**. Viz [Konfigurace Technic Move Hubu](/docs/Application/Hubs/TechnicMoveHubConfigurations).

## Mould King {#mould-king}

Huby Mould King jen přijímají příkazy, takže nemají vstupy a nedávají zpětnou vazbu o připojení. Řídicí kanál hubu přepnete operací [Kanál](/docs/Application/Links/Blocks/OutputBlocks#op-channel).
