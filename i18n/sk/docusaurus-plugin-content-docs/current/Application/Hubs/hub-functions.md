---
id: HubFunctions
title: Špecifické funkcie hubov
description: "Špeciálne funkcie hubov Technic Move, BuWizz, SBrick, Mould King, Robot Inventor a ďalších v oboch editoroch."
---

# Špecifické funkcie hubov {#hub-specific-functions}

Každý hub s portami dokáže ovládať motory a svetlá. Niektoré huby vedia viac. V **Rýchlych prepojeniach** sa tieto funkcie zobrazia v palete iba vtedy, keď je takýto hub v profile; v **Logických blokoch** sú to bloky špecifické pre daný hub.

## Motory s enkodérom (LEGO® Technic, City, BOOST, Robot Inventor, BuWizz 3.0 Pro) {#motors-with-encoders-lego-technic-city-boost-robot-inventor-buwizz-30-pro}

| Funkcia | Rýchle prepojenia | Logické bloky |
|---|---|---|
| Riadenie rýchlosti | [Motor](/docs/Application/Links/Blocks/OutputBlocks#op-motor) | Nastaviť rýchlosť motora, Spustiť motor rýchlosťou |
| Servo riadenia s kalibráciou | [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo) (Ručne / Automaticky) | Ísť na relatívnu pozíciu, Kalibrovať riadiaci rám |
| Otočenie o uhol | [Otočiť o stupne](/docs/Application/Links/Blocks/OutputBlocks#op-degrees) | Spustiť na |
| Absolútna poloha (uhlové motory) | [Ísť do polohy](/docs/Application/Links/Blocks/OutputBlocks#op-goto) | Ísť do polohy |
| Správanie pri zastavení: dobeh, brzda, držanie | Motor → **Pri zastavení** | Nastaviť správanie motora pri zastavení |
| Predvoľby zrýchlenia hubu | Motor → **Zrýchlenie hubu** | Nastaviť zrýchlenie, Nastaviť spomalenie |
| Rýchlosť, poloha, výkon a prúd ako vstup | [Vstup Hub](/docs/Application/Links/Blocks/InputBlocks#src-hub) | Rýchlosť, Poloha, Relatívna poloha, Výkon |

## Technic Move Hub {#technic-move-hub}

Hub diaľkovo ovládaných áut LEGO® Technic (Porsche GT4 e-Performance, Lamborghini Revuelto, Batmobile™ Tumbler).

- Pohon, riadenie a svetlá sa ovládajú podľa funkcie, nie podľa portu.
- **Riadenie** si samo kalibruje hrebeň.
- **Brzda**, **Boost** (výkonový režim) a **Výkonový impulz** (iba s konfiguráciou Batmobile™ Tumbler).
- **Konfigurácie hubu**: profil auta nahráte do hubu cez **Moje huby → Vybrať konfiguráciu**. Pozrite si [Konfigurácie Technic Move Hubu](/docs/Application/Hubs/TechnicMoveHubConfigurations).
- Svetlá v Logických blokoch: *Technic Move zapnúť svetlo*.

## BuWizz 2.0 {#buwizz-20}

- **Režim výkonu**: Pomaly, Normálny, Rýchlo, Ludicrous. Rýchle prepojenia: operácia [Režim výkonu](/docs/Application/Links/Blocks/OutputBlocks#op-powermode); Logické bloky: *BuWizz 2 nastaviť režim napájania*.
- Aktuálny režim výkonu, **výstupné napätie** a prúd motora ako vstupy.
- Jednoduché riadenie rýchlosti na portoch 1–4: bez riadenia polohy.

## BuWizz 3.0 Pro {#buwizz-30-pro}

- LED **Farba portu** na portoch 1–4: zo zoznamu alebo ako RGB ([Farba portu](/docs/Application/Links/Blocks/OutputBlocks#op-portcolor); *BuWizz 3 nastaviť farbu LED*).
- Prúd motora ako vstup, relatívne polohy.

## SBrick a SBrick Plus {#sbrick-and-sbrick-plus}

- Motory a svetlá s riadením rýchlosti.
- Bez riadenia polohy: Servo, Otočiť o stupne a Ísť do polohy nie sú k dispozícii.

## Mould King 4.0 a 6.0 {#mould-king-40-and-60}

- Iba príkazy: žiadne senzory, žiadne tlačidlá, žiadna spätná väzba o pripojení.
- **Ovládací kanál** A, B alebo C: operácia [Kanál](/docs/Application/Links/Blocks/OutputBlocks#op-channel) v Rýchlych prepojeniach, blok *MouldKing nastaviť riadiaci kanál* v Logických blokoch alebo **Vyberte kanál** v Mojich huboch.
- Najviac 3 Mould King 4.0 alebo 1 Mould King 6.0 na profil a v profile iba jeden typ Mould King.

## Robot Inventor (LEGO® Large Hub) {#robot-inventor-lego-large-hub}

- **LED matica**: v Rýchlych prepojeniach ukazovateľ úrovne, číslo alebo obrázok; v Logických blokoch text a pixely.
- **Svetlá senzora vzdialenosti** („oči“ senzora).
- **Detekcia zaseknutia** a výkon motora.
- Klasický Bluetooth: nie je k dispozícii na iPhone a iPade.

## Huby LEGO® s farebnou LED {#lego-hubs-with-a-colour-led}

Technic, City, BOOST, Technic Move, WeDo 2.0, Robot Inventor a diaľkový ovládač: farbu LED hubu môžete nastaviť zo zoznamu alebo ako RGB ([LED hubu](/docs/Application/Links/Blocks/OutputBlocks#hub-led) v Rýchlych prepojeniach, *nastaviť farbu LED na* v Logických blokoch).

## Diaľkový ovládač LEGO® Powered Up {#lego-powered-up-remote-control}

Jeho tlačidlá sú vstupy, takže model môžete cez MOCPilot riadiť fyzickým ovládačom (Rýchle prepojenia: vstup **Hub** → Tlačidlo; Logické bloky: udalosti tlačidiel hubu).

## Vstavané senzory {#built-in-sensors}

Úroveň a napätie batérie, teplota dosky, náklon (pitch, roll, yaw), zrýchlenie a orientácia sú k dispozícii na huboch, ktoré ich majú. Nastavte **Orientácia hubu** (Rýchle prepojenia) alebo *nastaviť orientáciu náklonu* (Logické bloky) podľa toho, ako je hub namontovaný.
