---
id: CreateProfile
title: Vytvorenie profilu
description: "Vytvorte profil a vyberte si medzi editormi programov Logické bloky a Rýchle prepojenia."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Vytvorenie profilu {#create-a-profile}

1. Prejdite na **Moje profily**.
   - Telefón: ťuknite na **+** → **Nový profil**.
   - Tablet: **Nový profil** v hlavičke.
   - Počítač: **Súbor → Nový profil** (⌘N / Ctrl+N).
2. Zvoľte **typ programu** (pozrite nižšie).
3. Vyplňte údaje profilu.
4. Ťuknite na **Vytvoriť**. Profil sa otvorí v editore.

<Screenshot name="create-profile-tiles" alt="Stránka Nový profil" width={900} />

## Výber typu programu {#choose-the-program-type}

Typ programu určuje, ktorý editor profil používa. **Neskôr ho nemôžete zmeniť.** Ak chcete vyskúšať druhý editor, vytvorte druhý profil.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Rýchle prepojenia" style={{width: '100%', maxWidth: 320}} />
    <h3>Rýchle prepojenia</h3>
    <p><em>Zjednodušená schéma, ako v Controlz.</em> Prepájajte ovládacie prvky panela s motormi a svetlami hubu riadok po riadku: vstup, spracovanie, operácia, hub. Hotové za pár minút.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Logické bloky" style={{width: '100%', maxWidth: 320}} />
    <h3>Logické bloky</h3>
    <p><em>Robotika, algoritmy a pokročilé scenáre.</em> Programujte model blokmi: udalosti, cykly, podmienky, premenné a údaje zo senzorov. Pre roboty a automatizáciu.</p>
  </div>
</div>

| | Rýchle prepojenia | Logické bloky |
|---|---|---|
| Ako sa tvorí | Riadky: vstup → spracovanie → operácia → hub | Bloky spojené do skriptov |
| Čas na naučenie | Minúty | Dlhší; viac možností |
| Najlepšie pre | Autá, nákladiaky, vlaky, žeriavy: „tento ovládací prvok hýbe tamtým motorom“ | Roboty, automatické sekvencie, logika so senzormi, hry |
| Logika (podmienky, cykly, premenné) | Nie (iba prahy a prepínače) | Áno |
| Senzory | Senzory hubu ako vstupy; hodnoty na indikátory | Všetky senzory hubov a telefónu, ľubovoľné výpočty |
| Plynulý rozbeh, obmedzenia, mŕtva zóna | Hotové bloky | Zostavené z blokov |
| Riadenie servom s kalibráciou | Hotový blok | Bloky |
| Herný ovládač | Áno | Áno |
| Viac hubov | Áno | Áno |

**Neviete sa rozhodnúť?** Začnite s Rýchlymi prepojeniami. Ak neskôr budete potrebovať logiku, vytvorte pre model profil s Logickými blokmi.

Ak ťuknete na **Vytvoriť** bez výberu typu, dlaždice sa zvýraznia. Každá dlaždica má odkaz **Dokumentácia ↗** na svoju časť tejto dokumentácie.

## Údaje profilu {#profile-details}

- **Obrázok**: kliknite na oblasť obrázka (na dotykovej obrazovke ju dlho podržte) a vyberte obrázok. Potiahnutím obrázka hore alebo dole zvolíte, ktorá časť bude viditeľná. **Aktualizovať obrázok** a **Odstrániť** ho neskôr zmenia.
- **Názov**: povinný a musí byť jedinečný: „Profil s názvom … už existuje“ znamená, že profil s týmto názvom už máte.
- **Úroveň blokov** (iba Logické bloky): **Začiatočník**, **Pokročilý** alebo **Guru**. Určuje, ktoré bloky paleta pre tento profil zobrazuje. Neskôr ju môžete zmeniť v Nastaveniach editora. Pozrite si [Práca v editore](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtagy**: opisujú profil a pomáhajú ľuďom ho nájsť. Hashtagy pochádzajú zo spoločného zoznamu, ktorý sa načíta, keď ste online.

Všetko okrem typu programu môžete neskôr zmeniť v **Upraviť profil**, kde môžete pridať aj popis a označiť profil ako **Obľúbený**.

## Ďalšie kroky {#next-steps}

1. Pridajte huby: [Pridanie a pripojenie hubu](/docs/Application/Hubs/ConnectingHubs).
2. Umiestnite ovládacie prvky: [Panel](/docs/Application/Dashboard/DashboardOverview).
3. Napíšte program: [Rýchle prepojenia](/docs/Application/Links/LinksIntroducing) alebo [Logické bloky](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip AI staviteľ
S [MocPilot Pro](/docs/Application/Account/Pro) môžete model opísať slovami alebo hlasom a nechať AI staviteľa vytvoriť huby, panel a program (Logické bloky alebo Rýchle prepojenia). Uveďte, aký hub používate, čo je zapojené v každom porte a čo to má robiť. Pozrite si [Ako dosiahnuť dobrý výsledok](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
