---
id: SupportedDevices
title: Підтримувані хаби, мотори й датчики
description: "Хаби, мотори й датчики, які працюють із MOCPilot."
---

import { SupportedHubsTable, SupportedMotorsTable, SupportedSensorsTable } from '@site/src/components/SupportedDevices';

# Підтримувані пристрої {#supported-devices}

MOCPilot працює з такими хабами, моторами й датчиками. Кожен хаб працює з обома редакторами програм — [Швидкі зв’язки](/docs/Application/Links/LinksIntroducing) і [Логічні блоки](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## Хаби {#hubs}

<SupportedHubsTable />

Примітки:

- Профіль має 5 слотів для хабів: 2 безкоштовні, ще 3 стають доступні після покупки додаткового слота хаба або з [MocPilot Pro](/docs/Application/Account/Pro).
- Хаби **Mould King** лише отримують команди (без датчиків і зворотного зв’язку). У профілі можна використовувати лише один тип Mould King: до 3 хабів Mould King 4.0 або 1 Mould King 6.0.
- Хаб **Robot Inventor** (LEGO® Large Hub) використовує класичний Bluetooth і недоступний на iPhone та iPad.
- Оновлення й відновлення прошивки доступні для Technic Hub, Technic Move Hub, BOOST Move Hub і City Hub. Див. [Оновлення прошивки](/docs/Application/Hubs/FirmwareUpdating).
- Що вміє кожен хаб, крім керування моторами й світлом, описано в розділі [Функції окремих хабів](/docs/Application/Hubs/HubFunctions).

## Мотори {#motors}

<SupportedMotorsTable />

Мотори з енкодером (кутові мотори, Technic L і XL) повідомляють швидкість і положення, тож їх можна використовувати як серво, повертати на задану кількість градусів і переміщувати в задані положення. Прості мотори (мотор потяга, простий середній лінійний мотор) приймають лише швидкість.

## Датчики й світло {#sensors-and-lights}

<SupportedSensorsTable />

Можна також використовувати вбудовані датчики хабів (батарея, нахил, прискорення, температура) і датчики вашого телефона чи планшета. Див. [Датчики телефона](/docs/Application/Dashboard/PhoneSensors).
