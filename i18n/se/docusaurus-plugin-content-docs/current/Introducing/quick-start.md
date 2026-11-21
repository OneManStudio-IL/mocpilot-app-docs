---
id: QuickStart
title: Snabbstart
description: "Installera MOCPilot, logga in, skapa din första profil och kör en modell på några minuter."
---

import Screenshot from '@site/src/components/Screenshot';

# Snabbstart

Den här guiden tar dig från installationen av appen till att köra din första modell. Du behöver en hubb som stöds och en motor; se [Enheter som stöds](/docs/Introducing/SupportedDevices).

## 1. Installera appen {#1-install-the-app}

MOCPilot finns i App Store (iPhone, iPad, Mac), Google Play (Android) och Microsoft Store (Windows). Du hittar länkarna på [mocpilot.com](https://mocpilot.com).

## 2. Logga in eller fortsätt utan konto {#2-sign-in-or-continue-without-an-account}

När du startar appen första gången ber den dig att logga in. Använd e-post eller inloggningsnamn och lösenord, Google eller Apple-ID, eller skapa ett nytt konto.

<Screenshot name="sign-in" alt="Inloggningsskärmen i MOCPilot" width={900} />

Vi rekommenderar ett konto:

- dina profiler och inställningar sparas på servern och synkroniseras mellan dina enheter;
- du kan få tillbaka dina data om du byter ut eller tappar bort en enhet;
- köp och MocPilot Pro fungerar på alla dina enheter.

**Fortsätt utan konto** fungerar också, men då stannar allt bara på den här enheten och försvinner om du tar bort appen. Du kan logga in senare under **Inställningar → Konto**. Se [Konto](/docs/Application/Account/UserAccount).

## 3. Hitta i appen {#3-find-your-way-around}

- På en **telefon** har det nedre fältet **Profiler**, **Inställningar** och **Hjälp** (och **Aviseringar** när du har loggat in).
- På en **surfplatta** finns samma avsnitt, **Profilkatalog** och ditt konto i sidofältet.
- På en **dator** använder du det övre fältet: menyer till vänster; Konto, Aviseringar och Inställningar till höger.

Se [Telefon, surfplatta och dator](/docs/Introducing/Layouts).

## 4. Skapa en profil {#4-create-a-profile}

1. På sidan **Mina profiler** trycker du på **+** → **Ny profil** (telefon) eller väljer **Ny profil** (surfplatta och dator, eller **Fil → Ny profil**).
2. Välj **programtyp**:
   - **Snabbkopplingar** om du vill köra en modell utan kod. Bäst för ett första försök.
   - **Logikblock** om du vill ha händelser, loopar, villkor och sensorer.
3. Ange ett **namn** och lägg till en bild om du vill.
4. Tryck på **Skapa**.

<Screenshot name="create-profile-tiles" alt="Sidan Ny profil med rutorna Logikblock och Snabbkopplingar" width={900} />

Profilen öppnas i redigeraren. Mer om detta i [Skapa en profil](/docs/Application/Profiles/CreateProfile).

:::tip Vill du ha en färdig modell?
Öppna **Profilkatalog** (**Sök online** på profilsidan) och installera en officiell profil för ditt set. Se [Katalog och publicering](/docs/Application/Profiles/Catalog).
:::

## 5. Lägg till din hubb {#5-add-your-hub}

1. Öppna **Mina hubbar** i redigeraren.
2. Tryck på **Lägg till en ny hubb** på en ledig plats, välj hubbmodell och tryck sedan på **Lägg till**.
3. Slå på hubben, tryck på dess knapp och vänta tills MOCPilot hittar den.

<Screenshot name="my-hubs" alt="Sidan Mina hubbar med hubbplatser" width={900} />

Om appen ber om en firmwareuppdatering följer du [Uppdatera firmware](/docs/Application/Hubs/FirmwareUpdating). Mer om detta i [Lägga till och ansluta en hubb](/docs/Application/Hubs/ConnectingHubs).

## 6. Placera kontroller på instrumentpanelen {#6-place-controls-on-the-dashboard}

1. Öppna **Instrumentpanel**.
2. Tryck på **+** (**Lägg till kontroll**), välj **Joystick** och tryck på **Lägg till på instrumentpanelen**.
3. Dra den dit du vill ha den. Tryck på den för att ändra storlek, färg eller beteende.

<Screenshot name="controller-palette" alt="Paletten Lägg till kontroll med joysticken markerad" width={900} />

Se [Lägga till och ordna kontroller](/docs/Application/Dashboard/ArrangingControls).

## 7. Koppla kontrollen till en motor {#7-connect-the-control-to-a-motor}

**Snabbkopplingar:** dra joystickens ingång (till exempel *JOY1 Y-axel*) från **Ingångar** till den tomma raden, lägg till åtgärden **Motor** och utgången **Hubb** från **Utgångar**, och tryck sedan på porten där motorn är ansluten. Raden är klar när den inte har någon röd ram. Se [Snabbkopplingar](/docs/Application/Links/LinksIntroducing).

**Logikblock:** lägg till ett block *när programmet startar*, en loop *upprepa alltid* och ett block *ställ in hastighet till* som tar emot joystickens värde. Se [Logikblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) och [exemplen](/docs/Application/BlockBuilder/Examples).

## 8. Tryck på Kör {#8-press-run}

Tryck på **Kör** (▶). Rör joysticken, så snurrar motorn. Tryck på **Stoppa** för att gå tillbaka till redigeringen.

Klart! Nästa steg:

- Lär dig alla [kontrolltyper](/docs/Application/Dashboard/ControlTypes).
- Ge instrumentpanelen ett nytt utseende med [teman](/docs/Application/Themes/ThemesOverview).
- Anslut en [handkontroll](/docs/Application/Dashboard/Gamepad).
- Om något inte fungerar, se [Felsökning](/docs/Help/Troubleshooting).
