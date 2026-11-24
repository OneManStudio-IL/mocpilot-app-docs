---
id: SupportedDevices
title: Поддерживаемые хабы, моторы и датчики
description: "Хабы, моторы и датчики, которые работают с MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Поддерживаемые устройства

MOCPilot работает с этими хабами, моторами и датчиками. Любой хаб работает в обоих редакторах программ — [Быстрых связях](/docs/Application/Links/LinksIntroducing) и [Логических блоках](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Хабы

<SupportedHubsTable />

Примечания:

- В профиле 5 слотов для хабов: 2 бесплатных, ещё 3 открываются покупкой дополнительного слота или с [MocPilot Pro](/docs/Application/Account/Pro).
- Хабы **Mould King** только принимают команды (без датчиков и обратной связи). В профиле можно использовать только один тип Mould King: до 3 хабов Mould King 4.0 или 1 Mould King 6.0.
- Хаб **Robot Inventor** (LEGO® Large Hub) и хаб **SPIKE Prime** (бета, прошивка SPIKE Legacy) используют классический Bluetooth и недоступны на iPhone и iPad. На Windows и Mac их можно подключить и USB-кабелем. См. [Хаб MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub).
- Хаб **SPIKE Essential** (бета) подключается по Bluetooth Low Energy, как Technic Hub: 2 порта, световой индикатор, наклон и ускорение. Ему тоже нужна прошивка SPIKE Legacy; хабы с прошивкой SPIKE App 3 пока не поддерживаются.
- Хабы SPIKE Prime и SPIKE Essential отмечены в приложении меткой **Beta**: их поддержка появилась недавно и проверена ещё не на всех хабах.
- Обновление и восстановление прошивки доступны для Technic Hub, Technic Move Hub, BOOST Move Hub и City Hub. См. [Обновление прошивки](/docs/Application/Hubs/FirmwareUpdating).
- Что умеет каждый хаб, кроме моторов и света, описано в разделе [Функции отдельных хабов](/docs/Application/Hubs/HubFunctions).

## Моторы

<SupportedMotorsTable />

Моторы с энкодером (угловые моторы, Technic L и XL) сообщают скорость и положение, поэтому их можно использовать как серво, поворачивать на заданный угол и ставить в позицию. Простые моторы (моторы поездов, простой средний линейный мотор) принимают только скорость.

## Датчики и свет

<SupportedSensorsTable />

**Датчик силы** работает с хабами Robot Inventor и SPIKE Prime: он измеряет силу нажатия (0–10 Н) и определяет, нажат он, сильно нажат или отпущен. См. [Блоки Robot Inventor: датчик силы](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-force-sensor). С хабами Powered Up (Technic Hub, City Hub, BOOST) он не работает.

Можно использовать и встроенные датчики хабов (заряд батареи, наклон, ускорение, температура), и датчики вашего телефона или планшета. См. [Датчики телефона](/docs/Application/Dashboard/PhoneSensors).
