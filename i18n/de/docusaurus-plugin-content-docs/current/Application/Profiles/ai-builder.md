---
id: AiBuilder
title: KI-Builder
description: "Beschreiben Sie Ihr Modell in Worten oder per Sprache, und der KI-Builder richtet die Hubs, das Dashboard und das Programm eines Profils mit Logikblöcken oder Schnellverknüpfungen ein."
---

import Screenshot from '@site/src/components/Screenshot';

# KI-Builder {#ai-builder}

Beschreiben Sie Ihr Modell in eigenen Worten, getippt oder gesprochen, und der **KI-Builder** richtet das Profil für Sie ein: die Hubs und Ports, die Steuerelemente des Dashboards und das Programm. Er funktioniert in beiden Editoren: In einem Profil mit [Logikblöcken](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) baut er Blöcke, in einem Profil mit [Schnellverknüpfungen](/docs/Application/Links/LinksIntroducing) baut er Zeilen. Danach können Sie sich weiter mit ihm unterhalten, um das Profil zu ändern, oder es selbst bearbeiten.

Der KI-Builder ist Teil von [MocPilot Pro](/docs/Application/Account/Pro) und funktioniert in der App und im [Web-Editor](/docs/Introducing/WebEditor). Er benötigt eine Internetverbindung.

<Screenshot name="blocks-ai-builder" alt="Bereich des KI-Builders neben dem Programm" width={900} />

## KI-Builder öffnen {#open-the-ai-builder}

1. Öffnen Sie ein Profil zum Bearbeiten.
2. Drücken Sie in der oberen Leiste die Schaltfläche **KI-Builder** (das Funkelsymbol). Auf einem Computer können Sie auch ⇧⌘I / Strg+Umschalt+I drücken.
3. Geben Sie Ihre Anfrage in **Was soll die KI erstellen oder ändern?** ein und drücken Sie **Senden** (oder die Eingabetaste; Umschalt+Eingabe beginnt eine neue Zeile).

Ohne MocPilot Pro zeigt die Schaltfläche, was der KI-Builder kann, mit **MocPilot Pro holen** und **Nicht jetzt**.

Wo sich der Bereich öffnet:

- **Smartphone**: als Vollbildseite über dem Editor.
- **Tablet**: als schwebende Karte; ziehen Sie sie an ihrer Kopfzeile nach links oder rechts.
- **Computer**: als Karte rechts. In der App (nicht im Browser) können Sie in ihrer Kopfzeile **In separatem Fenster öffnen** drücken und das Fenster neben den Editor stellen.

Während die KI arbeitet, zeigt der Bereich, was sie gerade tut (**Die KI denkt über Ihr Modell nach…**, **Profil wird geprüft…** usw.). Die Änderungen erscheinen im Editor, sobald sie fertig ist, zusammen mit einer kurzen Zusammenfassung der Änderungen. Ist der Bereich leer, schlägt er einige Beispielanfragen vor: Tippen Sie auf eine, um sie ins Textfeld zu übernehmen, und senden Sie sie unverändert oder passen Sie sie vorher an.

Der Gesprächsverlauf wird für jedes Profil gespeichert, sodass Sie den Bereich schließen und später dorthin zurückkehren können.

## Eine gute Anfrage schreiben {#ai-builder-tips}

:::tip Sagen Sie, welchen Hub Sie verwenden, was an jedem Port angeschlossen ist und was es tun soll
Eine einzeilige Anfrage wie „ein Auto mit Licht“ reicht nicht: Die KI muss den Hub, die Ports und die Aufgabe jedes Motors raten, und das Ergebnis muss dann wahrscheinlich korrigiert werden. Geben Sie an:

- **Den Hub**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Was an jedem Port angeschlossen ist**: ein Antriebsmotor, ein Lenkmotor (Servo), Lichter, ein Sensor.
- **Was jedes Teil tun soll**: fahren, mit Kalibrierung lenken, ein- und ausschalten, eine Geschwindigkeitsbegrenzung.
- **Wie Sie es steuern möchten**: Joysticks, Schieberegler, Tasten, ein Gamepad.
:::

Formulieren Sie es so, wie Sie es einem Freund erklären würden. Sie können in Ihrer eigenen Sprache schreiben.

Wenn etwas noch nicht stimmt, sagen Sie der KI, was sie ändern soll, statt von vorn anzufangen.

## Beispielanfragen {#example-requests}

**Ein Auto**: „Ein Auto mit einem Technic Hub: Der Antriebsmotor ist an Port A, der Lenkmotor an Port C arbeitet als Servo, die Lichter sind an Port D. Lenk-Joystick links, Gas rechts, eine Taste, die das Licht schaltet.“

**Ein Kran**: „Ein Kran mit einem Technic Hub: Der Drehmotor ist an Port A, der Auslegermotor an Port B, die Hakenwinde an Port C. Ein Schieberegler zum Drehen, Tasten hoch/runter für den Ausleger, ein Joystick für den Haken, die Geschwindigkeit des Auslegers auf 50 % begrenzt.“

**Ein Zug**: „Ein City-Zug mit einem City Hub: Der Zugmotor ist an Port A, die Lichter an Port B. Ein Schritt-Schalter für die Geschwindigkeit, ein Tachometer und eine Taste für das Licht.“

## Ein vorhandenes Profil ändern {#change-an-existing-profile}

Öffnen Sie den KI-Builder in einem bereits vorhandenen Profil, auch in einem von Hand gebauten, und sagen Sie, was geändert werden soll. Die KI sieht die aktuellen Hubs, das Dashboard und das Programm und bearbeitet sie:

- „Mach die Lenkung langsamer.“
- „Füge eine Stopp-Taste hinzu.“
- „Übertrage die Steuerung auf mein Gamepad.“
- „Begrenze die Geschwindigkeit des Auslegers auf 50 %.“

Sie können auch Fragen zum Profil stellen, zum Beispiel „An welchem Port sind die Lichter?“. Die KI antwortet im Bereich und lässt das Profil unverändert.

## Was mit Ihrem Profil passiert {#what-happens-to-your-profile}

- Die KI ändert das geöffnete Profil direkt: Hubs, Dashboard und Programm werden sofort aktualisiert. Läuft das Programm, wird es gestoppt.
- Die KI arbeitet mit dem Programmtyp des Profils: In einem Profil mit Logikblöcken schreibt sie Blöcke, in einem Profil mit Schnellverknüpfungen schreibt sie Zeilen. Sie wandelt nie den einen Typ in den anderen um. Wenn eine Anfrage etwas erfordert, das Zeilen der Schnellverknüpfungen nicht können, sagt Ihnen die KI, dass dafür ein Profil mit Logikblöcken nötig ist.
- Teile des Profils, die die KI nicht ändern muss, bleiben unverändert.
- **Letzte KI-Änderung rückgängig machen** (die Rückgängig-Schaltfläche in der Kopfzeile des Bereichs) stellt das Profil so wieder her, wie es vor der letzten KI-Änderung war. Drücken Sie erneut, um weiter zurückzugehen, bis zu 10 Änderungen. Der Rückgängig-Verlauf wird gelöscht, wenn Sie ein anderes Profil öffnen.
- Sie können das Profil jederzeit selbst weiterbearbeiten.

## Spracheingabe {#voice-input}

Drücken Sie **Diktieren** (die Mikrofon-Schaltfläche) und sprechen Sie Ihre Anfrage; der Text erscheint im Feld, und Sie können ihn vor dem Senden korrigieren. Drücken Sie die Schaltfläche erneut, um aufzuhören. Stehen mehrere Sprachen zur Verfügung, wechselt die kleine Sprach-Schaltfläche neben dem Mikrofon die Diktiersprache; die App merkt sich Ihre Wahl.

| Wo | Wie |
|---|---|
| iPhone, iPad, Mac | **Diktieren**; beim ersten Mal Mikrofonzugriff und Spracherkennung erlauben |
| Android | **Diktieren**; beim ersten Mal Mikrofonzugriff erlauben |
| Windows | drücken Sie **Win+H**, um mit der Windows-Spracheingabe zu diktieren (die Mikrofon-Schaltfläche erinnert Sie daran) |
| Web-Editor | **Diktieren** in Chrome, Edge und Safari; erlauben Sie der Website den Mikrofonzugriff. Firefox bietet kein Diktieren |

Meldungen der Spracheingabe:

| Meldung | Was zu tun ist |
|---|---|
| **Erlauben Sie MOCPilot in den Systemeinstellungen den Mikrofonzugriff** | Schalten Sie den Mikrofonzugriff für MOCPilot in den Systemeinstellungen ein |
| **Erlauben Sie MOCPilot in den Systemeinstellungen die Spracherkennung** | Schalten Sie auf einem Apple-Gerät die Spracherkennung für MOCPilot in den Systemeinstellungen ein |
| **Erlauben Sie dieser Website im Browser den Mikrofonzugriff** | Erlauben Sie das Mikrofon in den Website-Einstellungen des Browsers |
| **Es wurde nichts gehört** | Drücken Sie **Diktieren** und sprechen Sie erneut |
| **Die Spracheingabe benötigt eine Verbindung** | Verbinden Sie sich mit dem Internet oder tippen Sie die Anfrage ein |
| **Die Spracherkennung ist für diese Sprache derzeit nicht verfügbar** | Wechseln Sie die Diktiersprache oder tippen Sie die Anfrage ein |
| **Kein Mikrofon gefunden** / **Spracheingabe ist auf diesem Gerät nicht verfügbar** | Tippen Sie die Anfrage ein |

## Limits {#limits}

- Etwa 30 Anfragen pro Tag und ein Monatslimit. Die Kopfzeile des Bereichs zeigt, wie viel Sie verbraucht haben: **Heute 5/30 · Monat 12%**.
- Während des kostenlosen Testzeitraums ist die Zahl der KI-Anfragen begrenzt; sie gehen weiter, sobald das Abo beginnt.
- Eine Anfrage nach der anderen: Warten Sie die Antwort ab, bevor Sie die nächste senden.
- Der KI-Builder erstellt und bearbeitet nur Profile. Fragen zu anderen Themen beantwortet er nicht.

## Fehlermeldungen {#error-messages}

| Meldung | Was zu tun ist |
|---|---|
| **KI-Assistent ist nicht verfügbar** / **Der KI-Dienst ist nicht erreichbar. Prüfe deine Internetverbindung und versuche es erneut.** | Prüfen Sie Ihre Internetverbindung und öffnen Sie den Bereich erneut |
| **Keine Verbindung zum KI-Dienst. Prüfe deine Internetverbindung und versuche es erneut.** | Prüfen Sie die Verbindung und senden Sie die Anfrage erneut |
| **Die Verbindung zum KI-Dienst ist abgebrochen…** | Sobald Sie wieder online sind, erscheint die Antwort im Bereich, oder senden Sie die Anfrage erneut |
| **Die KI hat nicht rechtzeitig geantwortet. Bitte sende die Anfrage erneut.** / **Die Anfrage ging verloren, bitte senden Sie sie erneut** | Senden Sie die Anfrage erneut |
| **Die KI konnte für diese Anfrage kein funktionierendes Profil erstellen. Versuche es mit anderen Worten.** | Formulieren Sie die Anfrage um: Nennen Sie den Hub, die Ports und was jedes Teil tut |
| **Das Profil ist zu groß, um es in einem Schritt zu erstellen. Bitte um weniger auf einmal.** | Teilen Sie die Anfrage in kleinere Schritte auf |
| **Die KI hat diese Anfrage abgelehnt.** | Formulieren Sie die Anfrage so um, dass es um das Profil geht |
| **Sie haben das heutige Limit für KI-Anfragen erreicht. Versuchen Sie es morgen erneut.** | Warten Sie bis morgen oder bearbeiten Sie das Profil selbst |
| **Sie haben das KI-Limit für diesen Monat erreicht.** | Das Limit wird im nächsten Monat zurückgesetzt |
| **Du hast alle KI-Anfragen der Testphase verbraucht. Sie gehen weiter, sobald das Abo beginnt.** | Warten Sie, bis das Abo beginnt |
| **Der KI-Builder erstellt und bearbeitet nur Profile. Zu viele Anfragen zu anderen Themen: Versuchen Sie es in einer Stunde erneut.** | Warten Sie eine Stunde und fragen Sie nur zum Profil |
| **Gerade gibt es zu viele KI-Anfragen. Versuche es in einer Minute erneut.** | Versuchen Sie es in einer Minute erneut |
| **Die vorherige Anfrage läuft noch.** | Warten Sie die Antwort ab |
| **Der KI-Dienst ist vorübergehend nicht verfügbar. Versuche es später erneut.** / **Sie haben MocPilot Pro. Der KI-Builder ist gerade nicht verfügbar, bitte versuchen Sie es später erneut.** | Versuchen Sie es später erneut |
| **Die Antwort war für ein anderes Profil** | Sie haben ein anderes Profil geöffnet, während die KI arbeitete, daher wurde die Änderung nicht übernommen. Öffnen Sie das erste Profil erneut und wiederholen Sie die Anfrage |
| **Öffnen Sie zuerst ein Profil zum Bearbeiten** | Öffnen Sie das Profil im Editor und senden Sie dann die Anfrage |
| **Das Profil konnte im Editor nicht aktualisiert werden** / **Die Änderung konnte nicht rückgängig gemacht werden** | Versuchen Sie es erneut; passiert es immer wieder, schließen Sie das Profil und öffnen Sie es erneut |
