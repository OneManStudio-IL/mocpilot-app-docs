---
id: FirstCarLinks
title: Din första radiostyrda bil med Snabbkopplingar
description: "Steg för steg: bygg en fjärrstyrd LEGO-bil med drivning, servostyrning och lampor i Snabbkopplingar, helt utan kod."
---

import Screenshot from '@site/src/components/Screenshot';

# Din första radiostyrda bil med Snabbkopplingar

I den här guiden bygger du en komplett fjärrstyrd bil i [Snabbkopplingar](/docs/Application/Links/LinksIntroducing): en joystick kör och styr, och en knapp tänder och släcker lamporna. Det tar cirka 15 minuter, och du skriver ingen kod.

**Det här behöver du**

- en LEGO® Technic™ Hub (88012);
- en drivmotor på **port A**;
- en styrmotor med positionssensor (pulsgivare) på **port B**, till exempel en Technic L- eller XL-motor eller valfri Technic-vinkelmotor. Styrningen måste ha ändlägen: hjulen kan bara svänga en viss bit åt vänster och höger;
- LEGO®-lampor på **port C** (valfritt);
- MOCPilot på en telefon, surfplatta eller dator med Bluetooth.

:::note City Hub
En City Hub (88009) har bara två portar. Sätt drivmotorn på **A** och styrmotorn på **B** och hoppa över lamporna, eller lägg till en andra hubb för dem. Allt annat fungerar likadant.
:::

**Resultatet**: en profil med tre rader:

| # | Ingång | Bearbetning | Åtgärd | Utgång |
|---|---|---|---|---|
| 1 | JOY1, Y-axel | Mjuk | Motor | Technic Hub, port A |
| 2 | JOY1, X-axel | | Servo (Auto) | Technic Hub, port B |
| 3 | BTN1 | Växla | Ljus | Technic Hub, port C |

## 1. Skapa profilen {#create-the-profile}

1. Gå till **Mina profiler** och starta en ny profil: på en telefon trycker du på **+** → **Ny profil**, på en surfplatta trycker du på **Ny profil** i sidhuvudet, och på en dator väljer du **Fil → Ny profil**.
2. Välj rutan **Snabbkopplingar**.
3. Ange ett **Namn**, till exempel ”Min första bil”. Bild och hashtaggar kan vänta.
4. Tryck på **Skapa**. Profilen öppnas i redigeraren för Snabbkopplingar med en tom rad.

Programtypen kan inte ändras i efterhand. Mer om detta i [Skapa en profil](/docs/Application/Profiles/CreateProfile).

## 2. Lägg till och anslut hubben {#add-the-hub}

1. Tryck på **Mina hubbar** i redigeraren.
2. Tryck på **Lägg till en ny hubb** på en ledig plats, välj Technic Hub i listan och tryck på **Lägg till**.
3. Slå på hubben och tryck på dess knapp. MOCPilot hittar den och ansluter; hubben ligger kvar på platsen.
4. Om dialogrutan **Firmwareuppdatering krävs** visas trycker du på **Uppdatera** och låter hubben vara påslagen och i närheten tills uppdateringen är klar. Se [Uppdatera firmware](/docs/Application/Hubs/FirmwareUpdating).

Tips: öppna den anslutna hubben för att se dess [hubbmonitor](/docs/Application/Hubs/ConnectingHubs#hub-monitor). Den visar vilken enhet som sitter i varje port, så att du kan kontrollera motorerna innan du bygger raderna.

Mer om detta i [Lägga till och ansluta en hubb](/docs/Application/Hubs/ConnectingHubs).

## 3. Placera kontrollerna på instrumentpanelen {#dashboard}

1. Öppna **Instrumentpanel** och tryck på **+** (**Lägg till kontroll**).
2. Välj **Joystick** i gruppen **Joysticks** och tryck på **Lägg till på instrumentpanelen**. Den får namnet **JOY1**. Låt **Axeltyp** stå kvar på **Båda axlarna (X, Y)**: upp och ned kör, vänster och höger styr.
3. Tryck på **+** igen. Välj **Knapp** under **Knappar och växlar** och tryck på **Lägg till på instrumentpanelen**. Den får namnet **BTN1**.
4. Dra joysticken till vänster sida och knappen till höger sida, där tummarna hamnar. Tryck på en kontroll för att ändra dess storlek (**S**, **M** eller **L**) eller utseende.

<Screenshot name="tutorial-car-dashboard" alt="Instrumentpanel med joysticken JOY1 till vänster och knappen BTN1 till höger" width={900} />

Vill du hellre köra och styra med var sin tumme? Lägg då till två joystickar i stället: **JOY1** med **Endast vertikalt (Y)** och **JOY2** med **Endast horisontellt (X)**, och använd JOY2 i styrraden.

Mer om detta i [Lägga till och ordna kontroller](/docs/Application/Dashboard/ArrangingControls) och [Kontrolltyper](/docs/Application/Dashboard/ControlTypes).

### Alternativ: ratt och pedaler {#wheel-and-pedals}

Om du har [specialkontrollerna](/docs/Application/Dashboard/SpecialControls) **Ratt** och **Pedaler** kan du använda dem i stället för joysticken. I steg 4 bygger du rad 1 av ingången [Fordon](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) med **Utgång** inställd på **Hastighet** (den accelererar och bromsar som en riktig bil, så du behöver inte Mjuk), och rad 2 av ingången **Ratt** med kanalen **Rattvinkel**.

## 4. Bygg raderna {#rows}

Gå tillbaka till programmet. Paletten längst ned har tre flikar: **Ingångar**, **Bearbetning** och **Utgångar**. Varje rad går från vänster till höger: ingång → bearbetning → åtgärd → hubb. Så fungerar redigeraren: [Introduktion till Snabbkopplingar](/docs/Application/Links/LinksIntroducing).

### Rad 1: drivning {#row-drive}

1. Dra **JOY1** med kanalen **Y-axel** från **Ingångar** till den tomma raden (”Ny rad: ingång”). En ny tom rad visas under den.
2. Dra **Mjuk** från **Bearbetning** till platsen efter ingången. Standardvärdena 0,5 s för **Acceleration (till full fart)** och **Inbromsning (till stopp)** är en bra början.
3. Dra **Motor** från **Utgångar** till platsen efter Mjuk.
4. Dra utgången **Technic Hub** till platsen efter Motor och tryck på portchipet **A**.

### Rad 2: styrning {#row-steering}

1. Dra **JOY1** med kanalen **X-axel** till nästa tomma rad.
2. Dra **Servo** från **Utgångar**.
3. Tryck på blocket Servo och ställ in **Kalibrering** på **Auto**.
4. Dra utgången **Technic Hub** till platsen efter Servo och tryck på **B**.

I läget **Auto** vrider styrmotorn till båda ändlägena varje gång programmet startar; mitten blir mittläget och rörelseomfånget blir styrvinkeln. Om du vill prova direkt trycker du på **Kalibrera nu** i inställningarna för Servo medan hubben är ansluten. Om kalibreringen misslyckas kontrollerar du hubben, motorn och att styrningen verkligen har ändlägen.

<Screenshot name="links-servo-settings" alt="Inställningar för ett Servo-block" width={900} />

Inga ändlägen? Använd **Manuell**: ställ hjulen rakt för hand, tryck på **Ställ in som noll** och välj **Vinkel**. Se [Servo](/docs/Application/Links/Blocks/OutputBlocks#op-servo).

### Rad 3: lampor {#row-lights}

1. Dra **BTN1** till nästa tomma rad.
2. Dra **Växla** från **Bearbetning**. Det gör tryckknappen till en strömbrytare: tryck en gång för på, en gång till för av.
3. Dra **Ljus** från **Utgångar**.
4. Dra utgången **Technic Hub** till platsen efter Ljus och tryck på **C**.

<Screenshot name="tutorial-car-links-rows" alt="Bilens tre färdiga rader: drivning, styrning och lampor" width={900} />

När alla tre raderna är klara visar knappen **Problem** i det övre fältet en grön bock. Ett rött ”!” visar hur många problem som återstår; tryck på det och sedan på ett problem för att hoppa till raden. Se [Köra och åtgärda problem](/docs/Application/Links/Problems).

## 5. Kör och testa {#run}

1. Ställ bilen på ett stöd eller håll den så att hjulen inte rör bordet.
2. Tryck på **Kör**. Styrmotorn kalibreras: den vrider åt båda hållen och går tillbaka till mitten.
3. För joysticken uppåt och nedåt: bilen kör framåt och bakåt och startar och stannar mjukt. För den åt vänster och höger: hjulen svänger.
4. Tryck på **BTN1**: lamporna tänds. Tryck igen: de släcks.
5. Tryck på **Stoppa** för att gå tillbaka till redigeringen.

Medan programmet körs visar varje fog mellan blocken värdet som passerar genom den, så att du kan följa en signal från joysticken till hubben.

<Screenshot name="links-live-values" alt="Ett program i Snabbkopplingar som körs, med aktuella värden på fogarna" width={900} />

Mer om detta i [Köra en modell (Kör)](/docs/Application/Profiles/PlayMode).

## 6. Finjustera {#tune}

Tryck först på **Stoppa**: rader kan inte redigeras medan programmet körs.

- **Kör bilen bakåt när du trycker uppåt?** Lägg till **Invertera** i rad 1. Samma sak fungerar för rad 2 om hjulen svänger åt fel håll.
- **Brummar eller kryper motorn när joysticken är släppt?** Lägg till **Dödzon** i rad 1, före Mjuk. Standardvärdet 10 % för **Zon** är en bra början.
- **För snabb?** Lägg till **Begränsa** i rad 1, till exempel med **Maximum** 50 %.
- **För trög?** Tryck på Mjuk och välj en kortare tid, eller **Direkt**.

En bra ordning för en drivrad är *Dödzon → Begränsa → Mjuk*. Alla inställningar: [Bearbetningsblock](/docs/Application/Links/Blocks/ProcessingBlocks).

## 7. Valfritt: kör med handkontroll {#gamepad}

1. Parkoppla en handkontroll i Xbox- eller PlayStation-stil med enheten i systemets Bluetooth-inställningar.
2. Öppna **Handkontroll** i redigeraren och slå på **Aktivera gamepad-block**.
3. I varje rad drar du tillbaka instrumentpanelens ingång till paletten för att ta bort den, och drar ingången **Handkontroll** till dess plats. Ställ in dess **Ingång**: **Vänster spak Y** för rad 1, **Höger spak X** för rad 2 och **A** (**Kryss** på PlayStation) för rad 3.

Varje port kan bara höra till en rad, så en rad styr en port antingen från instrumentpanelen eller från handkontrollen. Mer om detta i [Handkontroll](/docs/Application/Dashboard/Gamepad).

## Om något inte rör sig {#if-something-does-not-move}

1. Är hubben ansluten? Kontrollera **Mina hubbar** och anslutningspunkten på Hubb-blocket.
2. Sitter motorerna i de portar du valde i raderna?
3. Visar knappen **Problem** en grön bock, och är alla rader påslagna?
4. Körs programmet?
5. Kör programmet och titta på de aktuella värdena: om värdet ändras vid ingången men motorn inte snurrar kontrollerar du hubben och porten.

Ett meddelande som ”Port B: den här enheten kan inte fungera som servo (en motor med pulsgivare behövs)” betyder att motorn på den porten saknar pulsgivare. Fler meddelanden och lösningar: [Köra och åtgärda problem](/docs/Application/Links/Problems) och [Felsökning](/docs/Help/Troubleshooting).

## 8. Spara och dela {#save-and-share}

Det finns ingen Spara-knapp: profilen behåller dina ändringar. När du är inloggad [synkroniseras](/docs/Application/Account/Sync) den också till dina andra enheter.

- **Dela som fil**: tryck på **Dela** på profilkortet under **Mina profiler** (**Dela…** på en dator). Du får en `.dat`-fil som du kan skicka till en vän. Se [Hantera profiler](/docs/Application/Profiles/ManageProfiles).
- **Publicera i katalogen**: öppna **Redigera profil** och tryck på **Skicka till katalogen**. Lägg först till en bild, en beskrivning och en hashtagg. Se [Katalog och publicering](/docs/Application/Profiles/Catalog).

## Nästa steg {#next-steps}

- Håll koll på batteriet: lägg till **Batterinivå** eller en text-**Monitor** på instrumentpanelen och en rad *Technic Hub (Batteri) → Indikator*. Se [Indikatorer och monitorer](/docs/Application/Dashboard/Indicators).
- Bygg samma bil i Logikblock: [Samma bil i Logikblock](/docs/Tutorials/FirstCarBlocks).
- Fler recept: en stridsvagn, en kran och ett tåg i [Exempel](/docs/Application/Links/Examples).
- Ge instrumentpanelen ett nytt utseende med [teman](/docs/Application/Themes/ThemesOverview).
