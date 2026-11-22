---
id: Backpack
title: Batoh
description: "Uchovávajte časti svojich programov z Logických blokov v Batohu a vkladajte ich do ľubovoľného profilu na ktoromkoľvek zo svojich zariadení."
---

import Screenshot from '@site/src/components/Screenshot';

# Batoh {#backpack}

**Batoh** je miesto, kde si uchovávate časti svojich blokových programov, aby ste ich mohli znova použiť v iných profiloch: postup riadenia, svetelnú šou alebo Môj blok, ktorý ste raz napísali a chcete ho mať všade. Uložte zásobník blokov do Batohu v jednom profile a potom ho vložte do ktoréhokoľvek iného profilu, na tomto zariadení alebo na akomkoľvek zariadení, kde ste prihlásení.

Batoh je súčasťou editora [Logických blokov](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Profily s Rýchlymi prepojeniami ho nemajú.

<Screenshot name="backpack-panel" alt="Panel Batoh vedľa blokového programu" width={900} />

## Čo Batoh uchováva {#what-the-backpack-keeps}

Každá položka v Batohu je **kópia** blokov, ktoré ste uložili:

- **Zásobník**: vybraný blok spolu so všetkým, čo je pripojené pod ním a v ňom, presne tak, ako ho skopíruje **Duplikovať**.
- **Môj blok**: keď uložíte blok `definovať …` [Môjho bloku](/docs/Application/BlockBuilder/Blocks/MyBlocks), Batoh uchová celú definíciu. Takéto položky sú označené **Môj blok**.

Položka si tiež pamätá Moje bloky, ktoré vaše bloky používajú (aj prostredníctvom iných Mojich blokov), a názvy premenných, zoznamov, správ, vozidiel a zvukov, na ktoré odkazujú, aby bloky fungovali aj po vložení inam.

Vložené bloky sa stanú bežnou súčasťou programu profilu. Nič v profile od Batohu nezávisí: odstránenie alebo premenovanie položky nezmení programy, do ktorých ste ju vložili. Položky sa v Batohu nedajú upravovať. Ak chcete niektorú zmeniť, vložte ju, upravte bloky v programe a uložte ich do Batohu znova ako novú položku.

## Uloženie blokov do Batohu {#save-blocks}

1. V programe kliknite na blok pravým tlačidlom (počítač) alebo ho podržte (telefón, tablet).
2. Vyberte **Pridať do batohu**.
3. Zadajte názov do poľa **Názov blokov** a ťuknite na **Uložiť**.

Do Batohu sa uloží blok aj všetko, čo je k nemu pripojené. Ak chcete uložiť definíciu Môjho bloku, otvorte ponuku na jeho bloku `definovať …`.

<Screenshot name="backpack-add" alt="Ponuka bloku s položkou Pridať do batohu a okno na zadanie názvu" width={900} />

## Otvorenie Batohu {#open}

- **Počítač a webový editor**: tlačidlo **Batoh** na hornej lište editora, **Zobraziť → Batoh** v ponuke alebo **Ctrl+Shift+B** (**⌘⇧B** na Macu). Ak je okno úzke, tlačidlo nájdete v ponuke **Viac**. Batoh sa otvorí ako panel na pravej strane editora, vedľa [Monitora](/docs/Application/BlockBuilder/Editor#monitor), ak je otvorený aj ten.
- **Telefón a tablet**: **Viac → Batoh** na hornej lište editora. Batoh sa otvorí ako panel nad editorom.

Kým je Batoh otvorený, tlačidlo je zvýraznené. Ďalším stlačením Batoh zatvoríte.

Každá položka ukazuje svoj obrázok, názov a počet blokov (**Bloky: N**). Poznámka v dolnej časti panela hovorí, kde je Batoh uložený (pozrite si [nižšie](#where-it-is-kept)).

## Vloženie blokov do programu {#insert}

- **Ťuknite na položku**: jej bloky sa objavia vo viditeľnej časti programu.
- **Presuňte položku na program**: bloky sa umiestnia tam, kde ich pustíte. Ťahajte do strany, smerom k programu; ťahaním nahor alebo nadol sa posúva zoznam.
- **Ponuka položky (⋯)**: **Vložiť**, **Premenovať…** alebo **Odstrániť**.

Na telefónoch a tabletoch sa Batoh po vložení zatvorí, aby ste bloky videli. Jedno **Späť** odstráni všetko, čo bolo vložené.

### Čo sa stane pri vložení {#what-happens}

- **Moje bloky**: ak profil už má Môj blok s rovnakým obsahom, použije sa znova, takže opakované vloženie rovnakých blokov nevytvára jeho kópie. Ak iný Môj blok v profile používa rovnaký názov, vložený blok dostane vlastný. Vloženie položky s Mojím blokom, ktorý už v profile je, nič neurobí a zobrazí **Už je tu**: blok nájdete v kategórii **Moje bloky**.
- **Premenné, zoznamy, správy a vozidlá**: ak profil má položku s rovnakým názvom, bloky ju použijú; inak sa vytvorí. Hodnoty premenných a obsah zoznamov sa nekopírujú. Ak je názov obsadený niečím iným, zobrazí sa správa, napríklad *Premennú „speed“ nie je možné vytvoriť: názov je obsadený*.
- **Zvuky**: vaše vlastné zvuky sú súbory profilu a v Batohu sa neuchovávajú. Ak profil nemá zvuk s týmto názvom, uvidíte *Zvuk „…“ v tomto profile nie je: vyberte zvuk v blokoch*. Vstavané zvuky fungujú všade.
- **Bloky hubov a panela**: bloky pre hub, ovládací prvok panela alebo herný ovládač, ktoré tento profil nemá, nie je možné vložiť. Ešte predtým, ako sa čokoľvek zmení, aplikácia zobrazí **Niektoré bloky nie je možné vložiť** so zoznamom takýchto blokov a počtom tých, ktoré budú vynechané, a opýta sa, či vložiť ostatné. Ak ich chcete zachovať, najprv pridajte hub alebo ovládací prvok panela. Ak sa do profilu nehodí žiadny z blokov, nevloží sa nič.

## Premenovanie a odstránenie {#rename-delete}

Otvorte ponuku položky (⋯):

- **Premenovať…** zmení názov položky.
- **Odstrániť** ju po potvrdení odstráni (**Odstrániť z batohu?**). Programy, do ktorých ste ju vložili, si svoje bloky ponechajú.

Batoh nikdy sám položky neodstraňuje: odstráňte, čo už nepotrebujete.

## Kde je Batoh uložený {#where-it-is-kept}

- **Bez účtu (hosť)**: iba v tomto zariadení. Panel uvádza *Uložené v tomto zariadení. Prihláste sa, aby ste mali batoh na všetkých svojich zariadeniach.*
- **Po prihlásení**: aj vo vašom účte, takže máte rovnaký Batoh na všetkých svojich zariadeniach vrátane [webového editora](/docs/Introducing/WebEditor). Panel uvádza *Uložené vo vašom účte: rovnaký batoh na všetkých vašich zariadeniach.* Zmeny urobené na jednom zariadení sa objavia na ostatných.
- **Prvé prihlásenie**: položky, ktoré ste v tomto zariadení uložili ako hosť, sa presunú do vášho účtu.

Batoh môžete používať aj offline. Zmeny sa uchovávajú v zariadení a odošlú sa do vášho účtu, keď bude pripojenie späť (panel medzitým ukazuje **Synchronizácia…**). Položku, ktorá sa ešte sťahuje z vášho účtu, zatiaľ nie je možné vložiť: aplikácia hlási **Ešte nie je pripravené**, skúste to teda o chvíľu znova.

## Limity {#limits}

| | Limit |
|---|---|
| Položky v Batohu | 200 |
| Veľkosť jednej položky | približne 512 KB (veľmi veľká časť programu sa nemusí zmestiť: uložte menšiu časť) |
| Názov položky | najviac 100 znakov |

Ak je Batoh vo vašom účte plný alebo je pre neho položka príliš veľká, položka zostane iba v tomto zariadení a aplikácia vás na to upozorní. Položky uložené novšou verziou aplikácie môžete vložiť až po aktualizácii aplikácie.

## Riešenie problémov {#troubleshooting}

| Správa | Čo robiť |
|---|---|
| **Batoh je plný (200 položiek). Odstráňte niečo, čo nepotrebujete.** | Odstráňte položky, ktoré už nepoužívate. |
| **Príliš veľa blokov pre batoh. Uložte menšiu časť.** | Uložte menší zásobník alebo rozdeľte program do niekoľkých položiek. |
| **Niektoré bloky nie je možné vložiť** | Profilu chýba hub, ovládací prvok panela alebo herný ovládač, ktoré bloky potrebujú. Pridajte ho a vložte bloky znova, alebo vložte iba ostatné bloky. |
| **Už je tu** | Môj blok už v tomto profile je: nájdete ho v kategórii **Moje bloky**. |
| **Ešte nie je pripravené** | Položka sa ešte sťahuje z vášho účtu. Chvíľu počkajte a skúste to znova. |
| **Tieto bloky boli uložené novšou verziou aplikácie. Aktualizujte aplikáciu, aby ste ich mohli použiť.** | Aktualizujte MOCPilot v tomto zariadení. |
