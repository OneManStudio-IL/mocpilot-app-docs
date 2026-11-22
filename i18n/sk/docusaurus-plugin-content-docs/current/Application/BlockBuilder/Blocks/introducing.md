---
id: BlocksIntroducing
title: Úvod do Logických blokov
description: "Logické bloky sú vizuálny editor blokového programovania v MOCPilote: udalosti, cykly, podmienky, premenné, senzory a zvuky."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logické bloky {#logic-blocks}

**Logické bloky** sú editor blokového programovania v MOCPilote. Programy skladáte spájaním blokov, podobne ako v Scratchi: udalosti, cykly, podmienky, premenné, zoznamy, vlastné bloky, zvuky a bloky pre motory, svetlá, senzory, ovládače panela a herný ovládač.

Logické bloky si vyberte, keď váš model potrebuje logiku: roboty, automatické postupnosti, reakcie na senzory, kontroly pri štarte, hry. Ak potrebujete iba spojiť ovládače s motormi, rýchlejšie sú [Rýchle prepojenia](/docs/Application/Links/LinksIntroducing).

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Program v Logických blokoch" style={{width: '100%', maxWidth: 720}} />

:::warning Nie je to Scratch
Logické bloky majú vlastnú sadu blokov a vlastné správanie. Programy z MOCPilotu nemôžete importovať do Scratchu ani projekty zo Scratchu do MOCPilotu.
:::

## Editor v skratke {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Editor Logických blokov s paletou a programom" width={900} />

- **Paleta** obsahuje kategórie blokov: **Udalosti**, **Kontrola**, **Senzory**, **Zvuky**, **Operátor**, **Premenné**, **Zoznamy** a **Moje bloky**. Ďalšie kategórie sa objavia, keď ich váš profil potrebuje: **Motory** a **Svetlo** (keď ich hub podporuje), **Simulátor** (keď sú na paneli pedále, prevodovka alebo ručná brzda), **Ovládače na obrazovke** a **Herný ovládač**.
- **Programová plocha** je miesto, kam presúvate bloky a skladáte skripty.
- Horná lišta obsahuje **Späť** a **Znova**, **Panel**, **Moje huby**, **Herný ovládač**, bočné panely **AI staviteľ**, [**Batoh**](/docs/Application/BlockBuilder/Backpack) a **Monitor**, **Viac** (s **Nastaveniami editora**) a **Spustiť/Zastaviť**. Na telefóne alebo tablete sú bočné panely a Herný ovládač v ponuke **Viac**.

Podrobnosti nájdete v časti [Práca v editore](/docs/Application/BlockBuilder/Editor).

## Ako program beží {#how-a-program-runs}

- Skript začína blokom **udalosti** (klobúkový blok): *keď program začne*, *keď tlačidlo … stlačené*, *keď prijmem …* a podobne.
- Bloky pripojené pod ním sa vykonávajú zhora nadol.
- Viac skriptov beží **súčasne**. Na ich koordináciu použite správy (*odovzdať*).
- **Cykly** (*zopakovať vždy*, *opakovať*, *zopakovať, kým*) udržiavajú skript v chode; **podmienky** (*ak*, *ak … iné*, *počkajte, kým*) rozhodujú.
- **Hlásiace** bloky (zaoblené) vracajú hodnoty a zapadajú do vstupov iných blokov; **booleovské** bloky (špicaté) vracajú pre podmienky pravdu alebo nepravdu.
- **Premenné** a **zoznamy** uchovávajú hodnoty medzi blokmi a skriptmi.

## Tvary blokov {#block-shapes}

### Klobúkové bloky {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Spustia skript, keď sa niečo stane. Bloky k nim môžete pripájať iba zdola.

---

### Príkazové bloky {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Hlavné príkazové bloky: každý z nich niečo urobí.

---

### Bloky v tvare C {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Bloky v tvare písmena C, ktoré v sebe obsahujú ďalšie bloky: cykly a podmienky.

---

### Hlásiace bloky {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Vracajú hodnotu, napríklad číslo alebo text.

---

### Booleovské bloky {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Vracajú iba `true` alebo `false`. Zvyčajne sa používajú v podmienkach.

---

### Koncové bloky {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Ukončujú skript: pod ne sa nedá nič pripojiť.

---

### Stĺpec blokov {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Stĺpec je skupina spojených blokov, ktorá beží ako jeden skript, zhora nadol.
Stĺpec zvyčajne začína blokom udalosti, za ktorým nasledujú bloky vykonávané v poradí.

---


## Huby, porty a ovládače {#hubs-ports-and-controls}

- Bloky motorov a svetiel berú **hub** a **port**. Kategórie Motory a Svetlo sa zobrazia iba vtedy, keď ich podporuje niektorý hub v profile, a niektoré bloky existujú iba pre konkrétne huby (napríklad výkonové režimy BuWizz alebo funkcie Technic Move Hubu). Popis každého bloku uvádza, s ktorými hubmi funguje.
- Bloky panela odkazujú na ovládače podľa názvu (**JOY1**, **BTN2**). Ovládač nemôžete z panela odstrániť, kým ho používajú bloky; najprv odstráňte tieto bloky.
- Bloky herného ovládača sa zobrazia, keď je na [stránke Herný ovládač](/docs/Application/Dashboard/Gamepad) zapnutá voľba **Povoliť bloky gamepadu**.

## Úrovne blokov {#block-levels}

Každý profil má **úroveň blokov**: **Začiatočník** ukazuje najjednoduchšie bloky, **Pokročilý** pridáva bežné logické bloky a bloky zariadení a **Guru** ukazuje kompletnú sadu. Vyberiete ju pri vytváraní profilu alebo neskôr v Nastaveniach editora. Tento prehľad uvádza úroveň každého bloku vedľa jeho názvu.

## Odporúčaný postup {#recommended-workflow}

1. Začnite jedným blokom udalosti a krátkym skriptom; stlačte **Spustiť** a overte, že funguje.
2. Smery motorov a rozsahy hodnôt skontrolujte včas (pomôže Monitor).
3. Rozdeľte program na malé skripty, ktoré spolu komunikujú správami; opakujúcu sa logiku presuňte do [Mojich blokov](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Pridajte bezpečnosť: limity, zastavenia, kontrolu pri štarte a plán pre prípad, že sa hub odpojí.

## Časté chyby {#common-pitfalls}

- Skript bez bloku udalosti sa nikdy nespustí.
- Je vybraný nesprávny hub alebo port, takže sa viditeľne nič nedeje.
- Miešanie textu, čísel a booleovských hodnôt dáva nečakané výsledky.
- Veľmi časté udalosti bez filtrovania (napríklad udalosť senzora pri každej drobnej zmene) môžu program preťažiť; použite prahy alebo krátke čakania.

## Prehľad blokov {#block-reference}

- [Udalosti](/docs/Application/BlockBuilder/Blocks/Events) · [Kontrola](/docs/Application/BlockBuilder/Blocks/Control) · [Operátor](/docs/Application/BlockBuilder/Blocks/Operators)
- [Premenné](/docs/Application/BlockBuilder/Blocks/Variables) · [Zoznamy](/docs/Application/BlockBuilder/Blocks/Lists) · [Moje bloky](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motory](/docs/Application/BlockBuilder/Blocks/Motors) · [Svetlo](/docs/Application/BlockBuilder/Blocks/Light) · [Senzory](/docs/Application/BlockBuilder/Blocks/Sensors) · [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulátor](/docs/Application/BlockBuilder/Blocks/Simulator) · [Ovládače na obrazovke](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Herný ovládač](/docs/Application/BlockBuilder/Blocks/Gamepad)

V aplikácii dlho podržte blok (alebo naň kliknite pravým tlačidlom) a vyberte **O bloku**, čím otvoríte jeho popis tu.

Hotové programy: [Príklady](/docs/Application/BlockBuilder/Examples).
