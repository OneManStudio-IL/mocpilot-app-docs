---
id: UserAccount
title: Konto
description: "Anmelden, ein Konto erstellen, Gastmodus, Microsoft-Store-Käufe wiederherstellen, Region, Passwort, Abmelden und Löschen des Kontos."
---

import Screenshot from '@site/src/components/Screenshot';

# Konto {#account}

Ein MOCPilot-Konto bewahrt Ihre Profile, Einstellungen und Käufe sicher auf und macht sie auf all Ihren Geräten verfügbar.

## Warum ein Konto {#why-have-an-account}

- Profile und Einstellungen werden auf dem Server gespeichert und zwischen Ihren Geräten synchronisiert.
- Sie erhalten alles zurück, wenn Sie ein Gerät ersetzen oder verlieren.
- Käufe und MocPilot Pro funktionieren auf all Ihren Geräten und im Web-Editor.
- Sie können Profile im Katalog veröffentlichen und Benachrichtigungen erhalten.

## Anmelden {#sign-in}

Geben Sie auf dem Anmeldebildschirm Ihre **E-Mail oder Login** und Ihr **Passwort** ein, oder verwenden Sie **Mit Google anmelden** / **Mit Apple anmelden**.

<Screenshot name="sign-in" alt="Der Anmeldebildschirm von MOCPilot" width={900} />

**Mit QR-Code anmelden** meldet Sie auf diesem Gerät an, indem Sie den Code mit Ihrem Smartphone scannen und mit Face ID oder Ihrem Fingerabdruck bestätigen. Dafür ist ein Passkey auf dem Smartphone nötig: Fügen Sie ihn einmal auf mocpilot.com unter **Konto → Einstellungen → Passkeys** hinzu.

## Ein Konto erstellen {#create-an-account}

Tippen Sie auf **Konto erstellen**: Geben Sie Ihre E-Mail-Adresse zweimal, einen Benutzernamen und ein Passwort (zweimal) ein und bestätigen Sie Ihre Region. Oder verwenden Sie **Weiter mit Google** / **Weiter mit Apple ID**. Bestätigen Sie Ihre E-Mail-Adresse mit der Aktivierungs-E-Mail; einige Funktionen bleiben deaktiviert, bis das Konto bestätigt ist (tippen Sie auf **Aktivierungs-E-Mail erneut senden**, falls sie nicht angekommen ist).

## Passwort vergessen {#forgot-your-password}

Tippen Sie neben „Passwort vergessen?“ auf **Zurücksetzen**, geben Sie Ihre E-Mail-Adresse ein und tippen Sie den Code aus der E-Mail ein, um ein neues Passwort festzulegen.

## Gastmodus {#guest-mode}

**Ohne Konto fortfahren** auf dem Anmeldebildschirm öffnet einen kurzen Bildschirm, der auflistet, was Ihnen ein Konto bietet. Tippen Sie dort erneut auf **Ohne Konto fortfahren**, um die App sofort zu nutzen. Alles bleibt nur auf diesem Gerät und geht verloren, wenn Sie die App entfernen oder das Gerät verlieren.

Sie können sich später anmelden: auf einem Smartphone über **Konto erstellen oder anmelden** oben in den **Einstellungen**; auf einem Tablet oder Computer über **Konto** (**Anmelden** im Gastmodus), das denselben Bildschirm mit **Konto erstellen** und **Sie haben bereits ein Konto?** zeigt.

### Microsoft-Store-Käufe wiederherstellen {#restore-microsoft-store-purchases}

Unter Windows bietet der Gastbildschirm außerdem **Microsoft-Store-Käufe wiederherstellen**. Käufe aus dem Microsoft Store gehören zu dem Microsoft-Konto, das Sie unter Windows verwenden, daher benötigen Sie kein MOCPilot-Konto, um sie zurückzuerhalten: Klicken Sie auf die Schaltfläche (die App benötigt Internet), und die App prüft den Microsoft Store (**Microsoft Store wird geprüft...**) und schaltet auf diesem PC frei, was dieses Microsoft-Konto gekauft hat, einschließlich eines MocPilot Pro-Abos.

<Screenshot name="guest-mode-windows" alt="Der Gastbildschirm unter Windows mit „Microsoft-Store-Käufe wiederherstellen“" width={900} />

## Region {#region}

Wurde Ihr Konto erstellt, bevor MOCPilot nach einer Region fragte, fragt die App auf jedem Gerät einmal danach, einige Sekunden nach der Anmeldung: **Region festlegen**. Die Region hilft der App, den richtigen Store und die richtigen Preise anzubieten. Tippen Sie auf **Auswählen**, um Ihr Land unter **Kontodetails** zu wählen, oder auf **Nicht jetzt**, um den Schritt zu überspringen. Sie können die Region jederzeit unter **Kontodetails** ändern.

## Kontoseite {#account-page}

Smartphone: **Einstellungen → Konto**. Tablet: Ihr Konto unten in der Seitenleiste. Computer: die Schaltfläche **Konto** in der oberen Leiste.

- **Kontodetails**: Login, E-Mail-Adresse, Region und Konto-ID (tippen Sie auf einen Eintrag, um ihn zu kopieren).
- **Käufe**: siehe [MocPilot Pro und Käufe](/docs/Application/Account/Pro#purchases).
- **Passwort ändern**.
- **Abmelden**: siehe [Abmelden](/docs/Application/Account/Sync#signing-out).
- **Konto löschen**.

## Ihr Konto löschen {#delete-your-account}

**Konto löschen** löscht Ihre Kontodaten dauerhaft: persönliche Informationen, Einstellungen, Verlauf und die auf dem Server gespeicherten Profile. Außerdem verlieren Sie den Zugriff auf alle gekauften oder abonnierten Inhalte, die mit dem Konto verknüpft sind. Das lässt sich nicht rückgängig machen.

Geben Sie Ihr aktuelles Passwort ein und bestätigen Sie mit **Schieben, um Konto zu löschen** (Touchscreens) oder **Konto löschen** (Computer).

Ein aktives Abo wird vom Store verwaltet: Kündigen Sie es dort, bevor Sie das Konto löschen.

## Benachrichtigungen {#notifications}

**Benachrichtigungen** (die Glocke auf einem Computer; der Tab **Benachrichtigungen** auf Smartphone und Tablet) zeigt die Prüfergebnisse der Profile, die Sie veröffentlichen, Antworten auf Ihre Support-Anfragen und Neuigkeiten vom MOCPilot-Team. Sie können sie als gelesen markieren, auswählen und löschen. Benachrichtigungen erfordern ein Konto.
