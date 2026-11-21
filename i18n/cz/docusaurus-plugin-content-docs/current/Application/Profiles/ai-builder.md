---
id: AiBuilder
title: AI tvůrce
description: "Popište svůj model slovy nebo hlasem a AI tvůrce nastaví huby, panel a program profilu s Logickými bloky nebo Rychlými propojeními."
---

import Screenshot from '@site/src/components/Screenshot';

# AI tvůrce {#ai-builder}

Popište svůj model vlastními slovy, napsaně nebo hlasem, a **AI tvůrce** za vás nastaví profil: huby a porty, ovládací prvky panelu a program. Funguje v obou editorech: v profilu s [Logickými bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) skládá bloky, v profilu s [Rychlými propojeními](/docs/Application/Links/LinksIntroducing) vytváří řádky. Potom s ním můžete dál mluvit a profil měnit, nebo ho upravit sami.

AI tvůrce je součástí [MocPilot Pro](/docs/Application/Account/Pro) a funguje v aplikaci i ve [webovém editoru](/docs/Introducing/WebEditor). Vyžaduje připojení k internetu.

<Screenshot name="blocks-ai-builder" alt="Panel AI tvůrce vedle programu" width={900} />

## Otevření AI tvůrce {#open-the-ai-builder}

1. Otevřete profil k úpravám.
2. Stiskněte tlačítko **AI tvůrce** (ikona jisker) na horní liště. Na počítači můžete také stisknout ⇧⌘I / Ctrl+Shift+I.
3. Napište svůj požadavek do pole **Co má AI sestavit nebo změnit?** a stiskněte **Odeslat** (nebo Enter; Shift+Enter začne nový řádek).

Bez MocPilot Pro ukáže tlačítko, co AI tvůrce umí, s volbami **Získat MocPilot Pro** a **Teď ne**.

Kde se panel otevře:

- **Telefon**: stránka na celou obrazovku přes editor.
- **Tablet**: plovoucí karta; za záhlaví ji přetáhnete na levou nebo pravou stranu.
- **Počítač**: karta vpravo. V aplikaci (ne v prohlížeči) můžete v jejím záhlaví stisknout **Otevřít v samostatném okně** a umístit okno vedle editoru.

Zatímco AI pracuje, panel ukazuje, co právě dělá (**Přemýšlím o vašem modelu…**, **Kontroluji profil…** a podobně). Změny se v editoru objeví, jakmile je hotovo, spolu s krátkým shrnutím toho, co se změnilo. Když je panel prázdný, nabídne několik ukázkových požadavků: klepnutím jeden vložíte do textového pole a pak ho odešlete tak, jak je, nebo ho nejprve upravíte.

Konverzace se uchovává pro každý profil zvlášť, takže panel můžete zavřít a vrátit se k ní později.

## Jak napsat dobrý požadavek {#ai-builder-tips}

:::tip Řekněte, jaký hub používáte, co je připojené ke kterému portu a co to má dělat
Jednořádkový požadavek jako „auto se světly“ nestačí: AI musí hádat hub, porty i to, co který motor dělá, a výsledek bude nejspíš potřeba opravit. Uveďte:

- **Hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Co je na kterém portu**: motor pohonu, motor řízení (servo), světla, senzor.
- **Co má který dělat**: jet, zatáčet s kalibrací, zapínat a vypínat, omezení rychlosti.
- **Jak to chcete ovládat**: joysticky, posuvníky, tlačítka, herní ovladač.
:::

Řekněte to tak, jak byste to vysvětlovali kamarádovi. Psát můžete ve svém jazyce.

Pokud něco stále není v pořádku, řekněte AI, co má změnit, místo abyste začínali znovu.

## Ukázkové požadavky {#example-requests}

**Auto**: „Auto s Technic Hubem: motor pohonu je na portu A, motor řízení na portu C funguje jako servo, světla jsou na portu D. Joystick pro řízení vlevo, plyn vpravo, tlačítko, které přepíná světla.“

**Jeřáb**: „Jeřáb s Technic Hubem: motor otáčení je na portu A, motor výložníku na portu B, naviják háku na portu C. Posuvník pro otáčení, tlačítka nahoru/dolů pro výložník, joystick pro hák, rychlost výložníku omezená na 50 %.“

**Vlak**: „Vlak City s City Hubem: vlakový motor je na portu A, světla na portu B. Krokový spínač pro rychlost, rychloměr a tlačítko pro světla.“

## Změna existujícího profilu {#change-an-existing-profile}

Otevřete AI tvůrce v profilu, který už máte, i v takovém, který jste sestavili ručně, a řekněte, co změnit. AI vidí aktuální huby, panel i program a upraví je:

- „Zpomal řízení.“
- „Přidej tlačítko stop.“
- „Zkopíruj ovládání na můj herní ovladač.“
- „Omez rychlost výložníku na 50 %.“

Na profil se můžete také zeptat, například „Na kterém portu jsou světla?“. AI odpoví v panelu a profil nechá beze změny.

## Co se stane s vaším profilem {#what-happens-to-your-profile}

- AI mění otevřený profil přímo: huby, panel i program se aktualizují najednou. Pokud program běží, zastaví se.
- AI pracuje s typem programu daného profilu: v profilu s Logickými bloky píše bloky, v profilu s Rychlými propojeními píše řádky. Nikdy jeden typ nepřevede na druhý. Pokud požadavek vyžaduje něco, co řádky Rychlých propojení neumějí, AI vám řekne, že je potřeba profil s Logickými bloky.
- Části profilu, které AI měnit nemusí, zůstanou beze změny.
- **Vrátit poslední změnu od AI** (tlačítko zpět v záhlaví panelu) vrátí profil do stavu před poslední změnou od AI. Dalším stisknutím se vrátíte ještě dál, až o 10 změn. Historie vracení se vymaže, když otevřete jiný profil.
- Profil můžete kdykoli dál upravovat sami.

## Hlasové zadávání {#voice-input}

Stiskněte **Diktovat** (tlačítko s mikrofonem) a řekněte svůj požadavek; text se objeví v poli a před odesláním ho můžete opravit. Dalším stisknutím tlačítka diktování ukončíte. Pokud je k dispozici více jazyků, malé tlačítko jazyka vedle mikrofonu přepíná jazyk diktování; aplikace si vaši volbu zapamatuje.

| Kde | Jak |
|---|---|
| iPhone, iPad, Mac | **Diktovat**; poprvé povolte přístup k mikrofonu a rozpoznávání řeči |
| Android | **Diktovat**; poprvé povolte přístup k mikrofonu |
| Windows | stiskněte **Win+H** a diktujte pomocí hlasového zadávání Windows (tlačítko s mikrofonem vám to připomene) |
| Webový editor | **Diktovat** v Chromu, Edgi a Safari; povolte webu přístup k mikrofonu. Firefox diktování nemá |

Zprávy hlasového zadávání:

| Zpráva | Co dělat |
|---|---|
| **Povolte MOCPilot přístup k mikrofonu v systémovém nastavení** | Zapněte v systémovém nastavení přístup MOCPilotu k mikrofonu |
| **Povolte MOCPilot rozpoznávání řeči v systémovém nastavení** | Na zařízení Apple zapněte v systémovém nastavení rozpoznávání řeči pro MOCPilot |
| **Povolte tomuto webu přístup k mikrofonu v prohlížeči** | Povolte mikrofon v nastavení webu v prohlížeči |
| **Nic nebylo slyšet** | Stiskněte **Diktovat** a mluvte znovu |
| **Hlasové zadávání vyžaduje připojení** | Připojte se k internetu, nebo požadavek napište |
| **Rozpoznávání řeči teď pro tento jazyk není k dispozici** | Přepněte jazyk diktování, nebo požadavek napište |
| **Nebyl nalezen žádný mikrofon** / **Hlasové zadávání není na tomto zařízení k dispozici** | Napište požadavek |

## Limity {#limits}

- Asi 30 požadavků denně a měsíční limit. Záhlaví panelu ukazuje, kolik jste už využili: **Dnes 5/30 · Měsíc 12%**.
- Během zkušební verze zdarma je počet požadavků na AI omezený; po zahájení předplatného pokračují.
- Vždy jen jeden požadavek: před odesláním dalšího počkejte na odpověď.
- AI tvůrce pouze sestavuje a upravuje profily. Na otázky k jiným tématům neodpovídá.

## Chybové zprávy {#error-messages}

| Zpráva | Co dělat |
|---|---|
| **AI asistent není dostupný** / **Službu AI se nepodařilo zastihnout. Zkontrolujte připojení k internetu a zkuste to znovu.** | Zkontrolujte připojení k internetu a otevřete panel znovu |
| **Nelze se připojit ke službě AI. Zkontrolujte připojení k internetu a zkuste to znovu.** | Zkontrolujte připojení a odešlete požadavek znovu |
| **Spojení se službou AI bylo přerušeno…** | Až budete znovu online, odpověď se objeví v panelu; případně odešlete požadavek znovu |
| **AI neodpověděla včas. Odešlete požadavek znovu.** / **Požadavek se ztratil, odešlete ho prosím znovu** | Odešlete požadavek znovu |
| **AI nedokázala pro tento požadavek sestavit funkční profil. Zkuste to říct jinými slovy.** | Přeformulujte požadavek: uveďte hub, porty a co který dělá |
| **Profil je příliš velký na sestavení najednou. Požádejte o méně věcí najednou.** | Rozdělte požadavek na menší kroky |
| **AI tento požadavek odmítla.** | Přeformulujte požadavek tak, aby se týkal profilu |
| **Dosáhli jste dnešního limitu požadavků na AI. Zkuste to znovu zítra.** | Počkejte do zítřka, nebo profil upravte sami |
| **Dosáhli jste měsíčního limitu AI.** | Limit se obnoví příští měsíc |
| **Využili jste všechny požadavky na AI ve zkušebním období. Budou pokračovat po zahájení předplatného.** | Počkejte na zahájení předplatného |
| **AI tvůrce pouze sestavuje a upravuje profily. Příliš mnoho požadavků na jiná témata: zkuste to znovu za hodinu.** | Počkejte hodinu a ptejte se jen na profil |
| **Právě je příliš mnoho požadavků na AI. Zkuste to za minutu.** | Zkuste to znovu za minutu |
| **Předchozí požadavek ještě běží.** | Počkejte na odpověď |
| **Služba AI je dočasně nedostupná. Zkuste to později.** / **Máte MocPilot Pro. AI tvůrce teď není k dispozici, zkuste to prosím později.** | Zkuste to později |
| **Odpověď patřila k jinému profilu** | Během práce AI jste otevřeli jiný profil, takže změna nebyla použita. Otevřete znovu první profil a požadavek zopakujte |
| **Nejprve otevřete profil k úpravám** | Otevřete profil v editoru a pak odešlete požadavek |
| **Profil se v editoru nepodařilo aktualizovat** / **Změnu se nepodařilo vrátit zpět** | Zkuste to znovu; pokud se to opakuje, zavřete profil a znovu ho otevřete |
