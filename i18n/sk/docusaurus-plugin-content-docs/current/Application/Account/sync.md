---
id: Sync
title: Synchronizácia medzi zariadeniami
description: "Udržiavajte profily a nastavenia MOCPilot synchronizované medzi telefónmi, tabletmi, počítačmi a webovým editorom a pracujte offline."
---

import Screenshot from '@site/src/components/Screenshot';

# Synchronizácia medzi zariadeniami {#sync-between-devices}

Keď ste prihlásení, MOCPilot udržiava vaše profily a nastavenia rovnaké na každom zariadení: v telefóne, tablete, počítači aj vo [webovom editore](/docs/Introducing/WebEditor). Nič netreba zapínať: pri účte je synchronizácia vždy zapnutá.

## Ako to funguje {#how-it-works}

- Zmeny sa najprv uložia v zariadení a nahrajú sa, keď ste online („Synchronizácia profilov…“).
- Ostatné zariadenia si novú verziu stiahnu, keď sú online.
- Nákupy sa nesynchronizujú ako súbory; patria k vášmu účtu a sú dostupné všade, kde sa prihlásite.
- Profily pridané na webe (**Pridať do môjho účtu** v katalógu) alebo upravené vo webovom editore prídu cez synchronizáciu.
- V režime hosťa sa nič nesynchronizuje: profily zostávajú iba v tomto zariadení.

## Konflikty {#conflicts}

Ak sa ten istý profil zmenil na dvoch zariadeniach skôr, než sa synchronizovali, vyhrá verzia z vášho účtu a vaša verzia v tomto zariadení sa uloží ako kópia (k jej názvu sa pridá „(kópia)“). MOCPilot vás na to upozorní správou **Synchronizácia profilov**. To isté sa stane, ak bol profil, ktorý ste tu zmenili, odstránený na inom zariadení.

Ak otvoríte profil, ktorý sa práve upravuje na inom zariadení, môžete zvoliť **Iba na zobrazenie** (zmeny sa neuložia) alebo **Prevziať úpravy**.

## Práca offline {#working-offline}

Huby, vaše profily a stiahnuté témy fungujú bez internetu.

- Ak sa MOCPilot pri spustení nedokáže spojiť so serverom, zobrazí **Žiadne pripojenie na internet** s možnosťami **Pracovať offline** a **Skúsiť znova**.
- Kým ste offline, navrchu sa zobrazuje štítok **Offline**. Funkcie, ktoré potrebujú server (katalóg a zverejňovanie, AI staviteľ, diaľkové ovládanie, upozornenia, nákupy, správy podpore), vám oznámia, že vyžadujú pripojenie na internet.
- Zmeny, ktoré urobíte offline, sa nahrajú, keď sa pripojenie obnoví. Keď aplikácia znova uvidí server, zobrazí **Pripojenie je späť** s možnosťou **Prejsť online**.

<Screenshot name="offline-prompt" alt="Správa Žiadne pripojenie na internet s tlačidlami Pracovať offline a Skúsiť znova" width={900} />

## Odhlásenie {#signing-out}

Odhlásením sa vaše profily a nastavenia z tohto zariadenia odstránia; zostanú vo vašom účte a po opätovnom prihlásení sa vrátia. Ak niektoré zmeny ešte neboli nahrané, MOCPilot vás najprv upozorní a vypíše profily: pripojte sa na internet a nechajte synchronizáciu dokončiť, alebo zvoľte **Aj tak sa odhlásiť** (kópia zostane v priečinku Backup aplikácie).

## Tipy {#tips}

- Pred zverejnením profilu v katalógu sa uistite, že je synchronizovaný: katalóg ho preberá z vášho účtu.
- Ak chcete presunúť profily do zariadenia bez účtu, použite **Zdieľať** a **Importovať profil…** so súbormi `.dat`. Pozrite si [Správa profilov](/docs/Application/Profiles/ManageProfiles).
