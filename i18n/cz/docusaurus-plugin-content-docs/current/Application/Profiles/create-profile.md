---
id: CreateProfile
title: Vytvoření profilu
description: "Vytvořte profil a vyberte si mezi editory programů Logické bloky a Rychlá propojení."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Vytvoření profilu {#create-a-profile}

1. Přejděte na **Moje profily**.
   - Telefon: klepněte na **+** → **Nový profil**.
   - Tablet: **Nový profil** v záhlaví.
   - Počítač: **Soubor → Nový profil** (⌘N / Ctrl+N).
2. Zvolte **typ programu** (viz níže).
3. Vyplňte údaje profilu.
4. Klepněte na **Vytvořit**. Profil se otevře v editoru.

<Screenshot name="create-profile-tiles" alt="Stránka Nový profil" width={900} />

## Volba typu programu {#choose-the-program-type}

Typ programu určuje, který editor profil používá. **Později ho už změnit nelze.** Chcete-li vyzkoušet druhý editor, vytvořte druhý profil.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Rychlá propojení" style={{width: '100%', maxWidth: 320}} />
    <h3>Rychlá propojení</h3>
    <p><em>Zjednodušené schéma, jako v Controlz.</em> Propojujte ovládací prvky panelu s motory a světly hubu řádek po řádku: vstup, zpracování, operace, hub. Hotovo během pár minut.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Logické bloky" style={{width: '100%', maxWidth: 320}} />
    <h3>Logické bloky</h3>
    <p><em>Robotika, algoritmy a pokročilé scénáře.</em> Programujte model pomocí bloků: událostí, cyklů, podmínek, proměnných a dat ze senzorů. Pro roboty a automatizaci.</p>
  </div>
</div>

| | Rychlá propojení | Logické bloky |
|---|---|---|
| Jak se staví | Řádky: vstup → zpracování → operace → hub | Bloky spojené do skriptů |
| Doba učení | Minuty | Delší; víc možností |
| Nejlepší pro | Auta, nákladní vozy, vlaky, jeřáby: „tento ovládací prvek pohybuje tímto motorem“ | Roboty, automatické sekvence, logiku se senzory, hry |
| Logika (podmínky, cykly, proměnné) | Ne (jen prahy a přepínání) | Ano |
| Senzory | Senzory hubu jako vstupy; hodnoty do indikátorů | Všechny senzory hubu i telefonu, libovolné výpočty |
| Plynulý rozjezd, omezení, mrtvá zóna | Hotové bloky | Sestavené z bloků |
| Servo řízení s kalibrací | Hotový blok | Bloky |
| Herní ovladač | Ano | Ano |
| Více hubů | Ano | Ano |

**Nejste si jistí?** Začněte s Rychlými propojeními. Pokud později budete potřebovat logiku, vytvořte pro model profil s Logickými bloky.

Pokud klepnete na **Vytvořit** bez zvolení typu, dlaždice se zvýrazní. Každá dlaždice má odkaz **Dokumentace ↗** na příslušnou část této dokumentace.

## Údaje profilu {#profile-details}

- **Obrázek**: klikněte na oblast obrázku (na dotykové obrazovce ji dlouze stiskněte) a vyberte obrázek. Přetažením obrázku nahoru nebo dolů zvolíte, která část bude vidět. Později ho změníte pomocí **Aktualizovat obrázek** a **Odebrat**.
- **Název**: povinný a musí být jedinečný: „Profil s názvem … už existuje“ znamená, že už máte profil s tímto názvem.
- **Úroveň bloků** (jen Logické bloky): **Začátečník**, **Pokročilý** nebo **Guru**. Určuje, které bloky paleta pro tento profil zobrazuje. Později ji můžete změnit v Nastavení editoru. Viz [Práce v editoru](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtagy**: popisují profil a pomáhají ho ostatním najít. Hashtagy pocházejí ze sdíleného seznamu, který se načte, když jste online.

Všechno kromě typu programu můžete později změnit v **Upravit profil**, kde můžete také přidat popis a označit profil jako **Oblíbené**.

## Další kroky {#next-steps}

1. Přidejte huby: [Přidání a připojení hubu](/docs/Application/Hubs/ConnectingHubs).
2. Rozmístěte ovládací prvky: [Panel](/docs/Application/Dashboard/DashboardOverview).
3. Napište program: [Rychlá propojení](/docs/Application/Links/LinksIntroducing) nebo [Logické bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip AI tvůrce
S [MocPilot Pro](/docs/Application/Account/Pro) můžete svůj model popsat slovy nebo hlasem a nechat AI tvůrce vytvořit huby, panel i program (Logické bloky nebo Rychlá propojení). Řekněte, jaký hub používáte, co je připojené ke kterému portu a co to má dělat. Viz [Jak dosáhnout dobrého výsledku](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
