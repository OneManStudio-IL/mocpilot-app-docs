---
id: UserAccount
title: Účet
description: "Přihlášení, vytvoření účtu, režim hosta, obnovení nákupů z Microsoft Storu, region, heslo, odhlášení a smazání účtu."
---

import Screenshot from '@site/src/components/Screenshot';

# Účet {#account}

Účet MOCPilot uchovává vaše profily, nastavení a nákupy v bezpečí a dostupné na všech vašich zařízeních.

## Proč mít účet {#why-have-an-account}

- Profily a nastavení se ukládají na server a synchronizují mezi vašimi zařízeními.
- Když zařízení vyměníte nebo ztratíte, můžete všechno získat zpět.
- Nákupy a MocPilot Pro fungují na všech vašich zařízeních i ve webovém editoru.
- Můžete publikovat profily do katalogu a dostávat oznámení.

## Přihlášení {#sign-in}

Na přihlašovací obrazovce zadejte **Email nebo přihlašovací jméno** a **Heslo**, nebo použijte **Přihlásit se přes Google** / **Přihlásit se přes Apple**.

<Screenshot name="sign-in" alt="Přihlašovací obrazovka MOCPilotu" width={900} />

**Přihlásit se QR kódem** vás přihlásí na tomto zařízení tak, že kód naskenujete telefonem a potvrdíte pomocí Face ID nebo otisku prstu. Na telefonu k tomu potřebujete přístupový klíč: jednou si ho přidejte na mocpilot.com v **Account → Settings → Passkeys**.

## Vytvoření účtu {#create-an-account}

Klepněte na **Vytvořit účet**: dvakrát zadejte e-mail, uživatelské jméno a heslo (dvakrát) a potvrďte svůj region. Nebo použijte **Pokračovat přes Google** / **Pokračovat přes Apple ID**. Potvrďte svůj e-mail pomocí aktivačního e-mailu; některé funkce zůstanou vypnuté, dokud není účet ověřený (pokud e-mail nedorazil, klepněte na **Znovu odeslat aktivační e-mail**).

## Zapomenuté heslo {#forgot-your-password}

Klepněte na **Obnovit** vedle „Zapomněli jste heslo?“, zadejte svůj e-mail a zadejte kód z e-mailu, abyste si nastavili nové heslo.

## Režim hosta {#guest-mode}

**Pokračovat bez účtu** na přihlašovací obrazovce otevře krátkou obrazovku se seznamem toho, co vám účet přináší. Klepnutím na **Pokračovat bez účtu** na ní můžete aplikaci hned začít používat. Všechno zůstane jen v tomto zařízení a po odinstalování aplikace nebo ztrátě zařízení o to přijdete.

Přihlásit se můžete později: na telefonu klepněte nahoře v **Nastavení** na **Vytvořit účet nebo se přihlásit**; na tabletu nebo počítači otevřete **Účet** (v režimu hosta **Přihlásit se**), který ukáže stejnou obrazovku s **Vytvořit účet** a **Už máte účet?**.

### Obnovení nákupů z Microsoft Storu {#restore-microsoft-store-purchases}

Ve Windows obsahuje obrazovka hosta také **Obnovit nákupy z Microsoft Store**. Nákupy z Microsoft Storu patří k účtu Microsoft, který používáte ve Windows, takže k jejich obnovení účet MOCPilot nepotřebujete: klikněte na tlačítko (aplikace potřebuje internet) a aplikace zkontroluje Microsoft Store (**Kontrola Microsoft Store...**) a odemkne na tomto počítači to, co si daný účet Microsoft koupil, včetně předplatného MocPilot Pro.

<Screenshot name="guest-mode-windows" alt="Obrazovka hosta ve Windows s tlačítkem Obnovit nákupy z Microsoft Store" width={900} />

## Region {#region}

Pokud byl váš účet vytvořen dřív, než se MOCPilot začal na region ptát, aplikace se na každém zařízení jednou zeptá, pár sekund po přihlášení: **Nastavte svůj region**. Region pomáhá aplikaci nabídnout správný obchod a ceny. Klepnutím na **Vybrat** zvolíte svou zemi v **Podrobnostech o účtu**, klepnutím na **Teď ne** krok přeskočíte. Region můžete kdykoli změnit v **Podrobnostech o účtu**.

## Stránka účtu {#account-page}

Telefon: **Nastavení → Účet**. Tablet: váš účet dole v bočním panelu. Počítač: tlačítko **Účet** na horní liště.

- **Podrobnosti o účtu**: přihlašovací jméno, e-mail, region a ID účtu (klepnutím na položku ji zkopírujete).
- **Nákupy**: viz [MocPilot Pro a nákupy](/docs/Application/Account/Pro#purchases).
- **Změnit heslo**.
- **Odhlásit se**: viz [Odhlášení](/docs/Application/Account/Sync#signing-out).
- **Smazat účet**.

## Smazání účtu {#delete-your-account}

**Smazat účet** trvale smaže data vašeho účtu: osobní údaje, předvolby, historii a profily uložené na serveru. Přijdete také o přístup ke všemu zakoupenému nebo předplacenému obsahu propojenému s účtem. Tuto akci nelze vrátit zpět.

Zadejte své aktuální heslo a potvrďte gestem **Posuňte pro smazání účtu** (dotykové obrazovky) nebo tlačítkem **Smazat účet** (počítač).

Aktivní předplatné spravuje obchod: před smazáním účtu ho zrušte tam.

## Oznámení {#notifications}

**Oznámení** (zvonek na počítači; karta **Oznámení** na telefonu a tabletu) zobrazují výsledky kontroly profilů, které publikujete, odpovědi na vaše žádosti o podporu a novinky od týmu MOCPilot. Můžete je označit jako přečtené, vybrat a smazat. Oznámení vyžadují účet.
