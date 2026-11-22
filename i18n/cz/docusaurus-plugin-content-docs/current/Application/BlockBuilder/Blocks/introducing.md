---
id: BlocksIntroducing
title: Seznámení s Logickými bloky
description: "Logické bloky jsou vizuální editor blokového programování v MOCPilotu: události, cykly, podmínky, proměnné, senzory a zvuky."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Logické bloky {#logic-blocks}

**Logické bloky** jsou editor blokového programování v MOCPilotu. Programy skládáte spojováním bloků, podobně jako ve Scratchi: události, cykly, podmínky, proměnné, seznamy, vlastní bloky, zvuky a bloky pro motory, světla, senzory, ovládací prvky panelu a gamepad.

Logické bloky zvolte, když váš model potřebuje logiku: roboty, automatické sekvence, reakce na senzory, kontroly při spuštění, hry. Pokud potřebujete jen propojit ovládací prvky s motory, jsou [Rychlá propojení](/docs/Application/Links/LinksIntroducing) rychlejší.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Program v Logických blocích" style={{width: '100%', maxWidth: 720}} />

:::warning Není to Scratch
Logické bloky mají vlastní sadu bloků a vlastní chování. Programy z MOCPilotu nelze importovat do Scratche a projekty ze Scratche nelze importovat do MOCPilotu.
:::

## Editor v kostce {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Editor Logických bloků s paletou a programem" width={900} />

- **Paleta** obsahuje kategorie bloků: **Události**, **Ovládání**, **Senzory**, **Zvuky**, **Operátor**, **Proměnné**, **Seznamy** a **Moje bloky**. Další kategorie se objeví, když je váš profil potřebuje: **Motory** a **Světlo** (když je hub podporuje), **Simulátor** (když má panel pedály, převodovku nebo ruční brzdu), **Ovladače na obrazovce** a **Herní ovladač**.
- **Programová plocha** je místo, kam přetahujete bloky a skládáte skripty.
- Horní lišta obsahuje **Zpět** a **Znovu**, **Panel**, **Moje huby**, **Herní ovladač**, boční panely **AI tvůrce**, [**Batoh**](/docs/Application/BlockBuilder/Backpack) a **Monitor**, **Více** (s **Nastavením editoru**) a **Spustit/Zastavit**. Na telefonu nebo tabletu jsou boční panely a Herní ovladač v nabídce **Více**.

Podrobnosti najdete v části [Práce v editoru](/docs/Application/BlockBuilder/Editor).

## Jak program běží {#how-a-program-runs}

- Skript začíná blokem **události** (blokem s čepicí): *když program začne*, *když je tlačítko … stisknuto*, *když obdržím …* a podobně.
- Bloky připojené pod ním běží shora dolů.
- Několik skriptů běží **současně**. Ke koordinaci použijte zprávy (*předat*).
- **Cykly** (*opakovat vždy*, *opakovat*, *opakovat, dokud*) udržují skript v chodu; **podmínky** (*pokud*, *pokud … jinak*, *čekat, dokud*) rozhodují.
- **Hodnotové** bloky (zaoblené) vracejí hodnoty a vejdou se do vstupů jiných bloků; **booleovské** bloky (špičaté) vracejí pro podmínky pravdu nebo nepravdu.
- **Proměnné** a **seznamy** uchovávají hodnoty mezi bloky a skripty.

## Tvary bloků {#block-shapes}

### Bloky s čepicí {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Spustí skript, když se něco stane. Bloky k nim lze připojit jen zespodu.

---

### Příkazové bloky {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Hlavní příkazové bloky: každý z nich něco dělá.

---

### Bloky ve tvaru C {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Bloky ve tvaru písmene C, které v sobě drží jiné bloky: cykly a podmínky.

---

### Hodnotové bloky {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Vracejí hodnotu, například číslo nebo text.

---

### Booleovské bloky {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Vracejí jen `true` nebo `false`. Obvykle se používají v podmínkách.

---

### Koncové bloky {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Ukončují skript: pod ně nelze nic připojit.

---

### Zásobník bloků {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Zásobník je skupina spojených bloků, která běží jako jeden skript, shora dolů.
Zásobník obvykle začíná blokem události, za kterým následují bloky, jež běží v pořadí.

---


## Huby, porty a ovládací prvky {#hubs-ports-and-controls}

- Bloky motorů a světel berou **Hub** a **Port**. Kategorie Motory a Světlo se objeví, jen když je některý hub v profilu podporuje, a některé bloky existují jen pro určité huby (například režimy výkonu BuWizz nebo funkce Technic Move Hubu). Popis každého bloku uvádí, se kterými huby funguje.
- Bloky panelu odkazují na ovládací prvky podle názvu (**JOY1**, **BTN2**). Ovládací prvek nelze z panelu smazat, dokud ho bloky používají; nejprve tyto bloky odeberte.
- Bloky gamepadu se objeví, když je na [stránce Herní ovladač](/docs/Application/Dashboard/Gamepad) zapnuté **Povolit bloky gamepadu**.

## Úrovně bloků {#block-levels}

Každý profil má **Úroveň bloků**: **Začátečník** ukazuje nejjednodušší bloky, **Pokročilý** přidává běžnou logiku a bloky zařízení a **Guru** ukazuje kompletní sadu. Zvolíte ji při vytváření profilu nebo později v Nastavení editoru. Tento přehled uvádí úroveň každého bloku vedle jeho názvu.

## Doporučený postup {#recommended-workflow}

1. Začněte jedním blokem události a krátkým skriptem; stiskněte **Spustit** a ověřte, že funguje.
2. Včas zkontrolujte směry motorů a rozsahy hodnot (pomůže Monitor).
3. Rozdělte program na malé skripty, které spolu komunikují zprávami; opakující se logiku přesuňte do [Mých bloků](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Přidejte zabezpečení: limity, zastavení, kontrolu při spuštění a plán pro případ, že se hub odpojí.

## Časté chyby {#common-pitfalls}

- Skript bez bloku události se nikdy nespustí.
- Je vybraný špatný hub nebo port, takže se viditelně nic neděje.
- Míchání textu, čísel a booleovských hodnot dává nečekané výsledky.
- Velmi časté události bez filtrování (například událost senzoru při každé drobné změně) mohou program přetížit; použijte prahy nebo krátká čekání.

## Přehled bloků {#block-reference}

- [Události](/docs/Application/BlockBuilder/Blocks/Events) · [Ovládání](/docs/Application/BlockBuilder/Blocks/Control) · [Operátor](/docs/Application/BlockBuilder/Blocks/Operators)
- [Proměnné](/docs/Application/BlockBuilder/Blocks/Variables) · [Seznamy](/docs/Application/BlockBuilder/Blocks/Lists) · [Moje bloky](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Motory](/docs/Application/BlockBuilder/Blocks/Motors) · [Světlo](/docs/Application/BlockBuilder/Blocks/Light) · [Senzory](/docs/Application/BlockBuilder/Blocks/Sensors) · [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Simulátor](/docs/Application/BlockBuilder/Blocks/Simulator) · [Ovladače na obrazovce](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Herní ovladač](/docs/Application/BlockBuilder/Blocks/Gamepad)

V aplikaci blok dlouze podržte (nebo na něj klikněte pravým tlačítkem) a zvolte **O bloku**; otevře se jeho popis zde.

Hotové programy: [Příklady](/docs/Application/BlockBuilder/Examples).
