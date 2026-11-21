---
id: HubsOverview
title: Huby
description: "Huby w profilach MOCPilot: obsługiwane huby, sloty hubów i możliwości każdego huba."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Huby

**Hub** to klocek Bluetooth w Twoim modelu: do jego portów podłącza się silniki, światła i czujniki, a MOCPilot komunikuje się z nim przez Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Obsługiwane huby {#supported-hubs}

| Hub | Uwagi |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 porty, czujniki nachylenia i przyspieszenia |
| LEGO® Technic™ Move Hub | w zdalnie sterowanych samochodach LEGO Technic; napęd, skręt, światła; [konfiguracje](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 porty, pociągi i zestawy City |
| LEGO® Move Hub / BOOST (88006) | 2 wbudowane silniki + 2 porty |
| LEGO® Remote Control (88010) | jego przyciski są wejściami |
| LEGO® WeDo 2.0 Smart Hub | 2 porty |
| LEGO® Large Hub / Robot Inventor (88016) | 6 portów, matryca świetlna; niedostępny na iPhonie i iPadzie |
| BuWizz 2.0 | 4 porty, tryby mocy |
| BuWizz 3.0 Pro | 6 portów, kolorowe diody LED portów |
| SBrick, SBrick Plus | 4 porty, sterowanie prędkością, bez sterowania pozycją |
| Mould King 4.0, 6.0 | 4 lub 6 portów, tylko polecenia, kanały sterowania |

Pełna lista z silnikami i czujnikami: [Obsługiwane urządzenia](/docs/Introducing/SupportedDevices).

## Sloty hubów {#hub-slots}

Każdy profil ma **5 slotów na huby**:

- **2 sloty są bezpłatne**;
- **3 kolejne** odblokowujesz przyciskiem **Odblokuj slot** (zakup *Dodatkowy slot huba*, jeden na slot) albo wszystkie naraz z [MocPilot Pro](/docs/Application/Account/Pro).

Kupione sloty należą do Twojego konta i działają we wszystkich Twoich profilach.

Ograniczenia Mould King: jeden typ Mould King na profil, maksymalnie 3 huby Mould King 4.0 lub 1 Mould King 6.0 (współdzielą nadajnik rozgłaszania Bluetooth telefonu).

## Huby w programie {#hubs-in-the-program}

- W **Szybkich połączeniach** każdy hub profilu pojawia się w palecie jako wyjście **Hub** oraz jako wejście **Hub** dla swoich przycisków i czujników. Operacje, których nie potrafi wykonać żaden hub profilu, nie są proponowane. Zobacz [Blok Hub i porty](/docs/Application/Links/HubsAndPorts).
- W **Blokach logicznych** bloki silników, świateł i czujników przyjmują slot huba i port. Zobacz [Silniki](/docs/Application/BlockBuilder/Blocks/Motors).

## Więcej informacji {#read-more}

- [Dodawanie i łączenie huba](/docs/Application/Hubs/ConnectingHubs)
- [Funkcje specyficzne dla hubów](/docs/Application/Hubs/HubFunctions)
- [Aktualizacja firmware](/docs/Application/Hubs/FirmwareUpdating) i [odzyskiwanie firmware](/docs/Application/Hubs/RecoveryHubFirmware)
