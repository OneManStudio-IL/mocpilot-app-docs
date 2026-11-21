---
id: Troubleshooting
title: Felsökning
description: "Lösningar på vanliga problem med hubbar, motorer, instrumentpanelen, synkronisering, köp, uppdateringar, ljud, AI-byggaren och fjärrstyrning."
---

# Felsökning

## Hubbar {#hubs}

**Hubben hittas inte**
- Slå på Bluetooth och tillåt MOCPilot att använda Bluetooth (på Android även Enheter i närheten eller Plats) i systeminställningarna. Se [Bluetooth och behörigheter](/docs/Help/BluetoothPermissions).
- Slå på hubben och tryck på dess knapp precis innan sökningen; tryck på **Starta skanning** igen.
- Kontrollera att hubben inte är ansluten till en annan telefon eller app (LEGO®-appar, en annan fjärrkontroll). Stäng dem.
- Byt eller ladda batterierna.
- Robot Inventor: inte tillgänglig på iPhone och iPad. Mould King 4.0: inte tillgänglig i Windows.

**Hubben kopplas från**
- Flytta enheten närmare: väggar, metall och andra 2,4 GHz-enheter minskar räckvidden.
- Svaga batterier orsakar frånkopplingar under belastning: ladda eller byt dem.
- Vissa hubbar stängs av efter en stund utan kommandon; anslut igen under **Mina hubbar**.
- Mer om räckvidd, adaptrar och behörigheter: [Bluetooth och behörigheter](/docs/Help/BluetoothPermissions).

**”Firmwareuppdatering krävs”**
- MOCPilot behöver en firmware som stöds för Technic-, Technic Move-, BOOST- och City-hubbar. Följ [Uppdatera firmware](/docs/Application/Hubs/FirmwareUpdating). Om en uppdatering misslyckades, se [Återställa firmware](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King reagerar inte**
- Mould King-hubbar tar bara emot kommandon. Använd **Anslut igen**, kontrollera kanalen (**Välj kanal**) och använd bara en typ av Mould King per profil.

## Motorer och programmet {#motors-and-the-program}

**Motorn rör sig inte**
- Körs programmet (**Kör**)? Är hubben ansluten?
- Sitter motorn på den port som programmet använder? Kontrollera [hubbmonitorn](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Snabbkopplingar: öppna **Problem**; följ de aktuella värdena längs raden. Se [Köra och åtgärda problem](/docs/Application/Links/Problems).
- Logikblock: börjar skriptet med ett händelseblock? Använd **Monitor** för att följa värdena.

**Motorn snurrar åt fel håll**
- Snabbkopplingar: lägg till **Invertera** på raden. Logikblock: multiplicera värdet med −1.

**Motorn kryper eller brummar när joysticken släpps**
- Snabbkopplingar: lägg till **Dödzon**. Logikblock: ignorera små värden med *mellan*.

**Servostyrningen är inte centrerad eller går emot ändstoppet**
- Snabbkopplingar: Servo med kalibreringen **Auto**, eller **Manuell** med **Ställ in som noll** och **Mitt**; minska **Vinkel**. Logikblock: *kalibrera styrinriktning*.
- Servo, Kör ett antal grader och Gå till position kräver motorer med pulsgivare; enkla motorer och SBrick-portar tar bara emot hastighet.

**Motorerna fortsätter att gå efter Stoppa**
- Logikblock: slå på **Stoppa hubbportar när programmet stoppar** i Redigerarens inställningar.

## Instrumentpanel {#dashboard}

**Jag kan inte flytta eller ta bort en kontroll**
- Den är låst: välj **Lås upp** i dess meny. En kontroll som används av programmet kan inte tas bort förrän du tar bort dess rader eller block.

**”Det finns ingen tillgänglig plats på skärmen”**
- Flytta eller förminska andra kontroller, eller välj en mindre storlek.

**Ett tema eller en kontroll är låst**
- Du äger den inte: köp den eller skaffa [MocPilot Pro](/docs/Application/Account/Pro), eller byt kontrollen till temat Grundläggande med **Ändra tema**.

**Handkontrollen upptäcks inte**
- Parkoppla handkontrollen i systemets Bluetooth-inställningar (eller anslut den med USB). Sidan **Handkontroll** visar **Handkontroll: (namn)** när appen ser den och ”Handkontroll är inte ansluten” när den inte gör det.
- Slå på **Aktivera gamepad-block** på sidan **Handkontroll**, annars visas inte handkontrollens ingångar och block.
- Flera handkontroller anslutna? Välj en under **Välj gamepad**.
- Kontrollera knapparna och spakarna med **Testa gamepad**.
- Windows: Xbox-handkontroller (XInput) och Sony DualSense / DualSense Edge fungerar; andra handkontroller utan stöd för XInput kanske inte gör det.
- Se [Handkontroll](/docs/Application/Dashboard/Gamepad).

## Profiler och synkronisering {#profiles-and-sync}

**Mina profiler finns inte på min andra enhet**
- Logga in med samma konto på båda enheterna och kontrollera internetanslutningen. Om appen visar **Offline** trycker du på **Försök igen** eller **Gå online**.

**”Profilen är inte kompatibel”**
- Profilen har skapats med en nyare version av MOCPilot. Uppdatera appen.

**Jag förlorade mina profiler efter ominstallation**
- I gästläge finns profilerna bara på enheten och försvinner med appen. Med ett konto loggar du in igen, så kommer de tillbaka.

## E-post för kontot {#account-emails}

**Aktiveringsmejlet eller koden för att återställa lösenordet kommer inte fram**
- Vänta några minuter och titta i mappen för skräppost. Mejlen kommer från no-reply@mocpilot.com.
- Kontrollera att du har skrivit e-postadressen rätt.
- Aktivering: öppna din kontosida och tryck på **Skicka aktiveringsmail på nytt**. Tills kontot är verifierat är vissa funktioner avstängda.
- Återställning av lösenord: ”E-post hittades inte” betyder att det inte finns något konto med den e-postadressen; prova adressen du registrerade dig med. Annars trycker du på **Återställ** bredvid ”Glömt lösenord?” igen för att få en ny kod. Se [Konto](/docs/Application/Account/UserAccount).

## Köp {#purchases}

**Ett köp saknas**
- Logga in med det konto du gjorde köpet med och gå sedan till **Konto → Köp → Återställ**.
- ”Prenumerationen är kopplad till ett annat konto”: Pro-prenumerationen för det här butikskontot hör till ett annat MOCPilot-konto.

**”MocPilot Pro behöver kontrolleras online”**
- Pro har använts offline länge. Anslut till internet, så körs kontrollen automatiskt.

## Appuppdateringar {#app-updates}

**”Uppdatering krävs”**
- Helskärmsmeddelandet ”Den här versionen av MOCPilot stöds inte längre…” betyder att den här versionen inte längre kan användas. Tryck på **Uppdatera** för att öppna butiken och installera den nya versionen. Skärmen visar också din **Installerad version**.
- I webbredigeraren heter knappen **Ladda om sidan**: den senaste redigeraren laddas.

**”MOCPilot (version) är tillgänglig”**
- En nyare version har kommit. Tryck på **Uppdatera** (i webbredigeraren **Ladda om sidan**), eller stäng banderollen med ×: den kommer inte tillbaka förrän vid nästa version.

## Ljud {#sound}

**Det hörs inget ljud**
- Slå på **Ljud** i [Inställningar](/docs/Application/Account/Settings): det stänger av alla ljud från appen, kontrollerna och programmet.
- Höj enhetens medievolym. Om hörlurar eller en Bluetooth-högtalare är ansluten spelas ljudet där.
- Logikblock: kontrollera att programmet inte sätter ljudvolymen till 0 eller stoppar alla ljud. Se [Ljud](/docs/Application/BlockBuilder/Blocks/Sounds).

## AI-byggare {#ai-builder}

**AI-byggaren är inte tillgänglig eller visar ett fel**
- AI-byggaren kräver [MocPilot Pro](/docs/Application/Account/Pro) och internetanslutning: ”AI-byggaren kräver MocPilot Pro.” eller ”Det gick inte att nå AI-tjänsten. Kontrollera internetanslutningen och försök igen.”
- ”AI-tjänsten är tillfälligt otillgänglig. Försök igen senare.” eller ”För många AI-förfrågningar just nu. Försök igen om en minut.”: vänta och försök igen.
- Det finns dags- och månadsgränser: ”Du har nått dagens gräns för AI-förfrågningar. Försök igen i morgon.”
- Röstinmatning: tillåt mikrofonen (och taligenkänning på Apple-enheter) i systeminställningarna; se [Bluetooth och behörigheter](/docs/Help/BluetoothPermissions).
- Alla meddelanden och vad du gör: [AI-byggare](/docs/Application/Profiles/AiBuilder).

## Fjärrstyrning {#remote-control}

**Hubenheten ansluter inte eller anslutningen bryts**
- ”Fjärrstyrning ingår i MocPilot Pro”: fjärrkontrollens konto behöver [MocPilot Pro](/docs/Application/Account/Pro).
- ”Koden har gått ut…” eller ”Fel eller utgången kod…”: anslutningskoden gäller i 5 minuter. Visa en ny kod på fjärrkontrollen och skanna eller skriv den igen.
- ”Tillåt MOCPilot att använda kameran i systeminställningarna för att skanna koden.”: tillåt kameran i systeminställningarna ([så här](/docs/Help/BluetoothPermissions)), eller tryck på **Ange kod** och skriv de 6 siffrorna.
- ”Den här versionen av appen kan inte ansluta till en fjärrkontroll” eller ”Den andra enheten kunde inte öppna profilen”: uppdatera MOCPilot på båda enheterna.
- ”Anslutningen till fjärrkontrollen bröts…”: kontrollera att båda enheterna är online. Om anslutningen bryts i ungefär 4 sekunder stoppar hubenheten profilen och alla motorer.
- Mer: [Fjärrstyrning](/docs/Application/Profiles/RemoteControl).

## Fortfarande problem? {#still-stuck}

Använd **Ställ en fråga** eller **Rapportera en bugg** under **Hjälp** i appen (dator: menyn **Hjälp**). Svaret kommer via e-post och under **Aviseringar**.
