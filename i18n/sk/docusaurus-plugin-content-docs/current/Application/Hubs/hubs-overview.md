---
id: HubsOverview
title: Huby
description: "Huby v profiloch MOCPilot: podporované huby, sloty pre huby a čo jednotlivé huby dokážu."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Huby {#hubs}

**Hub** je bluetoothová kocka vášho modelu: do jeho portov sa zapájajú motory, svetlá a senzory a MOCPilot s ním komunikuje cez Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Podporované huby {#supported-hubs}

| Hub | Poznámky |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 porty, senzory náklonu a zrýchlenia |
| LEGO® Technic™ Move Hub | v diaľkovo ovládaných autách LEGO Technic; pohon, riadenie, svetlá; [konfigurácie](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 porty, vlaky a sady City |
| LEGO® Move Hub / BOOST (88006) | 2 vstavané motory + 2 porty |
| LEGO® Remote Control (88010) | jeho tlačidlá slúžia ako vstupy |
| LEGO® WeDo 2.0 Smart Hub | 2 porty |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 portov, svetelná matica, reproduktor, gyroskop; Bluetooth alebo USB; nie na iPhone a iPade |
| BuWizz 2.0 | 4 porty, výkonové režimy |
| BuWizz 3.0 Pro | 6 portov, farebné LED portov |
| SBrick, SBrick Plus | 4 porty, riadenie rýchlosti, bez riadenia polohy |
| Mould King 4.0, 6.0 | 4 alebo 6 portov, iba príkazy, ovládacie kanály |

Úplný zoznam s motormi a senzormi: [Podporované zariadenia](/docs/Introducing/SupportedDevices).

## Sloty pre huby {#hub-slots}

Každý profil má **5 slotov pre huby**:

- **2 sloty sú zadarmo**;
- **ďalšie 3** odomknete tlačidlom **Odomknúť slot** (nákup *Ďalší slot pre hub*, jeden na slot) alebo všetky naraz s [MocPilot Pro](/docs/Application/Account/Pro).

Zakúpené sloty patria vášmu účtu a fungujú vo všetkých vašich profiloch.

Obmedzenia Mould King: v profile môže byť iba jeden typ Mould King, a to najviac 3 Mould King 4.0 alebo 1 Mould King 6.0 (zdieľajú bluetoothový vysielač advertisingu v telefóne).

## Huby v programe {#hubs-in-the-program}

- V **Rýchlych prepojeniach** sa každý hub profilu zobrazí v palete ako výstup **Hub** a ako vstup **Hub** pre svoje tlačidlá a senzory. Operácie, ktoré nezvládne žiadny hub profilu, sa neponúkajú. Pozrite si [Blok Hub a porty](/docs/Application/Links/HubsAndPorts).
- V **Logických blokoch** sa v blokoch motorov, svetiel a senzorov vyberá slot hubu a port. Pozrite si [Motory](/docs/Application/BlockBuilder/Blocks/Motors).

## Ďalšie informácie {#read-more}

- [Pridanie a pripojenie hubu](/docs/Application/Hubs/ConnectingHubs)
- [Špecifické funkcie hubov](/docs/Application/Hubs/HubFunctions)
- [Aktualizácia firmvéru](/docs/Application/Hubs/FirmwareUpdating) a [obnovenie firmvéru](/docs/Application/Hubs/RecoveryHubFirmware)
