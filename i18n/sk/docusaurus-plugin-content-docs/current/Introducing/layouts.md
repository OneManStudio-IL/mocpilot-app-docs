---
id: Layouts
title: Telefón, tablet a počítač
description: "Kde čo nájdete v rozložení MOCPilot pre telefón, tablet a počítač, plus ponuky a klávesové skratky na počítači."
---

import Screenshot from '@site/src/components/Screenshot';

# Telefón, tablet a počítač {#phone-tablet-and-desktop}

MOCPilot má tri rozloženia a aplikácia si jedno z nich vyberie automaticky:

- **Telefón**: telefóny iPhone a Android.
- **Tablet**: iPad a tablety s Androidom (od 7 palcov).
- **Počítač**: počítače Mac a Windows. Rovnaký editor ako na počítači používa aj [webový editor](/docs/Introducing/WebEditor) v prehliadači.

Profily, editory a panel sú všade rovnaké; líši sa iba navigácia.

## Telefón {#phone}

<Screenshot name="profiles-phone" alt="Stránka Moje profily na telefóne so spodnou lištou" width={360} />

- **Spodná lišta** obsahuje **Profily**, **Nastavenia** a **Pomoc** a po prihlásení aj **Upozornenia**.
- **Účet** je navrchu v **Nastaveniach**.
- V hlavičke **Moje profily** je **Zoradiť a filtrovať**, **Pripojiť diaľkový ovládač** (ikona diaľkového ovládača), **+** (Nový profil, Importovať profil…, Hľadať online) a pole vyhľadávania.
- Hlavné obrazovky sú na výšku. Keď otvoríte profil, aplikácia sa prepne **na šírku, na celú obrazovku**, aby editor a panel mali k dispozícii celú plochu. Po zatvorení profilu sa obnoví zobrazenie na výšku.
- V editore je vľavo na hornej lište **Domov**. Vpravo sú **Späť** a **Znova**, **Panel**, **Moje huby** (s počtom pripojených hubov), **Problémy** (Rýchle prepojenia), **Diaľkové ovládanie**, **Viac** (⋯) a **Spustiť / Zastaviť**. Ponuka **Viac** obsahuje **AI staviteľ**, [**Batoh**](/docs/Application/BlockBuilder/Backpack) a **Monitor** (Logické bloky), **Herný ovládač** a **Nastavenia editora**. Na úzkej obrazovke sa do ponuky **Viac** presunú aj Panel a Moje huby, aby tlačidlá zostali dosť veľké na ovládanie prstom.

<Screenshot name="editor-phone" alt="Editor profilu na telefóne s hornou lištou" width={900} />

## Tablet {#tablet}

<Screenshot name="profiles-tablet" alt="Stránka Moje profily na tablete s bočným panelom" width={900} />

- **Bočný panel** vľavo obsahuje **Profily**, **Katalóg profilov**, **Upozornenia**, **Nastavenia** a **Pomoc**. Pod nimi je karta **MocPilot Pro** a váš účet (v režime hosťa **Prihlásiť sa**). Bočný panel môžete zbaliť na ikony.
- V hlavičke **Moje profily** je **Nový profil** (jeho ponuka obsahuje aj Importovať profil…, Pripojiť diaľkový ovládač a Hľadať online), **Zoradiť a filtrovať**, **Filtrovať podľa hashtagov**, **Pripojiť diaľkový ovládač** a pole vyhľadávania.
- Ťuknutím na kartu profilu ju vyberiete: lišta dole zobrazí **Zdieľať**, **Upraviť**, **Pridať do obľúbených** a **Spustiť**. Dvojitým ťuknutím na kartu profil spustíte. Dlhým stlačením karty otvoríte jej ponuku, ktorá obsahuje aj **Odstrániť profil**.
- Na širokých obrazovkách sa Nastavenia a Pomoc otvárajú vedľa zoznamu.
- Profil sa otvorí na šírku a editor má rovnakú hornú lištu ako na telefóne.

## Počítač (Mac a Windows) {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="Moje profily na počítači" width={900} />

- Vpravo na hornej lište: **Účet** (v režime hosťa **Prihlásiť sa**), **Upozornenia** (keď ste prihlásení), **Pripojiť diaľkový ovládač** (ikona diaľkového ovládača) a **Nastavenia** (ozubené koliesko).
- Nastavenia, Pomoc, Účet, Nový profil, Upraviť profil, Katalóg profilov a ďalšie stránky sa otvárajú ako **okná** nad zoznamom profilov.
- Kliknutím na kartu profilu zobrazíte, čo s ním môžete robiť (**Zdieľať…**, **Upraviť…**, **Pridať do obľúbených**, **Spustiť**); dvojitým kliknutím ho spustíte. Kliknutím pravým tlačidlom na kartu otvoríte jej ponuku, ktorá obsahuje aj **Odstrániť profil**.
- V editore sa **Panel** otvára vo **vlastnom okne**, takže program a panel vidíte vedľa seba.

### Horná lišta editora {#editor-top-bar}

- **Vľavo**: **Domov** (zatvorí profil), ponuky **Súbor**, **Upraviť**, **Zobraziť** a **Program** a za nimi **Späť** a **Znova**.
- **V strede**: názov profilu a tlačidlá ostatných častí profilu: **Panel**, **Huby** (s počtom pripojených hubov) a **Herný ovládač**. Stránka, na ktorej ste, vlastné tlačidlo nemá.
- **Vpravo**: bočné panely **AI staviteľ**, [**Batoh**](/docs/Application/BlockBuilder/Backpack) a **Monitor** (posledné dva iba v Logických blokoch), **Viac** (⋯), potom v Rýchlych prepojeniach stav riadkov (**Všetky riadky sú pripravené** alebo **Problémy: N**), **Diaľkové ovládanie** a oranžové tlačidlo **Spustiť** (počas behu programu **Zastaviť**).

Ponuka **Viac** vždy obsahuje **Nastavenia editora…**. Keď sa okno zužuje, lišta sa postupne skladá namiesto toho, aby tlačidlá stláčala: najprv sa skryje názov profilu, potom sa do ponuky **Viac** presunú **Monitor**, **Batoh** a **AI staviteľ**, potom z tlačidla **Spustiť** zostane iba ikona (a zo stavu Rýchlych prepojení iba ikona a počet) a nakoniec sa do **Viac** presunú aj **Herný ovládač**, **Panel** a **Huby**. Ak je otvorený bočný panel, ktorý je v ponuke **Viac**, tlačidlo **Viac** je zafarbené.

Horná lišta Panela vyzerá rovnako: vľavo **Domov**, **Súbor**, **Upraviť** a **Zobraziť**, **Späť** a **Znova**; v strede názov profilu a **Bloky** (alebo **Prepojenia**) na návrat k programu; vpravo **Vybrať**, **Nastavenia panela** a **+ Ovládač**. Pozrite si [Editor panela](/docs/Application/Dashboard/DashboardOverview#toolbar).

### Ponuky {#menus}

Vo Windows sú ponuky vľavo na hornej lište aplikácie. Na Macu sú v systémovom riadku ponúk navrchu obrazovky.

| Ponuka | Windows | Mac |
|---|---|---|
| **MOCPilot** (ponuka aplikácie) | — | O aplikácii MOCPilot, Nastavenia…, Ukončiť |
| **Súbor** | Nový profil, Importovať profil…, Hľadať online, Ukončiť | Nový profil, Importovať profil…, Hľadať online, Pripojiť diaľkový ovládač… |
| **Zobraziť** | Celá obrazovka | Zapnúť / vypnúť celú obrazovku |
| **Okno** | Minimalizovať, Maximalizovať / Obnoviť | Minimalizovať |
| **Pomoc** | Pomocník MOCPilot, Položiť otázku, Nahlásiť chybu, O aplikácii MOCPilot | Pomocník MOCPilot, Položiť otázku, Nahlásiť chybu |

Keď je otvorený profil, editor má vlastné ponuky **Súbor**, **Upraviť**, **Zobraziť** a **Program** (pozrite si [Ponuky na počítači](/docs/Application/BlockBuilder/Editor#desktop-menus)) a okno Panel má ponuky **Súbor**, **Upraviť** a **Zobraziť** (pozrite si [Panel](/docs/Application/Dashboard/DashboardOverview)).

### Klávesové skratky {#keyboard-shortcuts}

Na Macu robí ⌘ (Command) to isté ako Ctrl vo Windows; ⇧ je Shift, ⌃ je Control.

**Všade**

| Akcia | Windows | Mac |
|---|---|---|
| Nastavenia | Ctrl+2 | ⌘, |
| Zapnúť / vypnúť celú obrazovku | F11 alebo Alt+Enter | ⌃⌘F |
| Minimalizovať okno | — | ⌘M |
| Ukončiť | Alt+F4 | ⌘Q |

**Moje profily** (žiadny otvorený profil)

| Akcia | Windows | Mac |
|---|---|---|
| Nový profil | Ctrl+N | ⌘N |
| Importovať profil | Ctrl+O | ⌘O |
| Hľadať profily | Ctrl+F | — |
| Profily / Nastavenia / Pomoc / Účet | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Editor profilu**

| Akcia | Windows | Mac |
|---|---|---|
| Zatvoriť profil | Ctrl+W | ⌘W |
| Spustiť / Zastaviť | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Späť / Znova | Ctrl+Z / Ctrl+Shift+Z alebo Ctrl+Y | ⌘Z / ⇧⌘Z |
| Zobraziť panel | Ctrl+2 | ⌘2 |
| Moje huby | Ctrl+Shift+H | ⇧⌘H |
| AI staviteľ | Ctrl+Shift+I | ⇧⌘I |
| Zobraziť / skryť paletu blokov (Logické bloky) | Ctrl+P | ⌘P |
| Hľadať v palete blokov (Logické bloky) | Ctrl+F | ⌘F |
| Monitor (Logické bloky) | Ctrl+Shift+M | ⇧⌘M |
| [Batoh](/docs/Application/BlockBuilder/Backpack) (Logické bloky) | Ctrl+Shift+B | ⇧⌘B |
| Priblížiť / oddialiť / skutočná veľkosť (Logické bloky) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Panel**

| Akcia | Windows | Mac |
|---|---|---|
| Späť / Znova | Ctrl+Z / Ctrl+Shift+Z alebo Ctrl+Y | ⌘Z / ⇧⌘Z |
| Späť na program (keď je panel v hlavnom okne) | Ctrl+1 | ⌘1 |
| Zatvoriť okno Panel | — | ⌘W |
| Ukončiť režim **Vybrať** alebo zatvoriť panel vlastností | Esc | Esc |
| Odstrániť ovládací prvok (panel vlastností je otvorený) | Delete alebo Backspace | Delete alebo Backspace |
| Duplikovať ovládací prvok (panel vlastností je otvorený) | Ctrl+D | ⌘D |

Na tablete s klávesnicou zobrazíte alebo skryjete bočný panel skratkou Ctrl+B (⌘B na iPade).

## Editor profilu vo všetkých rozloženiach {#the-profile-editor-on-every-layout}

Editor nemá karty. **Program** (riadky Rýchlych prepojení alebo Logické bloky) vypĺňa obrazovku a všetko ostatné otvárajú tlačidlá hornej lišty. Niektoré z nich sú v ponuke **Viac** (⋯): na telefóne alebo tablete AI staviteľ, Batoh, Monitor, Herný ovládač a Nastavenia editora; na počítači Nastavenia editora a všetko, čo sa v úzkom okne nezmestí.

| Tlačidlo | Otvorí |
|---|---|
| **Moje huby** (na počítači **Huby**) | [sloty hubov](/docs/Application/Hubs/ConnectingHubs) profilu |
| **Panel** | [panel](/docs/Application/Dashboard/DashboardOverview) |
| **Herný ovládač** | [nastavenia herného ovládača](/docs/Application/Dashboard/Gamepad) |
| **Monitor** | hodnoty premenných a zoznamov (iba Logické bloky) |
| **Batoh** | zásobníky blokov uložené na opätovné použitie v ľubovoľnom profile (iba Logické bloky); pozrite si [Batoh](/docs/Application/BlockBuilder/Backpack) |
| **Nastavenia editora** | [možnosti editora](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **AI staviteľ** | [AI staviteľa](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Problémy** | riadky, ktoré sa nedajú spustiť (iba Rýchle prepojenia) |
| **Diaľkové ovládanie** | spustí profil na inom zariadení a ovláda ho odtiaľto (MocPilot Pro); pozrite si [Diaľkové ovládanie](/docs/Application/Profiles/RemoteControl) |
| **Spustiť / Zastaviť** | spúšťa a zastavuje program (na počítači oranžové tlačidlo **Spustiť** na pravom konci) |
