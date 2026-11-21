---
id: HubFunctions
title: Speciální funkce hubů
description: "Speciální funkce hubů Technic Move, BuWizz, SBrick, Mould King, Robot Inventor a dalších v obou editorech."
---

# Speciální funkce hubů {#hub-specific-functions}

Každý hub s porty umí ovládat motory a světla. Některé huby umí víc. V editoru **Rychlá propojení** se tyto funkce objeví v paletě, jen pokud je takový hub v profilu; v editoru **Logické bloky** jde o bloky určené pro konkrétní hub.

## Motory s enkodéry (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Funkce | Rychlá propojení | Logické bloky |
|---|---|---|
| Řízení rychlosti | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | nastavit rychlost na, spustit motor na … % rychlost |
| Servo řízení s kalibrací | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Ručně / Auto) | jít na relativní polohu, kalibrovat ozubený hřeben |
| Otočení o úhel | [Otočit o stupně](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | běžet … po dobu |
| Absolutní poloha (úhlové motory) | [Jet do polohy](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | jít … do polohy |
| Chování při zastavení: volnoběh, brzda, držení | Motor → **Při zastavení** | nastavit motor na … při zastavení |
| Předvolby zrychlení hubu | Motor → **Zrychlení hubu** | nastavit zrychlení na, nastavit zpomalení na |
| Rychlost, poloha, výkon a proud jako vstup | [Vstup Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) | rychlost, poloha, relativní poloha, výkon |

## Technic Move Hub {#technic-move-hub}

Hub dálkově ovládaných aut LEGO® Technic (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Pohon, řízení a světla se ovládají podle funkce, ne podle portu.
- **Řízení** si samo kalibruje hřeben řízení.
- **Brzda**, **Boost** (režim výkonu) a **Výkonový pulz** (jen s konfigurací Batmobile™ Tumbler).
- **Konfigurace hubu**: profil auta nahrajete do hubu přes **Moje huby → Vybrat konfiguraci**. Viz [Konfigurace Technic Move Hubu](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Světla v Logických blocích: *zapnout světla* (Technic Move).

## BuWizz 2.0 {#buwizz-20}

- **Režim výkonu**: Pomalé, Normální, Rychlé, Ludicrous. Rychlá propojení: operace [Režim výkonu](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Logické bloky: *nastavit … režim napájení na*.
- Aktuální režim výkonu, **Výstupní napětí** a proud motoru jako vstupy.
- Jednoduché řízení rychlosti na portech 1–4: bez řízení polohy.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- LED **Barva portu** na portech 1–4: ze seznamu nebo jako RGB ([Barva portu](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *nastavit barvu LED portu na*).
- Proud motoru jako vstup, relativní polohy.

## SBrick a SBrick Plus {#sbrick-and-sbrick-plus}

- Motory a světla s řízením rychlosti.
- Bez řízení polohy: Servo, Otočit o stupně a Jet do polohy nejsou k dispozici.

## Mould King 4.0 a 6.0 {#mould-king-40-and-60}

- Jen příkazy: žádné senzory, žádná tlačítka, žádná zpětná vazba o připojení.
- **Řídicí kanál** A, B nebo C: operace [Kanál](/docs/Application/Links/Blocks/OutputBlocks#op-channel) v Rychlých propojeních, blok *nastavit … řídicí kanál na* v Logických blocích nebo **Vyberte kanál** v Mých hubech.
- Nejvýše 3 Mould King 4.0 nebo 1 Mould King 6.0 na profil a jen jeden typ Mould King na profil.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

- **LED matice**: ukazatel úrovně, číslo nebo obrázek v Rychlých propojeních; text a pixely v Logických blocích.
- **Světla senzoru vzdálenosti** („oči“ senzoru).
- **Detekce zablokování** a výkon motoru.
- Klasický Bluetooth: na iPhonu a iPadu není k dispozici.

## Huby LEGO® s barevnou LED {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor a ovladač: barvu LED hubu můžete nastavit ze seznamu nebo jako RGB (Rychlá propojení: [LED hubu](/docs/Application/Links/Blocks/OutputBlocks#hub-led), Logické bloky: *nastavit barvu LED na*).

## Ovladač LEGO® Powered Up Remote Control {#lego-powered-up-remote-control}

Jeho tlačítka jsou vstupy, takže model můžete přes MOCPilot řídit fyzickým ovladačem (Rychlá propojení: vstup **Hub** → Tlačítko; Logické bloky: události tlačítek hubu).

## Vestavěné senzory {#built-in-sensors}

Úroveň a napětí baterie, teplota desky, náklon (klopení, klonění, stáčení), zrychlení a orientace jsou k dispozici u hubů, které je mají. Nastavte **Orientace hubu** (Rychlá propojení) nebo *nastavit orientaci náklonu* (Logické bloky) podle toho, jak je hub namontovaný.
