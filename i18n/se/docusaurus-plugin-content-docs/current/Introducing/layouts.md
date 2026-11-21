---
id: Layouts
title: Telefon, surfplatta och dator
description: "Var allt finns i MOCPilots layouter för telefon, surfplatta och dator, plus datormenyerna och kortkommandona."
---

import Screenshot from '@site/src/components/Screenshot';

# Telefon, surfplatta och dator

MOCPilot har tre layouter, och appen väljer en automatiskt:

- **Telefon**: iPhone och Android-telefoner.
- **Surfplatta**: iPad och Android-surfplattor (7 tum och större).
- **Dator**: Mac- och Windows-datorer. [Webbredigeraren](/docs/Introducing/WebEditor) i en webbläsare använder också datorredigeraren.

Profiler, redigerare och instrumentpanel är likadana överallt; det är bara navigeringen som skiljer sig.

## Telefon {#phone}

<Screenshot name="profiles-phone" alt="Sidan Mina profiler på en telefon med det nedre fältet" width={360} />

- Det **nedre fältet** har **Profiler**, **Inställningar** och **Hjälp**, plus **Aviseringar** när du är inloggad.
- **Konto** finns högst upp i **Inställningar**.
- Sidhuvudet i **Mina profiler** har **Sortera och filtrera**, **Anslut en fjärrkontroll** (ikonen med fjärrkontrollen), **+** (Ny profil, Importera profil…, Sök online) och sökfältet.
- Huvudskärmarna visas i stående läge. När du öppnar en profil växlar appen till **liggande läge i helskärm**, så att redigeraren och instrumentpanelen får hela skärmen. När du stänger profilen återgår appen till stående läge.
- I redigeraren ger runda knappar längs överkanten snabb åtkomst till Hem, Ångra, Gör om, AI-byggare, Redigerarens inställningar, Problem (Snabbkopplingar), Handkontroll, Mina hubbar, Fjärrstyrning, Instrumentpanel, Monitor (Logikblock) och Kör / Stoppa.

<Screenshot name="editor-phone" alt="Profilredigeraren på en telefon med runda knappar längs överkanten" width={900} />

## Surfplatta {#tablet}

<Screenshot name="profiles-tablet" alt="Sidan Mina profiler på en surfplatta med sidofältet" width={900} />

- **Sidofältet** till vänster har **Profiler**, **Profilkatalog**, **Aviseringar**, **Inställningar** och **Hjälp**. Under dem finns kortet **MocPilot Pro** och ditt konto (**Logga in** i gästläge). Du kan fälla ihop sidofältet så att bara ikonerna syns.
- Sidhuvudet i **Mina profiler** har **Ny profil** (dess meny har också Importera profil…, Anslut en fjärrkontroll och Sök online), **Sortera och filtrera**, **Filtrera efter hashtaggar**, **Anslut en fjärrkontroll** och sökfältet.
- Tryck på ett profilkort för att markera det: fältet längst ned visar **Dela**, **Redigera**, **Lägg till i favoriter** och **Starta**. Dubbeltryck på ett kort för att starta profilen. Tryck länge på ett kort för att öppna dess meny, som också har **Ta bort profil**.
- På breda skärmar öppnas Inställningar och Hjälp bredvid listan.
- En profil öppnas i liggande läge, och redigeraren har samma runda knappar som på en telefon.

## Dator (Mac och Windows) {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="Mina profiler på en dator" width={900} />

- Till höger i det övre fältet: **Konto** (**Logga in** i gästläge), **Aviseringar** (när du är inloggad), **Anslut en fjärrkontroll** (ikonen med fjärrkontrollen) och **Inställningar** (kugghjulet).
- Inställningar, Hjälp, Konto, Ny profil, Redigera profil, Profilkatalogen och andra sidor öppnas som **fönster** ovanpå profillistan.
- Klicka på ett profilkort för att se vad du kan göra med det (**Dela…**, **Redigera…**, **Lägg till i favoriter**, **Starta**); dubbelklicka för att starta profilen. Högerklicka på ett kort för att öppna dess meny, som också har **Ta bort profil**.
- I redigeraren öppnas **Instrumentpanel** i ett **eget fönster**, så att du kan se programmet och instrumentpanelen sida vid sida.

### Menyer {#menus}

I Windows finns menyerna till vänster i appens övre fält. På en Mac finns de i systemets menyrad högst upp på skärmen.

| Meny | Windows | Mac |
|---|---|---|
| **MOCPilot** (appmenyn) | — | Om MOCPilot, Inställningar…, Avsluta |
| **Fil** | Ny profil, Importera profil…, Sök online, Avsluta | Ny profil, Importera profil…, Sök online, Anslut en fjärrkontroll… |
| **Visa** | Helskärm | Helskärm / Avsluta helskärm |
| **Fönster** | Minimera, Maximera / Återställ | Minimera |
| **Hjälp** | MOCPilot-hjälp, Ställ en fråga, Rapportera en bugg, Om MOCPilot | MOCPilot-hjälp, Ställ en fråga, Rapportera en bugg |

När en profil är öppen har redigeraren egna menyer: **Fil**, **Redigera**, **Visa** och **Program** (se [Datormenyer](/docs/Application/BlockBuilder/Editor#desktop-menus)), och fönstret Instrumentpanel har **Fil**, **Redigera** och **Visa** (se [Instrumentpanel](/docs/Application/Dashboard/DashboardOverview)).

### Kortkommandon {#keyboard-shortcuts}

På en Mac gör ⌘ (Command) samma sak som Ctrl i Windows; ⇧ är Skift, ⌃ är Control.

**Överallt**

| Åtgärd | Windows | Mac |
|---|---|---|
| Inställningar | Ctrl+2 | ⌘, |
| Öppna / stäng helskärm | F11 eller Alt+Enter | ⌃⌘F |
| Minimera fönstret | — | ⌘M |
| Avsluta | Alt+F4 | ⌘Q |

**Mina profiler** (ingen profil öppen)

| Åtgärd | Windows | Mac |
|---|---|---|
| Ny profil | Ctrl+N | ⌘N |
| Importera profil | Ctrl+O | ⌘O |
| Sök bland profiler | Ctrl+F | — |
| Profiler / Inställningar / Hjälp / Konto | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Profilredigeraren**

| Åtgärd | Windows | Mac |
|---|---|---|
| Stäng profilen | Ctrl+W | ⌘W |
| Kör / Stoppa | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Ångra / Gör om | Ctrl+Z / Ctrl+Skift+Z eller Ctrl+Y | ⌘Z / ⇧⌘Z |
| Visa instrumentpanelen | Ctrl+2 | ⌘2 |
| Mina hubbar | Ctrl+Skift+H | ⇧⌘H |
| AI-byggare | Ctrl+Skift+I | ⇧⌘I |
| Visa / dölj blockpaletten (Logikblock) | Ctrl+P | ⌘P |
| Sök i blockpaletten (Logikblock) | Ctrl+F | ⌘F |
| Monitor (Logikblock) | Ctrl+Skift+M | ⇧⌘M |
| Zooma in / ut / verklig storlek (Logikblock) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Instrumentpanel**

| Åtgärd | Windows | Mac |
|---|---|---|
| Ångra / Gör om | Ctrl+Z / Ctrl+Skift+Z eller Ctrl+Y | ⌘Z / ⇧⌘Z |
| Tillbaka till programmet (när instrumentpanelen visas i huvudfönstret) | Ctrl+1 | ⌘1 |
| Stäng fönstret Instrumentpanel | — | ⌘W |
| Lämna läget **Välj** eller stäng egenskapspanelen | Esc | Esc |
| Ta bort kontrollen (egenskapspanelen öppen) | Delete eller Backsteg | Delete eller Backsteg |
| Duplicera kontrollen (egenskapspanelen öppen) | Ctrl+D | ⌘D |

På en surfplatta med tangentbord visar eller döljer Ctrl+B (⌘B på en iPad) sidofältet.

## Profilredigeraren i alla layouter {#the-profile-editor-on-every-layout}

Redigeraren har inga flikar. **Programmet** (rader i Snabbkopplingar eller Logikblock) fyller skärmen, och knappar öppnar allt annat:

| Knapp | Öppnar |
|---|---|
| **Mina hubbar** | profilens [hubbplatser](/docs/Application/Hubs/ConnectingHubs) |
| **Instrumentpanel** | [instrumentpanelen](/docs/Application/Dashboard/DashboardOverview) |
| **Handkontroll** | [inställningar för handkontrollen](/docs/Application/Dashboard/Gamepad) |
| **Monitor** | värden för variabler och listor (endast Logikblock) |
| **Redigerarens inställningar** | [redigerarens alternativ](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **AI-byggare** | [AI-byggaren](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Problem** | rader som inte kan köras (endast Snabbkopplingar) |
| **Fjärrstyrning** | kör profilen på en annan enhet och styr den härifrån (MocPilot Pro); se [Fjärrstyrning](/docs/Application/Profiles/RemoteControl) |
| **Kör / Stoppa** | startar och stoppar programmet |
