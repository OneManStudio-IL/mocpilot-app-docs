---
id: AiBuilder
title: AI staviteľ
description: "Opíšte model slovami alebo hlasom a AI staviteľ nastaví huby, panel a program profilu s Logickými blokmi alebo Rýchlymi prepojeniami."
---

import Screenshot from '@site/src/components/Screenshot';

# AI staviteľ {#ai-builder}

Opíšte svoj model vlastnými slovami, písomne alebo hlasom, a **AI staviteľ** za vás nastaví profil: huby a porty, ovládacie prvky na paneli a program. Funguje v oboch editoroch: v profile s [Logickými blokmi](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) zostavuje bloky, v profile s [Rýchlymi prepojeniami](/docs/Application/Links/LinksIntroducing) zostavuje riadky. Potom sa s ním môžete ďalej rozprávať a profil meniť, alebo ho upravíte sami.

AI staviteľ je súčasťou [MocPilot Pro](/docs/Application/Account/Pro) a funguje v aplikácii aj vo [webovom editore](/docs/Introducing/WebEditor). Vyžaduje pripojenie na internet.

<Screenshot name="blocks-ai-builder" alt="Panel AI staviteľa vedľa programu" width={900} />

## Otvorenie AI staviteľa {#open-the-ai-builder}

1. Otvorte profil na úpravu.
2. Na počítači stlačte tlačidlo **AI staviteľ** (ikona iskier) vpravo na hornej lište alebo ⇧⌘I / Ctrl+Shift+I; v úzkom okne je v ponuke **Viac** (⋯). Na telefóne alebo tablete ťuknite na **Viac** → **AI staviteľ**.
3. Napíšte požiadavku do poľa **Čo má AI vytvoriť alebo zmeniť?** a stlačte **Odoslať** (alebo Enter; Shift+Enter začne nový riadok).

Bez MocPilot Pro tlačidlo ukáže, čo AI staviteľ robí, s možnosťami **Získať MocPilot Pro** a **Teraz nie**.

Kde sa panel otvorí:

- **Telefón**: stránka na celú obrazovku nad editorom.
- **Tablet**: plávajúca karta; potiahnutím za hlavičku ju presuniete na ľavú alebo pravú stranu.
- **Počítač**: karta vpravo. V aplikácii (nie v prehliadači) môžete v jej hlavičke stlačiť **Otvoriť v samostatnom okne** a okno umiestniť vedľa editora.

Kým AI pracuje, panel ukazuje, čo robí (**Premýšľam o vašom modeli…**, **Kontrolujem profil…** a podobne). Zmeny sa v editore objavia hneď po dokončení spolu s krátkym zhrnutím toho, čo sa zmenilo. Keď je panel prázdny, navrhne niekoľko ukážkových požiadaviek: ťuknutím na niektorú ju vložíte do textového poľa a potom ju odošlete tak, ako je, alebo ju najprv upravíte.

Konverzácia sa uchováva pre každý profil, takže panel môžete zatvoriť a vrátiť sa k nej neskôr.

## Ako napísať dobrú požiadavku {#ai-builder-tips}

:::tip Uveďte, aký hub používate, čo je zapojené v každom porte a čo to má robiť
Jednoriadková požiadavka ako „auto so svetlami“ nestačí: AI musí hádať hub, porty aj to, čo robí každý motor, a výsledok bude pravdepodobne potrebovať opravy. Uveďte:

- **Hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Čo je v každom porte**: hnací motor, motor riadenia (servo), svetlá, senzor.
- **Čo má každé zariadenie robiť**: jazdiť, riadiť s kalibráciou, zapínať a vypínať sa, obmedzenie rýchlosti.
- **Ako to chcete ovládať**: joysticky, posuvníky, tlačidlá, herný ovládač.
:::

Povedzte to tak, ako by ste to vysvetlili kamarátovi. Môžete písať po slovensky.

Ak niečo stále nie je v poriadku, povedzte AI, čo má zmeniť, namiesto toho, aby ste začínali odznova.

## Ukážkové požiadavky {#example-requests}

**Auto**: „Auto s Technic Hubom: hnací motor na porte A, motor riadenia na porte C funguje ako servo, svetlá na porte D. Joystick riadenia vľavo, plyn vpravo, tlačidlo zapína svetlá.“

**Žeriav**: „Žeriav s Technic Hubom: motor otáčania na porte A, motor ramena na porte B, navijak háku na porte C. Posuvník na otáčanie, tlačidlá hore/dole pre rameno, joystick pre hák, rýchlosť ramena obmedzená na 50 %.“

**Vlak**: „Vlak City s City Hubom: vlakový motor na porte A, svetlá na porte B. Stupňový prepínač na rýchlosť, rýchlomer a tlačidlo na svetlá.“

## Zmena existujúceho profilu {#change-an-existing-profile}

Otvorte AI staviteľa v profile, ktorý už máte, aj v takom, ktorý ste zostavili ručne, a povedzte, čo zmeniť. AI vidí aktuálne huby, panel a program a upraví ich:

- „Spomaľ riadenie.“
- „Pridaj tlačidlo stop.“
- „Skopíruj ovládanie na môj herný ovládač.“
- „Obmedz rýchlosť ramena na 50 %.“

Môžete sa aj pýtať na profil, napríklad „Na ktorom porte sú svetlá?“. AI odpovie v paneli a profil nechá tak, ako je.

## Čo sa stane s vaším profilom {#what-happens-to-your-profile}

- AI mení otvorený profil priamo: huby, panel a program sa aktualizujú naraz. Ak program beží, zastaví sa.
- AI pracuje s typom programu profilu: v profile s Logickými blokmi píše bloky, v profile s Rýchlymi prepojeniami riadky. Nikdy jeden typ nezmení na druhý. Ak požiadavka potrebuje niečo, čo riadky Rýchlych prepojení nedokážu, AI vám povie, že je potrebný profil s Logickými blokmi.
- Časti profilu, ktoré AI nepotrebuje meniť, zostanú nezmenené.
- **Vrátiť poslednú zmenu AI** (tlačidlo späť v hlavičke panela) vráti profil do stavu pred poslednou zmenou AI. Ďalším stlačením sa vrátite ešte ďalej, až o 10 zmien. História vrátení sa vymaže, keď otvoríte iný profil.
- Profil môžete kedykoľvek ďalej upravovať aj sami.

## Hlasový vstup {#voice-input}

Stlačte **Diktovať** (tlačidlo mikrofónu) a vyslovte požiadavku; text sa objaví v poli a pred odoslaním ho môžete opraviť. Opätovným stlačením tlačidla diktovanie ukončíte. Ak je k dispozícii viac jazykov, malé tlačidlo jazyka vedľa mikrofónu prepína jazyk diktovania; aplikácia si vašu voľbu zapamätá.

| Kde | Ako |
|---|---|
| iPhone, iPad, Mac | **Diktovať**; pri prvom použití povoľte prístup k mikrofónu a rozpoznávanie reči |
| Android | **Diktovať**; pri prvom použití povoľte prístup k mikrofónu |
| Windows | stlačte **Win+H** a diktujte pomocou hlasového zadávania Windows (tlačidlo mikrofónu vám to pripomenie) |
| Webový editor | **Diktovať** v Chrome, Edge a Safari; povoľte stránke prístup k mikrofónu. Firefox diktovanie nemá |

Správy hlasového vstupu:

| Správa | Čo robiť |
|---|---|
| **Povoľte aplikácii MOCPilot prístup k mikrofónu v systémových nastaveniach** | V systémových nastaveniach zapnite pre MOCPilot prístup k mikrofónu |
| **Povoľte aplikácii MOCPilot rozpoznávanie reči v systémových nastaveniach** | Na zariadení Apple zapnite v systémových nastaveniach pre MOCPilot rozpoznávanie reči |
| **Povoľte tejto stránke prístup k mikrofónu v prehliadači** | Povoľte mikrofón v nastaveniach stránky v prehliadači |
| **Nič nebolo počuť** | Stlačte **Diktovať** a hovorte znova |
| **Hlasové zadávanie vyžaduje pripojenie** | Pripojte sa na internet alebo požiadavku napíšte |
| **Rozpoznávanie reči pre tento jazyk momentálne nie je dostupné** | Prepnite jazyk diktovania alebo požiadavku napíšte |
| **Nenašiel sa žiadny mikrofón** / **Hlasové zadávanie nie je na tomto zariadení dostupné** | Požiadavku napíšte |

## Limity {#limits}

- Približne 30 požiadaviek denne a mesačný limit. Hlavička panela ukazuje, koľko ste využili: **Dnes 5/30 · Mesiac 12%**.
- Počas bezplatnej skúšobnej verzie je počet požiadaviek na AI obmedzený; pokračujú po začatí predplatného.
- Jedna požiadavka naraz: pred odoslaním ďalšej počkajte na odpoveď.
- AI staviteľ iba vytvára a upravuje profily. Na otázky na iné témy neodpovedá.

## Chybové správy {#error-messages}

| Správa | Čo robiť |
|---|---|
| **AI asistent nie je dostupný** / **Službu AI sa nepodarilo zastihnúť. Skontrolujte pripojenie na internet a skúste to znova.** | Skontrolujte pripojenie na internet a znova otvorte panel |
| **Nedá sa pripojiť k službe AI. Skontrolujte pripojenie na internet a skúste to znova.** | Skontrolujte pripojenie a požiadavku odošlite znova |
| **Spojenie so službou AI sa prerušilo…** | Keď budete znova online, odpoveď sa zobrazí v paneli, alebo požiadavku odošlite znova |
| **AI neodpovedala včas. Odošlite požiadavku znova.** / **Požiadavka sa stratila, odošlite ju znova** | Odošlite požiadavku znova |
| **AI nedokázala pre túto požiadavku zostaviť funkčný profil. Skúste to povedať inými slovami.** | Preformulujte požiadavku: uveďte hub, porty a čo ktoré zariadenie robí |
| **Profil je príliš veľký na zostavenie naraz. Požiadajte o menej vecí naraz.** | Rozdeľte požiadavku na menšie kroky |
| **AI túto požiadavku odmietla.** | Preformulujte požiadavku tak, aby sa týkala profilu |
| **Dosiahli ste dnešný limit požiadaviek na AI. Skúste to znova zajtra.** | Počkajte do zajtra alebo upravte profil sami |
| **Dosiahli ste mesačný limit AI.** | Limit sa obnoví budúci mesiac |
| **Využili ste všetky požiadavky na AI v skúšobnom období. Budú pokračovať po začatí predplatného.** | Počkajte na začatie predplatného |
| **AI staviteľ iba vytvára a upravuje profily. Príliš veľa požiadaviek na iné témy: skúste to znova o hodinu.** | Počkajte hodinu a pýtajte sa iba na profil |
| **Práve je príliš veľa požiadaviek na AI. Skúste to o minútu.** | Skúste to znova o minútu |
| **Predchádzajúca požiadavka ešte prebieha.** | Počkajte na odpoveď |
| **Služba AI je dočasne nedostupná. Skúste to neskôr.** / **Máte MocPilot Pro. AI staviteľ momentálne nie je dostupný, skúste to neskôr.** | Skúste to neskôr |
| **Odpoveď patrila inému profilu** | Kým AI pracovala, otvorili ste iný profil, takže zmena sa nepoužila. Znova otvorte prvý profil a požiadavku zopakujte |
| **Najprv otvorte profil na úpravu** | Otvorte profil v editore a potom odošlite požiadavku |
| **Profil sa v editore nepodarilo aktualizovať** / **Zmenu sa nepodarilo vrátiť späť** | Skúste to znova; ak sa to opakuje, profil zatvorte a znova otvorte |
