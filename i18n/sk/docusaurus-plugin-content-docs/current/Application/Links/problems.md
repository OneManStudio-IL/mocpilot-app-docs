---
id: Problems
title: Spustenie a riešenie problémov
description: "Panel problémov, červené rámčeky, aktuálne hodnoty a bežné hlásenia Rýchlych prepojení."
---

import Screenshot from '@site/src/components/Screenshot';

# Spustenie a riešenie problémov {#running-and-fixing-problems}

## Je všetko pripravené? {#is-everything-ready}

Tlačidlo **Problémy** na hornej lište editora ukazuje:

- **zelenú značku**: „Všetky riadky sú pripravené“;
- **červený „!“**: „Problémy: N“.

Ťuknutím naň otvoríte panel problémov (na telefóne bočný panel, na tablete alebo počítači ponuku). Obsahuje položky „Riadok N — dôvod“; ťuknutím na položku prejdete na daný riadok. Blok, ktorý problém spôsobuje, má **červený rámček**. Keď je všetko v poriadku, panel hlási „Každý zapnutý riadok môže bežať.“

<Screenshot name="links-problems" alt="Panel problémov s riadkom, ktorý nie je pripravený" width={900} />

Riadky s problémami sa nespustia; ostatné riadky áno.

## Bežné hlásenia {#common-messages}

| Hlásenie | Čo robiť |
|---|---|
| Presuňte do riadku vstup a výstup (hub alebo indikátor na paneli) | riadok je prázdny |
| Pridajte vstup na začiatok riadku | najprv presuňte ovládač, vozidlo, herný ovládač alebo vstup hubu |
| Pridajte výstup: hub alebo indikátor na paneli | dokončite riadok výstupom |
| Pridajte operáciu pred hub: motor, servo, svetlo | výstup Hub potrebuje pred sebou operáciu |
| Vyberte aspoň jeden port na hube | ťuknite na čip portu v bloku Hub |
| Vyberte ovládač na paneli | ťuknite na vstupný blok a vyberte ovládač |
| … sa v tejto osi nepohybuje | joystick má iba jednu os: vyberte druhú os alebo zmeňte joystick |
| Vyberte, čo dáva … | ovládač už tento kanál nemá: vyberte iný |
| Vyberte pedále vozidla | vstup Vozidlo potrebuje na paneli pedále |
| … nie je na paneli | radiaca páka alebo ručná brzda vybraná pre Vozidlo bola odstránená |
| „…“ s týmto ovládačom nefunguje | tento blok spracovania sa k signálu nehodí |
| Port A: toto zariadenie nemôže fungovať ako servo (je potrebný motor s enkodérom) | použite motor s enkodérom alebo inú operáciu |
| Na porte A je senzor, nie motor | skontrolujte, čo je zapojené v porte |
| Port A sa používa aj v riadku 2 | každý port môže patriť iba jednému riadku |
| Zapnite bloky herného ovládača na stránke Herný ovládač (horná lišta) | otvorte **Herný ovládač** a zapnite **Povoliť bloky gamepadu** |
| Indikátor zobrazuje hodnotu tak, ako je: odstráňte operáciu | riadok s Indikátorom nemá operáciu |
| Kalibrácia nepotrebuje operáciu: odstráňte ju | riadok s Kalibrovať servá nemá operáciu |
| Vyberte hub s farebnou LED (huby LEGO) | LED hubu funguje iba na huboch LEGO® |
| Farby portov sú dostupné iba na BuWizz 3 | Farba portu potrebuje BuWizz 3.0 Pro |
| V tomto programe nie je žiadne servo v režime automatickej kalibrácie | Kalibrovať servá potrebuje Servo v režime Auto |
| Tento blok vyžaduje novšiu verziu aplikácie | profil bol vytvorený v novšej verzii: aktualizujte MOCPilot |
| Riadok je vypnutý | zapnite ho v ponuke riadku |

## Aktuálne hodnoty {#live-values}

Kým program beží, každý spoj medzi blokmi ukazuje hodnotu, ktorá ním prechádza. Pohnite ovládačom a sledujte hodnotu pozdĺž riadku:

- na vstupe sa nič nemení: ovládač alebo herný ovládač nič neposiela; skontrolujte kanál alebo os;
- hodnota sa mení, ale motor sa nehýbe: skontrolujte bodku pripojenia hubu a port;
- hodnota je po bloku **Obmedzenie** alebo **Mŕtva zóna** malá: upravte ich nastavenia.

<Screenshot name="links-live-values" alt="Bežiaci program Rýchlych prepojení s aktuálnymi hodnotami na spojoch" width={900} />

## Model sa nehýbe {#the-model-does-not-move}

1. Je hub pripojený? Skontrolujte **Moje huby** a bodku pripojenia v bloku Hub.
2. Je vybraný správny port? Sú motory zapojené tam, kde si myslíte?
3. Je riadok zapnutý a bez červeného rámčeka?
4. Beží program (**Spustiť**)?
5. Je batéria nabitá? Pridajte riadok *Batéria → Indikátor* a majte ju pod dohľadom.

Viac v časti [Riešenie problémov](/docs/Help/Troubleshooting).
