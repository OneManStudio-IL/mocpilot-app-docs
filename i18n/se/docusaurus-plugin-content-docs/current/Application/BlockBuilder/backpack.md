---
id: Backpack
title: Ryggsäck
description: "Spara delar av dina Logikblock-program i ryggsäcken och infoga dem i valfri profil, på alla dina enheter."
---

import Screenshot from '@site/src/components/Screenshot';

# Ryggsäck {#backpack}

**Ryggsäcken** är platsen där du sparar delar av dina blockprogram för att återanvända dem i andra profiler: en styrrutin, en ljusshow, ett Mitt block som du skrivit en gång och vill ha överallt. Spara en hög med block i ryggsäcken i en profil och infoga den sedan i valfri annan profil, på den här enheten eller på vilken enhet som helst där du är inloggad.

Ryggsäcken är en del av redigeraren för [Logikblock](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Profiler med Snabbkopplingar har ingen ryggsäck.

<Screenshot name="backpack-panel" alt="Panelen Ryggsäck bredvid ett blockprogram" width={900} />

## Vad ryggsäcken sparar {#what-the-backpack-keeps}

Varje objekt i ryggsäcken är en **kopia** av blocken du sparade:

- **En hög**: blocket du valde tillsammans med allt som sitter fast under det och inuti det, precis som när **Duplicera** kopierar det.
- **Ett Mitt block**: om du sparar `define …`-blocket för ett [Mitt block](/docs/Application/BlockBuilder/Blocks/MyBlocks) sparar ryggsäcken hela definitionen. Sådana objekt är märkta **Mitt block**.

Objektet kommer också ihåg vilka Mina block dina block använder (även via andra Mina block) och namnen på de variabler, listor, meddelanden, fordon och ljud som de hänvisar till, så att blocken fungerar när du infogar dem någon annanstans.

Infogade block blir en vanlig del av profilens program. Ingenting i profilen är beroende av ryggsäcken: om du tar bort eller byter namn på ett objekt ändras inte de program som du har infogat det i. Objekt kan inte redigeras i ryggsäcken. Om du vill ändra ett objekt infogar du det, redigerar blocken i programmet och sparar dem i ryggsäcken igen som ett nytt objekt.

## Spara block i ryggsäcken {#save-blocks}

1. Högerklicka på ett block i programmet (dator) eller tryck och håll på det (telefon, surfplatta).
2. Välj **Lägg i ryggsäcken**.
3. Skriv ett namn i **Namn på blocken** och tryck på **Spara**.

Blocket och allt som sitter fast i det hamnar i ryggsäcken. Om du vill spara definitionen av ett Mitt block öppnar du menyn för dess `define …`-block.

<Screenshot name="backpack-add" alt="Blockmenyn med Lägg i ryggsäcken och namnfönstret" width={900} />

## Öppna ryggsäcken {#open}

- **Dator och webbredigerare**: knappen **Ryggsäck** i redigerarens övre fält, **Visa → Ryggsäck** i menyn eller **Ctrl+Shift+B** (**⌘⇧B** på en Mac). Om fönstret är smalt finns knappen i menyn **Mer**. Ryggsäcken öppnas som en panel till höger i redigeraren, bredvid [Monitor](/docs/Application/BlockBuilder/Editor#monitor) om den också är öppen.
- **Telefon och surfplatta**: **Mer → Ryggsäck** i redigerarens övre fält. Ryggsäcken öppnas som en panel ovanpå redigeraren.

Knappen är markerad medan ryggsäcken är öppen. Tryck på den igen för att stänga ryggsäcken.

Varje objekt visar sin bild, sitt namn och antalet block i det (**Block: N**). Texten längst ned i panelen talar om var ryggsäcken sparas (se [nedan](#where-it-is-kept)).

## Infoga block i ett program {#insert}

- **Tryck på ett objekt**: dess block visas i den synliga delen av programmet.
- **Dra ett objekt till programmet**: blocken hamnar där du släpper dem. Dra åt sidan, mot programmet; om du drar uppåt eller nedåt rullar listan.
- **Objektets meny (⋯)**: **Infoga**, **Byt namn…** eller **Ta bort**.

På telefoner och surfplattor stängs ryggsäcken efter infogningen, så att du ser blocken. Ett enda **Ångra** tar bort allt som infogades.

### Vad som händer när du infogar {#what-happens}

- **Mina block**: ett Mitt block som profilen redan har med samma innehåll återanvänds, så om du infogar samma block igen skapas inga kopior av det. Om ett annat Mitt block i profilen använder samma namn internt får det infogade blocket ett eget. Om du infogar ett Mitt block-objekt som redan finns i profilen händer ingenting och **Finns redan** visas: du hittar blocket under **Mina block**.
- **Variabler, listor, meddelanden och fordon**: om profilen har en med samma namn använder blocken den; annars skapas den. Variablernas värden och listornas innehåll kopieras inte. Om namnet redan används av något annat får du ett meddelande som *Variabeln ”speed” kunde inte skapas: namnet är upptaget*.
- **Ljud**: dina egna ljud är filer i profilen och sparas inte i ryggsäcken. Om profilen inte har något ljud med det namnet ser du *Ljudet ”…” finns inte i den här profilen: välj ett ljud i blocken*. Inbyggda ljud fungerar överallt.
- **Block för hubbar och instrumentpanelen**: block för en hubb, en kontroll på instrumentpanelen eller en handkontroll som profilen inte har kan inte infogas. Innan något ändras visar appen **Vissa block kan inte infogas** med en lista över sådana block och hur många som utelämnas, och frågar om de övriga ska infogas. Lägg först till hubben eller kontrollen på instrumentpanelen om du vill behålla dem. Om inget av blocken passar profilen infogas ingenting.

## Byta namn och ta bort {#rename-delete}

Öppna objektets meny (⋯):

- **Byt namn…** ändrar objektets namn.
- **Ta bort** tar bort det när du har bekräftat (**Ta bort från ryggsäcken?**). Program som du har infogat det i behåller sina block.

Ryggsäcken tar aldrig bort objekt av sig själv: ta bort det du inte längre behöver.

## Var ryggsäcken sparas {#where-it-is-kept}

- **Utan konto (gäst)**: bara på den här enheten. I panelen står det *Sparas på den här enheten. Logga in för att ha ryggsäcken på alla dina enheter.*
- **Inloggad**: även i ditt konto, så att du har samma ryggsäck på alla dina enheter, inklusive [webbredigeraren](/docs/Introducing/WebEditor). I panelen står det *Sparas i ditt konto: samma ryggsäck på alla dina enheter.* Ändringar som görs på en enhet visas på de andra.
- **Första inloggningen**: objekt som du sparade som gäst på den här enheten flyttas till ditt konto.

Du kan använda ryggsäcken offline. Ändringarna sparas på enheten och skickas till ditt konto när anslutningen är tillbaka (panelen visar **Synkroniserar…** under tiden). Ett objekt som fortfarande laddas ned från ditt konto kan inte infogas än: appen visar **Inte klart än**, så försök igen om en stund.

## Gränser {#limits}

| | Gräns |
|---|---|
| Objekt i ryggsäcken | 200 |
| Storlek på ett objekt | cirka 512 kB (en mycket stor programdel kanske inte får plats: spara en mindre del) |
| Objektets namn | upp till 100 tecken |

Om ryggsäcken i ditt konto är full eller ett objekt är för stort för den sparas objektet bara på den här enheten, och appen talar om det. Objekt som sparats med en nyare version av appen kan infogas först när du har uppdaterat appen.

## Felsökning {#troubleshooting}

| Meddelande | Vad du gör |
|---|---|
| **Ryggsäcken är full (200 objekt). Ta bort något du inte behöver.** | Ta bort objekt som du inte längre använder. |
| **För många block för ryggsäcken. Spara en mindre del.** | Spara en mindre hög eller dela upp programmet i flera objekt. |
| **Vissa block kan inte infogas** | Profilen saknar en hubb, en kontroll på instrumentpanelen eller en handkontroll som blocken behöver. Lägg till den och infoga igen, eller infoga de övriga blocken. |
| **Finns redan** | Blocket finns redan i den här profilen: du hittar det under **Mina block**. |
| **Inte klart än** | Objektet laddas fortfarande ned från ditt konto. Vänta en stund och försök igen. |
| **De här blocken sparades med en nyare version av appen. Uppdatera appen för att använda dem.** | Uppdatera MOCPilot på den här enheten. |
