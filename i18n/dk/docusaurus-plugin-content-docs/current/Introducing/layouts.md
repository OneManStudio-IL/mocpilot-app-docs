---
id: Layouts
title: Telefon, tablet og computer
description: "Hvor alt findes i MOCPilots layout til telefon, tablet og computer, samt menuer og tastaturgenveje på computeren."
---

import Screenshot from '@site/src/components/Screenshot';

# Telefon, tablet og computer {#phone-tablet-and-desktop}

MOCPilot har tre layouts, og appen vælger automatisk det rigtige:

- **Telefon**: iPhone og Android-telefoner.
- **Tablet**: iPad og Android-tablets (7 tommer og større).
- **Computer**: Mac- og Windows-computere. [Webeditoren](/docs/Introducing/WebEditor) i en browser bruger også computereditoren.

Profiler, editorer og dashboardet er ens overalt; kun navigationen er forskellig.

## Telefon {#phone}

<Screenshot name="profiles-phone" alt="Siden Mine profiler på en telefon med bundbjælken" width={360} />

- **Bundbjælken** har **Profiler**, **Indstillinger** og **Hjælp** samt **Notifikationer**, når du er logget ind.
- **Konto** ligger øverst i **Indstillinger**.
- Overskriften på **Mine profiler** har **Sortér og filtrér**, **Forbind en fjernbetjening** (ikonet med fjernbetjeningen), **+** (Ny profil, Importér profil…, Søg online) og søgefeltet.
- Hovedskærmene vises i portrætformat. Når du åbner en profil, skifter appen til **liggende format og fuld skærm**, så editoren og dashboardet får hele skærmen. Når du lukker profilen, vender portrætformatet tilbage.
- I editoren sidder **Hjem** til venstre i topbjælken. Til højre sidder **Fortryd** og **Gentag**, **Dashboard**, **Mine hubs** (med antallet af forbundne hubs), **Problemer** (Hurtige forbindelser), **Fjernstyring**, **Mere** (⋯) og **Kør / Stop**. Under **Mere** ligger **AI-bygger**, [**Rygsæk**](/docs/Application/BlockBuilder/Backpack) og **Monitor** (Logikblokke), **Spilcontroller** og **Editorindstillinger**. På en smal skærm flytter også Dashboard og Mine hubs ind under **Mere**, så knapperne bevarer en størrelse, der passer til fingrene.

<Screenshot name="editor-phone" alt="Profileditoren på en telefon med dens topbjælke" width={900} />

## Tablet {#tablet}

<Screenshot name="profiles-tablet" alt="Siden Mine profiler på en tablet med sidebjælken" width={900} />

- **Sidebjælken** til venstre har **Profiler**, **Profilkatalog**, **Notifikationer**, **Indstillinger** og **Hjælp**. Under dem findes kortet **MocPilot Pro** og din konto (**Log ind** i gæstetilstand). Du kan klappe sidebjælken sammen, så kun ikonerne vises.
- Overskriften på **Mine profiler** har **Ny profil** (menuen har også Importér profil…, Forbind en fjernbetjening og Søg online), **Sortér og filtrér**, **Filtrér efter hashtags**, **Forbind en fjernbetjening** og søgefeltet.
- Tryk på et profilkort for at vælge det: bjælken nederst viser **Del**, **Rediger**, **Føj til favoritter** og **Start**. Dobbelttryk på et kort for at starte det. Tryk længe på et kort for at åbne dets menu, som også har **Slet profil**.
- På brede skærme åbnes Indstillinger og Hjælp ved siden af listen.
- En profil åbnes i liggende format, og editoren har den samme topbjælke som på en telefon.

## Computer (Mac og Windows) {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="Mine profiler på en computer" width={900} />

- Til højre i topbjælken: **Konto** (**Log ind** i gæstetilstand), **Notifikationer** (når du er logget ind), **Forbind en fjernbetjening** (ikonet med fjernbetjeningen) og **Indstillinger** (tandhjulet).
- Indstillinger, Hjælp, Konto, Ny profil, Rediger profil, Profilkatalog og andre sider åbnes som **vinduer** over profillisten.
- Klik på et profilkort for at se, hvad du kan gøre med det (**Del…**, **Rediger…**, **Føj til favoritter**, **Start**); et dobbeltklik starter det. Højreklik på et kort for at åbne dets menu, som også har **Slet profil**.
- I editoren åbnes **Dashboard** i sit **eget vindue**, så du kan se programmet og dashboardet side om side.

### Editorens topbjælke {#editor-top-bar}

- **Venstre**: **Hjem** (lukker profilen), menuerne **Fil**, **Rediger**, **Vis** og **Program** og derefter **Fortryd** og **Gentag**.
- **Midten**: profilens navn og knapperne til profilens andre dele: **Dashboard**, **Hubs** (med antallet af forbundne hubs) og **Spilcontroller**. Den side, du er på, har ingen egen knap.
- **Højre**: sidepanelerne **AI-bygger**, [**Rygsæk**](/docs/Application/BlockBuilder/Backpack) og **Monitor** (de sidste to kun i Logikblokke), **Mere** (⋯), derefter rækkernes status i Hurtige forbindelser (**Alle rækker er klar** eller **Problemer: N**), **Fjernstyring** og den orange knap **Kør** (**Stop**, mens programmet kører).

Under **Mere** finder du altid **Editorindstillinger…**. Når vinduet bliver smalt, foldes bjælken sammen trin for trin i stedet for at klemme knapperne: Først skjules profilens navn, så flytter **Monitor**, **Rygsæk** og **AI-bygger** ind under **Mere**, derefter beholder **Kør** kun sit ikon (og status i Hurtige forbindelser kun ikon og antal), og til sidst flytter også **Spilcontroller**, **Dashboard** og **Hubs** ind under **Mere**. Er et sidepanel fra **Mere** åbent, er knappen **Mere** farvet.

Dashboardets topbjælke ser ens ud: **Hjem**, **Fil**, **Rediger** og **Vis**, **Fortryd** og **Gentag** til venstre; profilens navn og **Blokke** (eller **Forbindelser**) for at gå tilbage til programmet i midten; **Vælg**, **Dashboardindstillinger** og **+ Controller** til højre. Se [Dashboard-editor](/docs/Application/Dashboard/DashboardOverview#toolbar).

### Menuer {#menus}

På Windows ligger menuerne til venstre i appens topbjælke. På en Mac ligger de i systemets menulinje øverst på skærmen.

| Menu | Windows | Mac |
|---|---|---|
| **MOCPilot** (appmenu) | — | Om MOCPilot, Indstillinger…, Afslut |
| **Fil** | Ny profil, Importér profil…, Søg online, Afslut | Ny profil, Importér profil…, Søg online, Forbind en fjernbetjening… |
| **Vis** | Fuld skærm | Fuld skærm til / fra |
| **Vindue** | Minimer, Maksimer / Gendan | Minimer |
| **Hjælp** | MOCPilot Hjælp, Stil et spørgsmål, Rapportér en fejl, Om MOCPilot | MOCPilot Hjælp, Stil et spørgsmål, Rapportér en fejl |

Når en profil er åben, har editoren sine egne menuer **Fil**, **Rediger**, **Vis** og **Program** (se [Menuer på computeren](/docs/Application/BlockBuilder/Editor#desktop-menus)), og dashboardvinduet har **Fil**, **Rediger** og **Vis** (se [Dashboard](/docs/Application/Dashboard/DashboardOverview)).

### Tastaturgenveje {#keyboard-shortcuts}

På en Mac gør ⌘ (Command) det samme som Ctrl på Windows; ⇧ er Shift, ⌃ er Control.

**Overalt**

| Handling | Windows | Mac |
|---|---|---|
| Indstillinger | Ctrl+2 | ⌘, |
| Fuld skærm til / fra | F11 eller Alt+Enter | ⌃⌘F |
| Minimer vinduet | — | ⌘M |
| Afslut | Alt+F4 | ⌘Q |

**Mine profiler** (ingen profil åben)

| Handling | Windows | Mac |
|---|---|---|
| Ny profil | Ctrl+N | ⌘N |
| Importér profil | Ctrl+O | ⌘O |
| Søg i profiler | Ctrl+F | — |
| Profiler / Indstillinger / Hjælp / Konto | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**Profileditor**

| Handling | Windows | Mac |
|---|---|---|
| Luk profil | Ctrl+W | ⌘W |
| Kør / Stop | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| Fortryd / Gentag | Ctrl+Z / Ctrl+Shift+Z eller Ctrl+Y | ⌘Z / ⇧⌘Z |
| Vis dashboardet | Ctrl+2 | ⌘2 |
| Mine hubs | Ctrl+Shift+H | ⇧⌘H |
| AI-bygger | Ctrl+Shift+I | ⇧⌘I |
| Vis / skjul blokpaletten (Logikblokke) | Ctrl+P | ⌘P |
| Søg i blokpaletten (Logikblokke) | Ctrl+F | ⌘F |
| Monitor (Logikblokke) | Ctrl+Shift+M | ⇧⌘M |
| [Rygsæk](/docs/Application/BlockBuilder/Backpack) (Logikblokke) | Ctrl+Shift+B | ⇧⌘B |
| Zoom ind / ud / faktisk størrelse (Logikblokke) | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**Dashboard**

| Handling | Windows | Mac |
|---|---|---|
| Fortryd / Gentag | Ctrl+Z / Ctrl+Shift+Z eller Ctrl+Y | ⌘Z / ⇧⌘Z |
| Tilbage til programmet (når dashboardet er i hovedvinduet) | Ctrl+1 | ⌘1 |
| Luk dashboardvinduet | — | ⌘W |
| Forlad tilstanden **Vælg**, eller luk egenskabspanelet | Esc | Esc |
| Slet kontrollen (egenskabspanelet er åbent) | Delete eller Backspace | Delete eller Backspace |
| Dupliker kontrollen (egenskabspanelet er åbent) | Ctrl+D | ⌘D |

På en tablet med tastatur viser eller skjuler Ctrl+B (⌘B på en iPad) sidebjælken.

## Profileditoren i alle layouts {#the-profile-editor-on-every-layout}

Editoren har ingen faner. **Programmet** (rækker i Hurtige forbindelser eller Logikblokke) fylder skærmen, og topbjælkens knapper åbner alt det andet. Nogle af dem ligger under **Mere** (⋯): på en telefon eller tablet AI-bygger, Rygsæk, Monitor, Spilcontroller og Editorindstillinger; på en computer Editorindstillinger og det, der ikke er plads til i et smalt vindue.

| Knap | Åbner |
|---|---|
| **Mine hubs** (**Hubs** på en computer) | profilens [hub-slots](/docs/Application/Hubs/ConnectingHubs) |
| **Dashboard** | [dashboardet](/docs/Application/Dashboard/DashboardOverview) |
| **Spilcontroller** | [gamepad-indstillinger](/docs/Application/Dashboard/Gamepad) |
| **Monitor** | værdier af variabler og lister (kun Logikblokke) |
| **Rygsæk** | blokstakke, du har gemt til genbrug i alle profiler (kun Logikblokke); se [Rygsæk](/docs/Application/BlockBuilder/Backpack) |
| **Editorindstillinger** | [editorens indstillinger](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **AI-bygger** | [AI-byggeren](/docs/Application/Profiles/AiBuilder) (MocPilot Pro) |
| **Problemer** | rækker, der ikke kan køre (kun Hurtige forbindelser) |
| **Fjernstyring** | kør profilen på en anden enhed, og styr den herfra (MocPilot Pro); se [Fjernstyring](/docs/Application/Profiles/RemoteControl) |
| **Kør / Stop** | starter og stopper programmet (på en computer den orange knap **Kør** yderst til højre) |
