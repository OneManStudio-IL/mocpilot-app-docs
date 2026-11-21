---
id: AboutApp
title: O MOCPilot
description: "MOCPilot zamienia telefon, tablet lub komputer w pilota do modeli LEGO® i zgodnych modeli Bluetooth."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot: zbuduj, steruj, kontroluj wszystko {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** zamienia Twój telefon, tablet lub komputer w pilota do modeli LEGO® i zgodnych modeli Bluetooth: samochodów, ciężarówek, pociągów, dźwigów, robotów i Twoich własnych MOC-ów.

Elementy sterujące projektujesz sam: **panel** z joystickami, suwakami, przyciskami, kierownicami i wskaźnikami. Następnie **program** łączy panel z silnikami i światłami w Twoich **hubach**. MOCPilot ma dwa edytory programów:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="Edytor Szybkich połączeń: wiersze od wejścia do huba" style={{width: '100%'}} />
    <h3>Szybkie połączenia</h3>
    <p>Bez kodu. Każdy wiersz łączy jeden element sterujący z silnikiem lub światłem: <em>wejście → przetwarzanie → operacja → hub</em>. Samochód jest gotowy do jazdy w kilka minut. <a href="/docs/Application/Links/LinksIntroducing">Dowiedz się więcej</a>.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Edytor Bloków logicznych: program z bloków" style={{width: '100%'}} />
    <h3>Bloki logiczne</h3>
    <p>Wizualne bloki ze zdarzeniami, pętlami, warunkami, zmiennymi i danymi z czujników. Do robotów, automatyki i wszystkiego, co wymaga logiki. <a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">Dowiedz się więcej</a>.</p>
  </div>
</div>

## Co możesz zrobić {#what-you-can-do}

- **Steruj dowolnym modelem** z panelu, który sam zaprojektujesz: joysticki, suwaki, przyciski, przełączniki, przełączniki krokowe, monitory oraz specjalne elementy sterujące, takie jak kierownica, pedały, skrzynia biegów, hamulec ręczny, kierunkowskazy i nastawnik pociągu.
- **Używaj prawdziwych hubów**: LEGO® Powered Up, Technic™, Technic Move, BOOST, City, WeDo 2.0, Robot Inventor, BuWizz, SBrick i Mould King. Zobacz [Obsługiwane urządzenia](/docs/Introducing/SupportedDevices).
- **Używaj gamepada** (w stylu Xbox lub PlayStation) zamiast ekranu dotykowego.
- **Odczytuj czujniki**: baterię i nachylenie huba, prędkość i pozycję silnika, czujniki koloru i odległości oraz nachylenie telefonu.
- **Spersonalizuj panel** dzięki [motywom](/docs/Application/Themes/ThemesOverview).
- **Miej swoje profile wszędzie**: z kontem profile synchronizują się między urządzeniami, a edytować je możesz w przeglądarce na [mocpilot.com](/docs/Introducing/WebEditor).
- **Steruj z innego urządzenia**: z MocPilot Pro jedno urządzenie łączy się z hubami, a drugie – albo edytor webowy – działa jako pilot.
- **Udostępniaj**: instaluj profile z [Katalogu profili](/docs/Application/Profiles/Catalog) i publikuj własne.

<Screenshot name="dashboard-run" alt="Panel MOCPilot podczas sterowania modelem" width={900} />

## Gdzie działa MOCPilot {#where-mocpilot-runs}

| Urządzenie | Układ |
|---|---|
| iPhone i telefony z Androidem | Układ telefonu: dolny pasek; otwarty profil wypełnia ekran w orientacji poziomej |
| iPad i tablety z Androidem | Układ tabletu: pasek boczny, więcej miejsca na edytor |
| Komputery Mac i z Windows | Układ komputerowy: menu, skróty klawiszowe, panel w osobnym oknie |
| Przeglądarka na mocpilot.com | [Edytor webowy](/docs/Introducing/WebEditor): edycja profili; huby łączy aplikacja na innym urządzeniu |

Szczegóły znajdziesz w artykule [Telefon, tablet i komputer](/docs/Introducing/Layouts).

Huby, Twoje profile i pobrane motywy działają też bez internetu. Zobacz [Praca offline](/docs/Application/Account/Sync#working-offline).

## Od czego zacząć {#where-to-start}

1. Przeczytaj [Jak działa MOCPilot](/docs/Introducing/HowItWorks): pięć minut, dzięki którym cała reszta stanie się prostsza.
2. Przejdź przez [Szybki start](/docs/Introducing/QuickStart), aby uruchomić swój pierwszy model.
3. Nie wiesz, który edytor wybrać? Porównaj je w artykule [Tworzenie profilu](/docs/Application/Profiles/CreateProfile#choose-the-program-type).

:::note
LEGO®, logo LEGO, Powered Up i Technic są znakami towarowymi Grupy LEGO, która nie sponsoruje, nie autoryzuje ani nie popiera MOCPilot.
:::
