---
id: Troubleshooting
title: Řešení problémů
description: "Řešení běžných problémů s huby, motory, panelem, synchronizací, nákupy, aktualizacemi, zvukem, AI tvůrcem a dálkovým ovládáním."
---

# Řešení problémů {#troubleshooting}

## Huby {#hubs}

**Hub nelze najít**
- Zapněte Bluetooth a v systémovém nastavení povolte MOCPilotu používat Bluetooth (na Androidu také Zařízení v okolí nebo Polohu). Viz [Bluetooth a oprávnění](/docs/Help/BluetoothPermissions).
- Zapněte hub a těsně před skenováním stiskněte jeho tlačítko; znovu klepněte na **Spustit skenování**.
- Ujistěte se, že hub není připojený k jinému telefonu nebo aplikaci (aplikace LEGO®, jiný dálkový ovladač). Zavřete je.
- Vyměňte nebo nabijte baterie.
- Robot Inventor: na iPhonu a iPadu není k dispozici. Mould King 4.0: ve Windows není k dispozici.

**Hub se odpojuje**
- Přibližte zařízení: zdi, kov a další zařízení na 2,4 GHz zkracují dosah.
- Slabé baterie způsobují odpojování při zátěži: nabijte je nebo vyměňte.
- Některé huby se po chvíli bez příkazů vypnou; znovu je připojte v **Moje huby**.
- Více o dosahu, adaptérech a oprávněních: [Bluetooth a oprávnění](/docs/Help/BluetoothPermissions).

**„Je vyžadována aktualizace firmwaru“**
- MOCPilot potřebuje u hubů Technic, Technic Move, BOOST a City podporovaný firmware. Postupujte podle článku [Aktualizace firmwaru](/docs/Application/Hubs/FirmwareUpdating). Pokud aktualizace selhala, viz [Obnovení firmwaru](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King nereaguje**
- Huby Mould King pouze přijímají příkazy. Použijte **Připojit znovu**, zkontrolujte kanál (**Vyberte kanál**) a v jednom profilu používejte jen jeden typ Mould King.

## Motory a program {#motors-and-the-program}

**Motor se nehýbe**
- Běží program (**Spustit**)? Je hub připojený?
- Je motor na portu, který program používá? Zkontrolujte [monitor hubu](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Rychlá propojení: otevřete **Problémy**; sledujte aktuální hodnoty podél řádku. Viz [Spuštění a řešení problémů](/docs/Application/Links/Problems).
- Logické bloky: začíná skript blokem události? Hodnoty sledujte pomocí **Monitor**.

**Motor se točí opačně**
- Rychlá propojení: přidejte do řádku **Obrátit**. Logické bloky: vynásobte hodnotu −1.

**Motor se plíží nebo bzučí, když je joystick puštěný**
- Rychlá propojení: přidejte **Mrtvá zóna**. Logické bloky: malé hodnoty ignorujte pomocí *je mezi*.

**Servo řízení není ve středu nebo naráží do dorazu**
- Rychlá propojení: Servo s kalibrací **Auto**, nebo **Ručně** s **Nastavit jako nulu** a **Střed**; zmenšete **Úhel**. Logické bloky: *kalibrovat řízení*.
- Servo, Otočit o stupně a Jet do polohy vyžadují motory s enkodérem; jednoduché motory a porty SBrick přijímají jen rychlost.

**Motory běží i po zastavení**
- Logické bloky: zapněte v Nastavení editoru **Zastavit porty hubu při zastavení programu**.

## Panel {#dashboard}

**Nemůžu přesunout nebo smazat ovládací prvek**
- Je zamčený: **Odemknout** ho v jeho nabídce. Ovládací prvek, který program používá, nelze smazat, dokud neodstraníte jeho řádky nebo bloky.

**„Na obrazovce není k dispozici místo“**
- Přesuňte nebo zmenšete jiné ovládací prvky, nebo zvolte menší velikost.

**Motiv nebo ovládací prvek je zamčený**
- Nevlastníte ho: kupte si ho nebo získejte [MocPilot Pro](/docs/Application/Account/Pro), případně přepněte ovládací prvek na Základní motiv pomocí **Změnit motiv**.

**Herní ovladač není rozpoznán**
- Spárujte herní ovladač v systémovém nastavení Bluetooth (nebo ho připojte přes USB). Stránka **Herní ovladač** ukazuje **Gamepad: (název)**, když ho aplikace vidí, a „Gamepad is not connected“, když ne.
- Zapněte na stránce **Herní ovladač** volbu **Povolit bloky gamepadu**, jinak se vstupy a bloky herního ovladače nezobrazí.
- Je připojeno víc herních ovladačů? Vyberte jeden v **Vybrat gamepad**.
- Tlačítka a páčky zkontrolujte pomocí **Otestovat gamepad**.
- Windows: ovladače Xbox (XInput) a Sony DualSense / DualSense Edge fungují; jiné ovladače bez podpory XInput fungovat nemusí.
- Viz [Herní ovladač](/docs/Application/Dashboard/Gamepad).

## Profily a synchronizace {#profiles-and-sync}

**Moje profily nejsou na mém druhém zařízení**
- Přihlaste se na obou zařízeních stejným účtem a zkontrolujte připojení k internetu. Pokud aplikace ukazuje **Offline**, klepněte na **Zkusit znovu** nebo **Přejít online**.

**„Profil není kompatibilní“**
- Profil byl vytvořen v novější verzi MOCPilotu. Aktualizujte aplikaci.

**Po přeinstalování jsem přišel(a) o profily**
- V režimu hosta existují profily jen v zařízení a s aplikací zmizí. S účtem se znovu přihlaste a profily se vrátí.

## E-maily k účtu {#account-emails}

**Aktivační e-mail nebo kód pro obnovení hesla nedorazil**
- Počkejte pár minut a zkontrolujte složku se spamem nebo nevyžádanou poštou. E-maily chodí z adresy no-reply@mocpilot.com.
- Zkontrolujte, že jste e-mailovou adresu zadali správně.
- Aktivace: otevřete stránku účtu a klepněte na **Znovu odeslat aktivační e-mail**. Dokud účet není ověřený, některé funkce zůstanou vypnuté.
- Obnovení hesla: „E-mail nebyl nalezen“ znamená, že s tímto e-mailem žádný účet neexistuje; zkuste adresu, se kterou jste se registrovali. Jinak znovu klepněte na **Obnovit** vedle „Zapomněli jste heslo?“ a získáte nový kód. Viz [Účet](/docs/Application/Account/UserAccount).

## Nákupy {#purchases}

**Chybí nákup**
- Přihlaste se účtem, kterým jste nákup provedli, a přejděte do **Účet → Nákupy → Obnovit**.
- „Předplatné je propojeno s jiným účtem“: předplatné Pro tohoto účtu obchodu patří k jinému účtu MOCPilot.

**„MocPilot Pro vyžaduje ověření online“**
- Pro se dlouho používalo offline. Připojte se k internetu a ověření proběhne samo.

## Aktualizace aplikace {#app-updates}

**„Vyžadována aktualizace“**
- Zpráva na celou obrazovku „Tato verze MOCPilot již není podporována…“ znamená, že tuto verzi už nelze používat. Klepnutím na **Aktualizovat** otevřete obchod a nainstalujete novou verzi. Obrazovka ukazuje také vaši **Nainstalovanou verzi**.
- Ve webovém editoru je tlačítko **Znovu načíst stránku**: načte se nejnovější editor.

**„Je k dispozici MOCPilot (verze)“**
- Vyšla novější verze. Klepněte na **Aktualizovat** (ve webovém editoru **Znovu načíst stránku**), nebo lištu zavřete křížkem ×: znovu se objeví až u další verze.

## Zvuk {#sound}

**Není slyšet zvuk**
- Zapněte **Zvuk** v [Nastavení](/docs/Application/Account/Settings): ztlumí všechny zvuky aplikace, ovládacích prvků i programu.
- Zesilte hlasitost médií v zařízení. Pokud jsou připojená sluchátka nebo bluetoothový reproduktor, zvuk hraje tam.
- Logické bloky: zkontrolujte, že program nenastavuje hlasitost na 0 ani nezastavuje všechny zvuky. Viz [Zvuky](/docs/Application/BlockBuilder/Blocks/Sounds).

## AI tvůrce {#ai-builder}

**AI tvůrce není dostupný nebo hlásí chybu**
- AI tvůrce vyžaduje [MocPilot Pro](/docs/Application/Account/Pro) a připojení k internetu: „AI tvůrce vyžaduje MocPilot Pro.“ nebo „Službu AI se nepodařilo zastihnout. Zkontrolujte připojení k internetu a zkuste to znovu.“
- „Služba AI je dočasně nedostupná. Zkuste to později.“ nebo „Právě je příliš mnoho požadavků na AI. Zkuste to za minutu.“: počkejte a zkuste to znovu.
- Platí denní a měsíční limity: „Dosáhli jste dnešního limitu požadavků na AI. Zkuste to znovu zítra.“
- Hlasové zadávání: v systémovém nastavení povolte mikrofon (a na zařízeních Apple rozpoznávání řeči); viz [Bluetooth a oprávnění](/docs/Help/BluetoothPermissions).
- Všechny zprávy a co dělat: [AI tvůrce](/docs/Application/Profiles/AiBuilder).

## Dálkové ovládání {#remote-control}

**Zařízení s huby se nepřipojí nebo spojení vypadává**
- „Dálkové ovládání je součástí MocPilot Pro“: účet dálkového ovladače potřebuje [MocPilot Pro](/docs/Application/Account/Pro).
- „Platnost kódu vypršela…“ nebo „Chybný nebo prošlý kód…“: kód pro připojení platí 5 minut. Zobrazte na dálkovém ovladači nový kód a znovu ho naskenujte nebo napište.
- „Povolte MOCPilot v systémovém nastavení používat fotoaparát, aby mohl kód naskenovat.“: povolte fotoaparát v systémovém nastavení ([jak na to](/docs/Help/BluetoothPermissions)), nebo klepněte na **Zadat kód** a napište 6 číslic.
- „Tato verze aplikace se nemůže připojit k dálkovému ovladači“ nebo „Druhé zařízení nemohlo profil otevřít“: aktualizujte MOCPilot na obou zařízeních.
- „Spojení s dálkovým ovladačem bylo ztraceno…“: zkontrolujte, že jsou obě zařízení online. Pokud spojení vypadne asi na 4 sekundy, zařízení s huby zastaví profil i všechny motory.
- Více: [Dálkové ovládání](/docs/Application/Profiles/RemoteControl).

## Stále si nevíte rady? {#still-stuck}

Použijte **Položit otázku** nebo **Nahlásit chybu** v části **Nápověda** v aplikaci (počítač: nabídka **Nápověda**). Odpověď přijde e-mailem a do **Oznámení**.
