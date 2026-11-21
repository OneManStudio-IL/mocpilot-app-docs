---
id: UserAccount
title: Účet
description: "Prihlásenie, vytvorenie účtu, režim hosťa, obnovenie nákupov z Microsoft Store, región, heslo, odhlásenie a odstránenie účtu."
---

import Screenshot from '@site/src/components/Screenshot';

# Účet {#account}

Účet MOCPilot uchováva vaše profily, nastavenia a nákupy v bezpečí a dostupné na všetkých vašich zariadeniach.

## Prečo mať účet {#why-have-an-account}

- Profily a nastavenia sa ukladajú na serveri a synchronizujú medzi vašimi zariadeniami.
- Ak zariadenie vymeníte alebo stratíte, môžete všetko získať späť.
- Nákupy a MocPilot Pro fungujú na všetkých vašich zariadeniach aj vo webovom editore.
- Môžete zverejňovať profily v katalógu a dostávať upozornenia.

## Prihlásenie {#sign-in}

Na prihlasovacej obrazovke zadajte **Email alebo prihlasovacie meno** a **Heslo**, alebo použite **Prihlásiť sa cez Google** / **Prihlásiť sa cez Apple ID**.

<Screenshot name="sign-in" alt="Prihlasovacia obrazovka MOCPilot" width={900} />

**Prihlásiť sa QR kódom** vás prihlási na tomto zariadení naskenovaním kódu telefónom a potvrdením cez Face ID alebo odtlačok prsta. V telefóne je potrebný prístupový kľúč: pridajte ho raz na mocpilot.com v **Účet → Nastavenia → Prístupové kľúče**.

## Vytvorenie účtu {#create-an-account}

Ťuknite na **Vytvoriť účet**: dvakrát zadajte e-mail, používateľské meno a heslo (dvakrát) a potvrďte svoj región. Prípadne použite **Pokračovať cez Google** / **Pokračovať cez Apple ID**. E-mail potvrďte cez aktivačný e-mail; kým účet nie je overený, niektoré funkcie zostanú vypnuté (ak e-mail neprišiel, ťuknite na **Zaslať aktivačný e-mail znovu**).

## Zabudnuté heslo {#forgot-your-password}

Ťuknite na **Obnoviť** vedľa „Zabudli ste heslo?“, zadajte e-mail a napíšte kód z e-mailu, aby ste nastavili nové heslo.

## Režim hosťa {#guest-mode}

**Pokračovať bez účtu** na prihlasovacej obrazovke otvorí krátku obrazovku so zoznamom toho, čo vám účet dáva. Ak tam znova ťuknete na **Pokračovať bez účtu**, môžete aplikáciu hneď začať používať. Všetko zostane iba v tomto zariadení a po odstránení aplikácie alebo strate zariadenia sa to stratí.

Prihlásiť sa môžete neskôr: na telefóne ťuknite na **Vytvoriť účet alebo sa prihlásiť** navrchu **Nastavení**; na tablete alebo počítači otvorte **Účet** (v režime hosťa **Prihlásiť sa**), ktorý zobrazí tú istú obrazovku s **Vytvoriť účet** a **Už máte účet?**.

### Obnovenie nákupov z Microsoft Store {#restore-microsoft-store-purchases}

Vo Windows má obrazovka hosťa aj **Obnoviť nákupy z Microsoft Store**. Nákupy z Microsoft Store patria k účtu Microsoft, ktorý používate vo Windows, takže na ich obnovenie nepotrebujete účet MOCPilot: kliknite na tlačidlo (aplikácia potrebuje internet) a aplikácia skontroluje Microsoft Store (**Kontrola Microsoft Store...**) a na tomto počítači odomkne všetko, čo si daný účet Microsoft kúpil, vrátane predplatného MocPilot Pro.

<Screenshot name="guest-mode-windows" alt="Obrazovka hosťa vo Windows s možnosťou Obnoviť nákupy z Microsoft Store" width={900} />

## Región {#region}

Ak bol váš účet vytvorený skôr, než MOCPilot začal žiadať o región, aplikácia sa na každom zariadení raz spýta niekoľko sekúnd po prihlásení: **Nastavte svoj región**. Región pomáha aplikácii ponúknuť správny obchod a ceny. Ťuknite na **Vybrať** a zvoľte svoju krajinu v **Podrobnosti o účte**, alebo krok preskočte cez **Teraz nie**. Región môžete kedykoľvek zmeniť v **Podrobnosti o účte**.

## Stránka účtu {#account-page}

Telefón: **Nastavenia → Účet**. Tablet: váš účet dole na bočnom paneli. Počítač: tlačidlo **Účet** na hornej lište.

- **Podrobnosti o účte**: prihlasovacie meno, e-mail, región a ID účtu (ťuknutím na položku ju skopírujete).
- **Nákupy**: pozrite si [MocPilot Pro a nákupy](/docs/Application/Account/Pro#purchases).
- **Zmeniť heslo**.
- **Odhlásiť sa**: pozrite si [Odhlásenie](/docs/Application/Account/Sync#signing-out).
- **Zmazať účet**.

## Odstránenie účtu {#delete-your-account}

**Zmazať účet** natrvalo odstráni údaje vášho účtu: osobné údaje, predvoľby, históriu a profily uložené na serveri. Stratíte aj prístup ku všetkému zakúpenému alebo predplatenému obsahu prepojenému s účtom. Túto akciu nemožno vrátiť späť.

Zadajte aktuálne heslo a potvrďte pomocou **Potiahnite na odstránenie účtu** (dotykové obrazovky) alebo **Zmazať účet** (počítač).

Aktívne predplatné spravuje obchod: pred odstránením účtu ho zrušte tam.

## Upozornenia {#notifications}

**Upozornenia** (zvonček na počítači; karta **Upozornenia** na telefóne a tablete) zobrazujú výsledky kontroly profilov, ktoré zverejňujete, odpovede na vaše žiadosti o podporu a novinky od tímu MOCPilot. Môžete ich označiť ako prečítané, vybrať a odstrániť. Upozornenia vyžadujú účet.
