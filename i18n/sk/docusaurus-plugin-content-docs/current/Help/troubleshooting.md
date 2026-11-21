---
id: Troubleshooting
title: Riešenie problémov
description: "Riešenia bežných problémov s hubmi, motormi, panelom, synchronizáciou, nákupmi, aktualizáciami, zvukom, AI staviteľom a diaľkovým ovládaním."
---

# Riešenie problémov {#troubleshooting}

## Huby {#hubs}

**Hub sa nenašiel**
- Zapnite Bluetooth a v systémových nastaveniach povoľte aplikácii MOCPilot používať Bluetooth (na Androide aj Zariadenia v okolí alebo Polohu). Pozrite si [Bluetooth a povolenia](/docs/Help/BluetoothPermissions).
- Zapnite hub a stlačte jeho tlačidlo tesne pred skenovaním; znova ťuknite na **Spustiť skenovanie**.
- Uistite sa, že hub nie je pripojený k inému telefónu alebo aplikácii (aplikácie LEGO®, iný diaľkový ovládač). Zatvorte ich.
- Vymeňte alebo nabite batérie.
- Robot Inventor: nie je k dispozícii na iPhone a iPade. Mould King 4.0: nie je k dispozícii vo Windows.

**Hub sa odpája**
- Priblížte zariadenie: steny, kov a iné zariadenia 2,4 GHz znižujú dosah.
- Slabé batérie spôsobujú odpájanie pri záťaži: nabite ich alebo vymeňte.
- Niektoré huby sa po chvíli bez príkazov vypnú; znova ich pripojte v **Moje huby**.
- Viac o dosahu, adaptéroch a povoleniach: [Bluetooth a povolenia](/docs/Help/BluetoothPermissions).

**„Vyžaduje sa aktualizácia firmvéru“**
- MOCPilot potrebuje podporovaný firmvér pre huby Technic, Technic Move, BOOST a City. Postupujte podľa časti [Aktualizácia firmvéru](/docs/Application/Hubs/FirmwareUpdating). Ak aktualizácia zlyhala, pozrite si [Obnova firmvéru](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King nereaguje**
- Huby Mould King iba prijímajú príkazy. Použite **Pripojiť znova**, skontrolujte kanál (**Vyberte kanál**) a v jednom profile používajte iba jeden typ Mould King.

## Motory a program {#motors-and-the-program}

**Motor sa nehýbe**
- Beží program (**Spustiť**)? Je hub pripojený?
- Je motor v porte, ktorý program používa? Skontrolujte [monitor hubu](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Rýchle prepojenia: otvorte **Problémy**; sledujte živé hodnoty pozdĺž riadka. Pozrite si [Spustenie a riešenie problémov](/docs/Application/Links/Problems).
- Logické bloky: začína skript blokom udalosti? Na sledovanie hodnôt použite **Monitor**.

**Motor sa točí opačne**
- Rýchle prepojenia: pridajte do riadka **Invertovať**. Logické bloky: vynásobte hodnotu −1.

**Motor sa pomaly hýbe alebo bzučí, keď joystick pustíte**
- Rýchle prepojenia: pridajte **Mŕtva zóna**. Logické bloky: malé hodnoty ignorujte pomocou *medzi*.

**Riadenie servom nie je v strede alebo naráža na doraz**
- Rýchle prepojenia: Servo s kalibráciou **Auto** alebo **Ručne** s **Nastaviť ako nulu** a **Stred**; zmenšite **Uhol**. Logické bloky: *kalibrovať riadiaci rám*.
- Servo, Otočiť o stupne a Ísť na polohu vyžadujú motory s enkodérom; jednoduché motory a porty SBrick prijímajú iba rýchlosť.

**Motory bežia aj po Zastaviť**
- Logické bloky: v Nastaveniach editora zapnite **Zastaviť porty hubu pri zastavení programu**.

## Panel {#dashboard}

**Ovládací prvok sa nedá presunúť ani odstrániť**
- Je zamknutý: v jeho ponuke ho **Odomknúť**. Ovládací prvok, ktorý používa program, sa nedá odstrániť, kým neodstránite jeho riadky alebo bloky.

**„Na obrazovke nie je k dispozícii miesto…“**
- Presuňte alebo zmenšite iné ovládacie prvky, prípadne zvoľte menšiu veľkosť.

**Téma alebo ovládací prvok je zamknutý**
- Nevlastníte ho: kúpte si ho alebo si zaobstarajte [MocPilot Pro](/docs/Application/Account/Pro), prípadne prepnite ovládací prvok na tému Základný pomocou **Zmeniť motív**.

**Herný ovládač sa nerozpoznal**
- Spárujte herný ovládač v systémových nastaveniach Bluetooth (alebo ho pripojte cez USB). Stránka **Herný ovládač** zobrazí **Herný ovládač: (názov)**, keď ho aplikácia vidí, a „Herný ovládač nie je pripojený“, keď ho nevidí.
- Na stránke **Herný ovládač** zapnite **Povoliť bloky gamepadu**, inak sa vstupy a bloky herného ovládača nezobrazia.
- Máte pripojených viac herných ovládačov? Vyberte jeden vo **Vybrať gamepad**.
- Tlačidlá a páčky skontrolujte pomocou **Otestovať gamepad**.
- Windows: fungujú ovládače Xbox (XInput) a Sony DualSense / DualSense Edge; iné ovládače bez podpory XInput fungovať nemusia.
- Pozrite si [Herný ovládač](/docs/Application/Dashboard/Gamepad).

## Profily a synchronizácia {#profiles-and-sync}

**Moje profily nie sú na druhom zariadení**
- Prihláste sa na oboch zariadeniach tým istým účtom a skontrolujte pripojenie na internet. Ak aplikácia ukazuje **Offline**, ťuknite na **Skúsiť znova** alebo **Prejsť online**.

**„Profil nie je kompatibilný“**
- Profil bol vytvorený v novšej verzii MOCPilot. Aktualizujte aplikáciu.

**Po preinštalovaní som prišiel o profily**
- V režime hosťa existujú profily iba v zariadení a s aplikáciou sa stratia. S účtom sa znova prihláste a profily sa vrátia.

## E-maily účtu {#account-emails}

**Aktivačný e-mail alebo kód na obnovenie hesla neprichádza**
- Počkajte niekoľko minút a skontrolujte priečinok so spamom alebo nevyžiadanou poštou. E-maily prichádzajú z adresy no-reply@mocpilot.com.
- Skontrolujte, či ste e-mailovú adresu zadali správne.
- Aktivácia: otvorte stránku účtu a ťuknite na **Zaslať aktivačný e-mail znovu**. Kým účet nie je overený, niektoré funkcie zostanú vypnuté.
- Obnovenie hesla: „E-mail nebol nájdený“ znamená, že s týmto e-mailom neexistuje žiadny účet; skúste adresu, ktorou ste sa registrovali. Inak znova ťuknite na **Obnoviť** vedľa „Zabudli ste heslo?“ a získate nový kód. Pozrite si [Účet](/docs/Application/Account/UserAccount).

## Nákupy {#purchases}

**Chýba nákup**
- Prihláste sa účtom, ktorým ste nákup uskutočnili, a prejdite na **Účet → Nákupy → Obnoviť**.
- „Predplatné je prepojené s iným účtom“: predplatné Pro tohto účtu v obchode patrí inému účtu MOCPilot.

**„MocPilot Pro vyžaduje overenie online“**
- Pro sa dlho používalo offline. Pripojte sa na internet a overenie prebehne samo.

## Aktualizácie aplikácie {#app-updates}

**„Vyžaduje sa aktualizácia“**
- Správa na celú obrazovku „Táto verzia MOCPilot už nie je podporovaná…“ znamená, že túto verziu už nemožno používať. Ťuknite na **Aktualizovať**, otvorí sa obchod a nainštalujte novú verziu. Obrazovka ukazuje aj vašu **Nainštalovanú verziu**.
- Vo webovom editore je tlačidlo **Znova načítať stránku**: načíta sa najnovší editor.

**„Je k dispozícii MOCPilot (verzia)“**
- Vyšla novšia verzia. Ťuknite na **Aktualizovať** (vo webovom editore **Znova načítať stránku**) alebo banner zatvorte krížikom ×: znova sa zobrazí až pri ďalšej verzii.

## Zvuk {#sound}

**Nie je počuť zvuk**
- V [Nastaveniach](/docs/Application/Account/Settings) zapnite **Zvuk**: vypína všetky zvuky aplikácie, ovládacích prvkov aj programov.
- Zvýšte hlasitosť médií v zariadení. Ak sú pripojené slúchadlá alebo Bluetooth reproduktor, zvuk hrá tam.
- Logické bloky: skontrolujte, či program nenastavuje hlasitosť na 0 alebo nezastavuje všetky zvuky. Pozrite si [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds).

## AI staviteľ {#ai-builder}

**AI staviteľ nie je dostupný alebo zobrazuje chybu**
- AI staviteľ vyžaduje [MocPilot Pro](/docs/Application/Account/Pro) a pripojenie na internet: „AI staviteľ vyžaduje MocPilot Pro.“ alebo „Službu AI sa nepodarilo zastihnúť. Skontrolujte pripojenie na internet a skúste to znova.“
- „Služba AI je dočasne nedostupná. Skúste to neskôr.“ alebo „Práve je príliš veľa požiadaviek na AI. Skúste to o minútu.“: počkajte a skúste to znova.
- Platia denné a mesačné limity: „Dosiahli ste dnešný limit požiadaviek na AI. Skúste to znova zajtra.“
- Hlasový vstup: v systémových nastaveniach povoľte mikrofón (a na zariadeniach Apple rozpoznávanie reči); pozrite si [Bluetooth a povolenia](/docs/Help/BluetoothPermissions).
- Všetky správy a čo robiť: [AI staviteľ](/docs/Application/Profiles/AiBuilder).

## Diaľkové ovládanie {#remote-control}

**Zariadenie s hubmi sa nepripojí alebo sa spojenie preruší**
- „Diaľkové ovládanie je súčasťou MocPilot Pro“: účet diaľkového ovládača potrebuje [MocPilot Pro](/docs/Application/Account/Pro).
- „Platnosť kódu vypršala…“ alebo „Nesprávny alebo neplatný kód…“: kód pripojenia platí 5 minút. Zobrazte na diaľkovom ovládači nový kód a znova ho naskenujte alebo zadajte.
- „Na skenovanie kódu povoľte aplikácii MOCPilot používať kameru v systémových nastaveniach.“: povoľte kameru v systémových nastaveniach ([ako](/docs/Help/BluetoothPermissions)) alebo ťuknite na **Zadať kód** a zadajte 6 číslic.
- „Táto verzia aplikácie sa nemôže pripojiť k diaľkovému ovládaču“ alebo „Druhé zariadenie nemohlo profil otvoriť“: aktualizujte MOCPilot na oboch zariadeniach.
- „Spojenie s diaľkovým ovládačom sa stratilo…“: skontrolujte, či sú obe zariadenia online. Ak sa spojenie stratí asi na 4 sekundy, zariadenie s hubmi zastaví profil aj všetky motory.
- Viac: [Diaľkové ovládanie](/docs/Application/Profiles/RemoteControl).

## Stále neviete ďalej? {#still-stuck}

Použite **Položiť otázku** alebo **Nahlásiť chybu** v sekcii **Pomoc** v aplikácii (na počítači ponuka **Pomoc**). Odpoveď príde e-mailom a do **Upozornení**.
