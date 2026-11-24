---
id: HubsOverview
title: Хаби
description: "Хаби в профілях MOCPilot: підтримувані хаби, слоти хабів і можливості кожного хаба."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Хаби {#hubs}

**Хаб** — це Bluetooth-блок вашої моделі: до його портів підключаються мотори, світло й датчики, а MOCPilot зв’язується з ним через Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Підтримувані хаби {#supported-hubs}

| Хаб | Примітки |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 порти, датчики нахилу та прискорення |
| LEGO® Technic™ Move Hub | у радіокерованих автомобілях LEGO Technic; хід, кермо, світло; [конфігурації](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 порти, потяги та набори City |
| LEGO® Move Hub / BOOST (88006) | 2 вбудовані мотори + 2 порти |
| LEGO® Remote Control (88010) | його кнопки є входами |
| LEGO® WeDo 2.0 Smart Hub | 2 порти |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 портів, світлова матриця, динамік, гіроскоп; Bluetooth або USB; не на iPhone та iPad |
| BuWizz 2.0 | 4 порти, режими потужності |
| BuWizz 3.0 Pro | 6 портів, кольорові світлодіоди портів |
| SBrick, SBrick Plus | 4 порти, керування швидкістю, без керування позицією |
| Mould King 4.0, 6.0 | 4 або 6 портів, лише команди, канали керування |

Повний список із моторами й датчиками: [Підтримувані пристрої](/docs/Introducing/SupportedDevices).

## Слоти хабів {#hub-slots}

У кожному профілі **5 слотів для хабів**:

- **2 слоти безкоштовні**;
- **ще 3** відкриваються кнопкою **Розблокувати слот** (покупка *Додатковий слот хаба*, по одній на слот) або всі одразу з [MocPilot Pro](/docs/Application/Account/Pro).

Придбані слоти належать вашому акаунту й працюють у всіх ваших профілях.

Обмеження Mould King: один тип Mould King на профіль, до 3 Mould King 4.0 або 1 Mould King 6.0 (вони спільно використовують Bluetooth-передавач advertising телефона).

## Хаби в програмі {#hubs-in-the-program}

- У **Швидких зв’язках** кожен хаб профілю з’являється в палітрі як вихід **Хаб**, а також як вхід **Хаб** для своїх кнопок і датчиків. Операції, яких не вміє жоден хаб профілю, не пропонуються. Див. [Блок хаба та порти](/docs/Application/Links/HubsAndPorts).
- У **Логічних блоках** блоки моторів, світла й датчиків приймають слот хаба та порт. Див. [Мотори](/docs/Application/BlockBuilder/Blocks/Motors).

## Докладніше {#read-more}

- [Додавання та підключення хаба](/docs/Application/Hubs/ConnectingHubs)
- [Особливі функції хабів](/docs/Application/Hubs/HubFunctions)
- [Оновлення прошивки](/docs/Application/Hubs/FirmwareUpdating) і [відновлення прошивки](/docs/Application/Hubs/RecoveryHubFirmware)
