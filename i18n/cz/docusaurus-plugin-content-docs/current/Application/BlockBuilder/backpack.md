---
id: Backpack
title: Batoh
description: "Uchovávejte části svých programů z Logických bloků v Batohu a vkládejte je do libovolného profilu na kterémkoli ze svých zařízení."
---

import Screenshot from '@site/src/components/Screenshot';

# Batoh {#backpack}

**Batoh** je místo, kde si uchováváte části svých blokových programů, abyste je mohli znovu použít v jiných profilech: postup řízení, světelnou show nebo Můj blok, který jste jednou napsali a chcete ho mít všude. Uložte zásobník bloků do Batohu v jednom profilu a potom ho vložte do kteréhokoli jiného profilu, na tomto zařízení nebo na jakémkoli zařízení, kde jste přihlášeni.

Batoh je součástí editoru [Logických bloků](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Profily s Rychlými propojeními ho nemají.

<Screenshot name="backpack-panel" alt="Panel Batoh vedle blokového programu" width={900} />

## Co Batoh uchovává {#what-the-backpack-keeps}

Každá položka v Batohu je **kopie** bloků, které jste uložili:

- **Zásobník**: vybraný blok spolu se vším, co je připojeno pod ním a uvnitř něj, stejně jako ho zkopíruje **Duplikovat**.
- **Můj blok**: když uložíte blok `definovat …` [Mého bloku](/docs/Application/BlockBuilder/Blocks/MyBlocks), Batoh uchová celou definici. Takové položky jsou označené **Můj blok**.

Položka si také pamatuje Moje bloky, které vaše bloky používají (i prostřednictvím jiných Mých bloků), a názvy proměnných, seznamů, zpráv, vozidel a zvuků, na které odkazují, aby bloky fungovaly i po vložení jinam.

Vložené bloky se stanou běžnou součástí programu profilu. Nic v profilu na Batohu nezávisí: smazání nebo přejmenování položky nezmění programy, do kterých jste ji vložili. Položky nelze v Batohu upravovat. Chcete-li některou změnit, vložte ji, upravte bloky v programu a uložte je do Batohu znovu jako novou položku.

## Uložení bloků do Batohu {#save-blocks}

1. V programu klikněte na blok pravým tlačítkem (počítač) nebo ho dlouze podržte (telefon, tablet).
2. Zvolte **Přidat do batohu**.
3. Zadejte název do pole **Název bloků** a klepněte na **Uložit**.

Do Batohu se uloží blok i vše, co je k němu připojené. Chcete-li uložit definici Mého bloku, otevřete nabídku na jeho bloku `definovat …`.

<Screenshot name="backpack-add" alt="Nabídka bloku s položkou Přidat do batohu a okno pro zadání názvu" width={900} />

## Otevření Batohu {#open}

- **Počítač a webový editor**: tlačítko **Batoh** na horní liště editoru, **Zobrazení → Batoh** v nabídce nebo **Ctrl+Shift+B** (**⌘⇧B** na Macu). Pokud je okno úzké, tlačítko najdete v nabídce **Více**. Batoh se otevře jako panel na pravé straně editoru, vedle [Monitoru](/docs/Application/BlockBuilder/Editor#monitor), pokud je otevřený i ten.
- **Telefon a tablet**: **Více → Batoh** na horní liště editoru. Batoh se otevře jako panel přes editor.

Když je Batoh otevřený, tlačítko je zvýrazněné. Dalším stisknutím Batoh zavřete.

Každá položka ukazuje svůj obrázek, název a počet bloků (**Bloky: N**). Poznámka v dolní části panelu říká, kde je Batoh uložený (viz [níže](#where-it-is-kept)).

## Vložení bloků do programu {#insert}

- **Klepněte na položku**: její bloky se objeví ve viditelné části programu.
- **Přetáhněte položku na program**: bloky se umístí tam, kde je pustíte. Táhněte do strany, směrem k programu; tažením nahoru nebo dolů se posouvá seznam.
- **Nabídka položky (⋯)**: **Vložit**, **Přejmenovat…** nebo **Smazat**.

Na telefonech a tabletech se Batoh po vložení zavře, abyste bloky viděli. Jedno **Zpět** odstraní všechno, co bylo vloženo.

### Co se stane při vložení {#what-happens}

- **Moje bloky**: pokud už profil má Můj blok se stejným obsahem, použije se znovu, takže opakované vložení stejných bloků nevytváří jeho kopie. Pokud jiný Můj blok v profilu používá stejný název, vložený blok dostane vlastní. Vložení položky s Mým blokem, který už v profilu je, nic neudělá a zobrazí **Už je tu**: blok najdete v kategorii **Moje bloky**.
- **Proměnné, seznamy, zprávy a vozidla**: pokud profil má položku se stejným názvem, bloky ji použijí; jinak se vytvoří. Hodnoty proměnných a obsah seznamů se nekopírují. Pokud je název obsazený něčím jiným, zobrazí se zpráva, například *Proměnnou „speed“ nelze vytvořit: název je obsazený*.
- **Zvuky**: vaše vlastní zvuky jsou soubory profilu a v Batohu se neuchovávají. Pokud profil nemá zvuk s tímto názvem, uvidíte *Zvuk „…“ v tomto profilu není: vyberte zvuk v blocích*. Vestavěné zvuky fungují všude.
- **Bloky hubů a panelu**: bloky pro hub, ovládací prvek panelu nebo herní ovladač, které tento profil nemá, nelze vložit. Ještě než se cokoli změní, aplikace zobrazí **Některé bloky nelze vložit** se seznamem takových bloků a počtem těch, které budou vynechány, a zeptá se, zda vložit ostatní. Chcete-li je zachovat, nejprve přidejte hub nebo ovládací prvek panelu. Pokud se do profilu nehodí žádný z bloků, nevloží se nic.

## Přejmenování a smazání {#rename-delete}

Otevřete nabídku položky (⋯):

- **Přejmenovat…** změní název položky.
- **Smazat** ji po potvrzení odstraní (**Smazat z batohu?**). Programy, do kterých jste ji vložili, si své bloky ponechají.

Batoh nikdy sám položky neodstraňuje: smažte, co už nepotřebujete.

## Kde je Batoh uložený {#where-it-is-kept}

- **Bez účtu (host)**: jen v tomto zařízení. Panel uvádí *Uloženo v tomto zařízení. Přihlaste se, abyste měli batoh na všech svých zařízeních.*
- **Po přihlášení**: také ve vašem účtu, takže máte stejný Batoh na všech svých zařízeních, včetně [webového editoru](/docs/Introducing/WebEditor). Panel uvádí *Uloženo ve vašem účtu: stejný batoh na všech vašich zařízeních.* Změny provedené na jednom zařízení se objeví na ostatních.
- **První přihlášení**: položky, které jste v tomto zařízení uložili jako host, se přesunou do vašeho účtu.

Batoh můžete používat i offline. Změny se uchovávají v zařízení a odešlou se do vašeho účtu, jakmile bude připojení zpět (panel mezitím ukazuje **Synchronizace…**). Položku, která se ještě stahuje z vašeho účtu, zatím nelze vložit: aplikace hlásí **Ještě není připraveno**, zkuste to tedy za chvíli znovu.

## Limity {#limits}

| | Limit |
|---|---|
| Položky v Batohu | 200 |
| Velikost jedné položky | asi 512 KB (velmi velká část programu se nemusí vejít: uložte menší část) |
| Název položky | až 100 znaků |

Pokud je Batoh ve vašem účtu plný nebo je pro něj položka příliš velká, zůstane položka jen v tomto zařízení a aplikace vás na to upozorní. Položky uložené novější verzí aplikace lze vložit až po aktualizaci aplikace.

## Řešení problémů {#troubleshooting}

| Zpráva | Co dělat |
|---|---|
| **Batoh je plný (200 položek). Smažte něco, co nepotřebujete.** | Smažte položky, které už nepoužíváte. |
| **Příliš mnoho bloků pro batoh. Uložte menší část.** | Uložte menší zásobník nebo rozdělte program do několika položek. |
| **Některé bloky nelze vložit** | Profilu chybí hub, ovládací prvek panelu nebo herní ovladač, které bloky potřebují. Přidejte ho a vložte bloky znovu, nebo vložte jen ostatní bloky. |
| **Už je tu** | Můj blok už v tomto profilu je: najdete ho v kategorii **Moje bloky**. |
| **Ještě není připraveno** | Položka se ještě stahuje z vašeho účtu. Chvíli počkejte a zkuste to znovu. |
| **Tyto bloky byly uloženy novější verzí aplikace. Aktualizujte aplikaci, abyste je mohli použít.** | Aktualizujte MOCPilot na tomto zařízení. |
