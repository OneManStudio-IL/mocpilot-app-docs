---
id: CreateProfile
title: Tworzenie profilu
description: "Utwórz profil i wybierz edytor programu: Bloki logiczne lub Szybkie połączenia."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Tworzenie profilu {#create-a-profile}

1. Przejdź do **Moje profile**.
   - Telefon: stuknij **+** → **Nowy profil**.
   - Tablet: **Nowy profil** w nagłówku.
   - Komputer: **Plik → Nowy profil** (⌘N / Ctrl+N).
2. Wybierz **typ programu** (patrz niżej).
3. Uzupełnij dane profilu.
4. Stuknij **Utwórz**. Profil otworzy się w edytorze.

<Screenshot name="create-profile-tiles" alt="Strona Nowy profil" width={900} />

## Wybór typu programu {#choose-the-program-type}

Typ programu decyduje, z którego edytora korzysta profil. **Nie da się go później zmienić.** Aby wypróbować drugi edytor, utwórz drugi profil.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="Szybkie połączenia" style={{width: '100%', maxWidth: 320}} />
    <h3>Szybkie połączenia</h3>
    <p><em>Uproszczony schemat, jak w Controlz.</em> Łącz elementy sterujące panelu z silnikami i światłami huba wiersz po wierszu: wejście, przetwarzanie, operacja, hub. Gotowe w kilka minut.</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="Bloki logiczne" style={{width: '100%', maxWidth: 320}} />
    <h3>Bloki logiczne</h3>
    <p><em>Robotyka, algorytmy i zaawansowane scenariusze.</em> Programuj model blokami: zdarzenia, pętle, warunki, zmienne i dane z czujników. Do robotów i automatyki.</p>
  </div>
</div>

| | Szybkie połączenia | Bloki logiczne |
|---|---|---|
| Sposób budowania | Wiersze: wejście → przetwarzanie → operacja → hub | Bloki łączone w skrypty |
| Czas nauki | Minuty | Dłużej; więcej możliwości |
| Najlepsze do | Samochodów, ciężarówek, pociągów, dźwigów: „ten element sterujący porusza tamtym silnikiem” | Robotów, automatycznych sekwencji, logiki opartej na czujnikach, gier |
| Logika (warunki, pętle, zmienne) | Nie (tylko progi i przełączanie) | Tak |
| Czujniki | Czujniki huba jako wejścia; wartości na wskaźniki | Wszystkie czujniki huba i telefonu, dowolne obliczenia |
| Płynny start, ograniczenia, martwa strefa | Gotowe bloki | Budowane z bloków |
| Skręt serwem z kalibracją | Gotowy blok | Bloki |
| Gamepad | Tak | Tak |
| Kilka hubów | Tak | Tak |

**Nie wiesz, co wybrać?** Zacznij od Szybkich połączeń. Jeśli później będziesz potrzebować logiki, utwórz dla modelu profil z Blokami logicznymi.

Jeśli stukniesz **Utwórz** bez wybrania typu, kafelki zostaną podświetlone. Każdy kafelek ma link **Dokumentacja ↗** do swojej części tej dokumentacji.

## Dane profilu {#profile-details}

- **Obraz**: kliknij obszar obrazu (na ekranie dotykowym przytrzymaj go), aby wybrać zdjęcie. Przeciągnij obraz w górę lub w dół, aby wybrać widoczny fragment. **Zaktualizuj obraz** i **Usuń** pozwalają go później zmienić.
- **Nazwa**: wymagana i musi być unikalna – komunikat „Profil o nazwie … już istnieje” oznacza, że masz już profil o tej nazwie.
- **Poziom bloków** (tylko Bloki logiczne): **Początkujący**, **Zaawansowany** lub **Guru**. Określa, które bloki paleta pokazuje w tym profilu. Możesz go później zmienić w Ustawieniach edytora. Zobacz [Praca w edytorze](/docs/Application/BlockBuilder/Editor#block-levels).
- **Hashtagi**: opisują profil i pomagają innym go znaleźć. Hashtagi pochodzą ze wspólnej listy, która wczytuje się, gdy jesteś online.

Wszystko oprócz typu programu można później zmienić w **Edytuj profil**, gdzie możesz też dodać opis i oznaczyć profil jako **Ulubiony**.

## Co dalej {#next-steps}

1. Dodaj huby: [Dodawanie i łączenie huba](/docs/Application/Hubs/ConnectingHubs).
2. Rozmieść elementy sterujące: [Panel](/docs/Application/Dashboard/DashboardOverview).
3. Napisz program: [Szybkie połączenia](/docs/Application/Links/LinksIntroducing) lub [Bloki logiczne](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

:::tip Kreator AI
Z [MocPilot Pro](/docs/Application/Account/Pro) możesz opisać swój model słowami lub głosem, a Kreator AI utworzy huby, panel i program (Bloki logiczne lub Szybkie połączenia). Podaj, jakiego huba używasz, co jest podłączone do każdego portu i co ma robić. Zobacz [Jak uzyskać dobry wynik](/docs/Application/Profiles/AiBuilder#ai-builder-tips).
:::
