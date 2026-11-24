---
id: HubsOverview
title: Хабы
description: "Хабы в профилях MOCPilot: поддерживаемые хабы, слоты хабов и возможности каждого хаба."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Хабы

**Хаб** — это Bluetooth-блок вашей модели: к его портам подключаются моторы, свет и датчики, а MOCPilot общается с ним по Bluetooth.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', alignItems: 'end', margin: '16px 0'}}>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: 110}} /><div>Technic Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: 110}} /><div>Technic Move</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: 110}} /><div>City Hub</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/spike_hub_p.webp')} alt="SPIKE Prime Hub" style={{maxWidth: 110}} /><div>SPIKE Prime</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/essential_hub_p.webp')} alt="SPIKE Essential Hub" style={{maxWidth: 110}} /><div>SPIKE Essential</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/buwizz3_hub_p.webp')} alt="BuWizz 3.0 Pro" style={{maxWidth: 110}} /><div>BuWizz 3.0</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/sbrick_hub_p.webp')} alt="SBrick" style={{maxWidth: 110}} /><div>SBrick</div></div>
  <div style={{textAlign: 'center'}}><img src={useBaseUrl('/img/devices/mould_king_4_p.webp')} alt="Mould King" style={{maxWidth: 110}} /><div>Mould King</div></div>
</div>

## Поддерживаемые хабы

| Хаб | Примечания |
|---|---|
| LEGO® Technic™ Hub (88012) | 4 порта, датчики наклона и ускорения |
| LEGO® Technic™ Move Hub | в радиоуправляемых машинах LEGO Technic; ход, руль, свет; [конфигурации](/docs/Application/Hubs/TechnicMoveHubConfigurations) |
| LEGO® Hub / City Hub (88009) | 2 порта, поезда и наборы City |
| LEGO® Move Hub / BOOST (88006) | 2 встроенных мотора + 2 порта |
| LEGO® Remote Control (88010) | его кнопки — входы |
| LEGO® WeDo 2.0 Smart Hub | 2 порта |
| LEGO® Large Hub / [Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (88016) | 6 портов, световая матрица, динамик, гироскоп; Bluetooth или USB; недоступен на iPhone и iPad |
| LEGO® SPIKE™ Prime Hub (45601) | бета; тот же хаб, что и Robot Inventor, с прошивкой SPIKE Legacy; Bluetooth или USB; недоступен на iPhone и iPad |
| LEGO® SPIKE™ Essential Hub (45609) | бета; 2 порта, световой индикатор, наклон и ускорение; Bluetooth Low Energy |
| BuWizz 2.0 | 4 порта, режимы мощности |
| BuWizz 3.0 Pro | 6 портов, цветные светодиоды портов |
| SBrick, SBrick Plus | 4 порта, управление скоростью без управления позицией |
| Mould King 4.0, 6.0 | 4 или 6 портов, только команды, каналы управления |

Полный список с моторами и датчиками: [Поддерживаемые хабы, моторы и датчики](/docs/Introducing/SupportedDevices).

## Слоты хабов

В каждом профиле **5 слотов для хабов**:

- **2 слота бесплатные**;
- **ещё 3** открываются кнопкой **Разблокировать слот** (покупка *дополнительного слота хаба*, по одной на слот) или все сразу с [MocPilot Pro](/docs/Application/Account/Pro).

Купленные слоты привязаны к вашему аккаунту и работают во всех ваших профилях.

Ограничения для Mould King: в профиле может быть только один тип Mould King — до трёх Mould King 4.0 или один Mould King 6.0 (они делят между собой Bluetooth-передатчик рекламных пакетов телефона).

## Хабы в программе

- В **Быстрых связях** каждый хаб профиля появляется в палитре как выход **Хаб**, а также как вход **Хаб** для его кнопок и датчиков. Операции, которые не умеет выполнять ни один хаб профиля, не предлагаются. См. [Блок хаба и порты](/docs/Application/Links/HubsAndPorts).
- В **Логических блоках** блоки моторов, света и датчиков принимают слот хаба и порт. См. [Моторы](/docs/Application/BlockBuilder/Blocks/Motors).

## Подробнее

- [Добавление и подключение хаба](/docs/Application/Hubs/ConnectingHubs)
- [Особые функции хабов](/docs/Application/Hubs/HubFunctions)
- [Обновление прошивки](/docs/Application/Hubs/FirmwareUpdating) и [восстановление прошивки](/docs/Application/Hubs/RecoveryHubFirmware)
