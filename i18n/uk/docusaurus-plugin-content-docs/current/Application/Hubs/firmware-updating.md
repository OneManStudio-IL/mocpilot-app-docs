---
id: FirmwareUpdating
title: Оновлення прошивки
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Оновлення прошивки {#firmware-updating}

MOCPilot може оновлювати прошивку підтримуваних хабів LEGO® Powered Up, коли доступна новіша сумісна версія.

Деяким хабам потрібне оновлення, щоб коректно працювати з MOCPilot: нова прошивка виправляє помилки хаба й додає функції, на які спирається застосунок.

## Підтримувані хаби {#supported-hubs}

MOCPilot може оновлювати такі хаби:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Перед початком {#before-you-start}

Переконайтеся, що хаб і ваш телефон, планшет або комп’ютер достатньо заряджені.

Не вимикайте хаб протягом усього оновлення і тримайте пристрій поруч, щоб з’єднання Bluetooth було стабільним. Не закривайте MOCPilot, не вимикайте Bluetooth і не вимикайте хаб, поки завантажується прошивка.

:::warning Важливо
Перерване оновлення може залишити хаб із неповною прошивкою. Тоді перед подальшим використанням хабу може знадобитися відновлення прошивки.
:::

## Запуск оновлення {#starting-the-update}

Під час підключення хаба MOCPilot перевіряє версію його прошивки. Якщо потрібна новіша версія, застосунок показує діалог **Потрібне оновлення прошивки**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Діалог «Потрібне оновлення прошивки»" />

Виберіть **Оновити**, щоб одразу почати оновлення прошивки.

Щоб оновити пізніше, виберіть **Скасувати**. Оновлення можна будь-коли запустити з меню хаба.

## Оновлення пізніше з меню хаба {#updating-later-from-the-hub-menu}

Щоб запустити оновлення самостійно:

1. Відкрийте **Мої Bluetooth хаби**.
2. Знайдіть хаб, який потрібно оновити.
3. Відкрийте меню хаба.
4. Виберіть **Оновити прошивку**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Дія «Оновити прошивку» в контекстному меню хаба" />

## Під час оновлення прошивки {#during-the-firmware-update}

MOCPilot завантажує прошивку в хаб і показує перебіг процесу.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Екран перебігу оновлення прошивки" />

Дочекайтеся завершення завантаження. Поки застосовується нова прошивка, хаб може перезапуститися або ненадовго від’єднатися.

Потім MOCPilot знову шукає хаб. Тримайте хаб поруч і зачекайте, поки застосунок перепідключиться.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Прошивку завантажено, триває пошук хаба" />

## Завершення оновлення {#finishing-the-update}

Коли оновлення завершено, MOCPilot показує підтвердження.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Діалог завершення оновлення прошивки" />

Виберіть **OK**. Хаб перепідключиться, а на його картці з’явиться нова версія прошивки.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Картка хаба з оновленою версією прошивки" />

Тепер можна далі користуватися хабом у MOCPilot.

## Якщо оновлення не вдалося {#if-the-update-fails}

Якщо оновлення не вдалося, MOCPilot показує повідомлення про помилку.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Діалог невдалого оновлення прошивки" />

Спершу вимкніть і знову увімкніть хаб та повторіть оновлення:

1. Вимкніть хаб.
2. Знову увімкніть хаб.
3. Тримайте хаб поруч із пристроєм.
4. Підключіться до хаба в MOCPilot.
5. Знову запустіть оновлення прошивки.

Якщо хаб і далі не реагує як слід, йому може знадобитися відновлення прошивки: див. [Відновлення прошивки хаба](/docs/Application/Hubs/RecoveryHubFirmware/).
