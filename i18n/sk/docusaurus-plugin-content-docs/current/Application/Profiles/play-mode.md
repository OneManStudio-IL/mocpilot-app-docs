---
id: PlayMode
title: Riadenie modelu (Spustiť)
description: "Spustite profil, riaďte model, zastavte ho a čo sa stane, keď sa zastaví alebo preruší spojenie."
---

import Screenshot from '@site/src/components/Screenshot';

# Riadenie modelu (Spustiť) {#driving-a-model-run}

Profil má dva režimy:

- **Upraviť**: meníte huby, panel a program.
- **Spustiť**: program beží a ovládacie prvky panela riadia model.

## Spustenie a zastavenie {#start-and-stop}

Stlačte **Spustiť** (▶) v editore alebo na paneli (počítač: **Program → Spustiť**, ⌘R / Ctrl+R). Stlačením **Zastaviť** (■) sa vrátite k úpravám (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Panel počas behu programu" width={900} />

Kým program beží:

- body mriežky panela a tlačidlá na pridávanie a nastavenia sú skryté;
- ovládacie prvky reagujú na dotyk aj na herný ovládač;
- monitory a indikátory ukazujú živé hodnoty;
- v Rýchlych prepojeniach editor ukazuje živé hodnoty medzi blokmi každého riadka a riadky sa nedajú upravovať;
- v Logických blokoch zostáva program upraviteľný, takže ho môžete dolaďovať naživo.

## Na telefóne alebo tablete {#on-a-phone-or-tablet}

Po otvorení profilu sa telefón prepne na šírku, na celú obrazovku, aby panel mal celú plochu. V Nastaveniach zapnite **Ponechať obrazovku zapnutú**, aby obrazovka počas jazdy nezhasla. Pozrite si [Nastavenia](/docs/Application/Account/Settings).

## Skôr než stlačíte Spustiť {#before-you-press-run}

- Zapnite huby a v **Moje huby** skontrolujte, či sú pripojené (odznak na tlačidle ukazuje, koľko ich je).
- V Rýchlych prepojeniach skontrolujte tlačidlo **Problémy**: červený „!“ znamená, že niektoré riadky sa nedajú spustiť. Pozrite si [Spustenie a riešenie problémov](/docs/Application/Links/Problems).
- Pri prvom pokuse postavte model na podstavec alebo ho držte ďalej od okraja stola.

## Keď sa program zastaví {#when-the-program-stops}

- **Rýchle prepojenia** zastavia všetky motory, ktoré riadky používajú, a obnovia výstupy (vymaže sa LED matica, zhasnú farby portov a svetlá senzorov).
- **Logické bloky** zastavia porty hubu, ak je v Nastaveniach editora zapnuté **Zastaviť porty hubu pri zastavení programu**.
- Ak sa hub počas behu programu odpojí, jeho motory sa zastavia. V Rýchlych prepojeniach to môže na paneli ukázať vstup hubu „Pripojené“.
- Pri diaľkovom ovládaní, ak sa spojenie medzi diaľkovým ovládačom a zariadením s hubmi preruší asi na 4 sekundy, zariadenie s hubmi zastaví profil aj všetky motory.

## Riadenie z iného zariadenia {#drive-from-another-device}

S [MocPilot Pro](/docs/Application/Account/Pro) môžete profil spustiť na jednom zariadení (zariadenie s hubmi, ktoré pripája huby) a ovládať ho z iného zariadenia alebo z webového editora. Pozrite si [Diaľkové ovládanie](/docs/Application/Profiles/RemoteControl).
