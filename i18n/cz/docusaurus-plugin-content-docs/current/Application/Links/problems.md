---
id: Problems
title: Spuštění a řešení problémů
description: "Panel problémů, červené rámečky, aktuální hodnoty a časté zprávy Rychlých propojení."
---

import Screenshot from '@site/src/components/Screenshot';

# Spuštění a řešení problémů {#running-and-fixing-problems}

## Je všechno připraveno? {#is-everything-ready}

Tlačítko **Problémy** v horní liště editoru ukazuje:

- **zelenou fajfku**: „Všechny řádky jsou připravené“;
- **červený „!“**: „Problémy: N“.

Klepnutím otevřete panel problémů (na telefonu boční panel, na tabletu nebo počítači nabídka). Obsahuje položky „Řádek N — důvod“; klepnutím na položku přeskočíte na daný řádek. Blok, který problém způsobuje, má **červený rámeček**. Když je všechno v pořádku, panel hlásí „Každý zapnutý řádek může běžet.“

<Screenshot name="links-problems" alt="Panel problémů s řádkem, který není připravený" width={900} />

Řádky s problémy neběží; ostatní řádky ano.

## Časté zprávy {#common-messages}

| Zpráva | Co dělat |
|---|---|
| Přetáhněte do řádku vstup a výstup (hub nebo indikátor na panelu) | řádek je prázdný |
| Přidejte vstup na začátek řádku | nejprve přetáhněte ovládací prvek, vozidlo, gamepad nebo vstup hubu |
| Přidejte výstup: hub nebo indikátor na panelu | dokončete řádek výstupem |
| Přidejte operaci před hub: motor, servo, světlo | výstup Hub potřebuje před sebou operaci |
| Vyberte na hubu alespoň jeden port | klepněte na čip portu v bloku Hub |
| Vyberte ovladač na panelu | klepněte na vstupní blok a vyberte ovládací prvek |
| … se v této ose nepohybuje | joystick má jen jednu osu: vyberte druhou osu nebo změňte joystick |
| Zvolte, co dává … | ovládací prvek už tento kanál nemá: vyberte jiný |
| Vyberte pedály vozidla | vstup Vozidlo potřebuje pedály na panelu |
| … není na panelu | řadicí páka nebo ruční brzda vybraná pro Vozidlo byla odebrána |
| "…" s tímto ovladačem nefunguje | tento blok zpracování se k signálu nehodí |
| Port A: toto zařízení nemůže fungovat jako servo (je potřeba motor s enkodérem) | použijte motor s enkodérem nebo jinou operaci |
| Na portu A je senzor, ne motor | zkontrolujte, co je zapojeno do portu |
| Port A se používá i v řádku 2 | každý port může patřit jen jednomu řádku |
| Zapněte bloky herního ovladače na stránce Herní ovladač (horní lišta) | otevřete **Herní ovladač** a zapněte **Povolit bloky gamepadu** |
| Indikátor zobrazuje hodnotu tak, jak je: odeberte operaci | řádek s Indikátorem nemá operaci |
| Kalibrace nepotřebuje operaci: odeberte ji | řádek s Kalibrovat serva nemá operaci |
| Vyberte hub s barevnou LED (huby LEGO) | LED hubu funguje jen na hubech LEGO® |
| Barvy portů jsou dostupné jen u BuWizz 3 | Barva portu vyžaduje BuWizz 3.0 Pro |
| V tomto programu není žádné servo v režimu kalibrace Auto | Kalibrovat serva potřebuje Servo v režimu Auto |
| Tento blok vyžaduje novější verzi aplikace | profil byl vytvořen v novější verzi: aktualizujte MOCPilot |
| Řádek je vypnutý | zapněte ho v nabídce řádku |

## Aktuální hodnoty {#live-values}

Za běhu programu ukazuje každý spoj mezi bloky hodnotu, která jím prochází. Pohněte ovládacím prvkem a sledujte hodnotu podél řádku:

- na vstupu se nic nemění: ovládací prvek nebo gamepad nic neposílá; zkontrolujte kanál nebo osu;
- hodnota se mění, ale motor se nehýbe: zkontrolujte tečku připojení hubu a port;
- hodnota je za blokem **Omezení** nebo **Mrtvá zóna** malá: upravte jejich nastavení.

<Screenshot name="links-live-values" alt="Běžící program Rychlých propojení s aktuálními hodnotami na spojích" width={900} />

## Model se nehýbe {#the-model-does-not-move}

1. Je hub připojený? Zkontrolujte **Moje huby** a tečku připojení v bloku Hub.
2. Je vybraný správný port? Jsou motory zapojené tam, kde si myslíte?
3. Je řádek zapnutý a bez červeného rámečku?
4. Běží program (**Spustit**)?
5. Je baterie nabitá? Přidejte řádek *Baterie → Indikátor* a mějte ji pod dohledem.

Více v části [Řešení problémů](/docs/Help/Troubleshooting).
